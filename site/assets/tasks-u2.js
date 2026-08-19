/* Задания юнита 2 пособия «Sailing out» — интерактивные аналоги.
 *
 * Юнит 2 «Day in, day out»: Present Simple во всех лицах, окончание -s/-es и
 * три его произношения, вопросы и отрицания с do/does, специальные вопросы,
 * контраст is и does, наречия частотности, объектные местоимения и
 * притяжательные прилагательные, оборот it takes me… to…, предлоги времени и
 * места, дни недели, свободное время, письмо другу и приветствие.
 *
 * Все 44 задания пособия разобраны по порядку; части а/б/в с разной механикой
 * вынесены в отдельные карточки (u2-3a, u2-3b и так далее). Грамматика и
 * лексика те же, что в пособии, но предложения свои — кораблестроительные:
 * СПбГМТУ, факультеты, кафедра, чертёж, верфь, опытовый бассейн, однокурсники,
 * гребля, лаборатория.
 *
 * Движок и описание типов — assets/exercises.js.
 */
'use strict';
(window.TASKS = window.TASKS || []).push(

/* ===== SECTION A ===== */

{ id: 'u2-1', unit: 'u2', src: '1', topic: 'Present Simple', type: 'choice',
  q: 'Прочитайте две короткие справки и выберите верное продолжение.'
    + '<div class="en">Nikita Gromov comes from Severodvinsk. He is a naval architect and he works '
    + 'for a design bureau in Saint Petersburg. He lives near the shipyard. He speaks English and '
    + 'Norwegian. He is not married. He goes sailing in his free time.</div>'
    + '<div class="en">Vera Panova comes from Murmansk. She is a maritime lawyer and she works for '
    + 'a shipping company. She lives ten minutes from her office. She speaks German. She is married '
    + 'and she has a daughter. She does aerobics and watches films in her free time.</div>',
  items: [
    { s: 'Does Nikita speak Norwegian? — ___', ru: 'Никита говорит по-норвежски?',
      opts: [
        { t: 'Yes, he does.', ok: true, why: 'В кратком ответе повторяется вспомогательный глагол вопроса — <i>does</i>.' },
        { t: 'Yes, he speaks.', why: 'Смысловой глагол в краткий ответ не выносится.' },
        { t: 'Yes, he is.', why: '<i>is</i> годится только там, где в вопросе стоял глагол <i>to be</i>.' },
      ] },
    { s: 'Is Vera married? — ___', ru: 'Вера замужем?',
      opts: [
        { t: 'Yes, she is.', ok: true, why: 'Вопрос задан с <i>is</i>, значит и в ответе стоит <i>is</i>.' },
        { t: 'Yes, she does.', why: '<i>does</i> нужен там, где в вопросе смысловой глагол, а не <i>to be</i>.' },
        { t: 'Yes, she has.', why: '<i>has</i> в вопросе не было, повторять его не за чем.' },
      ] },
    { s: 'Where ___ Nikita work?', ru: 'Где работает Никита?',
      opts: [
        { t: 'does', ok: true, why: 'Смысловой глагол <i>work</i> требует вспомогательного, подлежащее — третье лицо единственного числа.' },
        { t: 'is', why: 'Получилось бы <i>Where is Nikita work?</i> — два сказуемых подряд.' },
        { t: 'do', why: '<i>do</i> идёт с <i>I, we, you, they</i>.' },
      ] },
    { s: 'Vera ___ a daughter.', ru: 'У Веры есть дочь.',
      opts: [
        { t: 'has', ok: true, why: 'В третьем лице единственного числа <i>have</i> принимает особую форму <b>has</b>.' },
        { t: 'have', why: 'Форма <i>have</i> остаётся при <i>I, we, you, they</i>.' },
        { t: 'haves', why: 'Такой формы у глагола <i>have</i> нет.' },
      ] },
    { s: 'Nikita ___ married.', ru: 'Никита не женат.',
      opts: [
        { t: 'isn’t', ok: true, why: '<i>married</i> — прилагательное, сказуемое строится глаголом <i>to be</i>.' },
        { t: 'doesn’t', why: 'После <i>doesn’t</i> должен стоять смысловой глагол, а не прилагательное.' },
        { t: 'don’t', why: 'Форма <i>don’t</i> и лицо не то, и глагол здесь не нужен.' },
      ] },
  ],
  why: 'В Present Simple ответ строится тем же служебным словом, что и вопрос: <i>is</i> отвечает на <i>is</i>, <i>does</i> — на <i>does</i>.' },

{ id: 'u2-2', unit: 'u2', src: '2', topic: 'лексика юнита', type: 'match',
  q: 'Подберите русские соответствия английским выражениям юнита.',
  pairs: [
    ['naval architect', 'инженер-кораблестроитель (проектировщик)'],
    ['marine engineer', 'инженер-механик судовой'],
    ['maritime lawyer', 'юрист по морскому праву'],
    ['marine design bureau', 'морское проектно-конструкторское бюро'],
    ['design ships', 'проектировать суда'],
    ['go snowboarding', 'кататься на сноуборде'],
    ['do aerobics', 'заниматься аэробикой'],
    ['maritime industry', 'судостроительная промышленность'],
  ],
  why: '<i>marine</i> — «морской» о море и судах, <i>maritime</i> — о деятельности человека на море, <i>naval</i> — о военном флоте и кораблестроении.' },

{ id: 'u2-3a', unit: 'u2', src: '3 (а)', topic: 'третье лицо единственного числа', type: 'fill',
  q: 'Поставьте глагол из скобок в форму третьего лица единственного числа.',
  items: [
    { s: 'Our department ___ (design) hull structures.', a: [['designs']], ru: 'Наша кафедра проектирует конструкции корпуса.' },
    { s: 'Kirill ___ (study) descriptive geometry on Tuesdays.', a: [['studies']], ru: 'Кирилл занимается начертательной геометрией по вторникам.' },
    { s: 'The gantry crane ___ (carry) a heavy block to the slipway.', a: [['carries']], ru: 'Козловой кран несёт тяжёлый блок к стапелю.' },
    { s: 'Vera ___ (watch) the launching from the embankment.', a: [['watches']], ru: 'Вера смотрит на спуск судна с набережной.' },
    { s: 'The first double period ___ (finish) at ten o’clock.', a: [['finishes']], ru: 'Первая пара заканчивается в десять часов.' },
    { s: 'My fellow-student ___ (go) rowing every Saturday.', a: [['goes']], ru: 'Мой однокурсник занимается греблей каждую субботу.' },
    { s: 'He ___ (play) for the faculty football team.', a: [['plays']], ru: 'Он играет за сборную факультета по футболу.' },
    { s: 'The lecturer ___ (pass) the drawings round the room.', a: [['passes']], ru: 'Лектор передаёт чертежи по аудитории.' },
  ],
  why: 'После шипящих и свистящих пишется <b>-es</b>, после согласной + <i>y</i> буква <i>y</i> переходит в <i>i</i>: <i>study → studies</i>. После гласной + <i>y</i> остаётся простое <b>-s</b>.' },

{ id: 'u2-3b', unit: 'u2', src: '3 (б)', topic: 'третье лицо единственного числа', type: 'sort',
  q: 'Разложите формы третьего лица по произношению окончания.',
  cats: { s: '/s/', z: '/z/', iz: '/ɪz/' },
  items: [
    { t: 'works', c: 's' }, { t: 'keeps', c: 's' }, { t: 'looks', c: 's' },
    { t: 'makes', c: 's' }, { t: 'meets', c: 's' },
    { t: 'lives', c: 'z' }, { t: 'designs', c: 'z' }, { t: 'goes', c: 'z' },
    { t: 'learns', c: 'z' }, { t: 'flies', c: 'z' }, { t: 'says', c: 'z' },
    { t: 'passes', c: 'iz' }, { t: 'teaches', c: 'iz' }, { t: 'finishes', c: 'iz' },
    { t: 'washes', c: 'iz' },
  ],
  why: 'После глухого согласного окончание звучит как /s/, после звонкого и гласного — как /z/, а после свистящих и шипящих появляется дополнительный слог /ɪz/.' },

{ id: 'u2-4', unit: 'u2', src: '4', topic: 'Present Simple', type: 'fill',
  q: 'Дополните противопоставления по справкам о Никите и Вере из первого задания.',
  items: [
    { s: 'Vera comes from Murmansk. Nikita ___ ___ Severodvinsk.', a: [['comes'], ['from']],
      ru: 'Вера родом из Мурманска. Никита — из Северодвинска.' },
    { s: 'She lives ten minutes from her office, but he ___ near the shipyard.', a: [['lives']],
      ru: 'Она живёт в десяти минутах от офиса, а он — рядом с верфью.' },
    { s: 'He works for a design bureau. She ___ ___ a shipping company.', a: [['works'], ['for']],
      ru: 'Он работает в конструкторском бюро. Она — в судоходной компании.' },
    { s: 'She speaks one foreign language. He ___ two.', a: [['speaks']],
      ru: 'Она говорит на одном иностранном языке. Он — на двух.' },
    { s: 'He goes sailing in his free time, and she ___ aerobics.', a: [['does']],
      ru: 'В свободное время он занимается парусным спортом, а она — аэробикой.' },
    { s: 'She has a daughter, but he ___ ___ any children.', a: [['does not', 'doesn’t'], ['have']],
      ru: 'У неё есть дочь, а у него детей нет.' },
  ],
  why: 'Все глаголы стоят в третьем лице единственного числа. В отрицании окончание <b>-s</b> уходит во вспомогательный глагол: <i>does not have</i>, а не <i>does not has</i>.' },

{ id: 'u2-5a', unit: 'u2', src: '5 (а)', topic: 'Present Simple', type: 'build',
  q: 'Соберите рассказ о преподавателе по сведениям: Мария Зотова, Калининград, Петербург, кафедра иностранных языков, английский и французский, замужем, сын, бадминтон.',
  items: [
    { ru: 'Мария Зотова — преподаватель иностранных языков.', a: 'Maria Zotova is a teacher of foreign languages.' },
    { ru: 'Она родом из Калининграда, а живёт в Петербурге.', a: 'She comes from Kaliningrad and she lives in Saint Petersburg.', extra: ['come'] },
    { ru: 'Она работает на кафедре иностранных языков нашего университета.', a: 'She works at the department of foreign languages of our university.', extra: ['work'] },
    { ru: 'Она говорит по-английски и по-французски.', a: 'She speaks English and French.' },
    { ru: 'Она замужем, и у неё есть сын.', a: 'She is married and she has a son.', extra: ['have'] },
    { ru: 'В свободное время она играет в бадминтон.', a: 'In her free time she plays badminton.', extra: ['play'] },
  ],
  why: 'Рассказ о человеке ведётся в Present Simple: это постоянные сведения. Подлежащее <i>she</i> требует окончания <b>-s</b> у каждого смыслового глагола.' },

{ id: 'u2-5b', unit: 'u2', src: '5 (б)', topic: 'Present Simple', type: 'order',
  q: 'Расставьте предложения так, чтобы получился связный рассказ об инженере-кораблестроителе.',
  lines: [
    'Ewan Blair is a naval architect.',
    'He comes from Ireland and lives in Belfast.',
    'He works at a shipbuilding research centre.',
    'He speaks Irish and Spanish.',
    'He is not married, but he has two cats.',
    'In his free time he goes cycling and sails a small yacht.',
  ],
  why: 'Рассказ о человеке строится по одной схеме: профессия, откуда родом и где живёт, где работает, языки, семья, свободное время.' },

{ id: 'u2-6', unit: 'u2', src: '6', topic: 'правила чтения', type: 'fill',
  q: 'Прочитайте транскрипцию и запишите слово буквами.',
  items: [
    { s: '/dɪˈzaɪn/ — ___', a: [['design']], ru: 'проектировать; проект' },
    { s: '/ˈfɒrən/ — ___', a: [['foreign']], ru: 'иностранный' },
    { s: '/ˈdɔːtə/ — ___', a: [['daughter']], ru: 'дочь' },
    { s: '/eɪt/ — ___', a: [['eight']], ru: 'восемь' },
    { s: '/θruː/ — ___', a: [['through']], ru: 'через, сквозь' },
    { s: '/ˈlɔːjə/ — ___', a: [['lawyer']], ru: 'юрист' },
    { s: '/məˈriːn/ — ___', a: [['marine']], ru: 'морской, судовой' },
    { s: '/ˈɪndəstri/ — ___', a: [['industry']], ru: 'промышленность' },
  ],
  why: 'Одному звуку в английском отвечает несколько написаний: /eɪ/ — <i>eigh</i>, /uː/ — <i>ough</i>, /ɔː/ — <i>augh</i> и <i>aw</i>. Транскрипция показывает звучание, а не буквы.' },

/* ===== SECTION B ===== */

{ id: 'u2-7a', unit: 'u2', src: '7 (а)', topic: 'вопросы в Present Simple', type: 'build',
  q: 'Соберите общие вопросы и краткие ответы о персонажах.',
  items: [
    { ru: 'Мария живёт в Петербурге?', a: 'Does Maria live in Saint Petersburg?', extra: ['lives'] },
    { ru: 'Да, живёт. (краткий ответ)', a: 'Yes, she does.' },
    { ru: 'Юэн говорит по-японски?', a: 'Does Ewan speak Japanese?', extra: ['speaks'] },
    { ru: 'Нет, не говорит. (краткий ответ)', a: 'No, he doesn’t.' },
    { ru: 'Вера работает в судоходной компании?', a: 'Does Vera work for a shipping company?', extra: ['works'] },
  ],
  why: 'В вопросе вспомогательный <i>does</i> стоит перед подлежащим, а смысловой глагол теряет окончание. Краткий ответ повторяет только <i>does</i> или <i>doesn’t</i>.' },

{ id: 'u2-7b', unit: 'u2', src: '7 (б)', topic: 'отрицание в Present Simple', type: 'fill',
  q: 'Дополните утверждения и отрицания о персонажах юнита.',
  items: [
    { s: 'Vera ___ from Scotland; she comes from Murmansk.', a: [['does not come', 'doesn’t come']],
      ru: 'Вера не из Шотландии, она из Мурманска.' },
    { s: 'Ewan ___ in Saint Petersburg; he lives in Belfast.', a: [['does not live', 'doesn’t live']],
      ru: 'Юэн не живёт в Петербурге, он живёт в Белфасте.' },
    { s: 'Nikita ___ in the maritime industry.', a: [['works']],
      ru: 'Никита работает в судостроительной промышленности.' },
    { s: 'Maria ___ Italian; she speaks French.', a: [['does not speak', 'doesn’t speak']],
      ru: 'Мария не говорит по-итальянски, она говорит по-французски.' },
    { s: 'Vera ___ a daughter.', a: [['has']], ru: 'У Веры есть дочь.' },
    { s: 'Ewan ___ cycling at the weekend.', a: [['goes']], ru: 'Юэн катается на велосипеде по выходным.' },
    { s: 'Maria and Vera ___ volleyball.', a: [['do not play', 'don’t play']],
      ru: 'Мария и Вера не играют в волейбол.' },
  ],
  why: 'Отрицание: <i>does not (doesn’t)</i> для <i>he, she, it</i> и <i>do not (don’t)</i> для остальных лиц; после них глагол стоит без окончания.' },

{ id: 'u2-8', unit: 'u2', src: '8', topic: 'вопросы в Present Simple', type: 'fill',
  q: 'Задайте общий вопрос и дайте отрицательный ответ.',
  items: [
    { s: '___ your brother work at the shipyard? — No, he ___ work at the shipyard.',
      a: [['Does'], ['does not', 'doesn’t']], ru: 'Твой брат работает на верфи? — Нет, не работает.' },
    { s: '___ Marina drive a car? — No, she ___ drive a car.',
      a: [['Does'], ['does not', 'doesn’t']], ru: 'Марина водит машину? — Нет, не водит.' },
    { s: '___ the professor write textbooks? — No, he ___ write textbooks.',
      a: [['Does'], ['does not', 'doesn’t']], ru: 'Профессор пишет учебники? — Нет, не пишет.' },
    { s: '___ your fellow-students sleep in class? — No, they ___ sleep in class.',
      a: [['Do'], ['do not', 'don’t']], ru: 'Твои однокурсники спят на занятиях? — Нет, не спят.' },
    { s: '___ Anton play hockey? — No, he ___ play hockey.',
      a: [['Does'], ['does not', 'doesn’t']], ru: 'Антон играет в хоккей? — Нет, не играет.' },
    { s: '___ you miss the first double period? — No, I ___ miss it.',
      a: [['Do'], ['do not', 'don’t']], ru: 'Ты пропускаешь первую пару? — Нет, не пропускаю.' },
  ],
  why: 'Форма вспомогательного глагола выбирается по подлежащему: <i>does</i> — для <i>he, she, it</i>, <i>do</i> — для <i>I, we, you, they</i>. Смысловой глагол при этом не меняется.' },

{ id: 'u2-9a', unit: 'u2', src: '9 (а)', topic: 'вопросы в Present Simple', type: 'fill',
  q: 'Заполните пропуски в специальных вопросах.',
  items: [
    { s: 'Where ___ your friend ___ from?', a: [['does'], ['come']], ru: 'Откуда родом твой друг?' },
    { s: 'What ___ your father ___?', a: [['does'], ['do']], ru: 'Кем работает твой отец?' },
    { s: 'When ___ the first double period ___?', a: [['does'], ['begin', 'start']], ru: 'Когда начинается первая пара?' },
    { s: 'How ___ she ___ to the university?', a: [['does'], ['get']], ru: 'Как она добирается до университета?' },
    { s: 'What subjects ___ they ___ in the first year?', a: [['do'], ['study']], ru: 'Какие предметы они изучают на первом курсе?' },
    { s: 'How many double periods ___ you ___ on Monday?', a: [['do'], ['have']], ru: 'Сколько пар у вас в понедельник?' },
  ],
  why: 'Порядок в специальном вопросе: вопросительное слово + <i>do/does</i> + подлежащее + смысловой глагол без окончания.' },

{ id: 'u2-9b', unit: 'u2', src: '9 (б)', topic: 'вопросы в Present Simple', type: 'build',
  q: 'Соберите вопросы о персонажах юнита.',
  items: [
    { ru: 'Где он живёт?', a: 'Where does he live?', extra: ['lives'] },
    { ru: 'Чем она занимается в свободное время?', a: 'What does she do in her free time?' },
    { ru: 'Сколько у неё детей?', a: 'How many children does she have?', extra: ['has'] },
    { ru: 'Где работает Юэн?', a: 'Where does Ewan work?', extra: ['works'] },
    { ru: 'Он говорит по-английски?', a: 'Does he speak English?' },
  ],
  why: 'Окончание <b>-s</b> в предложении появляется один раз: если есть <i>does</i>, смысловой глагол остаётся в начальной форме.' },

{ id: 'u2-10', unit: 'u2', src: '10', topic: 'Present Simple', type: 'order',
  q: 'Расставьте предложения по порядку, чтобы получился рассказ о старшем брате.',
  lines: [
    'My elder brother is a marine engineer.',
    'He works for a shipyard in Severodvinsk.',
    'His working day begins at eight o’clock.',
    'He checks the machinery of a new vessel.',
    'In the evening he studies for his Master’s degree.',
    'At the weekend he goes rowing with his friends.',
  ],
  why: 'Рассказ о человеке идёт от общего к частному: кто он, где работает, как проходит его день, чем занят в свободное время.' },

{ id: 'u2-11', unit: 'u2', src: '11', topic: 'Present Simple', type: 'build',
  q: 'Соберите английский перевод.',
  items: [
    { ru: 'Павел работает в конструкторском бюро при верфи.', a: 'Pavel works at the design bureau of the shipyard.', extra: ['work'] },
    { ru: 'Твой брат занимается греблей?', a: 'Does your brother go rowing?', extra: ['goes'] },
    { ru: 'У Марины нет чертёжной доски.', a: 'Marina doesn’t have a drawing board.', extra: ['don’t'] },
    { ru: 'Марине нравится её новая лаборатория.', a: 'Marina likes her new laboratory.' },
    { ru: 'Чем твои однокурсники занимаются в свободное время?', a: 'What do your fellow-students do in their free time?' },
    { ru: 'Где живёт твой однокурсник?', a: 'Where does your fellow-student live?', extra: ['lives'] },
  ],
  why: 'Русское «нет у кого-то» передаётся отрицанием глагола <i>have</i>: <i>doesn’t have</i>. В вопросе и отрицании смысловой глагол окончания не получает.' },

{ id: 'u2-12', unit: 'u2', src: '12', topic: 'вопросы в Present Simple', type: 'fill',
  q: 'Вставьте <i>is</i> или <i>does</i> в нужной форме.',
  items: [
    { s: 'Where ___ Marina from? And where ___ her family live?', a: [['is'], ['does']],
      ru: 'Откуда Марина? А где живёт её семья?' },
    { s: 'When ___ the seminar begin? When ___ the next test in mathematics?', a: [['does'], ['is']],
      ru: 'Когда начинается семинар? Когда следующая контрольная по математике?' },
    { s: '___ Pavel a designer? ___ he design propellers?', a: [['Is'], ['Does']],
      ru: 'Павел конструктор? Он проектирует гребные винты?' },
    { s: 'What kind of ships ___ your brother design? ___ he a good engineer?', a: [['does'], ['Is']],
      ru: 'Какие суда проектирует твой брат? Он хороший инженер?' },
    { s: '___ Vera like rowing? What ___ the weather like on the gulf?', a: [['Does'], ['is']],
      ru: 'Вере нравится гребля? Какая погода на заливе?' },
  ],
  why: 'Если сказуемое — <i>to be</i>, вопрос строится перестановкой. Если сказуемое — любой другой глагол, нужен вспомогательный <i>do/does</i>.' },

/* ===== SECTION C ===== */

{ id: 'u2-13a', unit: 'u2', src: '13 (а)', topic: 'лексика юнита', type: 'order',
  q: 'Расставьте дни недели по порядку, начиная с понедельника.',
  lines: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  why: 'Названия дней хранят имена светил и северных богов: Moon, Tiu, Odin, Thor, Freya, Saturn, Sun + <i>day</i>. Пишутся они всегда с большой буквы.' },

{ id: 'u2-13b', unit: 'u2', src: '13 (б)', topic: 'лексика юнита', type: 'choice',
  q: 'Выберите верный вариант.',
  items: [
    { s: 'Saturday and Sunday are ___.', ru: 'Суббота и воскресенье — это…',
      opts: [
        { t: 'the weekend', ok: true, why: 'Два нерабочих дня по-английски называются <i>the weekend</i>.' },
        { t: 'weekdays', why: '<i>weekdays</i> — будни, дни с понедельника по пятницу.' },
        { t: 'holidays', why: '<i>holidays</i> — праздники и каникулы, а не обычные выходные.' },
      ] },
    { s: 'We have our English classes ___ Tuesdays.', ru: 'Занятия по английскому у нас по вторникам.',
      opts: [
        { t: 'on', ok: true, why: 'С днями недели употребляется предлог <b>on</b>.' },
        { t: 'in', why: '<i>in</i> ставится перед частью суток, месяцем или годом.' },
        { t: 'at', why: '<i>at</i> указывает точное время: <i>at eight o’clock</i>.' },
      ] },
    { s: 'The day after Wednesday is ___.', ru: 'День после среды — это…',
      opts: [
        { t: 'Thursday', ok: true, why: 'Четверг идёт сразу за средой.' },
        { t: 'Tuesday', why: 'Вторник стоит перед средой, а не после неё.' },
        { t: 'Friday', why: 'Пятница отстоит от среды на два дня.' },
      ] },
    { s: 'The day before Sunday is ___.', ru: 'День перед воскресеньем — это…',
      opts: [
        { t: 'Saturday', ok: true, why: 'Суббота — последний день перед воскресеньем.' },
        { t: 'Monday', why: 'Понедельник идёт после воскресенья.' },
        { t: 'Friday', why: 'Пятница стоит за день до субботы.' },
      ] },
    { s: 'Monday, Tuesday, Wednesday, Thursday and Friday are ___.', ru: 'Понедельник — пятница это…',
      opts: [
        { t: 'weekdays', ok: true, why: 'Пять рабочих дней называются <i>weekdays</i>.' },
        { t: 'the weekend', why: 'Выходными считаются только суббота и воскресенье.' },
        { t: 'months', why: '<i>months</i> — месяцы, а не дни недели.' },
      ] },
  ],
  why: 'Дни недели употребляются с предлогом <i>on</i>; форма множественного числа <i>on Tuesdays</i> означает регулярность — «по вторникам».' },

{ id: 'u2-14', unit: 'u2', src: '14', topic: 'лексика юнита', type: 'match',
  q: 'Подберите русские эквиваленты учебным выражениям.',
  pairs: [
    ['be doing a course in', 'учиться на (специальность)'],
    ['attend classes', 'посещать практические занятия'],
    ['miss classes', 'пропускать занятия'],
    ['look through your notes', 'просматривать конспект'],
    ['double period', 'пара (сдвоенное занятие)'],
    ['descriptive geometry', 'начертательная геометрия'],
    ['take part in', 'принимать участие в'],
    ['be over', 'заканчиваться'],
    ['come easy to', 'легко даваться'],
    ['fellow-student', 'однокурсник'],
    ['hall of residence', 'общежитие'],
  ],
  why: 'Эти сочетания запоминаются целиком: <i>come easy to somebody</i> — «даваться кому-то легко», <i>be over</i> — «закончиться».' },

{ id: 'u2-15', unit: 'u2', src: '15', topic: 'лексика юнита', type: 'choice',
  q: 'Выберите подходящее продолжение для каждого места в рассказе о рабочем дне первокурсника.',
  items: [
    { s: 'Anton is in his first year at the faculty of marine engineering. ___',
      ru: 'Антон учится на первом курсе факультета корабельной энергетики.',
      opts: [
        { t: 'His studies interest him a lot.', ok: true, why: 'Продолжение говорит об учёбе — о том же, о чём первая фраза.' },
        { t: 'He works for a law firm and meets clients.', why: 'Антон студент, а не юрист в фирме.' },
        { t: 'She lives in the hall of residence.', why: 'Речь идёт об Антоне, поэтому нужно местоимение <i>he</i>.' },
      ] },
    { s: 'He wakes up at seven o’clock and takes a quick shower. ___',
      ru: 'Он просыпается в семь и быстро принимает душ.',
      opts: [
        { t: 'In the morning he eats very little.', ok: true, why: 'Следующая мысль по распорядку — завтрак.' },
        { t: 'He never wakes up before noon.', why: 'Противоречит первой фразе: он встаёт в семь.' },
        { t: 'He has dinner with his fellow-students.', why: 'Ужин не относится к утреннему распорядку.' },
      ] },
    { s: 'The trolleybus takes him to the university in half an hour. ___',
      ru: 'Троллейбус довозит его до университета за полчаса.',
      opts: [
        { t: 'In the trolleybus he usually listens to music.', ok: true, why: 'Речь по-прежнему о дороге в университет.' },
        { t: 'He lives next to the main building.', why: 'Противоречит получасовой дороге.' },
        { t: 'He measures voltage in the laboratory.', why: 'Лаборатория — это уже занятия, а не дорога.' },
      ] },
    { s: 'When the classes are over, he often works in the reading-room. ___',
      ru: 'Когда занятия заканчиваются, он часто работает в читальном зале.',
      opts: [
        { t: 'He also goes to the meetings of the scientific society.', ok: true, why: 'Продолжение перечисляет другие дела после занятий.' },
        { t: 'He leaves home at a quarter to eight.', why: 'Это утренний пункт распорядка, а не вечерний.' },
        { t: 'He never comes to the university.', why: 'Противоречит всему рассказу.' },
      ] },
  ],
  why: 'Пропуск в тексте заполняется по двум признакам: смысл соседних предложений и согласование лица и времени глагола.' },

{ id: 'u2-16', unit: 'u2', src: '16', topic: 'Present Simple', type: 'build',
  q: 'Соберите полные ответы на вопросы к рассказу о рабочем дне.',
  items: [
    { ru: 'Он учится на первом курсе факультета корабельной энергетики.', a: 'He is in his first year at the faculty of marine engineering.' },
    { ru: 'Его первая пара начинается в половине девятого.', a: 'His first double period begins at half past eight.', extra: ['begin'] },
    { ru: 'Дорога занимает у него полчаса.', a: 'It takes him half an hour to get there.', extra: ['he'] },
    { ru: 'Он изучает физику, математику и начертательную геометрию.', a: 'He studies physics, mathematics and descriptive geometry.' },
    { ru: 'Занятия заканчиваются в три часа.', a: 'The classes are over at three o’clock.' },
  ],
  why: 'Полный ответ повторяет строй вопроса и сохраняет Present Simple: в третьем лице единственного числа глагол получает окончание <b>-s</b>.' },

{ id: 'u2-17', unit: 'u2', src: '17', topic: 'отрицание в Present Simple', type: 'fill',
  q: 'Утверждения ложны. Исправьте их: поставьте глагол в отрицательную форму (полную или краткую).',
  items: [
    { s: 'Anton ___ in the hall of residence — he lives at home.', a: [['does not live', 'doesn’t live']],
      ru: 'Антон не живёт в общежитии — он живёт дома.' },
    { s: 'He ___ to the university by metro — he takes a trolleybus.', a: [['does not go', 'doesn’t go']],
      ru: 'Он не ездит в университет на метро — он ездит на троллейбусе.' },
    { s: 'The first double period ___ at nine — it begins at half past eight.', a: [['does not begin', 'doesn’t begin', 'does not start', 'doesn’t start']],
      ru: 'Первая пара начинается не в девять — она начинается в половине девятого.' },
    { s: 'Anton ___ lectures — he attends all of them.', a: [['does not miss', 'doesn’t miss']],
      ru: 'Антон не пропускает лекции — он ходит на все.' },
    { s: 'His fellow-students ___ in the laboratory on Sunday — they work there on Thursday.', a: [['do not work', 'don’t work']],
      ru: 'Его однокурсники не работают в лаборатории в воскресенье — они работают там в четверг.' },
    { s: 'Rowing ___ easy to him — he trains twice a week.', a: [['does not come', 'doesn’t come']],
      ru: 'Гребля даётся ему нелегко — он тренируется дважды в неделю.' },
  ],
  why: 'Отрицание строится вспомогательным глаголом: <i>does not (doesn’t)</i> + начальная форма. Множественное подлежащее требует <i>do not (don’t)</i>.' },

{ id: 'u2-18', unit: 'u2', src: '18', topic: 'предлоги', type: 'fill',
  q: 'Вставьте подходящие предлоги.',
  items: [
    { s: 'Anton is doing a course ___ robotics ___ the faculty of marine electronics.', a: [['in'], ['at']],
      ru: 'Антон учится на специальности «робототехника» на факультете морского приборостроения.' },
    { s: 'We are ___ our second year.', a: [['in']], ru: 'Мы на втором курсе.' },
    { s: 'Pavel often works ___ the reading-room ___ the evening.', a: [['in'], ['in']],
      ru: 'Павел часто работает в читальном зале вечером.' },
    { s: '___ my way home I listen ___ music.', a: [['On'], ['to']], ru: 'По дороге домой я слушаю музыку.' },
    { s: 'Our classes begin ___ nine o’clock.', a: [['at']], ru: 'Занятия у нас начинаются в девять часов.' },
    { s: 'Marina works ___ the laboratory ___ Thursdays.', a: [['in'], ['on']],
      ru: 'Марина работает в лаборатории по четвергам.' },
    { s: 'Mathematics comes easy ___ Marina, though she is not very good ___ chemistry.', a: [['to'], ['at']],
      ru: 'Математика даётся Марине легко, хотя с химией у неё не очень.' },
    { s: 'I usually get ___ the university ___ trolleybus.', a: [['to'], ['by']],
      ru: 'Обычно я добираюсь до университета на троллейбусе.' },
  ],
  why: 'Время: <i>at</i> — точный час, <i>in</i> — часть суток, <i>on</i> — дни недели. Устойчивые сочетания — <i>come easy to</i>, <i>be good at</i>, <i>on his way</i>, <i>by trolleybus</i> — запоминаются целиком.' },

/* ===== SECTION D ===== */

{ id: 'u2-19a', unit: 'u2', src: '19 (а)', topic: 'вопросы в Present Simple', type: 'dialog',
  q: 'Восстановите разговор двух однокурсников о дороге в университет.',
  turns: [
    { who: 'Gleb', t: 'Tell me, Marina, do you rent a flat or live in the hall of residence?' },
    { who: 'Marina', opts: [
      { t: 'In the hall of residence, on the fourth floor. My room-mate is a girl from our group.', ok: true,
        why: 'Ответ выбирает одну из двух названных возможностей и добавляет подробность.' },
      { t: 'Yes, I am. It is a long way from here.', why: 'Вопрос задан с <i>do</i>, поэтому ответ с <i>am</i> не подходит.' },
      { t: 'No, thank you, I am not hungry.', why: 'Ответ не о том, о чём спрашивают.' },
    ] },
    { who: 'Gleb', t: 'My parents live far from the university, and I still live with them.' },
    { who: 'Marina', opts: [
      { t: 'And how do you get to the university in the morning?', ok: true, why: 'Естественный встречный вопрос о дороге, с вспомогательным <i>do</i>.' },
      { t: 'And how are you getting to the university right now?', why: 'Речь о постоянной привычке, а не о том, что происходит сейчас.' },
      { t: 'And where do your parents work in Belfast?', why: 'Разговор идёт о нашем городе, Белфаст здесь ни при чём.' },
    ] },
    { who: 'Gleb', t: 'I take the metro and then a bus, so now and then I am late for the first double period.' },
    { who: 'Marina', opts: [
      { t: 'I never miss classes, so you can borrow my notes.', ok: true, why: 'Наречие <i>never</i> стоит перед смысловым глаголом, глагол — без окончания после <i>I</i>.' },
      { t: 'I never misses classes.', why: 'После <i>I</i> глагол не получает окончания <b>-s</b>.' },
      { t: 'I am never miss classes.', why: 'Смысловому глаголу в Present Simple не нужен <i>am</i>.' },
    ] },
  ],
  why: 'В разговоре о привычном ходе дел работает Present Simple: вопросы с <i>do/does</i>, наречия частотности перед смысловым глаголом.' },

{ id: 'u2-19b', unit: 'u2', src: '19 (б)', topic: 'наречия частотности', type: 'order',
  q: 'Расставьте наречия частотности от нуля к ста процентам.',
  lines: ['never (0 %)', 'rarely (10 %)', 'sometimes (40 %)', 'often (70 %)', 'usually (90 %)', 'always (100 %)'],
  why: 'Наречие частотности ставится перед смысловым глаголом (<i>he often works</i>), но после глагола <i>to be</i> (<i>he is often late</i>).' },

{ id: 'u2-19c', unit: 'u2', src: '19 (в)', topic: 'третье лицо единственного числа', type: 'sort',
  q: 'Определите, какая форма глагола идёт с каждым подлежащим.',
  cats: { w: 'work', ws: 'works' },
  items: [
    { t: 'I', c: 'w' }, { t: 'we', c: 'w' }, { t: 'you', c: 'w' }, { t: 'they', c: 'w' },
    { t: 'my fellow-students', c: 'w' }, { t: 'the students of our group', c: 'w' },
    { t: 'he', c: 'ws' }, { t: 'she', c: 'ws' }, { t: 'it', c: 'ws' },
    { t: 'Marina', c: 'ws' }, { t: 'the gantry crane', c: 'ws' }, { t: 'my elder brother', c: 'ws' },
  ],
  why: 'Окончание <b>-s</b> появляется только в третьем лице единственного числа: <i>he, she, it</i> и любое существительное в единственном числе.' },

{ id: 'u2-20', unit: 'u2', src: '20', topic: 'Present Simple', type: 'fill',
  q: 'Раскройте скобки, поставив глагол в Present Simple.',
  items: [
    { s: 'The students ___ (go) to the laboratory on Thursdays.', a: [['go']], ru: 'По четвергам студенты ходят в лабораторию.' },
    { s: 'Their working day ___ (start) at half past eight.', a: [['starts']], ru: 'Их рабочий день начинается в половине девятого.' },
    { s: 'I ___ (have) two double periods on Friday.', a: [['have']], ru: 'В пятницу у меня две пары.' },
    { s: 'We never ___ (miss) our physics seminars.', a: [['miss']], ru: 'Мы никогда не пропускаем семинары по физике.' },
    { s: 'Marina ___ (leave) home at ten past seven.', a: [['leaves']], ru: 'Марина выходит из дома в десять минут восьмого.' },
    { s: 'Anton ___ (attend) all the laboratory classes.', a: [['attends']], ru: 'Антон посещает все лабораторные занятия.' },
    { s: 'We usually ___ (do) our drawings in the evening.', a: [['do']], ru: 'Обычно мы чертим вечером.' },
    { s: 'It ___ (take) me twenty minutes to get to the metro.', a: [['takes']], ru: 'До метро мне идти двадцать минут.' },
    { s: 'They ___ (study) computer science in the second year.', a: [['study']], ru: 'На втором курсе они изучают информатику.' },
    { s: 'Pavel ___ (have) a drawing class at a quarter past four.', a: [['has']], ru: 'В четверть пятого у Павла занятие по черчению.' },
  ],
  why: 'Форму выбирает подлежащее. У <i>have</i> третье лицо единственного числа — особая форма <b>has</b>, у <i>study</i> — <b>studies</b>.' },

{ id: 'u2-21', unit: 'u2', src: '21', topic: 'Present Simple', type: 'fill',
  q: 'Проспрягайте глагол <i>live</i>: заполните пропуски утвердительными, отрицательными и вопросительными формами.',
  items: [
    { s: 'I ___ near the shipyard.', a: [['live']], ru: 'Я живу рядом с верфью.' },
    { s: '___ you live in the hall of residence?', a: [['Do']], ru: 'Ты живёшь в общежитии?' },
    { s: 'He ___ near the university.', a: [['does not live', 'doesn’t live']], ru: 'Он живёт не рядом с университетом.' },
    { s: '___ she live with her family?', a: [['Does']], ru: 'Она живёт с семьёй?' },
    { s: 'The dog ___ in the yard.', a: [['lives']], ru: 'Собака живёт во дворе.' },
    { s: 'We ___ far from the metro.', a: [['do not live', 'don’t live']], ru: 'Мы живём недалеко от метро.' },
    { s: '___ they live in Glasgow?', a: [['Do']], ru: 'Они живут в Глазго?' },
  ],
  why: 'В утверждении окончание <b>-s</b> получает только третье лицо единственного числа; в вопросе и отрицании оно уходит во вспомогательный глагол <i>does</i>.' },

{ id: 'u2-22', unit: 'u2', src: '22', topic: 'вопросы в Present Simple', type: 'fill',
  q: 'Задайте вопрос и дайте краткий отрицательный ответ по образцу: <i>We work in the laboratory. And Pavel? — Does Pavel work in the laboratory? — No, he doesn’t.</i>',
  items: [
    { s: 'I have tea and toast for breakfast. And you? — ___ you ___ tea and toast for breakfast? — No, I ___.',
      a: [['Do'], ['have'], ['do not', 'don’t']], ru: 'Я завтракаю чаем с тостами. А ты?' },
    { s: 'Our group works in this laboratory. And Pavel? — ___ Pavel ___ in this laboratory? — No, he ___.',
      a: [['Does'], ['work'], ['does not', 'doesn’t']], ru: 'Наша группа работает в этой лаборатории. А Павел?' },
    { s: 'In the trolleybus Anton reads his notes. And your friends? — ___ they ___ their notes in the trolleybus? — No, they ___.',
      a: [['Do'], ['read'], ['do not', 'don’t']], ru: 'В троллейбусе Антон читает конспект. А твои друзья?' },
    { s: 'They leave home at ten to eight. And Marina? — ___ Marina ___ home at ten to eight? — No, she ___.',
      a: [['Does'], ['leave'], ['does not', 'doesn’t']], ru: 'Они выходят из дома без десяти восемь. А Марина?' },
    { s: 'My working day starts at seven. And yours? — ___ your working day ___ at seven? — No, it ___.',
      a: [['Does'], ['start'], ['does not', 'doesn’t']], ru: 'Мой рабочий день начинается в семь. А твой?' },
  ],
  why: 'В вопросе смысловой глагол стоит в начальной форме, а краткий ответ состоит только из подлежащего и вспомогательного глагола.' },

{ id: 'u2-23', unit: 'u2', src: '23', topic: 'отрицание в Present Simple', type: 'fill',
  q: 'Поставьте глагол из скобок в утвердительную или отрицательную форму — по смыслу предложения.',
  items: [
    { s: 'I ___ this timetable; there are five double periods on Monday. (like)', a: [['do not like', 'don’t like']],
      ru: 'Мне не нравится это расписание: в понедельник пять пар.' },
    { s: '“Where is the seminar on hull strength?” “Sorry, I ___.” (know)', a: [['do not know', 'don’t know']],
      ru: '«Где семинар по прочности корпуса?» — «Извини, не знаю».' },
    { s: 'Gleb is very talkative. He always ___ a lot at seminars. (talk)', a: [['talks']],
      ru: 'Глеб очень общительный. Он всегда много говорит на семинарах.' },
    { s: 'Anton and Pavel are first-year students. They ___ marine engineering at our faculty. (study)', a: [['study']],
      ru: 'Антон и Павел — первокурсники. Они изучают судовую энергетику на нашем факультете.' },
    { s: 'Descriptive geometry ___ easy to Marina — she spends hours on every drawing. (come)',
      a: [['does not come', 'doesn’t come']], ru: 'Начертательная геометрия даётся Марине нелегко: на каждый чертёж у неё уходят часы.' },
    { s: 'Vera ___ German well enough to read technical manuals. (speak)', a: [['speaks']],
      ru: 'Вера знает немецкий достаточно, чтобы читать технические руководства.' },
    { s: 'Nikita lives far from the university, so he often ___ the first double period. (miss)', a: [['misses']],
      ru: 'Никита живёт далеко от университета, поэтому часто пропускает первую пару.' },
    { s: 'Kirill is a vegetarian, so he ___ the sausages in the canteen. (eat)', a: [['does not eat', 'doesn’t eat']],
      ru: 'Кирилл вегетарианец, поэтому сосиски в столовой он не ест.' },
  ],
  why: 'Форму подсказывает соседнее предложение: если оно противоречит действию, нужен отрицательный вариант с <i>do/does not</i>.' },

{ id: 'u2-24', unit: 'u2', src: '24', topic: 'Present Simple', type: 'fill',
  q: 'Вставьте <i>am, is, are, do, does, don’t, doesn’t</i>.',
  items: [
    { s: 'They ___ in their third year.', a: [['are']], ru: 'Они на третьем курсе.' },
    { s: 'We ___ go to the university on Sunday.', a: [['do not', 'don’t']], ru: 'В воскресенье мы не ездим в университет.' },
    { s: 'I ___ very glad to see you.', a: [['am']], ru: 'Я очень рад тебя видеть.' },
    { s: 'Marina ___ have breakfast at home.', a: [['does not', 'doesn’t']], ru: 'Марина не завтракает дома.' },
    { s: '___ Anton and Vera live near the shipyard?', a: [['Do']], ru: 'Антон и Вера живут рядом с верфью?' },
    { s: '___ Pavel like descriptive geometry?', a: [['Does']], ru: 'Павлу нравится начертательная геометрия?' },
    { s: 'The main building of the university ___ very old.', a: [['is']], ru: 'Главное здание университета очень старое.' },
    { s: 'My fellow-students ___ interested in marine ecology.', a: [['are']], ru: 'Мои однокурсники интересуются экологией моря.' },
    { s: 'What ___ her speciality?', a: [['is']], ru: 'Какая у неё специальность?' },
    { s: '___ the training classes over at seven?', a: [['Are']], ru: 'Тренировки заканчиваются в семь?' },
  ],
  why: 'Если после пропуска стоит существительное или прилагательное, нужен глагол <i>to be</i>; если смысловой глагол — вспомогательный <i>do/does</i>.' },

{ id: 'u2-25', unit: 'u2', src: '25', topic: 'Present Simple', type: 'build',
  q: 'Соберите английский перевод.',
  items: [
    { ru: 'По четвергам у нас нет занятий.', a: 'We don’t have classes on Thursdays.', extra: ['doesn’t'] },
    { ru: 'Мои однокурсники живут в общежитии.', a: 'My fellow-students live in the hall of residence.', extra: ['lives'] },
    { ru: 'Антон добирается до верфи на троллейбусе.', a: 'Anton gets to the shipyard by trolleybus.' },
    { ru: 'Сколько пар у тебя во вторник?', a: 'How many double periods do you have on Tuesday?' },
    { ru: 'Ты изучаешь начертательную геометрию на первом курсе?', a: 'Do you study descriptive geometry in the first year?' },
    { ru: 'Тренировки по гребле заканчиваются в восемь.', a: 'The rowing training classes are over at eight.' },
  ],
  why: 'Русское «у нас нет занятий» передаётся отрицанием глагола <i>have</i>, а «заканчиваться» — сочетанием <i>be over</i> с глаголом <i>to be</i>.' },

/* ===== SECTION E ===== */

{ id: 'u2-26a', unit: 'u2', src: '26 (а)', topic: 'объектные местоимения', type: 'choice',
  q: 'Выберите форму местоимения. Обратите внимание, что стоит перед пропуском.',
  items: [
    { s: 'Marina attends lectures and never misses ___.', ru: 'Марина ходит на лекции и никогда их не пропускает.',
      opts: [
        { t: 'them', ok: true, why: 'После глагола ставится объектная форма — дополнение.' },
        { t: 'they', why: '<i>they</i> — форма подлежащего, дополнением она быть не может.' },
        { t: 'their', why: '<i>their</i> — притяжательное прилагательное, после него нужно существительное.' },
      ] },
    { s: 'The first double period is always difficult for ___.', ru: 'Первая пара всегда даётся ему тяжело.',
      opts: [
        { t: 'him', ok: true, why: 'После предлога <i>for</i> стоит объектная форма.' },
        { t: 'he', why: '<i>he</i> бывает только подлежащим.' },
        { t: 'his', why: '<i>his</i> требует существительного после себя.' },
      ] },
    { s: 'The dean often helps ___ with the timetable.', ru: 'Декан часто помогает нам с расписанием.',
      opts: [
        { t: 'us', ok: true, why: 'Дополнение при глаголе <i>help</i> — объектная форма <i>us</i>.' },
        { t: 'we', why: '<i>we</i> — подлежащее, а не дополнение.' },
        { t: 'our', why: '<i>our</i> — притяжательная форма: <i>our timetable</i>.' },
      ] },
    { s: 'Ask ___ about the laboratory work.', ru: 'Спросите её о лабораторной работе.',
      opts: [
        { t: 'her', ok: true, why: 'После глагола <i>ask</i> нужна объектная форма.' },
        { t: 'she', why: '<i>she</i> ставится только перед сказуемым.' },
        { t: 'hers', why: '<i>hers</i> — абсолютная притяжательная форма, «её» без существительного, здесь не подходит.' },
      ] },
    { s: 'The professor explains the drawing to ___.', ru: 'Профессор объясняет мне чертёж.',
      opts: [
        { t: 'me', ok: true, why: 'После предлога <i>to</i> местоимение <i>I</i> принимает форму <i>me</i>.' },
        { t: 'I', why: 'После предлога форма подлежащего невозможна.' },
        { t: 'my', why: '<i>my</i> — притяжательная форма, за ней должно идти существительное.' },
      ] },
  ],
  why: 'Личное местоимение после глагола и после предлога стоит в объектной форме: <i>me, us, him, her, it, them</i>.' },

{ id: 'u2-26b', unit: 'u2', src: '26 (б)', topic: 'объектные местоимения', type: 'match',
  q: 'Подберите к каждому личному местоимению его объектную форму.',
  pairs: [
    ['I', 'me'], ['we', 'us'], ['you', 'you'], ['he', 'him'],
    ['she', 'her'], ['it', 'it'], ['they', 'them'],
  ],
  why: 'У <i>you</i> и <i>it</i> обе формы совпадают, у остальных местоимений объектная форма своя.' },

{ id: 'u2-27', unit: 'u2', src: '27', topic: 'объектные местоимения', type: 'fill',
  q: 'Замените выделенное существительное местоимением.',
  items: [
    { s: 'Pavel takes part in student conferences. → Pavel takes part in ___.', a: [['them']], ru: 'Павел участвует в них.' },
    { s: 'The students attend the lecture on physics. → The students attend ___.', a: [['it']], ru: 'Студенты посещают её.' },
    { s: 'Anton often writes to his elder sister. → Anton often writes to ___.', a: [['her']], ru: 'Антон часто пишет ей.' },
    { s: 'The hall of residence stands next to the main building. → It stands next to ___.', a: [['it']], ru: 'Оно стоит рядом с ним.' },
    { s: 'Vera helps her younger brother with mathematics. → Vera helps ___ with mathematics.', a: [['him']], ru: 'Вера помогает ему с математикой.' },
    { s: 'The dean meets the first-year students. → The dean meets ___.', a: [['them']], ru: 'Декан встречает их.' },
  ],
  why: 'Существительное-дополнение заменяется объектной формой: одушевлённое — <i>him, her, them</i>, неодушевлённое в единственном числе — <i>it</i>.' },

{ id: 'u2-28', unit: 'u2', src: '28', topic: 'объектные местоимения', type: 'fill',
  q: 'Дополните вторую часть предложения по образцу: <i>I ask him about the drawing, and he asks me about the report.</i>',
  items: [
    { s: 'She helps us with the drawings, and we ___ ___ with the report.', a: [['help'], ['her']],
      ru: 'Она помогает нам с чертежами, а мы ей — с докладом.' },
    { s: 'They wait for you at the entrance, and you ___ for ___ in the reading-room.', a: [['wait'], ['them']],
      ru: 'Они ждут тебя у входа, а ты их — в читальном зале.' },
    { s: 'He asks me about the timetable, and I ___ ___ about the laboratory work.', a: [['ask'], ['him']],
      ru: 'Он спрашивает меня о расписании, а я его — о лабораторной работе.' },
    { s: 'We meet them at the station, and they ___ ___ at the university.', a: [['meet'], ['us']],
      ru: 'Мы встречаем их на вокзале, а они нас — в университете.' },
    { s: 'You know her well, and she ___ ___ well too.', a: [['knows'], ['you']],
      ru: 'Ты хорошо её знаешь, и она тебя тоже.' },
    { s: 'I write to him every week, and he ___ to ___ every month.', a: [['writes'], ['me']],
      ru: 'Я пишу ему каждую неделю, а он мне — раз в месяц.' },
  ],
  why: 'В таком обороте меняются местами подлежащее и дополнение: форма подлежащего идёт до глагола, объектная — после. Не забывайте про окончание <b>-s</b> в третьем лице.' },

{ id: 'u2-29', unit: 'u2', src: '29', topic: 'притяжательные прилагательные', type: 'fill',
  q: 'Переведите слова из скобок.',
  items: [
    { s: 'The students bring ___ (свои) drawing boards to the class.', a: [['their']],
      ru: 'Студенты приносят на занятие свои чертёжные доски.' },
    { s: '___ (Наша) department helps ___ (своим) postgraduates with equipment.', a: [['Our'], ['its']],
      ru: 'Наша кафедра помогает своим аспирантам с оборудованием.' },
    { s: 'Marina often calls ___ (своих) parents from the hall of residence.', a: [['her']],
      ru: 'Марина часто звонит родителям из общежития.' },
    { s: 'He takes ___ (свой) notebook and puts ___ (его) into the bag.', a: [['his'], ['it']],
      ru: 'Он берёт тетрадь и кладёт её в сумку.' },
    { s: 'Can Pavel answer ___ (их) questions? — No, he can’t answer ___ (их).', a: [['their'], ['them']],
      ru: 'Может ли Павел ответить на их вопросы? — Нет, не может.' },
    { s: 'Show ___ (свой) drawing to ___ (нам), please.', a: [['your'], ['us']],
      ru: 'Покажите нам, пожалуйста, свой чертёж.' },
    { s: 'It takes ___ (у меня) twenty minutes to get to the shipyard.', a: [['me']],
      ru: 'До верфи мне добираться двадцать минут.' },
    { s: 'This is ___ (его) laboratory. He works in ___ (нём) on Thursdays.', a: [['his'], ['it']],
      ru: 'Это его лаборатория. Он работает в ней по четвергам.' },
  ],
  why: 'Русское «свой» в английском выражается притяжательным прилагательным по лицу подлежащего: <i>my, our, your, his, her, its, their</i>. Перед существительным — притяжательная форма, после глагола и предлога — объектная.' },

{ id: 'u2-30', unit: 'u2', src: '30', topic: 'объектные местоимения', type: 'build',
  q: 'Соберите предложения с оборотом <i>it takes… to…</i>.',
  items: [
    { ru: 'У меня уходит десять минут, чтобы дойти до метро.', a: 'It takes me ten minutes to get to the metro.', extra: ['I'] },
    { ru: 'У нас уходит полчаса, чтобы закончить этот чертёж.', a: 'It takes us half an hour to finish this drawing.', extra: ['we'] },
    { ru: 'У него уходит два часа, чтобы подготовиться к семинару.', a: 'It takes him two hours to prepare for the seminar.' },
    { ru: 'У них уходит неделя, чтобы собрать данные для доклада.', a: 'It takes them a week to collect the data for the report.' },
    { ru: 'У неё уходит три дня, чтобы проверить расчёты.', a: 'It takes her three days to check the calculations.' },
  ],
  why: 'Схема оборота постоянна: <i>it takes</i> + объектное местоимение + отрезок времени + инфинитив с <i>to</i>.' },

/* ===== SECTION F ===== */

{ id: 'u2-31', unit: 'u2', src: '31', topic: 'лексика юнита', type: 'match',
  q: 'Подберите русские названия факультетов СПбГМТУ.',
  pairs: [
    ['Faculty of Naval Architecture and Ocean Engineering', 'факультет кораблестроения и океанотехники'],
    ['Faculty of Marine Engineering', 'факультет корабельной энергетики и автоматики'],
    ['Faculty of Marine Electronics and Control Systems', 'факультет морского приборостроения'],
    ['Faculty of Natural and Social Sciences and Humanities', 'факультет естественнонаучного и гуманитарного образования'],
    ['Faculty of Business and Management', 'факультет экономики и управления'],
  ],
  why: 'В названиях факультетов <i>naval architecture</i> — кораблестроение, <i>marine engineering</i> — судовая энергетика, <i>control systems</i> — системы управления.' },

{ id: 'u2-32a', unit: 'u2', src: '32 (а)', topic: 'вопросы в Present Simple', type: 'dialog',
  q: 'Первокурсник отвечает на вопросы об учёбе. Выберите верные реплики.',
  turns: [
    { who: 'Interviewer', t: 'Which university do you study at?' },
    { who: 'Kirill', opts: [
      { t: 'I study at Saint Petersburg State Marine Technical University.', ok: true,
        why: 'Ответ повторяет глагол вопроса в форме первого лица — без окончания.' },
      { t: 'I studies at the marine technical university.', why: 'После <i>I</i> окончания <b>-s</b> не бывает.' },
      { t: 'I am study at the marine technical university.', why: 'Смысловому глаголу в Present Simple не нужен <i>am</i>.' },
    ] },
    { who: 'Interviewer', t: 'Which days of the week do you have classes?' },
    { who: 'Kirill', opts: [
      { t: 'I have classes from Monday to Friday.', ok: true, why: 'Отрезок дней передаётся сочетанием <i>from … to …</i>.' },
      { t: 'I have classes in Monday and in Friday.', why: 'С днями недели употребляется предлог <i>on</i>, а не <i>in</i>.' },
      { t: 'I am having classes every day.', why: 'Постоянное расписание передаётся Present Simple.' },
    ] },
    { who: 'Interviewer', t: 'How many double periods a day do you usually have?' },
    { who: 'Kirill', opts: [
      { t: 'I usually have three double periods a day.', ok: true, why: 'Наречие частотности стоит перед смысловым глаголом.' },
      { t: 'I have usually three double periods a day.', why: 'Наречие частотности не ставится после смыслового глагола.' },
      { t: 'I usually has three double periods a day.', why: 'Форма <i>has</i> бывает только у <i>he, she, it</i>.' },
    ] },
  ],
  why: 'Ответ строится тем же глаголом, что и вопрос, а наречие частотности занимает место перед смысловым глаголом.' },

{ id: 'u2-32b', unit: 'u2', src: '32 (б)', topic: 'вопросы в Present Simple', type: 'build',
  q: 'Расставьте слова так, чтобы получился вопрос.',
  items: [
    { ru: 'Во сколько начинается твой рабочий день?', a: 'What time does your working day begin?', extra: ['begins'] },
    { ru: 'Что ты обычно ешь на завтрак?', a: 'What do you usually have for breakfast?' },
    { ru: 'Когда ты выходишь из дома утром?', a: 'When do you leave home in the morning?' },
    { ru: 'Сколько времени у тебя уходит на дорогу до университета?', a: 'How long does it take you to get to the university?' },
    { ru: 'Ты просматриваешь конспект перед занятиями?', a: 'Do you look through your notes before classes?' },
    { ru: 'Какие предметы даются тебе легко?', a: 'Which subjects come easy to you?' },
  ],
  why: 'Порядок в вопросе: вопросительное слово, <i>do/does</i>, подлежащее, смысловой глагол, остальные слова. Исключение — вопрос к подлежащему: <i>Which subjects come easy to you?</i> строится без вспомогательного глагола.' },

{ id: 'u2-33', unit: 'u2', src: '33', topic: 'лексика юнита', type: 'order',
  q: 'Расставьте пункты плана рассказа о своём рабочем дне по порядку.',
  lines: [
    'имя, факультет и курс',
    'подъём',
    'завтрак',
    'дорога в университет',
    'виды занятий',
    'предметы: что даётся легко, а что трудно',
    'занятия в свободное время',
  ],
  why: 'План рассказа повторяет ход дня: сначала кто вы и где учитесь, затем утро, дорога, занятия и только потом свободное время.' },

/* ===== SECTION G ===== */

{ id: 'u2-34a', unit: 'u2', src: '34 (а)', topic: 'лексика юнита', type: 'fill',
  q: 'Впишите недостающие буквы в названиях занятий.',
  items: [
    { s: 'In winter he goes sn___boarding in the park.', a: [['ow']], ru: 'Зимой он катается на сноуборде в парке.' },
    { s: 'On Saturdays we go r___ing on the Neva.', a: [['ow']], ru: 'По субботам мы занимаемся греблей на Неве.' },
    { s: 'My fellow-students play v___leyball in the sports hall.', a: [['ol']], ru: 'Мои однокурсники играют в волейбол в спортзале.' },
    { s: 'She does aer___ics twice a week.', a: [['ob']], ru: 'Она занимается аэробикой дважды в неделю.' },
    { s: 'He plays the g___tar in a student band.', a: [['ui']], ru: 'Он играет на гитаре в студенческой группе.' },
    { s: 'In summer they go sail___ on the gulf.', a: [['ing']], ru: 'Летом они ходят под парусом по заливу.' },
    { s: 'He plays bad___ton with his brother.', a: [['min']], ru: 'Он играет в бадминтон с братом.' },
    { s: 'We often watch f___ms in the evening.', a: [['il']], ru: 'Вечером мы часто смотрим фильмы.' },
  ],
  why: 'Названия занятий пишутся не так, как слышатся: <i>snowboarding</i>, <i>rowing</i>, <i>volleyball</i>, <i>aerobics</i>, <i>guitar</i>, <i>badminton</i>.' },

{ id: 'u2-34b', unit: 'u2', src: '34 (б)', topic: 'лексика юнита', type: 'sort',
  q: 'Определите, с каким глаголом употребляется название занятия.',
  cats: { go: 'go …', play: 'play …', do: 'do …' },
  items: [
    { t: 'rowing', c: 'go' }, { t: 'sailing', c: 'go' }, { t: 'skiing', c: 'go' },
    { t: 'snowboarding', c: 'go' }, { t: 'cycling', c: 'go' },
    { t: 'volleyball', c: 'play' }, { t: 'basketball', c: 'play' }, { t: 'hockey', c: 'play' },
    { t: 'badminton', c: 'play' }, { t: 'the guitar', c: 'play' },
    { t: 'aerobics', c: 'do' }, { t: 'karate', c: 'do' },
  ],
  why: '<i>go</i> идёт с занятиями на <i>-ing</i>, <i>play</i> — с играми и музыкальными инструментами, <i>do</i> — с остальными видами занятий.' },

{ id: 'u2-35', unit: 'u2', src: '35', topic: 'лексика юнита', type: 'choice',
  q: 'Прочитайте два письма и скажите, чем занимаются их авторы и адресаты.'
    + '<div class="en">Hi Lena, Thanks for your letter! It is great that the drama club at your '
    + 'academy suits you so well — the rehearsals must be real fun. As for me, I have joined the '
    + 'photo studio at our university. Our training classes are on Tuesdays and Fridays, and just '
    + 'now the whole studio is busy with a new exhibition. Write back soon! Love, Vera</div>'
    + '<div class="en">Dear Gleb, It was nice to hear from you. Playing for the university football '
    + 'team is a brilliant idea, and the training drills will surely keep you in good shape. As for '
    + 'me, research interests me more and more: our group carries out experiments in the physics '
    + 'laboratory, and I am preparing a report for the student forum. Keep in touch! Best wishes, '
    + 'Anton</div>',
  items: [
    { s: 'Vera is a member of ___.', ru: 'Вера состоит в…',
      opts: [
        { t: 'the photo studio', ok: true, why: 'Об этом прямо сказано в её письме.' },
        { t: 'the drama club', why: 'В драмкружке занимается Лена, а не Вера.' },
        { t: 'the football team', why: 'О футболе пишет Антон, и не о себе, а о Глебе.' },
      ] },
    { s: 'Lena enjoys ___.', ru: 'Лене нравятся…',
      opts: [
        { t: 'the rehearsals at the drama club', ok: true, why: 'Вера пишет подруге именно о репетициях в драмкружке.' },
        { t: 'the experiments in the laboratory', why: 'Опыты ставит Антон.' },
        { t: 'the training drills of the football team', why: 'Тренировки — это про Глеба.' },
      ] },
    { s: 'Gleb plays for ___.', ru: 'Глеб играет за…',
      opts: [
        { t: 'the university football team', ok: true, why: 'Антон называет это блестящей идеей в письме к Глебу.' },
        { t: 'the photo studio', why: 'Фотостудия — не команда, и это увлечение Веры.' },
        { t: 'the students’ scientific society', why: 'Наукой в этих письмах занят Антон.' },
      ] },
    { s: 'Anton carries out experiments in ___.', ru: 'Антон ставит опыты в…',
      opts: [
        { t: 'the physics laboratory', ok: true, why: 'Об этом сказано во втором письме.' },
        { t: 'the drama club', why: 'В драмкружке репетируют, а не ставят опыты.' },
        { t: 'the reading-room', why: 'В читальном зале работают с книгами, а не с приборами.' },
      ] },
  ],
  why: 'В письмах о занятиях повторяются одни и те же обороты: <i>be a member of</i>, <i>take part in</i>, <i>carry out experiments</i>, <i>keep fit</i>, <i>be busy preparing for</i>.' },

{ id: 'u2-36', unit: 'u2', src: '36', topic: 'правила чтения', type: 'fill',
  q: 'Прочитайте транскрипцию и запишите слово из писем буквами.',
  items: [
    { s: '/rɪˈhɜːsl/ — ___', a: [['rehearsal']], ru: 'репетиция' },
    { s: '/ˌeksɪˈbɪʃn/ — ___', a: [['exhibition']], ru: 'выставка' },
    { s: '/pəˈfɔːməns/ — ___', a: [['performance']], ru: 'представление' },
    { s: '/rɪˈpɔːt/ — ___', a: [['report']], ru: 'доклад, отчёт' },
    { s: '/ˌkɒmpəˈtɪʃn/ — ___', a: [['competition']], ru: 'соревнование' },
    { s: '/rɪˈsɜːtʃ/ — ___', a: [['research']], ru: 'научное исследование' },
    { s: '/ˈbrɪljənt/ — ___', a: [['brilliant']], ru: 'блестящий' },
    { s: '/ɪkˈsperɪmənt/ — ___', a: [['experiment']], ru: 'опыт, эксперимент' },
  ],
  why: 'Сочетание <i>-tion</i> звучит как /ʃn/, буква <i>h</i> в <i>rehearsal</i> не читается, а ударение в длинных словах чаще падает на предпоследний слог перед <i>-tion</i>.' },

{ id: 'u2-37', unit: 'u2', src: '37', topic: 'речевой этикет', type: 'match',
  q: 'Подберите русские соответствия письменным клише.',
  pairs: [
    ['Thanks for your letter!', 'Спасибо за твоё письмо!'],
    ['It was nice to hear from you.', 'Было приятно получить от тебя весточку.'],
    ['As for me, …', 'Что до меня, …'],
    ['Keep in touch!', 'Не пропадай!'],
    ['Let me know about …', 'Дай мне знать о …'],
    ['Write back soon.', 'Напиши поскорее ответ.'],
    ['Well, that’s all for now.', 'Ну вот и всё пока.'],
    ['Best wishes,', 'С наилучшими пожеланиями,'],
  ],
  why: 'Клише дружеского письма закреплены за его частями: благодарность — в начале, <i>Keep in touch</i> и подпись — в конце.' },

{ id: 'u2-38', unit: 'u2', src: '38', topic: 'лексика юнита', type: 'match',
  q: 'Соберите устойчивые сочетания: подберите к глаголу его дополнение.',
  pairs: [
    ['carry out', 'experiments'],
    ['keep', 'fit'],
    ['give', 'a performance'],
    ['prepare for', 'an exhibition'],
    ['take part in', 'a competition'],
    ['publish', 'a report'],
    ['attend', 'training classes'],
    ['enjoy', 'the rehearsals'],
  ],
  why: 'Глагол и дополнение в английском часто образуют устойчивую пару: опыты именно <i>carry out</i>, форму именно <i>keep</i>.' },

{ id: 'u2-39', unit: 'u2', src: '39', topic: 'лексика юнита', type: 'sort',
  q: 'Опираясь на письма из задания 35 (Вера — фотостудия, занятия по вторникам и пятницам, готовит выставку; Лена — драмкружок в академии; Глеб — футбольная команда университета и тренировки; Антон — опыты в лаборатории физики и доклад на форум), распределите утверждения.',
  cats: { t: 'верно', f: 'неверно', n: 'нет сведений' },
  items: [
    { t: 'Vera goes to the photo studio.', c: 't' },
    { t: 'Vera has training classes on Tuesdays and Fridays.', c: 't' },
    { t: 'Lena is a member of a drama club.', c: 't' },
    { t: 'Anton works in the physics laboratory.', c: 't' },
    { t: 'Vera is busy preparing for a football match.', c: 'f' },
    { t: 'Anton is not interested in research.', c: 'f' },
    { t: 'Lena lives in the hall of residence.', c: 'n' },
    { t: 'Anton has a sister in Murmansk.', c: 'n' },
    { t: 'Gleb speaks three foreign languages.', c: 'n' },
  ],
  why: '«Нет сведений» — это не то же самое, что «неверно»: утверждение может быть правдоподобным, но в тексте о нём ничего не сказано.' },

{ id: 'u2-40', unit: 'u2', src: '40', topic: 'лексика юнита', type: 'sort',
  q: 'Определите, к кому относится каждое словосочетание из писем задания 35.',
  cats: { v: 'Вера', a: 'Антон' },
  items: [
    { t: 'photo studio', c: 'v' },
    { t: 'a new exhibition', c: 'v' },
    { t: 'training classes on Tuesdays', c: 'v' },
    { t: 'a lot of photographs', c: 'v' },
    { t: 'physics laboratory', c: 'a' },
    { t: 'experiments', c: 'a' },
    { t: 'a report for the student forum', c: 'a' },
    { t: 'interested in research', c: 'a' },
  ],
  why: 'Такая таблица — готовый план пересказа: где занимается, в какой форме, к чему готовится и почему ему это интересно.' },

{ id: 'u2-41a', unit: 'u2', src: '41 (а)', topic: 'речевой этикет', type: 'order',
  q: 'Расставьте части дружеского письма по порядку.',
  lines: [
    'обращение и приветствие',
    'ссылка на предыдущие контакты',
    'рассказ о себе',
    'заключительные фразы',
    'пожелания и подпись',
  ],
  why: 'Дружеское письмо начинается с обращения и благодарности за прошлое письмо, а заканчивается просьбой писать и подписью.' },

{ id: 'u2-41b', unit: 'u2', src: '41 (б)', topic: 'речевой этикет', type: 'build',
  q: 'Соберите клише для ответного письма другу.',
  items: [
    { ru: 'Спасибо за твоё письмо!', a: 'Thanks for your letter!' },
    { ru: 'Было приятно получить от тебя весточку.', a: 'It was nice to hear from you.' },
    { ru: 'Что до меня, я состою в студенческом научном обществе.', a: 'As for me, I am a member of the students’ scientific society.' },
    { ru: 'Расскажи мне о своей новой команде.', a: 'Let me know about your new team.' },
    { ru: 'Ну вот и всё пока. Не пропадай!', a: 'Well, that’s all for now. Keep in touch!' },
  ],
  why: 'Клише письма не переводятся дословно: их заучивают целиком и ставят в ту часть письма, за которой они закреплены.' },

/* ===== SECTION H ===== */

{ id: 'u2-42', unit: 'u2', src: '42', topic: 'правила чтения', type: 'sort',
  q: 'Распределите слова по чтению букв <i>ee</i> и <i>ea</i>.',
  cats: { ii: '/iː/', e: '/e/', ei: '/eɪ/' },
  items: [
    { t: 'deem', c: 'ii' }, { t: 'leave', c: 'ii' }, { t: 'need', c: 'ii' },
    { t: 'steel', c: 'ii' }, { t: 'feel', c: 'ii' }, { t: 'deep', c: 'ii' },
    { t: 'head', c: 'e' }, { t: 'ready', c: 'e' }, { t: 'heavy', c: 'e' },
    { t: 'bread', c: 'e' },
    { t: 'break', c: 'ei' }, { t: 'great', c: 'ei' }, { t: 'steak', c: 'ei' },
  ],
  why: 'Сочетание <i>ee</i> всегда даёт /iː/. Сочетание <i>ea</i> обычно тоже /iː/, но в небольшой группе слов — /e/ (<i>head, bread, heavy, ready</i>) и совсем редко /eɪ/ (<i>great, break, steak</i>).' },

/* ===== SECTION I ===== */

{ id: 'u2-43a', unit: 'u2', src: '43 (а)', topic: 'речевой этикет', type: 'dialog',
  q: 'Восстановите официальный разговор двух участников конференции.',
  turns: [
    { who: 'Dr Larina', t: 'Good afternoon, Mr Bell. How are you?' },
    { who: 'Mr Bell', opts: [
      { t: 'I am very well, thank you. And you?', ok: true, why: 'Полная форма ответа и встречный вопрос — официальный регистр.' },
      { t: 'Fine, thanks. And you?', why: 'Так отвечают приятелю, а не коллеге, к которому обращаются по титулу.' },
      { t: 'So-so, mate.', why: 'Разговорное обращение <i>mate</i> в официальной беседе не годится.' },
    ] },
    { who: 'Dr Larina', t: 'I am fine, thank you. How do you find the conference?' },
    { who: 'Mr Bell', opts: [
      { t: 'Very interesting — the papers on hull strength are especially useful.', ok: true, why: 'Развёрнутая оценка по существу вопроса.' },
      { t: 'Not bad, though I want to go home.', why: 'Такая оценка и жалоба уместны в дружеской беседе, а не в официальной.' },
      { t: 'I don’t know, I sleep at the lectures.', why: 'Такое признание нарушает вежливый тон разговора.' },
    ] },
  ],
  why: 'Официальный регистр держится на полных формах: <i>Good afternoon</i>, обращение по титулу и фамилии, <i>I am very well, thank you</i>.' },

{ id: 'u2-43b', unit: 'u2', src: '43 (б)', topic: 'речевой этикет', type: 'sort',
  q: 'Распределите реплики по обстановке.',
  cats: { f: 'официальная обстановка', i: 'неофициальная обстановка' },
  items: [
    { t: 'Good afternoon, Mr Bell.', c: 'f' },
    { t: 'Good morning, Professor.', c: 'f' },
    { t: 'I am very well, thank you.', c: 'f' },
    { t: 'How do you do?', c: 'f' },
    { t: 'Hi, Gleb!', c: 'i' },
    { t: 'Hello, Anton!', c: 'i' },
    { t: 'Fine, thanks.', c: 'i' },
    { t: 'Not bad.', c: 'i' },
  ],
  why: 'Официальная речь пользуется полными формами и обращением по титулу, неофициальная — короткими <i>Hi</i>, <i>Fine, thanks</i>, <i>Not bad</i>.' },

{ id: 'u2-44', unit: 'u2', src: '44', topic: 'речевой этикет', type: 'dialog',
  q: 'Восстановите неофициальный разговор однокурсников.',
  turns: [
    { who: 'Anton', t: 'Hi, Marina!' },
    { who: 'Marina', opts: [
      { t: 'Hello, Anton. How are you?', ok: true, why: 'Ответное приветствие и вопрос о делах — обычное начало разговора.' },
      { t: 'Good afternoon, Dr Panova. How do you do?', why: 'Обращение по титулу к однокурснику звучит неуместно.' },
      { t: 'Thank you, and you?', why: 'Благодарность идёт раньше самого вопроса о делах.' },
    ] },
    { who: 'Anton', opts: [
      { t: 'So-so. I have three double periods today.', ok: true, why: '<i>So-so</i> — обычная неофициальная оценка дел, дальше идёт причина.' },
      { t: 'Yes, I do.', why: 'Это краткий ответ на общий вопрос, а не ответ о делах.' },
      { t: 'How do you do?', why: 'Эта фраза говорится при первом знакомстве, а не при встрече знакомых.' },
    ] },
    { who: 'Marina', opts: [
      { t: 'Oh, what’s the matter?', ok: true, why: 'После ответа «так себе» естественно спросить, что случилось.' },
      { t: 'Fine, thanks.', why: 'Это рассказ о своих делах, а не отклик на слова собеседника.' },
      { t: 'I am very well, thank you. And you?', why: 'Ответ о себе повторно, хотя собеседник ждёт сочувствия.' },
    ] },
    { who: 'Anton', t: 'I am just tired. Tomorrow will be easier.' },
  ],
  why: 'Неофициальный разговор строится короткими репликами: <i>Hi</i>, <i>How are you?</i>, <i>So-so</i>, <i>What’s the matter?</i>, <i>I’m sorry to hear that</i>.' }

);
