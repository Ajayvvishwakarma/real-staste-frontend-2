import React, { useState } from 'react';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      {/* Icon Section */}
      <div className="flex justify-center mb-2 xs:mb-3 sm:mb-4 lg:mb-5">
        <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
          <svg className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
      </div>
      {/* Main Heading */}
      <div className="text-center mb-5">
        <h1 className="text-3xl font-semibold bg-gradient-to-r from-green-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-3">
          Discover Best Places to Live!
        </h1>
        <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Understand localities, check property rates, reviews, transaction prices & more
        </p>
      </div>
      {/* Search Section */}
      <div className="max-w-sm xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto mb-4 xs:mb-5 sm:mb-6">
        <div className="flex flex-col sm:flex-row gap-1 xs:gap-2 bg-white rounded-lg shadow-lg p-2 xs:p-3">
          <div className="flex-1 flex items-center px-2 xs:px-3 py-1 xs:py-2">
            <svg
              className="w-4 h-4 xs:w-5 xs:h-5 text-gray-400 mr-2 xs:mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Enter a city, locality or society"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs xs:text-sm text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-3 xs:px-4 py-1.5 xs:py-2 rounded-lg transition-colors duration-200 text-xs xs:text-sm min-h-[36px] xs:min-h-[40px]">
            Search Insights
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;