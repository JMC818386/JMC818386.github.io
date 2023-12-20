import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/*---------------------Stoked Ampere's Imported Images------------------------------------------------------------------------------------*/

import Amperes from './Portfolio/Design/img/amperes&.jpg';

/*---------------------BG Imported Images------------------------------------------------------------------------------------*/

import BG from './Portfolio/Design/img/bg.jpg';

/*---------------------Boss Imported Images------------------------------------------------------------------------------------*/

import Boss from './Portfolio/Design/img/boss.jpg';

/*---------------------BrownForman Imported Images------------------------------------------------------------------------------------*/

import BrownForman from './Portfolio/Design/img/brownforman.jpg';

/*---------------------Dreams Imported Images------------------------------------------------------------------------------------*/

import Dreams from './Portfolio/Design/img/dreams.jpg';

/*---------------------EastCoast Imported Images------------------------------------------------------------------------------------*/

import EastCoast from './Portfolio/Design/img/eastcoast.jpg';

/*---------------------Mindset Imported Images------------------------------------------------------------------------------------*/

import Mindset from './Portfolio/Design/img/mindset.jpg';

/*---------------------Phantom Imported Images------------------------------------------------------------------------------------*/

import Phantom from './Portfolio/Design/img/phantom.jpg';

/*---------------------QRT Imported Images------------------------------------------------------------------------------------*/

import QRT from './Portfolio/Design/img/QRT.jpg';

/*---------------------RHB Imported Images------------------------------------------------------------------------------------*/

import RangerHB from './Portfolio/Design/img/rangerhandbook.jpg';

/*---------------------SKG Imported Images------------------------------------------------------------------------------------*/

import SKG from './Portfolio/Design/img/skg.jpg';

/*---------------------SMM Imported Images------------------------------------------------------------------------------------*/

import SMM from './Portfolio/Design/img/smm.jpg';

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
  <div>
    <div className="container-fluid d-flex flex-wrap align-items-center justify-content-center text-light">
      <div className="row row-cols-3 mx-5 mt-1 mb-5 justify-content-center">



{/*------------------------------Stoked Mini------------------------------------------------------------------------------------------*/}

        <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={true}>
            <img src={StoicismOne}/>
            <img src={MiniCover} className="hidden"/>
            <img src={MiniCoverSpreadFull} className="hidden" />
            <img src={MiniSeneca} className="hidden" />
            <img src={MiniEpictiteus} className="hidden" />
            <img src={MiniMarcus} className="hidden" />
            <img src={MiniCoverBack} className="hidden" />
          </SlideshowLightbox>
        </div>

        {/* <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
          <Link to="/stoked-two" className="" onClick={handleClick}>
            <img className="card-img-top" src={StoicismOne} alt="To-Do-List" />
            <div className="overlay">
              <p className="overlay-text">Stoked on Stoicism Mini</p>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div> */}


{/*------------------------------Stoked History------------------------------------------------------------------------------------------*/}

        <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={true}>
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
        </div>

        {/* <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
          <Link to="/stoked-two" className="" onClick={handleClick}>
            <img className="card-img-top" src={StoicismTwo} alt="To-Do-List" />
            <div className="overlay">
              <p className="overlay-text">Stoked on Stoicism History</p>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div> */}

{/*------------------------------Stoked Pantheon------------------------------------------------------------------------------------------*/}

        <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={true}>
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
        </div>

        {/* <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
          <Link to="/stoked-three" className="" onClick={handleClick}>
            <img className="card-img-top" src={StoicismThree} alt="Tic-Tac-Toe" />
            <div className="overlay">
              <p className="overlay-text">Stoked on Stoicism Pantheon</p>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div> */}

{/*------------------------------Ranger Handbook------------------------------------------------------------------------------------------*/}

        <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={true}>
            <img src={RangerHB}/>
            <img src={RangerHB} className="hidden"/>
            <img src={RangerHB} className="hidden" />
            <img src={RangerHB} className="hidden" />
            <img src={RangerHB} className="hidden" />
            <img src={RangerHB} className="hidden" />
            <img src={RangerHB} className="hidden" />
          </SlideshowLightbox>
        </div>

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

      <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={true}>
            <img src={SKG}/>
            <img src={SKG} className="hidden"/>
            <img src={SKG} className="hidden" />
            <img src={SKG} className="hidden" />
            <img src={SKG} className="hidden" />
            <img src={SKG} className="hidden" />
            <img src={SKG} className="hidden" />
          </SlideshowLightbox>
        </div>

        {/* <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
          <Link to="/skg" className="" onClick={handleClick}>
            <img className="card-img-top" src={SKG} alt="Weather App" />
            <div className="overlay">
              <p className="overlay-text">Sea Kayak Georgia</p>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div> */}

{/*------------------------------Phantom Fireworks------------------------------------------------------------------------------------------*/}

        <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={true}>
            <img src={Phantom}/>
            <img src={Phantom} className="hidden"/>
            <img src={Phantom} className="hidden" />
            <img src={Phantom} className="hidden" />
            <img src={Phantom} className="hidden" />
            <img src={Phantom} className="hidden" />
            <img src={Phantom} className="hidden" />
          </SlideshowLightbox>
        </div>

        {/* <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
          <Link to="/phantom" className="" onClick={handleClick}>
            <img className="card-img-top" src={Phantom} alt="Weather App" />
            <div className="overlay">
              <p className="overlay-text">Phantom Fireworks</p>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div> */}

        {/*------------------------------Brown Forman------------------------------------------------------------------------------------------*/}

        <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={true}>
            <img src={BrownForman}/>
            <img src={BrownForman} className="hidden"/>
            <img src={BrownForman} className="hidden" />
            <img src={BrownForman} className="hidden" />
            <img src={BrownForman} className="hidden" />
            <img src={BrownForman} className="hidden" />
            <img src={BrownForman} className="hidden" />
          </SlideshowLightbox>
        </div>

        {/* <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
          <Link to="/brown-forman" className="" onClick={handleClick}>
            <img className="card-img-top" src={BrownForman} alt="Weather App" />
            <div className="overlay">
              <p className="overlay-text">Brown Forman</p>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div> */}

    {/*------------------------------Dream Posters------------------------------------------------------------------------------------------*/}
        
        <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={true}>
            <img src={Dreams}/>
            <img src={Dreams} className="hidden"/>
            <img src={Dreams} className="hidden" />
            <img src={Dreams} className="hidden" />
            <img src={Dreams} className="hidden" />
            <img src={Dreams} className="hidden" />
            <img src={Dreams} className="hidden" />
          </SlideshowLightbox>
        </div>

        {/* <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
          <Link to="/dream-posters" className="" onClick={handleClick}>
            <img className="card-img-top" src={Dreams} alt="Weather App" />
            <div className="overlay">
              <p className="overlay-text">Dream Posters</p>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div> */}

    {/*------------------------------Space Monkey Mafia------------------------------------------------------------------------------------------*/}
      
        <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={true}>
            <img src={SMM}/>
            <img src={SMM} className="hidden"/>
            <img src={SMM} className="hidden" />
            <img src={SMM} className="hidden" />
            <img src={SMM} className="hidden" />
            <img src={SMM} className="hidden" />
            <img src={SMM} className="hidden" />
          </SlideshowLightbox>
        </div>

        {/* <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
          <Link to="/space-monkey" className="" onClick={handleClick}>
            <img className="card-img-top" src={SMM} alt="Weather App" />
            <div className="overlay">
              <p className="overlay-text">Space Monkey Mafia</p>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div> */}

    {/*------------------------------3055 Strategies------------------------------------------------------------------------------------------*/}

        <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={true}> 
            <img className="card-img-top" src={Boss} alt="3055 Strategies" />
          </SlideshowLightbox>
        </div>

    {/*------------------------------QRT------------------------------------------------------------------------------------------*/}

        <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={true}> 
            <img className="card-img-top" src={QRT} alt="Quick Reaction Team" />
          </SlideshowLightbox>
        </div>

            {/*------------------------------Mindset Solutions------------------------------------------------------------------------------------------*/}

        <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={true}> 
            <img className="card-img-top" src={Mindset} alt="Mindset Solution" />
          </SlideshowLightbox>
        </div>

            {/*------------------------------Ampere's &------------------------------------------------------------------------------------------*/}

        <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={true}> 
            <img className="card-img-top" src={Amperes} alt="Ampere's & Co." />
          </SlideshowLightbox>
        </div>

            {/*------------------------------Bluegrass Gentleman------------------------------------------------------------------------------------------*/}

        <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={true}> 
            <img className="card-img-top" src={BG} alt="Bluegrass Gentleman" />
          </SlideshowLightbox>
        </div>

            {/*------------------------------East Coast Magazine------------------------------------------------------------------------------------------*/}

        <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
          <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={true}> 
            <img className="card-img-top" src={EastCoast} alt="East Coast Magazine" />
          </SlideshowLightbox>
        </div>

      </div>
    </div>
  </div>
  );
}

export default GraphicDesignBody;