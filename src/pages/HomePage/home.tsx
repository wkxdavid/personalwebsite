import React, { useEffect } from 'react';
import './home.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import ParticleBackground from '../../components/particleBackground';

interface HomePageProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  refs: {
    homeRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
    experienceRef: React.RefObject<HTMLElement>;
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
    <section id="home-section" className="home-section">
      <ParticleBackground />

      <div className="home-container">
        <div className="home-text">
          <h1>David Pham</h1>
          <h2>Software Engineer</h2>
          <div className="contact-info">
            <div className="link-item">
              <a href="mailto:phamdavid722@gmail.com">
                <FaEnvelope size={30} />
                <p>phamdavid722@gmail.com</p>
              </a>
            </div>
            <div className="link-item">
              <a
                href="https://www.linkedin.com/in/phamdavid722"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
                <p>phamdavid722</p>
              </a>
            </div>
            <div className="link-item">
              <a
                href="https://github.com/wkxdavid"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
                <p>wkxdavid</p>
              </a>
            </div>
          </div>
          <div className="home-buttons">
            <button onClick={() => handleScrollTo('aboutRef')} className="home-button">
              About
            </button>
            <button onClick={() => handleScrollTo('experienceRef')} className="home-button">
              Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
