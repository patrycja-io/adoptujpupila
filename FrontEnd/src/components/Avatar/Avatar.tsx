import React from "react";
import "./Avatar.css"; // Create a CSS file for styling if needed
import { Link } from "react-router-dom"; // Import Link from react-router-dom if using React Router


interface AvatarProps {
  name: string;
  image: string;
  itemId: number;
}

const Avatar: React.FC<AvatarProps> = ({ name, image,itemId }) => {
  return (
      <Link to={`/items/${itemId}`} className="avatar-link">
        <div className="avatar-container">
          <img src={image} alt={name} />
          <p>{name}</p>
        </div>
      </Link>
  );
};

export default Avatar;
