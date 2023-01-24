// Importation de link depuis react-router-dom pour la redirection vers la page home
// Importation du titre
// Importation du css
import { Link } from "react-router-dom";
import { DynamicTitle } from "../../utils/DynamicTitle/DynamicTitle.jsx";
import "./NotFound.css";

export default function NotFound() {
  // Modification du titre de l'onglet
  DynamicTitle("Kasa - Page Introuvable :(");

  return (
    <div className="notfound">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link className="to-home-page" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
