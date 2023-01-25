import "./Carousel.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { BiRadioCircleMarked, BiRadioCircle } from "react-icons/bi";
import { useState } from "react";

export default function Carousel(props) {
  // Initialise le state à 0, permet de se placer sur l'index 0 du json soit la première image de la liste
  const [slideIdx, setCurrentSlide] = useState(0);
  // Defini les taille d'images en fonction du conteneur
  const imgSize = () => {
    const sliderImg = document.querySelector(".carousel-container img");
    if (!sliderImg) {
      return 0;
    }
    return sliderImg.width;
  };
  //  Permettra l'incrémentation dans le slider, passe à l'image suivante
  const onNext = () => {
    if (slideIdx === props.pictures.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(slideIdx + 1);
    }
  };
  //  Permettra la décrementation dans le slider, retourne à l'image précédente
  const onPrev = () => {
    if (slideIdx === 0) {
      setCurrentSlide(props.pictures.length - 1);
    } else {
      setCurrentSlide(slideIdx - 1);
    }
  };
  // Permettra le click sur les bouton radio pour une sélection manuelle des images
  const handleClick = (event, param) => {
    setCurrentSlide(param);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        // Mouvement de déplacement des image sur un axe x (horizontal) entraine un remplacement total par la nouvele image
        style={{
          transform: `translateX(-${slideIdx * imgSize()}px)`,
        }}
      >
        {/* Bouclage avec .map sur les images pour toute les envoyer dans l'espace carousel */}
        {props.pictures.map((picture) => (
          <img
            className="carousel-container-img"
            alt="Images defilant dans le carousel"
            src={picture}
            key={picture}
          />
        ))}
      </div>
      {/* Espace des contrôles du carousel: Gauche <=> Droite */}
      <div className="carousel-controls">
        <span className="react-icons react-icons-chevron" onClick={onPrev}>
          <HiChevronLeft />
        </span>
        {/* Ajout d'une classe différencié pour alligner les chevrons avec flexbox */}
        <span className="react-icons span react-icons-chevron" onClick={onNext}>
          <HiChevronRight />
        </span>
      </div>
      {/* Espace des contrôles du carousel: Bas de page, bouton radio ou décompte d'images */}
      <div className="radio">
        {/* Bouclage avec map pour la récuparation de l'index des images et permettre l'affichage ou la navigation au click(radio) */}
        {props.pictures.map((picture, index) => (
          <span
            className="react-icons radiobutton react-icons-radio"
            key={picture}
            onClick={(event) => handleClick(event, index)}
          >
            {/* Proposition n°1 Numérotation*/}
            {/* {index === slideIdx && (
              <span className="image-number">
                {slideIdx + 1}/{props.pictures.length}
              </span>
            )} */}
            {/* Proposition n°2 Bouton radio */}
            {slideIdx === index ? <BiRadioCircleMarked /> : <BiRadioCircle />}
          </span>
        ))}
      </div>
    </div>
  );
}
