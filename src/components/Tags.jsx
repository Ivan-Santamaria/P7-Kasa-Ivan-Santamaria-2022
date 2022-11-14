import "../styles/Components/Tag.css";

export default function Tags(props) {
  return (
    <div>
      <div className="tags-container">
        <div className="tags">
          <div className="tag">
            <p className="tag-text">{props.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
