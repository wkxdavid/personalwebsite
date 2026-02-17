import React from 'react';
import '../styles/navbar.css';
import { SectionConfig, SectionId } from '../config/sections';

interface NavbarProps {
  scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void;
  refs: Record<SectionId, React.RefObject<HTMLElement | null>>;
  sections: SectionConfig[];
  activeSection: SectionId;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, refs, sections, activeSection }) => {
  const handleClick = (section: SectionId) => {
    scrollToSection(refs[section]);
  };

  return (
    <nav className="custom-navbar">
      <div className="navbar-inner">
        <button className="navbar-left" onClick={() => handleClick('home')}>
          <span className="navbar-name">David Pham</span>
        </button>

        <ul className="navbar-links">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleClick(section.id)}
                className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
              >
                <span>{section.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
