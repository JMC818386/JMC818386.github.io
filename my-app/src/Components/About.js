import 'bootstrap/dist/css/bootstrap.min.css';
import aboutPhoto from './img/about-me-photo.png'
//import BgImage from './img/paper-background.png';
import TopNav from './TopNav';
import Footer from './Footer';
import './App.css';

function About() {
  return (
    <div>
      <TopNav />
      <div className="container-fluid p-5 bg-dark text-light" style={{ height: "90vh" }}>
        <div className="row mt-5 rounded p-4">
          <div className="col-5 d-flex justify-content-center">
            <img src={aboutPhoto} alt="About Image" className="d-flex justify-content-start" style={{ height: 500 }}/>
          </div>
          <div className="col-7 p-4 d-flex align-items-center">
            <div>
              <h1 className="mt-4 ms-4 text-light" style={{ fontSize: 50 }}>John-Michael Crawford</h1>
              <h6 className="ms-5 about-body" style={{ fontSize: 20 }}>Lexington, Kentucky</h6>
              <h3 className="mt-4 ms-4 about-subheader">Freelance Graphic Designer</h3>
              <h6 className="ms-5 about-body">Part-Time 2011-2023</h6>
              <h3 className="mt-4 ms-4 about-subheader">United States Army Veteran</h3>
              <h3 className="mt-4 ms-4 about-subheader">University of Kentucky Graduate</h3>
              <h6 className="ms-5 about-body">B.S. Digital Media and Design</h6>
              <h6 className="ms-5 about-body">B.A. Art History and Visual Studies</h6>
              <div className="d-flex justify-content-start">
                <button className="mt-5 ms-4 p-2 bg-dark text-light border border-secondary rounded">Resume</button>
                <button className="mt-5 ms-4 p-2 bg-dark text-light border border-secondary rounded">Extended Resume</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;