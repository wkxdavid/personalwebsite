import React from 'react';
import personalImage from '../../img/DavidPham.jpg';
import './about.css';
import { aboutContent } from '../../utils/static';

function AboutPage() {
  return (
    <section id='about-section' className='about-section'>
      <div className='about-container'>
        <div className='about-image'>
          <img src={personalImage} alt='David Pham smiling in a suit' />
        </div>
        <div className='about-text'>
          <h1>{aboutContent.greeting}</h1>
          <h2>I'm David Pham</h2>
          <p className='about-intro'>{aboutContent.intro}</p>

          {aboutContent.activeSkills && aboutContent.activeSkills.length > 0 && (
            <div className='about-detail-section about-skills'>
              <h3>Active Tech</h3>
              <div className='skill-tags'>
                {aboutContent.activeSkills.map((skill, idx) => (
                  <span key={idx} className='skill-tag'>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

export default AboutPage;
