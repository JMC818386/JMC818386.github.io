
import React from 'react';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';


function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ScrollToTop />
      <div className="flex-grow-1">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
