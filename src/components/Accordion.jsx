import { useState } from "react";
// Importation des îcones chevron
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import "../styles/Components/Accordion.css";

export default function Accordion(props) {
  // Le contenu de l'accordéon est invisible par défault
  const [visible, setVisibility] = useState(false);

  // Récupère le contenu des Accordéons grâce aux props
  const contentType = typeof props.content;

  return (
    <div className="accordion-item">
      {/* Au clic le contenu devient visible */}
      <div
        className="accordion-flexbox"
        // Changement de l'état de l'accordéon: visible || caché
        // Si Caché au click => déplois les informations
        onClick={() => setVisibility(!visible)}
      >
        <p className="accordion-title">{props.title}</p>
        <p className="accordion-icon">
          {visible ? <HiChevronDown /> : <HiChevronUp />}
        </p>
      </div>
      {visible && (
        <div className="accordion-collapse-text-container">
          {contentType === "string" && (
            <p className="collapsed-text">{props.content}</p>
          )}
        </div>
      )}
    </div>
  );
}
