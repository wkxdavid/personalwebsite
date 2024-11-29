import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { workExperience, projects } from '../../utils/static';
import './experience.css';

function ExperiencePage() {
  return (
    <div>
      <section id='projects-section' className='projects-section'>
        <h1 className='text-3xl font-bold text-center mb-8'>Projects</h1>
        <div className='project-container'>
          {projects.map((project, index) => (
            <div key={index} className='project-card'>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.alt}
                  className='project-image'
                />
              )}
              <h2>{project.title}</h2>
              {project.tech && <h4>{project.tech}</h4>}
              <p>{project.description}</p>
            </div>
          ))}
        </div>

        <h1>Experience</h1>
        <h3>
          For a more detailed description of my Experiences, please reach out or
          take a look at my resume!
        </h3>
        <div className='work-container'>
          {workExperience.map((exp, index) => (
            <div key={index} className='work-card'>
              {/* <div className='icon'>
                <FontAwesomeIcon icon={exp.icon} />
              </div> */}
              <div className='content'>
                <h2>{exp.title}</h2>
                <h3>{exp.company}</h3>
                <h4>{exp.tech}</h4>
                {exp.data && <h4>{exp.data}</h4>}
                {exp.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ExperiencePage;
