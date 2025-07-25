import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';
import hamburger from './hamburger.png';
import Behance from './img/behance-social.png';
import Github from './img/github-social.png';
import LinkedIn from './img/linkedin-social.png';
import Facebook from './img/facebook-social.png';
import Instagram from './img/instagram-social.png';
import './App.css';

function TopNav() {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  const isActive = (path) => activePath === path ? 'active-link' : '';

  return (
    <div className="sticky-navbar">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="div">
          <Link to="/">
            <img className="mx-5 my-4" src={logo} style={{ width: 45 }} alt="Logo" />
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
            <img src={hamburger} alt="Menu" style={{ width: 30, height: 30 }} />
          </button>
        </div>
        <div className="collapse navbar-collapse text-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/about" className={`nav-item nav-link mx-3 px-3 top-nav d-flex justify-content-end ${isActive('/about')}`}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/Portfolio" className={`nav-item nav-link mx-3 px-3 top-nav d-flex justify-content-end ${isActive('/Portfolio')}`}>Portfolio</Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/blog" className={`nav-item nav-link mx-3 px-3 top-nav d-flex justify-content-end ${isActive('/blog')}`}>Blog</Link>
            </li> */}
            <li className="nav-item">
              <Link to="/contact" className={`nav-item nav-link mx-3 px-3 top-nav d-flex justify-content-end ${isActive('/contact')}`}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-center" style={{ position: 'relative', right: '50px' }}>
          <a className="p-2 social-links" target="_blank" rel="noreferrer" href="https://github.com/JMC818386"><img src={Github} style={{ width: 25 }} alt="GitHub Profile" /></a>

          <a className="p-2 social-links" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/john-michaelcrawford"><img src={LinkedIn} style={{ width: 25 }} alt="LinkedIn Profile" /></a>

          <a className="p-2 social-links" target="_blank" rel="noreferrer" href="https://www.facebook.com/"><img src={Facebook} style={{ width: 25 }} alt="Facebook Profile" /></a>

          <a className="p-2 social-links" target="_blank" rel="noreferrer" href="https://www.instagram.com/"><img src={Instagram} style={{ width: 25 }} alt="Instagram Profile" /></a>

          <a className="p-2 social-links" target="_blank" rel="noreferrer" href="https://www.behance.com/"><img src={Behance} style={{ width: 25 }} alt="Behance Profile" /></a>
        </div>
      </nav>
    </div>
  );
}

export default TopNav;
