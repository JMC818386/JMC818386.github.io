import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo-white.png';
import {
  BrowserRouter as Router,
  Link } from "react-router-dom";

function TopNav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark text-light bg-dark">
      <Link to="/">
        <img className="mx-5 my-4"src={logo} style={{ width: 60 }} alt="Logo" />
      </Link>
      <button class="navbar-toggler mx-3"
        type="button"
        data-toggle="collapse" data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-start" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link to="/about" class="nav-item nav-link mx-3 px-3 top-nav">About</Link>
          <Link to="/Portfolio" class="nav-item nav-link mx-3 px-3 top-nav">Portfolio</Link>
          <Link to="/blog" class="nav-item nav-link mx-3 px-3 top-nav">Blog</Link>
          <Link to="/contact" class="nav-item nav-link mx-3 px-3 top-nav">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;