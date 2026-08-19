# -*- coding: utf-8 -*-
"""Проверка банка заданий юнитов (site/assets/tasks-u*.js).

Банк — обычный JS-файл, поэтому он загружается через node в песочницу и
выгружается в JSON. Дальше проверяется схема: обязательные поля, известный
тип, уникальность id, наличие пояснения и корректность полей по типу.
"""
import json
import os
import shutil
import subprocess

import pytest

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = os.path.join(ROOT, 'site')
ASSETS = os.path.join(SITE, 'assets')

BANKS = sorted(f for f in os.listdir(ASSETS)
               if f.startswith('tasks-') and f.endswith('.js')) \
    if os.path.isdir(ASSETS) else []

TYPES = {'fill', 'choice', 'build', 'match', 'sort', 'order', 'dialog'}

_LOADER = r'''
const fs = require('fs'), vm = require('vm');
/* node -e кладёт аргументы в argv начиная с первого, поэтому берём всё,
   что похоже на путь к банку, а не фиксированный срез */
const files = process.argv.filter((a) => a.endsWith('.js'));
const ctx = vm.createContext({ window: {} });
for (const f of files) vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
process.stdout.write(JSON.stringify(ctx.window.TASKS || []));
'''


@pytest.fixture(scope='module')
def tasks():
    if not shutil.which('node'):
        pytest.skip('node не установлен')
    if not BANKS:
        pytest.skip('банков заданий нет')
    r = subprocess.run(['node', '-e', _LOADER, '--'] + [os.path.join(ASSETS, b) for b in BANKS],
                       capture_output=True, text=True)
    assert r.returncode == 0, 'банк не загрузился: %s' % r.stderr.strip()[:400]
    return json.loads(r.stdout)


def test_banks_found():
    # банки заданий появляются юнит за юнитом; пока ни одного нет, проверять
    # нечего — тест начинает требовать содержимое с первого же банка
    if not BANKS:
        pytest.skip('банки заданий ещё не собраны')
    assert BANKS, 'не найдено ни одного файла tasks-u*.js'


def test_tasks_loaded(tasks):
    assert len(tasks) > 100, 'заданий слишком мало: %d' % len(tasks)


def test_ids_unique(tasks):
    ids = [t.get('id') for t in tasks]
    dups = sorted({i for i in ids if ids.count(i) > 1})
    assert not dups, 'повторяющиеся id: %s' % ', '.join(map(str, dups))


@pytest.mark.parametrize('unit', ['u1', 'u2', 'u3', 'u4', 'u5', 'u6', 'u7'])
def test_unit_coverage(tasks, unit):
    mine = [t for t in tasks if t.get('unit') == unit]
    assert len(mine) >= 35, 'в %s всего %d заданий' % (unit, len(mine))


def test_schema(tasks):
    bad = []
    for t in tasks:
        tid = t.get('id', '?')
        for field in ('id', 'unit', 'src', 'topic', 'type', 'q', 'why'):
            if not t.get(field):
                bad.append('%s: нет поля %s' % (tid, field))
        if t.get('type') not in TYPES:
            bad.append('%s: неизвестный тип %r' % (tid, t.get('type')))
        if not str(t.get('q', '')).strip():
            bad.append('%s: пустое условие' % tid)
    assert not bad, '; '.join(bad[:20])


def test_type_payload(tasks):
    bad = []
    for t in tasks:
        tid, ty = t.get('id', '?'), t.get('type')
        if ty in ('fill', 'choice', 'build'):
            items = t.get('items') or []
            if not items:
                bad.append('%s: нет items' % tid)
            for n, it in enumerate(items, 1):
                if ty == 'fill':
                    gaps = str(it.get('s', '')).count('___')
                    if gaps == 0:
                        bad.append('%s п.%d: в строке нет пропуска ___' % (tid, n))
                    if len(it.get('a') or []) != gaps:
                        bad.append('%s п.%d: %d пропусков, %d наборов ответов'
                                   % (tid, n, gaps, len(it.get('a') or [])))
                    for acc in (it.get('a') or []):
                        if not acc:
                            bad.append('%s п.%d: пустой набор ответов' % (tid, n))
                elif ty == 'choice':
                    opts = it.get('opts') or []
                    right = [o for o in opts if o.get('ok')]
                    if len(opts) < 2:
                        bad.append('%s п.%d: меньше двух вариантов' % (tid, n))
                    if len(right) != 1:
                        bad.append('%s п.%d: верных вариантов %d' % (tid, n, len(right)))
                    for o in opts:
                        if not o.get('why'):
                            bad.append('%s п.%d: у варианта %r нет объяснения'
                                       % (tid, n, o.get('t')))
                else:
                    if not str(it.get('a', '')).strip():
                        bad.append('%s п.%d: нет эталонного предложения' % (tid, n))
                    if not str(it.get('ru', '')).strip():
                        bad.append('%s п.%d: нет русской подсказки' % (tid, n))
        elif ty == 'match':
            pairs = t.get('pairs') or []
            if len(pairs) < 3:
                bad.append('%s: пар меньше трёх' % tid)
            rights = [p[1] for p in pairs if len(p) == 2]
            if len(set(rights)) != len(rights):
                bad.append('%s: правые значения повторяются' % tid)
        elif ty == 'sort':
            cats = t.get('cats') or {}
            items = t.get('items') or []
            if len(cats) < 2:
                bad.append('%s: меньше двух колонок' % tid)
            if len(items) < 4:
                bad.append('%s: меньше четырёх слов' % tid)
            for it in items:
                if it.get('c') not in cats:
                    bad.append('%s: слово %r в неизвестной колонке %r'
                               % (tid, it.get('t'), it.get('c')))
        elif ty == 'order':
            if len(t.get('lines') or []) < 3:
                bad.append('%s: меньше трёх строк' % tid)
        elif ty == 'dialog':
            turns = t.get('turns') or []
            gaps = [x for x in turns if not x.get('t')]
            if not gaps:
                bad.append('%s: в диалоге нет пропусков' % tid)
            for x in turns:
                if not x.get('who'):
                    bad.append('%s: у реплики нет говорящего' % tid)
                if x.get('t'):
                    continue
                opts = x.get('opts') or []
                if len([o for o in opts if o.get('ok')]) != 1:
                    bad.append('%s: у пропуска не один верный ответ' % tid)
                for o in opts:
                    if not o.get('why'):
                        bad.append('%s: у реплики %r нет объяснения' % (tid, o.get('t')))
    assert not bad, '; '.join(bad[:20])


@pytest.fixture(scope='module')
def vocab():
    if not shutil.which('node'):
        pytest.skip('node не установлен')
    src = os.path.join(ASSETS, 'vocab.js')
    load = ('const fs=require("fs"),vm=require("vm");const c=vm.createContext({});'
            'vm.runInContext(fs.readFileSync(%r,"utf8"),c);'
            'process.stdout.write(JSON.stringify({v:c.VOCAB,t:c.TOPICS,p:c.PAGES}));' % src)
    r = subprocess.run(['node', '-e', load], capture_output=True, text=True)
    assert r.returncode == 0, 'словарь не загрузился: %s' % r.stderr.strip()[:300]
    return json.loads(r.stdout)


def test_vocab_entries(vocab):
    """Каждая запись словаря курса заполнена и ссылается на живые тему и страницу."""
    bad = []
    seen = set()
    for e in vocab['v']:
        w = e.get('w', '?')
        if w.lower() in seen:
            bad.append('повтор: %s' % w)
        seen.add(w.lower())
        for field in ('w', 'ipa', 'pos', 'ru', 'ex', 'exru', 'topic', 'at'):
            if not e.get(field):
                bad.append('%s: нет поля %s' % (w, field))
        if e.get('topic') and e['topic'] not in vocab['t']:
            bad.append('%s: неизвестная тема %r' % (w, e['topic']))
        for a in (e.get('at') or []):
            if a not in vocab['p']:
                bad.append('%s: неизвестная страница %r' % (w, a))
    assert not bad, '; '.join(bad[:20])


@pytest.mark.parametrize('unit', ['u1', 'u2', 'u3', 'u4', 'u5', 'u6', 'u7'])
def test_unit_page_wired(unit):
    """Страница юнита подключает свой банк, движок и место для заданий."""
    page = os.path.join(SITE, unit + '.html')
    if not os.path.isfile(page):
        pytest.skip('нет страницы %s' % unit)
    html = open(page, encoding='utf-8').read()
    for need in ('assets/tasks-%s.js' % unit, 'assets/exercises.js',
                 'id="tasks"', "unit: '%s'" % unit):
        assert need in html, 'на странице %s нет «%s»' % (unit, need)


@pytest.mark.parametrize('unit,page', [
    ('r-yard', 'r-yard'), ('r-welding', 'r-welding'),
    ('r-drawing', 'r-drawing'), ('wordforms', 'r-drawing'),
])
def test_tech_bank_wired(unit, page):
    """Задания к техническим текстам подключены на своих страницах."""
    p = os.path.join(SITE, page + '.html')
    if not os.path.isfile(p):
        pytest.skip('нет страницы %s' % page)
    html = open(p, encoding='utf-8').read()
    for need in ('assets/tasks-tech.js', 'assets/exercises.js', "unit: '%s'" % unit):
        assert need in html, 'на странице %s нет «%s»' % (page, need)


def test_tech_bank_coverage(tasks):
    """Банк технических текстов покрывает все три страницы и словообразование."""
    for unit in ('r-yard', 'r-welding', 'r-drawing', 'wordforms'):
        mine = [t for t in tasks if t.get('unit') == unit]
        assert len(mine) >= 5, 'в %s всего %d заданий' % (unit, len(mine))
