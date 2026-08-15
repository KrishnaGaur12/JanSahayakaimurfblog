import React from 'react';

interface MediaPlaceholderProps {
  label: string;
  caption?: string;
  isHero?: boolean;
}

export const MediaPlaceholder: React.FC<MediaPlaceholderProps> = ({ label, caption, isHero = false }) => {
  return (
    <div>
      <div className={`media-placeholder ${isHero ? 'hero' : ''}`}>
        [ IMAGE / VIDEO PLACEHOLDER: {label} ]
      </div>
      {caption && <div className="image-caption">{caption}</div>}
    </div>
  );
};
