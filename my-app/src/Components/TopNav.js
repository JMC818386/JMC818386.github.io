import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo-white.png';
import {
  BrowserRouter as Router,
  Link } from "react-router-dom";

function TopNav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark text-light bg-dark shadow shadow-danger shadow-intensity-lg">
      <img className="mx-5 my-4"src={logo} style={{ width: 60 }} alt="Logo" />
      <button class="navbar-toggler mx-3"
        type="button"
        data-toggle="collapse" data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link to="/home" class="nav-item nav-link mx-3 px-3">Home</Link>
          <Link to="/about" class="nav-item nav-link mx-3 px-3">About</Link>
          <Link to="/Portfolio" class="nav-item nav-link mx-3 px-3">Portfolio</Link>
          <Link to="/blog" class="nav-item nav-link mx-3 px-3">Blog</Link>
          <Link to="/contact" class="nav-item nav-link mx-3 px-3">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;