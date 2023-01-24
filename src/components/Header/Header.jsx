// Importation de Link depuis react-router-dom
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/img/logo.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header-logo-container">
        {/* Vers la page d'acceuil */}
        <Link to="/" className="link link-header">
          <img
            src={logo}
            alt="logo d'en-tête du site Kasa, site d'annonce de location entre particuliers"
            className="logo"
          />
        </Link>
      </div>
      <div id="header-links">
        <div className="header-links-home">
          {/* Vers la page d'acceuil */}
          <Link to="/" className="link">
            Accueil
          </Link>
        </div>
        <div className="header-links-about">
          {/* Vers la page d'about */}
          <Link to="/apropos" className="link">
            A Propos
          </Link>
        </div>
      </div>
    </div>
  );
}
