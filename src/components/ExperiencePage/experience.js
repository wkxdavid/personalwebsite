import React, { useState } from 'react';
import { workExperience, projects } from '../../utils/static';
import './experience.css';

function ExperiencePage() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const openPopup = (content) => {
    setPopupContent(content);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setPopupContent(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('popup-overlay')) {
      closePopup();
    }
  };

  return (
    <div>
      <section id='projects-section' className='projects-section'>
        <h1 className='text-3xl font-bold text-center mb-8'>Projects</h1>
        <h3>Previous learning sandboxes that I worked on.</h3>
        <div className='project-container'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='project-card'
              onClick={() => openPopup(project)}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.alt}
                  className='project-image'
                />
              )}
              <h2>{project.title}</h2>
            </div>
          ))}
        </div>

        <h1>Experience</h1>
        <h3>
          For a more detailed description of my Experiences, please reach out!
        </h3>
        <div className='work-container'>
          {workExperience.map((exp, index) => (
            <div
              key={index}
              className='work-card'
              onClick={() => openPopup(exp)}
            >
              <div className='content'>
                <h2>{exp.title}</h2>
                <h3>{exp.company}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {isPopupVisible && (
        <div className='popup-overlay active' onClick={handleOverlayClick}>
          <div className='popup-container'>
            {popupContent.image && (
              <img
                src={popupContent.image}
                alt={popupContent.alt}
                className='popup-image'
              />
            )}
            <h2>{popupContent.title || popupContent.projectName}</h2>
            <p>
              {popupContent.description
                ? popupContent.description
                : popupContent.details.map((detail, index) => (
                    <span key={index}>
                      {detail}
                      {index < popupContent.details.length - 1 && <br />}
                    </span>
                  ))}
            </p>
            <p> Tech Stack: {popupContent.tech || 'Python'}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExperiencePage;
