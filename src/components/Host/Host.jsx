import "./Host.css";

export default function Host(props) {
  return (
    <div className="host-container">
      <div className="name-container">
        {/* Utilisation des props pour l'affichage du nom de l'hôte */}
        <p className="name">{props.name}</p>
      </div>
      <div className="picture-container">
        {/* Utilisation des props pour l'affichage de la photo de l'hôte */}
        <img src={props.avatar} className="profile-picture" alt="profile" />
      </div>
    </div>
  );
}
