import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "../../TopNav";
import PortfolioNav from "../../PortfolioNav";
import Footer from "../../Footer";
import Logo from "./img/logo.jpg";
import "../../App.css";
import GraphicDesignBody from "../../GraphicDesignBody";

import HistoryCover from './img/Stoked_Two/mini-history-hero.png';
import MiniSpread from './img/Stoked_Two/mini-history-1.png';
import HistorySpread1 from './img/Stoked_Two/mini-history-2.png';
import HistorySpread2 from './img/Stoked_Two/mini-history-3.png';

function Template() {
  return (
    <div className="bg-main-dark">
      <TopNav />
      <PortfolioNav />

{/* ---------------------------------------------- HERO SECTION ---------------------------------------------- */}

      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Stoked on Stoicism 2</b>
          </div>
          <div className="paragraph">
            {`Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. `}
          </div>
        </div>

        <div className="half-section image-side">
          <img className="history-cover-img" src={HistoryCover} alt="History Zine Cover" />
        </div>
      </div>

{/* ---------------------------------------------- SECTION 1 ---------------------------------------------- */}

      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Stoked on Stoicism 2</b>
          </div>
          <div className="paragraph">
            {`This project represent my own interpretation and experience with interest in Stoicism  through contemporary and expressive design. The goal was to transform its traditionally rigid and structured nature into something visually engaging while maintaining its depth and substance. Inspired by the history of zines as a medium for both artistic expression and intellectual exploration, this work merges philosophical discourse with dynamic, unconventional design. By layering structured content with bold typographic choices, abstract compositions, and experimental print techniques, the project challenges the notion that philosophy must be dense and inaccessible. Instead, it presents Stoicism in a way that is provocative, visually immersive, and compelling to modern audiences. `}
          </div>
        </div>

        <div className="half-section image-side">
          <img className="history-cover-img" src={MiniSpread} alt="History Zine Cover" />
        </div>
      </div>

{/* ---------------------------------------------- SECTION 2 ---------------------------------------------- */}

      <div className="section-2">
        <div className="content-2">
          <div className="section-text-2">
            <div className="top">
              <b className="secondary-headline">Section Title</b>
            </div>
            <div className="paragraph">
              {`Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. `.repeat(4)}
            </div>
          </div>
        </div>
      </div>

{/* ---------------------------------------------- SECTION 3 ---------------------------------------------- */}
      
      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Stoked on Stoicism 2</b>
          </div>
          <div className="paragraph">
            {`This project represent my own interpretation and experience with interest in Stoicism  through contemporary and expressive design. The goal was to transform its traditionally rigid and structured nature into something visually engaging while maintaining its depth and substance. Inspired by the history of zines as a medium for both artistic expression and intellectual exploration, this work merges philosophical discourse with dynamic, unconventional design. By layering structured content with bold typographic choices, abstract compositions, and experimental print techniques, the project challenges the notion that philosophy must be dense and inaccessible. Instead, it presents Stoicism in a way that is provocative, visually immersive, and compelling to modern audiences. `}
          </div>
        </div>

        <div className="half-section image-side">
          <img className="history-cover-img" src={HistorySpread1} alt="History Zine Cover" />
        </div>
      </div>

{/* ---------------------------------------------- SECTION 4 ---------------------------------------------- */}

      <div className="section">
        <div className="half-section image-side">
          <img className="history-cover-img" src={HistorySpread2} alt="History Zine Cover" />
        </div>

        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Stoked on Stoicism 2</b>
          </div>
          <div className="paragraph">
            {`Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. `.repeat(4)}
          </div>
        </div>
      </div>
  

      <GraphicDesignBody />
      <Footer />
    </div>
  );
}

export default Template;
