import React, { useRef } from "react";
import { FaRegHandshake, FaHeart, FaPeopleCarry, FaUniversity, FaHandsHelping, FaMapMarkedAlt } from "react-icons/fa";
import "./accueil.css";

function Accueil() {
    const activeIndexRef = useRef(null);

    const handleToggle = (index) => {
        if (activeIndexRef.current === index) {
            activeIndexRef.current = null;
        } else {
            activeIndexRef.current = index;
        }
        document.getElementById(`objectif-${index}`).classList.toggle("flip");
    };

    return (
        <div className="accueil">
            <div className="presentation">
                <h1>Présentation de MIA</h1>
                <p>Notre association, MIA, lutte contre la précarité et l'abandon scolaire. Nous agissons en France et au Maroc, en menant des actions de collecte de fonds, des maraudes et des programmes de soutien éducatif.</p>
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
                    {[
                        { icon: <FaRegHandshake />, title: "Lutter contre la précarité", text: "Nous menons des maraudes et des collectes de fonds pour aider les plus démunis." },
                        { icon: <FaHeart />, title: "Lutter contre l'abandon scolaire", text: "Nous mettons en place des programmes de soutien scolaire." },
                        { icon: <FaPeopleCarry />, title: "Aider les populations", text: "Nous soutenons les personnes vulnérables en France et au Maroc." }
                    ].map((item, index) => (
                        <div
                            key={index}
                            id={`objectif-${index}`}
                            className="objectif-item"
                            onClick={() => handleToggle(index)}
                        >
                            <div className="objectif-card">
                                <div className="front">
                                    {item.icon}
                                    <h4>{item.title}</h4>
                                </div>
                                <div className="back">
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="actions">
                <h4>Nos actions pour atteindre nos objectifs</h4>
                <div className="actions-container">
                    {[
                        { icon: <FaHandsHelping />, text: "Organiser des collectes de fonds." },
                        { icon: <FaRegHandshake />, text: "Collaborer avec des partenaires locaux." },
                        { icon: <FaPeopleCarry />, text: "Mener des maraudes régulières." },
                        { icon: <FaUniversity />, text: "Fournir du matériel scolaire." },
                        { icon: <FaHeart />, text: "Offrir du soutien psychologique." },
                        { icon: <FaMapMarkedAlt />, text: "Cartographier les zones vulnérables." }
                    ].map((action, index) => (
                        <div key={index} className="action-item">
                            {action.icon}
                            <p>{action.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Accueil;
