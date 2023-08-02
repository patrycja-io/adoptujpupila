import React from 'react';
import './Avatar.css'; // Create a CSS file for styling if needed
import placeholder from "../../assets/placeholder.png";

interface AvatarProps {
  name: string;
  image: string;
}

const Avatar: React.FC<AvatarProps> = ({ name, image }) => {
  return (
      <div className="avatar-container">
        <img src={image} alt={name} />
        <p>{name}</p>
      </div>
  );
};

export default Avatar;
