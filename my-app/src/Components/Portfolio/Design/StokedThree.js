import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "../../TopNav";
import PortfolioNav from "../../PortfolioNav";
import Footer from "../../Footer";
import Logo from "./img/logo.jpg";
import "../../App.css";
import GraphicDesignBody from "../../GraphicDesignBody";

import PantheonCover from './img/Stoked_Three/pantheon-hero.png';
import Pantheon1 from './img/Stoked_Three/pantheon-1.png';
import Pantheon2 from './img/Stoked_Three/pantheon-2.png';
import Pantheon3 from './img/Stoked_Three/pantheon-3.png';

function StokedThree() {
  return (
    <div className="bg-main-dark">
      <TopNav />
      <PortfolioNav />

      {/* ---------------------------------------------- HERO SECTION ---------------------------------------------- */}
      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Stoked on Hellenism</b>
          </div>
          <div className="paragraph">
            {`This project is a continuation of my Stoked On Stoicism series - breaking away from the introduction and history of Stoicism as a branch of philosophy, and exploring my own personal experience and challenges with reading and understanding philosophy and history. `}
          </div>
        </div>
        <div className="half-section image-side">
          <img className="history-cover-img" src={PantheonCover} alt="History Zine Cover" />
        </div>
      </div>

      {/* ---------------------------------------------- SECTION 1 ---------------------------------------------- */}
      <div className="section-2 mt-5">
        <div className="content-2">
          <div className="section-text-2">
            <div className="top">
              <b className="secondary-headline">Concept</b>
            </div>
            <div className="paragraph-2">
              {`My goal with this piece was to continue using abstracted grunge typography combined with raster images of stone statues - juxtaposing strong modern imagery with justified type that is meant to immulate a Snellen Chart (Used to determine a persons ability to see progressively smaller objects from a distance. By combining these elements together, my aim was to force the observer to slow down and read through the text in an uncomfortable and fragmented way - mirroring my own difficulties in reading, and in particular - reading dense works like philosophy and history. `}
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------- SECTION 2 ---------------------------------------------- */}
      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Reflection</b>
          </div>
          <div className="paragraph">
            {`The text is borrowed from Marcus Aurelius’s books, Mediations - selecting sections and quotes that most resonated with me and drew my interest. By displayed each of the 12 core Gods from both Greek and Roman pantheons, my aim was to communicate the tension and duality I’ve observed while studying both. `}
          </div>
        </div>
        <div className="half-section image-side">
          <img className="cover-img" src={Pantheon1} alt="History Zine Cover" />
        </div>
      </div>

{/* ---------------------------------------------- SECTION 3 ---------------------------------------------- */}

          <div className="section-2">
        <div className="content-2">
          <div className="section-text-2">
            <div className="paragraph">
              {`Statues of each God have been distorted and disfigured to reflect my own challenges in reconciling the connections between these two great cultures, and how that contrasts the simple and elegant logic that can be found in reading what I find to be profound wisdom in Stoic texts. By abstracting the body text through varied degrees of justified type, expanded and contrasted kerning between letters, the observer can read through the quotes in a way that reflect my own struggles.`}
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------- SECTION 4 ---------------------------------------------- */}
      <div className="section-2">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Influence</b>
          </div>
          <div className="paragraph">
            {`Inspired by David Carson’s unconventional typography and the unique constraints of Risograph printing, the compositions integrate raster and vector imagery, color overlays, and intricate layering. Special attention was given to the relationship between text and image, ensuring a cohesive yet experimental aesthetic.`}
          </div>
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

      {/* ---------------------------------------------- SECTION 5 ---------------------------------------------- */}
      <div className="section mb-5 pb-5">
        <img className="cover-img" src={Pantheon3} alt="Pantheon Zine Spreads" />
      </div>

      {/* ----------------------------------------------CONTENT END ---------------------------------------------- */}
      <GraphicDesignBody />
      <Footer />
    </div>
  );
}

export default StokedThree;
