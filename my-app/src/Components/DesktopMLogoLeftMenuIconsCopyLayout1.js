import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  	return (
    		<div className={styles.desktopMLogoLeftMenu}>
      			<div className={styles.top}>
        				<div className={styles.logoContainer}>
          					<div className={styles.logo}>
            						<div className={styles.iconContainer}></div>
            						<div className={styles.text}>
              							<b className={styles.webbyframes}>WebbyFrames</b>
              							<div className={styles.forFigma}>for Figma</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.menu}>
          					<div className={styles.menuItem}>
            						<div className={styles.menuItem1}>Eleven</div>
          					</div>
          					<div className={styles.menuItem}>
            						<div className={styles.menuItem1}>Twelve</div>
          					</div>
          					<div className={styles.menuItem}>
            						<div className={styles.menuItem1}>Thirteen</div>
          					</div>
          					<div className={styles.menuItem}>
            						<div className={styles.menuItem1}>Fourteen</div>
          					</div>
          					<div className={styles.menuItem}>
            						<div className={styles.menuItem1}>Fifteen</div>
          					</div>
          					<div className={styles.menuItem}>
            						<div className={styles.menuItem1}>Sixteen</div>
          					</div>
        				</div>
        				<div className={styles.socialIcons}>
          					<div className={styles.iconJamIconsOutlineL}>YT</div>
          					<div className={styles.iconJamIconsOutlineL}>FB</div>
          					<div className={styles.iconJamIconsOutlineL}>TW</div>
          					<div className={styles.iconJamIconsOutlineL}>IG</div>
          					<div className={styles.iconJamIconsOutlineL}>LI</div>
        				</div>
      			</div>
      			<div className={styles.companyname202x}>CompanyName @ 202X. All rights reserved.</div>
    		</div>);
};

export default Footer;
