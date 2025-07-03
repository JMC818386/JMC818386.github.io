import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav';
import PortfolioNav from './PortfolioNav';
import Footer from './Footer';
import './App.css';
import GraphicDesignBody from './GraphicDesignBody';
import Grid from './img/Grid.png';


function GraphicDesign() {
  return (
  <div style={{backgroundImage: `url(${Grid})`, backgroundSize: 'cover'}}>
    <TopNav />
    {/* <PortfolioNav /> */}
    <GraphicDesignBody />
    <Footer />
  </div>
  );
}

export default GraphicDesign;