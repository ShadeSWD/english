/* Каркас страниц курса «Английский язык для кораблестроителей»:
 * шапка с группированной навигацией, подвал и общие SVG-маркеры стрелок. */
'use strict';
(function () {
  const me = document.currentScript;
  const root = (me && me.dataset.root) || './';
  const page = (me && me.dataset.page) || '';
  const logoSvg = `
  <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
    <rect x="1" y="1" width="28" height="28" rx="6" fill="#9d174d"/>
    <text x="15" y="22" text-anchor="middle" font-size="15">🗣️</text>
  </svg>`;
  const nav = [
    { h: '', k: 'index', t: 'Обзор' },
    { h: 'level', k: 'level', t: 'Проверка уровня' },
    { t: 'С нуля', h: 'zero', drop: [
      { h: 'zero', k: 'zero', t: 'С чего начать' },
      { h: 'z-alphabet', k: 'zero', t: 'Алфавит и звуки букв' },
      { h: 'z-reading', k: 'zero', t: 'Правила чтения' },
      { h: 'z-ipa', k: 'zero', t: 'Транскрипция' },
      { h: 'z-g1', k: 'zero', t: 'Местоимения и глагол be' },
      { h: 'z-g2', k: 'zero', t: 'Существительные, артикли, there is' },
      { h: 'z-g3', k: 'zero', t: 'Порядок слов и Present Simple' },
      { h: 'z-g4', k: 'zero', t: 'Числа, время, предлоги' },
      { h: 'z-g5', k: 'zero', t: 'can, must и прошедшее время' },
      { h: 'z-words', k: 'zero', t: 'Первая тысяча слов' },
    ] },
    { t: 'Юниты', h: 'units', drop: [
      { h: 'units', k: 'units', t: 'Программа курса' },
      { h: 'u1', k: 'units', t: '1. First things first' },
      { h: 'u2', k: 'units', t: '2. Day in, day out' },
      { h: 'u3', k: 'units', t: '3. A pass to success' },
      { h: 'u4', k: 'units', t: '4. Alma mater' },
      { h: 'u5', k: 'units', t: '5. Serving mankind' },
      { h: 'u6', k: 'units', t: '6. Peter’s great creation' },
      { h: 'u7', k: 'units', t: '7. In the brave new world' },
    ] },
    { t: 'Тексты', h: 'reading', drop: [
      { h: 'reading', k: 'reading', t: 'Указатель текстов' },
      { h: 'r-yard', k: 'reading', t: 'Building a ship' },
      { h: 'r-welding', k: 'reading', t: 'Welding and joining' },
      { h: 'r-drawing', k: 'reading', t: 'Drawings and standards' },
      { h: 'book-u1', k: 'book', t: 'Пособие: юнит 1 — зачем учить английский' },
      { h: 'book-u2', k: 'book', t: 'Пособие: юнит 2 — распорядок дня' },
      { h: 'book-u3', k: 'book', t: 'Пособие: юнит 3 — учёба' },
      { h: 'book-u4', k: 'book', t: 'Пособие: юнит 4 — А. Н. Крылов' },
      { h: 'book-u5', k: 'book', t: 'Пособие: юнит 5 — силиконы' },
      { h: 'book-u6', k: 'book', t: 'Пособие: юнит 6 — Санкт-Петербург' },
      { h: 'book-u7', k: 'book', t: 'Пособие: юнит 7 — нанотехнологии' },
    ] },
    { t: 'Технический английский', h: 'tech', drop: [
      { h: 'tech', k: 'tech', t: 'О разделе и с чего начать' },
      { h: 'tx-hull', k: 'tech', t: 'Текст: hull structure' },
      { h: 'tx-weld', k: 'tech', t: 'Текст: welding technology' },
      { h: 'tx-power', k: 'tech', t: 'Текст: marine power plants' },
      { h: 'tx-corr', k: 'tech', t: 'Текст: corrosion and protection' },
      { h: 'tx-design', k: 'tech', t: 'Текст: ship design' },
      { h: 'tx-trials', k: 'tech', t: 'Текст: tests and acceptance' },
      { h: 'tx-sys', k: 'tech', t: 'Текст: shipboard systems' },
      { h: 'tx-safe', k: 'tech', t: 'Текст: safety at the yard' },
      { h: 'tx-tol', k: 'tech', t: 'Текст: drawings and tolerances' },
      { h: 'tx-qa', k: 'tech', t: 'Текст: quality and inspection' },
      { h: 'td-passive', k: 'tech', t: 'Язык: пассив и безличные обороты' },
      { h: 'td-modal', k: 'tech', t: 'Язык: shall, must, is to be' },
      { h: 'td-cond', k: 'tech', t: 'Язык: условные предложения' },
      { h: 'td-part', k: 'tech', t: 'Язык: причастные обороты' },
      { h: 'td-num', k: 'tech', t: 'Язык: числа, размеры, допуски' },
      { h: 'tb-letter', k: 'tech', t: 'Письмо: деловая переписка' },
      { h: 'tb-abstract', k: 'tech', t: 'Письмо: аннотация статьи' },
      { h: 'tb-talk', k: 'tech', t: 'Доклад и вопросы после него' },
      { h: 'tb-paper', k: 'tech', t: 'Чтение научной статьи' },
    ] },
    { t: 'Картинки', h: 'pictures', drop: [
      { h: 'pictures', k: 'pictures', t: 'Все иллюстрации' },
      { h: 'pic-ship', k: 'pictures', t: 'Части судна' },
      { h: 'pic-yard', k: 'pictures', t: 'Верфь и постройка' },
      { h: 'pic-engine', k: 'pictures', t: 'Машинное отделение' },
      { h: 'pic-bridge', k: 'pictures', t: 'Мостик и навигация' },
      { h: 'pic-tools', k: 'pictures', t: 'Инструменты и материалы' },
    ] },
    { t: 'Тренажёры', h: 'drills', drop: [
      { h: 'drills', k: 'drills', t: 'Все тренажёры и прогресс' },
      { h: 'd-cards', k: 'drills', t: 'Карточки с повторением' },
      { h: 'd-gaps', k: 'drills', t: 'Пропущенное слово' },
      { h: 'd-match', k: 'drills', t: 'Слово и картинка' },
      { h: 'd-dictation', k: 'drills', t: 'Диктант на слух' },
      { h: 'd-order', k: 'drills', t: 'Порядок слов' },
      { h: 'd-grammar', k: 'drills', t: 'Грамматика юнитов' },
      { h: 'd-tasks', k: 'drills', t: 'Задания пособия' },
    ] },
    { h: 'vocab', k: 'vocab', t: 'Словарь' },
    { h: 'sources', k: 'sources', t: 'Источники' },
  ];
  const navLink = (it) =>
    `<a href="${root}${it.h}" class="${page === it.k ? 'on' : ''}">${it.t}</a>`;
  const navHtml = nav.map((g) => {
    if (!g.drop) return navLink(g);
    const on = g.drop.some((it) => page === it.k) ? 'on' : '';
    return `<span class="nav-drop"><a href="${root}${g.h}" class="${on}">${g.t} ▾</a>`
      + `<span class="drop">${g.drop.map(navLink).join('')}</span></span>`;
  }).join('');
  const header = document.createElement('header');
  header.className = 'site';
  header.innerHTML = `<div class="wrap">
    <a class="logo" href="${root}">${logoSvg}<span>English for shipbuilders</span></a>
    <nav class="top">${navHtml}</nav>
  </div>`;
  document.body.prepend(header);
  const onReady = (fn) => (document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', fn) : fn());
  const footer = document.createElement('footer');
  footer.className = 'site';
  footer.innerHTML = `<div class="wrap">
    <div>Учебный сайт по курсу «Иностранный язык» · 1–2 семестры · кафедра иностранных языков</div>
    <div>Смежные курсы:
      <a href="https://shadeswd.duckdns.org/shiptech/">технология судостроения</a> ·
      <a href="https://shadeswd.duckdns.org/hullstruct/">конструкция корпуса</a> ·
      <a href="https://shadeswd.duckdns.org/shiphist/">эволюция кораблестроения</a></div>
  </div>`;
  onReady(() => document.body.appendChild(footer));
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  defs.setAttribute('width', '0'); defs.setAttribute('height', '0');
  defs.style.position = 'absolute';
  defs.innerHTML = `<defs>
    <marker id="arrE" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
      <path d="M0,0 L10,4 L0,8 z" fill="#16161a"/></marker>
    <marker id="arrS" markerWidth="10" markerHeight="8" refX="1" refY="4" orient="auto">
      <path d="M10,0 L0,4 L10,8 z" fill="#16161a"/></marker>
    <marker id="arrB" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto">
      <path d="M0,0 L9,3.5 L0,7 z" fill="#155e75"/></marker>
    <marker id="arrR" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto">
      <path d="M0,0 L9,3.5 L0,7 z" fill="#b3382e"/></marker>
    <marker id="arrG" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto">
      <path d="M0,0 L9,3.5 L0,7 z" fill="#1a7f37"/></marker>
  </defs>`;
  onReady(() => document.body.appendChild(defs));
})();
