import React from 'react'
import './Navbar.css'
import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import Select from 'react-select';
import enTranslation from '../../../i18n/en/translation.json';
import trTranslation from '../../../i18n/tr/translation.json';
import rusTranslation from '../../../i18n/rus/translation.json';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

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



const Navbar = () => {
  let history = useHistory()
  function toRegister() {
    history.push('/register')
  }

  const { t, i18n } = useTranslation();

  const handleLanguageChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage.value);
  };

  return (
  <>
    <div className='nav-header'>
   <div className='left' style={{ marginTop: '20px' }}>
   <img width={70} height={70} src='./instagram.png' alt = "instgaram"></img>
   </div>
   <div className='right'>
    <p onClick={toRegister}>{t('register')}</p>
     <Select
            options={languageOptions}
            defaultValue={languageOptions.find(option => option.value === i18n.language)}
            onChange={handleLanguageChange}
          />
   </div>
  </div>
  
 </>

  )
}

export default Navbar