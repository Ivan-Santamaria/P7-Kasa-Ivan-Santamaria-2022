import "./Tag.css";

export default function Tags(props) {
  return (
    <div>
      <div className="tags-container">
        <div className="tags">
          <div className="tag">
            {/* Utilsation de props pour récupérer les mots clefs de l'annonce "tags" */}
            <p className="tag-text">{props.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
