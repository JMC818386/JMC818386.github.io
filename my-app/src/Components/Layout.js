import React from 'react';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
