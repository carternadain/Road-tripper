// Map.js
import React, { useEffect, useRef } from 'react';

const Map = ({ destination }) => {
  const mapRef = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    // Load the Google Maps API script dynamically
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/AIzaSyDHvUfktBNhORjt0tl6SXmDPe47CePDp9A`;
    script.onload = initMap;
    document.head.appendChild(script);

    // Clean up
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initMap = () => {
    // Check if the map container element exists
    if (mapRef.current) {
      map.current = new window.google.maps.Map(mapRef.current, {
        center: { lat: 40.7128, lng: -74.0060 }, // Set your initial map center
        zoom: 12, // Set the initial zoom level
      });
    }
  };

  // Update the map when the destination prop changes
  useEffect(() => {
    if (map.current) {
      // Add your logic here to update the map with the new destination
      // For example, you can use the Geocoding API to convert the destination address to latlng and update the map center
      // Note: Make sure to handle errors and edge cases in your implementation
    }
  }, [destination]);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default Map;
