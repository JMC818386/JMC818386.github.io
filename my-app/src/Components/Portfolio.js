import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav';
// import PortfolioNav from './PortfolioNav';
import Footer from './Footer';
import WebDevelopmentBody from './WebDevelopmentBody';
import './App.css';
import Grid from './img/Grid.png';

function Portfolio() {
  return (
  <div style={{backgroundImage: `url(${Grid})`, backgroundSize: 'cover'}}>
    <TopNav />
    {/* <PortfolioNav /> */}
    <WebDevelopmentBody />
    <Footer />
  </div>
  );
}

export default Portfolio;