import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { motion } from 'framer-motion';
import Figma from './img/icons/figma.png';
import Sketch from './img/icons/sketch.png';
import Vscode from './img/icons/vscode.png';
import Acrobat from './img/icons/acrobat.png';
import Illustrator from './img/icons/illustrator.png';
import Indesign from './img/icons/indesign.png';
import Lightroom from './img/icons/lightroom.png';
import Photoshop from './img/icons/photoshop.png';
import Premiere from './img/icons/premiere.png';
import Xd from './img/icons/xd.png';
import Bootstrap from './img/icons/bootstrap.png';
import Css from './img/icons/css.png';
import Django from './img/icons/django.png';
import Git from './img/icons/git.png';
import Github from './img/icons/github.png';
import Gitpod from './img/icons/gitpod.png';
import Google from './img/icons/google.png';
import Html from './img/icons/html.png';
import Javascript from './img/icons/javascript.png';
import MicrosoftOffice from './img/icons/microsoftoffice.png';
import Postgresql from './img/icons/postgresql.png';
import Python from './img/icons/python.png';
import ReactIcon from './img/icons/react.png';
import Slack from './img/icons/slack.png';
import Sql from './img/icons/sql.png';
import AWS from './img/icons/AWS.png';
import Discord from './img/icons/Discord Logomark.png';
import Dropbox from './img/icons/Dropbox Logomark.png';
import GoogleDocs from './img/icons/Google Docs Icon.png';
import GoogleDrive from './img/icons/Google Drive Icon.png';
import GoogleSheets from './img/icons/Google Sheets Icon.png';
import GoogleSlides from './img/icons/Google Slides Icon.png';
import Miro from './img/icons/Miro.png';
import Trello from './img/icons/Trello Logomark.png';
import AdobeCreativeCloud from './img/icons/adobe_creative-cloud.png';
import Firebase from './img/icons/Group.png';
import GoogleCloud from './img/icons/Group-1.png';
import MiroIcon from './img/icons/Group-2.png';
import GoogleFonts from './img/icons/Group 1000001996.png';
import GoogleCalendar from './img/icons/Google Calendar Icon.png';
import VimeoLogomark from './img/icons/Vimeo Logomark.png';
import Android from './img/icons/android.png';
import Apple from './img/icons/apple.png';
import Canva from './img/icons/canva.png';
import Claude from './img/icons/claude.png';
import DallEIcon from './img/icons/dall-e-icon.png';
import Dalle from './img/icons/dalle.png';
import FireflyIcon from './img/icons/firefly-icon.png';
import Firefly from './img/icons/firefly.png';
import GithubCopilot from './img/icons/github-copilot.png';
import GoogleMeets from './img/icons/google-meets.png';
import Invision from './img/icons/invision.png';
import MidjourneyIcon from './img/icons/midjourney-icon.png';
import Midjourney from './img/icons/midjourney.png';
import N8n from './img/icons/n8n.png';
import Nodejs from './img/icons/nodejs.png';
import Npm from './img/icons/npm.png';
import Prettier from './img/icons/prettier.png';
import Shopify from './img/icons/shopify.png';
import Stripe from './img/icons/stripe.png';
import Youtube from './img/icons/youtube.png';
import Zoom from './img/icons/zoom.png';

// Array of icon objects for easy mapping and animation
const icons = [
  { src: Apple, alt: 'Apple', title: 'Apple' },
  { src: Android, alt: 'Android', title: 'Android' },
  { src: Figma, alt: 'Figma', title: 'Figma' },
  { src: Vscode, alt: 'VS Code', title: 'Visual Studio Code' },
  { src: Github, alt: 'GitHub', title: 'GitHub' },
  { src: GithubCopilot, alt: 'GitHub Copilot', title: 'GitHub Copilot' },
  { src: Git, alt: 'Git', title: 'Git' },
  { src: Gitpod, alt: 'GitPod', title: 'GitPod' },
  { src: Html, alt: 'HTML', title: 'HTML5' },
  { src: Css, alt: 'CSS', title: 'CSS3' },
  { src: Javascript, alt: 'JavaScript', title: 'JavaScript' },
  { src: ReactIcon, alt: 'React', title: 'React' },
  { src: Python, alt: 'Python', title: 'Python' },
  { src: Sql, alt: 'SQL', title: 'SQL' },
  { src: Bootstrap, alt: 'BootStrap', title: 'Bootstrap' },
  { src: Django, alt: 'Django', title: 'Django' },
  { src: Postgresql, alt: 'PostgreSQL', title: 'PostgreSQL' },
  { src: Nodejs, alt: 'Node.js', title: 'Node.js' },
  { src: Npm, alt: 'npm', title: 'npm' },
  { src: Prettier, alt: 'Prettier', title: 'Prettier' },
  { src: AWS, alt: 'AWS', title: 'Amazon Web Services' },
  { src: AdobeCreativeCloud, alt: 'Adobe Creative Cloud', title: 'Adobe Creative Cloud' },
  { src: Photoshop, alt: 'Adobe Photoshop', title: 'Adobe Photoshop' },
  { src: Illustrator, alt: 'Adobe Illustrator', title: 'Adobe Illustrator' },
  { src: Indesign, alt: 'Adobe Indesign', title: 'Adobe InDesign' },
  { src: Xd, alt: 'Adobe XD', title: 'Adobe XD' },
  { src: Premiere, alt: 'Adobe Premiere', title: 'Adobe Premiere Pro' },
  { src: Lightroom, alt: 'Adobe Lightroom', title: 'Adobe Lightroom' },
  { src: Acrobat, alt: 'Adobe Acrobat', title: 'Adobe Acrobat' },
  { src: Midjourney, alt: 'Midjourney', title: 'Midjourney' },
  { src: Dalle, alt: 'DALL-E', title: 'DALL-E' },
  { src: Firefly, alt: 'Adobe Firefly', title: 'Adobe Firefly' },
  { src: Claude, alt: 'Claude AI', title: 'Claude AI' },
  { src: Google, alt: 'Google Suite', title: 'Google Workspace' },
  { src: GoogleCloud, alt: 'Google Cloud', title: 'Google Cloud' },
  { src: Firebase, alt: 'Firebase', title: 'Firebase' },
  { src: GoogleCalendar, alt: 'Google Calendar', title: 'Google Calendar' },
  { src: GoogleDocs, alt: 'Google Docs', title: 'Google Docs' },
  { src: GoogleMeets, alt: 'Google Meet', title: 'Google Meet' },
  { src: GoogleDrive, alt: 'Google Drive', title: 'Google Drive' },
  { src: GoogleSheets, alt: 'Google Sheets', title: 'Google Sheets' },
  { src: GoogleSlides, alt: 'Google Slides', title: 'Google Slides' },
  { src: GoogleFonts, alt: 'Google Fonts', title: 'Google Fonts' },
  { src: MicrosoftOffice, alt: 'Microsoft Office', title: 'Microsoft Office' },
  { src: Zoom, alt: 'Zoom', title: 'Zoom' },
  { src: Dropbox, alt: 'Dropbox', title: 'Dropbox' },
  { src: Slack, alt: 'Slack', title: 'Slack' },
  { src: Trello, alt: 'Trello', title: 'Trello' },
  { src: MiroIcon, alt: 'Miro', title: 'Miro' },
];


function Icons() {
  return (
    <div style={{ position: 'relative' }}>
      <div className="container-fluid text-light d-flex justify-content-center">
        <div className="row">
          <div className="col d-flex flex-wrap justify-content-center mb-5">
            {icons.map((icon, idx) => (
              <motion.img
                key={icon.title}
                src={icon.src}
                alt={icon.alt}
                className="icons"
                title={icon.title}
                style={{ cursor: 'default' }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.065, // half the previous delay
                  duration: 0.14 + (idx % 3) * 0.03, // half the previous duration
                  ease: [0.4, 0.0, 0.2, 1]
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Icons;




