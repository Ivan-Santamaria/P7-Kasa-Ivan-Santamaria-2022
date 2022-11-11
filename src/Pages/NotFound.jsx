// Import de link pour la redirection vers la page home
import { Link } from "react-router-dom";
import "../styles/Pages/NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link className="to-home-page" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
