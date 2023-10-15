// Navbar.js
import React from 'react';
import styles from './Navbar.module.css'; // Import the CSS module

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      {/* Left side */}
      <div className={styles['navbar-brand']}>
   
      <img className={styles['ab']} src="/images/ab2.png" alt="ab logo" />
      </div>

      {/* Right side */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse justify-content-end ${styles['navbar-nav']}`} id="navbarNavDropdown">
        <ul className={`navbar-nav ${styles['menu-items']}`}>
          {/* Menu items */}
        </ul>
        <div className={styles['login-signup-links']}>
          <a href="/login" className={styles['nav-link']}>
            Log In
          </a>
          <span className={styles['link-separator']}>&nbsp;|&nbsp;</span>
          <a href="/signup" className={styles['nav-link']}>
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

