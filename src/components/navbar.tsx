import React from 'react';
import logo from '../img/dp-logo-transparent-black.jpg';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

interface NavbarProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  refs: {
    home: React.RefObject<HTMLElement>;
    about: React.RefObject<HTMLElement>;
    experience: React.RefObject<HTMLElement>;
  };
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, refs }) => {
  const handleClick = (section: keyof typeof refs) => {
    scrollToSection(refs[section]);
  };

  return (
    <nav className="navbar">
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        onClick={() => handleClick('home')}
      />

      <ul className="nav-links">
        <li>
          <button onClick={() => handleClick('home')}>Home</button>
        </li>
        <li>
          <button onClick={() => handleClick('about')}>About</button>
        </li>
        <li>
          <button onClick={() => handleClick('experience')}>Work</button>
        </li>
      </ul>

      <div className="social-icons">
        <a
          href="mailto:phamdavid722@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/phamdavid722"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/wkxdavid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
