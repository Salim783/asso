import './accueil.css';
import { Link } from 'react-router-dom';  // Importation du composant Link

function Accueil() {
    return (
        <div>
            <div className="Presentation">
                <h1>Présentation de notre association</h1>
                 <p>Notre association a été créée en 2000 par un groupe de passionnés de la nature et de la randonnée. Elle est basée à Paris, mais organise des randonnées en France et à l'étranger.</p>
            </div>
            <div className="Container1">
                <div className="Histoire">
                    <h2>Histoire</h2>
                    <p>Nous organisons des randonnées de tous niveaux, de la balade en forêt à la randonnée en montagne. Nous proposons également des week-ends et des séjours de plusieurs jours.</p>
                </div>
        
                <div className="Objectif">
                    <h3>Objectif</h3>
                    <ul>
                        <li>Organiser des randonnées en groupe</li>
                        <li>Favoriser la découverte de la nature</li>
                        <li>Partager des moments de convivialité</li>
                    </ul>
                </div>
            </div>

            <div className="Actions">
                <h4>Nos actions</h4>
                <p></p>
            </div>

            {/* Lien vers la page */}
            <div>
                <Link to="/Page">Accéder à la page</Link> {/* Remplacez "/page" par le chemin correspondant */}
            </div>
        </div>
    );
}

export default Accueil;
