import React, { useMemo, useCallback, memo } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const ParticleBackground: React.FC = () => {
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
      move: { enable: true, speed: 1 },
      number: {
        value: 60,
        density: { enable: true, area: 800 },
      },
      opacity: { value: 0.2 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  }), []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
    />
  );
};

export default memo(ParticleBackground);
