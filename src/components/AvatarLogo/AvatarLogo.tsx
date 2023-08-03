import React from 'react';
import './AvatarLogo.css'; // Create a CSS file for styling if needed

interface AvatarProps {
  name: string;
  image: string;
}

const AvatarLogo: React.FC<AvatarProps> = ({ name, image }) => {
  return (
      <div className="avatar-logo-container">
        <img src={image} alt={name} />
        <p>{name}</p>
      </div>
  );
};

export default AvatarLogo;
