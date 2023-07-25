import React from "react";
import "./Footer.css"; // Create a CSS file for styling if needed

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: "icon-facebook", href: "https://www.facebook.com/olx.polska" },
    { icon: "icon-instagram", href: "https://www.instagram.com/olxpolska" },
    {
      icon: "icon-youtube",
      href: "https://www.youtube.com/channel/UCGr18y85p6zXQwBev6CGwow",
    },
    { icon: "icon-linkedin", href: "https://pl.linkedin.com/company/olxpraca" },
    { icon: "icon-pinterest", href: "https://pl.pinterest.com/olxpolska" },
  ];

  return (
    <footer id="footer-container">
      <div className="footer-top wrapper small clr brbott-12 rel">
        <div className="content brbott-5">
          <div className="pding15_0 siteinfobox clr">
            <div className="social-links clr">
              <p>Dołącz do nas:</p>
              <ul>
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      className={link.icon}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overh text">
              {/* OLX description and other links */}
              {/* ... Your OLX description and other links */}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom" id="lastwrapper">
        <div className="wrapper small">
          <div className="margintop15 clr rel">
            {/* Bottom section */}
            {/* ... Your bottom section content */}
          </div>
          <p>&copy; {new Date().getFullYear()} Patrycja.io</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
