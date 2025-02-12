import React, { useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import "./header.css";
import logo from "../../assets/logoMIA.png"; // Assurez-vous de remplacer avec le chemin correct de votre logo
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>

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

           {/* Dropdown */}
           <div className="dropdown">
            <button className="dropdown-btn">
              Les Assos <FiChevronDown className="dropdown-icon" />
            </button>
            <div className="dropdown-menu">
              <Link to='/AssoOne' className="dropdown-item">
                Asso France
              </Link>
              <Link to="/Assoma" className="dropdown-item">
                Asso Maroc
              </Link>
            </div>
          </div>

          {/* Liens */}
          <Link to="/Presentation" className="nav-link" onClick={toggleMenu}>
            Qui sommes-nous
          </Link>
          <Link to="/contact" className="nav-link" onClick={toggleMenu}>
            Contact
          </Link>

        </nav>
      </div>
    </header>
  );
};

export default Header;
