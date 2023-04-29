import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo-white.png';
import {
  BrowserRouter as Router,
  Link } from "react-router-dom";


function TopNav() {
  return (
    <div className="div">
        <nav className="navbar navbar-expand-lg navbar-dark test-light bg-dark">
            <Link to="/">
                <img className="mx-5 my-4"src={logo} style={{ width: 60 }} alt="Logo" />
            </Link>
            <button
                className="navbar-toggler mx-5"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/about" className="nav-item nav-link mx-3 px-3 top-nav">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Portfolio" className="nav-item nav-link mx-3 px-3 top-nav">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/blog" className="nav-item nav-link mx-3 px-3 top-nav">Blog</Link>
                </li>
                <li className="nav-item">
                <Link to="/contact" className="nav-item nav-link mx-3 px-3 top-nav">Contact</Link>
                </li>
                </ul>
            </div>
        </nav>
    </div>
  );
}

export default TopNav;
