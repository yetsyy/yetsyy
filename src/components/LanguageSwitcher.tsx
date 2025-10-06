import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const languages = ['en', 'es', 'fr', 'pt'];

  return (
    <div className="flex rounded-md bg-gray-800 p-1">
      {languages.map((lng) => (
        <button 
          key={lng} 
          onClick={() => changeLanguage(lng)} 
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${i18n.language === lng ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}>
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;