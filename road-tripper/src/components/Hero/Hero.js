import React from 'react';
import styles from './hero.module.css'; // Import the CSS module

const Hero = () => {
  return (
    <div className={styles['background-image']}>
      <img className={styles['main-image']} src="/images/trip-planner.png" alt="Trip Planner" />
    </div>
  );
};

export default Hero;