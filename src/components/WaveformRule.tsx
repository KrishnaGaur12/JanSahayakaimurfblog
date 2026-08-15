import React, { useEffect, useState } from 'react';

export const WaveformRule: React.FC<{ animated?: boolean }> = ({ animated = false }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (animated) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setShouldAnimate(!prefersReducedMotion);
    }
  }, [animated]);

  return (
    <div className={`waveform-rule ${shouldAnimate ? 'animated' : ''}`}>
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
};
