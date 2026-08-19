#!/usr/bin/env python3
"""Собирает все английские слова, по которым студент может кликнуть на сайте.

Кликабельны: слова английских текстов (speak.js оборачивает их в <span class="w">),
подписи на иллюстрациях (<g class="wlbl">), заголовочные слова в таблицах словаря
(<td class="en-w">) и английские фразы заданий, которые тренажёр показывает не сразу,
а по ходу подхода — поэтому банки заданий (глобальные VOCAB, TASKS, PICS) читаются
прямо из страницы.

Запуск (сайт должен быть поднят, по умолчанию контейнер english-web):
    python3 tools/collect_words.py --base http://127.0.0.1:8093 --out words.json

На выходе JSON: {"слово": {"n": сколько раз, "pages": [...], "ctx": ["предложение", ...]}}
"""
import argparse, json, os, re, sys, collections

SITE = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'site')
WORD = re.compile(r"[A-Za-z][A-Za-z'’-]*")
# не слова: хвосты сокращений и порядковых числительных («19th»), римские цифры,
# обрывки слов из заданий с пропусками («She does aer___ics»)
JUNK = {'ll', 've', 're', 'nt', 'th', 'nd', 'rd', 'ii', 'iii', 'iv',
        'ing', 'ed', 'ies', 'ied', 'es'}


def tokens(s):
    """Слова строки. Обрывки рядом с пропуском («aer___ics») и хвосты
    числительных («19th») словами не считаем."""
    for m in WORD.finditer(s):
        before, after = s[max(0, m.start() - 1):m.start()], s[m.end():m.end() + 1]
        if before in ('_',) or after in ('_',) or before.isdigit():
            continue
        yield m.group(0)

# со страницы берём и текст, и подписи, и заголовочные слова словаря
GRAB = r"""() => {
  const out = [];
  const ctxOf = (el) => {
    const s = el.closest('.s') || el.closest('p, li, td, div');
    return s ? s.textContent.replace(/\s+/g, ' ').trim().slice(0, 200) : '';
  };
  document.querySelectorAll('.w, .en-w').forEach((el) => {
    const w = (el.dataset.word || el.textContent || '').trim();
    if (w) out.push([w, ctxOf(el)]);
  });
  document.querySelectorAll('svg .wlbl').forEach((g) => {
    const t = g.querySelector('text');
    const w = (g.dataset.word || (t && t.textContent) || '').trim();
    if (w) out.push([w, 'подпись на иллюстрации']);
  });
  // банки данных страницы: имена в верхнем регистре — соглашение этого сайта
  const banks = {};
  Object.keys(window).forEach((k) => {
    if (!/^[A-Z][A-Z0-9_]+$/.test(k)) return;
    const v = window[k];
    if (v && typeof v === 'object') { try { banks[k] = JSON.stringify(v); } catch (e) { /* циклы */ } }
  });
  return { out, banks };
}"""


IPA = re.compile(r'[ˈˌːəɪʊɔɜæŋʃʒθðʌɒɑ]')
SKIP_KEY = {'ipa', 'topic', 'at', 'pos', 'id', 'kind', 'type', 'src', 'page', 'key', 'unit'}


def from_bank(node, key=''):
    """Английские строки из банка заданий. Идём по значениям, а не по тексту JSON:
    иначе в слова попадают имена полей («ru», «pos») и куски транскрипции."""
    if isinstance(node, dict):
        for k, v in node.items():
            yield from from_bank(v, str(k).lower())
        return
    if isinstance(node, (list, tuple)):
        for v in node:
            yield from from_bank(v, key)
        return
    if not isinstance(node, str) or key in SKIP_KEY or IPA.search(node):
        return
    s = node.strip()
    if '<' in s or 'viewBox' in s:                  # svg-значки тренажёра «слово и картинка»
        return
    lat = sum(c.isascii() and c.isalpha() for c in s)
    cyr = sum('а' <= c.lower() <= 'я' for c in s)
    if lat < 2 or cyr > lat / 3:
        return
    if re.fullmatch(r"[a-z0-9_.\-/#]+", s) and ' ' not in s:   # ключи, классы, пути
        return
    yield s


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--base', default='http://127.0.0.1:8093')
    ap.add_argument('--out', default='words.json')
    ap.add_argument('--pages', default='')
    args = ap.parse_args()

    pages = ([p for p in args.pages.split(',') if p] or
             sorted(f[:-5] for f in os.listdir(SITE) if f.endswith('.html')))
    words = collections.defaultdict(lambda: {'n': 0, 'pages': [], 'ctx': []})

    def add(word, page, ctx):
        w = word.strip().strip('’\'-')
        if not w or not re.fullmatch(r"[A-Za-z][A-Za-z'’-]*", w):
            return
        if len(w) == 1 and w.lower() not in ('a', 'i'):     # инициалы, буквы схем
            return
        if w.lower() in JUNK:
            return
        if ctx and (w + '_' in ctx or '_' + w in ctx):      # обрывок у пропуска
            return
        e = words[w.lower()]
        e['n'] += 1
        if page not in e['pages']:
            e['pages'].append(page)
        if ctx and len(e['ctx']) < 4 and ctx not in e['ctx']:
            e['ctx'].append(ctx)

    from playwright.sync_api import sync_playwright
    with sync_playwright() as pw:
        br = pw.chromium.launch()
        pg = br.new_page()
        pg.on('pageerror', lambda e: print('  ! ошибка страницы:', e, file=sys.stderr))
        for name in pages:
            pg.goto(f'{args.base}/{name}', wait_until='networkidle')
            pg.wait_for_timeout(250)
            data = pg.evaluate(GRAB)
            for w, ctx in data['out']:
                add(w, name, ctx)
            for bank in data['banks'].values():
                try:
                    tree = json.loads(bank)
                except ValueError:
                    continue
                for line in from_bank(tree):
                    for m in tokens(line):
                        add(m, name, line if len(line) > 12 else '')
            print(f'{name}: слов на странице {len(data["out"])}, банков {len(data["banks"])}')
        br.close()

    ordered = dict(sorted(words.items(), key=lambda kv: (-kv[1]['n'], kv[0])))
    with open(args.out, 'w', encoding='utf-8') as fh:
        json.dump(ordered, fh, ensure_ascii=False, indent=1)
    print('разных словоформ:', len(ordered), '→', args.out)


main()
