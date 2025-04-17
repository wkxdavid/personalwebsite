import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function ParticleBackground() {
  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: 'transparent' },
        },
        particles: {
          color: { value: '#64ffda' },
          links: {
            enable: true,
            color: '#64ffda',
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
      }}
    />
  );
}
