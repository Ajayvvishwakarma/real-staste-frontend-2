import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CityPageTemplate from './CityPageTemplate';

const CityPageWrapper = () => {
  const { citySlug } = useParams();
  
  // Convert citySlug to proper city name
  const formatCityName = (slug) => {
    if (!slug) return 'India';
    
    const cityMappings = {
      'delhi': 'New Delhi',
      'mumbai': 'Mumbai',
      'bangalore': 'Bangalore',
      'chennai': 'Chennai',
      'hyderabad': 'Hyderabad',
      'pune': 'Pune',
      'kolkata': 'Kolkata',
      'ahmedabad': 'Ahmedabad',
      'jaipur': 'Jaipur',
      'lucknow': 'Lucknow',
      'surat': 'Surat',
      'kanpur': 'Kanpur',
      'nagpur': 'Nagpur',
      'indore': 'Indore',
      'thane': 'Thane',
      'bhopal': 'Bhopal',
      'visakhapatnam': 'Visakhapatnam',
      'patna': 'Patna',
      'vadodara': 'Vadodara',
      'ghaziabad': 'Ghaziabad',
      'noida': 'Noida'
    };

    return cityMappings[slug.toLowerCase()] || 
           slug.charAt(0).toUpperCase() + slug.slice(1).toLowerCase();
  };

  const cityName = formatCityName(citySlug);
  const [selectedCity, setSelectedCity] = useState(cityName);

  return (
    <CityPageTemplate 
      cityName={cityName} 
      selectedCity={selectedCity}
      setSelectedCity={setSelectedCity}
    />
  );
};

export default CityPageWrapper;