import React from 'react';

const projects = [
  {
    title: 'Clasificación con XGBoost',
    description: 'Este proyecto presenta un pipeline de clasificación robusto utilizando XGBoost, uno de los algoritmos más potentes y populares para problemas de datos tabulares.',
    link: 'https://github.com/yetsyy/classification_with_xgboost',
    image: '/xgboost.png',
  },
  {
    title: 'Optimización de Hiperparámetros',
    description: 'Este proyecto demuestra la optimización de un modelo de Machine Learning (Random Forest) utilizando dos librerías de vanguardia: Optuna y Ray Tune.',
    link: 'https://github.com/yetsyy/hyperparameter_tuning',
    image: '/hyperparameter.png',
  },
  {
    title: 'Clasificación de Imágenes',
    description: 'Este proyecto implementa una Red Neuronal Convolucional (CNN) para una tarea de clasificación de imágenes. Las CNN son el estándar de oro para el análisis de datos visuales.',
    link: 'https://github.com/yetsyy/image_classification',
    image: '/image_classification.png',
  },
];

const ProjectsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-white">{project.title}</h2>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a href={project.link} className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                Ver Proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;