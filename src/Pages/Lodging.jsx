// Importaion de Navigate & useParams depuis react-router-dom 
// Importation des components utilisés sur la page
// Importaion du titre
// Importation du css
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
import { DynamicTitle } from "../utils/DynamicTitle.jsx";
import "../styles/Pages/Lodging.css";

export default function Lodging() {
  // Utilisation de useParams afin de récupérer les paramètres dans l'URL
  let params = useParams();
  // Récupération des logements dans le fichier json
  const annonces = require("../datas/logements.json");
  // Utilisation de .find() pour trouver l'information désirée dans le fichier json
  // Utilisation de params pour cibler la recherche avec l'id correspondant
  const annonce = annonces.find((x) => x.id === params.id);

  // Si aucun élément correspondant n'est trouvé => page 404 avec Navigate
  if (!annonce) {
    return <Navigate to="/errorpage" />;
  }
  // Récupération du nom donné à l'annonce, et injection dans le titre de l'onglet.
  DynamicTitle(`Kasa - ${annonce.title}`);
  return (
    <div className="body">
      {/* Récupération des images de l'annonce */}
      <Carousel pictures={annonce.pictures} />
      <div className="element-container">
        <div>
          {/* Récupération du titre de l'annonce */}
          <LodgingTitle title={annonce.title} />
          {/* Récupération du lieu */}
          <Location location={annonce.location} />
          <div className="tags">
            {/* Récupération des mots clés */}
            {annonce.tags.map((tag) => (
              <Tags content={tag} key={tag} />
            ))}
          </div>
        </div>
        <div className="ratingandhost-container">
          {/* Récupération de la note */}
          <Rating rating={annonce.rating} />
          {/* Récupération du nom et de la photo de l'annonceur */}
          <Host name={annonce.host.name} avatar={annonce.host.picture} />
        </div>
      </div>
      <div className="accordion-container">
        {/* Récupération de la description & des équipements proposés*/}
        <Accordion title="Description" content={annonce.description} />
        <Accordion title="Equipements" content={annonce.equipments} />
      </div>
    </div>
  );
}
