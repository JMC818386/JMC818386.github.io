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
import StokedOneBooklet from './StokedOneBooklet';
import StokedTwoBooklet from './StokedTwoBooklet';

import HistoryCover from './img/Stoked_Two/mini-history-hero.png';
import MiniSpread from './img/Stoked_Two/mini-history-1.png';
import HistorySpread1 from './img/Stoked_Two/mini-history-2.png';
import HistorySpread2 from './img/Stoked_Two/mini-history-3.png';

function StokedTwo() {
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
      <PortfolioNavigationArrows currentPath="/stoked-two" />

      {/* ---------------------------------------------- HERO SECTION ---------------------------------------------- */}
      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Stoked on Stoicism</b>
          </div>
          <div className="paragraph">
            {`A collection of Zines (miniature magazine) combining elements of modern Swiss style layout with grunge typography to explore the notion of readability in philosophy. Printed in color process with a Risograph printer on assorted papers. `}
          </div>
        </div>
        <div className="half-section image-side">
          <img
            className="history-cover-img"
            src={HistoryCover}
            alt="History Zine Cover"
            onClick={() => openLightbox(HistoryCover, "History Zine Cover")}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* ---------------------------------------------- FLIPBOOK SECTION ---------------------------------------------- */}
      <div className="section-auto">
        <StokedOneBooklet />
      </div>

      {/* ---------------------------------------------- SECTION 4 ---------------------------------------------- */}
      <div className="section-2 mt-5">
        <div className="content-2">
          <div className="section-text-2">
            <div className="top">
              <b className="secondary-headline">Concept</b>
            </div>
            <div className="paragraph-2">
              {`This project represents my own interpretation and experience with interest in Stoicism  through contemporary and expressive design. The goal was to transform its traditionally rigid and structured nature into something visually engaging while maintaining its depth and substance. Inspired by the history of zines as a medium for both artistic expression and intellectual exploration, this work merges philosophical discourse with dynamic, unconventional design. By layering structured content with bold typographic choices, abstract compositions, and experimental print techniques, the project challenges the notion that philosophy must be dense and inaccessible. Instead, it presents Stoicism in a way that is provocative, visually immersive, and compelling to modern audiences. `}
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------- SECTION 1 ---------------------------------------------- */}
      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Visual Design</b>
          </div>
          <div className="paragraph">
            {`The first zine, Stoked on Stoicism, contrasts the philosophy’s intrinsic ideals with a mix of non-linear, grunge-style typography and a structured, modern layout. This interplay creates visual tension, reinforcing the balance between order and abstraction. `}
          </div>
        </div>
        <div className="half-section image-side">
          <img
            className="cover-img"
            src={MiniSpread}
            alt="Mini Spread"
            onClick={() => openLightbox(MiniSpread, "Mini Spread")}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* ---------------------------------------------- FLIPBOOK SECTION 2 ---------------------------------------------- */}
      <div className="section-auto">
        <StokedTwoBooklet />
      </div>

      {/* ---------------------------------------------- SECTION 4 ---------------------------------------------- */}
      <div className="section-2">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Scope</b>
          </div>
          <div className="paragraph">
            {`As the project progressed, the work evolved to include larger print areas, longer bodies of text, and greater complexity in transparency overlays and abstracted typographic compositions. A limited color palette was intentionally used to push the boundaries of Risograph printing techniques, emphasizing layered separations and dynamic color interactions. `}
          </div>
        </div>

        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Influence</b>
          </div>
          <div className="paragraph">
            {`Inspired by David Carson’s unconventional typography and the unique constraints of Risograph printing, the compositions integrate raster and vector imagery, color overlays, and intricate layering. Special attention was given to the relationship between text and image, ensuring a cohesive yet experimental aesthetic. `}
          </div>
        </div>
      </div>

      {/* ---------------------------------------------- SECTION 2 ---------------------------------------------- */}
      <div className="section">
        <div className="half-section image-side">
          <img
            className="cover-img"
            src={HistorySpread1}
            alt="History Spread 1"
            onClick={() => openLightbox(HistorySpread1, "History Spread 1")}
            style={{ cursor: 'pointer' }}
          />
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

      {/* ---------------------------------------------- SECTION 3 ---------------------------------------------- */}
      <div className="section-auto my-5 mb-5 pb-5">
        <img
          className="cover-img"
          src={HistorySpread2}
          alt="History Spread 2"
          onClick={() => openLightbox(HistorySpread2, "History Spread 2")}
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

export default StokedTwo;
