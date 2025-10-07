import React from 'react';
import { Link } from 'react-router-dom';

const CommercialSpaces = () => {
  return (
    <section className="py-8 sm:py-4 px-4 bg-gray-100 lg:pt-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-gray-600 uppercase tracking-wide font-medium mb-2 text-xs sm:text-sm">
            COMMERCIAL SPACES
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-snug">
            Choose from a wide variety of commercial properties
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Buy Commercial Property Card */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <div className="relative h-[220px] sm:h-[260px] md:h-[280px]">
              <img
                src="/properties_img/property7.png"
                alt="Buy Commercial Property"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between bg-gradient-to-t from-white/80 via-white/70 to-transparent">
                <div>
                  <p className="text-blue-700 font-medium mb-1 sm:mb-2 text-xs sm:text-sm">
                    BUY FOR COMMERCIAL USE
                  </p>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Buy a Commercial property
                  </h3>
                  <p className="text-gray-800 text-xs sm:text-sm">
                    Explore from Office Spaces, Co-working spaces, Retail Shops, Land, Factories and more
                  </p>
                </div>
                <div className="mt-3 sm:mt-4 mx-auto md:mx-0">
                  <Link
                    to="/commercial/buy"
                    className="relative inline-block text-white font-semibold py-2 px-4 sm:px-5 rounded-lg text-xs sm:text-sm text-center w-full md:w-auto overflow-hidden shadow-lg hover:shadow-xl"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-green-600 via-black to-green-600 bg-[length:200%_200%] animate-gradient-move rounded-lg"></span>
                    <span className="relative z-10">Explore Buying Commercial</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Lease Commercial Property Card */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <div className="relative h-[220px] sm:h-[260px] md:h-[280px]">
              <img
                src="/properties_img/property8.png"
                alt="Lease Commercial Property"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between bg-gradient-to-t from-white/80 via-white/70 to-transparent">
                <div>
                  <p className="text-blue-700 font-medium mb-1 sm:mb-2 text-xs sm:text-sm">
                    LEASE FOR COMMERCIAL USE
                  </p>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Lease a Commercial property
                  </h3>
                  <p className="text-gray-800 text-xs sm:text-sm">
                    Explore from Office Spaces, Co-working spaces, Retail Shops, Land, Factories and more
                  </p>
                </div>
                <div className="mt-3 sm:mt-4 mx-auto md:mx-0">
                  <Link
                    to="/commercial/lease"
                    className="relative inline-block text-white font-semibold py-2 px-4 sm:px-5 rounded-lg text-xs sm:text-sm text-center w-full md:w-auto overflow-hidden shadow-lg hover:shadow-xl"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-green-600 via-black to-green-600 bg-[length:200%_200%] animate-gradient-move rounded-lg"></span>
                    <span className="relative z-10">Explore Leasing Commercial</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Animation */}
      <style>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          animation: gradient-move 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default CommercialSpaces;
