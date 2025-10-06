// import React, { useState } from 'react';

// const NewsPage = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [activeTab, setActiveTab] = useState('buy');
//   const [showSearch, setShowSearch] = useState(false);
//   const [searchValue, setSearchValue] = useState("");

//   const handleSearchIconClick = () => setShowSearch(true);
//   const handleSearchClose = () => {
//     setShowSearch(false);
//     setSearchValue("");
//   };
//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     // Implement your search logic here
//     setShowSearch(false);
//   };

//   // Sample news data
//   const newsArticles = [
//     {
//       id: 1,
//       title: "Prestige Group launches new project in Ghaziabad",
//       excerpt: "The Prestige Group, headquartered in Bangalore, enjoys a significant presence in southern India. Over the years, it has delivered projects across major cities, such as…",
//       author: "Aditi Aggarwal",
//       date: "May 08, 2025",
//       views: "3407",
//       category: "Real Estate News",
//   image: "/360img/IMG-20250920-WA0005.jpg"
//     },
//     {
//       id: 2,
//       title: "Greater Noida: Homebuyers must pay stamp duty at time of booking",
//       excerpt: "In a significant policy shift, the Greater Noida Industrial Development Authority (GNIDA) has mandated that homebuyers pay stamp duty at the time of booking flats,…",
//       author: "Aditi Aggarwal",
//       date: "Apr 25, 2025",
//       views: "3342",
//       category: "Real Estate News",
//   image: "/360img/IMG-20250920-WA0039.jpg"
//     },
//     {
//       id: 3,
//       title: "UP Housing Board to develop new township in Ghaziabad",
//       excerpt: "The UP Housing Board has unveiled a major new development project in sectors 7 and 8 of Vasundhara, Ghaziabad, with Phase 1 covering 40 acres…",
//       author: "Aditi Aggarwal",
//       date: "Apr 24, 2025",
//       views: "1715",
//       category: "Real Estate News",
//   image: "/360img/IMG-20250920-WA0047.jpg"
//     },
//     {
//       id: 4,
//       title: "Indian real estate set to witness Rs 60,000 crore launches in Q4 of FY 2024-25",
//       excerpt: "The fourth quarter of the current financial year is set for a record number of property launches by notable real estate developers. Launches worth Rs…",
//       author: "Aditi Aggarwal",
//       date: "Mar 06, 2025",
//       views: "2458",
//       category: "Real Estate News",
//   image: "/360img/IMG-20250920-WA0050.jpg"
//     }
//   ];
//   const searchKeywords = [
//     "Sale", "Purchase", "Rental", "Residential", "Commercial", "Home Loan", "Construction", "Infrastructure",
//     "Legal", "Investment", "Locality Profile", "GST", "RERA", "Demonetisation", "Smart Cities", "Taxation",
//     "PMAY", "Indian Real Estate", "Policy Change", "Budget", "Technology", "Retail/Hospitality"
//   ];

//   const popularTrendingArticles = [
//     {
//       title: "Latest stamp duty and registration charges in Bangalore, Karnataka (2025)",
//       author: "Shradha Goyal",
//       position: "Sr. Editor",
//       date: "Aug 08, 2025",
//       views: "681,440"
//     },
//     {
//       title: "What are Tier I, II, III, IV cities in India?",
//       author: "Sakshi Chandola",
//       position: "Research Analyst",
//       date: "Sep 03, 2025",
//       views: "574,982"
//     },
//     {
//       title: "Stamp duty and registration charges in Mumbai, Maharashtra in 2025",
//       author: "Aman",
//       position: "Sr. Research Analyst",
//       date: "Aug 08, 2025",
//       views: "356,627"
//     }
//   ];

//   const delhiNCRNews = [
//     {
//       title: "Which ultra-luxury projects in Noida are worth investing in?",
//       excerpt: "If we go by the July 2025…",
//       author: "Sudeepa Bhattacharya",
//       position: "Research Analyst",
//       date: "Sep 23, 2025",
//       views: "626"
//     },
//     {
//       title: "GDA to widen Outer Ring Road: What it means for home buyers",
//       excerpt: "In the last two decades, Raj Nagar…",
//       author: "Nupur Tolia",
//       date: "Sep 22, 2025",
//       views: "301"
//     },
//     {
//       title: "How are Noida's sky-high electricity bills influencing overall cost of living?",
//       excerpt: "In June 2025, UPPCL filed a proposal…",
//       author: "Sudeepa Bhattacharya",
//       position: "Research Analyst",
//       date: "Sep 16, 2025",
//       views: "731"
//     },
//     {
//       title: "Noida Metro expansion: What homebuyers should know",
//       excerpt: "The new metro line will connect major sectors…",
//       author: "Aditi Aggarwal",
//       date: "Sep 10, 2025",
//       views: "512"
//     },
//     {
//       title: "Affordable housing trends in Greater Noida",
//       excerpt: "Developers are launching new affordable projects…",
//       author: "Nupur Tolia",
//       date: "Sep 05, 2025",
//       views: "420"
//     },
//     {
//       title: "Commercial real estate growth in Ghaziabad",
//       excerpt: "Ghaziabad sees a surge in commercial investments…",
//       author: "Sudeepa Bhattacharya",
//       position: "Research Analyst",
//       date: "Aug 30, 2025",
//       views: "389"
//     }
//   ];

//   const experts = [
//     {
//       name: "Pinky Kapoor",
//       title: "Vastu Consultant and Chinese Astrologer",
//       image: "/profesional/a2.png"
//     },
//     {
//       name: "Amit Goenka",
//       title: "Nisus Finance",
//       image: "/profesional/a1.jpg"
//     },
//     {
//       name: "Nithya",
//       title: "Casa Grande Pvt Ltd.",
//       image: "/profesional/a3.png"
//     },
//     {
//       name: "Rohit Sharma",
//       title: "Property Consultant",
//       image: "/profesional/a4.png"
//     },
//     {
//       name: "Meera Singh",
//       title: "Legal Advisor",
//       image: "/profesional/a5.png"
//     },
//     {
//       name: "Vikram Patel",
//       title: "Finance Expert",
//       image: "/profesional/a6.png"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white scroll-smooth">
//       {/* News Header Image Section - Responsive, Dark, Blurred */}
//   <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] xl:h-[400px] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <img src="/city-bg.jpg" alt="news-bg" className="w-full h-full object-cover object-center" />
//           <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
//         </div>
//         <div className="relative w-full h-full flex flex-col justify-center px-4 sm:px-10 md:px-16 lg:px-24">
//           <div className="mb-2">
//             <button className="bg-yellow-400 text-gray-900 font-bold px-3 sm:px-4 py-1.5 rounded shadow text-xs sm:text-sm">Real Estate News</button>
//           </div>
//           <h2 className="text-white font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl drop-shadow-lg mb-2 max-w-4xl">
//             NCLT proceeds with Ansal API’s insolvency; investors in financial distress
//           </h2>
//           <div className="text-white font-semibold text-xs sm:text-sm mb-2">Aditi Aggarwal</div>
//           {/* Banner Info Section - Right Side Vertical */}
//           <div className="absolute top-6 right-2 sm:right-6 flex flex-col items-center space-y-4 z-10">
//             <div className="flex flex-col items-center">
//               <button onClick={handleSearchIconClick} className="bg-white/10 rounded-full p-2 border border-white/30 mb-1 focus:outline-none">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" /></svg>
//               </button>
//             </div>
//       {/* Search Modal/Overlay */}
//       {showSearch && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
//           <form onSubmit={handleSearchSubmit} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-11/12 max-w-md">
//             <div className="flex w-full items-center mb-4">
//               <input
//                 type="text"
//                 className="flex-1 border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
//                 placeholder="Search news..."
//                 value={searchValue}
//                 onChange={e => setSearchValue(e.target.value)}
//                 autoFocus
//               />
//               <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r font-semibold">Search</button>
//             </div>
//             <button type="button" onClick={handleSearchClose} className="text-gray-500 hover:text-gray-800 mt-2">Close</button>
//           </form>
//         </div>
//       )}
//             <div className="flex flex-col  items-center">
//               <span className="bg-white/10 rounded-full p-2 border border-white/30 mb-1">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /></svg>
//               </span>
//               <span className="text-white text-xs">Delhi NCR</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <span className="bg-white/10 rounded-full p-2 border border-white/30 mb-1">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
//               </span>
//               <span className="text-white text-xs">986</span>
//               <span className="text-white text-[10px]">Mar 03, 2025</span>
//             </div>
//           </div>
//         </div>
//       </div>
//  {/* Side Articles */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 sm:mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="text-xl font-bold mb-4 lg:hidden">Latest Buyers</div>
//               {[
//                 {
//                   title: "Buying a 50 or 100 sq yd plot in Haryana? No stamp duty now",
//                   author: "Nupur Tolia",
//                   date: "Aug 28, 2025",
//                   views: "2329",
//                   color: "bg-red-500"
//                 },
//                 {
//                   title: "Demolition drive at Emaar Palm Hills, Sector 77, Gurgaon",
//                   author: "Sudeepa Bhattacharya",
//                   position: "Research Analyst",
//                   date: "Aug 20, 2025",
//                   views: "1972",
//                   color: "bg-blue-500"
//                 },
//                 {
//                   title: "Women homebuyers in Uttar Pradesh to get 1% stamp duty relaxation",
//                   author: "Nupur Tolia",
//                   date: "Jul 28, 2025",
//                   views: "2650",
//                   color: "bg-green-500"
//                 },
//                 {
//                   title: "Oberoi Realty to enter Delhi NCR market with luxury project in Gurgaon",
//                   author: "Aditi Aggarwal",
//                   date: "May 20, 2025",
//                   views: "3922",
//                   color: "bg-purple-500"
//                 }
//               ].map((article, index) => (
//                 <div key={index} className="group bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col min-h-[140px] hover:scale-[1.02]">
//                   <div className="relative z-10 flex flex-col flex-1">
//                     <span className="text-xs opacity-90 block mb-1">Real Estate News</span>
//                     <h3 className="font-semibold text-sm leading-tight mb-2 flex-1">{article.title}</h3>
//                     <div className="text-xs opacity-90">
//                       <div>{article.author}</div>
//                       {article.position && <div className="text-xs">{article.position}</div>}
//                       <div className="flex items-center mt-1">
//                         <span>{article.date}</span>
//                         <span className="mx-2">•</span>
//                         <span>👁 {article.views}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>


//       {/* Main Content Area */}
//       <div className="py-6 sm:py-8 lg:py-12">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Left Column - News Articles */}
//             <div className="lg:col-span-2">
//               <h1 className="text-2xl font-bold text-gray-800 mb-6">Buyers</h1>
              
//               {/* News Articles Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                 {newsArticles.map((article, index) => (
//                   <div key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    
//                     <div className="p-4">
//                       <img 
//                         src={article.image} 
//                         alt={article.title}
//                         className="w-full h-32 object-cover rounded mb-3"
//                       />
                      
//                       <span className="text-blue-600 text-xs font-medium uppercase tracking-wide">
//                         {article.category}
//                       </span>
                      
//                       <h3 className="font-semibold text-gray-800 mt-2 mb-2 leading-tight cursor-pointer">
//                         {article.title}
//                       </h3>
                      
//                       <p className="text-gray-600 text-sm mb-3 leading-relaxed">
//                         {article.excerpt}
//                       </p>
                      
//                       <div className="flex items-center justify-between text-xs text-gray-500">
//                         <div>
//                           <span className="font-medium text-gray-700">{article.author}</span>
//                           <div className="text-gray-500">{article.date}</div>
//                         </div>
//                         <div className="flex items-center">
//                           <span className="mr-1">👁</span>
//                           <span>{article.views}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Advertisement Banner */}
//               <div className="mb-8">
//               <img src="/image copy 20.png" alt="" />
//               </div>
//               {/* More News Articles */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                 {newsArticles.map((article, index) => (
//                   <div key={`more-${article.id}`} className="bg-white rounded-xl shadow-lg">
                    
//                     <div className="p-4">
//                       <img 
//                         src={article.image} 
//                         alt={article.title}
//                         className="w-full h-32 object-cover rounded mb-3"
//                       />
                      
//                       <span className="text-blue-600 text-xs font-medium uppercase tracking-wide">
//                         {article.category}
//                       </span>
                      
//                       <h3 className="font-semibold text-gray-800 mt-2 mb-2 leading-tight cursor-pointer">
//                         {article.title}
//                       </h3>
                      
//                       <p className="text-gray-600 text-sm mb-3 leading-relaxed">
//                         {article.excerpt}
//                       </p>
                      
//                       <div className="flex items-center justify-between text-xs text-gray-500">
//                         <div>
//                           <span className="font-medium text-gray-700">{article.author}</span>
//                           <div className="text-gray-500">{article.date}</div>
//                         </div>
//                         <div className="flex items-center">
//                           <span className="mr-1">👁</span>
//                           <span>{article.views}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Pagination */}
//               <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
//                 <div className="flex flex-wrap items-center gap-2">
//                   {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
//                     <button
//                       key={page}
//                       onClick={() => setCurrentPage(page)}
//                       className={`px-3 py-2 rounded text-sm font-medium ${
//                         currentPage === page
//                           ? 'bg-blue-600 text-white'
//                           : 'bg-gray-100 text-gray-700'
//                       }`}
//                     >
//                       {page}
//                     </button>
//                   ))}
//                   <button className="px-3 py-2 rounded text-sm font-medium bg-gray-100 text-gray-700">
//                     20
//                   </button>
//                   <button className="px-3 py-2 rounded text-sm font-medium bg-gray-100 text-gray-700">
//                     30
//                   </button>
//                 </div>
//                 <div className="flex space-x-2">
//                   <button className="px-4 py-2 bg-blue-600 text-white rounded font-medium">
//                     Next
//                   </button>
//                   <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded font-medium">
//                     Last
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Right Sidebar */}
//             <div className="space-y-6">
//               {/* Categories */}
//               <div className="bg-white rounded-xl shadow-lg">
//                 <div className="bg-gray-50 rounded-t-xl p-4">
//                   <h3 className="font-bold text-gray-800">Categories</h3>
//                 </div>
                
//                 {/* Popular and Trending */}
//                 <div className="p-4">
//                   <h4 className="font-bold text-gray-800 mb-4 flex items-center">
//                     Popular and Trending
//                     <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </h4>
                  
//                   <div className="space-y-4">
//                     {popularTrendingArticles.map((article, index) => (
//                       <div key={index} className="pb-4 last:pb-0">
//                         <h5 className="font-semibold text-sm text-gray-800 cursor-pointer mb-2 leading-tight">
//                           {article.title}
//                         </h5>
//                         <div className="text-xs text-gray-600">
//                           <div className="font-medium">{article.author}</div>
//                           {article.position && <div>{article.position}</div>}
//                           <div className="flex items-center mt-1">
//                             <span>{article.date}</span>
//                             <span className="mx-1">•</span>
//                             <span className="flex items-center">
//                               <span className="mr-1">👁</span>
//                               {article.views}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
                  
//                   <button className="text-blue-600 text-sm font-medium mt-4">
//                     VIEW MORE
//                   </button>
//                 </div>
//               </div>

//               {/* Advertisement */}
//               <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-4 text-black text-center">
//                 <h3 className="font-bold mb-2">Post Property</h3>
//                 <p className="text-sm mb-3">List your property for free</p>
//                 <button className="bg-white text-b-600 px-4 py-2 rounded font-medium text-sm">
//                   Post Now
//                 </button>
//               </div>

//               {/* Properties Section */}
//               <div className="bg-white rounded-xl shadow-lg">
//                 <div className="bg-gray-50 rounded-t-xl">
//                   <div className="flex">
//                     <button
//                       onClick={() => setActiveTab('buy')}
//                       className={`flex-1 py-3 px-4 text-sm font-medium rounded-tl-xl ${
//                         activeTab === 'buy'
//                           ? 'text-blue-600 bg-blue-50'
//                           : 'text-gray-600'
//                       }`}
//                     >
//                       Buy
//                     </button>
//                     <button
//                       onClick={() => setActiveTab('rent')}
//                       className={`flex-1 py-3 px-4 text-sm font-medium rounded-tr-xl ${
//                         activeTab === 'rent'
//                           ? 'text-blue-600 bg-blue-50'
//                           : 'text-gray-600'
//                       }`}
//                     >
//                       Rent
//                     </button>
//                   </div>
//                 </div>
                
//                 <div className="p-4">
//                   <h4 className="font-bold text-gray-800 mb-4">
//                     Properties to {activeTab === 'buy' ? 'Buy' : 'Rent'}
//                   </h4>
                  
//                   <div className="space-y-2">
//                     {(activeTab === 'buy' ? [
//                       "New Projects in Delhi / NCR",
//                       "Property in Delhi / NCR", 
//                       "Flats in Delhi / NCR",
//                       "House for sale in Delhi / NCR",
//                       "Plots in Delhi / NCR",
//                       "Builder Floor in Delhi / NCR",
//                       "Studio Apartments in Delhi / NCR"
//                     ] : [
//                       "Property for rent in Delhi / NCR",
//                       "Flats for rent in Delhi / NCR",
//                       "House for rent in Delhi / NCR", 
//                       "PG in Delhi / NCR",
//                       "Room for rent in Delhi / NCR",
//                       "Villas for rent in Delhi / NCR",
//                       "Builder Floor for rent in Delhi / NCR"
//                     ]).map((item, index) => (
//                       <a
//                         key={index}
//                         href="#"
//                         className="block text-sm text-gray-600 py-1"
//                       >
//                         {item}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Banner */}
//               <div className="bg-blue-600 rounded-lg p-4 text-white text-center">
//                 <h3 className="font-bold mb-2">Buyer Guide</h3>
//                 <p className="text-sm mb-3">Complete guide for property buyers</p>
//                 <button className="bg-white text-blue-600 px-4 py-2 rounded font-medium text-sm">
//                   Read Guide
//                 </button>
//               </div>

//               {/* Rental Agreement Banner */}
//               <div className="bg-green-600 rounded-lg p-4 text-white text-center">
//                 <h3 className="font-bold mb-2">Rental Agreement</h3>
//                 <p className="text-sm mb-3">Create legal rental agreements online</p>
//                 <button className="bg-white text-green-600 px-4 py-2 rounded font-medium text-sm">
//                   Create Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Delhi NCR Real Estate Section - Full Width Slider */}
//       <div className="bg-gray-50 py-8 max-w-7xl mx-auto">
//         <div className="max-w-[98vw] mx-auto px-2 sm:px-6">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold text-gray-800">Delhi NCR Real Estate</h2>
//             <a href="#" className="text-blue-600 lg:hidden">More Articles</a>
//           </div>
//           <div className="relative">
//             <button
//               className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2 z-10 shadow hidden md:block"
//               onClick={() => document.getElementById('delhi-ncr-slider').scrollBy({ left: -400, behavior: 'smooth' })}
//               aria-label="Scroll Left"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
//             </button>
//             <div id="delhi-ncr-slider" className="flex space-x-4 md:space-x-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory scroll-smooth">
//               {delhiNCRNews.map((article, index) => (
//                 <div key={index} className={`flex-shrink-0 w-72 bg-white rounded-xl shadow-lg p-4`}>
//                   {/* Removed top colored border */}
//                   <h3 className="font-semibold text-gray-800 text-sm mb-2 leading-tight cursor-pointer">
//                     {article.title}
//                   </h3>
//                   <p className="text-gray-600 text-xs mb-3">
//                     {article.excerpt}
//                   </p>
//                   <div className="text-xs text-gray-500">
//                     <div className="font-medium text-gray-700">{article.author}</div>
//                     {article.position && <div>{article.position}</div>}
//                     <div className="flex items-center mt-1">
//                       <span>{article.date}</span>
//                       <span className="mx-1">•</span>
//                       <span className="flex items-center">
//                         <span className="mr-1">👁</span>
//                         {article.views}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button
//               className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2 z-10 shadow hidden md:block"
//               onClick={() => document.getElementById('delhi-ncr-slider').scrollBy({ left: 400, behavior: 'smooth' })}
//               aria-label="Scroll Right"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
//             </button>
//           </div>
//           <div className="text-center mt-6">
//             <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
//               View All Articles
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Newsletter Subscription */}
//       <div className="bg-blue-600 py-8">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center">
//             <div className="text-white mb-6">
//               <h3 className="text-xl font-bold">Real Estate Updates</h3>
//               <p className="text-blue-100">Be the first to know</p>
//             </div>
            
//             <div className="max-w-md mx-auto">
//               <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="flex-1 px-4 py-3 rounded-lg sm:rounded-r-none bg-white outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
//                 />
//                 <button className="bg-white text-blue-600 px-6 py-3 rounded-lg sm:rounded-l-none font-medium hover:bg-blue-50 transition-all duration-300">
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Experts Speak Section - Slider with Images */}
//       <div className="bg-white py-8">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-2xl font-bold text-center text-blue-800 mb-8">Experts Speak</h2>
//           <div className="relative">
//             <button
//               className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2 z-10 shadow hidden md:block"
//               onClick={() => document.getElementById('experts-slider').scrollBy({ left: -300, behavior: 'smooth' })}
//               aria-label="Scroll Left"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
//             </button>
//             <div id="experts-slider" className="flex space-x-4 md:space-x-8 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
//               {experts.map((expert, index) => (
//                 <div key={index} className="flex-shrink-0 w-48 text-center hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer">
//                   <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 border-2 border-gray-300">
//                     <img 
//                       src={expert.image}
//                       alt={expert.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <h4 className="font-bold text-gray-800 mb-1">{expert.name}</h4>
//                   <p className="text-sm text-gray-600">{expert.title}</p>
//                 </div>
//               ))}
//             </div>
//             <button
//               className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2 z-10 shadow hidden md:block"
//               onClick={() => document.getElementById('experts-slider').scrollBy({ left: 300, behavior: 'smooth' })}
//               aria-label="Scroll Right"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
//             </button>
//           </div>
//           <div className="text-center mt-8">
//             <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
//               View All Experts
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsPage;










import React, { useState } from 'react';

const NewsPageIntegration = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('buy');
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchIconClick = () => setShowSearch(true);
  const handleSearchClose = () => {
    setShowSearch(false);
    setSearchValue("");
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setShowSearch(false);
  };

  const newsArticles = [
    // Add your original `newsArticles` data here
  ];

  const popularTrendingArticles = [
    // Add your original `popularTrendingArticles` data here
  ];

  const delhiNCRNews = [
    // Add your original `delhiNCRNews` data here
  ];

  const experts = [
    // Add your original `experts` data here
  ];

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* News Header Image Section */}
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] xl:h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/city-bg.jpg" alt="news-bg" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative w-full h-full flex flex-col justify-center px-4 sm:px-10 md:px-16 lg:px-24 text-white">
          <h2 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl drop-shadow-lg mb-2">
            Real Estate News Updates
          </h2>
          <button className="bg-yellow-400 text-gray-900 font-bold px-3 sm:px-4 py-1.5 rounded shadow text-xs sm:text-sm">
            Stay Updated
          </button>
        </div>
      </div>

      {/* News Articles Section */}
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2">
              <h1 className="text-2xl font-bold text-gray-800 mb-6">News Highlights</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {newsArticles.map((article, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-32 object-cover rounded-t-xl"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-2">{article.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div>
                          <span>{article.author}</span>
                          <span className="ml-2">• {article.date}</span>
                        </div>
                        <div>{article.views} views</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Popular & Trending */}
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="font-bold text-gray-800 mb-4">Popular & Trending</h3>
                {popularTrendingArticles.map((article, index) => (
                  <div key={index} className="pb-4">
                    <h4 className="font-semibold text-gray-800 text-sm">{article.title}</h4>
                    <div className="text-xs text-gray-500">
                      <span>{article.author}</span> • <span>{article.date}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Advertisement */}
              <div className="bg-blue-600 rounded-lg text-white p-4 text-center">
                <h3 className="font-bold">Advertise With Us</h3>
                <p className="text-sm">Reach a wider audience with our platform</p>
                <button className="bg-white text-blue-600 px-4 py-2 rounded mt-2">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delhi NCR Real Estate Section */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Delhi NCR Real Estate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {delhiNCRNews.map((news, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">{news.title}</h3>
                <p className="text-gray-600 text-sm">{news.excerpt}</p>
                <div className="text-xs text-gray-500 mt-2">
                  <span>{news.author}</span> • <span>{news.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experts Speak Section */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Experts Speak</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {experts.map((expert, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
                  <img src={expert.image} alt={expert.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-gray-800 mt-2">{expert.name}</h4>
                <p className="text-sm text-gray-600">{expert.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPageIntegration;