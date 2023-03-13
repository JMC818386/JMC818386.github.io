import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Portfolio from './Portfolio';
import Blog from './Blog';
import About from './About';
import Contact from './Contact';

function Main() {
  return (

    <div className="container-fluid bg-dark text-light">
        <Home />
        <About />
        <Portfolio />
        <Blog />
        <Contact />
    </div>
  );
}

export default Main;