// import React, { useEffect } from 'react';

// const LocalityDataSection = ({ cityData, updateCityData }) => {
//   // Make updateCityData available globally
//   useEffect(() => {
//     window.updateCityData = updateCityData;
//   }, [updateCityData]);

//   return (
//     <div className="bg-white rounded-lg shadow-sm p-6">
//       <div className="mb-6">
//         <h2 className="text-xl font-bold text-gray-900 mb-1">Top Gainers</h2>
//         <p className="text-sm text-gray-600">across India with highest appreciation</p>
//       </div>

//       {/* City Tabs with Slider */}
//       <div className="relative mb-6">
//         {/* Left Arrow */}
//         <button 
//           onClick={() => {
//             const slider = document.getElementById('city-slider');
//             slider.scrollBy({ left: -150, behavior: 'smooth' });
//           }}
//           className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
//         >
//           <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         {/* Right Arrow */}
//         <button 
//           onClick={() => {
//             const slider = document.getElementById('city-slider');
//             slider.scrollBy({ left: 150, behavior: 'smooth' });
//           }}
//           className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
//         >
//           <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>

//         {/* City Tabs Slider */}
//         <div 
//           id="city-slider"
//           className="flex gap-2 overflow-x-auto scrollbar-hide pl-10 pr-28"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           {[
//             'Bangalore', 'Mumbai', 'Delhi', 'Pune', 'Chennai', 'Hyderabad', 
//             'Kolkata', 'Gurgaon', 'Navi Mumbai', 'Noida', 'Ahmedabad', 
//             'Lucknow', 'Indore', 'Bhopal', 'Chandigarh', 'Jaipur'
//           ].map((city, index) => (
//             <button
//               key={city}
//               onClick={(event) => {
//                 // Remove active class from all buttons
//                 document.querySelectorAll('#city-slider button').forEach(btn => {
//                   btn.className = 'flex-shrink-0 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors';
//                 });
//                 // Add active class to clicked button
//                 event.target.className = 'flex-shrink-0 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap bg-blue-500 text-white transition-colors';
                
//                 // Update city data
//                 updateCityData(city);
//               }}
//               className={`flex-shrink-0 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
//                 index === 0 
//                   ? 'bg-blue-500 text-white' 
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               {city}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="mb-4 text-right">
//         <span className="text-sm text-gray-600">In Last 1 Year</span>
//       </div>

//       {/* Table Headers */}
//       <div className="grid grid-cols-4 gap-4 py-2 border-b border-gray-200 text-sm font-medium text-gray-600">
//         <div>Locality</div>
//         <div className="text-center">Rate on 99acres</div>
//         <div className="text-center">Rental Yield</div>
//         <div className="text-center">Price Trends</div>
//       </div>

//       {/* Property Rows - Dynamic Content */}
//       <div id="city-data-container" className="space-y-3 mt-3">
//         {/* Default: Bangalore Data */}
//         {cityData['Bangalore']?.map((locality, index) => (
//           <div key={index} className={`grid grid-cols-4 gap-4 py-3 ${index < cityData['Bangalore'].length - 1 ? 'border-b border-gray-100' : ''} items-center`}>
//             <div className="flex items-center">
//               <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
//               <div>
//                 <div className="font-medium text-sm text-gray-900">{locality.name}</div>
//                 <div className="text-xs text-gray-500">{locality.area}</div>
//               </div>
//             </div>
//             <div className="text-center">
//               <div className="text-sm text-gray-600">Rate on 99acres</div>
//               <div className="font-semibold text-sm">{locality.rate}</div>
//             </div>
//             <div className="text-center">
//               <div className="text-sm text-gray-600">Rental Yield</div>
//               <div className="font-semibold text-sm">{locality.yield}</div>
//             </div>
//             <div className="text-center">
//               <div className="text-green-600 font-semibold text-sm">↗ {locality.trend}</div>
//               <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
//                 <div className="bg-green-500 h-1 rounded-full" style={{width: locality.width}}></div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Footer */}
//       <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
//         <div className="text-xs text-gray-500">
//           Is this helpful? <span className="text-blue-500 cursor-pointer">Yes</span> | <span className="text-blue-500 cursor-pointer">No</span>
//         </div>
//         <div className="text-xs text-gray-500">
//           All
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LocalityDataSection;










import React, { useEffect, useState } from 'react';

const DEFAULT_CITIES = [
  'Bangalore', 'Mumbai', 'Delhi', 'Pune', 'Chennai', 'Hyderabad', 
  'Kolkata', 'Gurgaon', 'Navi Mumbai', 'Noida', 'Ahmedabad', 
  'Lucknow', 'Indore', 'Bhopal', 'Chandigarh', 'Jaipur'
];

// Dummy data for demonstration
const DUMMY_CITY_DATA = {
  Bangalore: [
    { name: "Whitefield", area: "East Bangalore", rate: "₹8,000/sqft", yield: "4.2%", trend: "+13.6%", width: "92%" },
    { name: "Electronic City", area: "South Bangalore", rate: "₹5,500/sqft", yield: "4.6%", trend: "+12.2%", width: "84%" },
    { name: "Hebbal", area: "North Bangalore", rate: "₹7,200/sqft", yield: "4.0%", trend: "+11.8%", width: "77%" }
  ],
  Mumbai: [
    { name: "Andheri West", area: "Western Suburbs", rate: "₹21,000/sqft", yield: "3.1%", trend: "+12.3%", width: "80%" },
    { name: "Powai", area: "Central Mumbai", rate: "₹17,000/sqft", yield: "3.5%", trend: "+10.6%", width: "72%" }
  ],
  // ... Add data for other cities as needed
};

const LocalityDataSectionIntegration = ({ cityData = DUMMY_CITY_DATA, updateCityData }) => {
  const [activeCity, setActiveCity] = useState(DEFAULT_CITIES[0]);
  const [localities, setLocalities] = useState(cityData[activeCity] || []);

  useEffect(() => {
    window.updateCityData = updateCityData ? updateCityData : (city) => {
      setActiveCity(city);
      setLocalities(cityData[city] || []);
    };
    // Default load
    setActiveCity(DEFAULT_CITIES[0]);
    setLocalities(cityData[DEFAULT_CITIES[0]] || []);
    // eslint-disable-next-line
  }, [cityData, updateCityData]);

  // For city tab click
  const handleCityClick = (city, event) => {
    setActiveCity(city);
    setLocalities(cityData[city] || []);
    // Active tab styling handled via state
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Top Gainers</h2>
        <p className="text-sm text-gray-600">across India with highest appreciation</p>
      </div>
      {/* City Tabs with Slider */}
      <div className="relative mb-6">
        {/* Left Arrow */}
        <button
          onClick={() => {
            const slider = document.getElementById('city-slider');
            slider && slider.scrollBy({ left: -150, behavior: 'smooth' });
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        {/* Right Arrow */}
        <button
          onClick={() => {
            const slider = document.getElementById('city-slider');
            slider && slider.scrollBy({ left: 150, behavior: 'smooth' });
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        {/* City Tabs Slider */}
        <div
          id="city-slider"
          className="flex gap-2 overflow-x-auto scrollbar-hide pl-10 pr-28"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {DEFAULT_CITIES.map((city) => (
            <button
              key={city}
              onClick={(event) => handleCityClick(city, event)}
              className={`flex-shrink-0 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCity === city
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4 text-right">
        <span className="text-sm text-gray-600">In Last 1 Year</span>
      </div>
      {/* Table Headers */}
      <div className="grid grid-cols-4 gap-4 py-2 border-b border-gray-200 text-sm font-medium text-gray-600">
        <div>Locality</div>
        <div className="text-center">Rate on 99acres</div>
        <div className="text-center">Rental Yield</div>
        <div className="text-center">Price Trends</div>
      </div>
      {/* Property Rows - Dynamic Content */}
      <div id="city-data-container" className="space-y-3 mt-3">
        {localities && localities.length > 0 ? (
          localities.map((locality, index) => (
            <div
              key={index}
              className={`grid grid-cols-4 gap-4 py-3 ${
                index < localities.length - 1 ? 'border-b border-gray-100' : ''
              } items-center`}
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <div>
                  <div className="font-medium text-sm text-gray-900">{locality.name}</div>
                  <div className="text-xs text-gray-500">{locality.area}</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600">Rate on 99acres</div>
                <div className="font-semibold text-sm">{locality.rate}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600">Rental Yield</div>
                <div className="font-semibold text-sm">{locality.yield}</div>
              </div>
              <div className="text-center">
                <div className="text-green-600 font-semibold text-sm">↗ {locality.trend}</div>
                <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                  <div
                    className="bg-green-500 h-1 rounded-full"
                    style={{ width: locality.width }}
                  ></div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-500 text-center py-6">No data available for {activeCity}.</div>
        )}
      </div>
      {/* Footer */}
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          Is this helpful? <span className="text-blue-500 cursor-pointer">Yes</span> | <span className="text-blue-500 cursor-pointer">No</span>
        </div>
        <div className="text-xs text-gray-500">
          All
        </div>
      </div>
    </div>
  );
};

export default LocalityDataSectionIntegration;