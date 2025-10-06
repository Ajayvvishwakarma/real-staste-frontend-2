// import React from 'react';

// const benefits = [
//   {
//     title: 'Wider Reach',
//     desc: 'Bhoomi The Real Estate attracts thousands of daily visitors across India. That gives your listing much wider exposure by increasing visibility. Which helps you to connect with a larger audience of potential buyers or renters, maximizing your chances of successful deal completion.',
//     icon: '🌍',
//   },
//   {
//     title: 'SEO-Optimized Listings',
//     desc: `It's an SEO-friendly platform that ensures your property appears at the top in Google searches. This drives organic traffic, making it effortless for interested buyers to discover your listing online.`,
//     icon: '🔍',
//   },
//   {
//     title: 'Dedicated Support',
//     desc: 'Our expert team members work around the clock to provide you with exceptional assistance. Whether you\'re renting, selling, or buying property online, we are always here to guide you through every step.',
//     icon: '🤝',
//   },
//   {
//     title: 'Cost-Effective Advertising',
//     desc: 'If you are an agent or builder, you can post up to 20 free property advertisements to market your properties online - perfect for selling or renting without breaking your marketing budget.',
//     icon: '💰',
//   },
// ];

// const Benifit_of_posting = () => {
//   return (
//     <div className="bg-gray-50 py-16 px-4 w-full">
//       <div className="max-w-6xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">
//             Benefits of Posting on <span className="text-green-600">Bhoomi The Real Estate</span>
//           </h2>
//           <p className="text-gray-600 text-base max-w-3xl mx-auto">
//             Numerous benefits are listed below that Bhoomi The Real Estate can provide you when listing your property. 
//             This can improve your selling or renting experience significantly. Here are some key benefits:
//           </p>
//         </div>

//         {/* Benefits Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {benefits.map((benefit, index) => (
//             <div 
//               key={index} 
//               className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               {/* Icon and Title */}
//               <div className="flex items-start gap-4 mb-4">
//                 <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
//                   {benefit.icon}
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                     {benefit.title}
//                   </h3>
//                 </div>
//               </div>

//               {/* Description */}
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {benefit.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Benifit_of_posting;










import React from 'react';

const benefits = [
  {
    title: 'Wider Reach',
    desc: 'Bhoomi The Real Estate attracts thousands of daily visitors across India. That gives your listing much wider exposure by increasing visibility, helping you connect with a larger audience of potential buyers or renters, maximizing your chances of successful deal completion.',
    icon: '🌍',
  },
  {
    title: 'SEO-Optimized Listings',
    desc: `It's an SEO-friendly platform that ensures your property appears at the top in Google searches. This drives organic traffic, making it effortless for interested buyers to discover your listing online.`,
    icon: '🔍',
  },
  {
    title: 'Dedicated Support',
    desc: 'Our expert team members work around the clock to provide you with exceptional assistance. Whether you\'re renting, selling, or buying property online, we are always here to guide you through every step.',
    icon: '🤝',
  },
  {
    title: 'Cost-Effective Advertising',
    desc: 'If you are an agent or builder, you can post up to 20 free property advertisements to market your properties online - perfect for selling or renting without breaking your marketing budget.',
    icon: '💰',
  },
];

const BenefitOfPostingIntegration = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Benefits of Posting on <span className="text-green-600">Bhoomi The Real Estate</span>
          </h2>
          <p className="text-gray-600 text-base max-w-3xl mx-auto">
            Numerous benefits are listed below that Bhoomi The Real Estate can provide you when listing your property. 
            This can improve your selling or renting experience significantly. Here are some key benefits:
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {benefit.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitOfPostingIntegration;