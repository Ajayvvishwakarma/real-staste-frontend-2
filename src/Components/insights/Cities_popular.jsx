// import React, { useRef } from 'react'


// const cities = [
//   { name: 'Mumbai', state: 'Maharashtra', properties: '15,234+', image: '/cities/mumbai.jpg' },
//   { name: 'Delhi', state: 'NCR', properties: '12,856+', image: '/cities/delhi.jpg' },
//   { name: 'Bangalore', state: 'Karnataka', properties: '18,942+', image: '/cities/bangalore.jpg' },
//   { name: 'Pune', state: 'Maharashtra', properties: '9,678+', image: '/cities/pune.jpg' },
//   { name: 'Chennai', state: 'Tamil Nadu', properties: '7,432+', image: '/cities/chennai.jpg' },
//   { name: 'Hyderabad', state: 'Telangana', properties: '8,765+', image: '/cities/hyderabad.jpg' },
//   { name: 'Kolkata', state: 'West Bengal', properties: '5,324+', image: '/cities/kolkata.jpg' },
//   { name: 'Ahmedabad', state: 'Gujarat', properties: '6,891+', image: '/cities/ahmedabad.jpg' },
//   { name: 'Noida', state: 'Uttar Pradesh', properties: '5,234+', image: '/cities/noida.jpg' },
//   { name: 'Gurgaon', state: 'Haryana', properties: '7,123+', image: '/cities/gurgaon.jpg' },
// ];

// const Cities_popular = () => {
//   const sliderRef = useRef(null);
//   const scroll = (direction = 'right') => {
//     if (sliderRef.current) {
//       const cardWidth = sliderRef.current.firstChild.offsetWidth + 32; // card width + gap
//       sliderRef.current.scrollBy({
//         left: direction === 'right' ? cardWidth * 2 : -cardWidth * 2,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <div>
//       <div className="mt-8 mr-8">
//         <div className="mb-6">
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">Discover Popular Cities</h2>
//           <p className="text-gray-600">Explore different localities, price trends, reviews and more across India's top cities</p>
//         </div>
//         <div className="relative">
//           {/* Left Arrow */}
//           <button
//             onClick={() => scroll('left')}
//             className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full shadow-lg items-center justify-center hover:scale-110 transition-transform border-2 border-white"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>
//           {/* Right Arrow */}
//           <button
//             onClick={() => scroll('right')}
//             className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full shadow-lg items-center justify-center hover:scale-110 transition-transform border-2 border-white"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//           <div
//             ref={sliderRef}
//             className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pl-16 pr-24"
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {cities.map((city, idx) => (
//               <div
//                 key={city.name}
//                 className="flex-shrink-0 text-center cursor-pointer group bg-white rounded-xl shadow-lg border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 mx-2 py-4 px-2 hover:scale-105"
//                 style={{
//                   minWidth: '220px',
//                   maxWidth: '260px',
//                   display: 'inline-block',
//                   ...(window.innerWidth >= 1024 && idx >= 5 ? { display: 'none' } : {}),
//                 }}
//               >
//                 <div className="w-24 h-24 rounded-full overflow-hidden mb-3 mx-auto border-4 border-blue-200 group-hover:border-blue-400 transition-all duration-300 group-hover:scale-110 shadow-md">
//                   <img
//                     src={city.image}
//                     alt={city.name}
//                     className="w-full h-full object-cover"
//                     onError={e => { e.target.src = '/realstateproject/image.png'; }}
//                   />
//                 </div>
//                 <div className="text-lg font-extrabold text-blue-700 group-hover:text-blue-900 transition-colors drop-shadow mb-1">{city.name}</div>
//                 <div className="text-sm text-gray-500 mb-1">{city.state}</div>
//                 <div className="text-xs text-blue-600 font-semibold mt-1">{city.properties} Properties</div>
//               </div>
//             ))}
//           </div>
//           <style>{`
//             @media (min-width: 1024px) {
//               .flex > div:nth-child(n+6) {
//                 display: none !important;
//               }
//             }
//             .scrollbar-hide::-webkit-scrollbar {
//               display: none;
//             }
//           `}</style>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cities_popular;










import React, { useRef } from "react";

const cities = [
  { name: "Mumbai", state: "Maharashtra", properties: "15,234+", image: "/cities/mumbai.jpg" },
  { name: "Delhi", state: "NCR", properties: "12,856+", image: "/cities/delhi.jpg" },
  { name: "Bangalore", state: "Karnataka", properties: "18,942+", image: "/cities/bangalore.jpg" },
  { name: "Pune", state: "Maharashtra", properties: "9,678+", image: "/cities/pune.jpg" },
  { name: "Chennai", state: "Tamil Nadu", properties: "7,432+", image: "/cities/chennai.jpg" },
  { name: "Hyderabad", state: "Telangana", properties: "8,765+", image: "/cities/hyderabad.jpg" },
  { name: "Kolkata", state: "West Bengal", properties: "5,324+", image: "/cities/kolkata.jpg" },
  { name: "Ahmedabad", state: "Gujarat", properties: "6,891+", image: "/cities/ahmedabad.jpg" },
  { name: "Noida", state: "Uttar Pradesh", properties: "5,234+", image: "/cities/noida.jpg" },
  { name: "Gurgaon", state: "Haryana", properties: "7,123+", image: "/cities/gurgaon.jpg" },
];

const CitiesPopularIntegration = () => {
  const sliderRef = useRef(null);

  const scroll = (direction = "right") => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstChild.offsetWidth + 32; // card width + gap
      sliderRef.current.scrollBy({
        left: direction === "right" ? cardWidth * 2 : -cardWidth * 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="py-8 px-4 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Discover Popular Cities</h2>
          <p className="text-gray-600">
            Explore different localities, price trends, reviews, and more across India's top cities.
          </p>
        </div>
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full shadow-lg items-center justify-center hover:scale-110 transition-transform border-2 border-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full shadow-lg items-center justify-center hover:scale-110 transition-transform border-2 border-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pl-4 lg:pl-16 pr-4 lg:pr-24"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {cities.map((city) => (
              <div
                key={city.name}
                className="flex-shrink-0 text-center group bg-white rounded-xl shadow-lg border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 py-4 px-2 hover:scale-105"
                style={{ minWidth: "220px", maxWidth: "260px" }}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-3 mx-auto border-4 border-blue-200 group-hover:border-blue-400 transition-all duration-300 group-hover:scale-110 shadow-md">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/realstateproject/image.png";
                    }}
                  />
                </div>
                <div className="text-lg font-extrabold text-blue-700 group-hover:text-blue-900 transition-colors drop-shadow mb-1">
                  {city.name}
                </div>
                <div className="text-sm text-gray-500 mb-1">{city.state}</div>
                <div className="text-xs text-blue-600 font-semibold mt-1">{city.properties} Properties</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitiesPopularIntegration;