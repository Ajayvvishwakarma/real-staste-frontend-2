
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoanEligibilityCalculator from './LoanEligibilityCalculator';
import EMICalculator from './EMICalculator';
import AreaConverter from './AreaConverter';
import BudgetCalculator from './BudgetCalculator';
// Tool icons as SVG components - Exact design match
const BudgetCalculatorIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Calculator base */}
    <rect x="8" y="6" width="32" height="36" rx="4" fill="currentColor" opacity="0.1"/>
    <rect x="8" y="6" width="32" height="36" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    {/* Display */}
    <rect x="12" y="10" width="24" height="6" rx="2" fill="currentColor" opacity="0.2"/>
    {/* Calculator buttons */}
    <circle cx="16" cy="22" r="2" fill="currentColor"/>
    <circle cx="24" cy="22" r="2" fill="currentColor"/>
    <circle cx="32" cy="22" r="2" fill="currentColor"/>
    <circle cx="16" cy="28" r="2" fill="currentColor"/>
    <circle cx="24" cy="28" r="2" fill="currentColor"/>
    <circle cx="32" cy="28" r="2" fill="currentColor"/>
    <circle cx="16" cy="34" r="2" fill="currentColor"/>
    <circle cx="24" cy="34" r="2" fill="currentColor"/>
    <circle cx="32" cy="34" r="2" fill="currentColor"/>
    {/* Plus/minus symbols */}
    <path d="M14 22h4M16 20v4" stroke="white" strokeWidth="1"/>
    <path d="M22 22h4" stroke="white" strokeWidth="1"/>
  </svg>
);

const EMICalculatorIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Monitor/Screen */}
    <rect x="4" y="8" width="40" height="24" rx="3" fill="currentColor" opacity="0.1"/>
    <rect x="4" y="8" width="40" height="24" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
    {/* EMI text representation */}
    <rect x="8" y="14" width="8" height="3" rx="1" fill="currentColor"/>
    <rect x="20" y="14" width="8" height="3" rx="1" fill="currentColor"/>
    <rect x="32" y="14" width="8" height="3" rx="1" fill="currentColor"/>
    <rect x="8" y="20" width="12" height="3" rx="1" fill="currentColor" opacity="0.6"/>
    <rect x="24" y="20" width="16" height="3" rx="1" fill="currentColor" opacity="0.6"/>
    {/* Stand */}
    <path d="M18 32l-4 8h20l-4-8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="20" y="32" width="8" height="2" fill="currentColor"/>
  </svg>
);

const LoanEligibilityIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Circle background */}
    <circle cx="24" cy="24" r="20" fill="currentColor" opacity="0.1"/>
    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" fill="none"/>
    {/* Rupee symbol */}
    <path d="M16 16h12M16 20h8c2 0 4 1 4 3s-2 3-4 3h-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 26l8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Checkmark */}
    <path d="M30 18l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AreaConverterIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Conversion arrows and squares */}
    <rect x="6" y="6" width="14" height="14" rx="2" fill="currentColor" opacity="0.1"/>
    <rect x="6" y="6" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="28" y="28" width="14" height="14" rx="2" fill="currentColor" opacity="0.1"/>
    <rect x="28" y="28" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    {/* Conversion arrows */}
    <path d="M22 13h8l-2-2M22 13l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26 35h-8l2 2M26 35l-2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Area indicators */}
    <text x="13" y="15" fontSize="8" fill="currentColor" textAnchor="middle">m²</text>
    <text x="35" y="37" fontSize="8" fill="currentColor" textAnchor="middle">ft²</text>
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const cityCardData = {
  'New Delhi': [
    {
      title: 'Post Your Property Ads for Free',
      subtitle: 'Sell/Rent out your property in Delhi & Get unlimited responses',
      button: 'List Your Property',
      color: 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800',
      icon: '🏠',
      btnColor: 'bg-white text-blue-800',
      btnHover: 'hover:bg-blue-50',
      stats: '50K+ Properties Listed',
    },
    {
      title: '17504+ Top Property Dealers in Delhi',
      subtitle: 'Connect with genuine Real Estate Agents in Delhi',
      button: 'Explore Now',
      color: 'bg-gradient-to-br from-amber-500 via-orange-600 to-red-600',
      icon: '🤝',
      btnColor: 'bg-white text-orange-800',
      btnHover: 'hover:bg-orange-50',
      stats: '95% Success Rate',
    },
    {
      title: '31768+ Verified Property for Sale',
      subtitle: 'Find the best commercial or residential property deals in Delhi',
      button: 'Explore Now',
      color: 'bg-gradient-to-br from-cyan-500 via-teal-600 to-emerald-600',
      icon: '🏢',
      btnColor: 'bg-white text-teal-800',
      btnHover: 'hover:bg-teal-50',
      stats: '100% Verified',
    },
    {
      title: '21807+ Rented Property Available',
      subtitle: 'Exclusive Rental Deals in Delhi - From Flats to Offices!',
      button: 'Explore Now',
      color: 'bg-gradient-to-br from-rose-500 via-pink-600 to-purple-600',
      icon: '🔑',
      btnColor: 'bg-white text-rose-800',
      btnHover: 'hover:bg-rose-50',
      stats: 'Instant Booking',
    },
  ],
  'India': [
    {
      title: 'Post Your Property Ads for Free !!',
      subtitle: 'Sell/Rent out your property and Get unlimited responses',
      button: 'List Your Property',
      color: 'bg-gradient-to-br from-emerald-600 via-green-700 to-green-800',
      icon: '🏡',
      btnColor: 'bg-white text-emerald-800',
      btnHover: 'hover:bg-emerald-50',
      stats: '1M+ Properties Listed',
    },
    {
      title: 'Top Real Estate Agents & Property Dealers',
      subtitle: 'Connect with genuine Real Estate Agents across India',
      button: 'Explore Now',
      color: 'bg-gradient-to-br from-gray-800 via-slate-800 to-black',
      icon: '👨‍💼',
      btnColor: 'bg-white text-gray-800',
      btnHover: 'hover:bg-gray-50',
      stats: '10K+ Verified Agents',
    },
    {
      title: "Explore Top Residential Cities List",
      subtitle: 'Find the best commercial or residential property deals',
      button: 'Explore Now',
      color: 'bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700',
      icon: '🌆',
      btnColor: 'bg-white text-green-800',
      btnHover: 'hover:bg-green-50',
      stats: '500+ Cities Covered',
    },
    {
      title: 'Helping you find your dream Property',
      subtitle: 'Exclusive Rental Deals - From Flats to Offices!',
      button: 'Post Requirement',
      color: 'bg-gradient-to-br from-slate-700 via-gray-800 to-zinc-900',
      icon: '✨',
      btnColor: 'bg-white text-slate-800',
      btnHover: 'hover:bg-slate-50',
      stats: '24/7 Support',
    },
  ],
};

const HeroCard_Section = ({ selectedCity = "India" }) => {
  const cards = cityCardData['India'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [toolsCurrentIndex, setToolsCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isLoanCalculatorOpen, setIsLoanCalculatorOpen] = useState(false);
  const [isEMICalculatorOpen, setIsEMICalculatorOpen] = useState(false);
  const [isAreaConverterOpen, setIsAreaConverterOpen] = useState(false);
  const [isBudgetCalculatorOpen, setIsBudgetCalculatorOpen] = useState(false);

  // Check screen sizes for better responsiveness with debouncing
  useEffect(() => {
    let timeoutId = null;
    
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768); // Increased mobile breakpoint for better UX
      setIsTablet(width >= 768 && width < 1024);
    };
    
    const debouncedCheckScreenSize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkScreenSize, 150);
    };
    
    checkScreenSize();
    window.addEventListener('resize', debouncedCheckScreenSize);
    return () => {
      window.removeEventListener('resize', debouncedCheckScreenSize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Enhanced touch handlers for better swipe functionality
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 30; // Reduced threshold for better sensitivity
    const isRightSwipe = distance < -30;
    
    // Prevent accidental swipes on very small movements
    if (Math.abs(distance) < 15) return;
    
    if (isLeftSwipe) {
      scrollRight();
    }
    if (isRightSwipe) {
      scrollLeft();
    }
  };
    const scrollCards = [
    {
      title: "Buy a Home",
      description: "Find and buy your dream Home with our expert guidance",
      icon: "🏠",
      image: "/properties_img/property-1.jpg",
      fallbackGradient: "from-green-400 to-emerald-600",
      iconBg: "from-green-600 to-emerald-800"
    },
    {
      title: "Rent a Home",
      description: "Discover rental properties that suit your lifestyle",
      icon: "🔑",
      image: "/properties_img/property-2.jpg",
      fallbackGradient: "from-gray-800 to-black",
      iconBg: "from-gray-700 to-gray-900"
    },
    {
      title: "Sell a Home",
      description: "Get the best value for your property with your assistance",
      icon: "💰",
      image: "/properties_img/property-3.jpg",
      fallbackGradient: "from-green-500 to-green-700",
      iconBg: "from-green-600 to-green-800"
    },
    {
      title: "PG and co-living",
      description: "Find comfortable PG and co-living spaces for students and professionals",
      icon: "🏢",
      image: "/properties_img/property-4.jpg",
      fallbackGradient: "from-gray-600 to-gray-800",
      iconBg: "from-gray-700 to-black"
    },
    {
      title: "Buying commercial spaces",
      description: "Invest in commercial properties for your business needs",
      icon: "🏪",
      image: "/properties_img/property-5.jpg",
      fallbackGradient: "from-emerald-400 to-green-600",
      iconBg: "from-emerald-600 to-green-800"
    },
    {
      title: "Lease commercial spaces",
      description: "Find the perfect commercial space for rent or lease",
      icon: "🏬",
      image: "/properties_img/property-6.jpg",
      fallbackGradient: "from-black to-gray-800",
      iconBg: "from-gray-800 to-black"
    },
    {
      title: "Price trends",
      description: "Stay updated with the latest real estate market trends",
      icon: "📈",
      image: "/properties_img/property7.png",
      fallbackGradient: "from-green-600 to-emerald-700",
      iconBg: "from-green-700 to-emerald-800"
    },
    {
      title: "Help",
      description: "Get expert assistance for all your real estate needs",
      icon: "🤝",
      image: "/properties_img/property8.png",
      fallbackGradient: "from-gray-700 to-black",
      iconBg: "from-gray-800 to-black"
    },
    {
      title: "Property Management",
      description: "Professional property management services for property owners",
      icon: "🏘️",
      image: "/properties_img/property9.png",
      fallbackGradient: "from-emerald-500 to-green-700",
      iconBg: "from-emerald-600 to-green-800"
    },
    {
      title: "Investment Opportunities",
      description: "Explore lucrative investment opportunities in real estate",
      icon: "💼",
      image: "/properties_img/property10.png",
      fallbackGradient: "from-gray-800 to-black",
      iconBg: "from-black to-gray-900"
    }
  ];

  const tools = [
    {
      title: "Budget Calculator",
      description: "Check your affordability range for buying Home",
      icon: BudgetCalculatorIcon,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-100",
      hoverBg: "hover:bg-orange-100"
    },
    {
      title: "EMI Calculator", 
      description: "Calculate your Home loan EMI for your Home",
      icon: EMICalculatorIcon,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600", 
      borderColor: "border-orange-100",
      hoverBg: "hover:bg-orange-100"
    },
    {
      title: "Loan Eligibility",
      description: "See what you can borrow for your Home",
      icon: LoanEligibilityIcon,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-100", 
      hoverBg: "hover:bg-orange-100"
    },
    {
      title: "Area Converter",
      description: "Convert one area into any other easily",
      icon: AreaConverterIcon,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-100",
      hoverBg: "hover:bg-orange-100"
    }
  ];

  // Dynamic cards per view based on screen size with more granular breakpoints
  const getCardsPerView = () => {
    const width = window.innerWidth;
    if (width < 480) return 1; // Extra small mobile
    if (width < 640) return 1; // Small mobile
    if (width < 768) return 2; // Large mobile/small tablet
    if (width < 1024) return 2; // Tablet
    if (width < 1280) return 3; // Small laptop
    if (width < 1536) return 4; // Large laptop/small desktop
    return 4; // Large desktop
  };
  const cardsPerView = getCardsPerView();
  const maxIndex = Math.max(0, scrollCards.length - cardsPerView);
  // Tools slider functions
  const scrollToolsLeft = () => {
    setToolsCurrentIndex(prev => prev === 0 ? tools.length - 1 : prev - 1);
  };

  const scrollToolsRight = () => {
    setToolsCurrentIndex(prev => prev === tools.length - 1 ? 0 : prev + 1);
  };
  const scrollLeft = () => {
    setCurrentIndex(prev => {
      if (prev === 0) {
        // Loop to end when at beginning
        return isMobile ? scrollCards.length - 1 : maxIndex;
      }
      return prev - 1;
    });
  };

  const scrollRight = () => {
    setCurrentIndex(prev => {
      if (isMobile) {
        // Mobile: one card at a time with looping
        return prev === scrollCards.length - 1 ? 0 : prev + 1;
      } else {
        // Desktop/Tablet: slide by cardsPerView with looping
        return prev >= maxIndex ? 0 : prev + 1;
      }
    });
  };
  
  // Handle tool click
  const handleToolClick = (toolTitle) => {
    if (toolTitle === "Loan Eligibility") {
      setIsLoanCalculatorOpen(true);
    } else if (toolTitle === "EMI Calculator") {
      setIsEMICalculatorOpen(true);
    } else if (toolTitle === "Area Converter") {
      setIsAreaConverterOpen(true);
    } else if (toolTitle === "Budget Calculator") {
      setIsBudgetCalculatorOpen(true);
    }
    // Add other tool handlers here in the future
  };
  
  return (
    <div className="w-full bg-gray-200 pt-25 mb-10">
  <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
   {/* Cards Section - Fully Responsive */}
<div className="w-full flex flex-col items-center relative z-40 overflow-hidden">
  {/* Main Content Container */}
  <div className="w-full max-w-7xl mx-auto px-2 sm:px-3 md:px-4">
    {/* Section Header */}
    <div className="text-center">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold pt-2 sm:pt-3 md:pt-4 text-black leading-tight">
        Explore Real Estate Options
      </h2>
      <p className="text-xs sm:text-sm md:text-base pt-1 sm:pt-2 pb-2 sm:pb-3 md:pb-4 text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
        Find the perfect property solution for your needs - from buying and selling to renting and investing
      </p>
    </div>
    {/* Horizontal Scroll Cards Section */}
    <div className="relative pb-4 sm:pb-6 md:pb-8 mb-2 sm:mb-4 md:mb-6">
      {/* Left Scroll Button */}
      <button
        onClick={scrollLeft}
        className="hidden sm:flex absolute left-1 sm:left-2 md:left-3 lg:left-4 top-1/2 -translate-y-1/2 z-50 
        w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full bg-white shadow-lg border border-green-400 
        items-center justify-center transition-all duration-300 hover:bg-green-50 hover:border-green-600 hover:scale-110 active:scale-95"
      >
        <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      {/* Right Scroll Button */}
      <button
        onClick={scrollRight}
        className="hidden sm:flex absolute right-1 sm:right-2 md:right-3 lg:right-4 top-1/2 -translate-y-1/2 z-50 
        w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full bg-white shadow-lg border border-green-400 
        items-center justify-center transition-all duration-300 hover:bg-green-50 hover:border-green-600 hover:scale-110 active:scale-95"
      >
        <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Cards Container */}
      <div className="mx-2 sm:mx-12 md:mx-16 lg:mx-20 xl:mx-24 overflow-hidden">
        <div
          className={`flex transition-transform duration-500 ease-in-out items-stretch ${
            isMobile ? 'gap-1 overflow-x-auto scrollbar-hide px-1' : 'gap-3 md:gap-4 lg:gap-5 xl:gap-6'
          }`}
          style={{
            transform: isMobile 
              ? 'translateX(0%)' 
              : `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            scrollBehavior: isMobile ? 'smooth' : 'auto',
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {scrollCards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl 
              overflow-hidden transition-all duration-500 cursor-pointer relative group border border-gray-200 hover:border-green-500 
              transform hover:-translate-y-3 hover:scale-105"
              style={{
                width: isMobile ? '260px' : `calc(${100 / cardsPerView}% - 16px)`,
                minHeight: isMobile ? '220px' : '280px',
              }}
            >
              {/* Image Section */}
              <div className="flex flex-col h-full">
                {/* Image Section */}
                <div className="h-24 sm:h-36 md:h-40 lg:h-44 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Card Content */}
                <div className="flex-1 px-3 pt-1.5 pb-1">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 leading-tight group-hover:text-green-600 transition-colors duration-300 mb-1 sm:mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {card.description}
                  </p>
                </div>
                {/* Button Section - Fixed at bottom */}
                <div className="p-3 pt-1">
                  <button className="w-full bg-gradient-to-r from-green-600 to-black hover:from-black hover:to-green-600 
                  text-white px-3 py-2 sm:px-4 sm:py-2.5 md:py-3 rounded-lg font-semibold transition-all duration-500 shadow-md hover:shadow-lg hover:scale-105 
                  text-xs sm:text-sm md:text-base">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Scroll Hint */}
      <div className="flex justify-center text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3 px-4">
        <span className="flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-200 shadow-sm">
          <span className="text-base">👈</span> 
          <span className="hidden sm:inline mx-3 font-medium">Swipe or scroll to explore more options</span> 
          <span className="sm:hidden mx-3 font-medium">Swipe to explore</span> 
          <span className="text-base">👉</span>
        </span>
      </div>
    </div>
  </div>
</div>
      {/* Tools Section - Fully Responsive */}
      <div className="w-full relative pb-32 sm:pb-36 md:pb-10 lg:pb-10 xl:pb-20">
        {/* Blue Background Section - Responsive */}
        <div className="max-w-7xl mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-auto bg-[#e0f2fe] pt-3 sm:pt-4 md:pt-6 lg:pt-8 rounded-lg sm:rounded-xl md:rounded-2xl pb-24 sm:pb-28 md:pb-32 lg:pb-36 xl:pb-40">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 md:gap-8">
              {/* Left side - Icon and text */}
              <div className="flex items-center w-full sm:w-auto">
                {/* Blue bulb icon with lightning */}
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
              
              {/* Right side - View all insights button */}
              <button className="flex items-center px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-3 border-2 border-green-500 text-green-700 rounded-lg hover:bg-green-50 hover:border-green-600 transition-all duration-300 bg-white shadow-md text-xs sm:text-sm md:text-base font-semibold hover:scale-105 flex-shrink-0 w-full sm:w-auto justify-center sm:justify-start">
                <span className="mr-2 sm:mr-3">View all Insights</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Overlapping Cards Grid - Tools Section - Fully Responsive */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12 sm:-mt-14 md:-mt-16 lg:-mt-18 xl:-mt-20 w-full max-w-7xl px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
          {/* Responsive Tools Layout */}
          <div className="relative">
            {/* Mobile (< 640px) - Horizontal Scroll */}
            <div className="block sm:hidden">
              <div className="overflow-x-auto scrollbar-hide px-1">
                <div 
                  className="flex gap-3 pb-4 mb-8"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {tools.map((tool, index) => {
                    const IconComponent = tool.icon;
                    return (
                      <div
                        key={index}
                        className="flex-shrink-0 w-72"
                      >
                        <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100 hover:border-green-400 h-full active:scale-[0.98]"
                             onClick={() => handleToolClick(tool.title)}>
                          {/* Icon */}
                          <div className="mb-4 flex justify-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-black rounded-xl flex items-center justify-center text-white group-hover:scale-105 transition-all duration-300 shadow-md">
                              <IconComponent />
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="text-center">
                            <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors leading-tight">
                              {tool.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                              {tool.description}
                            </p>
                          </div>

                          {/* Learn more button */}
                          <div className="flex justify-center">
                            <button className="w-full bg-gradient-to-r from-green-600 to-black hover:from-black hover:to-green-600 text-white px-3 py-2 rounded-lg font-medium transition-all duration-300 text-sm shadow-sm hover:shadow-md">
                              Learn more
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Mobile Scroll Hint */}
              <div className="flex justify-center text-xs text-gray-500 mt-3">
                <span className="flex items-center bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
                  <span className="text-sm">👈</span> 
                  <span className="mx-2 font-medium">Swipe for more tools</span> 
                  <span className="text-sm">👉</span>
                </span>
              </div>
            </div>

            {/* Small Tablet (640px - 768px) - 2 Column Grid */}
            <div className="hidden sm:block md:hidden">
              <div className="grid grid-cols-2 gap-4 px-4">
                {tools.map((tool, index) => {
                  const IconComponent = tool.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100 hover:border-green-400 transform hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]"
                      onClick={() => handleToolClick(tool.title)}
                    >
                      {/* Icon */}
                      <div className="mb-4 flex justify-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-black rounded-xl flex items-center justify-center text-white group-hover:scale-105 transition-all duration-300 shadow-md">
                          <IconComponent />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="text-center">
                        <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors leading-tight">
                          {tool.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {tool.description}
                        </p>
                      </div>

                      {/* Learn more button */}
                      <div className="flex justify-center">
                        <button className="w-full bg-gradient-to-r from-green-600 to-black hover:from-black hover:to-green-600 text-white px-3 py-2 rounded-lg font-medium transition-all duration-300 text-sm shadow-sm hover:shadow-md">
                          Learn more
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Medium Tablet (768px - 1024px) - 2 Column Grid with More Space */}
            <div className="hidden md:block lg:hidden">
              <div className="grid grid-cols-2 gap-5 px-6">
                {tools.map((tool, index) => {
                  const IconComponent = tool.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100 hover:border-green-400 transform hover:-translate-y-2 hover:scale-[1.02] active:scale-[0.98]"
                      onClick={() => handleToolClick(tool.title)}
                    >
                      {/* Icon */}
                      <div className="mb-4 flex justify-center">
                        <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-black rounded-xl flex items-center justify-center text-white group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                          <IconComponent />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="text-center">
                        <h3 className="text-base font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors leading-tight">
                          {tool.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {tool.description}
                        </p>
                      </div>

                      {/* Learn more button */}
                      <div className="flex justify-center">
                        <button className="w-full bg-gradient-to-r from-green-600 to-black hover:from-black hover:to-green-600 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm shadow-md hover:shadow-lg">
                          Learn more
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Desktop & Large (1024px+) - 4 Column Grid */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-4 gap-4 lg:gap-5 xl:gap-6 px-2 lg:px-4 xl:px-6">
                {tools.map((tool, index) => {
                  const IconComponent = tool.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 lg:p-5 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100 hover:border-green-400 transform hover:-translate-y-2 hover:scale-[1.03] active:scale-[0.97]"
                      onClick={() => handleToolClick(tool.title)}
                    >
                      {/* Icon */}
                      <div className="mb-4 flex justify-center">
                        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-green-600 to-black rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                          <IconComponent />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="text-center">
                        <h3 className="text-base font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors leading-tight">
                          {tool.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {tool.description}
                        </p>
                      </div>

                      {/* Learn more button */}
                      <div className="flex justify-center">
                        <button className="w-full bg-gradient-to-r from-green-600 to-black hover:from-black hover:to-green-600 text-white px-3 py-2 lg:px-4 lg:py-2.5 rounded-lg font-medium transition-all duration-300 text-sm shadow-md hover:shadow-lg">
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

        {/* Spacer for overlapping cards - Responsive */}
        <div className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36"></div>
      </div>

      {/* Loan Eligibility Calculator Popup */}
      <LoanEligibilityCalculator 
        isOpen={isLoanCalculatorOpen}
        onClose={() => setIsLoanCalculatorOpen(false)}
      />

      {/* EMI Calculator Popup */}
      <EMICalculator 
        isOpen={isEMICalculatorOpen}
        onClose={() => setIsEMICalculatorOpen(false)}
      />

      {/* Area Converter Popup */}
      <AreaConverter 
        isOpen={isAreaConverterOpen}
        onClose={() => setIsAreaConverterOpen(false)}
      />

      {/* Budget Calculator Popup */}
      <BudgetCalculator 
        isOpen={isBudgetCalculatorOpen}
        onClose={() => setIsBudgetCalculatorOpen(false)}
      />
    </div>
  );
};

export default HeroCard_Section;