import React, { useState } from 'react';
import { workExperience, ExperienceItem } from '../../utils/static';
import './experience.css';

const WorkExperiencePage: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const renderTechTags = (techString: string) => (
    <div className="tech-tags">
      {techString.split(',').map((tag, idx) => (
        <span key={idx} className="tech-tag">{tag.trim()}</span>
      ))}
    </div>
  );

  return (
    <section className="experience-section">
      <h1>Work Experience</h1>
      <h3>Technical Contributions</h3>
      <div className="work-container">
        {workExperience.map((exp: ExperienceItem, index: number) => (
          <div
            key={index}
            className="work-card"
            onClick={() => toggleExpand(index)}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleExpand(index)}
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
            <div className={`work-details ${expandedIndex === index ? 'expanded' : ''}`}>
              {exp.details.map((d, i) => <p key={i}>{d}</p>)}
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
  );
};

export default WorkExperiencePage;
