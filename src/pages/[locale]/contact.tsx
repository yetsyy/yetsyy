
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
    <div className="container mx-auto p-4 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-center">{t('contact_me')}</h1>
        <p className="text-lg mb-8 text-center">
          {t('contact_me_description')}
        </p>

        <div className="bg-secondary bg-opacity-80 p-8 rounded-lg shadow-lg border border-gray-700">
          <form className="w-full">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  {t('first_name')}
                </label>
                <input className="appearance-none block w-full bg-primary border border-gray-600 text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-900 focus:border-blue-500" id="grid-first-name" type="text" />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-last-name">
                  {t('last_name')}
                </label>
                <input className="appearance-none block w-full bg-primary border border-gray-600 text-white rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-900 focus:border-blue-500" id="grid-last-name" type="text" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="email">
                  {t('email')}
                </label>
                <input className="appearance-none block w-full bg-primary border border-gray-600 text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-900 focus:border-blue-500" id="email" type="email" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="message">
                  {t('message')}
                </label>
                <textarea className="no-resize appearance-none block w-full bg-primary border border-gray-600 text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-900 focus:border-blue-500 h-48 resize-none" id="message"></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="shadow bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded-full flex items-center justify-center" type="button">
                <FaPaperPlane className="mr-2" /> {t('send')}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">{t('connect_on_linkedin')}</h2>
          <a href="https://www.linkedin.com/in/li-carvallo" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center justify-center" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
