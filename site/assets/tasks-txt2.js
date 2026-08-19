/* Задания к техническим текстам верхней ступени (вторая пятёрка).
 *
 * unit: 'tx-power' — судовые энергетические установки;
 * unit: 'tx-corr'  — коррозия и защита;
 * unit: 'tx-sys'   — судовые системы;
 * unit: 'tx-safe'  — техника безопасности на верфи;
 * unit: 'tx-qa'    — качество и контроль.
 *
 * Схема записи и типы описаны в assets/exercises.js.
 */
'use strict';
(window.TASKS = window.TASKS || []).push(

/* ================= судовые энергетические установки ================= */
{
  id: 'xp-1', unit: 'tx-power', src: 'установка 1', topic: 'узлы энергетической установки',
  type: 'match',
  q: 'Подберите к узлу установки его назначение.',
  pairs: [
    ['the main engine', 'превращает теплоту топлива в работу'],
    ['the turbocharger', 'нагнетает воздух в цилиндр'],
    ['the thrust bearing', 'передаёт упор винта корпусу'],
    ['the stern tube', 'не пускает забортную воду внутрь'],
    ['the reduction gear', 'снижает частоту вращения до нужной винту'],
    ['the exhaust gas boiler', 'использует теплоту выпускных газов'],
  ],
  why: 'Названия узлов почти всегда состоят из двух-трёх существительных подряд: <b>thrust bearing</b> — «упорный подшипник», <b>stern tube</b> — «дейдвудная труба», <b>exhaust gas boiler</b> — «утилизационный котёл». Главное слово стоит последним, все предыдущие его определяют.',
},
{
  id: 'xp-2', unit: 'tx-power', src: 'установка 2', topic: 'рабочий цикл и наддув',
  type: 'choice',
  q: 'Ответьте на вопросы о рабочем цикле и наддуве.',
  items: [
    { s: 'How many revolutions of the crankshaft does one power stroke of a four-stroke engine take?',
      opts: [
        { t: 'Two revolutions.', ok: true, why: 'четыре такта поршня — это два оборота коленчатого вала.' },
        { t: 'One revolution.', why: 'один оборот на цикл даёт двухтактный двигатель.' },
        { t: 'Four revolutions.', why: 'четыре — это число тактов, а не оборотов вала.' },
      ] },
    { s: 'Why is a large two-stroke engine coupled directly to the shafting?',
      opts: [
        { t: 'Because it is slow-speed and its revolutions already suit the propeller.', ok: true,
          why: 'малооборотный двигатель вращается примерно с той же частотой, что нужна винту, поэтому редуктор не требуется.' },
        { t: 'Because it has no crankshaft.', why: 'коленчатый вал есть у любого поршневого двигателя.' },
        { t: 'Because a reduction gear burns too much fuel.', why: 'редуктор топлива не сжигает; дело в частоте вращения.' },
      ] },
    { s: 'What drives the turbine of a turbocharger?',
      opts: [
        { t: 'The exhaust gas.', ok: true, why: 'наддув работает на теплоте и давлении выпускных газов, которые иначе ушли бы за борт.' },
        { t: 'The cooling water.', why: 'охлаждающая вода уносит теплоту, но турбину не вращает.' },
        { t: 'The lubricating oil.', why: 'масло смазывает подшипники, а не приводит турбину.' },
      ] },
  ],
  why: 'Запомните пару прилагательных: <b>slow-speed</b> (малооборотный) и <b>medium-speed</b> (среднеоборотный). Оба пишутся через дефис и не имеют окончания множественного числа: <i>slow-speed engines</i>.',
},
{
  id: 'xp-3', unit: 'tx-power', src: 'установка 3', topic: 'предлоги в описании установки',
  type: 'fill',
  q: 'Заполните пропуски предлогами.',
  items: [
    { s: 'The chemical energy of the fuel is converted ___ work at the propeller.',
      a: [['into', 'to']] },
    { s: 'The engine is coupled ___ the shafting.', a: [['to']] },
    { s: 'The propeller turns the torque ___ thrust.', a: [['into']] },
    { s: 'The engine runs ___ about a hundred revolutions per minute.', a: [['at']] },
    { s: 'Part of the remaining heat is recovered ___ an exhaust gas boiler.', a: [['in']] },
    { s: 'Dual-fuel engines burn gas ___ well as oil.', a: [['as']] },
  ],
  why: 'Модель <b>turn (convert) … into …</b> означает превращение одного в другое. Глагол <b>couple</b> берёт предлог <i>to</i>, а не <i>with</i>. Частоту вращения вводит предлог <b>at</b>, как и любую скорость: <i>at 100 rpm</i>.',
},
{
  id: 'xp-4', unit: 'tx-power', src: 'установка 4', topic: 'путь мощности', type: 'order',
  q: 'Расставьте по порядку путь энергии от топлива до упора.',
  lines: [
    'The fuel is injected into the hot air and burns.',
    'The expanding gas pushes the piston down.',
    'The connecting rod turns this motion into the rotation of the crankshaft.',
    'The shafting carries the torque towards the stern.',
    'The propeller turns the torque into thrust.',
    'The thrust bearing passes the push of the propeller to the hull.',
  ],
  why: 'Обратите внимание: крутящий момент идёт от двигателя к винту, а упор — обратно, от винта к корпусу через упорный подшипник. Поэтому <b>thrust bearing</b> и стоит в конце цепочки, хотя расположен он ближе к машине, чем винт.',
},

/* ================= коррозия и защита ================= */
{
  id: 'xc-1', unit: 'tx-corr', src: 'коррозия 1', topic: 'виды коррозии и меры защиты',
  type: 'sort',
  q: 'Разложите: что из перечисленного — вид коррозии, а что — мера защиты.',
  cats: { f: 'вид коррозии', p: 'мера защиты' },
  items: [
    { t: 'general corrosion', c: 'f' },
    { t: 'pitting', c: 'f' },
    { t: 'galvanic corrosion', c: 'f' },
    { t: 'crevice corrosion', c: 'f' },
    { t: 'corrosion fatigue', c: 'f' },
    { t: 'abrasive blasting', c: 'p' },
    { t: 'a shop primer', c: 'p' },
    { t: 'a sacrificial anode', c: 'p' },
    { t: 'impressed current cathodic protection', c: 'p' },
    { t: 'a corrosion allowance', c: 'p' },
  ],
  why: 'Названия видов коррозии строятся по одной модели: определение плюс слово <i>corrosion</i> (<b>general</b>, <b>galvanic</b>, <b>crevice</b>). Исключение — <b>pitting</b>: это отглагольное существительное, само по себе значащее «язвенная коррозия».',
},
{
  id: 'xc-2', unit: 'tx-corr', src: 'коррозия 2', topic: 'предлоги при глаголах защиты',
  type: 'fill',
  q: 'Заполните пропуски предлогами.',
  items: [
    { s: 'Mill scale, rust and salt are removed ___ abrasive blasting.', a: [['by']] },
    { s: 'The cleaned steel is covered ___ a shop primer.', a: [['with']] },
    { s: 'The Rules ask ___ a nominal thickness of about 320 micrometres.', a: [['for']] },
    { s: 'The anodes corrode instead ___ the steel.', a: [['of']] },
    { s: 'Blocks of zinc are welded ___ the shell.', a: [['to']] },
    { s: 'A reference electrode keeps the potential ___ safe limits.', a: [['within', 'inside']] },
  ],
  why: 'Различайте два предлога при пассиве: <b>by</b> указывает на способ или исполнителя (<i>removed by blasting</i>), <b>with</b> — на то, чем покрыта поверхность (<i>covered with a primer</i>). Сочетание <b>ask for</b> в языке правил значит «требовать».',
},
{
  id: 'xc-3', unit: 'tx-corr', src: 'коррозия 3', topic: 'механизм коррозии', type: 'choice',
  q: 'Ответьте на вопросы о механизме коррозии.',
  items: [
    { s: 'What happens at the anode of a corrosion cell?',
      opts: [
        { t: 'The iron dissolves and passes into the water as ions.', ok: true,
          why: 'именно на аноде металл теряет вещество — там и растёт язва.' },
        { t: 'The oxygen dissolved in the water is reduced.', why: 'восстановление кислорода идёт на катоде.' },
        { t: 'The current stops.', why: 'ток, наоборот, идёт через электролит от анода к катоду.' },
      ] },
    { s: 'Which metal of a galvanic couple corrodes first?',
      opts: [
        { t: 'The less noble one.', ok: true, why: 'менее благородный металл становится анодом пары и разрушается.' },
        { t: 'The more noble one.', why: 'более благородный металл работает катодом и защищён.' },
        { t: 'Both at the same rate.', why: 'в паре всегда есть анод и катод, скорости разные.' },
      ] },
    { s: 'Why is pitting more dangerous than general corrosion?',
      opts: [
        { t: 'A deep pit can go through a plate while the total loss of metal is small.', ok: true,
          why: 'по средней потере толщины язвенную коррозию не заметить, а лист уже насквозь.' },
        { t: 'It attacks the whole surface evenly.', why: 'равномерно съедает поверхность как раз сплошная коррозия.' },
        { t: 'It appears only on bronze.', why: 'язвы образуются и на стали, особенно в застойной воде.' },
      ] },
  ],
  why: 'В ответах пригодится сравнительная степень с указанием на группу: <b>the less noble of them</b>, <b>the more dangerous of the two</b>. Артикль <i>the</i> перед сравнительной степенью обязателен, если речь о выборе из известного набора.',
},
{
  id: 'xc-4', unit: 'tx-corr', src: 'коррозия 4', topic: 'порядок окраски корпуса', type: 'order',
  q: 'Расставьте операции защиты корпуса по порядку.',
  lines: [
    'Mill scale, rust, salt and oil are removed by abrasive blasting.',
    'The cleaned steel is covered with a shop primer.',
    'The blocks are welded together and the damaged primer is repaired.',
    'The paint system is built up layer by layer.',
    'The dry film thickness is measured.',
    'An antifouling paint is applied below the waterline.',
    'Sacrificial anodes are welded to the shell before the launching.',
  ],
  why: 'Порядок задан технологией: сначала чистая сталь, потом грунт, потом слои краски и лишь в самом низу — противообрастающее покрытие. Толщину сухой плёнки меряют до нанесения последнего слоя, иначе неясно, что именно измерено.',
},

/* ================= судовые системы ================= */
{
  id: 'xs-1', unit: 'tx-sys', src: 'системы 1', topic: 'арматура и элементы систем',
  type: 'match',
  q: 'Подберите к элементу системы его назначение.',
  pairs: [
    ['a non-return valve', 'пропускает жидкость только в одну сторону'],
    ['a strainer', 'задерживает грязь перед насосом'],
    ['a sounding pipe', 'служит для измерения уровня в танке'],
    ['a sea chest', 'принимает забортную воду в систему'],
    ['a settling tank', 'даёт тяжёлому топливу отстояться'],
    ['a hydrant', 'позволяет подключить рукав к пожарной магистрали'],
  ],
  why: 'Слово <b>fittings</b> в описании трубопровода значит «арматура»: клапаны, фильтры, фланцы. Не путайте с <i>fitting-out</i> — достройкой судна на плаву.',
},
{
  id: 'xs-2', unit: 'tx-sys', src: 'системы 2', topic: 'состав судовых систем', type: 'sort',
  q: 'Отнесите каждый элемент к своей системе.',
  cats: {
    b: 'осушительная и балластная', f: 'топливная и масляная', c: 'пожарная',
  },
  items: [
    { t: 'the bilge suction in the machinery space', c: 'b' },
    { t: 'the double bottom tanks', c: 'b' },
    { t: 'the settling tank and the purifier', c: 'f' },
    { t: 'the sump tank', c: 'f' },
    { t: 'the steam heating coils in the bunker tanks', c: 'f' },
    { t: 'the fire main along the whole ship', c: 'c' },
    { t: 'the hose and the nozzle', c: 'c' },
    { t: 'the hydrants on the deck', c: 'c' },
  ],
  why: 'Названия систем в английском стоят перед словом <i>system</i> без предлога: <b>bilge system</b>, <b>ballast system</b>, <b>fuel oil system</b>. По-русски мы говорим «система охлаждения», по-английски — <b>cooling system</b>, то есть определение впереди.',
},
{
  id: 'xs-3', unit: 'tx-sys', src: 'системы 3', topic: 'требования Правил', type: 'build',
  q: 'Соберите предложения. Следите за оборотом <i>prevent … from</i> и за местом <i>at least</i>.',
  items: [
    { ru: 'Невозвратные клапаны не дают воде уйти обратно в сухой отсек.',
      a: 'Non-return valves prevent the water from running back into a dry space.',
      extra: ['run'] },
    { ru: 'Правила требуют не менее двух независимых насосов.',
      a: 'The Rules require at least two independent pumps.', extra: ['less'] },
    { ru: 'Тяжёлое топливо нужно подогреть, прежде чем его можно откачать.',
      a: 'Heavy fuel has to be heated before it can be pumped.', extra: ['will'] },
  ],
  why: 'После <b>prevent … from</b> глагол стоит в форме на <i>-ing</i>. Оборот <b>at least</b> («не менее») ставится непосредственно перед числом. После <i>before</i> будущее время не употребляется, поэтому <i>before it can be pumped</i>, а не «before it will be pumped».',
},
{
  id: 'xs-4', unit: 'tx-sys', src: 'системы 4', topic: 'предлоги в описании систем',
  type: 'fill',
  q: 'Заполните пропуски.',
  items: [
    { s: 'Systems are grouped ___ what they carry.', a: [['by']] },
    { s: 'The pipes are joined ___ welding or by bolted flanges.', a: [['by']] },
    { s: 'Sea water is taken ___ through a sea chest.', a: [['in']] },
    { s: 'One fire pump must be driven independently ___ the main engine.', a: [['of']] },
    { s: 'Sewage goes to a treatment plant before it is discharged ___.',
      a: [['overboard']] },
    { s: 'The head is the height ___ which the pump can raise the liquid.', a: [['to']] },
  ],
  why: 'Наречие <b>overboard</b> («за борт») предлога после себя не требует. В книжном обороте <b>the height to which …</b> предлог стоит перед <i>which</i>; в разговорной речи его унесли бы в конец: <i>the height which it can raise the liquid to</i>.',
},

/* ================= техника безопасности на верфи ================= */
{
  id: 'xf-1', unit: 'tx-safe', src: 'безопасность 1', topic: 'знаки и средства защиты',
  type: 'match',
  q: 'Подберите к слову на знаке или к средству защиты его смысл.',
  pairs: [
    ['DANGER', 'опасность, которая наверняка убьёт'],
    ['WARNING', 'опасность, которая может убить'],
    ['CAUTION', 'опасность, которая может привести к травме'],
    ['NOTICE', 'сведения без прямой опасности'],
    ['a hard hat', 'защищает голову от падающих предметов'],
    ['a full-body harness', 'удерживает человека при работе на высоте'],
  ],
  why: 'Порядок строгости знаков задан стандартом и одинаков во всём мире: <b>DANGER → WARNING → CAUTION → NOTICE</b>. Различие между первыми двумя проходит по модальному глаголу: <i>will kill</i> против <i>may kill</i>.',
},
{
  id: 'xf-2', unit: 'tx-safe', src: 'безопасность 2', topic: 'наряд-допуск', type: 'dialog',
  q: 'Мастер и рабочий готовят огневые работы в балластном танке. Выберите реплики рабочего.',
  turns: [
    { who: 'Foreman', t: 'We have to weld a bracket inside the ballast tank today.' },
    { who: 'Worker', opts: [
      { t: 'Then we need a permit to work for hot work.', ok: true,
        why: 'огневые работы в замкнутом объёме выполняют только по отдельному наряду-допуску.' },
      { t: 'Then I will take my tools and start right now.',
        why: 'до подписи наряда работу начинать нельзя.' },
      { t: 'Then no permit is needed inside a tank.',
        why: 'наоборот, именно внутри танка наряд обязателен.' },
    ] },
    { who: 'Foreman', t: 'Of course. The space has been ventilated and the atmosphere has been tested.' },
    { who: 'Worker', opts: [
      { t: 'Good. What is the oxygen content?', ok: true,
        why: 'первое, что спрашивают о результате замера, — содержание кислорода; норма около 21 процента.' },
      { t: 'Good. What is the colour of the paint inside?',
        why: 'цвет краски к безопасности входа отношения не имеет.' },
      { t: 'Good. What is the weight of the bracket?',
        why: 'вес кницы ничего не говорит о состоянии атмосферы.' },
    ] },
    { who: 'Foreman', t: 'Twenty-one per cent, and no flammable gas at all.' },
    { who: 'Worker', opts: [
      { t: 'Then I will arrange a fire watch and check the compartment an hour after the job.',
        ok: true, why: 'при огневых работах нужен наблюдающий, а отсек проверяют ещё раз через час после окончания.' },
      { t: 'Then nobody has to stand at the manhole.',
        why: 'у горловины всё время должен находиться человек, поддерживающий связь с бригадой.' },
      { t: 'Then the permit is valid for the whole week.',
        why: 'наряд действует только на одну смену.' },
    ] },
  ],
  why: 'В разговоре о безопасности почти каждая фраза содержит модальный глагол: <i>we have to weld</i> (производственная необходимость), <i>nobody has to stand</i> (отсутствие обязанности), <i>the permit is valid</i> (констатация). Именно модальный глагол и отличает требование от совета.',
},
{
  id: 'xf-3', unit: 'tx-safe', src: 'безопасность 3', topic: 'времена и отрицания в инструкции',
  type: 'fill',
  q: 'Поставьте глагол в скобках в нужную форму или впишите нужное слово.',
  items: [
    { s: 'Dangerous jobs are not started until a permit ___ (sign).',
      a: [['has been signed']], ru: 'наряд уже подписан к этому моменту' },
    { s: 'The compartment is checked one hour after the work ___ (finish).',
      a: [['has finished']], ru: 'работа уже закончена' },
    { s: '___ flammable or toxic gas may be present in the tank.',
      a: [['no']], ru: 'горючего или токсичного газа быть не должно' },
    { s: 'A man working above two metres ___ (wear) a full-body harness.',
      a: [['wears']], ru: 'общее правило, настоящее простое' },
    { s: '___ of these dangers can be removed completely.',
      a: [['none']], ru: 'ни одну из этих опасностей' },
  ],
  why: 'После союзов <b>until</b>, <b>before</b> и <b>after</b> будущее время не ставится: там, где по-русски «пока не подпишут», по-английски стоит Present Perfect. Отрицание в инструкции чаще всего переносится на существительное (<b>no gas</b>) или выражается местоимением <b>none</b>, а не частицей <i>not</i>.',
},
{
  id: 'xf-4', unit: 'tx-safe', src: 'безопасность 4', topic: 'вход в замкнутый объём',
  type: 'order',
  q: 'Расставьте по порядку действия перед входом в замкнутый объём.',
  lines: [
    'The job, the place and the time are written into a permit to work.',
    'The space is ventilated.',
    'The atmosphere is tested for oxygen and for flammable gas.',
    'The permit is signed and the precautions are listed on it.',
    'A man is posted at the manhole and the team enters the space.',
    'One hour after the hot work the compartment is checked again.',
  ],
  why: 'Последовательность жёсткая: сначала бумага, потом вентиляция, потом замер, и только затем подпись и вход. Проверка через час после огневых работ нужна потому, что тлеющий очаг разгорается не сразу.',
},

/* ================= качество и контроль ================= */
{
  id: 'xq-1', unit: 'tx-qa', src: 'качество 1', topic: 'методы контроля', type: 'match',
  q: 'Подберите к методу контроля то, что он делает.',
  pairs: [
    ['visual inspection', 'находит большую часть поверхностных дефектов'],
    ['ultrasonic testing', 'даёт эхо от всего, что прерывает пучок звука'],
    ['radiographic testing', 'показывает поры и шлак тёмными пятнами на плёнке'],
    ['penetrant testing', 'делает мелкие трещины видимыми цветной жидкостью'],
    ['magnetic particle testing', 'выявляет трещины по скоплению железного порошка'],
    ['a hose test', 'проверяет шов струёй воды с другой стороны'],
  ],
  why: 'Общее название всех этих методов — <b>non-destructive testing</b> (NDT), «неразрушающий контроль»: деталь после проверки остаётся годной. Испытание наливом или поливом к NDT не относится: оно проверяет не металл, а непроницаемость конструкции.',
},
{
  id: 'xq-2', unit: 'tx-qa', src: 'качество 2', topic: 'испытания и несоответствия',
  type: 'choice',
  q: 'Ответьте на вопросы об испытаниях и документах качества.',
  items: [
    { s: 'What is a hold point?',
      opts: [
        { t: 'A check before which the next operation may not begin.', ok: true,
          why: 'контрольная точка останавливает работу до подписи проверяющего.' },
        { t: 'A place where the block is lifted by the crane.',
          why: 'это точка подъёма, а не точка контроля.' },
        { t: 'A tolerance for the gap in a butt.',
          why: 'это допуск на зазор, к плану контроля отношения не имеет.' },
      ] },
    { s: 'What does a hydrostatic test do?',
      opts: [
        { t: 'It fills the tank with water to a head given in the Rules.', ok: true,
          why: 'испытание наливом создаёт в цистерне заданный Правилами напор.' },
        { t: 'It shows a leak as bubbles in a soapy film.',
          why: 'так работает вакуумная камера.' },
        { t: 'It throws a jet of water at the seam from the other side.',
          why: 'это испытание поливом из шланга.' },
      ] },
    { s: 'When is a non-conformity closed?',
      opts: [
        { t: 'Only after the corrective action has been carried out and verified.', ok: true,
          why: 'закрывает несоответствие не обещание, а выполненное и проверенное действие.' },
        { t: 'As soon as it is raised.',
          why: 'открытие несоответствия — это только начало работы по нему.' },
        { t: 'When the ship is delivered to the owner.',
          why: 'сдача судна сама по себе несоответствия не закрывает.' },
      ] },
  ],
  why: 'Обратите внимание на глаголы документооборота: несоответствие <b>raise</b> («открыть, оформить»), корректирующее действие <b>carry out</b> («выполнить»), результат <b>verify</b> («проверить»), а затем несоответствие <b>close</b> («закрыть»).',
},
{
  id: 'xq-3', unit: 'tx-qa', src: 'качество 3', topic: 'косвенный вопрос и оборот make + прилагательное',
  type: 'build',
  q: 'Соберите предложения. Следите за порядком слов в косвенном вопросе.',
  items: [
    { ru: 'Система описывает, кто что делает и в каком порядке.',
      a: 'The system describes who does what and in which order.', extra: ['do'] },
    { ru: 'Цветная жидкость делает мелкие поверхностные трещины видимыми.',
      a: 'A coloured liquid makes fine surface cracks visible.', extra: ['visibly'] },
    { ru: 'Шов может выглядеть безупречно и всё же скрывать дефект.',
      a: 'A weld can look perfect and still hide a defect.', extra: ['hides'] },
  ],
  why: 'В косвенном вопросе порядок слов прямой и вспомогательный глагол не добавляется: <i>describes who does what</i>, а не «who does he do». После <b>make</b> идёт дополнение, а за ним прилагательное без связки: <b>makes cracks visible</b>, не «visibly». Один модальный глагол работает сразу на два инфинитива: <i>can look … and hide</i>.',
},
{
  id: 'xq-4', unit: 'tx-qa', src: 'качество 4', topic: 'работа с несоответствием', type: 'order',
  q: 'Расставьте по порядку работу с обнаруженным несоответствием.',
  lines: [
    'The inspector finds that a joint does not meet the requirement.',
    'A non-conformity is raised and described in the report.',
    'The yard looks for the root cause of the problem.',
    'A corrective action is agreed and carried out.',
    'The result is verified and the non-conformity is closed.',
    'The report is signed by the surveyor and kept as a quality record.',
  ],
  why: 'Разница между исправлением и корректирующим действием в том, что первое убирает дефект, а второе — его причину. Поэтому поиск коренной причины стоит в цепочке раньше, чем сама работа по исправлению.',
},

);
