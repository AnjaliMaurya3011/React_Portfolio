import React from 'react';
import project from './data/project.json';

const Project = () => {
  return (
    <div className='container projects' id="project">
      <h1>PROJECTS</h1>
      <div className='project-cards'  >
        {project.map((data) => (
          <div key={data.key} className="project-card" data-aos="flip-right" data-aos-duration="900">
            <img src={data.imageSrc} alt={data.title} className="project-image"/>
            <h2 className='projectsHeader'>{data.title}</h2>
            <p className='projectsHeader' >{data.description}</p>
            <div className='projectMain_btn'>
            <a href={data.source} target="_blank"  className=" project_btn"  rel="noopener noreferrer">Link</a>
            <a href={data.code} target="_blank"  className=" project_btn"  rel="noopener noreferrer">Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
