import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { availableCities, getCityData } from '../data/cityPropertyData';

const RentProperty_header = () => {
  const navigate = useNavigate();
  const { city } = useParams();
  const [selectedCity, setSelectedCity] = useState(city || '');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  const currentCityData = getCityData(city, 'rent');

  const handleRentCityClick = (citySlug) => {
    setSelectedCity(citySlug);
    setShowCityDropdown(false);
    if (citySlug) {
      navigate(`/rent/${citySlug}`);
    } else {
      navigate('/rent');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for rent properties:', searchQuery);
    // You can add search logic here
  };

  return (
    <div className="bg-white shadow-md pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="text-sm text-gray-600">
          <span className="hover:text-blue-600 cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span className="hover:text-blue-600 cursor-pointer">Rent</span>
          {city && (
            <>
              <span className="mx-2">/</span>
              <span className="text-gray-800 capitalize">{city.replace('-', ' ')}</span>
            </>
          )}
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Title and Stats */}
          <div className="flex-1">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              Properties for Rent in {currentCityData.displayName}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-medium">
                {currentCityData.totalResults}+ properties
              </span>
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt className="text-gray-500" />
                {currentCityData.displayName}
              </span>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="flex flex-col sm:flex-row gap-3 lg:w-auto w-full">
            {/* City Selector */}
            <div className="relative">
              <button
                onClick={() => setShowCityDropdown(!showCityDropdown)}
                className="flex items-center justify-between w-full sm:w-48 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:border-blue-500 focus:outline-none focus:border-blue-500"
              >
                <span className="text-gray-700">
                  {selectedCity ? availableCities.find(c => c.slug === selectedCity)?.name : 'All Cities'}
                </span>
                <FaChevronDown className={`text-gray-400 transform transition-transform ${showCityDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showCityDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                  <button
                    onClick={() => handleRentCityClick('')}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 text-gray-700 border-b border-gray-100"
                  >
                    All Cities
                  </button>
                  {availableCities.map((city) => (
                    <button
                      key={city.slug}
                      onClick={() => handleRentCityClick(city.slug)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 text-gray-700 border-b border-gray-100 last:border-b-0"
                    >
                      {city.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex-1 sm:flex-none">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for properties, localities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-80 pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Property Description */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-700 text-sm leading-relaxed">
            {currentCityData.description}
          </p>
        </div>

        {/* Popular Localities */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Popular Localities for Rent</h3>
          <div className="flex flex-wrap gap-2">
            {currentCityData.localities.slice(0, 8).map((locality, index) => (
              <button
                key={index}
                className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-sm"
              >
                {locality.name} ({locality.count})
              </button>
            ))}
            {currentCityData.localities.length > 8 && (
              <button className="px-3 py-2 text-blue-600 text-sm font-medium hover:text-blue-800">
                +{currentCityData.localities.length - 8} more
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentProperty_header;










