import React, { useEffect, useRef } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

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

  // Fetch places (attractions) and display them on the map
  useEffect(() => {
    if (map.current) {
      const placesService = new window.google.maps.places.PlacesService(map.current);
      const request = {
        location: map.current.getCenter(), // Center of the map
        radius: 10000, // Adjust the radius as needed
        keyword: 'national park', // Change the keyword to search for different attractions
      };

      placesService.nearbySearch(request, (results, status) => {
        if (status === 'OK') {
          results.forEach((place) => {
            const marker = new window.google.maps.Marker({
              map: map.current,
              position: place.geometry.location,
              title: place.name,
            });

            // Create an info window to display additional information
            const infowindow = new window.google.maps.InfoWindow({
              content: place.name,
            });

            // Attach an event listener to display the info window when the marker is clicked
            marker.addListener('click', () => {
              infowindow.open(map.current, marker);
            });
          });
        }
      });
    }
  }, [destination]);

 





return (
  <div style={{ width: '70%', height: '500px', margin: '0 auto', borderRadius: '15px', overflow: 'hidden' }}>
    <LoadScript googleMapsApiKey="AIzaSyDHvUfktBNhORjt0tl6SXmDPe47CePDp9A">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%', borderRadius: '15px' }}
        center={{ lat: 40.7128, lng: -74.0060 }}
        zoom={12}
      />
    </LoadScript>
  </div>
);
}
export  default Map; 