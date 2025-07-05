import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Figma from './img/icons/figma.png'
import Sketch from './img/icons/sketch.png'
import Vscode from './img/icons/vscode.png'
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
import ReactIcon from './img/icons/react.png'
import Slack from './img/icons/slack.png'
import Sql from './img/icons/sql.png'

function Icons() {

  return (
    <div style={{ position: 'relative' }}>
      <div className="container-fluid text-light d-flex justify-content-center">
        <div className="row">
            <p className="text-second pb-0 mb-0 d-flex justify-content-center">Tools</p>
          <div className="col d-flex flex-wrap justify-content-center">
            <img src={Figma} alt="Figma" className="icons" title="Figma" style={{ cursor: 'default' }}/>
            <img src={Sketch} alt="Sketch" className="icons" title="Sketch" style={{ cursor: 'default' }}/>
            <img src={Vscode} alt="VS Code" className="icons" title="Visual Studio Code" style={{ cursor: 'default' }}/>
            <img src={Photoshop} alt="Adobe Photoshop" className="icons" title="Adobe Photoshop" style={{ cursor: 'default' }}/>
            <img src={Illustrator} alt="Adobe Illustrator" className="icons" title="Adobe Illustrator" style={{ cursor: 'default' }}/>
            <img src={Indesign} alt="Adobe Indesign" className="icons" title="Adobe InDesign" style={{ cursor: 'default' }}/>
            <img src={Xd} alt="Adobe XD" className="icons" title="Adobe XD" style={{ cursor: 'default' }}/>
            <img src={Premiere} alt="Adobe Premiere" className="icons" title="Adobe Premiere Pro" style={{ cursor: 'default' }}/>
            <img src={Lightroom} alt="Adobe Lightroom" className="icons" title="Adobe Lightroom" style={{ cursor: 'default' }}/>
            <img src={Acrobat} alt="Adobe Acrobat" className="icons" title="Adobe Acrobat" style={{ cursor: 'default' }}/>
            <img src={Html} alt="HTML" className="icons" title="HTML5" style={{ cursor: 'default' }}/>
            <img src={Css} alt="CSS" className="icons" title="CSS3" style={{ cursor: 'default' }}/>
            <img src={Javascript} alt="JavaScript" className="icons" title="JavaScript" style={{ cursor: 'default' }}/>
            <img src={Python} alt="Python" className="icons" title="Python" style={{ cursor: 'default' }}/>
            <img src={Sql} alt="SQL" className="icons" title="SQL" style={{ cursor: 'default' }}/>
            <img src={Bootstrap} alt="BootStrap" className="icons" title="Bootstrap" style={{ cursor: 'default' }}/>
            <img src={ReactIcon} alt="React" className="icons" title="React" style={{ cursor: 'default' }}/>
            <img src={Django} alt="Django" className="icons" title="Django" style={{ cursor: 'default' }}/>
            <img src={Postgresql} alt="PostgreSQL" className="icons" title="PostgreSQL" style={{ cursor: 'default' }}/>
            <img src={Github} alt="GitHub" className="icons" title="GitHub" style={{ cursor: 'default' }}/>
            <img src={Git} alt="Git" className="icons" title="Git" style={{ cursor: 'default' }}/>
            <img src={Gitpod} alt="GitPod" className="icons" title="GitPod" style={{ cursor: 'default' }}/>
            <img src={Slack} alt="Slack" className="icons" title="Slack" style={{ cursor: 'default' }}/>
            <img src={Google} alt="Google Suite" className="icons" title="Google Workspace" style={{ cursor: 'default' }}/>
            <img src={MicrosoftOffice} alt="Microsoft Office" className="icons" title="Microsoft Office" style={{ cursor: 'default' }}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Icons;




