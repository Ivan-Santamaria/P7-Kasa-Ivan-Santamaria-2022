// importation du fichier css
import "./Banner.css";

export default function Banner(props) {
  return (
    <div className="card div-card">
      {/* Récupération du contenu grâce aux props */}
      <p className="home-paragraph container">{props.content}</p>
    </div>
  );
}
