import i18next from 'i18next';

i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        'header': {
          'aboutMe': 'About me',
          'youWillFind': 'What will you find',
          'forWhom': 'For whom',
          'gallery': 'Gallery',
          'address': 'Address',
          'switchTxt': 'Switch language:',
          'follow': 'Follow me:',
        },
        'hero': {
          'subtitle': 'Gymnastics for girls',
          'button': 'Book for a trial class',
        },
        'numbers': {
          'first': `Years<br>
          in gymnastics`,
          'second': `Years<br>
           teaching children`,
          'third': `Countries<br>
           in which I worked`,
        },
        'aboutMe': {
          'title': 'About me',
          'subtitle': 'About Anastasia',
          'text': `Welcome to my digital space! I'm Anastasia, a dedicated and passionate gymnastics coach with over seven years of experience in nurturing young talents. My journey began at the youthful age of 16, marking the start of a rewarding career filled with growth, learning, and joy. At 23, I reflect on these years with immense pride, having had the privilege of coaching in diverse cultural settings across Ukraine, Turkey, Kuwait, and Dubai.`,
          'text2': `Since 2021, Dubai has been my coaching home — a city that resonates with my love for gymnastics, offering unparalleled opportunities and facilities. My expertise lies in guiding children from the tender age of four,fostering their skills, confidence, and love for the sport. I take immense pride in leading a team of competitive young gymnasts. Together, we have journeyed through numerous competitions in Dubai, Abu-Dhabi, and beyond celebrating a multitude of victories and accolades.`,
          'text3': `Join me in exploring the world of gymnastics, where every leap is a step towards greatness.`,

          'readMore': 'read more',
          'readLess': 'read less',
        },
        'youWillFind': {
          'title': 'You will find',

          'card1Subtitle': 'Individual classes',
          'card1Item1': 'Student and coach',
          'card1Item2': `Double
          <span class="double-training-explanation" data-i18n="youWillFind.card1Item2Explanation">(child and her friend)</span>`,
          'card1Item2Explanation': '(child and her friend)',
          'card1Item3': 'Mom and me',
          'card1text':
            'Individual (private) class is a unique opportunity for gymnast to work individually with a coach. Because of individual lessons with a coach, the child develops much better and more successfully, to learn new skills faster and develop exercise better .',

          'card2Subtitle': 'Group classes',
          'card2TextTitle': 'Group of 8-10 kids',
          'card2Text1':
            'If you want your child to learn to gymnastics and have fun, then this kind of training is perfect.',
          'card2Text2':
            'In the process of sports activities, children learn to control their body and are taught discipline.',
          'card2Text3':
            'Flexibility, dexterity, ability to move and repeat unfamiliar exercises are developed.',

          'card3Subtitle': 'Competitions',
          'card3Text1': 'Preparation for competition between clubs in Dubai',
          'card3Text2': 'Preparing for competition in other countries',
          'card3Text3': 'Create gymnastics program',
        },
        'signBtnBlock': {
          'text': 'Sign up for a class right now',
          'btn': 'sign up',
        },
        'forWhom': {
          'title': 'For whom?',
          'subtitle1': 'Gymnastics for children',
          'desc1': '3-14 years',
          'subtitle2': 'Group classes',
          'desc2': `2 / 4 / 8 
          <span class="for-whom-span" >persons</span>`,
          'callToAct': 'Ready to join?',
          'btn': 'To join',
        },
        'apparatus': {
          'title': 'Practicing in apparatus',

          'card1Text': 'Be strong and brave',
          'card1Sub': 'Bars',

          'card2Text': 'Jump high and run fast',
          'card2Sub': 'Vault',

          'card3Text': 'Balance and control body',
          'card3Sub': 'Beam',

          'card4Text': 'Listen to music and dance',
          'card4Sub': 'Floor',
        },
        'training': {
          'title': 'How is training goes?',
          'subtitle': 'Training plan',
          'bigMin': '60 min',

          'smallMin1': '10 min',
          'smallTxt1': 'Warm up and flexibility',

          'smallMin2': '40 min',
          'smallTxt2': 'Main part',

          'smallMin3': '10 min',
          'smallTxt3': 'Calm down',

          'mainTxt':
            'Trainings go from simple to complex, because each simple element gradually becomes complex, training always starts with the basic rights to perform the perfect technique, if your child has experience, I will help him develop it',
        },
        'toTake': {
          'title': 'What to take to class',

          'item1': 'Comfortable sports clothes',
          'item2': 'Hair band',
          'item3': 'Water',
          'item4': 'Come 15 minutes before training',
          'item5': 'Socks',
          'item6': 'Definitely a good mood',
        },
        'submitForm': {
          'title': 'Sign up for the 1st training session',

          'placeholderName': 'Name',
          'placeholderComment': 'comment',

          'privacy': `I agree to the&nbsp;
          <a href="#" class="link-privacy link">Privacy Policy</a>`,

          'btn': 'Get started for free',
        },
        'faq': {
          'title': 'Answers to questions',

          'q1': 'How does a trial lesson work?',
          'a1': 'A trial lesson is 30-minute private session for you to get to know coach and develop a learning plan.',

          'q2': 'How often kids should make gymnastics to make a result?',
          'a2': `It's so individual because all of the kids are different and also it's depends of the age and level of child .
          <br>Beginner and young children need to practice 1-2 times per week for 1 hour.`,

          'q3': 'If a child misses a class, is the fee refunded?',
          'a3': `Missed class can only be considered for a valid reason.
          <br>A valid reason is illness with confirmation - a certificate from a doctor.`,
        },
        'messageMe': {
          'title': 'Have any questions?',
          'btn': 'Message me',
        },
        'gallery': {
          'title': 'Gallery',
        },
        'reviews': {
          'title': 'Reviews',

          'name1': 'Veronica G.',
          'comment1': `The child has been going to Anastasia for acrobatics for about 6 months, I am very satisfied with it. I want to emphasize the high level of the master's qualifications and the individual approach to each child.`,

          'name2': 'Alexander',
          'comment2':
            'After the 1st training, we realized that this ideal place is suitable for our Camilla.',

          'name3': 'Albina Kravets G.',
          'comment3': `Coach Anastasia is a game-changer! Our daughter's skills and
          confidence have soared since joining gymnastics classes.
          Anastasia's passion and personalized approach make every session
          enjoyable and productive.`,

          'name4': 'Emily T.',
          'comment4': `Coach Anastasia has been transformative for our child. The
          classes strike the perfect balance between fun and
          skill-building. Anastasia's dedication and focus on safety make
          us confident in our daughter's gymnastics journey.`,

          'name5': 'Sarah M.',
          'comment5': `Our daughter loves gymnastics with Coach Anastasia! The classes
          are fun yet structured, and Anastasia's patience and expertise
          shine through. It's fantastic to see our child's progress and
          enthusiasm grow each week.`,
        },
        'address': {
          'title': 'Contact me',

          'subtitle1': 'Address:',

          'subtitle2': 'Phone number:',

          'subtitle3': 'Working hours:',
          'item3': ` Monday - Sunday:<span class="contact-me-card-info-data"
          >10 am - 9 pm</span>`,

          'btn': 'Get your trial class',
        },
        'followMe': {
          'title': 'Follow me',
        },
      },
    },
    uk: {
      translation: {
        'header': {
          'aboutMe': 'Про мене',
          'youWillFind': 'Що в нас є',
          'forWhom': 'Для кого',
          'gallery': 'Галерея',
          'address': 'Адреса',
          'switchTxt': 'Зміни мову:',
          'follow': 'Підпишись:',
        },
        'hero': {
          'subtitle': 'Гімнастика для дівчат',
          'button': 'Пробне заняття',
        },
        'numbers': {
          'first': `Років<br> 
          в гімнастиці`,
          'second': `Років<br>
           навчаю діток`,
          'third': `Країни,<br>
           де працювала`,
        },
        'aboutMe': {
          'title': 'Про мене',
          'subtitle': 'Про Настю',
          'text': `Ласкаво прошу до мого цифрового простору! Я Анастасія, відданий і пристрасний тренер з гімнастики з більш ніж семирічним досвідом у вихованні молодих талантів. Моя подорож почалася в юнацькому віці 16 років, знаменуючи собою початок успішної кар’єри, сповненої зростання, навчання та радості. У свої 23 роки я з величезною гордістю згадую про ці роки, оскільки мала привілей тренувати в різних культурних середовищах України, Туреччини, Кувейту та Дубая.`,

          'text2': `З 2021 року Дубай став моїм тренерським домом — місто, яке перегукується з моєю любов’ю до гімнастики, пропонуючи неперевершені можливості та умови. Мій досвід полягає в тому, щоб навчати дітей віком від чотирьох років, розвивати їхні навички, впевненість і любов до спорту. Я надзвичайно пишаюся тим, що очолюю команду конкурентоспроможних молодих гімнастів. Разом ми подолали численні змагання в Дубаї, Абу-Дабі та за їх межами, відсвяткувавши безліч перемог і нагород.`,

          'text3': `Приєднуйся до мене у світі гімнастики, де кожен стрибок веде до величі.`,

          'readMore': 'далі',
          'readLess': 'згорнути',
        },
        'youWillFind': {
          'title': 'Що в нас є',

          'card1Subtitle': 'Особисті заняття',
          'card1Item1': 'Учень та тренер',
          'card1Item2': `Парні заняття
          <span class="double-training-explanation" data-i18n="youWillFind.card1Item2Explanation">(дитина з другом)</span>`,
          'card1Item2Explanation': '(дитина з другом)',
          'card1Item3': 'Мама та я',
          'card1text':
            'Особисте (приватне) заняття - це унікальна можливість для гімнастки працювати індивідуально з тренером. Завдяки особистим заняттям з тренером дитина набагато краще та успішніше розвивається, швидше опановує нові навички та краще виконує вправи.',

          'card2Subtitle': 'Групові заняття',
          'card2TextTitle': 'Група з 8-10 дітей',
          'card2Text1':
            'Якщо Ви хочете аби дитина вчила гімнастику із задоволенням, то це ідеальний варіант.',
          'card2Text2':
            'У процесі занять спортом діти вчаться володіти своїм тілом, привчаються до дисципліни.',
          'card2Text3':
            'Розвиваються гнучкість, спритність, уміння рухатися і повторювати незнайомі вправи.',

          'card3Subtitle': 'Змагання',
          'card3Text1': 'Підготовка до змагань між клубами в Дубаї',
          'card3Text2': 'Підготовка до змагань в інших країнах',
          'card3Text3': 'Програма з гімнастики',
        },
        'signBtnBlock': {
          'text': 'Записуйся на заняття вже зараз',
          'btn': 'записатись',
        },
        'forWhom': {
          'title': 'Для кого?',
          'subtitle1': 'Гімнастика для дітей',
          'desc1': '3-14 років',
          'subtitle2': 'Групові заняття',
          'desc2': `2 / 4 / 8 
          <span class="for-whom-span">дітей</span>`,
          'callToAct': 'Готові доєднатись?',
          'btn': 'Доєднатись',
        },
        'apparatus': {
          'title': 'Заняття на снарядах',

          'card1Text': 'Сильно та сміливо',
          'card1Sub': 'Бруси',

          'card2Text': 'Високо та швидко',
          'card2Sub': 'Стрибок',

          'card3Text': 'Баланс і контроль',
          'card3Sub': 'Балка',

          'card4Text': 'Танцюй під музику',
          'card4Sub': 'Паркет',
        },
        'training': {
          'title': 'Як проходить заняття?',
          'subtitle': 'План тренування',
          'bigMin': '60 хв',

          'smallMin1': '10 хв',
          'smallTxt1': 'Розігрів та розтяжка',

          'smallMin2': '40 хв',
          'smallTxt2': 'Головна частина',

          'smallMin3': '10 хв',
          'smallTxt3': 'Відпочинок',

          'mainTxt':
            'Тренування йдуть від простих до складних, бо кожен простий елемент поступово стає складним, навчання завжди починається з базових вправ на виконання ідеальної техніки, якщо ваша дитина має досвід, я його покращу',
        },
        'toTake': {
          'title': 'Що взяти із собою',

          'item1': 'Зручний спортивний одяг',
          'item2': `Пов'язку на волосся`,
          'item3': 'Воду',
          'item4': 'Прийти за 15 хвилин до початку',
          'item5': 'Шкарпетки',
          'item6': 'Гарний настрій',
        },
        'submitForm': {
          'title': 'Записуйся на 1-ше тренування',

          'placeholderName': `Ім'я`,
          'placeholderComment': 'коментар',

          'privacy': `Я згоден із&nbsp;
          <a href="#" class="link-privacy link">Політикою конфіденційності</a>`,

          'btn': 'Почни безкоштовно',
        },
        'faq': {
          'title': 'Відповіді на питання',

          'q1': 'Як проходить пробне заняття?',
          'a1': 'Пробне заняття — це 30-хвилинна приватна сесія, щоб познайомитися із тренером і розробити план навчання.',

          'q2': 'Як часто потрібно робити гімнастику для результату?',
         'a2': `Це дуже індивідуально, тому що всі діти різні, а також це залежить від віку та рівня підготовки дитини.
          <br>Початківцям і маленьким дітям потрібно займатися 1-2 рази щотижня по 1 годині.`,

          'q3': 'Чи повертаються гроші за пропуски занять?',
          'a3': `Гроші за пропуски повертаються лише з поважних причин.
          <br>Поважна причина – хвороба підтверджена довідкою від лікаря.`,
        },
        'messageMe': {
          'title': 'Маєте питання?',
          'btn': 'Пишіть тут',
        },
        'gallery': {
          'title': 'Галерея',
        },
        'reviews': {
          'title': `Рев'ю`,

          'name1': 'Вероніка Дж.',
          'comment1': `Дочка ходить до Анастасії на акробатику вже близько 6 місяців, я дуже задоволена. Хочу відзначити високий рівень кваліфікації тренера та індивідуальний підхід до кожної дитини.`,

          'name2': 'Олександр',
          'comment2':
            'Вже після першого тренування ми зрозуміли, що це ідеальне місце підходить для нашої Камілли.',

          'name3': 'Альбіна Кравець Г.',
          'comment3': `Анастасія змінила все! Навички та впевненість нашої доньки зросли після того, як вона приєдналася до Настіних уроків гімнастики. Пристрасть та індивідуальний підхід Анастасії роблять кожну сесію приємною та продуктивною.`,

          'name4': 'Емілі Т.',
          'comment4': `Тренер Анастасія змінила нашу дитину. Її заняття досягають ідеального балансу між грою та навчанням. Відданість Анастасії та її турбота про безпеку дають нам повну впевненість в подорожі нашої доньки світом гімнастики.`,

          'name5': 'Сара М.',
          'comment5': `Наша донечка обожнює гімнастику з Анастасією! Заняття веселі, але чітко структуровані, терпіння та досвід Анастасії добре видно. Приємно щотижня бачити прогрес та захват нашої дитини.`,
        },
        'address': {
          'title': `Зв'яжись зі мною`,

          'subtitle1': 'Адреса:',

          'subtitle2': 'Номер телефону:',

          'subtitle3': 'Робочі години:',
          'item3': ` Понеділок - Неділя:<span class="contact-me-card-info-data"
          >10:00 - 21:00</span>`,

          'btn': 'Отримай пробне занянття',
        },
        'followMe': {
          'title': 'Підпишись на мене',
        },
      },
    },
  },
  interpolation: {
    escapeValue: false, // Disable HTML escaping
  },
});

export default i18next;
