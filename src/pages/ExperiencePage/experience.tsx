import React, { useState } from 'react';
import {
  workExperience,
  // projects,
  ExperienceItem,
  // ProjectItem,
} from '../../utils/static';
import './experience.css';

const ExperiencePage: React.FC = () => {
  const [expandedWorkIndex, setExpandedWorkIndex] = useState<number | null>(null);
  // const [isPopupVisible, setIsPopupVisible] = useState(false);
  // const [popupContent, setPopupContent] = useState<ProjectItem | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedWorkIndex(expandedWorkIndex === index ? null : index);
  };

  // const openPopup = useCallback((content: ProjectItem) => {
  //   setPopupContent(content);
  //   setIsPopupVisible(true);
  // }, []);

  // const closePopup = useCallback(() => {
  //   setIsPopupVisible(false);
  //   setPopupContent(null);
  // }, []);

  // const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
  //   if ((e.target as HTMLElement).classList.contains('popup-overlay')) {
  //     closePopup();
  //   }
  // };

  const renderTechTags = (techString: string) => {
    return (
      <div className="tech-tags">
        {techString.split(',').map((tag, idx) => (
          <span key={idx} className="tech-tag">{tag.trim()}</span>
        ))}
      </div>
    );
  };

  return (
    <div className="experience-page">
      <section id="experience-section" className="experience-section">
        <div className="section-header">
          <span className="section-number">02.</span>
          <h2 className="section-title">Where I've Worked</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="work-container">
          {workExperience.map((exp: ExperienceItem, index: number) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              className={`work-card ${expandedWorkIndex === index ? 'expanded' : ''}`}
              onClick={() => toggleExpand(index)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleExpand(index)}
            >
              <div className="work-header">
                <div className="work-title">
                  <h3>{exp.title}</h3>
                  <h4>@ {exp.company}</h4>
                </div>
                <div className="work-meta">
                  <span className="work-date">{exp.date}</span>
                  <span className="work-location">{exp.location}</span>
                </div>
              </div>
              <div className="work-details">
                {exp.details.map((detail, detailIndex) => (
                  <p key={detailIndex}>{detail}</p>
                ))}
                {exp.tech && (
                  <div className="tech-stack">
                    <strong>Tech Stack:</strong>
                    {renderTechTags(exp.tech)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects section commented out */}
      {/* <section id="projects-section" className="projects-section">
        <div className="section-header">
          <span className="section-number">03.</span>
          <h2 className="section-title">Some Things I've Built</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project: ProjectItem, index: number) => (
            <div
              key={index}
              className="project-card"
              onClick={() => openPopup(project)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openPopup(project)}
              role="button"
              tabIndex={0}
            >
              {project.image && (
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.alt || project.title}
                    className="project-image"
                  />
                  <div className="project-overlay"></div>
                </div>
              )}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.tech && (
                  <div className="project-tech">
                    {renderTechTags(project.tech)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>


      {isPopupVisible && popupContent && (
        <div className="popup-overlay active" onClick={handleOverlayClick}>
          <div className="popup-container">
            <button className="close-btn" onClick={closePopup}>&times;</button>
            {popupContent.image && (
              <img
                src={popupContent.image}
                alt={popupContent.alt}
                className="popup-image"
              />
            )}
            <h2>{popupContent.title}</h2>
            <p>{popupContent.description}</p>
            {popupContent.tech && (
              <div className="tech-stack">
                <strong>Tech Stack:</strong>
                {renderTechTags(popupContent.tech)}
              </div>
            )}
            {popupContent.link && (
              <a href={popupContent.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project ↗
              </a>
            )}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ExperiencePage;
