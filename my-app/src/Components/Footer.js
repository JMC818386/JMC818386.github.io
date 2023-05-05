import 'bootstrap/dist/css/bootstrap.min.css';
import GitHubNav from './img/GithubNav.png';
import LinkedInNav from './img/LinkedInNav.png';
import CodeWarsNav from './img/CodeWarsNav.png';
import logo from './img/logo-white.png';
import './App.css';
import {
  BrowserRouter as Router,
  Link } from "react-router-dom";


function Footer() {
  return (
    <footer>
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
          <div className="d-flex flex-row justify-content-center">
            <div classname="div mx-5 px-5 d-flex justify-content-center" style={{ position: 'relative'}}>
              <a className="p-2" target="_blank" rel="noopener" href="https://github.com/JMC818386" ><img src={GitHubNav} style={{ width: 30 }}/></a>
            </div>            
            <div classname="div mx-5 px-5 d-flex justify-content-center" style={{ position: 'relative'}}>
              <a className="p-2" target="_blank" rel="noopener" href="https://www.linkedin.com/in/john-michaelcrawford" ><img src={LinkedInNav} style={{ width: 30 }}/></a>
            </div>
            <div classname="div mx-5 px-5 d-flex justify-content-center" style={{ position: 'relative'}}>
              <a className="p-2" target="_blank" rel="noopener" href="https://www.codewars.com/users/JMC818386" ><img src={CodeWarsNav} style={{ width: 30 }}/></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;