import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import Contact from './Components/Contact';
import GraphicDesignBody from './Components/GraphicDesignBody';
// import './Components/App.css';





function App() {
  return (
    <div className="container-fluid h-100 g-0">
      <About />
      <GraphicDesignBody />
      {/* <Contact /> */}

    </div>
  );
}

export default App;
