/* Задания к странице «Первая тысяча слов» (ступень «с нуля», A0–A1).
 *
 * Проверяется не список, а слово в работе: перевод, сочетаемость, место
 * в предложении. Лексика — только из двадцати бытовых блоков тысячи;
 * грамматика не выше того, что объяснено на страницах z-g1 … z-g5.
 * Схема записи и типы описаны в assets/exercises.js.
 */
'use strict';
(window.TASKS = window.TASKS || []).push(

/* ---------- люди, дом, еда ---------- */
{
  id: 'z-words-1', unit: 'z-words', src: '1', topic: 'человек и семья', type: 'match',
  q: 'Соотнесите слово и перевод. Щелчок по английскому слову произносит его.',
  pairs: [
    ['mother', 'мать'],
    ['father', 'отец'],
    ['daughter', 'дочь'],
    ['son', 'сын'],
    ['wife', 'жена'],
    ['husband', 'муж'],
    ['neighbour', 'сосед'],
    ['friend', 'друг'],
  ],
  why: 'Слова родства — самая первая группа в любом языке: с них начинается '
    + 'рассказ о себе. Обратите внимание на написание <i>daughter</i> — '
    + 'буквы <i>gh</i> здесь не читаются.',
},
{
  id: 'z-words-2', unit: 'z-words', src: '2', topic: 'дом и вещи', type: 'match',
  q: 'Дом: соотнесите слово и перевод.',
  pairs: [
    ['kitchen', 'кухня'],
    ['bedroom', 'спальня'],
    ['floor', 'пол'],
    ['wall', 'стена'],
    ['ceiling', 'потолок'],
    ['shelf', 'полка'],
    ['cupboard', 'шкаф (для посуды)'],
    ['towel', 'полотенце'],
  ],
  why: 'В слове <i>cupboard</i> не читается ни <i>p</i>, ни второе <i>o</i>: '
    + 'звучит примерно «кабэд». Такие слова проще запоминать вместе '
    + 'с произношением, а не по буквам.',
},
{
  id: 'z-words-3', unit: 'z-words', src: '3', topic: 'еда и напитки', type: 'choice',
  q: 'Выберите слово, подходящее по смыслу.',
  items: [
    { s: 'I drink ___ in the morning.', ru: 'По утрам я пью…', opts: [
      { t: 'coffee', ok: true, why: 'Кофе пьют — глагол <i>drink</i> сочетается с напитком.' },
      { t: 'bread', why: '<i>Bread</i> — хлеб, его едят: <i>eat bread</i>.' },
      { t: 'spoon', why: '<i>Spoon</i> — ложка, это предмет, а не напиток.' },
    ] },
    { s: 'Please cut the ___ with a knife.', ru: 'Отрежьте, пожалуйста, хлеба ножом.', opts: [
      { t: 'bread', ok: true, why: 'Ножом режут хлеб; <i>cut … with a knife</i> — обычное сочетание.' },
      { t: 'water', why: 'Воду не режут: <i>water</i> — жидкость.' },
      { t: 'plate', why: 'Тарелку не режут, на неё кладут.' },
    ] },
    { s: 'The soup is hot. Do not ___ it now.', ru: 'Суп горячий. Не ешьте его сейчас.', opts: [
      { t: 'eat', ok: true, why: 'Суп по-английски едят: <i>eat soup</i>.' },
      { t: 'drink', why: 'Так говорят только о напитке; суп в английском едят ложкой.' },
      { t: 'cook', why: '<i>Cook</i> — готовить, а суп уже готов и горяч.' },
    ] },
    { s: 'My sister can ___ very well: her fish is always good.', ru: 'Моя сестра хорошо готовит.', opts: [
      { t: 'cook', ok: true, why: '<i>Cook</i> — готовить еду.' },
      { t: 'taste', why: '<i>Taste</i> — пробовать на вкус, а речь об умении готовить.' },
      { t: 'buy', why: '<i>Buy</i> — покупать: покупкой рыба хорошей не станет.' },
    ] },
    { s: 'This tea is very ___. I need some sugar.', ru: 'Чай очень крепкий, нужен сахар.', opts: [
      { t: 'strong', ok: true, why: 'О крепком чае и кофе говорят <i>strong</i>.' },
      { t: 'heavy', why: '<i>Heavy</i> — тяжёлый по весу, о вкусе так не говорят.' },
      { t: 'hard', why: '<i>Hard</i> — твёрдый или трудный; чай таким не бывает.' },
    ] },
  ],
  why: 'Слово живёт не отдельно, а в сочетании: <i>drink coffee</i>, '
    + '<i>eat soup</i>, <i>strong tea</i>. Запоминайте сразу пару слов.',
},

/* ---------- время, числа, движение ---------- */
{
  id: 'z-words-4', unit: 'z-words', src: '4', topic: 'время', type: 'fill',
  q: 'Впишите пропущенное слово. Все слова — из блока «время».',
  items: [
    { s: 'Today is Monday, so ___ is Tuesday.', a: [['tomorrow']], ru: 'Сегодня понедельник, значит завтра вторник.' },
    { s: 'I get up early in the ___ and go to bed late at night.', a: [['morning']], ru: 'Я рано встаю утром и поздно ложусь ночью.' },
    { s: 'There are seven days in a ___.', a: [['week']], ru: 'В неделе семь дней.' },
    { s: 'January is the first ___ of the year.', a: [['month']], ru: 'Январь — первый месяц года.' },
    { s: 'Wait a ___, please: I am not ready.', a: [['minute', 'moment']], ru: 'Подождите минуту, я не готов.' },
  ],
  why: 'Слова времени работают с предлогами <i>in the morning</i>, '
    + '<i>at night</i>, <i>on Monday</i>: предлог запоминается вместе со словом.',
},
{
  id: 'z-words-5', unit: 'z-words', src: '5', topic: 'движение и путь', type: 'choice',
  q: 'Движение: выберите верное слово.',
  items: [
    { s: 'Go straight and then ___ left at the shop.', ru: 'Идите прямо, а у магазина поверните налево.', opts: [
      { t: 'turn', ok: true, why: '<i>Turn left</i> — повернуть налево.' },
      { t: 'walk', why: '<i>Walk</i> — идти пешком, но не «поворачивать».' },
      { t: 'stop', why: '<i>Stop</i> — остановиться; тогда налево вы не попадёте.' },
    ] },
    { s: 'The shop is ___ the corner, two minutes from here.', ru: 'Магазин за углом, в двух минутах отсюда.', opts: [
      { t: 'round', ok: true, why: '<i>Round the corner</i> — устойчивое сочетание «за углом».' },
      { t: 'under', why: '<i>Under</i> — под чем-то; угол улицы под собой ничего не держит.' },
      { t: 'between', why: '<i>Between</i> — между двумя предметами, здесь предмет один.' },
    ] },
    { s: 'Do not ___ in the corridor: it is dangerous.', ru: 'Не бегайте в коридоре: это опасно.', opts: [
      { t: 'run', ok: true, why: '<i>Run</i> — бежать.' },
      { t: 'sit', why: '<i>Sit</i> — сидеть, это никому не опасно.' },
      { t: 'fall', why: '<i>Fall</i> — падать; запрещать падение странно.' },
    ] },
    { s: 'She ___ into the room and opened the window.', ru: 'Она вошла в комнату и открыла окно.', opts: [
      { t: 'came', ok: true, why: '<i>Come into</i> — войти; прошедшая форма неправильного глагола — <i>came</i>.' },
      { t: 'comed', why: 'Такой формы нет: <i>come</i> — неправильный глагол.' },
      { t: 'went', why: '<i>Went into</i> звучит как «направилась внутрь»; в паре с «открыла окно» естественнее <i>came</i>.' },
    ] },
  ],
  why: 'Глаголы движения почти всегда идут с предлогом или наречием: '
    + '<i>turn left</i>, <i>come into</i>, <i>go out</i>. Пара «глагол + предлог» '
    + 'и есть единица запоминания.',
},

/* ---------- свойства, цвета, погода ---------- */
{
  id: 'z-words-6', unit: 'z-words', src: '6', topic: 'свойства', type: 'match',
  q: 'Соотнесите слово с его противоположностью.',
  pairs: [
    ['heavy', 'light — лёгкий'],
    ['clean', 'dirty — грязный'],
    ['wet', 'dry — сухой'],
    ['empty', 'full — полный'],
    ['soft', 'hard — твёрдый'],
    ['cheap', 'expensive — дорогой'],
  ],
  why: 'Прилагательные удобнее учить парами: одна пара — два слова сразу, '
    + 'и оба сразу становятся понятны.',
},
{
  id: 'z-words-7', unit: 'z-words', src: '7', topic: 'цвета и формы', type: 'sort',
  q: 'Разложите слова по группам. Щелчок по слову произносит его.',
  cats: { c: 'цвет', f: 'форма', s: 'размер' },
  items: [
    { t: 'green', c: 'c' }, { t: 'yellow', c: 'c' }, { t: 'grey', c: 'c' },
    { t: 'brown', c: 'c' },
    { t: 'round', c: 'f' }, { t: 'square', c: 'f' }, { t: 'flat', c: 'f' },
    { t: 'straight', c: 'f' },
    { t: 'wide', c: 's' }, { t: 'narrow', c: 's' }, { t: 'thick', c: 's' },
    { t: 'deep', c: 's' },
  ],
  why: 'Цвет, форма и размер — три ряда, которыми описывают любой предмет: '
    + '<i>a wide green door</i>. Порядок в английском такой: размер, форма, цвет.',
},
{
  id: 'z-words-8', unit: 'z-words', src: '8', topic: 'погода и природа', type: 'fill',
  q: 'Погода: впишите пропущенное слово.',
  items: [
    { s: 'It is ___ today: take your umbrella.', a: [['raining', 'wet']], ru: 'Сегодня дождь, возьмите зонт.' },
    { s: 'In winter there is a lot of ___ in our city.', a: [['snow']], ru: 'Зимой в нашем городе много снега.' },
    { s: 'The ___ is very strong today, close the window.', a: [['wind']], ru: 'Сегодня сильный ветер, закройте окно.' },
    { s: 'The ___ is bright and the sky is blue.', a: [['sun']], ru: 'Солнце яркое, небо синее.' },
  ],
  why: 'О погоде говорят безличным <i>it</i>: <i>It is cold</i>, <i>It is raining</i>. '
    + 'Русское «холодно» без подлежащего по-английски невозможно.',
},

/* ---------- инструменты, материалы, работа ---------- */
{
  id: 'z-words-9', unit: 'z-words', src: '9', topic: 'инструменты', type: 'match',
  q: 'Инструменты: соотнесите слово и перевод.',
  pairs: [
    ['hammer', 'молоток'],
    ['screwdriver', 'отвёртка'],
    ['saw', 'пила'],
    ['nail', 'гвоздь'],
    ['screw', 'шуруп, винт'],
    ['drill', 'дрель; сверлить'],
  ],
  why: 'Английский часто складывает название инструмента из того, что он '
    + 'делает: <i>screw</i> «шуруп» + <i>driver</i> «тот, кто вгоняет» = '
    + '<i>screwdriver</i>.',
},
{
  id: 'z-words-10', unit: 'z-words', src: '10', topic: 'материалы', type: 'choice',
  q: 'Из чего сделан предмет? Выберите верное слово.',
  items: [
    { s: 'The window is made of ___.', ru: 'Окно сделано из стекла.', opts: [
      { t: 'glass', ok: true, why: '<i>Glass</i> — стекло (и стакан тоже).' },
      { t: 'wood', why: '<i>Wood</i> — дерево как материал; стекло в окне прозрачное.' },
      { t: 'paper', why: 'Бумажных окон не бывает.' },
    ] },
    { s: 'This box is light because it is made of ___.', ru: 'Коробка лёгкая, потому что она из картона.', opts: [
      { t: 'paper', ok: true, why: '<i>Paper</i> — бумага и картон; отсюда и лёгкость.' },
      { t: 'metal', why: 'Металлическая коробка лёгкой бы не была.' },
      { t: 'stone', why: 'Каменная коробка тем более тяжёлая.' },
    ] },
    { s: 'The tyres of a car are made of ___.', ru: 'Автомобильные шины делают из резины.', opts: [
      { t: 'rubber', ok: true, why: '<i>Rubber</i> — резина.' },
      { t: 'cloth', why: '<i>Cloth</i> — ткань; из неё шины не сделать.' },
      { t: 'sand', why: '<i>Sand</i> — песок, сыпучий материал.' },
    ] },
  ],
  why: 'Оборот <i>be made of</i> — «сделан из». Предлог <i>of</i> здесь '
    + 'обязателен, и материал ставится без артикля.',
},
{
  id: 'z-words-11', unit: 'z-words', src: '11', topic: 'работа и учёба', type: 'build',
  q: 'Соберите предложение из слов.',
  items: [
    { ru: 'Мой брат работает на заводе.', a: 'My brother works at a factory.', extra: ['work'] },
    { ru: 'Она изучает физику в университете.', a: 'She studies physics at the university.', extra: ['study'] },
    { ru: 'Мы начинаем работу в восемь часов.', a: 'We start work at eight o’clock.' },
    { ru: 'Учитель объясняет новое правило.', a: 'The teacher explains a new rule.' },
  ],
  why: 'Порядок жёсткий: кто — что делает — что — где — когда. Лишнее слово '
    + 'в наборе — это форма без окончания <i>-s</i>: в третьем лице '
    + 'единственного числа она не подходит.',
},

/* ---------- одежда, транспорт, деньги ---------- */
{
  id: 'z-words-12', unit: 'z-words', src: '12', topic: 'одежда и транспорт', type: 'sort',
  q: 'Разложите слова по группам.',
  cats: { cl: 'одежда', tr: 'транспорт', mn: 'деньги и покупки' },
  items: [
    { t: 'shirt', c: 'cl' }, { t: 'jacket', c: 'cl' }, { t: 'shoes', c: 'cl' },
    { t: 'pocket', c: 'cl' },
    { t: 'bus', c: 'tr' }, { t: 'train', c: 'tr' }, { t: 'ticket', c: 'tr' },
    { t: 'station', c: 'tr' },
    { t: 'price', c: 'mn' }, { t: 'change', c: 'mn' }, { t: 'shop', c: 'mn' },
    { t: 'bill', c: 'mn' },
  ],
  why: 'Слово <i>change</i> в магазине означает «сдача», а вообще — «менять». '
    + 'Одно написание, два значения: смотрите на соседей по фразе.',
},
{
  id: 'z-words-13', unit: 'z-words', src: '13', topic: 'деньги и покупки', type: 'dialog',
  q: 'Дополните разговор в магазине: выберите подходящую реплику. Реплики произносятся вслух.',
  turns: [
    { who: 'Shop assistant', t: 'Good morning. Can I help you?' },
    { who: 'Anna', opts: [
      { t: 'Yes, please. How much is this jacket?', ok: true, why: 'Вопрос о цене строится оборотом <i>How much is …?</i>' },
      { t: 'Yes, please. How many is this jacket?', why: '<i>How many</i> спрашивает о количестве предметов, а не о цене.' },
      { t: 'Yes, please. What price this jacket?', why: 'Нет глагола: правильно было бы <i>What is the price of this jacket?</i>' },
    ] },
    { who: 'Shop assistant', t: 'It is thirty pounds.' },
    { who: 'Anna', opts: [
      { t: 'That is too expensive for me. Do you have a cheaper one?', ok: true, why: '<i>Expensive</i> — дорогой, <i>cheaper</i> — подешевле.' },
      { t: 'That is too cheap for me. Do you have an expensive one?', why: 'Смысл перевёрнут: покупатель просит подешевле, а не подороже.' },
      { t: 'That is too much money for me. Do you have a small one?', why: '<i>Small</i> — маленький по размеру, а речь о цене.' },
    ] },
    { who: 'Shop assistant', t: 'Yes, this one is twenty pounds.' },
    { who: 'Anna', opts: [
      { t: 'Good, I will take it. Here you are.', ok: true, why: '<i>I will take it</i> — «беру»; <i>Here you are</i> — «вот, пожалуйста», когда что-то подают.' },
      { t: 'Good, I take it. Here you go there.', why: 'Первая часть возможна в разговоре, но <i>Here you go there</i> — не английская фраза.' },
      { t: 'Good, I buy it. There you are here.', why: 'Смешаны две готовые формулы, получилась бессмыслица.' },
    ] },
  ],
  why: 'В магазине хватает четырёх формул: <i>How much is it?</i>, '
    + '<i>It is too expensive</i>, <i>I will take it</i>, <i>Here you are</i>.',
},

/* ---------- чувства и связный рассказ ---------- */
{
  id: 'z-words-14', unit: 'z-words', src: '14', topic: 'чувства и общение', type: 'choice',
  q: 'Чувства: выберите верное слово.',
  items: [
    { s: 'I am very ___ to see you again.', ru: 'Я очень рад снова вас видеть.', opts: [
      { t: 'glad', ok: true, why: '<i>Glad</i> — рад; сочетается с <i>to see</i>.' },
      { t: 'angry', why: '<i>Angry</i> — сердитый, это противоположное чувство.' },
      { t: 'tired', why: '<i>Tired</i> — усталый, к встрече отношения не имеет.' },
    ] },
    { s: 'He is ___ after a long day at the factory.', ru: 'Он устал после долгого дня на заводе.', opts: [
      { t: 'tired', ok: true, why: '<i>Tired</i> — усталый; состояние выражается глаголом <i>be</i>.' },
      { t: 'quiet', why: '<i>Quiet</i> — тихий; о причине «после долгого дня» это не говорит.' },
      { t: 'ready', why: '<i>Ready</i> — готовый, здесь по смыслу не подходит.' },
    ] },
    { s: 'Please ___ me: I am late.', ru: 'Простите: я опоздал.', opts: [
      { t: 'excuse', ok: true, why: '<i>Excuse me</i> — простите, извините.' },
      { t: 'thank', why: '<i>Thank</i> — благодарить; за опоздание не благодарят.' },
      { t: 'ask', why: '<i>Ask</i> — спрашивать или просить, но не извиняться.' },
    ] },
    { s: 'She ___ to help me with my homework.', ru: 'Она пообещала помочь мне с домашним заданием.', opts: [
      { t: 'promised', ok: true, why: '<i>Promise to do something</i> — пообещать что-то сделать.' },
      { t: 'promise', why: 'Нужна прошедшая форма правильного глагола: <i>promised</i>.' },
      { t: 'promissed', why: 'Согласная <i>s</i> здесь не удваивается: <i>promised</i>.' },
    ] },
  ],
  why: 'Состояние человека в английском — это <i>be</i> плюс прилагательное: '
    + '<i>I am glad</i>, <i>he is tired</i>. Русское «мне радостно» без глагола '
    + 'перевести нельзя.',
},
{
  id: 'z-words-15', unit: 'z-words', src: '15', topic: 'связный рассказ', type: 'order',
  q: 'Расставьте предложения так, чтобы получился рассказ об обычном дне.',
  lines: [
    'I get up at seven o’clock in the morning.',
    'I have breakfast and drink a cup of tea.',
    'Then I take the bus to the university.',
    'We have four lessons and a short break at one o’clock.',
    'After the lessons I go to the shop and buy some bread and milk.',
    'In the evening I do my homework and read a book.',
    'I go to bed at eleven o’clock.',
  ],
  why: 'Рассказ о дне держится на словах времени: <i>in the morning</i>, '
    + '<i>then</i>, <i>after</i>, <i>in the evening</i>. Они и задают порядок.',
}

);
