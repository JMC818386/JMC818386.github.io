import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Link } from "react-router-dom";

function PortfolioNav() {
  return (
  <div>
    <div className="container-fluid d-flex justify-content-center bg-dark text-light pb-0 mb-0">
      <div className="row d-flex justify-content-center pb-0 mb-0">
        <div className="col-12 pb-0 mb-0">
          <p className="text-title text-light pb-0 mb-0">PORTFOLIO</p>
        </div>
      </div>  
    </div>
    <div className="container-fluid d-flex align-items-center justify-content-center bg-dark">
      <div className="row justify-content-around">
        <div className="col-6 card-port d-flex justify-content-center">
        <Link to="/graphic-design" className="text-subnav mb-4 d-flex justify-content-center">GRAPHIC DESIGN</Link>
        </div>
        <div className="col-6 card-port d-flex justify-content-center">
        <Link to="/web-development" className="text-subnav mb-4 d-flex justify-content-center">WEB DEVELOPMENT</Link>
        </div>
      </div>
    </div>
  </div>
  );
}

export default PortfolioNav;