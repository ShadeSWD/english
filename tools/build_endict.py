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
# отраслевые пометы: их держим в тексте — на судостроительном сайте нужное
# значение чаще всего именно под ними
KEEP = {
    '_мор.': 'мор.', '_тех.': 'тех.', '_физ.': 'физ.', '_хим.': 'хим.',
    '_мат.': 'мат.', '_эл.': 'эл.', '_стр.': 'стр.', '_ав.': 'ав.',
    '_геол.': 'геол.', '_метал.': 'метал.', '_воен.': 'воен.', '_ж-д.': 'ж.-д.',
    '_радио': 'радио', '_вчт.': 'вчт.',
    '_p-p.': 'прич.', '_p.p.': 'прич.', '_pres.p.': 'прич. наст. вр.', '_p.': 'прош. вр.',
}
# пометы, которые в компактной статье только мешают
DROP = re.compile(r'_[a-zA-Zа-яА-Я-]+\.?')
# «(полная форма)», «(редуцированная форма, употр. перед гласными)» — это
# подписи к вариантам транскрипции; сама транскрипция уже вынесена в поле ipa,
# и без неё подписи превращаются в мусор в начале статьи
FORMNOTE = re.compile(r'\(\s*(?:полная|редуцированн\w*|неударная|ударная)[^)]*\)')


def b64d(s):
    v = 0
    for c in s:
        v = v * 64 + A.index(c)
    return v


def compact(body, headword):
    """Из статьи Мюллера делаем короткую справку. Омонимы (в словаре они
    помечены _I, _II, _III) разносим по отдельным значениям: у «fine» первым
    идёт существительное «штраф», а нужное прилагательное «прекрасный» стоит
    третьим — если резать статью по длине, до него не доберёшься."""
    text = body
    if text.startswith(headword):
        text = text[len(headword):]
    text = text.replace('\n', ' ')
    ipa = ''
    m = re.search(r'\[([^\]]{1,40})\]', text[:120])
    if m:
        ipa = (m.group(1).replace('↗', 'ˈ').replace('↘', 'ˌ')
               .replace('′', 'ˈ').strip())
    text = re.sub(r'\[[^\]]{0,40}\]', ' ', text)        # прочие транскрипции внутри статьи
    text = FORMNOTE.sub(' ', text)
    # деление на омонимы
    parts = re.split(r'_(?:I{1,3}|IV|VI{0,3}|IX|X)\b', text)
    parts = [p for p in (x.strip(' ;,.') for x in parts) if len(p) > 2]
    if not parts:
        parts = [text]

    def clean(chunk, limit):
        pos_ru = ''
        for tag, ru in POS.items():
            if tag in chunk[:60]:
                pos_ru = ru
                break
        for tag, ru in KEEP.items():
            chunk = chunk.replace(tag, ru)
        c = DROP.sub(' ', chunk)
        c = re.sub(r'\b\d\)\s*', '; ', c)
        c = re.sub(r'\b\d\.\s*', ' ', c)
        c = c.replace('_', ' ')
        c = re.sub(r'\s+', ' ', c)
        c = re.sub(r'\s+([;,.])', r'\1', c)
        c = re.sub(r'(;\s*){2,}', '; ', c)
        c = re.sub(r'(,\s*){2,}', ', ', c)
        # «(обыкн. _pl.)» после снятия помет превращается в «(обыкн. )» — пустая
        # скобка в начале статьи; такие остатки убираем целиком
        c = re.sub(r'\(\s*(?:обыкн|тж|часто|преим|уст|редк|ср)\.?\s*\)', ' ', c)
        c = re.sub(r'\(\s*\)|\s+,', lambda m: ',' if ',' in m.group(0) else '', c)
        c = re.sub(r'\s{2,}', ' ', c).strip(' ;,.')
        # «( os ) от photograph», «(sing was, were - been); быть» — в скобках в
        # начале статьи стоят формы слова: из-за них статья-отсылка не
        # распознаётся как отсылка, а перевод начинается с точки с запятой
        c = re.sub(r'^\(\s*[A-Za-z][^)]{0,44}\)\s*', '', c)
        c = re.sub(r'^(?:[;,.]\s*)+', '', c)
        # «мор.; левый борт» → «мор. левый борт»: точка с запятой появилась на
        # месте номера значения, сразу за отраслевой пометой
        c = re.sub(r'((?:%s)\.?)\s*;\s*' % '|'.join(re.escape(v.rstrip('.')) for v in KEEP.values()),
                   r'\1 ', c)
        # «от leave II» — римская цифра указывает на омоним внутри статьи-источника
        c = re.sub(r'\bот ([a-z][a-z-]*) (?:I{1,3}|IV|VI{0,3}|IX|X)\b', r'от \1', c)
        if len(c) > limit:
            cut = c.rfind(';', 0, limit)
            c = c[:cut if cut > 40 else limit].rstrip(' ;,') + '…'
        return (pos_ru + ' ' + c).strip() if pos_ru else c

    if len(parts) > 1:
        # омонимов бывает до пяти, и нужное значение нередко последнее: у «port»
        # «левый борт» стоит четвёртым, после порта, ворот, осанки
        limit = 120
        senses = [clean(p, limit) for p in parts[:5]]
        senses = [x for x in senses if x]
        ru = '; '.join('%d) %s' % (i + 1, x) for i, x in enumerate(senses))
        pos = ''
    else:
        ru = clean(parts[0], 170)
        pos = ''
        for tag, r in POS.items():
            if tag in parts[0][:80]:
                pos = r
                break
        if pos and ru.startswith(pos + ' '):
            ru = ru[len(pos) + 1:]
    return ru, ipa, pos


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
