// Importation de la banière & carte de présentation
// Importation du titre
// Importation du logo pour le top scroll
// Importation du css
import { Banner, Cards } from "../../Routes/ComponentsRoutes";
import { DynamicTitle } from "../../components/DynamicTitle/DynamicTitle.jsx";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

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
      <ScrollToTop />
      <div className="cards-container">
        {/* Injection des cards */}
        <Cards />
      </div>
    </div>
  );
}
