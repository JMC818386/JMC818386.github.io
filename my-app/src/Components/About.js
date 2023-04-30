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
          <div className="col-7 p-4 d-flex align-items-center">
            <div>
            <p>There isn't an aspect of art and design that doesn't draw my interest. I have always had a passion for art history and the evolution of visual communication.  My work as a designer and developer is a reflection of what and who I surround myself with. Collaborating with talented and motivated individuals is my life's passion, and a critical aspect of what I aim to accomplish professionally. I work in both print and digital media, utilizing holistic approaches in to deliver effective and sustainable messages and user experiences. My current focus is in web development and user experience design.</p>
              <div className="d-flex justify-content-start">
                <button className="mt-5 ms-4 p-2 bg-dark text-light border border-secondary rounded">Resume</button>
                <button className="mt-5 ms-4 p-2 bg-dark text-light border border-secondary rounded">Extended Resume</button>
              </div>
            </div>
          </div>
          <div className="col-5 d-flex justify-content-center">
            <img src={aboutPhoto} alt="About Image" className="d-flex justify-content-start" style={{ height: 500 }}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;




