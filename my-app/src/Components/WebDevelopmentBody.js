import 'aos/dist/aos.css';
import AOS from 'aos';


import 'bootstrap/dist/css/bootstrap.min.css';
// import Logo from './img/logo.jpg';
import { useState } from 'react';
// import {
//     BrowserRouter as
//     Link } from "react-router-dom";
// import { useRef } from 'react';
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'
import React, { useEffect } from 'react';
import PocketPro from './Portfolio/Dev/img/pocket-pro.png';
import BudgetApp from './Portfolio/Dev/img/budgetapp.png';
import './App.css';
// import EyeBallIcon  from './img/eyeball.png'
import GlobeIcon  from './img/globe.png'
import ReactIcon  from './img/react.png'
import DjangoIcon from './img/django.png'
import PythonIcon from './img/python.png'
import Amperes from './Portfolio/Design/img/amperes&.jpg';
import AmperesMain from './Portfolio/Design/img/Amperes/AmperesAnd.png';
import BG from './Portfolio/Design/img/bg.jpg';
import BG01 from './Portfolio/Design/img/BG/BG_01.png';
// import BG02 from './Portfolio/Design/img/BG/BG_02.png';
import BG03 from './Portfolio/Design/img/BG/BG_03.png';
// import BG04 from './Portfolio/Design/img/BG/BG_04.png';
import BGMain from './Portfolio/Design/img/BG/BG.png';
import Boss from './Portfolio/Design/img/boss.jpg';
import BrownForman from './Portfolio/Design/img/brownforman.jpg';
import BrownFormanOne from './Portfolio/Design/img/BrownForman/BrownForman_01.png';
import BrownFormanTwo from './Portfolio/Design/img/BrownForman/BrownForman_02.png';
import BrownFormanThree from './Portfolio/Design/img/BrownForman/BrownForman_03.png';
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
import EastCoast from './Portfolio/Design/img/eastcoast.jpg';
import Mindset from './Portfolio/Design/img/mindset.jpg';
import Phantom from './Portfolio/Design/img/phantom.jpg';
import FlyerFront from './Portfolio/Design/img/Phantom/Flyer Front.jpg';
// import FlyerBack from './Portfolio/Design/img/Phantom/Flyer Back.jpg';
import QRT from './Portfolio/Design/img/QRT.jpg';
import QRTCoin from './Portfolio/Design/img/QRT/QRT_Coin.png';
import QRTCrest from './Portfolio/Design/img/QRT/QRT_Crest.png';
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
import SKG from './Portfolio/Design/img/skg.jpg';
import SKGPoster from './Portfolio/Design/img/SKG/SKG_Poster.png';
import SMM from './Portfolio/Design/img/smm.jpg';
import SMM1 from './Portfolio/Design/img/SMM/SMM_01.jpeg';
import SMM2 from './Portfolio/Design/img/SMM/SMM_02.jpeg';
import SMM3 from './Portfolio/Design/img/SMM/SMM_03.jpeg';
import SMM4 from './Portfolio/Design/img/SMM/SMM_04.jpeg';
import SMM5 from './Portfolio/Design/img/SMM/SMM_05.jpeg';
import SMM6 from './Portfolio/Design/img/SMM/SMM_06.jpeg';
import SMM7 from './Portfolio/Design/img/SMM/SMM_07.png';
import StoicismOne from './Portfolio/Design/img/stoicism1.jpg';
import MiniCover from './Portfolio/Design/img/Stoked_One/Mini_Cover.png';
import MiniCoverBack from './Portfolio/Design/img/Stoked_One/Mini_Cover_Back.png';
import MiniCoverSpreadFull from './Portfolio/Design/img/Stoked_One/Mini_CoverSpread_Full.png';
import MiniEpictiteus from './Portfolio/Design/img/Stoked_One/Mini_Epictiteus.png';
import MiniMarcus from './Portfolio/Design/img/Stoked_One/Mini_Marcus.png';
import MiniSeneca from './Portfolio/Design/img/Stoked_One/Mini_Seneca.png';
// import LogoJMC from './Portfolio/Design/img/Stoked_One/LogoJMC.jpg';
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

import MD99 from './img/MD99.png';


function WebDevelopmentBody() {
    const [hovered, setHovered] = useState(false);
    const [showSlideshow, setShowSlideshow] = useState(false);

    const [showPoster, setShowPoster] = useState(false);

    const handleClick = () => {
        setShowPoster(true);
    };

    const handleMouseEnter = () => {
        setHovered(true);
      };
    
      const handleMouseLeave = () => {
        setHovered(false);
      };

      

      useEffect(() => {
        AOS.init({
            duration: 2500,
            once: true,
        });
        initLightboxJS("8FD0-B03E-0811-EA4A", "Individual");
    }, []);
     

  return (
    <div>
        <div className="container-fluid d-flex flex-wrap align-items-center justify-content-center text-light">
            <div className="row row-cols-3 mx-5 mt-1 mb-5 justify-content-center">
                
            <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4" data-aos="fade" data-aos-delay="300" data-aos-duration="2500">
                    <div className="position-relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <img className="card-img-top" src={MD99} alt="Budget App" />
                        {hovered && (
                        <div className="overlay d-flex flex-column justify-content-center align-items-center">
                         {/* <h4 className="overlay-header pb-1">MD99</h4> */}
                            <ul className="overlay-icons list-unstyled d-flex flex-row">
                                <li className="web-links">
                                    <a href="https://mydesign99.com" target="_blank" rel="noreferrer" title="Back End GitHub Repo">
                                        <img src={GlobeIcon} alt="Python Code" label="Live Site" className="web-icons"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        )}
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4" data-aos="fade" data-aos-delay="300" data-aos-duration="2500">
                    <div className="position-relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <img className="card-img-top" src={PocketPro} alt="Budget App" />
                        {hovered && (
                        <div className="overlay d-flex flex-column justify-content-center align-items-center">
                            {/* <h4 className="overlay-header pb-1">PocketPro</h4> */}
                            <ul className="overlay-icons list-unstyled d-flex flex-row">
                                <li className="web-links">
                                    <a href="https://pocket-pro-api.web.app/" target="_blank" rel="noreferrer" title="Back End GitHub Repo">
                                        <img src={GlobeIcon} alt="Python Code" className="web-icons"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        )}
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4" data-aos="fade" data-aos-delay="300" data-aos-duration="2500">
                    <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}>
                        <img src={SKG} alt="Sea Kayak Georgia" />
                        <img src={SKGPoster} alt="Sea Kayak Georgia" className="hidden"/>
                    </SlideshowLightbox>
                </div>


                <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4" data-aos="fade" data-aos-delay="300" data-aos-duration="2500">
                <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}> 
                    <img className="card-img-top" src={QRT} alt="Quick Reaction Team" />
                    <img src={QRTCrest} className="hidden" alt="Quick Response Team"/>
                    <img src={QRTCoin} className="hidden" alt="Quick Response Team" />
                </SlideshowLightbox>
                </div>

                <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4" data-aos="fade" data-aos-delay="300" data-aos-duration="2500">
                    <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}>
                        <img src={SMM} alt="Space Monkey Mafia"/>
                        <img src={SMM7} className="hidden" alt="Space Monkey Mafia"/>
                        <img src={SMM1} className="hidden"alt="Space Monkey Mafia"/>
                        <img src={SMM2} className="hidden"alt="Space Monkey Mafia" />
                        <img src={SMM3} className="hidden"alt="Space Monkey Mafia" />
                        <img src={SMM4} className="hidden"alt="Space Monkey Mafia" />
                        <img src={SMM5} className="hidden"alt="Space Monkey Mafia" />
                        <img src={SMM6} className="hidden"alt="Space Monkey Mafia" />
                    </SlideshowLightbox>
                </div>
                
                <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4" data-aos="fade" data-aos-delay="300" data-aos-duration="2500">
                    <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}>
                        <img src={StoicismOne} alt="Stoked on Stoicism"/>
                        <img src={MiniCover} className="hidden" alt="Stoked on Stoicism"/>
                        <img src={MiniCoverSpreadFull} className="hidden" alt="Stoked on Stoicism" />
                        <img src={MiniSeneca} className="hidden" alt="Stoked on Stoicism" />
                        <img src={MiniEpictiteus} className="hidden" alt="Stoked on Stoicism" />
                        <img src={MiniMarcus} className="hidden" alt="Stoked on Stoicism" />
                        <img src={MiniCoverBack} className="hidden" alt="Stoked on Stoicism" />
                    </SlideshowLightbox>
                </div>

                <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4" data-aos="fade" data-aos-delay="300" data-aos-duration="2500">
                    <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}>
                        <img src={StoicismTwo} alt="Stoked on Stoicism | History"/>
                        <img src={HistoryCoverFront} className="hidden" alt="Stoked on Stoicism | History"/>
                        <img src={HistoryMarcusSpread} className="hidden" alt="Stoked on Stoicism | History" />
                        <img src={HistoryEarly} className="hidden" alt="Stoked on Stoicism | History" />
                        <img src={HistoryLate} className="hidden" alt="Stoked on Stoicism | History" />
                        <img src={HistorySeneca} className="hidden" alt="Stoked on Stoicism | History" />
                        <img src={HistoryEpictetus} className="hidden" alt="Stoked on Stoicism | History" />
                        <img src={HistoryMarcus} className="hidden" alt="Stoked on Stoicism | History" />
                        <img src={HistoryMixedCoverFull} className="hidden" alt="Stoked on Stoicism | History" />
                        <img src={HistoryMixedSpread} className="hidden" alt="Stoked on Stoicism | History" />
                        <img src={HistoryFullCoverBack} className="hidden" alt="Stoked on Stoicism | History" />
                        <img src={HistoryCoverBack} className="hidden" alt="Stoked on Stoicism | History" />
                    </SlideshowLightbox>
                </div>

                <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4" data-aos="fade" data-aos-delay="300" data-aos-duration="2500">
                    <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}>
                        <img src={StoicismThree} alt="Stoked on Stoicism | Hellenism"/>
                        <img src={GodZineCoverFront} className="hidden" alt="Stoked on Stoicism | Hellenism"/>
                        <img src={GodZineOne} className="hidden" alt="Stoked on Stoicism | Hellenism" />
                        <img src={GodZineTwo} className="hidden" alt="Stoked on Stoicism | Hellenism" />
                        <img src={GodZineThree} className="hidden" alt="Stoked on Stoicism | Hellenism" />
                        <img src={GodZineFour} className="hidden" alt="Stoked on Stoicism | Hellenism" />
                        <img src={GodZineFive} className="hidden" alt="Stoked on Stoicism | Hellenism" />
                        <img src={GodZineSix} className="hidden" alt="Stoked on Stoicism | Hellenism" />
                        <img src={GodZineSeven} className="hidden" alt="Stoked on Stoicism | Hellenism" />
                        <img src={GodZineEight} className="hidden" alt="Stoked on Stoicism | Hellenism" />
                        <img src={GodZineNine} className="hidden" alt="Stoked on Stoicism | Hellenism" />
                        <img src={GodZineTen} className="hidden" alt="Stoked on Stoicism | Hellenism" />
                        <img src={GodZineEleven} className="hidden" alt="Stoked on Stoicism | Hellenism" />
                        <img src={GodZineTwelve} className="hidden" alt="Stoked on Stoicism | Hellenism" />
                        <img src={GodZineCoverBack} className="hidden" alt="Stoked on Stoicism | Hellenism" />
                        <img src={GodZineFullCoverSpread} className="hidden" alt="Stoked on Stoicism | Hellenism" />
                    </SlideshowLightbox>
                </div>

                <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4" data-aos="fade" data-aos-delay="300" data-aos-duration="2500">
                    <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}>
                        <img src={RangerHB} alt="EDC Ranger Handbook Primer"/>
                        <img src={CoverSpread} className="hidden" alt="EDC Weatherproof Ranger Handbook Primer"/>
                        <img src={ContourCover} className="hidden" alt="EDC Weatherproof Ranger Handbook Primer" />
                        <img src={HeroDisplay} className="hidden" alt="EDC Weatherproof Ranger Handbook Primer" />
                        <img src={CreedCover} className="hidden" alt="EDC Weatherproof Ranger Handbook Primer" />
                        <img src={PocketFront} className="hidden" alt="EDC Weatherproof Ranger Handbook Primer" />
                        <img src={PocketBack} className="hidden" alt="EDC Weatherproof Ranger Handbook Primer" />
                        <img src={PocketInside} className="hidden" alt="EDC Weatherproof Ranger Handbook Primer" />
                        <img src={KnotsSpread} className="hidden" alt="EDC Weatherproof Ranger Handbook Primer" />
                        <img src={CenterFold} className="hidden" alt="EDC Weatherproof Ranger Handbook Primer" />
                    </SlideshowLightbox>
                </div>

                <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4" data-aos="fade" data-aos-delay="300" data-aos-duration="2500">
                    <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}>
                        <img src={Phantom} alt="Phantom Fireworks"/>
                        <img src={FlyerFront} className="hidden" alt="Phantom Fireworks"/>
                        {/* <img src={FlyerBack} className="hidden" /> */}
                    </SlideshowLightbox>
                </div>

                <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4" data-aos="fade" data-aos-delay="300" data-aos-duration="2500">
                    <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}>
                        <img src={BrownForman} alt="Brown Forman"/>
                        <img src={BrownFormanOne} className="hidden" alt="Brown Forman"/>
                        <img src={BrownFormanTwo} className="hidden" alt="Brown Forman" />
                        <img src={BrownFormanThree} className="hidden" alt="Brown Forman" />
                    </SlideshowLightbox>
                </div>

                <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4" data-aos="fade" data-aos-delay="300" data-aos-duration="2500">
                    <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}>
                        <img src={Dreams} alt="Dream + Goal Posters"/>
                        <img src={FinalGreen} className="hidden" alt="Dream + Goal Posters"/>
                        <img src={FinalPink} className="hidden" alt="Dream + Goal Posters" />
                        <img src={GridSource_01} className="hidden" alt="Dream + Goal Posters" />
                        <img src={GridSource_02} className="hidden" alt="Dream + Goal Posters" />
                        <img src={Grid_01} className="hidden" alt="Dream + Goal Posters" />
                        <img src={Grid_02} className="hidden" alt="Dream + Goal Posters" />
                        <img src={Grid_03} className="hidden" alt="Dream + Goal Posters" />
                        <img src={Grid_04} className="hidden" alt="Dream + Goal Posters" />
                        <img src={Grid_05} className="hidden" alt="Dream + Goal Posters" />
                        <img src={Grid_06} className="hidden" alt="Dream + Goal Posters" />
                    </SlideshowLightbox>
                </div>

                <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4" data-aos="fade" data-aos-delay="300" data-aos-duration="2500">
                <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}> 
                    <img className="card-img-top" src={Boss} alt="3055 Strategies" />
                </SlideshowLightbox>
                </div>

                <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4" data-aos="fade" data-aos-delay="300" data-aos-duration="2500">
                <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}> 
                    <img className="card-img-top" src={Mindset} alt="Mindset Solution" />
                </SlideshowLightbox>
                </div>

                <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4" data-aos="fade" data-aos-delay="300" data-aos-duration="2500">
                <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}> 
                    <img className="card-img-top" src={Amperes} alt="Ampere's & Co." />
                    <img src={AmperesMain} className="hidden" alt="Ampere's & Co."/>
                </SlideshowLightbox>
                </div>

                <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4" data-aos="fade" data-aos-delay="300" data-aos-duration="2500">
                <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}> 
                    <img className="card-img-top" src={BG} alt="Bluegrass Gentleman" />
                    <img src={BG01} className="hidden" alt="Bluegrass Gentleman"/>
                    {/* <img src={BG02} className="hidden" alt="Bluegrass Gentleman" /> */}
                    <img src={BG03} className="hidden" alt="Bluegrass Gentleman" />
                    <img src={BGMain} className="hidden" alt="Bluegrass Gentleman" />
                    {/* <img src={BG04} className="hidden" alt="Bluegrass Gentleman" /> */}
                </SlideshowLightbox>
                </div>

                <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4" data-aos="fade" data-aos-delay="300" data-aos-duration="2500">
                    <SlideshowLightbox theme="night" showThumbnails={true} className="images" roundedImages={false}> 
                        <img className="card-img-top" src={EastCoast} alt="East Coast Magazine" />
                    </SlideshowLightbox>
                </div>
            </div>
        </div>
    </div>
  
  );
}

export default WebDevelopmentBody;