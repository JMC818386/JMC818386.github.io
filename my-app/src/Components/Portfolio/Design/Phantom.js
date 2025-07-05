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

import PhantomFlyerFront from './img/Phantom/Flyer Front.jpg';
import PhantomFlyerBack from './img/Phantom/Flyer Back.jpg';

function Phantom() {
  
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
      <PortfolioNavigationArrows currentPath="/phantom" />
      
      <div data-aos="fade" data-aos-anchor-placement="top-bottom">

       {/* ---------------------------------------------- DESIGN DETAILS SECTION ---------------------------------------------- */}
        <div className="section-2 mt-5">
          <div className="content-2">
            <div className="section-text-2">
              <div className="top">
                <b className="secondary-headline">Phantom Fireworks</b>
              </div>
              <div className="paragraph-2">
                {`The Phantom flyer design emphasizes bold visual impact and clear information hierarchy. The front design captures attention with striking visuals, while the back provides detailed information in an organized, easy-to-read format. Both designs maintain brand consistency and visual cohesion.`}
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------- PHANTOM FLYERS SECTION ---------------------------------------------- */}
        <div className="top mt-5">
          <b className="secondary-headline">Flyer Design - Front & Back</b>
        </div>
        <div className="section-2">
          <div className="half-section image-side">
            <img className="phantom-flyer-img" src={PhantomFlyerFront} alt="Phantom Flyer Front" />
          </div>
          <div className="half-section image-side">
            <img className="phantom-flyer-img" src={PhantomFlyerBack} alt="Phantom Flyer Back" />
          </div>
        </div>

        {/* ---------------------------------------------- DESIGN DETAILS SECTION ---------------------------------------------- */}
        <div className="section-2 mt-5">
          <div className="content-2">
            <div className="section-text-2">
              <div className="top">
                <b className="secondary-headline">Design Approach</b>
              </div>
              <div className="paragraph-2">
                {`The Phantom flyer design emphasizes bold visual impact and clear information hierarchy. The front design captures attention with striking visuals, while the back provides detailed information in an organized, easy-to-read format. Both designs maintain brand consistency and visual cohesion.`}
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------CONTENT END ---------------------------------------------- */}
        <GraphicDesignBody />
        <Footer />
      </div>
    </div>
  );
}

export default Phantom;