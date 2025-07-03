import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "../../TopNav";
import PortfolioNav from "../../PortfolioNav";
import Footer from "../../Footer";
import Logo from "./img/logo.jpg";
import "../../App.css";
import GraphicDesignBody from "../../GraphicDesignBody";

import IdealXCover from './img/IdealExperience/ideal-x-cover.png';
import IdealXEcosystem from './img/IdealExperience/ideal-x-ecosystem-tacos.png';
import IdealXEmpowered from './img/IdealExperience/ideal-x-empowered.png';
import IdealXFramework from './img/IdealExperience/ideal-x-framework.png';
import IdealXFullSpread from './img/IdealExperience/ideal-x-full-spread.png';
import IdealXSpreads from './img/IdealExperience/ideal-x-spreads.png';

function IdealExperience() {
  return (
    <div className="bg-main-dark">
      <TopNav />
      <PortfolioNav />

      {/* ---------------------------------------------- HERO SECTION ---------------------------------------------- */}
      <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Ideal GenAI Experience</b>
          </div>
          <div className="paragraph">
            {`For this project, myself and three classmates conducted a 10-week comprehensive user experience research study to see if we could conceptualize what the ideal experience would be while using OpenAi’s DALL-E, Adobe’s Firefly, and Midjourney. By following the Lextant ideal model framework as our guide, we were able to take a deep dive into this new and exciting technology. Each member of the team completed this project remotely, utilizing Miro, Google,, and Discord to organize and manage project requirements. `}
          </div>

          <div className="paragraph">
            {`As a team we decided to base our research on “the ideal generative AI user experience.” The focus is on how this powerful technology can boost creativity, make work easier, and offer personalized solutions while also tackling key challenges related to accuracy, transparency, and ethics. `}
          </div>
        </div>
        <div className="half-section image-side">
          <img className="history-cover-img" src={IdealXCover} alt="History Zine Cover" />
        </div>
      </div>


            {/* ---------------------------------------------- SECTION 4 ---------------------------------------------- */}
      <div className="section-2 mt-5">
        <div className="content-2">
          <div className="section-text-2">
            <div className="top">
              <b className="secondary-headline">Secondary Research</b>
            </div>
            <div className="paragraph-2">
              {`Through our secondary research we found that many designers use generative AI tools like DALL-E and Firefly as a tool to speed up their ideation process, allowing them to iterate through many more concepts and inspirations  in a much shorter amount of time than doing without AI assistance. We also found that while a majority of people are exited about AI - there is still a sizable number of adults (38%) who have concerns about the social impact. `}
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------- SECTION 1 ---------------------------------------------- */}
      <div className="section">
        <div className="container-fluid px-5 mx-5">
          <img className="cover-img" src={IdealXEmpowered} alt="History Zine Cover" />
        </div>
      </div>

      {/* ---------------------------------------------- SECTION 4 ---------------------------------------------- */}
      <div className="row">
            <div className="col-12 d-flex justify-content-center">
                <b className="secondary-headline">Methods</b>
            </div>
        <div className="flex-column text-center d-flex justify-content-center">
            
            <div className="col-12 py-4">
                <b className="secondary-sub-headline">Secondary Research</b>
            </div>

          <div className="col-12 py-4">
            <b className="secondary-sub-headline">Observational Research</b>
          </div>

          <div className="col-12 py-4">
            <b className="secondary-sub-headline">Non-Participant Research</b>
          </div>

          <div className="col-12 py-4">
            <b className="secondary-sub-headline">Participant Research</b>
          </div>

          <div className="col-12 py-4">
            <b className="secondary-sub-headline">Affinity Mapping</b>
          </div>

          <div className="col-12 py-4">
            <b className="secondary-sub-headline">Sensory Cue Analysis</b>
          </div>
       
        </div>

        
      </div>

      {/* ---------------------------------------------- SECTION 2 ---------------------------------------------- */}
      <div className="section">
        <div className="half-section image-side">
          <img className="cover-img" src={IdealXEcosystem} alt="History Zine Cover" />
        </div>
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Analysis</b>
          </div>
          <div className="paragraph">
            {`By creating a stakeholder map and ecosystem map, we were able to gain a better understanding of the individuals and groups who could influence the user’s experience as well the system of influence from products, services and environments in proximity to the user experience. `}
          </div>

          <div className="top">
            <b className="secondary-headline">Observations</b>
          </div>
          <div className="paragraph">
            {`We conducted observational research of users generating images using the Midjourney bot on Discord, access threads where new users can test and practice using Midjourney. This covert, non-participatory method allowed us to see how different users generate images in a normal user setting where everyone’s work is shared openly within the running thread. `}
          </div>
        </div>
      </div>

    {/* ---------------------------------------------- SECTION 4 ---------------------------------------------- */}
      <div className="section-2">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Engagement</b>
          </div>
          <div className="paragraph">
            {`To supplement our covert non-participatory observational research, we conducted an exercise within the team, with each team member participating as both a test subject and as an observer to follow a provided design brief to generate a logo for a taco truck along with a vehicle design mockup and a website mockup using DALL-E and Firefly for each. `}
          </div>
        </div>

        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Final Phase</b>
          </div>
          <div className="paragraph">
            {`Once we competed an affinity diagram, we began to structure our key insights into emotions, features, and benefits,We used  green, pink, blue, and yellow post-it notes to organize out data points into similiar and overlapping groups. `}
          </div>
        </div>
      </div>
 {/* ---------------------------------------------- SECTION 4 ---------------------------------------------- */}
    <div className="section">
        <div className="half-section text-side">
          <div className="top">
            <b className="secondary-headline">Our Goal</b>
          </div>
          <div className="paragraph">
            {`Our goal at this point was to build  on all of the research we have gathered to this point, and consolidate our key findings into a framework model structure that best aligns with our unique findings. We followed the Lextant Ideal Experience Framework as a road map to construct our first model, then began conceptualizing more creative and innovative ways to present our framework. `}
          </div>
        </div>
        <div className="half-section image-side">
          <img className="history-cover-img" src={IdealXFramework} alt="History Zine Cover" />
        </div>
      </div>

    {/* ---------------------------------------------- SECTION 4 ---------------------------------------------- */}
      <div className="section-2">
        <div className="content-2">
          <div className="section-text-2">
            <div className="top">
              <b className="secondary-headline">What we learned</b>
            </div>
            <div className="paragraph-2">
              {`Generative AI has strong potential in creative work but needs improvements in user-friendliness, accessibility, and output consistency,. Designers want consistent and reliable image quality, simpler and more intuitive interfaced, and more thoughtful and useful prompt-assistance features. `}
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------- SECTION 3 ---------------------------------------------- */}
      <div className="section mb-5 pb-5">
        <img className="cover-img drop-1" src={IdealXSpreads} alt="History Zine Cover" />
      </div>

      {/* ----------------------------------------------CONTENT END ---------------------------------------------- */}
      <GraphicDesignBody />
      <Footer />
    </div>
  );
}

export default IdealExperience;
