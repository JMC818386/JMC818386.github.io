import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "../../TopNav";
import PortfolioNav from "../../PortfolioNav";
import Footer from "../../Footer";
import "../../App.css";
import PortfolioNavigationArrows from "./PortfolioNavigationArrows";

import RailbirdCover from './img/railbird-cover.png';

function Railbird() {
  return (
    <div className="bg-main-dark">
      <TopNav />
      <PortfolioNav />
      <PortfolioNavigationArrows currentPath="/railbird" />

      {/* ---------------------------------------------- HERO SECTION ---------------------------------------------- */}
      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Railbird</b>
          </div>
          <div className="paragraph">
            Music festival brand identity and promotional materials, capturing the energy and spirit of live music with bold, dynamic visual elements.
          </div>
        </div>
        <div className="half-section image-side">
          <img
            className="cover-img drop-1"
            alt="Railbird"
            src={RailbirdCover}
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
            Railbird Festival brings together music lovers in a celebration of sound and community. The brand identity reflects the festival's vibrant energy through dynamic typography and bold visual elements that capture the excitement of live performance.
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

export default Railbird;
