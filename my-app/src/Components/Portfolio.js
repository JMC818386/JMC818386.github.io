import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav';
// import PortfolioNav from './PortfolioNav';
import Footer from './Footer';
import './App.css';
import Grid from './img/Grid.png';
import GraphicDesignBody from './GraphicDesignBody';
import WebDevelopmentBody from './WebDevelopmentBody';

function Portfolio() {
  return (
  <div className="bg-main-dark">
    <TopNav />
    {/* <PortfolioNav /> */}
    {/* <WebDevelopmentBody /> */}
    <GraphicDesignBody />
    <Footer />
  </div>
  );
}

export default Portfolio;