import "../styles/Components/Carousel.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function Carousel(props) {
  return (
    <div className="carousel-container">
      <div className="carousel">
        {props.pictures.map((picture) => (
          <img
            className="carousel-container-img"
            alt="carousel"
            src={picture}
            key={picture}
          />
        ))}
      </div>
      <div className="carousel-controls">
        <span className="react-icon react-icon-chevron">
          <HiChevronLeft />
        </span>
        <span className="react-icon span react-icon-chevron">
          <HiChevronRight />
        </span>
      </div>
    </div>
  );
}
