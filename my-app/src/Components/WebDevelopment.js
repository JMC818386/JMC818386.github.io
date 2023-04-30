import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav';
import PortfolioNav from './PortfolioNav';
import Footer from './Footer';
import Logo from './img/logo.jpg';
import './App.css';
import {
    BrowserRouter as Router,
    Link } from "react-router-dom";

function WebDevelopment() {
  return (
    <div>
        <TopNav />
        <PortfolioNav />
        <div className="container-fluid d-flex flex-wrap align-items-center justify-content-center bg-dark text-light">
            <div className="row row-cols-3 mx-5 mt-1 mb-5 justify-content-center">
                <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
                <Link to="/about" className="">
                    <img className="card-img-top" src={Logo} alt="Weather App" />
                    <div className="overlay">
                    <p className="overlay-text">PocketPro</p>
                    </div>
                </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
                <Link to="/about" className="">
                    <img className="card-img-top" src={Logo} alt="To-Do-List" />
                    <div className="overlay">
                    <p className="overlay-text">Weather App</p>
                    </div>
                </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
                <Link to="/about" className="">
                    <img className="card-img-top" src={Logo} alt="Tic-Tac-Toe" />
                    <div className="overlay">
                    <p className="overlay-text">Todo List</p>
                    </div>
                </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
                <Link to="/about" className="">
                    <img className="card-img-top" src={Logo} alt="Weather App" />
                    <div className="overlay">
                    <p className="overlay-text">Tic-Tac-Toe</p>
                    </div>
                </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
                <Link to="/about" className="">
                    <img className="card-img-top" src={Logo} alt="Weather App" />
                    <div className="overlay">
                    <p className="overlay-text">Restaurant Menu</p>
                    </div>
                </Link>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  
  );
}

export default WebDevelopment;