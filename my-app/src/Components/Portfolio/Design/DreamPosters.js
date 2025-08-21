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
              src={DreamMockup1}
              alt="Dreams Poster Final Design"
              onClick={() => openLightbox(DreamMockup1, "Dreams Poster Final Design")}
              style={{ cursor: 'pointer', maxWidth: '100%' }}
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
                Inspired by dream theory, time relativity, and grunge typography, this poster project aims to capture the visual essence of a dream experience through a combination of expressive typography and layout. The posters contain layered motivational quotes emphasizing the words dream, time, energy, and goal.  This poster series attempts to depict dreams as free and open space where  letters and words appear suspended or frozen while in frenzied and chaotic motion.
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

        {/* -------------------------- Goal ------------------------------------- */}
        <div className="section-2">
          <div className="content-2">
            <div className="top">
              <b className="secondary-headline text-center">Goal</b>
            </div>
            <div className="paragraph-2 text-center">
              Through expressive typography and grid layouts, my goal was to capture the concept of dreams as an abstracted and fragmented space where all elements are working together to create a composition that visually implies a third dimension -    with letters and words aligned to a custom grid created by layering and tracing lines of perspective from two photographs taken in and around Adler Hall (Savannah, Ga).
            </div>
          </div>
        </div>

 {/* --------------------------------- Grids ------------------------------ */}

        <div style={{ padding: '0 40px', margin: 0 }}>
          <img
            className="cover-img"
            alt="Dream Grids"
            src={DreamGrids}
            onClick={() => openLightbox(DreamGrids, "Dream Grids")}
            style={{ cursor: 'pointer', display: 'block', width: '100%', height: 'auto' }}
          />
        </div>

        {/* -------------------------- Goal ------------------------------------- */}
        <div className="section-2">
          <div className="content-2">
            <div className="top">
              <b className="secondary-headline text-center">Approach</b>
            </div>
            <div className="paragraph-2 text-center">
              I selected the two photographs to the right primarily for stark contrast in perspective lines and implied form - the staircase providing implied lines and planes receding into a single vanishing point, and the other photo creating an implied form in space that protrudes forward from the composition, dividing visual direction to symmetrical receding perspective lines to both the left and to the right. Establishing this core contrast would allow me to begin constructing the typography into a composed order of elements and layout structure  without being limited by a single vantage point - allowing the layouts to work together in both contrast and harmony. Each of these design choices was aimed at creating a tension between contrasting shapes,  sizes, perspective, and orientation - making the experience of accurately reading the printed message feel perhaps as challenging as trying to remember a dream.
            </div>
          </div>
        </div>


        {/* --------------------------------- MOCKUPS SECTION ------------------------------ */}
        <div className="image-row">
          <div className="image-col">
            <img
              className="cover-img"
              src={DreamFinal1}
              alt="Dream Mockup 1"
              onClick={() => openLightbox(DreamFinal1, "Dream Mockup 1")}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="image-col">
            <img
              className="cover-img"
              src={DreamFinal2}
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
              <b className="secondary-headline text-center">Final Designs</b>
            </div>
            <div className="paragraph-2">
              The completed poster series showcases the integration of photographic elements with geometric grid systems, resulting in visually striking compositions that capture the essence of dream states through design. This poster series is the product of a larger project for a dream-goal calendar that provides an interactive print device for establishing and reaching a goal through an evening and morning interaction with the calendar to complete tasks that support reaching the goal before right before going to sleep every night, and as soon as they wake up every day - until the goal is reached.
            </div>
          </div>
        </div>

        <div className="image-row">
          <div className="image-col">
            <img
              className="cover-img"
              alt="Dream Final 1"
              src={DreamMockup1}
              onClick={() => openLightbox(DreamMockup1, "Dream Final 1")}
              style={{ cursor: 'pointer', width: '85%', height: 'auto', display: 'block' }}
            />
          </div>
          <div className="image-col">
            <img
              className="cover-img"
              alt="Dream Final 2"
              src={DreamMockup2}
              onClick={() => openLightbox(DreamMockup2, "Dream Final 2")}
              style={{ cursor: 'pointer', width: '85%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

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