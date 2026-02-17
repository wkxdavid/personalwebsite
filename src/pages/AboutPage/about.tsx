import React, { useEffect } from 'react';
import personalImage from '../../img/DavidPham.jpg';
import './about.css';
import { aboutContent } from '../../utils/static';
import SectionHeader from '../../components/SectionHeader';

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
        <SectionHeader number="01." title="About Me" />

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
                <h3>Currently working with:</h3>
                <ul className='skill-list'>
                  {aboutContent.activeSkills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className='about-image-wrapper'>
            <div className='about-image'>
              <img src={personalImage} alt='David Pham smiling in a suit' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
