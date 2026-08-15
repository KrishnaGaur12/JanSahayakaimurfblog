import React from 'react';

interface FeatureCardProps {
  tag: string;
  title: string;
  description: React.ReactNode;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ tag, title, description }) => {
  return (
    <div className="feature-card">
      <span className="tag-pill">{tag}</span>
      <h3>{title}</h3>
      <p style={{ marginBottom: 0, fontSize: '1rem' }}>{description}</p>
    </div>
  );
};
