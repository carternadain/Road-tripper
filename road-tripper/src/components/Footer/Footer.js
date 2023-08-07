// Footer.js
import React from 'react';
import styles from './footer.module.css'; // Import the CSS module for footer styles

const Footer = () => {
  return (
    <footer className={styles['footer-container']}>
      <div className={styles['footer-content']}>
        {/* Add your standard footer components here */}
        <div className={styles['footer-links']}>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          {/* Add more links as needed */}
        </div>
        <div className={styles['footer-copyright']}>
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
