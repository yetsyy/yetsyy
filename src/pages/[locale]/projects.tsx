
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FaExternalLinkAlt, FaSitemap, FaBrain, FaLightbulb, FaImage, FaSlidersH, FaChartBar, FaDocker, FaRProject } from 'react-icons/fa';
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

const projects = [
  {
    title: 'Aprendizaje No Supervisado',
    description: 'unsupervised_learning_description',
    link: 'https://github.com/yetsyy/unsupervised_learning',
    icon: FaSitemap,
  },
  {
    title: 'NLP con BERT',
    description: 'nlp_with_bert_description',
    link: 'https://github.com/yetsyy/nlp_with_bert',
    icon: FaBrain,
  },
  {
    title: 'Interpretability de Modelos',
    description: 'model_interpretability_description',
    link: 'https://github.com/yetsyy/model_interpretability',
    icon: FaLightbulb,
  },
  {
    title: 'Clasificación de Imágenes',
    description: 'image_classification_description',
    link: 'https://github.com/yetsyy/image_classification',
    icon: FaImage,
  },
  {
    title: 'Optimización de Hiperparámetros',
    description: 'hyperparameter_tuning_description',
    link: 'https://github.com/yetsyy/hyperparameter_tuning',
    icon: FaSlidersH,
  },
  {
    title: 'Clasificación con XGBoost',
    description: 'classification_with_xgboost_description',
    link: 'https://github.com/yetsyy/classification_with_xgboost',
    icon: FaChartBar,
  },
  {
    title: 'API con Docker',
    description: 'docker_api_description',
    link: 'https://github.com/yetsyy/sesion2_docker_api',
    icon: FaDocker,
  },
  {
    title: 'Proyecto en R',
    description: 'r_project_description',
    link: 'https://github.com/yetsyy/Proyecto_2',
    icon: FaRProject,
  },
];

const ProjectsPage = () => {
  const { t } = useTranslation('common');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">{t('projects')}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
            <div className="w-full h-48 flex items-center justify-center bg-gray-700">
              <project.icon className="text-6xl text-gray-400" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold mb-2 text-white">{project.title}</h2>
              <p className="text-gray-400 mb-4 flex-grow">{t(project.description)}</p>
              <a href={project.link} className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center justify-center mt-auto">
                <FaExternalLinkAlt className="mr-2" /> {t('view_project')}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
