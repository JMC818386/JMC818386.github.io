import 'bootstrap/dist/css/bootstrap.min.css';
//import BgImage from './img/paper-background.png';
import TopNav from './TopNav';
import Footer from './Footer';
import './App.css';

function Home() {
  return (
    <div>
      <TopNav />
      <div className="container-fluid p-5 d-flex align-items-center justify-content-center bg-dark text-light" style={{ height: "80vh" }}>
        <div className="row">
          <div className="col-12">
            <h1 className="d-flex justify-content-center text-header">John-Michael Crawford</h1>
            <h4 className="d-flex justify-content-center text-secondary">Graphic Designer & Web Developer</h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;