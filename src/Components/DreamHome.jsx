import React, { useState } from "react";
import './DreamHomeMobile.css';
const tabData = {
  News: [
    {
      title: "Rental market trends 2025",
      date: "Mar 10, 2025",
      img: "/realstateproject/image.png",
    },
    {
      title: "How co-living spaces are growing",
      date: "Feb 18, 2025",
      img: "/realstateproject/image1.png",
    },
  ],
  "Tax & Legal": [
    {
      title: "Landlords need permission to enter? Know more",
      date: "Feb 27, 2025",
      img: "/realstateproject/image2.png",
    },
    {
      title: "Fake rent receipt punishment & penalties",
      date: "Jan 12, 2024",
      img: "/realstateproject/image3.png",
    },
    {
      title: "What if your tenants abscond?",
      date: "Feb 09, 2024",
      img: "/realstateproject/image4.png",
    },
    {
      title: "Understanding Sec Income Tax Act",
      date: "Jan 03, 2024",
      img: "/realstateproject/image5.png",
    },
  ],
  "Help Guides": [
    {
      title: "Checklist before renting your first Home",
      date: "Mar 05, 2025",
      img: "/realstateproject/image6.png",
    },
    {
      title: "Top 5 tips for hassle-free renting",
      date: "Feb 20, 2025",
      img: "/realstateproject/image7.png",
    },
  ],
  Investment: [
    {
      title: "Why rental property is a smart investment",
      date: "Jan 22, 2025",
      img: "/realstateproject/project1.jpg",
    },
    {
      title: "Future of real estate investments in India",
      date: "Dec 18, 2024",
      img: "/realstateproject/project2.jpg",
    },
  ],
};
const DreamHome = () => {
        const [activeTab, setActiveTab] = useState("Tax & Legal");
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center px-2 sm:px-3 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 safe-area-mobile mobile-wrapper">
       
      {/* New Heading Section */}
      <div className="text-center mb-6 sm:mb-8 md:mb-6 px-1 sm:px-2 w-full max-w-4xl responsive-heading">
        <p className="text-xs sm:text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider mb-2 sm:mb-1">
          ALL PROPERTY NEEDS • ONE PORTAL
        </p>
        <h2 className="text-base sm:text-lg md:text-3xl lg:text-3xl font-semibold text-gray-900 leading-tight px-1 sm:px-0">
          Find Better Places to Live, Work<br className="hidden sm:block" />
          <span className="block sm:inline">and Wonder...</span>
        </h2>
      </div>
      
      {/* Top Section */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-10 lg:gap-12 items-center mb-6 sm:mb-8 md:mb-16 px-2 sm:px-0 dream-home-grid">
        {/* Left Image */}
        <div className="rounded-lg overflow-hidden order-2 md:order-1 w-full dream-home-image-container">
          <img
            src="/image copy 5.png"
            alt="Home Interior"
            className="w-full h-40 sm:h-48 md:h-64 lg:h-72 xl:h-80 rounded-lg shadow-md object-cover hover:scale-105 transition-transform duration-300 dream-home-image"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center text-center md:text-left order-1 md:order-2 px-2 sm:px-0 dream-home-content">
          <p className="uppercase text-xs sm:text-sm md:text-base font-semibold text-gray-500 mb-1 sm:mb-1">
            BUY A Home
          </p>
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 mt-1 mb-3 sm:mb-4 leading-tight max-w-sm sm:max-w-lg mx-auto md:mx-0 dream-home-heading">
            Find, Buy & Own Your Dream Home
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-1 mb-4 sm:mb-6 max-w-sm sm:max-w-lg mx-auto md:mx-0 leading-relaxed dream-home-description">
            Explore from Apartments, land, builder floors, villas and more
          </p>
          <div className="w-full md:w-auto responsive-button">
            <button className="w-full sm:w-auto md:w-auto mt-2 px-6 sm:px-6 md:px-8 py-3 sm:py-3 md:py-2 bg-gradient-to-r from-green-600 to-black hover:from-black hover:to-green-600 text-white rounded-md font-semibold shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 text-sm sm:text-base md:text-lg min-h-[44px] touch-manipulation mobile-button tablet-button">
              Explore Buying
            </button>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="max-w-4xl w-full mt-[-40px] sm:mt-[-60px] md:mt-[-100px] z-20 bg-gray-200 shadow-lg rounded-2xl p-3 sm:p-4 md:p-8 mx-1 sm:mx-2 md:mx-0 articles-container">
      {/* Heading */}
      <div className="px-1 sm:px-2 md:px-6 mb-4 sm:mb-6 w-full articles-header">
        <div className="text-center md:text-left">
          <h2 className="text-sm sm:text-base md:text-2xl font-semibold text-gray-900 articles-title">
            Top articles on Home buying
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm mt-1 articles-subtitle">
            Read from Beginners check-list to Pro Tips
          </p>
        </div>
      </div>

         {/* Tabs */}
      <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-start space-x-1 sm:space-x-2 md:space-x-6 border-b text-xs sm:text-sm font-medium text-gray-500 overflow-x-auto scrollbar-hide mobile-tabs pb-1 px-1 sm:px-2 md:px-6">
        {Object.keys(tabData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-2 sm:px-2 md:px-1 transition-all duration-300 whitespace-nowrap flex-shrink-0 min-h-[40px] touch-manipulation mobile-tab-button ${
              activeTab === tab
                ? "border-b-2 border-green-600 text-green-600 font-semibold"
                : "border-b-2 border-transparent hover:text-green-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4 md:mt-6 px-1 sm:px-2 md:px-6 articles-grid-mobile">
        {tabData[activeTab].map((article, idx) => (
          <div 
            key={idx} 
            className="flex space-x-2 sm:space-x-3 bg-gray-50 p-2 sm:p-3 rounded-lg hover:shadow-md transition-all duration-300 hover:bg-white touch-manipulation hover-effects article-card-mobile"
          >
            <img
              src={article.img}
              alt="Article"
              className="w-14 sm:w-16 md:w-16 h-10 sm:h-12 md:h-12 rounded-md object-cover flex-shrink-0 article-image-mobile"
              loading="lazy"
            />
            <div className="py-1 flex-1 min-w-0 article-content-mobile">
              <h3 className="font-semibold text-gray-800 text-xs sm:text-sm leading-tight line-clamp-2 article-title-mobile">
                {article.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1 article-date-mobile">{article.date}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer Link */}
      <div className="mt-3 sm:mt-4 text-center md:text-right px-1 sm:px-2 md:px-6">
        <a
          href="#"
          className="text-green-600 font-medium hover:underline text-xs sm:text-sm transition-colors duration-300 hover:text-green-800 touch-manipulation inline-block py-2"
        >
          Read realty news, guides & articles →
        </a>
      </div>

    </div>
    </div>
  )
}

export default DreamHome
