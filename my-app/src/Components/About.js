import 'bootstrap/dist/css/bootstrap.min.css';
//import BgImage from './img/paper-background.png';

import './App.css';
import Icons from './Icons';
import Grid from './img/Grid.png';
import 'aos/dist/aos.css';
import AOS from 'aos';
import React, { useEffect } from 'react';
import TopNav from './TopNav';
import aboutPhoto from './img/about-me-photo.png';
import aboutPhoto2 from './about-me-photo-2.png';
import EyeOpenIcon from './img/icons/eye-open.png';
import UserAddIcon from './img/icons/user-add.png';
import DocumentIcon from './img/icons/acrobat.png';



function About() {

  useEffect(() => {
    AOS.init({
      duration: 1250,
      once: true,
    });
  }, []);

  return (
    <div className="d-flex justify-content-center flex-column bg-main-dark">
      <TopNav />
      <div className="my-2">
        <div className="container px-5">
          <div className="row">
            <div className="col-md-8 p-4 d-flex align-items-center">
              <div>
                <h1 className="about-header" data-aos="fade" data-aos-delay="300" data-aos-duration="2500">JM</h1>
                <h1 className="about-header grey" data-aos="fade" data-aos-delay="300" data-aos-duration="2500">CRAWFORD</h1>
                <p className="about-mobile-subheader pt-1" data-aos="fade" data-aos-delay="300" data-aos-duration="5000">ARTIST | DESIGNER | ENGINEER</p>
                
                {/* <p className="about-subheader-2 mb-1" data-aos="fade" data-aos-delay="300" data-aos-duration="5500">LEXINGTION, KY</p> */}
                <p className="about-body pt-2" data-aos="fade" data-aos-delay="300" data-aos-duration="6000">As a product designer, my mission is to help individuals and organizations craft engaging, meaningful, and enduring connections with their audiences through practical and visually stunning design and creative solutions.</p>
                {/* <p className="about-body" data-aos="fade" data-aos-delay="300" data-aos-duration="6000">I’m a creative technologist with a foundation in graphic design, systems thinking, and visual culture. My approach blends research, strategy, and interactive experiences to build brands, interfaces, and experiences that are clear, purposeful, and performance-driven.</p> */}

                {/* <p className="about-body" data-aos="fade" data-aos-delay="300" data-aos-duration="6000">With degrees in Graphic Design, Digital Media, and Art History, I bring a multidisciplinary lens to every challenge - combining user insight, research, and design thinking to craft experiences that connect and endure.</p> */}

                <div className="d-flex gap-3 flex-column flex-sm-row mt-2" data-aos="fade" data-aos-delay="300" data-aos-duration="6000">
                  <button
                    className="button-4 d-flex align-items-center justify-content-center"
                    style={{ padding: '12px 20px' }}
                    onClick={() => {
                      const element = document.getElementById('portfolio-section');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  >
                    <img src={EyeOpenIcon} alt="See My Work" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                    See My Work
                  </button>
                  <button
                    className="button-4 d-flex align-items-center justify-content-center"
                    style={{ padding: '12px 20px' }}
                    onClick={() => window.location.href = '/contact'}
                  >
                    <img src={UserAddIcon} alt="Let's Connect" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                    Let's Connect
                  </button>
                  <button
                    className="button-4 d-flex align-items-center justify-content-center"
                    style={{ padding: '12px 20px' }}
                    onClick={() => window.open('/docs/Resume_JM_Crawford.pdf', '_blank')}
                  >
                    <img src={DocumentIcon} alt="Resume" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                    Resume
                  </button>
                </div>
                {/* <div className="d-flex justify-content-start">
                  <button className="mt-5 ms-4 p-2 bg-dark text-light border border-secondary rounded">Resume</button>
                  <button className="mt-5 ms-4 p-2 bg-dark text-light border border-secondary rounded">Extended Resume</button>
                </div> */}
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-end">
              <img src={aboutPhoto2} alt="John-Michael Crawford" className="about-image" data-aos="fade" data-aos-delay="500" data-aos-duration="10000" />
              {/* Resume button removed as requested */}
            </div>
          </div>

        <div className="section-2 mb-3">
          <div className="content-2 text-center">
            <div className="top">
              <b className="secondary-headline">About</b>
            </div>
            <div className="paragraph-2">
              {`I’m a multidisciplinary designer and software developer based in Lexington, KY. My experience spans graphic design, branding, printmaking, research, UX/UI design, interaction design, and software development. I thrive on helping clients capture the authentic essence of their brand, product, or service - turning ideas into visually compelling, functional designs.
              `}
            </div>
          </div>
        </div>

        <div className="section-2 mb-3">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="content-2 text-center">
                <div className="top">
                  <b className="secondary-headline">Values</b>
                </div>
                <div className="paragraph-2">
                  {`My values as a designer and developer are anchored in thoughtful user-centric design, utilizing in-depth research, iterative design, and effective communication to produce work that connects with audiences to bring meaningful and impactful experiences to products and, brands.
                  `}
                </div>
              </div>
            </div>
            
            
            <div className="col-12 col-md-6">
              <div className="content-2 text-center">
                <div className="top">
                  <b className="secondary-headline">Vision</b>
                </div>
                <div className="paragraph-2">
                  {`I am committed to continuously learning, growing, and adapting to industry standards as well as the unique demands of each client and project I undertake. I am a hands-on creative leader with the ability to contribute to projects from discovery and design to development and production.
                  `}
                </div>
              </div>
            </div>

          </div>
        </div>

           <div className="section-auto my-5 mb-5">
            <div className="content-2 text-center">
              <div className="top">
                <b className="secondary-headline">Niche</b>
              </div>
              <div className="paragraph-2">
                {`My current niche is in my ability to build digital products from concept to production, working as both a designer and developer. I am a creative professional who can work in hybrid environments that require both design and engineering experience.
                `}
              </div>
          </div>
        </div>

       
          <div className="content-2 text-center">
              <b className="secondary-headline">Tools</b>
          </div>
      

          <div className="row mt-0 pt-0 d-flex justify-content-center ">
            <div className="col-12" data-aos="fade" data-aos-delay="500" data-aos-duration="2500">
              <Icons />
            </div>
          </div>       

          {/* <div className="row mt-5 pt-3">
            <div className="col-12">
              <h2 className="text-second text-center mb-4">Skills</h2>
              <div className="skills-container d-flex flex-wrap justify-content-center gap-2 mb-4">
                
                <span className="skill-pill">User research</span>
                <span className="skill-pill">Ethnographic analysis</span>
                <span className="skill-pill">Affinity mapping</span>
                <span className="skill-pill">Empathy mapping</span>
                <span className="skill-pill">Persona development</span>
                <span className="skill-pill">Stakeholder mapping</span>
                <span className="skill-pill">Ecosystem mapping</span>
                <span className="skill-pill">Interaction design</span>
                <span className="skill-pill">System design</span>
                <span className="skill-pill">Wireframing</span>
                <span className="skill-pill">UI Prototyping</span>
                <span className="skill-pill">UI design + development</span>
                <span className="skill-pill">User Interface (UI)</span>
                <span className="skill-pill">User Experience (UX)</span>
                <span className="skill-pill">User-centric Design</span>
                <span className="skill-pill">Accessibility</span>

               
                <span className="skill-pill">Front-end development</span>
                <span className="skill-pill">Back-end development</span>
                <span className="skill-pill">Full-stack development</span>
                <span className="skill-pill">API Development</span>
                <span className="skill-pill">Responsive Design</span>
                <span className="skill-pill">Web Design + Developement</span>
                <span className="skill-pill">Database Architecture</span>

                
                <span className="skill-pill">Layout + Grid Design</span>
                <span className="skill-pill">Typographic Design</span>
                <span className="skill-pill">Editorial design</span>
                <span className="skill-pill">Visual Storytelling</span>
                <span className="skill-pill">Digital + Print production</span>
                <span className="skill-pill">Creative direction</span>
                <span className="skill-pill">Visual strategy</span>

              
                <span className="skill-pill">Illustration</span>
                <span className="skill-pill">Photography</span>
                <span className="skill-pill">Photo editing</span>
                <span className="skill-pill">Screen printing</span>

                
                <span className="skill-pill">Design + Business strategy</span>
                <span className="skill-pill">Concept development</span>
                <span className="skill-pill">Client collaboration</span>
                <span className="skill-pill">Communication</span>
                <span className="skill-pill">Public speaking</span>
                <span className="skill-pill">Remote team collaboration</span>
                <span className="skill-pill">Team development</span>
                <span className="skill-pill">Leadership</span>
                <span className="skill-pill">Project management</span>
                <span className="skill-pill">Planning</span>
                <span className="skill-pill">Time management</span>
                <span className="skill-pill">Problem solving</span>
                <span className="skill-pill">Critical thinking</span>
                <span className="skill-pill">Creative writing</span>
                <span className="skill-pill">Copywriting</span>
                <span className="skill-pill">Interdisciplinary research</span>
                <span className="skill-pill">Historical contextualization</span>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
}

export default About;




