import React, { useState } from 'react';
import { extracurricular, ExperienceItem } from '../../utils/static';
import './experience.css';

const ExtracurricularPage: React.FC = () => {
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
      <h1>Extracurricular Activities</h1>
      <h3>Leadership & Involvement</h3>
      <div className="work-container">
        {extracurricular.map((activity: ExperienceItem, index: number) => (
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
                <h2>{activity.title}</h2>
                <h4>{activity.company}</h4>
              </div>
              <div className="work-meta">
                <span>{activity.location}</span>
                <span>{activity.date}</span>
              </div>
            </div>
            <div className={`work-details ${expandedIndex === index ? 'expanded' : ''}`}>
              {activity.details.map((d, i) => <p key={i}>{d}</p>)}
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
  );
};

export default ExtracurricularPage;
