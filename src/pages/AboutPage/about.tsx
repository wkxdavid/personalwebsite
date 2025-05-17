import React from 'react';
import personalImage from '../../img/DavidPham.jpg';
import './about.css';
import { aboutContent } from '../../utils/static';

function AboutPage() {
  return (
    <section id='about-section' className='about-section'>
      <div className='about-container'>
        <div className='about-text'>
          <h1>{aboutContent.greeting}</h1>
          <h2>I'm David Pham</h2>
          <p className='about-intro'>{aboutContent.intro}</p>

          <div className='about-detail-section'>
            <h3>Experience</h3>
            <p>{aboutContent.research}</p>
          </div>

          <div className='about-detail-section'>
            <h3>Leadership</h3>
            <p>{aboutContent.leadership}</p>
          </div>
          {/* 
          <div className="about-skills about-detail-section">
            <h3>Skills</h3>

            <div className="skill-group">
              <h4>Languages</h4>
              <div className="skill-tags">
                <span>TypeScript</span>
                <span>JavaScript</span>
                <span>Java</span>
                <span>Python</span>
                <span>C++</span>
                <span>SQL</span>
              </div>
            </div>

            <div className="skill-group">
              <h4>Tools & Technologies</h4>
              <div className="skill-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>AWS</span>
                <span>Supabase</span>
              </div>
            </div>
          </div> */}
        </div>

        <div className='about-image'>
          <img src={personalImage} alt='David Pham smiling in a suit' />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
