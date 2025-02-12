import React from 'react';
import './presentation.css'; // Import du fichier CSS
import {Link} from 'react-router-dom';

const QuiSommesNous = () => {
  return (
    <div className="pre-qui-sommes-nous-container">
      <section className="pre-intro">
        <h1>Qui sommes-nous ?</h1>
        <p>
          <strong>MIA (Mission d'Insertion et d'Aide)</strong> est une
          association à but non lucratif engagée dans la lutte contre la pauvreté
          et le décrochage scolaire en France et au Maroc. Nous croyons fermement
          que l'éducation et le soutien aux personnes en difficulté sont essentiels
          pour construire un avenir meilleur.
        </p>
      </section>

      <section className="pre-mission">
        <h2>Notre Mission</h2>
        <p>
          MIA œuvre pour offrir des opportunités d'éducation et d'insertion
          professionnelle aux jeunes issus de milieux défavorisés. Nous
          intervenons auprès des élèves en difficulté scolaire, des jeunes sans
          emploi et des familles en situation de précarité, en leur apportant un
          accompagnement personnalisé pour qu'ils puissent s'épanouir et réussir.
        </p>
      </section>

      <section className="pre-valeurs">
        <h2>Nos Valeurs</h2>
        <div className="pre-valeurs-grid">
          <div className="pre-valeur-item">
            <h3>Solidarité</h3>
            <p>
              Nous agissons pour soutenir ceux qui en ont besoin, dans un esprit
              de solidarité et de partage.
            </p>
          </div>
          <div className="pre-valeur-item">
            <h3>Respect</h3>
            <p>
              Nous respectons les individus, leurs histoires et leurs parcours,
              en offrant des solutions adaptées à leurs besoins spécifiques.
            </p>
          </div>
          <div className="pre-valeur-item">
            <h3>Éducation</h3>
            <p>
              L'éducation est au cœur de notre action. Nous croyons que c'est par
              l'éducation que l'on peut changer des vies et offrir de nouvelles
              perspectives.
            </p>
          </div>
          <div className="pre-valeur-item">
            <h3>Engagement</h3>
            <p>
              Chaque membre de notre équipe s'engage pleinement pour la mission
              de l'association, afin de créer un impact réel et positif sur la
              société.
            </p>
          </div>
        </div>
      </section>

      <section className="pre-actions">
        <h2>Nos Actions</h2>
        <p>
          Nous mettons en place diverses actions pour accompagner les jeunes et
          les familles, telles que :
        </p>
        <ul>
          <li>Des programmes de tutorat scolaire et de soutien éducatif pour aider les élèves en difficulté.</li>
          <li>Des formations professionnelles et des ateliers de préparation à l'emploi pour favoriser l'insertion des jeunes dans le monde du travail.</li>
          <li>Des événements communautaires et des campagnes de collecte de fonds pour soutenir nos projets.</li>
        </ul>
      </section>

      <section className="pre-nos-partenaires">
        <h2>Nos Partenaires</h2>
        <p>
          Nous collaborons avec de nombreuses organisations, institutions et
          bénévoles pour offrir un soutien optimal à ceux qui en ont besoin.
        </p>
        <div className="pre-partenaires-logos">
          <img src="partenaire1-logo.png" alt="Partenaire 1" />
          <img src="partenaire2-logo.png" alt="Partenaire 2" />
          <img src="partenaire3-logo.png" alt="Partenaire 3" />
        </div>
      </section>

      <section className="pre-nous-contacter">
        <h2>Nous Contacter</h2>
        <p>
          Si vous souhaitez en savoir plus sur nos actions ou participer à nos
          projets, n'hésitez pas à nous contacter.
        </p>
        <Link to="/contact">
            <button className="pre-contact-button">
                Nous Contacter
            </button>
        </Link>
      </section>
    </div>
  );
};

export default QuiSommesNous;
