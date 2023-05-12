import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav';
import Footer from './Footer';
import './App.css';
import HeroName from './img/HeroName.png';
import ThreeDname from './img/3Dname.png';
import ThreeDbackground from './img/ThreeDBackground.png';
import Grid from './img/Grid.png';

function Home() {
  return (
    // <div className="bg-dark" style={{backgroundImage: `url(${ThreeDbackground})`, backgroundSize: 'cover'}}>
    <div style={{backgroundImage: `url(${Grid})`, backgroundSize: 'cover'}}>
      <TopNav />
      <div className="container px-5 d-flex align-items-center justify-content-center vh-100">
        <div className="row d-flex justify-content-center">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            {/* <img className="mx-5 mb-0" src={ThreeDbackground} style={{ maxWidth: "50%" }} alt="Logo" /> */}
            <p className="d-flex justify-content-center text-header text-light mb-0 pb-0" style={{ textShadow: "2px 2px 30px rgba(0,0,0,10)" }}>John-Michael Crawford</p>
            <p className="d-flex justify-content-center text-second mt-0 pt-0" style={{ textShadow: "2px 2px 30px rgba(0,0,0,10)" }}>Graphic Designer & Web Developer</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;