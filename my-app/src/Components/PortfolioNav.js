import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Link } from "react-router-dom";

function PortfolioNav() {
  return (
  <div>
    <div className="container-fluid d-flex align-items-center justify-content-center bg-dark text-light">
      <div className="row mx-5 justify-content-center">
        <div className="col-12">
          <p className="text-title text-light">PORTFOLIO</p>
        </div>
      </div>  
    </div>
    <div className="container-fluid d-flex align-items-center justify-content-around bg-dark text-light">
      <div className="row mx-5 justify-content-around">
        <div className="col-6 card-port">
        <Link to="/graphic-design" className="text-subnav text-light mx-2 mb-0">GRAPHIC DESIGN</Link>
        </div>
        <div className="col-6 text-light card-port">
        <Link to="/web-development" className="text-subnav text-light mx-2 mb-0">WEB DEVELOPMENT</Link>
        </div>
      </div>
    </div>
  </div>
  );
}

export default PortfolioNav;