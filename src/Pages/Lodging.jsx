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
      <LodgingTitle title={annonce.title} />

      <Location location={annonce.location} />
      {annonce.tags.map((tag) => (
        <Tags content={tag} key={tag} />
      ))}
      <Host name={annonce.host.name} avatar={annonce.host.picture} />
      <div className="div-accordion">
        <Accordion title="Description" content={annonce.description} />
        <Accordion title="Equipements" content={annonce.equipments} />
        <Rating rating={annonce.rating} />
      </div>
      <Carousel pictures={annonce.pictures} />
    </div>
  );
}
