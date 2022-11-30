import { Banner, Cards } from "../Routes/ComponentsRoutes";
import "../styles/Pages/Home.css";
import { DynamicTitle } from "../utils/DynamicTitle.jsx";

export default function Home(props) {
  DynamicTitle("kasa - Acceuil");

  return (
    <div className="body">
      <div className="banner-home">
        <Banner content="Chez vous, partout et ailleurs" />
      </div>
      <div className="cards-container">
        <Cards />
      </div>
    </div>
  );
}
