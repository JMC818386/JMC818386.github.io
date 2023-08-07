import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from '../../TopNav';
import PortfolioNav from '../../PortfolioNav';
import Footer from '../../Footer';
import MiniCover from './img/Stoked_One/Mini_Cover.png';
import SpreadOne from './img/Stoked_One/Mini_CoverSpread_Full.png';
import SpreadTwo from './img/Stoked_One/Mini_Seneca.png';
import SpreadThree from './img/Stoked_One/Mini_Epictiteus.png';
import SpreadFour from './img/Stoked_One/Mini_Marcus.png';
import BackCover from './img/Stoked_One/Mini_Cover_Back.png';
import '../../App.css';
import GraphicDesignBody from '../../GraphicDesignBody';

function StokedOne() {
  return (
  <div className="bg-dark">
    <TopNav />
    <PortfolioNav />
    <div className="container">
      <div className="row header">
        <div className="col-6 image">
          <img className="cover" src={MiniCover} alt="Mini Zine Cover"/>
        </div>
        <div className="col-6 text">
          <p className="sub-title text-secondary">Stoked On Stoicism</p>
          <h1 className="main-title text-light">Late Greats</h1>
          <p className="body-text text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className="spreads">
        <div className="row spread-one">
          <img className="spread" src={SpreadOne} alt="Mini Spread One"/>
        </div>
        <div className="row spread-two">
          <img className="spread" src={SpreadTwo} alt="Mini Spread Two"/>
        </div>
        <div className="row spread-three">
          <img className="spread" src={SpreadThree} alt="Mini Spread Three"/>
        </div>
        <div className="row spread-four">
          <img className="spread" src={SpreadFour} alt="Mini Spread Four"/>
        </div>
        <div className="row footer">
          <div className="col-6 image">
            <img className="spread" src={BackCover} alt="Mini Zine Back Cover"/>
          </div>
          <div className="col-6 text">
            <p className="sub-title text-secondary">Stoked On Stoicism</p>
            <h1 className="main-title text-light">Late Greats</h1>
            <p className="body-text text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </div>
    <GraphicDesignBody />
    <Footer />
  </div>
  );
}

export default StokedOne;