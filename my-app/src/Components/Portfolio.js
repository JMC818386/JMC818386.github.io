import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav';
// import PortfolioNav from './PortfolioNav';
import Footer from './Footer';
import './App.css';
import Grid from './img/Grid.png';
import GraphicDesignBody from './GraphicDesignBody';
import WebDevelopmentBody from './WebDevelopmentBody';
import 'aos/dist/aos.css';
import AOS from 'aos';
import React, { useEffect } from 'react';

function Portfolio() {
  
  useEffect(() => {
    AOS.init({
        duration: 1250,
        once: true,
    });  
}, []);

  return (
  <div className="bg-main-dark">
    <TopNav />
    {/* <PortfolioNav /> */}
    {/* <WebDevelopmentBody /> */}
    <div data-aos="fade" data-aos-anchor-placement="top-bottom">
      <GraphicDesignBody />
    </div>
    <Footer />
  </div>
  );
}

export default Portfolio;