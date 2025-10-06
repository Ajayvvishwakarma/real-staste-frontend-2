// import React from 'react'

// const Resale_property = () => {
//   return (
//     <div className="max-w-7xl mx-auto py-8 px-4">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-2">Resale Flats in Mumbai</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {/* Property Card 1 */}
//         <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden transition-transform duration-200 hover:scale-105 hover:shadow-lg group">
//           <div className="relative">
//             <img src="/public/properties_img/property-1.jpg" alt="Property" className="w-full h-40 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
//             <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-xs px-3 py-1">23 Aug, 2025</div>
//           </div>
//           <div className="p-4">
//             <div className="font-semibold text-lg text-gray-800 mb-1">2291 Sq.ft. for Rent in Waterfield Road...</div>
//             <div className="text-sm text-gray-500 mb-1">2291 Sq.ft. | Semi-Furnished | Resale</div>
//             <div className="text-red-600 font-bold text-lg mb-2">₹ 3.50 Lac</div>
//             <div className="text-sm font-medium text-gray-800">A Class Properties</div>
//             <div className="text-xs text-gray-500 mb-3">Waterfield Road, Bandra ...</div>
//             <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded hover:bg-blue-700 transition">Contact</button>
//           </div>
//         </div>
//         {/* Property Card 2 */}
//         <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden group">
//           <div className="relative">
//             <img src="/public/properties_img/property-2.jpg" alt="Property" className="w-full h-40 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
//             <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-xs px-3 py-1">27 Aug, 2025</div>
//           </div>
//           <div className="p-4">
//             <div className="font-semibold text-lg text-gray-800 mb-1">1150 Sq.ft. for Rent in Oberoi Garden...</div>
//             <div className="text-sm text-gray-500 mb-1">1150 Sq.ft. | OBEROI WOODS | Furnished</div>
//             <div className="text-red-600 font-bold text-lg mb-2">₹ 1.05 Lac</div>
//             <div className="text-sm font-medium text-gray-800">Better Homes</div>
//             <div className="text-xs text-gray-500 mb-3">Oberoi Garden City, Gore...</div>
//             <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded hover:bg-blue-700 transition">Contact</button>
//           </div>
//         </div>
//         {/* Property Card 3 */}
//         <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden group">
//           <div className="relative">
//             <img src="/public/properties_img/property-3.jpg" alt="Property" className="w-full h-40 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
//             <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-xs px-3 py-1">11 Apr, 2025</div>
//           </div>
//           <div className="p-4">
//             <div className="font-semibold text-lg text-gray-800 mb-1">1010 Sq.ft. for Rent in Worli, Mumbai</div>
//             <div className="text-sm text-gray-500 mb-1">1010 Sq.ft. | Indiabulls Blu | Freehold</div>
//             <div className="text-red-600 font-bold text-lg mb-2">₹ 2.75 Lac</div>
//             <div className="text-sm font-medium text-gray-800">PANCHVATI PROPERTIES</div>
//             <div className="text-xs text-gray-500 mb-3">Worli, Mumbai</div>
//             <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded hover:bg-blue-700 transition">Contact</button>
//           </div>
//         </div>
//         {/* Property Card 4 */}
//         <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden group">
//           <div className="relative">
//             <img src="/public/properties_img/property-4.jpg" alt="Property" className="w-full h-40 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
//             <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-xs px-3 py-1">--</div>
//           </div>
//           <div className="p-4">
//             <div className="font-semibold text-lg text-gray-800 mb-1">1864 Sq.ft. for Rent in Aarey Colony, ...</div>
//             <div className="text-sm text-gray-500 mb-1">1864 Sq.ft. | Individual | Resale</div>
//             <div className="text-red-600 font-bold text-lg mb-2">Call for Price</div>
//             <div className="text-sm font-medium text-gray-800">Maa Real estate consu...</div>
//             <div className="text-xs text-gray-500 mb-3">Aarey Colony, Goregaon E...</div>
//             <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded hover:bg-blue-700 transition">Contact</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Resale_property










import React from "react";

const ResalePropertyIntegration = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Resale Flats in Mumbai</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Property Card 1 */}
        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden transition-transform duration-200 hover:scale-105 hover:shadow-lg group">
          <div className="relative">
            <img
              src="/public/properties_img/property-1.jpg"
              alt="Property"
              className="w-full h-40 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-xs px-3 py-1">
              23 Aug, 2025
            </div>
          </div>
          <div className="p-4">
            <div className="font-semibold text-lg text-gray-800 mb-1">
              2291 Sq.ft. for Rent in Waterfield Road...
            </div>
            <div className="text-sm text-gray-500 mb-1">
              2291 Sq.ft. | Semi-Furnished | Resale
            </div>
            <div className="text-red-600 font-bold text-lg mb-2">₹ 3.50 Lac</div>
            <div className="text-sm font-medium text-gray-800">A Class Properties</div>
            <div className="text-xs text-gray-500 mb-3">
              Waterfield Road, Bandra ...
            </div>
            <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded hover:bg-blue-700 transition">
              Contact
            </button>
          </div>
        </div>
        {/* Property Card 2 */}
        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden group">
          <div className="relative">
            <img
              src="/public/properties_img/property-2.jpg"
              alt="Property"
              className="w-full h-40 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-xs px-3 py-1">
              27 Aug, 2025
            </div>
          </div>
          <div className="p-4">
            <div className="font-semibold text-lg text-gray-800 mb-1">
              1150 Sq.ft. for Rent in Oberoi Garden...
            </div>
            <div className="text-sm text-gray-500 mb-1">
              1150 Sq.ft. | OBEROI WOODS | Furnished
            </div>
            <div className="text-red-600 font-bold text-lg mb-2">₹ 1.05 Lac</div>
            <div className="text-sm font-medium text-gray-800">Better Homes</div>
            <div className="text-xs text-gray-500 mb-3">
              Oberoi Garden City, Gore...
            </div>
            <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded hover:bg-blue-700 transition">
              Contact
            </button>
          </div>
        </div>
        {/* Property Card 3 */}
        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden group">
          <div className="relative">
            <img
              src="/public/properties_img/property-3.jpg"
              alt="Property"
              className="w-full h-40 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-xs px-3 py-1">
              11 Apr, 2025
            </div>
          </div>
          <div className="p-4">
            <div className="font-semibold text-lg text-gray-800 mb-1">
              1010 Sq.ft. for Rent in Worli, Mumbai
            </div>
            <div className="text-sm text-gray-500 mb-1">
              1010 Sq.ft. | Indiabulls Blu | Freehold
            </div>
            <div className="text-red-600 font-bold text-lg mb-2">₹ 2.75 Lac</div>
            <div className="text-sm font-medium text-gray-800">
              PANCHVATI PROPERTIES
            </div>
            <div className="text-xs text-gray-500 mb-3">Worli, Mumbai</div>
            <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded hover:bg-blue-700 transition">
              Contact
            </button>
          </div>
        </div>
        {/* Property Card 4 */}
        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden group">
          <div className="relative">
            <img
              src="/public/properties_img/property-4.jpg"
              alt="Property"
              className="w-full h-40 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-xs px-3 py-1">
              --
            </div>
          </div>
          <div className="p-4">
            <div className="font-semibold text-lg text-gray-800 mb-1">
              1864 Sq.ft. for Rent in Aarey Colony, ...
            </div>
            <div className="text-sm text-gray-500 mb-1">
              1864 Sq.ft. | Individual | Resale
            </div>
            <div className="text-red-600 font-bold text-lg mb-2">
              Call for Price
            </div>
            <div className="text-sm font-medium text-gray-800">
              Maa Real estate consu...
            </div>
            <div className="text-xs text-gray-500 mb-3">
              Aarey Colony, Goregaon E...
            </div>
            <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded hover:bg-blue-700 transition">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResalePropertyIntegration;