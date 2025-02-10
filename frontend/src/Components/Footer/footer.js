import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import des icônes React Icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <a href="/" className="logo-link">Mon Logo</a>
        </div>

        {/* Navigation */}
        <div className="footer-links">
          <a href="#about" className="footer-link">À propos</a>
          <a href="#services" className="footer-link">Services</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <a
            href="https://facebook.com"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="icon" />
          </a>
          <a
            href="https://twitter.com"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icon" />
          </a>
          <a
            href="https://instagram.com"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; 2025 MonSite. Tous droits réservés.</p>
        <p>
          <a href="/mentions-legales" className="footer-bottom-link">Mentions légales</a> |{" "}
          <a href="/cgu" className="footer-bottom-link">CGU</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
