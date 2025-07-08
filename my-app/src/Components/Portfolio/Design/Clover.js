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

import CloverHero from './img/Clover/clover-hero.png';
import CloverEmpathyMap1 from './img/Clover/clover-empathy-map-1.png';
import CloverEmpathyMap2 from './img/Clover/clover-empathy-map-2.png';
import CloverFlow from './img/Clover/clover-flow.png';
import CloverMock1 from './img/Clover/clover-mockup-1.png';
import CloverMock2 from './img/Clover/clover-mockup-2.png';
import CloverPersona from './img/Clover/clover-persona.png';
import CloverPlayerStats from './img/Clover/clover-player-stats.png';
import CloverLogo from './img/Clover/clover-logo.png';

function Clover() {
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
      <PortfolioNavigationArrows currentPath="/clover" />

      <div data-aos="fade" data-aos-anchor-placement="top-bottom">

        {/* ---------------------------------------------- HERO SECTION ---------------------------------------------- */}
        <div className="section">
          <div className="half-section text-side">
            <div className="top">
              <img className="clover-logo" src={CloverLogo} alt="History Zine Cover" />
            </div>
            <div className="paragraph">
              {`A native mobile team tracking and player development application for golfers, coaches and trainers. `}
            </div>
            <div className="paragraph">
              {`Clover is native mobile application designed for golf coaches and instructors, providing a  simple, practical and affordable tool to centralize all  team and player performance, scheduling and communications into a single application. Players and coaches can upload  individual and group scorecards, view individual and team statistics, keep track of practice and competition schedules, and communicate directly with one another in private and groups chats all from within this single application. `}
            </div>
          </div>
          <div className="half-section image-side">
            <img
              className="history-cover-img"
              src={CloverHero}
              alt="Clover Hero Image"
              onClick={() => openLightbox(CloverHero, "Clover Hero Image")}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* ---------------------------------------------- SECTION 4 ---------------------------------------------- */}
        <div className="section-2">
          <div className="content-2">
            <div className="section-text-2">
              <div className="top">
                <b className="secondary-headline">Research</b>
              </div>
              <div className="paragraph-2">
                {`I began my research by gathering feedback from a local High School golf coach and varsity player through a survey questionnaire. I then constructed user empathy maps and personas to consolidate and identity the core user motivations, goals and pain points of their current experiences. `}
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------- EMPATHY MAPS SECTION ---------------------------------------------- */}
        <div className="top mt-5">
          <b className="secondary-headline">User Empathy Maps</b>
        </div>
        <div className="section-2">
          <div className="half-section image-side">
            <img
              className="empathy-map-img"
              src={CloverEmpathyMap1}
              alt="Clover Empathy Map 1"
              onClick={() => openLightbox(CloverEmpathyMap1, "Clover Empathy Map 1")}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="half-section image-side">
            <img
              className="empathy-map-img"
              src={CloverEmpathyMap2}
              alt="Clover Empathy Map 2"
              onClick={() => openLightbox(CloverEmpathyMap2, "Clover Empathy Map 2")}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* ---------------------------------------------- PERSONA SECTION ---------------------------------------------- */}
        <div className="top mt-5">
          <b className="secondary-headline">User Persona</b>
        </div>
        <div className="section mb-1">
          <img
            className="cover-img"
            src={CloverPersona}
            alt="Clover Persona"
            onClick={() => openLightbox(CloverPersona, "Clover Persona")}
            style={{ cursor: 'pointer' }}
          />
        </div>


        {/* ---------------------------------------------- SECTION 4 ---------------------------------------------- */}
        <div className="section-2">
          <div className="content-2">
            <div className="section-text-2">
              <div className="top">
                <b className="secondary-headline">Ideal User</b>
              </div>
              <div className="paragraph-2">
                {`By creating a user persona of an ideal user I was able to identify the motivations, goals and pain points that needed to be addressed in the concept & design. My key findings indicated that amateur golf teams face a small budget, limited time and resources, and inadequate facilities at their home course. Using these findings, I could now begin formulating solutions to each of these obstacles in the concept and initial UI designs. `}
              </div>
            </div>
          </div>
        </div>


        {/* ---------------------------------------------- SCOPE & INFLUENCE SECTION ---------------------------------------------- */}
        <div className="section-2">
          <ul className="half-section text-side">
            <li className="top">
              <b className="secondary-headline">Goals</b>
            </li>
            <li className="paragraph-2">
              {`Improve individual player and team scores `}
            </li>
            <li className="paragraph-2">
              {`Collect player scores and practice data in a more efficient and automatic way`}
            </li>
            <li className="paragraph-2">
              {`Maximize what is currently available within budget contraints to help coaches track, analyze and communicate with players more effectively `}
            </li>
          </ul>

          <ul className="half-section text-side">
            <li className="top">
              <b className="secondary-headline">Frustrations</b>
            </li>
            <li className="paragraph-2">
              {`Limited time (Coaches & Players) `}
            </li>
            <li className="paragraph-2">
              {`Small budget`}
            </li>
            <li className="paragraph-2">
              {`Inadequate facilities/Training resources `}
            </li>
            <li className="paragraph-2">
              {`Coaches manually enter and analyze player and team scores to Excel spreadsheet `}
            </li>
          </ul>
        </div>

        {/* ---------------------------------------------- PERSONA SECTION ---------------------------------------------- */}
        <div className="top mt-5">
          <b className="secondary-headline">User Flow - Core Navigation</b>
        </div>
        <div className="section mb-1">
          <img
            className="cover-img"
            src={CloverFlow}
            alt="Clover Flow"
            onClick={() => openLightbox(CloverFlow, "Clover Flow")}
            style={{ cursor: 'pointer' }}
          />
        </div>

        {/* ---------------------------------------------- SECTION 1 ---------------------------------------------- */}
        <div className="section py-5 mb-5">
          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">Feature 1</b>
            </div>
            <div className="paragraph">
              {`The first zine, Stoked on Stoicism, contrasts the philosophy’s intrinsic ideals with a mix of non-linear, grunge-style typography and a structured, modern layout. This interplay creates visual tension, reinforcing the balance between order and abstraction. `}
            </div>
            <div className="top">
              <b className="secondary-headline">Feature 2</b>
            </div>
            <div className="paragraph">
              {`The first zine, Stoked on Stoicism, contrasts the philosophy’s intrinsic ideals with a mix of non-linear, grunge-style typography and a structured, modern layout. This interplay creates visual tension, reinforcing the balance between order and abstraction. `}
            </div>
          </div>
          <div className="half-section image-side py-5">
            <img
              className="clover-mock-img"
              src={CloverMock1}
              alt="Clover Mockup 1"
              onClick={() => openLightbox(CloverMock1, "Clover Mockup 1")}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* ---------------------------------------------- SECTION 1 ---------------------------------------------- */}
        <div className="section">
          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">Feature 3</b>
            </div>
            <div className="paragraph">
              {`The first zine, Stoked on Stoicism, contrasts the philosophy’s intrinsic ideals with a mix of non-linear, grunge-style typography and a structured, modern layout. This interplay creates visual tension, reinforcing the balance between order and abstraction. `}
            </div>
            <div className="top">
              <b className="secondary-headline">Feature 4</b>
            </div>
            <div className="paragraph">
              {`The first zine, Stoked on Stoicism, contrasts the philosophy’s intrinsic ideals with a mix of non-linear, grunge-style typography and a structured, modern layout. This interplay creates visual tension, reinforcing the balance between order and abstraction. `}
            </div>
          </div>
          <div className="half-section image-side">
            <img
              className="clover-mock-img"
              src={CloverMock2}
              alt="Clover Mockup 2"
              onClick={() => openLightbox(CloverMock2, "Clover Mockup 2")}
              style={{ cursor: 'pointer' }}
            />
          </div>
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

export default Clover;
