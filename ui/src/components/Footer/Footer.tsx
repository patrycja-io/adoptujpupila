// Footer.tsx
import React from "react";
import "./Footer.css"; // Import the CSS file for styling

const Footer: React.FC = () => {
  // Your component logic here

  const socialLinks = [
    { icon: "icon-facebook", href: "https://www.facebook.com/yourpage" },
    { icon: "icon-twitter", href: "https://www.twitter.com/yourpage" },
    { icon: "icon-instagram", href: "https://www.instagram.com/yourpage" },
    // Add more social links as needed
  ];

  return (
      <footer className="footer-container">
        <div className="footer-top wrapper small clr brbott-12 rel">
          {/* Your footer content */}
          <div className="content brbott-5">
            {/* ... */}
          </div>

          {/* Contact Us section */}
          <div className="contact-us">
            <h3>Contact Us</h3>
            <p>
              Email: contact@example.com
              <br />
              Phone: +1234567890
            </p>
          </div>

          {/* Social links */}
          <div className="footer-social-links">
            <h3>Follow Us</h3>
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
        </div>

        <div className="footer-logo">
          {/* Your logo SVG */}
          {/* ... */}
        </div>

        <div className="footer-bottom" id="lastwrapper">
          <div className="wrapper small">
            {/* Your bottom section content */}
            {/* ... */}
            <p>&copy; {new Date().getFullYear()} Patrycja.io</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
