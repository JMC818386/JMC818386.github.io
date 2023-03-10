import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopNav from './Components/TopNav';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col-12">
          <TopNav />
          <Main />
          <Footer />
        </div>
      </div>
    </div>  
  );
}

export default App;
