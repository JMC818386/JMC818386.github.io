import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "../../TopNav";
import PortfolioNav from "../../PortfolioNav";

import "../../App.css";
import GraphicDesignBody from "../../GraphicDesignBody";
import PortfolioNavigationArrows from "./PortfolioNavigationArrows";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import SilentBattleBooklet from './SilentBattleBooklet';

import SilentBattleCover from './img/Silent/silent-hero-cover.png';
import SilentHeroImg from './img/Silent/silent-hero-img.png';
import SilentHeroBanner from './img/Silent/silent-hero-banner.png';
import SilentHeroCover from './img/Silent/silent-hero-cover.png';
import SilentInfluence from './img/Silent/silent-influence.png';
import SilentTypeStudy from './img/Silent/silent-type-study.png';
import SilentExperimentation from './img/Silent/silent-experimentation.png';
import SilentColorComps from './img/Silent/silent-color-comps.png';
import SilentDigitalComps from './img/Silent/silent-digital-comps.png';
import SilentTestPrint from './img/Silent/silent-test-print.png';
import SilentFinalComps from './img/Silent/silent-final-comps.png';
import SilentPagination from './img/Silent/silent-pagination.png';
import SilentFinalMockups from './img/Silent/silent-final-mockups.png';
import SilentCoverSpread from './img/Silent/silent-cover-spread.png';
import SilentAngled1 from './img/Silent/silent-angled-1.png';
import SilentAngled2 from './img/Silent/silent-angled-2.png';
import SilentAngled3 from './img/Silent/silent-angled-3.png';

import SilentBattleAlignment from './img/Silent/silent-battle-full-alignment.png';
import SilentBattleControl from './img/Silent/silent-battle-full-control.png';
import SilentBattleDeath from './img/Silent/silent-battle-full-death.png';
import SilentBattleDesire from './img/Silent/silent-battle-full-desire.png';
import SilentBattleFormation from './img/Silent/silent-battle-full-formation.png';
import SilentBattleFracture from './img/Silent/silent-battle-full-fracture.png';
import SilentBattleMind from './img/Silent/silent-battle-full-mind.png';
import SilentBattleStillness from './img/Silent/silent-battle-full-stillness.png';
import SilentBattleVictory from './img/Silent/silent-battle-full-victory.png';
import SilentBattleVigilance from './img/Silent/silent-battle-full-vigilance.png';



function SilentBattle() {
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
      <PortfolioNavigationArrows currentPath="/silent-battle" />

      <div data-aos="fade" data-aos-anchor-placement="top-bottom" className="px-2">

        {/* ---------------------------------------------- HERO SECTION ---------------------------------------------- */}
        <div className="section">
          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">Silent Battle</b>
            </div>
            <div className="top">
              <b className="sub-secondary-headline text-left">The Enchiridion of Epictetus</b>
            </div>
            <div className="paragraph">
              Editorial design and publication layout exploring the untold stories of internal struggles and personal battles through compelling visual narrative.
            </div>
            <div className="paragraph">
              An invisible war waged daily within: the disciplined soul confronting desire, fear, grief, and ego. The battlefield is the mind. The weapons are reason, vigilance, detachment. The cost is comfort. The reward is freedom. This book uses only letterforms, never imagery, to dramatize this ongoing inner conflict.
            </div>
          </div>
          <div className="half-section image-side">
            <img
              className="history-cover-img"
              alt="Silent Battle Hero"
              src={SilentHeroCover}
              onClick={() => openLightbox(SilentHeroCover, "Silent Battle Hero")}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* ---------------------------------------------- INTERACTIVE BOOKLET ---------------------------------------------- */}
      
        {/* <div className="section-auto m-2 p-0">
          <SilentBattleBooklet />
        </div> */}

          {/* ---------------------------------------------- Visual Research ---------------------------------------------- */}
        <div className="section">
          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">Visual Research</b>
            </div>
            
            <div className="paragraph">
              This project began with visual research, pulling from both Swiss modernism and expressive contemporary typography to inform a hybrid design approach grounded in structure and disruption. Using Epictetus’s Enchiridion as primary source text -I mapped out 12 expressive spreads and experimented with both perfect and case binding. Type exploration focused on pairing classical Roman serif faces (Sabon, Caslon, Chronicle Text) for the body with grotesque and modern san-serifs (Aktiv Grotesk, Futura Condensed, Space Grotesk) for contrast and typographic dynamism. Initial layout sketches explored themes of control, fracture, and clarity under pressure, using custom grid structures and hand-drawn type treatments.
            </div>
            
          </div>
          <div className="half-section image-side">
            <img
              className="history-cover-img"
              alt="Silent Battle Hero"
              src={SilentInfluence}
              onClick={() => openLightbox(SilentInfluence, "Silent Battle Hero")}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>



        {/* ---------------------------------------------- Type Study ---------------------------------------------- */}

        <div className="">
          
            <img
              className="cover-img"
              alt="Silent Battle Type Study"
              src={SilentTypeStudy}
              onClick={() => openLightbox(SilentTypeStudy, "Silent Battle Type Study")}
              style={{ cursor: 'pointer', width: "100%" }}
            />
         
        </div>

        {/* ---------------------------------------------- Pagination ---------------------------------------------- */}

        {/* <div style={{ padding: '40px 40px', margin: 0 }}>
          <img
            className="cover-img"
            alt="Silent Battle Pagination"
            src={SilentPagination}
            onClick={() => openLightbox(SilentPagination, "Silent Battle Pagination")}
            style={{ cursor: 'pointer', display: 'block', width: '100%', height: 'auto' }}
          />
        </div> */}

        {/* ---------------------------------------------- COLOR COMPOSITIONS ---------------------------------------------- */}
        <div className="section-2">
          <div className="content-2">
            <div className="top">
              <b className="secondary-headline text-center">Content + Layout</b>
            </div>
            <div className="paragraph-2 text-center">
              With the conceptual structure defined, I began building out the full pagination system—mapping ten expressive spreads across the body of the book while integrating all 53 chapters of the Enchiridion in sequence. Each spread was anchored by a central theme such as Control, Desire, or Fracture, which guided both layout and typographic expression. I used a modular grid to organize the Roman body text with precision while allowing expressive headlines to disrupt, shape, or reinforce the structure.
            </div>
            <div className="paragraph-2 text-center text-center">
              As I began populating each composition with the full body copy, the balance between clarity and contrast became critical. I tested a variety of type treatments and spatial arrangements to preserve legibility while driving emotional and philosophical tone. A full grayscale print test allowed me to evaluate rhythm, density, and pacing across the book in physical form—revealing what was working visually and where refinement was needed before committing to final print production.
            </div>
          </div>
        </div>


        <div style={{ padding: '40px 40px', margin: 0 }}>
          <img
            className="cover-img"
            alt="Silent Battle Digital Compositions"
            src={SilentDigitalComps}
            onClick={() => openLightbox(SilentDigitalComps, "Silent Battle Digital Compositions")}
            style={{ cursor: 'pointer', display: 'block', width: '100%', height: 'auto' }}
          />
        </div>

        {/* ---------------------------------------------- PRINT TESTING ---------------------------------------------- */}
        <div style={{ padding: '20px 40px', margin: 0 }}>
          <img
            className="cover-img"
            alt="Silent Battle Test Print"
            src={SilentTestPrint}
            onClick={() => openLightbox(SilentTestPrint, "Silent Battle Test Print")}
            style={{ cursor: 'pointer', display: 'block', width: '100%', height: 'auto' }}
          />
        </div>




          {/* ---------------------------------------------- Refinement ---------------------------------------------- */}
        <div className="section-2">
          <div className="content-2">
            <div className="top">
              <b className="secondary-headline text-center">Refinement</b>
            </div>
            <div className="paragraph-2 text-center">
              With the full structure, grid, and typographic system in place, I transitioned into high-fidelity composition - bringing each thematic spread to life through layered color, texture, and expressive typographic treatments. Every spread was carefully refined to reflect its underlying philosophical tone: Desire moves with fluid lines and tension, Fracture splinters violently across the grid, and Stillness fades into delicate quiet. Visual experimentation intensified as I explored techniques like motion simulation, typographic erosion, repetition, and spatial density to build contrast and rhythm. Final refinements focused on color correction, type clarity, and compositional pacing across the full sequence. The project concluded with a fully bound and printed book.
            </div>
          </div>
        </div>



      {/* ---------------------------------------------- Color Comps ---------------------------------------------- */}

        <div style={{ padding: '10px 20px', margin: 0 }}>
          <img
            className="cover-img"
            alt="Silent Battle Color Compositions"
            src={SilentColorComps}
            onClick={() => openLightbox(SilentColorComps, "Silent Battle Color Compositions")}
            style={{ cursor: 'pointer', display: 'block', width: '100%', height: 'auto' }}
          />
        </div>

      


        <div style={{ padding: '10px 20px', margin: 0 }}>
          <img
            className="cover-img"
            alt="Silent Battle Final Compositions"
            src={SilentFinalComps}
            onClick={() => openLightbox(SilentFinalComps, "Silent Battle Final Compositions")}
            style={{ cursor: 'pointer', display: 'block', width: '100%', height: 'auto' }}
          />
        </div>



        {/* ---------------------------------------------- FINAL MOCKUPS ---------------------------------------------- */}
        <div style={{ padding: '20px 20px', margin: 0 }}>
          <img
            className="cover-img"
            alt="Silent Battle Final Mockups"
            src={SilentBattleControl}
            onClick={() => openLightbox(SilentBattleControl, "Silent Battle Final Mockups")}
            style={{ cursor: 'pointer', display: 'block', width: '100%', height: 'auto', padding: '10px 20px' }}
          />
        </div>

        <div style={{ padding: '20px 20px', margin: 0 }}>
          <img
            className="cover-img"
            alt="Silent Battle Final Mockups"
            src={SilentBattleDeath}
            onClick={() => openLightbox(SilentBattleDeath, "Silent Battle Final Mockups")}
            style={{ cursor: 'pointer', display: 'block', width: '100%', height: 'auto', padding: '10px 20px' }}
          />
        </div>

        <div style={{ padding: '20px 20px', margin: 0 }}>
          <img
            className="cover-img"
            alt="Silent Battle Final Mockups"
            src={SilentBattleDesire}
            onClick={() => openLightbox(SilentBattleDesire, "Silent Battle Final Mockups")}
            style={{ cursor: 'pointer', display: 'block', width: '100%', height: 'auto', padding: '10px 20px' }}
          />
        </div>

        <div style={{ padding: '20px 20px', margin: 0 }}>
          <img
            className="cover-img"
            alt="Silent Battle Final Mockups"
            src={SilentBattleFormation}
            onClick={() => openLightbox(SilentBattleFormation, "Silent Battle Final Mockups")}
            style={{ cursor: 'pointer', display: 'block', width: '100%', height: 'auto', padding: '10px 20px' }}
          />
        </div>

        <div style={{ padding: '20px 20px', margin: 0 }}>
          <img
            className="cover-img"
            alt="Silent Battle Final Mockups"
            src={SilentBattleFracture}
            onClick={() => openLightbox(SilentBattleFracture, "Silent Battle Final Mockups")}
            style={{ cursor: 'pointer', display: 'block', width: '100%', height: 'auto', padding: '10px 20px' }}
          />
        </div>

        <div style={{ padding: '20px 20px', margin: 0 }}>
          <img
            className="cover-img"
            alt="Silent Battle Final Mockups"
            src={SilentBattleMind}
            onClick={() => openLightbox(SilentBattleMind, "Silent Battle Final Mockups")}
            style={{ cursor: 'pointer', display: 'block', width: '100%', height: 'auto', padding: '10px 20px' }}
          />
        </div>

        <div style={{ padding: '20px 20px', margin: 0 }}>
          <img
            className="cover-img"
            alt="Silent Battle Final Mockups"
            src={SilentBattleStillness}
            onClick={() => openLightbox(SilentBattleStillness, "Silent Battle Final Mockups")}
            style={{ cursor: 'pointer', display: 'block', width: '100%', height: 'auto', padding: '10px 20px' }}
          />
        </div>

        <div style={{ padding: '20px 20px', margin: 0 }}>
          <img
            className="cover-img"
            alt="Silent Battle Final Mockups"
            src={SilentBattleVictory}
            onClick={() => openLightbox(SilentBattleVictory, "Silent Battle Final Mockups")}
            style={{ cursor: 'pointer', display: 'block', width: '100%', height: 'auto', padding: '10px 20px' }}
          />
        </div>

        <div style={{ padding: '20px 20px', margin: 0 }}>
          <img
            className="cover-img"
            alt="Silent Battle Final Mockups"
            src={SilentBattleVigilance}
            onClick={() => openLightbox(SilentBattleVigilance, "Silent Battle Final Mockups")}
            style={{ cursor: 'pointer', display: 'block', width: '100%', height: 'auto', padding: '10px 20px' }}
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

export default SilentBattle;
