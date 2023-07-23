import React from 'react';
import './Avatar.css'; // Create a CSS file for styling if needed

interface AvatarProps {
  name: string;
  svgData: string; // Add the svgData prop
}

const Avatar: React.FC<AvatarProps> = ({ name, svgData }) => {
  return (
      <div className="avatar-container">
        <div dangerouslySetInnerHTML={{ __html: svgData }} />
        <p>{name}</p>
      </div>
  );
};

export default Avatar;
