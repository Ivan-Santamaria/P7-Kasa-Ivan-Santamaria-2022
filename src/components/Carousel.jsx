import "../styles/Components/Carousel.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useState } from "react";

export default function Carousel(props) {
  const [slideIdx, setCurrentSlide] = useState(0);
  const imgSize = () => {
    const sliderImg = document.querySelector(".carousel-container img");
    if (!sliderImg) {
      return 0;
    }
    return sliderImg.width;
  };

  const onNext = () => {
    if (slideIdx === props.pictures.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(slideIdx + 1);
    }
  };

  const onPrev = () => {
    if (slideIdx === 0) {
      setCurrentSlide(props.pictures.length - 1);
    } else {
      setCurrentSlide(slideIdx - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{
          transform: `translateX(-${slideIdx * imgSize()}px)`,
        }}
      >
        {/* On boucle sur les images */}
        {props.pictures.map((picture) => (
          <img
            className="slider-container-img"
            alt="slider"
            src={picture}
            key={picture}
          />
        ))}
      </div>
      <div className="carousel-controls">
        <span className="react-icon react-icon-chevron" onClick={onPrev}>
          <HiChevronLeft />
        </span>
        <span className="react-icon span react-icon-chevron" onClick={onNext}>
          <HiChevronRight />
        </span>
      </div>
    </div>
  );
}
