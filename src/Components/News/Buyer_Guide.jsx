import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const GuideCard = ({ title, items, cardCount, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-green-100 backdrop-blur-sm p-4 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group relative overflow-hidden h-[400px] w-[280px] sm:w-[300px] lg:w-[320px]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Enhanced image container - increased size */}
      <div className="h-32 w-full mb-2 overflow-hidden rounded-xl relative group/image">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Enhanced title - reduced size */}
      <h2 className="text-base font-bold mb-1 text-black group-hover:text-green-600 transition-colors duration-300">{title}</h2>
      
      {/* Enhanced list items - reduced text size */}
      <ul className="space-y-1 text-xs">
        {items.map((item, index) => (
          <li key={index} className="flex items-start group/item">
            <div className="min-w-2 h-2 mt-1">
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-green-700 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <Link to={item.link} className="ml-2 text-gray-700 hover:text-green-600 hover:underline line-clamp-2 transition-colors duration-300 group-hover/item:translate-x-1">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
      
      {/* Enhanced card count badge - reduced size */}
      {cardCount && (
        <div className="mt-2 text-xs text-green-700 bg-gradient-to-r from-green-50 to-green-100 px-2 py-1 rounded-full inline-block font-medium border border-green-200">
          +{cardCount} More
        </div>
      )}
      
      {/* Shine effect */}
      <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-green-200/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
    </div>
  );
};

const Buyer_Guide = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [trendingPage, setTrendingPage] = useState(0);
  const [newsPage, setNewsPage] = useState(0);
  const cardsPerPage = 3;
  const trendingCardsPerPage = 4;
  const newsPerPage = 4;

  const guideData = [
    {
      title: "Home Loan",
      image: "/360img/IMG-20250920-WA0035.jpg",
      items: [
        {
          text: "Home loan process: A step-wise guide for home loan applicants",
          link: "/guide/home-loan-process"
        },
        {
          text: "Home loan provider: How to choose the right home loan lender",
          link: "/guide/choose-loan-lender"
        },
        {
          text: "Rate of Interest: Fixed vs Floating",
          link: "/guide/interest-rates"
        },
        {
          text: "Home loan insurance: Meaning, types, pros and cons",
          link: "/guide/loan-insurance"
        }
      ],
      cardCount: 1
    },
    {
      title: "Legal & Tax",
      image: "/360img/IMG-20250920-WA0021.jpg",
      items: [
        {
          text: "All about Property Registration Process",
          link: "/guide/property-registration"
        },
        {
          text: "Taxes levied on property purchases in India",
          link: "/guide/property-taxes"
        },
        {
          text: "GST on Real Estate in India: All you need to know",
          link: "/guide/gst-real-estate"
        },
        {
          text: "What are the applicable tax benefits on home loans in India?",
          link: "/guide/tax-benefits"
        }
      ],
      cardCount: 3
    },
    {
      title: "Tips and Tricks",
      image:"/360img/IMG-20250920-WA0008.jpg",
      items: [
        {
          text: "Negotiation strategies for new homebuyers",
          link: "/360img/IMG-20250920-WA0035.jpg"
        },
        {
          text: "How to manage your finances when buying a property?",
          link: "/360img/IMG-20250920-WA0037.jpg"
        },
        {
          text: "Common mistakes to avoid when buying a home",
          link: "/360img/IMG-20250920-WA0021.jpg"
        }
      ],
      cardCount: 1
    },
    {
      title: "Moving in",
      image: "/360img/IMG-20250920-WA0035.jpg",
      items: [
        {
          text: "Planning to relocate? Follow this checklist to shift to a new home",
          link: "/guide/relocation-checklist"
        },
        {
          text: "What are the different types of society based charges?",
          link: "/guide/society-charges"
        },
        {
          text: "Home maintenance cost: Checklist for recurring expenses",
          link: "/guide/maintenance-cost"
        }
      ],
      cardCount: 1
    },
    {
      title: "What to Buy?",
      image: "/realstateimg/what-to-buy.jpg",
      items: [
        {
          text: "Under-construction Vs Ready-to-move in Property: Which is better?",
          link: "/guide/under-construction-vs-ready"
        },
        {
          text: "Investing vs. End-use: Factors to consider",
          link: "/guide/investing-vs-end-use"
        },
        {
          text: "Are freehold properties better than leasehold properties?",
          link: "/guide/freehold-vs-leasehold"
        },
        {
          text: "Apartment vs. Villa vs. Plot",
          link: "/guide/apartment-villa-plot"
        }
      ],
      cardCount: 7
    },
    {
      title: "When to Buy?",
      image: "/360img/IMG-20250920-WA0037.jpg",
      items: [
        {
          text: "How to calculate your home loan affordability?",
          link: "/guide/home-loan-affordability"
        },
        {
          text: "CIBIL score: Meaning, calculation, and tips to improve",
          link: "/guide/cibil-score"
        },
        {
          text: "What is the ideal age to buy a property?",
          link: "/guide/ideal-age-to-buy"
        },
        {
          text: "Is it safe to buy property around the festive season?",
          link: "/guide/festive-season-buying"
        }
      ],
      cardCount: 1
    },
    {
      title: "Where to Buy?",
      image: "/360img/IMG-20250920-WA0021.jpg",
      items: [
        {
          text: "City vs Suburb: Where to invest?",
          link: "/guide/city-vs-suburb"
        },
        {
          text: "Tier I vs Tier II cities: Where should you invest?",
          link: "/guide/tier-cities-investment"
        },
        {
          text: "Developed vs Developing localities: Meaning, pros and cons",
          link: "/guide/developed-vs-developing"
        },
        {
          text: "House hunting: Checklist to compare houses",
          link: "/guide/house-hunting-checklist"
        }
      ],
      cardCount: 0
    },
    {
      title: "How to Buy?",
      image: "/360img/IMG-20250920-WA0035.jpg",
      items: [
        {
          text: "Online and offline sources used in real estate purchase",
          link: "/guide/online-offline-sources"
        },
        {
          text: "Smart Guide to Choosing the Right Property Broker",
          link: "/guide/choosing-property-broker"
        },
        {
          text: "How to shortlist a safe builder?",
          link: "/guide/shortlist-safe-builder"
        },
        {
          text: "Important documents to check before buying a house",
          link: "/guide/important-documents"
        }
      ],
      cardCount: 3
    },
    {
      title: "Financials",
      image: "/360img/IMG-20250920-WA0035.jpg",
      items: [
        {
          text: "What is included in the total property cost in India?",
          link: "/guide/total-property-cost"
        },
        {
          text: "Types of property payment plans explained",
          link: "/guide/payment-plans"
        },
        {
          text: "Home insurance: Meaning, types, benefits and documents required",
          link: "/guide/home-insurance"
        },
        {
          text: "Affordability checklist: How to calculate a budget to buy a home",
          link: "/guide/affordability-checklist"
        }
      ],
      cardCount: 0
    }
  ];

  const trendingData = [
    {
      id: 1,
      title: "What are Tier I, II, III, IV cities in India?",
      description: "Classification of cities into Tier I, II, III, and IV helps in governance and planning. It allows policymakers, urban...",
      image: "/360img/IMG-20250920-WA0021.jpg",
      author: "Sakshi Chandola",
      role: "Research Analyst",
      date: "Sep 03, 2025",
      views: "575,004"
    },
    {
      id: 2,
      title: "Cost of constructing a house in India (2025) Per...",
      description: "With the government recently lowering GST rates on construction materials, the cost of building a house may witness a...",
      image: "/360img/IMG-20250920-WA0035.jpg",
      author: "Subhadra Bhadauria",
      role: "Editor",
      date: "Sep 04, 2025",
      views: "271,722"
    },
    {
      id: 3,
      title: "YEIDA Residential Plots Scheme: 2022 to 2025 key...",
      description: "Steady demand for affordable homes in the peripheries of Delhi NCR has been one of the reasons why YEIDA's affordable...",
      image: "/360img/IMG-20250920-WA0021.jpg",
      author: "Varsha Khandelwal",
      role: "Research Analyst",
      date: "Sep 24, 2025",
      views: "212,573"
    },
    {
      id: 4,
      title: "DDA Latest Housing Schemes 2025: Key Details and...",
      description: "DDA has rolled out a double update for homebuyers. On one hand, the recently launched Jan Sadharan Awaas Yojana...",
      image: "/360img/IMG-20250920-WA0035.jpg",
      author: "Varsha Khandelwal",
      role: "Research Analyst",
      date: "Sep 11, 2025",
      views: "133,745"
    },
    {
      id: 5,
      title: "Impact of Metro Expansion on Delhi NCR Real Estate",
      description: "The ongoing metro expansion projects across Delhi NCR are reshaping the real estate landscape with improved connectivity...",
      image: "/360img/IMG-20250920-WA0037.jpg",
      author: "Rahul Sharma",
      role: "Senior Analyst",
      date: "Sep 15, 2025",
      views: "98,234"
    },
    {
      id: 6,
      title: "Smart City Projects: Progress Report 2025",
      description: "A comprehensive analysis of the Smart City initiatives across India reveals significant progress in infrastructure development...",
      image: "/360img/IMG-20250920-WA0037.jpg",
      author: "Priya Verma",
      role: "Urban Planning Expert",
      date: "Sep 20, 2025",
      views: "87,129"
    },
    {
      id: 7,
      title: "Property Investment Trends in Tier 2 Cities",
      description: "Emerging trends in property investment across India's tier 2 cities show promising growth potential for real estate investors...",
      image: "/360img/IMG-20250920-WA0037.jpg",
      author: "Amit Patel",
      role: "Investment Analyst",
      date: "Sep 28, 2025",
      views: "76,543"
    }
  ];

  const newsData = [
    {
      title: "Unified RERA Portal: How does it benefit homebuyers?",
      description: "Now it's established that the Real Estate (Regulation and Development) Act, 2016, was introduced to tackle major issues like project delays in the real estate sector...",
      authors: [
        { name: "Nupur Tolia" },
        { name: "Sudeepa Bhattacharya" }
      ],
      date: "Sep 05, 2025"
    },
    {
      title: "Buying a 50 or 100 sq yd plot in Haryana? No stamp duty now",
      description: "As per the new directive by Haryana Chief Minister (CM) Nayab Saini, no stamp duty will be applicable on plots measuring up to 50 sq...",
      authors: [
        { name: "Nupur Tolia" }
      ],
      date: "Aug 28, 2025"
    },
    {
      title: "Demolition drive at Emaar Palm Hills, Sector 77, Gurgaon",
      description: "Terms damaging terms! A complaint at the CM Window (Jan Samvaad portal) does wonders...",
      authors: [
        { name: "Sudeepa Bhattacharya" }
      ],
      date: "Aug 20, 2025",
      role: "Research Analyst"
    },
    {
      title: "Women homebuyers in Uttar Pradesh to get 1% stamp duty relaxation",
      description: "Stamp duty is an upfront cost that needs to be paid during property registration, which is typically seven percent of the property value. This government...",
      authors: [
        { name: "Nupur Tolia" }
      ],
      date: "Jul 28, 2025"
    }
  ];
  const totalPages = Math.max(0, guideData.length - 2);
  const totalTrendingPages = Math.max(0, trendingData.length - 3);
  const totalNewsPages = Math.max(0, newsData.length - 3);
  const handlePrevPage = () => {
    setCurrentPage(prev => (prev > 0 ? prev - 1 : guideData.length - 3));
  };
  const handleNextPage = () => {
    setCurrentPage(prev => (prev < guideData.length - 3 ? prev + 1 : 0));
  };
  const handlePrevTrending = () => {
    setTrendingPage(prev => (prev > 0 ? prev - 1 : trendingData.length - 4));
  };
  const handleNextTrending = () => {
    setTrendingPage(prev => (prev < trendingData.length - 4 ? prev + 1 : 0));
  };
  const handlePrevNews = () => {
    setNewsPage(prev => (prev > 0 ? prev - 1 : newsData.length - 4));
  };
  const handleNextNews = () => {
    setNewsPage(prev => (prev < newsData.length - 4 ? prev + 1 : 0));
  };
  const visibleCards = guideData.slice(
    currentPage * cardsPerPage,
    (currentPage * cardsPerPage) + cardsPerPage
  );
  return (
    <div>
      <div className="min-h-[600px] h-[700px] relative py-4 px-2 sm:px-4 overflow-hidden">
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-gray-900 to-green-900 opacity-95"></div>
        
        {/* Animated background patterns */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-600/10 to-green-800/10 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full filter blur-3xl animate-bounce"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-400/20 rounded-full filter blur-3xl animate-pulse"></div>
        </div>
        
        {/* Enhanced Background Image */}
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: 'url(/city-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(3px)',
            opacity: '0.2'
          }}
        ></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-4 sm:mb-6">
            <div className="flex flex-col sm:flex-row justify-center items-center mb-3 space-y-2 sm:space-y-0">
              <div className="relative">
                <img src="/abc.png" alt="Logo" className="h-10 sm:h-12 animate-pulse" />
                <div className="absolute inset-0 bg-white/20 rounded-full filter blur-xl"></div>
              </div>
              <div className="sm:ml-4">
                <h1 className="text-2xl sm:text-2xl lg:text-3xl font-semibold mb-1 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent animate-fade-in">
                  BUYER GUIDE
                </h1>
               
              </div>
            </div>
            
            {/* New subtitle */}
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Your comprehensive guide to making informed property decisions with expert insights and practical tips
            </p>
          </div>
          {/* Enhanced Cards Slider */}
          <div className="relative group/slider">
            <div className="overflow-hidden px-1 sm:px-2">
              <div className="flex gap-2 sm:gap-4 transition-transform duration-700 ease-out" 
                style={{ 
                  transform: `translateX(-${currentPage * (window.innerWidth < 640 ? 300 : window.innerWidth < 1024 ? 320 : 340)}px)`,
                  width: 'fit-content'
                }}>
                {guideData.map((guide, index) => (
                  <div key={index} className="flex-shrink-0">
                    <GuideCard
                      title={guide.title}
                      items={guide.items}
                      cardCount={guide.cardCount}
                      image={guide.image}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Enhanced Navigation Buttons */}
            <button
              onClick={handlePrevPage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-6 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-300 z-10 border border-gray-200 group-hover/slider:scale-110"
              aria-label="Previous page"
            >
              <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            </button>
            <button
              onClick={handleNextPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-6 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-300 z-10 border border-gray-200 group-hover/slider:scale-110"
              aria-label="Next page"
            >
              <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            </button>
          </div>

          {/* Enhanced Page Indicators */}
          <div className="flex justify-center mt-3 sm:mt-4 space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentPage 
                    ? 'bg-gradient-to-r from-green-500 to-green-700 w-6 sm:w-8 shadow-lg' 
                    : 'bg-white/50 w-2 sm:w-3 hover:bg-white/80'
                }`}
                onClick={() => setCurrentPage(index)}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          {/* Enhanced CTA Button */}
          <div className="mt-4 sm:mt-6 text-center">
            <button className="bg-gradient-to-r from-green-600 via-green-700 to-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded-2xl font-bold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-green-500/30 backdrop-blur-sm relative overflow-hidden group">
              <span className="relative z-10">CLICK. PLAY. HUNT.</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Popular & Trending Section */}
      <div className="py-6 sm:py-8 px-2 sm:px-4 bg-gradient-to-br from-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-black to-green-600 bg-clip-text text-transparent">
              Popular & Trending
            </h2>
            <p className="text-gray-700 text-base max-w-2xl mx-auto">
              Stay updated with the latest insights and trending topics in real estate
            </p>
          </div>
          
          <div className="relative group/trending">
            <div className="relative overflow-hidden px-4 sm:px-8">
              <div 
                className="flex transition-transform duration-700 ease-out gap-4 sm:gap-6"
                style={{ 
                  transform: `translateX(-${trendingPage * (window.innerWidth < 640 ? 280 : window.innerWidth < 1024 ? 300 : 320)}px)`,
                  width: 'fit-content'
                }}
              >
                {trendingData.map((article) => (
                  <div
                    key={article.id} 
                    className="w-[280px] sm:w-[300px] lg:w-[320px] flex-shrink-0"
                  >
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-2 hover:scale-105 group relative">
                      {/* Enhanced image container */}
                      <div className="h-48 sm:h-52 overflow-hidden relative">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                          Trending
                        </div>
                      </div>
                      
                      {/* Enhanced content */}
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-2 line-clamp-2 text-black hover:text-green-600 transition-colors cursor-pointer group-hover:text-green-600">
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-700 mb-3 line-clamp-3 leading-relaxed">
                          {article.description}
                        </p>
                        
                        {/* Enhanced author section */}
                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-green-100">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-green-700 rounded-full flex items-center justify-center text-white font-bold text-xs">
                              {article.author.charAt(0)}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-black">{article.author}</p>
                              <p className="text-xs text-gray-600">{article.role}</p>
                            </div>
                          </div>
                          
                          {/* Enhanced stats */}
                          <div className="flex items-center space-x-3 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                              </svg>
                              <span className="font-medium">{article.views}</span>
                            </div>
                            <button className="p-1 hover:bg-green-50 rounded-full transition-colors">
                              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        
                        <div className="mt-2 text-xs text-gray-500">{article.date}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
           
            {/* Enhanced Navigation Arrows */}
            <button
              onClick={handlePrevTrending}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-20 border border-gray-200 group-hover/trending:opacity-100 opacity-0 sm:opacity-100 hover:scale-110"
              aria-label="Previous trending"
            >
              <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            </button>
            <button
              onClick={handleNextTrending} 
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-20 border border-gray-200 group-hover/trending:opacity-100 opacity-0 sm:opacity-100 hover:scale-110"
              aria-label="Next trending"
            >
              <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            </button>
          </div>
          
          {/* Enhanced Page Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {[...Array(totalTrendingPages)].map((_, index) => (
              <button
                key={index}
                className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                  index === trendingPage 
                    ? 'bg-gradient-to-r from-green-500 to-green-700 w-6 sm:w-8 shadow-lg' 
                    : 'bg-gray-300 w-2 sm:w-3 hover:bg-gray-400'
                }`}
                onClick={() => setTrendingPage(index)}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced News Flash Section */}
      <div className="py-6 sm:py-8 px-2 sm:px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4 sm:mb-6">
            <div className="flex items-center justify-center mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-black to-green-600 bg-clip-text text-transparent">
                News Flash
              </h2>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-2"></div>
            </div>
            <p className="text-gray-700 text-base max-w-2xl mx-auto">
              Breaking news and latest updates from the real estate world
            </p>
          </div>
          
          <div className="relative group/news">
            <div className="relative overflow-hidden px-4 sm:px-8">
              <div 
                className="flex transition-transform duration-700 ease-out gap-4 sm:gap-6"
                style={{ 
                  transform: `translateX(-${newsPage * (window.innerWidth < 640 ? 260 : window.innerWidth < 1024 ? 280 : 300)}px)`,
                  width: 'fit-content'
                }}
              >
                {newsData.map((news, index) => (
                  <div
                    key={index}
                    className="w-[260px] sm:w-[280px] lg:w-[300px] flex-shrink-0"
                  >
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-2 group relative overflow-hidden">
                      {/* News badge */}
                      <div className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-green-700 text-white px-3 py-1 rounded-bl-2xl text-xs font-bold">
                        LIVE
                      </div>
                      
                      <div className="p-4">
                        {/* Enhanced date */}
                        <div className="flex items-center mb-3">
                          <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                          <p className="text-xs text-gray-600 font-medium uppercase tracking-wide">{news.date}</p>
                        </div>
                        
                        {/* Enhanced title */}
                        <h3 className="text-lg font-bold text-black mb-2 line-clamp-2 hover:text-green-600 transition-colors cursor-pointer group-hover:text-green-600">
                          {news.title}
                        </h3>
                        
                        {/* Enhanced description */}
                        <p className="text-sm text-gray-700 line-clamp-4 mb-3 leading-relaxed">
                          {news.description}
                        </p>
                        
                        {/* Enhanced authors section */}
                        <div className="border-t border-green-100 pt-3">
                          <div className="flex flex-wrap gap-2 mb-2">
                            {news.authors.map((author, idx) => (
                              <span key={idx} className="bg-gradient-to-r from-green-50 to-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full border border-green-200">
                                {author.name}
                              </span>
                            ))}
                          </div>
                          {news.role && (
                            <p className="text-gray-600 text-xs font-medium">
                              {news.role}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Enhanced Navigation Buttons */}
            <button
              onClick={handlePrevNews}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-10 border border-gray-200 group-hover/news:opacity-100 opacity-0 sm:opacity-100 hover:scale-110"
              aria-label="Previous news"
            >
              <ChevronLeftIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
            </button>
            <button
              onClick={handleNextNews}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-10 border border-gray-200 group-hover/news:opacity-100 opacity-0 sm:opacity-100 hover:scale-110"
              aria-label="Next news"
            >
              <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
            </button>
          </div>
          
          {/* Enhanced Page Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {[...Array(totalNewsPages)].map((_, index) => (
              <button
                key={index}
                className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                  index === newsPage 
                    ? 'bg-gradient-to-r from-green-500 to-green-700 w-6 sm:w-8 shadow-lg' 
                    : 'bg-gray-300 w-2 sm:w-3 hover:bg-gray-400'
                }`}
                onClick={() => setNewsPage(index)}
                aria-label={`Go to news page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Buyer_Guide;