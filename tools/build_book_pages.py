#!/usr/bin/env python3
"""Собирает страницы «Тексты пособия» для сайта английского: достаёт из
«Sailing out» большие тексты по заголовкам, склеивает абзацы и раскладывает
по юнитам. Тексты идут с указанием источника; интерактив (клик по слову,
чтение вслух) навешивается общим speak.js по классу .en."""
import io, os, re, html

SRC = '/tmp/claude-0/-root/c7cee439-109c-481e-8d9b-5bf62e6d31e9/scratchpad/so.txt'
OUT = '/root/english/site'

UNITS = {
    1: ('Знакомство', [('REASONS TO LEARN ENGLISH', 'Зачем учить английский')]),
    2: ('День за днём', [('DAILY ROUTINE', 'Распорядок дня')]),
    3: ('Учёба', [('UNIVERSITY LIFE', 'Университетская жизнь'),
                  ('HIGHER EDUCATION IN RUSSIA', 'Высшее образование в России')]),
    4: ('Alma mater', [('LIFE IN SCIENCE', 'Жизнь в науке: А. Н. Крылов')]),
    5: ('На службе человечеству', [('HAVE YOUR SAY, MR SILICONE', 'Слово силикону'),
                                   ('A GODSEND', 'Находка'),
                                   ('A SILICONE TIMELINE', 'Хроника силиконов')]),
    6: ('Санкт-Петербург', [("PETER’S GREAT CREATION", 'Великое творение Петра'),
                            ('THE SUMMER GARDEN', 'Летний сад'),
                            ('GLIMPSES OF SAINT PETERSBURG', 'Штрихи к портрету города'),
                            ('THE LENINGRAD BLOCKADE', 'Блокада Ленинграда')]),
    7: ('Нанотехнологии', [('IN THE BRAVE NEW WORLD', 'В дивном новом мире'),
                           ('SIZE MATTERS', 'Размер имеет значение'),
                           ('NANOTECHNOLOGY IN MODERN INDUSTRY',
                            'Нанотехнологии в современной промышленности')]),
}

STOP = re.compile(r'^\s*(SECTION\s|[0-9]{1,2}\s+[А-ЯЁA-Z]|Ex\.|VOCABULARY|WORD LIST)')


def is_en(line):
    lat = sum(c.isalpha() and c.isascii() for c in line)
    cyr = sum('а' <= c.lower() <= 'я' for c in line)
    return lat >= 15 and cyr <= 2


def grab(lines, start):
    """Собираем абзацы после заголовка до первой служебной строки."""
    paras, cur, blanks = [], '', 0
    for l in lines[start + 1:start + 120]:
        s = l.strip()
        if STOP.match(l):
            break
        if not s:
            blanks += 1
            if cur:
                paras.append(cur); cur = ''
            if blanks >= 4 and paras:
                break
            continue
        if not is_en(l):
            if cur:
                paras.append(cur); cur = ''
            continue
        blanks = 0
        s = re.sub(r'\s*\d{1,3}\s*$', '', s)          # номер страницы в хвосте
        if cur.endswith('-'):
            cur = cur[:-1] + s
        else:
            cur = (cur + ' ' + s).strip()
    if cur:
        paras.append(cur)
    return [p for p in paras if len(p.split()) >= 8]


def page(unit, topic, texts):
    body = []
    for title, ru, paras in texts:
        body.append(f'  <h2>{html.escape(title)}<span class="ru-h">{html.escape(ru)}</span></h2>')
        body.append('  <div class="en booktext">')
        for p in paras:
            body.append('    <p>' + html.escape(p) + '</p>')
        body.append('  </div>')
    return f'''<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Тексты пособия. Юнит {unit}</title>
<meta name="description" content="Тексты юнита {unit} пособия «Sailing out» для работы на занятии: чтение вслух, клик по любому слову — произношение и перевод.">
<link rel="stylesheet" href="assets/style.css">
<style>
.ru-h {{ display:block; font: 400 13.5px system-ui, sans-serif; color: var(--muted); margin-top: 2px; }}
.booktext p {{ margin: 0 0 10px; }}
</style>
</head>
<body>
<script src="assets/site.js" data-root="./" data-page="book"></script>
<main class="wrap">
  <h1>Тексты пособия. Юнит {unit} — {html.escape(topic)}</h1>
  <div class="note">Тексты приводятся по учебному пособию: <b>Силина Е. К.,
  Суринова Е. А., Трофимова С. Л.</b> Sailing out. В открытое море: учебное
  пособие по английскому языку. — СПб.: Скифия Принт, 2015. — 116 с. Публикуются
  для аудиторной работы кафедры иностранных языков СПбГМТУ параллельно с
  бумажным изданием. Разбор, задания и словарь на остальных страницах сайта —
  наши собственные.</div>
  <p class="lead">Клик по любому слову — произношение и перевод; кнопка над
  текстом читает его вслух по предложениям с подсветкой. Звёздочка в тексте
  стоит там же, где в пособии: эти слова разобраны в словаре после текста в
  бумажной книге, а здесь их перевод открывается кликом.</p>
{chr(10).join(body)}
  <p><a href="u{unit}">← Юнит {unit}: грамматика и задания</a> ·
  <a href="units">Все юниты</a> · <a href="vocab">Словарь курса</a></p>
</main>
<script src="lib/endict.js"></script>
<script src="assets/speak.js"></script>
</body>
</html>
'''


def main():
    lines = io.open(SRC, encoding='utf-8').read().split('\n')
    heads = {}
    for i, l in enumerate(lines):
        s = l.strip()
        if s and s == s.upper() and len(s) > 8:
            heads.setdefault(s, []).append(i)
    made = 0
    for unit, (topic, titles) in UNITS.items():
        texts = []
        for title, ru in titles:
            pos = heads.get(title)
            if not pos:
                print('  ! не найден заголовок:', title); continue
            paras = grab(lines, pos[0])
            if not paras:
                print('  ! пустой текст:', title); continue
            texts.append((title, ru, paras))
        if not texts:
            continue
        path = os.path.join(OUT, f'book-u{unit}.html')
        io.open(path, 'w', encoding='utf-8').write(page(unit, topic, texts))
        words = sum(len(' '.join(p).split()) for _, _, p in texts)
        print(f'book-u{unit}.html: текстов {len(texts)}, слов {words}')
        made += 1
    print('страниц собрано:', made)


main()
