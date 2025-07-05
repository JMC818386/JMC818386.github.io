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
            {`A collection of Zines (miniature magazine) combining elements of modern Swiss style layout with grunge typography to explore the notion of readability in philosophy. Printed in color process with a Risograph printer on assorted papers. `}
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
            src={MD99MockupMobile} 
            alt="MD99 Mobile Mockup" 
            onClick={() => openLightbox(MD99MockupMobile, "MD99 Mobile Mockup")}
            style={{ cursor: 'pointer' }}
          />
        </div>
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
            src={MD99Persona1} 
            alt="MD99 Persona 1" 
            onClick={() => openLightbox(MD99Persona1, "MD99 Persona 1")}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Persona 1</b>
          </div>
          <div className="paragraph">
            {`This series reflects a personal creative process—merging structured design principles with abstract experimentation. By pairing Stoicism’s logic and discipline with ambitious, unconventional layouts, the work offers both an artistic expression and an accessible introduction to Stoic thought. `}
          </div>
        </div>
      </div>

           {/* ---------------------------------------------- SECTION 1 ---------------------------------------------- */}
      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Persona 2</b>
          </div>
          <div className="paragraph">
            {`The first zine, Stoked on Stoicism, contrasts the philosophy’s intrinsic ideals with a mix of non-linear, grunge-style typography and a structured, modern layout. This interplay creates visual tension, reinforcing the balance between order and abstraction. `}
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
