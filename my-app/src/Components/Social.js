import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GitHubNav from './img/GithubNav.png';
import LinkedInNav from './img/LinkedInNav.png';
import CodeWarsNav from './img/CodeWarsNav.png';


function Social() {
  return (
    <div className="div">
        <nav className="navbar navbar-expand-lg navbar-dark text-light bg-dark">
            <div classname="div d-flex github-nav" style={{ position: 'relative', right: '50px' }}>
                 <a className="p-2" target="_blank" rel="noreferrer" href="https://github.com/JMC818386" ><img className="mx-1 my-1 github-nav" src={GitHubNav} style={{ width: 25 }} alt="GitHub" /></a>
            </div>            
            <div classname="div d-flex linkedin-nav" style={{ position: 'relative', right: '50px' }}>
                 <a className="p-2" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/john-michaelcrawford" ><img className="mx-1 my-1 linkedin-nav" src={LinkedInNav} style={{ width: 25 }} alt="LinkedIn" /></a>
            </div>
            <div classname="div d-flex codewars-nav" style={{ position: 'relative', right: '50px' }}>
                 <a className="p-2" target="_blank" rel="noreferrer" href="https://www.codewars.com/users/JMC818386" ><img className="mx-1 my-1 codewars-nav" src={CodeWarsNav} style={{ width: 25 }} alt="CodeWars" /></a>
            </div>
        </nav>
    </div>
  );
}

export default Social;