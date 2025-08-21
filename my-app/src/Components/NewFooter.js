import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from './logo.png';
import Github from './img/github-social.png';
import LinkedIn from './img/linkedin-social.png';
import Email from './img/icons/mail.png';

const Footer = () => {
  	return (
    		<div className={styles.desktopMLogoLeftMenu} style={{ psddingTop: '50px' }}>
      			<div className={styles.top}>
        				<div className={styles.logoContainer}>
          					<div className={styles.logo}>
            						<img className={styles.iconContainer} src={logo} alt="Logo" />
            						<div className={styles.text}>
              							{/* <b className={styles.webbyframes}>JM Crawford</b> */}
              							{/* <div className={styles.forFigma}>Design</div> */}
            						</div>
          					</div>
        				</div>
        				<div className={styles.menu}>
          					<div className={styles.menuItem}>
            						<Link to="/" className={styles.menuItem1}>Home</Link>
          					</div>
          					<div className={styles.menuItem}>
            						<Link to="/about" className={styles.menuItem1}>About</Link>
          					</div>
          					<div className={styles.menuItem}>
            						<Link to="/Portfolio" className={styles.menuItem1}>Portfolio</Link>
          					</div>
          					<div className={styles.menuItem}>
            						<Link to="/contact" className={styles.menuItem1}>Contact</Link>
          					</div>
        				</div>
        				<div className={styles.socialIcons}>
          					<a className="p-2 social-links" href="mailto:johncrawforddesign@gmail.com"><img src={Email} style={{ width: 25 }} alt="Email" /></a>
          					<a className="p-2 social-links" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/john-michaelcrawford"><img src={LinkedIn} style={{ width: 25 }} alt="LinkedIn Profile" /></a>
          					<a className="p-2 social-links" target="_blank" rel="noreferrer" href="https://github.com/JMC818386"><img src={Github} style={{ width: 25 }} alt="GitHub Profile" /></a>
        				</div>
      			</div>
      			<div className={styles.companyname202x}>John Crawford Design © 2025. All rights reserved.</div>
    		</div>);
};

export default Footer;
