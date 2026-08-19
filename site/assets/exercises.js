/* Задания юнитов: показ блоками, автопроверка, пояснения, статистика.
 *
 * Банк заданий лежит в assets/tasks-u1.js … tasks-u4.js (глобальный массив
 * TASKS). Здесь — только движок: он умеет разложить задания на блоки по
 * 5–8 штук, проверить ответ, показать пояснение «почему так» и сохранить
 * результат в localStorage, чтобы прогресс пережил перезагрузку страницы.
 *
 * Запуск одной строкой:
 *   EXER.mount(document.getElementById('tasks'), { unit: 'u1', size: 6 });
 * или на сводной странице тренажёров:
 *   EXER.mount(host, { size: 6, title: '…' });
 *
 * Типы заданий (поле type):
 *   fill    — вписать слово или форму в пропуск (принимается набор вариантов);
 *   choice  — выбрать верный вариант, у каждого варианта своё объяснение;
 *   build   — собрать предложение из блоков-слов;
 *   match   — соотнести левый столбец с правым;
 *   sort    — разложить материал по колонкам (таблица форм, чтение окончаний);
 *   order   — расставить строки по порядку;
 *   dialog  — подставить реплики в диалог, реплики озвучиваются.
 */
'use strict';
(function () {
  const LS = window.localStorage;
  function read(key, def) {
    try { const v = LS.getItem(key); return v ? JSON.parse(v) : def; }
    catch (e) { return def; }
  }
  function write(key, val) {
    try { LS.setItem(key, JSON.stringify(val)); } catch (e) { /* приватный режим */ }
  }

  const K_DONE = 'en.tasks';     /* {id: 1|0} — как решено в последний раз */
  const K_TOPIC = 'en.topics';   /* {тема: {asked, right}} */
  const K_STATS = 'en.stats';    /* общий счётчик, его же читает страница «Тренажёры» */

  function done() { return read(K_DONE, {}); }
  function topics() { return read(K_TOPIC, {}); }

  function remember(task, ok) {
    const d = done();
    d[task.id] = ok ? 1 : 0;
    write(K_DONE, d);
    const t = topics();
    const r = t[task.topic] || { asked: 0, right: 0 };
    r.asked += 1; if (ok) r.right += 1;
    t[task.topic] = r; write(K_TOPIC, t);
    const s = read(K_STATS, {});
    const q = s.tasks || { asked: 0, right: 0, ts: 0 };
    q.asked += 1; if (ok) q.right += 1; q.ts = Date.now();
    s.tasks = q; write(K_STATS, s);
  }

  /* ---------- утилиты ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g,
      (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }
  /* Ответ сравнивается без учёта регистра, вида апострофа, конечной точки
     и лишних пробелов: «Yes, he isn’t» и «yes, he isn't.» — одно и то же. */
  function norm(s) {
    return String(s == null ? '' : s)
      .replace(/[‘’ʼ`´]/g, "'")
      .replace(/[–—]/g, '-')
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .replace(/^[\s.,!?;:]+|[\s.,!?;:]+$/g, '')
      .trim();
  }
  function hit(val, accepted) {
    const v = norm(val);
    return (accepted || []).some((x) => norm(x) === v);
  }
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function say(text) { if (window.EN && text) window.EN.speak(text); }
  function mark(el) { if (el && window.EN) window.EN.markup(el); }
  function markAll(root) { root.querySelectorAll('.en').forEach(mark); }
  /* Кнопка «прослушать» рядом с английской строкой. */
  function earHTML(text) {
    return '<button class="ear" type="button" title="прослушать" data-say="'
      + esc(text) + '">🔊</button>';
  }
  function wireEars(root) {
    root.querySelectorAll('.ear').forEach((b) => {
      if (b.dataset.wired === '1') return;
      b.dataset.wired = '1';
      b.addEventListener('click', () => say(b.dataset.say));
    });
  }

  /* ================= отрисовка по типам =================
   * Каждая функция получает задание и контейнер, возвращает объект
   *   { check() → {ok, note}, reveal() }
   * где note — разбор ошибок в HTML (что именно было не так). */

  /* --- 1. вписать в пропуск --- */
  function rFill(t, body) {
    const items = t.items || [];
    body.innerHTML = items.map((it, i) => {
      let g = -1;
      const s = esc(it.s).replace(/___/g, () => {
        g += 1;
        const w = (it.a[g] && it.a[g][0] ? it.a[g][0].length : 6) + 3;
        return '<input type="text" class="gapin" data-i="' + i + '" data-g="' + g
          + '" style="width:' + Math.min(Math.max(w, 5), 22) + 'ch"'
          + ' autocomplete="off" autocapitalize="off" spellcheck="false">';
      });
      return '<div class="tk-item"><span class="num">' + (i + 1) + '.</span>'
        + '<span class="en nobar line">' + s + '</span>'
        + (it.ru ? '<span class="ru">' + esc(it.ru) + '</span>' : '') + '</div>';
    }).join('');
    markAll(body);
    return {
      check() {
        const bad = [];
        items.forEach((it, i) => {
          const ins = body.querySelectorAll('input[data-i="' + i + '"]');
          let itemOk = true;
          ins.forEach((inp) => {
            const g = +inp.dataset.g;
            const ok = hit(inp.value, it.a[g]);
            inp.classList.add(ok ? 'ok' : 'bad');
            inp.disabled = true;
            if (!ok) itemOk = false;
          });
          if (!itemOk) {
            bad.push('<b>' + (i + 1) + '.</b> ' + esc(fillOut(it)));
          }
        });
        const full = items.map((it) => fillOut(it)).join(' ');
        say(full.slice(0, 300));
        return {
          ok: !bad.length,
          note: bad.length ? 'Правильно: ' + bad.join('; ') + '.' : '',
        };
      },
      reveal() {
        items.forEach((it, i) => {
          body.querySelectorAll('input[data-i="' + i + '"]').forEach((inp) => {
            inp.value = it.a[+inp.dataset.g][0];
            inp.disabled = true;
          });
        });
      },
    };
  }
  function fillOut(it) {
    let g = -1;
    return it.s.replace(/___/g, () => { g += 1; return it.a[g][0]; });
  }

  /* --- 2. выбор варианта с разбором --- */
  function rChoice(t, body) {
    const items = t.items || [];
    body.innerHTML = items.map((it, i) => {
      const opts = shuffle(it.opts.slice()).map((o) =>
        '<button class="opt" type="button" data-i="' + i + '" data-t="' + esc(o.t) + '">'
        + esc(o.t) + '</button>').join('');
      return '<div class="tk-item col"><div class="q-line"><span class="num">' + (i + 1) + '.</span>'
        + '<span class="en nobar line">' + esc(it.s).replace(/___/g, '<span class="gap"></span>')
        + '</span>' + (it.ru ? '<span class="ru">' + esc(it.ru) + '</span>' : '') + '</div>'
        + '<div class="opts" data-box="' + i + '">' + opts + '</div></div>';
    }).join('');
    markAll(body);
    const chosen = {};
    body.querySelectorAll('.opt').forEach((b) => {
      b.addEventListener('click', () => {
        if (b.disabled) return;
        const i = b.dataset.i;
        body.querySelectorAll('.opt[data-i="' + i + '"]').forEach((x) => x.classList.remove('on'));
        b.classList.add('on');
        chosen[i] = b.dataset.t;
      });
    });
    return {
      check() {
        const notes = [];
        let allOk = true;
        items.forEach((it, i) => {
          const right = it.opts.find((o) => o.ok);
          const pick = chosen[i];
          const ok = pick != null && norm(pick) === norm(right.t);
          if (!ok) allOk = false;
          body.querySelectorAll('.opt[data-i="' + i + '"]').forEach((b) => {
            b.disabled = true;
            if (norm(b.dataset.t) === norm(right.t)) b.classList.add('ok');
            else if (b.classList.contains('on')) b.classList.add('bad');
          });
          const gapEl = body.querySelectorAll('.q-line .gap')[i];
          if (gapEl) gapEl.textContent = ' ' + right.t + ' ';
          if (!ok) {
            const wrong = it.opts.find((o) => pick != null && norm(o.t) === norm(pick));
            notes.push('<b>' + (i + 1) + '.</b> верно <b>' + esc(right.t) + '</b> — ' + right.why
              + (wrong ? ' Вариант <i>' + esc(wrong.t) + '</i>: ' + wrong.why : ''));
          }
        });
        return { ok: allOk, note: notes.join('<br>') };
      },
      reveal() {
        items.forEach((it, i) => {
          const right = it.opts.find((o) => o.ok);
          body.querySelectorAll('.opt[data-i="' + i + '"]').forEach((b) => {
            b.disabled = true;
            if (norm(b.dataset.t) === norm(right.t)) b.classList.add('ok');
          });
        });
      },
    };
  }

  /* --- 3. собрать предложение из блоков --- */
  function rBuild(t, body) {
    const items = t.items || [];
    body.innerHTML = items.map((it, i) =>
      '<div class="tk-item col"><div class="q-line"><span class="num">' + (i + 1) + '.</span>'
      + '<span class="ru">' + esc(it.ru) + '</span></div>'
      + '<div class="slot" data-i="' + i + '"></div>'
      + '<div class="tokens" data-i="' + i + '"></div>'
      + '<div class="row"><button class="btn undo" type="button" data-i="' + i
      + '">убрать последнее</button></div></div>').join('');
    items.forEach((it, i) => {
      const bank = body.querySelector('.tokens[data-i="' + i + '"]');
      const slot = body.querySelector('.slot[data-i="' + i + '"]');
      const words = it.a.trim().split(/\s+/);
      shuffle(words.concat(it.extra || [])).forEach((w) => bank.appendChild(tok(w, bank, slot)));
      body.querySelector('.undo[data-i="' + i + '"]').addEventListener('click', () => {
        const last = slot.lastElementChild;
        if (last && !last.disabled) { last.remove(); bank.appendChild(tok(last.textContent, bank, slot)); }
      });
    });
    function tok(w, bank, slot) {
      const b = document.createElement('button');
      b.className = 'tok'; b.type = 'button'; b.textContent = w;
      b.addEventListener('click', () => {
        if (b.disabled) return;
        /* «дом» определяем до удаления: после remove() parentNode уже пуст */
        const home = b.parentNode === bank ? slot : bank;
        b.remove();
        home.appendChild(tok(w, bank, slot));
      });
      return b;
    }
    return {
      check() {
        const notes = [];
        let allOk = true;
        items.forEach((it, i) => {
          const slot = body.querySelector('.slot[data-i="' + i + '"]');
          const got = [...slot.children].map((x) => x.textContent).join(' ');
          const ok = norm(got) === norm(it.a);
          if (!ok) { allOk = false; notes.push('<b>' + (i + 1) + '.</b> ' + esc(it.a)); }
          slot.innerHTML = '<span class="en nobar line">' + esc(it.a) + '</span> ' + earHTML(it.a);
          mark(slot.querySelector('.line'));
          body.querySelectorAll('.tokens[data-i="' + i + '"] .tok').forEach((x) => { x.disabled = true; });
          const u = body.querySelector('.undo[data-i="' + i + '"]');
          if (u) u.disabled = true;
        });
        wireEars(body);
        return { ok: allOk, note: notes.length ? 'Правильный порядок: ' + notes.join('; ') + '.' : '' };
      },
      reveal() { this.check(); },
    };
  }

  /* --- 4. соотнести --- */
  function rMatch(t, body) {
    const right = shuffle(t.pairs.map((p) => p[1]));
    body.innerHTML = '<div class="tk-match">' + t.pairs.map((p, i) =>
      '<div class="mrow"><span class="en nobar line">' + esc(p[0]) + '</span>'
      + '<select data-i="' + i + '"><option value="">— выберите —</option>'
      + right.map((r) => '<option value="' + esc(r) + '">' + esc(r) + '</option>').join('')
      + '</select></div>').join('') + '</div>';
    markAll(body);
    /* Уже выбранные варианты помечаем: в длинном списке иначе не видно, что
       осталось свободным, и один и тот же перевод уходит сразу в две строки. */
    const sels = [...body.querySelectorAll('.tk-match select')];
    function markUsed() {
      const used = new Map();
      sels.forEach((s) => { if (s.value) used.set(s.value, (used.get(s.value) || 0) + 1); });
      sels.forEach((s) => {
        s.classList.toggle('filled', !!s.value);
        s.classList.toggle('dup', !!s.value && used.get(s.value) > 1);
        [...s.options].forEach((o) => {
          if (!o.value) return;
          const taken = used.has(o.value) && o.value !== s.value;
          o.classList.toggle('used', taken);
          const hasMark = o.textContent.charAt(0) === '✓';
          if (taken && !hasMark) o.textContent = '✓ ' + o.textContent;
          if (!taken && hasMark) o.textContent = o.textContent.slice(2);
        });
      });
    }
    sels.forEach((s) => s.addEventListener('change', markUsed));
    markUsed();
    return {
      check() {
        const notes = [];
        let allOk = true;
        t.pairs.forEach((p, i) => {
          const sel = body.querySelector('select[data-i="' + i + '"]');
          const ok = norm(sel.value) === norm(p[1]);
          sel.classList.add(ok ? 'ok' : 'bad');
          sel.disabled = true;
          if (!ok) { allOk = false; notes.push('<b>' + esc(p[0]) + '</b> — ' + esc(p[1])); }
        });
        return { ok: allOk, note: notes.length ? 'Верные пары: ' + notes.join('; ') + '.' : '' };
      },
      reveal() {
        t.pairs.forEach((p, i) => {
          const sel = body.querySelector('select[data-i="' + i + '"]');
          sel.value = p[1]; sel.disabled = true;
        });
      },
    };
  }

  /* --- 5. разложить по колонкам --- */
  function rSort(t, body) {
    const keys = Object.keys(t.cats);
    const items = shuffle(t.items.slice());
    body.innerHTML = '<div class="tk-sort">' + items.map((it, i) =>
      '<div class="mrow"><span class="en nobar line">' + esc(it.t) + '</span>'
      + '<select data-i="' + i + '"><option value="">— колонка —</option>'
      + keys.map((k) => '<option value="' + esc(k) + '">' + esc(t.cats[k]) + '</option>').join('')
      + '</select></div>').join('') + '</div>';
    markAll(body);
    return {
      check() {
        const notes = [];
        let allOk = true;
        items.forEach((it, i) => {
          const sel = body.querySelector('select[data-i="' + i + '"]');
          const ok = sel.value === it.c;
          sel.classList.add(ok ? 'ok' : 'bad');
          sel.disabled = true;
          if (!ok) { allOk = false; notes.push('<b>' + esc(it.t) + '</b> → ' + esc(t.cats[it.c])); }
        });
        return { ok: allOk, note: notes.length ? 'Верно: ' + notes.join('; ') + '.' : '' };
      },
      reveal() {
        items.forEach((it, i) => {
          const sel = body.querySelector('select[data-i="' + i + '"]');
          sel.value = it.c; sel.disabled = true;
        });
      },
    };
  }

  /* --- 6. расставить по порядку --- */
  function rOrder(t, body) {
    body.innerHTML = '<div class="slot ord"></div><div class="tokens ord"></div>'
      + '<div class="row"><button class="btn undo" type="button">убрать последнее</button></div>';
    const slot = body.querySelector('.slot');
    const bank = body.querySelector('.tokens');
    function line(txt) {
      const b = document.createElement('button');
      b.className = 'tok wide'; b.type = 'button'; b.textContent = txt;
      b.addEventListener('click', () => {
        if (b.disabled) return;
        const home = b.parentNode === bank ? slot : bank;
        b.remove(); home.appendChild(line(txt));
      });
      return b;
    }
    shuffle(t.lines.slice()).forEach((x) => bank.appendChild(line(x)));
    body.querySelector('.undo').addEventListener('click', () => {
      const last = slot.lastElementChild;
      if (last && !last.disabled) { last.remove(); bank.appendChild(line(last.textContent)); }
    });
    return {
      check() {
        const got = [...slot.children].map((x) => x.textContent);
        const ok = got.length === t.lines.length
          && got.every((x, i) => norm(x) === norm(t.lines[i]));
        slot.innerHTML = t.lines.map((x, i) =>
          '<div class="oline"><span class="num">' + (i + 1) + '.</span> ' + esc(x) + '</div>').join('');
        bank.querySelectorAll('.tok').forEach((x) => { x.disabled = true; });
        body.querySelector('.undo').disabled = true;
        return { ok, note: ok ? '' : 'Верный порядок показан выше.' };
      },
      reveal() { this.check(); },
    };
  }

  /* --- 7. диалог с подстановкой реплик --- */
  function rDialog(t, body) {
    let g = -1;
    body.innerHTML = '<div class="dialog tk-dialog">' + t.turns.map((tn) => {
      if (tn.t) {
        return '<p><span class="who">' + esc(tn.who) + ':</span>'
          + '<span class="en nobar line">' + esc(tn.t) + '</span> ' + earHTML(tn.t) + '</p>';
      }
      g += 1;
      const gi = g;
      return '<p class="gapline"><span class="who">' + esc(tn.who) + ':</span>'
        + '<span class="pick en nobar" data-g="' + gi + '">…</span>'
        + '<span class="opts" data-g="' + gi + '">'
        + shuffle(tn.opts.slice()).map((o) =>
          '<button class="opt" type="button" data-g="' + gi + '" data-t="' + esc(o.t) + '">'
          + esc(o.t) + '</button>').join('') + '</span></p>';
    }).join('') + '</div>';
    markAll(body);
    wireEars(body);
    const gaps = t.turns.filter((x) => !x.t);
    const chosen = {};
    body.querySelectorAll('.opt').forEach((b) => {
      b.addEventListener('click', () => {
        if (b.disabled) return;
        const gi = b.dataset.g;
        body.querySelectorAll('.opt[data-g="' + gi + '"]').forEach((x) => x.classList.remove('on'));
        b.classList.add('on');
        chosen[gi] = b.dataset.t;
        const slot = body.querySelector('.pick[data-g="' + gi + '"]');
        slot.textContent = b.dataset.t;
        slot.dataset.marked = '';
        say(b.dataset.t);
      });
    });
    return {
      check() {
        const notes = [];
        let allOk = true;
        gaps.forEach((tn, i) => {
          const right = tn.opts.find((o) => o.ok);
          const pick = chosen[i];
          const ok = pick != null && norm(pick) === norm(right.t);
          if (!ok) allOk = false;
          body.querySelectorAll('.opt[data-g="' + i + '"]').forEach((b) => {
            b.disabled = true;
            if (norm(b.dataset.t) === norm(right.t)) b.classList.add('ok');
            else if (b.classList.contains('on')) b.classList.add('bad');
          });
          const slot = body.querySelector('.pick[data-g="' + i + '"]');
          slot.innerHTML = esc(right.t) + ' ' + earHTML(right.t);
          if (!ok) {
            const wrong = tn.opts.find((o) => pick != null && norm(o.t) === norm(pick));
            notes.push('<b>' + esc(right.t) + '</b> — ' + right.why
              + (wrong ? ' Вариант <i>' + esc(wrong.t) + '</i>: ' + wrong.why : ''));
          }
        });
        wireEars(body);
        return { ok: allOk, note: notes.join('<br>') };
      },
      reveal() {
        gaps.forEach((tn, i) => {
          const right = tn.opts.find((o) => o.ok);
          const slot = body.querySelector('.pick[data-g="' + i + '"]');
          slot.textContent = right.t;
          body.querySelectorAll('.opt[data-g="' + i + '"]').forEach((b) => { b.disabled = true; });
        });
      },
    };
  }

  const RENDER = {
    fill: rFill, choice: rChoice, build: rBuild, match: rMatch,
    sort: rSort, order: rOrder, dialog: rDialog,
  };

  /* ---------- карточка одного задания ----------
   * onResult(task, ok) вызывается после проверки.
   * opts.silent — не писать результат в общий прогресс и не показывать отметку
   * с прошлого раза: так карточку берёт проверка уровня, чтобы тест не
   * перемешивался со статистикой занятий. */
  function card(task, onResult, opts) {
    opts = opts || {};
    const box = document.createElement('div');
    box.className = 'task-card';
    box.dataset.id = task.id;
    box.innerHTML = '<div class="tk-head">'
      + '<span class="tk-n">задание ' + esc(String(task.src)) + '</span>'
      + '<span class="tk-topic">' + esc(task.topic) + '</span>'
      + '<span class="tk-badge"></span></div>'
      + '<div class="tk-q">' + task.q + '</div>'
      + '<div class="tk-body"></div>'
      + '<div class="row tk-row"><button class="btn primary check" type="button">проверить</button>'
      + '<button class="btn again" type="button">пройти заново</button></div>'
      + '<div class="tk-fb"></div>';
    const body = box.querySelector('.tk-body');
    const fb = box.querySelector('.tk-fb');
    const badge = box.querySelector('.tk-badge');
    const bCheck = box.querySelector('.check');
    const bAgain = box.querySelector('.again');
    let view = null;

    function draw() {
      fb.innerHTML = '';
      badge.className = 'tk-badge';
      badge.textContent = '';
      bCheck.disabled = false;
      view = (RENDER[task.type] || rFill)(task, body);
      wireEars(box);
    }
    function verdict(ok, note) {
      badge.className = 'tk-badge ' + (ok ? 'ok' : 'bad');
      badge.textContent = ok ? 'верно' : 'есть ошибки';
      fb.innerHTML = '<div class="fb ' + (ok ? 'ok' : 'bad') + '">'
        + (ok ? '<b>Верно.</b> ' : '<b>Есть ошибки.</b> ')
        + (note || '')
        + (task.why ? '<div class="why">' + task.why + '</div>' : '') + '</div>';
      bCheck.disabled = true;
    }
    bCheck.addEventListener('click', () => {
      if (bCheck.disabled) return;
      const r = view.check();
      verdict(r.ok, r.note);
      if (!opts.silent) remember(task, r.ok);
      if (onResult) onResult(task, r.ok);
    });
    bAgain.addEventListener('click', draw);
    draw();

    /* восстановление отметки с прошлого раза: задание уже решалось */
    const prev = opts.silent ? undefined : done()[task.id];
    if (prev !== undefined) {
      badge.className = 'tk-badge ' + (prev ? 'was-ok' : 'was-bad');
      badge.textContent = prev ? 'решено верно' : 'было с ошибками';
    }
    return box;
  }

  /* ---------- страница заданий ---------- */
  function mount(host, opts) {
    if (!host) return null;
    opts = opts || {};
    const size = opts.size || 6;
    let list = (window.TASKS || []).slice();
    if (opts.unit) list = list.filter((t) => t.unit === opts.unit);
    if (opts.topic) list = list.filter((t) => t.topic === opts.topic);
    if (!list.length) {
      host.innerHTML = '<p class="muted">Задания пока не добавлены.</p>';
      return null;
    }
    const blocks = [];
    for (let i = 0; i < list.length; i += size) blocks.push(list.slice(i, i + size));
    let cur = 0;

    host.innerHTML = '<div class="tasks">'
      + '<div class="tk-top">'
      + '<div class="progressbar"><i style="width:0"></i></div>'
      + '<div class="stats"><span>блок <b class="bn">1</b> из <b>' + blocks.length + '</b></span>'
      + '<span>решено <b class="dn">0</b> из <b>' + list.length + '</b></span>'
      + '<span>из них верно <b class="rn">0</b></span></div>'
      + '<div class="tk-blocks"></div></div>'
      + '<div class="tk-list"></div>'
      + '<div class="row tk-nav"></div>'
      + '<details class="q tk-topics"><summary>Статистика по темам</summary>'
      + '<div class="tk-tt"></div></details></div>';

    const listBox = host.querySelector('.tk-list');
    const navBox = host.querySelector('.tk-nav');
    const chipBox = host.querySelector('.tk-blocks');
    const bar = host.querySelector('.progressbar i');

    function counts() {
      const d = done();
      let dn = 0, rn = 0;
      list.forEach((t) => { if (d[t.id] !== undefined) { dn += 1; if (d[t.id]) rn += 1; } });
      return { dn, rn };
    }
    function head() {
      const c = counts();
      host.querySelector('.bn').textContent = String(cur + 1);
      host.querySelector('.dn').textContent = String(c.dn);
      host.querySelector('.rn').textContent = String(c.rn);
      bar.style.width = (100 * c.dn / list.length) + '%';
      chips();
      tt();
    }
    function chips() {
      const d = done();
      chipBox.innerHTML = blocks.map((b, i) => {
        const n = b.filter((t) => d[t.id] !== undefined).length;
        const cls = 'chip' + (i === cur ? ' on' : '') + (n === b.length ? ' full' : '');
        return '<span class="' + cls + '" data-b="' + i + '">блок ' + (i + 1)
          + ' <b>' + n + '/' + b.length + '</b></span>';
      }).join('');
      chipBox.querySelectorAll('.chip').forEach((c) => {
        c.addEventListener('click', () => { cur = +c.dataset.b; render(); });
      });
    }
    function tt() {
      const t = topics();
      const mine = {};
      list.forEach((x) => { if (t[x.topic]) mine[x.topic] = t[x.topic]; });
      const keys = Object.keys(mine).sort();
      const box = host.querySelector('.tk-tt');
      if (!keys.length) {
        box.innerHTML = '<p class="muted">Пока нет проверенных заданий: '
          + 'статистика появится, как только вы нажмёте «проверить».</p>';
        return;
      }
      box.innerHTML = '<table class="dt"><thead><tr><th>тема</th>'
        + '<th class="num">проверок</th><th class="num">верно</th><th class="num">доля</th>'
        + '</tr></thead><tbody>' + keys.map((k) => {
          const r = mine[k];
          const pct = r.asked ? Math.round(100 * r.right / r.asked) : 0;
          return '<tr><td>' + esc(k) + '</td><td class="num">' + r.asked
            + '</td><td class="num">' + r.right + '</td><td class="num">' + pct + '%</td></tr>';
        }).join('') + '</tbody></table>'
        + '<p class="muted">Прогресс хранится в этом браузере и сохраняется '
        + 'после перезагрузки страницы.</p>'
        + '<button class="btn wipe" type="button">сбросить прогресс по этим заданиям</button>';
      box.querySelector('.wipe').addEventListener('click', () => {
        const d = done(); const tp = topics();
        list.forEach((x) => { delete d[x.id]; delete tp[x.topic]; });
        write(K_DONE, d); write(K_TOPIC, tp);
        render();
      });
    }
    function render() {
      listBox.innerHTML = '';
      blocks[cur].forEach((t) => listBox.appendChild(card(t, head)));
      navBox.innerHTML = '';
      if (cur > 0) navBox.appendChild(navBtn('← предыдущий блок', () => { cur -= 1; render(); }));
      if (cur < blocks.length - 1) {
        navBox.appendChild(navBtn('следующий блок →', () => { cur += 1; render(); }, true));
      }
      head();
      const top = host.querySelector('.tk-top');
      if (top && top.getBoundingClientRect().top < 0) top.scrollIntoView({ block: 'start' });
    }
    function navBtn(text, fn, primary) {
      const b = document.createElement('button');
      b.className = 'btn' + (primary ? ' primary' : ''); b.type = 'button'; b.textContent = text;
      b.addEventListener('click', fn);
      return b;
    }
    render();
    return { render, blocks };
  }

  function autoMount() {
    document.querySelectorAll('[data-tasks]').forEach((el) => {
      mount(el, { unit: el.dataset.tasks || '', size: +(el.dataset.size || 6) });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', autoMount);
  else autoMount();

  window.EXER = { mount, card, done, topics, norm };
})();
