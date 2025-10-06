// import React from 'react';

// const features = [
//   {
//     img: '/choose_component/image.png',
//     title: 'Reach Millions of Buyers and Tenants',
//     desc: 'Our user-friendly property website in India attracts millions of visitors, which ensures that your listing reaches millions of potential buyers and tenants quickly.'
//   },
//   {
//     img: '/choose_component/image copy.png',
//     title: 'Free & Premium Plans',
//     desc: 'We offer both free property ads and premium listings and the best part is that you can post free property ads, and We offer 20 free property listings to agents and builders, with no charges.'
//   },
//   {
//     img: '/choose_component/image copy 2.png',
//     title: 'Simple and Fast Process',
//     desc: 'This platform provides you with an easy listing of your property, which includes you just have to enter your property information, upload some quality images, and then your property ad goes live.'
//   },
//   {
//     img: '/choose_component/image copy 3.png',
//     title: 'Verified Leads Only',
//     desc: 'We connect you with real buyers and tenants, protecting you from property fraud cases. With us, you can avoid spam inquiries for closing deals.'
//   },
// ];

// const RealEstate_choose = () => {
//   return (
//     <div className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] bg-white">
//       {/* Banner background */}
//       <div className="absolute inset-0 w-full h-[250px] sm:h-[320px] lg:h-[400px] bg-cover bg-center" style={{backgroundImage: 'url(/post_property_banner.png)', zIndex: 0}}></div>
//       <div className="relative z-10 flex justify-center items-center pt-16 sm:pt-24 lg:pt-32 pb-8 sm:pb-12 lg:pb-16">
//         <div className="w-full max-w-6xl bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl px-4 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 shadow-xl sm:shadow-2xl mx-2 sm:mx-4 lg:mx-auto">
//           <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center text-gray-800 mb-2 sm:mb-3 lg:mb-4">
//             Why to Choose <span className="text-green-600">Bhoomi The Real Estate?</span>
//           </h2>
//           <p className="text-center text-gray-600 text-xs sm:text-sm lg:text-base mb-4 sm:mb-6 lg:mb-8 max-w-3xl mx-auto px-2">
//             Bhoomi The Real Estate is truly the best platform when it comes to purchasing, selling, or renting properties. Here's why you should use our platform:
//           </p>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
//             {/* Feature 1 */}
//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 items-start bg-gray-50 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none">
//               <img 
//                 src={features[0].img} 
//                 alt={features[0].title} 
//                 className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 object-contain rounded-xl bg-gray-100 shadow mx-auto sm:mx-0 flex-shrink-0" 
//               />
//               <div className="text-center sm:text-left">
//                 <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-800 mb-1 sm:mb-2 leading-tight">
//                   {features[0].title}
//                 </h3>
//                 <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
//                   {features[0].desc}
//                 </p>
//               </div>
//             </div>

//             {/* Feature 2 */}
//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 items-start bg-gray-50 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none">
//               <img 
//                 src={features[1].img} 
//                 alt={features[1].title} 
//                 className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 object-contain rounded-xl bg-gray-100 shadow mx-auto sm:mx-0 flex-shrink-0" 
//               />
//               <div className="text-center sm:text-left">
//                 <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-800 mb-1 sm:mb-2 leading-tight">
//                   {features[1].title}
//                 </h3>
//                 <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
//                   {features[1].desc}
//                 </p>
//               </div>
//             </div>

//             {/* Feature 3 */}
//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 items-start bg-gray-50 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none">
//               <img 
//                 src={features[2].img} 
//                 alt={features[2].title} 
//                 className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 object-contain rounded-xl bg-gray-100 shadow mx-auto sm:mx-0 flex-shrink-0" 
//               />
//               <div className="text-center sm:text-left">
//                 <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-800 mb-1 sm:mb-2 leading-tight">
//                   {features[2].title}
//                 </h3>
//                 <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
//                   {features[2].desc}
//                 </p>
//               </div>
//             </div>

//             {/* Feature 4 */}
//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 items-start bg-gray-50 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none">
//               <img 
//                 src={features[3].img} 
//                 alt={features[3].title} 
//                 className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 object-contain rounded-xl bg-gray-100 shadow mx-auto sm:mx-0 flex-shrink-0" 
//               />
//               <div className="text-center sm:text-left">
//                 <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-800 mb-1 sm:mb-2 leading-tight">
//                   {features[3].title}
//                 </h3>
//                 <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
//                   {features[3].desc}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RealEstate_choose;










import React from 'react';

const features = [
  {
    img: '/choose_component/image.png',
    title: 'Reach Millions of Buyers and Tenants',
    desc: 'Our user-friendly property website in India attracts millions of visitors, which ensures that your listing reaches millions of potential buyers and tenants quickly.',
  },
  {
    img: '/choose_component/image copy.png',
    title: 'Free & Premium Plans',
    desc: 'We offer both free property ads and premium listings and the best part is that you can post free property ads. We offer 20 free property listings to agents and builders, with no charges.',
  },
  {
    img: '/choose_component/image copy 2.png',
    title: 'Simple and Fast Process',
    desc: 'This platform provides you with an easy listing of your property, which includes entering your property information, uploading some quality images, and then your property ad goes live.',
  },
  {
    img: '/choose_component/image copy 3.png',
    title: 'Verified Leads Only',
    desc: 'We connect you with real buyers and tenants, protecting you from property fraud cases. With us, you can avoid spam inquiries for closing deals.',
  },
];

const RealEstateChooseIntegration = () => {
  return (
    <div className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] bg-white">
      {/* Banner background */}
      <div className="absolute inset-0 w-full h-[250px] sm:h-[320px] lg:h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(/post_property_banner.png)', zIndex: 0 }}></div>
      <div className="relative z-10 flex justify-center items-center pt-16 sm:pt-24 lg:pt-32 pb-8 sm:pb-12 lg:pb-16">
        <div className="w-full max-w-6xl bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl px-4 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 shadow-xl sm:shadow-2xl mx-2 sm:mx-4 lg:mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center text-gray-800 mb-2 sm:mb-3 lg:mb-4">
            Why Choose <span className="text-green-600">Bhoomi The Real Estate?</span>
          </h2>
          <p className="text-center text-gray-600 text-xs sm:text-sm lg:text-base mb-4 sm:mb-6 lg:mb-8 max-w-3xl mx-auto px-2">
            Bhoomi The Real Estate is truly the best platform when it comes to purchasing, selling, or renting properties. Here's why you should use our platform:
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 items-start bg-gray-50 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none"
              >
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 object-contain rounded-xl bg-gray-100 shadow mx-auto sm:mx-0 flex-shrink-0"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-800 mb-1 sm:mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateChooseIntegration;