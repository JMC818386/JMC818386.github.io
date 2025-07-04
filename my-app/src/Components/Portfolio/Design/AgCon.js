import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "../../TopNav";
import PortfolioNav from "../../PortfolioNav";
import Footer from "../../Footer";
import "../../App.css";
import PortfolioNavigationArrows from "./PortfolioNavigationArrows";

import AgConCover from './img/ag-con-cover.png';

function AgCon() {
  return (
    <div className="bg-main-dark">
      <TopNav />
      <PortfolioNav />
      <PortfolioNavigationArrows currentPath="/ag-con" />

      {/* ---------------------------------------------- HERO SECTION ---------------------------------------------- */}
      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">AG_CON 2026</b>
          </div>
          <div className="paragraph">
            Conference branding and visual identity for AG_CON 2026, featuring modern agricultural technology themes and contemporary design elements.
          </div>
        </div>
        <div className="half-section image-side">
          <img
            className="cover-img drop-1"
            alt="AG_CON 2026"
            src={AgConCover}
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
            AG_CON 2026 represents the future of agricultural innovation, bringing together industry leaders, technology pioneers, and farming professionals. The visual identity captures the intersection of traditional farming with cutting-edge technology.
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

export default AgCon;
