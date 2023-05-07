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
            <p className="text-secondary pb-0 mb-0 d-flex justify-content-center">Tools</p>
          <div className="col d-flex flex-wrap justify-content-center">
            <img src={Photoshop} alt="Adobe Photoshop" className="icons"/>
            <img src={Illustrator} alt="Adobe Illustrator" className="icons"/>
            <img src={Indesign} alt="Adobe Indesign" className="icons"/>
            <img src={Xd} alt="Adobe XD" className="icons"/>
            <img src={Premiere} alt="Adobe Premiere" className="icons"/>
            <img src={Lightroom} alt="Adobe Lightroom" className="icons"/>
            <img src={Acrobat} alt="Adobe Acrobat" className="icons"/>
            <img src={Html} alt="HTML" className="icons"/>
            <img src={Css} alt="CSS" className="icons"/>
            <img src={Javascript} alt="JavaScript" className="icons"/>
            <img src={Python} alt="Python" className="icons"/>
            <img src={Sql} alt="SQL" className="icons"/>
            <img src={Bootstrap} alt="BootStrap" className="icons"/>
            <img src={React} alt="React" className="icons"/>
            <img src={Django} alt="Django" className="icons"/>
            <img src={Postgresql} alt="PostgreSQL" className="icons"/>
            <img src={Github} alt="GitHub" className="icons"/>
            <img src={Git} alt="Git" className="icons"/>
            <img src={Gitpod} alt="GitPod" className="icons"/>
            <img src={Slack} alt="Slack" className="icons"/>
            <img src={Google} alt="Google Suite" className="icons"/>
            <img src={MicrosoftOffice} alt="Microsoft Office" className="icons"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Icons;




