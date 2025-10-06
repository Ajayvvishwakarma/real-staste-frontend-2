// import React from "react";

// const faqs = [
//   {
//     question: "Is it possible to post ads for free?",
//     answer: "Yes, you can also post free property ads on Bhoomi The Real Estate. This website allows you to list your free property without any charges. It's easy to reach potential buyers and tenants. So, if you are an agent or builder, you can enjoy up to 20 free property listings."
//   },
//   {
//     question: "For how long will my property ad be live on the website?",
//     answer: "Your property ad will remain live on Bhoomi The Real Estate for up to 90 days. You can renew or repost your ad after this period to continue reaching buyers and tenants."
//   },
//   {
//     question: "Can I rent or sell my house without paying the brokerage amount?",
//     answer: "Yes, Bhoomi The Real Estate allows you to connect directly with buyers and tenants, so you can rent or sell your house without paying any brokerage."
//   },
//   {
//     question: "Should I add photos while posting a property ad online on the website?",
//     answer: "Adding photos to your property ad is highly recommended. It attracts more buyers and tenants and increases the chances of a quick deal."
//   },
//   {
//     question: "Can I list both residential and commercial properties on Bhoomi The Real Estate?",
//     answer: "Yes, you can list both residential and commercial properties on Bhoomi The Real Estate. The platform supports all property types."
//   },
//   {
//     question: "Can I expect genuine buyers or renters from a free property advertisement?",
//     answer: "Bhoomi The Real Estate has a large user base of genuine buyers and renters. Your free property ad will be visible to thousands of potential clients."
//   },
//   {
//     question: "Is it safe to provide my personal details on Bhoomi The Real Estate?",
//     answer: "Yes, Bhoomi The Real Estate is a trusted platform and keeps your personal details secure. Only verified users can contact you regarding your property ad."
//   }
// ];

// const FAQ = () => {
//   const [openIdx, setOpenIdx] = React.useState(null);
//   const [showContact, setShowContact] = React.useState(false);

//   const handleToggle = (idx) => {
//     setOpenIdx(openIdx === idx ? null : idx);
//   };

//   const handleContactClick = () => {
//     setShowContact(!showContact);
//   };

//   return (
//     <div className="relative w-full">
//       <style>{`
//         @keyframes fadeInScale {
//           from {
//             opacity: 0;
//             transform: scale(0.9) translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1) translateY(0);
//           }
//         }
//         .modal-backdrop {
//           backdrop-filter: blur(8px);
//         }
//       `}</style>

//       {/* Main FAQ Container */}
//       <div className="w-full bg-gradient-to-br from-gray-50 via-white to-blue-50 py-4 sm:py-6 lg:py-8 px-2 sm:px-4 lg:px-6">
//         <div className="max-w-4xl mx-auto">
//           {/* Header Section */}
//           <div className="text-center mb-4 sm:mb-6 lg:mb-8">
           
//             <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black mb-1 sm:mb-2">
//               <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
//                 FAQ
//               </span>{" "}
//               - Frequently Asked Questions
//             </h2>
//             <p className="text-xs sm:text-sm lg:text-base text-black max-w-2xl mx-auto px-2">
//               Find answers to the most common questions about our platform
//             </p>
//           </div>

//           {/* FAQ Items */}
//           <div className="space-y-2 sm:space-y-3 lg:space-y-4">
//             {faqs.map((faq, idx) => (
//               <div 
//                 key={idx} 
//                 className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden mx-1 sm:mx-0"
//               >
//                 <div 
//                   className="flex items-center justify-between p-2 sm:p-3 lg:p-4 xl:p-5 cursor-pointer group hover:bg-gray-50 transition-colors duration-200" 
//                   onClick={() => handleToggle(idx)}
//                 >
//                   <div className="flex-1 pr-2 sm:pr-3 lg:pr-4">
//                     <span className="text-xs sm:text-sm md:text-base lg:text-lg text-black font-medium group-hover:text-blue-600 transition-colors duration-200 leading-relaxed">
//                       <span className="text-blue-500 font-semibold">
//                         <span className="hidden sm:inline">Q{idx + 1}.</span>
//                         <span className="sm:hidden">{idx + 1}.</span>
//                       </span>
//                       {" "}{faq.question}
//                     </span>
//                   </div>
//                   <div className="flex-shrink-0">
//                     <div className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
//                       openIdx === idx 
//                         ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white rotate-180' 
//                         : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600'
//                     }`}>
//                       <svg className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Answer Section with Animation */}
//                 <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
//                   openIdx === idx 
//                     ? 'max-h-96 opacity-100' 
//                     : 'max-h-0 opacity-0'
//                 }`}>
//                   <div className="px-2 sm:px-3 lg:px-4 xl:px-5 pb-2 sm:pb-3 lg:pb-4 xl:pb-5 pt-0">
//                     <div className="bg-gradient-to-r from-blue-50 via-green-50 to-blue-50 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border-l-4 border-blue-500 shadow-sm">
//                       <div className="flex items-start space-x-2 sm:space-x-3">
//                         <div className="flex-shrink-0 mt-0.5 sm:mt-1">
//                           <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
//                             <svg className="w-2 h-2 sm:w-3 sm:h-3 lg:w-3 lg:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                             </svg>
//                           </div>
//                         </div>
//                         <div className="flex-1">
//                           <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black font-semibold leading-relaxed">
//                             {faq.answer}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Bottom Section */}
//           <div className="text-center mt-4 sm:mt-6 lg:mt-8">
//             <p className="text-xs sm:text-sm lg:text-base text-black mb-2 sm:mb-3 lg:mb-4 px-2">
//               Still have questions? We're here to help!
//             </p>
            
//             <button 
//               onClick={handleContactClick}
//               className="inline-flex items-center justify-center px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-blue-500 to-green-500 text-black font-semibold rounded-full hover:from-blue-600 hover:to-green-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-xs sm:text-sm lg:text-base"
//             >
//               <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//               </svg>
//               Contact Support
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Contact Popup Modal */}
//       {showContact && (
//         <div 
//           className="fixed inset-0 bg-gray-300 bg-opacity-60 flex items-center justify-center z-[9999] p-2 sm:p-4 modal-backdrop"
//           onClick={handleContactClick}
//         >
//           <div 
//             className="bg-gray-200 rounded-xl sm:rounded-2xl shadow-2xl max-w-xs sm:max-w-md w-full mx-auto transform transition-all duration-300"
//             onClick={(e) => e.stopPropagation()}
//             style={{
//               animation: showContact ? 'fadeInScale 0.3s ease-out' : ''
//             }}
//           >
//             {/* Modal Header */}
//             <div className="relative bg-gradient-to-r from-blue-500 to-green-500 rounded-t-xl sm:rounded-t-2xl p-4 sm:p-6">
//               <button 
//                 onClick={handleContactClick}
//                 className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-200 transition-colors duration-200"
//               >
//                 <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//               <div className="text-center text-white">
//                 <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
//                   <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">Contact Our Support Team</h3>
//                 <p className="text-xs sm:text-base text-blue-100">We're here to help you!</p>
//               </div>
//             </div>

//             {/* Modal Content */}
//            <div className="p-4 sm:p-6">
//   <div className="text-center mb-4 sm:mb-6">
//     <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
//       <p className="text-xs sm:text-sm text-black mb-2 sm:mb-3">📞 Call us directly:</p>
//       <a 
//         href="tel:+919876543210" 
//         className="text-lg sm:text-2xl font-bold text-black hover:text-blue-800 transition-colors duration-200 block"
//       >
//         +91 98765 43210
//       </a>
//     </div>
    
//     <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
//       <p className="text-xs sm:text-sm text-black mb-1 sm:mb-2">📧 Email us:</p>
//       <a 
//         href="mailto:support@bhoomirealestate.com" 
//         className="text-sm sm:text-lg font-semibold text-black hover:text-green-800 transition-colors duration-200 break-all"
//       >
//         support@bhoomirealestate.com
//       </a>
//     </div>

//     <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
//       <p className="text-xs sm:text-sm text-black mb-1 sm:mb-2">🕒 Business Hours:</p>
//       <p className="text-xs sm:text-sm font-medium text-black">Monday - Saturday</p>
//       <p className="text-xs sm:text-sm font-medium text-black">9:00 AM - 6:00 PM</p>
//     </div>
//   </div>

//   <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
//     <a 
//       href="tel:+919876543210"
//       className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-xl font-semibold text-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg text-xs sm:text-base"
//     >
//       📞 Call Now
//     </a>
//     <a 
//       href="mailto:support@bhoomirealestate.com"
//       className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-xl font-semibold text-center hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg text-xs sm:text-base"
//     >
//       📧 Email
//     </a>
//   </div>
// </div>

//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FAQ;












import React from "react";

const faqs = [
  {
    question: "Is it possible to post ads for free?",
    answer: "Yes, you can also post free property ads on Bhoomi The Real Estate. This website allows you to list your free property without any charges. It's easy to reach potential buyers and tenants. So, if you are an agent or builder, you can enjoy up to 20 free property listings.",
  },
  {
    question: "For how long will my property ad be live on the website?",
    answer: "Your property ad will remain live on Bhoomi The Real Estate for up to 90 days. You can renew or repost your ad after this period to continue reaching buyers and tenants.",
  },
  {
    question: "Can I rent or sell my house without paying the brokerage amount?",
    answer: "Yes, Bhoomi The Real Estate allows you to connect directly with buyers and tenants, so you can rent or sell your house without paying any brokerage.",
  },
  {
    question: "Should I add photos while posting a property ad online on the website?",
    answer: "Adding photos to your property ad is highly recommended. It attracts more buyers and tenants and increases the chances of a quick deal.",
  },
  {
    question: "Can I list both residential and commercial properties on Bhoomi The Real Estate?",
    answer: "Yes, you can list both residential and commercial properties on Bhoomi The Real Estate. The platform supports all property types.",
  },
  {
    question: "Can I expect genuine buyers or renters from a free property advertisement?",
    answer: "Bhoomi The Real Estate has a large user base of genuine buyers and renters. Your free property ad will be visible to thousands of potential clients.",
  },
  {
    question: "Is it safe to provide my personal details on Bhoomi The Real Estate?",
    answer: "Yes, Bhoomi The Real Estate is a trusted platform and keeps your personal details secure. Only verified users can contact you regarding your property ad.",
  },
];

const FAQIntegration = () => {
  const [openIdx, setOpenIdx] = React.useState(null);
  const [showContact, setShowContact] = React.useState(false);

  const handleToggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const handleContactClick = () => {
    setShowContact(!showContact);
  };

  return (
    <div className="relative w-full">
      <div className="w-full bg-gradient-to-br from-gray-50 via-white to-blue-50 py-4 sm:py-6 lg:py-8 px-2 sm:px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black mb-1 sm:mb-2">
              <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                FAQ
              </span>{" "}
              - Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-black max-w-2xl mx-auto px-2">
              Find answers to the most common questions about our platform
            </p>
          </div>

          <div className="space-y-2 sm:space-y-3 lg:space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden mx-1 sm:mx-0"
              >
                <div
                  className="flex items-center justify-between p-2 sm:p-3 lg:p-4 xl:p-5 cursor-pointer group hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => handleToggle(idx)}
                >
                  <div className="flex-1 pr-2 sm:pr-3 lg:pr-4">
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg text-black font-medium group-hover:text-blue-600 transition-colors duration-200 leading-relaxed">
                      <span className="text-blue-500 font-semibold">
                        <span className="hidden sm:inline">Q{idx + 1}.</span>
                        <span className="sm:hidden">{idx + 1}.</span>
                      </span>
                      {" "}{faq.question}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    <div
                      className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openIdx === idx
                          ? "bg-gradient-to-r from-blue-500 to-green-500 text-white rotate-180"
                          : "bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600"
                      }`}
                    >
                      <svg
                        className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIdx === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-2 sm:px-3 lg:px-4 xl:px-5 pb-2 sm:pb-3 lg:pb-4 xl:pb-5 pt-0">
                    <div className="bg-gradient-to-r from-blue-50 via-green-50 to-blue-50 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border-l-4 border-blue-500 shadow-sm">
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black font-semibold leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4 sm:mt-6 lg:mt-8">
            <p className="text-xs sm:text-sm lg:text-base text-black mb-2 sm:mb-3 lg:mb-4 px-2">
              Still have questions? We're here to help!
            </p>
            <button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-blue-500 to-green-500 text-black font-semibold rounded-full hover:from-blue-600 hover:to-green-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-xs sm:text-sm lg:text-base"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>

      {showContact && (
        <div
          className="fixed inset-0 bg-gray-300 bg-opacity-60 flex items-center justify-center z-[9999] p-2 sm:p-4 modal-backdrop"
          onClick={handleContactClick}
        >
          <div
            className="bg-gray-200 rounded-xl sm:rounded-2xl shadow-2xl max-w-xs sm:max-w-md w-full mx-auto transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: showContact ? "fadeInScale 0.3s ease-out" : "",
            }}
          >
            <div className="relative bg-gradient-to-r from-blue-500 to-green-500 rounded-t-xl sm:rounded-t-2xl p-4 sm:p-6">
              <button
                onClick={handleContactClick}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-200 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="text-center text-white">
                <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
                  Contact Our Support Team
                </h3>
                <p className="text-xs sm:text-base text-blue-100">We're here to help you!</p>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="text-center mb-4 sm:mb-6">
                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
                  <p className="text-xs sm:text-sm text-black mb-2 sm:mb-3">📞 Call us directly:</p>
                  <a href="tel:+919876543210" className="text-lg sm:text-2xl font-bold text-black hover:text-blue-800 transition-colors duration-200 block">
                    +91 98765 43210
                  </a>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
                  <p className="text-xs sm:text-sm text-black mb-1 sm:mb-2">📧 Email us:</p>
                  <a href="mailto:support@bhoomirealestate.com" className="text-sm sm:text-lg font-semibold text-black hover:text-green-800 transition-colors duration-200 break-all">
                    support@bhoomirealestate.com
                  </a>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                  <p className="text-xs sm:text-sm text-black mb-1 sm:mb-2">🕒 Business Hours:</p>
                  <p className="text-xs sm:text-sm font-medium text-black">Monday - Saturday</p>
                  <p className="text-xs sm:text-sm font-medium text-black">9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <a href="tel:+919876543210" className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-xl font-semibold text-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg text-xs sm:text-base">
                  📞 Call Now
                </a>
                <a href="mailto:support@bhoomirealestate.com" className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-xl font-semibold text-center hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg text-xs sm:text-base">
                  📧 Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQIntegration;