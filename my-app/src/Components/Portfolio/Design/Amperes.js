import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from '../../TopNav';
import PortfolioNav from '../../PortfolioNav';
import Footer from '../../Footer';
import AmperesAnd from './img/amperes-main.jpg';
import '../../App.css';
import GraphicDesignBody from '../../GraphicDesignBody';

function Amperes() {
  return (
  <div className="bg-dark">
    <TopNav />
    <PortfolioNav />
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex flex-md-row flex-column align-items-center m-3">
          <img src={AmperesAnd} alt="Ampere's & Co." className="img-fluid" />
          
          <div className="ml-md-4 mt-4 mt-md-0 flex-grow-1">
            <p className="text-light port-body-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
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