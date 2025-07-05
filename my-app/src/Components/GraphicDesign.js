import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav';
import PortfolioNav from './PortfolioNav';
import Footer from './Footer';
import './App.css';
import GraphicDesignBody from './GraphicDesignBody';
import Grid from './img/Grid.png';
import 'aos/dist/aos.css';
import AOS from 'aos';
import React, { useEffect } from 'react';


function GraphicDesign() {
  
  useEffect(() => {
    AOS.init({
        duration: 1250,
        once: true,
    });  
}, []);

  return (
  <div style={{backgroundImage: `url(${Grid})`, backgroundSize: 'cover'}}>
    <TopNav />
    {/* <PortfolioNav /> */}
    <div data-aos="fade" data-aos-anchor-placement="top-bottom">
      <GraphicDesignBody />
    </div>
    <Footer />
  </div>
  );
}

export default GraphicDesign;