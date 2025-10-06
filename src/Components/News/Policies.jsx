// import React, { useState } from 'react'
// import { FaSearch, FaMapMarkerAlt, FaEye, FaChevronRight } from 'react-icons/fa'
// import News_Navbar from './News_Navbar'

// const Policies = () => {
//   const [searchTerm, setSearchTerm] = useState('')
//   const [activeTab, setActiveTab] = useState('For Buyers')

//   // Policy categories data
//   const policyCategories = [
//     {
//       id: 1,
//       title: 'Infocus RERA',
//       subtitle: 'How has RERA impacted the Indian housing industry?',
//       description: 'Know all about the Real Estate (Regulation and Development) Act, 2016 in detail',
//       hashtag: '#RERADecoded',
//       bgColor: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
//       textColor: 'text-white'
//     },
//     {
//       id: 2,
//       title: 'Infocus GST',
//       subtitle: "What's the latest update on GST on under-construction homes?",
//       description: 'Know its impact on the Indian real estate sector',
//       hashtag: '#AllAboutGST',
//       bgColor: 'bg-gradient-to-br from-teal-400 to-teal-600',
//       textColor: 'text-white'
//     },
//     {
//       id: 3,
//       title: 'Infocus PMAY',
//       subtitle: 'Are you eligible for a home under the scheme?',
//       description: "Unlock our comprehensive guide on the government's flagship programme",
//       hashtag: '#HousingForAll',
//       bgColor: 'bg-gradient-to-br from-blue-400 to-blue-600',
//       textColor: 'text-white'
//     },
//     {
//       id: 4,
//       title: 'Infocus BUDGET',
//       subtitle: 'What has the Government offered to the housing industry?',
//       description: 'Click here to get a complete report on the announcements made in Union Budget',
//       hashtag: '#BudgetAndRealty',
//       bgColor: 'bg-gradient-to-br from-green-500 to-green-700',
//       textColor: 'text-white'
//     }
//   ]

//   // Popular and trending articles
//   const trendingArticles = [
//     {
//       id: 1,
//       title: 'YEIDA Residential Plots Scheme: 2022 to 2025 key milestones',
//       author: 'Varsha Khandelwal',
//       designation: 'Research Analyst',
//       date: 'Sep 24, 2025',
//       views: '215,562',
//       category: 'Policy Update'
//     },
//     {
//       id: 2,
//       title: 'DDA Latest Housing Schemes 2025: Key Details and Updates',
//       author: 'Varsha Khandelwal',
//       designation: 'Research Analyst',
//       date: 'Sep 11, 2025',
//       views: '158,739',
//       category: 'Housing Scheme'
//     },
//     {
//       id: 3,
//       title: 'Stamp duty and registration charges in Noida and Greater Noida',
//       author: 'Amar',
//       designation: 'Sr. Research Analyst',
//       date: 'Sep 12, 2025',
//       views: '77,231',
//       category: 'Tax Policy'
//     },
//     {
//       id: 4,
//       title: 'Latest stamp duty and registration charges in Gurgaon, Haryana',
//       author: 'Sukhdela Randhawa',
//       designation: 'Editor',
//       date: 'Sep 15, 2025',
//       views: '89,892',
//       category: 'Tax Policy'
//     },
//     {
//       id: 5,
//       title: 'Latest electricity charges in Greater Noida per unit in 2025',
//       author: 'Anurodh Singh Chauhan',
//       designation: 'Research Analyst',
//       date: 'Sep 17, 2025',
//       views: '64,977',
//       category: 'Utility Policy'
//     }
//   ]

//   const filteredArticles = trendingArticles.filter(article =>
//     article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     article.category.toLowerCase().includes(searchTerm.toLowerCase())
//   )

//   return (
//     <div className="min-h-screen bg-gray-50">
//      <News_Navbar />
//       {/* Hero Section */}
//       <div 
//         className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: "url('/image copy 21.png')"
//         }}
//       >
//         <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
//           {/* Breadcrumb */}
//           <div className="flex items-center text-white text-xs sm:text-sm mb-4 sm:mb-6">
//             <span className="opacity-80">Knowledge Centre</span>
//             <FaChevronRight className="mx-1 sm:mx-2 text-xs opacity-60" />
//             <span className="font-medium">Real Estate Policies</span>
//           </div>

//           {/* Main Title */}
//           <div className="max-w-4xl">
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
//               REAL ESTATE
//               <br />
//               <span className="text-yellow-300">POLICIES</span>
//             </h1>
           
//           </div>

//           {/* Location Badge */}
//           <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white rounded-lg px-2 sm:px-4 py-1 sm:py-2 flex items-center text-black">
//             <FaMapMarkerAlt className="mr-1 sm:mr-2 text-xs sm:text-sm" />
//             <span className="text-xs sm:text-sm font-medium">Delhi NCR</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
//         <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
//           {/* Left Content - Policy Categories */}
//           <div className="xl:col-span-2">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
//               {policyCategories.map((category) => (
//                 <div
//                   key={category.id}
//                   className={`${category.bgColor} ${category.textColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 cursor-pointer hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group`}
//                 >
//                   <div className="space-y-2 sm:space-y-4">
//                     <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold group-hover:scale-105 transition-transform duration-300 leading-tight">
//                       {category.title}
//                     </h3>
//                     <h4 className="text-base sm:text-lg lg:text-xl font-semibold opacity-95 leading-tight">
//                       {category.subtitle}
//                     </h4>
//                     <p className="text-xs sm:text-sm lg:text-base opacity-90 leading-relaxed">
//                       {category.description}
//                     </p>
//                     <div className="pt-2 sm:pt-4">
//                       <span className="inline-block text-sm sm:text-lg font-bold opacity-80 group-hover:opacity-100 transition-opacity duration-300">
//                         {category.hashtag}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Sidebar - Popular and Trending */}
//           <div className="xl:col-span-1 mt-6 xl:mt-0">
//             <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 xl:sticky xl:top-6">
//               <div className="flex items-center justify-between mb-4 sm:mb-6">
//                 <h2 className="text-lg sm:text-xl font-bold text-blue-600">Popular and Trending</h2>
//                 <FaEye className="text-blue-500 text-sm sm:text-base" />
//               </div>

//               {/* Search Bar */}
//               <div className="relative mb-4 sm:mb-6">
//                 <input
//                   type="text"
//                   placeholder="Search policies..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-8 sm:pl-10 pr-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//                 <FaSearch className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
//               </div>

//               {/* Articles List */}
//               <div className="space-y-3 sm:space-y-4 max-h-80 sm:max-h-96 overflow-y-auto">
//                 {filteredArticles.map((article, index) => (
//                   <div key={article.id} className="group cursor-pointer">
//                     <div className="border-b border-gray-100 pb-3 sm:pb-4 hover:bg-gray-50 rounded-lg p-2 transition-colors duration-200">
//                       <h3 className="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 mb-2 leading-tight">
//                         {article.title}
//                       </h3>
                      
//                       <div className="text-xs text-gray-500 space-y-1">
//                         <div className="flex items-start justify-between gap-2">
//                           <span className="font-medium text-[10px] sm:text-xs truncate">{article.author}</span>
//                           <span className="bg-blue-100 text-blue-600 px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] whitespace-nowrap">
//                             {article.category}
//                           </span>
//                         </div>
//                         <div className="flex items-center justify-between gap-2">
//                           <span className="text-[10px] sm:text-xs truncate">{article.designation}</span>
//                           <div className="flex items-center space-x-1 sm:space-x-2">
//                             <FaEye className="text-[10px] sm:text-xs" />
//                             <span className="text-[10px] sm:text-xs whitespace-nowrap">{article.views}</span>
//                           </div>
//                         </div>
//                         <div className="text-gray-400 text-[10px] sm:text-xs">{article.date}</div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* View More Button */}
//               <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100">
//                 <button className="w-full text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200 flex items-center justify-center text-sm sm:text-base">
//                   VIEW MORE
//                   <FaChevronRight className="ml-2 text-xs" />
//                 </button>
//               </div>

//               {/* Sell/Rent Property Banner */}
//               <div className="mt-4 sm:mt-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
//                 <h3 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Sell / Rent Property</h3>
//                 <p className="text-lg sm:text-2xl font-bold text-gray-800 mb-2">for Free</p>
//                 <div className="flex justify-center">
//                   <svg viewBox="0 0 200 100" className="w-24 h-12 sm:w-32 sm:h-16 opacity-80">
//                     <rect x="20" y="60" width="15" height="40" fill="#fff" opacity="0.7"/>
//                     <rect x="40" y="50" width="20" height="50" fill="#fff" opacity="0.8"/>
//                     <rect x="65" y="55" width="18" height="45" fill="#fff" opacity="0.6"/>
//                     <rect x="88" y="45" width="22" height="55" fill="#fff" opacity="0.9"/>
//                     <rect x="115" y="52" width="16" height="48" fill="#fff" opacity="0.7"/>
//                     <rect x="135" y="58" width="14" height="42" fill="#fff" opacity="0.8"/>
//                     <rect x="155" y="62" width="12" height="38" fill="#fff" opacity="0.6"/>
//                   </svg>
//                 </div>
//               </div>

//               {/* Properties to Buy/Rent Section */}
//               <div className="mt-4 sm:mt-6 bg-white rounded-lg border border-gray-200">
//                 <div className="p-3 sm:p-4">
//                   <h3 className="text-base sm:text-lg font-semibold text-blue-600 mb-3 sm:mb-4">Properties to</h3>
                  
//                   {/* Buy/Rent Tabs */}
//                   <div className="flex mb-3 sm:mb-4">
//                     <button className="flex-1 px-3 sm:px-4 py-2 bg-blue-600 text-white text-xs sm:text-sm font-medium rounded-l-lg">
//                       Buy
//                     </button>
//                     <button className="flex-1 px-3 sm:px-4 py-2 bg-gray-100 text-gray-600 text-xs sm:text-sm font-medium rounded-r-lg">
//                       Rent
//                     </button>
//                   </div>

//                   {/* Property Links */}
//                   <div className="space-y-2 sm:space-y-3">
//                     <a href="#" className="block text-xs sm:text-sm text-blue-600 hover:text-blue-800 transition-colors leading-tight">
//                       New Projects in Delhi / NCR
//                     </a>
//                     <a href="#" className="block text-xs sm:text-sm text-blue-600 hover:text-blue-800 transition-colors leading-tight">
//                       Property in Delhi / NCR
//                     </a>
//                     <a href="#" className="block text-xs sm:text-sm text-blue-600 hover:text-blue-800 transition-colors leading-tight">
//                       Flats in Delhi / NCR
//                     </a>
//                     <a href="#" className="block text-xs sm:text-sm text-blue-600 hover:text-blue-800 transition-colors leading-tight">
//                       House for sale in Delhi / NCR
//                     </a>
//                     <a href="#" className="block text-xs sm:text-sm text-blue-600 hover:text-blue-800 transition-colors leading-tight">
//                       Plots in Delhi / NCR
//                     </a>
//                     <a href="#" className="block text-xs sm:text-sm text-blue-600 hover:text-blue-800 transition-colors leading-tight">
//                       Builder Floor in Delhi / NCR
//                     </a>
//                     <a href="#" className="block text-xs sm:text-sm text-blue-600 hover:text-blue-800 transition-colors leading-tight">
//                       Studio Apartments in Delhi / NCR
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* Sponsored Content Banner */}
//               <div className="mt-4 sm:mt-6 bg-gray-900 rounded-lg text-white relative overflow-hidden">
//                 <div className="p-3 sm:p-4">
//                   <div className="flex items-center mb-1 sm:mb-2">
//                     <span className="text-yellow-400 mr-1 sm:mr-2 text-sm sm:text-base">💎</span>
//                     <span className="font-bold text-yellow-400 text-xs sm:text-sm">SPONSORED CONTENT</span>
//                   </div>
//                   <div className="text-[10px] sm:text-xs text-gray-300 mb-1 sm:mb-2 leading-tight">
//                     DEVELOPERS | PROJECTS | NEWS & VIEWS
//                   </div>
//                   <div className="text-[10px] sm:text-xs text-gray-400 italic mb-2 sm:mb-3 leading-tight">
//                     "A paid campaign for select builders"
//                   </div>
//                   <button className="bg-yellow-500 text-black px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold rounded hover:bg-yellow-400 transition-colors">
//                     EXPLORE NOW
//                   </button>
//                 </div>
//                 <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 opacity-10 rounded-full -mr-6 sm:-mr-8 -mt-6 sm:-mt-8"></div>
//                 <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 bg-yellow-400 opacity-10 rounded-full -ml-4 sm:-ml-6 -mb-4 sm:-mb-6"></div>
//               </div>

//               {/* Rent Agreement Online Section */}
//               <div className="mt-4 sm:mt-6 bg-orange-50 rounded-lg border border-orange-200">
//                 <div className="p-3 sm:p-4 text-center">
//                   <div className="mb-2 sm:mb-3">
//                     <div className="inline-block p-2 sm:p-3 bg-blue-100 rounded-full">
//                       <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm8 8v2a1 1 0 01-1 1H6a1 1 0 01-1-1v-2h8z" clipRule="evenodd" />
//                       </svg>
//                     </div>
//                   </div>
//                   <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base leading-tight">
//                     Now you can create your Rent Agreement Online
//                   </h3>
//                   <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-tight">
//                     100% Reliable | Delivered to your doorstep
//                   </p>
//                   <button className="bg-blue-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded hover:bg-blue-700 transition-colors">
//                     Know More
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Policies











import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaEye, FaChevronRight } from 'react-icons/fa';
import NewsNavbarIntegration from './News_Navbar';

const PoliciesIntegration = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const policyCategories = [
    { id: 1, title: 'Infocus RERA', subtitle: 'How has RERA impacted the Indian housing industry?', description: 'Know all about the Real Estate (Regulation and Development) Act, 2016 in detail', hashtag: '#RERADecoded', bgColor: 'bg-gradient-to-br from-emerald-400 to-emerald-600', textColor: 'text-white' },
    { id: 2, title: 'Infocus GST', subtitle: "What's the latest update on GST on under-construction homes?", description: 'Know its impact on the Indian real estate sector', hashtag: '#AllAboutGST', bgColor: 'bg-gradient-to-br from-teal-400 to-teal-600', textColor: 'text-white' },
    { id: 3, title: 'Infocus PMAY', subtitle: 'Are you eligible for a home under the scheme?', description: "Unlock our comprehensive guide on the government's flagship programme", hashtag: '#HousingForAll', bgColor: 'bg-gradient-to-br from-blue-400 to-blue-600', textColor: 'text-white' },
    { id: 4, title: 'Infocus BUDGET', subtitle: 'What has the Government offered to the housing industry?', description: 'Click here to get a complete report on the announcements made in Union Budget', hashtag: '#BudgetAndRealty', bgColor: 'bg-gradient-to-br from-green-500 to-green-700', textColor: 'text-white' }
  ];

  const trendingArticles = [
    { id: 1, title: 'YEIDA Residential Plots Scheme: 2022 to 2025 key milestones', author: 'Varsha Khandelwal', designation: 'Research Analyst', date: 'Sep 24, 2025', views: '215,562', category: 'Policy Update' },
    { id: 2, title: 'DDA Latest Housing Schemes 2025: Key Details and Updates', author: 'Varsha Khandelwal', designation: 'Research Analyst', date: 'Sep 11, 2025', views: '158,739', category: 'Housing Scheme' },
    { id: 3, title: 'Stamp duty and registration charges in Noida and Greater Noida', author: 'Amar', designation: 'Sr. Research Analyst', date: 'Sep 12, 2025', views: '77,231', category: 'Tax Policy' },
    { id: 4, title: 'Latest stamp duty and registration charges in Gurgaon, Haryana', author: 'Sukhdela Randhawa', designation: 'Editor', date: 'Sep 15, 2025', views: '89,892', category: 'Tax Policy' },
    { id: 5, title: 'Latest electricity charges in Greater Noida per unit in 2025', author: 'Anurodh Singh Chauhan', designation: 'Research Analyst', date: 'Sep 17, 2025', views: '64,977', category: 'Utility Policy' }
  ];

  const filteredArticles = trendingArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <NewsNavbarIntegration />
      {/* Hero Section */}
      <div
        className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/image copy 21.png')" }}
      >
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
          {/* Breadcrumb */}
          <div className="flex items-center text-white text-xs sm:text-sm mb-4 sm:mb-6">
            <span className="opacity-80">Knowledge Centre</span>
            <FaChevronRight className="mx-1 sm:mx-2 text-xs opacity-60" />
            <span className="font-medium">Real Estate Policies</span>
          </div>
          {/* Main Title */}
          <div className="max-w-4xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
              REAL ESTATE
              <br />
              <span className="text-yellow-300">POLICIES</span>
            </h1>
          </div>
          {/* Location Badge */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white rounded-lg px-2 sm:px-4 py-1 sm:py-2 flex items-center text-black">
            <FaMapMarkerAlt className="mr-1 sm:mr-2 text-xs sm:text-sm" />
            <span className="text-xs sm:text-sm font-medium">Delhi NCR</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Content - Policy Categories */}
          <div className="xl:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {policyCategories.map(category => (
                <div
                  key={category.id}
                  className={`${category.bgColor} ${category.textColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 cursor-pointer hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group`}
                >
                  <div className="space-y-2 sm:space-y-4">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold group-hover:scale-105 transition-transform duration-300 leading-tight">
                      {category.title}
                    </h3>
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold opacity-95 leading-tight">
                      {category.subtitle}
                    </h4>
                    <p className="text-xs sm:text-sm lg:text-base opacity-90 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="pt-2 sm:pt-4">
                      <span className="inline-block text-sm sm:text-lg font-bold opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        {category.hashtag}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar - Popular and Trending */}
          <div className="xl:col-span-1 mt-6 xl:mt-0">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 xl:sticky xl:top-6">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-blue-600">Popular and Trending</h2>
                <FaEye className="text-blue-500 text-sm sm:text-base" />
              </div>

              {/* Search Bar */}
              <div className="relative mb-4 sm:mb-6">
                <input
                  type="text"
                  placeholder="Search policies..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full pl-8 sm:pl-10 pr-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <FaSearch className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
              </div>

              {/* Articles List */}
              <div className="space-y-3 sm:space-y-4 max-h-80 sm:max-h-96 overflow-y-auto">
                {filteredArticles.map(article => (
                  <div key={article.id} className="group cursor-pointer">
                    <div className="border-b border-gray-100 pb-3 sm:pb-4 hover:bg-gray-50 rounded-lg p-2 transition-colors duration-200">
                      <h3 className="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 mb-2 leading-tight">
                        {article.title}
                      </h3>
                      <div className="text-xs text-gray-500 space-y-1">
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-medium text-[10px] sm:text-xs truncate">{article.author}</span>
                          <span className="bg-blue-100 text-blue-600 px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] whitespace-nowrap">
                            {article.category}
                          </span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] sm:text-xs truncate">{article.designation}</span>
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <FaEye className="text-[10px] sm:text-xs" />
                            <span className="text-[10px] sm:text-xs whitespace-nowrap">{article.views}</span>
                          </div>
                        </div>
                        <div className="text-gray-400 text-[10px] sm:text-xs">{article.date}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliciesIntegration;