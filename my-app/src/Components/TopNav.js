import 'bootstrap/dist/css/bootstrap.min.css';

function TopNav() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand ml-5" href="#">JMC</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-item nav-link">Portfolio</a>
                <a class="nav-item nav-link">Blog</a>
                <a class="nav-item nav-link">About</a>
                <a class="nav-item nav-link">Contact</a>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default TopNav;