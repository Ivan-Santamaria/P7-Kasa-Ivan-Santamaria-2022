import "./LodgingTitle.css";

export default function LodgingTitle(props) {
  return (
    <div>
      <div className="title-container">
        <h1 className="title">{props.title}</h1>
      </div>
    </div>
  );
}
