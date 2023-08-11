// Trip.js
import React, { useState } from 'react';
// import Map from '/Users/carternadain/Desktop/Road-tripper/road-tripper/src/components/Map/Map.js'; // Import the Map component
import styles from './Trip.module.css'; // Import the CSS module

const Trip = () => {
  // State to store the user's destination
  const [destination, setDestination] = useState('');

  // Handler to update the user's destination from the form
  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  return (
    <div className={styles['form-container']}>
      <div className={styles['form-group']}>
        <label htmlFor="fromInput">From</label>
        <input type="text" className="form-control" id="fromInput" placeholder="Enter starting location" />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor="toInput">To</label>
        <input
          type="text"
          className="form-control"
          id="toInput"
          placeholder="Enter destination location"
          value={destination}
          onChange={handleDestinationChange}
        />
      </div>
      <button className={styles['trip-start-button']}>Start</button>

      {/* Render the Map component and pass the destination prop */}
      {/* <Map destination={destination} /> */}
    </div>
  );
};

export default Trip;
