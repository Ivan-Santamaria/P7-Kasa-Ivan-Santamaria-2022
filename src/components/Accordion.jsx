import { useState } from "react";
// Importation des îcones chevron
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import "../styles/Components/Accordion.css";

export default function Accordion(props) {
  return (
    <div className="accordion-item">
      <div className="accordion-flexbox">
        <p className="accordion-title">{props.title}</p>
        <p className="accordion-icon">
          <HiChevronDown /> : <HiChevronUp />
        </p>
      </div>
    </div>
  );
}
