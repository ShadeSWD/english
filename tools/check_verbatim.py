#!/usr/bin/env python3
"""Проверка на дословность: ищет в наших банках заданий куски, совпадающие с
текстом пособия. Нужен, потому что «маркерная» проверка по нескольким фразам
даёт ложное спокойствие — совпадать может что угодно.

Совпадением считается цепочка из N слов подряд (по умолчанию 6), встречающаяся
в выгрузке пособия. Речевые клише (их полагается воспроизводить дословно)
перечислены в ALLOW.

Запуск: check_verbatim.py <so.txt> [N]
"""
import io, json, os, re, sys, glob

ALLOW = [
    'here you are', 'keep in touch', 'nice to meet you', 'how do you do',
    'see you later', 'thank you the same to you', 'i am afraid i must be going',
    'would you like to go to the cinema', 'not at all', 'you are welcome',
    'my pleasure', 'have a nice weekend', 'the same to you',
]

WORD = re.compile(r"[a-z']+")


def norm(text):
    return WORD.findall(text.lower().replace('’', "'"))


def main():
    book_path = sys.argv[1]
    n = int(sys.argv[2]) if len(sys.argv) > 2 else 6
    book = norm(io.open(book_path, encoding='utf-8').read())
    grams = set()
    for i in range(len(book) - n):
        grams.add(' '.join(book[i:i + n]))

    allow = {' '.join(norm(a)) for a in ALLOW}

    def allowed(chunk):
        return any(a in chunk or chunk in a for a in allow)

    base = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'site', 'assets')
    hits = []
    for path in sorted(glob.glob(os.path.join(base, 'tasks-*.js'))):
        src = io.open(path, encoding='utf-8').read()
        for m in re.finditer(r"'([^'\\]{20,})'", src):
            words = norm(m.group(1))
            if len(words) < n:
                continue
            for i in range(len(words) - n + 1):
                chunk = ' '.join(words[i:i + n])
                if chunk in grams and not allowed(chunk):
                    hits.append({'file': os.path.basename(path), 'chunk': chunk,
                                 'text': m.group(1)[:110]})
                    break
    print('совпадений с пособием (%d слов подряд): %d' % (n, len(hits)))
    for h in hits[:25]:
        print('  %-14s %s' % (h['file'], h['chunk']))
    json.dump(hits, io.open('/tmp/verbatim_hits.json', 'w', encoding='utf-8'),
              ensure_ascii=False, indent=1)
    return 1 if hits else 0


sys.exit(main())
