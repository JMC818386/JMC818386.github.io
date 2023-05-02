import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Acrobat from './img/icons/acrobat.png'
import Illustrator from './img/icons/illustrator.png'
import Indesign from './img/icons/indesign.png'
import Lightroom from './img/icons/lightroom.png'
import Photoshop from './img/icons/photoshop.png'
import Premiere from './img/icons/premiere.png'
import Xd from './img/icons/xd.png'
import Bootstrap from './img/icons/bootstrap.png'
import Css from './img/icons/css.png'
import Django from './img/icons/django.png'
import Git from './img/icons/git.png'
import Github from './img/icons/github.png'
import Gitpod from './img/icons/gitpod.png'
import Google from './img/icons/google.png'
import Html from './img/icons/html.png'
import Javascript from './img/icons/javascript.png'
import MicrosoftOffice from './img/icons/microsoftoffice.png'
import Postgresql from './img/icons/postgresql.png'
import Python from './img/icons/python.png'
import React from './img/icons/react.png'
import Slack from './img/icons/slack.png'
import Sql from './img/icons/sql.png'

function Icons() {
  return (
    <div>
      <div className="container-fluid bg-dark text-light d-flex justify-content-center">
        <div className="row">
            <p className="text-secondary pb-0 mb-0">Tools</p>
          <div className="col d-flex flex-wrap justify-content-center">
            <img src={Photoshop} alt="About Image" className="icons"/>
            <img src={Illustrator} alt="About Image" className="icons"/>
            <img src={Indesign} alt="About Image" className="icons"/>
            <img src={Xd} alt="About Image" className="icons"/>
            <img src={Premiere} alt="About Image" className="icons"/>
            <img src={Lightroom} alt="About Image" className="icons"/>
            <img src={Acrobat} alt="About Image" className="icons"/>
            <img src={Html} alt="About Image" className="icons"/>
            <img src={Css} alt="About Image" className="icons"/>
            <img src={Javascript} alt="About Image" className="icons"/>
            <img src={Python} alt="About Image" className="icons"/>
            <img src={Sql} alt="About Image" className="icons"/>
            <img src={Bootstrap} alt="About Image" className="icons"/>
            <img src={React} alt="About Image" className="icons"/>
            <img src={Django} alt="About Image" className="icons"/>
            <img src={Postgresql} alt="About Image" className="icons"/>
            <img src={Github} alt="About Image" className="icons"/>
            <img src={Git} alt="About Image" className="icons"/>
            <img src={Gitpod} alt="About Image" className="icons"/>
            <img src={Slack} alt="About Image" className="icons"/>
            <img src={Google} alt="About Image" className="icons"/>
            <img src={MicrosoftOffice} alt="About Image" className="icons"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Icons;




