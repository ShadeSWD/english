/* Задания юнита 4 пособия «Sailing out» — интерактивные аналоги.
 *
 * Юнит 4 «Alma mater»: глагол to be в Past Simple, could, Past Simple
 * правильных и неправильных глаголов, вопросы и отрицания с did, вопрос
 * к подлежащему, порядковые числительные и даты, предлоги, правила чтения
 * (буква u, буквосочетание ch) и разговор о выходных.
 *
 * Каждому из 41 задания пособия отвечает своё задание банка; если в пособии
 * части а/б/в решаются по-разному, задание разбито на u4-9a, u4-9b и т. д.
 * Предложения свои: грамматика и лексика те же, а примеры взяты из истории
 * СПбГМТУ, работы кафедр, опытового бассейна и биографии А. Н. Крылова.
 *
 * Движок и описание типов — в assets/exercises.js.
 */
'use strict';
(window.TASKS = window.TASKS || []).push(

/* ================= SECTION A. to be в Past Simple ================= */

{
  id: 'u4-1a', unit: 'u4', src: '1 (а)', topic: 'to be в Past Simple', type: 'dialog',
  q: 'Двое однокурсников говорят о вчерашней лекции. Выберите реплику, которая подходит по смыслу и по форме глагола.',
  turns: [
    { who: 'Nikita', t: 'Hello, Vera! Were you at yesterday’s lecture on ship theory?' },
    { who: 'Vera', opts: [
      { t: 'No, I wasn’t. I was at the design bureau.', ok: true,
        why: 'С местоимением <i>I</i> глагол <i>to be</i> в прошедшем времени имеет форму <b>was</b>, отрицание — <b>wasn’t</b>.' },
      { t: 'No, I weren’t. I were at the design bureau.',
        why: 'Форма <i>were</i> идёт с <i>we, you, they</i>, но не с <i>I</i>.' },
      { t: 'No, I didn’t. I did at the design bureau.',
        why: 'Глагол <i>to be</i> обходится без вспомогательного <i>did</i>.' },
    ] },
    { who: 'Nikita', t: 'Was the lecture difficult again?' },
    { who: 'Vera', opts: [
      { t: 'It was long, but the examples were clear.', ok: true,
        why: 'Подлежащее <i>it</i> — единственное число (<b>was</b>), <i>examples</i> — множественное (<b>were</b>).' },
      { t: 'It were long, but the examples was clear.',
        why: 'Формы переставлены местами: единственное число требует <i>was</i>, множественное — <i>were</i>.' },
      { t: 'It is long, but the examples are clear.',
        why: 'Речь о вчерашней лекции, поэтому настоящее время не годится.' },
    ] },
    { who: 'Nikita', t: 'And what about Pavel and Marina?' },
    { who: 'Vera', opts: [
      { t: 'They weren’t there either. They were ill.', ok: true,
        why: 'Подлежащее во множественном числе: <b>were</b> и <b>weren’t</b>.' },
      { t: 'They wasn’t there either. They was ill.',
        why: '<i>wasn’t</i> возможно только с единственным числом.' },
      { t: 'They aren’t there either. They are ill.',
        why: 'Настоящее время не отвечает на вопрос о вчерашнем дне.' },
    ] },
  ],
  why: 'В Past Simple у <i>to be</i> две формы: <b>was</b> — для <i>I, he, she, it</i>, <b>were</b> — для <i>we, you, they</i>. Вопрос строится перестановкой, отрицание — частицей <i>not</i>; вспомогательный <i>did</i> при <i>to be</i> не нужен.',
},

{
  id: 'u4-1b', unit: 'u4', src: '1 (б)', topic: 'to be в Past Simple', type: 'sort',
  q: 'Разложите подлежащие по формам глагола <i>to be</i> в прошедшем времени.',
  cats: { was: 'was', were: 'were' },
  items: [
    { t: 'I', c: 'was' },
    { t: 'he', c: 'was' },
    { t: 'she', c: 'was' },
    { t: 'it', c: 'was' },
    { t: 'we', c: 'were' },
    { t: 'you', c: 'were' },
    { t: 'they', c: 'were' },
    { t: 'the dean', c: 'was' },
    { t: 'the test tank', c: 'was' },
    { t: 'my fellow-students', c: 'were' },
    { t: 'the first graduates', c: 'were' },
    { t: 'our lecturer', c: 'was' },
  ],
  why: '<b>Was</b> ставится после единственного числа и после <i>I</i>, <b>were</b> — после множественного числа и после <i>you</i> в любом значении.',
},

{
  id: 'u4-2', unit: 'u4', src: '2', topic: 'to be в Past Simple', type: 'build',
  q: 'Соберите вопросы и ответы о том, где вчера были однокурсники.',
  items: [
    { ru: 'Где вы были вчера в три часа?', a: 'Where were you at five o’clock yesterday?', extra: ['was'] },
    { ru: 'Я был в библиотеке.', a: 'I was in the library.' },
    { ru: 'Где были ваши однокурсники в понедельник?', a: 'Where were your fellow-students on Monday?', extra: ['was'] },
    { ru: 'Они были в лаборатории.', a: 'They were in the laboratory.' },
    { ru: 'Пётр был в деканате?', a: 'Was Peter at the dean’s office?', extra: ['were'] },
    { ru: 'Нет, он был у опытового бассейна.', a: 'No, he was at the test tank.' },
  ],
  why: 'Вопрос с <i>to be</i> начинается с самой формы глагола: <b>Was/Were</b> + подлежащее. Вопросительное слово ставится перед ней: <i>Where were you…?</i>',
},

{
  id: 'u4-3', unit: 'u4', src: '3', topic: 'to be в Past Simple', type: 'fill',
  q: 'Впишите <i>am, is, are, was, wasn’t, were</i> или <i>weren’t</i>. Краткая и полная форма отрицания равноправны.',
  items: [
    { s: 'Now I ___ a second-year student, but two years ago I ___ at school.', a: [['am'], ['was']],
      ru: 'Сейчас я второкурсник, а два года назад учился в школе.' },
    { s: 'We ___ at the shipyard today, but on Tuesday we ___ at the drawing hall.', a: [['are'], ['were']] },
    { s: 'Anton and Kirill ___ at the design bureau on Monday, because they ___ ill.', a: [['weren’t', 'were not'], ['were']] },
    { s: 'Marina ___ late for the first period yesterday. Her tram ___ in a traffic jam.', a: [['was'], ['was']] },
    { s: 'The test tank ___ ready in 1935; it ___ ready only in 1940.', a: [['wasn’t', 'was not'], ['was']] },
    { s: 'My brother ___ a naval architect now, but five years ago he ___ a student like me.', a: [['is', '’s'], ['was']] },
  ],
  why: 'Выбор формы задают лицо, число и время: настоящее — <i>am / is / are</i>, прошедшее — <i>was / were</i>. Слова <i>yesterday, two years ago, in 1935</i> — маркеры Past Simple.',
},

{
  id: 'u4-4', unit: 'u4', src: '4', topic: 'to be в Past Simple', type: 'build',
  q: 'Соберите мини-диалоги о том, кем были известные люди.',
  items: [
    { ru: 'Крылов был химиком?', a: 'Was Krylov a chemist?', extra: ['were'] },
    { ru: 'Нет, не был. Он был кораблестроителем.', a: 'No, he wasn’t. He was a naval architect.' },
    { ru: 'Ломоносов и Менделеев были биологами?', a: 'Were Lomonosov and Mendeleev biologists?', extra: ['was'] },
    { ru: 'Нет, не были. Они были химиками.', a: 'No, they weren’t. They were chemists.' },
    { ru: 'Ковалевская была астрономом?', a: 'Was Kovalevskaya an astronomer?' },
    { ru: 'Нет, не была. Она была математиком.', a: 'No, she wasn’t. She was a mathematician.' },
  ],
  why: 'Краткий ответ повторяет ту же форму глагола, что и вопрос: <i>Was …? — No, he wasn’t.</i>, <i>Were …? — No, they weren’t.</i>',
},

/* ================= SECTION B. could ================= */

{
  id: 'u4-5', unit: 'u4', src: '5', topic: 'модальный глагол could', type: 'choice',
  q: 'Выберите форму модального глагола. Обратите внимание, к какому времени относится высказывание.',
  items: [
    { s: 'Now I ___ calculate the strength of a frame myself.', ru: 'Сейчас я умею сам рассчитать прочность шпангоута.',
      opts: [
        { t: 'can', ok: true, why: 'Слово <i>now</i> указывает на настоящее время.' },
        { t: 'could', why: '<i>could</i> относит умение к прошлому, а здесь речь о настоящем.' },
        { t: 'am can', why: 'Модальный глагол не соединяется с <i>to be</i>.' },
      ] },
    { s: 'When I was at school, I ___ not read technical English.', ru: 'В школьные годы я не умел читать технический английский.',
      opts: [
        { t: 'could', ok: true, why: 'Придаточное с <i>was</i> относит всё высказывание к прошлому.' },
        { t: 'can', why: 'Настоящее время противоречит словам <i>when I was at school</i>.' },
        { t: 'did', why: 'При модальном глаголе вспомогательный <i>did</i> не употребляется.' },
      ] },
    { s: 'The drawings were not ready, so we ___ print them.', ru: 'Чертежи не были готовы, и мы не смогли их распечатать.',
      opts: [
        { t: 'couldn’t', ok: true, why: 'Отрицание прошедшего времени: <i>could not = couldn’t</i>.' },
        { t: 'can’t', why: 'Первая часть предложения стоит в прошедшем времени.' },
        { t: 'didn’t could', why: 'Форма <i>did</i> + модальный глагол в английском невозможна.' },
      ] },
    { s: 'The first students ___ design a hull, but they had no test tank.', ru: 'Первые студенты умели проектировать корпус, но опытового бассейна у них не было.',
      opts: [
        { t: 'could', ok: true, why: 'Форма <i>could</i> одна для всех лиц и чисел.' },
        { t: 'could to', why: 'После модального глагола инфинитив идёт без частицы <i>to</i>.' },
        { t: 'can', why: 'Соседнее сказуемое <i>had</i> задаёт прошедшее время.' },
      ] },
    { s: '___ you make model ships when you were a schoolboy?', ru: 'Ты умел делать модели судов, когда был школьником?',
      opts: [
        { t: 'Could', ok: true, why: 'Вопрос с модальным глаголом строится перестановкой: <i>Could you…?</i>' },
        { t: 'Did could', why: 'Вспомогательный <i>did</i> при <i>could</i> не нужен.' },
        { t: 'Can', why: 'Придаточное <i>when you were a schoolboy</i> относит вопрос к прошлому.' },
      ] },
    { s: 'He ___ speak English well when he graduated in 2019.', ru: 'Он хорошо говорил по-английски, когда окончил вуз в 2019 году.',
      opts: [
        { t: 'could', ok: true, why: 'Дата в прошлом требует прошедшей формы модального глагола.' },
        { t: 'was could', why: 'Модальный глагол не сочетается с формами <i>to be</i>.' },
        { t: 'can', why: 'Настоящее время не согласуется с <i>in 2019</i>.' },
      ] },
  ],
  why: '<b>Could</b> — прошедшее время глагола <i>can</i>: одна форма для всех лиц, инфинитив без <i>to</i>, вопрос перестановкой, отрицание <i>could not / couldn’t</i>.',
},

{
  id: 'u4-6', unit: 'u4', src: '6', topic: 'модальный глагол could', type: 'build',
  q: 'Соберите вопросы и рассказ о том, что человек умел и не умел делать в школьные годы.',
  items: [
    { ru: 'Ты умел читать чертежи, когда учился в школе?', a: 'Could you read technical drawings at school?', extra: ['did'] },
    { ru: 'Нет, не умел.', a: 'No, I couldn’t.' },
    { ru: 'Когда Нина была школьницей, она умела быстро печатать.', a: 'When Nina was a schoolgirl, she could type fast.' },
    { ru: 'Но она не умела решать линейные уравнения.', a: 'But she couldn’t solve linear equations.' },
    { ru: 'Мой сосед по комнате умел водить машину в семнадцать лет.', a: 'My room-mate could drive a car at seventeen.' },
  ],
  why: 'Умение в прошлом передаётся сочетанием <b>could</b> + инфинитив, а обстоятельство времени (<i>when … was at school</i>, <i>at seventeen</i>) уточняет, о каком периоде идёт речь.',
},

{
  id: 'u4-7', unit: 'u4', src: '7', topic: 'to be в Past Simple', type: 'build',
  q: 'Переведите предложения: соберите английский вариант из блоков.',
  items: [
    { ru: 'Мы были первокурсниками три года назад.', a: 'We were first-year students three years ago.' },
    { ru: 'Я умел плавать, когда мне было пять лет.', a: 'I could swim when I was five.' },
    { ru: 'Где он был вчера вечером?', a: 'Where was he yesterday evening?', extra: ['were'] },
    { ru: 'Виктор не смог помочь мне с чертежом.', a: 'Victor couldn’t help me with the drawing.' },
    { ru: 'Они не были на семинаре в среду.', a: 'They weren’t at the seminar on Wednesday.' },
    { ru: 'Умела ли Анна говорить по-английски два года назад?', a: 'Could Anna speak English two years ago?', extra: ['did'] },
  ],
  why: 'В прошедшем времени русскому «был» отвечает <i>was / were</i>, а «умел, смог» — <i>could</i>. Оба глагола строят вопрос и отрицание сами, без <i>did</i>.',
},

/* ================= SECTION C. лексика и Past Simple правильных глаголов ================= */

{
  id: 'u4-8', unit: 'u4', src: '8', topic: 'лексика юнита', type: 'fill',
  q: 'Впишите подходящее слово из списка, изменив форму: <i>attract, construct, department, function, graduate, independent, machinery, train</i>.',
  items: [
    { s: 'Most ___ of our university go into the shipbuilding industry.', a: [['graduates']],
      ru: 'Большинство выпускников нашего университета идут в судостроение.' },
    { s: 'This college ___ students in computer programming.', a: [['trains']] },
    { s: 'The company ___ bridges and port cranes.', a: [['constructs']] },
    { s: 'After 1930 the institute became an ___ higher school.', a: [['independent']] },
    { s: 'Our student conference ___ engineers from three shipyards.', a: [['attracts']] },
    { s: 'A marine engineer knows ship ___ very well.', a: [['machinery']] },
    { s: 'There are more than forty ___ at our university.', a: [['departments']] },
    { s: 'A modern test tank cannot ___ without computers.', a: [['function']] },
  ],
  why: 'Форма слова подчиняется предложению: после <i>most of</i> и числительного — множественное число, в третьем лице единственного числа у глагола появляется <i>-s</i>, а после <i>cannot</i> стоит инфинитив без окончаний.',
},

{
  id: 'u4-9a', unit: 'u4', src: '9 (а)', topic: 'Past Simple: правильные глаголы', type: 'choice',
  q: 'Рассказ об истории университета относится к прошлому. Выберите верную форму глагола.',
  items: [
    { s: 'In 1902 a shipbuilding department ___ work at the Polytechnic Institute.', ru: 'В 1902 году в Политехническом институте начала работу кораблестроительная кафедра.',
      opts: [
        { t: 'started', ok: true, why: 'Дата в прошлом требует Past Simple, у правильного глагола это окончание <i>-ed</i>.' },
        { t: 'starts', why: 'Форма настоящего времени не согласуется с <i>in 1902</i>.' },
        { t: 'starting', why: 'Причастие само по себе сказуемым быть не может.' },
      ] },
    { s: 'The new department ___ young people for the shipyards of the capital.', ru: 'Новая кафедра готовила молодёжь для верфей столицы.',
      opts: [
        { t: 'trained', ok: true, why: 'Основа оканчивается на согласную, поэтому просто добавляется <i>-ed</i>: <i>train — trained</i>.' },
        { t: 'trainned', why: 'Согласная удваивается только в кратком ударном слоге вида «гласная + согласная».' },
        { t: 'train', why: 'Без окончания глагол остаётся в настоящем времени.' },
      ] },
    { s: 'Professor Boklevsky ___ the department for more than twenty years.', ru: 'Профессор Боклевский возглавлял кафедру больше двадцати лет.',
      opts: [
        { t: 'headed', ok: true, why: 'Основа оканчивается на <i>d</i>, окончание просто добавляется и читается /ɪd/.' },
        { t: 'headded', why: 'Удвоения здесь нет: слог не является кратким ударным открытым.' },
        { t: 'heads', why: 'Окончание <i>-s</i> — признак настоящего времени.' },
      ] },
    { s: 'The first students ___ hard at mathematics and physics.', ru: 'Первые студенты усердно занимались математикой и физикой.',
      opts: [
        { t: 'worked', ok: true, why: 'Правильный глагол в Past Simple одинаков во всех лицах.' },
        { t: 'workd', why: 'Буква <i>e</i> в окончании выпадает только после немого <i>e</i> в основе.' },
        { t: 'works', why: 'Это форма настоящего времени третьего лица единственного числа.' },
      ] },
    { s: 'The teachers ___ every drawing very carefully.', ru: 'Преподаватели очень внимательно проверяли каждый чертёж.',
      opts: [
        { t: 'checked', ok: true, why: 'Основа на глухой согласной: пишется <i>-ed</i>, читается /t/.' },
        { t: 'checkt', why: 'Произношение /t/ не меняет написание: окончание всегда <i>-ed</i>.' },
        { t: 'check', why: 'Форма без окончания не выражает прошедшего времени.' },
      ] },
  ],
  why: 'Past Simple правильного глагола образуется окончанием <b>-ed</b>; оно одинаково для всех лиц и чисел и не зависит от того, как читается.',
},

{
  id: 'u4-9b', unit: 'u4', src: '9 (б)', topic: 'правила чтения', type: 'sort',
  q: 'Разложите глаголы по произношению окончания <i>-ed</i>.',
  cats: { t: 'окончание звучит /t/', d: 'окончание звучит /d/', id: 'окончание звучит /ɪd/' },
  items: [
    { t: 'worked', c: 't' },
    { t: 'passed', c: 't' },
    { t: 'finished', c: 't' },
    { t: 'stopped', c: 't' },
    { t: 'trained', c: 'd' },
    { t: 'opened', c: 'd' },
    { t: 'designed', c: 'd' },
    { t: 'studied', c: 'd' },
    { t: 'started', c: 'id' },
    { t: 'tested', c: 'id' },
    { t: 'headed', c: 'id' },
    { t: 'needed', c: 'id' },
  ],
  why: 'После глухих согласных окончание звучит /t/, после звонких и гласных — /d/, а после <i>t</i> и <i>d</i> появляется дополнительный слог /ɪd/.',
},

{
  id: 'u4-10a', unit: 'u4', src: '10 (а)', topic: 'правила чтения', type: 'sort',
  q: 'Ещё один набор глаголов: определите, как читается окончание.',
  cats: { t: '/t/', d: '/d/', id: '/ɪd/' },
  items: [
    { t: 'moved', c: 'd' },
    { t: 'received', c: 'd' },
    { t: 'repaired', c: 'd' },
    { t: 'answered', c: 'd' },
    { t: 'attracted', c: 'id' },
    { t: 'wanted', c: 'id' },
    { t: 'calculated', c: 'id' },
    { t: 'defended', c: 'id' },
    { t: 'developed', c: 't' },
    { t: 'launched', c: 't' },
    { t: 'helped', c: 't' },
    { t: 'liked', c: 't' },
  ],
  why: 'Решает последний <b>звук</b> основы, а не буква: в <i>developed</i> и <i>liked</i> он глухой (/pt/, /kt/), в <i>moved</i> и <i>answered</i> — звонкий.',
},

{
  id: 'u4-10b', unit: 'u4', src: '10 (б)', topic: 'Past Simple: правильные глаголы', type: 'fill',
  q: 'Раскройте скобки: поставьте правильные глаголы в Past Simple.',
  items: [
    { s: 'From the very first years the department ___ (attract) hundreds of young people.', a: [['attracted']],
      ru: 'С первых лет кафедра привлекала сотни молодых людей.' },
    { s: 'Nearly twenty candidates ___ (apply) for each place.', a: [['applied']] },
    { s: 'In 1908 the first graduates ___ (receive) the diploma of a naval engineer.', a: [['received']] },
    { s: 'The small department ___ (turn) into a large faculty after the revolution.', a: [['turned']] },
    { s: 'In 1930 the institute ___ (move) to Lotsmanskaya street and ___ (start) its independent life.', a: [['moved'], ['started']] },
    { s: 'Most students ___ (want) to work at the yards of the city.', a: [['wanted']] },
  ],
  why: 'Правописание окончания зависит от конца основы: после немого <i>e</i> пишется только <i>-d</i> (<i>move — moved</i>), после согласной с <i>y</i> получается <i>-ied</i> (<i>apply — applied</i>), в остальных случаях просто <i>-ed</i>.',
},

{
  id: 'u4-11', unit: 'u4', src: '11', topic: 'история университета', type: 'match',
  q: 'Соотнесите вопросы об истории университета с ответами.',
  pairs: [
    ['When did the shipbuilding department open?', 'в 1902 году'],
    ['Who headed the department for more than twenty years?', 'профессор Боклевский'],
    ['What did the department train students in?', 'постройке судов и судовых механизмов'],
    ['How many graduates got their diplomas in 1908?', 'двадцать семь'],
    ['Where did the institute move in 1930?', 'на Лоцманскую улицу'],
    ['What name did the institute get in 1930?', 'Ленинградский кораблестроительный институт'],
  ],
  why: 'Вопрос в Past Simple начинается с вопросительного слова и вспомогательного <i>did</i>, а смысловой глагол стоит в инфинитиве: <i>When did … open?</i>',
},

{
  id: 'u4-12', unit: 'u4', src: '12', topic: 'история университета', type: 'fill',
  q: 'Заполните пропуски словами из рассказа об истории университета.',
  items: [
    { s: 'Our university is an old and famous higher ___.', a: [['school']],
      ru: 'Наш университет — старая и известная высшая школа.' },
    { s: 'The first shipbuilding ___ in Russia opened in 1902.', a: [['department']] },
    { s: 'Its first ___ received the diploma of a naval engineer in 1908.', a: [['graduates']] },
    { s: 'In 1930 the faculty became an ___ institute.', a: [['independent']] },
    { s: 'The institute moved to ___ street.', a: [['Lotsmanskaya']] },
    { s: 'In 1992 the institute became a ___.', a: [['university']] },
  ],
  why: 'Пропуски восстанавливаются по смыслу текста; подсказывают и артикли: после <i>an</i> идёт слово, начинающееся с гласного звука (<i>independent</i>).',
},

/* ================= SECTION D. Past Simple: орфография, вопросы, отрицания ================= */

{
  id: 'u4-13', unit: 'u4', src: '13', topic: 'Past Simple: правильные глаголы', type: 'sort',
  q: 'Разложите глаголы по правилу написания окончания <i>-ed</i>.',
  cats: { ed: '+ ed', d: '+ d (после немого e)', ied: 'y → ied', dbl: 'удвоение согласной + ed' },
  items: [
    { t: 'work', c: 'ed' },
    { t: 'gather', c: 'ed' },
    { t: 'answer', c: 'ed' },
    { t: 'open', c: 'ed' },
    { t: 'stay', c: 'ed' },
    { t: 'change', c: 'd' },
    { t: 'receive', c: 'd' },
    { t: 'move', c: 'd' },
    { t: 'organize', c: 'd' },
    { t: 'carry', c: 'ied' },
    { t: 'study', c: 'ied' },
    { t: 'apply', c: 'ied' },
    { t: 'marry', c: 'ied' },
    { t: 'plan', c: 'dbl' },
    { t: 'stop', c: 'dbl' },
    { t: 'admit', c: 'dbl' },
  ],
  why: 'Буква <i>y</i> переходит в <i>i</i> только после согласной: <i>study — studied</i>, но <i>stay — stayed</i>. Согласная удваивается в кратком ударном слоге: <i>plan — planned</i>.',
},

{
  id: 'u4-14', unit: 'u4', src: '14', topic: 'Past Simple: правильные глаголы', type: 'fill',
  q: 'Второе предложение относится к прошлому. Поставьте глагол в нужную форму.',
  items: [
    { s: 'Sergey lives in Severodvinsk now. Two years ago he ___ in Kaliningrad.', a: [['lived']],
      ru: 'Сергей сейчас живёт в Северодвинске. Два года назад он жил в Калининграде.' },
    { s: 'Our group studies ship theory. Last term we ___ materials science.', a: [['studied']] },
    { s: 'The laboratory tests new coatings. Yesterday it ___ a new paint.', a: [['tested']] },
    { s: 'My friend applies for a summer job every May. Last May he ___ to a design bureau.', a: [['applied']] },
    { s: 'The lecturer usually stops at five. On Friday he ___ at four.', a: [['stopped']] },
    { s: 'We gather in the hall before the seminar. On Monday we ___ in the reading room.', a: [['gathered']] },
    { s: 'The festival starts in April. In 1954 it ___ with a students’ performance.', a: [['started']] },
    { s: 'The dean answers letters himself. He ___ my letter in an hour.', a: [['answered']] },
  ],
  why: 'Маркеры <i>two years ago, last term, yesterday, on Friday, in 1954</i> переводят высказывание в Past Simple, и правильный глагол получает окончание <b>-ed</b> по правилам написания.',
},

{
  id: 'u4-15a', unit: 'u4', src: '15 (а)', topic: 'вопросы в Past Simple', type: 'choice',
  q: 'Сравните строение вопроса и отрицания в Present и Past Simple. Выберите верный вариант.',
  items: [
    { s: 'He works at the yard now. ___ he work at the yard last summer?', ru: 'Он работал на верфи прошлым летом?',
      opts: [
        { t: 'Did', ok: true, why: 'В Past Simple вопрос строит вспомогательный <i>did</i>.' },
        { t: 'Does', why: '<i>does</i> — вспомогательный глагол настоящего времени.' },
        { t: 'Was', why: 'При смысловом глаголе <i>work</i> формы <i>to be</i> вопрос не образуют.' },
      ] },
    { s: 'She ___ study at our faculty in 2018.', ru: 'Она не училась на нашем факультете в 2018 году.',
      opts: [
        { t: 'didn’t', ok: true, why: 'Отрицание в Past Simple: <i>did not = didn’t</i> + инфинитив.' },
        { t: 'doesn’t', why: 'Настоящее время не согласуется с датой <i>in 2018</i>.' },
        { t: 'wasn’t', why: '<i>wasn’t</i> отрицает только сам глагол <i>to be</i>.' },
      ] },
    { s: '___ they organize the conference last year?', ru: 'Они организовали конференцию в прошлом году?',
      opts: [
        { t: 'Did', ok: true, why: '<i>Did</i> ставится перед подлежащим независимо от лица и числа.' },
        { t: 'Do', why: 'Форма настоящего времени противоречит <i>last year</i>.' },
        { t: 'Were', why: 'Смысловой глагол <i>organize</i> требует <i>did</i>.' },
      ] },
    { s: 'Did the rector ___ the department last week?', ru: 'Ректор посетил кафедру на прошлой неделе?',
      opts: [
        { t: 'visit', ok: true, why: 'Прошедшее время уже выражено словом <i>did</i>, поэтому смысловой глагол стоит в инфинитиве.' },
        { t: 'visited', why: 'Показатель прошедшего времени в предложении может быть только один.' },
        { t: 'visits', why: 'Окончание <i>-s</i> относится к настоящему времени.' },
      ] },
    { s: 'They didn’t ___ the exam in June.', ru: 'Они не сдали экзамен в июне.',
      opts: [
        { t: 'pass', ok: true, why: 'После <i>didn’t</i> глагол возвращается к начальной форме.' },
        { t: 'passed', why: 'Два показателя прошедшего времени сразу не ставятся.' },
        { t: 'passing', why: 'Причастие после <i>didn’t</i> не употребляется.' },
      ] },
    { s: '«Did you like the conference?» — «Yes, I ___.»', ru: '«Вам понравилась конференция?» — «Да».',
      opts: [
        { t: 'did', ok: true, why: 'Краткий ответ повторяет вспомогательный глагол вопроса.' },
        { t: 'do', why: 'В ответе сохраняется время вопроса — прошедшее.' },
        { t: 'liked', why: 'В кратком ответе смысловой глагол не повторяется.' },
      ] },
  ],
  why: 'Схема одна и та же: <i>Does he work? — Did he work?</i>, <i>He does not work. — He did not work.</i> Меняется только форма вспомогательного глагола, смысловой всегда остаётся в инфинитиве.',
},

{
  id: 'u4-15b', unit: 'u4', src: '15 (б)', topic: 'вопросы в Past Simple', type: 'fill',
  q: 'Раскройте скобки, поставив глагол в Past Simple. Отрицание принимается и в краткой, и в полной форме.',
  items: [
    { s: '___ (you / like) the students’ conference?', a: [['Did you like']],
      ru: 'Вам понравилась студенческая конференция?' },
    { s: 'She ___ (study) at two universities, but she ___ (not / change) her speciality.', a: [['studied'], ['didn’t change', 'did not change']] },
    { s: '___ (the first-year students / gather) in the assembly hall?', a: [['Did the first-year students gather']] },
    { s: 'The design bureau ___ (move) to a new building four years ago.', a: [['moved']] },
    { s: 'Nobody ___ (help) me, so I ___ (carry out) the tests myself.', a: [['helped'], ['carried out']] },
    { s: '___ (they / pass) the exam in materials science?', a: [['Did they pass']] },
    { s: 'The head of the department ___ (not / answer) my letter yesterday.', a: [['didn’t answer', 'did not answer']] },
  ],
  why: 'В утверждении прошедшее время показывает окончание <i>-ed</i>, а в вопросе и отрицании — вспомогательный <b>did</b>, после которого глагол стоит в начальной форме.',
},

{
  id: 'u4-16', unit: 'u4', src: '16', topic: 'вопросы в Past Simple', type: 'build',
  q: 'Соберите специальные вопросы в Past Simple.',
  items: [
    { ru: 'Когда кафедра получила новое название?', a: 'When did the department get a new name?', extra: ['got'] },
    { ru: 'Почему студенты испытывали модель дважды?', a: 'Why did the students test the model twice?', extra: ['tested'] },
    { ru: 'Где инженеры построили первый опытовый бассейн?', a: 'Where did the engineers build the first test tank?' },
    { ru: 'Как вы добрались вчера до верфи?', a: 'How did you get to the shipyard yesterday?' },
    { ru: 'Какую тему вы выбрали для курсовой работы?', a: 'What topic did you choose for your course paper?' },
    { ru: 'Сколько лет он проработал деканом?', a: 'How many years did he work as a dean?' },
  ],
  why: 'Порядок слов в специальном вопросе: вопросительное слово — <b>did</b> — подлежащее — инфинитив смыслового глагола.',
},

{
  id: 'u4-17', unit: 'u4', src: '17', topic: 'вопросы в Past Simple', type: 'build',
  q: 'Переведите предложения на английский язык, собрав их из блоков.',
  items: [
    { ru: 'Я остался в чертёжном зале после пар.', a: 'I stayed in the drawing hall after classes.' },
    { ru: 'Мы не закончили расчёт вчера вечером.', a: 'We didn’t finish the calculation yesterday evening.' },
    { ru: 'Ваши однокурсники работали на верфи прошлым летом?', a: 'Did your fellow-students work at the shipyard last summer?', extra: ['worked'] },
    { ru: 'Испытание продолжалось четыре часа.', a: 'The test lasted four hours.' },
    { ru: 'Когда Мария защитила курсовую работу?', a: 'When did Maria defend her course paper?', extra: ['defended'] },
    { ru: 'Я не ответил на второй вопрос.', a: 'I didn’t answer the second question.' },
  ],
  why: 'В утверждении сказуемое несёт окончание <i>-ed</i>, а в вопросе и отрицании прошедшее время берёт на себя <b>did</b>; ловушки <i>worked</i> и <i>defended</i> в этих предложениях лишние.',
},

/* ================= SECTION E. лексика, история университета ================= */

{
  id: 'u4-18', unit: 'u4', src: '18', topic: 'лексика юнита', type: 'choice',
  q: 'Догадайтесь о значении слова по контексту и выберите подходящее.',
  items: [
    { s: 'He was an ___ scientist: his name was known all over Europe.', ru: 'Он был выдающимся учёным: его имя знали по всей Европе.',
      opts: [
        { t: 'outstanding', ok: true, why: '<i>outstanding</i> — выдающийся, заметно превосходящий других.' },
        { t: 'independent', why: '<i>independent</i> — независимый; это о положении, а не о признании.' },
        { t: 'fundamental', why: '<i>fundamental</i> — основополагающий; так говорят о теории или свойстве, а не о человеке.' },
      ] },
    { s: 'He worked in the ___ of theoretical physics.', ru: 'Он работал в области теоретической физики.',
      opts: [
        { t: 'field', ok: true, why: '<i>field</i> — область знаний, научное направление.' },
        { t: 'tank', why: '<i>tank</i> — бассейн или цистерна.' },
        { t: 'degree', why: '<i>degree</i> — учёная степень или градус.' },
      ] },
    { s: 'Sand covers a large ___ of the country.', ru: 'Песок покрывает большую площадь страны.',
      opts: [
        { t: 'area', ok: true, why: '<i>area</i> — площадь, территория.' },
        { t: 'field', why: '<i>field</i> — скорее область знаний или поле; о площади страны так не говорят.' },
        { t: 'century', why: '<i>century</i> — век; это единица времени, а не пространства.' },
      ] },
    { s: 'His papers did not ___ in print for many years.', ru: 'Его работы много лет не выходили в печати.',
      opts: [
        { t: 'appear', ok: true, why: '<i>appear</i> — появляться, выходить (о публикации).' },
        { t: 'attract', why: '<i>attract</i> — привлекать; требует дополнения (что именно привлекает).' },
        { t: 'construct', why: '<i>construct</i> — строить; к публикациям не относится.' },
      ] },
    { s: 'The new theory ___ a lot of interest among naval architects.', ru: 'Новая теория вызвала большой интерес у кораблестроителей.',
      opts: [
        { t: 'attracted', ok: true, why: 'Сочетание <i>attract interest</i> означает «вызывать интерес».' },
        { t: 'constructed', why: '<i>construct</i> сочетается с материальными предметами: мостами, судами.' },
        { t: 'trained', why: '<i>train</i> требует того, кого обучают: <i>train students</i>.' },
      ] },
    { s: 'The laboratory ___ students in modern methods of testing.', ru: 'Лаборатория обучала студентов современным методам испытаний.',
      opts: [
        { t: 'trained', ok: true, why: 'Конструкция <i>train somebody in something</i> — «готовить, обучать чему-либо».' },
        { t: 'attracted', why: 'Получилось бы «привлекала студентов методами», а смысл другой.' },
        { t: 'functioned', why: '<i>function</i> — работать, действовать; дополнение при нём не ставится.' },
      ] },
  ],
  why: 'Значение незнакомого слова подсказывает окружение: сочетаемость (<i>attract interest</i>, <i>train somebody in</i>) и общий смысл предложения.',
},

{
  id: 'u4-19', unit: 'u4', src: '19', topic: 'лексика юнита', type: 'match',
  q: 'Подберите к английским словам русские соответствия.',
  pairs: [
    ['original', 'первоначальный, исходный'],
    ['tank', 'цистерна, бассейн'],
    ['optimize', 'выбирать наилучший вариант'],
    ['fundamental', 'основной, принципиальный'],
    ['design', 'проектировать'],
    ['control', 'управлять, регулировать'],
  ],
  why: 'Многие термины судостроения — интернациональные слова, но переводить их наугад опасно: <i>original</i> означает «первоначальный», а не «оригинальный по замыслу».',
},

{
  id: 'u4-20', unit: 'u4', src: '20', topic: 'лексика юнита', type: 'match',
  q: 'Соотнесите составные существительные с переводом. Читайте такое сочетание с конца.',
  pairs: [
    ['ship machinery', 'судовые механизмы'],
    ['research activities', 'научная деятельность'],
    ['control system', 'система управления'],
    ['ship design centre', 'центр проектирования судов'],
    ['computer centre', 'вычислительный центр'],
    ['model ship', 'модель судна'],
    ['ocean technology', 'океанотехника'],
    ['hull shape', 'форма корпуса'],
  ],
  why: 'В цепочке существительных главное слово стоит последним, а всё, что перед ним, работает определением: <i>ship design centre</i> — центр (какой?) проектирования судов.',
},

{
  id: 'u4-21', unit: 'u4', src: '21', topic: 'история университета', type: 'order',
  q: 'Расставьте события истории университета в хронологическом порядке.',
  lines: [
    'In 1902 the shipbuilding department opened at the Polytechnic Institute.',
    'In 1908 the department gave the country its first naval architects.',
    'In 1930 it left the Polytechnic Institute and became an independent institute.',
    'In 1935 the institute formed its own academic council.',
    'In 1940 the first test tank started to work.',
    'In 1961 the institute started its first computer centre.',
    'In 1992 the institute became a university.',
  ],
  why: 'Рассказ об истории строится по датам, и каждая из них — маркер Past Simple: <i>opened, gave, became, started</i>.',
},

{
  id: 'u4-22', unit: 'u4', src: '22', topic: 'история университета', type: 'match',
  q: 'Соотнесите события с годами, когда они произошли.',
  pairs: [
    ['the academic council started its work', '1935'],
    ['the faculty of economics appeared', '1939'],
    ['the test tank started functioning', '1940'],
    ['the faculty of marine electronics appeared', '1945'],
    ['the ‘Lotsmanskaya Spring’ festival started', '1954'],
    ['the first computer centre opened', '1961'],
    ['the students’ boats sailed down the river Ob', '1970'],
    ['the institute became a university', '1992'],
  ],
  why: 'Годы читаются по две цифры: <i>nineteen thirty-five</i>, <i>nineteen ninety-two</i>.',
},

{
  id: 'u4-23', unit: 'u4', src: '23', topic: 'история университета', type: 'choice',
  q: 'Выберите вариант, который соответствует истории университета.',
  items: [
    { s: 'In 1930 the institute had two ___.', ru: 'В 1930 году в институте было два факультета.',
      opts: [
        { t: 'faculties', ok: true, why: 'Кораблестроительный и машиностроительный — это два факультета.' },
        { t: 'departments', why: 'Кафедр было больше, и речь идёт о более крупных подразделениях.' },
      ] },
    { s: 'The academic council discussed ___ projects and theses.', ru: 'Учёный совет обсуждал научные проекты и диссертации.',
      opts: [
        { t: 'research', ok: true, why: 'Совет создавали именно ради научной работы.' },
        { t: 'social', why: 'Общественной жизнью занимались клубы и студенческие объединения.' },
      ] },
    { s: 'Academician Krylov was ___ of the academic council.', ru: 'Академик Крылов был членом учёного совета.',
      opts: [
        { t: 'a member', ok: true, why: 'Крылов входил в состав совета как один из его членов.' },
        { t: 'the rector', why: 'Ректором института он не был.' },
      ] },
    { s: 'The tests with model ships helped to optimize ___.', ru: 'Испытания моделей помогали выбирать наилучшую форму корпуса.',
      opts: [
        { t: 'hull shapes', ok: true, why: 'Цель испытаний — форма корпуса и основные характеристики судна.' },
        { t: 'model ships', why: 'Модели — средство испытания, а не то, что улучшают.' },
      ] },
    { s: 'The 1950s are remembered for the students’ ___.', ru: 'Пятидесятые годы запомнились студенческой общественной жизнью.',
      opts: [
        { t: 'social life', ok: true, why: 'Тогда появились фестиваль и парусные экспедиции.' },
        { t: 'scientific research', why: 'Научная работа шла постоянно и не была приметой именно этих лет.' },
      ] },
    { s: 'In 1961 the institute opened its first ___.', ru: 'В 1961 году институт открыл первый вычислительный центр.',
      opts: [
        { t: 'computer centre', ok: true, why: 'Институт одним из первых начал считать на вычислительной машине.' },
        { t: 'scientific library', why: 'Библиотека существовала задолго до этого.' },
      ] },
    { s: 'After the reorganization of 1992 the institute became a ___.', ru: 'После преобразования 1992 года институт стал университетом.',
      opts: [
        { t: 'university', ok: true, why: 'Именно тогда появилось нынешнее название — морской технический университет.' },
        { t: 'academy', why: 'Статуса академии у института не было.' },
      ] },
  ],
  why: 'Задание проверяет понимание текста: опора — даты и ключевые слова, а не догадка.',
},

{
  id: 'u4-24a', unit: 'u4', src: '24 (а)', topic: 'Past Simple: неправильные глаголы', type: 'match',
  q: 'Подберите к форме Past Simple начальную форму глагола.',
  pairs: [
    ['had', 'have'],
    ['was, were', 'be'],
    ['made', 'make'],
    ['became', 'become'],
    ['gave', 'give'],
    ['grew', 'grow'],
    ['began', 'begin'],
    ['went', 'go'],
    ['got', 'get'],
    ['left', 'leave'],
  ],
  why: 'Формы неправильных глаголов заучиваются наизусть: они не подчиняются правилу <i>-ed</i>, а в вопросе и отрицании всё равно возвращаются к начальной форме после <i>did</i>.',
},

{
  id: 'u4-24b', unit: 'u4', src: '24 (б)', topic: 'Past Simple: неправильные глаголы', type: 'fill',
  q: 'Запишите в орфографии глагол, данный транскрипцией. Все формы — Past Simple.',
  items: [
    { s: '/kʊd/ — ___', a: [['could']], ru: 'мог, умел' },
    { s: '/bɪˈɡæn/ — ___', a: [['began']], ru: 'начал' },
    { s: '/ɡeɪv/ — ___', a: [['gave']], ru: 'дал' },
    { s: '/ɡruː/ — ___', a: [['grew']], ru: 'рос' },
    { s: '/rəʊt/ — ___', a: [['wrote']], ru: 'написал' },
    { s: '/faʊnd/ — ___', a: [['found']], ru: 'нашёл' },
    { s: '/met/ — ___', a: [['met']], ru: 'встретил' },
    { s: '/spəʊk/ — ___', a: [['spoke']], ru: 'говорил' },
  ],
  why: 'Написание неправильных глаголов часто расходится с произношением: <i>wrote</i> начинается с непроизносимого <i>w</i>, а <i>could</i> хранит немое <i>l</i>.',
},

{
  id: 'u4-25', unit: 'u4', src: '25', topic: 'вопросы в Past Simple', type: 'choice',
  q: 'Постройте вопрос или отрицание в Past Simple. Обратите внимание на форму смыслового глагола.',
  items: [
    { s: 'She studied maths at school. ___ she study maths at school?', ru: 'Она изучала математику в школе?',
      opts: [
        { t: 'Did', ok: true, why: 'Вопрос в Past Simple начинается с <i>did</i> для любого лица.' },
        { t: 'Does', why: 'Это вспомогательный глагол настоящего времени.' },
        { t: 'Was', why: 'Формы <i>to be</i> не образуют вопрос при смысловом глаголе <i>study</i>.' },
      ] },
    { s: 'He went to the shipyard. → He ___ to the shipyard.', ru: 'Он не ходил на верфь.',
      opts: [
        { t: 'didn’t go', ok: true, why: 'После <i>didn’t</i> неправильный глагол возвращается к начальной форме <i>go</i>.' },
        { t: 'didn’t went', why: 'Прошедшее время уже выражено словом <i>didn’t</i>.' },
        { t: 'wasn’t go', why: 'Сочетание формы <i>to be</i> со смысловым глаголом невозможно.' },
      ] },
    { s: '___ the students take part in the festival last spring?', ru: 'Студенты участвовали в фестивале прошлой весной?',
      opts: [
        { t: 'Did', ok: true, why: 'Устойчивое сочетание <i>take part in</i> — обычный смысловой глагол, ему нужен <i>did</i>.' },
        { t: 'Were', why: 'Это вопрос не о состоянии, а о действии.' },
        { t: 'Do', why: 'Настоящее время не согласуется с <i>last spring</i>.' },
      ] },
    { s: 'Did the council ___ its work in 1935?', ru: 'Учёный совет начал работу в 1935 году?',
      opts: [
        { t: 'begin', ok: true, why: 'После <i>did</i> ставится начальная форма даже у неправильного глагола.' },
        { t: 'began', why: 'Два показателя прошедшего времени в одном сказуемом не нужны.' },
        { t: 'begun', why: 'Третья форма употребляется в перфекте и в пассиве, а не после <i>did</i>.' },
      ] },
    { s: 'The institute ___ the name of a university until 1992.', ru: 'До 1992 года институт не носил названия университета.',
      opts: [
        { t: 'didn’t get', ok: true, why: 'Отрицание строится сочетанием <i>didn’t</i> + инфинитив.' },
        { t: 'didn’t got', why: 'Форма <i>got</i> после <i>didn’t</i> невозможна.' },
        { t: 'not got', why: 'Частица <i>not</i> сама по себе сказуемое не отрицает.' },
      ] },
    { s: '«Did you write the report?» — «No, I ___.»', ru: '«Вы написали отчёт?» — «Нет».',
      opts: [
        { t: 'didn’t', ok: true, why: 'Краткий ответ повторяет вспомогательный глагол вопроса.' },
        { t: 'wasn’t', why: 'В вопросе стоял <i>did</i>, значит и в ответе он же.' },
        { t: 'don’t', why: 'Время ответа должно совпадать со временем вопроса.' },
      ] },
  ],
  why: 'Правило одно для правильных и неправильных глаголов: в вопросе и отрицании прошедшее время выражает <b>did</b>, а смысловой глагол стоит в начальной форме.',
},

{
  id: 'u4-26a', unit: 'u4', src: '26 (а)', topic: 'вопросы в Past Simple', type: 'build',
  q: 'Соберите вопросы к тексту об истории института и краткие ответы на них.',
  items: [
    { ru: 'У института было четыре факультета в 1945 году?', a: 'Did the institute have four faculties in 1945?', extra: ['had'] },
    { ru: 'Нет. У него было три факультета.', a: 'No, it didn’t. It had three faculties.' },
    { ru: 'Учёный совет начал работу в 1933 году?', a: 'Did the academic council start its work in 1933?', extra: ['started'] },
    { ru: 'Студенты испытывали модели в новом бассейне?', a: 'Did the students test models in the new tank?' },
    { ru: 'Драмкружок дал первый спектакль в 1954 году?', a: 'Did the drama club give its first performance in 1954?', extra: ['gave'] },
  ],
  why: 'В вопросе смысловой глагол стоит в начальной форме (<i>have, begin, give</i>), а в кратком ответе и в следующем предложении возвращается прошедшая форма (<i>had</i>).',
},

{
  id: 'u4-26b', unit: 'u4', src: '26 (б)', topic: 'вопросы в Past Simple', type: 'fill',
  q: 'Впишите отрицательную форму и заметьте, как во второй части предложения исправляется фактическая ошибка.',
  items: [
    { s: 'The students ___ sail down the Volga; they sailed down the Ob.', a: [['didn’t', 'did not']],
      ru: 'Студенты сплавлялись не по Волге, а по Оби.' },
    { s: 'Foreign engineers ___ make the institute famous; its own scientists did.', a: [['didn’t', 'did not']] },
    { s: 'The institute ___ develop space technology; it developed ocean technology.', a: [['didn’t', 'did not']] },
    { s: 'The institute ___ get the name of a university in 1997; it got it in 1992.', a: [['didn’t', 'did not']] },
    { s: 'The first test tank ___ start work in 1930; it started work in 1940.', a: [['didn’t', 'did not']] },
    { s: 'The faculty of economics ___ appear in 1945; it appeared in 1939.', a: [['didn’t', 'did not']] },
  ],
  why: 'В отрицании после <i>didn’t</i> глагол всегда стоит в начальной форме, а в утвердительной части того же предложения он снова принимает форму прошедшего времени.',
},

{
  id: 'u4-27', unit: 'u4', src: '27', topic: 'вопросы в Past Simple', type: 'fill',
  q: 'Завершите вопросы по тексту: впишите вспомогательный и смысловой глаголы.',
  items: [
    { s: 'Why ___ the institute ___ an academic council in 1935?', a: [['did'], ['need']],
      ru: 'Зачем институту понадобился учёный совет в 1935 году?' },
    { s: 'Where ___ the students ___ out their experiments with models?', a: [['did'], ['carry']] },
    { s: 'What ___ the new faculty ___ its students in?', a: [['did'], ['train']] },
    { s: 'How far ___ the students’ boats ___ down the Ob?', a: [['did'], ['sail']] },
    { s: 'When ___ the institute ___ its first computer centre?', a: [['did'], ['open']] },
    { s: 'What name ___ the institute ___ in 1992?', a: [['did'], ['get']] },
  ],
  why: 'В специальном вопросе прошедшее время выражает только <b>did</b>, стоящее сразу после вопросительного слова; смысловой глагол идёт после подлежащего в начальной форме.',
},

{
  id: 'u4-28', unit: 'u4', src: '28', topic: 'предлоги', type: 'fill',
  q: 'Заполните пропуски предлогами.',
  items: [
    { s: 'Our group went ___ an excursion ___ the shipyard last Friday.', a: [['on'], ['to']],
      ru: 'В прошлую пятницу наша группа съездила на экскурсию на верфь.' },
    { s: 'The department trains engineers ___ designing control systems ___ modern vessels.', a: [['in'], ['for']] },
    { s: 'The laboratory carried ___ tests ___ a new coating ___ November.', a: [['out'], ['of', 'on'], ['in']] },
    { s: 'The 1960s were famous ___ the first computer at our institute.', a: [['for']] },
    { s: '___ 1940 the institute opened the first ___ its test tanks.', a: [['In'], ['of']] },
    { s: 'The students sailed ___ the river ___ Novgorod ___ Vyborg.', a: [['down'], ['from'], ['to']] },
    { s: '___ the war the university took part ___ many research projects.', a: [['After'], ['in']] },
  ],
  why: 'Предлог задаётся управлением слова: <i>go on an excursion</i>, <i>train somebody in something</i>, <i>be famous for</i>, <i>take part in</i>. С годами и месяцами употребляется <i>in</i>.',
},

{
  id: 'u4-29', unit: 'u4', src: '29', topic: 'лексика юнита', type: 'choice',
  q: 'Выберите связующее слово, которое подходит по смыслу.',
  items: [
    { s: '___ there were two faculties, and only later new ones appeared.', ru: 'Поначалу было два факультета, и лишь позже появились новые.',
      opts: [
        { t: 'At first', ok: true, why: '<i>at first</i> — сначала, поначалу; вводит первую ступень рассказа.' },
        { t: 'At last', why: '<i>at last</i> — наконец; так завершают перечисление, а не начинают.' },
        { t: 'At once', why: '<i>at once</i> — сразу же; речь о быстроте, а не о начале.' },
      ] },
    { s: '___ the institute grew, new departments appeared.', ru: 'По мере того как институт рос, появлялись новые кафедры.',
      opts: [
        { t: 'As', ok: true, why: 'Здесь <i>as</i> = «по мере того как»: два процесса идут вместе.' },
        { t: 'So', why: '<i>so</i> вводит следствие и ставится после причины.' },
        { t: 'Because of', why: 'После <i>because of</i> ставится существительное, а не целое предложение.' },
      ] },
    { s: 'Students got education ___ in shipbuilding, but also in economics.', ru: 'Студенты получали образование не только в судостроении, но и в экономике.',
      opts: [
        { t: 'not only', ok: true, why: 'Парный союз <i>not only … but also</i> связывает две части перечисления.' },
        { t: 'not always', why: '<i>not always</i> — «не всегда»; вторая часть с <i>but also</i> тогда повисает.' },
        { t: 'no more', why: '<i>no more</i> означает «больше не», смысл получается противоположный.' },
      ] },
    { s: '___ 1961 the institute opened its computer centre.', ru: 'Уже в 1961 году институт открыл вычислительный центр.',
      opts: [
        { t: 'As early as', ok: true, why: '<i>as early as</i> подчёркивает, что событие случилось раньше ожидаемого.' },
        { t: 'As soon as', why: '<i>as soon as</i> — «как только»; это союз времени и требует придаточного.' },
        { t: 'As far as', why: '<i>as far as</i> — «насколько»; к датам не относится.' },
      ] },
    { s: 'The institute developed ___, and the number of students grew.', ru: 'Институт развивался дальше, и число студентов росло.',
      opts: [
        { t: 'further', ok: true, why: '<i>further</i> — дальше в переносном смысле, о развитии.' },
        { t: 'farther', why: '<i>farther</i> говорят о расстоянии.' },
        { t: 'far', why: '<i>far</i> без сравнительной степени в этом значении не употребляется.' },
      ] },
    { s: 'The students organized many expeditions. ___, they built a design centre of their own.', ru: 'Студенты организовали много экспедиций. Более того, они создали собственный центр проектирования.',
      opts: [
        { t: 'Moreover', ok: true, why: '<i>moreover</i> добавляет ещё один довод в ту же сторону.' },
        { t: 'However', why: '<i>however</i> вводит противопоставление, а здесь его нет.' },
        { t: 'Instead', why: '<i>instead</i> означает «вместо этого», то есть отменяет предыдущее.' },
      ] },
  ],
  why: 'Служебные слова держат текст: <i>at first</i> открывает рассказ, <i>as</i> связывает одновременные процессы, <i>moreover</i> добавляет, <i>finally</i> закрывает.',
},

{
  id: 'u4-30a', unit: 'u4', src: '30 (а)', topic: 'история университета', type: 'sort',
  q: 'Разложите события по трём линиям жизни института.',
  cats: { grow: 'расширение университета', res: 'научная работа', soc: 'общественная жизнь студентов' },
  items: [
    { t: 'the faculty of economics appeared', c: 'grow' },
    { t: 'the faculty of marine electronics appeared', c: 'grow' },
    { t: 'the faculty of humanities appeared', c: 'grow' },
    { t: 'the institute became a university', c: 'grow' },
    { t: 'the academic council took up its work', c: 'res' },
    { t: 'the test tank began functioning', c: 'res' },
    { t: 'the computer centre started working', c: 'res' },
    { t: 'the ‘Lotsmanskaya Spring’ festival started', c: 'soc' },
    { t: 'the sailing expedition down the Ob took place', c: 'soc' },
    { t: 'the drama club gave its first performance', c: 'soc' },
  ],
  why: 'Новые факультеты и смена статуса — рост вуза; совет, бассейн и вычислительный центр — научная работа; фестиваль, экспедиции и театр — студенческая жизнь.',
},

{
  id: 'u4-30b', unit: 'u4', src: '30 (б)', topic: 'лексика юнита', type: 'fill',
  q: 'Впишите связующие слова: <i>at first, as, further, not only, but also, finally</i>.',
  items: [
    { s: '___, the institute had two faculties: naval architecture and marine engineering.', a: [['At first', 'First']],
      ru: 'Поначалу в институте было два факультета: кораблестроительный и машиностроительный.' },
    { s: '___ the institute grew, a third faculty appeared.', a: [['As']] },
    { s: 'The institute developed ___, and a faculty of humanities started work.', a: [['further']] },
    { s: 'Students got higher education ___ in shipbuilding, ___ in economics and law.', a: [['not only'], ['but also']] },
    { s: '___, in 1992, the institute became a university.', a: [['Finally']] },
  ],
  why: 'Связки выстраивают рассказ во времени: <i>at first</i> — начало, <i>as</i> — одновременность, <i>further</i> — продолжение, <i>finally</i> — итог.',
},

/* ================= SECTION F. неправильные глаголы и смешанные формы ================= */

{
  id: 'u4-31', unit: 'u4', src: '31', topic: 'Past Simple: неправильные глаголы', type: 'fill',
  q: 'Раскройте скобки, поставив глагол в Past Simple.',
  items: [
    { s: 'I ___ (leave) school four years ago and ___ (get) a place at our faculty.', a: [['left'], ['got']],
      ru: 'Я окончил школу четыре года назад и поступил на наш факультет.' },
    { s: 'We ___ (read) about the first test tank at the seminar yesterday.', a: [['read']] },
    { s: 'The lecturer ___ (not / give) us the results of the test.', a: [['didn’t give', 'did not give']] },
    { s: 'Krylov ___ (become) a member of the Academy in 1914.', a: [['became']] },
    { s: 'When ___ (you / begin) your diploma project?', a: [['did you begin']] },
    { s: 'Nina ___ (find) an old drawing in the archive and ___ (make) a copy of it.', a: [['found'], ['made']] },
    { s: 'Our group ___ (not / have) a laboratory class last Tuesday.', a: [['didn’t have', 'did not have']] },
    { s: 'The dean ___ (speak) to the first-year students in the assembly hall.', a: [['spoke']] },
  ],
  why: 'В утверждении ставится вторая форма неправильного глагола (<i>left, got, became</i>), а после <i>did / didn’t</i> он возвращается к начальной форме. Глагол <i>read</i> в прошедшем времени пишется так же, но читается /red/.',
},

{
  id: 'u4-32', unit: 'u4', src: '32', topic: 'вопросы в Past Simple', type: 'fill',
  q: 'Раскройте скобки, выбрав нужное время и форму. Одни предложения относятся к прошлому, другие — к настоящему.',
  items: [
    { s: 'As the university ___ (grow), it ___ (open) new laboratories.', a: [['grew'], ['opened']],
      ru: 'По мере того как университет рос, он открывал новые лаборатории.' },
    { s: '___ (the engineers / can / test) the model in 1935?', a: [['Could the engineers test']] },
    { s: 'Where ___ (your group / usually / work) with drawings?', a: [['does your group usually work']] },
    { s: 'Steel ___ (become) brittle when the temperature ___ (fall) below zero.', a: [['becomes'], ['falls']] },
    { s: 'Why ___ (he / be) absent from the seminar yesterday?', a: [['was he']] },
    { s: 'She ___ (can / read) German when she ___ (be) at school.', a: [['could read'], ['was']] },
    { s: 'He ___ (send) letters to two design bureaus, but ___ (not / receive) an answer.', a: [['sent'], ['didn’t receive', 'did not receive']] },
    { s: 'How ___ (you / find) this article about compass deviation?', a: [['did you find']] },
  ],
  why: 'Время подсказывают обстоятельства и соседние сказуемые: <i>in 1935, yesterday</i> — Past Simple, общее правило природы или привычка — Present Simple. Модальный <i>can</i> в прошедшем даёт <b>could</b> и обходится без <i>did</i>.',
},

/* ================= SECTION G. вопрос к подлежащему ================= */

{
  id: 'u4-33a', unit: 'u4', src: '33 (а)', topic: 'вопрос к подлежащему', type: 'choice',
  q: 'Выберите правильно построенный вопрос. Следите, к какому члену предложения он задан.',
  items: [
    { s: 'Marina attends lectures on ship theory. Вопрос к подлежащему: ___', ru: 'Кто ходит на лекции по теории корабля?',
      opts: [
        { t: 'Who attends lectures on ship theory?', ok: true, why: 'Вопрос к подлежащему сохраняет прямой порядок слов, а глагол стоит в третьем лице единственного числа.' },
        { t: 'Who does attend lectures on ship theory?', why: 'Вспомогательный <i>does</i> в вопросе к подлежащему не нужен.' },
        { t: 'What does Marina attend?', why: 'Это вопрос к дополнению: спрашивают не о человеке, а о предмете.' },
      ] },
    { s: 'Marina attends lectures on ship theory. Вопрос к дополнению: ___', ru: 'На какие лекции ходит Марина?',
      opts: [
        { t: 'What does Marina attend?', ok: true, why: 'Дополнение заменено словом <i>what</i>, поэтому нужен вспомогательный <i>does</i>.' },
        { t: 'What Marina attends?', why: 'Без вспомогательного глагола вопрос к дополнению не строится.' },
        { t: 'Who attends lectures on ship theory?', why: 'Это вопрос к подлежащему, а спрашивают о другом.' },
      ] },
    { s: 'Outstanding scientists made our university famous. ___ made it famous?', ru: 'Кто прославил наш университет?',
      opts: [
        { t: 'Who', ok: true, why: '<i>Who</i> занимает место подлежащего, и глагол остаётся в прошедшей форме.' },
        { t: 'Who did', why: 'Вспомогательный <i>did</i> лишний: он появляется только в вопросе к другим членам предложения.' },
        { t: 'Whom did', why: '<i>Whom</i> заменяет дополнение, а здесь спрашивают о деятеле.' },
      ] },
    { s: 'Boklevsky founded the department. What ___ Boklevsky found?', ru: 'Что основал Боклевский?',
      opts: [
        { t: 'did', ok: true, why: 'Вопрос к дополнению строится обычным образом: <i>did</i> + начальная форма.' },
        { t: 'does', why: 'Настоящее время не согласуется с рассказом о прошлом.' },
        { t: 'was', why: 'Формы <i>to be</i> вопрос со смысловым глаголом не образуют.' },
      ] },
    { s: 'The council started its work in 1935. ___ started its work in 1935?', ru: 'Что начало работу в 1935 году?',
      opts: [
        { t: 'What', ok: true, why: 'Подлежащее — не человек, поэтому вопрос к нему начинается с <i>what</i>.' },
        { t: 'What did', why: 'В вопросе к подлежащему вспомогательный глагол не ставится.' },
        { t: 'Who', why: '<i>Who</i> спрашивает о человеке, а совет — учреждение.' },
      ] },
    { s: 'The students opened a design centre in 1957. ___ did they open in 1957?', ru: 'Что открыли студенты в 1957 году?',
      opts: [
        { t: 'What', ok: true, why: 'Вопрос к дополнению: <i>what</i> + <i>did</i> + подлежащее + инфинитив.' },
        { t: 'Who', why: 'Речь о предмете, а не о человеке.' },
        { t: 'What did what', why: 'Такой формы в английском нет.' },
      ] },
  ],
  why: 'Если <i>who</i> или <i>what</i> занимает место подлежащего, порядок слов остаётся прямым и <i>do / does / did</i> не нужны; во всех остальных вопросах вспомогательный глагол обязателен.',
},

{
  id: 'u4-33b', unit: 'u4', src: '33 (б)', topic: 'вопрос к подлежащему', type: 'build',
  q: 'Соберите вопросы. Часть из них задана к подлежащему, часть — к другим членам предложения.',
  items: [
    { ru: 'Кто основал кораблестроительную кафедру?', a: 'Who founded the shipbuilding department?', extra: ['did'] },
    { ru: 'Что помогло оптимизировать форму корпуса?', a: 'What helped to optimize the hull shape?', extra: ['did'] },
    { ru: 'Кто организовал студенческий центр проектирования?', a: 'Who organized the student design centre?', extra: ['did'] },
    { ru: 'Что студенты организовали в 1957 году?', a: 'What did the students organize in 1957?' },
    { ru: 'Когда появился новый факультет?', a: 'When did the new faculty appear?' },
    { ru: 'В чём факультет готовит студентов?', a: 'What does the faculty train students in?' },
  ],
  why: 'В вопросах <i>Who founded…?</i> и <i>What helped…?</i> вопросительное слово само является подлежащим, поэтому блок <i>did</i> остаётся лишним; в остальных вопросах он обязателен.',
},

/* ================= SECTION H. числительные, месяцы, даты ================= */

{
  id: 'u4-34a', unit: 'u4', src: '34 (а)', topic: 'порядковые числительные и даты', type: 'match',
  q: 'Соотнесите количественное числительное с порядковым.',
  pairs: [
    ['one', 'first'],
    ['two', 'second'],
    ['three', 'third'],
    ['five', 'fifth'],
    ['eight', 'eighth'],
    ['nine', 'ninth'],
    ['twelve', 'twelfth'],
    ['twenty', 'twentieth'],
    ['ninety', 'ninetieth'],
  ],
  why: 'Большинство порядковых числительных получают суффикс <b>-th</b>; отдельно запоминаются <i>first, second, third</i> и написание <i>fifth, eighth, ninth, twelfth</i>, а у десятков <i>-ty</i> переходит в <i>-tieth</i>.',
},

{
  id: 'u4-34b', unit: 'u4', src: '34 (б)', topic: 'порядковые числительные и даты', type: 'fill',
  q: 'Впишите порядковое числительное словами.',
  items: [
    { s: 'the ___ picture', a: [['eighth']], ru: 'восьмая иллюстрация' },
    { s: 'the ___ century', a: [['twenty-first', 'twenty first']], ru: 'двадцать первый век' },
    { s: 'the ___ millennium', a: [['third']], ru: 'третье тысячелетие' },
    { s: 'the ___ kilometre', a: [['sixtieth']], ru: 'шестидесятый километр' },
    { s: 'the ___ exam', a: [['fifth']], ru: 'пятый экзамен' },
    { s: 'the ___ student', a: [['ninth']], ru: 'девятый студент' },
    { s: 'the ___ page', a: [['forty-seventh', 'forty seventh']], ru: 'сорок седьмая страница' },
    { s: 'the ___ day', a: [['twenty-second', 'twenty second']], ru: 'двадцать второй день' },
  ],
  why: 'Порядковое числительное почти всегда идёт с артиклем <i>the</i>. В составных числительных окончание <i>-th</i> получает только последнее слово: <i>twenty-first</i>, <i>forty-seventh</i>.',
},

{
  id: 'u4-35', unit: 'u4', src: '35', topic: 'лексика юнита', type: 'sort',
  q: 'Разложите месяцы по временам года.',
  cats: { spring: 'spring', summer: 'summer', autumn: 'autumn', winter: 'winter' },
  items: [
    { t: 'March', c: 'spring' },
    { t: 'April', c: 'spring' },
    { t: 'May', c: 'spring' },
    { t: 'June', c: 'summer' },
    { t: 'July', c: 'summer' },
    { t: 'August', c: 'summer' },
    { t: 'September', c: 'autumn' },
    { t: 'October', c: 'autumn' },
    { t: 'November', c: 'autumn' },
    { t: 'December', c: 'winter' },
    { t: 'January', c: 'winter' },
    { t: 'February', c: 'winter' },
  ],
  why: 'Названия месяцев в английском всегда пишутся с прописной буквы, а перед ними ставится предлог <i>in</i>: <i>in September</i>.',
},

{
  id: 'u4-36a', unit: 'u4', src: '36 (а)', topic: 'порядковые числительные и даты', type: 'fill',
  q: 'Запишите словами, как читается дата.',
  items: [
    { s: '1605 — ___', a: [['sixteen oh five', 'sixteen o five']], ru: 'шестнадцать ноль пять' },
    { s: '1800 — ___', a: [['eighteen hundred']] },
    { s: '1902 — ___', a: [['nineteen oh two', 'nineteen o two']] },
    { s: '1945 — ___', a: [['nineteen forty-five', 'nineteen forty five']] },
    { s: '2003 — ___', a: [['two thousand and three', 'two thousand three']] },
    { s: '2015 — ___', a: [['twenty fifteen', 'two thousand and fifteen', 'two thousand fifteen']] },
    { s: '05 / 12 / 1978 — ___', a: [['the fifth of December, nineteen seventy-eight',
      'the fifth of December nineteen seventy-eight',
      'December the fifth, nineteen seventy-eight',
      'December the fifth nineteen seventy-eight']] },
  ],
  why: 'Год читается двумя двузначными числами; ноль в середине произносится как буква <i>o</i>, круглые сотни — словом <i>hundred</i>, а годы после двух тысяч читаются целиком.',
},

{
  id: 'u4-36b', unit: 'u4', src: '36 (б)', topic: 'порядковые числительные и даты', type: 'build',
  q: 'Соберите предложения с датами.',
  items: [
    { ru: 'Я родился седьмого мая две тысячи пятого года.', a: 'I was born on the seventh of May, two thousand and five.' },
    { ru: 'Университет открыл первый вычислительный центр в 1961 году.', a: 'The university opened its first computer centre in nineteen sixty-one.' },
    { ru: 'Опытовый бассейн заработал в 1940 году.', a: 'The test tank started work in nineteen forty.' },
    { ru: 'Крылов получил золотую медаль в 1898 году.', a: 'Krylov got the gold medal in eighteen ninety-eight.' },
  ],
  why: 'Перед полной датой ставится предлог <i>on</i> (<i>on the seventh of May</i>), перед одним годом — <i>in</i> (<i>in nineteen forty</i>).',
},

/* ================= SECTION I. синонимы и текст о Крылове ================= */

{
  id: 'u4-37', unit: 'u4', src: '37', topic: 'лексика юнита', type: 'match',
  q: 'Подберите к глаголу синонимичное выражение. Обратите внимание на значение в скобках.',
  pairs: [
    ['apply (for a post)', 'ask for a job'],
    ['apply (a method)', 'use'],
    ['cover (an area)', 'be on top of'],
    ['cover (topics)', 'include'],
    ['create', 'make'],
    ['solve', 'find an answer to'],
  ],
  why: 'Один и тот же глагол меняет значение вместе с дополнением: <i>apply for a post</i> — подавать заявление, <i>apply a method</i> — применять способ.',
},

{
  id: 'u4-38a', unit: 'u4', src: '38 (а)', topic: 'история университета', type: 'order',
  q: 'Расставьте события жизни А. Н. Крылова по порядку.',
  lines: [
    'Krylov was born in a village on the Volga in 1863.',
    'In 1878 he entered the Maritime High School in Saint Petersburg.',
    'He graduated from the Maritime Academy in 1890.',
    'In 1898 he got the gold medal of the Royal Institution of Naval Architects.',
    'In 1900 he became the head of the naval test tank.',
    'In 1914 the Academy of Sciences elected him its member.',
    'He died in Leningrad in 1945.',
  ],
  why: 'Биография излагается в Past Simple, а даты служат опорой для порядка событий.',
},

{
  id: 'u4-38b', unit: 'u4', src: '38 (в)', topic: 'история университета', type: 'choice',
  q: 'Завершите предложения о Крылове верным вариантом.',
  items: [
    { s: 'Krylov started his shipbuilding education ___.', ru: 'Учиться кораблестроению Крылов начал в Петербурге.',
      opts: [
        { t: 'in Saint Petersburg', ok: true, why: 'В 1878 году он поступил в Морское училище в Петербурге.' },
        { t: 'in Sevastopol', why: 'В Севастополе он лишь впервые увидел корабли и заинтересовался морем.' },
        { t: 'by the Volga', why: 'На Волге прошло детство, но учиться он уехал в столицу.' },
      ] },
    { s: 'He returned to the problem of compass deviation ___.', ru: 'К девиации компаса он возвращался не один раз.',
      opts: [
        { t: 'more than once during his career', ok: true, why: 'К этой теме он возвращался и много лет спустя после первых работ в гидрографии.' },
        { t: 'only while he studied at the Academy', why: 'В Академии он занимался прежде всего математикой и теорией корабля.' },
        { t: 'only after 1917', why: 'Первые работы по девиации появились гораздо раньше.' },
      ] },
    { s: 'While he studied at the Maritime Academy, he ___.', ru: 'В Морской академии он учился у известного математика.',
      opts: [
        { t: 'learned much from a famous mathematician', ok: true, why: 'Его наставником был А. Н. Коркин, знаток дифференциальных уравнений.' },
        { t: 'taught mathematics to his teachers', why: 'Преподавать он начал позже, уже после выпуска.' },
        { t: 'worked at the test tank', why: 'Бассейн он возглавил только в 1900 году.' },
      ] },
    { s: 'Under Krylov the naval test tank became ___.', ru: 'При Крылове опытовый бассейн стал ядром большого научного учреждения.',
      opts: [
        { t: 'the centre of a large research institution', ok: true, why: 'При бассейне появились физико-химическая, механическая и электротехническая лаборатории.' },
        { t: 'a small teaching laboratory', why: 'Лаборатории он, наоборот, создавал, и работа шла в полную силу.' },
        { t: 'a place for compass tests only', why: 'Кроме девиации там изучали плавучесть, остойчивость, качку и вибрацию.' },
      ] },
    { s: 'After the revolution he went abroad ___.', ru: 'После революции он поехал за границу, чтобы восстановить связи с учёными.',
      opts: [
        { t: 'to renew contacts with foreign scientists', ok: true, why: 'Он был среди первых, кто восстанавливал научные связи с Западом.' },
        { t: 'to have a holiday', why: 'Поездки были рабочими, а не отпуском.' },
        { t: 'to leave Russia for ever', why: 'Он вернулся и возглавил институт Академии наук.' },
      ] },
    { s: 'Krylov himself called shipbuilding ___.', ru: 'Сам Крылов называл кораблестроение приложением математики к морским задачам.',
      opts: [
        { t: 'mathematics applied to maritime problems', ok: true, why: 'Так он сам определял своё занятие.' },
        { t: 'research on materials only', why: 'Материалы были лишь одним из направлений его лабораторий.' },
        { t: 'a kind of art', why: 'Он подчёркивал расчёт, а не художественную сторону дела.' },
      ] },
  ],
  why: 'Ответ выбирается по фактам текста; в каждом варианте есть правдоподобная деталь, поэтому проверять нужно всё предложение целиком.',
},

/* ================= SECTION J. правила чтения ================= */

{
  id: 'u4-39a', unit: 'u4', src: '39 (а)', topic: 'правила чтения', type: 'sort',
  q: 'Разложите слова по чтению буквы <i>u</i> и буквосочетаний <i>oo, ew</i>.',
  cats: { ju: '/juː/ — cube', a: '/ʌ/ — cup', uu: '/uː/ — food', u: '/ʊ/ — book' },
  items: [
    { t: 'cube', c: 'ju' },
    { t: 'tune', c: 'ju' },
    { t: 'student', c: 'ju' },
    { t: 'fume', c: 'ju' },
    { t: 'huge', c: 'ju' },
    { t: 'but', c: 'a' },
    { t: 'nut', c: 'a' },
    { t: 'hull', c: 'a' },
    { t: 'hum', c: 'a' },
    { t: 'rule', c: 'uu' },
    { t: 'blue', c: 'uu' },
    { t: 'tool', c: 'uu' },
    { t: 'choose', c: 'uu' },
    { t: 'smooth', c: 'uu' },
    { t: 'put', c: 'u' },
    { t: 'hook', c: 'u' },
    { t: 'wood', c: 'u' },
    { t: 'woman', c: 'u' },
  ],
  why: 'В открытом слоге <i>u</i> читается /juː/, в закрытом — /ʌ/; после <i>r</i> и <i>l</i> остаётся /uː/. Сочетание <i>oo</i> обычно даёт /uː/, но перед <i>k</i> и в словах <i>good, wood, woman</i> — краткое /ʊ/.',
},

{
  id: 'u4-39b', unit: 'u4', src: '39 (б)', topic: 'правила чтения', type: 'sort',
  q: 'Разложите слова по чтению буквосочетания <i>ch</i>.',
  cats: { tsh: '/tʃ/ — teacher', k: '/k/ — technical', sh: '/ʃ/ — machine' },
  items: [
    { t: 'teacher', c: 'tsh' },
    { t: 'watch', c: 'tsh' },
    { t: 'research', c: 'tsh' },
    { t: 'chance', c: 'tsh' },
    { t: 'much', c: 'tsh' },
    { t: 'choose', c: 'tsh' },
    { t: 'which', c: 'tsh' },
    { t: 'Bachelor', c: 'tsh' },
    { t: 'technical', c: 'k' },
    { t: 'technology', c: 'k' },
    { t: 'mechanics', c: 'k' },
    { t: 'chemistry', c: 'k' },
    { t: 'character', c: 'k' },
    { t: 'architect', c: 'k' },
    { t: 'machine', c: 'sh' },
    { t: 'machinery', c: 'sh' },
  ],
  why: 'Обычное чтение <i>ch</i> — /tʃ/. В словах греческого происхождения (<i>technical, mechanics, chemistry, architect</i>) оно даёт /k/, а во французских заимствованиях (<i>machine</i>) — /ʃ/.',
},

/* ================= SECTION K. разговор о выходных ================= */

{
  id: 'u4-40', unit: 'u4', src: '40', topic: 'Past Simple: неправильные глаголы', type: 'fill',
  q: 'Раскройте скобки, поставив глагол в Past Simple: <i>be, buy, go, play, revise, see, stay, walk, watch</i>.',
  items: [
    { s: 'I ___ (go) to the cinema on Friday and ___ (see) a good film.', a: [['went'], ['saw']],
      ru: 'В пятницу я ходил в кино и посмотрел хороший фильм.' },
    { s: 'On Sunday morning I ___ (play) football with my group.', a: [['played']] },
    { s: 'We ___ (walk) round the old part of the city.', a: [['walked']] },
    { s: 'I ___ (be) really ill, so I ___ (stay) in bed all weekend.', a: [['was'], ['stayed']] },
    { s: 'I ___ (watch) a programme about icebreakers last night.', a: [['watched']] },
    { s: 'I ___ (stay) at home and ___ (revise) for the exam in materials science.', a: [['stayed'], ['revised']] },
    { s: 'On Saturday I ___ (go) shopping and ___ (buy) a new drawing set.', a: [['went'], ['bought']] },
  ],
  why: 'В одном рассказе соседствуют правильные глаголы с окончанием <i>-ed</i> (<i>played, walked, revised</i>) и неправильные со своей формой (<i>went, saw, was, bought</i>).',
},

{
  id: 'u4-41', unit: 'u4', src: '41', topic: 'речевой этикет', type: 'dialog',
  q: 'Разговор о прошедших выходных. Выберите реплику, уместную по смыслу и по времени глагола.',
  turns: [
    { who: 'Olga', t: 'Hi, Denis! Did you have a nice weekend?' },
    { who: 'Denis', opts: [
      { t: 'No, not really.', ok: true, why: 'Дальше собеседница спрашивает, что случилось, — значит выходные не удались.' },
      { t: 'Yes, it was wonderful.', why: 'После такого ответа спрашивают «What did you do?», а не «What happened?».' },
      { t: 'How do you do?', why: 'Это формула первого знакомства, а не ответ о выходных.' },
    ] },
    { who: 'Olga', t: 'Oh dear. What happened?' },
    { who: 'Denis', opts: [
      { t: 'I was ill. I stayed in bed all weekend.', ok: true, why: 'Рассказ о прошедших выходных ведётся в Past Simple.' },
      { t: 'I am ill. I stay in bed all weekend.', why: 'Настоящее время не отвечает на вопрос о том, что случилось.' },
      { t: 'I will be ill next weekend.', why: 'Будущее время меняет смысл разговора.' },
    ] },
    { who: 'Olga', opts: [
      { t: 'What a shame! Are you feeling better now?', ok: true, why: 'Сочувствие и вопрос о самочувствии — обычная реакция на такую новость.' },
      { t: 'It sounds great.', why: 'Так отзываются об удачных выходных.' },
      { t: 'Nothing special.', why: 'Это ответ о собственных выходных, а не реакция на чужой рассказ.' },
    ] },
    { who: 'Denis', t: 'A bit better, thanks. And what about you?' },
    { who: 'Olga', opts: [
      { t: 'I went to Vyborg with my group. It was great.', ok: true, why: 'Ответ на вопрос о выходных даётся в прошедшем времени.' },
      { t: 'I go to Vyborg with my group every weekend.', why: 'Present Simple рассказывает о привычке, а спрашивали о конкретных выходных.' },
      { t: 'What a shame!', why: 'Эта фраза выражает сочувствие, а не рассказ о себе.' },
    ] },
    { who: 'Denis', t: 'It sounds great.' },
  ],
  why: 'Разговор о выходных держится на нескольких готовых формулах: <i>Did you have a nice weekend?</i> — <i>Nothing special. / No, not really.</i> — <i>What a shame! / It sounds great.</i> Сам рассказ идёт в Past Simple.',
},

);
