import "./Rating.css";
import { AiFillStar } from "react-icons/ai";

export default function Rating(props) {
  // Création de constantes pour
  // afficher les étoiles colorées et les étoiles grises
  const ColoredStar = () => {
    return <p className="colored-star">{<AiFillStar />}</p>;
  };
  const EmptyStar = () => {
    return <p className="empty-star">{<AiFillStar />}</p>;
  };

  return (
    <div className="avis">
      <div className="star">
        {/* Utilisation de props pour la réupération de la note de l'annonce */}
        {/* Creation d'un tableau de 5 étoiles */}
        {Array.from({ length: parseInt(props.rating) }, (v, idx) => (
          <ColoredStar key={"colored-" + idx} />
        ))}
        {Array.from({ length: 5 - parseInt(props.rating) }, (v, idx) => (
          <EmptyStar key={"empty-" + idx} />
        ))}
      </div>
    </div>
  );
}
