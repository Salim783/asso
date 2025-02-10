import React from 'react';
import { Link } from 'react-router-dom';  // Importation du Link

function Contact() {
    return (
        <div>
            <div className="Presentation">
                <h1>Présentation de notre association</h1>
                <p>Notre association a été créée en 2000 par un groupe de passionnés de la nature et de la randonnée. Elle est basée à Paris, mais organise des randonnées en France et à l'étranger.</p>
            </div>

            <div className="Actions">
                <h4>Nos actions</h4>
                <p></p>
            </div>

            {/* Ajouter un lien vers la page Accueil */}
            <div>
                <Link to="/">Retour à l'Accueil</Link> {/* Ce lien renverra vers la page d'accueil */}
            </div>
        </div>
    );
}

export default Contact;
