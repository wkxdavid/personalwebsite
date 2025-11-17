import React, { useEffect, useState } from 'react';
import logo from '../img/dp-new-transparent.png';
import { FaLinkedin, FaGithub, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';
import '../styles/navbar.css'

interface NavbarProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  refs: {
    home: React.RefObject<HTMLElement>;
    about: React.RefObject<HTMLElement>;
    experience: React.RefObject<HTMLElement>;
  };
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, refs }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const stored = localStorage.getItem('theme');
        if (stored === 'light' || stored === 'dark') return stored;
        // default to dark mode when no stored preference
        return 'dark';
    } catch (e) {
      //  fallback to light mode
    }
    return 'light';
  });

  useEffect(() => {
    try {
      document.documentElement.classList.toggle('dark', theme === 'dark');
      localStorage.setItem('theme', theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  const handleClick = (section: keyof typeof refs) => {
    scrollToSection(refs[section]);
  };

  return (
    <nav className="custom-navbar">
      <div className="navbar-inner">
        <div className="navbar-left" onClick={() => handleClick('home')}>
          <img src={logo} alt="DP logo" className="navbar-logo" />
          <span className="navbar-name">David Pham</span>
        </div>

        <ul className="navbar-links">
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

        <div className="navbar-icons">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <a href="mailto:phamdavid722@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/phamdavid722" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/wkxdavid" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
