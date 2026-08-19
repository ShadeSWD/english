/* Проверка уровня: ступенчатый тест, профиль по пяти осям и совет, с чего
 * начать, посчитанный методом отношений.
 *
 * Задания рисует общий движок заданий (assets/exercises.js, EXER.card):
 * своего движка здесь нет, есть только сценарий теста.
 *
 * Как устроен тест:
 *   план лежит в assets/tasks-level.js (window.LEVEL_PLAN) — пять блоков
 *   A0 → A1 → A2 → B1 → B2, в каждом 8–10 заданий, у каждого задания указана
 *   ось. Блок показывается целиком; после нажатия «закончить блок» считается
 *   доля верных. Меньше половины — тест останавливается: дальше человека
 *   мучить незачем, уровень уже известен.
 *
 * Что получается на выходе:
 *   1) уровень A0…B2 (последний блок, который прошёл);
 *   2) профиль — доля верных по каждой из пяти осей;
 *   3) совет: какой маршрут занятий начать первым.
 *
 * Совет считает движок Relation Metrics (POST /relmet/api/decide/). Веса
 * критериев НЕ назначаются вручную: вес оси = дефицит × актуальность, где
 *   дефицит      = 1 − доля верных по оси (что не знаете);
 *   актуальность = доля заданий этой оси в блоках, до которых вы дошли
 *                  (что вообще спрашивалось на вашем рубеже).
 * Обе величины меряет тест. Без второго множителя совет получается
 * бессмысленным: у человека, не знающего алфавита, дефицит по деловому
 * английскому тоже равен единице, и движок честно советует ему учить
 * деловую переписку.
 *
 * Если движок недоступен — считается линейная свёртка на странице, и об этом
 * прямо пишется в результате.
 */
'use strict';
(function () {
  var API = 'https://shadeswd.duckdns.org/relmet/api/decide/';
  var HOME = 'https://shadeswd.duckdns.org/relmet/';
  var KEY = 'en.level';
  var P = window.LEVEL_PLAN || null;
  var AX = P ? P.axes.map(function (a) { return a.k; }) : [];

  /* ---------- мелкие утилиты ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function pct(x, d) {
    return (x === null || x === undefined || !isFinite(x)) ? '—'
      : (100 * x).toFixed(d === undefined ? 0 : d) + ' %';
  }
  function num(x, d) {
    return (x === null || x === undefined || !isFinite(x)) ? '—' : x.toFixed(d);
  }
  function read(key, def) {
    try { var v = window.localStorage.getItem(key); return v ? JSON.parse(v) : def; }
    catch (e) { return def; }
  }
  function write(key, val) {
    try { window.localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* приватный режим */ }
  }
  function task(id) {
    var all = window.TASKS || [];
    for (var i = 0; i < all.length; i++) if (all[i].id === id) return all[i];
    return null;
  }
  function axisTitle(k) {
    for (var i = 0; i < P.axes.length; i++) if (P.axes[i].k === k) return P.axes[i].t;
    return k;
  }
  function levelCodes() { return P.levels.map(function (l) { return l.code; }); }

  /* ---------- счёт: профиль, актуальность осей, веса ---------- */

  /* res — массив {code, id, axis, ok}; reached — коды показанных блоков. */
  function analyse(res, reached) {
    var axes = {}, i;
    AX.forEach(function (k) { axes[k] = { asked: 0, right: 0, score: null }; });
    res.forEach(function (r) {
      var a = axes[r.axis];
      if (!a) return;
      a.asked += 1; if (r.ok) a.right += 1;
    });
    AX.forEach(function (k) {
      var a = axes[k];
      a.score = a.asked ? a.right / a.asked : null;
    });
    /* актуальность оси = сколько её заданий стояло в блоках, до которых дошли */
    var cnt = {}, total = 0;
    AX.forEach(function (k) { cnt[k] = 0; });
    P.levels.forEach(function (l) {
      if (reached.indexOf(l.code) < 0) return;
      l.items.forEach(function (it) {
        if (cnt[it.axis] === undefined) return;
        cnt[it.axis] += 1; total += 1;
      });
    });
    var mx = 1;
    AX.forEach(function (k) { if (cnt[k] > mx) mx = cnt[k]; });
    var rel = {};
    AX.forEach(function (k) { rel[k] = cnt[k] / mx; });
    return { axes: axes, rel: rel, cnt: cnt, total: total, reached: reached };
  }

  /* Веса критериев: пять измеренных + два внешних (время и скорость отдачи). */
  function weights(an) {
    var w = {};
    AX.forEach(function (k) {
      var s = an.axes[k].score;
      var deficit = (s === null) ? 1 : 1 - s;
      w[k] = Math.max(0.05, Math.round(deficit * an.rel[k] * 1000) / 1000);
    });
    P.extra.forEach(function (e) { w[e.k] = e.w; });
    return w;
  }

  function criteria() {
    var out = P.axes.map(function (a) {
      return { k: a.k, t: a.t, dir: 'max', d: a.d };
    });
    P.extra.forEach(function (e) {
      out.push({ k: e.k, t: e.t, dir: e.dir, d: e.d, unit: e.unit });
    });
    return out;
  }
  function routeValues(r) {
    return criteria().map(function (c) {
      return (c.k in r.v) ? r.v[c.k] : r[c.k];
    });
  }
  function payload(w) {
    var crit = criteria();
    return {
      directions: crit.map(function (c) { return c.dir; }),
      weights: crit.map(function (c) { return w[c.k]; }),
      values: P.routes.map(routeValues),
      alt_ids: P.routes.map(function (r) { return r.id; }),
      method: 'auto',
    };
  }

  /* Запасной путь: нормировка по размаху с учётом направления и взвешенная
     сумма — ровно то же, что делает общий виджет кластера. */
  function localDecide(w) {
    var crit = criteria();
    var vals = P.routes.map(routeValues);
    var n = vals.length, m = crit.length;
    var wsum = crit.reduce(function (s, c) { return s + (+w[c.k] || 0); }, 0) || 1;
    var scores = vals.map(function () { return 0; });
    for (var j = 0; j < m; j++) {
      var col = vals.map(function (v) { return +v[j]; });
      var mn = Math.min.apply(null, col), mx = Math.max.apply(null, col);
      var rng = (mx - mn) || 1;
      for (var i = 0; i < n; i++) {
        var g = (col[i] - mn) / rng;
        if (crit[j].dir === 'min') g = 1 - g;
        scores[i] += (+w[crit[j].k] || 0) / wsum * g;
      }
    }
    var order = scores.map(function (s, i) { return i; })
      .sort(function (a, b) { return scores[b] - scores[a]; });
    return {
      decision: P.routes[order[0]].id,
      ranking: order.map(function (i) { return P.routes[i].id; }),
      scores: scores, fallback: true,
    };
  }

  /* ---------- диаграмма профиля ---------- */
  function color(s) {
    if (s === null) return '#6b6b74';
    if (s >= 0.75) return '#1a7f37';
    if (s >= 0.5) return '#155e75';
    return '#b3382e';
  }
  var SHORT = { read: 'чтение', gram: 'грамматика', lex: 'общая лексика',
    tech: 'техническая лексика', biz: 'деловой язык' };

  function profileSvg(an, code, prev) {
    /* полосы кончаются на 548, чтобы подпись «8/8 · 100 %» встала справа от
       полосы, а не поверх неё */
    var X0 = 200, X1 = 548, ROW = 44, TOP = 52, W = X1 - X0;
    var s = '<svg class="geo-board" viewBox="0 0 640 366" style="max-width:640px" role="img"'
      + ' aria-label="Профиль по пяти осям и достигнутый уровень">';
    /* сетка и её подписи */
    for (var p = 0; p <= 100; p += 25) {
      var x = X0 + W * p / 100;
      s += '<path class="ln-thin gray ln-dash" d="M' + x + ' 42 V254"/>'
        + '<text class="lbl gray" x="' + x + '" y="36" text-anchor="middle">'
        + (p === 100 ? '100 %' : p) + '</text>';
    }
    AX.forEach(function (k, i) {
      var y = TOP + i * ROW, a = an.axes[k], sc = a.score;
      var w = sc === null ? 0 : Math.round(W * sc);
      s += '<rect x="' + X0 + '" y="' + y + '" width="' + W + '" height="22" rx="5"'
        + ' fill="#f1f1f4" stroke="#dcdce2"/>';
      if (w > 0) {
        s += '<rect x="' + X0 + '" y="' + y + '" width="' + w + '" height="22" rx="5" fill="'
          + color(sc) + '"/>';
      }
      if (prev && prev.axes && prev.axes[k] && prev.axes[k].asked) {
        var px = X0 + Math.round(W * prev.axes[k].right / prev.axes[k].asked);
        s += '<path class="ln-thin ln-dash" d="M' + px + ' ' + (y - 3) + ' V' + (y + 25) + '"/>';
      }
      s += '<text class="lbl b" x="190" y="' + (y + 15) + '" text-anchor="end">'
        + esc(SHORT[k] || k) + '</text>'
        + '<text class="lbl" x="632" y="' + (y + 15) + '" text-anchor="end">'
        + (sc === null ? 'нет данных' : (a.right + '/' + a.asked + ' · ' + pct(sc)))
        + '</text>';
    });
    /* шкала уровня */
    var codes = levelCodes();
    s += '<path class="ln" d="M' + X0 + ' 300 H' + X1 + '"/>'
      + '<text class="lbl b" x="190" y="304" text-anchor="end">уровень</text>';
    codes.forEach(function (c, i) {
      var x = X0 + i * (W / (codes.length - 1));
      s += '<path class="ln-thin" d="M' + x + ' 294 V306"/>'
        + '<text class="lbl" x="' + x + '" y="320" text-anchor="middle">' + c + '</text>';
    });
    var idx = codes.indexOf(code);
    var mx = X0 + (idx < 0 ? 0 : idx) * (W / (codes.length - 1));
    s += '<circle cx="' + mx + '" cy="300" r="7" fill="' + (idx < 0 ? '#b3382e' : '#1a7f37')
      + '"/><text class="lbl b" x="' + mx + '" y="282" text-anchor="middle">'
      + (idx < 0 ? 'ниже A0' : 'вы здесь') + '</text>';
    s += '<text class="lbl gray" x="20" y="348">доля верных ответов по каждой оси; '
      + 'пунктирная черта — прошлая попытка</text>';
    return s + '</svg>';
  }

  /* ---------- обоснование оценок маршрутов ---------- */
  function routesSection(el) {
    var crit = criteria();
    el.innerHTML = P.routes.map(function (r) {
      var v = routeValues(r);
      var name = r.page ? '<a href="' + esc(r.page) + '">' + esc(r.id) + '</a>' : esc(r.id);
      return '<div class="task"><h3 style="margin-top:0">' + name + '</h3>'
        + '<p style="margin:4px 0">' + esc(r.why) + '</p>'
        + '<p class="small" style="margin:0">Оценки: '
        + crit.map(function (c, i) {
          return esc(c.k === 'hours' ? 'время' : (c.k === 'quick' ? 'отдача' : SHORT[c.k]))
            + ' <b>' + v[i] + (c.unit ? ' ' + c.unit : '') + '</b>';
        }).join(' · ') + '</p></div>';
    }).join('');
  }

  /* ---------- страница ---------- */
  function boot() {
    var rbox = P && document.getElementById('lvroutes');
    if (rbox) routesSection(rbox);
    var host = document.getElementById('lvtest');
    if (!host || !P) return;
    var out = document.getElementById('lvresult') || host;

    var state = null;   /* {i, res:[], reached:[], passed:[]} */

    function saved() { return read(KEY, null); }

    function start() {
      state = { i: 0, res: [], reached: [], passed: [] };
      out.innerHTML = '';
      block();
    }

    /* ---- один блок ---- */
    function block() {
      var lv = P.levels[state.i];
      var items = lv.items.filter(function (it) { return !!task(it.id); });
      state.reached.push(lv.code);
      host.innerHTML = '<div class="panel"><h3 style="margin-top:0">Блок ' + lv.code
        + ' — ' + esc(lv.t) + '</h3>'
        + '<p class="small" style="margin-top:0">' + esc(lv.d) + '</p>'
        + '<p class="small">Заданий в блоке: <b>' + items.length + '</b>. Проверяйте каждое '
        + 'кнопкой «проверить», потом нажмите «закончить блок». Если верных окажется '
        + 'меньше половины, тест на этом остановится — это не поражение, а найденная '
        + 'граница.</p>'
        + '<div class="lv-cards"></div>'
        + '<div class="row" style="margin-top:12px"><button class="btn primary lv-done" type="button">'
        + 'закончить блок ' + lv.code + '</button>'
        + '<span class="small">проверено <b class="lv-n">0</b> из ' + items.length + '</span></div>'
        + '</div>';
      var box = host.querySelector('.lv-cards');
      var got = {};
      items.forEach(function (it) {
        var t = task(it.id);
        var el = window.EXER.card(t, function (tk, ok) {
          got[tk.id] = !!ok;
          host.querySelector('.lv-n').textContent = String(Object.keys(got).length);
        }, { silent: true });
        box.appendChild(el);
      });
      host.querySelector('.lv-done').addEventListener('click', function () {
        items.forEach(function (it) {
          state.res.push({ code: lv.code, id: it.id, axis: it.axis, ok: !!got[it.id] });
        });
        var right = items.filter(function (it) { return got[it.id]; }).length;
        var share = items.length ? right / items.length : 0;
        if (share >= P.pass) {
          state.passed.push(lv.code);
          state.i += 1;
          if (state.i < P.levels.length) { block(); window.scrollTo(0, 0); return; }
        }
        finish(right, items.length, share >= P.pass);
      });
      window.scrollTo(0, Math.max(0, host.getBoundingClientRect().top + window.pageYOffset - 80));
    }

    /* ---- итог ---- */
    function finish(right, total, passed) {
      var code = state.passed.length ? state.passed[state.passed.length - 1] : null;
      var an = analyse(state.res, state.reached);
      var rec = {
        ts: Date.now(), code: code, reached: state.reached, passed: state.passed,
        axes: {}, last: { right: right, total: total, passed: passed },
      };
      AX.forEach(function (k) {
        rec.axes[k] = { asked: an.axes[k].asked, right: an.axes[k].right };
      });
      var store = saved() || {};
      write(KEY, { last: rec, prev: store.last || null });
      host.innerHTML = '<div class="note tip">Тест пройден. Результат сохранён в этом '
        + 'браузере: можно вернуться через месяц и сравнить.</div>'
        + '<div class="row"><button class="btn lv-restart" type="button">пройти заново</button></div>';
      host.querySelector('.lv-restart').addEventListener('click', start);
      showResult(rec, store.last || null);
    }

    /* ---- показ результата и совета ---- */
    function showResult(rec, prev) {
      var res = [];
      /* восстанавливаем разбор из сохранённых счётчиков */
      var an = { axes: {}, rel: {}, cnt: {}, reached: rec.reached };
      AX.forEach(function (k) {
        var a = rec.axes[k] || { asked: 0, right: 0 };
        an.axes[k] = { asked: a.asked, right: a.right,
          score: a.asked ? a.right / a.asked : null };
      });
      var cnt = {}, mx = 1;
      AX.forEach(function (k) { cnt[k] = 0; });
      P.levels.forEach(function (l) {
        if (rec.reached.indexOf(l.code) < 0) return;
        l.items.forEach(function (it) { if (cnt[it.axis] !== undefined) cnt[it.axis] += 1; });
      });
      AX.forEach(function (k) { if (cnt[k] > mx) mx = cnt[k]; });
      AX.forEach(function (k) { an.rel[k] = cnt[k] / mx; an.cnt[k] = cnt[k]; });

      var code = rec.code;
      var when = new Date(rec.ts).toLocaleDateString('ru-RU');
      var levText = code === null
        ? 'Блок A0 пока не пройден: буквы и правила чтения нужно ставить с самого начала.'
        : 'Пройдены блоки ' + rec.passed.join(', ') + '. Уровень — <b>' + code + '</b>.';
      var html = '<h2>Результат</h2>'
        + '<p class="lead">' + levText + ' Проверка от ' + when + '.</p>'
        + profileSvg(an, code, prev)
        + '<p class="caption">Профиль по пяти осям. Серым — оси, по которым заданий не '
        + 'было: тест до них не дошёл.</p>'
        + '<div style="overflow-x:auto"><table class="dt"><thead><tr><th>Ось</th>'
        + '<th>спрошено</th><th>верно</th><th>доля</th><th>дефицит</th>'
        + '<th>актуальность</th><th>вес критерия</th></tr></thead><tbody>';
      var w = weights(an);
      AX.forEach(function (k) {
        var a = an.axes[k];
        html += '<tr><td>' + esc(axisTitle(k)) + '</td><td>' + a.asked + '</td><td>'
          + a.right + '</td><td>' + pct(a.score) + '</td><td>'
          + num(a.score === null ? 1 : 1 - a.score, 2) + '</td><td>'
          + num(an.rel[k], 2) + '</td><td><b>' + num(w[k], 2) + '</b></td></tr>';
      });
      P.extra.forEach(function (e) {
        html += '<tr><td>' + esc(e.t) + '</td><td colspan="5" class="small">внешний критерий, '
          + 'тестом не измеряется</td><td><b>' + num(e.w, 2) + '</b></td></tr>';
      });
      html += '</tbody></table></div>'
        + '<p class="small">Вес оси = дефицит × актуальность. Дефицит — доля того, что не '
        + 'сделано верно. Актуальность — сколько заданий этой оси стояло в блоках, до '
        + 'которых вы дошли, по отношению к самой частой оси. Второй множитель нужен: '
        + 'без него у человека, не знающего алфавита, дефицит по деловому английскому '
        + 'тоже равен единице, и совет получается бессмысленным.</p>'
        + (AX.every(function (k) { return w[k] <= 0.05; })
          ? '<div class="note warn">Тест не нашёл ни одного провала: все веса упёрлись '
            + 'в нижнюю границу, и совет ниже выбирается уже только по времени и '
            + 'скорости отдачи. Понимать его нужно так: учить по этому курсу вам, '
            + 'скорее всего, нечего, разумно просто поддерживать словарь.</div>'
          : '')
        + '<div id="lvadvice"></div>';
      out.innerHTML = html;
      advice(w);
    }

    /* ---- совет: таблица, ползунки, движок ---- */
    function advice(w0) {
      var box = document.getElementById('lvadvice');
      var crit = criteria();
      var w = {};
      crit.forEach(function (c) { w[c.k] = w0[c.k]; });

      var head = '<tr><th style="text-align:left">Маршрут</th>'
        + crit.map(function (c) {
          return '<th>' + esc(c.k === 'hours' ? 'часы' : (c.k === 'quick' ? 'отдача' : SHORT[c.k]))
            + '<div class="small" style="font-weight:400">вес <b data-wh="' + c.k + '">'
            + num(w[c.k], 2) + '</b></div></th>';
        }).join('') + '</tr>';
      var rows = P.routes.map(function (r) {
        return '<tr><td style="text-align:left">' + esc(r.id) + '</td>'
          + routeValues(r).map(function (v) { return '<td>' + v + '</td>'; }).join('')
          + '</tr>';
      }).join('');

      box.innerHTML = '<h2>С чего начать</h2>'
        + '<p>Совет считается методом отношений: девять маршрутов сравниваются по семи '
        + 'критериям. Пять критериев — оси теста, их веса взяты из ваших ответов; два '
        + 'внешних — время и скорость отдачи.</p>'
        + '<div style="overflow-x:auto"><table class="dt" id="lvtbl"><thead>' + head
        + '</thead><tbody>' + rows + '</tbody></table></div>'
        + '<p class="small">В клетках — насколько маршрут <b>закрывает</b> ось по '
        + 'десятибалльной шкале (не насколько он её использует), часы занятий и оценка '
        + 'скорости отдачи. Каждая строка объяснена ниже, в разделе «Оценки маршрутов '
        + 'и откуда они взяты».</p>'
        + '<div class="panel"><h3 style="margin-top:0">Веса можно поправить</h3>'
        + '<p class="small" style="margin-top:0">Если вам важнее что-то одно — скажем, '
        + 'к весне читать документацию, — поднимите вес этого критерия и пересчитайте.</p>'
        + '<div class="controls lv-sliders">' + crit.map(function (c) {
          return '<label>' + esc(c.t) + '<input type="range" min="0" max="1" step="0.01" value="'
            + w[c.k] + '" data-k="' + c.k + '"><span class="readout" data-r="' + c.k + '">'
            + num(w[c.k], 2) + '</span></label>';
        }).join('') + '</div>'
        + '<div class="row"><button class="btn primary lv-go" type="button">пересчитать совет</button>'
        + '<button class="btn lv-reset" type="button">вернуть измеренные веса</button></div>'
        + '<div class="lv-out" style="margin-top:10px"></div></div>';

      var outBox = box.querySelector('.lv-out');
      function sync() {
        box.querySelectorAll('input[data-k]').forEach(function (inp) {
          w[inp.dataset.k] = +inp.value;
          box.querySelector('[data-r="' + inp.dataset.k + '"]').textContent = num(+inp.value, 2);
          var th = box.querySelector('[data-wh="' + inp.dataset.k + '"]');
          if (th) th.textContent = num(+inp.value, 2);
        });
      }
      box.querySelectorAll('input[data-k]').forEach(function (inp) {
        inp.addEventListener('input', sync);
      });
      box.querySelector('.lv-reset').addEventListener('click', function () {
        box.querySelectorAll('input[data-k]').forEach(function (inp) {
          inp.value = w0[inp.dataset.k];
        });
        sync(); go();
      });
      box.querySelector('.lv-go').addEventListener('click', function () { sync(); go(); });

      function draw(r, live) {
        var ids = P.routes.map(function (x) { return x.id; });
        var order = (r.ranking || ids).slice();
        var maxS = Math.max.apply(null, r.scores.map(Math.abs).concat([1e-9]));
        var bars = order.map(function (id, place) {
          var i = ids.indexOf(id);
          var s = r.scores[i], wd = Math.round(Math.abs(s) / maxS * 100);
          var win = id === r.decision;
          return '<div style="display:flex;align-items:center;gap:8px;margin:4px 0;'
            + 'font:13.5px system-ui">'
            + '<div style="width:42%;text-align:right">' + (place + 1) + '. ' + esc(id) + '</div>'
            + '<div style="flex:1;background:#eceae3;border-radius:6px;overflow:hidden">'
            + '<div style="width:' + Math.max(wd, 6) + '%;background:'
            + (win ? '#1a7f37' : '#155e75') + ';color:#fff;padding:2px 8px;border-radius:6px;'
            + 'white-space:nowrap">' + num(s, 3) + '</div></div></div>';
        }).join('');
        var rt = null;
        P.routes.forEach(function (x) { if (x.id === r.decision) rt = x; });
        var h = '<p style="font:15px system-ui;margin:0 0 6px">🏆 Начать стоит с маршрута '
          + '<b>' + esc(r.decision) + '</b>.';
        if (r.confidence != null) {
          h += ' Уверенность движка ' + pct(r.confidence);
          if (r.ensemble_agreement != null) h += ', согласие ансамбля методов ' + pct(r.ensemble_agreement);
          if (r.stability != null) h += ', устойчивость к возмущению весов ' + pct(r.stability);
          h += '.';
        }
        h += '</p>';
        if (rt) {
          h += '<p class="small">' + esc(rt.why)
            + (rt.page ? ' <a href="' + esc(rt.page) + '">открыть раздел →</a>' : '') + '</p>';
        }
        var verdict = '';
        if (live && r.status) {
          verdict = (r.status === 'accepted' || r.accepted)
            ? '<div class="note tip" style="margin:8px 0">Решение принимается: разные способы '
              + 'свёртки дают один и тот же ответ.</div>'
            : '<div class="note warn" style="margin:8px 0">Движок пометил решение как '
              + '<b>требующее обсуждения</b> (needs_review): маршруты в верхушке списка '
              + 'разошлись слишком мало, и разные способы свёртки ставят первым разные. '
              + 'Практически это значит, что любой из первых двух-трёх годится — берите '
              + 'тот, который вам интереснее, разница в расчёте меньше разницы в желании '
              + 'им заниматься.</div>';
        }
        var tail = live
          ? '<p class="small">Считает живой движок <a href="' + HOME + '">Relation Metrics</a>'
            + (r.method_name ? ' — способ свёртки выбран автоматически: «' + esc(r.method_name) + '»' : '')
            + '. Порядок маршрутов показан целиком: если второй отстаёт на сотые доли, '
            + 'выбор между ними — дело вкуса.</p>'
          : '<p class="small">Движок сейчас недоступен, поэтому показана простая взвешенная '
            + 'свёртка на этой странице: без ансамбля методов и без оценки устойчивости. '
            + 'Порядок маршрутов от этого обычно не меняется, но доверять ему стоит меньше.</p>';
        outBox.innerHTML = h + verdict + bars + tail;
      }

      function go() {
        outBox.innerHTML = '<p class="small">считаю…</p>';
        var body = payload(w);
        fetch(API, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }).then(function (r) { return r.ok ? r.json() : null; })
          .then(function (r) {
            if (r && !r.error && r.scores) draw(r, true);
            else draw(localDecide(w), false);
          })
          .catch(function () { draw(localDecide(w), false); });
      }
      go();
    }

    /* ---- начальный экран ---- */
    function intro() {
      var st = saved();
      var n = P.levels.reduce(function (s, l) { return s + l.items.length; }, 0);
      host.innerHTML = '<div class="panel"><h3 style="margin-top:0">Ступенчатый тест</h3>'
        + '<p style="margin-top:0">Пять блоков подряд: A0 → A1 → A2 → B1 → B2, всего до '
        + n + ' заданий. Блок открывается только после того, как пройден предыдущий; '
        + 'если в блоке верных меньше половины, тест останавливается. Обычно это 10–25 '
        + 'минут.</p>'
        + (st && st.last
          ? '<div class="note">Прошлая проверка от '
            + new Date(st.last.ts).toLocaleDateString('ru-RU') + ': уровень <b>'
            + (st.last.code || 'ниже A0') + '</b>. Результат показан ниже; можно пройти заново '
            + 'и сравнить — прошлая попытка отметится на диаграмме пунктиром.</div>'
          : '')
        + '<div class="row"><button class="btn primary lv-start" type="button">'
        + (st && st.last ? 'пройти заново' : 'начать тест') + '</button></div></div>';
      host.querySelector('.lv-start').addEventListener('click', start);
      if (st && st.last) showResult(st.last, st.prev || null);
    }

    intro();
  }

  /* расчётная часть выведена наружу: её же прогоняют проверки без браузера */
  window.LEVEL = {
    analyse: analyse, weights: weights, payload: payload,
    criteria: criteria, localDecide: localDecide, profileSvg: profileSvg,
  };

  if (typeof document === 'undefined') return;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
