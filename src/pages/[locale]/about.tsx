
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FaLinkedin, FaFileDownload } from 'react-icons/fa';
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

const AboutPage = () => {
  const { t } = useTranslation('common');

  return (
    <div className="container mx-auto p-4 text-white">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-full md:w-1/3 flex justify-center">
          <Image src="/yetsyy/LiProfile.jpeg" alt="Li Carvallo Escudero" width={192} height={192} className="rounded-full w-48 h-48 object-cover" />
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Li Carvallo Escudero</h1>
          <p className="text-lg mb-4">
            {t('about_me_description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/li-carvallo" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="mr-1" /> {t('linkedin_profile')}
            </a>
            <a href="/yetsyy/curriculum%20vitae%20Li%20Carvallo%20Escudero.pdf" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center" download>
              <FaFileDownload className="mr-1" /> {t('download_cv')}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mt-8 mb-4">{t('about_me')}</h2>
        <p className="text-lg mb-4">
          {t('about_me_p1')}
        </p>
        <p className="text-lg mb-4">
          {t('about_me_p2')}
        </p>
        <p className="text-lg mb-4">
          {t('about_me_p3')}
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">{t('skills')}</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Ciencia de Datos: Machine Learning (regresión, clasificación, clustering), Deep Learning (Redes Neuronales, Transformers), NLP, XAI (LIME, SHAP), preprocesamiento de datos, optimización de hiperparámetros.</li>
          <li>Programación: Python</li>
          <li>Idiomas: Español</li>
          <li>Otros: Gestión de proyectos sociales, métodos cualitativos y cuantitativos.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
