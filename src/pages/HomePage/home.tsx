import React, { useEffect } from 'react';
import './home.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

interface HomePageProps {
  scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void;
  refs: {
    homeRef: React.RefObject<HTMLElement | null>;
    aboutRef: React.RefObject<HTMLElement | null>;
    experienceRef: React.RefObject<HTMLElement | null>;
  };
}

const HomePage: React.FC<HomePageProps> = ({ scrollToSection, refs }) => {
  useEffect(() => {
    document.body.classList.add('home-body');
    return () => {
      document.body.classList.remove('home-body');
    };
  }, []);

  const handleScrollTo = (section: keyof HomePageProps['refs']) => {
    scrollToSection(refs[section]);
  };

  return (
    <section id='home-section' className='home-section'>
      <div className='home-container'>
        <div className='home-content'>
          <div className='greeting-text'>Hey there, I'm</div>
          
          <h1 className='name-text'>David Pham</h1>
          
          <p className='role-text'>Software Engineer</p>

          <div className='home-actions'>
            <button
              onClick={() => handleScrollTo('aboutRef')}
              className='home-button primary'
            >
              Learn More
            </button>
            <button
              onClick={() => handleScrollTo('experienceRef')}
              className='home-button secondary'
            >
              View Experience
            </button>
          </div>

          <div className='social-links'>
            <a 
              href='mailto:phamdavid722@gmail.com'
              className='social-link'
              aria-label='Email'
            >
              <FaEnvelope />
            </a>
            <a
              href='https://www.linkedin.com/in/phamdavid722'
              target='_blank'
              rel='noopener noreferrer'
              className='social-link'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </a>
            <a
              href='https://github.com/wkxdavid'
              target='_blank'
              rel='noopener noreferrer'
              className='social-link'
              aria-label='GitHub'
            >
              <FaGithub />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomePage;
