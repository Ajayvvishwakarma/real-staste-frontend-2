import React, { useRef } from "react";

const IdeasForAspirationalHomes = () => {
  const aspirationalIdeas = [
    { id: 1, image: "/realstateproject/project1.jpg", title: "Modern Villa Design", category: "Luxury Living", price: "₹2.5 Cr onwards", location: "Whitefield, Bangalore" },
    { id: 2, image: "/realstateproject/project2.jpg", title: "Sky Gardens Apartment", category: "Premium Flats", price: "₹1.8 Cr onwards", location: "Sector 76, Gurgaon" },
    { id: 3, image: "/realstateproject/project3.jpg", title: "Eco-Friendly Homes", category: "Sustainable Living", price: "₹95 Lac onwards", location: "Hinjewadi, Pune" },
    { id: 4, image: "/realstateproject/project4.jpg", title: "Waterfront Residences", category: "Waterfront Living", price: "₹3.2 Cr onwards", location: "Marine Drive, Mumbai" },
    { id: 5, image: "/realstateproject/project5.jpg", title: "Smart City Homes", category: "Tech-Enabled", price: "₹1.2 Cr onwards", location: "Sector 150, Noida" }
  ];

  const sliderRef = useRef(null);

  const scroll = (direction = "right") => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstChild.offsetWidth + 16; // card width + gap
      sliderRef.current.scrollBy({
        left: direction === "right" ? cardWidth : -cardWidth,
        behavior: "smooth"
      });
    }
  };

  return (
  <div className="mt-8 px-4 md:px-8">
      {/* Section header */}
      <div className="mb-6 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">Ideas for Aspirational Homes</h2>
        <p className="text-sm sm:text-base text-gray-600">dream big, live bigger</p>
      </div>

      {/* Slider container */}
      <div className="relative">
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {aspirationalIdeas.map((idea) => (
            <div key={idea.id} className="flex-shrink-0 w-[250px] sm:w-[280px] md:w-[calc((100%/4)-1rem)] bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow cursor-pointer snap-start hover:scale-105 duration-300">
              <div className="relative">
                <img
                  src={idea.image}
                  alt={idea.title}
                  className="w-full h-44 object-cover rounded-t-xl shadow-lg border-0"
                  onError={(e) => e.target.src = '/realstateproject/image.png'}
                />
                <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-3 py-1 rounded-full shadow">
                  <span className="text-xs font-semibold tracking-wide">{idea.category}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{idea.title}</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {idea.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">{idea.price}</span>
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 z-10"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 z-10"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* View All Button */}
      <div className="mt-6 text-center">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors">
          View All Aspirational Homes
        </button>
      </div>
    </div>
  );
};

export default IdeasForAspirationalHomes;
