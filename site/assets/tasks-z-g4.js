/* Задания к странице «Числа, время, предлоги» (ступень «С нуля», z-g4).
 *
 * Три темы страницы: числительные (количественные, порядковые, большие числа,
 * дроби и проценты), время и дата, предлоги места и времени.
 * Грамматика не выходит за пределы уже разобранного: местоимения, глагол be,
 * артикли, множественное число, there is/are, Present Simple и вопросы.
 * Прошедшего времени и модальных глаголов здесь нет.
 *
 * Схема записи и типы описаны в assets/exercises.js.
 */
'use strict';
(window.TASKS = window.TASKS || []).push(

/* ---------- ТЕМА 1: числительные ---------- */
{
  id: 'z-g4-1', unit: 'z-g4', src: '1', topic: 'числительные', type: 'fill',
  q: 'Послушайте число и запишите его цифрами. Написание закрыто — ориентируйтесь только на слух. '
    + '<button class="ear" type="button" data-say="thirteen">1 🔊</button> '
    + '<button class="ear" type="button" data-say="thirty">2 🔊</button> '
    + '<button class="ear" type="button" data-say="fifteen">3 🔊</button> '
    + '<button class="ear" type="button" data-say="fifty">4 🔊</button> '
    + '<button class="ear" type="button" data-say="twenty-one">5 🔊</button>',
  items: [
    { s: '1. ___', a: [['13']], ru: 'первая кнопка' },
    { s: '2. ___', a: [['30']], ru: 'вторая кнопка' },
    { s: '3. ___', a: [['15']], ru: 'третья кнопка' },
    { s: '4. ___', a: [['50']], ru: 'четвёртая кнопка' },
    { s: '5. ___', a: [['21']], ru: 'пятая кнопка' },
  ],
  why: 'Числительные 13–19 оканчиваются на <b>-teen</b>, круглые десятки — на <b>-ty</b>. На слух они различаются ударением: в <i>thirteen</i> сильнее второй слог, в <i>thirty</i> — первый. Составное число пишется через дефис: <i>twenty-one</i>.',
},
{
  id: 'z-g4-2', unit: 'z-g4', src: '2', topic: 'числительные', type: 'fill',
  q: 'Запишите словами, как это читается вслух.',
  items: [
    { s: '320 — ___', a: [['three hundred and twenty', 'three hundred twenty']],
      ru: 'триста двадцать' },
    { s: '2000 books — ___ books', a: [['two thousand']],
      ru: 'ровно две тысячи книг — точный счёт' },
    { s: '3.14 — ___', a: [['three point one four']],
      ru: 'десятичная дробь: цифры после точки называются по одной' },
    { s: 'room 312 — room ___', a: [['three one two', 'three hundred and twelve', 'three twelve', 'three hundred twelve']],
      ru: 'номер аудитории' },
    { s: '45% — ___', a: [['forty-five per cent', 'forty five per cent', 'forty-five percent', 'forty five percent']],
      ru: 'сорок пять процентов' },
  ],
  why: 'Дробная часть читается через <i>point</i> и по одной цифре: <i>three point one four</i>, а не «three point fourteen». Номер комнаты читают либо по цифрам (<i>three one two</i>), либо обычным числом. Проценты — <i>per cent</i>, слово не меняется во множественном числе.',
},
{
  id: 'z-g4-3', unit: 'z-g4', src: '3', topic: 'числительные', type: 'fill',
  q: 'Образуйте порядковое числительное от количественного.',
  items: [
    { s: 'one → ___', a: [['first']], ru: '1st — первый' },
    { s: 'two → ___', a: [['second']], ru: '2nd — второй' },
    { s: 'five → ___', a: [['fifth']], ru: '5th — пятый' },
    { s: 'twelve → ___', a: [['twelfth']], ru: '12th — двенадцатый' },
    { s: 'twenty → ___', a: [['twentieth']], ru: '20th — двадцатый' },
  ],
  why: 'Обычно к количественному прибавляется <b>-th</b>: <i>four → fourth</i>, <i>seven → seventh</i>. Запомнить надо только особые формы: <i>first, second, third</i>, а также <i>fifth</i> (не «fiveth»), <i>eighth</i>, <i>ninth</i>, <i>twelfth</i>. У десятков <i>-ty</i> переходит в <b>-tieth</b>: <i>twenty → twentieth</i>, <i>thirty → thirtieth</i>.',
},
{
  id: 'z-g4-4', unit: 'z-g4', src: '4', topic: 'числительные', type: 'choice',
  q: 'Выберите верный вариант.',
  items: [
    { s: 'There are two ___ books in our library.', ru: 'ровно двести книг', opts: [
      { t: 'hundred', ok: true, why: 'При точном счёте <i>hundred</i> и <i>thousand</i> стоят без <i>-s</i>: <i>two hundred books</i>, <i>five thousand people</i>.' },
      { t: 'hundreds', why: 'Форма <i>hundreds</i> означает «сотни» без точного счёта и требует <i>of</i>: <i>hundreds of books</i>. С числом <i>two</i> она невозможна.' },
      { t: 'hundreds of', why: '«Две сотни книг» так не говорят: после числительного идёт <i>hundred</i> без <i>-s</i> и без <i>of</i>.' },
    ] },
    { s: 'This is my ___ year at the university.', ru: 'второй курс', opts: [
      { t: 'second', ok: true, why: 'Порядок в ряду («какой по счёту») передаётся порядковым числительным.' },
      { t: 'two', why: '<i>Two</i> отвечает на вопрос «сколько», а здесь нужен номер по порядку.' },
      { t: 'secondth', why: 'Такой формы нет: <i>second</i> уже порядковое, окончание <i>-th</i> к нему не добавляется.' },
    ] },
    { s: 'Today is the ___ of May.', ru: '21 мая', opts: [
      { t: 'twenty-first', ok: true, why: 'В составном числительном порядковым становится только последнее слово: <i>twenty-first</i>, <i>thirty-second</i>.' },
      { t: 'twenty-one', why: 'Это количественное «двадцать один»; в дате нужен порядковый номер дня.' },
      { t: 'twentieth-first', why: 'Порядковыми обе части не бывают: первая часть остаётся количественной — <i>twenty-first</i>.' },
    ] },
    { s: 'How old are you? — ___', ru: 'мне девятнадцать', opts: [
      { t: 'I am nineteen.', ok: true, why: 'Возраст выражается глаголом <i>be</i>: <i>I am nineteen</i> или полностью <i>I am nineteen years old</i>.' },
      { t: 'I have nineteen years.', why: 'Дословный перевод с русского «мне девятнадцать лет»; глагол <i>have</i> о возрасте не употребляется.' },
      { t: 'I am nineteen year old.', why: 'После числа больше одного существительное стоит во множественном числе: <i>nineteen years old</i>.' },
    ] },
  ],
  why: 'Три вещи стоит держать в голове: <i>hundred/thousand</i> при точном счёте без <i>-s</i>; «какой по счёту» — порядковое числительное; возраст — через глагол <i>be</i>.',
},

/* ---------- ТЕМА 2: время и дата ---------- */
{
  id: 'z-g4-5', unit: 'z-g4', src: '5', topic: 'время и дата', type: 'match',
  q: 'Соотнесите английскую фразу с показанием часов.',
  pairs: [
    ['half past six', '6:30'],
    ['a quarter to nine', '8:45'],
    ['ten past five', '5:10'],
    ['twenty to seven', '6:40'],
    ['a quarter past eight', '8:15'],
    ['five o’clock', '5:00'],
  ],
  why: 'До половины минуты прибавляются к прошедшему часу словом <b>past</b>: <i>ten past five</i> — 5:10. После половины минуты вычитаются из следующего часа словом <b>to</b>: <i>a quarter to nine</i> — это 8:45, до девяти остаётся четверть. Слово <i>o’clock</i> ставится только при ровном часе.',
},
{
  id: 'z-g4-6', unit: 'z-g4', src: '6', topic: 'время и дата', type: 'fill',
  q: 'Запишите время словами. Подойдёт и разговорный, и цифровой вариант.',
  items: [
    { s: '7:30 — It is ___.', a: [['half past seven', 'seven thirty']], ru: 'половина восьмого' },
    { s: '9:15 — It is ___.', a: [['a quarter past nine', 'quarter past nine', 'nine fifteen']], ru: 'четверть десятого' },
    { s: '10:45 — It is ___.', a: [['a quarter to eleven', 'quarter to eleven', 'ten forty-five', 'ten forty five']], ru: 'без четверти одиннадцать' },
    { s: '6:05 — It is ___.', a: [['five past six', 'six oh five', 'six o five']], ru: 'пять минут седьмого' },
    { s: '2:00 — It is ___.', a: [['two o’clock', 'two oclock', 'two']], ru: 'ровно два' },
  ],
  why: 'Русское «половина восьмого» по-английски строится от прошедшего часа: <i>half past seven</i> — «половина после семи». Это самая частая ошибка: <i>half past seven</i> — 7:30, а не 6:30. Цифровой вариант проще: сначала час, потом минуты — <i>seven thirty</i>.',
},
{
  id: 'z-g4-7', unit: 'z-g4', src: '7', topic: 'время и дата', type: 'choice',
  q: 'Выберите верный вариант.',
  items: [
    { s: 'The train leaves ___ six o’clock.', ru: 'в шесть часов', opts: [
      { t: 'at', ok: true, why: 'С точным моментом времени (часы, <i>at night</i>, <i>at midday</i>) употребляется <b>at</b>.' },
      { t: 'in', why: '<i>In</i> ставится с большими отрезками: месяц, год, время года, <i>in the morning</i>.' },
      { t: 'on', why: '<i>On</i> ставится с днями и датами, а не с часами.' },
    ] },
    { s: 'We have English ___ Monday.', ru: 'в понедельник', opts: [
      { t: 'on', ok: true, why: 'С днями недели и датами всегда <b>on</b>: <i>on Monday</i>, <i>on the fifth of May</i>.' },
      { t: 'in', why: 'Прямая калька с русского «в понедельник». По-английски «in Monday» невозможно.' },
      { t: 'at', why: '<i>At</i> — про часы и точные моменты, а не про день недели.' },
    ] },
    { s: 'My birthday is ___ May.', ru: 'в мае', opts: [
      { t: 'in', ok: true, why: 'Месяц, год и время года берут <b>in</b>: <i>in May</i>, <i>in 2020</i>, <i>in winter</i>.' },
      { t: 'on', why: '<i>On</i> нужен, когда назван день: <i>on the fifth of May</i>. Без числа — <i>in May</i>.' },
      { t: 'at', why: '<i>At</i> с названием месяца не употребляется.' },
    ] },
    { s: '1994 — ___', ru: 'как читается год', opts: [
      { t: 'nineteen ninety-four', ok: true, why: 'Год читается двумя парами цифр: <i>nineteen</i> и <i>ninety-four</i>.' },
      { t: 'one thousand nine hundred and ninety-four', why: 'Так читают число 1994 как количество, но не год.' },
      { t: 'nineteen nine four', why: 'По одной цифре читают номера комнат и телефонов, а год — парами.' },
    ] },
  ],
  why: 'Короткое правило: <b>at</b> — часы, <b>on</b> — дни и даты, <b>in</b> — месяцы, годы и времена года. Годы читаются парами: <i>nineteen ninety-four</i>; 2005 — исключение, <i>two thousand and five</i>.',
},
{
  id: 'z-g4-8', unit: 'z-g4', src: '8', topic: 'время и дата', type: 'build',
  q: 'Соберите предложение из слов.',
  items: [
    { ru: 'Сейчас половина седьмого.', a: 'It is half past six.' },
    { ru: 'Мой урок в четверть девятого.', a: 'My lesson is at a quarter past eight.' },
    { ru: 'Мой день рождения пятого мая.', a: 'My birthday is on the fifth of May.' },
    { ru: 'Магазин открывается в восемь утра.', a: 'The shop opens at eight in the morning.' },
  ],
  why: 'В дате британского вида день стоит перед месяцем и получает <i>the</i> и <i>of</i>: <i>on the fifth of May</i>. Американский вариант короче: <i>on May 5</i>. Предлог времени ставится перед всем выражением: <i>at a quarter past eight</i>.',
},
{
  id: 'z-g4-9', unit: 'z-g4', src: '9', topic: 'время и дата', type: 'order',
  q: 'Расставьте предложения по порядку — так, как идёт день по часам.',
  lines: [
    'I get up at half past seven.',
    'My first lesson begins at nine o’clock.',
    'We have lunch at half past one.',
    'I go home at five in the afternoon.',
    'In the evening I do my homework.',
    'I go to bed at eleven o’clock.',
  ],
  why: 'Рассказ о дне держится на предлоге <i>at</i> с часами и на выражениях <i>in the morning</i>, <i>in the afternoon</i>, <i>in the evening</i>. Обратите внимание: <i>at night</i> — единственное из них с <i>at</i>.',
},

/* ---------- ТЕМА 3: предлоги места и времени ---------- */
{
  id: 'z-g4-10', unit: 'z-g4', src: '10', topic: 'предлоги', type: 'match',
  q: 'Соотнесите предлог с его значением.',
  pairs: [
    ['under', 'ниже предмета, под ним'],
    ['above', 'выше предмета, не касаясь его'],
    ['between', 'между двумя предметами'],
    ['in front of', 'перед предметом, с лицевой стороны'],
    ['behind', 'позади предмета'],
    ['opposite', 'напротив, лицом к лицу через улицу'],
  ],
  why: 'Пара <i>under</i> — <i>above</i> отвечает на вопрос «выше или ниже», а <i>over</i> добавляет к <i>above</i> смысл «поперёк, сверху»: <i>The plane is over the city</i>. Не путайте <i>in front of</i> («перед») и <i>opposite</i> («напротив»): напротив — значит с другой стороны, лицом к вам.',
},
{
  id: 'z-g4-11', unit: 'z-g4', src: '11', topic: 'предлоги', type: 'fill',
  q: 'Впишите подходящий предлог.',
  items: [
    { s: 'The book is ___ the table.', a: [['on']], ru: 'книга лежит на столе' },
    { s: 'My bag is ___ the chair.', a: [['under']], ru: 'сумка под стулом' },
    { s: 'There are two ships ___ the picture.', a: [['in']], ru: 'на картинке — по-английски «в»' },
    { s: 'The cafe is ___ the university.', a: [['opposite']], ru: 'кафе напротив университета' },
    { s: 'I go ___ home ___ the university by bus.', a: [['from'], ['to']], ru: 'из дома в университет' },
  ],
  why: 'Русское «на картинке» передаётся предлогом <b>in</b>: <i>in the picture</i>, <i>in the photo</i>. Путь обозначается парой <b>from … to</b>: <i>from home to the university</i>.',
},
{
  id: 'z-g4-12', unit: 'z-g4', src: '12', topic: 'предлоги', type: 'sort',
  q: 'Разложите сочетания по предлогу места: at, in или on.',
  cats: {
    at: 'at — точка, место',
    in: 'in — внутри',
    on: 'on — на поверхности',
  },
  items: [
    { t: 'at the door', c: 'at' },
    { t: 'at the bus stop', c: 'at' },
    { t: 'in the room', c: 'in' },
    { t: 'in my bag', c: 'in' },
    { t: 'on the table', c: 'on' },
    { t: 'on the wall', c: 'on' },
  ],
  why: 'Выбор виден из смысла: <b>at</b> — точка на карте или место, где вы находитесь (<i>at the door</i>, <i>at the bus stop</i>); <b>in</b> — внутри замкнутого пространства (<i>in the room</i>, <i>in my bag</i>); <b>on</b> — на поверхности, с касанием (<i>on the table</i>, <i>on the wall</i>).',
},
{
  id: 'z-g4-13', unit: 'z-g4', src: '13', topic: 'предлоги', type: 'choice',
  q: 'Три самые частые ошибки. Выберите верный предлог.',
  items: [
    { s: 'Look at the two ships ___ the picture.', ru: 'на картинке', opts: [
      { t: 'in', ok: true, why: 'Изображение считается пространством, внутри которого что-то находится: <i>in the picture</i>, <i>in the photo</i>.' },
      { t: 'on', why: 'Калька с русского «на картинке». <i>On the picture</i> означало бы «сверху на самом листе».' },
      { t: 'at', why: '<i>At the picture</i> — «у картины»; так говорят про место, где стоит человек.' },
    ] },
    { s: 'We have a test ___ Monday.', ru: 'в понедельник', opts: [
      { t: 'on', ok: true, why: 'День недели и дата всегда идут с <b>on</b>.' },
      { t: 'in', why: 'Калька с русского «в понедельник»: <i>in</i> берут месяцы и годы, а не дни.' },
      { t: 'at', why: '<i>At</i> сочетается с часами: <i>at nine o’clock</i>.' },
    ] },
    { s: 'My family is ___ home in the evening.', ru: 'дома', opts: [
      { t: 'at', ok: true, why: '«Дома» — устойчивое сочетание <i>at home</i>, причём без артикля.' },
      { t: 'in', why: '<i>In the house</i> тоже возможно, но означает «внутри здания»; «дома» — это <i>at home</i>.' },
      { t: 'on', why: '<i>On</i> здесь невозможно ни в каком значении.' },
    ] },
  ],
  why: 'Эти три сочетания стоит выучить целиком: <i>in the picture</i>, <i>on Monday</i>, <i>at home</i>. Они не переводятся по русскому предлогу.',
}

);
