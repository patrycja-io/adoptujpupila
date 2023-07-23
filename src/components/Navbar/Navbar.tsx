import React, { useState } from "react";
import "./Navbar.css";
const Navbar: React.FC = () => {
  const [currentLang, setCurrentLang] = useState("PL");

  const handleChangeLanguage = (lang: string) => {
    setCurrentLang(lang);
  };

  return (
    <nav className="navbar">
      <div className="logo">AdoptujPupila.pl</div>
      <div className="nav-links">
        <div className="language-dropdown">
          <select
            value={currentLang}
            onChange={(e) => handleChangeLanguage(e.target.value)}
          >
            <option value="PL">PL</option>
            <option value="EN">EN</option>
          </select>
          <img
            src={currentLang === 'PL' ? 'polandFlag' : "uk-flag.png"}
            alt={currentLang}
            className="flag-icon"
          />
        </div>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">Wiadomości</a>
        </li>
        <li>
          <a href="#">Ulubiency</a>
        </li>
        <li>
          <a href="#">Twoje Konto</a>
        </li>
        <li>
          <button>Dodaj Ogłoszenie</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
