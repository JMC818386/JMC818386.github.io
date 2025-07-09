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
        <div className="section">
          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">Sea Kayak Georgia</b>
            </div>
            <div className="paragraph">
              {`A promotional poster design for Sea Kayak Georgia, showcasing the natural beauty and adventure opportunities of Georgia's coastal waters and waterways.`}
            </div>
            <div className="paragraph">
              {`This design captures the essence of sea kayaking adventures through compelling visuals and typography, promoting outdoor recreation and the exploration of Georgia's stunning maritime landscapes.`}
            </div>
          </div>
          <div className="half-section image-side">
            <img
              className="history-cover-img"
              src={SKGPoster}
              alt="Sea Kayak Georgia Poster"
              onClick={() => openLightbox(SKGPoster, "Sea Kayak Georgia Poster")}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* ---------------------------------------------- LOGO SECTION ---------------------------------------------- */}
        <div className="section-2">
          <div className="content-2">
            <div className="section-text-2">
              <div className="top">
                <b className="secondary-headline">Brand Identity</b>
              </div>
              <div className="paragraph-2">
                {`The Sea Kayak Georgia logo combines nautical elements with outdoor adventure aesthetics, creating a memorable brand mark that resonates with water sports enthusiasts.`}
              </div>
            </div>
          </div>
        </div>

        <div className="section mb-1">
          <img
            className="cover-img"
            src={SKGLogo}
            alt="Sea Kayak Georgia Logo"
            onClick={() => openLightbox(SKGLogo, "Sea Kayak Georgia Logo")}
            style={{ cursor: 'pointer' }}
          />
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