/* Задания к странице «Существительные, артикли, there is» (ступень «С нуля», z-g2).
 *
 * Три темы страницы: множественное число существительных (включая чтение
 * окончания -s и слова, которые не считают поштучно), артикли a / an / the и
 * случаи без артикля, оборот there is / there are.
 * Грамматика не выходит за пределы уже разобранного: местоимения, глагол be,
 * артикли, множественное число, there is/are. Present Simple со смысловыми
 * глаголами, прошедшее время и модальные глаголы здесь не встречаются.
 *
 * Схема записи и типы описаны в assets/exercises.js.
 */
'use strict';
(window.TASKS = window.TASKS || []).push(

/* ---------- ТЕМА 1: множественное число ---------- */
{
  id: 'z-g2-1', unit: 'z-g2', src: '1', topic: 'множественное число', type: 'sort',
  q: 'Разложите существительные по способу образования множественного числа. Смотрите на последние буквы слова: именно они решают дело.',
  cats: {
    s: 'просто + -s',
    es: 'шипящий, свистящий или o + -es',
    ies: 'согласная + y → -ies',
    ves: 'f, fe → -ves',
    irr: 'не по правилу',
  },
  items: [
    { t: 'table', c: 's' }, { t: 'friend', c: 's' }, { t: 'day', c: 's' },
    { t: 'box', c: 'es' }, { t: 'dish', c: 'es' }, { t: 'tomato', c: 'es' },
    { t: 'city', c: 'ies' }, { t: 'family', c: 'ies' },
    { t: 'knife', c: 'ves' }, { t: 'leaf', c: 'ves' },
    { t: 'child', c: 'irr' }, { t: 'man', c: 'irr' },
  ],
  why: 'Буква <i>y</i> переходит в <i>i</i> только после согласной: <i>city → cities</i>, но <i>day → days</i> (перед <i>y</i> стоит гласная <i>a</i>). Окончание <b>-es</b> нужно там, где одно <i>-s</i> просто не выговорить: <i>box → boxes</i>, <i>dish → dishes</i>. Слова <i>child</i> и <i>man</i> меняются внутри: <b>children</b>, <b>men</b>.',
},
{
  id: 'z-g2-2', unit: 'z-g2', src: '2', topic: 'множественное число', type: 'fill',
  q: 'Впишите форму множественного числа.',
  items: [
    { s: 'one city — two ___', a: [['cities']], ru: 'город — города' },
    { s: 'one box — three ___', a: [['boxes']], ru: 'коробка — коробки' },
    { s: 'one knife — two ___', a: [['knives']], ru: 'нож — ножи' },
    { s: 'one child — two ___', a: [['children']], ru: 'ребёнок — дети' },
    { s: 'one woman — three ___', a: [['women']], ru: 'женщина — женщины' },
    { s: 'one fish — five ___', a: [['fish']], ru: 'рыба — рыбы' },
  ],
  why: 'Правило меняет только написание: <i>city → cities</i>, <i>box → boxes</i>, <i>knife → knives</i>. А <i>child</i>, <i>woman</i> и <i>fish</i> — старые слова с особой формой: <b>children</b>, <b>women</b> (читается «уимин»), и <b>fish</b>, которое во множественном числе обычно не меняется вовсе.',
},
{
  id: 'z-g2-3', unit: 'z-g2', src: '3', topic: 'множественное число', type: 'choice',
  q: 'Послушайте слово и определите, как звучит в нём окончание -s. Написание закрыто — ориентируйтесь только на слух. '
    + '<button class="ear" type="button" data-say="books">1 🔊</button> '
    + '<button class="ear" type="button" data-say="rooms">2 🔊</button> '
    + '<button class="ear" type="button" data-say="dishes">3 🔊</button> '
    + '<button class="ear" type="button" data-say="students">4 🔊</button>',
  items: [
    { s: '1. ___', ru: 'первая кнопка', opts: [
      { t: '[s]', ok: true, why: 'Слово <i>books</i> кончается на глухой [k], поэтому и окончание глухое: [bʊks].' },
      { t: '[z]', why: 'Звонкое [z] появляется после звонкого звука или гласной, а перед окончанием здесь глухой [k].' },
      { t: '[ɪz]', why: 'Лишний слог нужен только после свистящих и шипящих (<i>s, sh, ch, x</i>), а [k] к ним не относится.' },
    ] },
    { s: '2. ___', ru: 'вторая кнопка', opts: [
      { t: '[z]', ok: true, why: 'Слово <i>rooms</i> кончается на звонкий [m], и окончание тоже звонкое: [ruːmz].' },
      { t: '[s]', why: 'После звонкого [m] глухое [s] выговорить трудно, язык сам делает [z].' },
      { t: '[ɪz]', why: 'Дополнительный слог здесь не нужен: [m] и [z] прекрасно звучат рядом.' },
    ] },
    { s: '3. ___', ru: 'третья кнопка', opts: [
      { t: '[ɪz]', ok: true, why: 'Слово <i>dishes</i> кончается на шипящий [ʃ]: рядом с ним нужен гласный, получается лишний слог [ˈdɪʃɪz].' },
      { t: '[s]', why: 'Два шипящих-свистящих подряд не произносятся, поэтому просто [s] здесь невозможно.' },
      { t: '[z]', why: 'Тоже слилось бы с [ʃ]; язык вставляет гласную и даёт [ɪz].' },
    ] },
    { s: '4. ___', ru: 'четвёртая кнопка', opts: [
      { t: '[s]', ok: true, why: 'Слово <i>students</i> кончается на глухой [t], значит окончание глухое: [ˈstjuːdnts].' },
      { t: '[z]', why: 'После глухого [t] звонкого [z] не бывает.' },
      { t: '[ɪz]', why: 'Отдельный слог слышался бы как «студентиз»; здесь его нет.' },
    ] },
  ],
  why: 'Окончание пишется одинаково, а звучит по-разному: [s] после глухих (<i>books, maps, students</i>), [z] после звонких и гласных (<i>rooms, pens, days</i>), [ɪz] после свистящих и шипящих (<i>buses, dishes, boxes</i>). Выбирать ничего не нужно — так удобнее языку.',
},
{
  id: 'z-g2-4', unit: 'z-g2', src: '4', topic: 'множественное число', type: 'choice',
  q: 'Слова water, bread, money, work, advice поштучно не считают. Выберите верный вариант.',
  items: [
    { s: 'два хлеба → ___', opts: [
      { t: 'two loaves of bread', ok: true, why: 'Считают не сам хлеб, а батоны: <i>loaf — loaves</i>.' },
      { t: 'two breads', why: 'Слово <i>bread</i> обозначает вещество, а не отдельные предметы, и формы «breads» нет.' },
      { t: 'two bread', why: 'Числа перед такими словами тоже не ставят: нужна мера — <i>loaf</i>, <i>piece</i>.' },
    ] },
    { s: 'стакан воды → ___', opts: [
      { t: 'a glass of water', ok: true, why: 'Мерой воды служит стакан, и артикль относится к нему.' },
      { t: 'a water', why: 'Артикль <i>a</i> значит «один», а вода на штуки не делится.' },
      { t: 'one water', why: 'Числительное с неисчисляемым словом не сочетается.' },
    ] },
    { s: 'The money ___ on the table.', opts: [
      { t: 'is', ok: true, why: 'Английское <i>money</i> — одно слово в единственном числе, поэтому <i>is</i>.' },
      { t: 'are', why: 'Русские «деньги» во множественном числе, английское <i>money</i> — нет.' },
      { t: 'am', why: 'Форма <i>am</i> бывает только с местоимением <i>I</i>.' },
    ] },
    { s: 'Her advice ___ very good.', opts: [
      { t: 'is', ok: true, why: '<i>Advice</i> тоже неисчисляемое: и «совет», и «советы» — одно слово с <i>is</i>.' },
      { t: 'are', why: 'Формы «advices» не существует, значит и <i>are</i> тут неоткуда взяться.' },
      { t: 'is not', why: 'Отрицание меняет смысл: сказать надо, что совет хороший.' },
    ] },
  ],
  why: 'Вещество и общее понятие (<i>water, bread, money, work, advice, time</i>) не имеют множественного числа и требуют глагола в единственном: <i>The money is here</i>. Чтобы посчитать, добавляют меру: <i>a piece of bread</i>, <i>a glass of water</i>, <i>a piece of advice</i>.',
},

/* ---------- ТЕМА 2: артикли a / an / the ---------- */
{
  id: 'z-g2-5', unit: 'z-g2', src: '5', topic: 'артикли', type: 'sort',
  q: 'Разложите слова по артиклю. Решает первый звук, а не первая буква; в третий столбец идёт то, перед чем артикля a или an не бывает вовсе.',
  cats: {
    a: 'a (согласный звук)',
    an: 'an (гласный звук)',
    none: 'без a и an',
  },
  items: [
    { t: 'book', c: 'a' }, { t: 'table', c: 'a' },
    { t: 'university', c: 'a' }, { t: 'house', c: 'a' },
    { t: 'apple', c: 'an' }, { t: 'engineer', c: 'an' },
    { t: 'hour', c: 'an' }, { t: 'umbrella', c: 'an' },
    { t: 'water', c: 'none' }, { t: 'money', c: 'none' },
    { t: 'books', c: 'none' }, { t: 'students', c: 'none' },
  ],
  why: 'Слово <i>hour</i> начинается с гласного звука (буква <i>h</i> не читается) — значит <b>an hour</b>. Слово <i>university</i> начинается со звука [j], а он согласный, — значит <b>a university</b>. Перед множественным числом (<i>books, students</i>) и перед веществом (<i>water, money</i>) артикль <i>a/an</i> невозможен: он означает «один».',
},
{
  id: 'z-g2-6', unit: 'z-g2', src: '6', topic: 'артикли', type: 'fill',
  q: 'Впишите артикль: a, an или the.',
  items: [
    { s: 'This is ___ book. ___ book is new.', a: [['a'], ['the']],
      ru: 'сначала предмет назван впервые, потом он уже известен' },
    { s: 'She is ___ engineer.', a: [['an']], ru: 'она инженер' },
    { s: 'My brother is ___ student.', a: [['a']], ru: 'мой брат студент' },
    { s: 'In ___ evening we are at home.', a: [['the']], ru: 'вечером мы дома' },
    { s: '___ sun is warm today.', a: [['the']], ru: 'солнце одно на всех' },
    { s: 'It is ___ old house.', a: [['an']], ru: 'это старый дом' },
  ],
  why: 'Первое упоминание — <b>a</b> («какая-то книга»), второе — <b>the</b> («та самая»). Перед гласным звуком <i>a</i> превращается в <b>an</b>: <i>an engineer</i>, <i>an old house</i>. Артикль <b>the</b> ставят и там, где предмет один-единственный: <i>the sun</i>, а также в сочетаниях <i>in the morning</i>, <i>in the evening</i>.',
},
{
  id: 'z-g2-7', unit: 'z-g2', src: '7', topic: 'артикли', type: 'choice',
  q: 'Выберите артикль. Знак «—» означает, что артикля нет.',
  items: [
    { s: 'My father is at ___ work.', opts: [
      { t: '—', ok: true, why: '<i>At work</i> — готовое сочетание про занятие, а не про здание; артикля в нём нет.' },
      { t: 'the', why: '<i>At the work</i> так не говорят: артикль вернулся бы только к конкретной работе, о которой шла речь.' },
      { t: 'a', why: 'Слово <i>work</i> неисчисляемое, и «один» перед ним не поставить.' },
    ] },
    { s: 'I am ___ student at the university.', opts: [
      { t: 'a', ok: true, why: 'Перед профессией или занятием в единственном числе артикль обязателен.' },
      { t: 'an', why: 'Слово <i>student</i> начинается с согласного звука [s].' },
      { t: '—', why: '«I am student» — самая частая ошибка русскоязычных: без артикля фраза не строится.' },
    ] },
    { s: '___ children are at school. (речь о ваших детях)', opts: [
      { t: 'The', ok: true, why: 'Дети известны собеседнику — значит <i>the</i>.' },
      { t: 'A', why: '<i>A</i> значит «один», а <i>children</i> — множественное число.' },
      { t: '—', why: 'Без артикля фраза значила бы «дети вообще», а речь о конкретных детях.' },
    ] },
    { s: 'This is ___ umbrella.', opts: [
      { t: 'an', ok: true, why: 'Слово начинается с гласного звука [ʌ], поэтому <i>an</i>.' },
      { t: 'a', why: 'Два гласных подряд («a umbrella») не выговорить — для того <i>an</i> и нужен.' },
      { t: 'the', why: 'Предмет называют впервые, он ещё не известен собеседнику.' },
    ] },
    { s: '___ books are not cheap. (книги вообще)', opts: [
      { t: '—', ok: true, why: 'Множественное число в общем смысле идёт без артикля.' },
      { t: 'The', why: '<i>The books</i> — «те самые книги», а речь обо всех книгах сразу.' },
      { t: 'A', why: '<i>A</i> с множественным числом не сочетается совсем.' },
    ] },
  ],
  why: 'Артикль <b>a/an</b> ставят перед одной вещью из многих, <b>the</b> — перед известной собеседнику, а без артикля обходятся множественное число в общем смысле, вещество и готовые сочетания вроде <i>at home</i>, <i>at work</i>, <i>at school</i>.',
},
{
  id: 'z-g2-8', unit: 'z-g2', src: '8', topic: 'артикли', type: 'build',
  q: 'Соберите предложение, следя за артиклями.',
  items: [
    { ru: 'Это яблоко. Яблоко красное.', a: 'This is an apple. The apple is red.', extra: ['a'] },
    { ru: 'Она инженер.', a: 'She is an engineer.', extra: ['a'] },
    { ru: 'Утром я дома.', a: 'In the morning I am at home.', extra: ['the'] },
    { ru: 'Мы студенты.', a: 'We are students.', extra: ['a'] },
  ],
  why: 'Первое упоминание — <i>an apple</i>, второе — <i>the apple</i>. Перед профессией в единственном числе артикль обязателен (<i>an engineer</i>), а во множественном его нет (<i>students</i>). В сочетаниях <i>in the morning</i> и <i>at home</i> артикль стоит только в первом.',
},

/* ---------- ТЕМА 3: there is / there are ---------- */
{
  id: 'z-g2-9', unit: 'z-g2', src: '9', topic: 'there is / there are', type: 'fill',
  q: 'Впишите нужную форму оборота: There is, There are, Is, Are или краткий ответ.',
  items: [
    { s: '___ a lamp in my room.', a: [['There is', 'There’s']], ru: 'в моей комнате есть лампа' },
    { s: '___ two windows in the kitchen.', a: [['There are']], ru: 'на кухне два окна' },
    { s: '___ no bread at home.', a: [['There is', 'There’s']], ru: 'дома нет хлеба' },
    { s: '___ there a shop near your house?', a: [['Is']], ru: 'вопрос об одном предмете' },
    { s: '___ there many students in the room?', a: [['Are']], ru: 'вопрос о нескольких' },
    { s: 'Is there a table in the room? — No, ___.', a: [['there isn’t', 'there is not', 'there’s not']], ru: 'краткий ответ' },
    { s: 'Are there three beds in the room? — No, ___.', a: [['there aren’t', 'there are not']], ru: 'краткий ответ' },
  ],
  why: 'Форма выбирается по тому, что идёт следом: одна вещь — <b>there is</b>, несколько — <b>there are</b>. Вопрос получается перестановкой (<i>Is there…? Are there…?</i>), а в кратком ответе повторяется <i>there is</i> или <i>there are</i>: <i>Yes, there is. No, there aren’t.</i>',
},
{
  id: 'z-g2-10', unit: 'z-g2', src: '10', topic: 'there is / there are', type: 'choice',
  q: 'Выберите вариант, который подходит к описанной обстановке.',
  items: [
    { s: 'Собеседник ещё не знает про книгу. «На столе книга». → ___', opts: [
      { t: 'There is a book on the table.', ok: true, why: 'Предмет новый, поэтому нужен оборот <i>there is</i> и артикль <i>a</i>.' },
      { t: 'The book is on the table.', why: 'Так отвечают на вопрос «где книга?», когда книга уже известна обоим.' },
      { t: 'On the table is a book.', why: 'Калька с русского: английское предложение не начинается с места, начинается с <i>there</i>.' },
    ] },
    { s: 'Вас спросили: «Where is the book?» → ___', opts: [
      { t: 'The book is on the table.', ok: true, why: 'Книга уже известна, новое здесь — место, значит обычное предложение с <i>be</i>.' },
      { t: 'There is a book on the table.', why: 'Этот ответ сообщает о новом предмете, а спрашивали о месте известного.' },
      { t: 'There is the book on the table.', why: 'После <i>there is</i> стоит <i>a</i>: с <i>the</i> оборот не нужен.' },
    ] },
    { s: 'In my room ___ two big windows.', opts: [
      { t: 'there are', ok: true, why: 'Окон два, значит <i>there are</i>.' },
      { t: 'there is', why: 'Форма единственного числа перед <i>two windows</i> не годится.' },
      { t: 'are there', why: 'Это порядок слов вопроса, а перед нами утверждение.' },
    ] },
    { s: '___ any bread at home? — No, there isn’t.', opts: [
      { t: 'Is there', ok: true, why: 'Вопрос строится перестановкой, а <i>bread</i> — слово в единственном числе.' },
      { t: 'There is', why: 'Так выглядит утверждение, а ответ «No, there isn’t» предполагает вопрос.' },
      { t: 'Are there', why: 'Слово <i>bread</i> поштучно не считают, множественного числа у него нет.' },
    ] },
    { s: 'There is ___ new café near the university.', opts: [
      { t: 'a', ok: true, why: 'Оборот сообщает о новом предмете, поэтому за ним идёт <i>a</i>.' },
      { t: 'the', why: 'Известный предмет с оборотом не употребляют: сказали бы <i>The café is near the university</i>.' },
      { t: '—', why: 'Перед исчисляемым словом в единственном числе артикль обязателен.' },
    ] },
  ],
  why: 'Разница простая: <i>there is</i> вводит <b>новое</b> («на столе есть книга»), а обычное предложение с <i>be</i> сообщает <b>место известного</b> («книга — на столе»). Отсюда и примета: после <i>there is</i> стоит <i>a</i>, а с <i>the</i> оборот не нужен.',
},
{
  id: 'z-g2-11', unit: 'z-g2', src: '11', topic: 'there is / there are', type: 'build',
  q: 'Соберите предложение с оборотом there is / there are. Помните: место уходит в конец.',
  items: [
    { ru: 'В моей комнате есть лампа.', a: 'There is a lamp in my room.' },
    { ru: 'На кухне два окна.', a: 'There are two windows in the kitchen.' },
    { ru: 'Дома нет хлеба.', a: 'There is no bread at home.' },
    { ru: 'В твоём городе есть парк?', a: 'Is there a park in your city?' },
    { ru: 'На стене большая карта.', a: 'There is a big map on the wall.' },
    { ru: 'На улице нет машин.', a: 'There are no cars in the street.' },
  ],
  why: 'Порядок всегда один: <i>there is / there are</i> → что именно → где. Русское «На кухне два окна» перестраивается в <i>There are two windows in the kitchen</i>, а не в «In the kitchen are two windows».',
},
{
  id: 'z-g2-12', unit: 'z-g2', src: '12', topic: 'there is / there are', type: 'dialog',
  q: 'Анна показывает другу свою новую комнату. Выберите подходящую реплику.',
  turns: [
    { who: 'Anna', t: 'This is my new room.' },
    { who: 'Ben', opts: [
      { t: 'Is there a window in the room?', ok: true, why: 'Вопрос об одном предмете: оборот переставлен, артикль <i>a</i> на месте.' },
      { t: 'Is there a windows in the room?', why: 'Артикль <i>a</i> значит «один» и с множественным числом не сочетается.' },
      { t: 'There is a window in the room?', why: 'Это утверждение; в вопросе <i>is</i> выходит на первое место.' },
    ] },
    { who: 'Anna', t: 'Yes, there is. There are two windows.' },
    { who: 'Ben', opts: [
      { t: 'Are there many books on the shelf?', ok: true, why: 'Книг несколько, поэтому <i>are there</i>.' },
      { t: 'Is there many books on the shelf?', why: 'Перед множественным числом нужна форма <i>are</i>.' },
      { t: 'There are many books on the shelf?', why: 'Порядок слов утверждения; для вопроса <i>are</i> ставят вперёд.' },
    ] },
    { who: 'Anna', t: 'Yes, there are. The books are new.' },
    { who: 'Ben', opts: [
      { t: 'Is there a lamp on the table?', ok: true, why: 'Одна лампа — <i>is there</i> и артикль <i>a</i>.' },
      { t: 'Is there the lamp on the table?', why: 'После оборота стоит <i>a</i>: речь о предмете, которого собеседник ещё не знает.' },
      { t: 'Is there lamp on the table?', why: 'Пропущен артикль перед исчисляемым словом в единственном числе.' },
    ] },
    { who: 'Anna', t: 'No, there isn’t. There is a lamp near the bed.' },
    { who: 'Ben', opts: [
      { t: 'It is a very nice room.', ok: true, why: 'Перед существительным в единственном числе артикль обязателен, даже если между ними стоят другие слова.' },
      { t: 'It is very nice room.', why: 'Пропущен артикль <i>a</i>: описание не отменяет его.' },
      { t: 'It is an very nice room.', why: 'Форма <i>an</i> нужна перед гласным звуком, а здесь дальше идёт [v].' },
    ] },
  ],
  why: 'В описании комнаты каждая новая вещь вводится оборотом <i>there is / there are</i> с артиклем <i>a</i>, а когда о вещи уже сказали, она становится известной: <i>The books are new</i>.',
},
{
  id: 'z-g2-13', unit: 'z-g2', src: '13', topic: 'there is / there are', type: 'match',
  q: 'Соотнесите английское предложение с точным переводом. Разница между оборотом и обычным предложением видна именно в переводе.',
  pairs: [
    ['There is a book on the table.', 'На столе (какая-то) книга.'],
    ['The book is on the table.', 'Книга — на столе (вот где она).'],
    ['There are no books on the table.', 'На столе нет книг.'],
    ['Is there a book on the table?', 'На столе есть книга?'],
    ['There is a lamp in the room.', 'В комнате есть лампа.'],
    ['The lamp is in the room.', 'Лампа — в комнате.'],
  ],
  why: 'Оборот <i>there is</i> сообщает о самом наличии предмета («есть, имеется»), а предложение с <i>be</i> — о месте уже известного предмета. По-русски это различие передаётся порядком слов: «На столе книга» и «Книга на столе».',
}

);
