import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from '../../TopNav';
import PortfolioNav from '../../PortfolioNav';
import Footer from '../../Footer';
import Logo from './img/logo.jpg';
import '../../App.css';
import GraphicDesignBody from '../../GraphicDesignBody';
import PortfolioNavigationArrows from "./PortfolioNavigationArrows";
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

import SKGPoster from './img/SKG/SKG_Poster.png';

function SeaKayakGA() {
  
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
      <PortfolioNavigationArrows currentPath="/skg" />
      
      <div data-aos="fade" data-aos-anchor-placement="top-bottom">
        
        {/* ---------------------------------------------- HERO SECTION ---------------------------------------------- */}
        <div className="section">
          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">Sea Kayak Georgia</b>
            </div>
            <div className="paragraph">
              {`A promotional poster design for Sea Kayak Georgia, showcasing the natural beauty and adventure opportunities of Georgia's coastal waters and waterways.`}
            </div>
            <div className="paragraph">
              {`This design captures the essence of sea kayaking adventures through compelling visuals and typography, promoting outdoor recreation and the exploration of Georgia's stunning maritime landscapes.`}
            </div>
          </div>
          <div className="half-section image-side">
            <img className="history-cover-img" src={SKGPoster} alt="Sea Kayak Georgia Poster" />
          </div>
        </div>

        {/* ----------------------------------------------CONTENT END ---------------------------------------------- */}
        <GraphicDesignBody />
        <Footer />
      </div>
    </div>
  );
}

export default SeaKayakGA;