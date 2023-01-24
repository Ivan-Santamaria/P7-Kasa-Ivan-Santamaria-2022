import { BiArrowToTop } from "react-icons/bi";
import "./ScrollToTop.css";

export default function ScrollToTop() {
  return (
    <div id="scroll_to_top">
      <a href="#top" className="arrow-top">
        <BiArrowToTop />
      </a>
    </div>
  );
}
