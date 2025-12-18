import React, { useMemo, useCallback, memo, useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const ParticleBackground: React.FC = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') {
      return;
    }
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  const particlesInit = useCallback(async (main: Engine): Promise<void> => {
    await loadSlim(main);
  }, []);

  const particlesOptions = useMemo(() => ({
    fullScreen: { enable: true, zIndex: 0 },
    background: {
      color: { value: 'transparent' },
    },
    particles: {
      color: { value: '#60a5fa' },
      links: {
        enable: true,
        color: '#60a5fa',
        distance: 150,
        opacity: 0.3,
        width: 1,
      },
      move: { enable: true, speed: 0.7 },
      number: {
        value: 40,
        density: { enable: true, area: 800 },
      },
      opacity: { value: 0.2 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  }), []);

  if (prefersReducedMotion) {
    return null;
  }

  return <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />;
};

export default memo(ParticleBackground);
