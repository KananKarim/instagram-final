import React from "react";
import "./Footer.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import enTranslation from '../../../i18n/en/translation.json';
import trTranslation from '../../../i18n/en/translation.json';
import rusTranslation from '../../../i18n/en/translation.json';


const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'tr', label: 'Türkçe' },
  {value: 'rus', label: 'Русский'}
  // Diğer dilleri buraya ekleyebilirsiniz
];

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    tr: { translation: trTranslation },
    rus: {translation: rusTranslation}
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

function Footer() {

  let history = useHistory()

  const { t, i18n } = useTranslation();
  
    const handleLanguageChange = (selectedLanguage) => {
      i18n.changeLanguage(selectedLanguage.value);
    };

  return (
    <>
      <div className="footer">
        <div className="footer_info-first">
          <div className="logo">
           
          </div>
          <p className="text">
          {t('Instagram')}
          </p>
        </div>
        <div className="footer_info-forth">
          <h3> {t('Stay in the loop')}</h3>
          <p> {t('Join our mailing list to stay in the loop with our newest for News')}</p>
          <span className="button">
            <input type="email" placeholder="Enter your email address"/>
            <button> {t('Subscribe Now')}</button>
          </span>
        </div>
      </div>
      <div className="copyright">
      © 2023 Instagram
      </div>
    </>
  );
}

export default Footer;