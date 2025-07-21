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

import DreamPhoto1 from './img/Dreams/dream-photo-1.png';
import DreamPhoto2 from './img/Dreams/dream-photo-2.png';
import DreamMockup1 from './img/Dreams/dream-mockup-1.png';
import DreamMockup2 from './img/Dreams/dream-mockup-2.png';
import DreamFinal1 from './img/Dreams/dream-final-1.png';
import DreamFinal2 from './img/Dreams/dream-final-2.png';
import DreamGrids from './img/Dreams/dream-grids.png';

function DreamPoster() {
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
      <PortfolioNavigationArrows currentPath="/dream-posters" />

      <div data-aos="fade" data-aos-anchor-placement="top-bottom">

        {/* ---------------------------------------------- HERO SECTION ---------------------------------------------- */}
        <div className="section">
          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">Dreams Poster Series</b>
            </div>
            <div className="paragraph">
              A conceptual poster series exploring the visual representation of dreams through abstract photography and grid-based design systems. This project combines artistic expression with structured design principles to create compelling visual narratives.
            </div>
          </div>
          <div className="half-section image-side">
            <img
              className="cover-img"
              src={DreamFinal1}
              alt="Dreams Poster Final Design"
              onClick={() => openLightbox(DreamFinal1, "Dreams Poster Final Design")}
              style={{ cursor: 'pointer', maxWidth: '75%' }}
            />
          </div>
        </div>

        {/* ---------------------------------------------- CONCEPT SECTION ---------------------------------------------- */}
        <div className="section-2">
          <div className="content-2">
            <div className="section-text-2">
              <div className="top">
                <b className="secondary-headline">Concept</b>
              </div>
              <div className="paragraph-2">
                The Dreams poster series explores the ethereal and abstract nature of dreams through a combination of photography and geometric design elements. Each piece represents different dream states and emotional landscapes, creating a cohesive visual narrative that bridges the gap between reality and imagination.
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------- PHOTOGRAPHY SECTION ---------------------------------------------- */}
        <div className="image-row">
          <div className="image-col">
            <img
              className="cover-img"
              src={DreamPhoto1}
              alt="Dream Photo 1"
              onClick={() => openLightbox(DreamPhoto1, "Dream Photo 1")}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="image-col">
            <img
              className="cover-img"
              src={DreamPhoto2}
              alt="Dream Photo 2"
              onClick={() => openLightbox(DreamPhoto2, "Dream Photo 2")}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* ---------------------------------------------- GRID SYSTEM SECTION ---------------------------------------------- */}
        <div className="section-2">
          <div className="content-2">
            <div className="top">
              <b className="secondary-headline">Grid System Development</b>
            </div>
            <div className="paragraph-2">
              A systematic approach to layout design using modular grid structures that create visual harmony while allowing for creative expression within the poster series.
            </div>
          </div>
        </div>

        <div style={{ padding: '0 40px', margin: 0 }}>
          <img
            className="cover-img"
            alt="Dream Grids"
            src={DreamGrids}
            onClick={() => openLightbox(DreamGrids, "Dream Grids")}
            style={{ cursor: 'pointer', display: 'block', width: '100%', height: 'auto' }}
          />
        </div>

        {/* ---------------------------------------------- MOCKUPS SECTION ---------------------------------------------- */}
        <div className="image-row">
          <div className="image-col">
            <img
              className="cover-img"
              src={DreamMockup1}
              alt="Dream Mockup 1"
              onClick={() => openLightbox(DreamMockup1, "Dream Mockup 1")}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="image-col">
            <img
              className="cover-img"
              src={DreamMockup2}
              alt="Dream Mockup 2"
              onClick={() => openLightbox(DreamMockup2, "Dream Mockup 2")}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* ---------------------------------------------- FINAL DESIGNS ---------------------------------------------- */}
        <div className="section-2">
          <div className="content-2">
            <div className="top">
              <b className="secondary-headline">Final Poster Designs</b>
            </div>
            <div className="paragraph-2">
              The completed poster series showcases the integration of photographic elements with geometric grid systems, resulting in visually striking compositions that capture the essence of dream states through design.
            </div>
          </div>
        </div>

        <div className="image-row">
          <div className="image-col">
            <img
              className="cover-img"
              alt="Dream Final 1"
              src={DreamFinal1}
              onClick={() => openLightbox(DreamFinal1, "Dream Final 1")}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="image-col">
            <img
              className="cover-img"
              alt="Dream Final 2"
              src={DreamFinal2}
              onClick={() => openLightbox(DreamFinal2, "Dream Final 2")}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

      </div>

      <GraphicDesignBody />
      <Footer />

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

export default DreamPoster;