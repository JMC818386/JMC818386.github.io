import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopNav from './Components/TopNav';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
        <div>
          <TopNav />
          <Main />
          <Footer />
        </div>
  );
}

export default App;
