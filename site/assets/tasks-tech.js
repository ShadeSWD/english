/* Задания к техническим текстам курса — интерактивные аналоги упражнений
 * раздела «Building Ships» и материалов по сварке и чертежам.
 *
 * unit: 'r-yard'     — постройка судна и стандартизация проекта (4.1–4.2);
 * unit: 'r-welding'  — сварка и соединения;
 * unit: 'r-drawing'  — чертежи, виды и стандарты;
 * unit: 'wordforms'  — тренажёр словообразования (4.3): дана основа,
 *                      нужна форма, проверка идёт с пояснением модели.
 *
 * Схема записи и типы описаны в assets/exercises.js.
 */
'use strict';
(window.TASKS = window.TASKS || []).push(

/* ================= постройка судна и стандартный проект ================= */
{
  id: 'bs-1', unit: 'r-yard', src: '4.1', topic: 'подготовка к постройке', type: 'choice',
  q: 'Прочитайте о подготовительном этапе и ответьте на вопросы.',
  items: [
    { s: 'How is a cargo ship different from a car?',
      opts: [
        { t: 'It is built to the demands of one shipping company.', ok: true, why: 'судно строят под заказчика, а не выбирают из модельного ряда.' },
        { t: 'It is chosen from a catalogue of ready models.', why: 'это как раз про автомобиль, а не про грузовое судно.' },
        { t: 'It needs no drawings at all.', why: 'чертежей у судна во много раз больше, чем у автомобиля.' },
      ] },
    { s: 'What happens before the first plate is cut?',
      opts: [
        { t: 'The company, the bank and the future owner hold many meetings.', ok: true, why: 'до резки первого листа проходят месяцы переговоров и расчётов.' },
        { t: 'The keel is laid on the slipway.', why: 'закладка киля — уже начало постройки.' },
        { t: 'The ship goes to sea trials.', why: 'испытания идут в самом конце.' },
      ] },
  ],
  why: 'Оборот <b>prior to</b> («до, перед») требует после себя существительного: <i>prior to the construction</i>, а не «prior to construct».',
},
{
  id: 'bs-2', unit: 'r-yard', src: '4.2', topic: 'стандартный проект', type: 'fill',
  q: 'Заполните пропуски словами из списка: <i>suitable, costs, improved, expect, limited, known, shortens</i>.',
  items: [
    { s: 'The owner knows in advance what he can ___ from such a ship.', a: [['expect']] },
    { s: 'The project has already worked at sea and, where needed, has been ___.',
      a: [['improved']] },
    { s: 'For a particular route the design may not be fully ___.', a: [['suitable']] },
    { s: 'The cost of the hull is ___ before the contract is signed.', a: [['known']] },
    { s: 'The absence of a design stage ___ the time before delivery.', a: [['shortens']] },
    { s: 'The participation of the owner is ___ to a few details.', a: [['limited']] },
    { s: 'The total ___ of such a ship are lower.', a: [['costs']] },
  ],
  why: 'После <i>can</i> ставится инфинитив без <i>to</i>. Глагол <i>shorten</i> в третьем лице берёт окончание <b>-s</b>, потому что подлежащее — <i>the absence</i>. Сочетание <b>be limited to</b> требует предлога <i>to</i>.',
},
{
  id: 'bs-3', unit: 'r-yard', src: '4.2', topic: 'достоинства и недостатки', type: 'sort',
  q: 'Поставьте «a» напротив достоинства стандартного проекта и «d» напротив недостатка.',
  cats: { a: 'advantage — достоинство', d: 'disadvantage — недостаток' },
  items: [
    { t: 'the owner knows in advance what he will get', c: 'a' },
    { t: 'the project has already worked at sea', c: 'a' },
    { t: 'the cost of the hull is known before the contract', c: 'a' },
    { t: 'there is almost no design stage, so delivery comes sooner', c: 'a' },
    { t: 'the total costs of such a ship are lower', c: 'a' },
    { t: 'for a particular route the design may not be fully suitable', c: 'd' },
    { t: 'the participation of the owner is limited to a few details', c: 'd' },
  ],
  why: 'Всё, что удешевляет и ускоряет постройку, — в пользу типового проекта; всё, что ограничивает свободу заказчика, — против него.',
},
{
  id: 'bs-4', unit: 'r-yard', src: '4.1', topic: 'этапы постройки', type: 'order',
  q: 'Расставьте этапы постройки судна по порядку.',
  lines: [
    'The design bureau prepares the drawings.',
    'The plates are cleaned, primed and cut in the workshop.',
    'Small parts are welded into panels, and panels into sections.',
    'The keel is laid on the slipway.',
    'The gantry cranes place the blocks one after another.',
    'The ship is launched into the water.',
    'The main engine and the pipes are installed at the fitting-out quay.',
    'The ship goes to sea trials.',
    'The yard delivers the ship to the owner.',
  ],
  why: 'Постройка идёт от чертежей к металлу, от панелей к блокам и лишь затем на стапель. Двигатель ставят уже после спуска, когда судно стоит у достроечной набережной.',
},
{
  id: 'bs-5', unit: 'r-yard', src: '4.1', topic: 'лексика верфи', type: 'match',
  q: 'Подберите русский эквивалент.',
  pairs: [
    ['shipyard', 'верфь'],
    ['building berth', 'стапель'],
    ['launching', 'спуск на воду'],
    ['fitting-out', 'достройка на плаву'],
    ['sea trials', 'ходовые испытания'],
    ['delivery', 'сдача заказчику'],
  ],
  why: 'Слово <i>delivery</i> в судостроении означает передачу готового судна заказчику, а не доставку груза.',
},
{
  id: 'bs-6', unit: 'r-yard', src: '4.1', topic: 'страдательный залог', type: 'fill',
  q: 'Раскройте скобки: описание технологии идёт в страдательном залоге настоящего времени.',
  items: [
    { s: 'The sections ___ (assemble) in the workshop and then ___ (move) to the berth.',
      a: [['are assembled'], ['are moved']] },
    { s: 'The hull ___ (build) of steel plates.', a: [['is built']] },
    { s: 'After the launching the vessel ___ (moor) at the fitting-out quay.',
      a: [['is moored']] },
  ],
  why: 'В описании технологии важно действие, а не исполнитель, поэтому почти все сказуемые стоят в страдательном залоге.',
},
{
  id: 'bs-7', unit: 'r-yard', src: '4.2', topic: 'высказывание по плану', type: 'order',
  q: 'Соберите высказывание о преимуществах типового проекта.',
  lines: [
    'Many owners order a standard design today.',
    'As the project has already worked at sea, its cost is known in advance.',
    'There is almost no design stage, so the ship comes sooner.',
    'The total costs are therefore lower.',
    'However, the owner can choose only a few details.',
  ],
  why: 'План высказывания: общее наблюдение → причина с <i>as</i> → следствия → возражение с <i>however</i>. Такой порядок делает короткий текст связным.',
},

/* ================= сварка и соединения ================= */
{
  id: 'bw-1', unit: 'r-welding', src: 'сварка 1', topic: 'клёпка и сварка', type: 'choice',
  q: 'Ответьте на вопросы к тексту «Why ships are welded».',
  items: [
    { s: 'Why is a welded hull lighter than a riveted one?',
      opts: [
        { t: 'Because there are no overlaps and no rivet heads.', ok: true, why: 'клёпаный шов требует нахлёста листов и угольника вдоль каждого стыка.' },
        { t: 'Because welded steel is a different metal.', why: 'сталь та же самая, меняется только способ соединения.' },
        { t: 'Because a welded hull has fewer decks.', why: 'число палуб определяется проектом.' },
      ] },
    { s: 'What does a lighter hull mean for the owner?',
      opts: [
        { t: 'The ship carries more cargo at the same displacement.', ok: true, why: 'выигрыш в весе корпуса прямо превращается в грузоподъёмность.' },
        { t: 'Ten per cent more speed.', why: 'скорость зависит прежде всего от мощности и обводов.' },
        { t: 'Ten per cent less crew.', why: 'численность экипажа с весом корпуса не связана.' },
      ] },
  ],
  why: 'Слово <i>less</i> стоит перед неисчисляемым <i>steel</i>; со счётными существительными в том же смысле употребляется <i>fewer</i>.',
},
{
  id: 'bw-2', unit: 'r-welding', src: 'сварка 2', topic: 'типы соединений', type: 'match',
  q: 'Подберите к типу соединения его описание.',
  pairs: [
    ['butt joint', 'two plates lie in the same plane'],
    ['tee joint', 'one plate stands on another plate'],
    ['fillet weld', 'the weld runs in the corner of a joint'],
    ['full penetration', 'the weld goes through the whole thickness'],
    ['overhead weld', 'the welder works above his head'],
  ],
  why: 'Сварщик описывает шов тремя признаками: типом соединения, проплавлением и положением в пространстве.',
},
{
  id: 'bw-3', unit: 'r-welding', src: 'сварка 3', topic: 'дефекты и контроль', type: 'sort',
  q: 'Что из перечисленного — дефект шва, а что способ контроля?',
  cats: { d: 'дефект', i: 'способ контроля' },
  items: [
    { t: 'a crack', c: 'd' },
    { t: 'a gas pore', c: 'd' },
    { t: 'a slag inclusion', c: 'd' },
    { t: 'a lack of penetration at the root', c: 'd' },
    { t: 'visual inspection', c: 'i' },
    { t: 'ultrasonic testing', c: 'i' },
    { t: 'radiography', c: 'i' },
  ],
  why: 'Дефекты снижают прочность и со временем дают усталостную трещину, поэтому каждый ответственный шов проверяют. Обратите внимание: <i>a lack of penetration</i> — единственное название дефекта с артиклем.',
},
{
  id: 'bw-4', unit: 'r-welding', src: 'сварка 4', topic: 'предлог by', type: 'fill',
  q: 'Заполните пропуски предлогами.',
  items: [
    { s: 'Before the war the plates of a hull were joined ___ rivets.',
      a: [['by', 'with']] },
    { s: 'Much of the welding is done ___ a machine.', a: [['by']] },
    { s: 'Distortion is reduced ___ a correct sequence of welds.', a: [['by']] },
    { s: 'The arc burns ___ the electrode and the work.', a: [['between']] },
  ],
  why: 'Предлог <b>by</b> указывает на средство или исполнителя действия в страдательном залоге; <b>between</b> — на положение между двумя предметами.',
},
{
  id: 'bw-5', unit: 'r-welding', src: 'сварка 5', topic: 'as … as', type: 'build',
  q: 'Соберите предложения со сравнительными оборотами.',
  items: [
    { ru: 'Шов такой же прочный и такой же плотный, как соседний лист.',
      a: 'The joint is as strong and as tight as the next plate.', extra: ['than'] },
    { ru: 'Сварка быстрее клёпки.', a: 'Welding is faster than riveting.', extra: ['as'] },
  ],
  why: 'В обороте <i>as … as</i> при перечислении двух качеств <b>as</b> повторяется перед каждым. После сравнительной степени ставится <b>than</b>, а не <i>as</i>.',
},
{
  id: 'bw-6', unit: 'r-welding', src: 'сварка 6', topic: 'сварочные деформации', type: 'choice',
  q: 'Ответьте на вопросы о деформациях и положении шва.',
  items: [
    { s: 'Why does the plate bend towards the weld?',
      opts: [
        { t: 'Because the weld metal shrinks when it cools.', ok: true, why: 'остывая, металл шва сокращается и тянет лист за собой.' },
        { t: 'Because the plate absorbs water.', why: 'сталь воду не впитывает.' },
        { t: 'Because the arc pushes the plate.', why: 'дуга плавит металл, но механически лист не двигает.' },
      ] },
    { s: 'Why does the yard turn the section whenever it can?',
      opts: [
        { t: 'Because a weld in the flat position is easier and faster.', ok: true, why: 'нижнее положение шва самое удобное и производительное.' },
        { t: 'Because an overhead weld is stronger.', why: 'наоборот, потолочный шов труднее выполнить качественно.' },
        { t: 'Because the section is lighter upside down.', why: 'вес секции от положения не зависит.' },
      ] },
  ],
  why: 'Деформацию уменьшают правильной последовательностью швов, жёсткими кондукторами и сваркой двух сторон стыка поочерёдно, а оставшуюся правят местным нагревом.',
},
{
  id: 'bw-7', unit: 'r-welding', src: 'сварка 7', topic: 'порядок контроля', type: 'order',
  q: 'Расставьте операции контроля сварного шва по порядку.',
  lines: [
    'The welder and the foreman look at the surface of the weld.',
    'The yard uses ultrasonic testing for internal defects.',
    'Radiography is used for the most responsible seams.',
    'The surveyor of the classification society reads the reports.',
    'The surveyor signs the results.',
  ],
  why: 'Сначала смотрят поверхность, затем ищут внутренние дефекты, потом просвечивают самые ответственные швы и лишь в конце оформляют документы.',
},
{
  id: 'bw-8', unit: 'r-welding', src: 'сварка 8', topic: 'существительное как определение', type: 'build',
  q: 'Соберите предложения, следя за порядком слов в определениях.',
  items: [
    { ru: 'В дуговой сварке дуга плавит кромки деталей и конец электрода.',
      a: 'In arc welding the arc melts the edges and the end of the electrode.',
      extra: ['arcs'] },
    { ru: 'Лист, стоящий на другом листе, даёт тавровое соединение.',
      a: 'A plate that stands on another plate gives a tee joint.', extra: ['standing'] },
  ],
  why: 'Существительное в роли определения стоит перед главным словом и не имеет окончания множественного числа: <b>arc welding</b>, <b>butt joint</b>. Русскому причастному обороту соответствует придаточное с <i>that</i>.',
},

/* ================= чертежи, виды и стандарты ================= */
{
  id: 'bd-1', unit: 'r-drawing', src: 'чертёж 1', topic: 'виды на чертеже', type: 'match',
  q: 'Подберите к названию вида его описание.',
  pairs: [
    ['front view', 'the object as we see it from the front'],
    ['plan view', 'the object as we see it from above'],
    ['side view', 'the object as we see it from the side'],
    ['section', 'the object cut by a plane to show what is inside'],
    ['title block', 'the table with the name, the scale and the signatures'],
  ],
  why: 'Три основных вида дополняют друг друга, разрез показывает внутреннее устройство, а основная надпись отвечает на вопрос «что это за чертёж».',
},
{
  id: 'bd-2', unit: 'r-drawing', src: 'чертёж 2', topic: 'less и fewer', type: 'fill',
  q: 'Впишите <i>less</i> или <i>fewer</i>.',
  items: [
    { s: 'A standard design needs ___ drawings than a unique one.', a: [['fewer']] },
    { s: 'A welded hull needs ___ steel than a riveted one.', a: [['less']] },
    { s: 'Surface atoms are in contact with ___ atoms of the material.', a: [['fewer']] },
    { s: 'This method takes ___ time.', a: [['less']] },
  ],
  why: '<b>Fewer</b> ставится перед исчисляемым существительным (<i>drawings, atoms</i>), <b>less</b> — перед неисчисляемым (<i>steel, time</i>).',
},
{
  id: 'bd-3', unit: 'r-drawing', src: 'чертёж 3', topic: 'предлоги в описании чертежа', type: 'fill',
  q: 'Заполните пропуски предлогами.',
  items: [
    { s: 'The object is shown ___ three views.', a: [['in']] },
    { s: 'All dimensions are given ___ millimetres.', a: [['in']] },
    { s: 'The drawing is made ___ a scale of 1 : 50.', a: [['to', 'at']] },
    { s: 'The section is marked ___ the letters A—A.', a: [['with', 'by']] },
  ],
  why: 'Вид и единица измерения вводятся предлогом <b>in</b>, масштаб — сочетанием <b>to a scale of</b>, а средство обозначения — предлогом <b>with</b>.',
},
{
  id: 'bd-4', unit: 'r-drawing', src: 'чертёж 4', topic: 'стандарты', type: 'choice',
  q: 'Ответьте на вопрос о назначении стандарта.',
  items: [
    { s: 'Why do we need a standard for drawings?',
      opts: [
        { t: 'So that any engineer reads the drawing in the same way.', ok: true, why: 'стандарт делает чертёж однозначным на любой верфи и в любой стране.' },
        { t: 'So that the drawing looks beautiful.', why: 'внешний вид — приятное следствие, но не цель.' },
        { t: 'So that the drawing takes less paper.', why: 'экономию бумаги даёт масштаб, а не стандарт.' },
        { t: 'So that only the author understands it.', why: 'это прямо противоположно назначению стандарта.' },
      ] },
  ],
  why: 'Линии, размеры и обозначения по стандарту читаются одинаково всеми: именно поэтому чертёж и служит языком инженеров.',
},
{
  id: 'bd-5', unit: 'r-drawing', src: 'чертёж 5', topic: 'therefore', type: 'build',
  q: 'Соберите предложения со словом <i>therefore</i> и словами количества.',
  items: [
    { ru: 'Проект типовой, поэтому делается меньше чертежей.',
      a: 'The design is standard; therefore fewer drawings are made.', extra: ['less'] },
    { ru: 'Каждый чертёж проверяется, поэтому ошибок мало.',
      a: 'Every drawing is checked; therefore there are few mistakes.', extra: ['little'] },
  ],
  why: 'Слово <b>therefore</b> стоит в начале второй части или прямо перед сказуемым. Со счётными существительными употребляются <i>fewer</i> и <i>few</i>.',
},
{
  id: 'bd-6', unit: 'r-drawing', src: 'чертёж 6', topic: 'размеры на чертеже', type: 'match',
  q: 'Подберите русский эквивалент.',
  pairs: [
    ['length', 'длина'], ['width', 'ширина'], ['depth', 'глубина'],
    ['height', 'высота'], ['thickness', 'толщина'], ['scale', 'масштаб'],
  ],
  why: 'Первые четыре существительных образованы от прилагательных <i>long, wide, deep, high</i> с изменением корневой гласной и суффиксом <i>-th</i>.',
},
{
  id: 'bd-7', unit: 'r-drawing', src: 'чертёж 7', topic: 'страдательный залог', type: 'fill',
  q: 'Раскройте скобки: страдательный залог настоящего времени.',
  items: [
    { s: 'Every drawing ___ (check) by the designer.', a: [['is checked']] },
    { s: 'The main dimensions ___ (approve) by the classification society.',
      a: [['are approved']] },
    { s: 'The scale ___ (write) in the title block.', a: [['is written']] },
  ],
  why: 'Форма <i>be</i> согласуется с подлежащим: <i>is</i> с единственным числом, <i>are</i> — с множественным. Третья форма при этом не меняется.',
},
{
  id: 'bd-8', unit: 'r-drawing', src: 'чертёж 8', topic: 'порядок чтения чертежа', type: 'order',
  q: 'Расставьте шаги чтения чертежа по порядку.',
  lines: [
    'Read the title block and find out what the drawing shows.',
    'Find the scale.',
    'Look at the front view.',
    'Compare it with the plan view and the side view.',
    'Read the dimensions.',
    'Check the notes and the standards at the end.',
  ],
  why: 'Чертёж читают от общего к частному: сначала основная надпись и масштаб, затем виды, потом размеры и примечания.',
},

/* ================= тренажёр словообразования ================= */
{
  id: 'wf-1', unit: 'wordforms', src: '4.3', topic: 'словообразование: -ing и -t',
  type: 'fill',
  q: 'Образуйте существительные от глаголов. Суффикс <b>-ing</b> даёт название процесса, а конечное <b>-t</b> — название готового результата.',
  items: [
    { s: 'join → ___', a: [['joint']], ru: 'соединение, стык (готовый результат)' },
    { s: 'join → ___', a: [['joining']], ru: 'соединение (процесс)' },
    { s: 'weld → ___', a: [['welding']], ru: 'сварка (процесс)' },
    { s: 'weld → ___', a: [['weld']], ru: 'сварной шов (результат; форма не меняется)' },
    { s: 'draw → ___', a: [['drawing']], ru: 'чертёж; черчение' },
  ],
  why: 'Модель <b>join → joint</b> даёт название места стыка, <b>join → joining</b> — самого действия. У пары <i>weld</i> результат обозначается тем же словом без суффикса: <i>a weld</i>.',
},
{
  id: 'wf-2', unit: 'wordforms', src: '4.3', topic: 'словообразование: -ion и -ation',
  type: 'fill',
  q: 'Образуйте существительные. Глаголы на <i>-ct</i> и <i>-t</i> берут <b>-ion</b>, глаголы на <i>-ate</i> теряют <i>-e</i> и берут <b>-ion</b>, остальные — <b>-ation</b>.',
  items: [
    { s: 'construct → ___', a: [['construction']], ru: 'постройка, конструкция' },
    { s: 'distort → ___', a: [['distortion']], ru: 'сварочная деформация, искажение' },
    { s: 'penetrate → ___', a: [['penetration']], ru: 'проплавление, проникновение' },
    { s: 'eliminate → ___', a: [['elimination']], ru: 'устранение' },
    { s: 'translate → ___', a: [['translation']], ru: 'перевод' },
    { s: 'inform → ___', a: [['information']], ru: 'сведения, информация' },
    { s: 'install → ___', a: [['installation']], ru: 'монтаж, установка' },
    { s: 'consider → ___', a: [['consideration']], ru: 'рассмотрение, соображение' },
  ],
  why: 'Существительное <i>information</i> неисчисляемо: «two informations» — ошибка, нужно <i>two pieces of information</i>. Во множественном числе <i>considerations</i> значит «соображения, доводы».',
},
{
  id: 'wf-3', unit: 'wordforms', src: '4.3', topic: 'словообразование: -ance, -ence, -se',
  type: 'fill',
  q: 'Образуйте существительные по менее регулярным моделям.',
  items: [
    { s: 'appear → ___', a: [['appearance']], ru: 'внешний вид, появление' },
    { s: 'refer → ___', a: [['reference']], ru: 'ссылка, справочные данные' },
    { s: 'respond → ___', a: [['response']], ru: 'отклик, ответ' },
    { s: 'compare → ___', a: [['comparison']], ru: 'сравнение' },
  ],
  why: 'Эти четыре модели надо запомнить целиком: <b>appear → appearance</b>, <b>refer → reference</b> (удвоенная согласная не сохраняется), <b>respond → response</b> (конечное <i>-d</i> переходит в <i>-se</i>), <b>compare → comparison</b> (немая <i>e</i> уходит, ударение смещается).',
},
{
  id: 'wf-4', unit: 'wordforms', src: '4.3', topic: 'существительные от прилагательных',
  type: 'fill',
  q: 'Образуйте существительные от прилагательных размера. Корневая гласная меняется, добавляется <b>-th</b>.',
  items: [
    { s: 'deep → ___', a: [['depth']], ru: 'глубина' },
    { s: 'wide → ___', a: [['width']], ru: 'ширина' },
    { s: 'long → ___', a: [['length']], ru: 'длина' },
    { s: 'high → ___', a: [['height']], ru: 'высота' },
    { s: 'strong → ___', a: [['strength']], ru: 'прочность' },
    { s: 'hot → ___', a: [['heat']], ru: 'тепло, теплота (суффикса нет, меняется корень)' },
  ],
  why: 'Слово <i>height</i> пишется через <i>-eigh-</i> и читается /haɪt/; частая ошибка «heighth» — лишняя <i>t</i> в конце. В чертеже эти существительные встречаются постоянно: <i>the length of the ship</i>, <i>the depth of the hold</i>.',
},
{
  id: 'wf-5', unit: 'wordforms', src: '4.3', topic: 'словообразование в предложении',
  type: 'fill',
  q: 'Поставьте слово в скобках в нужную форму — существительное.',
  items: [
    { s: 'The ___ (distort) of the plate is reduced by rigid clamps.', a: [['distortion']] },
    { s: 'Full ___ (penetrate) means that the weld goes through the whole thickness.',
      a: [['penetration']] },
    { s: 'The ___ (install) of the main engine begins after the launching.',
      a: [['installation']] },
    { s: 'The ___ (long) of the ship is given in the title block.', a: [['length']] },
    { s: 'This ___ (refer) sends us to another sheet of the drawing.', a: [['reference']] },
  ],
  why: 'В предложении существительное узнаётся по артиклю и по месту перед предлогом <i>of</i>. Именно поэтому технический текст так насыщен отглагольными существительными.',
},

);
