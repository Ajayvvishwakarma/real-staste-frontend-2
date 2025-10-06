// import React from 'react';

// const tips = [
//   {
//     icon: '/tips-icon/image.png',
//     title: 'Use-High Quality Photos:',
//     desc: 'High-quality and clear images attract buyers or tenants. Uploading a good photo can increase the chance of your property showing up amongst all the other listings.'
//   },
//   {
//     icon: '/tips-icon/image copy 2.png',
//     title: 'Write an Informative Description:',
//     desc: `Don't confuse the buyer between amenities and infrastructure. Ensure to make a clear description of what all you offer along with your property. With a clear description, you close 50% of the deal.`
//   },
//   {
//     icon: '/tips-icon/image copy 3.png',
//     title: 'Premium Listings:',
//     desc: 'With our premium listing your property will be amongst the top choices. Our premium packages will help you increase your property visibility to interested buyers'
//   },
//   {
//     icon: '/tips-icon/image copy 4.png',
//     title: 'Share Location Information:',
//     desc: 'Ensure to provide buyers with the exact information regarding the location and all the nearby amenities. Location and available amenities are among the most important factors for a buyer or tenant.'
//   },
//   {
//     icon: '/tips-icon/image copy 5.png',
//     title: 'Competitive Price:',
//     desc: 'Research and analyze the right price for your property. With a right competitive and fair pricing attracts more buyers and visitors to your property. Don\'t make it under or overpriced.'
//   },
//   {
//     icon: '/tips-icon/image copy.png',
//     title: 'Be responsive:',
//     desc: 'Once buyers begin to call for questions, respond as quickly as you can since immediate response indicates that you are interested and serious about selling to them, thereby which can help build trust with buyers.'
//   },
// ];

// const Tips_on_selling = () => {
//   return (
//     <div className="bg-gray-300 py-10 px-3 w-full relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute top-0 left-0 w-48 h-48 bg-blue-50 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
//       <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-50 rounded-full opacity-10 translate-x-1/3 translate-y-1/3"></div>
      
//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Header Section */}
//         <div className="text-center mb-6">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">
//             <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
//               Pro Tips
//             </span>{" "}
//             for Selling Property Online
//           </h2>
//           <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
//             Stand out from thousands of listings with these proven strategies.<br />
//             <span className="font-semibold text-blue-400">Maximize your property's visibility and attract serious buyers faster.</span>
//           </p>
//         </div>

//         {/* Tips Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {tips.map((tip, i) => (
//             <div 
//               key={i} 
//               className="group relative bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-100"
//             >
//               {/* Card Number */}
//               <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-green-400 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">
//                 {i + 1}
//               </div>
              
//               {/* Gradient Border Effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-green-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm transform scale-105"></div>
              
//               {/* Icon Container */}
//               <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg mb-4 mx-auto group-hover:scale-105 transition-transform duration-300 shadow-sm">
//                 <img 
//                   src={tip.icon} 
//                   alt={tip.title} 
//                   className="w-12 h-12 object-contain filter group-hover:brightness-110 transition-all duration-300" 
//                 />
//               </div>
              
//               {/* Content */}
//               <div className="space-y-3">
//                 <h3 className="text-lg font-bold text-gray-700 group-hover:text-blue-500 transition-colors duration-300">
//                   {tip.title}
//                 </h3>
//                 <p className="text-gray-500 leading-relaxed text-sm group-hover:text-gray-600 transition-colors duration-300">
//                   {tip.desc}
//                 </p>
//               </div>
              
//               {/* Decorative Arrow */}
//               <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </svg>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tips_on_selling;













import React from 'react';

const tips = [
  {
    icon: '/tips-icon/image.png',
    title: 'Use High-Quality Photos',
    desc: 'High-quality and clear images attract buyers or tenants. Uploading a good photo can increase the chance of your property showing up amongst all the other listings.',
  },
  {
    icon: '/tips-icon/image copy 2.png',
    title: 'Write an Informative Description',
    desc: `Don't confuse the buyer between amenities and infrastructure. Ensure to make a clear description of what all you offer along with your property. With a clear description, you close 50% of the deal.`,
  },
  {
    icon: '/tips-icon/image copy 3.png',
    title: 'Premium Listings',
    desc: 'With our premium listing, your property will be amongst the top choices. Our premium packages will help you increase your property visibility to interested buyers.',
  },
  {
    icon: '/tips-icon/image copy 4.png',
    title: 'Share Location Information',
    desc: 'Ensure to provide buyers with the exact information regarding the location and all the nearby amenities. Location and available amenities are among the most important factors for a buyer or tenant.',
  },
  {
    icon: '/tips-icon/image copy 5.png',
    title: 'Competitive Price',
    desc: `Research and analyze the right price for your property. With a competitive and fair price, you attract more buyers and visitors to your property. Don't make it under or overpriced.`,
  },
  {
    icon: '/tips-icon/image copy.png',
    title: 'Be Responsive',
    desc: 'Once buyers begin to call for questions, respond as quickly as you can since immediate response indicates that you are interested and serious about selling to them, thereby helping build trust with buyers.',
  },
];

const TipsOnSellingIntegration = () => {
  return (
    <div className="bg-gray-300 py-10 px-3 w-full relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-50 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-50 rounded-full opacity-10 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Pro Tips
            </span>{" "}
            for Selling Property Online
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Stand out from thousands of listings with these proven strategies.<br />
            <span className="font-semibold text-blue-400">Maximize your property's visibility and attract serious buyers faster.</span>
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, i) => (
            <div 
              key={i} 
              className="group relative bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-100"
            >
              {/* Card Number */}
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-green-400 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">
                {i + 1}
              </div>
              
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-green-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm transform scale-105"></div>
              
              {/* Icon Container */}
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg mb-4 mx-auto group-hover:scale-105 transition-transform duration-300 shadow-sm">
                <img 
                  src={tip.icon} 
                  alt={tip.title} 
                  className="w-12 h-12 object-contain filter group-hover:brightness-110 transition-all duration-300" 
                />
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-700 group-hover:text-blue-500 transition-colors duration-300">
                  {tip.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm group-hover:text-gray-600 transition-colors duration-300">
                  {tip.desc}
                </p>
              </div>
              
              {/* Decorative Arrow */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TipsOnSellingIntegration;