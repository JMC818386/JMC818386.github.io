import 'bootstrap/dist/css/bootstrap.min.css';
import GitHubNav from './img/GithubNav.png';
import LinkedInNav from './img/LinkedInNav.png';
import CodeWarsNav from './img/CodeWarsNav.png';
import Behance from './img/behance-social.png';
import Github from './img/github-social.png';
import LinkedIn from './img/linkedin-social.png';
import Facebook from './img/facebook-social.png';
import Instagram from './img/instagram-social.png';
import './App.css';


function Footer() {
  return (
    <footer className="">
      <div className="container d-flex justify-content-center pb-5">
        <div className="row d-flex justify-content-center">
          <div>
              <hr
                style={{
                  color: 'white',
                  height: '1px',
                }}
              />
            </div>
          {/* <div className="d-flex flex-row justify-content-center">
            <div classname="div mx-5 px-5 d-flex justify-content-center" style={{ position: 'relative'}}>
              <a className="p-2 social-links" target="_blank" rel="noreferrer" href="https://github.com/JMC818386"><img src={Github} style={{ width: 25 }} alt="GitHub Profile" /></a>
                        
              <a className="p-2 social-links" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/john-michaelcrawford"><img src={LinkedIn} style={{ width: 25 }} alt="LinkedIn Profile" /></a>
              
              <a className="p-2 social-links" target="_blank" rel="noreferrer" href="https://www.facebook.com/"><img src={Facebook} style={{ width: 25 }} alt="Facebook Profile" /></a>
              
              <a className="p-2 social-links" target="_blank" rel="noreferrer" href="https://www.instagram.com/"><img src={Instagram} style={{ width: 25 }} alt="Instagram Profile" /></a>
              
              <a className="p-2 social-links" target="_blank" rel="noreferrer" href="https://www.behance.com/"><img src={Behance} style={{ width: 25 }} alt="Behance Profile" /></a>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;