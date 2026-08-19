/* Задания к странице «Порядок слов и Present Simple» (раздел «С нуля», z-g3).
 *
 * Три темы: жёсткий порядок слов в английском предложении; настоящее простое
 * время (формы, отрицание, вопрос, краткий ответ); вопросы со словами who,
 * what, where, when, how. Из грамматики используется только то, что уже
 * разобрано на страницах z-g1 и z-g2: местоимения, глагол be, артикли,
 * множественное число, there is/are. Прошедшего времени и модальных глаголов
 * здесь нет — они идут позже.
 * Схема записи и типы описаны в assets/exercises.js.
 */
'use strict';
(window.TASKS = window.TASKS || []).push(

/* ---------- ТЕМА 1: порядок слов ---------- */
{
  id: 'z-g3-1', unit: 'z-g3', src: '1', topic: 'порядок слов', type: 'choice',
  q: 'Выберите предложение с правильным порядком слов. Русский вариант дан для смысла: по-русски слова можно переставлять, по-английски нельзя.',
  items: [
    { s: 'Студент читает книгу.', opts: [
      { t: 'The student reads a book.', ok: true, why: 'Сначала тот, кто действует (<i>the student</i>), потом действие (<i>reads</i>), потом предмет действия (<i>a book</i>). Это единственный порядок для утверждения.' },
      { t: 'Reads the student a book.', why: 'Глагол вышел на первое место — так строится вопрос с <i>be</i>, а не утверждение. Утверждение всегда начинается с того, кто действует.' },
      { t: 'A book reads the student.', why: 'Слова переставлены, и смысл перевернулся: получилось «книга читает студента». В английском место слова и есть его роль в предложении.' },
    ] },
    { s: 'Мы смотрим фильмы дома по вечерам.', opts: [
      { t: 'We watch films at home in the evening.', ok: true, why: 'Порядок такой: кто — что делает — что — где — когда. Место идёт раньше времени.' },
      { t: 'We watch in the evening films at home.', why: 'Между глаголом и его дополнением ничего не вставляют: после <i>watch</i> сразу должно идти <i>films</i>.' },
      { t: 'We at home watch films in the evening.', why: 'Обстоятельство места не встаёт между тем, кто действует, и глаголом. По-русски «мы дома смотрим» звучит нормально, по-английски — нет.' },
    ] },
    { s: 'Мой брат работает на заводе.', opts: [
      { t: 'My brother works at a factory.', ok: true, why: 'Глагол стоит сразу за подлежащим, а обстоятельство места — в конце.' },
      { t: 'My brother at a factory works.', why: 'Глагол отодвинут в конец. По-русски так можно, по-английски глагол идёт сразу после того, кто действует.' },
      { t: 'Works my brother at a factory.', why: 'Это порядок вопроса, а не утверждения; да и вопрос в настоящем простом времени строится не так, а с <i>does</i>.' },
    ] },
    { s: 'Анна помогает матери каждый день.', opts: [
      { t: 'Anna helps her mother every day.', ok: true, why: 'Кто — что делает — кого — когда. Обстоятельство времени стоит в самом конце.' },
      { t: 'Anna every day helps her mother.', why: 'Обстоятельство времени влезло между подлежащим и глаголом. Его место — в конце предложения.' },
      { t: 'Helps Anna her mother every day.', why: 'Утверждение не начинают с глагола: первым идёт тот, кто действует.' },
    ] },
  ],
  why: 'В русском языке роль слова показывает окончание, поэтому «Книгу читает студент» и «Студент читает книгу» — одно и то же. В английском окончаний почти нет, и роль слова показывает только его место. Схема утверждения жёсткая: <b>кто — что делает — что или кого — где — когда</b>.',
},
{
  id: 'z-g3-2', unit: 'z-g3', src: '2', topic: 'порядок слов', type: 'sort',
  q: 'Разложите обстоятельства на две группы. Это нужно, чтобы правильно поставить их в конце предложения: сначала место, потом время.',
  cats: { pl: 'где (место)', tm: 'когда (время)' },
  items: [
    { t: 'at home', c: 'pl' },
    { t: 'in the park', c: 'pl' },
    { t: 'at the university', c: 'pl' },
    { t: 'every day', c: 'tm' },
    { t: 'in the morning', c: 'tm' },
    { t: 'on Monday', c: 'tm' },
  ],
  why: 'В конце английского предложения место идёт раньше времени: <i>We play football <b>in the park</b> <b>on Monday</b></i>. Если поставить наоборот, предложение не станет непонятным, но прозвучит не по-английски. Проверка простая: «где?» — раньше, «когда?» — позже.',
},
{
  id: 'z-g3-3', unit: 'z-g3', src: '3', topic: 'порядок слов', type: 'choice',
  q: 'Выберите предложение, в котором слово частотности (always, usually, often, sometimes, never) стоит на своём месте.',
  items: [
    { s: 'Я всегда встаю в семь.', opts: [
      { t: 'I always get up at seven.', ok: true, why: 'Слово частотности стоит перед смысловым глаголом: <i>always get up</i>.' },
      { t: 'I get up always at seven.', why: 'После глагола такие слова не ставят: место у них перед глаголом.' },
      { t: 'I am always get up at seven.', why: 'Здесь два глагола сразу — <i>am</i> и <i>get up</i>. Глагол <i>be</i> в настоящем простом времени со смысловым глаголом не употребляется.' },
    ] },
    { s: 'Он никогда не опаздывает.', opts: [
      { t: 'He is never late.', ok: true, why: 'С глаголом <i>be</i> порядок обратный: слово частотности идёт <b>после</b> него — <i>is never</i>.' },
      { t: 'He never is late.', why: 'Перед глаголом такие слова стоят только со смысловым глаголом. После <i>be</i> — наоборот: <i>is never</i>.' },
      { t: 'He is not never late.', why: 'Слово <i>never</i> само по себе значит «никогда не», второе отрицание не нужно: получилось «он не никогда не опаздывает».' },
    ] },
    { s: 'Мы часто говорим по-английски.', opts: [
      { t: 'We often speak English.', ok: true, why: 'Слово <i>often</i> стоит между подлежащим и смысловым глаголом.' },
      { t: 'We speak often English.', why: 'Между глаголом и дополнением ничего не вставляют: после <i>speak</i> должно идти <i>English</i>.' },
      { t: 'We are often speak English.', why: 'Лишний глагол <i>are</i>: в предложении уже есть смысловой глагол <i>speak</i>.' },
    ] },
    { s: 'Она обычно дома по вечерам.', opts: [
      { t: 'She is usually at home in the evening.', ok: true, why: 'Смыслового глагола здесь нет, есть только <i>be</i>, поэтому <i>usually</i> стоит после <i>is</i>.' },
      { t: 'She usually is at home in the evening.', why: 'После глагола <i>be</i> слово частотности идёт следом за ним, а не перед ним.' },
      { t: 'She usually at home in the evening.', why: 'Потерян глагол <i>is</i>. Английское предложение без глагола не строится, даже если по-русски его не слышно.' },
    ] },
  ],
  why: 'Правило в одну строку: слова <i>always, usually, often, sometimes, never</i> стоят <b>перед</b> смысловым глаголом, но <b>после</b> глагола <i>be</i>. Сравните: <i>I often work at home</i> — и <i>I am often at home</i>.',
},
{
  id: 'z-g3-4', unit: 'z-g3', src: '4', topic: 'порядок слов', type: 'build',
  q: 'Соберите предложение из слов. Следите за схемой: кто — что делает — что или кого — где — когда.',
  items: [
    { ru: 'Я читаю книги каждый день.', a: 'I read books every day.', extra: ['reads'] },
    { ru: 'Мой отец работает на заводе.', a: 'My father works at a factory.', extra: ['work'] },
    { ru: 'Мы играем в футбол в парке по воскресеньям.', a: 'We play football in the park on Sunday.' },
    { ru: 'Она всегда пьёт чай утром.', a: 'She always drinks tea in the morning.', extra: ['drink'] },
    { ru: 'Моя мама готовит ужин на кухне.', a: 'My mother cooks dinner in the kitchen.', extra: ['cook'] },
  ],
  why: 'Собирая предложение, идите по схеме слева направо и не переставляйте куски местами. Дополнение стоит сразу за глаголом, потом место, потом время: <i>We play football in the park on Sunday</i>.',
},

/* ---------- ТЕМА 2: Present Simple ---------- */
{
  id: 'z-g3-5', unit: 'z-g3', src: '5', topic: 'Present Simple', type: 'fill',
  q: 'Впишите глагол в нужной форме. Начальная форма дана в подсказке.',
  items: [
    { s: 'My brother ___ at a factory.', a: [['works']], ru: 'work — мой брат, одно лицо' },
    { s: 'I ___ in Saint Petersburg.', a: [['live']], ru: 'live' },
    { s: 'She ___ English at the university.', a: [['studies']], ru: 'study' },
    { s: 'They ___ films in the evening.', a: [['watch']], ru: 'watch' },
    { s: 'My father ___ to work at eight.', a: [['goes']], ru: 'go' },
    { s: 'We ___ tea in the morning.', a: [['drink']], ru: 'drink' },
  ],
  why: 'Форма меняется только в одном случае — когда речь об одном человеке или предмете (<i>he, she, it</i> и любое слово, которое ими заменяется). Тогда к глаголу добавляется <b>-s</b>: <i>he works, she studies, my father goes</i>. С <i>I, you, we, they</i> глагол остаётся в начальной форме.',
},
{
  id: 'z-g3-6', unit: 'z-g3', src: '6', topic: 'Present Simple', type: 'sort',
  q: 'Разложите глаголы по способу образования формы для he, she, it.',
  cats: { s: 'просто + -s', es: '+ -es', ies: 'согласная + y → -ies' },
  items: [
    { t: 'work', c: 's' },
    { t: 'live', c: 's' },
    { t: 'watch', c: 'es' },
    { t: 'go', c: 'es' },
    { t: 'study', c: 'ies' },
    { t: 'fly', c: 'ies' },
  ],
  why: 'Обычное окончание — <b>-s</b>: <i>works, lives</i>. После шипящих и свистящих (<i>-s, -ss, -sh, -ch, -x</i>) и после <i>-o</i> пишется <b>-es</b>: <i>watches, goes, does</i>. Если перед <i>y</i> стоит согласная, <i>y</i> переходит в <i>i</i>: <i>study → studies, fly → flies</i>. А вот после гласной <i>y</i> сохраняется: <i>play → plays</i>.',
},
{
  id: 'z-g3-7', unit: 'z-g3', src: '7', topic: 'Present Simple', type: 'choice',
  q: 'Выберите правильное отрицание или вопрос.',
  items: [
    { s: 'Он не пьёт кофе.', opts: [
      { t: 'He doesn’t drink coffee.', ok: true, why: 'Для <i>he, she, it</i> берётся <i>doesn’t</i>, а сам глагол стоит в начальной форме.' },
      { t: 'He doesn’t drinks coffee.', why: 'Окончание <i>-s</i> уже ушло в <i>doesn’t</i>, у глагола его быть не может. Дважды одно и то же не показывают.' },
      { t: 'He don’t drink coffee.', why: 'Форма <i>don’t</i> — для <i>I, you, we, they</i>. Об одном человеке говорят <i>doesn’t</i>.' },
    ] },
    { s: 'Ты говоришь по-английски?', opts: [
      { t: 'Do you speak English?', ok: true, why: 'Вопрос начинается с <i>do</i>, дальше идёт подлежащее и глагол в начальной форме.' },
      { t: 'Do you speaks English?', why: 'Окончание <i>-s</i> в этой схеме не ставится, да и с <i>you</i> его не бывает вовсе.' },
      { t: 'Are you speak English?', why: 'Глагол <i>be</i> и смысловой глагол вместе не употребляются. Вопрос строится с <i>do</i>: <i>Do you speak…?</i>' },
    ] },
    { s: 'Твоя сестра живёт в Москве?', opts: [
      { t: 'Does your sister live in Moscow?', ok: true, why: 'Об одном человеке — <i>does</i>, а глагол после него в начальной форме: <i>live</i>.' },
      { t: 'Does your sister lives in Moscow?', why: 'После <i>does</i> окончание <i>-s</i> у глагола исчезает: <i>Does she live…?</i>' },
      { t: 'Do your sister live in Moscow?', why: '<i>Your sister</i> — это «она», значит нужен <i>does</i>, а не <i>do</i>.' },
    ] },
    { s: 'Мы не работаем по воскресеньям.', opts: [
      { t: 'We don’t work on Sunday.', ok: true, why: 'С <i>we</i> отрицание строится через <i>don’t</i> и начальную форму глагола.' },
      { t: 'We doesn’t work on Sunday.', why: 'Форма <i>doesn’t</i> — только для <i>he, she, it</i>.' },
      { t: 'We not work on Sunday.', why: 'Одного <i>not</i> мало: со смысловым глаголом нужен помощник — <i>do not</i> или <i>don’t</i>.' },
    ] },
  ],
  why: 'Отрицание и вопрос в настоящем простом времени строятся с помощью <i>do</i> и <i>does</i>. Окончание <i>-s</i> при этом переходит к помощнику, поэтому у самого глагола его нет: <i>He works</i>, но <i>He doesn’t work</i> и <i>Does he work?</i>',
},
{
  id: 'z-g3-8', unit: 'z-g3', src: '8', topic: 'Present Simple', type: 'build',
  q: 'Соберите отрицание или вопрос. Среди слов есть лишние — они и есть типичные ошибки.',
  items: [
    { ru: 'Мой брат не любит чай.', a: 'My brother doesn’t like tea.', extra: ['don’t', 'likes'] },
    { ru: 'Ты работаешь в городе?', a: 'Do you work in the city?', extra: ['are'] },
    { ru: 'Она не смотрит телевизор утром.', a: 'She doesn’t watch TV in the morning.', extra: ['watches'] },
    { ru: 'Твои родители живут в Санкт-Петербурге?', a: 'Do your parents live in Saint Petersburg?', extra: ['does'] },
  ],
  why: 'Схема одна и та же: <i>do / does</i> + подлежащее + глагол в начальной форме. Лишние слова в задании — самые частые ошибки: <i>likes</i> после <i>doesn’t</i>, <i>are</i> вместо <i>do</i>, <i>does</i> при подлежащем во множественном числе.',
},

/* ---------- ТЕМА 3: вопросы со словами who, what, where, when, how ---------- */
{
  id: 'z-g3-9', unit: 'z-g3', src: '9', topic: 'вопросительные слова', type: 'match',
  q: 'Соотнесите вопросительное слово с тем, о чём оно спрашивает.',
  pairs: [
    ['what', 'что, какой'],
    ['who', 'кто'],
    ['where', 'где, куда'],
    ['when', 'когда'],
    ['why', 'почему'],
    ['how', 'как, каким образом'],
    ['how old', 'сколько лет'],
  ],
  why: 'Все эти слова стоят в самом начале вопроса. Запомните пару ловушек: возраст спрашивают через <i>how old</i> (буквально «насколько стар»), а «как тебя зовут» — это <i>what</i>, а не <i>how</i>: <i>What is your name?</i>',
},
{
  id: 'z-g3-10', unit: 'z-g3', src: '10', topic: 'вопросительные слова', type: 'fill',
  q: 'Впишите пропущенное слово: вопросительное слово или помощника do / does.',
  items: [
    { s: '___ do you live? — I live in Saint Petersburg.', a: [['Where']], ru: 'спрашиваем про место' },
    { s: '___ does your lesson begin? — At nine o’clock.', a: [['When', 'What time']], ru: 'спрашиваем про время' },
    { s: 'Where ___ your brother work? — At a factory.', a: [['does']], ru: 'ваш брат — это «он»' },
    { s: 'What ___ you do in the evening? — I read books.', a: [['do']], ru: 'обращаемся к собеседнику' },
    { s: '___ lives in this house? — My friend Ivan.', a: [['Who']], ru: 'спрашиваем про человека, и это вопрос к подлежащему' },
  ],
  why: 'Обычная схема: вопросительное слово + <i>do / does</i> + подлежащее + глагол. Последняя строка — исключение: если спрашивают про самого действующего (<i>Who lives here?</i>), помощник не нужен, а глагол получает окончание <b>-s</b>.',
},
{
  id: 'z-g3-11', unit: 'z-g3', src: '11', topic: 'вопросительные слова', type: 'choice',
  q: 'Выберите правильно построенный вопрос.',
  items: [
    { s: 'Где работает твой отец?', opts: [
      { t: 'Where does your father work?', ok: true, why: 'Вопросительное слово, помощник <i>does</i>, подлежащее, глагол в начальной форме.' },
      { t: 'Where does your father works?', why: 'После <i>does</i> окончание <i>-s</i> у глагола исчезает.' },
      { t: 'Where your father works?', why: 'Пропущен помощник <i>does</i>. Без него получается утверждение, а не вопрос.' },
    ] },
    { s: 'Кто живёт в этом доме?', opts: [
      { t: 'Who lives in this house?', ok: true, why: 'Это вопрос к подлежащему: <i>who</i> само занимает место действующего, поэтому помощник не нужен, а глагол стоит с <i>-s</i>.' },
      { t: 'Who does live in this house?', why: 'Помощник здесь лишний: спрашивают как раз о том, кто действует.' },
      { t: 'Who do lives in this house?', why: 'Сразу две ошибки: лишний помощник и окончание <i>-s</i> после него.' },
    ] },
    { s: 'Как тебя зовут?', opts: [
      { t: 'What is your name?', ok: true, why: 'Об имени спрашивают через <i>what</i> и глагол <i>be</i>: буквально «какое ваше имя».' },
      { t: 'How is your name?', why: 'Прямой перевод русского «как»; по-английски это звучит как «каким образом ваше имя».' },
      { t: 'What do you name?', why: 'Помощник <i>do</i> здесь не нужен: в предложении нет смыслового глагола, есть только <i>be</i>.' },
    ] },
    { s: 'Кем ты работаешь?', opts: [
      { t: 'What do you do?', ok: true, why: 'Готовый вопрос о профессии. Первое <i>do</i> — помощник, второе — смысловой глагол «делать».' },
      { t: 'What do you?', why: 'Потерян смысловой глагол: остался один помощник.' },
      { t: 'What are you do?', why: 'Глагол <i>be</i> и помощник <i>do</i> вместе не ставятся. Или <i>What are you?</i>, или <i>What do you do?</i>' },
    ] },
  ],
  why: 'Различайте два вопроса: <i>What is your name?</i> — про имя, глагол <i>be</i>, помощник не нужен; <i>What do you do?</i> — про занятие, обязателен помощник <i>do</i> и смысловой глагол. И помните про вопрос к подлежащему: <i>Who lives here?</i> — без <i>does</i>, зато с <i>-s</i>.',
},
{
  id: 'z-g3-12', unit: 'z-g3', src: '12', topic: 'вопросительные слова', type: 'dialog',
  q: 'Дополните разговор двух знакомых о работе и учёбе: для каждой реплики выберите подходящий ответ.',
  turns: [
    { who: 'Anna', t: 'Hello, Ben! Where do you work?' },
    { who: 'Ben', opts: [
      { t: 'I work at a big factory.', ok: true, why: 'С <i>I</i> глагол стоит в начальной форме, без окончания.' },
      { t: 'I works at a big factory.', why: 'Окончание <i>-s</i> бывает только у <i>he, she, it</i>.' },
      { t: 'I am work at a big factory.', why: 'Два глагола сразу: <i>am</i> и <i>work</i>. В настоящем простом времени <i>be</i> со смысловым глаголом не ставится.' },
    ] },
    { who: 'Anna', t: 'And when do you get up?' },
    { who: 'Ben', opts: [
      { t: 'I usually get up at six o’clock.', ok: true, why: 'Слово <i>usually</i> стоит перед смысловым глаголом.' },
      { t: 'I get up usually at six o’clock.', why: 'После глагола такие слова не ставят: их место перед ним.' },
      { t: 'I am usually get up at six o’clock.', why: 'Лишний глагол <i>am</i>: смысловой глагол в предложении уже есть.' },
    ] },
    { who: 'Ben', t: 'And you? Do you work in the city?' },
    { who: 'Anna', opts: [
      { t: 'No, I don’t. I am a student.', ok: true, why: 'Краткий ответ повторяет помощника из вопроса: спросили <i>Do you…?</i> — отвечают <i>I don’t</i>.' },
      { t: 'No, I am not. I am a student.', why: 'Ответ построен на глаголе <i>be</i>, а вопрос был с <i>do</i>. Так отвечают на <i>Are you…?</i>' },
      { t: 'No, I doesn’t. I am a student.', why: 'Форма <i>doesn’t</i> — только для <i>he, she, it</i>; с <i>I</i> нужен <i>don’t</i>.' },
    ] },
    { who: 'Ben', t: 'What do you study?' },
    { who: 'Anna', t: 'I study mathematics and English.' },
  ],
  why: 'В разговоре видны сразу три правила: с <i>I</i> глагол без окончания, слово частотности стоит перед глаголом, а краткий ответ повторяет тот же помощник, что и в вопросе: <i>Do you…? — Yes, I do. / No, I don’t.</i>',
},
{
  id: 'z-g3-13', unit: 'z-g3', src: '13', topic: 'вопросительные слова', type: 'order',
  q: 'Расставьте предложения так, чтобы получился рассказ об обычном дне студента.',
  lines: [
    'I get up at seven o’clock.',
    'Then I have breakfast with my family.',
    'I go to the university at eight.',
    'We usually have four lessons every day.',
    'In the evening I do my homework.',
    'I go to bed at eleven.',
  ],
  why: 'Рассказ о распорядке дня целиком стоит в настоящем простом времени: речь о том, что бывает каждый день. Порядок событий показывают слова <i>then</i>, <i>in the evening</i> и указания времени в конце предложения.',
},

/* ---------- повторение на слух ---------- */
{
  id: 'z-g3-14', unit: 'z-g3', src: '14', topic: 'Present Simple на слух', type: 'choice',
  q: 'Послушайте предложение и выберите его запись. Различия маленькие — окончание -s или лишний глагол, поэтому слушайте до конца. '
    + '<button class="ear" type="button" data-say="He works at a factory.">1 🔊</button> '
    + '<button class="ear" type="button" data-say="She studies English at school.">2 🔊</button> '
    + '<button class="ear" type="button" data-say="They live in a big city.">3 🔊</button> '
    + '<button class="ear" type="button" data-say="My sister goes to work at eight.">4 🔊</button>',
  items: [
    { s: '1. ___', ru: 'первая кнопка', opts: [
      { t: 'He works at a factory.', ok: true, why: 'В конце глагола слышен звук [s] — это окончание третьего лица.' },
      { t: 'He work at a factory.', why: 'С <i>he</i> глагол без окончания невозможен, да и на слух [s] в конце есть.' },
      { t: 'They work at a factory.', why: 'Слышно <i>he</i>, а не <i>they</i>, и глагол звучит с окончанием.' },
    ] },
    { s: '2. ___', ru: 'вторая кнопка', opts: [
      { t: 'She studies English at school.', ok: true, why: 'Согласная перед <i>y</i>, поэтому пишется <i>studies</i>, и в конце слышен звук [z].' },
      { t: 'She study English at school.', why: 'С <i>she</i> глагол обязательно получает окончание.' },
      { t: 'She studys English at school.', why: 'Написание неверное: после согласной <i>y</i> переходит в <i>i</i> — <i>studies</i>.' },
    ] },
    { s: '3. ___', ru: 'третья кнопка', opts: [
      { t: 'They live in a big city.', ok: true, why: 'С <i>they</i> глагол стоит в начальной форме, и никакого окончания в конце не слышно.' },
      { t: 'They lives in a big city.', why: 'Окончание <i>-s</i> с <i>they</i> не употребляется.' },
      { t: 'He lives in a big city.', why: 'В начале звучит <i>they</i>, а не <i>he</i>.' },
    ] },
    { s: '4. ___', ru: 'четвёртая кнопка', opts: [
      { t: 'My sister goes to work at eight.', ok: true, why: 'После <i>-o</i> пишется <i>-es</i>: <i>goes</i>. Подлежащее — одна сестра.' },
      { t: 'My sister go to work at eight.', why: '<i>My sister</i> — это «она», глагол обязан быть с окончанием.' },
      { t: 'My sister is go to work at eight.', why: 'Лишний глагол <i>is</i>: смысловой глагол в предложении уже есть.' },
    ] },
  ],
  why: 'Окончание третьего лица слышно: после глухого согласного это [s] (<i>works</i>), после звонкого и гласного — [z] (<i>lives, studies</i>), после шипящего — целый слог [ɪz] (<i>watches</i>). Привыкайте различать его на слух: именно оно показывает, что речь об одном человеке.',
}

);
