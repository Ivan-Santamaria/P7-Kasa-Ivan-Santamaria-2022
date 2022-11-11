import { Accordion } from "../Routes/ComponentsRoutes";
import "../styles/Pages/About.css";

export default function About() {
  return (
    <div className="body">
      <div className="banner-about"></div>
      <div className="accordion-about-container">
        <Accordion />
      </div>
    </div>
  );
}
