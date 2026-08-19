/* Практикум: движок банков заданий по пособию «Sailing Out».
 *
 * Банк — обычный массив записей; каждая запись описывает одно задание:
 *   id     — устойчивый ключ (по нему хранится прогресс);
 *   unit   — юнит пособия (5, 6, 7) или ключ текста ('tech');
 *   ex     — номер задания пособия, аналогом которого служит запись;
 *   topic  — грамматическая или лексическая тема;
 *   ru     — условие по-русски;
 *   type   — вид задания (см. ниже);
 *   why    — пояснение, которое показывается после ответа.
 *
 * Виды заданий:
 *   input  — впишите: q со знаками «___», a — массив по числу пропусков,
 *            каждый элемент строка или массив допустимых вариантов;
 *   choice — выберите: opts, a — верный вариант, whyNot — почему неверны
 *            остальные (объект «вариант → пояснение»);
 *   form   — словообразование: q — основа, ask — какая форма нужна,
 *            a — допустимые формы, model — модель словообразования;
 *   pairs  — соотнесите: pairs — массив [левое, правое];
 *   sort   — распределите: buckets — [{k, t}], rows — [[текст, ключ]];
 *   seq    — расставьте по порядку: seq — массив в верном порядке;
 *   build  — соберите высказывание: b — массив блоков в верном порядке.
 *
 * Вызов на странице:
 *   TASK.run(document.getElementById('bank'), BANK_U5,
 *            { key: 'u5', title: 'Задания юнита 5', size: 6 });
 */
'use strict';
(function () {
  const KEY = 'en.task';
  const POS = 'en.taskpos';

  /* ---------- утилиты ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g,
      (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  /* Сравнение ответов: регистр, кавычки, тире, лишние пробелы и точка
     в конце не должны мешать засчитать верный ответ. */
  function norm(s) {
    return String(s == null ? '' : s)
      .replace(/[‘’ʼ`]/g, "'")
      .replace(/[“”]/g, '"')
      .replace(/[–—]/g, '-')
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/[.,;:!?]+$/, '')
      .trim();
  }
  function variants(v) {
    return (Array.isArray(v) ? v : [v]).map(norm);
  }
  function mark(el) { if (window.EN && el) window.EN.markup(el); }
  function say(t) { if (window.EN) window.EN.speak(t); }

  /* ---------- хранилище прогресса ---------- */
  function readAll() {
    try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; }
    catch (e) { return {}; }
  }
  function writeAll(v) {
    try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { /* приватный режим */ }
  }
  function state(key) { return readAll()[key] || {}; }
  function save(key, id, ok) {
    const all = readAll();
    const st = all[key] || {};
    st[id] = ok ? 1 : 0;
    all[key] = st;
    writeAll(all);
  }
  function drop(key, ids) {
    const all = readAll();
    const st = all[key] || {};
    (ids || Object.keys(st)).forEach((i) => { delete st[i]; });
    all[key] = st;
    writeAll(all);
  }
  function readPos(key) {
    try { return +(JSON.parse(localStorage.getItem(POS) || '{}')[key] || 0); }
    catch (e) { return 0; }
  }
  function writePos(key, n) {
    try {
      const all = JSON.parse(localStorage.getItem(POS) || '{}');
      all[key] = n;
      localStorage.setItem(POS, JSON.stringify(all));
    } catch (e) { /* приватный режим */ }
  }

  /* ---------- разбор заданий по видам ---------- */
  /* Каждая функция наполняет узел body и вызывает done(ok, ответ, пояснение). */

  function vInput(it, body, done) {
    const parts = String(it.q).split('___');
    const wrap = document.createElement('div');
    wrap.className = 'prompt en nobar';
    parts.forEach((p, i) => {
      const t = document.createElement('span');
      t.textContent = p;
      wrap.appendChild(t);
      if (i < parts.length - 1) {
        const inp = document.createElement('input');
        inp.type = 'text';
        inp.className = 'gapin';
        inp.autocomplete = 'off';
        inp.spellcheck = false;
        inp.setAttribute('aria-label', 'ответ ' + (i + 1));
        wrap.appendChild(inp);
      }
    });
    body.appendChild(wrap);
    wrap.querySelectorAll('span').forEach(mark);
    if (it.hint) {
      const h = document.createElement('div');
      h.className = 'muted';
      h.textContent = it.hint;
      body.appendChild(h);
    }
    const ins = [...wrap.querySelectorAll('input')];
    return {
      focus() { if (ins[0]) ins[0].focus(); },
      check() {
        const good = it.a.map(variants);
        let ok = true;
        const given = [];
        ins.forEach((inp, i) => {
          const v = norm(inp.value);
          given.push(inp.value.trim());
          const hit = good[i] && good[i].indexOf(v) >= 0;
          if (!hit) ok = false;
          inp.classList.add(hit ? 'ok' : 'bad');
          inp.disabled = true;
        });
        const right = it.a.map((v) => (Array.isArray(v) ? v[0] : v)).join(' / ');
        const said = parts.map((p, i) => p + (i < parts.length - 1
          ? (Array.isArray(it.a[i]) ? it.a[i][0] : it.a[i]) : '')).join('');
        say(said);
        done(ok, right, (ok ? '' : 'Ваш вариант: «' + esc(given.join(' / ') || '—') + '». ')
          + (it.why || ''));
      },
    };
  }

  function vForm(it, body, done) {
    const face = document.createElement('div');
    face.className = 'prompt';
    face.innerHTML = '<b class="en-w" data-word="' + esc(it.q) + '">' + esc(it.q) + '</b>'
      + ' <span class="muted">→</span> <span class="muted">' + esc(it.ask || 'нужная форма') + '</span>';
    body.appendChild(face);
    const row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = '<input type="text" autocomplete="off" spellcheck="false"'
      + ' aria-label="форма слова" placeholder="английское слово">';
    body.appendChild(row);
    const inp = row.querySelector('input');
    return {
      focus() { inp.focus(); },
      check() {
        const good = variants(it.a);
        const ok = good.indexOf(norm(inp.value)) >= 0;
        inp.classList.add(ok ? 'ok' : 'bad');
        inp.disabled = true;
        const right = Array.isArray(it.a) ? it.a[0] : it.a;
        say(right);
        done(ok, right, (it.model ? '<b>Модель:</b> ' + it.model + ' ' : '')
          + (ok ? '' : 'Вы написали «' + esc(inp.value || '—') + '». ') + (it.why || ''));
      },
    };
  }

  function vChoice(it, body, done) {
    if (it.q) {
      const p = document.createElement('div');
      p.className = 'prompt en nobar';
      p.innerHTML = esc(it.q).replace('___', '<span class="gap"></span>');
      body.appendChild(p);
      mark(p);
    }
    const box = document.createElement('div');
    box.className = 'opts';
    body.appendChild(box);
    let picked = null;
    shuffle(it.opts.slice()).forEach((o) => {
      const b = document.createElement('button');
      b.className = 'opt';
      b.type = 'button';
      b.textContent = o;
      b.addEventListener('click', () => {
        if (b.disabled) return;
        box.querySelectorAll('.opt').forEach((x) => x.classList.remove('sel'));
        b.classList.add('sel');
        picked = o;
      });
      box.appendChild(b);
    });
    return {
      check() {
        const ok = picked === it.a;
        box.querySelectorAll('.opt').forEach((x) => {
          x.disabled = true;
          if (x.textContent === it.a) x.classList.add('ok');
          else if (x.textContent === picked) x.classList.add('bad');
        });
        const g = body.querySelector('.gap');
        if (g) g.textContent = ' ' + it.a + ' ';
        let why = it.why || '';
        const wn = it.whyNot || {};
        const others = it.opts.filter((o) => o !== it.a && wn[o]);
        if (others.length) {
          why += '<div class="whynot">Остальные варианты не подходят:<ul>'
            + others.map((o) => '<li><b>' + esc(o) + '</b> — ' + wn[o] + '</li>').join('')
            + '</ul></div>';
        }
        done(ok, it.a, why);
      },
    };
  }

  function vPairs(it, body, done) {
    const right = shuffle(it.pairs.map((p) => p[1]).slice());
    const tbl = document.createElement('table');
    tbl.className = 'pairs';
    tbl.innerHTML = '<tbody>' + it.pairs.map((p, i) =>
      '<tr><td class="l en nobar">' + esc(p[0]) + '</td><td class="r">'
      + '<select aria-label="пара к строке ' + (i + 1) + '"><option value="">— выберите —</option>'
      + right.map((r) => '<option value="' + esc(r) + '">' + esc(r) + '</option>').join('')
      + '</select></td></tr>').join('') + '</tbody>';
    body.appendChild(tbl);
    tbl.querySelectorAll('td.l').forEach(mark);
    const sels = [...tbl.querySelectorAll('select')];
    return {
      check() {
        let ok = true;
        const wrong = [];
        sels.forEach((s, i) => {
          const good = norm(s.value) === norm(it.pairs[i][1]);
          if (!good) { ok = false; wrong.push(it.pairs[i]); }
          s.parentNode.parentNode.classList.add(good ? 'ok' : 'bad');
          s.disabled = true;
        });
        const key = '<ul class="keylist">' + it.pairs.map((p) =>
          '<li><span class="en nobar">' + esc(p[0]) + '</span> — ' + esc(p[1]) + '</li>').join('')
          + '</ul>';
        done(ok, null, (ok ? '' : 'Неверных пар: ' + wrong.length + '. ')
          + (it.why || '') + '<div class="key">Верное соответствие:' + key + '</div>');
      },
    };
  }

  function vSort(it, body, done) {
    const rows = shuffle(it.rows.slice());
    const box = document.createElement('div');
    box.className = 'sortbox';
    body.appendChild(box);
    const chosen = new Map();
    rows.forEach((r) => {
      const line = document.createElement('div');
      line.className = 'sortrow';
      const lab = document.createElement('span');
      lab.className = 'sl en nobar';
      lab.textContent = r[0];
      line.appendChild(lab);
      mark(lab);
      const grp = document.createElement('span');
      grp.className = 'sg';
      it.buckets.forEach((b) => {
        const btn = document.createElement('button');
        btn.className = 'chip';
        btn.type = 'button';
        btn.textContent = b.t;
        btn.dataset.k = b.k;
        btn.addEventListener('click', () => {
          if (btn.disabled) return;
          grp.querySelectorAll('.chip').forEach((x) => x.classList.remove('on'));
          btn.classList.add('on');
          chosen.set(r[0], b.k);
        });
        grp.appendChild(btn);
      });
      line.appendChild(grp);
      box.appendChild(line);
    });
    return {
      check() {
        let ok = true;
        box.querySelectorAll('.sortrow').forEach((line, i) => {
          const r = rows[i];
          const good = chosen.get(r[0]) === r[1];
          if (!good) ok = false;
          line.classList.add(good ? 'ok' : 'bad');
          line.querySelectorAll('.chip').forEach((c) => {
            c.disabled = true;
            if (c.dataset.k === r[1]) c.classList.add('right');
          });
        });
        const names = {};
        it.buckets.forEach((b) => { names[b.k] = b.t; });
        const key = '<ul class="keylist">' + it.rows.map((r) =>
          '<li><span class="en nobar">' + esc(r[0]) + '</span> — ' + esc(names[r[1]]) + '</li>').join('')
          + '</ul>';
        done(ok, null, (it.why || '') + '<div class="key">Верное распределение:' + key + '</div>');
      },
    };
  }

  function vSeq(it, body, done) {
    const slot = document.createElement('div');
    slot.className = 'slot';
    const bank = document.createElement('div');
    bank.className = 'tokens';
    body.appendChild(slot);
    body.appendChild(bank);
    const put = (w, to) => {
      const t = document.createElement('button');
      t.className = 'tok';
      t.type = 'button';
      t.textContent = w;
      t.addEventListener('click', () => {
        if (t.disabled) return;
        t.remove();
        put(w, to === slot ? bank : slot);
      });
      to.appendChild(t);
    };
    shuffle(it.seq.slice()).forEach((w) => put(w, bank));
    const undo = document.createElement('div');
    undo.className = 'row';
    undo.innerHTML = '<button class="btn undo" type="button">убрать последнее</button>';
    body.appendChild(undo);
    undo.querySelector('.undo').addEventListener('click', () => {
      const last = slot.lastElementChild;
      if (last && !last.disabled) { const w = last.textContent; last.remove(); put(w, bank); }
    });
    return {
      check() {
        const got = [...slot.children].map((x) => x.textContent);
        const ok = got.length === it.seq.length && got.every((w, i) => w === it.seq[i]);
        body.querySelectorAll('.tok, .undo').forEach((t) => { t.disabled = true; });
        const key = '<ol class="keylist">' + it.seq.map((w) =>
          '<li><span class="en nobar">' + esc(w) + '</span></li>').join('') + '</ol>';
        done(ok, null, (ok ? '' : 'Ваш порядок: ' + esc(got.join(' → ') || '—') + '. ')
          + (it.why || '') + '<div class="key">Верный порядок:' + key + '</div>');
      },
    };
  }

  function vBuild(it, body, done) {
    const slot = document.createElement('div');
    slot.className = 'slot';
    const bank = document.createElement('div');
    bank.className = 'tokens';
    body.appendChild(slot);
    body.appendChild(bank);
    const put = (w, to) => {
      const t = document.createElement('button');
      t.className = 'tok';
      t.type = 'button';
      t.textContent = w;
      t.addEventListener('click', () => {
        if (t.disabled) return;
        t.remove();
        put(w, to === slot ? bank : slot);
      });
      to.appendChild(t);
    };
    const extra = it.extra || [];
    shuffle(it.b.concat(extra).slice()).forEach((w) => put(w, bank));
    const undo = document.createElement('div');
    undo.className = 'row';
    undo.innerHTML = '<button class="btn undo" type="button">убрать последнее</button>';
    body.appendChild(undo);
    undo.querySelector('.undo').addEventListener('click', () => {
      const last = slot.lastElementChild;
      if (last && !last.disabled) { const w = last.textContent; last.remove(); put(w, bank); }
    });
    return {
      check() {
        const got = [...slot.children].map((x) => x.textContent);
        const ok = got.length === it.b.length && got.every((w, i) => w === it.b[i]);
        body.querySelectorAll('.tok, .undo').forEach((t) => { t.disabled = true; });
        const full = it.b.join(' ');
        say(full);
        let why = (ok ? '' : 'Ваш вариант: «' + esc(got.join(' ') || '—') + '». ') + (it.why || '');
        if (extra.length) {
          why += '<div class="whynot">Лишние блоки: '
            + extra.map((e) => '<b>' + esc(e) + '</b>').join(', ') + '.</div>';
        }
        done(ok, full, why);
      },
    };
  }

  const KINDS = {
    input: vInput, form: vForm, choice: vChoice,
    pairs: vPairs, sort: vSort, seq: vSeq, build: vBuild,
  };

  const KIND_RU = {
    input: 'впишите', form: 'словообразование', choice: 'выберите',
    pairs: 'соотнесите', sort: 'распределите', seq: 'по порядку',
    build: 'соберите высказывание',
  };

  /* ---------- карточка одного задания ---------- */
  function card(it, n, key, onSaved) {
    const el = document.createElement('div');
    el.className = 'task';
    el.dataset.id = it.id;
    const src = (it.unit === 'tech' ? 'Building Ships' : 'юнит ' + it.unit)
      + (it.ex ? ' · упр. ' + it.ex : '');
    el.innerHTML = '<div class="thead"><span class="tnum">' + n + '</span>'
      + '<span class="tmeta">' + esc(src) + ' · ' + esc(it.topic || '') + '</span>'
      + '<span class="tkind">' + esc(KIND_RU[it.type] || it.type) + '</span></div>'
      + '<div class="tru">' + esc(it.ru) + '</div>'
      + '<div class="tbody"></div><div class="tfb"></div><div class="row tnav"></div>';
    const body = el.querySelector('.tbody');
    const fb = el.querySelector('.tfb');
    const nav = el.querySelector('.tnav');

    const done = (ok, right, why) => {
      el.classList.add('answered', ok ? 'good' : 'poor');
      fb.innerHTML = '<div class="fb ' + (ok ? 'ok' : 'bad') + '"><b>'
        + (ok ? 'Верно.' : 'Неверно.') + '</b> '
        + (right ? 'Правильный ответ: <b class="en nobar">' + esc(right) + '</b>.' : '')
        + (why ? '<div class="why">' + why + '</div>' : '') + '</div>';
      fb.querySelectorAll('.en').forEach(mark);
      nav.innerHTML = '';
      const again = document.createElement('button');
      again.className = 'btn again';
      again.type = 'button';
      again.textContent = 'решить заново';
      again.addEventListener('click', () => {
        drop(key, [it.id]);
        const fresh = card(it, n, key, onSaved);
        el.replaceWith(fresh);
        onSaved();
      });
      nav.appendChild(again);
      save(key, it.id, ok);
      onSaved();
    };

    const kind = KINDS[it.type];
    if (!kind) {
      body.innerHTML = '<p class="muted">Неизвестный вид задания.</p>';
      return el;
    }
    const view = kind(it, body, done);
    const check = document.createElement('button');
    check.className = 'btn primary check';
    check.type = 'button';
    check.textContent = 'проверить';
    check.addEventListener('click', () => { if (!el.classList.contains('answered')) view.check(); });
    nav.appendChild(check);
    el.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' && ev.target.tagName === 'INPUT') {
        ev.preventDefault();
        if (!el.classList.contains('answered')) view.check();
      }
    });
    return el;
  }

  /* карточка уже решённого задания — восстанавливается после перезагрузки */
  function solved(it, n, ok, key, onSaved) {
    const el = document.createElement('div');
    el.className = 'task answered ' + (ok ? 'good' : 'poor');
    el.dataset.id = it.id;
    const src = (it.unit === 'tech' ? 'Building Ships' : 'юнит ' + it.unit)
      + (it.ex ? ' · упр. ' + it.ex : '');
    el.innerHTML = '<div class="thead"><span class="tnum">' + n + '</span>'
      + '<span class="tmeta">' + esc(src) + ' · ' + esc(it.topic || '') + '</span>'
      + '<span class="tkind">' + esc(KIND_RU[it.type] || it.type) + '</span></div>'
      + '<div class="tru">' + esc(it.ru) + '</div>'
      + '<div class="fb ' + (ok ? 'ok' : 'bad') + '"><b>'
      + (ok ? 'Решено верно.' : 'В прошлый раз ответ был неверным.')
      + '</b> Прогресс сохранён в этом браузере.</div>'
      + '<div class="row tnav"></div>';
    const again = document.createElement('button');
    again.className = 'btn again';
    again.type = 'button';
    again.textContent = 'решить заново';
    again.addEventListener('click', () => {
      drop(key, [it.id]);
      el.replaceWith(card(it, n, key, onSaved));
      onSaved();
    });
    el.querySelector('.tnav').appendChild(again);
    return el;
  }

  /* ---------- банк целиком ---------- */
  function run(host, items, opts) {
    opts = opts || {};
    if (!host || !items || !items.length) return null;
    const key = opts.key || 'bank';
    const size = Math.min(Math.max(opts.size || 6, 5), 8);
    const blocks = [];
    for (let i = 0; i < items.length; i += size) blocks.push(items.slice(i, i + size));
    let cur = Math.max(0, Math.min(readPos(key), blocks.length - 1));

    host.innerHTML = '<div class="tasks drill">'
      + '<h3>' + esc(opts.title || 'Задания') + '</h3>'
      + '<div class="progressbar"><i style="width:0"></i></div>'
      + '<div class="stats"><span>решено <b class="ndone">0</b> из <b>' + items.length + '</b></span>'
      + '<span>верно <b class="nok">0</b></span>'
      + '<span class="nblock"></span></div>'
      + '<div class="chips blocks"></div>'
      + '<div class="tlist"></div>'
      + '<div class="row bnav"></div></div>';
    const bar = host.querySelector('.progressbar i');
    const nDone = host.querySelector('.ndone');
    const nOk = host.querySelector('.nok');
    const nBlock = host.querySelector('.nblock');
    const chips = host.querySelector('.blocks');
    const list = host.querySelector('.tlist');
    const bnav = host.querySelector('.bnav');

    function counts() {
      const st = state(key);
      let d = 0, o = 0;
      items.forEach((it) => {
        if (st[it.id] === undefined) return;
        d += 1;
        if (st[it.id]) o += 1;
      });
      return { d, o, st };
    }

    function head() {
      const c = counts();
      nDone.textContent = String(c.d);
      nOk.textContent = String(c.o);
      bar.style.width = (100 * c.d / items.length) + '%';
      nBlock.textContent = 'блок ' + (cur + 1) + ' из ' + blocks.length;
      chips.querySelectorAll('.chip').forEach((ch, i) => {
        const done = blocks[i].every((it) => c.st[it.id] !== undefined);
        ch.classList.toggle('on', i === cur);
        ch.classList.toggle('full', done);
      });
    }

    function draw() {
      writePos(key, cur);
      const st = state(key);
      list.innerHTML = '';
      blocks[cur].forEach((it, i) => {
        const n = cur * size + i + 1;
        list.appendChild(st[it.id] === undefined
          ? card(it, n, key, head)
          : solved(it, n, !!st[it.id], key, head));
      });
      bnav.innerHTML = '';
      if (cur > 0) {
        const p = document.createElement('button');
        p.className = 'btn';
        p.type = 'button';
        p.textContent = '← предыдущий блок';
        p.addEventListener('click', () => { cur -= 1; draw(); head(); host.scrollIntoView({ block: 'start' }); });
        bnav.appendChild(p);
      }
      if (cur < blocks.length - 1) {
        const nx = document.createElement('button');
        nx.className = 'btn primary';
        nx.type = 'button';
        nx.textContent = 'следующий блок →';
        nx.addEventListener('click', () => { cur += 1; draw(); head(); host.scrollIntoView({ block: 'start' }); });
        bnav.appendChild(nx);
      }
      const clr = document.createElement('button');
      clr.className = 'btn';
      clr.type = 'button';
      clr.textContent = 'сбросить прогресс блока';
      clr.addEventListener('click', () => {
        drop(key, blocks[cur].map((it) => it.id));
        draw(); head();
      });
      bnav.appendChild(clr);
      head();
    }

    blocks.forEach((b, i) => {
      const ch = document.createElement('span');
      ch.className = 'chip';
      ch.textContent = String(i + 1);
      ch.title = 'блок ' + (i + 1);
      ch.addEventListener('click', () => { cur = i; draw(); head(); });
      chips.appendChild(ch);
    });
    draw();
    return { draw, head };
  }

  /* Короткая сводка по банкам — для страницы-указателя практикума. */
  function summary(host, banks) {
    if (!host) return;
    const rows = banks.map((b) => {
      const st = state(b.key);
      const list = b.items || [];
      let d = 0, o = 0;
      list.forEach((it) => {
        if (st[it.id] === undefined) return;
        d += 1;
        if (st[it.id]) o += 1;
      });
      const pct = d ? Math.round(100 * o / d) : null;
      return '<tr><td><a href="' + esc(b.href) + '">' + esc(b.title) + '</a></td>'
        + '<td class="num">' + list.length + '</td>'
        + '<td class="num">' + d + '</td>'
        + '<td class="num">' + (pct === null ? '—' : pct + '%') + '</td></tr>';
    }).join('');
    host.innerHTML = '<table class="dt"><thead><tr><th>банк заданий</th>'
      + '<th class="num">всего</th><th class="num">решено</th><th class="num">доля верных</th>'
      + '</tr></thead><tbody>' + rows + '</tbody></table>'
      + '<p class="muted">Прогресс хранится в этом браузере (localStorage) и сохраняется '
      + 'после перезагрузки страницы.</p>';
  }

  window.TASK = { run, summary, norm, shuffle, state, drop };
})();
