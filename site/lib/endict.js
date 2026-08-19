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
      /* Сначала заголовочные слова, потом формы: у «saw» есть своя статья (пила),
         и она должна победить форму прошедшего времени глагола see. */
      list.forEach(function (e) { course.set(e.w.toLowerCase(), e); });
      list.forEach(function (e) {
        (e.forms || []).forEach(function (f) {
          var k = String(f).toLowerCase();
          if (!course.has(k)) course.set(k, e);
        });
      });
    }
    return course;
  }


  /* Формы, которые нельзя разбирать механически: «does» без этой таблицы
     превращается в «doe» и даёт «самку оленя», «saw» — в пилу, «left» — в
     левый борт. Ключ → [начальная форма, как назвать форму]. */
  var FORMS = {
    am: ['be', 'форма глагола be'], is: ['be', 'форма глагола be'],
    are: ['be', 'форма глагола be'], was: ['be', 'прошедшее время be'],
    were: ['be', 'прошедшее время be'], been: ['be', 'причастие be'],
    being: ['be', 'причастие be'],
    do: null, does: ['do', '3-е лицо ед. ч. глагола do'],
    did: ['do', 'прошедшее время do'], done: ['do', 'причастие do'],
    has: ['have', '3-е лицо ед. ч. глагола have'],
    had: ['have', 'прошедшее время have'], having: ['have', 'причастие have'],
    goes: ['go', '3-е лицо ед. ч. глагола go'], went: ['go', 'прошедшее время go'],
    gone: ['go', 'причастие go'], going: ['go', 'причастие go'],
    said: ['say', 'прошедшее время say'], says: ['say', '3-е лицо ед. ч. глагола say'],
    made: ['make', 'прошедшее время make'], makes: ['make', '3-е лицо ед. ч. глагола make'],
    took: ['take', 'прошедшее время take'], taken: ['take', 'причастие take'],
    got: ['get', 'прошедшее время get'], gotten: ['get', 'причастие get'],
    gave: ['give', 'прошедшее время give'], given: ['give', 'причастие give'],
    came: ['come', 'прошедшее время come'], knew: ['know', 'прошедшее время know'],
    known: ['know', 'причастие know'], saw: ['see', 'прошедшее время see'],
    seen: ['see', 'причастие see'], found: ['find', 'прошедшее время find'],
    left: ['leave', 'прошедшее время leave'], felt: ['feel', 'прошедшее время feel'],
    kept: ['keep', 'прошедшее время keep'], built: ['build', 'прошедшее время build'],
    brought: ['bring', 'прошедшее время bring'], bought: ['buy', 'прошедшее время buy'],
    thought: ['think', 'прошедшее время think'], taught: ['teach', 'прошедшее время teach'],
    caught: ['catch', 'прошедшее время catch'], sought: ['seek', 'прошедшее время seek'],
    fought: ['fight', 'прошедшее время fight'], laid: ['lay', 'прошедшее время lay'],
    won: ['win', 'прошедшее время win'], sang: ['sing', 'прошедшее время sing'],
    flew: ['fly', 'прошедшее время fly'], drove: ['drive', 'прошедшее время drive'],
    rose: ['rise', 'прошедшее время rise'], sold: ['sell', 'прошедшее время sell'],
    began: ['begin', 'прошедшее время begin'], begun: ['begin', 'причастие begin'],
    ran: ['run', 'прошедшее время run'], run: null,
    wrote: ['write', 'прошедшее время write'], written: ['write', 'причастие write'],
    spoke: ['speak', 'прошедшее время speak'], spoken: ['speak', 'причастие speak'],
    grew: ['grow', 'прошедшее время grow'], grown: ['grow', 'причастие grow'],
    held: ['hold', 'прошедшее время hold'], lost: ['lose', 'прошедшее время lose'],
    meant: ['mean', 'прошедшее время mean'], met: ['meet', 'прошедшее время meet'],
    paid: ['pay', 'прошедшее время pay'], put: null, read: null,
    sent: ['send', 'прошедшее время send'], set: null, shown: ['show', 'причастие show'],
    stood: ['stand', 'прошедшее время stand'], told: ['tell', 'прошедшее время tell'],
    understood: ['understand', 'прошедшее время understand'],
    became: ['become', 'прошедшее время become'], chose: ['choose', 'прошедшее время choose'],
    chosen: ['choose', 'причастие choose'], drew: ['draw', 'прошедшее время draw'],
    drawn: ['draw', 'причастие draw'], fell: ['fall', 'прошедшее время fall'],
    held_: null, lay: ['lie', 'прошедшее время lie'], led: ['lead', 'прошедшее время lead'],
    men: ['man', 'множественное число man'], women: ['woman', 'множественное число woman'],
    children: ['child', 'множественное число child'], feet: ['foot', 'множественное число foot'],
    teeth: ['tooth', 'множественное число tooth'], data: null,
  };

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
    /* «couldn’t» → could, «I’ll» → will: сокращённые формы разбираем по частям */
    if (/n't$/.test(w)) out.push(w.slice(0, -3));
    var clit = { "'ll": 'will', "'ve": 'have', "'re": 'be', "'d": 'would', "'m": 'be' };
    Object.keys(clit).forEach(function (c) {
      if (w.length > c.length && w.slice(-c.length) === c) out.push(clit[c]);
    });
    /* притяжательный падеж: «brothers's» → «brothers» → «brother» */
    var base = w.replace(/'s$|s'$/, '');
    if (base !== w) { out.push(base); if (/s$/.test(base)) out.push(base.slice(0, -1)); }
    if (w.indexOf("'") > 0) out.push(w.split("'")[0]);
    if (/ies$/.test(w)) out.push(w.slice(0, -3) + 'y');
    if (/oes$/.test(w)) out.push(w.slice(0, -2));       // heroes → hero
    if (/(ses|ches|shes|xes|zes)$/.test(w)) out.push(w.slice(0, -2));
    if (/s$/.test(w) && !/ss$/.test(w)) out.push(w.slice(0, -1));
    /* Порядок важен: у «using» сначала пробуем «use», иначе получится «us» —
       местоимение «мы»; у «running» — сначала «run», иначе выйдет «rune». */
    if (/(.)\1(ing|ed)$/.test(w)) out.push(w.replace(/(.)\1(ing|ed)$/, '$1'));
    if (/ied$/.test(w)) out.push(w.slice(0, -3) + 'y');
    if (/ing$/.test(w)) { out.push(w.slice(0, -3) + 'e'); out.push(w.slice(0, -3)); }
    if (/ed$/.test(w) && w.length > 3) { out.push(w.slice(0, -1)); out.push(w.slice(0, -2)); }
    /* Степени сравнения отрезаем только у достаточно длинных слов: иначе «west»
       превратится в «we», а «per» — в «pe». */
    if (/est$/.test(w) && w.length > 5) { out.push(w.slice(0, -3)); out.push(w.slice(0, -2)); }
    if (/er$/.test(w) && w.length > 4) { out.push(w.slice(0, -2)); out.push(w.slice(0, -1)); }
    if (/ly$/.test(w)) out.push(w.slice(0, -2));
    /* степени сравнения: easier → easy, hotter → hot */
    if (/ier$/.test(w)) out.push(w.slice(0, -3) + 'y');
    if (/iest$/.test(w)) out.push(w.slice(0, -4) + 'y');
    if (/(.)\1(er|est)$/.test(w)) out.push(w.replace(/(.)\1(er|est)$/, '$1'));
    /* составные через дефис: словарь хранит их слитно или через пробел */
    if (w.indexOf('-') > 0) { out.push(w.replace(/-/g, '')); out.push(w.replace(/-/g, ' ')); }
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

  /* exact — статья найдена на само слово (или на объявленную в словаре форму),
     а не подобрана разбором окончания. Такому ответу можно верить сразу, не
     дожидаясь шарда общего словаря; разбору окончания — нет: у «thing» при
     незагруженном шарде отрезается -ing и получается артикль «the». */
  function courseHit(e, note, exact) {
    return { w: e.w, ru: e.ru, ipa: e.ipa, pos: e.pos, ex: e.ex, exru: e.exru,
             topic: e.topic, note: note, exact: !!exact, src: 'course' };
  }

  /* Статья общего словаря; отсылки вида «прош. вр. и прич. от write» или
     «= programme» — это не перевод, разворачиваем их до статьи-источника. */
  function generalHit(key, note) {
    var g = cache[key[0]] && cache[key[0]][key];
    if (!g) return null;
    var ru = g.ru;
    var ref = /^[а-яё.\s-]{0,26}от\s+([a-z][a-z-]*)/i.exec(ru)
      || /^=\s*([a-z][a-z-]*)(?:\s+(?:I{1,3}|IV|V))?[\s\d,.;]*$/i.exec(ru);
    if (ref) {
      var src = ref[1].toLowerCase();
      var base = cache[src[0]] && cache[src[0]][src];
      if (base && base.ru && base.ru !== ru) {
        ru = base.ru;
        note = note || ('то же, что ' + src);
      }
    }
    return { w: key, ru: ru, ipa: g.ipa, pos: g.pos, note: note, src: 'general' };
  }

  /* Синхронный поиск: отвечает только если нужный шард уже загружен.
     Порядок важен и разобран на живых ошибках:
       1) статья словаря курса на само слово (или на объявленную в ней форму) —
          «left» у нас левый борт, а не прошедшее время leave;
       2) статья общего словаря на само слово — иначе «bed» разберётся как
          форма «be», а «thing» как «the»;
       3) и только потом разбор словоформы — сначала по словарю курса. */
  function lookupSync(word) {
    var raw = String(word).toLowerCase().replace(/[’‘]/g, "'").replace(/^[^a-z']+|[^a-z']+$/g, '');
    var idx = courseIndex();
    if (idx.has(raw)) return courseHit(idx.get(raw), '', true);

    /* Таблица неправильных форм — разобранные вручную случаи, она сильнее
       статьи общего словаря на то же написание: «fell» это прошедшее время
       fall, а не «шкура», «laid» — от lay, а не «светский». */
    var fixed = FORMS[raw];
    var note = '';
    if (fixed) {
      note = fixed[1];
      if (idx.has(fixed[0])) return courseHit(idx.get(fixed[0]), note, true);
      var byForm = generalHit(fixed[0], note);
      if (byForm) return byForm;
    }
    var exact = generalHit(raw, '');
    if (exact) return exact;

    var cand = forms(word);
    if (fixed) {
      cand = [fixed[0]].concat(cand.filter(function (c) { return c !== raw; }));
    }
    for (var i = 0; i < cand.length; i++) {
      if (idx.has(cand[i])) return courseHit(idx.get(cand[i]), note, false);
    }
    for (var j = 0; j < cand.length; j++) {
      var hit = generalHit(cand[j], note);
      if (hit) return hit;
    }
    return null;
  }

  function lookup(word) {
    var hit = lookupSync(word);
    /* разбор окончания принимаем только после загрузки шардов: вдруг слово есть
       в общем словаре как есть */
    if (hit && (hit.exact || hit.src === 'general')) return Promise.resolve(hit);
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
