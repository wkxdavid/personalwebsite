import React, { useState } from 'react';
import Slider from 'react-slick';
import { workExperience, projects } from '../../utils/static';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './experience.css';

function ExperiencePage() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="experience-page">
      <section id="experience-section" className="experience-section">
        <h1>Experience</h1>
        <h3>From both working or through activities while at school.</h3>
        <div className="work-container">
          {workExperience.map((exp, index) => (
            <div key={index} className="work-card" onClick={() => toggleExpand(index)}>
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
              <div className={`work-details ${expandedIndex === index ? 'expanded' : ''}`}>
                <p>{exp.description}</p>
                {(!exp.hideTech && exp.tech) && (
                  <p className="tech-stack"><strong>Tech Stack:</strong> {exp.tech}</p>
                )}
                {exp.details && exp.details.length > 0 && (
                  <div className="details-section">
                    <ul className="details-list">
                      {exp.details.map((detail, detailIndex) => (
                        <p key={detailIndex}>{detail}</p>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects-section" className="projects-section">
        <h1>Projects</h1>
        <h3>Explore some of my work</h3>
        <div className="project-slider-container">
          <Slider {...sliderSettings}>
            {projects.map((project, index) => (
              <div key={index} className="project-card" onClick={() => openPopup(project)}>
                {project.image && <img src={project.image} alt={project.alt} className="project-image" />}
                <h2>{project.title}</h2>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {isPopupVisible && (
        <div className="popup-overlay active" onClick={handleOverlayClick}>
          <div className="popup-container">
            <button className="close-btn" onClick={closePopup}>&times;</button>
            {popupContent.image && <img src={popupContent.image} alt={popupContent.alt} className="popup-image" />}
            <h2>{popupContent.title || popupContent.projectName}</h2>
            <p>
              {popupContent.description ||
                (popupContent.details &&
                  popupContent.details.map((detail, index) => (
                    <span key={index}>{detail}{index < popupContent.details.length - 1 && <br />}</span>
                  )))}
            </p>
            <p><strong>Tech Stack:</strong> {popupContent.tech || 'N/A'}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExperiencePage;
