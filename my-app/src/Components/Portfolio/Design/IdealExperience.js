import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "../../TopNav";
import PortfolioNav from "../../PortfolioNav";
import Footer from "../../Footer";
import Logo from "./img/logo.jpg";
import "../../App.css";
import GraphicDesignBody from "../../GraphicDesignBody";
import PortfolioNavigationArrows from "./PortfolioNavigationArrows";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

import IdealXCover from './img/IdealExperience/ideal-x-cover.png';
import IdealXEcosystem from './img/IdealExperience/ideal-x-ecosystem-tacos.png';
import IdealXEmpowered from './img/IdealExperience/ideal-x-empowered.png';
import IdealXFramework from './img/IdealExperience/ideal-x-framework.png';
import IdealXFullSpread from './img/IdealExperience/ideal-x-full-spread.png';
import IdealXSpreads from './img/IdealExperience/ideal-x-spreads.png';

function IdealExperience() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({
      duration: 1250,
      once: true,
    });

    // Add escape key listener
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && lightboxImage) {
        closeLightbox();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'auto';
    };
  }, [lightboxImage]);

  const openLightbox = (imageSrc, imageAlt) => {
    setLightboxImage({ src: imageSrc, alt: imageAlt });
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setIsZoomed(false);
    setZoomPosition({ x: 0, y: 0 });
    // Restore body scroll when lightbox is closed
    document.body.style.overflow = 'auto';
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    if (isZoomed) {
      // Zoom out
      setIsZoomed(false);
      setZoomPosition({ x: 0, y: 0 });
    } else {
      // Zoom in
      setIsZoomed(true);
    }
  };

  const handleImageMouseMove = (e) => {
    if (isZoomed) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setZoomPosition({ x, y });
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('lightbox-backdrop')) {
      closeLightbox();
    }
  };

  // Prevent scroll restoration on lightbox open/close
  const handleLightboxInteraction = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="bg-main-dark">
      <TopNav />
      <PortfolioNav />
      <PortfolioNavigationArrows currentPath="/ideal-experience" />

      <div data-aos="fade" data-aos-anchor-placement="top-bottom">

        {/* ---------------------------------------------- HERO SECTION ---------------------------------------------- */}
        <div className="section">
          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">Ideal GenAI Experience</b>
            </div>
            <div className="paragraph">
              {`For this project, myself and three classmates conducted a 10-week comprehensive user experience research study to see if we could conceptualize what the ideal experience would be while using OpenAi’s DALL-E, Adobe’s Firefly, and Midjourney. By following the Lextant ideal model framework as our guide, we were able to take a deep dive into this new and exciting technology. Each member of the team completed this project remotely, utilizing Miro, Google,, and Discord to organize and manage project requirements. `}
            </div>

            <div className="paragraph">
              {`As a team we decided to base our research on "the ideal generative AI user experience." The focus is on how this powerful technology can boost creativity, make work easier, and offer personalized solutions while also tackling key challenges related to accuracy, transparency, and ethics. `}
            </div>
            <div className="paragraph">
              <div className="d-flex gap-3 flex-column flex-sm-row">
                <a
                  href="/docs/Process_JM_Crawford_IdealExperience.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-4 d-flex align-items-center justify-content-center"
                  role="button"
                  style={{ padding: '12px 20px' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px' }}>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#24292E" strokeWidth="1.5" fill="none" />
                    <polyline points="14,2 14,8 20,8" stroke="#24292E" strokeWidth="1.5" fill="none" />
                    <line x1="16" y1="13" x2="8" y2="13" stroke="#24292E" strokeWidth="1.5" />
                    <line x1="16" y1="17" x2="8" y2="17" stroke="#24292E" strokeWidth="1.5" />
                    <polyline points="10,9 9,9 8,9" stroke="#24292E" strokeWidth="1.5" />
                  </svg>
                  Process Book
                </a>
                <a
                  href="/docs/Ideal_Experience_Booklet.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-4 d-flex align-items-center justify-content-center"
                  role="button"
                  style={{ padding: '12px 20px' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px' }}>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#24292E" strokeWidth="1.5" fill="none" />
                    <polyline points="14,2 14,8 20,8" stroke="#24292E" strokeWidth="1.5" fill="none" />
                    <line x1="16" y1="13" x2="8" y2="13" stroke="#24292E" strokeWidth="1.5" />
                    <line x1="16" y1="17" x2="8" y2="17" stroke="#24292E" strokeWidth="1.5" />
                    <polyline points="10,9 9,9 8,9" stroke="#24292E" strokeWidth="1.5" />
                  </svg>
                  Experience Booklet
                </a>
              </div>
            </div>
          </div>
          <div className="half-section image-side">
            <img
              className="history-cover-img"
              src={IdealXCover}
              alt="Ideal Experience Cover"
              onClick={() => openLightbox(IdealXCover, "Ideal Experience Cover")}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>


        {/* ---------------------------------------------- SECTION 4 ---------------------------------------------- */}
        <div className="section-2 mt-5">
          <div className="content-2">
            <div className="section-text-2">
              <div className="top">
                <b className="secondary-headline">Secondary Research</b>
              </div>
              <div className="paragraph-2">
                {`Through our secondary research we found that many designers use generative AI tools like DALL-E and Firefly as a tool to speed up their ideation process, allowing them to iterate through many more concepts and inspirations  in a much shorter amount of time than doing without AI assistance. We also found that while a majority of people are exited about AI - there is still a sizable number of adults (38%) who have concerns about the social impact. `}
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------- SECTION 1 ---------------------------------------------- */}
        <div className="section">
          <div className="container-fluid px-5 mx-5">
            <img
              className="cover-img"
              src={IdealXEmpowered}
              alt="Ideal Experience Empowered"
              onClick={() => openLightbox(IdealXEmpowered, "Ideal Experience Empowered")}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* ---------------------------------------------- SECTION 4 ---------------------------------------------- */}
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <b className="secondary-headline">Methods</b>
          </div>
          <div className="flex-column text-center d-flex justify-content-center">

            <div className="col-12 py-4">
              <b className="secondary-sub-headline">Secondary Research</b>
            </div>

            <div className="col-12 py-4">
              <b className="secondary-sub-headline">Observational Research</b>
            </div>

            <div className="col-12 py-4">
              <b className="secondary-sub-headline">Non-Participant Research</b>
            </div>

            <div className="col-12 py-4">
              <b className="secondary-sub-headline">Participant Research</b>
            </div>

            <div className="col-12 py-4">
              <b className="secondary-sub-headline">Affinity Mapping</b>
            </div>

            <div className="col-12 py-4">
              <b className="secondary-sub-headline">Sensory Cue Analysis</b>
            </div>

          </div>


        </div>

        {/* ---------------------------------------------- SECTION 2 ---------------------------------------------- */}
        <div className="section">
          <div className="half-section image-side">
            <img
              className="cover-img"
              src={IdealXEcosystem}
              alt="Ideal Experience Ecosystem"
              onClick={() => openLightbox(IdealXEcosystem, "Ideal Experience Ecosystem")}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">Analysis</b>
            </div>
            <div className="paragraph">
              {`By creating a stakeholder map and ecosystem map, we were able to gain a better understanding of the individuals and groups who could influence the user’s experience as well the system of influence from products, services and environments in proximity to the user experience. `}
            </div>

            <div className="top">
              <b className="secondary-headline">Observations</b>
            </div>
            <div className="paragraph">
              {`We conducted observational research of users generating images using the Midjourney bot on Discord, access threads where new users can test and practice using Midjourney. This covert, non-participatory method allowed us to see how different users generate images in a normal user setting where everyone’s work is shared openly within the running thread. `}
            </div>
          </div>
        </div>

        {/* ---------------------------------------------- SECTION 4 ---------------------------------------------- */}
        <div className="section-2">
          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">Engagement</b>
            </div>
            <div className="paragraph">
              {`To supplement our covert non-participatory observational research, we conducted an exercise within the team, with each team member participating as both a test subject and as an observer to follow a provided design brief to generate a logo for a taco truck along with a vehicle design mockup and a website mockup using DALL-E and Firefly for each. `}
            </div>
          </div>

          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">Final Phase</b>
            </div>
            <div className="paragraph">
              {`Once we competed an affinity diagram, we began to structure our key insights into emotions, features, and benefits,We used  green, pink, blue, and yellow post-it notes to organize out data points into similiar and overlapping groups. `}
            </div>
          </div>
        </div>
        {/* ---------------------------------------------- SECTION 4 ---------------------------------------------- */}
        <div className="section">
          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">Our Goal</b>
            </div>
            <div className="paragraph">
              {`Our goal at this point was to build  on all of the research we have gathered to this point, and consolidate our key findings into a framework model structure that best aligns with our unique findings. We followed the Lextant Ideal Experience Framework as a road map to construct our first model, then began conceptualizing more creative and innovative ways to present our framework. `}
            </div>
          </div>
          <div className="half-section image-side">
            <img
              className="history-cover-img"
              src={IdealXFramework}
              alt="Ideal Experience Framework"
              onClick={() => openLightbox(IdealXFramework, "Ideal Experience Framework")}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* ---------------------------------------------- SECTION 4 ---------------------------------------------- */}
        <div className="section-2">
          <div className="content-2">
            <div className="section-text-2">
              <div className="top">
                <b className="secondary-headline">What we learned</b>
              </div>
              <div className="paragraph-2">
                {`Generative AI has strong potential in creative work but needs improvements in user-friendliness, accessibility, and output consistency,. Designers want consistent and reliable image quality, simpler and more intuitive interfaced, and more thoughtful and useful prompt-assistance features. `}
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------- SECTION 3 ---------------------------------------------- */}
        <div className="section mb-5 pb-5">
          <img
            className="cover-img drop-1"
            src={IdealXSpreads}
            alt="Ideal Experience Spreads"
            onClick={() => openLightbox(IdealXSpreads, "Ideal Experience Spreads")}
            style={{ cursor: 'pointer' }}
          />
        </div>

        {/* ----------------------------------------------CONTENT END ---------------------------------------------- */}
        <GraphicDesignBody />
        <Footer />
      </div>

      {/* Lightbox Modal - Rendered as Portal */}
      {lightboxImage && createPortal(
        <div className="lightbox-backdrop" onClick={handleBackdropClick}>
          <div className="lightbox-container" onClick={handleLightboxInteraction}>
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="lightbox-image"
              onClick={handleImageClick}
              onMouseMove={handleImageMouseMove}
              style={{
                cursor: isZoomed ? 'zoom-out' : 'zoom-in',
                transform: isZoomed ? 'scale(2)' : 'scale(1)',
                transformOrigin: isZoomed ? `${zoomPosition.x}% ${zoomPosition.y}%` : 'center',
                transition: isZoomed ? 'none' : 'transform 0.3s ease'
              }}
            />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

export default IdealExperience;
