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

import PantheonCover from './img/Stoked_Three/pantheon-hero.png';
import Pantheon1 from './img/Stoked_Three/pantheon-1.png';
import Pantheon2 from './img/Stoked_Three/pantheon-2.png';
import Pantheon3 from './img/Stoked_Three/pantheon-3.png';

function StokedThree() {
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
      <PortfolioNavigationArrows currentPath="/stoked-three" />

      {/* ---------------------------------------------- HERO SECTION ---------------------------------------------- */}
      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Stoked on Hellenism</b>
          </div>
          <div className="paragraph">
            {`This project is a continuation of my Stoked On Stoicism series - breaking away from the introduction and history of Stoicism as a branch of philosophy, and exploring my own personal experience and challenges with reading and understanding philosophy and history. `}
          </div>
        </div>
        <div className="half-section image-side">
          <img
            className="history-cover-img"
            src={PantheonCover}
            alt="Pantheon Cover"
            onClick={() => openLightbox(PantheonCover, "Pantheon Cover")}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* ---------------------------------------------- SECTION 1 ---------------------------------------------- */}
      <div className="section-2 mt-5">
        <div className="content-2">
          <div className="section-text-2">
            <div className="top">
              <b className="secondary-headline">Concept</b>
            </div>
            <div className="paragraph-2">
              {`My goal with this piece was to continue using abstracted grunge typography combined with raster images of stone statues - juxtaposing strong modern imagery with justified type that is meant to immulate a Snellen Chart (Used to determine a persons ability to see progressively smaller objects from a distance. By combining these elements together, my aim was to force the observer to slow down and read through the text in an uncomfortable and fragmented way - mirroring my own difficulties in reading, and in particular - reading dense works like philosophy and history. `}
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------- SECTION 2 ---------------------------------------------- */}
      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Reflection</b>
          </div>
          <div className="paragraph">
            {`The text is borrowed from Marcus Aurelius’s books, Mediations - selecting sections and quotes that most resonated with me and drew my interest. By displayed each of the 12 core Gods from both Greek and Roman pantheons, my aim was to communicate the tension and duality I’ve observed while studying both. `}
          </div>
        </div>
        <div className="half-section image-side">
          <img
            className="cover-img"
            src={Pantheon1}
            alt="Pantheon Spread 1"
            onClick={() => openLightbox(Pantheon1, "Pantheon Spread 1")}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* ---------------------------------------------- SECTION 3 ---------------------------------------------- */}

      <div className="section-2">
        <div className="content-2">
          <div className="section-text-2">
            <div className="paragraph">
              {`Statues of each God have been distorted and disfigured to reflect my own challenges in reconciling the connections between these two great cultures, and how that contrasts the simple and elegant logic that can be found in reading what I find to be profound wisdom in Stoic texts. By abstracting the body text through varied degrees of justified type, expanded and contrasted kerning between letters, the observer can read through the quotes in a way that reflect my own struggles.`}
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------- SECTION 5 ---------------------------------------------- */}
      <div className="section-auto my-5">
        <img
          className="cover-img"
          src={Pantheon3}
          alt="Pantheon Zine Spreads"
          onClick={() => openLightbox(Pantheon3, "Pantheon Zine Spreads")}
          style={{ cursor: 'pointer' }}
        />
      </div>


      {/* ---------------------------------------------- SECTION 4 ---------------------------------------------- */}
      <div className="section-2 mb-5 pb-5">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Influence</b>
          </div>
          <div className="paragraph">
            {`Inspired by David Carson’s unconventional typography and the unique constraints of Risograph printing, the compositions integrate raster and vector imagery, color overlays, and intricate layering. Special attention was given to the relationship between text and image, ensuring a cohesive yet experimental aesthetic.`}
          </div>
        </div>

        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Execution</b>
          </div>
          <div className="paragraph">
            {`This series reflects a personal creative process—merging structured design principles with abstract experimentation. By pairing Stoicism’s logic and discipline with ambitious, unconventional layouts, the work offers both an artistic expression and an accessible introduction to Stoic thought. `}
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

      {/* ----------------------------------------------CONTENT END ---------------------------------------------- */}
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

export default StokedThree;
