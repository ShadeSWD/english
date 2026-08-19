/* Тренажёры с автопроверкой.
 *
 * Общая часть: очередь заданий, счёт, автопроверка с показом правильного
 * ответа и объяснения, накопление статистики по разделам в localStorage,
 * интервальное повторение для карточек (система Лейтнера).
 *
 * Каждый тренажёр вызывается одной строкой на своей странице, например
 *   DRILL.gaps(document.getElementById('drill'), items, {section: 'gaps'});
 */
'use strict';
(function () {
  const LS = window.localStorage;

  /* ---------- хранилище ---------- */
  function read(key, def) {
    try { const v = LS.getItem(key); return v ? JSON.parse(v) : def; }
    catch (e) { return def; }
  }
  function write(key, val) {
    try { LS.setItem(key, JSON.stringify(val)); } catch (e) { /* приватный режим */ }
  }

  const STATS = 'en.stats';
  function stats() { return read(STATS, {}); }
  function bump(section, right) {
    const s = stats();
    const r = s[section] || { asked: 0, right: 0, ts: 0 };
    r.asked += 1; if (right) r.right += 1; r.ts = Date.now();
    s[section] = r; write(STATS, s);
    return r;
  }
  function resetSection(section) {
    const s = stats(); delete s[section]; write(STATS, s);
  }

  /* ---------- интервальное повторение (Лейтнер) ---------- */
  const SRS = 'en.srs';
  const STEP = [0, 1, 2, 4, 8, 16];   /* через сколько дней спрашивать снова */
  const DAY = 86400000;
  function srs() { return read(SRS, {}); }
  function srsUpdate(word, right) {
    const s = srs();
    const r = s[word] || { box: 0, due: 0, seen: 0 };
    r.box = right ? Math.min(r.box + 1, STEP.length - 1) : 0;
    r.due = Date.now() + STEP[r.box] * DAY;
    r.seen += 1;
    s[word] = r; write(SRS, s);
    return r;
  }
  /* Слова к повторению: сперва просроченные, затем новые, затем остальные. */
  function srsPick(list, n) {
    const s = srs(), now = Date.now();
    const due = [], fresh = [], later = [];
    list.forEach((e) => {
      const r = s[e.w];
      if (!r) fresh.push(e);
      else if (r.due <= now) due.push(e);
      else later.push(e);
    });
    due.sort((a, b) => (s[a.w].due - s[b.w].due));
    shuffle(fresh);
    return due.concat(fresh, later).slice(0, n);
  }

  /* ---------- утилиты ---------- */
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function sample(a, n, except) {
    const pool = a.filter((x) => x !== except);
    shuffle(pool);
    return pool.slice(0, n);
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g,
      (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }
  function say(text) { if (window.EN) window.EN.speak(text); }
  function vocab(filter) {
    const list = (window.VOCAB || []).filter((e) => !filter || filter(e));
    return list;
  }

  /* ---------- каркас тренажёра ---------- */
  function Runner(host, opts) {
    this.host = host;
    this.section = opts.section;
    this.title = opts.title || 'Тренажёр';
    this.total = opts.total || 10;
    this.i = 0;
    this.right = 0;
    this.answered = false;
    this.build();
  }
  Runner.prototype.build = function () {
    this.host.innerHTML = `
      <div class="drill">
        <h3>${esc(this.title)}</h3>
        <div class="progressbar"><i style="width:0"></i></div>
        <div class="stats">
          <span>задание <b class="n">1</b> из <b>${this.total}</b></span>
          <span>верно <b class="ok">0</b></span>
          <span class="all"></span>
        </div>
        <div class="body"></div>
        <div class="fbslot"></div>
        <div class="row nav"></div>
      </div>`;
    this.body = this.host.querySelector('.body');
    this.fbslot = this.host.querySelector('.fbslot');
    this.nav = this.host.querySelector('.nav');
    this.bar = this.host.querySelector('.progressbar i');
    this.showAll();
  };
  Runner.prototype.showAll = function () {
    const r = stats()[this.section];
    const el = this.host.querySelector('.all');
    el.innerHTML = r
      ? `всего по разделу: <b>${r.right}</b> из <b>${r.asked}</b>`
      : 'по разделу пока нет статистики';
  };
  Runner.prototype.head = function () {
    this.host.querySelector('.n').textContent = String(Math.min(this.i + 1, this.total));
    this.host.querySelector('.ok').textContent = String(this.right);
    this.bar.style.width = (100 * this.i / this.total) + '%';
  };
  /* Показать вердикт и кнопку «дальше». */
  Runner.prototype.verdict = function (ok, correct, why) {
    if (this.answered) return;
    this.answered = true;
    if (ok) this.right += 1;
    bump(this.section, ok);
    const fb = document.createElement('div');
    fb.className = 'fb ' + (ok ? 'ok' : 'bad');
    fb.innerHTML = (ok ? '<b>Верно.</b> ' : '<b>Неверно.</b> ')
      + (correct ? 'Правильный ответ: <b>' + esc(correct) + '</b>.' : '')
      + (why ? '<div class="why">' + why + '</div>' : '');
    this.fbslot.appendChild(fb);
    this.showAll();
    this.head();
    const b = document.createElement('button');
    b.className = 'btn primary';
    b.type = 'button';
    b.textContent = this.i + 1 >= this.total ? 'итог' : 'дальше →';
    b.addEventListener('click', () => { this.i += 1; this.next(); });
    this.nav.appendChild(b);
    b.focus();
  };
  Runner.prototype.next = function () {
    this.fbslot.innerHTML = '';
    this.nav.innerHTML = '';
    this.answered = false;
    this.head();
    if (this.i >= this.total) { this.finish(); return; }
    this.render(this.body, this.i);
  };
  Runner.prototype.finish = function () {
    this.bar.style.width = '100%';
    const pct = Math.round(100 * this.right / this.total);
    const mark = pct >= 90 ? 'отлично' : pct >= 75 ? 'хорошо'
      : pct >= 50 ? 'удовлетворительно' : 'стоит повторить тему';
    this.body.innerHTML = `<div class="fb ok"><b>Готово: ${this.right} из ${this.total}</b>
      (${pct}%) — ${mark}. Результат сохранён и учитывается на странице «Тренажёры».</div>`;
    const again = document.createElement('button');
    again.className = 'btn primary'; again.type = 'button'; again.textContent = 'ещё подход';
    again.addEventListener('click', () => { this.i = 0; this.right = 0; this.start(); });
    this.nav.appendChild(again);
    const clear = document.createElement('button');
    clear.className = 'btn'; clear.type = 'button'; clear.textContent = 'сбросить статистику раздела';
    clear.addEventListener('click', () => { resetSection(this.section); this.showAll(); });
    this.nav.appendChild(clear);
  };
  Runner.prototype.start = function () { this.next(); };

  /* ---------- 1. карточки «слово ↔ перевод» ---------- */
  function cards(host, opts) {
    opts = opts || {};
    const list = vocab(opts.filter);
    const r = new Runner(host, {
      section: opts.section || 'cards',
      title: opts.title || 'Карточки с интервальным повторением',
      total: Math.min(opts.total || 10, list.length),
    });
    let queue = [];
    r.render = function (body, i) {
      const e = queue[i];
      const back = opts.mode === 'ru2en' || (opts.mode === 'mix' && i % 2 === 1);
      const face = back ? e.ru : e.w;
      const sub = back ? 'переведите на английский' : 'что это значит по-русски?';
      body.innerHTML = `
        <div class="cardface"><span class="face">${esc(face)}</span>
          <span class="sub">${sub}</span></div>
        <div class="row">
          <button class="btn show" type="button">показать ответ</button>
          ${back ? '' : '<button class="btn hear" type="button">🔊 произнести</button>'}
        </div>`;
      const showBtn = body.querySelector('.show');
      const hear = body.querySelector('.hear');
      if (hear) hear.addEventListener('click', () => say(e.w));
      if (!back) say(e.w);
      showBtn.addEventListener('click', () => {
        body.querySelector('.cardface').innerHTML =
          `<span>${esc(e.w)}</span><span class="ipa">[${esc(e.ipa)}]</span>`
          + `<span class="sub">${esc(e.ru)} · ${esc(e.pos)}</span>`;
        body.querySelector('.row').innerHTML = '';
        const known = document.createElement('button');
        known.className = 'btn primary'; known.type = 'button'; known.textContent = 'знал';
        const nope = document.createElement('button');
        nope.className = 'btn'; nope.type = 'button'; nope.textContent = 'не знал';
        body.querySelector('.row').append(known, nope);
        known.addEventListener('click', () => {
          srsUpdate(e.w, true);
          r.verdict(true, e.w + ' — ' + e.ru, 'Слово уйдёт на повторение позже.');
        });
        nope.addEventListener('click', () => {
          srsUpdate(e.w, false);
          r.verdict(false, e.w + ' — ' + e.ru,
            'Пример: <i>' + esc(e.ex) + '</i> — ' + esc(e.exru)
            + '<br>Слово вернётся в ближайшем подходе.');
        });
      });
    };
    const origStart = r.start.bind(r);
    r.start = function () { queue = srsPick(list, r.total); origStart(); };
    r.start();
    return r;
  }

  /* ---------- 2. пропущенное слово ---------- */
  function gaps(host, items, opts) {
    opts = opts || {};
    const pool = shuffle(items.slice());
    const r = new Runner(host, {
      section: opts.section || 'gaps',
      title: opts.title || 'Пропущенное слово',
      total: Math.min(opts.total || 10, pool.length),
    });
    r.render = function (body, i) {
      const it = pool[i];
      const opt = shuffle(it.opts.slice());
      body.innerHTML = `<div class="prompt en nobar">${esc(it.s).replace('___', '<span class="gap"></span>')}</div>
        <div class="opts"></div>
        <div class="muted">${it.ru ? esc(it.ru) : ''}</div>`;
      if (window.EN) window.EN.markup(body.querySelector('.prompt'));
      const box = body.querySelector('.opts');
      opt.forEach((o) => {
        const b = document.createElement('button');
        b.className = 'opt'; b.type = 'button'; b.textContent = o;
        b.addEventListener('click', () => {
          if (r.answered) return;
          const ok = o === it.a;
          b.classList.add(ok ? 'ok' : 'bad');
          box.querySelectorAll('.opt').forEach((x) => {
            x.disabled = true;
            if (x.textContent === it.a) x.classList.add('ok');
          });
          body.querySelector('.gap').textContent = ' ' + it.a + ' ';
          say(it.s.replace('___', it.a));
          r.verdict(ok, it.a, it.why);
        });
        box.appendChild(b);
      });
    };
    r.start();
    return r;
  }

  /* ---------- 3. слово и картинка ---------- */
  function match(host, opts) {
    opts = opts || {};
    const icons = window.PICS || {};
    const keys = Object.keys(icons).filter((k) => !opts.only || opts.only.indexOf(k) >= 0);
    const pool = shuffle(keys.slice());
    const r = new Runner(host, {
      section: opts.section || 'match',
      title: opts.title || 'Слово и картинка',
      total: Math.min(opts.total || 10, pool.length),
    });
    r.render = function (body, i) {
      const key = pool[i];
      const e = (window.VOCAB || []).find((v) => v.w === key) || { w: key, ru: '', ipa: '' };
      const wrong = sample(keys, 3, key);
      const set = shuffle([key].concat(wrong));
      body.innerHTML = `<div class="prompt">Найдите картинку к слову
          <b class="en-w" data-word="${esc(key)}">${esc(key)}</b>
          <span class="muted">[${esc(e.ipa)}]</span></div>
        <div class="pics"></div>`;
      say(key);
      const box = body.querySelector('.pics');
      set.forEach((k) => {
        const d = document.createElement('div');
        d.className = 'pic';
        d.innerHTML = icons[k];
        d.addEventListener('click', () => {
          if (r.answered) return;
          const ok = k === key;
          d.classList.add(ok ? 'ok' : 'bad');
          [...box.children].forEach((c, n) => { if (set[n] === key) c.classList.add('ok'); });
          const t = (window.VOCAB || []).find((v) => v.w === k);
          r.verdict(ok, key + ' — ' + (e.ru || ''),
            ok ? '' : 'Вы выбрали <b>' + esc(k) + '</b> — ' + esc(t ? t.ru : '') + '.');
        });
        box.appendChild(d);
      });
    };
    r.start();
    return r;
  }

  /* ---------- 4. диктант ---------- */
  function dictation(host, opts) {
    opts = opts || {};
    const list = vocab(opts.filter).filter((e) => /^[A-Za-z-]+$/.test(e.w));
    const pool = shuffle(list.slice());
    const r = new Runner(host, {
      section: opts.section || 'dictation',
      title: opts.title || 'Диктант: услышать и напечатать',
      total: Math.min(opts.total || 10, pool.length),
    });
    r.render = function (body, i) {
      const e = pool[i];
      const noVoice = !(window.EN && window.EN.voiceOk());
      body.innerHTML = `<div class="prompt">Прослушайте слово и напечатайте его.</div>
        <div class="row">
          <button class="btn primary hear" type="button">🔊 повторить</button>
          <input type="text" autocomplete="off" autocapitalize="off" spellcheck="false"
                 placeholder="английское слово">
          <button class="btn check" type="button">проверить</button>
        </div>
        <div class="muted hint">${noVoice
          ? 'Звук недоступен: подсказка — транскрипция [' + esc(e.ipa) + '] и перевод «'
            + esc(e.ru) + '».'
          : 'Подсказка по значению: ' + esc(e.ru)}</div>`;
      const inp = body.querySelector('input');
      body.querySelector('.hear').addEventListener('click', () => say(e.w));
      say(e.w);
      const check = () => {
        if (r.answered) return;
        const val = inp.value.trim().toLowerCase();
        const ok = val === e.w.toLowerCase();
        inp.disabled = true;
        r.verdict(ok, e.w, ok ? '[' + esc(e.ipa) + '] — ' + esc(e.ru)
          : 'Вы напечатали «' + esc(inp.value || '—') + '». Транскрипция ['
            + esc(e.ipa) + '], перевод: ' + esc(e.ru) + '.');
      };
      body.querySelector('.check').addEventListener('click', check);
      inp.addEventListener('keydown', (ev) => { if (ev.key === 'Enter') check(); });
      inp.focus();
    };
    r.start();
    return r;
  }

  /* ---------- 5. порядок слов ---------- */
  function order(host, items, opts) {
    opts = opts || {};
    const pool = shuffle(items.slice());
    const r = new Runner(host, {
      section: opts.section || 'order',
      title: opts.title || 'Соберите предложение',
      total: Math.min(opts.total || 8, pool.length),
    });
    r.render = function (body, i) {
      const it = pool[i];
      const words = it.s.replace(/\s+/g, ' ').trim().split(' ');
      let bank = shuffle(words.slice());
      if (bank.join(' ') === words.join(' ') && words.length > 2) bank = shuffle(bank);
      body.innerHTML = `<div class="prompt">${esc(it.ru)}</div>
        <div class="slot"></div>
        <div class="tokens"></div>
        <div class="row">
          <button class="btn check" type="button">проверить</button>
          <button class="btn undo" type="button">убрать последнее</button>
        </div>`;
      const slot = body.querySelector('.slot');
      const bankBox = body.querySelector('.tokens');
      const put = (w, from) => {
        const t = document.createElement('button');
        t.className = 'tok'; t.type = 'button'; t.textContent = w;
        t.addEventListener('click', () => {
          if (r.answered) return;
          t.remove();
          if (from === 'bank') put(w, 'slot'); else put(w, 'bank');
        });
        (from === 'bank' ? slot : bankBox).appendChild(t);
      };
      bank.forEach((w) => {
        const t = document.createElement('button');
        t.className = 'tok'; t.type = 'button'; t.textContent = w;
        t.addEventListener('click', () => { if (r.answered) return; t.remove(); put(w, 'bank'); });
        bankBox.appendChild(t);
      });
      body.querySelector('.undo').addEventListener('click', () => {
        if (r.answered) return;
        const last = slot.lastElementChild;
        if (last) { const w = last.textContent; last.remove(); put(w, 'slot'); }
      });
      body.querySelector('.check').addEventListener('click', () => {
        if (r.answered) return;
        const got = [...slot.children].map((x) => x.textContent).join(' ');
        const ok = got === words.join(' ');
        slot.innerHTML = '';
        const p = document.createElement('div');
        p.className = 'en nobar'; p.style.padding = '4px';
        p.textContent = it.s;
        slot.appendChild(p);
        if (window.EN) { window.EN.markup(p); }
        say(it.s);
        r.verdict(ok, it.s, ok ? (it.why || '')
          : 'Ваш вариант: «' + esc(got || '—') + '». ' + (it.why || ''));
      });
    };
    r.start();
    return r;
  }

  /* ---------- 6. грамматика ---------- */
  function grammar(host, items, opts) {
    opts = opts || {};
    const pool = shuffle(items.slice());
    const r = new Runner(host, {
      section: opts.section || 'grammar',
      title: opts.title || 'Грамматика',
      total: Math.min(opts.total || 10, pool.length),
    });
    r.render = function (body, i) {
      const it = pool[i];
      body.innerHTML = `<div class="muted">${esc(it.topic || '')}</div>
        <div class="prompt en nobar">${esc(it.q).replace('___', '<span class="gap"></span>')}</div>
        <div class="opts"></div>`;
      if (window.EN) window.EN.markup(body.querySelector('.prompt'));
      const box = body.querySelector('.opts');
      shuffle(it.opts.slice()).forEach((o) => {
        const b = document.createElement('button');
        b.className = 'opt'; b.type = 'button'; b.textContent = o;
        b.addEventListener('click', () => {
          if (r.answered) return;
          const ok = o === it.a;
          b.classList.add(ok ? 'ok' : 'bad');
          box.querySelectorAll('.opt').forEach((x) => {
            x.disabled = true;
            if (x.textContent === it.a) x.classList.add('ok');
          });
          const g = body.querySelector('.gap');
          if (g) g.textContent = ' ' + it.a + ' ';
          r.verdict(ok, it.a, it.why);
        });
        box.appendChild(b);
      });
    };
    r.start();
    return r;
  }

  window.DRILL = {
    cards, gaps, match, dictation, order, grammar,
    stats, resetSection, srs, shuffle, sample, read, write,
  };
})();
