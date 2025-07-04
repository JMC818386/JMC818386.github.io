import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "../../TopNav";
import PortfolioNav from "../../PortfolioNav";
import Footer from "../../Footer";
import "../../App.css";
import PortfolioNavigationArrows from "./PortfolioNavigationArrows";

import ThreeWillowsCover from './img/three-willows-cover.png';

function ThreeWillows() {
  return (
    <div className="bg-main-dark">
      <TopNav />
      <PortfolioNav />
      <PortfolioNavigationArrows currentPath="/three-willows" />

      {/* ---------------------------------------------- HERO SECTION ---------------------------------------------- */}
      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Three Willows</b>
          </div>
          <div className="paragraph">
            Elegant brand identity and visual design for Three Willows, featuring organic forms and natural aesthetics that reflect tranquility and growth.
          </div>
        </div>
        <div className="half-section image-side">
          <img
            className="cover-img drop-1"
            alt="Three Willows"
            src={ThreeWillowsCover}
          />
        </div>
      </div>

      {/* ---------------------------------------------- CONTENT SECTIONS ---------------------------------------------- */}
      <div className="section-2">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-sub-headline">Project Overview</b>
          </div>
          <div className="paragraph-2">
            Three Willows embodies the connection between nature and mindful living. The brand identity draws inspiration from organic forms and natural textures, creating a visual language that speaks to harmony, growth, and peaceful contemplation.
          </div>
        </div>
        <div className="half-section image-side">
          {/* Additional images can be added here */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ThreeWillows;
