import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from '../../TopNav';
import PortfolioNav from '../../PortfolioNav';
import Footer from '../../Footer';
import Logo from './img/logo.jpg';
import '../../App.css';
import GraphicDesignBody from '../../GraphicDesignBody';
import PortfolioNavigationArrows from "./PortfolioNavigationArrows";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

import SKGPoster from './img/SKG/SKG_Poster.png';
import SKGLogo from './img/SKG/skg-logo.png';

function SeaKayakGA() {
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
      <PortfolioNavigationArrows currentPath="/skg" />

      <div data-aos="fade" data-aos-anchor-placement="top-bottom">

        {/* ---------------------------------------------- HERO SECTION ---------------------------------------------- */}
        <div className="section mb-5 pb-5">
          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">Sea Kayak Georgia</b>
            </div>
            <div className="paragraph">
              {`This pricing poster for Sea Kayak Georgia was designed as a navigable infographic that uses connected nodes to visually guide customers through available adventures, durations, and rates at a glance. Inspired by branching river systems and decision trees, the structure allows users to follow each route—kayak, SUP, or canoe - from activity to timeframe to final pricing with minimal effort or confusion. The layout eliminates cluttered charts in favor of intuitive flow and visual grouping, helping users quickly compare options. The soft gradient color palette and rounded forms were chosen to reflect the easygoing, nostalgic atmosphere of Tybee Island—evoking a sense of place while staying functional and inviting for both tourists and locals.`}
            </div>
          </div>
          <div className="half-section image-side">
            <img
              className="skg-poster-img"
              src={SKGPoster}
              alt="Sea Kayak Georgia Poster"
              onClick={() => openLightbox(SKGPoster, "Sea Kayak Georgia Poster")}
              style={{ cursor: 'pointer' }}
            />
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
    </div>
  );
}

export default SeaKayakGA;