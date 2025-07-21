import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "../../TopNav";
import PortfolioNav from "../../PortfolioNav";
import Footer from "../../Footer";
import Logo from "./img/logo.jpg";
import "../../App.css";
import GraphicDesignBody from "../../GraphicDesignBody";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

import HistoryCover from './img/Stoked_Two/mini-history-hero.png';
import MiniSpread from './img/Stoked_Two/mini-history-1.png';
import HistorySpread1 from './img/Stoked_Two/mini-history-2.png';
import HistorySpread2 from './img/Stoked_Two/mini-history-3.png';

function Template() {
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

      {/* ---------------------------------------------- HERO SECTION ---------------------------------------------- */}

      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Stoked on Stoicism 2</b>
          </div>
          <div className="paragraph">
            {`Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. `}
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

      {/* ---------------------------------------------- SECTION 1 ---------------------------------------------- */}

      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Stoked on Stoicism 2</b>
          </div>
          <div className="paragraph">
            {`This project represent my own interpretation and experience with interest in Stoicism  through contemporary and expressive design. The goal was to transform its traditionally rigid and structured nature into something visually engaging while maintaining its depth and substance. Inspired by the history of zines as a medium for both artistic expression and intellectual exploration, this work merges philosophical discourse with dynamic, unconventional design. By layering structured content with bold typographic choices, abstract compositions, and experimental print techniques, the project challenges the notion that philosophy must be dense and inaccessible. Instead, it presents Stoicism in a way that is provocative, visually immersive, and compelling to modern audiences. `}
          </div>
        </div>

        <div className="half-section image-side">
          <img
            className="history-cover-img"
            src={MiniSpread}
            alt="Mini Spread"
            onClick={() => openLightbox(MiniSpread, "Mini Spread")}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* ---------------------------------------------- SECTION 2 ---------------------------------------------- */}

      <div className="section-2">
        <div className="content-2">
          <div className="top">
            <b className="secondary-headline">Section Title</b>
          </div>
          <div className="paragraph">
            {`Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. `.repeat(4)}
          </div>
        </div>
      </div>

      {/* ---------------------------------------------- SECTION 3 ---------------------------------------------- */}

      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Stoked on Stoicism 2</b>
          </div>
          <div className="paragraph">
            {`This project represent my own interpretation and experience with interest in Stoicism  through contemporary and expressive design. The goal was to transform its traditionally rigid and structured nature into something visually engaging while maintaining its depth and substance. Inspired by the history of zines as a medium for both artistic expression and intellectual exploration, this work merges philosophical discourse with dynamic, unconventional design. By layering structured content with bold typographic choices, abstract compositions, and experimental print techniques, the project challenges the notion that philosophy must be dense and inaccessible. Instead, it presents Stoicism in a way that is provocative, visually immersive, and compelling to modern audiences. `}
          </div>
        </div>

        <div className="half-section image-side">
          <img
            className="history-cover-img"
            src={HistorySpread1}
            alt="History Spread 1"
            onClick={() => openLightbox(HistorySpread1, "History Spread 1")}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* ---------------------------------------------- SECTION 4 ---------------------------------------------- */}

      <div className="section">
        <div className="half-section image-side">
          <img
            className="history-cover-img"
            src={HistorySpread2}
            alt="History Spread 2"
            onClick={() => openLightbox(HistorySpread2, "History Spread 2")}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Stoked on Stoicism 2</b>
          </div>
          <div className="paragraph">
            {`Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. `.repeat(4)}
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

export default Template;
