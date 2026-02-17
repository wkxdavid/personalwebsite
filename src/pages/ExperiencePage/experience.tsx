import React from 'react';
import {
  workExperience,
  ExperienceItem,
} from '../../utils/static';
import './experience.css';
import SectionHeader from '../../components/SectionHeader';

const ExperiencePage: React.FC = () => {
  return (
    <div className="experience-page">
      <section id="experience-section" className="experience-section">
        <SectionHeader number="02." title="Where I've Worked" />
        
        <div className="work-container">
          {workExperience.map((exp: ExperienceItem, index: number) => (
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
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
