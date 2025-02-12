import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import des icônes React Icons
import logo from "../../assets/logoMIA.png";
import {Link} from "react-router-dom"

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
                <li><Link to="#services" className="footer-link">Services</Link></li>
                <li><Link to="#faq" className="footer-link">FAQ</Link></li>
                <li><Link to="#support" className="footer-link">Support</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <Link to="https://facebook.com"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="icon" />
          </Link>
          <Link to="https://twitter.com"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icon" />
          </Link>
          <Link to="https://instagram.com"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </Link>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; 2025 MonSite. Tous droits réservés.</p>
        <p>
          <Link to="/mentions-legales" className="footer-bottom-link">Mentions légales</Link> | {" "}
          <Link to="/cgu" className="footer-bottom-link">CGU</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
