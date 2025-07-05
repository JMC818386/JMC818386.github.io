import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "../../TopNav";
import PortfolioNav from "../../PortfolioNav";
import Footer from "../../Footer";
import "../../App.css";
import PortfolioNavigationArrows from "./PortfolioNavigationArrows";
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

import RowansCreekCover from './img/rowans-creek-cover.png';

function RowansCreek() {
  
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
      <PortfolioNavigationArrows currentPath="/rowans-creek" />

      <div data-aos="fade" data-aos-anchor-placement="top-bottom">

      {/* ---------------------------------------------- HERO SECTION ---------------------------------------------- */}
      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Rowan's Creek</b>
          </div>
          <div className="paragraph">
            Premium Kentucky bourbon whiskey brand identity and packaging design, celebrating traditional craftsmanship with contemporary sophistication.
          </div>
        </div>
        <div className="half-section image-side">
          <img
            className="cover-img drop-1"
            alt="Rowan's Creek"
            src={RowansCreekCover}
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
            Rowan's Creek represents the finest in Kentucky bourbon tradition. The brand identity combines ornate vintage typography with refined modern elements, creating a sophisticated presence that honors the heritage of fine whiskey craftsmanship.
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

export default RowansCreek;
