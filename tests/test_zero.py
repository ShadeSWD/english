# -*- coding: utf-8 -*-
"""Проверка нижней ступени «С нуля» (A0–A1).

Ступень состоит из десяти страниц (`zero`, `z-alphabet`, `z-reading`,
`z-ipa`, `z-g1`…`z-g5`, `z-words`), своих банков заданий `tasks-z-*.js`
и словаря первой тысячи слов `assets/vocab-a1.js`.

Проверяется: словарь (двадцать блоков ровно по пятьдесят слов, все поля,
никаких повторов со словарём курса), страницы (подключены словарь, движок
заданий и свой банк), банки (у каждой страницы есть задания и разбор ошибок).
"""
import json
import os
import re
import shutil
import subprocess

import pytest

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = os.path.join(ROOT, 'site')
ASSETS = os.path.join(SITE, 'assets')

PAGES = ['zero', 'z-alphabet', 'z-reading', 'z-ipa',
         'z-g1', 'z-g2', 'z-g3', 'z-g4', 'z-g5', 'z-words']
# страницы с собственным банком заданий (у обзорной `zero` заданий нет)
UNITS = [p for p in PAGES if p != 'zero']

BLOCKS = ['zperson', 'zhome', 'zfood', 'ztime', 'znum', 'zmove', 'zprop',
          'zcolor', 'zbody', 'zfunc', 'zcity', 'zstudy', 'zwork', 'ztool',
          'zmatl', 'zweather', 'zcloth', 'ztrans', 'zmoney', 'zfeel']


def _node(script, *args):
    if not shutil.which('node'):
        pytest.skip('node не установлен')
    r = subprocess.run(['node', '-e', script, '--'] + list(args),
                       capture_output=True, text=True)
    assert r.returncode == 0, 'скрипт не выполнился: %s' % r.stderr.strip()[:400]
    return json.loads(r.stdout)


@pytest.fixture(scope='module')
def vocab():
    """Словарь курса вместе с первой тысячей слов — как их видит браузер."""
    return _node(
        'const fs=require("fs"),vm=require("vm");const c=vm.createContext({});'
        'for (const f of process.argv.filter(a=>a.endsWith(".js")))'
        '  vm.runInContext(fs.readFileSync(f,"utf8"),c,{filename:f});'
        'process.stdout.write(JSON.stringify({v:c.VOCAB,t:c.TOPICS,p:c.PAGES,'
        'l:c.LEVELS,z:c.ZERO_TOPICS}));',
        os.path.join(ASSETS, 'vocab.js'), os.path.join(ASSETS, 'vocab-a1.js'))


@pytest.fixture(scope='module')
def tasks():
    banks = sorted(os.path.join(ASSETS, f) for f in os.listdir(ASSETS)
                   if f.startswith('tasks-z-') and f.endswith('.js'))
    if not banks:
        pytest.skip('банков ступени ещё нет')
    return _node(
        'const fs=require("fs"),vm=require("vm");const c=vm.createContext({window:{}});'
        'for (const f of process.argv.filter(a=>a.endsWith(".js")))'
        '  vm.runInContext(fs.readFileSync(f,"utf8"),c,{filename:f});'
        'process.stdout.write(JSON.stringify(c.window.TASKS||[]));', *banks)


# ---------- словарь первой тысячи ----------

def test_thousand_words(vocab):
    mine = [e for e in vocab['v'] if e.get('lvl')]
    assert len(mine) >= 1000, 'в первой тысяче всего %d слов' % len(mine)


@pytest.mark.parametrize('block', BLOCKS)
def test_block_size(vocab, block):
    """Каждый из двадцати блоков — ровно пятьдесят слов."""
    assert block in vocab['t'], 'блока %s нет в TOPICS' % block
    n = len([e for e in vocab['v'] if e.get('topic') == block])
    assert n == 50, 'в блоке %s слов: %d' % (block, n)


def test_word_fields(vocab):
    bad = []
    for e in vocab['v']:
        if not e.get('lvl'):
            continue
        w = e.get('w', '?')
        for field in ('w', 'ipa', 'pos', 'ru', 'ex', 'exru', 'topic', 'at'):
            if not e.get(field):
                bad.append('%s: нет поля %s' % (w, field))
        if e.get('lvl') not in ('A0', 'A1'):
            bad.append('%s: ступень %r' % (w, e.get('lvl')))
        if e.get('topic') not in vocab['t']:
            bad.append('%s: неизвестный блок %r' % (w, e.get('topic')))
        for a in (e.get('at') or []):
            if a not in vocab['p']:
                bad.append('%s: неизвестная страница %r' % (w, a))
        if '/' in str(e.get('ipa', '')) or '[' in str(e.get('ipa', '')):
            bad.append('%s: транскрипция со скобками' % w)
        if not str(e.get('ex', '')).strip().endswith(('.', '!', '?')):
            bad.append('%s: пример без точки' % w)
    assert not bad, '; '.join(bad[:20])


def test_no_duplicates(vocab):
    seen, dups = set(), []
    for e in vocab['v']:
        k = e['w'].lower()
        if k in seen:
            dups.append(e['w'])
        seen.add(k)
    assert not dups, 'слово описано дважды: %s' % ', '.join(sorted(set(dups))[:20])


def test_levels_split(vocab):
    """Ступени разложены: половина тысячи — A0, половина — A1."""
    a0 = len([e for e in vocab['v'] if e.get('lvl') == 'A0'])
    a1 = len([e for e in vocab['v'] if e.get('lvl') == 'A1'])
    assert a0 >= 500 and a1 >= 500, 'A0: %d, A1: %d' % (a0, a1)
    assert vocab['l'] and 'A0' in vocab['l'] and 'A1' in vocab['l'], 'нет описания ступеней'


# ---------- страницы ----------

@pytest.mark.parametrize('page', PAGES)
def test_page_exists(page):
    assert os.path.isfile(os.path.join(SITE, page + '.html')), 'нет страницы %s' % page


@pytest.mark.parametrize('page', PAGES)
def test_page_wired(page):
    """Страница подключает словарь ступени, произношение и блок «Коротко»."""
    html = open(os.path.join(SITE, page + '.html'), encoding='utf-8').read()
    for need in ('assets/vocab-a1.js', 'assets/speak.js', 'data-page="zero"',
                 'class="tldr"', 'Коротко'):
        assert need in html, 'на странице %s нет «%s»' % (page, need)
    assert '.html"' not in html.replace('index.html"', ''), \
        'на странице %s ссылка с расширением .html' % page


@pytest.mark.parametrize('unit', UNITS)
def test_unit_tasks_wired(unit):
    """У страницы с заданиями подключён свой банк и движок."""
    html = open(os.path.join(SITE, unit + '.html'), encoding='utf-8').read()
    for need in ('assets/tasks-%s.js' % unit, 'assets/exercises.js',
                 'id="tasks"', "unit: '%s'" % unit):
        assert need in html, 'на странице %s нет «%s»' % (unit, need)


def test_in_navigation():
    """Все страницы ступени стоят в навигации отдельной группой «С нуля»."""
    js = open(os.path.join(ASSETS, 'site.js'), encoding='utf-8').read()
    assert "t: 'С нуля'" in js, 'в навигации нет группы «С нуля»'
    for page in PAGES:
        assert re.search(r"h: '%s'" % re.escape(page), js), \
            'страницы %s нет в навигации' % page


def test_cards_drill_extended():
    """Тренажёр карточек берёт слова по ступени и теме и показывает график."""
    html = open(os.path.join(SITE, 'd-cards.html'), encoding='utf-8').read()
    for need in ('assets/vocab-a1.js', "id=\"level\"", "id=\"topic\"",
                 'srsPlan', 'onlyDue'):
        assert need in html, 'на странице карточек нет «%s»' % need
    js = open(os.path.join(ASSETS, 'drill.js'), encoding='utf-8').read()
    for need in ('function srsPlan', 'function pickWords', 'opts.level', 'opts.onlyDue'):
        assert need in js, 'в drill.js нет «%s»' % need


# ---------- задания ----------

@pytest.mark.parametrize('unit', UNITS)
def test_unit_task_count(tasks, unit):
    """На каждой странице ступени есть свой набор заданий."""
    mine = [t for t in tasks if t.get('unit') == unit]
    assert len(mine) >= 10, 'в %s всего %d заданий' % (unit, len(mine))


def test_question_count(tasks):
    """Считаем отдельные вопросы: на ступени их должно быть много."""
    def size(t):
        if t.get('type') == 'match':
            return len(t.get('pairs') or [])
        if t.get('type') == 'sort':
            return len(t.get('items') or [])
        if t.get('type') == 'order':
            return 1
        if t.get('type') == 'dialog':
            return len([x for x in (t.get('turns') or []) if not x.get('t')])
        return len(t.get('items') or [])
    total = sum(size(t) for t in tasks if str(t.get('unit', '')).startswith('z-'))
    assert total >= 500, 'вопросов на ступени всего %d' % total


def test_types_covered(tasks):
    """На ступени встречаются все семь типов заданий."""
    have = {t.get('type') for t in tasks if str(t.get('unit', '')).startswith('z-')}
    need = {'fill', 'choice', 'build', 'match', 'sort', 'order', 'dialog'}
    assert need <= have, 'не использованы типы: %s' % ', '.join(sorted(need - have))


def test_listening_tasks(tasks):
    """Есть задания на слух: звук в условии, написание выбирает студент."""
    ear = [t for t in tasks
           if str(t.get('unit', '')).startswith('z-') and 'data-say=' in str(t.get('q', ''))]
    assert len(ear) >= 10, 'заданий со звуком в условии всего %d' % len(ear)
