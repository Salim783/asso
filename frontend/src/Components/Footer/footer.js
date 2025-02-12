import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import des icônes React Icons
import logo from "../../assets/logoMIA.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Logo et Sections À Propos, Contact, Liens rapides alignés horizontalement */}
          <div className="footer-logo">
            <a href="/" className="logo-link">
              <img src={logo} alt="Logo" className="logo-image" />
            </a>
          </div>

          <div className="footer-sections">
            {/* Section À Propos */}
            <div className="footer-section">
              <h3 className="footer-title">À propos</h3>
              <ul className="footer-list">
                <li><a href="#who-we-are" className="footer-link">Qui sommes-nous ?</a></li>
                <li><a href="#mission" className="footer-link">Notre mission</a></li>
                <li><a href="#values" className="footer-link">Nos valeurs</a></li>
              </ul>
            </div>

            {/* Section Contact */}
            <div className="footer-section">
              <h3 className="footer-title">Contact</h3>
              <ul className="footer-list">
                <li className="footer-link">Email: link@asso.fr</li>
                <li className="footer-link">Téléphone: 06.06.06.06.06</li>
                <li className="footer-link">Adresse: 18 rue adresse</li>
              </ul>
            </div>

            {/* Section Liens rapides */}
            <div className="footer-section">
              <h3 className="footer-title">Liens rapides</h3>
              <ul className="footer-list">
                <li><a href="#services" className="footer-link">Services</a></li>
                <li><a href="#faq" className="footer-link">FAQ</a></li>
                <li><a href="#support" className="footer-link">Support</a></li>
              </ul>
            </div>
          </div>
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
          <a href="/mentions-legales" className="footer-bottom-link">Mentions légales</a> | {" "}
          <a href="/cgu" className="footer-bottom-link">CGU</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
