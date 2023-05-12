import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav';
import PortfolioNav from './PortfolioNav';
import Footer from './Footer';
import Logo from './img/logo.jpg';
import './App.css';
import WebDevelopmentBody from './WebDevelopmentBody';
import {
    BrowserRouter as Router,
    Link } from "react-router-dom";
import Grid from './img/Grid.png';


function WebDevelopment() {
  return (
    <div style={{backgroundImage: `url(${Grid})`, backgroundSize: 'cover'}}>
        <TopNav />
        <PortfolioNav />
        <WebDevelopmentBody />
        <Footer />
    </div>
  
  );
}

export default WebDevelopment;