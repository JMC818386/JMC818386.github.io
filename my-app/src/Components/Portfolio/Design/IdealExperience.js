import DalleUi from './img/IdealExperience/dalle-ui.png';
import MidjourneyUi from './img/IdealExperience/midjourney-ui.png';
import FireflyUi from './img/IdealExperience/firefly-ui.png';
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
import IdealExperienceBooklet from './IdealExperienceBooklet';

import IdealXCover from './img/IdealExperience/ideal-x-cover.png';
import IdealXEcosystem from './img/IdealExperience/ideal-x-ecosystem-map.png';
import IdealXEmpowered from './img/IdealExperience/ideal-x-empowered.png';
import IdealXFramework from './img/IdealExperience/ideal-x-framework.png';
import IdealXFullSpread from './img/IdealExperience/ideal-x-full-spread.png';
import IdealXSpreads from './img/IdealExperience/ideal-x-spreads.png';
import DallEIcon from './img/IdealExperience/dall-e-icon.png';
import MidjourneyIcon from './img/IdealExperience/midjourney-icon.png';
import FireflyIcon from './img/IdealExperience/firefly-icon.png';

// New research images
import IdealXAffinityMap from './img/IdealExperience/ideal-x-affinity-map.png';
import IdealXBookSpread from './img/IdealExperience/ideal-x-book-spread.png';
import IdealXDataPoints1 from './img/IdealExperience/ideal-x-data-points-1.png';
import IdealXDataPoints2 from './img/IdealExperience/ideal-x-data-points-2.png';
import IdealXFindingsCollage from './img/IdealExperience/ideal-x-findings-collage.png';
import IdealXFrameworkModel from './img/IdealExperience/ideal-x-framework-model.png';
import IdealXHolyTacos from './img/IdealExperience/ideal-x-holy-tacos.png';
import IdealXNewbies from './img/IdealExperience/ideal-x-newbies.png';
import IdealXObservations from './img/IdealExperience/ideal-x-observations.png';
import IdealXSecondaryResearch from './img/IdealExperience/ideal-x-secondary-research.png';
import IdealXSurveyResponses from './img/IdealExperience/ideal-x-survey-responses.png';

function IdealExperience() {
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
      <PortfolioNavigationArrows currentPath="/ideal-experience" />

      <div data-aos="fade" data-aos-anchor-placement="top-bottom">

        {/* ---------------------------------------------- HERO SECTION ---------------------------------------------- */}
        <div className="section">
          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">Ideal GenAI Experience</b>
            </div>
            <div className="paragraph">
              {`For this project, myself and three classmates conducted a 10-week comprehensive user experience research study to see if we could conceptualize what the ideal experience would be while using OpenAi's DALL-E, Adobe's Firefly, and Midjourney. By following the Lextant ideal model framework as our guide, we were able to take a deep dive into this new and exciting technology. Each member of the team completed this project remotely, utilizing Miro, Google, and Discord to organize and manage project requirements. `}
            </div>
            <div className="paragraph">
              <div className="d-flex gap-3 flex-column flex-sm-row">
                <a
                  href="/docs/Process_JM_Crawford_IdealExperience.pdf"
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
                <a
                  href="/docs/Ideal_Experience_Booklet.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-4 d-flex align-items-center justify-content-center"
                  role="button"
                  style={{ padding: '12px 20px' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px' }}>
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" stroke="#24292E" strokeWidth="1.5" fill="none" />
                    <path d="M12 10v6l3-3M12 16l-3-3" stroke="#24292E" strokeWidth="1.5" fill="none" />
                  </svg>
                  PDF Booklet
                </a>
              </div>
            </div>
            {/* <div className="paragraph">
              {`As a team we decided to base our research on "the ideal generative AI user experience." The focus is on how this powerful technology can boost creativity, make work easier, and offer personalized solutions while also tackling key challenges related to accuracy, transparency, and ethics. `}
            </div> */}
          </div>
          <div className="half-section image-side">
            <img
              className="history-cover-img"
              src={IdealXCover}
              alt="Ideal Experience Cover"
              onClick={() => openLightbox(IdealXCover, "Ideal Experience Cover")}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>


        {/* ---------------------------------------------- ICON ROW ---------------------------------------------- */}
        <div className="ideal-icons-row py-3 mb-0">
          <img src={DallEIcon} alt="DALL-E" className="ideal-icon-img" />
          <img src={MidjourneyIcon} alt="Midjourney" className="ideal-icon-img" />
          <img src={FireflyIcon} alt="Firefly" className="ideal-icon-img" />
        </div>

        {/* ---------------------------------------------- INTERACTIVE BOOKLET ---------------------------------------------- */}
        <div style={{ textAlign: 'center' }}>
          <b className="secondary-headline text-center mt-5">Interactive Experience</b>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div className="paragraph-2 text-center mb-5 pb-5">
            Explore our complete research findings and framework in this interactive booklet. Click and drag to turn pages and discover the full story of our ideal GenAI experience research.
          </div>
        </div>
        <div className="section-auto m-2 p-0">
          <IdealExperienceBooklet />
        </div>

        {/* ---------------------------------------------- METHODS SECTION ---------------------------------------------- */}
        <div className="section-2 methods-section">
          <div className="content-2 methods-content-center">
            <div className="top mb-4 text-center">
              <b className="secondary-headline text-center mt-5">Research Methods</b>
            </div>

            <div className="methods-grid">
              <div className="method-feature-box">
                <svg className="method-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="method-title">Secondary Research</h3>
              </div>

              <div className="method-feature-box">
                <svg className="method-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                  <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="method-title">Observational Research</h3>
              </div>

              <div className="method-feature-box">
                <svg className="method-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="8" y1="17" x2="12" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 18l1.5 1.5-1.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="method-title">Non-Participant Research</h3>
              </div>

              <div className="method-feature-box">
                <svg className="method-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                  <path d="M22 11l-3-3m0 0-3 3m3-3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="method-title">Participant Research</h3>
              </div>

              <div className="method-feature-box">
                <svg className="method-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="10" y="3" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="17" y="3" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="3" y="10" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="10" y="10" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="17" y="10" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="3" y="17" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="10" y="17" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="17" y="17" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="method-title">Affinity Mapping</h3>
              </div>

              <div className="method-feature-box">
                <svg className="method-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="12" y="3" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="20" y="3" width="2" height="4" rx="0.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="2" y="11" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="10" y="13" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="20" y="9" width="2" height="6" rx="0.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="2" y="17" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="16" y="17" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="method-title">Sensory Cue Analysis</h3>
              </div>
            </div>
          </div>
        </div>



        {/* Secondary Research Section */}
        <div className="section">
          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">Secondary Research</b>
            </div>
            <div className="paragraph">
              {`Through our secondary research we found that many designers use generative AI tools like DALL-E and Firefly as a tool to speed up their ideation process, allowing them to iterate through many more concepts and inspirations in a much shorter amount of time than doing without AI assistance. We also found that while a majority of people are excited about AI - there is still a sizable number of adults (38%) who have concerns about the social impact.`}
            </div>
          </div>
          <div className="half-section image-side">
            <img
              className="history-cover-img"
              src={IdealXSecondaryResearch}
              alt="Secondary Research"
              onClick={() => openLightbox(IdealXSecondaryResearch, "Secondary Research")}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>


        {/* ---------------------------------------------- SECTION 2 ---------------------------------------------- */}
        <div className="section">
          <div className="half-section image-side">
            <img
              className="cover-img"
              src={IdealXEcosystem}
              alt="Ideal Experience Ecosystem"
              onClick={() => openLightbox(IdealXEcosystem, "Ideal Experience Ecosystem")}
              style={{ cursor: 'pointer', maxWidth: '75%', height: 'auto' }}
            />
          </div>
          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">User Ecosystem Map</b>
            </div>
            <div className="paragraph">
              {`Following our secondary research, we began building a user ecosystem map to show how the user interacts with and relates to different individuals, groups, tools and businesses as a GenAI user. By constructing this ecosystem map, we were able to see each possible influence and it’s proximity to the user and their subjective experience. This helped us to gain a better understanding of all the factors that the user interacts with, positioned in order of importance from the center of the map representing individuals closest to the user to the outer ring that shows the wider organizations and institutions that operate and regulate the Generative AI tools we are studying. `}
            </div>

          </div>
        </div>

        {/* Holy Tacos Image */}
        <div className="section-2">
          <div className="content-2">
            <img
              className="cover-img"
              src={IdealXHolyTacos}
              alt="Holy Tacos"
              onClick={() => openLightbox(IdealXHolyTacos, "Holy Tacos")}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* ---------------------------------------------- SECTION 4 ---------------------------------------------- */}
        <div className="section-2">
          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">Observations</b>
            </div>
            <div className="paragraph">
              {`We conducted observational research of users generating images using the Midjourney bot on Discord, access threads where new users can test and practice using Midjourney. This covert, non-participatory method allowed us to see how different users generate images in a normal user setting where everyone’s work is shared openly within the running thread. `}
            </div>
          </div>

          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">Engagement</b>
            </div>
            <div className="paragraph">
              {`To supplement our covert non-participatory observational research, we conducted an exercise within the team, with each team member participating as both a test subject and as an observer to follow a provided design brief to generate a logo for a taco truck along with a vehicle design mockup and a website mockup using DALL-E and Firefly for each. `}
            </div>
          </div>
        </div>

       {/* Observations Image */}
        <div className="section" style={{ minHeight: 'auto', padding: '20px 0', textAlign: 'center' }}>
          <img
            className="cover-img"
            src={IdealXObservations}
            alt="Observations"
            onClick={() => openLightbox(IdealXObservations, "Observations")}
            style={{ cursor: 'pointer', display: 'block', maxWidth: '87.5%', height: 'auto', margin: '0 auto' }}
          />
        </div>

        {/* Newbies Image */}
        <div className="section" style={{ minHeight: 'auto', padding: '20px 0', textAlign: 'center' }}>
          <img
            className="cover-img"
            src={IdealXNewbies}
            alt="Newbies Experience"
            onClick={() => openLightbox(IdealXNewbies, "Newbies Experience")}
            style={{ cursor: 'pointer', display: 'block', maxWidth: '87.5%', height: 'auto', margin: '0 auto' }}
          />
        </div>




{/* ---------------------------------------------- SECTION 4 ---------------------------------------------- */}
        <div className="section-2">
          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">Internal Interviews</b>
            </div>
            <div className="paragraph">
              {`The purpose of this phase in our research was to test out our survey questions internally within the team before we began external interviews. Each interview lasted between 45-60 minutes, helping to refine our questions and ensure we were focusing on the right areas and asking questions that aligned to our current research endeavors. `}
            </div>
          </div>

          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">External Interviews</b>
            </div>
 i           <div className="paragraph">
              {`We used Google Forms to create and distribute a survey aimed at gathering insights from creatives on their experience with generative AI tools. Responses were collected automatically in Google Sheets, where they were organized into a database for easy analysis. This method allowed us to efficiently collect and review the data to identify key trends for our research. `}
            </div>
          </div>
        </div>


        {/* ---------------------------------------------- SECTION 4 ---------------------------------------------- */}
        <div className="section-2" style={{ paddingBottom: '20px' }}>
          <div className="content-2">
            <div className="top">
              <b className="secondary-headline text-center">What we learned</b>
            </div>
            <div className="paragraph-2 text-center">
              {`Generative AI has strong potential in creative work but needs improvements in user-friendliness, accessibility, and output consistency. Designers want consistent and reliable image quality, simpler and more intuitive interfaced, and more thoughtful and useful prompt-assistance features. `}
            </div>
          </div>
        </div>
        

        {/* Secondary Research Section */}
        <div className="section-2">
          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">Affinity Mapping</b>
            </div>
            <div className="paragraph">
              {`Each researcher consolidated every data point (yellow post-it) gathered throughout the research, combining all recorded findings into one place before sorting each into different categories based on commonalities and patterns. This first grouping of data points were labeled with blue post-its, continuing to subdivide blue post-its into common groups that we labeled with pink post-its, repeating the same process to conclude with groups of pink-post-its labeled with green post-its.`}
            </div>
          </div>
          <div className="half-section image-side">
            <img
              className="history-cover-img"
              src={IdealXDataPoints2}
              alt="Secondary Research"
              onClick={() => openLightbox(IdealXDataPoints2, "Secondary Research")}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

        <div className="section-2">
          <div className="half-section text-side">
            <div className="top">
              <b className="secondary-headline">Goal</b>
            </div>
            <div className="paragraph">
              {`Our goal is to organize our current research findings into groups of common topics and themes, with the aim of identifying key insights, patterns or any other valuable feedback that can help us better understand how users feel, think and behave while using generative Ai. Through these findings we hope to gain a clearer picture of what the ideal generative Ai experience would be.`}
            </div>
          </div>
          <div className="half-section image-side">
            <img
              className="history-cover-img"
              src={IdealXAffinityMap}
              alt="Secondary Research"
              onClick={() => openLightbox(IdealXAffinityMap, "Secondary Research")}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>


        {/* ---------------------------------------------- KEY FINDINGS SECTION ---------------------------------------------- */}
        <div className="section-2 methods-section">
          <div className="content-2 methods-content-center">
            <div className="top mb-4 text-center">
              <b className="secondary-headline text-center">Key Take-aways</b>
            </div>

            <div className="methods-grid">
              <div className="method-feature-box">
                <h3 className="method-title">Efficiency is Key</h3>
                <p className="method-description">Users value generative AI tools primarily for their ability to streamline workflows and save time, especially in early design stages like brainstorming and ideation.</p>
              </div>

              <div className="method-feature-box">
                <h3 className="method-title">Customization and Prompt Clarity Matter</h3>
                <p className="method-description">Crafting clear, detailed prompts is essential for achieving high-quality results, and users desire more control over the customization of AI outputs.</p>
              </div>

              <div className="method-feature-box">
                <h3 className="method-title">Creative Experimentation</h3>
                <p className="method-description">AI tools are frequently used as a creative partner, enabling users to iterate on ideas and explore multiple variations before arriving at a final design.</p>
              </div>

              <div className="method-feature-box">
                <h3 className="method-title">Learning Curve</h3>
                <p className="method-description">Many users face challenges in learning to use AI effectively, with prompt generation being a common pain point, highlighting the need for more intuitive guidance within AI platforms.</p>
              </div>

              <div className="method-feature-box">
                <h3 className="method-title">Control Over Outputs</h3>
                <p className="method-description">Users want to feel in control of the creative process, with AI acting as a supportive tool rather than replacing the designer's role in decision-making.</p>
              </div>

              <div className="method-feature-box">
                <h3 className="method-title">Trust and Concerns</h3>
                <p className="method-description">While AI is embraced for its potential, users express concerns about over-reliance, the ethical implications of its use, and its impact on creativity and originality.</p>
              </div>
            </div>
          </div>
        </div>

         

        <div className="section-2" style={{ paddingBottom: '20px' }}>
          <div className="content-2">
            <div className="top">
              <b className="secondary-headline text-center">Sensory Cue Canvas</b>
            </div>
            <div className="paragraph-2 text-center">
              {`Once we completed our affinity diagram and established our framework model, we began collecting sensory cues (images) that connected to our ideal emotion, benefits and features - then placed each image on our Sensory Cue Canvas. `}
            </div>
            <div className="paragraph-2 text-center">
              {`Each section of the Sensory Cue Canvas represented either a feature or benefit, using images that we felt best conveyed the core emotion and experience. Once each section was complete, we gathered all of the images together into a single canvas that displays the full spectrum of visually represented features and benefits. `}
            </div>
          </div>
        </div>

        {/* Sensory Cue Canvas */}
        <div className="section" style={{ minHeight: 'auto', padding: '20px 0', textAlign: 'center' }}>
          <img
            className="cover-img"
            src={IdealXEmpowered}
            alt="Sensory Cue Canvas"
            onClick={() => openLightbox(IdealXEmpowered, "Sensory Cue Canvas")}
            style={{ cursor: 'pointer', display: 'block', maxWidth: '80%', height: 'auto', margin: '0 auto' }}
          />
        </div>

      
   
        {/* <div className="section" style={{ minHeight: 'auto', padding: '20px 0' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '20px', 
            maxWidth: '1200px', 
            margin: '0 auto',
            padding: '0 20px'
          }}>
            
            <div style={{ textAlign: 'center' }}>
              <img
                className="cover-img"
                src={IdealXDataPoints1}
                alt="Data Points 1"
                onClick={() => openLightbox(IdealXDataPoints1, "Data Points 1")}
                style={{ cursor: 'pointer', display: 'block', maxWidth: '100%', height: 'auto', margin: '0 auto' }}
              />
            </div>

           
            <div style={{ textAlign: 'center' }}>
              <img
                className="cover-img"
                src={IdealXDataPoints2}
                alt="Data Points 2"
                onClick={() => openLightbox(IdealXDataPoints2, "Data Points 2")}
                style={{ cursor: 'pointer', display: 'block', maxWidth: '100%', height: 'auto', margin: '0 auto' }}
              />
            </div>

           
            <div style={{ textAlign: 'center' }}>
              <img
                className="cover-img"
                src={IdealXAffinityMap}
                alt="Affinity Map"
                onClick={() => openLightbox(IdealXAffinityMap, "Affinity Map")}
                style={{ cursor: 'pointer', display: 'block', maxWidth: '100%', height: 'auto', margin: '0 auto' }}
              />
            </div>
          </div>
        </div> */}

        <div className="section-2" style={{ paddingBottom: '20px' }}>
          <div className="content-2">
            <div className="top">
              <b className="secondary-headline text-center">Ideal Experience Framework Model</b>
            </div>
            <div className="paragraph-2 text-center">
              {`This diagram represents a framework for how generative AI can empower users in the creative process. At the center, “empowered” highlights the main goal—enabling users to feel in control and supported while working with AI. Surrounding this core are key attributes like “intuitive,” “reliable,” “fast,” and “accurate,” which represent essential qualities that make generative AI a positive tool for designers. Each attribute is linked to specific actions, such as customizing, editing, or problem-solving, that are enhanced by these AI qualities. This framework emphasizes how generative AI can simplify and improve the user experience, making it more efficient and enjoyable. `}
            </div>
          </div>
        </div>

        {/* Framework Model Image */}
        <div className="section" style={{ minHeight: 'auto', padding: '20px 0', textAlign: 'center' }}>
          <img
            className="cover-img"
            src={IdealXFrameworkModel}
            alt="Framework Model"
            onClick={() => openLightbox(IdealXFrameworkModel, "Framework Model")}
            style={{ cursor: 'pointer', display: 'block', maxWidth: '80%', height: 'auto', margin: '0 auto', background: 'transparent' }}
          />
        </div>


        <div className="section-2" style={{ paddingBottom: '20px' }}>
          <div className="content-2">
            <div className="top">
              <b className="secondary-headline text-center">Final Step</b>
            </div>
            <div className="paragraph-2 text-center">
              {`Our next step was to consolidate all of our findings and begin constructing a book or magazine design that would showcase one of the emotion-feature-benefit chains that we felt best showcased our study finding and final framework concept. `}
            </div>
          </div>
        </div>

        {/* Book Spread Image */}
        <div className="section" style={{ minHeight: 'auto', padding: '20px 0', textAlign: 'center' }}>
          <img
            className="cover-img"
            src={IdealXBookSpread}
            alt="Book Spread"
            onClick={() => openLightbox(IdealXBookSpread, "Book Spread")}
            style={{ cursor: 'pointer', display: 'block', maxWidth: '80%', height: 'auto', margin: '0 auto' }}
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
        <div style={{ marginTop: '0', paddingTop: '0', marginBottom: '0', paddingBottom: '0' }}>
          <GraphicDesignBody />
        </div>
        <Footer />
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

export default IdealExperience;
