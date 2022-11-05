import i18n from 'i18nxt';
import Backend from 'i18next-http-backend';
import LenguageDetector from 'i18next-browser-lenguajedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(Backend).use(LenguageDetector).use(initReactI18next).init({
    backend: {
        loadPath: '../src/assets/i18/{{ns}}/{{lng}}.json',
        },
        fallbackLng: 'en',
        debug: true,
        ns: ['header', 'aboutMe', 'tools', 'personalProjects', 'grupalProjects', 'footer'],
        interpolation: {
            spaceValue: false,
            formatSeparator: ',',
        },
        react: {
            wait: true,
        },
})

export default i18n;