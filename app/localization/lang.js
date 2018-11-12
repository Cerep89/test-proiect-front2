import LocalizedStrings from 'react-native-localization';

let strings = new LocalizedStrings({
  ro: {
    home: {
      button: {
        scan: "Scanează Eticheta",
        gang: "Gașca Ta",
        share: "Distribuie Aplicaţia",
      },
    },
    menu: {
      gang: "Gașca Ta",
      howItWorks: 'Cum Funcționează',
      about: 'Despre Bagaboo',
      contact: 'Contacte',
      privacyPolicy: 'Privacy Policy'
    }
  },

  en: {
    home: {
      button: {
        scan: "Scan",
        gang: "Your gang",
        share: "Share",
      }
    },
    menu: {
      gang: "Your gang",
      howItWorks: 'How it works',
      about: 'About Bagaboo',
      contact: 'Contacts',
      privacyPolicy: 'Privacy Policy'
    }
  },

  ru: {
    home: {
      button: {
        scan: "Сканирование",
        gang: "Ваша банда",
        share: "Поделиться",
      }
    },
    menu: {
      gang: "Ваша банда",
      howItWorks: 'Как это работает',
      about: 'О Bagaboo',
      contact: 'Контакты',
      privacyPolicy: 'Политика конфиденциальности'
    }
  }

});

export default strings;