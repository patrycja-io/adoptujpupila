import React from "react";
import "./AvatarLogo.css"; // Create a CSS file for styling if needed
import { Link } from "react-router-dom"; // Import Link from react-router-dom if using React Router

interface AvatarProps {
  name: string;
  image: string;
}

const AvatarLogo: React.FC<AvatarProps> = ({ name, image }) => {
  return (
    <Link to={`/shelterlist`} className="avatar-link">
      <div className="avatar-logo-container">
        <img src={image} alt={name} />
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default AvatarLogo;
