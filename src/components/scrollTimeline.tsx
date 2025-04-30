import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

interface Section {
  id: string;
  label: string;
}

interface ScrollTimelineProps {
  sections: Section[];
  visibleSection: string;
  scrollToSection: (id: string) => void;
}

const ScrollTimeline: React.FC<ScrollTimelineProps> = ({ sections, visibleSection, scrollToSection }) => {
  const [progress, setProgress] = useState(0);
  const animatedProgress = useSpring(progress, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-timeline">
      <div className="line-background">
        <motion.div
          className="line-fill"
          style={{ height: animatedProgress }}
        />
        {sections.map((section, index) => (
          <button
            key={section.id}
            className={`timeline-dot ${visibleSection === section.id ? 'active' : ''}`}
            onClick={() => scrollToSection(section.id)}
            title={section.label}
            style={{ top: `${(index / (sections.length - 1)) * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollTimeline;
