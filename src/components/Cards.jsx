// Importation de link a partir de react router dom
import { Link } from "react-router-dom";
import "../styles/Components/Cards.css";

export default function Cards(props) {
  return (
    <div className="div-cards">
      <Link className="links">
        <ul className="cards card-home">
          <li className="li">
            <div className="text-shadow">{}</div>
          </li>
        </ul>
      </Link>
    </div>
  );
}
