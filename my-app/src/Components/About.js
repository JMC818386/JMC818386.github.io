import 'bootstrap/dist/css/bootstrap.min.css';
//import BgImage from './img/paper-background.png';
import TopNav from './TopNav';
import Footer from './Footer';
import './App.css';
import Icons from './Icons';
import Grid from './img/Grid.png';
import 'aos/dist/aos.css';
import AOS from 'aos';
import React, { useEffect } from 'react';

import aboutPhoto from './img/about-me-photo.png'
import aboutPhoto2 from './about-me-photo-2.png'



function About() {

  useEffect(() => {
    AOS.init({
        duration: 2500,
        once: true,
    });  
}, []);

  return (
    <div className="d-flex justify-content-center flex-column bg-main-dark">
      <TopNav />
      <div className="my-2">
        <div className="container p-5 text-light">
          <div className="row">
            <div className="col-md-8 p-4 d-flex align-items-center">
              <div>
                <h1 className="about-header" data-aos="fade-right" data-aos-delay="300" data-aos-duration="2500">JOHN-MICHAEL</h1>
                <h1 className="about-header grey" data-aos="fade-left" data-aos-delay="300" data-aos-duration="2500">CRAWFORD</h1>
                <p className="about-subheader mb-0" data-aos="fade" data-aos-delay="300" data-aos-duration="5000">GRAPHIC DESIGNER + WEB DEVELOPER</p>
                <p className="about-subheader-2 mb-1" data-aos="fade" data-aos-delay="300" data-aos-duration="5500">LEXINGTION, KY</p>
                <p className="about-body" data-aos="fade" data-aos-delay="300" data-aos-duration="6000">I’m a creative technologist, UX/UI designer, and developer with a foundation in graphic design, systems thinking, and visual culture. My approach blends strategy, storytelling, and code to build brands, interfaces, and tools that are clear, purposeful, and performance-driven.</p>
                <p className="about-body" data-aos="fade" data-aos-delay="300" data-aos-duration="6000">With degrees in Graphic Design, Digital Media, and Art History, I bring a multidisciplinary lens to every challenge - combining user insight, research, and design thinking to craft experiences that connect and endure.</p>
                {/* <div className="d-flex justify-content-start">
                  <button className="mt-5 ms-4 p-2 bg-dark text-light border border-secondary rounded">Resume</button>
                  <button className="mt-5 ms-4 p-2 bg-dark text-light border border-secondary rounded">Extended Resume</button>
                </div> */}
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-end">
              <img src={aboutPhoto2} alt="John-Michael Crawford" className="about-image" data-aos="fade" data-aos-delay="500" data-aos-duration="10000"/>
            </div>
          </div>
          <div className="row mt-0 pt-0 d-flex justify-content-center ">
            <div className="col-12" data-aos="fade" data-aos-delay="500" data-aos-duration="2500">
                <Icons />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;




