import "./LodgingTitle.css";

export default function LodgingTitle(props) {
  return (
    <div>
      <div className="title-container">
        {/* Utilisation de props pour la réupération du nom de l'annonce */}
        <h1 className="title">{props.title}</h1>
      </div>
    </div>
  );
}
