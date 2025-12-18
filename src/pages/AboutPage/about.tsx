import React, { useEffect } from 'react';
import personalImage from '../../img/DavidPham.jpg';
import './about.css';
import { aboutContent } from '../../utils/static';

function AboutPage() {
  useEffect(() => {
    document.body.classList.add('about-body');
    return () => {
      document.body.classList.remove('about-body');
    };
  }, []);

  return (
    <section id='about-section' className='about-section'>
      <div className='about-container'>
        <div className='section-header'>
          <span className='section-number'>01.</span>
          <h2 className='section-title'>About Me</h2>
          <div className='section-line'></div>
        </div>

        <div className='about-content'>
          <div className='about-text'>
            <p className='about-intro'>
              I'm a software engineer passionate about building products that make a difference. 
              Currently working at <span className='highlight'>HP Inc.</span> on enterprise solutions, 
              where I get to solve complex problems and build scalable systems.
            </p>

            <p className='about-intro'>
              I believe in writing clean, maintainable code and creating experiences that users actually 
              enjoy. Whether it's full-stack development, data analysis, or mobile apps, I love the 
              challenge of turning ideas into reality.
            </p>

            {aboutContent.activeSkills && aboutContent.activeSkills.length > 0 && (
              <div className='about-skills'>
                <h3>Technologies I'm currently working with:</h3>
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

          <div className='about-image-wrapper'>
            <div className='about-image'>
              <div className='image-border'></div>
              <img src={personalImage} alt='David Pham smiling in a suit' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
