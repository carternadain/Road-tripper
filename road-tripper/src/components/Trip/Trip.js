import React, { useState } from 'react';
import styles from './Trip.module.css';

const Trip = () => {
  const [destination, setDestination] = useState('');

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  return (
    
    <div className={styles['form-container']}>
      <div className={styles['form-group']}>
        <label htmlFor="fromInput"></label>
        <input type="text" className="form-control" id="fromInput" placeholder="Where are you starting?" />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor="toInput"></label>
        <input
          type="text"
          className="form-control"
          id="toInput"
          placeholder="Where are you going?"
          value={destination}
          onChange={handleDestinationChange}
        />
      </div>
      <button className={styles['trip-start-button']}>GO</button>
    </div>
  );
};

export default Trip;
