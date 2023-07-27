import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslations from "./en.json";
import esTranslations from "./es.json";

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        detection: {
            convertDetectedLanguage: (lng) => lng.split("-")[0],
        },
        resources: {
            en: {
                translation: enTranslations,
            },
            es: {
                translation: esTranslations,
            },
        },
    });
