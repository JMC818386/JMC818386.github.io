import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Portfolio from './Portfolio';
import Blog from './Blog';
import About from './About';
import Contact from './Contact';

function Main() {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <Home />
                <Portfolio />
                <Blog />
                <About />
                <Contact />
            </div>
        </div>
    </div>
  );
}

export default Main;