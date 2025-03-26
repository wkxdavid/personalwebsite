import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  if (location.pathname === '/') {
    return null;
  }

  return (
    <footer className='App-footer'>
      <div className='contact-info'>
        <div className='social-item'>
          <FaEnvelope size={30} />
          <p>
            <a href='mailto:phamdavid722@gmail.com'>phamdavid722@gmail.com</a>
          </p>
        </div>
        <div className='social-item'>
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
        <div className='social-item'>
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
      <p className ="copyright">&copy; 2024 David Pham. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
