import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Amperes from './Portfolio/Design/img/amperes&.jpg';
import BG from './Portfolio/Design/img/bg.jpg';
import Boss from './Portfolio/Design/img/boss.jpg';
import BrownForman from './Portfolio/Design/img/brownforman.jpg';
import Dreams from './Portfolio/Design/img/dreams.jpg';
import EastCoast from './Portfolio/Design/img/eastcoast.jpg';
import Mindset from './Portfolio/Design/img/mindset.jpg';
import Phantom from './Portfolio/Design/img/phantom.jpg';
import QRT from './Portfolio/Design/img/QRT.jpg';
import RangerHB from './Portfolio/Design/img/rangerhandbook.jpg';
import SKG from './Portfolio/Design/img/skg.jpg';
import SMM from './Portfolio/Design/img/smm.jpg';
import StoicismOne from './Portfolio/Design/img/stoicism1.jpg';
import StoicismTwo from './Portfolio/Design/img/stoicism2.jpg';
import StoicismThree from './Portfolio/Design/img/stoicism3.jpg';
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
          <SlideshowLightbox theme="night" showThumbnails={false} className="images" roundedImages={true}>
            <img src={StoicismOne}/>
            <img src={StoicismOne} className="hidden"/>
            <img src={StoicismOne} className="hidden" />
            <img src={StoicismOne} className="hidden" />
            <img src={StoicismOne} className="hidden" />
            <img src={StoicismOne} className="hidden" />
            <img src={StoicismOne} className="hidden" />
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
          <SlideshowLightbox theme="night" showThumbnails={false} className="images" roundedImages={true}>
            <img src={StoicismTwo}/>
            <img src={StoicismTwo} className="hidden"/>
            <img src={StoicismTwo} className="hidden" />
            <img src={StoicismTwo} className="hidden" />
            <img src={StoicismTwo} className="hidden" />
            <img src={StoicismTwo} className="hidden" />
            <img src={StoicismTwo} className="hidden" />
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
          <SlideshowLightbox theme="night" showThumbnails={false} className="images" roundedImages={true}>
            <img src={StoicismThree}/>
            <img src={StoicismThree} className="hidden"/>
            <img src={StoicismThree} className="hidden" />
            <img src={StoicismThree} className="hidden" />
            <img src={StoicismThree} className="hidden" />
            <img src={StoicismThree} className="hidden" />
            <img src={StoicismThree} className="hidden" />
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
          <SlideshowLightbox theme="night" showThumbnails={false} className="images" roundedImages={true}>
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
          <SlideshowLightbox theme="night" showThumbnails={false} className="images" roundedImages={true}>
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
          <SlideshowLightbox theme="night" showThumbnails={false} className="images" roundedImages={true}>
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
          <SlideshowLightbox theme="night" showThumbnails={false} className="images" roundedImages={true}>
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
          <SlideshowLightbox theme="night" showThumbnails={false} className="images" roundedImages={true}>
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
          <SlideshowLightbox theme="night" showThumbnails={false} className="images" roundedImages={true}>
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