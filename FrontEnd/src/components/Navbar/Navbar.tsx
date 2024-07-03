import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";
import { FaPaw } from "react-icons/fa";
import {
  AiOutlineHeart,
  AiOutlinePlusSquare,
  AiOutlineMail,
  AiFillPlusCircle,
} from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import polandFlag from "../../assets/poland-flag.png";
import ukFlag from "../../assets/uk-flag.png";

const Navbar: React.FC = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [currentLang, setCurrentLang] = useState("PL");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

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
  // State to manage mobile menu visibility
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setShowMobileMenu((prevState) => !prevState);
  };
  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo-text">
        {/* Show the full logo (icon + text) on desktop */}
        {!isMobile && (
          <a
            href="/"
            className="logo-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPaw className="logo" /> AdoptujPupila.pl
          </a>
        )}
      </div>

      {/* Mobile menu */}
      <ul className="nav-links-mobile">
        <a
          href="/"
          className="logo-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPaw className="logo" />
        </a>
        <li>
          <a href="messages" onClick={handleLinkClick} data-auth="false">
            <AiOutlineMail className="message-icon" />
          </a>
        </li>
        {/* Show the plus icon instead of the "Dodaj Ogloszenie" button on mobile */}
        <li className="dodaj-ogloszenie">
          <a href="/" onClick={() => loginWithRedirect()} data-auth="false">
            <AiFillPlusCircle className="plus-icon" />
          </a>
        </li>
        <li>
          <a href="favourites" onClick={handleLinkClick} data-auth="false">
            <AiOutlineHeart className="heart-icon" />
          </a>
        </li>

        {/* Show the FiUser icon instead of "Twoje Konto" on mobile */}
        <li>
          <a
            href="/my-account"
            onClick={() => loginWithRedirect()}
            data-auth={isAuthenticated ? "false" : "true"}
          >
            <FiUser className="user-icon" />
          </a>
        </li>
      </ul>

      <ul className="nav-links">
        <li>
          <a href="messages" onClick={handleLinkClick} data-auth="false">
            <AiOutlineMail className="message-icon" />
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
