import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "quote": "Those people who develop the ability to continuously acquire new and better forms of knowledge that they can apply to their work and to their lives will be the movers and shakers in our society for the indefinite future.",
          "quoteAuthor": "Brian Tracy",
          "loginToYourAccount": "Login to your Account",
          "withRegisteredEmail": "with your registered Email Address",
          "emailAddress": "Email address",
          "enterEmailAddress": "Enter email address",
          "enterPassword": "Enter password",
          "password": "Password",
          "rememberMyPassword": "Remember my password",
          "login": "Login",
          "or": "Or",
          "loginWithGoogle": "Login with Google"
        }
      },
      ru: {
        translation: {
          "quote": "Те люди, которые развивают способность постоянно приобретать новые и лучшие формы знаний, которые они могут применить в своей работе и жизни, будут двигателями и лидерами нашего общества в обозримом будущем.",
          "quoteAuthor": "Брайан Трейси",
          "loginToYourAccount": "Войдите в свой аккаунт",
          "withRegisteredEmail": "используя зарегистрированный email адрес",
          "emailAddress": "Email адрес",
          "enterEmailAddress": "Введите email адрес",
          "enterPassword": "Введите пароль",
          "password": "Пароль",
          "rememberMyPassword": "Запомнить мой пароль",
          "login": "Войти",
          "or": "Или",
          "loginWithGoogle": "Войти через Google"
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;