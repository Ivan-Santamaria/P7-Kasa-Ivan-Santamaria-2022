import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import styled from "styled-components";

export const Button = styled.div`
  position: fixed;
  right: 0.5em;
  bottom: 50px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: #ff6060;
  filter: blur(1px);
  &:hover {
    filter: blur(0px);
  }
  @media screen and (min-width: 1024px) {
    bottom: 1.5em;
    right: 0.5em;
  }
`;

export default function ScrollButton() {
  // Le state du bouton n'est pas visible par default
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  // Renvoi vers le top de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button className="scroll-to-top-btn">
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </Button>
  );
}
