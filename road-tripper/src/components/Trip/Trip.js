// Trip.js
import React from 'react';

const Trip = () => {
  return (
    <div className="form-container">
      <div className="form-group">
        <label htmlFor="fromInput">From</label>
        <input type="text" className="form-control" id="fromInput" placeholder="Enter starting location" />
      </div>
      <div className="form-group">
        <label htmlFor="toInput">To</label>
        <input type="text" className="form-control" id="toInput" placeholder="Enter destination location" />
      </div>
      <button className="trip-start-button">Start</button>
    </div>
  );
};

export default Trip;

