import React, { useEffect } from 'react';
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
              I'm a software engineer that enjoys buildinng cool things.
              Currently working at <a href="https://www.hp.com/us-en/home.html" className='highlight'>HP Inc.</a> building features on the HP Workforce Experience Platform.
            </p>

            <p className='about-intro'>
              During college, I did leadship in organizations like <a href="https://swecc.org/" className='highlight'>SWECC</a> and <a href="https://www.valorantuw.com/" className='highlight'>VAL @ UW</a>, where I built community around technology and collaboration. But now outside of coding, I stay engaged through volunteer work, physical activity, and the occasional gaming session.
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
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
