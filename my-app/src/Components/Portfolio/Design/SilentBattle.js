import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "../../TopNav";
import PortfolioNav from "../../PortfolioNav";
import Footer from "../../Footer";
import "../../App.css";
import PortfolioNavigationArrows from "./PortfolioNavigationArrows";
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

import SilentBattleCover from './img/silent-battle-cover.png';

function SilentBattle() {
  
  useEffect(() => {
    AOS.init({
        duration: 1250,
        once: true,
    });  
}, []);

  return (
    <div className="bg-main-dark">
      <TopNav />
      <PortfolioNav />
      <PortfolioNavigationArrows currentPath="/silent-battle" />

      <div data-aos="fade" data-aos-anchor-placement="top-bottom">

      {/* ---------------------------------------------- HERO SECTION ---------------------------------------------- */}
      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Silent Battle</b>
          </div>
          <div className="paragraph">
            Editorial design and publication layout exploring the untold stories of internal struggles and personal battles through compelling visual narrative.
          </div>
        </div>
        <div className="half-section image-side">
          <img
            className="cover-img drop-1"
            alt="Silent Battle"
            src={SilentBattleCover}
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
            Silent Battle is an editorial project that gives voice to internal struggles through thoughtful design and typography. The publication uses abstract visual elements and bold typography to convey the complexity of mental and emotional challenges.
          </div>
        </div>
        <div className="half-section image-side">
          {/* Additional images can be added here */}
        </div>
      </div>

      <Footer />
      </div>
    </div>
  );
}

export default SilentBattle;
