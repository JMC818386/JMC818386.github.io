import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Portfolio from "./Components/Portfolio";
import Blog from "./Components/Blog.js";
import Contact from "./Components/Contact.js";
import GraphicDesign from "./Components/GraphicDesign.js";
import WebDevelopment from "./Components/WebDevelopment.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Amperes from "./Components/Portfolio/Design/Amperes.js";
import BG from "./Components/Portfolio/Design/BG.js";
import BossStrategies from "./Components/Portfolio/Design/BossStrategies.js";
import BrownForman from "./Components/Portfolio/Design/BrownForman.js";
import DreamPosters from "./Components/Portfolio/Design/DreamPosters.js";
import EastCoast from "./Components/Portfolio/Design/EastCoast.js";
import Mindset from "./Components/Portfolio/Design/Mindset.js";
import Phantom from "./Components/Portfolio/Design/Phantom.js";
import QRT from "./Components/Portfolio/Design/QRT.js";
import RangerHB from "./Components/Portfolio/Design/RangerHB.js";
import SeaKayakGA from "./Components/Portfolio/Design/SeaKayakGA.js";
import SpaceMonkey from "./Components/Portfolio/Design/SpaceMonkey.js";
import StokedOne from "./Components/Portfolio/Design/StokedOne.js";
import StokedTwo from "./Components/Portfolio/Design/StokedTwo.js";
import StokedThree from "./Components/Portfolio/Design/StokedThree.js";
import Clover from "./Components/Portfolio/Design/Clover.js";
import IdealExperience from "./Components/Portfolio/Design/IdealExperience.js";
import MD99 from "./Components/Portfolio/Design/MD99.js";
import AgCon from "./Components/Portfolio/Design/AgCon.js";
import SilentBattle from "./Components/Portfolio/Design/SilentBattle.js";
import RowansCreek from "./Components/Portfolio/Design/RowansCreek.js";
import Railbird from "./Components/Portfolio/Design/Railbird.js";
import ThreeWillows from "./Components/Portfolio/Design/ThreeWillows.js";
import TotalPtConnect from "./Components/Portfolio/Design/TotalPtConnect.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/graphic-design",
    element: <GraphicDesign />,
  },
  {
    path: "/web-development",
    element: <WebDevelopment />,
  },
  {
    path: "/amperes",
    element: <Amperes />,
  },
  {
    path: "/bg",
    element: <BG />,
  },
  {
    path: "/boss-strategies",
    element: <BossStrategies />,
  },
  {
    path: "/brown-forman",
    element: <BrownForman />,
  },
  {
    path: "/dream-posters",
    element: <DreamPosters />,
  },
  {
    path: "/east-coast",
    element: <EastCoast />,
  },
  {
    path: "/mindset",
    element: <Mindset />,
  },
  {
    path: "/phantom",
    element: <Phantom />,
  },
  {
    path: "/qrt",
    element: <QRT />,
  },
  {
    path: "/ranger",
    element: <RangerHB />,
  },
  {
    path: "/skg",
    element: <SeaKayakGA />,
  },
  {
    path: "/space-monkey",
    element: <SpaceMonkey />,
  },
  {
    path: "/stoked-one",
    element: <StokedOne />,
  },
  {
    path: "/stoked-two",
    element: <StokedTwo />,
  },
  {
    path: "/stoked-three",
    element: <StokedThree />,
  },
  {
    path: "/clover",
    element: <Clover />,
  },

   {
    path: "/md99",
    element: <MD99 />,
  },

   {
    path: "/ideal-experience",
    element: <IdealExperience />,
  },
  {
    path: "/ag-con",
    element: <AgCon />,
  },
  {
    path: "/silent-battle",
    element: <SilentBattle />,
  },
  {
    path: "/rowans-creek",
    element: <RowansCreek />,
  },
  {
    path: "/railbird",
    element: <Railbird />,
  },
  {
    path: "/three-willows",
    element: <ThreeWillows />,
  },
  {
    path: "/total-pt-connect",
    element: <TotalPtConnect />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
