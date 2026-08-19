# -*- coding: utf-8 -*-
"""Проверка страницы «Проверка уровня»: план теста, маршруты и правило весов.

План и маршруты лежат в site/assets/tasks-level.js (window.LEVEL_PLAN), счёт —
в site/assets/level.js (window.LEVEL). Оба файла — обычный JS, поэтому они
загружаются через node в песочницу вместе с остальными банками заданий и
проверяются как данные: разрешаются ли id заданий, укладываются ли блоки в
8–10 заданий, покрыты ли все пять осей, и, главное, действительно ли вес оси
считается как «дефицит × актуальность», а не назначается руками.
"""
import json
import os
import shutil
import subprocess

import pytest

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = os.path.join(ROOT, 'site')
ASSETS = os.path.join(SITE, 'assets')
PAGE = os.path.join(SITE, 'level.html')

BANKS = sorted(f for f in os.listdir(ASSETS)
               if f.startswith('tasks-') and f.endswith('.js')) \
    if os.path.isdir(ASSETS) else []

_LOADER = r'''
const fs = require('fs'), vm = require('vm');
const files = process.argv.filter((a) => a.endsWith('.js'));
const ctx = vm.createContext({ window: {} });
for (const f of files) vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
const w = ctx.window;
const P = w.LEVEL_PLAN, L = w.LEVEL;
/* профили: какие оси человек делает верно */
function simulate(right) {
  const res = [], reached = [], passed = [];
  for (const lv of P.levels) {
    reached.push(lv.code);
    const items = lv.items.filter((it) => (w.TASKS || []).some((t) => t.id === it.id));
    let ok = 0;
    items.forEach((it, i) => {
      const r = right(lv.code, it.axis, i);
      if (r) ok += 1;
      res.push({ code: lv.code, id: it.id, axis: it.axis, ok: r });
    });
    if (ok / items.length >= P.pass) passed.push(lv.code); else break;
  }
  const an = L.analyse(res, reached);
  return { code: passed.length ? passed[passed.length - 1] : null, reached: reached,
           passed: passed, axes: an.axes, rel: an.rel, weights: L.weights(an),
           payload: L.payload(L.weights(an)) };
}
process.stdout.write(JSON.stringify({
  plan: P,
  ids: (w.TASKS || []).map((t) => t.id),
  svg: L.profileSvg(simulate(() => true), 'B2', null),
  zero: simulate(() => false),
  gram: simulate((c, ax) => ax === 'gram' || ax === 'read'),
  nobiz: simulate((c, ax) => ax !== 'biz'),
}));
'''


@pytest.fixture(scope='module')
def data():
    if not shutil.which('node'):
        pytest.skip('node не установлен')
    files = [os.path.join(ASSETS, b) for b in BANKS] + [os.path.join(ASSETS, 'level.js')]
    if not os.path.isfile(os.path.join(ASSETS, 'tasks-level.js')):
        pytest.skip('плана теста ещё нет')
    r = subprocess.run(['node', '-e', _LOADER, '--'] + files, capture_output=True, text=True)
    assert r.returncode == 0, 'план не загрузился: %s' % r.stderr.strip()[:400]
    return json.loads(r.stdout)


def test_plan_shape(data):
    p = data['plan']
    assert [l['code'] for l in p['levels']] == ['A0', 'A1', 'A2', 'B1', 'B2']
    assert p['pass'] == 0.5, 'правило остановки — половина верных'
    assert [a['k'] for a in p['axes']] == ['read', 'gram', 'lex', 'tech', 'biz']


def test_blocks_size(data):
    bad = ['%s: %d' % (l['code'], len(l['items'])) for l in data['plan']['levels']
           if not 8 <= len(l['items']) <= 10]
    assert not bad, 'в блоке должно быть 8–10 заданий: %s' % ', '.join(bad)


def test_items_resolve(data):
    ids = set(data['ids'])
    axes = {a['k'] for a in data['plan']['axes']}
    bad = []
    for lv in data['plan']['levels']:
        for it in lv['items']:
            if it['id'] not in ids:
                bad.append('%s: нет задания %s' % (lv['code'], it['id']))
            if it['axis'] not in axes:
                bad.append('%s: неизвестная ось %r у %s' % (lv['code'], it['axis'], it['id']))
    assert not bad, '; '.join(bad)


def test_axes_covered(data):
    cnt = {a['k']: 0 for a in data['plan']['axes']}
    for lv in data['plan']['levels']:
        for it in lv['items']:
            cnt[it['axis']] += 1
    thin = ['%s: %d' % (k, v) for k, v in cnt.items() if v < 5]
    assert not thin, 'ось должна проверяться не меньше пяти раз: %s' % ', '.join(thin)


def test_routes(data):
    p = data['plan']
    axes = [a['k'] for a in p['axes']]
    assert len(p['routes']) >= 9, 'маршрутов меньше девяти'
    bad = []
    for r in p['routes']:
        for k in axes:
            v = r['v'].get(k)
            if v is None or not 0 <= v <= 10:
                bad.append('%s: оценка по оси %s = %r' % (r['id'], k, v))
        if not r.get('hours', 0) > 0:
            bad.append('%s: не указано время' % r['id'])
        if not 0 <= r.get('quick', -1) <= 10:
            bad.append('%s: оценка отдачи вне шкалы' % r['id'])
        if len(r.get('why', '')) < 60:
            bad.append('%s: оценки не обоснованы' % r['id'])
    assert not bad, '; '.join(bad)


def test_zero_profile(data):
    """Полный ноль: тест обязан остановиться на A0, а вес чтения — стать главным."""
    z = data['zero']
    assert z['code'] is None and z['reached'] == ['A0'], 'тест не остановился на A0'
    w = z['weights']
    assert w['read'] == max(w.values()), 'у новичка главный вес должен быть у чтения'
    assert w['tech'] <= 0.05 and w['biz'] <= 0.05, \
        'непройденные оси не должны тянуть вес: tech=%s biz=%s' % (w['tech'], w['biz'])


def test_measured_profiles(data):
    """Веса измеряются: сильная ось получает минимальный вес, слабая — большой."""
    g = data['gram']
    assert g['weights']['gram'] <= 0.05 < g['weights']['lex'], \
        'при сильной грамматике и слабой лексике веса перепутаны'
    n = data['nobiz']
    assert n['weights']['biz'] == max(n['weights'][k] for k in
                                      ('read', 'gram', 'lex', 'tech', 'biz')), \
        'провал по деловому языку должен стать главным весом'


def test_payload_shape(data):
    """Тело запроса к движку соответствует его формату."""
    p = data['zero']['payload']
    assert p['method'] == 'auto'
    assert p['directions'] == ['max'] * 5 + ['min', 'max']
    assert len(p['weights']) == 7
    assert len(p['values']) == len(p['alt_ids']) == len(data['plan']['routes'])
    assert all(len(row) == 7 for row in p['values'])


def test_profile_svg(data):
    svg = data['svg']
    assert 'class="geo-board"' in svg and 'viewBox="0 0 640 366"' in svg
    assert svg.count('<rect') >= 10, 'на диаграмме нет полос профиля'
    # палитра кластера: посторонних цветов на диаграмме быть не должно
    import re
    palette = {'#16161a', '#155e75', '#b3382e', '#1a7f37', '#6b6b74',
               '#f1f1f4', '#dcdce2'}
    used = set(re.findall(r'#[0-9a-fA-F]{6}', svg))
    assert used <= palette, 'посторонние цвета: %s' % ', '.join(sorted(used - palette))


@pytest.mark.skipif(not os.path.isfile(PAGE), reason='страницы уровня нет')
def test_page_wired():
    html = open(PAGE, encoding='utf-8').read()
    for need in ('assets/exercises.js', 'assets/tasks-level.js', 'assets/level.js',
                 'id="lvtest"', 'id="lvresult"', 'id="lvroutes"'):
        assert need in html, 'на странице level.html нет «%s»' % need


def test_nav_has_level():
    js = open(os.path.join(ASSETS, 'site.js'), encoding='utf-8').read()
    assert "h: 'level'" in js, 'страницы «Проверка уровня» нет в навигации'
