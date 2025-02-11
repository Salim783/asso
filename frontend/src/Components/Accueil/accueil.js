import React, { useState } from 'react';
import { FaRegHandshake, FaHeart, FaPeopleCarry, FaUniversity, FaHandsHelping, FaMapMarkedAlt } from 'react-icons/fa';
import './accueil.css';

function Accueil() {
    // State pour gérer l'affichage des détails des objectifs
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accueil">
            <div className="presentation">
                <h1>Présentation de MIA</h1>
                <p>Notre association, MIA, lutte contre la précarité et l'abandon scolaire. Nous agissons en France et au Maroc, en menant des actions de collecte de fonds, des maraudes et des programmes de soutien éducatif pour les plus démunis.</p>
                <a href="#v" className="btn-action">S'impliquer</a>
            </div>

            <div className="histoire">
                <h2>Histoire de l'association</h2>
                <p>
                    MIA a été fondée avec l'objectif d'apporter un soutien aux jeunes en difficulté, qu'ils soient confrontés à la précarité ou à l'abandon scolaire. Nous menons des actions en France et au Maroc, visant à améliorer les conditions de vie des personnes les plus vulnérables.
                </p>
                <blockquote>
                    "Chaque action, aussi petite soit-elle, contribue à un monde meilleur."
                </blockquote>
                <hr />
            </div>

            <div className="objectif">
                <h3>Nos objectifs</h3>
                <div className="objectif-list">
                    <div className={`objectif-item ${activeIndex === 0 ? 'flip' : ''}`} onClick={() => handleToggle(0)}>
                        <div className="objectif-card">
                            <div className="front">
                                <FaRegHandshake className="icon" />
                                <h4>Lutter contre la précarité</h4>
                            </div>
                            <div className="back">
                                <p>Nous menons des maraudes et des collectes de fonds pour soutenir les personnes en situation de précarité, en leur apportant des ressources de première nécessité.</p>
                            </div>
                        </div>
                    </div>

                    <div className={`objectif-item ${activeIndex === 1 ? 'flip' : ''}`} onClick={() => handleToggle(1)}>
                        <div className="objectif-card">
                            <div className="front">
                                <FaHeart className="icon" />
                                <h4>Lutter contre l'abandon scolaire</h4>
                            </div>
                            <div className="back">
                                <p>Nous mettons en place des programmes de tutorat et de soutien scolaire pour les jeunes en difficulté, afin de favoriser leur réussite éducative.</p>
                            </div>
                        </div>
                    </div>

                    <div className={`objectif-item ${activeIndex === 2 ? 'flip' : ''}`} onClick={() => handleToggle(2)}>
                        <div className="objectif-card">
                            <div className="front">
                                <FaPeopleCarry className="icon" />
                                <h4>Aider les populations en France et au Maroc</h4>
                            </div>
                            <div className="back">
                                <p>Nous agissons en France et au Maroc, en soutenant les personnes vulnérables par le biais de distributions alimentaires, de récoltes de fonds, et d'initiatives locales.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="actions">
                <h4>Nos actions pour atteindre nos objectifs</h4>
                <div className="actions-container">
                    <div className="action-item">
                        <FaHandsHelping className="icon" />
                        <p>Organiser des collectes de fonds pour financer nos actions en France et au Maroc.</p>
                    </div>
                    <div className="action-item">
                        <FaRegHandshake className="icon" />
                        <p>Collaborer avec des partenaires locaux pour améliorer l'impact de nos programmes éducatifs.</p>
                    </div>
                    <div className="action-item">
                        <FaPeopleCarry className="icon" />
                        <p>Mener des maraudes régulières pour distribuer des denrées alimentaires et des vêtements.</p>
                    </div>
                    <div className="action-item">
                        <FaUniversity className="icon" />
                        <p>Fournir du matériel scolaire et organiser des sessions de soutien pour les élèves en difficulté.</p>
                    </div>
                    <div className="action-item">
                        <FaHeart className="icon" />
                        <p>Offrir des services d'écoute et de soutien psychologique pour les jeunes et les familles en détresse.</p>
                    </div>
                    <div className="action-item">
                        <FaMapMarkedAlt className="icon" />
                        <p>Cartographier les zones les plus vulnérables pour mieux orienter nos actions et ressources.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accueil;
