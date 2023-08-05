import React from 'react';
import styles from './hero.module.css'; // Import the CSS module

const Hero = () => {
  return (
    <div className={styles['background-image']}>
      <img className={styles['main-image']} src="/images/trip-planner.png" alt="Trip Planner" />
      
      {/* Button Container */}
      <div className={styles['button-container']}>
        <button className={styles['start-tripping-button']}>Start Tripping</button>
      </div>
    </div>
  );
};

export default Hero;
