import React, { useState, useCallback, MouseEvent } from 'react';
import Slider from 'react-slick';
import { projects, ProjectItem } from '../../utils/static';
import { NextArrow, PrevArrow } from '../../components/sliderArrows';
import './experience.css';

const ProjectsPage: React.FC = () => {
  const [popupContent, setPopupContent] = useState<ProjectItem | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const openPopup = useCallback((content: ProjectItem) => {
    setPopupContent(content);
    setIsPopupVisible(true);
  }, []);

  const closePopup = useCallback(() => {
    setIsPopupVisible(false);
    setPopupContent(null);
  }, []);

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains('popup-overlay')) {
      closePopup();
    }
  };

  const renderTechTags = (techString: string) => (
    <div className="tech-tags">
      {techString.split(',').map((tag, idx) => (
        <span key={idx} className="tech-tag">{tag.trim()}</span>
      ))}
    </div>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    lazyLoad: 'ondemand' as const,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  return (
    <section className="projects-section">
      <h1>Projects</h1>
      <h3>Turning Ideas into Code</h3>
      <div className="project-slider-container">
        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => openPopup(project)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openPopup(project)}
            >
              {project.image && <img src={project.image} alt={project.alt} className="project-image" />}
              <h2>{project.title}</h2>
            </div>
          ))}
        </Slider>
      </div>

      {isPopupVisible && popupContent && (
        <div className="popup-overlay active" onClick={handleOverlayClick}>
          <div className="popup-container">
            <button className="close-btn" onClick={closePopup}>&times;</button>
            {popupContent.image && <img src={popupContent.image} alt={popupContent.alt} className="popup-image" />}
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
      )}
    </section>
  );
};

export default ProjectsPage;
