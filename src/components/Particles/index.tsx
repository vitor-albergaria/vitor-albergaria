import React, { useCallback, useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { loadSlim } from '@tsparticles/slim';
import { Particles as Effect, initParticlesEngine } from '@tsparticles/react';

export const Particles: React.FC = () => {
  const theme = useTheme();
  const [isInitialized, setIsInitialized] = useState(false);

  const initParticles = useCallback(async () => {
    await initParticlesEngine(loadSlim);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    initParticles();
  }, []);

  if (!isInitialized) return null;

  return (
    <Effect
      id='tsparticles'
      options={{
        background: { color: { value: 'transparent' } },
        interactivity: {
          events: { onClick: { enable: false }, onHover: { enable: false } },
        },
        particles: {
          color: { value: theme.color.content },
          move: { enable: true, speed: 1 },
          number: { value: 80 },
          shape: { type: 'circle' },
        },
        detectRetina: true,
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};
