import React from "react";
import { FiChevronDown } from "react-icons/fi";
import "./header.css"; // Ajoute ce fichier CSS dans ton projet

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <a href="/" className="logo">
          MonLogo
        </a>

        {/* Navigation */}
        <nav className="nav">
          {/* Dropdown */}
          <div className="dropdown">
            <button className="dropdown-btn">
              Les Assos <FiChevronDown className="dropdown-icon" />
            </button>
            <div className="dropdown-menu">
              <a href="#asso-france" className="dropdown-item">
                Asso France
              </a>
              <a href="#asso-maroc" className="dropdown-item">
                Asso Maroc
              </a>
            </div>
          </div>

          {/* Boutons */}
          <a href="#about" className="btn btn-secondary">
            En savoir plus sur nous
          </a>
          <a href="#contact" className="btn btn-primary">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
