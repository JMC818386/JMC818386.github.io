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

import TotalPtConnectCover from './img/total-pt-connect.png';
import TotalConnectHero from './img/TotalConnect/total-connect-hero-img.png';
import TotalConnectMessaging from './img/TotalConnect/total-connect-messaging.png';
import TotalConnectScreens from './img/TotalConnect/total-connect-screens.png';
import TotalConnectMockupCalendar from './img/TotalConnect/total-connect-mockup-calendar.png';
import TotalConnectMockupStats from './img/TotalConnect/total-connect-mockup-stats.png';
import TotalConnectPatientGrid from './img/TotalConnect/total-connect-patient-grid.png';
import TotalConnectPatientReport from './img/TotalConnect/total-connect-patient-report.png';

function TotalPtConnect() {
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
      <PortfolioNavigationArrows currentPath="/total-pt-connect" />

      {/* ---------------------------------------------- HERO SECTION ---------------------------------------------- */}
      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Total PT Connect</b>
          </div>
          <div className="paragraph">
            Professional healthcare platform branding and user interface design, connecting physical therapy providers with modern digital solutions.
          </div>
        </div>
        <div className="half-section image-side">
          <img
            className="history-cover-img"
            alt="Total PT Connect Hero"
            src={TotalConnectHero}
            onClick={() => openLightbox(TotalConnectHero, "Total PT Connect Hero")}
            style={{ cursor: 'pointer', transform: 'scale(1.5)' }}
          />
        </div>
      </div>

      {/* ---------------------------------------------- PATIENT GRID OVERVIEW ---------------------------------------------- */}
      <div style={{ padding: 0, margin: 0 }}>
        <img
          className="cover-img"
          alt="Total PT Connect Patient Grid"
          src={TotalConnectPatientGrid}
          onClick={() => openLightbox(TotalConnectPatientGrid, "Total PT Connect Patient Grid")}
          style={{ cursor: 'pointer', display: 'block', width: '100%', height: 'auto' }}
        />
      </div>

      {/* ---------------------------------------------- MESSAGING & BRANDING ---------------------------------------------- */}
      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Brand Messaging</b>
          </div>
          <div className="paragraph">
            Total PT Connect bridges the gap between traditional physical therapy practice and modern digital healthcare solutions, emphasizing accessibility, trust, and professional excellence.
          </div>
          <div className="paragraph">
            The messaging strategy focuses on empowering healthcare providers with intuitive tools while maintaining the human connection that's essential to effective physical therapy treatment.
          </div>
        </div>
        <div className="half-section image-side" style={{ marginTop: '-12.5%', marginBottom: '-12.5%' }}>
          <img
            className="history-cover-img"
            alt="Total PT Connect Messaging"
            src={TotalConnectMessaging}
            onClick={() => openLightbox(TotalConnectMessaging, "Total PT Connect Messaging")}
            style={{ cursor: 'pointer', transform: 'scale(0.75)', maxWidth: '400px' }}
          />
        </div>
      </div>

      {/* ---------------------------------------------- APPLICATION MOCKUPS ---------------------------------------------- */}
      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Calendar Management</b>
          </div>
          <div className="paragraph">
            The integrated calendar system allows therapists to efficiently manage appointments, view patient schedules, and coordinate treatment sessions across multiple locations.
          </div>
          <div className="paragraph">
            Smart scheduling features help optimize therapist availability while providing patients with flexible booking options that work with their busy schedules.
          </div>
        </div>
        <div className="half-section image-side" style={{ marginTop: '-12.5%', marginBottom: '-12.5%' }}>
          <img
            className="history-cover-img"
            alt="Total PT Connect Calendar Mockup"
            src={TotalConnectMockupCalendar}
            onClick={() => openLightbox(TotalConnectMockupCalendar, "Total PT Connect Calendar Mockup")}
            style={{ cursor: 'pointer', transform: 'scale(0.75)', maxWidth: '400px' }}
          />
        </div>
      </div>

      {/* ---------------------------------------------- STATISTICS TRACKING ---------------------------------------------- */}
      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Performance Analytics</b>
          </div>
          <div className="paragraph">
            Comprehensive analytics dashboard provides real-time insights into practice performance, patient outcomes, and treatment effectiveness across all therapy programs.
          </div>
          <div className="paragraph">
            Data-driven reporting helps therapists make informed decisions about treatment plans while demonstrating measurable progress to patients and insurance providers.
          </div>
        </div>
        <div className="half-section image-side" style={{ marginTop: '-12.5%', marginBottom: '-12.5%' }}>
          <img
            className="history-cover-img"
            alt="Total PT Connect Stats Mockup"
            src={TotalConnectMockupStats}
            onClick={() => openLightbox(TotalConnectMockupStats, "Total PT Connect Stats Mockup")}
            style={{ cursor: 'pointer', transform: 'scale(0.75)', maxWidth: '400px' }}
          />
        </div>
      </div>

      {/* ---------------------------------------------- PLATFORM SCREENS ---------------------------------------------- */}
      <div className="section-2">
        <div className="content-2">
          <div className="top">
            <b className="secondary-headline">Platform Interface</b>
          </div>
          <div className="paragraph-2">
            The platform interface was designed to be intuitive for healthcare professionals while maintaining the sophisticated functionality required for modern physical therapy practice management.
          </div>
        </div>
      </div>

      <div className=" py-3 px-5 mb-1">
        <img
          className="cover-img"
          alt="Total PT Connect Platform Screens"
          src={TotalConnectScreens}
          onClick={() => openLightbox(TotalConnectScreens, "Total PT Connect Platform Screens")}
          style={{ cursor: 'pointer' }}
        />
      </div>

      {/* ---------------------------------------------- PATIENT MANAGEMENT ---------------------------------------------- */}
      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Patient Management</b>
          </div>
          <div className="paragraph">
            Comprehensive patient management tools provide therapists with organized views of patient information, treatment progress, and detailed reporting capabilities.
          </div>
          <div className="paragraph">
            The patient reporting system allows for detailed tracking of individual progress, treatment outcomes, and comprehensive documentation for insurance and medical record purposes.
          </div>
        </div>
        <div className="half-section image-side">
          <img
            className="history-cover-img"
            alt="Total PT Connect Patient Report"
            src={TotalConnectPatientReport}
            onClick={() => openLightbox(TotalConnectPatientReport, "Total PT Connect Patient Report")}
            style={{ cursor: 'pointer' }}
          />
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

export default TotalPtConnect;
