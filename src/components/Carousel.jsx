import "../styles/Components/Carousel.css";

export default function Carousel(props) {
  return (
    <div className="carousel-container">
      {props.pictures.map((picture) => (
        <img
          className="carousel-container-img"
          alt="carousel"
          src={picture}
          key={picture}
        />
      ))}
    </div>
  );
}
