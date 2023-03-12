import 'bootstrap/dist/css/bootstrap.min.css';
//import BgImage from './img/paper-background.png';

function Home() {
  return (
    <div className="container p-5 d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
      <div className="row">
        <div className="col-12">
          <h1 className="d-flex justify-content-center" style={{ fontSize: 80 }}>John-Michael Crawford</h1>
          <h4 className="d-flex justify-content-center text-secondary" style={{ fontSize: 30 }}>Graphic Designer & Aspiring Web Developer</h4>
        </div>
      </div>
    </div>
  );
}

export default Home;