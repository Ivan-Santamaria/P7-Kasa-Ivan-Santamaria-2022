import "../styles/Components/Footer.css";
import whiteLogo from "../assets/img/white-logo.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-display">
        <div className="margin-top-bottom">
          <img src={whiteLogo} alt="logo" />
        </div>
        <div>
          <p className="copyrights">© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
