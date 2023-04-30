import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './img/logo.jpg';
import './App.css';
import {
    BrowserRouter as Router,
    Link } from "react-router-dom";
import { useRef } from 'react';


function GraphicDesignBody() {

    const topRef = useRef(null);

    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    
  return (
  <div>
    <div className="container-fluid d-flex flex-wrap align-items-center justify-content-center bg-dark text-light">
      <div className="row row-cols-3 mx-5 mt-1 mb-5 justify-content-center">
        <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
          <Link to="/stoked-one" className="" onClick={handleClick}>
            <img className="card-img-top" src={Logo} alt="Weather App" />
            <div className="overlay">
              <p className="overlay-text">Stoked on Stoicism Mini</p>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
          <Link to="/stoked-two" className="" onClick={handleClick}>
            <img className="card-img-top" src={Logo} alt="To-Do-List" />
            <div className="overlay">
              <p className="overlay-text">Stoked on Stoicism History</p>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
          <Link to="/stoked-three" className="" onClick={handleClick}>
            <img className="card-img-top" src={Logo} alt="Tic-Tac-Toe" />
            <div className="overlay">
              <p className="overlay-text">Stoked on Stoicism Pantheon</p>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
          <Link to="/ranger" className="" onClick={handleClick}>
            <img className="card-img-top" src={Logo} alt="Weather App" />
            <div className="overlay">
              <p className="overlay-text">Ranger Handbook Primer</p>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
          <Link to="/skg" className="" onClick={handleClick}>
            <img className="card-img-top" src={Logo} alt="Weather App" />
            <div className="overlay">
              <p className="overlay-text">Sea Kayak Georgia</p>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
          <Link to="/phantom" className="" onClick={handleClick}>
            <img className="card-img-top" src={Logo} alt="Weather App" />
            <div className="overlay">
              <p className="overlay-text">Phantom Fireworks</p>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
          <Link to="/brown-forman" className="" onClick={handleClick}>
            <img className="card-img-top" src={Logo} alt="Weather App" />
            <div className="overlay">
              <p className="overlay-text">Brown Forman</p>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
          <Link to="/dream-posters" className="" onClick={handleClick}>
            <img className="card-img-top" src={Logo} alt="Weather App" />
            <div className="overlay">
              <p className="overlay-text">Dream Posters</p>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
          <Link to="/space-monkey" className="" onClick={handleClick}>
            <img className="card-img-top" src={Logo} alt="Weather App" />
            <div className="overlay">
              <p className="overlay-text">Space Monkey Mafia</p>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
          <Link to="/boss-strategies" className="" onClick={handleClick}>
            <img className="card-img-top" src={Logo} alt="Weather App" />
            <div className="overlay">
              <p className="overlay-text">3055 Strategies</p>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
          <Link to="/qrt" className="" onClick={handleClick}>
            <img className="card-img-top" src={Logo} alt="Weather App" />
            <div className="overlay">
              <p className="overlay-text">QRT</p>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
          <Link to="/mindset" className="" onClick={handleClick}>
            <img className="card-img-top" src={Logo} alt="Weather App" />
            <div className="overlay">
              <p className="overlay-text">Mindset Solutions</p>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
            <Link to="/amperes" onClick={handleClick}>
             <img className="card-img-top" src={Logo} alt="Weather App" />
            <div className="overlay">
                <p className="overlay-text">Ampere's &amp; Co.</p>
            </div>
            </Link>
            <div ref={topRef}></div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
            <Link to="/east-coast" onClick={handleClick}>
            <img className="card-img-top" src={Logo} alt="Weather App" />
            <div className="overlay">
              <p className="overlay-text">East Coast Magazine</p>
            </div>
          </Link>
          <div ref={topRef}></div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default GraphicDesignBody;