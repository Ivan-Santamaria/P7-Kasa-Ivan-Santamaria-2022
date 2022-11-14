import "../styles/Components/Host.css";

export default function Host(props) {
  return (
    <div className="host-container">
      <div className="profileDiv">
        {/* affichage du nom de l'utilisateur grâce aux props */}
        <p className="name">{props.name}</p>
      </div>
      <div>
        {/* affichage de la photo de l'utilisateur grâce aux props */}
        <img src={props.avatar} className="profilePicture" alt="profil" />
      </div>
    </div>
  );
}
