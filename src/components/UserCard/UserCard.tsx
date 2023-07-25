// UserCard.tsx
import React from "react";
import "./UserCard.css";

interface UserCardProps {
  name: string;
  avatarUrl: string;
  createdAt: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, avatarUrl, createdAt }) => {
  return (
      <div className="user-card">
        <div className="user-avatar">
          <img src={avatarUrl} alt={name} />
        </div>
        <div className="user-info">
          <h3>{name}</h3>
          <p>Joined: {createdAt}</p>
        </div>
      </div>
  );
};

export default UserCard;
