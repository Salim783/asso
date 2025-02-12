import React from 'react';
import './mention.css'; // Import du fichier CSS

const MentionsLegales = () => {
  return (
    <div className="mentions-legales">
      <h1>Mentions Légales</h1>
      <p>Le site <strong>www.mia-association.org</strong> est édité par :</p>
      <p>Nom de l'Association : MIA (Mission d'Insertion et d'Aide)</p>
      <p>Forme juridique : Association Loi 1901</p>
      <p>Siège social : [Adresse de l'association]</p>
      <p>Numéro SIRET : [Numéro SIRET]</p>
      <h3>Directeur de la publication :</h3>
      <p>[Nom du responsable de l'association]</p>
      <h3>Hébergeur du site :</h3>
      <p>Nom de l'hébergeur : [Nom de l'hébergeur]</p>
      <p>Adresse : [Adresse de l'hébergeur]</p>
      <p>Téléphone : [Numéro de téléphone de l'hébergeur]</p>
      <h3>Propriété intellectuelle :</h3>
      <p>Les contenus présents sur le site sont la propriété exclusive de l'association MIA. Toute reproduction est interdite sans autorisation.</p>
    </div>
  );
};

export default MentionsLegales;
