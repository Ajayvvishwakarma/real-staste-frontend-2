import React, { useState } from "react";

const tabData = {
  News: [
    { title: "Rental market trends 2025", date: "Mar 10, 2025", img: "/properties_img/property-1.jpg" },
    { title: "How co-living spaces are growing", date: "Feb 18, 2025", img: "/properties_img/property-2.jpg" },
    { title: "Latest rental regulations update", date: "Feb 15, 2025", img: "/properties_img/property-3.jpg" },
    { title: "Affordable housing schemes launched", date: "Feb 12, 2025", img: "/properties_img/property-4.jpg" },
  ],
  "Tax & Legal": [
    { title: "Landlords need permission to enter? Know more", date: "Feb 27, 2025", img: "/realstateimg/image1.png" },
    { title: "Fake rent receipt punishment & penalties", date: "Jan 12, 2024", img: "/realstateimg/image2.png" },
    { title: "What if your tenants abscond?", date: "Feb 09, 2024", img: "/realstateimg/image3.png" },
    { title: "Understanding Sec Income Tax Act", date: "Jan 03, 2024", img: "/realstateimg/image4.png" },
    { title: "New rental laws and regulations", date: "Jan 15, 2024", img: "/realstateimg/image5.png" },
    { title: "Property tax guidelines for landlords", date: "Dec 20, 2023", img: "/realstateimg/image6.png" },
  ],
  "Help Guides": [
    { title: "Checklist before renting your first Home", date: "Mar 05, 2025", img: "/realstateproject/project1.jpg" },
    { title: "Top 5 tips for hassle-free renting", date: "Feb 20, 2025", img: "/realstateproject/project2.jpg" },
    { title: "How to find the perfect rental property", date: "Feb 15, 2025", img: "/realstateproject/project3.jpg" },
    { title: "Understanding rental agreements", date: "Feb 10, 2025", img: "/realstateproject/project4.jpg" },
    { title: "Rental property inspection guide", date: "Feb 05, 2025", img: "/realstateproject/project5.jpg" },
    { title: "Budgeting for your rental Home", date: "Jan 30, 2025", img: "/realstateproject/project6.jpg" },
  ],
  Investment: [
    { title: "Why rental property is a smart investment", date: "Jan 22, 2025", img: "/properties_img/property-5.jpg" },
    { title: "Future of real estate investments in India", date: "Dec 18, 2024", img: "/properties_img/property-6.jpg" },
    { title: "Best investment locations in 2025", date: "Dec 15, 2024", img: "/properties_img/property7.png" },
    { title: "ROI calculation for rental properties", date: "Dec 10, 2024", img: "/properties_img/property8.png" },
  ],
};

const HomeSection = () => {
  const [activeTab, setActiveTab] = useState("Tax & Legal");

  return (
    <div className="w-full bg-gray-200 px-3 sm:px-4 lg:px-6 py-6 sm:py-12">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center mb-8 sm:mb-12 lg:mb-16">
          <div className="order-2 lg:order-1 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
              alt="Home Interior"
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-lg shadow-md object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="order-1 lg:order-2 flex flex-col justify-center text-center lg:text-left">
            <p className="uppercase text-xs sm:text-sm font-semibold text-gray-500 mb-2 sm:mb-3">
              Rent a Home
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
              Rental Homes for Everyone
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-5 sm:mb-6">
              Explore from Apartments, builder floors, villas and more
            </p>
            <button className="px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-green-600 to-black hover:from-black hover:to-green-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-fit mx-auto lg:mx-0 text-sm sm:text-base">
              Explore Renting
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-white shadow-xl w-full max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-4xl xl:max-w-4xl mx-auto border mt-[-60px] xs:mt-[-70px] sm:mt-[-80px] md:mt-[-80px] lg:mt-[-80px] xl:mt-[-80px] border-gray-100 rounded-xl sm:rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 xl:p-10 bg-green-300 flex flex-col justify-center">
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-gray-900 leading-tight mb-2 xs:mb-3 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4">
                Best Renting Advice by Our Top Editors
              </h2>
              <p className="text-gray-600 text-xs xs:text-sm sm:text-base md:text-base lg:text-base xl:text-base">
                Read from Beginners check-list to Pro Tips
              </p>
            </div>

            <div className="lg:w-2/3 p-3 xs:p-4 sm:p-6 md:p-8 lg:p-8 xl:p-8">
              {/* Tabs */}
              <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2 border-b border-gray-200 mb-4 sm:mb-6 md:mb-6 lg:mb-6 xl:mb-6 overflow-x-auto scrollbar-hide">
                {Object.keys(tabData).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-2 xs:px-3 sm:px-4 md:px-4 lg:px-4 xl:px-4 py-1.5 xs:py-2 sm:py-2 md:py-2 lg:py-2 xl:py-2 text-xs xs:text-sm sm:text-base md:text-base lg:text-base xl:text-base font-medium rounded-t-lg transition-all duration-300 whitespace-nowrap ${
                      activeTab === tab
                        ? "bg-blue-600 text-white border-b-2 border-blue-600 shadow-sm"
                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-50 hover:shadow-sm"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Articles Content */}
              <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 xs:gap-4 sm:gap-6 md:gap-6 lg:gap-6 xl:gap-6">
                {tabData[activeTab].slice(0, 4).map((article, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 xs:gap-3 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3 p-2 xs:p-3 sm:p-3 md:p-3 lg:p-3 xl:p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer group"
                  >
                    <img
                      src={article.img}
                      alt="Article"
                      className="w-12 h-9 xs:w-14 xs:h-10 sm:w-16 sm:h-12 md:w-20 md:h-15 lg:w-20 lg:h-15 xl:w-20 xl:h-15 rounded-lg object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-xs xs:text-sm sm:text-base md:text-base lg:text-base xl:text-base leading-tight line-clamp-2 group-hover:text-blue-700 transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-xs xs:text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-gray-500 mt-1">{article.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer Link */}
              <div className="mt-4 xs:mt-5 sm:mt-6 md:mt-6 lg:mt-6 xl:mt-6 pt-3 xs:pt-4 sm:pt-4 md:pt-4 lg:pt-4 xl:pt-4 border-t border-gray-100">
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline text-xs xs:text-sm sm:text-base md:text-base lg:text-base xl:text-base hover:text-blue-700 transition-colors duration-300 inline-flex items-center gap-1 xs:gap-2 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2"
                >
                  Read realty news, guides & articles
                  <svg
                    className="w-3 h-3 xs:w-4 xs:h-4 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-4 xl:h-4 transition-transform duration-300 hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>  
    </div>
  );
};

export default HomeSection;
