import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function HomePage() {
  return (
    <section id='home-section' className='home-section'>
      <div className='home-container'>
        <div className='home-text'>
          <h1>David Pham</h1>
          <h2>Software Engineer</h2>
          <div className='contact-info'>
            <div className='link-item'>
              <FaEnvelope size={30} />
              <p>
                <a href='mailto:phamdavid722@gmail.com'>
                  phamdavid722@gmail.com
                </a>
              </p>
            </div>
            <div className='link-item'>
              <FaLinkedin size={30} />
              <p>
                <a
                  href='https://www.linkedin.com/in/phamdavid722'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  phamdavid722
                </a>
              </p>
            </div>
            <div className='link-item'>
              <FaGithub size={30} />
              <p>
                <a
                  href='https://github.com/wkxdavid'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  wkxdavid
                </a>
              </p>
            </div>
          </div>
          <div className='home-buttons'>
            <Link to='/about' className='home-button'>
              About
            </Link>
            <Link to='/experience' className='home-button'>
              Work
            </Link>
            {/* <Link to='/resume' className='home-button'>
              Resume
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
