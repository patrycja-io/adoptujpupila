import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";
import { FaPaw, FaRegUser } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import polandFlag from "../../assets/poland-flag.png";
import ukFlag from "../../assets/uk-flag.png";

const Navbar: React.FC = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [currentLang, setCurrentLang] = useState("PL");

  const handleChangeLanguage = (lang: string) => {
    setCurrentLang(lang);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if the link requires authentication
    const linkRequiresAuth = e.currentTarget.getAttribute("data-auth");

    // If the link requires authentication and the user is not authenticated, redirect to login
    if (linkRequiresAuth === "true" && !isAuthenticated) {
      e.preventDefault();
      loginWithRedirect();
    }
  };

  return (
    <nav className="navbar">
      <div className="logo-text">
        <a href="/"  className="logo-link" target="_blank"
           rel="noopener noreferrer">
          <FaPaw className="logo" /> AdoptujPupila.pl
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="messages" onClick={handleLinkClick} data-auth="false">
            <TbMailFilled className="message-icon" />
          </a>
        </li>
        <li>
          <a href="favourites" onClick={handleLinkClick} data-auth="false">
            <AiOutlineHeart className="heart-icon" />
          </a>
        </li>

        <li>
          <a href="/" onClick={() => loginWithRedirect()} data-auth="false">
            <button>Dodaj Ogloszenie</button>
          </a>
        </li>
        <li>
          <a
            href="/my-account"
            onClick={() => loginWithRedirect()}
            data-auth={isAuthenticated ? "false" : "true"}
          >
            Twoje Konto
          </a>
        </li>
        <div className="language-dropdown">
          <div className="language-dropdown">
            <select
              className="lang-text"
              value={currentLang}
              onChange={(e) => handleChangeLanguage(e.target.value)}
            >
              <option value="PL">PL</option>
              <option value="EN">EN</option>
            </select>
            <img
              src={currentLang === "PL" ? polandFlag : ukFlag}
              alt={currentLang}
              className="flag-icon"
            />
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
