
import React from 'react';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of Project 1.',
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'A brief description of Project 2.',
      link: '#',
    },
    {
      title: 'Project 3',
      description: 'A brief description of Project 3.',
      link: '#',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-lg mb-2">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
