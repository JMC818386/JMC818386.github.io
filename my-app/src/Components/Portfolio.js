import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav';
import PortfolioNav from './PortfolioNav';
import Footer from './Footer';
import WebDevelopmentBody from './WebDevelopmentBody';
import './App.css';

function Portfolio() {
  return (
  <div className="bg-dark">
    <TopNav />
    <PortfolioNav />
    <WebDevelopmentBody />
    <Footer />
  </div>
  );
}

export default Portfolio;