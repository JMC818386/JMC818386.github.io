import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "../../TopNav";
import PortfolioNav from "../../PortfolioNav";
import Footer from "../../Footer";
import "../../App.css";
import PortfolioNavigationArrows from "./PortfolioNavigationArrows";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

import SilentBattleCover from './img/silent-battle-cover.png';
import SilentHeroImg from './img/Silent/silent-hero-img.png';
import SilentHeroBanner from './img/Silent/silent-hero-banner.png';
import SilentInfluence from './img/Silent/silent-influence.png';
import SilentTypeStudy from './img/Silent/silent-type-study.png';
import SilentExperimentation from './img/Silent/silent-experimentation.png';
import SilentColorComps from './img/Silent/silent-color-comps.png';
import SilentDigitalComps from './img/Silent/silent-digital-comps.png';
import SilentTestPrint from './img/Silent/silent-test-print.png';
import SilentFinalComps from './img/Silent/silent-final-comps.png';
import SilentPagination from './img/Silent/silent-pagination.png';
import SilentFinalMockups from './img/Silent/silent-final-mockups.png';

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

      <div data-aos="fade" data-aos-anchor-placement="top-bottom">

        {/* ---------------------------------------------- HERO SECTION ---------------------------------------------- */}
        <div className="section">
          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">Silent Battle</b>
            </div>
            <div className="paragraph">
              Editorial design and publication layout exploring the untold stories of internal struggles and personal battles through compelling visual narrative.
            </div>
          </div>
          <div className="half-section image-side">
            <img
              className="history-cover-img"
              alt="Silent Battle Hero"
              src={SilentHeroImg}
              onClick={() => openLightbox(SilentHeroImg, "Silent Battle Hero")}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* ---------------------------------------------- HERO BANNER ---------------------------------------------- */}
        <div style={{ padding: '0 40px', margin: 0 }}>
          <img
            className="cover-img"
            alt="Silent Battle Banner"
            src={SilentHeroBanner}
            onClick={() => openLightbox(SilentHeroBanner, "Silent Battle Banner")}
            style={{ cursor: 'pointer', display: 'block', width: '100%', height: 'auto' }}
          />
        </div>

        {/* ---------------------------------------------- RESEARCH & INSPIRATION ---------------------------------------------- */}
        <div className="section-2">
          <div className="content-2">
            <div className="top">
              <b className="secondary-headline">Research & Inspiration</b>
            </div>
            <div className="paragraph-2">
              The design process began with research into how visual design can communicate complex emotional states and internal struggles through typography and layout.
            </div>
          </div>
        </div>

        <div style={{ padding: '0 40px', margin: 0 }}>
          <img
            className="cover-img"
            alt="Silent Battle Influence"
            src={SilentInfluence}
            onClick={() => openLightbox(SilentInfluence, "Silent Battle Influence")}
            style={{ cursor: 'pointer', display: 'block', width: '100%', height: 'auto' }}
          />
        </div>

        <div className="image-row">
          <div className="image-col">
            <img
              className="cover-img"
              alt="Silent Battle Type Study"
              src={SilentTypeStudy}
              onClick={() => openLightbox(SilentTypeStudy, "Silent Battle Type Study")}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="image-col">
            <img
              className="cover-img"
              alt="Silent Battle Experimentation"
              src={SilentExperimentation}
              onClick={() => openLightbox(SilentExperimentation, "Silent Battle Experimentation")}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

        <div style={{ padding: '40px 40px', margin: 0 }}>
          <img
            className="cover-img"
            alt="Silent Battle Pagination"
            src={SilentPagination}
            onClick={() => openLightbox(SilentPagination, "Silent Battle Pagination")}
            style={{ cursor: 'pointer', display: 'block', width: '100%', height: 'auto' }}
          />
        </div>

        {/* ---------------------------------------------- COLOR COMPOSITIONS ---------------------------------------------- */}
        <div className="section-2">
          <div className="content-2">
            <div className="top">
              <b className="secondary-headline">Color & Composition</b>
            </div>
            <div className="paragraph-2">
              Color palettes and compositions were carefully developed to evoke specific emotional responses while maintaining readability and visual hierarchy.
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
        <div className="top mt-5">
          <b className="secondary-headline">Print Testing</b>
        </div>
        <div style={{ padding: '40px 40px', margin: 0 }}>
          <img
            className="cover-img"
            alt="Silent Battle Test Print"
            src={SilentTestPrint}
            onClick={() => openLightbox(SilentTestPrint, "Silent Battle Test Print")}
            style={{ cursor: 'pointer', display: 'block', width: '100%', height: 'auto' }}
          />
        </div>

        <div style={{ padding: '40px 40px', margin: 0 }}>
          <img
            className="cover-img"
            alt="Silent Battle Color Compositions"
            src={SilentColorComps}
            onClick={() => openLightbox(SilentColorComps, "Silent Battle Color Compositions")}
            style={{ cursor: 'pointer', display: 'block', width: '100%', height: 'auto' }}
          />
        </div>

        {/* ---------------------------------------------- FINAL DESIGNS ---------------------------------------------- */}
        <div className="section-2">
          <div className="content-2">
            <div className="top">
              <b className="secondary-headline">Final Publication</b>
            </div>
            <div className="paragraph-2">
              The final publication combines powerful typography, thoughtful layout, and strategic use of whitespace to create an impactful reading experience.
            </div>
          </div>
        </div>


        <div style={{ padding: '40px 40px', margin: 0 }}>
          <img
            className="cover-img"
            alt="Silent Battle Final Compositions"
            src={SilentFinalComps}
            onClick={() => openLightbox(SilentFinalComps, "Silent Battle Final Compositions")}
            style={{ cursor: 'pointer', display: 'block', width: '100%', height: 'auto' }}
          />
        </div>



        {/* ---------------------------------------------- FINAL MOCKUPS ---------------------------------------------- */}
        <div style={{ padding: '40px 40px', margin: 0 }}>
          <img
            className="cover-img"
            alt="Silent Battle Final Mockups"
            src={SilentFinalMockups}
            onClick={() => openLightbox(SilentFinalMockups, "Silent Battle Final Mockups")}
            style={{ cursor: 'pointer', display: 'block', width: '100%', height: 'auto' }}
          />
        </div>

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

export default SilentBattle;
