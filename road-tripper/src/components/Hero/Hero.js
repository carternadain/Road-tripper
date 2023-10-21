import React from 'react';
import { BsFillTreeFill } from "react-icons/bs";
import styles from './hero.module.css'; // Import the CSS module
import { FaCarSide } from "react-icons/fa";
const Hero = () => {
  return (
    <div className={styles['background-image']}>
      <div className={styles['image-container']} style={{ backgroundImage: `url('your-image-url.jpg')` }}>
        {/* Slogan */}
        <h1 className={styles['slogan']}>
          Turn your road trip 
            <div className={styles['car-side']}>
            <FaCarSide size={24} color="black" />    </div>
          <br></br>
          into an adventure    <div className={styles['tent-icon']}>
          <BsFillTreeFill size={24} color="green" /> {/* Customize size and color */}

        </div>
        </h1>
        <h4 className={styles['slogan2']}>
          Find amazing stops along your route.
        </h4>
      </div>
    </div>
  );
};

export default Hero;


