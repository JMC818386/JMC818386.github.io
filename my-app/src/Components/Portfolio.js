import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav';
import Footer from './Footer';
import BgImage from './img/paper-background.png';
import './App.css';

function Portfolio() {
  return (
  <div>
    <TopNav />
      <div className="container-fluid d-flex align-items-center justify-content-center bg-dark text-light">
        <div className="row mt-5">
          <div className="col-4">
            <div className="port-card card rounded-0 text-light m-4" style={{ width: "18rem" }}>
              <img className="card-img-top" src={BgImage} style={{ width: "18rem" }}alt="Weather App" />
              <div className="p-4">
                <h5 className="port-card-header">Weather App</h5>
                <p className="port-card-body">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="port-card card rounded-0 text-light m-4" style={{ width: "18rem" }}>
              <img className="card-img-top" src={BgImage} style={{ width: "18rem" }}alt="To-Do-List" />
              <div className="p-4">
                <h5 className="port-card-header">To-Do List</h5>
                <p className="port-card-body">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="port-card card rounded-0 text-light m-4" style={{ width: "18rem" }}>
              <img className="card-img-top" src={BgImage} style={{ width: "18rem" }}alt="Tic-Tac-Toe" />
              <div className="p-4">
                <h5 className="port-card-header">Tic-Tac-Toe</h5>
                <p className="port-card-body">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center bg-dark text-light">
        <div className="row mt-5">
          <div className="col-4">
            <div className="port-card card rounded-0 text-light m-4" style={{ width: "18rem" }}>
              <img className="card-img-top" src={BgImage} style={{ width: "18rem" }}alt="Weather App" />
              <div className="p-4">
                <h5 className="port-card-header">Weather App</h5>
                <p className="port-card-body">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="port-card card rounded-0 text-light m-4" style={{ width: "18rem" }}>
              <img className="card-img-top" src={BgImage} style={{ width: "18rem" }}alt="To-Do-List" />
              <div className="p-4">
                <h5 className="port-card-header">To-Do List</h5>
                <p className="port-card-body">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="port-card card rounded-0 text-light m-4" style={{ width: "18rem" }}>
              <img className="card-img-top" src={BgImage} style={{ width: "18rem" }}alt="Tic-Tac-Toe" />
              <div className="p-4">
                <h5 className="port-card-header">Tic-Tac-Toe</h5>
                <p className="port-card-body">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer />
  </div>
  );
}

export default Portfolio;