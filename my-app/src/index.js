import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Layout from "./Components/Layout.js";
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
    element: <Layout><App /></Layout>,
  },
  {
    path: "/home",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/about",
    element: <Layout><About /></Layout>,
  },
  {
    path: "/portfolio",
    element: <Layout><Portfolio /></Layout>,
  },
  {
    path: "/blog",
    element: <Layout><Blog /></Layout>,
  },
  {
    path: "/contact",
    element: <Layout><Contact /></Layout>,
  },
  {
    path: "/graphic-design",
    element: <Layout><GraphicDesign /></Layout>,
  },
  {
    path: "/web-development",
    element: <Layout><WebDevelopment /></Layout>,
  },
  {
    path: "/amperes",
    element: <Layout><Amperes /></Layout>,
  },
  {
    path: "/bg",
    element: <Layout><BG /></Layout>,
  },
  {
    path: "/boss-strategies",
    element: <Layout><BossStrategies /></Layout>,
  },
  {
    path: "/brown-forman",
    element: <Layout><BrownForman /></Layout>,
  },
  {
    path: "/dream-posters",
    element: <Layout><DreamPosters /></Layout>,
  },
  {
    path: "/east-coast",
    element: <Layout><EastCoast /></Layout>,
  },
  {
    path: "/mindset",
    element: <Layout><Mindset /></Layout>,
  },
  {
    path: "/phantom",
    element: <Layout><Phantom /></Layout>,
  },
  {
    path: "/qrt",
    element: <Layout><QRT /></Layout>,
  },
  {
    path: "/ranger",
    element: <Layout><RangerHB /></Layout>,
  },
  {
    path: "/skg",
    element: <Layout><SeaKayakGA /></Layout>,
  },
  {
    path: "/space-monkey",
    element: <Layout><SpaceMonkey /></Layout>,
  },
  {
    path: "/stoked-one",
    element: <Layout><StokedOne /></Layout>,
  },
  {
    path: "/stoked-two",
    element: <Layout><StokedTwo /></Layout>,
  },
  {
    path: "/stoked-three",
    element: <Layout><StokedThree /></Layout>,
  },
  {
    path: "/clover",
    element: <Layout><Clover /></Layout>,
  },

   {
    path: "/md99",
    element: <Layout><MD99 /></Layout>,
  },

   {
    path: "/ideal-experience",
    element: <Layout><IdealExperience /></Layout>,
  },
  {
    path: "/ag-con",
    element: <Layout><AgCon /></Layout>,
  },
  {
    path: "/silent-battle",
    element: <Layout><SilentBattle /></Layout>,
  },
  {
    path: "/rowans-creek",
    element: <Layout><RowansCreek /></Layout>,
  },
  {
    path: "/railbird",
    element: <Layout><Railbird /></Layout>,
  },
  {
    path: "/three-willows",
    element: <Layout><ThreeWillows /></Layout>,
  },
  {
    path: "/total-pt-connect",
    element: <Layout><TotalPtConnect /></Layout>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
