import "./Carousel.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { BiRadioCircleMarked, BiRadioCircle } from "react-icons/bi";
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

  const handleClick = (event, param) => {
    setCurrentSlide(param);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{
          transform: `translateX(-${slideIdx * imgSize()}px)`,
        }}
      >
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
        <span className="react-icons react-icons-chevron" onClick={onPrev}>
          <HiChevronLeft />
        </span>
        {/* Ajout d'une classe différencié pour alligner les chevrons avec flexbox */}
        <span className="react-icons span react-icons-chevron" onClick={onNext}>
          <HiChevronRight />
        </span>
      </div>
      <div className="radio">
        {props.pictures.map((picture, index) => (
          <span
            className="react-icons radiobutton react-icons-radio"
            key={picture}
            onClick={(event) => handleClick(event, index)}
          >
            {slideIdx === index ? <BiRadioCircleMarked /> : <BiRadioCircle />}
          </span>
        ))}
      </div>
    </div>
  );
}
