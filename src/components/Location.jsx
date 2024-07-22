import React, { useState, useEffect } from 'react';

function Location() {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [pincode, setPincode] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          getPincode(latitude, longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  const getPincode = async (latitude, longitude) => {
    const apiKey = 'AIzaSyCAzm3cPg8CTwxtwvbiAiksaBX0HfZOcpg'; // Replace with your OpenCage API key
    // const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
    

    try {
      const response = await fetch(url);
      const data = await response.json();
      
      
      if (data.status === "OK") {
        const result = data.results[0];
        console.log('result--',result.address_components[9].long_name);
            const postalCode = result.address_components[9].long_name;
            setPincode(postalCode);
          } else {
            console.log('No results found');
          }


      // Extract pincode from API response
      // const pincode = extractPincode(data);
      // return pincode;
    } catch (error) {
      console.error('Error fetching pincode:', error);
      throw error;
    }

    // try {
    //   const response = await fetch(url);
    //   const data = await response.json();
    //   if (data.results.length > 0) {
    //     const result = data.results[0];
    //     const postalCode = result.components.postcode;
    //     setPincode(postalCode);
    //   } else {
    //     console.log('No results found');
    //   }
    // } catch (error) {
    //   console.error('Error fetching pincode:', error);
    // }
  };

  return (
    <div className="Location">
      <h1>Get Pincode from Location</h1>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
      <p>Pincode: {pincode}</p>
    </div>
  );
}

export default Location;
