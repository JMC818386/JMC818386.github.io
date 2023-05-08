import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav';
import Footer from './Footer';
import './App.css';
import HeroName from './img/HeroName.png';
import ThreeDname from './img/3Dname.png';

function Home() {
  return (
    <div>
      <TopNav />
      <div className="container-fluid p-5 d-flex align-items-center justify-content-center bg-dark text-light w-100" style={{ height: "80vh" }}>
        <div className="row d-flex justify-content-center">
          <div className="col-12 d-flex flex-wrap justify-content-center hero-name">
            <img className="mx-5 mb-0" src={ThreeDname} style={{ maxWidth: "100%" }} alt="Logo" />
            {/* <p className="d-flex justify-content-center text-header mb-0 pb-0">John-Michael Crawford</p> */}
            <p className="d-flex justify-content-center text-secondary mt-0 pt-0">Graphic Designer & Web Developer</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;