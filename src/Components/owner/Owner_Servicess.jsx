// ...existing code...
import React, { useState } from "react";
import { Check, Phone } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";


import {
  CheckIcon,
  UserCircleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const PACKAGES = [
  {
    id: "advanced",
    title: "Advanced",
    tag: "Self service",
    highlight: "Upto 5 times more responses",
    accent: "blue",
    badge: null,
    features: ["Video Listings: Powered by AI", "Preview"],
    prices: [
      { months: "1 Month", total: 1439, perMonth: 1439 },
      { months: "2 Months", total: 2039, perMonth: 1019 },
      { months: "3 Months", total: 2398, perMonth: 799 },
    ],
  },
  {
    id: "advancedPlus",
    title: "Advanced Plus",
    tag: "Self service",
    highlight: "Upto 7 times more responses <br/> + Social media ads",
    accent: "purple",
    badge: "Most Bought",
    features: ["Video Listings: Powered by AI", "7500+ Google & Facebook Ads"],
    prices: [{ months: "4 Months", total: 6901, perMonth: 1725 }],
  },
  {
    id: "assistPlus",
    title: "Assist Plus",
    tag: "Assisted",
    highlight: "Relationship manager + upto 8 times more responses",
    accent: "orange",
    badge: null,
    features: [
      "Video Listings: Powered by AI",
      "Filtered Genuine Buyers",
      "15,000+ Google & Facebook ads",
    ],
    prices: [
      { months: "3 Months", total: 23107, perMonth: 7702 },
      { months: "6 Months", total: 32349, perMonth: 5391 },
    ],
  },
];

const accentColorClasses = {
  blue: {
    bg: "bg-gradient-to-b from-blue-50 to-white",
    text: "text-blue-700",
    badgeBg: "bg-blue-600",
  },
  purple: {
    bg: "bg-gradient-to-b from-indigo-50 to-white",
    text: "text-indigo-700",
    badgeBg: "bg-indigo-600",
  },
  orange: {
    bg: "bg-gradient-to-b from-amber-50 to-white",
    text: "text-amber-700",
    badgeBg: "bg-amber-600",
  },
};

const rupee = (n) => `₹${n.toLocaleString("en-IN")}`;

export default function PricingAndBenefits() {
  // FAQ data
  const faqs = [
    {
      q: "Why should I buy a paid owner package?",
      a: "Paid packages help you get more visibility, reach more potential buyers, and close deals faster. They also unlock premium listing features.",
    },
    {
      q: "What will the Relationship Manager do?",
      a: "A Relationship Manager will guide you through the process, provide updates, and help resolve any queries while managing your property listing.",
    },
    {
      q: "What is Digital Marketing Campaign for Owners?",
      a: "Our Digital Marketing Campaign includes targeted promotions across online platforms, ensuring your property gets maximum reach and genuine enquiries.",
    },
    {
      q: "Are there any hidden charges in Paid Owner Packages?",
      a: "No, there are no hidden charges. All costs are transparently shared with you upfront when you purchase the package.",
    },
  ];
  const initialSelected = PACKAGES.reduce((acc, pkg) => {
    acc[pkg.id] = 0;
    return acc;
  }, {});
  const [selected, setSelected] = useState(initialSelected);
   const [openIndex, setOpenIndex] = useState(null);

  // Testimonials data
  const testimonials = [
    {
      name: "Som",
      role: "Owner, Secunderabad",
      text: "My experience with 99 acres turned out to be very smooth and satisfying. Great support throughout!",
      img: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "Suman Sharma",
      role: "Owner, Sector 37",
      text: "I put my property on 99 Acres for sale and was flooded with genuine calls. The deal closed quickly!",
      img: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      name: "Bhavani Korvi",
      role: "Owner, Karnamgudem",
      text: "I used the platform for selling my property. They helped me connect with genuine buyers easily.",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Rohit Singh",
      role: "Owner, Pune",
      text: "Posting my property here was seamless. Got great responses and successfully sold without hassle.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Anita Desai",
      role: "Owner, Mumbai",
      text: "The Relationship Manager was extremely helpful throughout the listing and sales process. Excellent support!",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // Hide arrows on mobile
    centerMode: false,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1200,
        settings: { 
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true
        },
      },
      {
        breakpoint: 1024,
        settings: { 
          slidesToShow: 1, // Changed from 2 to 1 for tablet
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: '60px'
        },
      },
      {
        breakpoint: 768,
        settings: { 
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px',
          arrows: false
        },
      },
      {
        breakpoint: 480,
        settings: { 
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px',
          arrows: false
        },
      },
    ],
  };

  return (
     <div className="bg-gradient-to-br from-green-200 via-white to-green-200 min-h-screen">
      {/* Header Section */}
<section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-6 sm:py-8">
  {/* Header */}
  <header className="text-center">
    <h2 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black leading-tight">
      <span className="bg-gradient-to-r from-green-500 via-black to-green-500 bg-clip-text text-transparent">
        Attract buyers fast.
      </span>
      <br />
      <span className="block text-green-500 mt-1 sm:mt-2">Sell your property faster.</span>
    </h2>
    <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-black font-medium px-2">
      Choose a plan that best fits your listing goals.{" "}
      <span className="text-blue-500 block sm:inline mt-1 sm:mt-0">(Tap on price boxes to select)</span>
    </p>
  </header>

  {/* Cards Section */}
  <div className="mt-6 sm:mt-8">
    <div className="flex flex-row gap-2 sm:gap-3 lg:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2 sm:px-0" style={{ scrollSnapType: 'x mandatory' }}>
      {PACKAGES.map((pkg, idx) => {
        const selIdx = selected[pkg.id] ?? 0;
        // Card color and accent
        let cardBg = "bg-blue-50";
        let accentText = "text-blue-600";
        let borderColor = "border-blue-200";
        let badge = null;
        let highlight = null;
        let tagText = pkg.tag;
        let tagType = "Self service";
        let showIcons = false;
        let showManager = false;
        if (pkg.id === "advancedPlus") {
          cardBg = "bg-indigo-50";
          accentText = "text-purple-700";
          borderColor = "border-indigo-200";
          badge = pkg.badge;
          highlight = <span className="text-purple-700 font-bold">Upto 7 times more responses</span>;
          tagType = "Self service";
          showIcons = true;
        } else if (pkg.id === "assistPlus") {
          cardBg = "bg-orange-50";
          accentText = "text-orange-700";
          borderColor = "border-orange-200";
          highlight = <span className="text-orange-700 font-bold">Relationship manager</span>;
          tagType = "Assisted";
          showManager = true;
        } else {
          highlight = <span className="text-blue-600 font-bold">Upto 5 times more responses</span>;
        }
        return (
          <article
            key={pkg.id}
            className={`min-w-[260px] sm:min-w-[280px] md:min-w-[320px] max-w-[280px] sm:max-w-[340px] md:max-w-[370px] w-full flex-shrink-0 rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-lg border ${borderColor} ${cardBg} transition-all duration-300 hover:scale-[1.02] flex flex-col h-auto sm:h-[450px] md:h-[480px]`}
            style={{ position: 'relative', scrollSnapAlign: 'start' }}
          >
            {/* Badge */}
            {badge && (
              <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-yellow-100 text-yellow-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold flex items-center gap-1 shadow z-10">
                <span role="img" aria-label="fire">🔥</span> {badge}
              </div>
            )}
            <div className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 flex flex-col h-full">
              {/* Title + Tag */}
              <div className="flex flex-row items-center justify-between border-b border-gray-200 pb-2 mb-2 sm:mb-3 gap-1">
                <h3 className="font-extrabold text-sm sm:text-base md:text-lg lg:text-xl text-slate-900 truncate">{pkg.title}</h3>
                <span className="text-[9px] sm:text-[10px] md:text-xs text-slate-700 whitespace-nowrap">{tagType}</span>
                {showManager && (
                  <span className="ml-1 sm:ml-2"><img src="/image copy 9.png" alt="Manager" className="inline-block w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 rounded-full border-2 border-orange-200" /></span>
                )}
              </div>
              {/* Highlighted Benefit */}
              <div className="mb-2 sm:mb-3">
                <div className="text-[10px] sm:text-xs md:text-sm lg:text-base">
                  {highlight}
                  {pkg.id === "advancedPlus" && (
                    <span className="text-black font-bold"> + Social media ads</span>
                  )}
                  {pkg.id === "assistPlus" && (
                    <span className="text-black font-bold"> + upto 8 times more responses</span>
                  )}
                </div>
              </div>
              {/* Features */}
              <ul className="space-y-1 sm:space-y-1.5 text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-black mb-3 sm:mb-4 flex-1">
                {pkg.features.map((f, fidx) => (
                  <li key={fidx} className="flex items-start gap-1 sm:gap-2">
                    <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="leading-tight">{f}</span>
                    {pkg.id === "advancedPlus" && fidx === 1 && showIcons && (
                      <span className="ml-1 sm:ml-2 flex items-center gap-1 sm:gap-2">
                        <FaGoogle className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                        <FaFacebookF className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              {/* Prices */}
              <div className="mt-2 sm:mt-3">
                <div className={`grid gap-1 sm:gap-2 ${pkg.prices.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                  {pkg.prices.map((opt, i) => {
                    const isSelected = selIdx === i;
                    return (
                      <label
                        key={i}
                        onClick={() => setSelected((prev) => ({ ...prev, [pkg.id]: i }))}
                        className={`cursor-pointer rounded-lg sm:rounded-xl border-2 p-1.5 sm:p-2 md:p-3 flex flex-col transition-all duration-150 hover:shadow-md ${isSelected ? 'border-green-400 shadow-md bg-green-50' : 'border-gray-200 hover:border-green-300'} bg-white`}
                      >
                        <input
                          type="radio"
                          name={`${pkg.id}-price`}
                          checked={isSelected}
                          readOnly
                          className="sr-only"
                        />
                        <div className="font-semibold text-[10px] sm:text-xs md:text-sm text-slate-900">{opt.months}</div>
                        <div className="text-xs sm:text-sm md:text-base font-bold text-green-600">{rupee(opt.total)}</div>
                        <div className="text-[9px] sm:text-[10px] md:text-xs text-orange-600">{opt.perMonth ? `${rupee(opt.perMonth)}/month` : ""}</div>
                      </label>
                    );
                  })}
                </div>
              </div>
              {/* All Benefits Link */}
              <div className="w-full flex justify-center items-center mt-3 sm:mt-4 mb-0 sm:mb-1">
                <span className="font-semibold text-gray-400 text-[9px] sm:text-[10px] md:text-xs lg:text-sm flex items-center gap-1">
                  ALL BENEFITS
                  <svg width="12" height="12" className="sm:w-3 sm:h-3 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        );
      })}
    </div>
    {/* Responsive styles for mobile scroll */}
    <style>{`
      @media (max-width: 640px) {
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      }
      @media (max-width: 480px) {
        article { min-width: 75vw !important; max-width: 80vw !important; }
      }
      @media (max-width: 360px) {
        article { min-width: 85vw !important; max-width: 90vw !important; }
      }
    `}</style>
  </div>

  {/* Help Section */}
  <div className="mt-6 sm:mt-8 lg:mt-10 px-4 py-4 sm:py-6 bg-white rounded-lg shadow-sm">
    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center text-xs sm:text-sm md:text-base lg:text-lg text-black">
      <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-400 animate-bounce" />
      <span className="font-medium">Need help deciding? Contact our expert on</span>
      <a href="tel:18004199099" className="text-green-700 font-bold text-sm sm:text-base md:text-lg lg:text-xl hover:text-green-800 transition-colors duration-200">
        1800 41 99099
      </a>
      <span className="text-gray-600 text-xs sm:text-sm">(Toll Free IND)</span>
    </div>
  </div>
</section>
      {/* Benefits of Upgrade */}
 <section className="relative max-w-7xl xl:mb-8 rounded mx-auto bg-gradient-to-br from-green-50 via-white to-green-50 py-6 sm:py-8 lg:py-12">
  <div className="px-4 sm:px-6 lg:px-8">
    {/* Title */}
    <div className="flex flex-col items-center mb-6 sm:mb-8 lg:mb-10">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 mb-3 tracking-tight text-center">
        Benefits of Upgrade
        <span className="block w-24 sm:w-32 h-1 bg-green-400 rounded-full mx-auto mt-2"></span>
      </h2>
    </div>

    {/* Main Content */}
    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12">
      
      {/* Mobile/Phone Section */}
      <div className="flex-1 max-w-lg order-2 lg:order-1">
        <div className="relative flex justify-center">
          <div className="w-40 sm:w-48 md:w-56 lg:w-64">
            <img
              src="/owner.png"
              alt="Mobile preview"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
          {/* Video Overlay on Phone */}
          <div className="absolute top-3 sm:top-4 left-1/2 transform -translate-x-1/2 w-32 h-24 sm:w-40 sm:h-30 md:w-44 md:h-32 lg:w-48 lg:h-36 rounded-lg overflow-hidden shadow-xl">
            <video
              src="/7578546-uhd_3840_2160_30fps.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1 max-w-lg text-center lg:text-left order-1 lg:order-2">
        <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-500 mb-2 sm:mb-3">
          Videos
        </p>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4 sm:mb-6">
          Attract buyers.
          <br />
          <span className="block text-green-600">Easily.</span>
        </h3>
        
        {/* Desktop & Mobile Laptop Image */}
        <div className="mt-4 sm:mt-6">
          <div className="relative max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0">
            <img
              src="/owner1.png"
              alt="Laptop preview"
              className="w-full h-auto rounded-xl sm:rounded-2xl shadow-xl"
            />
            {/* Laptop Video Overlay */}
            <div className="absolute top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4 w-32 h-20 sm:w-40 sm:h-24 lg:w-48 lg:h-32 rounded-md sm:rounded-lg shadow-xl overflow-hidden">
              <video
                src="/7578544-uhd_3840_2160_30fps.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Relationship Manager */}
  <section className="bg-gradient-to-b from-white via-green-50/30 to-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black mb-3 sm:mb-4">
                Relationship Manager
                <br />
                <span className="text-slate-900">
                  Your time.
                  <br />
                  Our priority.
                </span>
              </h2>
              <p className="text-black text-sm sm:text-base mb-4 sm:mb-6">
                A relationship manager knows your locality the most. They help you,
              </p>
              <ul className="space-y-2 sm:space-y-3 text-black text-sm sm:text-base mb-6 sm:mb-8">
                <li className="flex items-start gap-2 justify-center lg:justify-start">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" /> 
                  <span>Understand your requirements</span>
                </li>
                <li className="flex items-start gap-2 justify-center lg:justify-start">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" /> 
                  <span>Filter genuine buyers</span>
                </li>
                <li className="flex items-start gap-2 justify-center lg:justify-start">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" /> 
                  <span>Give locality insights</span>
                </li>
              </ul>
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                Get a Free 10-min callback
              </button>
            </div>

            {/* Right Content - Manager Image */}
            <div className="flex-1 flex justify-center relative order-1 lg:order-2 max-w-sm sm:max-w-md lg:max-w-lg">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                {/* Main Manager Image */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-green-50 to-white flex items-center justify-center shadow-lg overflow-hidden">
                  <img
                    src="/image copy 9.png"
                    alt="Manager"
                    className="rounded-full w-full h-full object-cover border-4 border-green-200 shadow-xl"
                  />
                </div>
                
                {/* Call Icon Circle */}
                <div className="absolute -left-8 sm:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-green-100">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-green-600" />
                </div>
                
                {/* Help Text Circle */}
                <div className="absolute -right-4 sm:right-0 lg:right-4 bottom-4 sm:bottom-6 lg:bottom-8 bg-green-100 rounded-full shadow-lg flex items-center justify-center border-2 border-green-200 px-3 sm:px-4 py-2 sm:py-3 max-w-[180px] sm:max-w-[220px]">
                  <span className="text-green-900 text-xs sm:text-sm lg:text-base font-medium text-center">Hi! Let me help you!</span>
                </div>
                
                {/* House Icon Circle */}
                <div className="absolute -right-4 sm:right-0 lg:right-4 top-4 sm:top-6 lg:top-8 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-green-100">
                  <img
                    src="/home.png"
                    alt="House Icon"
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Cards Section */}
          <div className="mt-8 sm:mt-12 lg:mt-16">
            {/* Header Card */}
            <div className="bg-gray-200 rounded-xl shadow-sm p-4 sm:p-6 lg:p-8 text-center mb-6 sm:mb-8">
              <p className="text-xs sm:text-sm uppercase text-green-600 font-medium tracking-wide mb-2">
                Why Upgrade My Posting?
              </p>
              <h3 className="text-base sm:text-lg lg:text-2xl font-bold text-black mb-3 sm:mb-4">
                Benefits of upgrading your posting on 99acres
              </h3>
              <a
                href="#"
                className="text-sm sm:text-base text-green-600 font-medium hover:underline transition-all duration-200 hover:text-green-700"
              >
                View owner plans to sell house faster →
              </a>
            </div>
            
            {/* Benefit Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-green-100 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-left">
                <div className="text-green-600 font-semibold text-sm sm:text-base mb-2 sm:mb-3">
                  01. Appear higher in searches
                </div>
                <p className="text-black text-xs sm:text-sm leading-relaxed">
                  Upgraded postings appear higher in search results giving your posting more views and responses
                </p>
              </div>
              
              <div className="bg-green-100 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-left">
                <div className="text-green-600 font-semibold text-sm sm:text-base mb-2 sm:mb-3">
                  02. Hassle free selling/renting
                </div>
                <p className="text-black text-xs sm:text-sm leading-relaxed">
                  Relax and sell faster with our dedicated relationship manager assistance
                </p>
              </div>
              
              <div className="bg-green-100 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-left sm:col-span-2 lg:col-span-1">
                <div className="text-green-600 font-semibold text-sm sm:text-base mb-2 sm:mb-3">
                  03. Reach users on social media
                </div>
                <p className="text-black text-xs sm:text-sm leading-relaxed">
                  Reach more relevant buyers with Facebook and Google marketing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
         <div className="w-full">
   {/* Testimonials Section */}
      <section className="pt-6 sm:pt-8 lg:pt-10 bg-gradient-to-br from-blue-50 to-blue-100 max-w-7xl mx-auto my-6 sm:my-8 lg:my-10 rounded-2xl overflow-hidden animate-slideInUp">
        <div className="px-3 sm:px-6 lg:px-8">
          <h3 className="uppercase text-xs sm:text-sm text-green-600 font-semibold mb-2 tracking-wider">
            Testimonials
          </h3>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black mb-3 sm:mb-4 lg:mb-8">
            What our happy customers <br className="hidden sm:block" /> 
            <span className="block sm:hidden">are saying about our services</span>
            <span className="hidden sm:inline">are saying about our services</span>
          </h2>
          <p className="text-black mb-4 sm:mb-6 lg:mb-8 text-xs sm:text-sm lg:text-base leading-relaxed opacity-90">
            Hear from our satisfied owners who had used our services
          </p>
        </div>
        <div className="px-2 sm:px-4 lg:px-8 relative pb-14 sm:pb-16 lg:pb-20">
          <div className="testimonials-slider">
            <Slider {...settings}>
            {testimonials.map((t, i) => (
              <div key={i} className="px-0 sm:px-1 lg:px-3">
                <div className="testimonial-card bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg mx-1 sm:mx-1 lg:mx-2 overflow-hidden backdrop-blur-sm">
                  <div className="p-4 sm:p-5 lg:p-7">
                    <div className="flex items-center mb-4 sm:mb-5">
                      <div className="relative">
                        <img
                          src={t.img}
                          alt={t.name}
                          className="testimonial-avatar w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full mr-3 sm:mr-4 lg:mr-5 object-cover flex-shrink-0 ring-2 ring-green-200"
                        />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full ring-2 ring-white"></div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-black text-xs sm:text-sm lg:text-base mb-1">{t.name}</p>
                        <p className="text-[10px] sm:text-xs lg:text-sm text-green-600 font-medium">{t.role}</p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -top-2 -left-1 text-green-300 text-2xl opacity-50 font-serif">"</div>
                      <p className="text-black text-[10px] sm:text-xs lg:text-sm leading-relaxed pl-4 italic">{t.text}</p>
                      <div className="absolute -bottom-2 -right-1 text-green-300 text-2xl opacity-50 font-serif transform rotate-180">"</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </Slider>
          </div>
        </div>
      </section>
{/* FAQ Section */}
<section className="bg-[#fff4e3] py-8 sm:py-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
    
    {/* FAQ Card */}
    <div className="bg-green-50 rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6 lg:p-8 order-2 lg:order-1">
      <h4 className="text-xs sm:text-sm text-green-600 mb-2 font-medium">
        Make a well informed decision
      </h4>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black mb-4 sm:mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-3">
            <button
              className="w-full text-left flex justify-between items-start text-black font-medium focus:outline-none hover:text-green-700 transition-colors duration-200 py-1"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <span className="text-xs sm:text-sm md:text-base pr-2 flex-1">Q. {faq.q}</span>
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600 flex-shrink-0 w-6 h-6 flex items-center justify-center">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="mt-2 sm:mt-3 bg-white bg-opacity-50 rounded-lg p-3 sm:p-4">
                <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 sm:mt-6">
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base">
          Browse Owner Plans
        </button>
      </div>
    </div>

    {/* Illustration */}
    <div className="flex justify-center order-1 lg:order-2">
      <img
        src="/image copy 10.png"
        alt="FAQ Illustration"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
      />
    </div>
  </div>
</section>
     {/* Upgrade Plans & Payment Methods Section */}
<section className="bg-white pt-6 sm:pt-8 pb-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Upgrade Card */}
    <div className="bg-green-50 rounded-lg sm:rounded-xl flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 p-4 sm:p-6 mb-4 sm:mb-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="text-sm sm:text-base lg:text-lg font-semibold text-black text-center md:text-left">
        Confused on what to buy? See all offerings
      </div>
      <button className="border-2 border-green-600 text-green-600 font-medium px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-lg hover:bg-green-100 hover:border-green-700 transition-all duration-300 transform hover:scale-105 w-full md:w-auto text-sm sm:text-base">
        View all upgrade plans
      </button>
    </div>

    {/* Notes Section */}
    <div className="text-[10px] sm:text-[11px] lg:text-xs text-gray-700 leading-relaxed mb-4 sm:mb-6 bg-gray-50 p-3 sm:p-4 rounded-lg">
      <p className="mb-1">*Verification and photo shoot are available in metros and select cities only</p>
      <p className="mb-1">Note: Subscription duration is different from live duration of listing, please refer the subscription details for live duration</p>
      <p>Disclaimer: The search ranking and increase in responses are based on historical data from upgraded plans and not an indication of assured benefits of upgrading</p>
    </div>

    {/* Payment Icons */}
    <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
      <h3 className="text-center text-sm sm:text-base font-semibold text-gray-800 mb-4">Secure Payment Methods</h3>
      
      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6">
        
        {/* Safe Transactions text with icon */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start mb-2 sm:mb-0">
          <img src="/image copy 11.png" alt="Safe Transactions" className="h-6 sm:h-8 lg:h-10 object-contain" />
          <span className="text-[10px] sm:text-[11px] lg:text-xs text-gray-600 leading-tight text-center sm:text-left">
            100% Safe Transactions <br />
            We support secure payment methods
          </span>
        </div>
        
        {/* Payment Method Icons */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 lg:gap-4">
          <img src="/image copy 12.png" alt="Verified by Visa" className="h-6 sm:h-8 lg:h-10 object-contain hover:scale-110 transition-transform duration-200" />
          <img src="/image copy 13.png" alt="UPI" className="h-6 sm:h-8 lg:h-10 object-contain hover:scale-110 transition-transform duration-200" />
          <img src="/image copy 14.png" alt="American Express SafeKey" className="h-6 sm:h-8 lg:h-10 object-contain hover:scale-110 transition-transform duration-200" />
          <img src="/image copy 15.png" alt="Mastercard SecureCode" className="h-6 sm:h-8 lg:h-10 object-contain hover:scale-110 transition-transform duration-200" />
          <img src="/image copy 16.png" alt="RuPay" className="h-6 sm:h-8 lg:h-10 object-contain hover:scale-110 transition-transform duration-200" />
          <img src="/image copy 17.png" alt="Norton" className="h-6 sm:h-8 lg:h-10 object-contain hover:scale-110 transition-transform duration-200" />
          <img src="/image copy 18.png" alt="Maestro" className="h-6 sm:h-8 lg:h-10 object-contain hover:scale-110 transition-transform duration-200" />
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
    </div>
  );
}

