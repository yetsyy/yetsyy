import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-transparent text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Li Carvallo Escudero. {t('all_rights_reserved')}</p>
      </div>
    </footer>
  );
};

export default Footer;
