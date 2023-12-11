import i18next from 'i18next';

i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        'header':{
          'aboutMe': 'About me',
          'youWillFind': 'What will you find!',
          'forWhom': 'For whom',
          'gallery': 'Gallery',
          'adress': 'Adress',
          'switchTxt': 'Switch language:',
          'follow': 'Follow me:'
          },
        'hero':{
          'subtitle':'Gymnastics for girls',
          'button':'Book for a trial class',
        },
        'numbers':{
          'first':`Years<br>
          in gymnastics`,
          'second':`Years<br>
           teaching children`,
          'third':`Countries<br>
           in which I worked`,
        },
        'aboutMe':{
          'title':'About me',
          'subtitle': 'About Anastasia',
          'text': `Welcome to my digital space! I'm Anastasia, a dedicated and passionate gymnastics coach with over seven years of experience in nurturing young talents. My journey began at<span class="ellipsis">...</span>
            <span class="btn-position"><button class="show-more-btn common-button" data-i18n="aboutMe.readMore">read more</button></span>
            the youthful age of 16, marking the start of a rewarding career filled with growth, learning, and joy.
            At 23, I reflect on these years with immense pride, having had the privilege of coaching in diverse cultural
            settings across Ukraine, Turkey, Kuwait, and Dubai.`,

            'text2':`Since 2021, Dubai has been my coaching home — a city that resonates with my love for gymnastics, offering unparalleled opportunities and facilities. My expertise lies in guiding children from the tender age of four,fostering their skills, confidence, and love for the sport. I take immense pride in leading a team of competitive young gymnasts. Together, we have journeyed through numerous competitions in Dubai, Abu-Dhabi, and beyond celebrating a multitude of victories and accolades.`,

            'text3':`Join me in exploring the world of gymnastics, where every leap is a step towards greatness.`,

          'readMore': 'read more',
          'readLess': 'read less',
        },
        'youWillFind':{},
        'signBtnBlock':{},
        'forWhom':{},
        'apparatus':{},
        'training':{},
        'toTake':{},
        'submitForm':{},
        'faq':{},
        'messageMe':{},
        'gallery':{},
        'review':{},
        'address':{},
        'followMe':{},

      },
    },
    uk: {
      translation: {
        'header':{
          'aboutMe': 'Про мене',
          'youWillFind': 'Що в нас є!',
          'forWhom': 'Для кого',
          'gallery': 'Галерея',
          'adress': 'Адреса',
          'switchTxt': 'Зміни мову:',
          'follow': 'Підпишись:'
        },
        'hero':{
          'subtitle':'Гімнастика для дівчат',
          'button':'Пробне заняття',
        },
        'numbers':{
          'first':`Років<br> 
          в гімнастиці`,
          'second':`Років<br>
           навчаємо діток`,
          'third':`Країн,<br>
           де ми працюємо`,
        },
        'aboutMe':{
          'title':'Про мене',
          'subtitle': 'Про Настю',
          'text': `Ласкаво прошу до мого цифрового простору! Я Анастасія, відданий і пристрасний тренер з гімнастики з більш ніж семирічним досвідом у вихованні <span class="ellipsis">...</span>
          <span class="btn-position"><button class="show-more-btn common-button" data-i18n="aboutMe.readMore">далі</button></span>молодих талантів. Моя подорож почалася в юнацькому віці 16 років, знаменуючи собою початок успішної кар’єри, сповненої зростання, навчання та радості. У свої 23 роки я з величезною гордістю згадую про ці роки, оскільки мав привілей тренувати в різних культурних середовищах України, Туреччини, Кувейту та Дубая.`,

          'text2':`З 2021 року Дубай став моїм тренерським домом — місто, яке перегукується з моєю любов’ю до гімнастики, пропонуючи неперевершені можливості та умови. Мій досвід полягає в тому, щоб навчати дітей віком від чотирьох років, розвивати їхні навички, впевненість і любов до спорту. Я надзвичайно пишаюся тим, що очолюю команду конкурентоспроможних молодих гімнастів. Разом ми подолали численні змагання в Дубаї, Абу-Дабі та за їх межами, відсвяткувавши безліч перемог і нагород.`,

          'text3':`Приєднуйся до мене у світі гімнастики, де кожен стрибок веде до величі.`,
          
          'readMore':'далі',
          'readLess':'згорнути',
        },
        'youWillFind':{},
        'signBtnBlock':{},
        'forWhom':{},
        'apparatus':{},
        'training':{},
        'toTake':{},
        'submitForm':{},
        'faq':{},
        'messageMe':{},
        'gallery':{},
        'review':{},
        'address':{},
        'followMe':{},
      },
    },
  },
  interpolation: {
    escapeValue: false, // Disable HTML escaping
  },

});

export default i18next;
