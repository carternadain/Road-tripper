// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [nationalParks, setNationalParks] = useState([]);

//   useEffect(() => {
//     // Make a GET request to the backend API endpoint for national parks
//     axios.get('/api/nationalparks')
//       .then((response) => {
//         setNationalParks(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching national parks:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>National Parks</h1>
//       <ul>
//         {nationalParks.map((park) => (
//           <li key={park._id}>{park.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Left side */}
        <span className="navbar-brand">My Own Journey</span>
        
        {/* Right side */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </nav>

      {/* Orange Circle */}
      <div className="orange-circle">My Own Journey</div>
    </div>
  );
};

export default App;
  