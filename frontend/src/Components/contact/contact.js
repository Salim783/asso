import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="header">
        <h1>Contactez-nous</h1>
        <p>Nous sommes là pour vous aider !</p>
      </div>

      <div className="contact-content">
        <div className="contact-card">
          <h2>Informations de contact</h2>
          <div className="contact-item">
            <FaPhone size={30} />
            <div>
              <h3>Téléphone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="contact-item">
            <FaEnvelope size={30} />
            <div>
              <h3>Email</h3>
              <p>contact@lasso.com</p>
            </div>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt size={30} />
            <div>
              <h3>Adresse</h3>
              <p>123 Rue Fictive, Paris, France</p>
            </div>
          </div>
        </div>

        <div className="map-section">
          <h2>Plan d'accès</h2>
          <p>Retrouvez-nous à notre adresse :</p>
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.224305658459!2d2.2978!3d48.8584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671b57f755623%3A0x1c665cc088ea6c5e!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1582712651990!5m2!1sfr!2sfr"
            width="100%"
            height="400"
            frameBorder="0"
            style={{
              border: '1px solid #ddd', /* Bordure légère */
              borderRadius: '10px', /* Bordures arrondies */
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', /* Ombre légère */
              display: 'block', /* Pour éviter les marges internes par défaut */
              margin: '0 auto' /* Centrer l'iframe horizontalement */
            }}
           ></iframe>

        </div>
      </div>

      <div className="donation-section">
        <h2>Supportez notre projet</h2>
        <p>
          Si vous souhaitez soutenir notre projet, vous pouvez faire un don via le lien ci-dessous.
          Chaque contribution est précieuse et nous aide à continuer à fournir des services de qualité.
        </p>
        <a href="#f" className="donation-link">Faire un don</a>
      </div>
    </div>
  );
};

export default Contact;
