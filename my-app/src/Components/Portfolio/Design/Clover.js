import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "../../TopNav";
import PortfolioNav from "../../PortfolioNav";

import Logo from "./img/logo.jpg";
import "../../App.css";
import GraphicDesignBody from "../../GraphicDesignBody";
import PortfolioNavigationArrows from "./PortfolioNavigationArrows";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

import CloverHero from './img/Clover/clover-hero.png';
import CloverEmpathyMap1 from './img/Clover/clover-empathy-map-1.png';
import CloverEmpathyMap2 from './img/Clover/clover-empathy-map-2.png';
import CloverEmpathyMap from './img/Clover/clover-empathy-map.png';
import CloverFlow from './img/Clover/clover-flow.png';
import CloverMock1 from './img/Clover/clover-mockup-1.png';
import CloverMock2 from './img/Clover/clover-mockup-2.png';
import CloverPersona from './img/Clover/clover-persona.png';
import CloverPlayerStats from './img/Clover/clover-player-stats.png';
import CloverLogo from './img/Clover/clover-logo.png';
import CloverColors from './img/Clover/clover-colors.png';
import CloverMockupsTiles from './img/Clover/clover-mockups-tiles.png';
import CloverTypeHeader from './img/Clover/clover-type-header.png';
import CloverTypeWeights from './img/Clover/clover-type-weights.png';
import CloverDesignSystem from './img/Clover/clover-design-system.png';
import CloverDesignSystemCollage from './img/Clover/clover-design-system-collage.png';
import CloverDesignSystemSnapshot from './img/Clover/clover-design-system-snapshot.png';
import CloverPrototypeNodes from './img/Clover/clover-prototype-nodes.png';
import CloverSketches from './img/Clover/clover-sketches.png';
import CloverTabletTrio from './img/Clover/clover-tablet-trio.png';
import CloverWireframes from './img/Clover/clover-wireframes.png';
import GolfSurvey from './img/Clover/golf-survey.png';

// Import Figma icon
import FigmaIcon from '../../img/icons/figma-logo-icon-md.png';

function Clover() {
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
      <PortfolioNavigationArrows currentPath="/clover" />

      <div data-aos="fade" data-aos-anchor-placement="top-bottom" className="px-3">

        {/* ----------------------- HERO SECTION ----------------------------------- */}
        <div className="section-auto pt-5">
          <div className="half-section text-side">
            <div className="top">
              <img className="clover-logo" src={CloverLogo} alt="History Zine Cover" />
            </div>
            {/* <div className="paragraph">
              {`A native mobile team tracking and player development application for golfers, coaches and trainers. `}
            </div> */}
            <div className="paragraph">
              {`Clover is native mobile application designed for golf coaches and instructors, providing a  simple, practical and affordable tool to centralize all  team and player performance, scheduling and communications into a single application. Players and coaches can upload  individual and group scorecards, view individual and team statistics, keep track of practice and competition schedules, and communicate directly with one another in private and groups chats all from within this single application. `}
            </div>
            <div className="paragraph">
              <div className="d-flex gap-3 flex-column flex-sm-row">
                <a
                  href="https://www.figma.com/design/1ApWmH5DGwrUkiwd5KdMIU/Clover?node-id=1-9&t=vWCodqNBvywDHZZh-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-4 d-flex align-items-center justify-content-center"
                  role="button"
                  style={{ padding: '12px 10px' }}
                >
                  <img src={FigmaIcon} alt="Figma" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                  Design File
                </a>
                <a
                  href="https://www.figma.com/proto/4RRNfRgjYw8FdSWIKTInCJ/JM-Crawford_Product?page-id=1%3A2&node-id=574-31315&starting-point-node-id=574%3A31309&t=qzU4GgmWVpqbeHsY-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-4 d-flex align-items-center justify-content-center"
                  role="button"
                  style={{ padding: '12px 20px' }}
                >
                  <img src={FigmaIcon} alt="Figma" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                  Prototype
                </a>
                <a
                  href="/docs/Process_JM_Crawford_Clover.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-4 d-flex align-items-center justify-content-center"
                  role="button"
                  style={{ padding: '12px 20px' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px' }}>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#24292E" strokeWidth="1.5" fill="none" />
                    <polyline points="14,2 14,8 20,8" stroke="#24292E" strokeWidth="1.5" fill="none" />
                    <line x1="16" y1="13" x2="8" y2="13" stroke="#24292E" strokeWidth="1.5" />
                    <line x1="16" y1="17" x2="8" y2="17" stroke="#24292E" strokeWidth="1.5" />
                    <polyline points="10,9 9,9 8,9" stroke="#24292E" strokeWidth="1.5" />
                  </svg>
                  Process Book
                </a>
              </div>
            </div>
          </div>
          <div className="half-section image-side">
            <img
              className="history-cover-img"
              src={CloverHero}
              alt="Clover Hero Image"
              onClick={() => openLightbox(CloverHero, "Clover Hero Image")}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* -------------------------------------- Research -------------------------------------- */}
        <div className="section-2 my-5 mb-5">
          <div className="content-2 text-center">
            <div className="top">
              <b className="secondary-headline text-center">Research</b>
            </div>
            <div className="paragraph-2 text-center">
              {`I began my research by gathering feedback from a local High School golf team, interviewing an assistant coach as well as a varsity golfer. I then constructed user empathy maps and personas to consolidate and identify the core user motivations, goals and pain points of their current experiences. `}
            </div>
          </div>
        </div>

  {/* ---------------------------------- Interviews ---------------------------- */}

        <div className="section-auto my-5 mb-5 mt-5">
          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">Interviews</b>
            </div>
            
            <div className="paragraph">
              {`Interviews were structured into 6 distinct sections, each focused on addressing a specific area of the empathy map - what the user is thinking/feeling, what they see, what they hear, what they say/do, and what their pros and cons were. Following this structure helped to automate data gathering and consolidation, and quickly identify key insights. `}
            </div>
          </div>
          <div className="half-section image-side">
            <img
              className="history-cover-img"
              src={GolfSurvey}
              alt="Clover Survey Image"
              onClick={() => openLightbox(GolfSurvey, "Clover Survey Image")}
              style={{ cursor: 'pointer', width: '75%', height: 'auto' }}
            />
          </div>
        </div>

        {/* ---------------------------------- Empathy Maps ---------------------------- */}
        <div className="top mt-5">
          <b className="secondary-headline text-center">User Empathy Maps</b>
        </div>
        <div className="section-2">
          <div className="half-section image-side">
            <img
              className="empathy-map-img"
              src={CloverEmpathyMap1}
              alt="Clover Empathy Map 1"
              onClick={() => openLightbox(CloverEmpathyMap1, "Clover Empathy Map 1")}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="half-section image-side">
            <img
              className="empathy-map-img"
              src={CloverEmpathyMap2}
              alt="Clover Empathy Map 2"
              onClick={() => openLightbox(CloverEmpathyMap2, "Clover Empathy Map 2")}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* --------------------------- Ideal User ---------------------------------------------- */}
        <div className="section-2">
          <div className="content-2">
            <div className="top">
              <b className="secondary-headline text-center">Ideal User</b>
            </div>
            <div className="paragraph-2 text-center">
              {`By creating a user persona of an ideal user I was able to identify the motivations, goals and pain points that needed to be addressed in the concept & design. My key findings indicated that amateur golf teams face a small budget, limited time and resources, and inadequate facilities at their home course. Using these findings, I could now begin formulating solutions to each of these obstacles in the concept and initial UI designs. `}
            </div>
          </div>
        </div>

        {/* ------------------------------- PERSONA SECTION ---------------------------------------------- */}
        <div className="top mt-5">
          <b className="secondary-headline text-center">User Persona</b>
        </div>
        <div className="section-auto mb-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            className="cover-img"
            src={CloverPersona}
            alt="Clover Persona"
            onClick={() => openLightbox(CloverPersona, "Clover Persona")}
            style={{ cursor: 'pointer', width: '85%', height: 'auto', margin: '20px auto', display: 'block' }}
          />
        </div>



        {/* ----------------------------- Pain Points & Goals ------------------------------------ */}
        <div className="section-2" style={{ 
          display: 'flex', 
          alignItems: 'stretch',
          gap: '2rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          paddingTop: '20px'
        }}>
          <div className="half-section text-side" style={{ 
            flex: '1',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <ul style={{ 
              listStyle: 'none',
              margin: 0,
              padding: '1.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <li className="top">
                <b className="secondary-headline" style={{ padding: '10px 0px' }}>Pain Points</b>
              </li>
              <li className="paragraph" style={{ paddingLeft: '1rem', paddingRight: '0rem', position: 'relative', lineHeight: '1.6' }}>
                <span style={{ position: 'absolute', left: '-10px', top: 'calc(0.1em + 2px)', fontSize: '16px', color: 'var(--color-silver)' }}>◆</span>
                {`Limited time/availability (coaches & players) `}
              </li>
              <li className="paragraph" style={{ paddingLeft: '1rem', paddingRight: '0rem', position: 'relative', lineHeight: '1.6' }}>
                <span style={{ position: 'absolute', left: '-10px', top: 'calc(0.1em + 2px)', fontSize: '16px', color: 'var(--color-silver)' }}>◆</span>
                {`All communication is decentralized - relying on text messaging and email`}
              </li>
              <li className="paragraph" style={{ paddingLeft: '1rem', paddingRight: '0rem', position: 'relative', lineHeight: '1.6' }}>
                <span style={{ position: 'absolute', left: '-10px', top: 'calc(0.1em + 2px)', fontSize: '16px', color: 'var(--color-silver)' }}>◆</span>
                {`Small budget/Inadequate facilities/limited resources `}
              </li>
              <li className="paragraph" style={{ paddingLeft: '1rem', paddingRight: '0rem', position: 'relative', lineHeight: '1.6' }}>
                <span style={{ position: 'absolute', left: '-10px', top: 'calc(0.1em + 2px)', fontSize: '16px', color: 'var(--color-silver)' }}>◆</span>
                {`All scorecards and training data is manually entered into Excel spreadsheets `}
              </li>
            </ul>
          </div>

          <div className="half-section text-side" style={{ 
            flex: '1',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <ul style={{ 
              listStyle: 'none',
              margin: 0,
              padding: '1.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <li className="top">
                <b className="secondary-headline" style={{ padding: '10px 0px' }}>Goals</b>
              </li>
              <li className="paragraph" style={{ paddingLeft: '1rem', paddingRight: '0rem', position: 'relative', lineHeight: '1.6' }}>
                <span style={{ position: 'absolute', left: '-10px', top: 'calc(0.1em + 2px)', fontSize: '16px', color: 'var(--color-silver)' }}>◆</span>
                {`Make team and player scheduling easier to track/manage (practice, matches, tournaments) `}
              </li>
              <li className="paragraph" style={{ paddingLeft: '1rem', paddingRight: '0rem', position: 'relative', lineHeight: '1.6' }}>
                <span style={{ position: 'absolute', left: '-10px', top: 'calc(0.1em + 2px)', fontSize: '16px', color: 'var(--color-silver)' }}>◆</span>
                {`Optimize team communication (messaging - group + individual)`}
              </li>
              <li className="paragraph" style={{ paddingLeft: '1rem', paddingRight: '0rem', position: 'relative', lineHeight: '1.6' }}>
                <span style={{ position: 'absolute', left: '-10px', top: 'calc(0.1em + 2px)', fontSize: '16px', color: 'var(--color-silver)' }}>◆</span>
                {`Automate/simplify collection of player scores and training data `}
              </li>
              <li className="paragraph" style={{ paddingLeft: '1rem', paddingRight: '0rem', position: 'relative', lineHeight: '1.6' }}>
                <span style={{ position: 'absolute', left: '-10px', top: 'calc(0.1em + 2px)', fontSize: '16px', color: 'var(--color-silver)' }}>◆</span>
                {`Maximize what is currently available within budget constraints to help coaches track, analyze and communicate with players more effectively `}
              </li>
            </ul>
          </div>
        </div>

        

        {/* -------------------------------------- User Flow -------------------------------------- */}
        <div className="section-2">
          <div className="content-2 text-center">
            <div className="top">
              <b className="secondary-headline text-center">User Flow</b>
            </div>
            <div className="paragraph-2 text-center">
              {`I constructed a User Flow Chart of the core navigation, focusing on keeping the system simple and centered around a primary home screen, where the user can access every core feature easily with a single click. The home screen contains a call to action button to access the feature that allows users to either take a picture of their scorecard, upload a picture, or manually enter their scores. The remaining core features of the application are accessible through a bottom navigation bar, giving the user access to the home page, stats, calendar and chat from anywhere within the application. `}
            </div>
          </div>
        </div>

        {/* ------------------------------------ Core Navigation ------------------------------------ */}
        <div className="top mt-5">
          <b className="secondary-headline text-center">Core Navigation </b>
        </div>
        <div className="section-auto" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            className="cover-img"
            src={CloverFlow}
            alt="Clover Flow"
            onClick={() => openLightbox(CloverFlow, "Clover Flow")}
            style={{ cursor: 'pointer', width: '85%', height: 'auto', margin: '0 auto', display: 'block' }}
          />
        </div>

        {/* ------------------------------------ Sketches ------------------------------------ */}
        <div className="section-auto mt-5">
          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">Sketches</b>
            </div>
            <div className="paragraph">
              {`My initial sketches were focused on building the home screen, focused on how to provide easily recognizable and thoughtfully placed feature navigation elements to ensure that the foundation of the user experience (home screen) set the tone for the flow and navigation of the application experience once the user began to click through each feature. `}
            </div>
          </div>
          <div className="half-section image-side">
            <img
              className="history-cover-img"
              src={CloverSketches}
              alt="Clover Survey Image"
              onClick={() => openLightbox(CloverSketches, "Clover Survey Image")}
              style={{ cursor: 'pointer', width: '90%', height: 'auto' }}
            />
          </div>
        </div>
        
        {/* ------------------------------------ Wireframes------------------------------------ */}
        <div className="section-auto mt-5">
          <div className="half-section image-side">
            <img
              className="history-cover-img"
              src={CloverWireframes}
              alt="Clover Survey Image"
              onClick={() => openLightbox(CloverWireframes, "Clover Survey Image")}
              style={{ cursor: 'pointer', width: '90%', height: 'auto' }}
            />
          </div>
          
          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">Wireframes</b>
            </div>
            
            <div className="paragraph">
              {`At this stage a majority of my design decisions were made, focusing on building the authentication pages and home page first before moving on to the core feature pages.  When building the low-fidelity wireframes, I tried to push the styling as much as I could without getting bogged down in the design. This helped me to work out a lot of the style choices early on that would normally be the focus in high-fidelity comps in the next iteration. The User Flow Chart that I created served as a road map which pages to build and how each of them connected into the complete application structure. `}
            </div>
          </div>
          
        </div>

        {/* ------------------------------------ High-Fidelity Prototype------------------------------------ */}
        <div className="section-auto mt-5">
          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">Prototype</b>
            </div>
            
            <div className="paragraph">
              {`For these designs, I used simple card and bento box layouts to balance visual weight and group elements. The dark-to-light green gradient background reflects a prominent color in golf. I chose light-to-dark oranges as secondary colors to create contrast and guide the user's eye to focal areas. White typography and icons also draw attention to key navigation and titles. A subtle drop shadow on elements like navigation and call-to-action components adds a slight sense of depth, helping to differentiate between core features and secondary pages. `}
            </div>
          </div>
          <div className="half-section image-side">
            <img
              className="history-cover-img"
              src={CloverPrototypeNodes}
              alt="Clover Survey Image"
              onClick={() => openLightbox(CloverPrototypeNodes, "Clover Survey Image")}
              style={{ cursor: 'pointer', width: '100%', height: 'auto' }}
            />
          </div>
        </div>

        {/* ----------------------------- Atomic Design System --------------------------- */}
        <div className="top mt-5">
          <b className="secondary-headline text-center">Atomic Design System </b>
        </div>
        
        <div className="section-auto">
          <img
            className="cover-img"
            src={CloverDesignSystemCollage}
            alt="Clover Flow"
            onClick={() => openLightbox(CloverDesignSystemCollage, "Clover Flow")}
            style={{ cursor: 'pointer', width: '100%', height: 'auto' }}
          />
        </div>

        <div className="paragraph-2 text-center mb-5">
            {`This was my first time building a design system, and it didn't take long to see the huge benefits of following atomic design principles from the bottom up while building prototype in Figma. Although tedious at first, once I had my local styles, colors , and effects established and all of my core page elements constructed into components - the application began to come together really quickly. The further I progressed and the more components I built, constructing pages became more drag and drop, allowing me to spend more time working on connecting pages for the prototype and adding micro-interactions and transition animations for key user moments like uploading a scorecard, submitting a score manually or completing a daily task. `}
          </div>

        {/* ------------------------------------ Features ------------------------------------ */}
        <div className="section-auto mt-5">
          <div className="half-section text-side mx-5">
            <div className="top">
              <b className="secondary-headline px-0">Centralized Team Hub</b>
            </div>
            <div className="paragraph-no-padding mt-0 pt-0">
              {`Coaches and players can track and manage their daily practice and competition schedules as well as  communicate directly through private and group chats. `}
            </div>

            <div className="top pt-2">
              <b className="secondary-sub-headline">Create Scheduled Events</b>
            </div>
            <div className="paragraph-no-padding pt-0">
              {`Create, manage, and track scheduled team and individual events for competition, practice rounds, or skills training. `}
            </div>

            <div className="top pt-2">
              <b className="secondary-sub-headline">Group & Individual Messaging</b>
            </div>
            <div className="paragraph-no-padding pt-0">
              {`Team, group, and individual communications in one place - ensuring the team is always connected. `}
            </div>

          </div>
          <div className="half-section image-side">
            <img
              className="clover-mock-img"
              src={CloverMock1}
              alt="Clover Mockup 1"
              onClick={() => openLightbox(CloverMock1, "Clover Mockup 1")}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* ---------------------------------------------- SECTION 1 ---------------------------------------------- */}
        <div className="section-auto">
          <div className="half-section text-side mx-5">
            <div className="top">
              <b className="secondary-headline px-0">Flexible Score Tracking</b>
            </div>
            <div className="paragraph-no-padding mt-0 pt-0">
              {`Players can upload their practice and competition round scores by either taking a picture of their scorecard or entering their scores manually through the digital scorecard entry feature. `}
            </div>

            <div className="top pt-2">
              <b className="secondary-sub-headline">Upload Scorecards</b>
            </div>
            <div className="paragraph-no-padding pt-0">
              {`Upload a photo of your scorecard to automatically enter your scores. `}
            </div>

            <div className="top pt-2">
              <b className="secondary-sub-headline">Track Team and Player Progress</b>
            </div>
            <div className="paragraph-no-padding pt-0">
              {`Monitor the progress of individual players and the team as a whole through detailed analytics and reporting features. `}
            </div>

          </div>
          <div className="half-section image-side">
            <img
              className="clover-mock-img"
              src={CloverMock2}
              alt="Clover Mockup 2"
              onClick={() => openLightbox(CloverMock2, "Clover Mockup 2")}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* ---------------------------------------------- COLOR PALETTE ---------------------------------------------- */}
        {/* <div className="section-2 mb-1" style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            className="cover-img"
            alt="Clover Color Palette"
            src={CloverColors}
            onClick={() => openLightbox(CloverColors, "Clover Color Palette")}
            style={{ cursor: 'pointer', maxWidth: '85%', height: 'auto' }}
          />
        </div> */}

        {/* ---------------------------------------------- TYPOGRAPHY ---------------------------------------------- */}

        {/* <div className="section-2">
          <div className="half-section image-side">
            <img
              className="cover-img"
              alt="Clover Type Headers"
              src={CloverTypeHeader}
              onClick={() => openLightbox(CloverTypeHeader, "Clover Type Headers")}
              style={{ cursor: 'pointer', maxWidth: '60%', height: 'auto' }}
            />
          </div>
          <div className="half-section image-side">
            <img
              className="cover-img"
              alt="Clover Type Weights"
              src={CloverTypeWeights}
              onClick={() => openLightbox(CloverTypeWeights, "Clover Type Weights")}
              style={{ cursor: 'pointer', maxWidth: '60%', height: 'auto' }}
            />
          </div>
        </div> */}

       {/* ------------------------ Tablet Mockups ------------------------------ */}

        <div className="section-auto" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            className="cover-img"
            alt="Clover Mockups Tiles"
            src={CloverTabletTrio}
            onClick={() => openLightbox(CloverTabletTrio, "Clover Mockups Tiles")}
            style={{ cursor: 'pointer', width: '100%', height: 'auto', paddingBottom: '20px',paddingTop: '20px', margin: '0 auto', display: 'block' }}
          />
        </div>

        {/* ------------------------------Mobile Tiles ---------------------------------- */}

        <div className="section-auto" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            className="cover-img"
            alt="Clover Mockups Tiles"
            src={CloverMockupsTiles}
            onClick={() => openLightbox(CloverMockupsTiles, "Clover Mockups Tiles")}
            style={{ cursor: 'pointer', width: '85%', height: 'auto', paddingBottom: '60px', margin: '0 auto', display: 'block' }}
          />
        </div>

         {/* ------------------- Reflection ---------------------------- */}
        <div className="section-2">
          <div className="content-2">
            <div className="top">
              <b className="secondary-headline text-center">Reflection</b>
            </div>
            <div className="paragraph-2 text-center">
              {`Clover brings every aspect of team management into one place—practice and competition schedules, score tracking, stats, and communication—so coaches can stay organized and connected with minimal time and effort. Players can upload scores instantly with a photo, eliminating manual data entry and making performance tracking effortless. By focusing on optimizing the team and player experience within the constraints of a small budget, Clover delivers a simple, practical tool that keeps the entire program running smoothly, no matter where coaches or players are. `}
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
 
      </div>

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

export default Clover;
