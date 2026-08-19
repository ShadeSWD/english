/* endict.js — библиотека англо-русского словаря кластера.
 *
 * Словарь общий: 45 794 статьи (Мюллер, электронное издание mueller7), разбит
 * на шарды по первой букве и отдаётся как статический API:
 *     GET /english/api/en/<буква>.json  →  {"слово": {"ru": "…", "ipa": "…", "pos": "…"}}
 *     GET /english/api/en/meta.json     →  сводка и происхождение данных
 * Шард подгружается один раз при первом обращении к букве и остаётся в памяти.
 *
 * Использование на любом сайте кластера:
 *     <script src="/english/lib/endict.js"></script>
 *     EnDict.lookup('propellers').then(e => console.log(e.ru));
 *
 * Если на странице есть словарь курса (глобальный массив VOCAB), он имеет
 * приоритет: там перевод дан в судостроительном значении, с примером и темой.
 */
'use strict';
(function (root) {
  var BASE = (root.EN_DICT_BASE || '/english/api/en/');
  var cache = {};        // буква → словарь
  var pending = {};      // буква → Promise
  var course = null;     // индекс словаря курса

  function courseIndex() {
    if (course) return course;
    course = new Map();
    var list = root.VOCAB;
    if (Array.isArray(list)) {
      list.forEach(function (e) {
        course.set(e.w.toLowerCase(), e);
        (e.forms || []).forEach(function (f) { course.set(String(f).toLowerCase(), e); });
      });
    }
    return course;
  }

  /* Кандидаты словоформы: словарь хранит начальные формы, а в тексте стоят
     склонённые и спрягаемые. Порядок важен — сначала точное совпадение. */
  function forms(word) {
    var w = String(word).toLowerCase()
      .replace(/[’‘]/g, "'")
      .replace(/^[^a-z']+|[^a-z']+$/g, '');
    var out = [w];
    var contr = {
      "i'm": 'be', "it's": 'be', "he's": 'be', "she's": 'be', "that's": 'be',
      "you're": 'be', "we're": 'be', "they're": 'be', "isn't": 'be', "aren't": 'be',
      "don't": 'do', "doesn't": 'do', "didn't": 'do', "can't": 'can',
      "won't": 'will', "i've": 'have', "we've": 'have', "they've": 'have',
      "i'll": 'will', "we'll": 'will', "it'll": 'will', "let's": 'let',
    };
    if (contr[w]) out.push(contr[w]);
    if (w.indexOf("'") > 0) out.push(w.split("'")[0]);
    if (/ies$/.test(w)) out.push(w.slice(0, -3) + 'y');
    if (/(ses|ches|shes|xes|zes)$/.test(w)) out.push(w.slice(0, -2));
    if (/s$/.test(w) && !/ss$/.test(w)) out.push(w.slice(0, -1));
    if (/ing$/.test(w)) { out.push(w.slice(0, -3)); out.push(w.slice(0, -3) + 'e'); }
    if (/ied$/.test(w)) out.push(w.slice(0, -3) + 'y');
    if (/ed$/.test(w)) { out.push(w.slice(0, -2)); out.push(w.slice(0, -1)); }
    if (/(.)\1(ing|ed)$/.test(w)) out.push(w.replace(/(.)\1(ing|ed)$/, '$1'));
    if (/est$/.test(w)) { out.push(w.slice(0, -3)); out.push(w.slice(0, -2)); }
    if (/er$/.test(w)) { out.push(w.slice(0, -2)); out.push(w.slice(0, -1)); }
    if (/ly$/.test(w)) out.push(w.slice(0, -2));
    return out.filter(function (x, i) { return x && out.indexOf(x) === i; });
  }

  function shard(letter) {
    if (cache[letter]) return Promise.resolve(cache[letter]);
    if (pending[letter]) return pending[letter];
    pending[letter] = fetch(BASE + letter + '.json')
      .then(function (r) { return r.ok ? r.json() : {}; })
      .catch(function () { return {}; })
      .then(function (data) { cache[letter] = data; return data; });
    return pending[letter];
  }

  /* Синхронный поиск: отвечает только если нужный шард уже загружен. */
  function lookupSync(word) {
    var cand = forms(word);
    var idx = courseIndex();
    for (var i = 0; i < cand.length; i++) {
      if (idx.has(cand[i])) {
        var e = idx.get(cand[i]);
        return { w: e.w, ru: e.ru, ipa: e.ipa, pos: e.pos, ex: e.ex, exru: e.exru,
                 topic: e.topic, src: 'course' };
      }
    }
    for (var j = 0; j < cand.length; j++) {
      var l = cand[j][0];
      if (cache[l] && cache[l][cand[j]]) {
        var g = cache[l][cand[j]];
        return { w: cand[j], ru: g.ru, ipa: g.ipa, pos: g.pos, src: 'general' };
      }
    }
    return null;
  }

  function lookup(word) {
    var hit = lookupSync(word);
    if (hit) return Promise.resolve(hit);
    var cand = forms(word);
    var letters = [];
    cand.forEach(function (c) {
      var l = c[0];
      if (l && letters.indexOf(l) < 0) letters.push(l);
    });
    return Promise.all(letters.map(shard)).then(function () {
      return lookupSync(word);
    });
  }

  function meta() {
    return fetch(BASE + 'meta.json').then(function (r) { return r.ok ? r.json() : null; })
      .catch(function () { return null; });
  }

  root.EnDict = {
    lookup: lookup,
    lookupSync: lookupSync,
    forms: forms,
    preload: function (letters) { return Promise.all(String(letters).split('').map(shard)); },
    meta: meta,
    base: function (url) { if (url) BASE = url; return BASE; },
  };
})(window);
