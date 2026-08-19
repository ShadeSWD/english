#!/usr/bin/env python3
"""Проверка «первой тысячи»: сколько бытовых слов реально лежит в словаре курса
и насколько статьи полны.

Проверяется не отчёт, а файл: берём выборку частотной бытовой лексики (человек,
дом, город, еда, время, движение, свойства, служебные слова) и смотрим, есть ли
слово в `site/assets/vocab.js`, есть ли у него транскрипция, часть речи, пример
и тема. Отдельно считаем, сколько статей помечено уровнем.

Запуск: check_base1000.py [--all]
"""
import io, os, re, sys

PROBE = """
man woman child boy girl family mother father son daughter friend people person name
house home room door window wall floor roof kitchen bedroom table chair bed lamp key
city street road square park shop market school library station airport port bridge
water bread milk tea coffee meat fish egg fruit apple soup salt sugar dinner breakfast
day night morning evening week month year hour minute time today tomorrow yesterday
go come walk run drive fly stop start open close take give put keep find lose buy sell
say tell ask answer speak read write listen hear see look watch think know understand
work study learn teach live sleep eat drink wash dress wait meet help use make build
big small long short high low wide narrow heavy light hot cold warm cool new old good
bad easy hard fast slow clean dirty full empty right left near far cheap expensive
red blue green white black grey yellow brown colour shape round flat square
money price cost pay free work job team boss office paper pen book letter number
weather rain snow wind sun cloud warm summer winter spring autumn
head hand foot eye ear mouth face body heart back leg arm
car bus train ship boat plane bike wheel engine road ticket
and or but if because when where why how who what which very also too
""".split()


def main():
    base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    import glob
    files = sorted(glob.glob(os.path.join(base, 'site', 'assets', 'vocab*.js')))
    src = '\n'.join(io.open(f, encoding='utf-8').read() for f in files)
    print('файлы словаря:', ', '.join(os.path.basename(f) for f in files))
    entries = re.findall(r"\{[^{}]*?\bw:\s*'([^']+)'[^{}]*?\}", src, re.S)
    blocks = re.findall(r"\{[^{}]*?\bw:\s*'[^']+'[^{}]*?\}", src, re.S)
    have = {w.lower() for w in entries}
    print('статей в словаре курса: %d' % len(entries))

    probe = sorted(set(w.lower() for w in PROBE))
    miss = [w for w in probe if w not in have]
    print('выборка бытовых слов: %d, из них есть %d (%d %%), нет %d'
          % (len(probe), len(probe) - len(miss), 100 * (len(probe) - len(miss)) // len(probe), len(miss)))
    if miss:
        print('  нет:', ', '.join(miss[:40]) + ('…' if len(miss) > 40 else ''))

    # полнота статей
    need = {'ipa': 0, 'pos': 0, 'ex': 0, 'topic': 0}
    for b in blocks:
        for k in need:
            if re.search(r"\b%s:\s*'" % k, b):
                need[k] += 1
    print('полнота статей:', ', '.join('%s у %d из %d' % (k, v, len(blocks)) for k, v in need.items()))

    lvl = len(re.findall(r"\blvl:\s*'", src)) or len(re.findall(r"\blevel:\s*'", src))
    print('помечено уровнем:', lvl)


main()
