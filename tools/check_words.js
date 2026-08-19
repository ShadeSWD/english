/* Прогоняет список слов сайта через настоящий EnDict — ту же библиотеку, что
 * работает в браузере, — и показывает, что студент увидит в карточке.
 *
 *   node tools/check_words.js words.json [--only-general] [--bad] [--word fine]
 *
 * Флаги: --only-general — только слова, которых нет в словаре курса;
 *        --bad — только подозрительные ответы (пусто, отсылка, обрубок);
 *        --json файл — выгрузить разбор целиком.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const SITE = path.join(__dirname, '..', 'site');
const API = path.join(SITE, 'api', 'en');

/* окно-заглушка: fetch читает шарды с диска, остальное словарю не нужно */
const win = {};
win.fetch = (url) => {
  const file = path.join(API, path.basename(url));
  return Promise.resolve({
    ok: fs.existsSync(file),
    json: () => Promise.resolve(JSON.parse(fs.readFileSync(file, 'utf8'))),
  });
};
global.window = win;
global.fetch = win.fetch;

function load(file) {
  const code = fs.readFileSync(file, 'utf8');
  new Function('window', 'fetch', 'document', code + '\n//# sourceURL=' + file)
    .call(win, win, win.fetch, undefined);
}

load(path.join(SITE, 'assets', 'vocab.js'));
// vocab.js объявляет VOCAB через var в своей области — забираем через eval-обёртку
if (!win.VOCAB) {
  const code = fs.readFileSync(path.join(SITE, 'assets', 'vocab.js'), 'utf8');
  win.VOCAB = new Function(code + '; return VOCAB;')();
  win.TOPICS = new Function(code + '; return TOPICS;')();
}
load(path.join(SITE, 'lib', 'endict.js'));
win.EnDict.base(API + '/');

const args = process.argv.slice(2);
const listFile = args.find((a) => !a.startsWith('--'));
const flag = (n) => args.includes('--' + n);
const opt = (n) => { const i = args.indexOf('--' + n); return i < 0 ? null : args[i + 1]; };

/* Признаки того, что карточка бесполезна или врёт. */
function verdict(w, e) {
  if (!e) return 'пусто';
  const ru = (e.ru || '').trim();
  if (!ru) return 'пусто';
  if (/^(см\.|сокр\.|уменьш\.|past|p\. p\.)/i.test(ru)) return 'отсылка';
  if (/^(?:[a-zа-я-]+\.?\s*)?от\s+[a-z]/i.test(ru)) return 'отсылка';
  if (/[a-z]{3,}\s+[a-z]{3,}\s+[a-z]{3,}/i.test(ru) && !/[а-яёА-ЯЁ]/.test(ru)) return 'без перевода';
  if (/^[;,.\s]|[;,]\s*$|\(\s*\)|;\s*;/.test(ru)) return 'мусор';
  if (ru.length < 2) return 'куцо';
  return 'ok';
}

const words = Object.keys(JSON.parse(fs.readFileSync(listFile, 'utf8')));
const picked = opt('word') ? [opt('word')] : words;

(async () => {
  const rows = [];
  await win.EnDict.preload('abcdefghijklmnopqrstuvwxyz');
  for (const w of picked) {
    const e = await win.EnDict.lookup(w);
    rows.push({ w, src: e ? e.src : '-', v: verdict(w, e), ru: e ? e.ru : '', ipa: (e && e.ipa) || '', note: (e && e.note) || '' });
  }
  let show = rows;
  if (flag('only-general')) show = show.filter((r) => r.src !== 'course');
  if (flag('bad')) show = show.filter((r) => r.v !== 'ok');
  const byV = {};
  rows.forEach((r) => { byV[r.v] = (byV[r.v] || 0) + 1; });
  if (opt('json')) fs.writeFileSync(opt('json'), JSON.stringify(rows, null, 1));
  show.forEach((r) => {
    console.log(`${r.w}\t${r.src}\t${r.v}\t${r.note ? '[' + r.note + '] ' : ''}${r.ru.slice(0, 160)}`);
  });
  console.error('слов:', rows.length, 'из словаря курса:', rows.filter((r) => r.src === 'course').length,
    JSON.stringify(byV, null, 0));
})();
