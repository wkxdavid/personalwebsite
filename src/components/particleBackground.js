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
          color: { value: '#F5F5F0' },
        },
        particles: {
          color: { value: '#778899' },
          links: {
            enable: true,
            color: '#778899',
            distance: 150,
            opacity: 0.5,
            width: 1,
          },
          move: { enable: true, speed: 1 },
          number: {
            value: 60,
            density: { enable: true, area: 800 },
          },
          opacity: { value: 0.4 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
    />
  );
}
