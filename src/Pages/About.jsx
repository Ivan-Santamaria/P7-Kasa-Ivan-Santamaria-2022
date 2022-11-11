import { Banner, Accordion } from "../Routes/ComponentsRoutes";
import "../styles/Pages/About.css";
// Importation du fichier json contenant les information de la page Apropos
const aboutData = require("../datas/aboutData.json");

export default function About() {
  return (
    <div className="body">
      <div className="banner-about">
        <Banner />
      </div>
      <div className="accordion-about-container">
        {/* Récupération des éléments de aboutData.json et injection dans le titre et le contenu de l'accordéon */}
        <Accordion title={aboutData[0].title} />
      </div>
    </div>
  );
}
