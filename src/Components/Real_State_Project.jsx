// import React, { useState } from 'react';

// const projects = [
//   {
//     status: 'Upcoming Projects',
//     img: '/realstateproject/image.png',
//     name: 'M3M Antalya Hills',
//     location: 'Sector 79, Gurgaon',
//     details: '2, 2.5, 3, 3.5, 4 BHK Builder Flats',
//     area: '7 - 2800 Sq.ft.',
//     price: '₹ 16 Lac - 11.11 Cr.'
//   },
//   {
//     status: 'Ongoing Projects',
//     img: '/realstateproject/image1.png',
//     name: 'Cyberthum',
//     location: 'Sector 140A, Noida',
//     details: '1 BHK Office Space',
//     area: '26 - 418376 Sq.ft.',
//     price: '₹ 6.50 Lac'
//   },
//   {
//     status: 'Upcoming Projects',
//     img: '/realstateproject/image2.png',
//     name: 'Green Lotus Utsav',
//     location: 'Airport Road, Zirakpur',
//     details: '1, 2, 3, 4, 5, 6 BHK Flats',
//     area: '368 - 5753 Sq.ft.',
//     price: '₹ 24.15 Lac - 6.59 Cr.'
//   },
//   {
//     status: 'Upcoming Projects',
//     img: '/realstateproject/image3.png',
//     name: 'Diya GreenCity',
//     location: 'NH 24, Haput',
//     details: '2, 3, 4 BHK Flats',
//     area: '1140 - 2243 Sq.ft.',
//     price: '₹ 41.68 - 98.69 Lac'
//   },
//   {
//     status: 'Upcoming Projects',
//     img: '/realstateproject/image4.png',
//     name: 'Piramal Mahalaxmi',
//     location: 'Mahalaxmi, Mumbai',
//     details: '2, 3, 4 BHK Flats',
//     area: '720 - 1450 Sq.ft.',
//     price: '₹ 3.40 - 40.50 Cr.'
//   },
//   {
//     status: 'Upcoming Projects',
//     img: '/realstateproject/image5.png',
//     name: 'Godrej Woods',
//     location: 'Sector 43, Noida',
//     details: '2, 3, 4 BHK Flats',
//     area: '1250 - 3250 Sq.ft.',
//     price: '₹ 1.25 - 3.25 Cr.'
//   },
//   {
//     status: 'Ongoing Projects',
//     img: '/realstateproject/image6.png',
//     name: 'DLF The Arbour',
//     location: 'Sector 63, Gurgaon',
//     details: '4 BHK Flats',
//     area: '3950 Sq.ft.',
//     price: '₹ 7.50 Cr.'
//   },
//   {
//     status: 'Upcoming Projects',
//     img: '/realstateproject/image7.png',
//     name: 'Prestige City',
//     location: 'Sarjapur Road, Bangalore',
//     details: '1, 2, 3, 4 BHK Flats',
//     area: '650 - 2200 Sq.ft.',
//     price: '₹ 40 Lac - 2.20 Cr.'
//   },
// ];

// const Real_State_Project = () => {
//   const [startIdx, setStartIdx] = useState(0);
//   const visibleCount = 4;
//   const total = projects.length;

//   const nextSlide = () => {
//     setStartIdx((prev) => (prev + 1) % total);
//   };

//   const prevSlide = () => {
//     setStartIdx((prev) => (prev - 1 + total) % total);
//   };

//   const getVisibleProjects = () => {
//     let arr = [];
//     for (let i = 0; i < visibleCount; i++) {
//       arr.push(projects[(startIdx + i) % total]);
//     }
//     return arr;
//   };

//   return (
//     <div className="w-full bg-gradient-to-br from-gray-50 to-white py-4 sm:py-6 md:py-8 lg:py-12 px-2 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
//       <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-green-100 rounded-full -translate-x-8 sm:-translate-x-12 md:-translate-x-16 -translate-y-8 sm:-translate-y-12 md:-translate-y-16 opacity-50"></div>
//       <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-green-50 rounded-full translate-x-10 sm:translate-x-16 md:translate-x-20 translate-y-10 sm:translate-y-16 md:translate-y-20 opacity-30"></div>
      
//       {/* Heading */}
//       <div className="max-w-7xl mx-auto text-center mb-4 sm:mb-6 md:mb-8 relative z-10">
//         <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-1 sm:mb-2">
//           Upcoming Projects in <span className="text-green-600">Bhoomi</span>
//         </h2>
//         <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-medium">The Real Estate</p>
//       </div>
      
//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Mobile Layout - Single Card with Navigation */}
//         <div className="block sm:hidden">
//           <div className="flex items-center justify-center">
//             <button
//               className="text-gray-400 hover:text-gray-600 transition-colors duration-300 p-1"
//               onClick={prevSlide}
//               aria-label="Previous"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
            
//             <div className="mx-4 w-full max-w-xs">
//               {getVisibleProjects().slice(0, 1).map((project, idx) => (
//                 <div 
//                   key={idx} 
//                   className={`bg-white rounded-lg shadow-lg hover:shadow-xl border-2 ${ 
//                     project.status === 'Ongoing Projects' 
//                       ? 'border-green-400 hover:border-green-600' 
//                       : 'border-gray-200 hover:border-green-400'
//                   } overflow-hidden flex flex-col transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group`}
//                 >
//                   <div className="relative h-32 w-full overflow-hidden">
//                     <img src={project.img} alt={project.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
//                     <div className={`absolute bottom-0 left-0 w-full ${
//                       project.status === 'Ongoing Projects' 
//                         ? 'bg-gradient-to-r from-green-600 to-black' 
//                         : 'bg-gradient-to-r from-black to-green-600'
//                     } text-white text-xs px-2 py-1 font-semibold tracking-wide text-center`}>
//                       {project.status}
//                     </div>
//                   </div>
                  
//                   <div className="p-3 flex flex-col flex-1 bg-gradient-to-br from-white to-gray-50 group-hover:from-green-50 group-hover:to-white transition-all duration-300">
//                     <div className="font-bold text-sm mb-1 text-gray-900 group-hover:text-green-700 transition-colors duration-300 line-clamp-2">
//                       {project.name}
//                     </div>
                    
//                     <div className="text-xs text-gray-600 mb-1 flex items-center">
//                       <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//                       </svg>
//                       {project.location}
//                     </div>
                    
//                     <div className="text-xs text-gray-700 mb-1 line-clamp-2">
//                       {project.details}
//                     </div>
                    
//                     <div className="text-xs text-gray-700 mb-2 flex items-center">
//                       <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z" />
//                       </svg>
//                       {project.area}
//                     </div>
                    
//                     <div className="font-bold text-xs text-green-700 group-hover:text-black transition-colors duration-300 mt-auto bg-gradient-to-r from-green-50 to-green-100 px-2 py-1 rounded-lg">
//                       {project.price}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             <button
//               className="text-gray-400 hover:text-gray-600 transition-colors duration-300 p-1"
//               onClick={nextSlide}
//               aria-label="Next"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Tablet and Desktop Layout */}
//         <div className="hidden sm:flex items-center">
//           <button
//             className="text-gray-400 hover:text-gray-600 transition-colors duration-300 p-2 mr-3 lg:mr-4"
//             onClick={prevSlide}
//             aria-label="Previous"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>
          
//           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 flex-1">
//             {getVisibleProjects().map((project, idx) => (
//               <div 
//                 key={idx} 
//                 className={`bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl border-2 ${ 
//                   project.status === 'Ongoing Projects' 
//                     ? 'border-green-400 hover:border-green-600' 
//                     : 'border-gray-200 hover:border-green-400'
//                 } overflow-hidden flex flex-col transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group w-full`}
//               >
//                 <div className="relative h-32 sm:h-36 md:h-40 lg:h-44 w-full overflow-hidden">
//                   <img src={project.img} alt={project.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
//                   <div className={`absolute bottom-0 left-0 w-full ${
//                     project.status === 'Ongoing Projects' 
//                       ? 'bg-gradient-to-r from-green-600 to-black' 
//                       : 'bg-gradient-to-r from-black to-green-600'
//                   } text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 font-semibold tracking-wide text-center`}>
//                     {project.status}
//                   </div>
                  
//                   <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <div className="bg-white/90 backdrop-blur-sm rounded-full p-1 sm:p-1.5">
//                       <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="p-2 sm:p-3 md:p-4 flex flex-col flex-1 bg-gradient-to-br from-white to-gray-50 group-hover:from-green-50 group-hover:to-white transition-all duration-300">
//                   <div className="font-bold text-xs sm:text-sm mb-1 text-gray-900 group-hover:text-green-700 transition-colors duration-300 line-clamp-2">
//                     {project.name}
//                   </div>
                  
//                   <div className="text-xs text-gray-600 mb-1 flex items-center">
//                     <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//                     </svg>
//                     {project.location}
//                   </div>
                  
//                   <div className="text-xs text-gray-700 mb-1 line-clamp-2">
//                     {project.details}
//                   </div>
                  
//                   <div className="text-xs text-gray-700 mb-2 flex items-center">
//                     <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z" />
//                     </svg>
//                     {project.area}
//                   </div>
                  
//                   <div className="font-bold text-xs text-green-700 group-hover:text-black transition-colors duration-300 mt-auto bg-gradient-to-r from-green-50 to-green-100 px-2 py-1 rounded-lg">
//                     {project.price}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <button
//             className="text-gray-400 hover:text-gray-600 transition-colors duration-300 p-2 ml-3 lg:ml-4"
//             onClick={nextSlide}
//             aria-label="Next"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Real_State_Project;









import React, { useState, useEffect } from 'react';
import { apiService } from "../services/apiService.js";

const RealStateProjectIntegration = () => {
  const [projects, setProjects] = useState([]);
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 4;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const data = await apiService.getRealEstateProjects();
        setProjects(data);
      } catch (err) {
        // Fallback to static list if backend fails
        setProjects([
          {
            status: 'Upcoming Projects',
            img: '/realstateproject/image.png',
            name: 'M3M Antalya Hills',
            location: 'Sector 79, Gurgaon',
            details: '2, 2.5, 3, 3.5, 4 BHK Builder Flats',
            area: '7 - 2800 Sq.ft.',
            price: '₹ 16 Lac - 11.11 Cr.'
          },
          {
            status: 'Ongoing Projects',
            img: '/realstateproject/image1.png',
            name: 'Cyberthum',
            location: 'Sector 140A, Noida',
            details: '1 BHK Office Space',
            area: '26 - 418376 Sq.ft.',
            price: '₹ 6.50 Lac'
          },
          {
            status: 'Upcoming Projects',
            img: '/realstateproject/image2.png',
            name: 'Green Lotus Utsav',
            location: 'Airport Road, Zirakpur',
            details: '1, 2, 3, 4, 5, 6 BHK Flats',
            area: '368 - 5753 Sq.ft.',
            price: '₹ 24.15 Lac - 6.59 Cr.'
          },
          {
            status: 'Upcoming Projects',
            img: '/realstateproject/image3.png',
            name: 'Diya GreenCity',
            location: 'NH 24, Haput',
            details: '2, 3, 4 BHK Flats',
            area: '1140 - 2243 Sq.ft.',
            price: '₹ 41.68 - 98.69 Lac'
          },
          {
            status: 'Upcoming Projects',
            img: '/realstateproject/image4.png',
            name: 'Piramal Mahalaxmi',
            location: 'Mahalaxmi, Mumbai',
            details: '2, 3, 4 BHK Flats',
            area: '720 - 1450 Sq.ft.',
            price: '₹ 3.40 - 40.50 Cr.'
          },
          {
            status: 'Upcoming Projects',
            img: '/realstateproject/image5.png',
            name: 'Godrej Woods',
            location: 'Sector 43, Noida',
            details: '2, 3, 4 BHK Flats',
            area: '1250 - 3250 Sq.ft.',
            price: '₹ 1.25 - 3.25 Cr.'
          },
          {
            status: 'Ongoing Projects',
            img: '/realstateproject/image6.png',
            name: 'DLF The Arbour',
            location: 'Sector 63, Gurgaon',
            details: '4 BHK Flats',
            area: '3950 Sq.ft.',
            price: '₹ 7.50 Cr.'
          },
          {
            status: 'Upcoming Projects',
            img: '/realstateproject/image7.png',
            name: 'Prestige City',
            location: 'Sarjapur Road, Bangalore',
            details: '1, 2, 3, 4 BHK Flats',
            area: '650 - 2200 Sq.ft.',
            price: '₹ 40 Lac - 2.20 Cr.'
          },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const total = projects.length;

  const nextSlide = () => {
    setStartIdx((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setStartIdx((prev) => (prev - 1 + total) % total);
  };

  const getVisibleProjects = () => {
    let arr = [];
    for (let i = 0; i < visibleCount; i++) {
      arr.push(projects[(startIdx + i) % total]);
    }
    return arr;
  };

  if (loading) {
    return (
      <div className="text-center p-12 text-blue-600">
        Loading projects...
      </div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-white py-4 sm:py-6 md:py-8 lg:py-12 px-2 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-green-100 rounded-full -translate-x-8 sm:-translate-x-12 md:-translate-x-16 -translate-y-8 sm:-translate-y-12 md:-translate-y-16 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-green-50 rounded-full translate-x-10 sm:translate-x-16 md:translate-x-20 translate-y-10 sm:translate-y-16 md:translate-y-20 opacity-30"></div>
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-4 sm:mb-6 md:mb-8 relative z-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-1 sm:mb-2">
          Upcoming Projects in <span className="text-green-600">Bhoomi</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-medium">The Real Estate</p>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Mobile Layout - Single Card with Navigation */}
        <div className="block sm:hidden">
          <div className="flex items-center justify-center">
            <button
              className="text-gray-400 hover:text-gray-600 transition-colors duration-300 p-1"
              onClick={prevSlide}
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="mx-4 w-full max-w-xs">
              {getVisibleProjects().slice(0, 1).map((project, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white rounded-lg shadow-lg hover:shadow-xl border-2 ${ 
                    project.status === 'Ongoing Projects' 
                      ? 'border-green-400 hover:border-green-600' 
                      : 'border-gray-200 hover:border-green-400'
                  } overflow-hidden flex flex-col transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group`}
                >
                  <div className="relative h-32 w-full overflow-hidden">
                    <img src={project.img} alt={project.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className={`absolute bottom-0 left-0 w-full ${
                      project.status === 'Ongoing Projects' 
                        ? 'bg-gradient-to-r from-green-600 to-black' 
                        : 'bg-gradient-to-r from-black to-green-600'
                    } text-white text-xs px-2 py-1 font-semibold tracking-wide text-center`}>
                      {project.status}
                    </div>
                  </div>
                  
                  <div className="p-3 flex flex-col flex-1 bg-gradient-to-br from-white to-gray-50 group-hover:from-green-50 group-hover:to-white transition-all duration-300">
                    <div className="font-bold text-sm mb-1 text-gray-900 group-hover:text-green-700 transition-colors duration-300 line-clamp-2">
                      {project.name}
                    </div>
                    
                    <div className="text-xs text-gray-600 mb-1 flex items-center">
                      <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {project.location}
                    </div>
                    
                    <div className="text-xs text-gray-700 mb-1 line-clamp-2">
                      {project.details}
                    </div>
                    
                    <div className="text-xs text-gray-700 mb-2 flex items-center">
                      <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z" />
                      </svg>
                      {project.area}
                    </div>
                    
                    <div className="font-bold text-xs text-green-700 group-hover:text-black transition-colors duration-300 mt-auto bg-gradient-to-r from-green-50 to-green-100 px-2 py-1 rounded-lg">
                      {project.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              className="text-gray-400 hover:text-gray-600 transition-colors duration-300 p-1"
              onClick={nextSlide}
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        {/* Tablet and Desktop Layout */}
        <div className="hidden sm:flex items-center">
          <button
            className="text-gray-400 hover:text-gray-600 transition-colors duration-300 p-2 mr-3 lg:mr-4"
            onClick={prevSlide}
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 flex-1">
            {getVisibleProjects().map((project, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl border-2 ${ 
                  project.status === 'Ongoing Projects' 
                    ? 'border-green-400 hover:border-green-600' 
                    : 'border-gray-200 hover:border-green-400'
                } overflow-hidden flex flex-col transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group w-full`}
              >
                <div className="relative h-32 sm:h-36 md:h-40 lg:h-44 w-full overflow-hidden">
                  <img src={project.img} alt={project.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className={`absolute bottom-0 left-0 w-full ${
                    project.status === 'Ongoing Projects' 
                      ? 'bg-gradient-to-r from-green-600 to-black' 
                      : 'bg-gradient-to-r from-black to-green-600'
                  } text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 font-semibold tracking-wide text-center`}>
                    {project.status}
                  </div>
                  
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-1 sm:p-1.5">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="p-2 sm:p-3 md:p-4 flex flex-col flex-1 bg-gradient-to-br from-white to-gray-50 group-hover:from-green-50 group-hover:to-white transition-all duration-300">
                  <div className="font-bold text-xs sm:text-sm mb-1 text-gray-900 group-hover:text-green-700 transition-colors duration-300 line-clamp-2">
                    {project.name}
                  </div>
                  
                  <div className="text-xs text-gray-600 mb-1 flex items-center">
                    <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {project.location}
                  </div>
                  
                  <div className="text-xs text-gray-700 mb-1 line-clamp-2">
                    {project.details}
                  </div>
                  
                  <div className="text-xs text-gray-700 mb-2 flex items-center">
                    <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z" />
                    </svg>
                    {project.area}
                  </div>
                  
                  <div className="font-bold text-xs text-green-700 group-hover:text-black transition-colors duration-300 mt-auto bg-gradient-to-r from-green-50 to-green-100 px-2 py-1 rounded-lg">
                    {project.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button
            className="text-gray-400 hover:text-gray-600 transition-colors duration-300 p-2 ml-3 lg:ml-4"
            onClick={nextSlide}
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RealStateProjectIntegration;