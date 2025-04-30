import React from 'react';

interface NavDotsProps {
  visibleSection: string;
  scrollToSection: (section: 'home' | 'about' | 'experience') => void;
}

const sections: { id: 'home' | 'about' | 'experience'; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
];

const NavDots: React.FC<NavDotsProps> = ({ visibleSection, scrollToSection }) => {
  return (
    <div className="nav-dots">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`dot ${visibleSection === section.id ? 'active' : ''}`}
          onClick={() => scrollToSection(section.id)}
          title={section.label}
        />
      ))}
    </div>
  );
};

export default NavDots;
