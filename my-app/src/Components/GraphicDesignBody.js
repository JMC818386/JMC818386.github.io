import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react';

/*---------------------Technology Icons------------------------------------------------------------------------------------*/

import FigmaIcon from './img/icons/figma.png';
import IllustratorIcon from './img/icons/illustrator.png';
import ReactIcon from './img/icons/react.png';
import BootstrapIcon from './img/icons/bootstrap.png';
import CSSIcon from './img/icons/css.png';
import HTMLIcon from './img/icons/html.png';
import JavaScriptIcon from './img/icons/javascript.png';
import VSCodeIcon from './img/icons/vscode.png';
import IndesignIcon from './img/icons/indesign.png';
import GoogleIcon from './img/icons/google.png';
import PythonIcon from './img/icons/python.png';
import DjangoIcon from './img/icons/django.png';
import PostgreSQLIcon from './img/icons/postgresql.png';
import PhotoshopIcon from './img/icons/photoshop.png';
import XDIcon from './img/icons/xd.png';


/*---------------------MD99 Imported Images------------------------------------------------------------------------------------*/

import MD99 from './Portfolio/Design/img/MD99.png';

/*---------------------Ideal Experience Imported Images------------------------------------------------------------------------------------*/

import IdealExperience from './Portfolio/Design/img/ideal-experience.png';

/*---------------------Clover Imported Images------------------------------------------------------------------------------------*/

import Clover from './Portfolio/Design/img/clover-cover.png';

/*---------------------AG_CON Imported Images------------------------------------------------------------------------------------*/

import AgCon from './Portfolio/Design/img/ag-con-cover.png';

/*---------------------Silent Battle Imported Images------------------------------------------------------------------------------------*/

import SilentBattle from './Portfolio/Design/img/silent-battle-cover.png';

/*---------------------Rowan's Creek Imported Images------------------------------------------------------------------------------------*/

import RowansCreek from './Portfolio/Design/img/rowans-creek-cover.png';

/*---------------------Railbird Imported Images------------------------------------------------------------------------------------*/

import Railbird from './Portfolio/Design/img/railbird-cover.png';

/*---------------------Three Willows Imported Images------------------------------------------------------------------------------------*/

import ThreeWillows from './Portfolio/Design/img/three-willows-cover.png';

/*---------------------Total PT Connect Imported Images------------------------------------------------------------------------------------*/

import TotalPtConnect from './Portfolio/Design/img/total-pt-connect.png';

/*---------------------Stoked Ampere's Imported Images------------------------------------------------------------------------------------*/

import Amperes from './Portfolio/Design/img/amperes&.jpg';
import AmperesMain from './Portfolio/Design/img/Amperes/AmperesAnd.png';

/*---------------------BG Imported Images------------------------------------------------------------------------------------*/

import BG from './Portfolio/Design/img/bg.jpg';
import BG01 from './Portfolio/Design/img/BG/BG_01.png';
import BG02 from './Portfolio/Design/img/BG/BG_02.png';
import BG03 from './Portfolio/Design/img/BG/BG_03.png';
import BG04 from './Portfolio/Design/img/BG/BG_04.png';
import BGMain from './Portfolio/Design/img/BG/BG.png';

/*---------------------Boss Imported Images------------------------------------------------------------------------------------*/

import Boss from './Portfolio/Design/img/boss.jpg';
// import MiniCover from './Portfolio/Design/img/Stoked_One/Mini_Cover.png';

/*---------------------BrownForman Imported Images------------------------------------------------------------------------------------*/

import BrownForman from './Portfolio/Design/img/brownforman.jpg';
import BrownFormanOne from './Portfolio/Design/img/BrownForman/BrownForman_01.png';
import BrownFormanTwo from './Portfolio/Design/img/BrownForman/BrownForman_02.png';
import BrownFormanThree from './Portfolio/Design/img/BrownForman/BrownForman_03.png';

/*---------------------Dreams Imported Images------------------------------------------------------------------------------------*/

import Dreams from './Portfolio/Design/img/dreams.jpg';
import FinalGreen from './Portfolio/Design/img/Dreams/FinalGreen.png';
import FinalPink from './Portfolio/Design/img/Dreams/FinalPink.png';
import Grid_01 from './Portfolio/Design/img/Dreams/Grid_01.png';
import Grid_02 from './Portfolio/Design/img/Dreams/Grid_02.png';
import Grid_03 from './Portfolio/Design/img/Dreams/Grid_03.png';
import Grid_04 from './Portfolio/Design/img/Dreams/Grid_04.png';
import Grid_05 from './Portfolio/Design/img/Dreams/Grid_05.png';
import Grid_06 from './Portfolio/Design/img/Dreams/Grid_06.png';
import GridSource_01 from './Portfolio/Design/img/Dreams/GridSource_01.png';
import GridSource_02 from './Portfolio/Design/img/Dreams/GridSource_02.png';

/*---------------------EastCoast Imported Images------------------------------------------------------------------------------------*/

import EastCoast from './Portfolio/Design/img/eastcoast.jpg';
// import MiniCover from './Portfolio/Design/img/Stoked_One/Mini_Cover.png';

/*---------------------Mindset Imported Images------------------------------------------------------------------------------------*/

import Mindset from './Portfolio/Design/img/mindset.jpg';
// import MiniCover from './Portfolio/Design/img/Stoked_One/Mini_Cover.png';

/*---------------------Phantom Imported Images------------------------------------------------------------------------------------*/

import Phantom from './Portfolio/Design/img/phantom.jpg';
import FlyerFront from './Portfolio/Design/img/Phantom/Flyer Front.jpg';
import FlyerBack from './Portfolio/Design/img/Phantom/Flyer Back.jpg';

/*---------------------QRT Imported Images------------------------------------------------------------------------------------*/

import QRT from './Portfolio/Design/img/QRT.jpg';
import QRTCoin from './Portfolio/Design/img/QRT/QRT_Coin.png';
import QRTCrest from './Portfolio/Design/img/QRT/QRT_Crest.png';

/*---------------------RHB Imported Images------------------------------------------------------------------------------------*/

import RangerHB from './Portfolio/Design/img/rangerhandbook.jpg';
import CenterFold from './Portfolio/Design/img/RHB/RHB_CenterFold_Spread.jpeg';
import ContourCover from './Portfolio/Design/img/RHB/RHB_Contour_Cover.jpeg';
import CoverSpread from './Portfolio/Design/img/RHB/RHB_Cover_Spread.jpeg';
import HeroDisplay from './Portfolio/Design/img/RHB/RHB_HeroDisplay.png';
import KnotsSpread from './Portfolio/Design/img/RHB/RHB_Knots_Spread.jpeg';
import PocketBack from './Portfolio/Design/img/RHB/RHB_Pocket_Back.jpeg';
import PocketFront from './Portfolio/Design/img/RHB/RHB_Pocket_Front.jpeg';
import PocketInside from './Portfolio/Design/img/RHB/RHB_Pocket_Inside.jpeg';
import CreedCover from './Portfolio/Design/img/RHB/RHB_RangerCreed_Cover.jpeg';

/*---------------------SKG Imported Images------------------------------------------------------------------------------------*/

import SKG from './Portfolio/Design/img/skg.jpg';
import SKGPoster from './Portfolio/Design/img/SKG/SKG_Poster.png';

/*---------------------SMM Imported Images------------------------------------------------------------------------------------*/

import SMM from './Portfolio/Design/img/smm.jpg';
import SMM1 from './Portfolio/Design/img/SMM/SMM_01.jpeg';
import SMM2 from './Portfolio/Design/img/SMM/SMM_02.jpeg';
import SMM3 from './Portfolio/Design/img/SMM/SMM_03.jpeg';
import SMM4 from './Portfolio/Design/img/SMM/SMM_04.jpeg';
import SMM5 from './Portfolio/Design/img/SMM/SMM_05.jpeg';
import SMM6 from './Portfolio/Design/img/SMM/SMM_06.jpeg';
import SMM7 from './Portfolio/Design/img/SMM/SMM_07.png';

/*---------------------Stoked One Imported Images------------------------------------------------------------------------------------*/

import StoicismOne from './Portfolio/Design/img/stoicism1.jpg';
import MiniCover from './Portfolio/Design/img/Stoked_One/Mini_Cover.png';
import MiniCoverBack from './Portfolio/Design/img/Stoked_One/Mini_Cover_Back.png';
import MiniCoverSpreadFull from './Portfolio/Design/img/Stoked_One/Mini_CoverSpread_Full.png';
import MiniEpictiteus from './Portfolio/Design/img/Stoked_One/Mini_Epictiteus.png';
import MiniMarcus from './Portfolio/Design/img/Stoked_One/Mini_Marcus.png';
import MiniSeneca from './Portfolio/Design/img/Stoked_One/Mini_Seneca.png';
import LogoJMC from './Portfolio/Design/img/Stoked_One/LogoJMC.jpg';

/*---------------------Stoked Two Imported Images------------------------------------------------------------------------------------*/

import StoicismTwo from './Portfolio/Design/img/stoicism2.jpg';
import HistoryCoverBack from './Portfolio/Design/img/Stoked_Two/History_Cover_Back.png';
import HistoryCoverFront from './Portfolio/Design/img/Stoked_Two/History_Cover_Front.png';
import HistoryEarly from './Portfolio/Design/img/Stoked_Two/History_Early.png';
import HistoryEpictetus from './Portfolio/Design/img/Stoked_Two/History_Epictetus.png';
import HistoryFullCoverBack from './Portfolio/Design/img/Stoked_Two/History_FullCover_Back.png';
import HistoryLate from './Portfolio/Design/img/Stoked_Two/History_Late.png';
import HistoryMarcus from './Portfolio/Design/img/Stoked_Two/History_Marcus.png';
import HistoryMarcusSpread from './Portfolio/Design/img/Stoked_Two/History_MarcusSpread.png';
import HistoryMixedCoverFull from './Portfolio/Design/img/Stoked_Two/History_MixedCover_Full.png';
import HistoryMixedSpread from './Portfolio/Design/img/Stoked_Two/History_MixedSpread.png';
import HistorySeneca from './Portfolio/Design/img/Stoked_Two/History_Seneca.png';

/*---------------------Stoked Three Imported Images------------------------------------------------------------------------------------*/

import StoicismThree from './Portfolio/Design/img/stoicism3.jpg';
import GodZineOne from './Portfolio/Design/img/Stoked_Three/God_Zine_01.png';
import GodZineTwo from './Portfolio/Design/img/Stoked_Three/God_Zine_02.png';
import GodZineThree from './Portfolio/Design/img/Stoked_Three/God_Zine_03.png';
import GodZineFour from './Portfolio/Design/img/Stoked_Three/God_Zine_04.png';
import GodZineFive from './Portfolio/Design/img/Stoked_Three/God_Zine_05.png';
import GodZineSix from './Portfolio/Design/img/Stoked_Three/God_Zine_06.png';
import GodZineSeven from './Portfolio/Design/img/Stoked_Three/God_Zine_07.png';
import GodZineEight from './Portfolio/Design/img/Stoked_Three/God_Zine_08.png';
import GodZineNine from './Portfolio/Design/img/Stoked_Three/God_Zine_09.png';
import GodZineTen from './Portfolio/Design/img/Stoked_Three/God_Zine_10.png';
import GodZineEleven from './Portfolio/Design/img/Stoked_Three/God_Zine_11.png';
import GodZineTwelve from './Portfolio/Design/img/Stoked_Three/God_Zine_12.png';
import GodZineCoverBack from './Portfolio/Design/img/Stoked_Three/God_Zine_Cover_Back.png';
import GodZineCoverFront from './Portfolio/Design/img/Stoked_Three/God_Zine_Cover_Front.png';
import GodZineFullCoverSpread from './Portfolio/Design/img/Stoked_Three/God_Zine_FullCoverSpread.png';


/*---------------------------------------------------------------------------------------------------------*/

import {
    BrowserRouter as Router,
    Link } from "react-router-dom";
import { useRef } from 'react';
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'
import React, { useEffect } from 'react';



function GraphicDesignBody() {
  
  useEffect(() => {
    initLightboxJS("8FD0-B03E-0811-EA4A", "Individual");
  });

    const topRef = useRef(null);

    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    
  return (
    
  <div className="bg-main-dark">
    {/* <CBreadcrumb
      style={{
        '--cui-breadcrumb-divider': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`,
      }}
      className="text-light px-4 pt-4"
    >
      <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
      <CBreadcrumbItem active>Graphic Design Portfolio</CBreadcrumbItem>
    </CBreadcrumb> */}

    <div className="container-fluid d-flex flex-wrap align-items-center justify-content-center text-light">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mx-3 mt-1 mb-5 justify-content-center g-3">


{/*------------------------------MD99------------------------------------------------------------------------------------------*/}

        <div className="col text-light card-port p-2">
          <Link to="/md99" className="" onClick={handleClick}>
            <img className="card-img-top" src={MD99} alt="To-Do-List" />
            <div className="overlay">
              <p className="overlay-text">MyDesign99 DGE</p>
              <div className="tech-icons">
                <img src={FigmaIcon} alt="Figma" className="tech-icon" />
                <img src={IllustratorIcon} alt="Illustrator" className="tech-icon" />
                <img src={ReactIcon} alt="React" className="tech-icon" />
                <img src={BootstrapIcon} alt="Bootstrap" className="tech-icon" />
                <img src={CSSIcon} alt="CSS" className="tech-icon" />
                <img src={HTMLIcon} alt="HTML" className="tech-icon" />
                <img src={JavaScriptIcon} alt="JavaScript" className="tech-icon" />
                <img src={VSCodeIcon} alt="VSCode" className="tech-icon" />
              </div>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>


{/*------------------------------Ideal Experience------------------------------------------------------------------------------------------*/}

<div className="col text-light card-port p-2">
  <Link to="/ideal-experience" className="" onClick={handleClick}>
    <img className="card-img-top" src={IdealExperience} alt="To-Do-List" />
    <div className="overlay">
      <p className="overlay-text">Ideal Generative AI Experience</p>
      <div className="tech-icons">
        <img src={IndesignIcon} alt="Indesign" className="tech-icon" />
        <img src={IllustratorIcon} alt="Illustrator" className="tech-icon" />
        <img src={FigmaIcon} alt="Figma" className="tech-icon" />
        <img src={GoogleIcon} alt="Google" className="tech-icon" />
      </div>
    </div>
  </Link>
  <div ref={topRef}></div>
</div>

{/*------------------------------Clover------------------------------------------------------------------------------------------*/}

        <div className="col text-light card-port p-2">
          <Link to="/clover" className="" onClick={handleClick}>
            <img className="card-img-top" src={Clover} alt="To-Do-List" />
            <div className="overlay">
              <p className="overlay-text">Clover</p>
              <div className="tech-icons">
                <img src={FigmaIcon} alt="Figma" className="tech-icon" />
                <img src={IllustratorIcon} alt="Illustrator" className="tech-icon" />
                <img src={ReactIcon} alt="React" className="tech-icon" />
                <img src={BootstrapIcon} alt="Bootstrap" className="tech-icon" />
                <img src={CSSIcon} alt="CSS" className="tech-icon" />
                <img src={HTMLIcon} alt="HTML" className="tech-icon" />
                <img src={JavaScriptIcon} alt="JavaScript" className="tech-icon" />
                <img src={VSCodeIcon} alt="VSCode" className="tech-icon" />
                <img src={PythonIcon} alt="Python" className="tech-icon" />
                <img src={DjangoIcon} alt="Django" className="tech-icon" />
                <img src={PostgreSQLIcon} alt="PostgreSQL" className="tech-icon" />
              </div>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>

{/*------------------------------AG_CON------------------------------------------------------------------------------------------*/}

        <div className="col text-light card-port p-2">
          <Link to="/ag-con" className="" onClick={handleClick}>
            <img className="card-img-top" src={AgCon} alt="AG_CON 2026" />
            <div className="overlay">
              <p className="overlay-text">AG_CON 2026</p>
              <div className="tech-icons">
                <img src={IllustratorIcon} alt="Illustrator" className="tech-icon" />
                <img src={IndesignIcon} alt="Indesign" className="tech-icon" />
                <img src={PhotoshopIcon} alt="Photoshop" className="tech-icon" />
              </div>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>

{/*------------------------------Silent Battle------------------------------------------------------------------------------------------*/}

        <div className="col text-light card-port p-2">
          <Link to="/silent-battle" className="" onClick={handleClick}>
            <img className="card-img-top" src={SilentBattle} alt="Silent Battle" />
            <div className="overlay">
              <p className="overlay-text">Silent Battle</p>
              <div className="tech-icons">
                <img src={IllustratorIcon} alt="Illustrator" className="tech-icon" />
                <img src={IndesignIcon} alt="Indesign" className="tech-icon" />
                <img src={PhotoshopIcon} alt="Photoshop" className="tech-icon" />
              </div>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>

{/*------------------------------Rowan's Creek------------------------------------------------------------------------------------------*/}

        <div className="col text-light card-port p-2">
          <Link to="/rowans-creek" className="" onClick={handleClick}>
            <img className="card-img-top" src={RowansCreek} alt="Rowan's Creek" />
            <div className="overlay">
              <p className="overlay-text">Rowan's Creek</p>
              <div className="tech-icons">
                <img src={IllustratorIcon} alt="Illustrator" className="tech-icon" />
                <img src={IndesignIcon} alt="Indesign" className="tech-icon" />
                <img src={PhotoshopIcon} alt="Photoshop" className="tech-icon" />
              </div>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>

{/*------------------------------Railbird------------------------------------------------------------------------------------------*/}

        <div className="col text-light card-port p-2">
          <Link to="/railbird" className="" onClick={handleClick}>
            <img className="card-img-top" src={Railbird} alt="Railbird" />
            <div className="overlay">
              <p className="overlay-text">Railbird</p>
              <div className="tech-icons">
                <img src={IllustratorIcon} alt="Illustrator" className="tech-icon" />
                <img src={IndesignIcon} alt="Indesign" className="tech-icon" />
                <img src={PhotoshopIcon} alt="Photoshop" className="tech-icon" />
              </div>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>

{/*------------------------------Three Willows------------------------------------------------------------------------------------------*/}

        <div className="col text-light card-port p-2">
          <Link to="/three-willows" className="" onClick={handleClick}>
            <img className="card-img-top" src={ThreeWillows} alt="Three Willows" />
            <div className="overlay">
              <p className="overlay-text">Three Willows</p>
              <div className="tech-icons">
                <img src={IllustratorIcon} alt="Illustrator" className="tech-icon" />
                <img src={IndesignIcon} alt="Indesign" className="tech-icon" />
                <img src={PhotoshopIcon} alt="Photoshop" className="tech-icon" />
              </div>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>

{/*------------------------------Total PT Connect------------------------------------------------------------------------------------------*/}

        <div className="col text-light card-port p-2">
          <Link to="/total-pt-connect" className="" onClick={handleClick}>
            <img className="card-img-top" src={TotalPtConnect} alt="Total PT Connect" />
            <div className="overlay">
              <p className="overlay-text">Total PT Connect</p>
              <div className="tech-icons">
                <img src={XDIcon} alt="XD" className="tech-icon" />
                <img src={IllustratorIcon} alt="Illustrator" className="tech-icon" />
                <img src={ReactIcon} alt="React" className="tech-icon" />
                <img src={BootstrapIcon} alt="Bootstrap" className="tech-icon" />
                <img src={CSSIcon} alt="CSS" className="tech-icon" />
                <img src={HTMLIcon} alt="HTML" className="tech-icon" />
                <img src={JavaScriptIcon} alt="JavaScript" className="tech-icon" />
                <img src={VSCodeIcon} alt="VSCode" className="tech-icon" />
                <img src={PythonIcon} alt="Python" className="tech-icon" />
                <img src={DjangoIcon} alt="Django" className="tech-icon" />
                <img src={PostgreSQLIcon} alt="PostgreSQL" className="tech-icon" />
              </div>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>

{/*------------------------------Stoked Mini------------------------------------------------------------------------------------------*/}

        {/* <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}>
            <img src={StoicismOne}/>
            <img src={MiniCover} className="hidden"/>
            <img src={MiniCoverSpreadFull} className="hidden" />
            <img src={MiniSeneca} className="hidden" />
            <img src={MiniEpictiteus} className="hidden" />
            <img src={MiniMarcus} className="hidden" />
            <img src={MiniCoverBack} className="hidden" />
          </SlideshowLightbox>
        </div> */}

        {/* <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
          <Link to="/stoked-one" className="" onClick={handleClick}>
            <img className="card-img-top" src={StoicismOne} alt="To-Do-List" />
            <div className="overlay">
              <p className="overlay-text">Stoked on Stoicism Mini</p>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div> */}


{/*------------------------------Stoked History------------------------------------------------------------------------------------------*/}

        {/* <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}>
            <img src={StoicismTwo}/>
            <img src={HistoryCoverFront} className="hidden"/>
            <img src={HistoryMarcusSpread} className="hidden" />
            <img src={HistoryEarly} className="hidden" />
            <img src={HistoryLate} className="hidden" />
            <img src={HistorySeneca} className="hidden" />
            <img src={HistoryEpictetus} className="hidden" />
            <img src={HistoryMarcus} className="hidden" />
            <img src={HistoryMixedCoverFull} className="hidden" />
            <img src={HistoryMixedSpread} className="hidden" />
            <img src={HistoryFullCoverBack} className="hidden" />
            <img src={HistoryCoverBack} className="hidden" />
          </SlideshowLightbox>
        </div> */}

        <div className="col text-light card-port p-2">
          <Link to="/stoked-two" className="" onClick={handleClick}>
            <img className="card-img-top" src={StoicismOne} alt="To-Do-List" />
            <div className="overlay">
              <p className="overlay-text">Stoked on Stoicism History</p>
              <div className="tech-icons">
                <img src={IllustratorIcon} alt="Illustrator" className="tech-icon" />
                <img src={IndesignIcon} alt="Indesign" className="tech-icon" />
                <img src={PhotoshopIcon} alt="Photoshop" className="tech-icon" />
              </div>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>

{/*------------------------------Stoked Pantheon------------------------------------------------------------------------------------------*/}

        {/* <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}>
            <img src={StoicismThree}/>
            <img src={GodZineCoverFront} className="hidden"/>
            <img src={GodZineOne} className="hidden" />
            <img src={GodZineTwo} className="hidden" />
            <img src={GodZineThree} className="hidden" />
            <img src={GodZineFour} className="hidden" />
            <img src={GodZineFive} className="hidden" />
            <img src={GodZineSix} className="hidden" />
            <img src={GodZineSeven} className="hidden" />
            <img src={GodZineEight} className="hidden" />
            <img src={GodZineNine} className="hidden" />
            <img src={GodZineTen} className="hidden" />
            <img src={GodZineEleven} className="hidden" />
            <img src={GodZineTwelve} className="hidden" />
            <img src={GodZineCoverBack} className="hidden" />
            <img src={GodZineFullCoverSpread} className="hidden" />
          </SlideshowLightbox>
        </div> */}

        <div className="col text-light card-port p-2">
          <Link to="/stoked-three" className="" onClick={handleClick}>
            <img className="card-img-top" src={StoicismThree} alt="Tic-Tac-Toe" />
            <div className="overlay">
              <p className="overlay-text">Stoked on Stoicism Pantheon</p>
              <div className="tech-icons">
                <img src={IllustratorIcon} alt="Illustrator" className="tech-icon" />
                <img src={IndesignIcon} alt="Indesign" className="tech-icon" />
                <img src={PhotoshopIcon} alt="Photoshop" className="tech-icon" />
              </div>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>

{/*------------------------------Ranger Handbook------------------------------------------------------------------------------------------*/}

        {/* <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}>
            <img src={RangerHB}/>
            <img src={CoverSpread} className="hidden"/>
            <img src={ContourCover} className="hidden" />
            <img src={HeroDisplay} className="hidden" />
            <img src={CreedCover} className="hidden" />
            <img src={PocketFront} className="hidden" />
            <img src={PocketBack} className="hidden" />
            <img src={PocketInside} className="hidden" />
            <img src={KnotsSpread} className="hidden" />
            <img src={CenterFold} className="hidden" />
          </SlideshowLightbox>
        </div> */}

        {/* <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
          <Link to="/ranger" className="" onClick={handleClick}>
            <img className="card-img-top" src={RangerHB} alt="Weather App" />
            <div className="overlay">
              <p className="overlay-text">Ranger Handbook Primer</p>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div> */}


{/*------------------------------Sea Kayak Georgia------------------------------------------------------------------------------------------*/}

      {/* <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}>
            <img src={SKG}/>
            <img src={SKGPoster} className="hidden"/>
          </SlideshowLightbox>
        </div> */}

        <div className="col text-light card-port p-2">
          <Link to="/skg" className="" onClick={handleClick}>
            <img className="card-img-top" src={SKG} alt="Weather App" />
            <div className="overlay">
              <p className="overlay-text">Sea Kayak Georgia</p>
              <div className="tech-icons">
                <img src={IllustratorIcon} alt="Illustrator" className="tech-icon" />
                <img src={IndesignIcon} alt="Indesign" className="tech-icon" />
                <img src={PhotoshopIcon} alt="Photoshop" className="tech-icon" />
              </div>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>

{/*------------------------------Phantom Fireworks------------------------------------------------------------------------------------------*/}

        {/* <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}>
            <img src={Phantom}/>
            <img src={FlyerFront} className="hidden"/>
            <img src={FlyerBack} className="hidden" />
          </SlideshowLightbox>
        </div> */}

        <div className="col text-light card-port p-2">
          <Link to="/phantom" className="" onClick={handleClick}>
            <img className="card-img-top" src={Phantom} alt="Weather App" />
            <div className="overlay">
              <p className="overlay-text">Phantom Fireworks</p>
              <div className="tech-icons">
                <img src={IllustratorIcon} alt="Illustrator" className="tech-icon" />
                <img src={IndesignIcon} alt="Indesign" className="tech-icon" />
                <img src={PhotoshopIcon} alt="Photoshop" className="tech-icon" />
              </div>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>

        {/*------------------------------Brown Forman------------------------------------------------------------------------------------------*/}

        {/* <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}>
            <img src={BrownForman}/>
            <img src={BrownFormanOne} className="hidden"/>
            <img src={BrownFormanTwo} className="hidden" />
            <img src={BrownFormanThree} className="hidden" />

          </SlideshowLightbox>
        </div> */}

        <div className="col text-light card-port p-2">
          <Link to="/brown-forman" className="" onClick={handleClick}>
            <img className="card-img-top" src={BrownForman} alt="Weather App" />
            <div className="overlay">
              <p className="overlay-text">Brown Forman</p>
              <div className="tech-icons">
                <img src={IllustratorIcon} alt="Illustrator" className="tech-icon" />
                <img src={IndesignIcon} alt="Indesign" className="tech-icon" />
                <img src={PhotoshopIcon} alt="Photoshop" className="tech-icon" />
              </div>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>

    {/*------------------------------Dream Posters------------------------------------------------------------------------------------------*/}
        
        {/* <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}>
            <img src={Dreams}/>
            <img src={FinalGreen} className="hidden"/>
            <img src={FinalPink} className="hidden" />
            <img src={GridSource_01} className="hidden" />
            <img src={GridSource_02} className="hidden" />
            <img src={Grid_01} className="hidden" />
            <img src={Grid_02} className="hidden" />
            <img src={Grid_03} className="hidden" />
            <img src={Grid_04} className="hidden" />
            <img src={Grid_05} className="hidden" />
            <img src={Grid_06} className="hidden" />
          </SlideshowLightbox>
        </div> */}

        <div className="col text-light card-port p-2">
          <Link to="/dream-posters" className="" onClick={handleClick}>
            <img className="card-img-top" src={Dreams} alt="Weather App" />
            <div className="overlay">
              <p className="overlay-text">Dream Posters</p>
              <div className="tech-icons">
                <img src={IllustratorIcon} alt="Illustrator" className="tech-icon" />
                <img src={IndesignIcon} alt="Indesign" className="tech-icon" />
                <img src={PhotoshopIcon} alt="Photoshop" className="tech-icon" />
              </div>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>

    {/*------------------------------Space Monkey Mafia------------------------------------------------------------------------------------------*/}
      
        {/* <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}>
            <img src={SMM}/>
            <img src={SMM7} className="hidden"/>
            <img src={SMM1} className="hidden"/>
            <img src={SMM2} className="hidden" />
            <img src={SMM3} className="hidden" />
            <img src={SMM4} className="hidden" />
            <img src={SMM5} className="hidden" />
            <img src={SMM6} className="hidden" />
          </SlideshowLightbox>
        </div> */}

        <div className="col text-light card-port p-2">
          <Link to="/space-monkey" className="" onClick={handleClick}>
            <img className="card-img-top" src={SMM} alt="Weather App" />
            <div className="overlay">
              <p className="overlay-text">Space Monkey Mafia</p>
              <div className="tech-icons">
                <img src={IllustratorIcon} alt="Illustrator" className="tech-icon" />
                <img src={PhotoshopIcon} alt="Photoshop" className="tech-icon" />
                <img src={IndesignIcon} alt="Indesign" className="tech-icon" />
              </div>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>

    {/*------------------------------3055 Strategies------------------------------------------------------------------------------------------*/}

        <div className="col card-port p-2">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}> 
            <img className="card-img-top" src={Boss} alt="3055 Strategies" />
            <div className="overlay">
              <p className="overlay-text">3055 Strategies</p>
              <div className="tech-icons">
                <img src={IllustratorIcon} alt="Illustrator" className="tech-icon" />
                <img src={PhotoshopIcon} alt="Photoshop" className="tech-icon" />
                <img src={IndesignIcon} alt="Indesign" className="tech-icon" />
              </div>
            </div>
          </SlideshowLightbox>
        </div>

    {/*------------------------------QRT------------------------------------------------------------------------------------------*/}

        <div className="col card-port p-2">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}> 
            <img className="card-img-top" src={QRT} alt="Quick Reaction Team" />
            <div className="overlay">
              <p className="overlay-text">Quick Reaction Team</p>
              <div className="tech-icons">
                <img src={IllustratorIcon} alt="Illustrator" className="tech-icon" />
                <img src={PhotoshopIcon} alt="Photoshop" className="tech-icon" />
                <img src={IndesignIcon} alt="Indesign" className="tech-icon" />
              </div>
            </div>
            <img src={QRTCrest} className="hidden" alt="" />
            <img src={QRTCoin} className="hidden" alt="" />
          </SlideshowLightbox>
        </div>

            {/*------------------------------Mindset Solutions------------------------------------------------------------------------------------------*/}

        <div className="col card-port p-2">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}> 
            <img className="card-img-top" src={Mindset} alt="Mindset Solution" />
            <div className="overlay">
              <p className="overlay-text">Mindset Solutions</p>
              <div className="tech-icons">
                <img src={IllustratorIcon} alt="Illustrator" className="tech-icon" />
                <img src={PhotoshopIcon} alt="Photoshop" className="tech-icon" />
                <img src={IndesignIcon} alt="Indesign" className="tech-icon" />
              </div>
            </div>
          </SlideshowLightbox>
        </div>

            {/*------------------------------Ampere's &------------------------------------------------------------------------------------------*/}

        <div className="col card-port p-2">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}> 
            <img className="card-img-top" src={Amperes} alt="Ampere's & Co." />
            <div className="overlay">
              <p className="overlay-text">Ampere's &</p>
              <div className="tech-icons">
                <img src={IllustratorIcon} alt="Illustrator" className="tech-icon" />
                <img src={PhotoshopIcon} alt="Photoshop" className="tech-icon" />
                <img src={IndesignIcon} alt="Indesign" className="tech-icon" />
              </div>
            </div>
            <img src={AmperesMain} className="hidden" alt="" />
          </SlideshowLightbox>
        </div>

            {/*------------------------------Bluegrass Gentleman------------------------------------------------------------------------------------------*/}

        <div className="col card-port p-2">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}> 
            <img className="card-img-top" src={BG} alt="Bluegrass Gentleman" />
            <div className="overlay">
              <p className="overlay-text">Bluegrass Gentleman</p>
              <div className="tech-icons">
                <img src={IllustratorIcon} alt="Illustrator" className="tech-icon" />
                <img src={PhotoshopIcon} alt="Photoshop" className="tech-icon" />
                <img src={IndesignIcon} alt="Indesign" className="tech-icon" />
              </div>
            </div>
            <img src={BG01} className="hidden" alt="" />
            {/* <img src={BG02} className="hidden" /> */}
            <img src={BG03} className="hidden" alt="" />
            {/* <img src={BG04} className="hidden" /> */}
            <img src={BGMain} className="hidden" alt="" />
          </SlideshowLightbox>
        </div>

            {/*------------------------------East Coast Magazine------------------------------------------------------------------------------------------*/}

        <div className="col card-port p-2">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}> 
            <img className="card-img-top" src={EastCoast} alt="East Coast Magazine" />
            <div className="overlay">
              <p className="overlay-text">East Coast Magazine</p>
              <div className="tech-icons">
                <img src={IllustratorIcon} alt="Illustrator" className="tech-icon" />
                <img src={PhotoshopIcon} alt="Photoshop" className="tech-icon" />
                <img src={IndesignIcon} alt="Indesign" className="tech-icon" />
              </div>
            </div>
          </SlideshowLightbox>
        </div>

      </div>
    </div>
  </div>
  );
}

export default GraphicDesignBody;