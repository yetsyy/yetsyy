import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'font-bold' : ''}>
        EN
      </button>
      <button onClick={() => changeLanguage('es')} className={i18n.language === 'es' ? 'font-bold' : ''}>
        ES
      </button>
      <button onClick={() => changeLanguage('fr')} className={i18n.language === 'fr' ? 'font-bold' : ''}>
        FR
      </button>
      <button onClick={() => changeLanguage('pt')} className={i18n.language === 'pt' ? 'font-bold' : ''}>
        PT
      </button>
    </div>
  );
};

export default LanguageSwitcher;