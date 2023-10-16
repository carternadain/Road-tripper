import React, { useState } from 'react';
import Navbar from './components/Nav/Navbar';
import Hero from './components/Hero/Hero';
import Trip from './components/Trip/Trip';
import Map from './components/Map/Map';
import Footer from './components/Footer/Footer';

const App = () => {
  const [attractions, setAttractions] = useState([]); // State to store attractions

  // Function to search for attractions
  const searchAttractions = (query) => {
    // Perform a search for attractions based on the 'query'
    // Update the 'attractions' state with the search results

    // ...

    // For simplicity, you can set the 'attractions' state with a mock array for now.
    const mockAttractions = [
      { name: 'National Park 1', location: { lat: 41.7128, lng: -74.0060 } },
      { name: 'National Park 2', location: { lat: 42.7128, lng: -74.0060 } },
    ];  // Add more attractions here
    setAttractions(mockAttractions);
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <Trip onSearch={searchAttractions} /> {/* Pass the search function to the Trip component */}
      <Map attractions={attractions} /> {/* Pass the attractions to the Map component */}
      <Footer />
    </div>
  );
};

export default App;
