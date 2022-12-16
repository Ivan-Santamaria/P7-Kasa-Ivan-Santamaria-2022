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
        {aboutData.map(({ title, content }) => (
          <Accordion key={title} title={title} content={content} />
        ))}
      </div>
    </div>
  );
}
