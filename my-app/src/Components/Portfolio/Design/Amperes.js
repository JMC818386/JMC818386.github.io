import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from '../../TopNav';
import PortfolioNav from '../../PortfolioNav';
import Footer from '../../Footer';
import Logo from './img/logo.jpg';
import '../../App.css';
import GraphicDesignBody from '../../GraphicDesignBody';

function Amperes() {
  return (
  <div className="bg-dark">
    <TopNav />
    <PortfolioNav />
    <div className="container-fluid d-flex flex-wrap align-items-center justify-content-center bg-dark text-light">
      <div className="row row-cols-3 mx-5 mt-1 mb-5 justify-content-center">
        <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
            <img className="card-img-top" src={Logo} alt="Weather App" />
            <div className="overlay">
              <p className="overlay-text">Coming Soon</p>
            </div>
        </div>
      </div>
    </div>
    <GraphicDesignBody />
    <Footer />
  </div>
  );
}

export default Amperes;