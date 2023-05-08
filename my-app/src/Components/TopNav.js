import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo-white.png';
import GitHubNav from './img/GithubNav.png';
import LinkedInNav from './img/LinkedInNav.png';
import CodeWarsNav from './img/CodeWarsNav.png';
import {
  BrowserRouter as Router,
  Link } from "react-router-dom";


function TopNav() {
  return (
        <div className="bg-dark">
            <nav className="navbar navbar-expand-lg navbar-dark text-light bg-dark fixed-top">
                <div className="div">
                    <Link to="/">
                        <img className="mx-5 my-4"src={logo} style={{ width: 60 }} alt="Logo" />
                    </Link>
                    <button
                        className="navbar-toggler mx-4 mt-4"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/about" className="nav-item nav-link mx-3 px-3 top-nav d-flex justify-content-end">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Portfolio" className="nav-item nav-link mx-3 px-3 top-nav d-flex justify-content-end">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog" className="nav-item nav-link mx-3 px-3 top-nav d-flex justify-content-end">Blog</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/contact" className="nav-item nav-link mx-3 px-3 top-nav d-flex justify-content-end">Contact</Link>
                    </li>
                    </ul>
                </div>
                <div classname="div d-flex justify-content-center" style={{ position: 'relative', right: '50px' }}>
                    <a className="p-2 social-links" target="_blank" rel="noreferrer" href="https://github.com/JMC818386" ><img src={GitHubNav} style={{ width: 30 }} alt="GitHub Profile"/></a>
                </div>            
                <div classname="div d-flex justify-content-center" style={{ position: 'relative', right: '50px' }}>
                    <a className="p-2 social-links" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/john-michaelcrawford" ><img src={LinkedInNav} style={{ width: 30 }} alt="LinkedIn Profile"/></a>
                </div>
                <div classname="div d-flex justify-content-center" style={{ position: 'relative', right: '50px' }}>
                    <a className="p-2 social-links" target="_blank" rel="noreferrer" href="https://www.codewars.com/users/JMC818386" ><img src={CodeWarsNav} style={{ width: 30 }} alt="CodeWars Profile"/></a>
                </div>
            </nav>
        </div>
  );
}

export default TopNav;
