// Navbar.js
import React from 'react';
import styles from './Navbar.module.css'; // Import the CSS module

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* Left side */}
      <div className="navbar-brand">
        {/* Orange Circle */}
        <div className="orange-circle">
          <span>My</span>
          <span>Own</span>
          <span>Journey</span>
        </div>
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
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav">
          {/* Menu items */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
