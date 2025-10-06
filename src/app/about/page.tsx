
import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1">
          <img src="/yetsyy/LiProfile.jpeg" alt="Li Carvallo Escudero" className="rounded-full w-48 h-48 mx-auto" />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-4">Li Carvallo Escudero</h1>
          <p className="text-lg mb-4">
            Socióloga y Científica de Datos con una profunda vocación por comprender los sistemas sociales. Mi carrera ha sido una evolución constante hacia herramientas más potentes para analizar la complejidad humana.
          </p>
          <a href="https://www.linkedin.com/in/li-carvallo" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
            Perfil de LinkedIn
          </a>
          <a href="/yetsyy/curriculum vitae Li Carvallo Escudero.pdf" className="ml-4 text-blue-400 hover:underline" download>
            Descargar CV
          </a>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4">Sobre Mí</h2>
        <p className="text-lg mb-4">
          Mi experiencia inicial en investigación cualitativa y cuantitativa, trabajando en terreno con comunidades para programas del MINVU y estudios de impacto ambiental, me reveló tanto el poder de los datos como las limitaciones de los métodos tradicionales para procesarlos a gran escala. Esta convicción me llevó a dar un paso deliberado hacia la tecnología, primero cursando un Diplomado en Ciencia de Datos para Políticas Públicas en la Pontificia Universidad Católica de Chile para construir una base cuantitativa robusta, y culminando con una intensiva Especialización en Machine Learning, donde adquirí las competencias técnicas para transformar datos en soluciones predictivas de alto impacto.
        </p>
        <p className="text-lg mb-4">
          Mi formación técnica me ha dotado de un dominio integral del ciclo de vida de la inteligencia artificial. Poseo competencias avanzadas para el desarrollo de soluciones de IA de extremo a extremo: desde la programación avanzada en Python y la construcción de modelos predictivos (regresión, clasificación, clustering) y de Deep Learning (Redes Neuronales, Transformers). Mi especialización abarca desde el preprocesamiento de datos y la optimización de hiperparámetros, garantizando soluciones escalables, eficientes y mantenibles.
        </p>
        <p className="text-lg mb-4">
          Mi propuesta de valor única reside en la fusión de mi rigurosa formación sociológica con mi especialización técnica en IA. Esta combinación me permite no solo construir modelos algorítmicamente complejos, sino también comprender profundamente el contexto social en el que operan. Mi objetivo es aplicar modelos de IA interpretables y éticos para resolver problemas complejos en el sector público y social, asegurando que la tecnología genere un impacto positivo y equitativo. Estoy especialmente capacitada en técnicas de Interpretabilidad y Explicabilidad (XAI) con herramientas como LIME y SHAP, lo que me permite auditar, explicar y mitigar sesgos en los modelos, garantizando que las decisiones automatizadas sean justas, transparentes y socialmente responsables.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">Habilidades</h2>
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
