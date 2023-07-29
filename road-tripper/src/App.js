import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [nationalParks, setNationalParks] = useState([]);

  useEffect(() => {
    // Make a GET request to the backend API endpoint for national parks
    axios.get('/api/nationalparks')
      .then((response) => {
        setNationalParks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching national parks:', error);
      });
  }, []);

  return (
    <div>
      <h1>National Parks</h1>
      <ul>
        {nationalParks.map((park) => (
          <li key={park._id}>{park.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;