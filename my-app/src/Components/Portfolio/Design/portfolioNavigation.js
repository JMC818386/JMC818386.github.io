// Portfolio navigation utility
export const portfolioProjects = [
  { path: '/md99', name: 'MyDesign99 DGE' },
  { path: '/ideal-experience', name: 'Ideal Generative AI Experience' },
  { path: '/clover', name: 'Clover' },
  { path: '/ag-con', name: 'AG_CON 2026' },
  { path: '/silent-battle', name: 'Silent Battle' },
  // { path: '/rowans-creek', name: "Rowan's Creek" },
  // { path: '/railbird', name: 'Railbird' },
  // { path: '/three-willows', name: 'Three Willows' },
  { path: '/total-pt-connect', name: 'Total PT Connect' },
  { path: '/stoked-two', name: 'Stoked on Stoicism History' },
  { path: '/stoked-three', name: 'Stoked on Stoicism Pantheon' },
  { path: '/skg', name: 'Sea Kayak Georgia' },
  { path: '/phantom', name: 'Phantom Fireworks' },
  // { path: '/brown-forman', name: 'Brown Forman' },
  { path: '/dream-posters', name: 'Dream Posters' },
  // { path: '/space-monkey', name: 'Space Monkey Mafia' },
  // Note: Commented out projects that use SlideshowLightbox instead of Link components
  // '/boss-strategies', '/qrt', '/mindset', '/amperes', '/bg', '/east-coast'
];

export const getNavigationData = (currentPath) => {
  const currentIndex = portfolioProjects.findIndex(project => project.path === currentPath);

  if (currentIndex === -1) {
    return { prevProject: null, nextProject: null, currentProject: null };
  }

  const prevIndex = currentIndex === 0 ? portfolioProjects.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === portfolioProjects.length - 1 ? 0 : currentIndex + 1;

  return {
    prevProject: portfolioProjects[prevIndex],
    nextProject: portfolioProjects[nextIndex],
    currentProject: portfolioProjects[currentIndex]
  };
};
