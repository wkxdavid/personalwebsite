import React from 'react';

interface SectionHeaderProps {
  number: string;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title }) => {
  return (
    <div className="section-header">
      <span className="section-number">{number}</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-line" />
    </div>
  );
};

export default SectionHeader;


