import 'bootstrap/dist/css/bootstrap.min.css';
import aboutPhoto from './img/about-me-photo.png'
//import BgImage from './img/paper-background.png';

function About() {
  return (
    <div className="container-fluid p-5" style={{ height: "90vh" }}>
      <div className="row">
        <div className="col-5 d-flex justify-content-center">
          <img src={aboutPhoto} alt="About Image" className="d-flex justify-content-start" style={{ height: 500 }}/>
        </div>
        <div className="col-7 p-4 d-flex align-items-center">
          <div>
            <h1 className="mt-4 ms-4" style={{ fontSize: 50 }}>John-Michael Crawford</h1>
            <h6 className="ms-5 text-secondary" style={{ fontSize: 20 }}>Lexington, Kentucky</h6>
            <h3 className="mt-4 ms-4">University of Kentucky Graduate</h3>
            <h6 className="ms-5 text-secondary">B.S. Digital Media and Design</h6>
            <h6 className="ms-5 text-secondary">B.A. Art History and Visual Studies</h6>
            {/* <h3 className="mt-4 ms-4">United States Army Veteran</h3> */}
            <button className="mt-5 ms-4 p-2 bg-dark text-light border border-secondary rounded">Resume</button>
            <button className="mt-5 ms-4 p-2 bg-dark text-light border border-secondary rounded">Extended Resume</button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;