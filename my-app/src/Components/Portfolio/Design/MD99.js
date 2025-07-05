import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "../../TopNav";
import PortfolioNav from "../../PortfolioNav";
import Footer from "../../Footer";
import Logo from "./img/logo.jpg";
import "../../App.css";
import GraphicDesignBody from "../../GraphicDesignBody";
import PortfolioNavigationArrows from "./PortfolioNavigationArrows";
import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

import MD99DesktopUI from './img/MD99/md99-desktop-ui.png';
import MD99EditorRadial from './img/MD99/md99-editor-radial.png';
import MD99MockupCreate from './img/MD99/md99-mockup-create.png';
import MD99MockupDocs from './img/MD99/md99-mockup-docs.png';
import MD99MockupEditor from './img/MD99/md99-mockup-editor.png';
import MD99MockupMobile from './img/MD99/md99-mockup-mobile.png';
import MD99Persona1 from './img/MD99/md99-persona-1.png';
import MD99Persona2 from './img/MD99/md99-persona-2.png';

function MD99() {
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    AOS.init({
        duration: 1250,
        once: true,
    });  
}, []);

  const openLightbox = (imageSrc, imageAlt) => {
    setLightboxImage({ src: imageSrc, alt: imageAlt });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('lightbox-backdrop')) {
      closeLightbox();
    }
  };

  return (
    <div className="bg-main-dark">
      <TopNav />
      <PortfolioNav />
      <PortfolioNavigationArrows currentPath="/md99" />

      <div data-aos="fade" data-aos-anchor-placement="top-bottom">

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="lightbox-backdrop" onClick={handleBackdropClick}>
          <div className="lightbox-container">
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>
            <img 
              src={lightboxImage.src} 
              alt={lightboxImage.alt} 
              className="lightbox-image"
            />
          </div>
        </div>
      )}

      {/* ---------------------------------------------- HERO SECTION ---------------------------------------------- */}
      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">MD99</b>
          </div>
          <div className="paragraph">
            {`MD99 is a cutting-edge web-based platform designed to revolutionize the way developers create and deploy dynamic KPI graphics. It bridges the gap between data visualization and web development, offering a seamless way to generate, customize, and integrate performance metrics with minimal effort. Built with flexibility and efficiency in mind, MD99 enables both front-end and back-end developers to visualize key performance indicators instantly, without needing extensive design experience `}
          </div>
        </div>
        <div className="half-section image-side">
          <img 
            className="history-cover-img" 
            src={MD99MockupEditor} 
            alt="MD99 Mockup Editor" 
            onClick={() => openLightbox(MD99MockupEditor, "MD99 Mockup Editor")}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* ---------------------------------------------- SECTION 4 ---------------------------------------------- */}
      <div className="section-2 mt-5">
        <div className="content-2">
          <div className="section-text-2">
            <div className="top">
              <b className="secondary-headline">Concept</b>
            </div>
            <div className="paragraph-2">
              {`The platform leverages server-side rendering to deliver optimized, fast-loading graphics that can be embedded directly into web applications via a simple API call. By focusing exclusively on single-value KPIs, MD99 provides an innovative solution for professionals who need clear, concise, and impactful data representation. With pre-designed templates, automated asset management, and a streamlined workflow, MD99 transforms the traditionally complex process of data visualization into an intuitive, scalable experience. `}
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
            {`MD99 empowers developers with a robust dynamic route system that enables the creation of real-time data visuals tailored to specific reporting needs. Whether for small team analytics or enterprise-scale dashboards, developers can generate and modify visuals on demand. `}
          </div>
        </div>
        <div className="half-section image-side">
          <img 
            className="cover-img" 
            src={MD99MockupMobile} 
            alt="MD99 Mobile Mockup" 
            onClick={() => openLightbox(MD99MockupMobile, "MD99 Mobile Mockup")}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* ---------------------------------------------- SECTION 2 ---------------------------------------------- */}

      <div className="section">
        <div className="half-section image-side">
          <img 
            className="cover-img" 
            src={MD99Persona1} 
            alt="MD99 Persona 1" 
            onClick={() => openLightbox(MD99Persona1, "MD99 Persona 1")}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">No-Code Data Visualization Builder</b>
          </div>
          <div className="paragraph">
            {`The Asset Builder provides an easy-to-use interface for customizing KPI graphics without requiring advanced coding knowledge. Users can instantly deploy their visuals via a unique image URL, making data integration effortless. `}
          </div>
        </div>
      </div>


      {/* ---------------------------------------------- SECTION 4 ---------------------------------------------- */}
      <div className="section-2">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Intuitive Asset Control</b>
          </div>
          <div className="paragraph">
            {`The dashboard acts as the central hub for managing, updating, and organizing data assets. Developers can create, edit, and control their visual elements with ease, while also managing public and secret API keys for security. `}
          </div>
        </div>

        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Automated & Scalable API Integration</b>
          </div>
          <div className="paragraph">
            {`Built on a scalable AWS infrastructure, MD99 delivers high-performance asset rendering that ensures speed and reliability. The system supports automated updates and refreshes, allowing for real-time KPI adjustments without manual intervention. `}
          </div>
        </div>
      </div>

      {/* ---------------------------------------------- SECTION 2 ---------------------------------------------- */}
      <div className="section">
        <div className="half-section image-side">
          <img 
            className="cover-img" 
            src={MD99Persona1} 
            alt="MD99 Persona 1" 
            onClick={() => openLightbox(MD99Persona1, "MD99 Persona 1")}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">The Challenge</b>
          </div>
          <div className="paragraph">
            {`Developers often struggle to integrate dynamic performance graphics into their applications due to the complexity of designing, deploying, and maintaining them. Traditional visualization tools are either too rigid, requiring extensive setup, or too complex, demanding a significant learning curve. Additionally, many existing solutions lack real-time rendering capabilities, slowing down decision-making processes. `}
          </div>
        </div>
      </div>

           {/* ---------------------------------------------- SECTION 1 ---------------------------------------------- */}
      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">The Solution</b>
          </div>
          <div className="paragraph">
            {`With automated asset management, scalable AWS hosting, and a self-service model, MD99 ensures that developers can focus on functionality while enjoying a seamless visualization experience. By combining simplicity with cutting-edge server-side rendering, MD99 redefines how developers interact with real-time data. `}
          </div>
        </div>
        <div className="half-section image-side">
          <img 
            className="cover-img" 
            src={MD99Persona2} 
            alt="MD99 Persona 2" 
            onClick={() => openLightbox(MD99Persona2, "MD99 Persona 2")}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* ---------------------------------------------- SECTION 3 ---------------------------------------------- */}
      <div className="section mb-5 pb-5">
        <img 
          className="cover-img" 
          src={MD99MockupDocs} 
          alt="MD99 Documentation Mockup" 
          onClick={() => openLightbox(MD99MockupDocs, "MD99 Documentation Mockup")}
          style={{ cursor: 'pointer' }}
        />
      </div>

      {/* ----------------------------------------------CONTENT END ---------------------------------------------- */}
      <GraphicDesignBody />
      <Footer />
      </div>
    </div>
  );
}

export default MD99;
