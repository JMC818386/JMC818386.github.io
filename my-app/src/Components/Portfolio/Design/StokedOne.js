import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from '../../TopNav';
import PortfolioNav from '../../PortfolioNav';
import Footer from '../../Footer';
import MiniCover from './img/Stoked_One/Mini_Cover.png';
import SpreadOne from './img/Stoked_One/Mini_CoverSpread_Full.png';
import SpreadTwo from './img/Stoked_One/Mini_Seneca.png';
import SpreadThree from './img/Stoked_One/Mini_Epictiteus.png';
import SpreadFour from './img/Stoked_One/Mini_Marcus.png';
import BackCover from './img/Stoked_One/Mini_Cover_Back.png';
import '../../App.css';
import GraphicDesignBody from '../../GraphicDesignBody';
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

function StokedOne() {
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
    <div className="bg-dark">
      <TopNav />
      <PortfolioNav />
      <div className="container">
        <div className="row header">
          <div className="col-6 image">
            <img
              className="cover"
              src={MiniCover}
              alt="Mini Zine Cover"
              onClick={() => openLightbox(MiniCover, "Mini Zine Cover")}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="col-6 text">
            <p className="sub-title text-secondary">Stoked On Stoicism</p>
            <h1 className="main-title text-light">Late Greats</h1>
            <p className="body-text text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div className="spreads">
          <div className="row spread-one">
            <img
              className="spread"
              src={SpreadOne}
              alt="Mini Spread One"
              onClick={() => openLightbox(SpreadOne, "Mini Spread One")}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="row spread-two">
            <img
              className="spread"
              src={SpreadTwo}
              alt="Mini Spread Two"
              onClick={() => openLightbox(SpreadTwo, "Mini Spread Two")}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="row spread-three">
            <img
              className="spread"
              src={SpreadThree}
              alt="Mini Spread Three"
              onClick={() => openLightbox(SpreadThree, "Mini Spread Three")}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="row spread-four">
            <img
              className="spread"
              src={SpreadFour}
              alt="Mini Spread Four"
              onClick={() => openLightbox(SpreadFour, "Mini Spread Four")}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="row footer">
            <div className="col-6 image">
              <img
                className="spread"
                src={BackCover}
                alt="Mini Zine Back Cover"
                onClick={() => openLightbox(BackCover, "Mini Zine Back Cover")}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="col-6 text">
              <p className="sub-title text-secondary">Stoked On Stoicism</p>
              <h1 className="main-title text-light">Late Greats</h1>
              <p className="body-text text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
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

export default StokedOne;