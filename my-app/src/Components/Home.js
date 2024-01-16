import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav';
import Footer from './Footer';
import './App.css';
import Grid from './img/Grid.png';
import 'aos/dist/aos.css';
import AOS from 'aos';
import React, { useEffect } from 'react';

function Home() {
  
  useEffect(() => {
    AOS.init({
        duration: 2500,
        once: true,
    });  
}, []);

  return (

    <div style={{backgroundImage: `url(${Grid})`, backgroundSize: 'cover'}}>
      <TopNav />
      <div className="container px-5 d-flex align-items-center justify-content-center vh-100">
        <div className="row d-flex justify-content-center">
          <div className="col-12 d-flex flex-wrap justify-content-center pb-5 mb-5">
            
            <p className="d-flex justify-content-center text-header text-light mb-0 pb-0"  data-aos="fade" data-aos-delay="100" data-aos-duration="5000"style={{ textShadow: "2px 2px 30px rgba(0,0,0,10)" }}>John-Michael Crawford</p>

            <p className="d-flex justify-content-center text-second mt-0 pt-0 pb-5 mb-5" data-aos="fade" data-aos-delay="700" data-aos-duration="5000" style={{ textShadow: "2px 2px 30px rgba(0,0,0,10)" }}>Graphic Designer & Web Developer</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;