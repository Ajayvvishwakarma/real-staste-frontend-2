import React from 'react';

const StartWithGuidesSection = () => {
  return (
    <div className="mt-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Start with these guides</h2>
        <p className="text-gray-600">Know all that you need to live the better life you want</p>
      </div>

      {/* Guides Slider */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button 
          onClick={() => {
            const container = document.getElementById('guides-slider');
            container.scrollBy({ left: -300, behavior: 'smooth' });
          }}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={() => {
            const container = document.getElementById('guides-slider');
            container.scrollBy({ left: 300, behavior: 'smooth' });
          }}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div 
          id="guides-slider"
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pl-8 pr-28"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Buyer's Guide */}
          <div className="flex-shrink-0 w-64">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-white h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-white bg-opacity-20 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Essential Guide
                </span>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Home Buying Guide</h3>
              <p className="text-blue-100 text-sm mb-4">Complete step-by-step guide to buying your dream home</p>
              <div className="flex items-center text-sm">
                <span>12 Steps</span>
                <span className="mx-2">•</span>
                <span>15 min read</span>
              </div>
            </div>
          </div>

          {/* Seller's Guide */}
          <div className="flex-shrink-0 w-64">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-white h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-white bg-opacity-20 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Seller's Guide
                </span>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 3H5a2 2 0 00-2 2v1m2 0h14M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Home Selling Guide</h3>
              <p className="text-orange-100 text-sm mb-4">Maximize your property value with expert selling strategies</p>
              <div className="flex items-center text-sm">
                <span>10 Steps</span>
                <span className="mx-2">•</span>
                <span>12 min read</span>
              </div>
            </div>
          </div>

          {/* Tenant's Guide */}
          <div className="flex-shrink-0 w-64">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-white h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-white bg-opacity-20 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Renting Guide
                </span>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Home Renting Guide</h3>
              <p className="text-green-100 text-sm mb-4">Find the perfect rental property and secure the best deals</p>
              <div className="flex items-center text-sm">
                <span>8 Steps</span>
                <span className="mx-2">•</span>
                <span>10 min read</span>
              </div>
            </div>
          </div>

          {/* Investment Guide */}
          <div className="flex-shrink-0 w-64">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-white h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-white bg-opacity-20 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Investment Guide
                </span>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Property Investment</h3>
              <p className="text-purple-100 text-sm mb-4">Smart strategies to build wealth through real estate</p>
              <div className="flex items-center text-sm">
                <span>15 Steps</span>
                <span className="mx-2">•</span>
                <span>20 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartWithGuidesSection;