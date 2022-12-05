// Importation de la banier et de l'accordéon
// Importation du titre
// Importation du css
import { Banner, Accordion } from "../Routes/ComponentsRoutes";
import { DynamicTitle } from "../utils/DynamicTitle.jsx";
import "../styles/Pages/About.css";

// Importation du fichier json contenant les information de la page Apropos
const aboutData = require("../datas/aboutData.json");

export default function About() {
  // Modification du titre de l'onglet
  DynamicTitle("Kasa - À Propos");

  return (
    <div className="body">
      <div className="banner-about">
        {/* Injection de la banière */}
        <Banner />
      </div>
      <div className="accordion-about-container">
        {/* Récupération des éléments de aboutData.json et injection dans le titre et le contenu de l'accordéon */}
        <Accordion title={aboutData[0].title} content={aboutData[0].content} />
        <Accordion title={aboutData[1].title} content={aboutData[1].content} />
        <Accordion title={aboutData[2].title} content={aboutData[2].content} />
        <Accordion title={aboutData[3].title} content={aboutData[3].content} />
      </div>
    </div>
  );
}
