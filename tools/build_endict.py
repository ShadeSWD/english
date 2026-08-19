#!/usr/bin/env python3
"""Сборка универсального англо-русского словаря кластера из словаря Мюллера
(пакет mueller7-dict, формат dictd) в компактные JSON-шарды по первой букве.

На выходе: <out>/<буква>.json  = {"слово": {"ru": "…", "ipa": "…", "pos": "…"}}
плюс meta.json со сводкой.
"""
import gzip, json, os, re, sys, collections

DICT = '/usr/share/dictd/mueller7.dict.dz'
INDEX = '/usr/share/dictd/mueller7.index'
A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"

POS = {
    '_n.': 'сущ.', '_v.': 'гл.', '_a.': 'прил.', '_adv.': 'нареч.',
    '_prep.': 'предл.', '_cj.': 'союз', '_pron.': 'мест.', '_num.': 'числ.',
    '_int.': 'межд.', '_pl.': 'мн.', '_predic.': 'предик.', '_attr.': 'опред.',
}
# пометы, которые в компактной статье только мешают
DROP = re.compile(r'_[a-zA-Zа-яА-Я]+\.')


def b64d(s):
    v = 0
    for c in s:
        v = v * 64 + A.index(c)
    return v


def compact(body, headword):
    """Из статьи Мюллера делаем короткую справку: транскрипция, часть речи и
    первые значения — ровно столько, сколько влезает в карточку слова."""
    text = body
    if text.startswith(headword):
        text = text[len(headword):]
    ipa = ''
    m = re.search(r'\[([^\]]{1,40})\]', text[:120])
    if m:
        ipa = (m.group(1).replace('↗', 'ˈ').replace('↘', 'ˌ')
               .replace('′', 'ˈ').replace('&#8593;', 'ˈ').strip())
        text = text[:m.start()] + ' ' + text[m.end():]
    pos = ''
    for tag, ru in POS.items():
        if tag in text[:80]:
            pos = ru
            break
    text = re.sub(r'_?\b(I{1,3}|IV|V)\b(?=[ .;])', ' ', text)   # римские номера омонимов
    text = DROP.sub(' ', text)
    text = text.replace('\n', ' ')
    text = re.sub(r'\b\d\)\s*', '; ', text)      # нумерация значений
    text = re.sub(r'\b\d\.\s*', ' ', text)
    text = re.sub(r'\s+', ' ', text)
    text = re.sub(r'\s+([;,.])', r'\1', text)
    text = re.sub(r'(;\s*){2,}', '; ', text)
    text = text.strip(' ;,.')
    # обрезаем по границе значения, чтобы не рвать фразу посередине
    if len(text) > 150:
        cut = text.rfind(';', 0, 150)
        text = text[:cut if cut > 60 else 150].rstrip(' ;,') + '…'
    return text, ipa, pos


def main():
    out = sys.argv[1] if len(sys.argv) > 1 else 'en'
    os.makedirs(out, exist_ok=True)
    raw = gzip.open(DICT, 'rb').read()
    shards = collections.defaultdict(dict)
    total = skipped = 0
    for line in open(INDEX, encoding='utf-8', errors='replace'):
        parts = line.rstrip('\n').split('\t')
        if len(parts) < 3:
            continue
        w, o, l = parts[0], parts[1], parts[2]
        if not re.fullmatch(r"[A-Za-z][A-Za-z'\- ]{0,30}", w):
            skipped += 1
            continue
        body = raw[b64d(o):b64d(o) + b64d(l)].decode('utf-8', errors='replace')
        ru, ipa, pos = compact(body, w)
        if not ru or len(ru) < 2:
            skipped += 1
            continue
        key = w.lower()
        rec = {'ru': ru}
        if ipa:
            rec['ipa'] = ipa
        if pos:
            rec['pos'] = pos
        letter = key[0] if key[0].isalpha() else 'other'
        if key not in shards[letter]:
            shards[letter][key] = rec
            total += 1
    for letter, data in shards.items():
        with open(os.path.join(out, letter + '.json'), 'w', encoding='utf-8') as fh:
            json.dump(data, fh, ensure_ascii=False, separators=(',', ':'), sort_keys=True)
    meta = {
        'source': 'Мюллер В. К. Англо-русский словарь (электронное издание mueller7, формат dictd)',
        'license': 'свободное распространение; пакет Debian mueller7-dict',
        'words': total,
        'shards': sorted(shards),
    }
    with open(os.path.join(out, 'meta.json'), 'w', encoding='utf-8') as fh:
        json.dump(meta, fh, ensure_ascii=False, indent=1)
    print('слов:', total, 'пропущено:', skipped, 'шардов:', len(shards))
    for letter in sorted(shards):
        size = os.path.getsize(os.path.join(out, letter + '.json'))
        print(f'  {letter}: {len(shards[letter]):6d} слов, {size // 1024:5d} КБ')


main()
