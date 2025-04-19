import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const arrowBaseStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'var(--accent)',
  color: 'var(--primary-bg)',
  borderRadius: '50%',
  width: '35px',
  height: '35px',
  zIndex: 2,
  cursor: 'pointer',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease',
  border: 'none',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  opacity: 0.9,
};

const hoverStyle: React.CSSProperties = {
  transform: 'translateY(-50%) scale(1.1)',
  boxShadow: '0 0 10px var(--accent)',
  opacity: 1,
};

export const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className={className}
      style={{
        ...style,
        ...arrowBaseStyle,
        right: '-15px',
        ...(hovered ? hoverStyle : {}),
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <FaChevronRight />
    </div>
  );
};

export const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className={className}
      style={{
        ...style,
        ...arrowBaseStyle,
        left: '-15px',
        ...(hovered ? hoverStyle : {}),
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <FaChevronLeft />
    </div>
  );
};
