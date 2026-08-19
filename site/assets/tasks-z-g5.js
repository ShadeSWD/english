/* Задания к странице «can, must и прошедшее время» (ступень «С нуля», z-g5).
 *
 * Три темы страницы: модальные глаголы can и must (умение, разрешение,
 * обязанность, запрет, оборот have to); прошедшее время правильных глаголов
 * (-ed, его правописание и чтение, was/were, didn’t и Did you …?);
 * неправильные глаголы (сорок самых частых).
 * Грамматика не выходит за пределы уже разобранного: местоимения, глагол be,
 * артикли, множественное число, there is/are, Present Simple, вопросы, числа,
 * время и предлоги. Перфекта, пассива и будущего времени здесь нет.
 *
 * Схема записи и типы описаны в assets/exercises.js.
 */
'use strict';
(window.TASKS = window.TASKS || []).push(

/* ---------- ТЕМА 1: can и must ---------- */
{
  id: 'z-g5-1', unit: 'z-g5', src: '1', topic: 'can и must', type: 'match',
  q: 'Соотнесите английскую фразу с русским переводом. Следите за отрицаниями: они переводятся по-разному.',
  pairs: [
    ['I can swim.', 'Я умею плавать.'],
    ['I can’t swim.', 'Я не умею плавать.'],
    ['Can I sit here?', 'Можно мне сесть здесь?'],
    ['You must wait here.', 'Вам нужно подождать здесь.'],
    ['You mustn’t wait here.', 'Здесь ждать нельзя.'],
    ['You don’t have to wait.', 'Ждать не обязательно.'],
  ],
  why: '<i>Can</i> — «умею, могу, можно»; <i>must</i> — «должен, нужно». Разница между <i>mustn’t</i> и <i>don’t have to</i> велика: первое запрещает («нельзя»), второе освобождает («не обязательно»).',
},
{
  id: 'z-g5-2', unit: 'z-g5', src: '2', topic: 'can и must', type: 'choice',
  q: 'Выберите верную форму. Помните: после can и must глагол стоит в начальной форме — без to и без -s.',
  items: [
    { s: 'My sister can ___ a car.', ru: 'Моя сестра умеет водить машину.', opts: [
      { t: 'drive', ok: true, why: 'После <i>can</i> — начальная форма глагола, как в словаре.' },
      { t: 'drives', why: 'Окончания <i>-s</i> после модального глагола не бывает ни при каком подлежащем.' },
      { t: 'to drive', why: 'Частица <i>to</i> после <i>can</i> не ставится.' },
    ] },
    { s: 'He must ___ home now.', ru: 'Ему нужно идти домой.', opts: [
      { t: 'go', ok: true, why: 'После <i>must</i> — начальная форма: <i>must go</i>.' },
      { t: 'goes', why: 'Третье лицо на форму после <i>must</i> не влияет: <i>-s</i> здесь лишнее.' },
      { t: 'to go', why: 'Это калька с русского «должен идти»: <i>to</i> после <i>must</i> не нужно.' },
    ] },
    { s: '___ you help me with this box?', ru: 'Вы можете помочь мне с этой коробкой?', opts: [
      { t: 'Can', ok: true, why: 'Вопрос с <i>can</i> строится перестановкой: модальный глагол выходит на первое место.' },
      { t: 'Do', why: 'Получилось бы «Do you can help me» — два помощника подряд; <i>can</i> помощник сам себе.' },
      { t: 'Are', why: '<i>Are</i> — форма глагола <i>be</i>, с ней сочетается не начальная форма, а совсем другая конструкция.' },
    ] },
    { s: 'You ___ smoke here. This is a hospital.', ru: 'Здесь нельзя курить, это больница.', opts: [
      { t: 'mustn’t', ok: true, why: '<i>Mustn’t</i> — прямой запрет: «нельзя».' },
      { t: 'must', why: 'Получилось бы «здесь нужно курить» — смысл обратный.' },
      { t: 'don’t have to', why: 'Это «не обязательно курить», то есть можно и не курить. Запрета здесь нет.' },
    ] },
    { s: 'My brother ___ work on Saturday.', ru: 'Мой брат должен работать в субботу.', opts: [
      { t: 'has to', ok: true, why: 'Оборот <i>have to</i> ведёт себя как обычный глагол: при <i>he, she, it</i> он получает <i>-s</i> — <i>has to</i>.' },
      { t: 'have to', why: 'Подлежащее <i>my brother</i> — третье лицо единственного числа, нужна форма <i>has to</i>.' },
      { t: 'musts', why: 'У модального глагола формы с <i>-s</i> не существует.' },
    ] },
  ],
  why: 'После <i>can</i> и <i>must</i> глагол всегда в начальной форме. Вопрос строится перестановкой, без <i>do</i>. Оборот <i>have to</i> — единственный в этой теме, который меняется по лицам и требует <i>do/does</i>.',
},
{
  id: 'z-g5-3', unit: 'z-g5', src: '3', topic: 'can и must', type: 'fill',
  q: 'Впишите can, can’t, must, mustn’t, have to или has to.',
  items: [
    { s: 'I ___ speak French, but I ___ speak English.', a: [['can’t', 'cannot', 'can not'], ['can']],
      ru: 'по-французски не умею, по-английски умею' },
    { s: '___ I ask a question?', a: [['Can']], ru: 'Можно задать вопрос?' },
    { s: 'You ___ take photos in this room. It is not allowed.', a: [['mustn’t', 'must not', 'can’t', 'cannot']],
      ru: 'здесь фотографировать запрещено' },
    { s: 'He ___ get up at six every day.', a: [['has to']], ru: 'ему приходится вставать в шесть' },
    { s: 'Students ___ be quiet in the library.', a: [['must', 'have to']], ru: 'в библиотеке нужно вести себя тихо' },
  ],
  why: 'Запрет — <i>mustn’t</i> или <i>can’t</i>; обязанность — <i>must</i> или <i>have to</i>. При <i>he, she, it</i> оборот принимает форму <i>has to</i>, а модальные <i>can</i> и <i>must</i> не меняются никогда.',
},
{
  id: 'z-g5-4', unit: 'z-g5', src: '4', topic: 'can и must', type: 'build',
  q: 'Соберите предложение. Лишние слова в наборе есть — они как раз те, что просятся по-русски.',
  items: [
    { ru: 'Вы умеете плавать?', a: 'Can you swim?', extra: ['do', 'to'] },
    { ru: 'Он не умеет водить машину.', a: 'He can’t drive a car.', extra: ['drives'] },
    { ru: 'Мне нужно позвонить маме.', a: 'I must call my mother.', extra: ['to'] },
    { ru: 'Здесь нельзя курить.', a: 'You mustn’t smoke here.', extra: ['don’t'] },
  ],
  why: 'В вопросе <i>can</i> стоит первым и <i>do</i> не нужен. В отрицании <i>not</i> присоединяется к самому модальному глаголу: <i>can’t</i>, <i>mustn’t</i>. Второй глагол во всех случаях остаётся начальной формой.',
},

/* ---------- ТЕМА 2: Past Simple правильных глаголов ---------- */
{
  id: 'z-g5-5', unit: 'z-g5', src: '5', topic: 'прошедшее время: правильные глаголы', type: 'fill',
  q: 'Образуйте прошедшее время. Следите за правописанием: -e, -y и удвоение согласной.',
  items: [
    { s: 'work → ___', a: [['worked']], ru: 'работать' },
    { s: 'live → ___', a: [['lived']], ru: 'жить: слово кончается на немую -e, добавляется только -d' },
    { s: 'study → ___', a: [['studied']], ru: 'учить: перед y согласная, y переходит в i' },
    { s: 'play → ___', a: [['played']], ru: 'играть: перед y гласная, буква не меняется' },
    { s: 'stop → ___', a: [['stopped']], ru: 'останавливаться: короткое слово, согласная удваивается' },
  ],
  why: 'Четыре правила правописания: обычно <b>-ed</b>; после немой <i>e</i> — только <b>-d</b> (<i>lived</i>); согласная + <i>y</i> → <b>-ied</b> (<i>studied</i>), но гласная + <i>y</i> ничего не меняет (<i>played</i>); в коротком слове с одной гласной и одной согласной согласная удваивается (<i>stopped</i>, <i>planned</i>).',
},
{
  id: 'z-g5-6', unit: 'z-g5', src: '6', topic: 'прошедшее время: правильные глаголы', type: 'sort',
  q: 'Разложите глаголы по тому, как звучит окончание -ed. Сначала послушайте три образца: '
    + '<button class="ear" type="button" data-say="worked">[t] 🔊</button> '
    + '<button class="ear" type="button" data-say="played">[d] 🔊</button> '
    + '<button class="ear" type="button" data-say="wanted">[ɪd] 🔊</button>',
  cats: {
    t: 'звучит [t]',
    d: 'звучит [d]',
    id: 'звучит [ɪd]',
  },
  items: [
    { t: 'worked', c: 't' }, { t: 'stopped', c: 't' }, { t: 'asked', c: 't' },
    { t: 'played', c: 'd' }, { t: 'lived', c: 'd' }, { t: 'opened', c: 'd' },
    { t: 'wanted', c: 'id' }, { t: 'started', c: 'id' }, { t: 'needed', c: 'id' },
  ],
  why: 'Выбирать не приходится — всё решает последний звук глагола. После глухого ([k], [p], [s], [f], [ʃ], [tʃ]) окончание звучит глухо: [t]. После звонкого звука или гласной — [d]. И только после [t] и [d] вставляется гласный: [ɪd], иначе два одинаковых звука подряд не выговорить. Подробнее о глухих и звонких — на странице «Правила чтения».',
},
{
  id: 'z-g5-7', unit: 'z-g5', src: '7', topic: 'прошедшее время: правильные глаголы', type: 'choice',
  q: 'Выберите верный вариант. Главное правило: признак прошедшего времени в предложении только один.',
  items: [
    { s: 'Did you ___ TV last night?', ru: 'Ты вчера вечером смотрел телевизор?', opts: [
      { t: 'watch', ok: true, why: 'Прошедшее время уже выражено словом <i>did</i>, поэтому глагол стоит в начальной форме.' },
      { t: 'watched', why: 'Это и есть самая частая ошибка темы: «Did you watched» — прошедшее время показано дважды.' },
      { t: 'watching', why: 'Такая форма в этой конструкции не употребляется.' },
    ] },
    { s: 'I ___ at home all day yesterday.', ru: 'Вчера я весь день был дома.', opts: [
      { t: 'was', ok: true, why: 'Глагол <i>be</i> в прошедшем имеет свои формы; при <i>I</i> это <i>was</i>.' },
      { t: 'were', why: 'Форма <i>were</i> идёт с <i>you, we, they</i>, а не с <i>I</i>.' },
      { t: 'did be', why: 'Глагол <i>be</i> помощника <i>did</i> не берёт ни в вопросе, ни в отрицании.' },
    ] },
    { s: 'She ___ at the lesson on Monday.', ru: 'В понедельник её не было на занятии.', opts: [
      { t: 'wasn’t', ok: true, why: 'Отрицание с <i>be</i> строится частицей <i>not</i> сразу после глагола: <i>was not = wasn’t</i>.' },
      { t: 'didn’t was', why: 'С глаголом <i>be</i> помощник <i>did</i> не употребляется, а после <i>didn’t</i> не бывает прошедшей формы.' },
      { t: 'weren’t', why: 'Подлежащее <i>she</i> требует формы <i>was</i>, значит и отрицание <i>wasn’t</i>.' },
    ] },
  ],
  why: 'У правильных глаголов прошедшее видно по <b>-ed</b>, но как только появляется <i>did</i> или <i>didn’t</i>, окончание уходит: <i>Did you work?</i>, <i>I didn’t work</i>. Глагол <i>be</i> живёт отдельно: <i>was / were</i>, <i>wasn’t / weren’t</i>, <i>Was he …?</i>',
},
{
  id: 'z-g5-8', unit: 'z-g5', src: '8', topic: 'прошедшее время: правильные глаголы', type: 'build',
  q: 'Соберите предложение в прошедшем времени.',
  items: [
    { ru: 'Вчера я работал в саду.', a: 'I worked in the garden yesterday.', extra: ['did'] },
    { ru: 'Вчера вечером я не смотрел телевизор.', a: 'I didn’t watch TV last night.', extra: ['watched'] },
    { ru: 'Ты вчера звонил маме?', a: 'Did you call your mother yesterday?', extra: ['called'] },
  ],
  why: 'В утверждении признак прошедшего несёт сам глагол (<i>worked</i>), а в отрицании и вопросе — слово <i>did</i>, и тогда глагол возвращается в начальную форму (<i>didn’t watch</i>, <i>Did you call…?</i>).',
},

/* ---------- ТЕМА 3: Past Simple неправильных глаголов ---------- */
{
  id: 'z-g5-9', unit: 'z-g5', src: '9', topic: 'неправильные глаголы', type: 'match',
  q: 'Соотнесите начальную форму глагола с прошедшей.',
  pairs: [
    ['go', 'went'],
    ['see', 'saw'],
    ['buy', 'bought'],
    ['take', 'took'],
    ['write', 'wrote'],
    ['drink', 'drank'],
  ],
  why: 'Эти формы не выводятся ни из какого правила — их учат наизусть парами. Похожие пары удобно запоминать вместе: <i>buy — bought</i>, <i>bring — brought</i>, <i>think — thought</i>.',
},
{
  id: 'z-g5-10', unit: 'z-g5', src: '10', topic: 'неправильные глаголы', type: 'fill',
  q: 'Поставьте глагол из скобок в прошедшее время.',
  items: [
    { s: 'Yesterday we ___ a letter from Anna. (get)', a: [['got']], ru: 'мы получили письмо' },
    { s: 'She ___ me about the test. (tell)', a: [['told']], ru: 'она рассказала мне о контрольной' },
    { s: 'I ___ this book last summer. (read)', a: [['read']], ru: 'пишется как начальная форма, а читается [red]' },
    { s: 'He ___ his keys in the shop. (lose)', a: [['lost']], ru: 'он потерял ключи' },
    { s: 'They ___ home late. (come)', a: [['came']], ru: 'они пришли домой поздно' },
    { s: 'We ___ pizza and ___ tea. (eat, drink)', a: [['ate'], ['drank']], ru: 'мы ели пиццу и пили чай' },
  ],
  why: 'Форма одна на все лица: <i>I got</i>, <i>he got</i>, <i>they got</i>. У глагола <i>read</i> написание не меняется вовсе, и понять время можно только по соседним словам: <i>last summer</i> — значит прошедшее.',
},
{
  id: 'z-g5-11', unit: 'z-g5', src: '11', topic: 'неправильные глаголы', type: 'choice',
  q: 'Выберите верный вариант. В отрицании и вопросе неправильная форма исчезает.',
  items: [
    { s: 'I ___ him yesterday.', ru: 'Вчера я его не видел.', opts: [
      { t: 'didn’t see', ok: true, why: 'После <i>didn’t</i> глагол стоит в начальной форме: <i>see</i>, а не <i>saw</i>.' },
      { t: 'didn’t saw', why: 'Прошедшее время показано дважды — и словом <i>didn’t</i>, и формой <i>saw</i>.' },
      { t: 'don’t saw', why: '<i>Don’t</i> — настоящее время, а речь о вчерашнем дне.' },
    ] },
    { s: '___ you go to the shop?', ru: 'Ты ходил в магазин?', opts: [
      { t: 'Did', ok: true, why: 'Вопрос в прошедшем начинается с <i>did</i>, а смысловой глагол остаётся начальной формой.' },
      { t: 'Do', why: 'Это вопрос о настоящем: «ты ходишь в магазин?».' },
      { t: 'Was', why: 'Форма <i>was</i> работает только с самим глаголом <i>be</i>, а здесь глагол <i>go</i>.' },
    ] },
    { s: 'She ___ a new bag last week.', ru: 'На прошлой неделе она купила новую сумку.', opts: [
      { t: 'bought', ok: true, why: 'Утверждение: неправильная форма стоит на своём месте.' },
      { t: 'buyed', why: 'Глагол <i>buy</i> неправильный, окончания <i>-ed</i> он не получает.' },
      { t: 'did buy', why: 'Так подчёркивают сказанное в споре; обычное утверждение строится одной формой <i>bought</i>.' },
    ] },
    { s: 'Where ___ you buy this bag?', ru: 'Где ты купил эту сумку?', opts: [
      { t: 'did', ok: true, why: 'Вопросительное слово стоит впереди, дальше обычный порядок вопроса: <i>did</i> + подлежащее + начальная форма.' },
      { t: 'do', why: 'Настоящее время: «где ты покупаешь эту сумку?».' },
      { t: 'were', why: '<i>Were</i> сочетается только с <i>be</i>, а не с глаголом <i>buy</i>.' },
    ] },
  ],
  why: 'Неправильная форма живёт только в утверждении. Появился <i>did</i> или <i>didn’t</i> — глагол возвращается в начальную форму: <i>I saw</i>, но <i>I didn’t see</i> и <i>Did you see?</i>',
},
{
  id: 'z-g5-12', unit: 'z-g5', src: '12', topic: 'неправильные глаголы', type: 'dialog',
  q: 'Дополните разговор о выходных: для каждой реплики выберите подходящий ответ.',
  turns: [
    { who: 'Anna', t: 'Hi, Ben! How was your weekend?' },
    { who: 'Ben', opts: [
      { t: 'It was very good, thank you.', ok: true, why: 'Вопрос был о прошедшем (<i>How was…?</i>), поэтому и ответ в прошедшем: <i>it was</i>.' },
      { t: 'It is very good, thank you.', why: 'Настоящее время: выходные уже прошли, нужна форма <i>was</i>.' },
      { t: 'I am very good, thank you.', why: 'Спрашивали не о вас, а о выходных.' },
    ] },
    { who: 'Anna', t: 'What did you do on Saturday?' },
    { who: 'Ben', opts: [
      { t: 'I went to the cinema with my sister.', ok: true, why: 'Прошедшая форма неправильного глагола <i>go → went</i>.' },
      { t: 'I go to the cinema with my sister.', why: 'Это настоящее время, «я хожу в кино»; о субботе так не расскажешь.' },
      { t: 'I goed to the cinema with my sister.', why: 'Глагол <i>go</i> неправильный, окончание <i>-ed</i> он не берёт: только <i>went</i>.' },
    ] },
    { who: 'Anna', t: 'Did you like the film?' },
    { who: 'Ben', opts: [
      { t: 'Yes, I did. It was very funny.', ok: true, why: 'Краткий ответ повторяет тот же помощник, что и в вопросе: <i>Did …? — Yes, I did.</i>' },
      { t: 'Yes, I was. It was very funny.', why: 'Вопрос был с <i>did</i>, значит и ответ строится на <i>did</i>.' },
      { t: 'Yes, I do. It was very funny.', why: 'Форма <i>do</i> — настоящее время, а вопрос о прошедшем.' },
    ] },
    { who: 'Anna', t: 'And on Sunday? Did you stay at home?' },
    { who: 'Ben', opts: [
      { t: 'No, I didn’t. I played football with my friends.', ok: true, why: 'Краткое отрицание <i>No, I didn’t</i>, а дальше утверждение с окончанием <i>-ed</i>.' },
      { t: 'No, I didn’t stayed. I played football with my friends.', why: 'После <i>didn’t</i> глагол стоит в начальной форме: <i>didn’t stay</i>.' },
      { t: 'No, I don’t. I play football with my friends.', why: 'Оба глагола в настоящем времени, а разговор идёт о воскресенье.' },
    ] },
    { who: 'Anna', t: 'Nice! I studied all weekend. We had a test on Monday.' },
  ],
  why: 'В разговоре о прошлом работают три вещи сразу: прошедшая форма в утверждении (<i>went</i>, <i>played</i>), начальная форма после <i>did</i> и <i>didn’t</i>, и краткий ответ тем же помощником — <i>Yes, I did</i> / <i>No, I didn’t</i>.',
},
{
  id: 'z-g5-13', unit: 'z-g5', src: '13', topic: 'рассказ о прошлом', type: 'order',
  q: 'Расставьте предложения так, чтобы получился связный рассказ о вчерашнем дне.',
  lines: [
    'Yesterday I got up at seven o’clock.',
    'I had breakfast and went to the university.',
    'Our first lesson started at half past eight.',
    'After the lessons I met my friend in the park.',
    'We drank coffee and talked about our studies.',
    'In the evening I read a book and went to bed at eleven.',
  ],
  why: 'Рассказ о дне идёт по часам: встал → позавтракал и поехал → занятия → после занятий → вечер. Правильные глаголы стоят с окончанием <b>-ed</b> (<i>started</i>, <i>talked</i>), неправильные — своей формой (<i>got</i>, <i>had</i>, <i>went</i>, <i>met</i>, <i>drank</i>, <i>read</i>).',
}

);
