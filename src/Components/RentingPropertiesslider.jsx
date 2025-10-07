import React, { useState } from 'react'

const localities = [
  {
    name: 'Alwar Bypass Road, Bhiwadi',
    projects: 88,
    buy: { price: '₹ 5653/ sq.ft', link: '4242 Property for Sale in Alwar Bypass Road, Bhiwadi', url: '#' },
    rent: { price: '₹ 476/ sq.ft', link: '255 Property for Rent in Alwar Bypass Road, Bhiwadi', url: '#' },
    rating: 5.0,
    reviews: 4,
  },
  {
    name: 'Wardha Road, Nagpur',
    projects: 50,
    buy: { price: '₹ 2391/ sq.ft', link: '2518 Property for Sale in Wardha Road, Nagpur', url: '#' },
    rent: { price: '₹ 476/ sq.ft', link: '38 Property for Rent in Wardha Road, Nagpur', url: '#' },
    rating: 5.0,
    reviews: 4,
  },
  {
    name: 'Powai, Mumbai',
    projects: 110,
    buy: { price: '₹ 44635/ sq.ft', link: '1933 Property for Sale in Powai, Mumbai', url: '#' },
    rent: { price: '₹ 5412/ sq.ft', link: '2021 Property for Rent in Powai, Mumbai', url: '#' },
    rating: 4.5,
    reviews: 69,
  },
  {
    name: 'Mira Road East, Mumbai',
    projects: 243,
    buy: { price: '₹ 22525/ sq.ft', link: '2747 Property for Sale in Mira Road East, Mumbai', url: '#' },
    rent: { price: '₹ 624/ sq.ft', link: '345 Property for Rent in Mira Road East, Mumbai', url: '#' },
    rating: 4.4,
    reviews: 64,
  },
  {
    name: 'Kundli, Sonipat',
    projects: 18,
    buy: { price: '₹ 148195/ sq.ft', link: '2338 Property for Sale in Kundli, Sonipat', url: '#' },
    rent: { price: '₹ 4609/ sq.ft', link: '225 Property for Rent in Kundli, Sonipat', url: '#' },
    rating: 4.4,
    reviews: 64,
  },
  {
    name: 'Uttam Nagar, Delhi',
    projects: 12,
    buy: { price: '₹ 5110/ sq.ft', link: '3065 Property for Sale in Uttam Nagar, Delhi', url: '#' },
    rent: { price: '₹ 577/ sq.ft', link: '121 Property for Rent in Uttam Nagar, Delhi', url: '#' },
    rating: 4.5,
    reviews: 65,
  },
  {
    name: 'Sector 62, Noida',
    projects: 75,
    buy: { price: '₹ 12500/ sq.ft', link: '1500 Property for Sale in Sector 62, Noida', url: '#' },
    rent: { price: '₹ 1200/ sq.ft', link: '800 Property for Rent in Sector 62, Noida', url: '#' },
    rating: 4.3,
    reviews: 58,
  },
  {
    name: 'Gachibowli, Hyderabad',
    projects: 60,
    buy: { price: '₹ 13500/ sq.ft', link: '1600 Property for Sale in Gachibowli, Hyderabad', url: '#' },
    rent: { price: '₹ 1100/ sq.ft', link: '900 Property for Rent in Gachibowli, Hyderabad', url: '#' },
    rating: 4.6,
    reviews: 72,
  },
  {
    name: 'Salt Lake, Kolkata',
    projects: 40,
    buy: { price: '₹ 9800/ sq.ft', link: '1200 Property for Sale in Salt Lake, Kolkata', url: '#' },
    rent: { price: '₹ 950/ sq.ft', link: '700 Property for Rent in Salt Lake, Kolkata', url: '#' },
    rating: 4.2,
    reviews: 51,
  },
  {
    name: 'Viman Nagar, Pune',
    projects: 55,
    buy: { price: '₹ 14500/ sq.ft', link: '1300 Property for Sale in Viman Nagar, Pune', url: '#' },
    rent: { price: '₹ 1050/ sq.ft', link: '600 Property for Rent in Viman Nagar, Pune', url: '#' },
    rating: 4.4,
    reviews: 63,
  },
];

const RentingPropertiesslider = ({ city }) => {
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 3;
  const maxIdx = localities.length - visibleCount;

  const handleNext = () => {
    setStartIdx((prev) => (prev < maxIdx ? prev + 1 : 0));
  };
  const handlePrev = () => {
    setStartIdx((prev) => (prev > 0 ? prev - 1 : maxIdx));
  };

  return (
  <section className="w-full bg-gray-200 py-8 md:py-10 relative  overflow-hidden">

  {/* Dots background removed */}
  <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4">
  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-6 md:mb-8">
          {city ? (
            <span className="text-white">Explore Popular Localities in {city}</span>
          ) : (
            <>
              <span className="text-black font-semibold text-3xl">Top Localities  for buying  or renting properties</span> 
            </>
          )}
        </h2>
  <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch relative">
          {/* Left arrow on card edge */}
          {/* Left arrow: hidden on mobile, visible on md+ */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute left-[-30px] top-1/2 transform -translate-y-1/2 w-12 h-12 z-20 rounded-full bg-white shadow items-center justify-center border border-gray-200 hover:bg-gray-50 transition"
            aria-label="Previous"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg>
          </button>
          {localities.slice(startIdx, startIdx + visibleCount).map((loc, idx) => (
            <div key={loc.name} className="bg-white rounded-xl shadow-lg border border-gray-200 min-w-[90vw] sm:min-w-[340px] max-w-full sm:max-w-[370px] flex-1 mb-4 md:mb-0">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 sm:px-6 pt-4 sm:pt-6 pb-2 border-b border-gray-100">
                <div>
                  <div className="font-semibold text-base text-gray-800 flex flex-wrap items-center gap-2">
                    {loc.name}
                    {city && (
                      <span className="ml-2 text-orange-600 font-semibold">in {city}</span>
                    )}
                    <a href="#" target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-500">
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 3h7v7"/><path d="M5 19l14-14"/></svg>
                    </a>
                  </div>
                  <div className="text-blue-600 text-xs font-medium underline cursor-pointer">{loc.projects} Projects</div>
                </div>
                <div className="flex flex-row md:flex-col items-end md:items-end mt-2 md:mt-0">
                  <div className="flex items-center gap-1 text-yellow-500 font-bold text-sm">
                    {loc.rating} <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.174 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z"/></svg>
                  </div>
                  <div className="text-gray-500 text-xs">{loc.reviews} Reviews</div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                <div className="p-3 sm:p-4 flex flex-col gap-2 items-start">
                  <div className="flex items-center gap-2 text-green-700 font-semibold text-sm">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                    Buy
                  </div>
                  <div className="text-gray-800 font-bold text-sm">{loc.buy.price}</div>
                  <a href={loc.buy.url} className="text-blue-600 text-xs underline">{loc.buy.link} <span className="ml-1">→</span></a>
                </div>
                <div className="p-3 sm:p-4 flex flex-col gap-2 items-start">
                  <div className="flex items-center gap-2 text-green-700 font-semibold text-sm">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 11V7a5 5 0 0110 0v4"/><rect x="3" y="11" width="18" height="10" rx="2"/></svg>
                    Rent
                  </div>
                  <div className="text-gray-800 font-bold text-sm">{loc.rent.price}</div>
                  <a href={loc.rent.url} className="text-blue-600 text-xs underline">{loc.rent.link} <span className="ml-1">→</span></a>
                </div>
              </div>
            </div>
          ))}
          {/* Right arrow on card edge */}
          {/* Right arrow: hidden on mobile, visible on md+ */}
          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-[-30px] top-1/2 transform -translate-y-1/2 w-12 h-12 z-20 rounded-full bg-white shadow items-center justify-center border border-gray-200 hover:bg-gray-50 transition"
            aria-label="Next"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
          </button>
          {/* Mobile arrows below cards */}
          <div className="flex md:hidden justify-center gap-6 mt-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition"
              aria-label="Previous"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition"
              aria-label="Next"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
       <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes expand {
          from { width: 0; }
          to { width: 8rem; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slow-bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-shift {
          animation: gradient-shift 3s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-expand {
          animation: expand 1s ease-out 0.5s forwards;
          width: 0;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-slow-bounce {
          animation: slow-bounce 4s ease-in-out infinite;
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 4s ease infinite;
        }
      `}</style>
    </section>
  );
}

export default RentingPropertiesslider









