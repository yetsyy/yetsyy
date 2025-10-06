
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
          <Image src="/LiProfile.jpeg" alt="Li Carvallo Escudero" width={192} height={192} className="rounded-full w-48 h-48 object-cover" />
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
          Mi experiencia inicial en investigación cualitativa y cuantitativa, trabajando en terreno con comunidades para programas del MINVU y estudios de impacto ambiental, me reveló tanto el poder de los datos como las limitaciones de los métodos tradicionales para procesarlos a gran escala. Esta convicción me llevó a dar un paso deliberado hacia la tecnología, primero cursando un Diplomado en Ciencia de Datos para Políticas Públicas en la Pontificia Universidad Católica de Chile para construir una base cuantitativa robusta, y culminando con una intensiva Especialización en Machine Learning, donde adquirí las competencias técnicas para transformar datos en soluciones predictivas de alto impacto.
        </p>
        <p className="text-lg mb-4">
          Mi formación técnica me ha dotado de un dominio integral del ciclo de vida de la inteligencia artificial. Poseo competencias avanzadas para el desarrollo de soluciones de IA de extremo a extremo: desde la programación avanzada en Python y la construcción de modelos predictivos (regresión, clasificación, clustering) y de Deep Learning (Redes Neuronales, Transformers). Mi especialización abarca desde el preprocesamiento de datos y la optimización de hiperparámetros, garantizando soluciones escalables, eficientes y mantenibles.
        </p>
        <p className="text-lg mb-4">
          Mi propuesta de valor única reside en la fusión de mi rigurosa formación sociológica con mi especialización técnica en IA. Esta combinación me permite no solo construir modelos algorítmicamente complejos, sino también comprender profundamente el contexto social en el que operan. Mi objetivo es aplicar modelos de IA interpretables y éticos para resolver problemas complejos en el sector público y social, asegurando que la tecnología genere un impacto positivo y equitativo. Estoy especialmente capacitada en técnicas de Interpretabilidad y Explicabilidad (XAI) con herramientas como LIME y SHAP, lo que me permite auditar, explicar y mitigar sesgos en los modelos, garantizando que las decisiones automatizadas sean justas, transparentes y socialmente responsables.
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
