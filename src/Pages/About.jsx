import { Banner, Accordion } from "../Routes/ComponentsRoutes";
import "../styles/Pages/About.css";

export default function About() {
  return (
    <div className="body">
      <div className="banner-about">
        <Banner />
      </div>
      <div className="accordion-about-container">
        <Accordion title="test2" content="test3" />
      </div>
    </div>
  );
}
