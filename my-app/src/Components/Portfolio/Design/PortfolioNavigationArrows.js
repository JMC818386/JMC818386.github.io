import React from 'react';
import { Link } from 'react-router-dom';
import { getNavigationData } from './portfolioNavigation';
import '../../App.css';

function PortfolioNavigationArrows({ currentPath }) {
  const { prevProject, nextProject } = getNavigationData(currentPath);

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!prevProject || !nextProject) {
    return null;
  }

  return (
    <div className="portfolio-navigation d-flex justify-content-between align-items-center p-4">
      <Link
        to={prevProject.path}
        className="portfolio-nav-arrow portfolio-nav-prev d-flex align-items-center text-decoration-none"
        title={prevProject.name}
        onClick={handleNavClick}
      >
        <span className="portfolio-arrow-icon">←</span>
        <span className="portfolio-nav-text ms-2">Previous</span>
      </Link>

      <div className="portfolio-nav-center">
        <Link
          to="/graphic-design"
          className="portfolio-nav-home text-decoration-none"
          title="Back to Portfolio"
          onClick={handleNavClick}
        >
          <span className="portfolio-grid-icon">⊞</span>
          <span className="portfolio-nav-text ms-1">Portfolio</span>
        </Link>
      </div>

      <Link
        to={nextProject.path}
        className="portfolio-nav-arrow portfolio-nav-next d-flex align-items-center text-decoration-none"
        title={nextProject.name}
        onClick={handleNavClick}
      >
        <span className="portfolio-nav-text me-2">Next</span>
        <span className="portfolio-arrow-icon">→</span>
      </Link>
    </div>
  );
}

export default PortfolioNavigationArrows;
