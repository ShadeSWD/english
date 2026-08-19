/* Списки слов: тематический список в конце страницы и полный словарь курса.
 *
 *  <div class="wordbox" data-page="u1"></div>        — слова этой страницы
 *  <div class="wordbox" data-topic="ship"></div>     — слова одной темы
 *  <div id="vocab-app"></div>                        — полный словарь с поиском
 *
 * Слово в списке кликабельно: произношение и карточка берутся из speak.js.
 */
'use strict';
(function () {
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g,
      (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }
  const all = () => window.VOCAB || [];
  const topics = () => window.TOPICS || {};
  const pages = () => window.PAGES || {};

  function row(e, withSrc) {
    const where = withSrc
      ? '<td class="src">' + (e.at || []).map((a) => pages()[a]
        ? `<a href="${esc(a)}">${esc(pages()[a])}</a>` : '').filter(Boolean).join(', ') + '</td>'
      : '';
    return `<tr>
      <td class="w en-w" data-word="${esc(e.w)}" title="произнести">${esc(e.w)}</td>
      <td class="ipa">[${esc(e.ipa)}]</td>
      <td class="pos">${esc(e.pos)}</td>
      <td>${esc(e.ru)}</td>${where}</tr>`;
  }

  function table(list, withSrc) {
    return `<table class="voc"><thead><tr>
      <th>слово</th><th>транскрипция</th><th>ч. р.</th><th>перевод</th>
      ${withSrc ? '<th>где встречается</th>' : ''}</tr></thead>
      <tbody>${list.map((e) => row(e, withSrc)).join('')}</tbody></table>`;
  }

  /* ---------- тематический список на странице ---------- */
  function wordboxes() {
    document.querySelectorAll('.wordbox').forEach((box) => {
      const p = box.dataset.page, t = box.dataset.topic;
      let list = all();
      if (p) list = list.filter((e) => (e.at || []).indexOf(p) >= 0);
      if (t) list = list.filter((e) => e.topic === t);
      list = list.slice().sort((a, b) => a.w.localeCompare(b.w));
      if (!list.length) { box.innerHTML = '<p class="muted">Список пуст.</p>'; return; }
      box.innerHTML = '<p class="muted">Щёлкните по слову — оно будет произнесено, '
        + 'появится карточка с транскрипцией и примером. Всего слов: '
        + list.length + '.</p>' + table(list, false);
    });
  }

  /* ---------- полный словарь ---------- */
  function vocabApp() {
    const host = document.getElementById('vocab-app');
    if (!host) return;
    const T = topics();
    const keys = Object.keys(T);
    host.innerHTML = `
      <div class="vocab-bar">
        <input type="search" placeholder="поиск: слово, перевод, транскрипция" aria-label="поиск">
        <select class="pos">
          <option value="">любая часть речи</option>
          <option value="n">существительное</option>
          <option value="v">глагол</option>
          <option value="adj">прилагательное</option>
          <option value="adv">наречие</option>
          <option value="phr">сочетание</option>
        </select>
        <span class="count muted"></span>
      </div>
      <div class="chips"><span class="chip on" data-t="">все темы</span>
        ${keys.map((k) => `<span class="chip" data-t="${k}">${esc(T[k])}</span>`).join('')}</div>
      <div class="out"></div>`;
    const q = host.querySelector('input[type=search]');
    const pos = host.querySelector('select.pos');
    const out = host.querySelector('.out');
    const cnt = host.querySelector('.count');
    let topic = '';

    function draw() {
      const s = q.value.trim().toLowerCase();
      const p = pos.value;
      let list = all().filter((e) => {
        if (topic && e.topic !== topic) return false;
        if (p && (e.pos || '').indexOf(p) < 0) return false;
        if (!s) return true;
        return (e.w + ' ' + e.ru + ' ' + e.ipa + ' ' + (e.forms || []).join(' '))
          .toLowerCase().indexOf(s) >= 0;
      });
      list = list.slice().sort((a, b) => a.w.localeCompare(b.w));
      cnt.textContent = 'найдено: ' + list.length + ' из ' + all().length;
      out.innerHTML = list.length ? table(list, true)
        : '<p class="muted">Ничего не найдено. Попробуйте часть слова или снимите фильтр темы.</p>';
    }
    q.addEventListener('input', draw);
    pos.addEventListener('change', draw);
    host.querySelectorAll('.chip').forEach((c) => {
      c.addEventListener('click', () => {
        host.querySelectorAll('.chip').forEach((x) => x.classList.remove('on'));
        c.classList.add('on'); topic = c.dataset.t; draw();
      });
    });
    const url = new URL(window.location.href);
    const pre = url.searchParams.get('q');
    if (pre) q.value = pre;
    draw();
  }

  /* ---------- сводка прогресса по тренажёрам ---------- */
  function progressBox() {
    const host = document.getElementById('progress-box');
    if (!host || !window.DRILL) return;
    const names = {
      cards: 'Карточки', gaps: 'Пропущенное слово', match: 'Слово и картинка',
      dictation: 'Диктант', order: 'Порядок слов', grammar: 'Грамматика юнитов',
      tasks: 'Задания юнитов 1–4',
    };
    const st = window.DRILL.stats();
    const keys = Object.keys(names);
    const rows = keys.map((k) => {
      const r = st[k];
      const pct = r && r.asked ? Math.round(100 * r.right / r.asked) : null;
      return `<tr><td>${names[k]}</td>
        <td class="num">${r ? r.asked : '—'}</td>
        <td class="num">${r ? r.right : '—'}</td>
        <td class="num">${pct === null ? '—' : pct + '%'}</td></tr>`;
    }).join('');
    const srsAll = window.DRILL.srs();
    const learned = Object.keys(srsAll).filter((w) => srsAll[w].box >= 3).length;
    host.innerHTML = `<table class="dt"><thead><tr>
        <th>тренажёр</th><th class="num">заданий</th><th class="num">верно</th><th class="num">доля</th>
      </tr></thead><tbody>${rows}</tbody></table>
      <p class="muted">В интервальном повторении: ${Object.keys(srsAll).length} слов,
      из них уверенно знаете ${learned}. Прогресс хранится в этом браузере
      (localStorage) и сохраняется после перезагрузки страницы.</p>
      <button class="btn" type="button" id="wipe">очистить весь прогресс</button>`;
    host.querySelector('#wipe').addEventListener('click', () => {
      try { localStorage.removeItem('en.stats'); localStorage.removeItem('en.srs'); }
      catch (e) { /* приватный режим */ }
      progressBox();
    });
  }

  function init() { wordboxes(); vocabApp(); progressBox(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  window.LISTS = { wordboxes, vocabApp, progressBox };
})();
