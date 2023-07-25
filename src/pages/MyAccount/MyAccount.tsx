import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface User {
  name: string;
  email: string;
  picture: string;
}

const MyAccount: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <div>Please log in to view your account.</div>;
  }

  const userData: User = {
    name: user?.name || "",
    email: user?.email || "",
    picture: user?.picture || "",
  };

  return (
      <div className="my-account">
        <h2>My Account</h2>
        <div className="user-info">
          <div className="user-picture">
            <img src={userData.picture} alt={userData.name} />
          </div>
          <div className="user-details">
            <p>
              <strong>Name:</strong> {userData.name}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
          </div>
        </div>
      </div>
  );
};

export default MyAccount;
