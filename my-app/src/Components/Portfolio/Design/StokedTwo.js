import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "../../TopNav";
import PortfolioNav from "../../PortfolioNav";
import Footer from "../../Footer";
import Logo from "./img/logo.jpg";
import "../../App.css";
import GraphicDesignBody from "../../GraphicDesignBody";
import PortfolioNavigationArrows from "./PortfolioNavigationArrows";

import HistoryCover from './img/Stoked_Two/mini-history-hero.png';
import MiniSpread from './img/Stoked_Two/mini-history-1.png';
import HistorySpread1 from './img/Stoked_Two/mini-history-2.png';
import HistorySpread2 from './img/Stoked_Two/mini-history-3.png';

function StokedTwo() {
  return (
    <div className="bg-main-dark">
      <TopNav />
      <PortfolioNav />
      <PortfolioNavigationArrows currentPath="/stoked-two" />

      {/* ---------------------------------------------- HERO SECTION ---------------------------------------------- */}
      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Stoked on Stoicism</b>
          </div>
          <div className="paragraph">
            {`A collection of Zines (miniature magazine) combining elements of modern Swiss style layout with grunge typography to explore the notion of readability in philosophy. Printed in color process with a Risograph printer on assorted papers. `}
          </div>
        </div>
        <div className="half-section image-side">
          <img className="history-cover-img" src={HistoryCover} alt="History Zine Cover" />
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
          <img className="cover-img" src={MiniSpread} alt="History Zine Cover" />
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
          <img className="cover-img" src={HistorySpread1} alt="History Zine Cover" />
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

      {/* ---------------------------------------------- SECTION 3 ---------------------------------------------- */}
      <div className="section mb-5 pb-5">
        <img className="cover-img" src={HistorySpread2} alt="History Zine Cover" />
      </div>

      {/* ----------------------------------------------CONTENT END ---------------------------------------------- */}
      <GraphicDesignBody />
      <Footer />
    </div>
  );
}

export default StokedTwo;
