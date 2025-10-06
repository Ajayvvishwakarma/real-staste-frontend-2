// import React from 'react'

// const services = [
//   {
//     title: 'Agents / Brokers',
//     desc: 'Here Are Hassle-Free Solutions! Buy - Sell - Rent Your Property',
//     img: '/realstateimg/image1.png',
//   },
//   {
//     title: 'Builders / Developers',
//     desc: 'List of the most trusted and reliable builders to fulfill your Dream Home.',
//     img: '/realstateimg/image2.png',
//   },
//   {
//     title: 'Architects / Architecture',
//     desc: 'Professional Architecture will meet your needs and expectations.',
//     img: '/realstateimg/image3.png',
//   },
//   {
//     title: 'Interior Decorators',
//     desc: 'A One-Stop Solution for all your decor Needs to Match Your Lifestyle.',
//     img: '/realstateimg/image4.png',
//   },
//   {
//     title: 'Vaastu Consultant',
//     desc: 'Connect to top most Vastu consultants for right direction.',
//     img: '/realstateimg/image5.png',
//   },
//   {
//     title: 'Building Contractors',
//     desc: 'General contractor for a Home repair, remodel, or construction.',
//     img: '/realstateimg/image6.png',
//   },
//   {
//     title: 'Home Inspection',
//     desc: 'A complete range of building and Home inspection services.',
//     img: '/realstateimg/image7.png',
//   },
//   {
//     title: 'Property Consultants',
//     desc: 'List of Leading Real Estate Consultant for Professional Assistance Services.',
//     img: '/realstateimg/image8.png',
//   },
// ];

// const Real_State_Services = ({ city = 'India' }) => {
//   return (
//   <section className="relative w-full flex flex-col items-center py-8 bg-gray-50 overflow-hidden">


//       <div className="relative z-10 w-full">
//         {/* Enhanced Title Section */}
//         <div className="text-center mb-10">
//           <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold mb-4 animate-fade-in-up">
//             <span
//               className="text-black font-semibold text-3xl"
             
//             >
//               Real Estate Services in India
//             </span>
//           </h2>
          
//         </div>

//         {/* Enhanced Services Grid */}
//         <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6">
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               className="group relative bg-white rounded-3xl shadow-2xl p-8 flex flex-col justify-between min-h-[300px] overflow-hidden transition-all duration-700 ease-out transform hover:scale-105 hover:-translate-y-3 hover:rotate-1 animate-fade-in-up"
//               style={{ animationDelay: `${idx * 150}ms` }}
//             >
//               {/* Top Transition Color Bar */}
//               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-black via-green-500 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

//               {/* Animated Background Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

//               {/* Floating Decoration */}
//               <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 animate-bounce"></div>

//               <div className="relative z-10">
//                 {/* Service Icon with Animation */}
//                 <div className="flex items-center mb-4">
//                   <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full mr-3 group-hover:animate-spin"></div>
//                   <div className="w-2 h-2 bg-black rounded-full mr-2 group-hover:animate-pulse"></div>
//                   <div className="w-1 h-1 bg-green-400 rounded-full group-hover:animate-ping"></div>
//                 </div>

//                 {/* Enhanced Title */}
//                 <h3 className="text-lg md:text-xl font-bold text-black mb-3 group-hover:text-green-700 transition-all duration-300 transform group-hover:scale-105">
//                   {service.title}
//                 </h3>

//                 {/* Enhanced Description */}
//                 <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed group-hover:text-gray-800 transition-all duration-300">
//                   {service.desc}
//                 </p>
//               </div>

//               {/* Enhanced Footer */}
//               <div className="relative z-10 flex items-end justify-between mt-auto">
//                 {/* ✅ Updated Button with Green → Black Gradient Transition */}
//                 <button className="group/btn relative px-6 py-3 bg-gradient-to-r from-green-600 via-green-700 to-black text-white rounded-xl font-semibold overflow-hidden transition-all duration-700 transform hover:scale-110 hover:shadow-2xl hover:shadow-black/40 animate-gradient-move">
//                   {/* Shimmer Effect */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>

//                   <span className="relative flex items-center z-10">
//                     <span className="transition-all duration-300 group-hover/btn:text-white">Read More</span>
//                     <svg
//                       className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-2 group-hover/btn:scale-125 group-hover/btn:rotate-12 transition-all duration-500"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                     </svg>
//                   </span>
//                 </button>

//                 {/* Enhanced Image Container */}
//                 <div className="absolute right-4 bottom-4 p-3 bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110 border-2 border-transparent group-hover:border-green-500">
//                   <img
//                     src={service.img}
//                     alt={service.title}
//                     className="w-12 h-12 object-contain filter group-hover:brightness-110 group-hover:contrast-110 transition-all duration-500"
//                   />
//                 </div>
//               </div>

//               {/* Corner Decorations */}
//               <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-green-500 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
//               <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-green-500 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>

//               {/* Glowing Border Effect */}
//               <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-green-500 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all duration-500"></div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes gradient-shift {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         @keyframes fade-in-up {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes expand {
//           from { width: 0; }
//           to { width: 8rem; }
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
//         @keyframes slow-bounce {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
//         @keyframes gradient-move {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         .animate-gradient-shift {
//           animation: gradient-shift 3s ease-in-out infinite;
//         }
//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//           opacity: 0;
//         }
//         .animate-expand {
//           animation: expand 1s ease-out 0.5s forwards;
//           width: 0;
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-slow-bounce {
//           animation: slow-bounce 4s ease-in-out infinite;
//         }
//         .animate-gradient-move {
//           background-size: 200% 200%;
//           animation: gradient-move 4s ease infinite;
//         }
//       `}</style>
//     </section>
//   );
// }

// export default Real_State_Services










import React, { useState, useEffect } from 'react';

// Replace with your backend API endpoint for services data if needed
const API_URL = "http://localhost:8000/api/real-estate-services";

const RealStateServicesIntegration = ({ city = 'India' }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch services.");
        const data = await res.json();
        setServices(data);
      } catch (err) {
        // Fallback to static data if backend fails
        setServices([
          {
            title: 'Agents / Brokers',
            desc: 'Here Are Hassle-Free Solutions! Buy - Sell - Rent Your Property',
            img: '/realstateimg/image1.png',
          },
          {
            title: 'Builders / Developers',
            desc: 'List of the most trusted and reliable builders to fulfill your Dream Home.',
            img: '/realstateimg/image2.png',
          },
          {
            title: 'Architects / Architecture',
            desc: 'Professional Architecture will meet your needs and expectations.',
            img: '/realstateimg/image3.png',
          },
          {
            title: 'Interior Decorators',
            desc: 'A One-Stop Solution for all your decor Needs to Match Your Lifestyle.',
            img: '/realstateimg/image4.png',
          },
          {
            title: 'Vaastu Consultant',
            desc: 'Connect to top most Vastu consultants for right direction.',
            img: '/realstateimg/image5.png',
          },
          {
            title: 'Building Contractors',
            desc: 'General contractor for a Home repair, remodel, or construction.',
            img: '/realstateimg/image6.png',
          },
          {
            title: 'Home Inspection',
            desc: 'A complete range of building and Home inspection services.',
            img: '/realstateimg/image7.png',
          },
          {
            title: 'Property Consultants',
            desc: 'List of Leading Real Estate Consultant for Professional Assistance Services.',
            img: '/realstateimg/image8.png',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center py-8 bg-gray-50 overflow-hidden">
      <div className="relative z-10 w-full">
        {/* Enhanced Title Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold mb-4 animate-fade-in-up">
            <span className="text-black font-semibold text-3xl">
              Real Estate Services in {city}
            </span>
          </h2>
        </div>

        {/* Enhanced Services Grid */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6">
          {loading ? (
            <div className="col-span-4 text-center text-blue-600 py-12">Loading services...</div>
          ) : (
            services.map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl shadow-2xl p-8 flex flex-col justify-between min-h-[300px] overflow-hidden transition-all duration-700 ease-out transform hover:scale-105 hover:-translate-y-3 hover:rotate-1 animate-fade-in-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Top Transition Color Bar */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-black via-green-500 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                {/* Animated Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Floating Decoration */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 animate-bounce"></div>

                <div className="relative z-10">
                  {/* Service Icon with Animation */}
                  <div className="flex items-center mb-4">
                    <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full mr-3 group-hover:animate-spin"></div>
                    <div className="w-2 h-2 bg-black rounded-full mr-2 group-hover:animate-pulse"></div>
                    <div className="w-1 h-1 bg-green-400 rounded-full group-hover:animate-ping"></div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-black mb-3 group-hover:text-green-700 transition-all duration-300 transform group-hover:scale-105">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed group-hover:text-gray-800 transition-all duration-300">
                    {service.desc}
                  </p>
                </div>

                {/* Enhanced Footer */}
                <div className="relative z-10 flex items-end justify-between mt-auto">
                  <button className="group/btn relative px-6 py-3 bg-gradient-to-r from-green-600 via-green-700 to-black text-white rounded-xl font-semibold overflow-hidden transition-all duration-700 transform hover:scale-110 hover:shadow-2xl hover:shadow-black/40 animate-gradient-move">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative flex items-center z-10">
                      <span className="transition-all duration-300 group-hover/btn:text-white">Read More</span>
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-2 group-hover/btn:scale-125 group-hover/btn:rotate-12 transition-all duration-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                  <div className="absolute right-4 bottom-4 p-3 bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110 border-2 border-transparent group-hover:border-green-500">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-12 h-12 object-contain filter group-hover:brightness-110 group-hover:contrast-110 transition-all duration-500"
                    />
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-green-500 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-green-500 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-green-500 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all duration-500"></div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes expand {
          from { width: 0; }
          to { width: 8rem; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slow-bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-shift {
          animation: gradient-shift 3s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-expand {
          animation: expand 1s ease-out 0.5s forwards;
          width: 0;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-slow-bounce {
          animation: slow-bounce 4s ease-in-out infinite;
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 4s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default RealStateServicesIntegration;