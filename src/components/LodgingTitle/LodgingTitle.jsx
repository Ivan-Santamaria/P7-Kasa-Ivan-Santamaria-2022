import "./LodgingTitle.css";

export default function LodgingTitle(props) {
  return (
    <div>
      <div className="title-container">
        <div className="title">{props.title}</div>
      </div>
    </div>
  );
}
