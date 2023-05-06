import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './img/logo.jpg';
import { useState } from 'react';
import PocketPro from './Portfolio/Dev/img/pocket-pro.png';
import WeatherApp from './Portfolio/Dev/img//weather-app.png';
import ToDoList from './Portfolio/Dev/img/todo-list.png';
import TicTacToe from './Portfolio/Dev/img/tic-tac-toe.png';
import AlarmClock from './Portfolio/Dev/img/alarm-clock.png';
import TicTacToeTwo from './Portfolio/Dev/img/tic-tac-toe-two.png';
import './App.css';
import {
    BrowserRouter as Router,
    Link } from "react-router-dom";
import EyeBallIcon  from './img/eyeball.png'
import GlobeIcon  from './img/globe.png'
import GitHubIcon  from './img/github.png'
import ReactIcon  from './img/react.png'
import DjangoIcon from './img/django.png'

function WebDevelopmentBody() {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
      };
    
      const handleMouseLeave = () => {
        setHovered(false);
      };

  return (
    <div>
        <div className="container-fluid d-flex flex-wrap align-items-center justify-content-center bg-dark text-light">
            <div className="row row-cols-3 mx-5 mt-1 mb-5 justify-content-center">
                <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
                    <div className="position-relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <img className="card-img-top" src={PocketPro} alt="PocketPro" />
                        {hovered && (
                        <div className="overlay d-flex flex-column justify-content-center align-items-center">
                            <h4 className="overlay-header pb-1">PocketPro</h4>
                            <ul className="overlay-icons list-unstyled d-flex flex-row">
                                {/* <li className="web-links">
                                    <Link to="/about">
                                        <img src={EyeBallIcon} alt="Project Details" className="web-icons" />
                                    </Link>
                                </li> */}
                                <li className="web-links">
                                    <a href="https://pocket-pro-api.web.app/" target="_blank">
                                        <img src={GlobeIcon} alt="Web Application" className="web-icons" />
                                    </a>
                                </li>
                                <li className="web-links">
                                    <a href="https://github.com/JMC818386/golf-app-frontend" target="_blank">
                                        <img src={ReactIcon} alt="React Code" className="web-icons"/>
                                    </a>
                                </li>
                                <li className="web-links">
                                    <a href="https://github.com/JMC818386/golf-app"  target="_blank">
                                        <img src={DjangoIcon} alt="Django Code" className="web-icons"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        )}
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
                    <div className="position-relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <img className="card-img-top" src={TicTacToeTwo} alt="Tic-Tac-Toe" />
                        {hovered && (
                        <div className="overlay d-flex flex-column justify-content-center align-items-center">
                            <h4 className="overlay-header pb-1">Tic-Tac-Toe 2</h4>
                            <ul className="overlay-icons list-unstyled d-flex flex-row">
                                {/* <li className="web-links">
                                    <Link to="/about">
                                        <img src={EyeBallIcon} alt="Project Details" className="web-icons" />
                                    </Link>
                                </li> */}
                                <li className="web-links">
                                    <a href="https://github.com/JMC818386/react-tic-tac-toe" target="_blank">
                                        <img src={GlobeIcon} alt="Web Application" className="web-icons" />
                                    </a>
                                </li>
                                <li className="web-links">
                                    <a href="https://github.com/JMC818386/react-tic-tac-toe" target="_blank">
                                        <img src={ReactIcon} alt="React Code" className="web-icons"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        )}
                    </div>
                </div>


                <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
                <Link to="/about" className="">
                    <img className="card-img-top" src={WeatherApp} alt="To-Do-List" />
                    <div className="overlay">
                    <p className="overlay-text">Weather App</p>
                    </div>
                </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
                <Link to="/about" className="">
                    <img className="card-img-top" src={ToDoList} alt="Tic-Tac-Toe" />
                    <div className="overlay">
                    <p className="overlay-text">Todo List</p>
                    </div>
                </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
                <Link to="/about" className="">
                    <img className="card-img-top" src={TicTacToe} alt="Weather App" />
                    <div className="overlay">
                    <p className="overlay-text">Tic-Tac-Toe</p>
                    </div>
                </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
                <Link to="/about" className="">
                    <img className="card-img-top" src={AlarmClock} alt="Weather App" />
                    <div className="overlay">
                    <p className="overlay-text">Alarm Clock</p>
                    </div>
                </Link>
                </div>
            </div>
        </div>
    </div>
  
  );
}

export default WebDevelopmentBody;