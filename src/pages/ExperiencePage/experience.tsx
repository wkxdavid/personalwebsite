import React, { useState, useCallback, MouseEvent } from 'react';
import Slider from 'react-slick';
import {
  workExperience,
  extracurricular,
  projects,
  ExperienceItem,
  ProjectItem,
} from '../../utils/static';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './experience.css';
import { NextArrow, PrevArrow } from '../../components/sliderArrows';

const ExperiencePage: React.FC = () => {
  const [expandedWorkIndex, setExpandedWorkIndex] = useState<number | null>(null);
  const [expandedExtraIndex, setExpandedExtraIndex] = useState<number | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState<ProjectItem | null>(null);

  const toggleExpand = (index: number, type: 'work' | 'extra') => {
    if (type === 'work') {
      setExpandedWorkIndex(expandedWorkIndex === index ? null : index);
    } else {
      setExpandedExtraIndex(expandedExtraIndex === index ? null : index);
    }
  };

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

  const renderTechTags = (techString: string) => {
    return (
      <div className="tech-tags">
        {techString.split(',').map((tag, idx) => (
          <span key={idx} className="tech-tag">{tag.trim()}</span>
        ))}
      </div>
    );
  };

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
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="experience-page">
      <section id="experience-section" className="experience-section">
        <h1>Work Experience</h1>
        <h3>Technical Contributions</h3>
        <div className="work-container">
          {workExperience.map((exp: ExperienceItem, index: number) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              className="work-card"
              onClick={() => toggleExpand(index, 'work')}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleExpand(index, 'work')}
            >
              <div className="work-header">
                <div className="work-title">
                  <h2>{exp.title}</h2>
                  <h4>{exp.company}</h4>
                </div>
                <div className="work-meta">
                  <span>{exp.location}</span>
                  <span>{exp.date}</span>
                </div>
              </div>
              <div className={`work-details ${expandedWorkIndex === index ? 'expanded' : ''}`}>
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

      <section id="extracurricular-section" className="experience-section">
        <h1>Extracurricular Activities</h1>
        <h3>Leadership & Involvement</h3>
        <div className="work-container">
          {extracurricular.map((activity: ExperienceItem, index: number) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              className="work-card"
              onClick={() => toggleExpand(index, 'extra')}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleExpand(index, 'extra')}
            >
              <div className="work-header">
                <div className="work-title">
                  <h2>{activity.title}</h2>
                  <h4>{activity.company}</h4>
                </div>
                <div className="work-meta">
                  <span>{activity.location}</span>
                  <span>{activity.date}</span>
                </div>
              </div>
              <div className={`work-details ${expandedExtraIndex === index ? 'expanded' : ''}`}>
                {activity.details.map((detail, detailIndex) => (
                  <p key={detailIndex}>{detail}</p>
                ))}
                {activity.tech && (
                  <div className="tech-stack">
                    <strong>Tech Stack:</strong>
                    {renderTechTags(activity.tech)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects-section" className="projects-section">
        <h1>Projects</h1>
        <h3>Turning Ideas into Code</h3>
        <div className="project-slider-container">
          <Slider {...sliderSettings}>
            {projects.map((project: ProjectItem, index: number) => (
              <div
                key={index}
                role="button"
                tabIndex={0}
                className="project-card"
                onClick={() => openPopup(project)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openPopup(project)}
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="project-image"
                  />
                )}
                <h2>{project.title}</h2>
              </div>
            ))}
          </Slider>
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
      )}
    </div>
  );
};

export default ExperiencePage;
