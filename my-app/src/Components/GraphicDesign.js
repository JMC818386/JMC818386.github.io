import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav';
import PortfolioNav from './PortfolioNav';
import Footer from './Footer';
import './App.css';
import GraphicDesignBody from './GraphicDesignBody';

function GraphicDesign() {
  return (
  <div className="bg-dark">
    <TopNav />
    <PortfolioNav />
    <GraphicDesignBody />
    <Footer />
  </div>
  );
}

export default GraphicDesign;