import React from 'react';
import './home.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function HomePage({ scrollToSection, refs }) {
  const handleScrollTo = (section) => {
    scrollToSection(refs[section]);
  };

  return (
    <section id="home-section" className="home-section">
      <div className="home-container">
        <div className="home-text">
          <h1>David Pham</h1>
          <h2>Software Engineer</h2>
          <div className="contact-info">
            <div className="link-item">
              <FaEnvelope size={30} />
              <p>
                <a href="mailto:phamdavid722@gmail.com">
                  phamdavid722@gmail.com
                </a>
              </p>
            </div>
            <div className="link-item">
              <FaLinkedin size={30} />
              <p>
                <a
                  href="https://www.linkedin.com/in/phamdavid722"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  phamdavid722
                </a>
              </p>
            </div>
            <div className="link-item">
              <FaGithub size={30} />
              <p>
                <a
                  href="https://github.com/wkxdavid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  wkxdavid
                </a>
              </p>
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
}

export default HomePage;
