import React, { useState } from 'react';
import Navbar from './components/Nav/Navbar';
import Hero from './components/Hero/Hero';
import Trip from './components/Trip/Trip';
import Map from './components/Map/Map';
import Footer from './components/Footer/Footer';
import LoginForm from './components/Login-Signup/LoginForm'; 
import SignupForm from './components/Login-Signup/SignupForm'; 

const App = () => {
  const [attractions, setAttractions] = useState([]); // State to store attractions

 
  const searchAttractions = (query) => {
    

  
    const mockAttractions = [
      { name: 'National Park 1', location: { lat: 41.7128, lng: -74.0060 } },
      { name: 'National Park 2', location: { lat: 42.7128, lng: -74.0060 } },
    ];  
    setAttractions(mockAttractions);
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <LoginForm /> 
      <SignupForm /> 
      <Trip onSearch={searchAttractions} /> 
      <Map attractions={attractions} /> 
      <Footer />
    </div>
  );
};

export default App;
