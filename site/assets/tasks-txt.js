/* Задания к техническим текстам верхней ступени (часть 1).
 *
 * unit: 'tx-hull'   — конструкция корпуса;
 * unit: 'tx-weld'   — технология сварки;
 * unit: 'tx-design' — проектирование судна;
 * unit: 'tx-trials' — испытания и приёмка;
 * unit: 'tx-tol'    — чертёж, размеры и допуски.
 *
 * Схема записи и типы описаны в assets/exercises.js.
 * Вторая часть банка (СЭУ, коррозия, системы, охрана труда, качество) —
 * в assets/tasks-txt2.js.
 */
'use strict';
(window.TASKS = window.TASKS || []).push(

/* ===================== конструкция корпуса ===================== */
{
  id: 'xh-1', unit: 'tx-hull', src: 'корпус 1', topic: 'корпус как балка', type: 'choice',
  q: 'Ответьте на вопросы к разделу «The hull as a girder».',
  items: [
    { s: 'Why is the hull treated as a girder?',
      opts: [
        { t: 'Because weight and buoyancy are not equal in every section.', ok: true, why: 'разность сил веса и поддержания по длине и изгибает корпус как балку.' },
        { t: 'Because the hull is made of steel.', why: 'материал сам по себе не делает конструкцию балкой.' },
        { t: 'Because the deck is flat.', why: 'форма палубы к общему изгибу отношения не имеет.' },
      ] },
    { s: 'What are the flanges of the hull girder?',
      opts: [
        { t: 'The upper deck and the bottom.', ok: true, why: 'пояски балки — самые удалённые от нейтральной оси связи.' },
        { t: 'The two sides.', why: 'борта работают как стенки балки, а не как пояски.' },
        { t: 'The transverse bulkheads.', why: 'переборки — опоры перекрытий, в общий изгиб они входят иначе.' },
      ] },
    { s: 'When does a hull sag?',
      opts: [
        { t: 'When the crest of the wave is at the ends of the ship.', ok: true, why: 'середина проседает — это прогиб, sagging.' },
        { t: 'When the crest of the wave is amidships.', why: 'это перегиб, hogging: середина приподнята.' },
        { t: 'When the ship is in a dry dock.', why: 'в доке действуют другие нагрузки, и текст о них не говорит.' },
      ] },
  ],
  why: 'Пара <b>hog — sag</b> запоминается по положению гребня волны: гребень в середине — перегиб, гребень на оконечностях — прогиб.',
},
{
  id: 'xh-2', unit: 'tx-hull', src: 'корпус 2', topic: 'связи набора', type: 'match',
  q: 'Подберите русское название связи.',
  pairs: [
    ['floor', 'флор'],
    ['web frame', 'рамный шпангоут'],
    ['stringer', 'стрингер'],
    ['bracket', 'кница'],
    ['sheerstrake', 'ширстрек'],
    ['grillage', 'перекрытие'],
    ['section modulus', 'момент сопротивления сечения'],
  ],
  why: 'Английский различает <i>frame</i> (шпангоут) и <i>floor</i> (флор — тот же поперечный набор, но в днище). Слово <i>bracket</i> означает любую косынку, а <i>grillage</i> — именно перекрытие: поле обшивки с двумя семействами балок.',
},
{
  id: 'xh-3', unit: 'tx-hull', src: 'корпус 3', topic: 'that, which и пассив', type: 'fill',
  q: 'Впишите <i>that</i>, <i>which</i>, <i>whose</i> или форму страдательного залога.',
  items: [
    { s: 'The bending moment ___ acts on the hull girder consists of two parts.',
      a: [['that', 'which']], ru: 'Изгибающий момент, действующий на корпусную балку, складывается из двух частей.' },
    { s: 'The wave moment, ___ depends on the height of the wave, is the second part.',
      a: [['which']], ru: 'Волновой момент, зависящий от высоты волны, — вторая часть.' },
    { s: 'The plating is ___ (support) by a framework of beams.',
      a: [['supported']], ru: 'Обшивку подкрепляет набор из балок.' },
    { s: 'The frames ___ (space) from 600 to 800 millimetres apart.',
      a: [['are spaced']], ru: 'Шпангоуты поставлены с шагом от 600 до 800 миллиметров.' },
    { s: 'The corners of an opening ___ (round) and the edges ___ (reinforce).',
      a: [['are rounded'], ['are reinforced']], ru: 'Углы выреза скругляют, а кромки подкрепляют.' },
  ],
  why: 'Перед оборотом с <b>which</b> стоит запятая, и он добавляет сведения; <b>that</b> запятой не отделяется и сужает значение. В страдательном залоге настоящего времени форма <i>be</i> согласуется с подлежащим: <i>is supported</i>, но <i>are spaced</i>.',
},
{
  id: 'xh-4', unit: 'tx-hull', src: 'корпус 4', topic: 'путь нагрузки', type: 'order',
  q: 'Расставьте предложения так, чтобы получился путь нагрузки от воды до переборки.',
  lines: [
    'The water presses on the shell plating.',
    'The plating transfers the pressure to the ordinary stiffeners.',
    'The stiffeners rest on the primary members: girders, stringers and web frames.',
    'A bracket carries the load from the end of a beam into the next member.',
    'The primary members rest on the transverse bulkheads.',
    'The bulkheads transfer the load into the hull girder as a whole.',
  ],
  why: 'Нагрузка идёт от мелких связей к крупным: обшивка → холостые балки → рамные связи → переборки → корпус в целом. Кница стоит там, где балка кончается: без неё нагрузка не находит следующей связи.',
},

/* ===================== технология сварки ===================== */
{
  id: 'xw-1', unit: 'tx-weld', src: 'сварка 1', topic: 'способы сварки', type: 'sort',
  q: 'Отнесите признак к способу сварки: ручная дуговая покрытым электродом, в защитном газе или под флюсом.',
  cats: {
    m: 'manual metal arc — ручная дуговая',
    g: 'gas metal arc — в защитном газе',
    s: 'submerged arc — под флюсом',
  },
  items: [
    { t: 'a covered electrode is held by the welder', c: 'm' },
    { t: 'almost no equipment is needed, so it is used for repairs', c: 'm' },
    { t: 'a wire is fed continuously through the torch', c: 'g' },
    { t: 'the arc is shielded by a gas', c: 'g' },
    { t: 'the main process in the panel shop', c: 'g' },
    { t: 'the arc burns under a layer of flux', c: 's' },
    { t: 'the fastest of the three, but the flat position only', c: 's' },
  ],
  why: 'Способ выбирают по трём признакам: доступность места, положение шва и производительность. Чем выше скорость наплавки, тем меньше свободы в положении: под флюсом варят только в нижнем положении.',
},
{
  id: 'xw-2', unit: 'tx-weld', src: 'сварка 2', topic: 'условные предложения', type: 'fill',
  q: 'Раскройте скобки: условные предложения первого типа. После <i>if</i> будущего времени не бывает.',
  items: [
    { s: 'If the metal ___ (cool) too quickly, cold cracks may appear.',
      a: [['cools']], ru: 'Если металл остывает слишком быстро, могут появиться холодные трещины.' },
    { s: 'If the metal cools too slowly, the grain ___ (grow) and the toughness falls.',
      a: [['grows']], ru: 'Если металл остывает слишком медленно, зерно растёт, а вязкость падает.' },
    { s: 'If the results ___ (satisfy) the Rules, the surveyor approves the procedure.',
      a: [['satisfy']], ru: 'Если результаты отвечают Правилам, инспектор одобряет технологию.' },
    { s: 'Steels with a high carbon equivalent ___ (preheat) before welding.',
      a: [['are preheated']], ru: 'Стали с высоким углеродным эквивалентом перед сваркой подогревают.' },
  ],
  why: 'В условном предложении первого типа придаточное стоит в настоящем времени, а главное — в настоящем или будущем. Ошибка «if the metal will cool» встречается почти у всех и сразу выдаёт русскоязычного автора.',
},
{
  id: 'xw-3', unit: 'tx-weld', src: 'сварка 3', topic: 'тепловой режим', type: 'choice',
  q: 'Ответьте на вопросы о погонной энергии и зоне термического влияния.',
  items: [
    { s: 'What is the heat input calculated from?',
      opts: [
        { t: 'From the current, the arc voltage and the travel speed.', ok: true, why: 'это три величины режима, которые и дают энергию на единицу длины шва.' },
        { t: 'From the thickness of the plate only.', why: 'толщина влияет на отвод тепла, но в саму погонную энергию не входит.' },
        { t: 'From the length of the seam.', why: 'погонная энергия как раз отнесена к единице длины, поэтому от длины шва не зависит.' },
      ] },
    { s: 'Why is the interpass temperature kept within limits?',
      opts: [
        { t: 'Because it controls the cooling rate and therefore the structure of the metal.', ok: true, why: 'через скорость охлаждения температура задаёт структуру зоны термического влияния.' },
        { t: 'Because it makes the welder comfortable.', why: 'условия труда важны, но межслойную температуру нормируют не ради них.' },
        { t: 'Because a hot plate is easier to bend.', why: 'гибка — другая операция, к режиму сварки она отношения не имеет.' },
      ] },
  ],
  why: 'Цепочка причин в тексте выстроена так: режим → погонная энергия → скорость охлаждения → структура металла → вязкость и трещины. Английский обозначает её глаголом <b>to control</b>: «определять, задавать», а не «контролировать».',
},
{
  id: 'xw-4', unit: 'tx-weld', src: 'сварка 4', topic: 'аттестация технологии', type: 'order',
  q: 'Расставьте шаги аттестации сварочной технологии по порядку.',
  lines: [
    'The yard writes a welding procedure specification.',
    'A test piece is welded under the stated conditions.',
    'The weld is radiographed.',
    'Specimens are cut out and tested in tension and in bending.',
    'The toughness is measured on notched specimens.',
    'The surveyor approves the procedure and it becomes qualified.',
    'The welders are qualified for a range of positions and thicknesses.',
  ],
  why: 'Сначала пишут технологию, затем проверяют её на контрольном образце и только потом допускают к работе людей. Обратите внимание: технологию <i>qualify</i>, а не <i>test</i>; испытание — только часть аттестации.',
},

/* ===================== проектирование судна ===================== */
{
  id: 'xd-1', unit: 'tx-design', src: 'проект 1', topic: 'проектные термины', type: 'match',
  q: 'Подберите русский эквивалент.',
  pairs: [
    ['deadweight', 'дедвейт'],
    ['light weight', 'масса судна порожнём'],
    ['displacement', 'водоизмещение'],
    ['block coefficient', 'коэффициент общей полноты'],
    ['parent vessel', 'судно-прототип'],
    ['general arrangement', 'общее расположение'],
    ['freeboard', 'надводный борт'],
  ],
  why: 'Не путайте <i>displacement</i> (водоизмещение — вся масса судна) и <i>deadweight</i> (дедвейт — то, что судно способно принять). Их связывает уравнение масс: <b>displacement = light weight + deadweight</b>.',
},
{
  id: 'xd-2', unit: 'tx-design', src: 'проект 2', topic: 'связки рассуждения', type: 'fill',
  q: 'Впишите подходящее слово: <i>against</i>, <i>as</i>, <i>with</i>, <i>out of</i>, <i>than</i>.',
  items: [
    { s: 'The dimensions are checked ___ the weight equation.', a: [['against']],
      ru: 'Размерения проверяют по уравнению масс.' },
    { s: 'This way of working is known ___ the design spiral.', a: [['as']],
      ru: 'Такой порядок работы называют спиралью проектирования.' },
    { s: 'A design which does not comply ___ the Rules cannot be approved.',
      a: [['with']], ru: 'Проект, не отвечающий Правилам, не может быть одобрен.' },
    { s: '___ that sentence the designer has to obtain the main dimensions.',
      a: [['Out of', 'out of']], ru: 'Из этой фразы проектант должен получить главные размерения.' },
    { s: 'Each turn of the spiral uses better data ___ the turn before it.',
      a: [['than']], ru: 'Каждый виток спирали опирается на лучшие данные, чем предыдущий.' },
  ],
  why: 'Запомните три сочетания целиком: <b>check against</b> — сверять с чем-либо, <b>known as</b> — известный под названием, <b>comply with</b> — отвечать требованиям. Предлог в них не выводится из русского перевода.',
},
{
  id: 'xd-3', unit: 'tx-design', src: 'проект 3', topic: 'обороты противопоставления', type: 'build',
  q: 'Соберите предложения с оборотами <i>not … but</i>, <i>however … may be</i> и <i>as much as … do</i>.',
  items: [
    { ru: 'Задача проектанта — не найти идеальное судно, а найти лучшее возможное.',
      a: 'The task of the designer is not to find the perfect ship but to find the best possible one.',
      extra: ['and'] },
    { ru: 'Проект не может быть одобрен, каким бы изящным он ни был.',
      a: 'A design cannot be approved, however elegant it may be.', extra: ['although'] },
    { ru: 'Общее расположение определяет остойчивость не меньше, чем обводы.',
      a: 'The general arrangement decides the stability as much as the lines do.',
      extra: ['make'] },
  ],
  why: 'В обороте <b>not … but</b> обе части однородны: если слева инфинитив, справа тоже инфинитив. Уступительное <b>however</b> + прилагательное требует <i>may be</i> в конце. Заменитель <b>do</b> ставится вместо повторяемого сказуемого и согласуется с подлежащим: <i>the lines do</i>, но <i>the drawing does</i>.',
},
{
  id: 'xd-4', unit: 'tx-design', src: 'проект 4', topic: 'спираль проектирования', type: 'order',
  q: 'Расставьте шаги первого витка спирали по порядку.',
  lines: [
    'The owner states the cargo, the distance and the speed in the specification.',
    'A parent vessel with a similar service is chosen.',
    'The main dimensions are estimated from the parent vessel.',
    'The light weight and the deadweight are estimated in their turn.',
    'The sum is compared with the displacement of the chosen dimensions.',
    'The dimensions are corrected and the next cycle begins.',
  ],
  why: 'Виток всегда кончается сверкой с уравнением масс: пока сумма не сходится, размерения меняют. Спираль останавливают, когда поправка становится меньше точности исходных данных.',
},

/* ===================== испытания и приёмка ===================== */
{
  id: 'xr-1', unit: 'tx-trials', src: 'испытания 1', topic: 'порядок испытаний', type: 'order',
  q: 'Расставьте испытания по порядку — от цеха до сдачи.',
  lines: [
    'A pump is run on the test bench of its manufacturer.',
    'A section is checked for tightness with air or with water.',
    'The machinery is installed and the systems are filled.',
    'The mooring trials are carried out alongside the quay.',
    'The ship goes out for sea trials on a measured course.',
    'The inclining test gives the light weight and the centre of gravity.',
    'The remarks are closed and the protocol of delivery is signed.',
  ],
  why: 'Правило простое: чем раньше найдена неисправность, тем она дешевле. Поэтому механизм проверяют на стенде, отсек — до закрытия, а в море выходят только с тем, что уже работало у стенки.',
},
{
  id: 'xr-2', unit: 'tx-trials', src: 'испытания 2', topic: 'времена в придаточных', type: 'fill',
  q: 'Раскройте скобки. В придаточном времени будущего времени не бывает, а завершённость передаёт перфект.',
  items: [
    { s: 'When the machinery ___ (install), the mooring trials start.',
      a: [['has been installed']], ru: 'Когда механизмы установлены, начинаются швартовные испытания.' },
    { s: 'When all the trials ___ (complete), the results are entered into protocols.',
      a: [['have been completed']], ru: 'Когда все испытания закончены, результаты заносят в протоколы.' },
    { s: 'Nothing should be discovered at sea that ___ (can discover) alongside.',
      a: [['could have been discovered']], ru: 'В море не должно обнаружиться ничего, что можно было обнаружить у стенки.' },
    { s: 'If a result ___ (fall) outside the criterion, the test is repeated.',
      a: [['falls']], ru: 'Если результат выходит за пределы критерия, испытание повторяют.' },
  ],
  why: 'Форма <b>could have been discovered</b> состоит из модального глагола, перфектного инфинитива и страдательного залога — она говорит о возможности, которая осталась неиспользованной.',
},
{
  id: 'xr-3', unit: 'tx-trials', src: 'испытания 3', topic: 'кренование', type: 'choice',
  q: 'Ответьте на вопросы о креновании и критериях приёмки.',
  items: [
    { s: 'What is obtained from the inclining test?',
      opts: [
        { t: 'The light weight and the position of the centre of gravity.', ok: true, why: 'именно эти две величины расчётом надёжно не получить, поэтому их измеряют.' },
        { t: 'The speed of the ship.', why: 'скорость меряют на мерной линии во время ходовых испытаний.' },
        { t: 'The power of the main engine.', why: 'мощность снимают на стенде и на ходовых испытаниях под нагрузкой.' },
      ] },
    { s: 'Why is the test carried out with the tanks either empty or full?',
      opts: [
        { t: 'Because a half-filled tank has a free surface and spoils the result.', ok: true, why: 'свободная поверхность жидкости уменьшает остойчивость и искажает замер.' },
        { t: 'Because a full tank is heavier.', why: 'массу цистерн учитывают расчётом; дело не в весе, а в свободной поверхности.' },
        { t: 'Because the pumps are being tested at the same time.', why: 'кренование проводят отдельно, без совмещения с другими проверками.' },
      ] },
    { s: 'What does an acceptance criterion consist of?',
      opts: [
        { t: 'A figure, a tolerance and a method of measurement.', ok: true, why: 'без метода измерения число не значит ничего: результат нельзя ни повторить, ни оспорить.' },
        { t: 'Only the opinion of the surveyor.', why: 'инспектор проверяет соблюдение критерия, а не заменяет его.' },
        { t: 'Only a figure in the contract.', why: 'одно число без допуска и метода измерения не работает.' },
      ] },
    ],
  why: 'Кренование — редкий случай, когда испытание нельзя заменить расчётом: положение центра тяжести накапливает все отклонения постройки. Результат идёт в информацию об остойчивости, которой капитан пользуется всю жизнь судна.',
},
{
  id: 'xr-4', unit: 'tx-trials', src: 'испытания 4', topic: 'виды испытаний', type: 'match',
  q: 'Подберите к названию испытания его описание.',
  pairs: [
    ['shop test', 'an item is run on the test bench of its manufacturer'],
    ['tightness test', 'a compartment is checked with air or with water'],
    ['mooring trials', 'the machinery is run while the ship is made fast to the quay'],
    ['sea trials', 'the ship runs on a measured course in an agreed area'],
    ['inclining test', 'known weights are moved across the deck'],
    ['guarantee period', 'the time after delivery when the yard answers for defects'],
  ],
  why: 'Английский различает <i>test</i> (единичная проверка) и <i>trials</i> (испытания как этап, всегда во множественном числе): <b>sea trials</b>, <b>mooring trials</b>, но <b>an inclining test</b>.',
},

/* ===================== чертёж, размеры и допуски ===================== */
{
  id: 'xt-1', unit: 'tx-tol', src: 'допуски 1', topic: 'размер и допуск', type: 'fill',
  q: 'Впишите нужный термин: <i>nominal size, deviation, tolerance, grade, datum, roughness</i>.',
  items: [
    { s: 'The figure written on the drawing without the deviations is the ___.',
      a: [['nominal size']], ru: 'Число на чертеже без отклонений — это номинальный размер.' },
    { s: 'The difference between the maximum and the minimum limits of size is the ___.',
      a: [['tolerance']], ru: 'Разность наибольшего и наименьшего предельных размеров — это допуск.' },
    { s: 'An upper or a lower ___ may be positive or negative.',
      a: [['deviation']], ru: 'Верхнее или нижнее отклонение может быть положительным или отрицательным.' },
    { s: 'The same tolerance ___ means the same relative accuracy for different sizes.',
      a: [['grade']], ru: 'Один и тот же квалитет означает одинаковую относительную точность для разных размеров.' },
    { s: 'A geometrical tolerance is always referred to a ___.',
      a: [['datum']], ru: 'Геометрический допуск всегда отнесён к базе.' },
    { s: 'Ra in micrometres is a measure of surface ___.',
      a: [['roughness']], ru: 'Ra в микрометрах — мера шероховатости поверхности.' },
  ],
  why: 'Допуск (<b>tolerance</b>) всегда положителен, отклонение (<b>deviation</b>) — со знаком, а квалитет (<b>grade</b>) задаёт не абсолютную величину, а относительную точность: чем крупнее деталь, тем шире допуск того же квалитета.',
},
{
  id: 'xt-2', unit: 'tx-tol', src: 'допуски 2', topic: 'виды посадок', type: 'sort',
  q: 'Отнесите описание к виду посадки.',
  cats: {
    c: 'clearance fit — с зазором',
    i: 'interference fit — с натягом',
    t: 'transition fit — переходная',
  },
  items: [
    { t: 'the hole is always larger than the shaft', c: 'c' },
    { t: 'the parts can move relative to each other', c: 'c' },
    { t: 'the shaft is always larger than the hole', c: 'i' },
    { t: 'the parts are held together by elastic forces', c: 'i' },
    { t: 'either a small clearance or a small interference may occur', c: 't' },
    { t: 'the result depends on the actual sizes of the two parts', c: 't' },
  ],
  why: 'Вид посадки определяется взаимным положением полей допуска отверстия и вала, а не их абсолютными размерами. Переходная посадка — единственная, где результат заранее не известен.',
},
{
  id: 'xt-3', unit: 'tx-tol', src: 'допуски 3', topic: 'форма и размерная цепь', type: 'choice',
  q: 'Ответьте на вопросы о геометрических допусках и точности постройки.',
  items: [
    { s: 'Why is a size tolerance not enough?',
      opts: [
        { t: 'Because a size says nothing about the form of the surface.', ok: true, why: 'деталь может быть в размере и при этом изогнута или овальна.' },
        { t: 'Because sizes are measured in millimetres.', why: 'единица измерения к сути дела не относится.' },
        { t: 'Because the drawing has three views.', why: 'число видов не связано с допусками формы.' },
      ] },
    { s: 'What happens along a dimensional chain?',
      opts: [
        { t: 'The errors of the links add up.', ok: true, why: 'каждое звено в своём допуске, а сумма может выйти за общий допуск.' },
        { t: 'The errors cancel each other completely.', why: 'частично они действительно гасятся, но рассчитывать на это нельзя.' },
        { t: 'The tolerance becomes narrower at every link.', why: 'допуски не сужаются сами собой: сужать их приходится проектанту.' },
      ] },
    { s: 'Why are hull tolerances given in a separate standard?',
      opts: [
        { t: 'Because the parts are large and welded rather than machined.', ok: true, why: 'корпусные размеры и способ обработки другие, чем в машиностроении.' },
        { t: 'Because shipyards do not use ISO standards.', why: 'верфи пользуются ISO, но для корпусных работ нужен свой ряд допусков.' },
        { t: 'Because steel cannot be measured accurately.', why: 'сталь измеряют точно; дело в размерах конструкции и в сварке.' },
      ] },
  ],
  why: 'Точность корпусных работ обеспечивают не одним допуском на деталь, а системой: припуски, последовательность сборки и измерения по ходу работы. Поэтому верфь меряет во время сборки, а не только в конце.',
},
{
  id: 'xt-4', unit: 'tx-tol', src: 'допуски 4', topic: 'обороты сравнения и выделения', type: 'build',
  q: 'Соберите предложения с двойной сравнительной степенью, выделительным <i>what</i> и оборотом <i>rather than</i>.',
  items: [
    { ru: 'Чем шире допуск, тем дешевле деталь.',
      a: 'The wider the tolerance, the cheaper the part.', extra: ['more'] },
    { ru: 'Важен не размер каждой детали, а соотношение между ними.',
      a: 'What matters is not the size of each part but the relation between them.',
      extra: ['which'] },
    { ru: 'Корпусные детали сварные, а не обработанные резанием.',
      a: 'Hull parts are welded rather than machined.', extra: ['instead'] },
  ],
  why: 'В двойной сравнительной степени артикль <b>the</b> стоит перед обеими частями, а глагол-связка обычно опускается. Оборот <b>what matters is …</b> ставит главное в конец предложения — это сильная позиция в английской фразе.',
},

/* ===================== разговоры на производстве ===================== */
{
  id: 'xw-5', unit: 'tx-weld', src: 'сварка 5', topic: 'разговор с инспектором', type: 'dialog',
  q: 'Инспектор регистра пришёл на участок. Подставьте уместные ответы технолога.',
  turns: [
    { who: 'Surveyor', t: 'Good morning. May I see the procedure for the bottom shell seams?' },
    { who: 'Engineer', opts: [
      { t: 'Of course. Here is the procedure specification and the qualification record.', ok: true, why: 'инспектор спрашивает технологию — ему сразу дают оба документа.' },
      { t: 'We have no procedure, we weld by experience.', why: 'ответственный шов без аттестованной технологии не варят: такой ответ означает остановку работ.' },
      { t: 'Sorry, the drawing is in the design office.', why: 'инспектор спросил не чертёж, а технологию сварки.' },
    ] },
    { who: 'Surveyor', t: 'Thank you. What preheat do you use for this steel?' },
    { who: 'Engineer', opts: [
      { t: 'One hundred degrees Celsius, because the carbon equivalent is high.', ok: true, why: 'на технический вопрос отвечают величиной и причиной.' },
      { t: 'We never preheat, it takes too much time.', why: 'при высоком углеродном эквиваленте подогрев обязателен, иначе будут холодные трещины.' },
      { t: 'It depends on the welder.', why: 'режим задаёт технология, а не тот, кто держит электрод.' },
    ] },
    { who: 'Surveyor', t: 'And how do you keep the interpass temperature within the limits?' },
    { who: 'Engineer', opts: [
      { t: 'We measure it with a contact thermometer before every run.', ok: true, why: 'назван прибор и момент измерения — это и есть контроль.' },
      { t: 'We wait until the plate is cold.', why: 'это нарушает режим: межслойная температура имеет и нижнюю границу.' },
      { t: 'We do not control it at all.', why: 'межслойную температуру нормирует технология, значит, её контролируют.' },
    ] },
    { who: 'Surveyor', t: 'Good. I would like to witness the next test piece.' },
  ],
  why: 'Глагол <b>to witness</b> в приёмке значит «присутствовать при испытании и удостоверить его», а не просто «видеть». Обратите внимание на вежливые формы вопроса: <i>May I see …?</i> и <i>I would like to …</i> — в разговоре с инспектором они обычны.',
},
{
  id: 'xr-5', unit: 'tx-trials', src: 'испытания 5', topic: 'разговор на ходовых испытаниях', type: 'dialog',
  q: 'Ходовые испытания. Подставьте ответы сдаточного механика представителю заказчика.',
  turns: [
    { who: 'Owner’s rep', t: 'What speed did we get on the last run?' },
    { who: 'Engineer', opts: [
      { t: 'Fifteen point two knots, but we need the mean of the two runs.', ok: true, why: 'один пробег ничего не доказывает: течение исключают средним из пробегов в двух направлениях.' },
      { t: 'Fifteen point two knots, so the ship is accepted.', why: 'по одному пробегу приёмку не оформляют.' },
      { t: 'We do not measure the speed at sea trials.', why: 'скорость — главный показатель ходовых испытаний.' },
    ] },
    { who: 'Owner’s rep', t: 'The vibration in the after part seems high to me.' },
    { who: 'Engineer', opts: [
      { t: 'Let us measure it: the criterion is in the contract.', ok: true, why: 'спор о впечатлениях решается измерением по записанному критерию.' },
      { t: 'It always feels like that on a new ship.', why: 'ощущение не заменяет измерения и критерия.' },
      { t: 'The contract says nothing about vibration.', why: 'уровень вибрации входит в программу испытаний.' },
    ] },
    { who: 'Owner’s rep', t: 'And if the result falls outside the criterion?' },
    { who: 'Engineer', opts: [
      { t: 'Then we adjust the item, enter a remark and repeat the test.', ok: true, why: 'таков обычный порядок: замечание, устранение, повторное испытание.' },
      { t: 'Then we sign the protocol anyway.', why: 'протокол с незакрытым замечанием не подписывают.' },
      { t: 'Then the trials are cancelled for ever.', why: 'испытание повторяют, а не отменяют программу.' },
    ] },
    { who: 'Owner’s rep', t: 'Agreed. Please send me the report tomorrow.' },
  ],
  why: 'Заметьте служебные обороты разговора: <b>let us measure it</b> — предложение действия, <b>agreed</b> — короткое согласие, <b>the mean of the two runs</b> — среднее из двух пробегов. Числа читаются как «fifteen point two», через <i>point</i>, а не через запятую.',
},
{
  id: 'xd-5', unit: 'tx-design', src: 'проект 5', topic: 'разговор с заказчиком', type: 'dialog',
  q: 'Первая встреча по проекту. Подставьте ответы проектанта.',
  turns: [
    { who: 'Owner', t: 'We need twelve thousand tonnes of cargo at fourteen knots.' },
    { who: 'Designer', opts: [
      { t: 'Thank you. May I ask about the route and the ports?', ok: true, why: 'без района плавания и портов размерения не назначить: осадка ограничена глубинами.' },
      { t: 'Fine, we will start cutting the plates next week.', why: 'до резки первого листа проходят месяцы расчётов и согласований.' },
      { t: 'That is impossible for any ship.', why: 'сочетание вполне обычное; отказывать до расчёта не за что.' },
    ] },
    { who: 'Owner', t: 'Could you make the ship wider? We would like more deck area.' },
    { who: 'Designer', opts: [
      { t: 'We can, but a wider hull needs more power for the same speed.', ok: true, why: 'проектный ответ всегда называет цену решения — это и есть компромисс.' },
      { t: 'No, the width is fixed by the Rules.', why: 'Правила ширину не задают; они задают остойчивость, деление на отсеки и надводный борт.' },
      { t: 'Yes, and nothing else will change.', why: 'изменение размерений всегда тянет за собой мощность, массу и стоимость.' },
    ] },
    { who: 'Owner', t: 'When will you know the cost of the hull?' },
    { who: 'Designer', opts: [
      { t: 'After the second turn of the spiral, when the weights are estimated.', ok: true, why: 'стоимость корпуса следует из массы металла, а масса — из витка расчёта.' },
      { t: 'Right now, it is a standard figure.', why: 'типовая цифра существует только для типового проекта.' },
      { t: 'Only after the ship has been delivered.', why: 'к сдаче стоимость уже известна давно: она входит в контракт.' },
    ] },
    { who: 'Owner', t: 'Good. Let us meet again in two weeks.' },
  ],
  why: 'В разговоре с заказчиком работает формула «да, но»: <b>we can, but …</b>. Она не отказывает и сразу называет следствие. Вежливая просьба заказчика идёт через <i>could you</i> и <i>we would like</i> — отвечать на неё коротким <i>no</i> невежливо.',
},

);
