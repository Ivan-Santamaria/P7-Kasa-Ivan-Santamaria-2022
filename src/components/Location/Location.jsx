import "./Location.css";

export default function Location(props) {
  return (
    <div>
      <div className="location-container">
        <div className="location">{props.location}</div>
      </div>
    </div>
  );
}
