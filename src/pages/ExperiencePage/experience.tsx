import React from 'react';
import {
  workExperience,
  // projects,
  ExperienceItem,
  // ProjectItem,
} from '../../utils/static';
import './experience.css';
import SectionHeader from '../../components/SectionHeader';

const ExperiencePage: React.FC = () => {
  // const [isPopupVisible, setIsPopupVisible] = useState(false);
  // const [popupContent, setPopupContent] = useState<ProjectItem | null>(null);

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

  return (
    <div className="experience-page">
      <section id="experience-section" className="experience-section">
        <SectionHeader number="02." title="Where I've Worked" />
        
        <div className="work-container">
          {workExperience.map((exp: ExperienceItem, index: number) => {
            return (
              <div key={index} className="work-item">
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
                <ul className="work-details">
                  {exp.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
                {exp.tech && (
                  <div className="tech-stack">
                    <span className="tech-label">Tech:</span>
                    <span className="tech-list">{exp.tech}</span>
                  </div>
                )}
              </div>
          )})}
        </div>

        <p className="experience-contact-note">
          For more details about any of these roles or an resume, feel free to email me at{' '}
          <a href="mailto:phamdavid722@gmail.com">phamdavid722@gmail.com</a>.
        </p>
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
