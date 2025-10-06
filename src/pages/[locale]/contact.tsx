
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FaUser, FaEnvelope, FaPaperPlane, FaLinkedin } from 'react-icons/fa';
import { i18n } from '../../../next-i18next.config';

export const getStaticPaths = async () => ({
  fallback: false,
  paths: i18n.locales.map((lang) => ({
    params: {
      locale: lang,
    },
  })),
});

export async function getStaticProps({ params }: { params: { locale: string } }) {
  return {
    props: {
      ...(await serverSideTranslations(params.locale, ['common'])),
    },
  };
}

const ContactPage = () => {
  const { t } = useTranslation('common');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{t('contact_me')}</h1>
      <p className="text-lg mb-4">
        {t('contact_me_description')}
      </p>

      <form className="w-full max-w-lg mx-auto">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" htmlFor="grid-first-name">
              <FaUser className="inline-block mr-1" /> {t('first_name')}
            </label>
            <input className="appearance-none block w-full bg-gray-700 text-white border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-800" id="grid-first-name" type="text" placeholder="Jane" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" htmlFor="grid-last-name">
              <FaUser className="inline-block mr-1" /> {t('last_name')}
            </label>
            <input className="appearance-none block w-full bg-gray-700 text-white border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" htmlFor="grid-password">
              <FaEnvelope className="inline-block mr-1" /> {t('email')}
            </label>
            <input className="appearance-none block w-full bg-gray-700 text-white border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-500" id="email" type="email" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" htmlFor="grid-password">
              {t('message')}
            </label>
            <textarea className=" no-resize appearance-none block w-full bg-gray-700 text-white border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-500 h-48 resize-none" id="message"></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button className="shadow bg-blue-500 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded flex items-center justify-center" type="button">
              <FaPaperPlane className="mr-2" /> {t('send')}
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-2">{t('connect_on_linkedin')}</h2>
        <a href="https://www.linkedin.com/in/li-carvallo" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center justify-center" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="mr-1" /> www.linkedin.com/in/li-carvallo
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
