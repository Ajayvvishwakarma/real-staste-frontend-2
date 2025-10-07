// import React, { useState, useEffect } from 'react'
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

// // Properties data
// const properties = [
//   {
//     title: 'Sarang by Sumadhura',
//     location: 'Whitefield, Bangalore',
//     priceRange: '₹1.35 - 2.94 Cr',
//     bhkConfig: '2, 3, 4 BHK Apartments',
//     priceIncrease: '12.1% price increase in last 1 year in Whitefield',
//     rera: 'RERA',
//     img: '/properties_img/property-1.jpg',
//     area: 'Whitefield',
//   },
//   {
//     title: 'F Residences Merlin',
//     location: 'Rajarhat, Kolkata',
//     priceRange: '₹1.23 - 2.13 Cr',
//     bhkConfig: '3, 4 BHK Apartments',
//     priceIncrease: '20.8% price increase in last 3 months in Rajarhat',
//     rera: 'RERA | HIRA',
//     img: '/properties_img/property-2.jpg',
//     area: 'Rajarhat',
//   },
//   {
//     title: 'Assetz Zen and Soul',
//     location: 'Yelahanka, Bangalore',
//     priceRange: '₹2.7 - 3.7 Cr',
//     bhkConfig: '2, 3, 4 BHK Apartments',
//     priceIncrease: '6.3% price increase in last 1 year in Yelahanka',
//     rera: 'RERA',
//     img: '/properties_img/property-3.jpg',
//     area: 'Yelahanka',
//   },
//   {
//     title: 'Brigade Panorama',
//     location: 'Hebbal, Bangalore',
//     priceRange: '₹1.8 - 3.2 Cr',
//     bhkConfig: '2, 3, 4 BHK Apartments',
//     priceIncrease: '8.5% price increase in last 1 year in Hebbal',
//     rera: 'RERA',
//     img: '/properties_img/property-4.jpg',
//     area: 'Hebbal',
//   },
//   {
//     title: 'Prestige Primrose Hills',
//     location: 'Kanakapura Road, Bangalore',
//     priceRange: '₹1.5 - 2.8 Cr',
//     bhkConfig: '2, 3, 4 BHK Apartments',
//     priceIncrease: '15.2% price increase in last 1 year in Kanakapura Road',
//     rera: 'RERA',
//     img: '/properties_img/property-5.jpg',
//     area: 'Kanakapura Road',
//   },
//   {
//     title: 'Sobha Dream Acres',
//     location: 'Varthur, Bangalore',
//     priceRange: '₹2.1 - 4.5 Cr',
//     bhkConfig: '3, 4, 5 BHK Apartments',
//     priceIncrease: '11.7% price increase in last 1 year in Varthur',
//     rera: 'RERA',
//     img: '/properties_img/property-6.jpg',
//     area: 'Varthur',
//   },
//   {
//     title: 'Godrej Park Retreat',
//     location: 'Sarjapur Road, Bangalore',
//     priceRange: '₹1.9 - 3.6 Cr',
//     bhkConfig: '2, 3, 4 BHK Apartments',
//     priceIncrease: '13.4% price increase in last 1 year in Sarjapur Road',
//     rera: 'RERA',
//     img: '/properties_img/property7.png',
//     area: 'Sarjapur Road',
//   },
//   {
//     title: 'Mantri Pinnacle',
//     location: 'Hebbal, Bangalore',
//     priceRange: '₹1.6 - 2.9 Cr',
//     bhkConfig: '2, 3 BHK Apartments',
//     priceIncrease: '9.8% price increase in last 1 year in Hebbal',
//     rera: 'RERA',
//     img: '/properties_img/property8.png',
//     area: 'Hebbal',
//   },
//   {
//     title: 'Mahindra Luminare',
//     location: 'Sector 59, Gurgaon',
//     priceRange: '₹2.2 - 4.1 Cr',
//     bhkConfig: '2, 3, 4 BHK Apartments',
//     priceIncrease: '7.9% price increase in last 1 year in Sector 59',
//     rera: 'RERA',
//     img: '/properties_img/property9.png',
//     area: 'Sector 59',
//   },
//   {
//     title: 'DLF The Arbour',
//     location: 'Sector 63, Gurgaon',
//     priceRange: '₹3.1 - 5.8 Cr',
//     bhkConfig: '3, 4, 5 BHK Apartments',
//     priceIncrease: '5.6% price increase in last 1 year in Sector 63',
//     rera: 'RERA',
//     img: '/properties_img/property10.png',
//     area: 'Sector 63',
//   },
// ]

// // Utility: determine number of columns
// const getColumnsForWidth = (width) => {
//   if (width >= 1280) return 4
//   if (width >= 1024) return 3
//   if (width >= 768) return 2
//   return 1
// }

// const Featured_property_agent = ({ city }) => {
//   const total = properties.length
//   const [columns, setColumns] = useState(() =>
//     typeof window !== 'undefined' ? getColumnsForWidth(window.innerWidth) : 4
//   )
//   const [visibleCount, setVisibleCount] = useState(() =>
//     Math.min(properties.length, getColumnsForWidth(typeof window !== 'undefined' ? window.innerWidth : 1280))
//   )
//   const [startIdx, setStartIdx] = useState(0)

//   useEffect(() => {
//     const onResize = () => {
//       const cols = getColumnsForWidth(window.innerWidth)
//       setColumns(cols)
//       setVisibleCount(Math.min(total, cols))
//     }
//     window.addEventListener('resize', onResize)
//     return () => window.removeEventListener('resize', onResize)
//   }, [total])

//   const handleImageError = (e) => {
//     e.currentTarget.src = '/properties_img/placeholder.png'
//   }

//   const goToPrevious = () => {
//     setStartIdx((prev) => (prev - 1 + total) % total)
//   }

//   const goToNext = () => {
//     setStartIdx((prev) => (prev + 1) % total)
//   }

//   // Desktop Grid / Slider
//   const renderSlider = () => {
//     const visibleProps = []
//     for (let i = 0; i < visibleCount; i++) {
//       visibleProps.push(properties[(startIdx + i) % total])
//     }

//     return (
//       <div className="w-full max-w-7xl relative flex items-center justify-center">
//         {/* Left Arrow */}
//         <button
//           onClick={goToPrevious}
//           aria-label="Previous"
//           className="hidden md:flex absolute left-[-40px] top-1/2 -translate-y-1/2 text-gray-600 hover:text-green-600 p-2 rounded-full bg-white shadow-md z-10"
//         >
//           <ChevronLeftIcon className="w-5 h-5" />
//         </button>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
//           {visibleProps.map((property, idx) => (
//             <article
//               key={`card-${idx}`}
//               className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
//             >
//               {/* Image */}
//               <div className="h-32 md:h-36 lg:h-40 overflow-hidden relative">
//                 <img
//                   src={property.img}
//                   alt={property.title}
//                   onError={handleImageError}
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-3">
//                 <h3 className="font-semibold text-base mb-1 text-gray-800 line-clamp-2">
//                   {property.title}
//                 </h3>
//                 <p className="text-xs text-gray-600 mb-1 flex items-center">
//                   <span className="mr-1">📍</span>
//                   {property.location}
//                 </p>
//                 <div className="mb-2">
//                   <span className="font-bold text-lg text-green-600">{property.priceRange}</span>
//                 </div>
//                 <p className="text-xs text-gray-700">{property.bhkConfig}</p>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={goToNext}
//           aria-label="Next"
//           className="hidden md:flex absolute right-[-40px] top-1/2 -translate-y-1/2 text-gray-600 hover:text-green-600 p-2 rounded-full bg-white shadow-md z-10"
//         >
//           <ChevronRightIcon className="w-5 h-5" />
//         </button>
//       </div>
//     )
//   }

//   // Mobile Carousel
//   const renderMobileCarousel = () => (
//     <div className="relative">
//       <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 hide-scrollbar">
//         {properties.map((property, idx) => (
//           <article
//             key={idx}
//             className="min-w-[85%] snap-center bg-white rounded-xl shadow-md flex-shrink-0 overflow-hidden"
//           >
//             {/* Image */}
//             <div className="h-40 overflow-hidden relative">
//               <img
//                 src={property.img}
//                 alt={property.title}
//                 onError={handleImageError}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Content */}
//             <div className="p-3">
//               <h3 className="font-semibold text-base mb-1">{property.title}</h3>
//               <p className="text-xs text-gray-600 mb-1 flex items-center">
//                 <span className="mr-1">📍</span>
//                 {property.location}
//               </p>
//               <div className="mb-2">
//                 <span className="font-bold text-lg text-green-600">{property.priceRange}</span>
//               </div>
//               <p className="text-xs text-gray-700">{property.bhkConfig}</p>
//             </div>
//           </article>
//         ))}
//       </div>
//     </div>
//   )

//   return (
//     <section className="w-full bg-gray-100 py-8 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-3">
//           {city ? `Newly launched projects in ${city}` : 'Newly launched projects'}
//         </h2>
//         <p className="text-center text-gray-600 mb-6 text-sm md:text-base">
//           Bigger Home in the same budget
//         </p>

//         {/* Content */}
//         {columns === 1 ? renderMobileCarousel() : renderSlider()}

//         {/* See All Button */}
//         <div className="mt-6 flex justify-center">
//           <a
//             href="#"
//             className="inline-flex items-center bg-gradient-to-r from-green-600 to-black text-white font-semibold px-6 py-2 rounded-full hover:from-black hover:to-green-600 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
//           >
//             See all Projects →
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Featured_property_agent









import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { apiService } from "../services/apiService.js";

const FeaturedPropertyAgentIntegration = ({ city }) => {
  // Helper function to determine columns based on screen width
  const getColumnsForWidth = (width) => {
    if (width >= 1280) return 4;
    if (width >= 1024) return 3;
    if (width >= 768) return 2;
    return 1;
  };

  const [properties, setProperties] = useState([]);
  const [columns, setColumns] = useState(() =>
    typeof window !== "undefined" ? getColumnsForWidth(window.innerWidth) : 4
  );
  const [visibleCount, setVisibleCount] = useState(() =>
    Math.min(properties.length, getColumnsForWidth(typeof window !== "undefined" ? window.innerWidth : 1280))
  );
  const [startIdx, setStartIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await apiService.getProperties();
        setProperties(data);
      } catch (error) {
        setError(error.message);
        setProperties([]); // Set empty array as fallback
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  useEffect(() => {
    const onResize = () => {
      const cols = getColumnsForWidth(window.innerWidth);
      setColumns(cols);
      setVisibleCount(Math.min(properties.length, cols));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [properties.length]);

  const handleImageError = (e) => {
    e.currentTarget.src = "/properties_img/placeholder.png";
  };

  const goToPrevious = () => {
    setStartIdx((prev) => (prev - 1 + properties.length) % properties.length);
  };

  const goToNext = () => {
    setStartIdx((prev) => (prev + 1) % properties.length);
  };

  const renderSlider = () => {
    const visibleProps = [];
    for (let i = 0; i < visibleCount; i++) {
      visibleProps.push(properties[(startIdx + i) % properties.length]);
    }

    return (
      <div className="w-full max-w-7xl relative flex items-center justify-center">
        <button
          onClick={goToPrevious}
          aria-label="Previous"
          className="hidden md:flex absolute left-[-40px] top-1/2 -translate-y-1/2 text-gray-600 hover:text-green-600 p-2 rounded-full bg-white shadow-md z-10"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {visibleProps.map((property, idx) => (
            <article
              key={`card-${idx}`}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="h-32 md:h-36 lg:h-40 overflow-hidden relative">
                <img
                  src={property.img}
                  alt={property.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-3">
                <h3 className="font-semibold text-base mb-1 text-gray-800 line-clamp-2">
                  {property.title}
                </h3>
                <p className="text-xs text-gray-600 mb-1 flex items-center">
                  <span className="mr-1">📍</span>
                  {property.location}
                </p>
                <div className="mb-2">
                  <span className="font-bold text-lg text-green-600">
                    {property.priceRange}
                  </span>
                </div>
                <p className="text-xs text-gray-700">{property.bhkConfig}</p>
              </div>
            </article>
          ))}
        </div>

        <button
          onClick={goToNext}
          aria-label="Next"
          className="hidden md:flex absolute right-[-40px] top-1/2 -translate-y-1/2 text-gray-600 hover:text-green-600 p-2 rounded-full bg-white shadow-md z-10"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
    );
  };

  const renderMobileCarousel = () => (
    <div className="relative">
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 hide-scrollbar">
        {properties.map((property, idx) => (
          <article
            key={idx}
            className="min-w-[85%] snap-center bg-white rounded-xl shadow-md flex-shrink-0 overflow-hidden"
          >
            <div className="h-40 overflow-hidden relative">
              <img
                src={property.img}
                alt={property.title}
                onError={handleImageError}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-3">
              <h3 className="font-semibold text-base mb-1">{property.title}</h3>
              <p className="text-xs text-gray-600 mb-1 flex items-center">
                <span className="mr-1">📍</span>
                {property.location}
              </p>
              <div className="mb-2">
                <span className="font-bold text-lg text-green-600">
                  {property.priceRange}
                </span>
              </div>
              <p className="text-xs text-gray-700">{property.bhkConfig}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading properties...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 text-lg">Error: {error}</p>
      </div>
    );
  }

  return (
    <section className="w-full bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-3">
          {city ? `Newly launched projects in ${city}` : "Newly launched projects"}
        </h2>
        <p className="text-center text-gray-600 mb-6 text-sm md:text-base">
          Bigger Home in the same budget
        </p>

        {columns === 1 ? renderMobileCarousel() : renderSlider()}

        <div className="mt-6 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center bg-gradient-to-r from-green-600 to-black text-white font-semibold px-6 py-2 rounded-full hover:from-black hover:to-green-600 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
          >
            See all Projects →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertyAgentIntegration;