import { Navigate, useParams } from "react-router-dom";
import {
  Accordion,
  LodgingTitle,
  Tags,
  Location,
  Host,
  Rating,
  Carousel,
} from "../Routes/ComponentsRoutes";
import "../styles/Pages/Lodging.css";

export default function Lodging() {
  let params = useParams();
  const annonces = require("../datas/logements.json");
  const annonce = annonces.find((x) => x.id === params.id);

  // Si aucun élément n'est trouvé => page 404
  if (!annonce) {
    return <Navigate to="/errorpage" />;
  }
  return (
    <div className="body">
      <Carousel pictures={annonce.pictures} />
      <div className="element-container">
        <div>
          <LodgingTitle title={annonce.title} />
          <Location location={annonce.location} />
          <div className="tags">
            {annonce.tags.map((tag) => (
              <Tags content={tag} key={tag} />
            ))}
          </div>
        </div>
        <div className="ratingandhost-container">
          <Rating rating={annonce.rating} />
          <Host name={annonce.host.name} avatar={annonce.host.picture} />
        </div>
      </div>
      <div className="accordion-container">
        <Accordion title="Description" content={annonce.description} />
        <Accordion title="Equipements" content={annonce.equipments} />
      </div>
    </div>
  );
}
