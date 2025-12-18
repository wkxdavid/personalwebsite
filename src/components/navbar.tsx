import React, { useEffect, useState } from 'react';
import logo from '../img/dp-new-transparent.png';
import { FaLinkedin, FaGithub, FaEnvelope, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
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
        return 'dark';
    } catch (e) {
    }
    return 'light';
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    try {
      document.documentElement.classList.toggle('dark', theme === 'dark');
      localStorage.setItem('theme', theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  const handleClick = (section: keyof typeof refs) => {
    scrollToSection(refs[section]);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`custom-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="navbar-left" onClick={() => handleClick('home')}>
          <div className="navbar-logo-wrapper">
            <img src={logo} alt="DP logo" className="navbar-logo" />
          </div>
          <span className="navbar-name">David Pham</span>
        </div>

        <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li>
            <button onClick={() => handleClick('home')} className="nav-link">
              <span>Home</span>
            </button>
          </li>
          <li>
            <button onClick={() => handleClick('about')} className="nav-link">
              <span>About</span>
            </button>
          </li>
          <li>
            <button onClick={() => handleClick('experience')} className="nav-link">
              <span>Work</span>
            </button>
          </li>
        </ul>

        <div className="navbar-right">
          <div className="navbar-icons">
            <button 
              className="theme-toggle" 
              onClick={toggleTheme} 
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
            <a 
              href="mailto:phamdavid722@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a 
              href="https://www.linkedin.com/in/phamdavid722" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/wkxdavid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
