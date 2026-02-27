import esHeader from '../../public/locales/es/header.json';
import enHeader from '../../public/locales/en/header.json';
import esAbout from '../../public/locales/es/aboutMe.json';
import enAbout from '../../public/locales/en/aboutMe.json';
import esProjects from '../../public/locales/es/projects.json';
import enProjects from '../../public/locales/en/projects.json';
import esTools from '../../public/locales/es/tools.json';
import enTools from '../../public/locales/en/tools.json';
import esContact from '../../public/locales/es/contactForm.json';
import enContact from '../../public/locales/en/contactForm.json';
import esProjectsDesc from '../../public/locales/es/projectsDesc.json';
import enProjectsDesc from '../../public/locales/en/projectsDesc.json';

const translations = {
    es: {
        header: esHeader,
        about: esAbout,
        projects: esProjects,
        tools: esTools,
        contact: esContact,
        projectsDesc: esProjectsDesc
    },
    en: {
        header: enHeader,
        about: enAbout,
        projects: enProjects,
        tools: enTools,
        contact: enContact,
        projectsDesc: enProjectsDesc
    }
};

export function useTranslations(lang: string | undefined) {
    const currentLang = (lang === 'en' ? 'en' : 'es') as keyof typeof translations;
    return translations[currentLang];
}
