import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "../../TopNav";
import PortfolioNav from "../../PortfolioNav";
import Footer from "../../Footer";
import "../../App.css";
import PortfolioNavigationArrows from "./PortfolioNavigationArrows";

import TotalPtConnectCover from './img/total-pt-connect.png';

function TotalPtConnect() {
  return (
    <div className="bg-main-dark">
      <TopNav />
      <PortfolioNav />
      <PortfolioNavigationArrows currentPath="/total-pt-connect" />

      {/* ---------------------------------------------- HERO SECTION ---------------------------------------------- */}
      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Total PT Connect</b>
          </div>
          <div className="paragraph">
            Professional healthcare platform branding and user interface design, connecting physical therapy providers with modern digital solutions.
          </div>
        </div>
        <div className="half-section image-side">
          <img
            className="cover-img drop-1"
            alt="Total PT Connect"
            src={TotalPtConnectCover}
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
            Total PT Connect bridges the gap between traditional physical therapy practice and modern digital healthcare solutions. The platform design emphasizes accessibility, trust, and professional excellence while maintaining a user-friendly interface for both providers and patients.
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

export default TotalPtConnect;
