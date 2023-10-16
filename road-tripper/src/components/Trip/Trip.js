import React, { useState } from 'react';
import styles from './Trip.module.css';

const Trip = ({ onSearch }) => {
  const [destination, setDestination] = useState('');
  const [attractionSearch, setAttractionSearch] = useState(''); // State for attraction search query

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleAttractionSearchChange = (event) => {
    setAttractionSearch(event.target.value);
  };

  const handleSearchClick = () => {
    // Call the onSearch function with the attraction search query
    onSearch(attractionSearch);
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
      {/* Add input field for attraction search */}
      <div className={styles['form-group']}>
        <label htmlFor="attractionInput"></label>
        <input
          type="text"
          className="form-control"
          id="attractionInput"
          placeholder="Search for attractions"
          value={attractionSearch}
          onChange={handleAttractionSearchChange}
        />
      </div>
      {/* Add a button to initiate the search */}
      <button className={styles['trip-start-button']} onClick={handleSearchClick}>
        GO
      </button>
    </div>
  );
};

export default Trip;
