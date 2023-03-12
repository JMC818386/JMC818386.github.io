import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo-white.png';

function TopNav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark text-light bg-dark ">
      <img className="mx-3 my-2"src={logo} style={{ width: 60 }} alt="Logo" />
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
          <a class="nav-item nav-link mx-3 px-3" href="https://www.jmcrawforddesign.com/" target="_blank">Portfolio</a>
          <a class="nav-item nav-link mx-3 px-3" href="https://www.jmcrawforddesign.com/" target="_blank">Blog</a>
          <a class="nav-item nav-link mx-3 px-3" href="https://www.jmcrawforddesign.com/" target="_blank">About</a>
          <a class="nav-item nav-link mx-3 px-3" href="https://www.jmcrawforddesign.com/" target="_blank">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;