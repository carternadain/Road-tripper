import React from 'react';
import styles from './hero.module.css'; // Import the CSS module

const Hero = () => {
  return (
    <div className={styles['background-image']}>
 
      <div className={styles['image-container']} style={{ backgroundImage: `url('your-image-url.jpg')` }}>
        {/* Slogan */}
        <h1 className={styles['slogan']}>
          Turn your road trip 
          <br></br>
          into an adventure.
        </h1>
        <h4 className={styles['slogan2']}>
          Find amazing stops along your route.
        </h4>
        
      </div>
    </div>
  );
};

export default Hero;
