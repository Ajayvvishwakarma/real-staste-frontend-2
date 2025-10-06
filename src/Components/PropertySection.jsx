import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

const articles = [
  {
    id: 1,
    title: "How electricity bills impact cost of living?",
    date: "Sep 16, 2025",
    image: "/rent/image.png",
  },
  {
    id: 2,
    title: "GST cut on building materials: Experts",
    date: "Sep 04, 2025",
    image: "/rent/image1.png",
  },
  {
    id: 3,
    title: "What's Driving Siddharth Vihar Rates Up?",
    date: "Sep 12, 2025",
    image: "/rent/image2.png",
  },
  {
    id: 4,
    title: "Kolkata Tower Delay: Impact on Buyers",
    date: "Sep 02, 2025",
    image: "/rent/image3.png",
  },
  {
    id: 5,
    title: "Top Investment Tips for Property Owners",
    date: "Sep 10, 2025",
    image: "/rent/image4.png",
  },
  {
    id: 6,
    title: "Why Renting is Rising in Metro Cities",
    date: "Aug 29, 2025",
    image: "/rent/image copy.png",
  },
];

const PropertySection = () => {
  return (
    <section className="w-full bg-white px-3 sm:px-4 lg:px-6 py-6 sm:py-12">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center mb-8 sm:mb-12 lg:mb-16">
          {/* Left Image */}
          <div className="order-2 lg:order-1 flex-shrink-0 rounded-lg overflow-hidden">
            <img
              src="\image copy 7.png"
              alt="Promo"
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-lg shadow-md object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 flex flex-col justify-center text-center lg:text-left">
            <p className="uppercase text-xs sm:text-sm font-semibold text-gray-500 mb-2 sm:mb-3">
              Property Listing
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
              Sell or rent faster at the right price!
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-5 sm:mb-6">List your property now</p>
            <div className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-start gap-3 w-fit mx-auto lg:mx-0">
              <a
                href="#explore"
                className="px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-green-600 to-black hover:from-black hover:to-green-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base inline-flex items-center justify-center w-fit"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
               Post Property,It's Free
              </a>
              <button className="flex items-center text-green-600 font-medium text-sm sm:text-base hover:text-green-700 transition-colors duration-300">
                <span className="mr-1">Post via</span>
                <img
                  src="\image copy 7.png"
                  alt="whatsapp"
                  className="w-5 h-5 mx-1"
                />
                <span className="ml-1">Whatsapp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-white shadow-xl w-full max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-4xl xl:max-w-4xl mx-auto border mt-[-60px] xs:mt-[-70px] sm:mt-[-80px] md:mt-[-80px] lg:mt-[-80px] xl:mt-[-80px] border-gray-100 rounded-xl sm:rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 xl:p-10 bg-orange-300 flex flex-col justify-center">
              <h3 className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-gray-900 leading-tight mb-2 xs:mb-3 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4">
                Articles and guides for property owners
              </h3>
              <p className="text-gray-600 text-xs xs:text-sm sm:text-base md:text-base lg:text-base xl:text-base">
                Read from Beginners check-list to Pro Tips
              </p>
            </div>

            <div className="lg:w-2/3 p-3 xs:p-4 sm:p-6 md:p-8 lg:p-8 xl:p-8">

              {/* Articles Content - Similar to HomeSection */}
              <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 xs:gap-4 sm:gap-6 md:gap-6 lg:gap-6 xl:gap-6">
                {articles.slice(0, 4).map((article, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 xs:gap-3 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3 p-2 xs:p-3 sm:p-3 md:p-3 lg:p-3 xl:p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer group"
                  >
                    <img
                      src={article.image}
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
                  Read property guides & articles
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

      {/* Hide default scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default PropertySection;
