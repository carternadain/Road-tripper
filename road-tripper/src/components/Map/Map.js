import React, { useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, } from '@react-google-maps/api';

const Map = ({ destination }) => {
  const mapRef = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      map.current = new window.google.maps.Map(mapRef.current, {
        center: { lat: 40.7128, lng: -74.0060 }, // Default center
        zoom: 12,
      });
    }
  }, []);

  useEffect(() => {
    if (map.current && destination) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: destination }, (results, status) => {
        if (status === 'OK' && results[0]) {
          map.current.setCenter(results[0].geometry.location);
        } else {
          console.error('Geocode was not successful for the following reason:', status);
        }
      });
    }
  }, [destination]);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <LoadScript googleMapsApiKey="AIzaSyDHvUfktBNhORjt0tl6SXmDPe47CePDp9A">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={{ lat: 40.7128, lng: -74.0060 }}
          zoom={12}
        >
         
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;

