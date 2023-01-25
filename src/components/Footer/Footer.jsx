import { Link } from "react-router-dom";
import whiteLogo from "../../img/white-logo.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-display">
        <div className="margin-top-bottom">
          {/* Renvoi vers la page d'acceuil */}
          <Link to="/" className="link link-footer">
            <img
              src={whiteLogo}
              alt="Logo de pied de page du site Kasa, site d'annonce de location entre particuliers "
            />
          </Link>
        </div>
        <div>
          <p className="copyrights">© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
