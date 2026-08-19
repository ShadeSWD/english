# -*- coding: utf-8 -*-
"""Проверки раздела «Технический английский» (верхняя ступень, B1–B2).

Раздел собран из трёх частей: десять технических текстов `tx-*`, пять разборов
языка документации `td-*` и четыре страницы о переписке, докладе и статье
`tb-*`. Здесь проверяется то, что легко разъезжается при правке: страница есть,
она подключает свой банк и движок, монтирует задания со своим `unit`, начинается
блоком «Коротко», стоит в навигации и имеет слова в словаре курса.
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

TEXTS = ['tx-hull', 'tx-weld', 'tx-power', 'tx-corr', 'tx-design',
         'tx-trials', 'tx-sys', 'tx-safe', 'tx-tol', 'tx-qa']
DOC = ['td-passive', 'td-modal', 'td-cond', 'td-part', 'td-num']
BIZ = ['tb-letter', 'tb-abstract', 'tb-talk', 'tb-paper']
PAGES = TEXTS + DOC + BIZ

BANKS = ['tasks-txt.js', 'tasks-txt2.js', 'tasks-doc.js', 'tasks-biz.js']


def page_html(slug):
    p = os.path.join(SITE, slug + '.html')
    assert os.path.isfile(p), 'нет страницы %s.html' % slug
    with open(p, encoding='utf-8') as fh:
        return fh.read()


@pytest.fixture(scope='module')
def tasks():
    if not shutil.which('node'):
        pytest.skip('node не установлен')
    loader = (
        'const fs=require("fs"),vm=require("vm");'
        'const ctx=vm.createContext({window:{}});'
        'for(const f of process.argv.filter(a=>a.endsWith(".js")))'
        ' vm.runInContext(fs.readFileSync(f,"utf8"),ctx,{filename:f});'
        'process.stdout.write(JSON.stringify(ctx.window.TASKS||[]));'
    )
    files = [os.path.join(ASSETS, b) for b in BANKS if os.path.isfile(os.path.join(ASSETS, b))]
    r = subprocess.run(['node', '-e', loader, '--'] + files, capture_output=True, text=True)
    assert r.returncode == 0, 'банки раздела не загрузились: %s' % r.stderr.strip()[:400]
    return json.loads(r.stdout)


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


@pytest.mark.parametrize('slug', PAGES)
def test_page_shape(slug):
    """Страница раздела: «Коротко» вверху, место для заданий, монтаж движка."""
    html = page_html(slug)
    assert 'class="tldr"' in html, '%s: нет блока «Коротко»' % slug
    assert 'data-page="tech"' in html, '%s: страница не отнесена к разделу tech' % slug
    assert 'assets/exercises.js' in html, '%s: не подключён движок заданий' % slug
    assert 'id="tasks"' in html, '%s: нет места для заданий' % slug
    assert "unit: '%s'" % slug in html, '%s: движок смонтирован не со своим unit' % slug
    assert 'assets/speak.js' in html, '%s: не подключено произношение' % slug
    assert 'class="wordbox" data-page="%s"' % slug in html, '%s: нет списка слов' % slug


@pytest.mark.parametrize('slug', PAGES)
def test_page_links_have_no_extension(slug):
    """Внутренние ссылки идут без .html — так настроен nginx кластера."""
    html = page_html(slug)
    bad = re.findall(r'href="(?!https?:)([^"#?]+\.html)"', html)
    assert not bad, '%s: ссылки с расширением: %s' % (slug, ', '.join(sorted(set(bad))))


@pytest.mark.parametrize('slug', PAGES)
def test_page_in_navigation(slug):
    """Каждая страница раздела стоит в навигационной группе site.js."""
    with open(os.path.join(ASSETS, 'site.js'), encoding='utf-8') as fh:
        js = fh.read()
    assert "h: '%s', k: 'tech'" % slug in js, '%s: страницы нет в навигации' % slug


def test_section_index():
    """Указатель раздела ссылается на все свои страницы."""
    html = page_html('tech')
    for slug in PAGES:
        assert 'href="%s"' % slug in html, 'на странице tech нет ссылки на %s' % slug


@pytest.mark.parametrize('slug', TEXTS)
def test_text_length(slug):
    """Английский текст страницы — не меньше 350 слов (требование ступени)."""
    html = page_html(slug)
    blocks = re.findall(r'<div class="en big">(.*?)</div>', html, re.S)
    assert blocks, '%s: нет блоков английского текста' % slug
    words = 0
    for b in blocks:
        words += len(re.findall(r"[A-Za-z][A-Za-z'’-]*", re.sub(r'<[^>]+>', ' ', b)))
    assert words >= 350, '%s: в тексте всего %d слов' % (slug, words)


@pytest.mark.parametrize('slug', PAGES)
def test_unit_has_tasks(tasks, slug):
    """У каждой страницы раздела есть свои задания в банке."""
    mine = [t for t in tasks if t.get('unit') == slug]
    assert len(mine) >= 3, 'в %s всего %d заданий' % (slug, len(mine))


def test_task_types_variety(tasks):
    """По разделу используются не меньше пяти типов заданий из семи."""
    mine = [t for t in tasks if t.get('unit') in PAGES]
    kinds = {t.get('type') for t in mine}
    assert len(kinds) >= 5, 'типов заданий всего %d: %s' % (len(kinds), ', '.join(sorted(kinds)))


def test_task_ids_unique(tasks):
    ids = [t.get('id') for t in tasks]
    dups = sorted({i for i in ids if ids.count(i) > 1})
    assert not dups, 'повторяющиеся id: %s' % ', '.join(map(str, dups))


def test_vocab_pages_registered(vocab):
    """Страницы раздела перечислены в PAGES словаря — иначе ссылка не построится."""
    missing = [s for s in PAGES if s not in vocab['p']]
    assert not missing, 'нет в PAGES: %s' % ', '.join(missing)


def test_vocab_topics_registered(vocab):
    """Темы верхней ступени заведены в TOPICS."""
    need = ['hull', 'weld', 'power', 'corr', 'des', 'shsys', 'safe', 'qual',
            'meas', 'doc', 'biz']
    missing = [t for t in need if t not in vocab['t']]
    assert not missing, 'нет в TOPICS: %s' % ', '.join(missing)


@pytest.mark.parametrize('slug', TEXTS)
def test_vocab_covers_text(vocab, slug):
    """У каждого технического текста есть свой список слов."""
    mine = [e for e in vocab['v'] if slug in (e.get('at') or [])]
    assert len(mine) >= 15, 'у %s всего %d слов в словаре' % (slug, len(mine))


def test_vocab_section_size(vocab):
    """Верхняя ступень добавляет в словарь курса не меньше 400 статей."""
    mine = [e for e in vocab['v']
            if any(a in PAGES for a in (e.get('at') or []))]
    assert len(mine) >= 400, 'в разделе всего %d словарных статей' % len(mine)
