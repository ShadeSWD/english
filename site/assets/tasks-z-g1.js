/* Задания к странице «Местоимения и глагол be» (раздел «С нуля», z-g1).
 *
 * Три темы: личные и объектные местоимения; глагол be в настоящем времени;
 * притяжательные слова и притяжательный падеж с ’s. Ничего из более поздних
 * страниц раздела здесь не используется: смысловых глаголов, множественного
 * числа по правилам, времён кроме настоящего в примерах нет.
 * Схема записи и типы описаны в assets/exercises.js.
 */
'use strict';
(window.TASKS = window.TASKS || []).push(

/* ---------- ТЕМА 1: личные местоимения ---------- */
{
  id: 'z-g1-1', unit: 'z-g1', src: '1', topic: 'личные местоимения', type: 'match',
  q: 'Соотнесите английское местоимение с русским переводом.',
  pairs: [
    ['I', 'я'],
    ['you', 'ты, вы'],
    ['he', 'он (о человеке)'],
    ['she', 'она (о человеке)'],
    ['it', 'он, она, оно (о предмете)'],
    ['we', 'мы'],
    ['they', 'они'],
  ],
  why: 'Запомните две неожиданности. Про любой предмет говорят <i>it</i>, независимо от русского рода: <i>the table → it</i>, <i>the book → it</i>. А одно слово <i>you</i> отвечает и за «ты», и за «вы» — отдельного вежливого местоимения в английском нет.',
},
{
  id: 'z-g1-2', unit: 'z-g1', src: '2', topic: 'личные местоимения', type: 'choice',
  q: 'Замените выделенные слова местоимением.',
  items: [
    { s: 'My father is at work. → ___ is at work.', ru: 'мой отец', opts: [
      { t: 'He', ok: true, why: 'Об одном мужчине говорят <i>he</i>, и в начале предложения нужна именно эта форма.' },
      { t: 'His', why: '<i>His</i> — слово «чей?», оно ставится перед предметом: <i>his car</i>.' },
      { t: 'Him', why: '<i>Him</i> отвечает на вопрос «кого? кому?» и в начале предложения не стоит.' },
    ] },
    { s: 'The house is very old. → ___ is very old.', ru: 'дом', opts: [
      { t: 'It', ok: true, why: 'Предмет — всегда <i>it</i>, какого бы рода слово ни было по-русски.' },
      { t: 'He', why: 'Русский мужской род на английский не переносится: <i>he</i> говорят только о человеке.' },
      { t: 'They', why: '<i>They</i> — о нескольких, а дом здесь один.' },
    ] },
    { s: 'Anna and I are at home. → ___ are at home.', ru: 'Анна и я', opts: [
      { t: 'We', ok: true, why: '«Кто-то и я» — это всегда «мы», <i>we</i>.' },
      { t: 'They', why: '<i>They</i> не включает говорящего, а здесь есть <i>I</i>.' },
      { t: 'Us', why: '<i>Us</i> отвечает на вопрос «кого? нам?»; в начале предложения нужна форма <i>we</i>.' },
    ] },
    { s: 'My sister is a student. → ___ is a student.', ru: 'моя сестра', opts: [
      { t: 'She', ok: true, why: 'Об одной женщине — <i>she</i>.' },
      { t: 'Her', why: '<i>Her</i> — это «её»: либо «чей?», либо «кого?». В начале предложения не годится.' },
      { t: 'It', why: '<i>It</i> о человеке не говорят: получится «оно».' },
    ] },
    { s: 'The books are on the table. → ___ are on the table.', ru: 'книги', opts: [
      { t: 'They', ok: true, why: 'Несколько предметов — <i>they</i>, точно так же как несколько людей.' },
      { t: 'It', why: '<i>It</i> — только об одном предмете; здесь их несколько, да и глагол <i>are</i> это показывает.' },
      { t: 'Them', why: '<i>Them</i> отвечает на вопрос «кого? им?» и в начале предложения не стоит.' },
    ] },
  ],
  why: 'В начале предложения стоит только форма из первого столбца таблицы: <i>I, you, he, she, it, we, they</i>. Формы <i>me, him, her, us, them</i> в этой роли невозможны.',
},
{
  id: 'z-g1-3', unit: 'z-g1', src: '3', topic: 'личные местоимения', type: 'fill',
  q: 'Впишите местоимение в форме «кого? кому? для кого?» — ту, что стоит после предлога.',
  items: [
    { s: 'This letter is for ___.', a: [['me']], ru: 'для меня' },
    { s: 'The book is for ___.', a: [['her']], ru: 'для неё (для Ольги)' },
    { s: 'Anna is with ___.', a: [['him']], ru: 'с ним (с братом)' },
    { s: 'The room is for ___.', a: [['us']], ru: 'для нас' },
    { s: 'The flowers are for ___.', a: [['them']], ru: 'для них (для родителей)' },
    { s: 'This tea is for ___.', a: [['you']], ru: 'для тебя' },
  ],
  why: 'После предлогов <i>for, with, about</i> всегда идёт вторая форма местоимения: <i>for me, with him, for them</i>. У слова <i>you</i> обе формы совпадают, поэтому менять в нём нечего.',
},

/* ---------- ТЕМА 2: глагол be ---------- */
{
  id: 'z-g1-4', unit: 'z-g1', src: '4', topic: 'глагол be', type: 'fill',
  q: 'Впишите am, is или are.',
  items: [
    { s: 'I ___ a student.', a: [['am']], ru: 'Я студент.' },
    { s: 'My father ___ at work.', a: [['is']], ru: 'Мой отец на работе.' },
    { s: 'We ___ at home.', a: [['are']], ru: 'Мы дома.' },
    { s: 'You ___ my friend.', a: [['are']], ru: 'Ты мой друг.' },
    { s: 'The city ___ very big.', a: [['is']], ru: 'Город очень большой.' },
    { s: 'My parents ___ in Moscow.', a: [['are']], ru: 'Мои родители в Москве.' },
    { s: 'It ___ cold today.', a: [['is']], ru: 'Сегодня холодно.' },
  ],
  why: 'Форму выбирают по тому, о ком речь: <i>I</i> — только <i>am</i>; один человек или один предмет (в том числе <i>he, she, it</i>) — <i>is</i>; <i>we, you, they</i> и всё, чего несколько, — <i>are</i>.',
},
{
  id: 'z-g1-5', unit: 'z-g1', src: '5', topic: 'глагол be', type: 'choice',
  q: 'Выберите правильную форму: отрицание, вопрос или краткая запись.',
  items: [
    { s: 'My sister ___ a doctor. She is a teacher.', ru: 'не врач', opts: [
      { t: 'isn’t', ok: true, why: 'Об одном человеке — <i>is</i>, а отрицание добавляет <i>not</i>: <i>is not = isn’t</i>.' },
      { t: 'aren’t', why: 'Форма <i>are</i> нужна, когда речь о нескольких; сестра здесь одна.' },
      { t: 'not is', why: 'Частица <i>not</i> ставится после глагола, а не перед ним.' },
    ] },
    { s: 'I ___ at home now. I am at work.', ru: 'меня нет дома', opts: [
      { t: 'am not', ok: true, why: 'С <i>I</i> употребляется <i>am</i>, отрицание — <i>am not</i> или <i>I’m not</i>.' },
      { t: 'isn’t', why: '<i>Is</i> с местоимением <i>I</i> не сочетается никогда.' },
      { t: 'not am', why: 'Порядок обратный: сначала глагол, потом <i>not</i>.' },
    ] },
    { s: '___ you from Moscow? — No, I am not.', ru: 'вопрос', opts: [
      { t: 'Are', ok: true, why: 'В вопросе глагол выходит вперёд, а с <i>you</i> всегда <i>are</i>.' },
      { t: 'Is', why: 'С <i>you</i> форма <i>is</i> не употребляется, даже когда речь об одном человеке.' },
      { t: 'Am', why: '<i>Am</i> бывает только с <i>I</i>.' },
    ] },
    { s: 'They ___ at work today. They are at home.', ru: 'не на работе', opts: [
      { t: 'aren’t', ok: true, why: 'С <i>they</i> идёт <i>are</i>, отрицание — <i>are not = aren’t</i>.' },
      { t: 'isn’t', why: '<i>Is</i> относится к одному, а <i>they</i> — это несколько.' },
      { t: 'am not', why: '<i>Am</i> сочетается только с <i>I</i>.' },
    ] },
    { s: 'Краткая запись сочетания he is выглядит так: ___', ru: 'апостроф на месте выпавшего звука', opts: [
      { t: 'he’s', ok: true, why: 'Из <i>is</i> остаётся только <i>s</i>, а на месте выпавшего звука ставится апостроф.' },
      { t: 'hes', why: 'Без апострофа сокращения не бывает: получится несуществующее слово.' },
      { t: 'he’re', why: 'Так сокращают <i>are</i>, а с <i>he</i> употребляется <i>is</i>.' },
    ] },
  ],
  why: 'Три действия с глаголом <i>be</i> устроены просто: отрицание — <i>not</i> сразу после глагола; вопрос — глагол на первое место; сокращение — апостроф вместо выпавшего звука.',
},
{
  id: 'z-g1-6', unit: 'z-g1', src: '6', topic: 'глагол be', type: 'fill',
  q: 'Дайте краткий ответ. В отрицательном ответе годится и полная, и краткая форма.',
  items: [
    { s: 'Are you a student? — Yes, ___.', a: [['I am']], ru: 'да' },
    { s: 'Is your brother at home? — No, ___.', a: [['he isn’t', 'he is not', 'he’s not']], ru: 'нет' },
    { s: 'Is this your book? — Yes, ___.', a: [['it is']], ru: 'да' },
    { s: 'Are they at work? — No, ___.', a: [['they aren’t', 'they are not', 'they’re not']], ru: 'нет' },
    { s: 'Am I late? — No, ___.', a: [['you aren’t', 'you are not', 'you’re not']], ru: 'нет' },
    { s: 'Is Anna your sister? — Yes, ___.', a: [['she is']], ru: 'да' },
  ],
  why: 'Краткий ответ повторяет глагол вопроса и ставит подходящее местоимение: имя заменяется на <i>he</i>, <i>she</i> или <i>it</i>. На вопрос со словом <i>I</i> отвечают про <i>you</i>, и наоборот. В ответе «да» сокращать нельзя: только <i>Yes, I am</i>.',
},

/* ---------- ТЕМА 3: притяжательные слова и ’s ---------- */
{
  id: 'z-g1-7', unit: 'z-g1', src: '7', topic: 'притяжательные слова', type: 'match',
  q: 'Подберите к местоимению слово, отвечающее на вопрос «чей?».',
  pairs: [
    ['I', 'my'],
    ['you', 'your'],
    ['he', 'his'],
    ['she', 'her'],
    ['it', 'its'],
    ['we', 'our'],
    ['they', 'their'],
  ],
  why: 'Эти слова не меняются ни по роду, ни по числу предмета: <i>her book</i> и <i>her parents</i> — одно и то же <i>her</i>. Выбирают их по владельцу. Форма <i>its</i> пишется без апострофа.',
},
{
  id: 'z-g1-8', unit: 'z-g1', src: '8', topic: 'притяжательные слова', type: 'fill',
  q: 'Впишите слово «чей?»: my, your, his, her, its, our или their.',
  items: [
    { s: 'I am a student. ___ university is in the city.', a: [['My']], ru: 'мой университет' },
    { s: 'Anna is my sister. ___ room is small.', a: [['Her']], ru: 'её комната' },
    { s: 'Ivan is at home. ___ car is old.', a: [['His']], ru: 'его машина' },
    { s: 'We are friends. ___ house is near the park.', a: [['Our']], ru: 'наш дом' },
    { s: 'The city is old. ___ streets are narrow.', a: [['Its']], ru: 'его улицы (у города)' },
    { s: 'My parents are at work. ___ office is in the centre.', a: [['Their']], ru: 'их контора' },
  ],
  why: 'Слово выбирается по владельцу, а не по предмету: <i>Anna → her</i>, <i>Ivan → his</i>, <i>my parents → their</i>, <i>the city → its</i>. Город — предмет, поэтому <i>its</i>, а не <i>his</i>.',
},
{
  id: 'z-g1-9', unit: 'z-g1', src: '9', topic: 'притяжательный падеж', type: 'choice',
  q: 'Выберите правильную запись принадлежности.',
  items: [
    { s: 'книга Анны → ___', opts: [
      { t: 'Anna’s book', ok: true, why: 'Владелец ставится первым и получает ’s, предмет идёт следом.' },
      { t: 'Anna book', why: 'Без ’s принадлежность не выражена: получилось два слова подряд без связи.' },
      { t: 'book Anna', why: 'Это русский порядок слов; по-английски владелец стоит впереди.' },
    ] },
    { s: 'машина моего брата (брат один) → ___', opts: [
      { t: 'my brother’s car', ok: true, why: 'Один владелец — апостроф перед <i>s</i>.' },
      { t: 'my brothers’ car', why: 'Так записывают машину нескольких братьев.' },
      { t: 'my brother car', why: 'Пропущен знак принадлежности ’s.' },
    ] },
    { s: 'комната студентов (их много) → ___', opts: [
      { t: 'the students’ room', ok: true, why: 'Слово уже кончается на <i>s</i>, поэтому добавляют только апостроф.' },
      { t: 'the student’s room', why: 'Это комната одного студента.' },
      { t: 'the students room', why: 'Апостроф пропущен, и принадлежность исчезла.' },
    ] },
    { s: 'The car is new. ___ colour is black.', ru: 'его цвет (у машины)', opts: [
      { t: 'Its', ok: true, why: 'Слово «чей?» о предмете пишется без апострофа: <i>its colour</i>.' },
      { t: 'It’s', why: 'Это сокращение от <i>it is</i>; «оно есть цвет чёрный» — бессмыслица.' },
      { t: 'His', why: '<i>His</i> относится к мужчине, а не к машине.' },
    ] },
    { s: '___ my father’s car.', ru: 'это машина моего отца', opts: [
      { t: 'It’s', ok: true, why: 'Здесь нужен глагол: <i>it is = it’s</i>, «это есть машина отца».' },
      { t: 'Its', why: 'Без апострофа получится «его машина отца» — глагола в предложении не окажется.' },
      { t: 'Its’', why: 'Такого написания в английском нет вовсе.' },
    ] },
  ],
  why: 'Правило короткое: один владелец — ’s; несколько владельцев со словом на <i>s</i> — только апостроф. И отдельно: <i>its</i> без апострофа — «чей?», <i>it’s</i> с апострофом — <i>it is</i>.',
},

/* ---------- ПОВТОРЕНИЕ: разговор, сборка, рассказ ---------- */
{
  id: 'z-g1-10', unit: 'z-g1', src: '10', topic: 'знакомство', type: 'dialog',
  q: 'Дополните разговор при знакомстве: для каждой реплики выберите подходящий ответ.',
  turns: [
    { who: 'Anna', t: 'Hello! My name is Anna. What is your name?' },
    { who: 'Ivan', opts: [
      { t: 'My name is Ivan.', ok: true, why: 'В предложении есть и подлежащее, и глагол <i>is</i>.' },
      { t: 'My name Ivan.', why: 'Пропущен глагол <i>is</i>. По-русски «Меня зовут Иван» глагола не требует, по-английски требует.' },
      { t: 'I Ivan.', why: 'Тоже нет глагола; правильно было бы <i>I am Ivan</i>.' },
    ] },
    { who: 'Anna', t: 'Nice to meet you, Ivan. Are you a student?' },
    { who: 'Ivan', opts: [
      { t: 'Yes, I am.', ok: true, why: 'Краткий ответ повторяет глагол вопроса; сокращать «Yes, I’m» нельзя.' },
      { t: 'Yes, I.', why: 'Без глагола ответа не получается: нужно <i>Yes, I am</i>.' },
      { t: 'Yes, am I.', why: 'Перестановка нужна в вопросе, а в ответе порядок обычный: сначала <i>I</i>, потом <i>am</i>.' },
    ] },
    { who: 'Anna', t: 'Where are you from?' },
    { who: 'Ivan', opts: [
      { t: 'I am from Saint Petersburg.', ok: true, why: 'Откуда человек родом, говорят через <i>be from</i>.' },
      { t: 'I from Saint Petersburg.', why: 'Нет формы <i>am</i>, а без глагола предложение не строится.' },
      { t: 'Me from Saint Petersburg.', why: 'В начале предложения нужна форма <i>I</i>, а не <i>me</i>.' },
    ] },
    { who: 'Ivan', t: 'And who is she? Is she your sister, Anna?' },
    { who: 'Anna', opts: [
      { t: 'No, she isn’t. She is my friend Olga.', ok: true, why: 'Об одной женщине — <i>she is</i>, отрицание — <i>isn’t</i>.' },
      { t: 'No, she aren’t. She is my friend Olga.', why: 'Форма <i>aren’t</i> относится к нескольким; здесь одна Ольга.' },
      { t: 'No, it isn’t. She is my friend Olga.', why: 'О человеке <i>it</i> не говорят.' },
    ] },
    { who: 'Ivan', t: 'Are your parents here too?' },
    { who: 'Anna', opts: [
      { t: 'No, they aren’t. They are at home.', ok: true, why: 'С <i>they</i> идёт <i>are</i>, отрицание — <i>aren’t</i>.' },
      { t: 'No, they isn’t. They are at home.', why: '<i>Is</i> относится к одному человеку, а родителей двое.' },
      { t: 'No, them aren’t. They are at home.', why: 'В начале предложения нужна форма <i>they</i>, а не <i>them</i>.' },
    ] },
    { who: 'Ivan', t: 'Nice to meet you, Olga.' },
  ],
  why: 'Весь разговор при знакомстве держится на глаголе <i>be</i>: <i>My name is…</i>, <i>I am from…</i>, <i>Are you…? — Yes, I am.</i> Пропустить глагол нельзя ни в одной реплике.',
},
{
  id: 'z-g1-11', unit: 'z-g1', src: '11', topic: 'всё вместе', type: 'build',
  q: 'Соберите английское предложение из слов. Лишние слова в наборе есть не всегда.',
  items: [
    { ru: 'Я студент.', a: 'I am a student.', extra: ['are'] },
    { ru: 'Его нет дома.', a: 'He is not at home.', extra: ['am'] },
    { ru: 'Мы твои друзья.', a: 'We are your friends.', extra: ['is'] },
    { ru: 'Это машина моего брата.', a: 'This is my brother’s car.', extra: ['brothers'] },
    { ru: 'Её зовут Ольга.', a: 'Her name is Olga.', extra: ['She'] },
    { ru: 'Их дом рядом с парком.', a: 'Their house is near the park.', extra: ['They'] },
  ],
  why: 'Порядок один и тот же: сначала тот, о ком речь, потом глагол <i>be</i>, потом всё остальное. Перед предметом ставится слово «чей?» (<i>your, her, their</i>) или владелец с ’s (<i>my brother’s</i>).',
},
{
  id: 'z-g1-12', unit: 'z-g1', src: '12', topic: 'всё вместе', type: 'order',
  q: 'Расставьте предложения так, чтобы получился связный рассказ о себе.',
  lines: [
    'Hello! My name is Ivan.',
    'I am a student.',
    'My university is in Saint Petersburg.',
    'My family is not big: my mother, my father and my sister.',
    'Our house is near the park.',
  ],
  why: 'Рассказ о себе идёт от общего к частному: приветствие и имя → кто вы → где учитесь → семья → дом. Каждое предложение содержит глагол <i>be</i> и слово «чей?».',
}

);
