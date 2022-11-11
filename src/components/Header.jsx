// Importation de Link depuis react-router-dom
import { Link } from "react-router-dom";
import "../styles/Components/Header.css";
import logo from "../assets/img/logo.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header-logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="header-links">
        <div className="header-links-home">
          <Link to="/" className="link">
            Accueil
          </Link>
        </div>
        <div className="header-links-about">
          <Link to="/apropos" className="link">
            A Propos
          </Link>
        </div>
      </div>
    </div>
  );
}
