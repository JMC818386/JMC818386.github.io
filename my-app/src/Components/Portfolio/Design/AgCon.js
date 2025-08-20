import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "../../TopNav";
import PortfolioNav from "../../PortfolioNav";
import Footer from "../../Footer";
import "../../App.css";
import GraphicDesignBody from "../../GraphicDesignBody";
import PortfolioNavigationArrows from "./PortfolioNavigationArrows";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

import AgConCover from './img/ag-con-cover.png';
import AgConHero from './img/AgCon/ag-con-hero-img.png';
import AgConColors from './img/AgCon/ag-con-colors-1.png';
import AgConMoodboard from './img/AgCon/ag-con-moodboard.png';
import AgConInfluence from './img/AgCon/ag-con-influence.png';
import AgConTypeHeaders from './img/AgCon/ag-con-type-headers.png';
import AgConTypeBody from './img/AgCon/ag-con-type-body.png';
import AgConTypeExpressive from './img/AgCon/ag-con-type-expressive.png';
import AgConGridStudy from './img/AgCon/ag-con-grid-study.png';
import AgConCropLines from './img/AgCon/ag-con-crop-lines.png';
import AgConDigitalComps from './img/AgCon/ag-con-digital-comps.png';
import AgConConnectFinal from './img/AgCon/ag-con-connect-final.png';
import AgConCultivateFinal from './img/AgCon/ag-con-cultivate-final.png';
import AgConGrowFinal from './img/AgCon/ag-con-grow-final.png';
import AgConMockupsMain from './img/AgCon/ag-con-mockups-main.png';
import AgConFinalMockups from './img/AgCon/ag-con-final-mockups.png';

import AgConBusStop from './img/AgCon/agcon-busstop.png';
import AgConBW from './img/AgCon/agcon-bw.png';
import AgConColor from './img/AgCon/agcon-color.png';
import AgConColor2 from './img/AgCon/agcon-color-2.png';
import AgConLobby from './img/AgCon/agcon-lobby.png';
import AgConMockupDoubles from './img/AgCon/agcon-mockup-double.png';

function AgCon() {
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
      <PortfolioNavigationArrows currentPath="/ag-con" />

      <div data-aos="fade" data-aos-anchor-placement="top-bottom">

        {/* ---------------------------------------------- HERO SECTION ---------------------------------------------- */}
        <div className="section">
          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">AG_CON 2026</b>
            </div>
            <div className="paragraph">
               This poster series was created as a speculative visual identity for AG_CON, a smart farming summit set in Lexington, Kentucky. The goal was to fuse agriculture, engineering, and emerging tech into a bold, energetic system that speaks directly to young farmers, rural technologists, and university engineers. Each poster explores a different visual rhythm, communicating the core tension between tradition and innovation, land and logic, labor and machine.
            </div>
          </div>
          <div className="half-section image-side">
            <img
              className="history-cover-img"
              alt="AG_CON 2026 Hero"
              src={AgConCultivateFinal}
              onClick={() => openLightbox(AgConCultivateFinal, "AG_CON 2026 Hero")}
              style={{ cursor: 'pointer', width: '65%', height: 'auto' }}
            />
          </div>
        </div>

        {/* ---------------------------------------------- RESEARCH & INSPIRATION ---------------------------------------------- */}
        <div className="section-2">
          <div className="content-2 mx-3">
            <div className="top">
              <b className="secondary-headline">Research & Inspiration</b>
            </div>
            <div className="paragraph-2">
              The design process began with research into agricultural innovation and conference branding. The moodboard captures the intersection of traditional farming with cutting-edge technology. Visually, the series blends retro-tech futurism with farm grit. Posters use tight modular grids referencing aerial crop plots and circuit diagrams. The texture and structure borrow from mechanical blueprints, vintage computing systems, and welded machinery—combining industrial sharpness with rural resilience. The result is a kinetic, engineered system that feels both hand-built and high-tech, rooted in the dirt and wired for the future.
            </div>
          </div>
        </div>

        {/* <div className="top mt-5 mb-2">
          <b className="secondary-headline">Mood Board</b>
        </div> */}
        <div className="section-2 mb-1">
          <img
            className="cover-img"
            alt="AG_CON Moodboard"
            src={AgConMoodboard}
            onClick={() => openLightbox(AgConMoodboard, "AG_CON Moodboard")}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <div className="section-auto mb-1">
          <img
            className="cover-img"
            alt="AG_CON Color Palette"
            src={AgConColors}
            onClick={() => openLightbox(AgConColors, "AG_CON Color Palette")}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <div className="section-auto mb-1">
          <img
            className="cover-img"
            alt="AG_CON Crop Lines"
            src={AgConCropLines}
            onClick={() => openLightbox(AgConCropLines, "AG_CON Crop Lines")}
            style={{ cursor: 'pointer' }}
          />
        </div>
       
        <div className="my-3 px-5">
          <img
            className="cover-img"
            alt="AG_CON Influence"
            src={AgConInfluence}
            onClick={() => openLightbox(AgConInfluence, "AG_CON Influence")}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <div className="section-auto">
          <div className="content-2 mx-3">
            <div className="top">
              <b className="secondary-headline">Typography and Grid Exploration</b>
            </div>
            <div className="paragraph-2">
              The design process began with research into agricultural innovation and conference branding. The moodboard captures the intersection of traditional farming with cutting-edge technology. Visually, the series blends retro-tech futurism with farm grit. Posters use tight modular grids referencing aerial crop plots and circuit diagrams. The texture and structure borrow from mechanical blueprints, vintage computing systems, and welded machinery—combining industrial sharpness with rural resilience. The result is a kinetic, engineered system that feels both hand-built and high-tech, rooted in the dirt and wired for the future.
            </div>
          </div>
        </div>


        {/* ---------------------------------------------- TYPOGRAPHY ---------------------------------------------- */}
        {/* <div className="top mt-5 pt-5 mb-2">
          <b className="secondary-headline">Type Study</b>
        </div> */}

        <div className="section-auto">
          <div className="half-section image-side">
            <img
              className="cover-img"
              alt="AG_CON Type Headers"
              src={AgConTypeHeaders}
              onClick={() => openLightbox(AgConTypeHeaders, "AG_CON Type Headers")}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="half-section image-side">
            <img
              className="cover-img"
              alt="AG_CON Type Body"
              src={AgConTypeBody}
              onClick={() => openLightbox(AgConTypeBody, "AG_CON Type Body")}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* <div className="top mt-5 pt-5mb-2">
          <b className="secondary-headline">Expressive Type Ideation</b>
        </div> */}

        <div className="px-5 mb-1">
          <img
            className="cover-img"
            alt="AG_CON Expressive Typography"
            src={AgConTypeExpressive}
            onClick={() => openLightbox(AgConTypeExpressive, "AG_CON Expressive Typography")}
            style={{ cursor: 'pointer' }}
          />
        </div>

        {/* ---------------------------------------------- GRID & LAYOUT ---------------------------------------------- */}
        {/* <div className="top mt-5 pt-5 mb-2">
          <b className="secondary-headline">Grid Experimentation</b>
        </div> */}
        <div className="section-auto mb-1">
          <img
            className="cover-img"
            alt="AG_CON Grid Study"
            src={AgConGridStudy}
            onClick={() => openLightbox(AgConGridStudy, "AG_CON Grid Study")}
            style={{ cursor: 'pointer' }}
          />
        </div>

        {/* ---------------------------------------------- DIGITAL COMPOSITIONS ---------------------------------------------- */}
         <div className="section-auto">
          <div className="content-2 mx-3">
            <div className="top">
              <b className="secondary-headline">Digital Comps</b>
            </div>
            <div className="paragraph-2">
               The first digital compositions served as a playground for structural layout and expressive typography. Each poster was built around one of the core words - Connect, Cultivate, and Grow - and pushed to extremes using dynamic grids, layering, repetition, and distortion. This phase was intentionally chaotic, leaning into overstatement to explore visual rhythm, scale, and typographic aggression. While these early drafts captured the raw energy of AG_CON’s themes, they also revealed the need for stronger clarity and conceptual alignment, especially for “Connect” and “Cultivate.”
            </div>
          </div>
        </div>

        <div className="mb-5 mx-5">
          <img
            className="cover-img"
            alt="AG_CON Digital Compositions"
            src={AgConBW}
            onClick={() => openLightbox(AgConBW, "AG_CON Digital Compositions")}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <div className="mb-5 mx-5">
          <img
            className="cover-img"
            alt="AG_CON Digital Compositions"
            src={AgConColor}
            onClick={() => openLightbox(AgConColor, "AG_CON Digital Compositions")}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <div className="mb-5 mx-5">
          <img
            className="cover-img"
            alt="AG_CON Digital Compositions"
            src={AgConColor2}
            onClick={() => openLightbox(AgConColor2, "AG_CON Digital Compositions")}
            style={{ cursor: 'pointer' }}
          />
        </div>

        {/* ---------------------------------------------- FINAL DESIGNS ---------------------------------------------- */}
        <div className="section-auto">
          <div className="content-2 mx-3">
            <div className="top">
              <b className="secondary-headline">Final Posters</b>
            </div>

            <div className="paragraph-2">
              The final poster series embraces a more distilled and purposeful approach. The reduction of visual noise, refinement of composition, and integration of a limited color system helped the final posters balance intensity with intention. The result is a unified series that maintains its retro-tech aesthetic while honoring the agricultural intelligence at the core of the concept.

            </div>

          </div>
        </div>
        
        <div className="final-designs-container">
          <div className="final-design-item">
            <img
              className="cover-img"
              alt="AG_CON Connect Final"
              src={AgConConnectFinal}
              onClick={() => openLightbox(AgConConnectFinal, "AG_CON Connect Final")}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="final-design-item">
            <img
              className="cover-img"
              alt="AG_CON Cultivate Final"
              src={AgConCultivateFinal}
              onClick={() => openLightbox(AgConCultivateFinal, "AG_CON Cultivate Final")}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="final-design-item">
            <img
              className="cover-img"
              alt="AG_CON Grow Final"
              src={AgConGrowFinal}
              onClick={() => openLightbox(AgConGrowFinal, "AG_CON Grow Final")}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* ---------------------------------------------- MOCKUPS ---------------------------------------------- */}

        <div className="">
          <img
            className="cover-img px-5"
            alt="AG_CON Main Mockups"
            src={AgConMockupDoubles}
            onClick={() => openLightbox(AgConMockupDoubles, "AG_CON Main Mockups")}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <div className="">
          <img
            className="cover-img px-5"
            alt="AG_CON Main Mockups"
            src={AgConLobby}
            onClick={() => openLightbox(AgConLobby, "AG_CON Main Mockups")}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <div className="">
          <img
            className="cover-img px-5"
            alt="AG_CON Main Mockups"
            src={AgConBusStop}
            onClick={() => openLightbox(AgConBusStop, "AG_CON Main Mockups")}
            style={{ cursor: 'pointer' }}
          />
        </div>

        

        <div className="">
          <img
            className="cover-img  mt-5 px-5"
            alt="AG_CON Final Mockups"
            src={AgConMockupsMain}
            onClick={() => openLightbox(AgConMockupsMain, "AG_CON Final Mockups")}
            style={{ cursor: 'pointer' }}
          />
        </div>

        {/* ------------------- Back to Top ---------------------------- */}
        <div className="section-auto" style={{ display: 'flex', justifyContent: 'center', padding: '40px 0 80px 0' }}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="d-flex align-items-center justify-content-center"
            style={{
              textDecoration: 'none',
              color: 'var(--color-silver)',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'color 0.3s ease',
              gap: '8px'
            }}
            onMouseEnter={(e) => e.target.style.color = 'white'}
            onMouseLeave={(e) => e.target.style.color = 'var(--color-silver)'}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18,15 12,9 6,15"></polyline>
            </svg>
            Back to Top
          </a>
        </div>

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

export default AgCon;
