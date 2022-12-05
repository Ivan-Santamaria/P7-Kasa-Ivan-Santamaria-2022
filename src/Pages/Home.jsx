// Importation de la banière & carte de présentation
// Importation du titre
// Importation du css
import { Banner, Cards } from "../Routes/ComponentsRoutes";
import { DynamicTitle } from "../utils/DynamicTitle.jsx";
import "../styles/Pages/Home.css";

export default function Home(props) {
  DynamicTitle("Kasa - Acceuil");

  return (
    <div className="body">
      <div className="banner-home">
        {/* Injection de la banière */}
        <Banner content="Chez vous, partout et ailleurs" />
      </div>
      <div className="cards-container">
        {/* Injection des cards */}
        <Cards />
      </div>
    </div>
  );
}
