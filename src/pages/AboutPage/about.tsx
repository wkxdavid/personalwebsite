import React from 'react';
import personalImage from '../../img/DavidPham.jpg';
import './about.css';
import { aboutContent } from '../../utils/static';

function AboutPage() {
  return (
    <section id="about-section" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h1>{aboutContent.greeting}</h1>
          <h2>I'm David Pham</h2>
          <p className="about-intro">{aboutContent.intro}</p>

          <div className="about-detail-section">
            <h3>Experience</h3>
            <p>{aboutContent.research}</p>
          </div>

          <div className="about-detail-section">
            <h3>Leadership</h3>
            <p>{aboutContent.leadership}</p>
          </div>

          <div className="about-skills">
            <h3>Top Skills</h3>
            <div className="skill-tags">
              <span>TypeScript</span>
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Express.js</span>
              <span>Java</span>
              <span>AWS</span>
              <span>Jest</span>
              <span>Docker</span>
              <span>Supabase</span>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img src={personalImage} alt="David Pham smiling in a suit" />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
