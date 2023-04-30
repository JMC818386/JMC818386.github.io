import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav';
import PortfolioNav from './PortfolioNav';
import Footer from './Footer';
import WebDevelopmentBody from './WebDevelopmentBody';
import Logo from './img/logo.jpg';
import './App.css';
import {
  BrowserRouter as Router,
  Link } from "react-router-dom";

function Portfolio() {
  return (
  <div>
    <TopNav />
    <PortfolioNav />
    <WebDevelopmentBody />
    <Footer />
  </div>
  );
}

export default Portfolio;