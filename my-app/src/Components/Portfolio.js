import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav';
import Footer from './Footer';

function Portfolio() {
  return (
  <div>
    <TopNav />
      <div className="container-fluid p-5 d-flex align-items-center justify-content-center bg-dark bg-gradient text-light" style={{ height: "90vh" }}>
        <div className="row">
          <div className="col-12">
          <h1 className="d-flex justify-content-center" style={{ fontSize: 80 }}>Portfolio</h1>
          </div>
        </div>
      </div>
    <Footer />
  </div>
  );
}

export default Portfolio;