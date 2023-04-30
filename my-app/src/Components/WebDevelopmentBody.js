import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './img/logo.jpg';
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

function WebDevelopmentBody() {
  return (
    <div>
        <div className="container-fluid d-flex flex-wrap align-items-center justify-content-center bg-dark text-light">
            <div className="row row-cols-3 mx-5 mt-1 mb-5 justify-content-center">
                <div className="col-lg-4 col-md-6 col-12 card-port p-4 m-4">
                <Link to="/about" className="">
                    <img className="card-img-top" src={PocketPro} alt="Weather App" />
                    <div className="overlay">
                    <p className="overlay-text">PocketPro</p>
                    </div>
                </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
                <Link to="/about" className="">
                    <img className="card-img-top" src={TicTacToeTwo} alt="Weather App" />
                    <div className="overlay">
                    <p className="overlay-text">Tic-Tac-Toe: Second Attempt</p>
                    </div>
                </Link>
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
                <div className="col-lg-4 col-md-6 col-12 text-light card-port p-4 m-4">
                <Link to="/about" className="">
                    <img className="card-img-top" src={Logo} alt="Weather App" />
                    <div className="overlay">
                    <p className="overlay-text">Restaurant Menu</p>
                    </div>
                </Link>
                </div>
            </div>
        </div>
    </div>
  
  );
}

export default WebDevelopmentBody;