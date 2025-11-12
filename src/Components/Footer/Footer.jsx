import React from "react";
import "./Footer.css";

const quickLinks = [
  { href: "/", text: "About Us" },
  { href: "#Placements", text: "Placement" },
  { href: "#Sports", text: "Sports" },
  { href: "/contact", text: "Contact" },
  { href: "#Services", text: "NIRF" },
];
const academics = [
  { href: "/", text: "Home" },
  { href: "/courses-offered", text: "Academic" },
  { href: "#Sports", text: "Library" },
  { href: "/departments", text: "Department" },
  { href: "#Services", text: "Alumni Cell" },
];
const socialLinks = [
  { href: "https://facebook.com", icon: "bi bi-facebook" },
  { href: "https://linkedin.com", icon: "bi bi-linkedin" },
  { href: "https://instagram.com", icon: "bi bi-instagram" },
  { href: "https://twitter.com", icon: "bi bi-twitter-x" },
];

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-column1">
          <div className="footer-column1 links">
            <h3>Address</h3>
            <ul>
              <li>Vilangudi,</li>
              <li>Trichy - Chidambaram NH81,</li>
              <li>Ariyalur - 612 731.</li>
            </ul>
          </div>
        </div>
        <div className="footer-column1 contact-info">
          <h3>Get Help</h3>
          <p>
            <i className="bi bi-telephone-fill"></i> 04329 - 2917278
          </p>
          <p>
            <i className="bi bi-envelope-fill"></i> ucea@auucea.edu.in
          </p>
          <p>
            <i className="fa fa-globe" aria-hidden="true" />
            www.auucea.edu.in
          </p>
        </div>
        <div className="footer-column1 links">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.text}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-column1 links">
          <h3>Academics</h3>
          <ul>
            {academics.map((link) => (
              <li key={link.text}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="social">
        <h3>Follow us on :</h3>
        <div className="social-icons">
          {socialLinks.map((social) => (
            <a
              href={social.href}
              key={social.icon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} University College of Engineering, Anna
          University - Ariyalur. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
