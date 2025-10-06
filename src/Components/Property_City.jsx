// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getCityRoute, hasDedicatedPage, resolveCityName } from "../utils/cityUtils";

// const cities = [
//   { name: "Bangalore", img: "/cities/banglore.png", count: 34256 },
//   { name: "Gurgaon", img: "/cities/gurgaon.png", count: 33453 },
//   { name: "Mumbai", img: "/cities/mumbai.png", count: 33204 },
//   { name: "New Delhi", img: "/cities/newdelhi.png", count: 31782 },
//   { name: "Pune", img: "/cities/pune.png", count: 28908 },
//   { name: "Lucknow", img: "/cities/lucknow.png", count: 25138 },
//   { name: "Chennai", img: "/cities/chennai.png", count: 20295 },
//   { name: "Noida", img: "/cities/noida.png", count: 18909 },
//   { name: "Hyderabad", img: "/cities/haderabad.png", count: 17687 },
//   { name: "Thane", img: "/cities/thane.png", count: 16650 },
//   { name: "Kolkata", img: "/cities/kolkata.png", count: 11503 },
//   { name: "Ahmedabad", img: "/cities/ahemdabad.png", count: 9055 },
// ];

// const Property_City = () => {
//   const navigate = useNavigate();

//   const handleCityClick = (cityName) => {
//     const resolvedCity = resolveCityName(cityName);
    
//     if (hasDedicatedPage(cityName)) {
//       navigate(getCityRoute(resolvedCity));
//     } else {
//       // For cities without dedicated pages, navigate to generic city route
//       navigate(getCityRoute(cityName));
//     }
//   };

//   return (
//     <section className="relative max-w-7xl mx-auto flex flex-col items-center py-4 px-2 sm:px-4 lg:px-8">
//       {/* Section Title */}
//       <div className="relative z-10 text-center mb-6">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-1">
//           <span className="text-black">Explore Real Estate</span>
//         </h2>
//         <p className="text-gray-600">in Popular Indian Cities</p>
//       </div>

//       {/* Desktop Grid */}
//       <div className="hidden md:grid relative z-10 w-full max-w-7xl grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
//         {cities.map((city, idx) => (
//           <div
//             key={city.name}
//             onClick={() => handleCityClick(city.name)}
//             className="group relative bg-gray-50 rounded-xl shadow-md hover:shadow-2xl p-3 flex flex-col items-center min-h-[180px] overflow-hidden transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 hover:rotate-1 cursor-pointer"
//           >
//             {/* Accent Bar */}
//             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black via-green-500 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

//             {/* Decorative Circle */}
//             <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500"></div>

//             {/* City Image */}
//             <img
//               src={city.img}
//               alt={city.name}
//               className="w-16 h-16 object-cover rounded-lg mb-2 border-2 border-green-100 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500"
//             />

//             {/* City Name */}
//             <h3 className="text-sm font-semibold text-gray-900 mb-1 text-center group-hover:text-green-700 transition-colors duration-300">
//               {city.name}
//             </h3>

//             {/* Property Count */}
//             <span className="relative z-10 inline-block px-2 py-1 text-center rounded-lg text-xs text-white overflow-hidden">
//               <span className="absolute inset-0 bg-gradient-to-r from-green-500 via-black to-green-600 animate-gradient-move rounded-full"></span>
//               <span className="relative z-10 text-xs text-gray-200">
//                 {city.count.toLocaleString()} Properties
//               </span>
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* Mobile & Tablet Horizontal Scroll */}
//       <div className="block md:hidden relative z-10 w-full overflow-hidden">
//         <div
//           className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-2"
//           style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//         >
//           {cities.map((city, idx) => (
//             <div
//               key={city.name}
//               className="flex-shrink-0 w-full snap-center"
//               onClick={() => handleCityClick(city.name)}
//             >
//               <div className="group relative bg-gray-50 rounded-xl shadow-md hover:shadow-2xl px-4 pt-4 pb-0 flex flex-col items-center min-h-[220px] transition-all duration-500 ease-out transform hover:scale-105 cursor-pointer">
//                 {/* Accent Bar */}
//                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black via-green-500 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

//                 {/* City Image */}
//                 <img
//                   src={city.img}
//                   alt={city.name}
//                   className="w-24 h-24 object-cover rounded-lg mb-3 border-2 border-green-100 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500"
//                 />

//                 {/* City Name */}
//                 <h3 className="text-base font-semibold text-gray-900 mb-2 text-center group-hover:text-green-700 transition-colors duration-300">
//                   {city.name}
//                 </h3>

//                 {/* Property Count */}
//                 <span className="relative z-10 inline-block px-3 py-1 text-center rounded-lg text-sm text-white overflow-hidden">
//                   <span className="absolute inset-0 bg-gradient-to-r from-green-500 via-black to-green-600 animate-gradient-move rounded-full"></span>
//                   <span className="relative z-10 text-gray-200">
//                     {city.count.toLocaleString()} Properties
//                   </span>
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Hide scrollbar (mobile) */}
//         <style>{`
//           div::-webkit-scrollbar {
//             display: none;
//           }
//         `}</style>
//       </div>
//     </section>
//   );
// };

// export default Property_City;







import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Replace with your backend API endpoint for city data if needed
const API_URL = "http://localhost:8000/api/cities";

// Dummy fallback for city utils if backend is not ready
const getCityRoute = (city) => `/city/${city.toLowerCase().replace(/\s+/g, "-")}`;
const hasDedicatedPage = (city) => true; // Or fetch from backend/meta
const resolveCityName = (city) => city;

// Integration: fetch city list from backend
const PropertyCityIntegration = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCities = async () => {
      setLoading(true);
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch cities data.");
        const data = await res.json();
        setCities(data);
      } catch (err) {
        setError("Error loading cities.");
        // Fallback: static data if backend fails
        setCities([
          { name: "Bangalore", img: "/cities/banglore.png", count: 34256 },
          { name: "Gurgaon", img: "/cities/gurgaon.png", count: 33453 },
          { name: "Mumbai", img: "/cities/mumbai.png", count: 33204 },
          { name: "New Delhi", img: "/cities/newdelhi.png", count: 31782 },
          { name: "Pune", img: "/cities/pune.png", count: 28908 },
          { name: "Lucknow", img: "/cities/lucknow.png", count: 25138 },
          { name: "Chennai", img: "/cities/chennai.png", count: 20295 },
          { name: "Noida", img: "/cities/noida.png", count: 18909 },
          { name: "Hyderabad", img: "/cities/haderabad.png", count: 17687 },
          { name: "Thane", img: "/cities/thane.png", count: 16650 },
          { name: "Kolkata", img: "/cities/kolkata.png", count: 11503 },
          { name: "Ahmedabad", img: "/cities/ahemdabad.png", count: 9055 },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchCities();
  }, []);

  const handleCityClick = (cityName) => {
    const resolvedCity = resolveCityName(cityName);
    if (hasDedicatedPage(cityName)) {
      navigate(getCityRoute(resolvedCity));
    } else {
      navigate(getCityRoute(cityName));
    }
  };

  if (loading) {
    return (
      <section className="relative max-w-7xl mx-auto flex flex-col items-center py-4 px-2 sm:px-4 lg:px-8">
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading cities...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative max-w-7xl mx-auto flex flex-col items-center py-4 px-2 sm:px-4 lg:px-8">
        <p className="text-red-600">{error}</p>
      </section>
    );
  }

  return (
    <section className="relative max-w-7xl mx-auto flex flex-col items-center py-4 px-2 sm:px-4 lg:px-8">
      {/* Section Title */}
      <div className="relative z-10 text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-1">
          <span className="text-black">Explore Real Estate</span>
        </h2>
        <p className="text-gray-600">in Popular Indian Cities</p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid relative z-10 w-full max-w-7xl grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {cities.map((city, idx) => (
          <div
            key={city.name}
            onClick={() => handleCityClick(city.name)}
            className="group relative bg-gray-50 rounded-xl shadow-md hover:shadow-2xl p-3 flex flex-col items-center min-h-[180px] overflow-hidden transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 hover:rotate-1 cursor-pointer"
          >
            {/* Accent Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black via-green-500 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            {/* Decorative Circle */}
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500"></div>
            {/* City Image */}
            <img
              src={city.img}
              alt={city.name}
              className="w-16 h-16 object-cover rounded-lg mb-2 border-2 border-green-100 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500"
            />
            {/* City Name */}
            <h3 className="text-sm font-semibold text-gray-900 mb-1 text-center group-hover:text-green-700 transition-colors duration-300">
              {city.name}
            </h3>
            {/* Property Count */}
            <span className="relative z-10 inline-block px-2 py-1 text-center rounded-lg text-xs text-white overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-green-500 via-black to-green-600 animate-gradient-move rounded-full"></span>
              <span className="relative z-10 text-xs text-gray-200">
                {city.count.toLocaleString()} Properties
              </span>
            </span>
          </div>
        ))}
      </div>

      {/* Mobile & Tablet Horizontal Scroll */}
      <div className="block md:hidden relative z-10 w-full overflow-hidden">
        <div
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cities.map((city, idx) => (
            <div
              key={city.name}
              className="flex-shrink-0 w-full snap-center"
              onClick={() => handleCityClick(city.name)}
            >
              <div className="group relative bg-gray-50 rounded-xl shadow-md hover:shadow-2xl px-4 pt-4 pb-0 flex flex-col items-center min-h-[220px] transition-all duration-500 ease-out transform hover:scale-105 cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black via-green-500 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <img
                  src={city.img}
                  alt={city.name}
                  className="w-24 h-24 object-cover rounded-lg mb-3 border-2 border-green-100 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500"
                />
                <h3 className="text-base font-semibold text-gray-900 mb-2 text-center group-hover:text-green-700 transition-colors duration-300">
                  {city.name}
                </h3>
                <span className="relative z-10 inline-block px-3 py-1 text-center rounded-lg text-sm text-white overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-green-500 via-black to-green-600 animate-gradient-move rounded-full"></span>
                  <span className="relative z-10 text-gray-200">
                    {city.count.toLocaleString()} Properties
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
        <style>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>
      </div>
    </section>
  );
};

export default PropertyCityIntegration;