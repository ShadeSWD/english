/* Задания юнита 1 «First things first» — интерактивные аналоги упражнений
 * пособия «Sailing out» (Е.К.Силина, Е.А.Суринова, С.Л.Трофимова).
 *
 * Грамматика и лексика те же, что в пособии, предложения свои. Поле src —
 * номер упражнения в книге, чтобы задание легко было найти на бумаге.
 * Схема записи и типы описаны в assets/exercises.js.
 */
'use strict';
(window.TASKS = window.TASKS || []).push(

/* ---------- SECTION A: глагол to be и местоимения ---------- */
{
  id: 'u1-1', unit: 'u1', src: '1', topic: 'речевой этикет', type: 'dialog',
  q: 'Дополните разговор при знакомстве: для каждой реплики выберите подходящий ответ. Реплики произносятся вслух.',
  turns: [
    { who: 'Oliver', t: 'Hello. My name is Oliver. What is your name?' },
    { who: 'Nikita', opts: [
      { t: 'My name is Nikita.', ok: true, why: 'Полное предложение обязательно содержит глагол-связку <i>is</i>.' },
      { t: 'My name Nikita.', why: 'Пропущен глагол <i>is</i>: без него английское предложение не строится.' },
      { t: 'I Nikita.', why: 'Тоже нет глагола; правильно было бы <i>I am Nikita</i>.' },
    ] },
    { who: 'Oliver', t: 'Where are you from, Nikita?' },
    { who: 'Nikita', opts: [
      { t: 'I am from Saint Petersburg.', ok: true, why: 'Происхождение выражается сочетанием <i>be from</i>.' },
      { t: 'I from Saint Petersburg.', why: 'Нет формы <i>am</i>.' },
      { t: 'I am of Saint Petersburg.', why: 'После <i>be</i> в значении «родом из» ставится предлог <i>from</i>, а не <i>of</i>.' },
    ] },
    { who: 'Oliver', t: 'How old are you?' },
    { who: 'Nikita', opts: [
      { t: 'I am eighteen.', ok: true, why: 'Возраст по-английски выражается глаголом <i>be</i>: <i>I am eighteen</i>.' },
      { t: 'I have eighteen years.', why: 'Дословный перевод с русского; глагол <i>have</i> здесь не употребляется.' },
      { t: 'I am eighteen year.', why: 'Либо просто число, либо <i>eighteen years old</i> — во множественном числе.' },
    ] },
    { who: 'Oliver', t: 'And what do you study?' },
    { who: 'Nikita', opts: [
      { t: 'I am a first-year student at the Marine Technical University.', ok: true, why: 'Перед профессией или занятием в единственном числе ставится артикль <i>a</i>.' },
      { t: 'I am first-year student at the Marine Technical University.', why: 'Пропущен артикль <i>a</i> перед исчисляемым существительным.' },
      { t: 'I first-year student at the Marine Technical University.', why: 'Пропущена форма <i>am</i>.' },
    ] },
  ],
  why: 'В разговоре при знакомстве почти каждая реплика держится на глаголе <i>to be</i>: <i>My name is…</i>, <i>I am from…</i>, <i>I am eighteen</i>.',
},
{
  id: 'u1-2a', unit: 'u1', src: '2 (а)', topic: 'личные местоимения', type: 'match',
  q: 'Соотнесите английские личные местоимения с русскими.',
  pairs: [
    ['I', 'я'],
    ['you', 'ты, вы'],
    ['he', 'он (о человеке)'],
    ['she', 'она (о человеке)'],
    ['it', 'он, она, оно (о предмете)'],
    ['we', 'мы'],
    ['they', 'они'],
  ],
  why: 'Английское <i>it</i> заменяет любой неодушевлённый предмет независимо от русского рода: <i>the drawing → it</i>, <i>the ship → it</i>.',
},
{
  id: 'u1-2b', unit: 'u1', src: '2 (б)', topic: 'личные местоимения', type: 'choice',
  q: 'Замените выделенное слово личным местоимением.',
  items: [
    { s: 'Boris is from Murmansk. → ___ is from Murmansk.', opts: [
      { t: 'He', ok: true, why: 'Мужское имя в роли подлежащего заменяется на <i>he</i>.' },
      { t: 'His', why: '<i>His</i> — притяжательное «его», оно стоит перед существительным.' },
      { t: 'Him', why: '<i>Him</i> — объектная форма, подлежащим она не бывает.' },
    ] },
    { s: 'Anna and I are in the reading-room. → ___ are in the reading-room.', opts: [
      { t: 'We', ok: true, why: '«Анна и я» — это «мы».' },
      { t: 'They', why: '<i>They</i> не включает говорящего, а здесь есть <i>I</i>.' },
      { t: 'Us', why: 'Объектная форма; в роли подлежащего нужна <i>we</i>.' },
    ] },
    { s: 'The drawing is on the desk. → ___ is on the desk.', opts: [
      { t: 'It', ok: true, why: 'Неодушевлённый предмет в английском — всегда <i>it</i>.' },
      { t: 'He', why: 'Русский мужской род не переносится на английский: чертёж — предмет.' },
      { t: 'They', why: 'Существительное в единственном числе.' },
    ] },
    { s: 'The first-year students are in the laboratory. → ___ are in the laboratory.', opts: [
      { t: 'They', ok: true, why: 'Множественное число людей или предметов — <i>they</i>.' },
      { t: 'Them', why: 'Объектная форма, подлежащим не бывает.' },
      { t: 'It', why: '<i>It</i> — только единственное число.' },
    ] },
    { s: 'My sister is a naval architect. → ___ is a naval architect.', opts: [
      { t: 'She', ok: true, why: 'О женщине говорят <i>she</i>.' },
      { t: 'Her', why: '<i>Her</i> — притяжательная или объектная форма.' },
      { t: 'It', why: '<i>It</i> о человеке не употребляется.' },
    ] },
  ],
  why: 'Подлежащее требует именно личного местоимения: <i>I, you, he, she, it, we, they</i>. Формы <i>him, her, us, them</i> в этой роли не встречаются.',
},
{
  id: 'u1-2c', unit: 'u1', src: '2 (в)', topic: 'глагол to be', type: 'fill',
  q: 'Заполните таблицу форм глагола to be: впишите местоимение вместе с глаголом — сначала полной формой, затем краткой.',
  items: [
    { s: '___ a student at the SMTU.', a: [['I am']], ru: 'полная форма, 1-е лицо единственного числа' },
    { s: '___ a student at the SMTU.', a: [['I’m']], ru: 'та же строка в краткой форме' },
    { s: '___ an engineer.', a: [['He is']], ru: 'полная форма, 3-е лицо единственного числа' },
    { s: '___ an engineer.', a: [['He’s']], ru: 'краткая форма' },
    { s: '___ students of the shipbuilding faculty.', a: [['We are']], ru: 'полная форма, множественное число' },
    { s: '___ students of the shipbuilding faculty.', a: [['We’re']], ru: 'краткая форма' },
    { s: '___ new drawings.', a: [['They are']], ru: 'полная форма' },
    { s: '___ new drawings.', a: [['They’re']], ru: 'краткая форма' },
  ],
  why: 'Формы <i>am / is / are</i> запоминаются целиком. Краткая форма пишется через апостроф: <i>I’m, he’s, we’re, they’re</i> — и в письменной речи считается разговорной.',
},
{
  id: 'u1-3', unit: 'u1', src: '3', topic: 'глагол to be', type: 'build',
  q: 'Соберите предложение: сначала отрицание, затем утверждение по образцу «не A, а B».',
  items: [
    { ru: 'Мы не школьники, мы студенты.', a: 'We aren’t schoolchildren, we are students.' },
    { ru: 'Наш преподаватель не американец, он русский.', a: 'Our teacher is not American, he is Russian.' },
    { ru: 'Английский не трудный, он полезный.', a: 'English isn’t difficult, it is useful.' },
    { ru: 'Я не силён в химии, я силён в математике.', a: 'I am not good at chemistry, I am good at mathematics.' },
  ],
  why: 'Отрицание образуется частицей <i>not</i> сразу после глагола: <i>is not = isn’t</i>, <i>are not = aren’t</i>. У формы <i>am</i> общепринятого сокращения с <i>not</i> нет — пишут <i>I’m not</i>.',
},
{
  id: 'u1-4', unit: 'u1', src: '4', topic: 'глагол to be', type: 'fill',
  q: 'Дайте краткий ответ. Отрицательный ответ можно записать и полной, и краткой формой.',
  items: [
    { s: 'Is your notebook new? — No, ___.', a: [['it isn’t', 'it’s not', 'it is not']] },
    { s: 'Are you a first-year student? — Yes, ___.', a: [['I am']] },
    { s: 'Is the test tank in the main building? — Yes, ___.', a: [['it is']] },
    { s: 'Are Nikolay and Ivan your fellow-students? — No, ___.', a: [['they aren’t', 'they’re not', 'they are not']] },
    { s: 'Am I late? — No, ___.', a: [['you aren’t', 'you’re not', 'you are not']] },
    { s: 'Is descriptive geometry easy? — Yes, ___.', a: [['it is']] },
  ],
  why: 'В кратком ответе повторяется тот же глагол, что и в вопросе. В утвердительном ответе сокращение не ставится: только <i>Yes, I am</i>, а не «Yes, I’m».',
},
{
  id: 'u1-5', unit: 'u1', src: '5', topic: 'глагол to be', type: 'fill',
  q: 'Восстановите схему предложения: «+» — утверждение, «–» — отрицание, «?» — вопрос.',
  items: [
    { s: '+ The dean ___ in his office.', a: [['is']] },
    { s: '– Our fellow-students ___ not at the lecture.', a: [['are']] },
    { s: '? ___ the drawing correct?', a: [['Is']] },
    { s: '? ___ I right?', a: [['Am']] },
    { s: '– The main building ___ far from the metro.', a: [['isn’t', 'is not']] },
    { s: '? ___ they in their second year?', a: [['Are']] },
  ],
  why: 'В утверждении глагол стоит после подлежащего, в отрицании после глагола добавляется <i>not</i>, а в вопросе глагол выходит на первое место — перед подлежащим.',
},
{
  id: 'u1-6', unit: 'u1', src: '6', topic: 'глагол to be', type: 'fill',
  q: 'Впишите нужную форму глагола to be.',
  items: [
    { s: 'We ___ students of the Faculty of Marine Engineering.', a: [['are']] },
    { s: 'Ivan ___ at the shipyard today.', a: [['is']] },
    { s: 'I ___ not a naval architect yet.', a: [['am']] },
    { s: 'Descriptive geometry ___ not easy.', a: [['is']] },
    { s: 'What ___ your surname? — My surname ___ Orlov.', a: [['is'], ['is']] },
    { s: '___ she your monitor?', a: [['Is']] },
    { s: 'The plates ___ grey, and the frames ___ black.', a: [['are'], ['are']] },
    { s: 'How old ___ you? — I ___ nineteen.', a: [['are'], ['am']] },
  ],
  why: 'Форма выбирается по подлежащему: <i>I → am</i>; <i>he, she, it</i> и любое существительное в единственном числе <i>→ is</i>; <i>we, you, they</i> и множественное число <i>→ are</i>.',
},
{
  id: 'u1-7', unit: 'u1', src: '7', topic: 'глагол to be', type: 'build',
  q: 'Соберите вопрос или отрицание по образцу.',
  items: [
    { ru: 'Спросите: Пётр — судовой механик?', a: 'Is Peter a marine engineer?' },
    { ru: 'Ответьте отрицательно и поправьте: Нет. Пётр не судовой механик. Он инженер-кораблестроитель.', a: 'No, he isn’t. Peter is not a marine engineer. He is a naval architect.' },
    { ru: 'Спросите: университету больше ста лет?', a: 'Is the university over a hundred years old?' },
    { ru: 'Спросите: его любимые предметы — история и английский?', a: 'Are his favourite subjects history and English?' },
  ],
  why: 'Вопрос строится перестановкой: <i>Peter is → Is Peter…?</i> В отрицании после глагола ставится <i>not</i>, а поправка вводится вторым предложением.',
},

/* ---------- SECTION B: притяжательные прилагательные ---------- */
{
  id: 'u1-8', unit: 'u1', src: '8', topic: 'притяжательные прилагательные', type: 'fill',
  q: 'Перед вами анкета: Andrey Volkov, Arkhangelsk, 19, marine engineering, физика. Ответьте на вопросы, следя за притяжательными словами.',
  items: [
    { s: 'What is his name? — ___ name is Andrey Volkov.', a: [['His']] },
    { s: 'Where is he from? — ___ from Arkhangelsk.', a: [['He’s', 'He is']] },
    { s: 'How old is he? — ___ nineteen.', a: [['He’s', 'He is']] },
    { s: 'What kind of course is he doing? — ___ doing a course in marine engineering.', a: [['He’s', 'He is']] },
    { s: 'What is his favourite subject? — ___ favourite subject is physics.', a: [['His']] },
    { s: 'What are their names? — ___ names are Olga and Vera.', a: [['Their']] },
  ],
  why: 'Перед существительным ставится притяжательное слово (<i>his, her, their</i>), а перед глаголом — личное местоимение (<i>he, she, they</i>).',
},
{
  id: 'u1-9a', unit: 'u1', src: '9 (а)', topic: 'глагол to be', type: 'match',
  q: 'Карточка студентки: Vera Rybina, Severodvinsk, 20 лет, третий курс, Faculty of Marine Engineering, любимый предмет — математика. Соотнесите графу анкеты и сведение.',
  pairs: [
    ['Where is she from?', 'Severodvinsk'],
    ['How old is she?', 'Twenty'],
    ['What year is she in?', 'The third year'],
    ['Which is her faculty?', 'Marine Engineering'],
    ['What is her favourite subject?', 'Mathematics'],
    ['What does she do?', 'She is a student'],
  ],
  why: 'Анкета читается вопросами с <i>to be</i>: <i>Where is…?</i>, <i>How old is…?</i>, <i>What is…?</i> — глагол всегда стоит перед подлежащим.',
},
{
  id: 'u1-9b', unit: 'u1', src: '9 (б)', topic: 'глагол to be', type: 'build',
  q: 'Соберите общий вопрос или краткий ответ о студентке из предыдущего задания.',
  items: [
    { ru: 'Вера — лоцман?', a: 'Is Vera a pilot?' },
    { ru: 'Нет, не лоцман. Она студентка.', a: 'No, she isn’t. She is a student.' },
    { ru: 'Андрей и Ольга — второкурсники?', a: 'Are Andrey and Olga second-year students?' },
    { ru: 'Её любимый предмет — математика?', a: 'Is her favourite subject mathematics?' },
  ],
  why: 'Общий вопрос начинается с глагола <i>is</i> или <i>are</i>, а краткий ответ повторяет тот же глагол с местоимением.',
},
{
  id: 'u1-9c', unit: 'u1', src: '9 (в)', topic: 'глагол to be', type: 'order',
  q: 'Расставьте фразы так, чтобы получился связный рассказ о студентке.',
  lines: [
    'This is Vera Rybina.',
    'She is from Severodvinsk.',
    'She is twenty years old.',
    'She is a third-year student at the Faculty of Marine Engineering.',
    'Her favourite subject is mathematics.',
  ],
  why: 'Рассказ о человеке строится от общего к частному: кто это → откуда → возраст → где и на каком курсе учится → чем интересуется.',
},
{
  id: 'u1-10', unit: 'u1', src: '10', topic: 'притяжательные прилагательные', type: 'match',
  q: 'Соотнесите личное местоимение с притяжательной формой.',
  pairs: [
    ['I', 'my'], ['you', 'your'], ['he', 'his'], ['she', 'her'],
    ['it', 'its'], ['we', 'our'], ['they', 'their'],
  ],
  why: 'Притяжательное слово не изменяется по числу и роду существительного: <i>his drawing</i> и <i>his drawings</i>. Форма <i>its</i> пишется без апострофа — <i>it’s</i> это сокращение от <i>it is</i>.',
},
{
  id: 'u1-11', unit: 'u1', src: '11', topic: 'притяжательные прилагательные', type: 'fill',
  q: 'Впишите притяжательное слово.',
  items: [
    { s: 'I am a monitor. ___ group is small.', a: [['My']] },
    { s: 'Anna is my fellow-student. ___ drawings are always correct.', a: [['Her']] },
    { s: 'Ivan and Oleg are at the shipyard. ___ foreman is a graduate of the SMTU.', a: [['Their']] },
    { s: 'What is ___ job? — I am a designer.', a: [['your']] },
    { s: 'We are first-year students. ___ classes begin at half past eight.', a: [['Our']] },
    { s: 'The vessel is new. ___ length is a hundred and twenty metres.', a: [['Its']] },
    { s: 'Peter is in Murmansk now. ___ family is in Saint Petersburg.', a: [['His']] },
    { s: 'The SMTU is a famous university. ___ main building is in Lotsmanskaya street.', a: [['Its']] },
  ],
  why: 'Притяжательное слово выбирается по владельцу, а не по предмету: <i>Anna → her</i>, <i>Ivan and Oleg → their</i>, <i>the vessel → its</i>.',
},
{
  id: 'u1-12', unit: 'u1', src: '12', topic: 'глагол to be', type: 'build',
  q: 'Задайте тот же вопрос, но собеседнику.',
  items: [
    { ru: 'Спросите собеседника, как его зовут.', a: 'What is your name?' },
    { ru: 'Спросите, откуда он родом.', a: 'Where are you from?' },
    { ru: 'Спросите, сколько ему лет.', a: 'How old are you?' },
    { ru: 'Спросите, какой у него любимый предмет.', a: 'What is your favourite subject?' },
    { ru: 'Спросите, на каком он курсе.', a: 'What year are you in?' },
  ],
  why: 'При переходе к собеседнику <i>his/her</i> заменяется на <i>your</i>, а глагол принимает форму <i>are</i>: <i>How old is he? → How old are you?</i>',
},
{
  id: 'u1-13', unit: 'u1', src: '13', topic: 'глагол to be', type: 'build',
  q: 'Переведите на английский, собрав предложение из блоков.',
  items: [
    { ru: 'Он врач?', a: 'Is he a doctor?' },
    { ru: 'Я не преподаватель.', a: 'I am not a teacher.' },
    { ru: 'Это моя однокурсница. Её зовут Анна.', a: 'This is my fellow-student. Her name is Anna.' },
    { ru: 'Мы первокурсники.', a: 'We are first-year students.' },
    { ru: 'Их любимый предмет — физика.', a: 'Their favourite subject is physics.' },
    { ru: 'Её дети не дома.', a: 'Her children are not at home.' },
  ],
  why: 'Там, где по-русски глагола нет («Я не преподаватель»), по-английски он обязателен: <i>I am not a teacher</i>.',
},

/* ---------- SECTION C: зачем инженеру английский ---------- */
{
  id: 'u1-14', unit: 'u1', src: '14', topic: 'лексика юнита', type: 'choice',
  q: 'Выберите ответ, который точнее объясняет, зачем инженеру английский язык.',
  items: [
    { s: 'Why does a naval architect need English? — ___', opts: [
      { t: 'Because most standards, manuals and papers are written in English.', ok: true, why: 'Это главная рабочая причина: документы, по которым строят судно, выходят на английском.' },
      { t: 'Because English is the only language of the sea.', why: 'Единственным языком моря английский не является; речь о языке документов и совещаний.' },
      { t: 'Because English is easy for everybody.', why: 'Простота языка причиной не бывает: учат его ради практической пользы.' },
    ] },
    { s: 'Why is a modern shipyard an international place? — ___', opts: [
      { t: 'Because the owner, the design bureau and the engine builder are often from different countries.', ok: true, why: 'Заказчик, проектант и поставщик механизмов обычно из разных стран, поэтому нужен общий язык.' },
      { t: 'Because all the workers are foreigners.', why: 'Рабочие как раз местные; международным судостроение делает состав участников проекта.' },
      { t: 'Because ships are built only abroad.', why: 'Суда строят и в России; дело не в месте постройки.' },
    ] },
    { s: 'Why do scientists need English? — ___', opts: [
      { t: 'Because most academic papers and international conferences are in English.', ok: true, why: 'Восемь научных работ из десяти выходят на английском.' },
      { t: 'Because research is impossible in other languages.', why: 'Исследования ведут на любом языке; английский нужен, чтобы о них узнали другие.' },
      { t: 'Because English words are shorter.', why: 'Длина слов к научной работе отношения не имеет.' },
    ] },
  ],
  why: 'Аргумент считается верным, если он опирается на факт: язык документов, состав участников проекта, язык публикаций.',
},
{
  id: 'u1-15a', unit: 'u1', src: '15 (а)', topic: 'правила чтения', type: 'fill',
  q: 'Прочитайте транскрипцию и запишите слово буквами.',
  items: [
    { s: '___', a: [['language']], ru: '[ˈlæŋɡwɪdʒ] — язык' },
    { s: '___', a: [['application']], ru: '[ˌæplɪˈkeɪʃn] — приложение, применение' },
    { s: '___', a: [['science']], ru: '[ˈsaɪəns] — наука (точная)' },
    { s: '___', a: [['communicate']], ru: '[kəˈmjuːnɪkeɪt] — общаться' },
    { s: '___', a: [['original']], ru: '[əˈrɪdʒənl] — оригинал; первоначальный' },
    { s: '___', a: [['culture']], ru: '[ˈkʌltʃə] — культура' },
    { s: '___', a: [['official']], ru: '[əˈfɪʃl] — официальный' },
  ],
  why: 'Транскрипция записывает звуки, а не буквы: в <i>science</i> сочетание <i>sc</i> читается как один звук [s], а в <i>culture</i> буквосочетание <i>-ture</i> даёт [tʃə].',
},
{
  id: 'u1-15b', unit: 'u1', src: '15 (б)', topic: 'лексика юнита', type: 'match',
  q: 'Подберите к английскому слову русский эквивалент.',
  pairs: [
    ['international', 'международный'],
    ['research', 'научное исследование'],
    ['information', 'сведения, данные'],
    ['chance', 'возможность'],
    ['business', 'предпринимательство'],
    ['station', 'вокзал'],
    ['hotel', 'гостиница'],
  ],
  why: 'Многие из этих слов похожи на русские, но значение шире: <i>research</i> — не «ресёрч», а именно научное исследование, <i>chance</i> — возможность, а не «случайность».',
},
{
  id: 'u1-16', unit: 'u1', src: '16', topic: 'лексика юнита', type: 'choice',
  q: 'Отметьте, верно ли утверждение о роли английского языка в мире.',
  items: [
    { s: 'English is an official language in more than fifty countries.', opts: [
      { t: 'верно', ok: true, why: 'Официальный статус английский имеет более чем в пятидесяти странах.' },
      { t: 'неверно', why: 'Число стран действительно превышает пятьдесят.' },
    ] },
    { s: 'About five hundred thousand people speak English as their first or second language.', opts: [
      { t: 'неверно', ok: true, why: 'Говорящих более пятисот <b>миллионов</b>, а не тысяч.' },
      { t: 'верно', why: 'Ошибка в порядке величины: тысяча и миллион различаются в тысячу раз.' },
    ] },
    { s: 'Most web pages are in English.', opts: [
      { t: 'верно', ok: true, why: 'Большая часть страниц в сети написана по-английски.' },
      { t: 'неверно', why: 'Английский остаётся основным языком сети.' },
    ] },
    { s: 'People who work in hotels usually speak Spanish.', opts: [
      { t: 'неверно', ok: true, why: 'В гостиницах разных стран обычно говорят по-английски.' },
      { t: 'верно', why: 'Испанский — не общий язык гостиничного дела.' },
    ] },
    { s: 'Speaking English gives you more chances to get a good job.', opts: [
      { t: 'верно', ok: true, why: 'Знание языка расширяет круг работодателей.' },
      { t: 'неверно', why: 'Английский в резюме действительно повышает шансы.' },
    ] },
    { s: 'Most computer applications are in Chinese.', opts: [
      { t: 'неверно', ok: true, why: 'Интерфейс большинства программ английский.' },
      { t: 'верно', why: 'Китайский не является языком большинства программ.' },
    ] },
  ],
  why: 'Проверяя утверждение, следите за числительными: «пятьсот тысяч» и «пятьсот миллионов» — разные вещи.',
},
{
  id: 'u1-17', unit: 'u1', src: '17', topic: 'лексика юнита', type: 'match',
  q: 'Подберите к следствию его причину: «If you speak English, you can … because …».',
  pairs: [
    ['communicate with people around the world', 'по-английски говорят более пятисот миллионов человек'],
    ['find information on the Web', 'большинство веб-страниц написано по-английски'],
    ['read books in the original', 'так вы чувствуете культуру других стран'],
    ['become a good scientist', 'научные статьи и конференции — на английском'],
    ['travel all over the world', 'в аэропортах и на вокзалах пользуются английским'],
    ['get a good job', 'английский — язык делового общения'],
    ['use your computer effectively', 'большинство программ выпускается на английском'],
  ],
  why: 'Каждая причина отвечает на вопрос «почему именно это становится возможным»: связь между действием и фактом должна быть прямой.',
},
{
  id: 'u1-18', unit: 'u1', src: '18', topic: 'лексика юнита', type: 'order',
  q: 'Расставьте части развёрнутого ответа на тему «Why I study English» по порядку.',
  lines: [
    'I study English because it is on my time-table.',
    'Firstly, I can read manuals and standards for marine machinery.',
    'Secondly, I can ask a question at an international conference.',
    'Also, I can watch films and read books in the original.',
    'Finally, English gives me more chances to get a good job.',
  ],
  why: 'Развёрнутое высказывание держится на словах-связках: сначала общая мысль, затем <i>firstly</i>, <i>secondly</i>, <i>also</i> и вывод <i>finally</i>.',
},
{
  id: 'u1-19', unit: 'u1', src: '19', topic: 'лексика юнита', type: 'fill',
  q: 'Впишите английский эквивалент выделенного русского слова.',
  items: [
    { s: 'Physics and chemistry are ___.', a: [['sciences']], ru: 'точные науки' },
    { s: 'Microsoft Word is a popular computer ___.', a: [['application']], ru: 'прикладная программа' },
    { s: 'You need to write your ___ to get a job.', a: [['CV']], ru: 'резюме' },
    { s: 'All professors of our university do scientific ___.', a: [['research']], ru: 'исследования' },
    { s: 'Many ___ use English at international conferences.', a: [['scientists']], ru: 'учёные' },
    { s: 'English helps you to ___ with people from other countries.', a: [['communicate']], ru: 'общаться' },
    { s: 'After the university he wants to go into ___.', a: [['business']], ru: 'предпринимательство' },
    { s: 'What is your ___? — I am a naval architect.', a: [['job', 'profession']], ru: 'профессия' },
  ],
  why: 'Слово <i>research</i> в значении «исследования» не имеет множественного числа, а <i>CV</i> пишется прописными: это сокращение от <i>curriculum vitae</i>.',
},

/* ---------- SECTION D–E: множественное число и притяжательный падеж ---------- */
{
  id: 'u1-20', unit: 'u1', src: '20', topic: 'множественное число', type: 'sort',
  q: 'Разложите существительные по способу образования множественного числа.',
  cats: {
    s: '+ -s',
    es: 'шипящий или свистящий + -es',
    ies: 'согласная + y → -ies',
    ys: 'гласная + y → -ys',
    irr: 'не по правилу',
  },
  items: [
    { t: 'ship', c: 's' }, { t: 'deck', c: 's' }, { t: 'teacher', c: 's' },
    { t: 'hatch', c: 'es' }, { t: 'class', c: 'es' }, { t: 'box', c: 'es' },
    { t: 'factory', c: 'ies' }, { t: 'property', c: 'ies' }, { t: 'library', c: 'ies' },
    { t: 'day', c: 'ys' }, { t: 'key', c: 'ys' }, { t: 'way', c: 'ys' },
    { t: 'man', c: 'irr' }, { t: 'woman', c: 'irr' }, { t: 'child', c: 'irr' },
    { t: 'person', c: 'irr' },
  ],
  why: 'Буква <i>y</i> переходит в <i>i</i> только после согласной: <i>factory → factories</i>, но <i>day → days</i>. Слова <i>man, woman, child, person</i> образуют множественное число особо: <i>men, women, children, people</i>.',
},
{
  id: 'u1-21', unit: 'u1', src: '21', topic: 'притяжательный падеж', type: 'sort',
  q: 'Определите, что означает ’s в каждом предложении: сокращение глагола is или притяжательный падеж.',
  cats: { is: 'сокращение is', poss: 'притяжательный падеж (чей?)' },
  items: [
    { t: 'My monitor’s name is Vera.', c: 'poss' },
    { t: 'She’s a third-year student.', c: 'is' },
    { t: 'Our teacher’s office is on the third floor.', c: 'poss' },
    { t: 'It’s a new drawing.', c: 'is' },
    { t: 'My brother’s laptop is old.', c: 'poss' },
    { t: 'He’s good at descriptive geometry.', c: 'is' },
    { t: 'The dean’s secretary is very busy.', c: 'poss' },
    { t: 'That’s our reading-room.', c: 'is' },
  ],
  why: 'Подсказка простая: если после ’s стоит существительное, которым владеют, — это притяжательный падеж; если дальше идёт прилагательное или артикль с описанием, — это сокращённое <i>is</i>.',
},
{
  id: 'u1-22', unit: 'u1', src: '22', topic: 'притяжательный падеж', type: 'choice',
  q: 'Выберите правильную форму притяжательного падежа.',
  items: [
    { s: 'комната одного брата → ___', opts: [
      { t: 'my brother’s room', ok: true, why: 'Единственное число: апостроф ставится перед <i>s</i>.' },
      { t: 'my brothers’ room', why: 'Это форма множественного числа — «комната братьев».' },
      { t: 'my brothers room', why: 'Без апострофа принадлежность не выражается.' },
    ] },
    { s: 'комната нескольких братьев → ___', opts: [
      { t: 'my brothers’ room', ok: true, why: 'Во множественном числе на <i>-s</i> добавляется только апостроф.' },
      { t: 'my brother’s room', why: 'Это «комната одного брата».' },
      { t: 'my brothers’s room', why: 'Второе <i>s</i> после апострофа не пишется.' },
    ] },
    { s: 'профессии этих женщин → ___', opts: [
      { t: 'these women’s jobs', ok: true, why: '<i>Women</i> — множественное число не на <i>-s</i>, поэтому ставится ’s.' },
      { t: 'these womens’ jobs', why: 'Формы <i>womens</i> не существует.' },
      { t: 'these women jobs', why: 'Нет знака принадлежности.' },
    ] },
    { s: 'ответы студентов → ___', opts: [
      { t: 'the students’ answers', ok: true, why: 'Множественное число на <i>-s</i> — только апостроф.' },
      { t: 'the student’s answers', why: 'Это ответы одного студента.' },
      { t: 'the students answers’', why: 'Апостроф ставится после владельца, а не после предмета.' },
    ] },
  ],
  why: 'Правило короткое: единственное число — <i>’s</i>; множественное на <i>-s</i> — только апостроф; неправильное множественное (<i>men, women, children</i>) — снова <i>’s</i>.',
},
{
  id: 'u1-23', unit: 'u1', src: '23', topic: 'притяжательный падеж', type: 'fill',
  q: 'Составьте словосочетание с притяжательным падежом.',
  items: [
    { s: 'pen / Jack → ___', a: [['Jack’s pen']], ru: 'ручка Джека' },
    { s: 'assistant / Mr Brown → ___', a: [['Mr Brown’s assistant']], ru: 'ассистент мистера Брауна' },
    { s: 'desk / his assistant → ___', a: [['his assistant’s desk']], ru: 'стол его ассистента' },
    { s: 'questions / their teachers → ___', a: [['their teachers’ questions']], ru: 'вопросы их преподавателей' },
    { s: 'office / the dean → ___', a: [['the dean’s office']], ru: 'кабинет декана' },
    { s: 'papers / our professors → ___', a: [['our professors’ papers']], ru: 'статьи наших профессоров' },
  ],
  why: 'Владелец ставится первым и получает ’s, предмет идёт следом без артикля: <i>the dean’s office</i>, а не «the office of the dean’s».',
},
{
  id: 'u1-24', unit: 'u1', src: '24', topic: 'притяжательный падеж', type: 'build',
  q: 'Соберите предложение, употребив притяжательный падеж.',
  items: [
    { ru: 'Анна — сестра моего однокурсника.', a: 'Anna is my fellow-student’s sister.' },
    { ru: 'Посмотрите на чертежи ваших студентов.', a: 'Look at your students’ drawings.' },
    { ru: 'Любимый предмет Марка — начертательная геометрия.', a: 'Mark’s favourite subject is descriptive geometry.' },
    { ru: 'Научные статьи наших инженеров на столе.', a: 'Our engineers’ papers are on the desk.' },
  ],
  why: 'Русское «чей?» передаётся притяжательным падежом, и порядок слов при этом меняется: «сестра однокурсника» → <i>fellow-student’s sister</i>.',
},

/* ---------- SECTION F: числительные ---------- */
{
  id: 'u1-25a', unit: 'u1', src: '25 (а)', topic: 'числительные', type: 'fill',
  q: 'Запишите число словами.',
  items: [
    { s: '1 — ___', a: [['one']] },
    { s: '3 — ___', a: [['three']] },
    { s: '4 — ___', a: [['four']] },
    { s: '5 — ___', a: [['five']] },
    { s: '8 — ___', a: [['eight']] },
    { s: '9 — ___', a: [['nine']] },
    { s: '10 — ___', a: [['ten']] },
  ],
  why: 'Обратите внимание на написание: <i>four</i>, но <i>forty</i>; <i>nine</i>, но <i>ninth</i>; в <i>eight</i> сочетание <i>gh</i> не читается.',
},
{
  id: 'u1-25b', unit: 'u1', src: '25 (б)', topic: 'числительные', type: 'match',
  q: 'Соотнесите числительное с цифровой записью.',
  pairs: [
    ['eleven', '11'], ['twelve', '12'], ['thirteen', '13'], ['fifteen', '15'],
    ['eighteen', '18'], ['twenty-one', '21'], ['thirty-seven', '37'],
    ['forty-five', '45'], ['fifty-two', '52'], ['sixty-four', '64'],
  ],
  why: 'Числительные от 13 до 19 оканчиваются на <i>-teen</i>, десятки — на <i>-ty</i>, а составные пишутся через дефис: <i>twenty-one</i>.',
},
{
  id: 'u1-26', unit: 'u1', src: '26', topic: 'числительные', type: 'fill',
  q: 'Запишите словами, как читается число.',
  items: [
    { s: '583 — ___', a: [['five hundred and eighty-three', 'five hundred eighty-three']] },
    { s: '3.14 — ___', a: [['three point one four']] },
    { s: '0.639 — ___', a: [['point six three nine', 'zero point six three nine', 'nought point six three nine']] },
    { s: 'room 68 — room ___', a: [['sixty-eight']] },
    { s: 'page 80 — page ___', a: [['eighty']] },
    { s: '27,931 — ___', a: [['twenty-seven thousand nine hundred and thirty-one', 'twenty-seven thousand nine hundred thirty-one']] },
  ],
  why: 'Десятичная дробь читается через <i>point</i>, и каждая цифра после точки называется отдельно. Номер аудитории или страницы читается обычным количественным числительным.',
},

/* ---------- SECTION G: модальный глагол can ---------- */
{
  id: 'u1-27', unit: 'u1', src: '27', topic: 'модальный глагол can', type: 'dialog',
  q: 'Дополните разговор перед лекцией. Обратите внимание, где can выражает умение, а где просьбу.',
  turns: [
    { who: 'Ilya', t: 'Excuse me, is this seat free?' },
    { who: 'Vera', opts: [
      { t: 'Yes, of course. Sit down, please.', ok: true, why: 'Обычный ответ на вопрос о свободном месте.' },
      { t: 'No, I am sorry, I can.', why: 'Отказ и <i>can</i> противоречат друг другу: получилось «нет, я могу».' },
      { t: 'Here you are.', why: 'Так отвечают, когда что-то передают в руки.' },
    ] },
    { who: 'Ilya', t: 'Thanks. I am Ilya, by the way. Can I look at your lecture notes?' },
    { who: 'Vera', opts: [
      { t: 'Here you are.', ok: true, why: 'Просьбу выполняют и передают предмет — это готовая формула вежливости.' },
      { t: 'Yes, I can.', why: 'Ответ о собственном умении, а просили конспект.' },
      { t: 'No, I am not.', why: 'Краткий ответ построен на другом глаголе: вопрос был с <i>can</i>.' },
    ] },
    { who: 'Ilya', t: 'I understand physics quite well, but I just can’t take notes.' },
    { who: 'Vera', opts: [
      { t: 'Can you explain this formula to me, then?', ok: true, why: 'Просьба строится вопросом с <i>can</i> и инфинитивом без <i>to</i>.' },
      { t: 'Can you to explain this formula to me, then?', why: 'После <i>can</i> частица <i>to</i> не ставится.' },
      { t: 'You can explains this formula to me, then?', why: 'После модального глагола окончания <i>-s</i> не бывает.' },
    ] },
    { who: 'Ilya', t: 'Of course. We can take the value of t from this graph.' },
  ],
  why: '<i>Can</i> выражает умение (<i>I can’t take notes</i>) и просьбу (<i>Can you explain…?</i>). После него всегда инфинитив без <i>to</i> и без окончания <i>-s</i>.',
},
{
  id: 'u1-28', unit: 'u1', src: '28', topic: 'модальный глагол can', type: 'build',
  q: 'Соберите вопрос, отрицание или краткий ответ с глаголом can.',
  items: [
    { ru: 'Спросите: Тед умеет ходить на лыжах?', a: 'Can Ted ski?' },
    { ru: 'Ответьте: нет, не умеет, но он умеет плавать.', a: 'No, he can’t, but he can swim.' },
    { ru: 'Спросите: Мария умеет вести конспект?', a: 'Can Mary take notes?' },
    { ru: 'Скажите: мы не умеем делать доклады.', a: 'We can’t give presentations.' },
  ],
  why: 'Вопрос с <i>can</i> начинается с самого модального глагола, отрицание — <i>cannot</i> или <i>can’t</i>, а вспомогательный <i>do</i> здесь не нужен.',
},
{
  id: 'u1-29', unit: 'u1', src: '29', topic: 'модальный глагол can', type: 'fill',
  q: 'Впишите can или can’t (допускается и полная форма cannot).',
  items: [
    { s: '___ you read technical drawings? — Yes, I ___.', a: [['Can'], ['can']] },
    { s: 'Can she speak German? — No, she ___.', a: [['can’t', 'cannot', 'can not']] },
    { s: '___ they do research? — Yes, they ___.', a: [['Can'], ['can']] },
    { s: 'He ___ drive a car, but he ___ sail a yacht.', a: [['can'], ['can’t', 'cannot', 'can not']], ru: 'водить машину умеет, а ходить под парусом — нет' },
    { s: 'I ___ write academic papers yet.', a: [['can’t', 'cannot', 'can not']], ru: 'пока не умею' },
    { s: '___ you use the Internet at the university? — Yes, we ___.', a: [['Can'], ['can']] },
  ],
  why: 'Модальный глагол одинаков во всех лицах: <i>he can</i>, <i>they can</i> — окончания <i>-s</i> не бывает. Отрицание пишется слитно: <i>cannot</i> или <i>can’t</i>.',
},
{
  id: 'u1-30', unit: 'u1', src: '30', topic: 'речевой этикет', type: 'dialog',
  q: 'Дополните короткие диалоги-просьбы подходящей ответной репликой.',
  turns: [
    { who: 'Anton', t: 'Can you pass me that dictionary?' },
    { who: 'Vera', opts: [
      { t: 'Here you are.', ok: true, why: 'Формула «вот, пожалуйста» — ответ, когда предмет передают в руки.' },
      { t: 'Yes, I am.', why: 'Краткий ответ не тем глаголом: вопрос был с <i>can</i>.' },
      { t: 'No, thank you.', why: 'Это отказ от предложенного, а просили передать словарь.' },
    ] },
    { who: 'Anton', t: 'Can you help me with this translation?' },
    { who: 'Vera', opts: [
      { t: 'No, I’m sorry, I can’t.', ok: true, why: 'Вежливый отказ: извинение и краткий ответ тем же глаголом.' },
      { t: 'No, I am not.', why: 'Ответ построен на глаголе <i>be</i>, а вопрос был с <i>can</i>.' },
      { t: 'Yes, please.', why: 'Так отвечают на предложение, а не на просьбу о помощи.' },
    ] },
    { who: 'Anton', t: 'Can you give these papers to the dean, please?' },
    { who: 'Vera', opts: [
      { t: 'Yes, of course.', ok: true, why: 'Согласие выполнить просьбу.' },
      { t: 'Yes, I do.', why: 'Краткий ответ не тем глаголом.' },
      { t: 'Not at all.', why: 'Это ответ на благодарность, а не согласие.' },
    ] },
  ],
  why: 'На просьбу отвечают готовыми формулами: <i>Here you are</i> — когда что-то передают, <i>Yes, of course</i> — согласие, <i>No, I’m sorry, I can’t</i> — вежливый отказ.',
},
{
  id: 'u1-31', unit: 'u1', src: '31', topic: 'модальный глагол can', type: 'build',
  q: 'Переведите на английский, собрав предложение из блоков.',
  items: [
    { ru: 'Вы умеете водить машину?', a: 'Can you drive a car?' },
    { ru: 'Можно мне заглянуть в твой конспект? — Да, конечно.', a: 'Can I look at your notes? Yes, of course.' },
    { ru: 'Он не может этого объяснить.', a: 'He can’t explain it.' },
    { ru: 'Мы не умеем писать научные статьи.', a: 'We can’t write academic papers.' },
    { ru: 'Мэри умеет готовить?', a: 'Can Mary cook?' },
  ],
  why: 'Русские «умею», «могу» и «можно мне» передаются одним глаголом <i>can</i>; различие видно только из ситуации.',
},
{
  id: 'u1-32', unit: 'u1', src: '32', topic: 'глагол to be', type: 'fill',
  q: 'Впишите am, is, isn’t, are, can или can’t.',
  items: [
    { s: 'They ___ designers, they work in this bureau.', a: [['are']] },
    { s: '___ your friend help me with this drawing?', a: [['Can']] },
    { s: 'Anton ___ in the canteen. It is lunchtime.', a: [['is']] },
    { s: '___ your course interesting?', a: [['Is']] },
    { s: 'She ___ write business letters in English.', a: [['can']] },
    { s: 'I ___ a first-year student. I ___ always at the university in the mornings.', a: [['am'], ['am']] },
    { s: 'I ___ understand English, but I ___ speak it very well.', a: [['can'], ['can’t', 'cannot']] },
    { s: 'She ___ my fellow-student, she ___ my sister.', a: [['is'], ['isn’t', 'is not']] },
  ],
  why: 'Глагол <i>be</i> сообщает, кем или каким кто-то является, а <i>can</i> — что он умеет. Смешивать их нельзя: «She can a student» невозможно.',
},

/* ---------- SECTION H–I: чтение и этикет знакомства ---------- */
{
  id: 'u1-33', unit: 'u1', src: '33', topic: 'правила чтения', type: 'sort',
  q: 'Разложите слова по правилу чтения букв i и y.',
  cats: {
    nd: 'перед -nd, -ld, -gh → /aɪ/',
    open: 'открытый слог → /aɪ/',
    closed: 'закрытый слог → /ɪ/',
  },
  items: [
    { t: 'kind', c: 'nd' }, { t: 'blind', c: 'nd' }, { t: 'flight', c: 'nd' },
    { t: 'high', c: 'nd' },
    { t: 'life', c: 'open' }, { t: 'type', c: 'open' }, { t: 'size', c: 'open' },
    { t: 'my', c: 'open' },
    { t: 'sit', c: 'closed' }, { t: 'miss', c: 'closed' }, { t: 'skip', c: 'closed' },
    { t: 'myth', c: 'closed' },
  ],
  why: 'В закрытом слоге <i>i</i> и <i>y</i> дают короткий [ɪ], в открытом — дифтонг [aɪ]. Сочетания <i>-nd, -ld, -gh</i> ведут себя как открытый слог: <i>kind</i>, <i>wild</i>, <i>high</i>.',
},
{
  id: 'u1-34', unit: 'u1', src: '34', topic: 'речевой этикет', type: 'dialog',
  q: 'Первый разговор официальный, второй дружеский. Выберите реплики, подходящие по обстановке.',
  turns: [
    { who: 'Mr Sokolov', t: 'Mr Ward, this is Dmitry Belov, my colleague from the design bureau.' },
    { who: 'Mr Ward', opts: [
      { t: 'How do you do?', ok: true, why: 'Официальная формула первого знакомства; ответом на неё служит она же.' },
      { t: 'How are you?', why: 'Так спрашивают о делах у знакомого человека, а здесь знакомятся впервые.' },
      { t: 'Nice to meet you too.', why: 'Слово <i>too</i> отвечает на уже прозвучавшее приветствие, а его ещё не было.' },
    ] },
    { who: 'Mr Belov', opts: [
      { t: 'How do you do? I am pleased to meet you.', ok: true, why: 'Официальный ответ и вежливая формула «рад познакомиться».' },
      { t: 'Hi, nice to meet you.', why: 'Слишком неформально для знакомства по фамилии.' },
      { t: 'Fine, thanks.', why: 'Это ответ на вопрос о делах, а не на приветствие при знакомстве.' },
    ] },
    { who: 'Anna', t: 'Steven, this is Maria, my friend from Murmansk.' },
    { who: 'Steven', opts: [
      { t: 'Hello, Maria, nice to meet you.', ok: true, why: 'Дружеская обстановка: обращение по имени и простое <i>nice to meet you</i>.' },
      { t: 'How do you do? I am pleased to meet you.', why: 'Официальная формула в кругу друзей звучит натянуто.' },
      { t: 'And what about you?', why: 'Это переспрос, а не приветствие.' },
    ] },
    { who: 'Maria', opts: [
      { t: 'Nice to meet you too.', ok: true, why: 'Ответная реплика с <i>too</i>: «мне тоже приятно».' },
      { t: 'How do you do?', why: 'Смешение регистров: разговор ведётся неформально.' },
      { t: 'Not at all.', why: 'Это ответ на благодарность.' },
    ] },
  ],
  why: 'Официальная обстановка — <i>How do you do?</i> и <i>I am pleased to meet you</i>; дружеская — <i>Hello</i> и <i>Nice to meet you</i>. Представляют третьего человека одинаково: <i>This is …</i>.',
},
{
  id: 'u1-35', unit: 'u1', src: '35', topic: 'речевой этикет', type: 'order',
  q: 'Расставьте реплики так, чтобы получился связный рассказ о себе при знакомстве.',
  lines: [
    'Hello! My name is Kirill Sokolov.',
    'I am nineteen years old and I am from Vologda.',
    'Now I am a first-year student at the Marine Technical University.',
    'My faculty is the Faculty of Naval Architecture and Ocean Engineering.',
    'I can read simple technical drawings, but I can’t weld yet.',
    'I learn English because most manuals for marine machinery are in English.',
  ],
  why: 'Рассказ о себе идёт по плану: имя → возраст и откуда → где учитесь → факультет → что умеете → зачем учите английский.',
}

);
