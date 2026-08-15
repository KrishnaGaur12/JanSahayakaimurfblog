import React from 'react';

interface TimelineItemProps {
  day: string;
  description: string;
}

export const Timeline: React.FC<{ items: TimelineItemProps[] }> = ({ items }) => {
  return (
    <div className="timeline">
      {items.map((item, idx) => (
        <div key={idx} className="timeline-item">
          <div className="timeline-marker">{item.day}</div>
          <div style={{ fontSize: '1rem', color: 'var(--ink-70)' }}>{item.description}</div>
        </div>
      ))}
    </div>
  );
};
