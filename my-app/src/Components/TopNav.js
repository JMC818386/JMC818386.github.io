import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo-white.png';
import GitHubNav from './img/GithubNav.png';
import LinkedInNav from './img/LinkedInNav.png';
import CodeWarsNav from './img/CodeWarsNav.png';
import './App.css';

function TopNav() {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  const isActive = (path) => activePath === path ? 'active-link' : '';

  return (
    <div className="">
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="div">
                <Link to="/">
                    <img className="mx-5 my-4" src={logo} style={{ width: 60 }} alt="Logo" />
                </Link>
                <button
                    className="navbar-toggler mx-4 mt-4 text-light"
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
                        <Link to="/about" className={`nav-item nav-link mx-3 px-3 top-nav d-flex justify-content-end ${isActive('/about')}`}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Portfolio" className={`nav-item nav-link mx-3 px-3 top-nav d-flex justify-content-end ${isActive('/Portfolio')}`}>Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog" className={`nav-item nav-link mx-3 px-3 top-nav d-flex justify-content-end ${isActive('/blog')}`}>Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className={`nav-item nav-link mx-3 px-3 top-nav d-flex justify-content-end ${isActive('/contact')}`}>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="d-flex justify-content-center" style={{ position: 'relative', right: '50px' }}>
                <a className="p-2 social-links" target="_blank" rel="noreferrer" href="https://github.com/JMC818386" ><img src={GitHubNav} style={{ width: 30 }} alt="GitHub Profile"/></a>
                <a className="p-2 social-links" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/john-michaelcrawford" ><img src={LinkedInNav} style={{ width: 30 }} alt="LinkedIn Profile"/></a>
                <a className="p-2 social-links" target="_blank" rel="noreferrer" href="https://www.codewars.com/users/JMC818386" ><img src={CodeWarsNav} style={{ width: 30 }} alt="CodeWars Profile"/></a>
            </div>
        </nav>
    </div>
  );
}

export default TopNav;
