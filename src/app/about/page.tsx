
import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg mb-4">
        As a sociologist with a deep-seated passion for understanding social systems, my career has been a continuous evolution toward more powerful tools for analyzing human complexity. My initial experience in qualitative and quantitative research, working in the field with communities for MINVU programs and environmental impact studies, revealed to me both the power of data and the limitations of traditional methods for processing it at scale.
      </p>
      <p className="text-lg mb-4">
        This conviction led me to make a deliberate move toward technology, first by pursuing a Diploma in Data Science for Public Policy at the Pontificia Universidad Católica de Chile to build a robust quantitative foundation, and culminating in an intensive Specialization in Machine Learning, where I acquired the technical skills to transform data into high-impact predictive solutions.
      </p>
      <p className="text-lg mb-4">
        My technical training has equipped me with a comprehensive mastery of the entire life cycle of artificial intelligence. I have advanced skills for developing end-to-end AI solutions: from advanced Python programming and the construction of predictive models (regression, classification, clustering) and Deep Learning (Neural Networks, Transformers). My specialization ranges from data preprocessing and hyperparameter optimization, ensuring scalable, efficient, and maintainable solutions.
      </p>
      <p className="text-lg mb-4">
        My unique value proposition lies in the fusion of my rigorous sociological training with my technical specialization in AI. This combination allows me not only to build algorithmically complex models, but also to deeply understand the social context in which they operate. My goal is to apply interpretable and ethical AI models to solve complex problems in the public and social sector, ensuring that technology generates a positive and equitable impact. I am especially trained in Interpretability and Explainability (XAI) techniques with tools like LIME and SHAP, which allows me to audit, explain, and mitigate biases in models, ensuring that automated decisions are fair, transparent, and socially responsible.
      </p>

      <h2 className="text-3xl font-bold mt-8 mb-4">Skills</h2>
      <ul className="list-disc list-inside text-lg">
        <li>Data Science: Machine Learning (regression, classification, clustering), Deep Learning (Neural Networks, Transformers), NLP, XAI (LIME, SHAP), data preprocessing, hyperparameter optimization.</li>
        <li>Programming: Python</li>
        <li>Languages: Spanish</li>
        <li>Other: Social project management, qualitative and quantitative methods.</li>
      </ul>
    </div>
  );
};

export default AboutPage;
