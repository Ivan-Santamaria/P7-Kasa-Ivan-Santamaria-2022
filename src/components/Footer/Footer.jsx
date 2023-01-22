import { Link } from "react-router-dom";
import whiteLogo from "../../assets/img/white-logo.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-display">
        <div className="margin-top-bottom">
          <Link to="/" className="link">
            <img
              src={whiteLogo}
              alt="logo de pied de page du site Kasa, site d'annonce de location entre particuliers "
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
