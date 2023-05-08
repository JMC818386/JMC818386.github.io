import 'bootstrap/dist/css/bootstrap.min.css';
import GitHubNav from './img/GithubNav.png';
import LinkedInNav from './img/LinkedInNav.png';
import CodeWarsNav from './img/CodeWarsNav.png';
import './App.css';


function Footer() {
  return (
    <footer className="bg-dark">
      <div className="container d-flex justify-content-center pb-5 bg-dark">
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
              <a className="p-2 social-links-footer" target="_blank" rel="noreferrer" href="https://github.com/JMC818386" ><img src={GitHubNav} alt="GitHub Profile" style={{ width: 30 }}/></a>
            </div>            
            <div classname="div mx-5 px-5 d-flex justify-content-center" style={{ position: 'relative'}}>
              <a className="p-2 social-links-footer" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/john-michaelcrawford" ><img src={LinkedInNav} alt="LinkedIn Profile" style={{ width: 30 }}/></a>
            </div>
            <div classname="div mx-5 px-5 d-flex justify-content-center" style={{ position: 'relative'}}>
              <a className="p-2 social-links-footer" target="_blank" rel="noreferrer" href="https://www.codewars.com/users/JMC818386" ><img src={CodeWarsNav} alt="CodeWars Profile" style={{ width: 30 }}/></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;