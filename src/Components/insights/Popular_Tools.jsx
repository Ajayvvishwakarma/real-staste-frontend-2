// import React from 'react'

// const Popular_Tools = () => {
//   // Tools data
//   const tools = [
//     {
//       title: "Home Loan EMI Calculator",
//       description: "Calculate your monthly EMI and plan your home loan better",
//       icon: () => (
//         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//           <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//         </svg>
//       )
//     },
//     {
//       title: "Property Valuation Tool",
//       description: "Get accurate property valuations based on market trends",
//       icon: () => (
//         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//           <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
//         </svg>
//       )
//     },
//     {
//       title: "Area Converter",
//       description: "Convert between different area units easily",
//       icon: () => (
//         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//           <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
//         </svg>
//       )
//     },
//     {
//       title: "Budget Calculator",
//       description: "Plan your property budget with smart calculations",
//       icon: () => (
//         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//           <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
//         </svg>
//       )
//     }
//   ];

//   // Touch handlers for mobile swipe
//   const handleTouchStart = (e) => {
//     // Touch start logic can be added here if needed
//   };

//   const handleTouchMove = (e) => {
//     // Touch move logic can be added here if needed  
//   };

//   const handleTouchEnd = (e) => {
//     // Touch end logic can be added here if needed
//   };

//   // Tool click handler
//   const handleToolClick = (toolTitle) => {
//     console.log(`Clicked on ${toolTitle}`);
//     // Add navigation logic here based on tool selection
//   };

//   return (
//     <div>
//       {/* Tools Section - Fully Responsive */}
//       <div className="w-full mt-15 relative pb-15 sm:pb-36 md:pb-10 lg:pb-10 xl:pb-15">
//         {/* Blue Background Section - Responsive */}
//         <div className="max-w-7xl mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-auto bg-[#e0f2fe] pt-3 sm:pt-4 md:pt-6 lg:pt-8 rounded-lg sm:rounded-xl md:rounded-2xl pb-24 sm:pb-28 md:pb-32 lg:pb-36 xl:pb-40">
//           <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
//             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 md:gap-8">
//               {/* Left side - Icon and text */}
//               <div className="flex items-center w-full sm:w-auto">
//                 {/* Blue bulb icon with lightning */}
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 md:mr-5 lg:mr-6 shadow-lg flex-shrink-0">
//                   <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
//                   </svg>
//                 </div>
//                 <div className="min-w-0 flex-1">
//                   <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-1 leading-tight">Use popular tools</h2>
//                   <p className="text-gray-600 text-sm sm:text-base md:text-lg font-medium">Go from browsing to buying</p>
//                 </div>
//               </div>
              
//               {/* Right side - View all insights button */}
//               <button className="flex items-center px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-3 border-2 border-green-500 text-green-700 rounded-lg bg-white shadow-md text-xs sm:text-sm md:text-base font-semibold flex-shrink-0 w-full sm:w-auto justify-center sm:justify-start">
//                 <span className="mr-2 sm:mr-3">View all Insights</span>
//                 <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* Overlapping Cards Grid - Tools Section - Fully Responsive */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12 sm:-mt-14 md:-mt-16 lg:-mt-18 xl:-mt-20 w-full max-w-7xl px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
//           {/* Responsive Tools Layout */}
//           <div className="relative">
//             {/* Mobile (< 640px) - Horizontal Scroll */}
//             <div className="block sm:hidden">
//               <div className="overflow-x-auto scrollbar-hide px-1">
//                 <div 
//                   className="flex gap-3 pb-4 mb-8"
//                   onTouchStart={handleTouchStart}
//                   onTouchMove={handleTouchMove}
//                   onTouchEnd={handleTouchEnd}
//                 >
//                   {tools.map((tool, index) => {
//                     const IconComponent = tool.icon;
//                     return (
//                       <div
//                         key={index}
//                         className="flex-shrink-0 w-72"
//                       >
//                         <div className="bg-white rounded-xl p-4 shadow-lg cursor-pointer border border-gray-100 h-full"
//                              onClick={() => handleToolClick(tool.title)}>
//                           {/* Icon */}
//                           <div className="mb-4 flex justify-center">
//                             <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-black rounded-xl flex items-center justify-center text-white shadow-md">
//                               <IconComponent />
//                             </div>
//                           </div>
                          
//                           {/* Content */}
//                           <div className="text-center">
//                             <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">
//                               {tool.title}
//                             </h3>
//                             <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                               {tool.description}
//                             </p>
//                           </div>

//                           {/* Learn more button */}
//                           <div className="flex justify-center">
//                             <button className="w-full bg-gradient-to-r from-green-600 to-black text-white px-3 py-2 rounded-lg font-medium text-sm shadow-sm">
//                               Learn more
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//               {/* Mobile Scroll Hint */}
//               <div className="flex justify-center text-xs text-gray-500 mt-3">
//                 <span className="flex items-center bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
//                   <span className="text-sm">👈</span> 
//                   <span className="mx-2 font-medium">Swipe for more tools</span> 
//                   <span className="text-sm">👉</span>
//                 </span>
//               </div>
//             </div>

//             {/* Small Tablet (640px - 768px) - 2 Column Grid */}
//             <div className="hidden sm:block md:hidden">
//               <div className="grid grid-cols-2 gap-4 px-4">
//                 {tools.map((tool, index) => {
//                   const IconComponent = tool.icon;
//                   return (
//                     <div
//                       key={index}
//                       className="bg-white rounded-xl p-4 shadow-lg cursor-pointer border border-gray-100"
//                       onClick={() => handleToolClick(tool.title)}
//                     >
//                       {/* Icon */}
//                       <div className="mb-4 flex justify-center">
//                         <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-black rounded-xl flex items-center justify-center text-white shadow-md">
//                           <IconComponent />
//                         </div>
//                       </div>
                      
//                       {/* Content */}
//                       <div className="text-center">
//                         <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">
//                           {tool.title}
//                         </h3>
//                         <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                           {tool.description}
//                         </p>
//                       </div>

//                       {/* Learn more button */}
//                       <div className="flex justify-center">
//                         <button className="w-full bg-gradient-to-r from-green-600 to-black text-white px-3 py-2 rounded-lg font-medium text-sm shadow-sm">
//                           Learn more
//                         </button>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Medium Tablet (768px - 1024px) - 2 Column Grid with More Space */}
//             <div className="hidden md:block lg:hidden">
//               <div className="grid grid-cols-2 gap-5 px-6">
//                 {tools.map((tool, index) => {
//                   const IconComponent = tool.icon;
//                   return (
//                     <div
//                       key={index}
//                       className="bg-white rounded-xl p-5 shadow-lg cursor-pointer border border-gray-100"
//                       onClick={() => handleToolClick(tool.title)}
//                     >
//                       {/* Icon */}
//                       <div className="mb-4 flex justify-center">
//                         <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-black rounded-xl flex items-center justify-center text-white shadow-lg">
//                           <IconComponent />
//                         </div>
//                       </div>
                      
//                       {/* Content */}
//                       <div className="text-center">
//                         <h3 className="text-base font-bold text-gray-900 mb-3 leading-tight">
//                           {tool.title}
//                         </h3>
//                         <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                           {tool.description}
//                         </p>
//                       </div>

//                       {/* Learn more button */}
//                       <div className="flex justify-center">
//                         <button className="w-full bg-gradient-to-r from-green-600 to-black text-white px-4 py-2.5 rounded-lg font-medium text-sm shadow-md">
//                           Learn more
//                         </button>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Desktop & Large (1024px+) - 4 Column Grid */}
//             <div className="hidden lg:block">
//               <div className="grid grid-cols-4 gap-4 lg:gap-5 xl:gap-6 px-2 lg:px-4 xl:px-6">
//                 {tools.map((tool, index) => {
//                   const IconComponent = tool.icon;
//                   return (
//                     <div
//                       key={index}
//                       className="bg-white rounded-xl p-4 lg:p-5 shadow-lg cursor-pointer border border-gray-100"
//                       onClick={() => handleToolClick(tool.title)}
//                     >
//                       {/* Icon */}
//                       <div className="mb-4 flex justify-center">
//                         <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-green-600 to-black rounded-xl flex items-center justify-center text-white shadow-lg">
//                           <IconComponent />
//                         </div>
//                       </div>
                      
//                       {/* Content */}
//                       <div className="text-center">
//                         <h3 className="text-base font-bold text-gray-900 mb-3 leading-tight">
//                           {tool.title}
//                         </h3>
//                         <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                           {tool.description}
//                         </p>
//                       </div>

//                       {/* Learn more button */}
//                       <div className="flex justify-center">
//                         <button className="w-full bg-gradient-to-r from-green-600 to-black text-white px-3 py-2 lg:px-4 lg:py-2.5 rounded-lg font-medium text-sm shadow-md">
//                           Learn more
//                         </button>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Spacer for overlapping cards - Responsive */}
//         <div className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36"></div>
//       </div>
//     </div>
//   )
// }

// export default Popular_Tools








import React from 'react';

const PopularToolsIntegration = () => {
  const tools = [
    {
      title: "Home Loan EMI Calculator",
      description: "Calculate your monthly EMI and plan your home loan better",
      icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Property Valuation Tool",
      description: "Get accurate property valuations based on market trends",
      icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Area Converter",
      description: "Convert between different area units easily",
      icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Budget Calculator",
      description: "Plan your property budget with smart calculations",
      icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const handleToolClick = (toolTitle) => {
    // Add navigation logic here based on tool selection
    // Example: window.location.href = `/tools/${toolTitle.toLowerCase().replace(/\s+/g, '-')}`;
    // For now, just log
    console.log(`Clicked on ${toolTitle}`);
  };

  return (
    <div>
      <div className="w-full mt-15 relative pb-15 sm:pb-36 md:pb-10 lg:pb-10 xl:pb-15">
        {/* Blue Background Section */}
        <div className="max-w-7xl mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-auto bg-[#e0f2fe] pt-3 sm:pt-4 md:pt-6 lg:pt-8 rounded-lg sm:rounded-xl md:rounded-2xl pb-24 sm:pb-28 md:pb-32 lg:pb-36 xl:pb-40">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 md:gap-8">
              <div className="flex items-center w-full sm:w-auto">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 md:mr-5 lg:mr-6 shadow-lg flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-1 leading-tight">Use popular tools</h2>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg font-medium">Go from browsing to buying</p>
                </div>
              </div>
              <button className="flex items-center px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-3 border-2 border-green-500 text-green-700 rounded-lg bg-white shadow-md text-xs sm:text-sm md:text-base font-semibold flex-shrink-0 w-full sm:w-auto justify-center sm:justify-start">
                <span className="mr-2 sm:mr-3">View all Insights</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Overlapping Cards Grid */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12 sm:-mt-14 md:-mt-16 lg:-mt-18 xl:-mt-20 w-full max-w-7xl px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
          <div className="relative">
            {/* Mobile */}
            <div className="block sm:hidden">
              <div className="overflow-x-auto scrollbar-hide px-1">
                <div className="flex gap-3 pb-4 mb-8">
                  {tools.map((tool, index) => {
                    const IconComponent = tool.icon;
                    return (
                      <div key={index} className="flex-shrink-0 w-72">
                        <div className="bg-white rounded-xl p-4 shadow-lg cursor-pointer border border-gray-100 h-full"
                          onClick={() => handleToolClick(tool.title)}>
                          <div className="mb-4 flex justify-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-black rounded-xl flex items-center justify-center text-white shadow-md">
                              <IconComponent />
                            </div>
                          </div>
                          <div className="text-center">
                            <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">{tool.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">{tool.description}</p>
                          </div>
                          <div className="flex justify-center">
                            <button className="w-full bg-gradient-to-r from-green-600 to-black text-white px-3 py-2 rounded-lg font-medium text-sm shadow-sm">
                              Learn more
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex justify-center text-xs text-gray-500 mt-3">
                <span className="flex items-center bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
                  <span className="text-sm">👈</span> 
                  <span className="mx-2 font-medium">Swipe for more tools</span> 
                  <span className="text-sm">👉</span>
                </span>
              </div>
            </div>
            {/* Small Tablet */}
            <div className="hidden sm:block md:hidden">
              <div className="grid grid-cols-2 gap-4 px-4">
                {tools.map((tool, index) => {
                  const IconComponent = tool.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl p-4 shadow-lg cursor-pointer border border-gray-100"
                      onClick={() => handleToolClick(tool.title)}>
                      <div className="mb-4 flex justify-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-black rounded-xl flex items-center justify-center text-white shadow-md">
                          <IconComponent />
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">{tool.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{tool.description}</p>
                      </div>
                      <div className="flex justify-center">
                        <button className="w-full bg-gradient-to-r from-green-600 to-black text-white px-3 py-2 rounded-lg font-medium text-sm shadow-sm">
                          Learn more
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Medium Tablet */}
            <div className="hidden md:block lg:hidden">
              <div className="grid grid-cols-2 gap-5 px-6">
                {tools.map((tool, index) => {
                  const IconComponent = tool.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl p-5 shadow-lg cursor-pointer border border-gray-100"
                      onClick={() => handleToolClick(tool.title)}>
                      <div className="mb-4 flex justify-center">
                        <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-black rounded-xl flex items-center justify-center text-white shadow-lg">
                          <IconComponent />
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="text-base font-bold text-gray-900 mb-3 leading-tight">{tool.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{tool.description}</p>
                      </div>
                      <div className="flex justify-center">
                        <button className="w-full bg-gradient-to-r from-green-600 to-black text-white px-4 py-2.5 rounded-lg font-medium text-sm shadow-md">
                          Learn more
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Desktop & Large */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-4 gap-4 lg:gap-5 xl:gap-6 px-2 lg:px-4 xl:px-6">
                {tools.map((tool, index) => {
                  const IconComponent = tool.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl p-4 lg:p-5 shadow-lg cursor-pointer border border-gray-100"
                      onClick={() => handleToolClick(tool.title)}>
                      <div className="mb-4 flex justify-center">
                        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-green-600 to-black rounded-xl flex items-center justify-center text-white shadow-lg">
                          <IconComponent />
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="text-base font-bold text-gray-900 mb-3 leading-tight">{tool.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{tool.description}</p>
                      </div>
                      <div className="flex justify-center">
                        <button className="w-full bg-gradient-to-r from-green-600 to-black text-white px-3 py-2 lg:px-4 lg:py-2.5 rounded-lg font-medium text-sm shadow-md">
                          Learn more
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36"></div>
      </div>
    </div>
  );
};

export default PopularToolsIntegration;