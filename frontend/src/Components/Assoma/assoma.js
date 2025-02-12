import './assoma.css';
import img1 from "../../assets/donsFonds.jpg"
import img2 from "../../assets/donVet.jpg"
import img3 from "../../assets/donsAlim.jpg"
import img4 from "../../assets/donEcole.jpeg"


function AssoMa() {
    return (
        <div className="asso-ma">
            <h1 className="title">Nos actions au Maroc</h1>
            
            <div className="grid-container">
                {/* Section 1: Collecte de dons */}
                <div className="grid-item large">
                    <div className="text">
                        <h2>Collecte de dons</h2>
                        <p>Nous avons organisé plusieurs campagnes de collecte afin de réunir des fonds pour les personnes en situation de précarité. Ces collectes ont mobilisé des bénévoles et des partenaires engagés, permettant de rassembler des sommes importantes utilisées pour financer des aides alimentaires, des fournitures scolaires et des vêtements. Nos événements incluent des levées de fonds en ligne, des galas de charité et des collectes dans les écoles et entreprises locales.</p>
                    </div>
                    <img src={img1} alt="Collecte de dons" className="image-placeholder" />
                </div>

                {/* Section 2: Distribution de vêtements */}
                <div className="grid-item medium">
                    <img src={img2} alt="Distribution de vêtements" className="image-placeholder" />
                    <div className="text">
                        <h2>Distribution de vêtements</h2>
                        <p>Grâce aux dons récoltés, nous avons pu offrir des vêtements aux familles dans le besoin. Nos distributions se font dans les zones rurales et les quartiers défavorisés où l’accès aux ressources est limité. Nous collaborons avec des fabricants et des boutiques locales pour obtenir des vêtements neufs et de seconde main en excellent état. En hiver, nos distributions incluent des couvertures et des vêtements chauds afin d’aider les personnes à faire face aux températures extrêmes.</p>
                    </div>
                </div>

                {/* Section 3: Aide alimentaire */}
                <div className="grid-item medium">
                    <div className="text">
                        <h2>Aide alimentaire</h2>
                        <p>Des distributions de nourriture ont été organisées pour soutenir les familles en difficulté. Nous avons mis en place un système de paniers alimentaires contenant des produits essentiels tels que du riz, des légumes secs, de l’huile et du lait. Ces paniers sont distribués chaque mois aux familles les plus vulnérables. Pendant le Ramadan, nous avons également mis en place des repas collectifs et des distributions spéciales pour permettre aux familles de célébrer dans la dignité.</p>
                    </div>
                    <img src={img3} alt="Aide alimentaire" className="image-placeholder" />
                </div>

                {/* Section 4: Dons aux écoles */}
                <div className="grid-item large">
                    <img src={img4} alt="Dons aux écoles" className="image-placeholder" />
                    <div className="text">
                        <h2>Dons aux écoles</h2>
                        <p>Nous avons apporté du matériel scolaire et soutenu l'éducation des enfants défavorisés. En collaboration avec des écoles locales, nous avons fourni des fournitures essentielles comme des cahiers, des stylos et des cartables. Nos actions incluent également la rénovation de salles de classe et la mise en place de programmes de tutorat pour accompagner les élèves en difficulté. L’objectif est de donner à chaque enfant les moyens d’accéder à une éducation de qualité et de favoriser leur réussite scolaire.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AssoMa;
