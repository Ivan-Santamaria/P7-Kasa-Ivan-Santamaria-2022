import { Banner } from "../Routes/ComponentsRoutes";
import "../styles/Pages/Home.css";

export default function Home(props) {
  return (
    <div className="body">
      <div className="banner-home">
        <Banner content="Chez vous, partout et ailleurs" />
      </div>
      <div className="cards-container"></div>
    </div>
  );
}
