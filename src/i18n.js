import i18next from 'i18next';

i18next.init({
  lng: 'en',
  resources: {

    en: {
      translation: {
        'header': {
          'about-me': 'About me',
          'you-will-find': 'What will you find!',
          'for-whom': 'For whom',
          'gallery': 'Gallery',
          'adress': 'Adress',
        },
      },
    },


    uk: {
      translation: {
        'header': {
            'about-me': 'Про нас',
            'you-will-find': 'Що в нас є!',
            'for-whom': 'Для кого',
            'gallery': 'Галерея',
            'adress': 'Адреса',
          },
      },
    },

  },
});

export default i18next;
