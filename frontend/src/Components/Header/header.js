import React, { useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <a href="/" className="logo">
          MonLogo
        </a>

        {/* Menu Burger */}
        <button className="burger-menu" onClick={toggleMenu}>
          {isMenuOpen ? <FiX className="burger-icon" /> : <FiMenu className="burger-icon" />}
        </button>

        {/* Navigation (Burger Menu) */}
        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          {/* Bouton Fermer */}
          <button className="close-btn" onClick={toggleMenu}>
            <FiX className="close-icon" /> Fermer
          </button>

          {/* Liens */}
          <a href="#about" className="nav-link" onClick={toggleMenu}>
            À propos
          </a>
          <a href="#services" className="nav-link" onClick={toggleMenu}>
            Services
          </a>
          <a href="#contact" className="nav-link" onClick={toggleMenu}>
            Contact
          </a>

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
        </nav>
      </div>
    </header>
  );
};

export default Header;
