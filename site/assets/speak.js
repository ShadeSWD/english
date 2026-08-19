/* Произношение и чтение вслух.
 *
 * Что делает скрипт:
 *   1) размечает английский текст внутри элементов с классом `en`:
 *      каждое предложение оборачивается в <span class="s">, каждое слово —
 *      в <span class="w">;
 *   2) по клику на слово произносит его через Web Speech API и показывает
 *      карточку: транскрипция, часть речи, перевод, пример;
 *   3) к каждому блочному элементу `en` добавляет панель чтения вслух:
 *      чтение по предложениям с подсветкой, скорость, пауза, стоп;
 *   4) если английского голоса в системе нет — выводит понятное сообщение
 *      и не ломает остальную страницу (карточки слов продолжают работать).
 *
 * Словарь курса лежит в vocab.js (глобальный массив VOCAB).
 */
'use strict';
(function () {
  const SS = window.speechSynthesis;
  const HAS_API = !!(SS && window.SpeechSynthesisUtterance);
  let voice = null;
  let voiceChecked = false;

  /* ---------- выбор голоса ---------- */
  function pickVoice() {
    if (!HAS_API) return null;
    let list = [];
    try { list = SS.getVoices() || []; } catch (e) { list = []; }
    const en = list.filter((v) => /^en(-|_|$)/i.test(v.lang || ''));
    if (!en.length) return null;
    const by = (re) => en.find((v) => re.test(v.lang.replace('_', '-')));
    return by(/^en-GB/i) || by(/^en-US/i) || en[0];
  }

  function warnNoVoice() {
    if (document.querySelector('.voice-warn')) return;
    const box = document.createElement('div');
    box.className = 'voice-warn';
    box.innerHTML = HAS_API
      ? '<b>Английский голос в системе не найден.</b> Страница работает: '
        + 'карточки слов, переводы и тренажёры доступны, но звука не будет. '
        + 'Установите английский голос в настройках системы (Windows: «Параметры → '
        + 'Время и язык → Речь», Android/iOS: языки синтеза речи) или откройте сайт '
        + 'в другом браузере.'
      : '<b>Браузер не поддерживает синтез речи (Web Speech API).</b> '
        + 'Всё остальное на странице работает; для озвучивания откройте сайт в '
        + 'Chrome, Edge, Safari или Firefox свежих версий.';
    const main = document.querySelector('main') || document.body;
    main.insertBefore(box, main.firstChild);
  }

  function ensureVoice() {
    voice = pickVoice();
    if (!voiceChecked) {
      voiceChecked = true;
      if (!voice) warnNoVoice();
    }
    return voice;
  }

  if (HAS_API && typeof SS.addEventListener === 'function') {
    SS.addEventListener('voiceschanged', () => { voice = pickVoice(); });
  }

  /* ---------- произнесение ---------- */
  let rate = parseFloat(localStorage.getItem('en.rate') || '0.9') || 0.9;

  function speak(text, opts) {
    opts = opts || {};
    if (!HAS_API) { if (!voiceChecked) { voiceChecked = true; warnNoVoice(); } return null; }
    const u = new SpeechSynthesisUtterance(text);
    const v = voice || pickVoice();
    if (v) u.voice = v;
    u.lang = (v && v.lang) || 'en-GB';
    u.rate = opts.rate || rate;
    u.pitch = 1;
    if (opts.onend) u.onend = opts.onend;
    if (opts.onstart) u.onstart = opts.onstart;
    u.onerror = function () { if (opts.onend) opts.onend(); };
    try { SS.speak(u); } catch (e) { if (opts.onend) opts.onend(); }
    return u;
  }

  function cancel() { if (HAS_API) { try { SS.cancel(); } catch (e) { /* нет синтеза */ } } }

  /* ---------- словарь ---------- */
  const dict = new Map();
  function indexDict() {
    const list = window.VOCAB || [];
    list.forEach((e) => {
      dict.set(e.w.toLowerCase(), e);
      (e.forms || []).forEach((f) => { if (!dict.has(f)) dict.set(f.toLowerCase(), e); });
    });
  }

  /* Простая нормализация словоформы: множественное число, -ed, -ing.
     Запасной вариант: если на странице нет endict.js, разбираем формы сами.
     Обычный путь — EnDict.lookupSync: там та же таблица форм, что и в общем
     словаре, поэтому «is» не превращается в «I», а «does» — в самку оленя. */
  function lookup(word) {
    const w = String(word || '').toLowerCase().replace(/[’']s$/, '');
    if (dict.has(w)) return dict.get(w);
    const tries = [];
    if (/ies$/.test(w)) tries.push(w.slice(0, -3) + 'y');
    if (/(ses|ches|shes|xes|zes)$/.test(w)) tries.push(w.slice(0, -2));
    if (/s$/.test(w)) tries.push(w.slice(0, -1));
    if (/ing$/.test(w)) { tries.push(w.slice(0, -3)); tries.push(w.slice(0, -3) + 'e'); }
    if (/ed$/.test(w)) { tries.push(w.slice(0, -2)); tries.push(w.slice(0, -1)); }
    if (/ied$/.test(w)) tries.push(w.slice(0, -3) + 'y');
    if (/(.)\1(ing|ed)$/.test(w)) tries.push(w.replace(/(.)\1(ing|ed)$/, '$1'));
    if (/er$/.test(w)) { tries.push(w.slice(0, -2)); tries.push(w.slice(0, -1)); }
    if (/est$/.test(w)) { tries.push(w.slice(0, -3)); tries.push(w.slice(0, -2)); }
    for (const t of tries) if (dict.has(t)) return dict.get(t);
    return null;
  }

  /* ---------- карточка слова ---------- */
  let card = null;
  function closeCard() { if (card) { card.remove(); card = null; } }

  /* Ответ общего словаря кластера: он мог найтись сразу (шард уже в памяти)
     или подгружается по сети — оформление в обоих случаях одно. */
  function fillGeneral(target, g, word) {
    const put = (found) => {
      if (target !== card) return;                   // карточку уже закрыли
      const slot = target.querySelector('.nodict');
      if (!slot) return;
      if (!found) {
        slot.textContent = 'Слова нет ни в словаре курса, ни в общем словаре — произношение всё равно доступно.';
        return;
      }
      slot.className = 'ru';
      slot.textContent = found.ru;
      if (found.ipa && !target.querySelector('.ipa')) {
        target.querySelector('.hw').insertAdjacentHTML('afterend',
          `<span class="ipa">[${esc(found.ipa)}]</span>`);
      }
      if (found.pos && !target.querySelector('.pos')) {
        (target.querySelector('.ipa') || target.querySelector('.hw'))
          .insertAdjacentHTML('afterend', `<span class="pos">${esc(found.pos)}</span>`);
      }
      slot.insertAdjacentHTML('beforebegin',
        `<div class="ex" style="color:#6b6b74">${esc(found.note || 'общий словарь кластера')}</div>`);
    };
    if (g) put(g);
    else if (window.EnDict) window.EnDict.lookup(word).then(put);
    else put(null);
  }

  function showCard(el, word) {
    closeCard();
    /* Сначала словарь курса: там значение из наших текстов, пример и тема.
       Сразу показываем только точное попадание — разбор окончания без общего
       словаря может ошибиться, поэтому за ним идём асинхронно. */
    const hit = window.EnDict ? window.EnDict.lookupSync(word) : null;
    const e = (hit && hit.src === 'course' && hit.exact) ? hit : (window.EnDict ? null : lookup(word));
    const ready = null;
    card = document.createElement('div');
    card.className = 'wordcard';
    const head = `<span class="x" title="закрыть">&times;</span><span class="hw">${esc(e ? e.w : word)}</span>`
      + (e && e.ipa ? `<span class="ipa">[${esc(e.ipa)}]</span>` : '')
      + (e && e.pos ? `<span class="pos">${esc(e.pos)}</span>` : '');
    let body;
    if (e) {
      body = (e.note ? `<div class="ex" style="color:#6b6b74">${esc(e.note)}</div>` : '')
        + `<div class="ru">${esc(e.ru)}</div>`
        + (e.ex ? `<div class="ex">${esc(e.ex)}<i>${esc(e.exru || '')}</i></div>` : '');
    } else {
      /* Слова нет в словаре курса — спрашиваем общий словарь кластера
         (45 тысяч статей, подгружается шардом по первой букве). */
      body = '<div class="nodict">ищу в общем словаре…</div>';
    }
    const links = e && e.topic
      ? `<a class="btn" href="vocab?q=${encodeURIComponent(e.w)}">в словаре</a>` : '';
    card.innerHTML = head + body
      + `<div class="row2"><button class="btn speak-again" type="button">🔊 повторить</button>${links}</div>`;
    if (!e) fillGeneral(card, ready, word);
    document.body.appendChild(card);
    const r = el.getBoundingClientRect();
    const top = r.bottom + window.scrollY + 6;
    let left = r.left + window.scrollX;
    const w = card.offsetWidth;
    const maxLeft = window.scrollX + document.documentElement.clientWidth - w - 8;
    if (left > maxLeft) left = Math.max(window.scrollX + 8, maxLeft);
    card.style.top = top + 'px';
    card.style.left = left + 'px';
    card.querySelector('.x').addEventListener('click', closeCard);
    card.querySelector('.speak-again').addEventListener('click', () => {
      cancel(); ensureVoice(); speak(e ? e.w : word);
    });
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g,
      (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }

  document.addEventListener('click', (ev) => {
    if (card && !card.contains(ev.target) && !ev.target.closest('.w, .wlbl, .en-w')) closeCard();
  });
  document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') { closeCard(); cancel(); } });

  /* ---------- разметка текста ---------- */
  const SKIP = new Set(['SCRIPT', 'STYLE', 'CODE', 'TEXTAREA', 'INPUT', 'BUTTON', 'SELECT']);
  const ABBR = /(^|\s)(Mr|Mrs|Ms|Dr|St|No|vs|e\.g|i\.e|etc|Fig)\.$/i;

  function textNodes(root) {
    const out = [];
    const it = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (!n.nodeValue || !/\S/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        for (let p = n.parentNode; p && p !== root; p = p.parentNode) {
          if (p.nodeType !== 1) continue;
          if (SKIP.has(p.tagName) || p.classList.contains('ru')
              || p.classList.contains('no-en') || p.hasAttribute('data-noen')) {
            return NodeFilter.FILTER_REJECT;
          }
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    let n; while ((n = it.nextNode())) out.push(n);
    return out;
  }

  /* Режет строку на куски-предложения, сохраняя все символы. */
  function cutSentences(t) {
    const parts = [];
    let start = 0;
    for (let i = 0; i < t.length; i++) {
      if ('.!?…'.indexOf(t[i]) < 0) continue;
      let j = i + 1;
      while (j < t.length && '.!?…”"’\')'.indexOf(t[j]) >= 0) j++;
      const head = t.slice(start, j);
      if (ABBR.test(head)) { i = j - 1; continue; }
      const rest = t.slice(j);
      if (rest && !/^\s/.test(rest)) { i = j - 1; continue; }
      const sp = rest.match(/^\s+/);
      const end = j + (sp ? sp[0].length : 0);
      parts.push(t.slice(start, end));
      start = end; i = end - 1;
    }
    if (start < t.length) parts.push(t.slice(start));
    return parts;
  }

  const ENDS = /[.!?…]["”’')]*\s*$/;
  const WORD = /[A-Za-z][A-Za-z'’-]*/g;

  function markup(root) {
    if (!root || root.dataset.marked === '1') return;
    root.dataset.marked = '1';
    let sid = root.dataset.sidBase ? +root.dataset.sidBase : 0;
    textNodes(root).forEach((node) => {
      const chunks = cutSentences(node.nodeValue);
      const frag = document.createDocumentFragment();
      chunks.forEach((chunk) => {
        const s = document.createElement('span');
        s.className = 's';
        s.dataset.sid = String(sid);
        s.appendChild(wrapWords(chunk));
        frag.appendChild(s);
        if (ENDS.test(chunk)) sid++;
      });
      node.parentNode.replaceChild(frag, node);
    });
  }

  function wrapWords(text) {
    const frag = document.createDocumentFragment();
    let last = 0, m;
    WORD.lastIndex = 0;
    while ((m = WORD.exec(text))) {
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      const sp = document.createElement('span');
      sp.className = 'w';
      sp.textContent = m[0];
      frag.appendChild(sp);
      last = m.index + m[0].length;
    }
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    return frag;
  }

  /* ---------- клик по слову ---------- */
  document.addEventListener('click', (ev) => {
    const w = ev.target.closest('.w, .en-w');
    if (!w) return;
    const word = (w.dataset.word || w.textContent || '').trim();
    if (!word) return;
    cancel(); ensureVoice(); speak(word);
    document.querySelectorAll('.w.said').forEach((x) => x.classList.remove('said'));
    w.classList.add('said');
    showCard(w, word);
  });

  /* ---------- чтение блока вслух ---------- */
  function sentencesOf(block) {
    const map = new Map();
    block.querySelectorAll('.s').forEach((s) => {
      const id = s.dataset.sid;
      if (!map.has(id)) map.set(id, []);
      map.get(id).push(s);
    });
    return [...map.values()].map((els) => ({
      els, text: els.map((e) => e.textContent).join(''),
    })).filter((s) => /[A-Za-z]/.test(s.text));
  }

  function addReadbar(block) {
    const bar = document.createElement('div');
    bar.className = 'readbar';
    bar.innerHTML = '<button class="btn speak" type="button">🔊 прочитать</button>'
      + '<button class="btn pause" type="button" disabled>пауза</button>'
      + '<button class="btn stop" type="button" disabled>стоп</button>'
      + '<label>скорость <input type="range" min="0.5" max="1.3" step="0.05">'
      + '<span class="rate"></span></label>';
    block.parentNode.insertBefore(bar, block);
    const bSpeak = bar.querySelector('.speak');
    const bPause = bar.querySelector('.pause');
    const bStop = bar.querySelector('.stop');
    const slider = bar.querySelector('input[type=range]');
    const out = bar.querySelector('.rate');
    slider.value = String(rate);
    out.textContent = rate.toFixed(2) + '×';
    slider.addEventListener('input', () => {
      rate = parseFloat(slider.value);
      out.textContent = rate.toFixed(2) + '×';
      localStorage.setItem('en.rate', String(rate));
    });

    let queue = [], idx = -1, playing = false;

    function light(i) {
      block.querySelectorAll('.s.on').forEach((s) => s.classList.remove('on'));
      if (i >= 0 && queue[i]) queue[i].els.forEach((e) => e.classList.add('on'));
    }
    function stop() {
      cancel(); playing = false; idx = -1; light(-1);
      bSpeak.textContent = '🔊 прочитать';
      bPause.disabled = true; bStop.disabled = true; bPause.textContent = 'пауза';
    }
    function next() {
      idx++;
      if (idx >= queue.length) { stop(); return; }
      light(idx);
      speak(queue[idx].text, { onend: () => { if (playing) next(); } });
    }
    bSpeak.addEventListener('click', () => {
      if (playing) { stop(); return; }
      ensureVoice();
      queue = sentencesOf(block);
      if (!queue.length) return;
      playing = true; idx = -1;
      bSpeak.textContent = '■ остановить';
      bPause.disabled = false; bStop.disabled = false;
      next();
    });
    bPause.addEventListener('click', () => {
      if (!HAS_API || !playing) return;
      if (SS.paused) { SS.resume(); bPause.textContent = 'пауза'; }
      else { SS.pause(); bPause.textContent = 'продолжить'; }
    });
    bStop.addEventListener('click', stop);
    window.addEventListener('beforeunload', () => cancel());
  }

  /* ---------- запуск ---------- */
  function init() {
    indexDict();
    document.querySelectorAll('.en').forEach((el) => {
      markup(el);
      /* панель чтения — только у самостоятельных блоков текста:
         в ячейке таблицы или в строке она сломала бы вёрстку */
      const BLOCK = ['DIV', 'P', 'SECTION', 'ARTICLE', 'BLOCKQUOTE'];
      if (BLOCK.indexOf(el.tagName) >= 0 && !el.classList.contains('nobar')
          && (el.textContent || '').trim().length > 55) addReadbar(el);
    });
    /* подписи на иллюстрациях: <g class="wlbl" data-word="bow"> */
    document.querySelectorAll('svg .wlbl').forEach((g) => {
      g.addEventListener('click', () => {
        const word = g.dataset.word || (g.querySelector('text') || {}).textContent || '';
        if (!word) return;
        cancel(); ensureVoice(); speak(word);
        showCard(g, word.trim());
      });
    });
    if (HAS_API) setTimeout(ensureVoice, 900); else ensureVoice();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.EN = {
    speak, cancel, lookup, markup, dict,
    voiceOk: () => !!(HAS_API && pickVoice()),
    get rate() { return rate; },
  };
})();
