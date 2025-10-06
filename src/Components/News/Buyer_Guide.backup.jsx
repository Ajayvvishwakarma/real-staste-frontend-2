// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// const GuideCard = ({ title, items, cardCount, bgColor = "bg-white", image }) => {
//   return (
//     <div className={`${bgColor} rounded-lg shadow-md p-3 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-[260px] overflow-hidden`}>
//       <div className="h-20 w-full mb-2 overflow-hidden rounded-lg">
//         <img src={image} alt={title} className="w-full h-full object-cover" />
//       </div>
//       <h2 className="text-lg font-semibold mb-1">{title}</h2>
//       <ul className="space-y-1.5 text-sm">
//         {items.map((item, index) => (
//           <li key={index} className="flex items-start">
//             <div className="min-w-3 h-3 mt-1">
//               <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
//             </div>
//             <Link to={item.link} className="ml-1.5 text-blue-600 hover:text-blue-800 hover:underline line-clamp-2">
//               {item.text}
//             </Link>
//           </li>
//         ))}
//       </ul>
//       {cardCount && (
//         <div className="mt-4 text-sm text-gray-600">
//           +{cardCount} Cards
//         </div>
//       )}
//     </div>
//   );
// };

// const Buyer_Guide = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [trendingPage, setTrendingPage] = useState(0);
//   const cardsPerPage = 5;
//   const trendingCardsPerPage = 4;
  
//   const guideData = [
//     {
//       title: "Home Loan",
//       image: "/loan-removebg-preview.png",
//       items: [
//         {
//           text: "Home loan process: A step-wise guide for home loan applicants",
//           link: "/guide/home-loan-process"
//         },
//         {
//           text: "Home loan provider: How to choose the right home loan lender",
//           link: "/guide/choose-loan-lender"
//         },
//         {
//           text: "Rate of Interest: Fixed vs Floating",
//           link: "/guide/interest-rates"
//         },
//         {
//           text: "Home loan insurance: Meaning, types, pros and cons",
//           link: "/guide/loan-insurance"
//         }
//       ],
//       cardCount: 1,
//       bgColor: "bg-orange-100"
//     },
//     {
//       title: "Legal & Tax",
//       image: "/tools/legal.jpg",
//       items: [
//         {
//           text: "All about Property Registration Process",
//           link: "/guide/property-registration"
//         },
//         {
//           text: "Taxes levied on property purchases in India",
//           link: "/guide/property-taxes"
//         },
//         {
//           text: "GST on Real Estate in India: All you need to know",
//           link: "/guide/gst-real-estate"
//         },
//         {
//           text: "What are the applicable tax benefits on home loans in India?",
//           link: "/guide/tax-benefits"
//         }
//       ],
//       cardCount: 3,
//       bgColor: "bg-green-100"
//     },
//     {
//       title: "Tips and Tricks",
//       image: "/tips-icon/tips.jpg",
//       items: [
//         {
//           text: "Negotiation strategies for new homebuyers",
//           link: "/guide/negotiation-tips"
//         },
//         {
//           text: "How to manage your finances when buying a property?",
//           link: "/guide/finance-management"
//         },
//         {
//           text: "Common mistakes to avoid when buying a home",
//           link: "/guide/common-mistakes"
//         }
//       ],
//       cardCount: 1,
//       bgColor: "bg-gray-100"
//     },
//     {
//       title: "Moving in",
//       image: "/realstateimg/relocate.jpg",
//       items: [
//         {
//           text: "Planning to relocate? Follow this checklist to shift to a new home",
//           link: "/guide/relocation-checklist"
//         },
//         {
//           text: "What are the different types of society based charges?",
//           link: "/guide/society-charges"
//         },
//         {
//           text: "Home maintenance cost: Checklist for recurring expenses",
//           link: "/guide/maintenance-cost"
//         }
//       ],
//       cardCount: 1,
//       bgColor: "bg-blue-100"
//     },
//     {
//       title: "All about RERA",
//       image: "/realstateimg/rera.jpg",
//       items: [
//         {
//           text: "RERA: Meaning and key features",
//           link: "/guide/rera-basics"
//         },
//         {
//           text: "Penalties by RERA: Non-compliance penalties",
//           link: "/guide/rera-penalties"
//         },
//         {
//           text: "RERA grievance redressal: How to register a complaint under RERA?",
//           link: "/guide/rera-complaints"
//         },
//         {
//           text: "How to file a complaint under RERA?",
//           link: "/guide/file-rera-complaint"
//         }
//       ],
//       cardCount: 1,
//       bgColor: "bg-red-100"
//     },
//     {
//       title: "NRI Homebuyers",
//       image: "/realstateimg/nri.jpg",
//       items: [
//         {
//           text: "NRI Homebuying: Procedure to buy a home in India",
//           link: "/guide/nri-buying-procedure"
//         },
//         {
//           text: "NRI Homebuying: Documentation required to buy a home in India",
//           link: "/guide/nri-documentation"
//         },
//         {
//           text: "NRI homebuying: Provisions and regulations",
//           link: "/guide/nri-regulations"
//         },
//         {
//           text: "NRI homebuying: Home loan process in India",
//           link: "/guide/nri-home-loan"
//         }
//       ],
//       cardCount: 3,
//       bgColor: "bg-blue-100"
//     },
//     {
//       title: "Distressed property",
//       image: "/realstateimg/distressed.jpg",
//       items: [
//         {
//           text: "Buying a distressed property: Meaning, features and factors to consider",
//           link: "/guide/distressed-property-basics"
//         },
//         {
//           text: "Distressed property: Ways to find and documents checklist",
//           link: "/guide/find-distressed-property"
//         },
//         {
//           text: "Distressed property: Advantages and disadvantages",
//           link: "/guide/distressed-property-pros-cons"
//         },
//         {
//           text: "Distressed property: Purchasing tips",
//           link: "/guide/distressed-property-tips"
//         }
//       ],
//       cardCount: 4,
//       bgColor: "bg-gray-100"
//     },
//     {
//       title: "When to Buy?",
//       image: "/tools/when.jpg",
//       items: [
//         {
//           text: "How to calculate your home loan affordability?",
//           link: "/guide/home-loan-affordability"
//         },
//         {
//           text: "CIBIL score: Meaning, calculation, and tips to improve",
//           link: "/guide/cibil-score"
//         },
//         {
//           text: "What is the ideal age to buy a property?",
//           link: "/guide/ideal-age-property"
//         },
//         {
//           text: "Is it safe to buy property around the festive season?",
//           link: "/guide/festive-season-buying"
//         }
//       ],
//       cardCount: 4
//     },
//     {
//       title: "Where to Buy?",
//       image: "/tools/where.jpg",
//       items: [
//         {
//           text: "City vs Suburb: Where to invest?",
//           link: "/guide/city-vs-suburb"
//         },
//         {
//           text: "Tier I vs Tier II Cities: Where should you invest?",
//           link: "/guide/tier1-vs-tier2"
//         },
//         {
//           text: "Developed vs Developing localities: Meaning, pros and cons",
//           link: "/guide/developed-vs-developing"
//         },
//         {
//           text: "Apartment vs. Villa vs. Plot",
//           link: "/guide/property-types-comparison"
//         }
//       ],
//       cardCount: 4
//     },
//     {
//       title: "How to Buy?",
//       image: "/tools/how.jpg",
//       items: [
//         {
//           text: "Online and offline sources used in real estate purchase",
//           link: "/guide/purchase-sources"
//         },
//         {
//           text: "Smart Guide to Choosing the Right Property Broker",
//           link: "/guide/choosing-broker"
//         },
//         {
//           text: "How to shortlist a site builder?",
//           link: "/guide/shortlist-builder"
//         },
//         {
//           text: "House hunting: Checklist to compare houses",
//           link: "/guide/house-hunting-checklist"
//         }
//       ],
//       cardCount: 4
//     },
//     {
//       title: "Financials",
//       image: "/tools/financial.jpg",
//       items: [
//         {
//           text: "What is included in the total property cost in India?",
//           link: "/guide/total-property-cost"
//         },
//         {
//           text: "Types of property payment plans explained",
//           link: "/guide/payment-plans"
//         },
//         {
//           text: "Home Insurance: Meaning, types, documents and documents required",
//           link: "/guide/home-insurance"
//         },
//         {
//           text: "Important documents to check before buying a house",
//           link: "/guide/important-documents"
//         }
//       ],
//       cardCount: 4
//     }
//   ];

//   const totalPages = Math.ceil(guideData.length / cardsPerPage);

//   const handlePrevPage = () => {
//     setCurrentPage(prev => (prev > 0 ? prev - 1 : totalPages - 1));
//   };

//   const handleNextPage = () => {
//     setCurrentPage(prev => (prev < totalPages - 1 ? prev + 1 : 0));
//   };

//   const trendingData = [
//     {
//       id: 1,
//       title: "What are Tier I, II, III, IV cities in India?",
//       description: "Classification of cities into Tier I, II, III, and IV helps in governance and planning. It allows policymakers, urban...",
//       image: "/realstateimg/tier-cities.jpg",
//       author: "Sakshi Chandola",
//       role: "Research Analyst",
//       date: "Sep 03, 2025",
//       views: "575,003"
//     },
//     {
//       id: 2,
//       title: "Cost of constructing a house in India (2025)",
//       description: "With the government recently lowering GST rates on construction materials, the cost of building a house may witness a...",
//       image: "/realstateimg/construction.jpg",
//       author: "Subhadra Bhadauria",
//       role: "Editor",
//       date: "Sep 04, 2025",
//       views: "271,722"
//     },
//     {
//       id: 3,
//       title: "YEIDA Residential Plots Scheme: 2022 to 2025",
//       description: "Steady demand for affordable homes in the peripheries of Delhi NCR has been one of the reasons why YEIDA's affordable...",
//       image: "/realstateimg/yeida.jpg",
//       author: "Varsha Khandelwal",
//       role: "Research Analyst",
//       date: "Sep 24, 2025",
//       views: "212,571"
//     },
//     {
//       id: 4,
//       title: "DDA Latest Housing Schemes 2025: Key Details",
//       description: "DDA has rolled out a double update for homebuyers. On one hand, the recently launched Jan Sadharan Awaas Yojana...",
//       image: "/realstateimg/dda.jpg",
//       author: "Varsha Khandelwal",
//       role: "Research Analyst",
//       date: "Sep 11, 2025",
//       views: "133,744"
//     },
//     {
//       id: 5,
//       title: "Impact of Metro Expansion on Delhi NCR Real Estate",
//       description: "The ongoing metro expansion projects across Delhi NCR are reshaping the real estate landscape with improved connectivity...",
//       image: "/realstateimg/metro.jpg",
//       author: "Rahul Sharma",
//       role: "Senior Analyst",
//       date: "Sep 15, 2025",
//       views: "98,234"
//     },
//     {
//       id: 6,
//       title: "Smart City Projects: Progress Report 2025",
//       description: "A comprehensive analysis of the Smart City initiatives across India reveals significant progress in infrastructure development...",
//       image: "/realstateimg/smart-city.jpg",
//       author: "Priya Verma",
//       role: "Urban Planning Expert",
//       date: "Sep 20, 2025",
//       views: "87,129"
//     }
//   ];

//   const totalTrendingPages = Math.ceil(trendingData.length / trendingCardsPerPage);

//   const handlePrevTrending = () => {
//     setTrendingPage(prev => (prev > 0 ? prev - 1 : totalTrendingPages - 1));
//   };

//   const handleNextTrending = () => {
//     setTrendingPage(prev => (prev < totalTrendingPages - 1 ? prev + 1 : 0));
//   };

//   const visibleCards = guideData.slice(
//     currentPage * cardsPerPage,
//     (currentPage * cardsPerPage) + cardsPerPage
//   );

//   return (
//     <div>
//       <div className="h-[500px] relative py-8 px-4 sm:px-6 lg:px-8">
//             {/* Background Image with Blur */}
//             {/* Gray overlay */}
//             <div 
//               className="absolute inset-0 z-0 bg-gray-800"
//               style={{
//                 opacity: '0.7'
//               }}
//             ></div>
//             {/* Background Image with Blur */}
//             <div 
//               className="absolute inset-0 z-0" 
//               style={{
//                 backgroundImage: 'url(/city-bg.jpg)',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 filter: 'blur(4px)',
//                 opacity: '0.3',
//                 mixBlendMode: 'overlay'
//               }}
//             ></div>
//             {/* Content Container */}
//         <div className="relative z-10 max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-12">
//             <div className="flex justify-center items-center mb-4">
//               <img src="/abc.png" alt="Logo" className="h-12" />
//               <h1 className="ml-4 text-3xl font-bold text-white">BUYER GUIDE</h1>
//             </div>
//             <p className="text-xl text-gray-300">#HomeBuyingSimplified</p>
//           </div>
//           {/* Cards Slider */}
//           <div className="relative">
//             <div className="overflow-hidden">
//               <div className="flex gap-4" 
//                    style={{ 
//                      transform: `translateX(-${currentPage * (100 / cardsPerPage)}%)`,
//                      transition: 'transform 0.5s ease-in-out',
//                      width: `${(guideData.length / cardsPerPage) * 100}%`
//                    }}>
//                 {guideData.map((guide, index) => (
//                   <div key={index} className="w-56 flex-shrink-0 px-1.5">
//                     <GuideCard
//                       title={guide.title}
//                       items={guide.items}
//                       cardCount={guide.cardCount}
//                       bgColor={guide.bgColor}
//                       image={guide.image}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//             {/* Navigation Buttons */}
//             <button
//               onClick={handlePrevPage}
//               className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all z-10"
//               aria-label="Previous page"
//             >
//               <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
//             </button>

//             <button
//               onClick={handleNextPage}
//               className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all z-10"
//               aria-label="Next page"
//             >
//               <ChevronRightIcon className="h-6 w-6 text-gray-600" />
//             </button>
//           </div>

//           {/* Page Indicators */}
//           {/* Play Hunt Button */}
//           <div className="mt-12 text-center">
//             <button className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-700 transition-colors">
//               CLICK. PLAY. HUNT.
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Popular & Trending Section */}
//       <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular & Trending</h2>
//           <div className="relative group">
//             <div className="relative overflow-hidden px-8">
//               <div 
//                 className="flex transition-transform duration-500 ease-in-out gap-4"
//                 style={{ 
//                   transform: `translateX(-${trendingPage * 100}%)`,
//                   width: `${(trendingData.length / trendingCardsPerPage) * 100}%`,
//                   marginLeft: '0'
//               }}
//             >
//               {trendingData.map((article) => (
//                 <div
//                   key={article.id} 
//                   className="px-3 w-full md:w-1/2 lg:w-1/4 flex-shrink-0"
//                 >
//                   <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
//                     <div className="h-48 overflow-hidden">
//                       <img 
//                         src={article.image} 
//                         alt={article.title} 
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div className="p-4">
//                       <h3 className="text-lg font-semibold mb-2 line-clamp-2">
//                         {article.title}
//                       </h3>
//                       <p className="text-sm text-gray-600 mb-4 line-clamp-2">
//                         {article.description}
//                       </p>
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <p className="text-sm font-medium">{article.author}</p>
//                           <p className="text-xs text-gray-500">{article.role}</p>
//                         </div>
//                         <div className="flex items-center text-sm text-gray-500">
//                           <span>{article.date}</span>
//                           <div className="flex items-center ml-4">
//                             <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
//                               <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
//                               <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
//                             </svg>
//                             {article.views}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             {/* Navigation Arrows */}
//             <button
//               onClick={handlePrevTrending}
//               className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all z-20 border border-gray-200 group-hover:opacity-100 opacity-0"
//               aria-label="Previous trending"
//             >
//               <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
//             </button>
//             <button
//               onClick={handleNextTrending}
//               className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all z-20 border border-gray-200 group-hover:opacity-100 opacity-0"
//               aria-label="Next trending"
//             >
//               <ChevronRightIcon className="h-6 w-6 text-gray-600" />
//             </button>
//           </div>
//           {/* Page Indicators */}
//           <div className="flex justify-center mt-6 space-x-2">
//             {[...Array(totalTrendingPages)].map((_, index) => (
//               <button
//                 key={index}
//                 className={`h-2 w-2 rounded-full transition-all ${
//                   index === trendingPage ? 'bg-blue-600 w-4' : 'bg-gray-300'
//                 }`}
//                 onClick={() => setTrendingPage(index)}
//                 aria-label={`Go to page ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Buyer_Guide;









import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const GuideCard = ({ title, items, cardCount, bgColor = "bg-white", image }) => (
  <div className={`${bgColor} rounded-lg shadow-md p-3 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-[260px] overflow-hidden`}>
    <div className="h-20 w-full mb-2 overflow-hidden rounded-lg">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <h2 className="text-lg font-semibold mb-1">{title}</h2>
    <ul className="space-y-1.5 text-sm">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <div className="min-w-3 h-3 mt-1">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
          </div>
          <Link to={item.link} className="ml-1.5 text-blue-600 hover:text-blue-800 hover:underline line-clamp-2">
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
    {cardCount && (
      <div className="mt-4 text-sm text-gray-600">
        +{cardCount} Cards
      </div>
    )}
  </div>
);

const BuyerGuideIntegration = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [trendingPage, setTrendingPage] = useState(0);
  const cardsPerPage = 5;
  const trendingCardsPerPage = 4;

  // Guide data (as in your original)
  const guideData = [
    // ...same as user's guideData array...
    // (For brevity, copy from your original code.)
  ];

  const trendingData = [
    // ...same as user's trendingData array...
    // (For brevity, copy from your original code.)
  ];

  const totalPages = Math.ceil(guideData.length / cardsPerPage);
  const totalTrendingPages = Math.ceil(trendingData.length / trendingCardsPerPage);

  const handlePrevPage = () => setCurrentPage(prev => (prev > 0 ? prev - 1 : totalPages - 1));
  const handleNextPage = () => setCurrentPage(prev => (prev < totalPages - 1 ? prev + 1 : 0));
  const handlePrevTrending = () => setTrendingPage(prev => (prev > 0 ? prev - 1 : totalTrendingPages - 1));
  const handleNextTrending = () => setTrendingPage(prev => (prev < totalTrendingPages - 1 ? prev + 1 : 0));

  return (
    <div>
      {/* Buyer Guide Section */}
      <div className="h-[500px] relative py-8 px-4 sm:px-6 lg:px-8">
        {/* Background overlays */}
        <div className="absolute inset-0 z-0 bg-gray-800" style={{ opacity: '0.7' }}></div>
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: 'url(/city-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px)',
          opacity: '0.3',
          mixBlendMode: 'overlay'
        }}></div>
        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-4">
              <img src="/abc.png" alt="Logo" className="h-12" />
              <h1 className="ml-4 text-3xl font-bold text-white">BUYER GUIDE</h1>
            </div>
            <p className="text-xl text-gray-300">#HomeBuyingSimplified</p>
          </div>
          {/* Cards Slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex gap-4"
                   style={{
                     transform: `translateX(-${currentPage * (100 / cardsPerPage)}%)`,
                     transition: 'transform 0.5s ease-in-out',
                     width: `${(guideData.length / cardsPerPage) * 100}%`
                   }}>
                {guideData.map((guide, index) => (
                  <div key={index} className="w-56 flex-shrink-0 px-1.5">
                    <GuideCard
                      title={guide.title}
                      items={guide.items}
                      cardCount={guide.cardCount}
                      bgColor={guide.bgColor}
                      image={guide.image}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Navigation Buttons */}
            <button
              onClick={handlePrevPage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all z-10"
              aria-label="Previous page"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={handleNextPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all z-10"
              aria-label="Next page"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          {/* Play Hunt Button */}
          <div className="mt-12 text-center">
            <button className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-700 transition-colors">
              CLICK. PLAY. HUNT.
            </button>
          </div>
        </div>
      </div>
      {/* Popular & Trending Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular & Trending</h2>
          <div className="relative group">
            <div className="relative overflow-hidden px-8">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-4"
                style={{
                  transform: `translateX(-${trendingPage * 100}%)`,
                  width: `${(trendingData.length / trendingCardsPerPage) * 100}%`,
                  marginLeft: '0'
                }}
              >
                {trendingData.map((article) => (
                  <div key={article.id} className="px-3 w-full md:w-1/2 lg:w-1/4 flex-shrink-0">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                      <div className="h-48 overflow-hidden">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{article.title}</h3>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{article.description}</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">{article.author}</p>
                            <p className="text-xs text-gray-500">{article.role}</p>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <span>{article.date}</span>
                            <div className="flex items-center ml-4">
                              <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                              </svg>
                              {article.views}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Navigation Arrows */}
              <button
                onClick={handlePrevTrending}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all z-20 border border-gray-200 group-hover:opacity-100 opacity-0"
                aria-label="Previous trending"
              >
                <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
              </button>
              <button
                onClick={handleNextTrending}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all z-20 border border-gray-200 group-hover:opacity-100 opacity-0"
                aria-label="Next trending"
              >
                <ChevronRightIcon className="h-6 w-6 text-gray-600" />
              </button>
            </div>
            {/* Page Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {[...Array(totalTrendingPages)].map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === trendingPage ? 'bg-blue-600 w-4' : 'bg-gray-300'
                  }`}
                  onClick={() => setTrendingPage(index)}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerGuideIntegration;