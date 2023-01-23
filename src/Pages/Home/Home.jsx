// Importation de la banière & carte de présentation
// Importation du titre
// Importation du logo pour le top scroll
// Importation du css
import { Banner, Cards } from "../../Routes/ComponentsRoutes";
import { DynamicTitle } from "../../utils/DynamicTitle.jsx";
import { BiArrowToTop } from "react-icons/bi";
import "./Home.css";

export default function Home(props) {
  DynamicTitle("Kasa - Acceuil");

  return (
    <div className="body">
      <div className="banner-home">
        {/* Injection de la banière */}
        <Banner content="Chez vous, partout et ailleurs" />
      </div>
      {/* Bouton pour remonter la page */}
      <div id="scroll_to_top">
        <a href="#top" className="arrow-top">
          <BiArrowToTop />
        </a>
      </div>
      <div className="cards-container">
        {/* Injection des cards */}
        <Cards />
      </div>
    </div>
  );
}
