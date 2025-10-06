import React, { useState, useRef } from 'react';

const FeatureCards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef(null);

  const cards = [
    {
      id: 1,
      title: 'Price Trends',
      description: 'Track property prices',
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3v16h18v2H1V3h2zm5 12V9h2v6H8zm4 0V5h2v10h-2zm4 0v-4h2v4h-2z"/>
        </svg>
      ),
      bgColor: 'bg-blue-100',
      hoverColor: 'group-hover:bg-blue-200'
    },
    {
      id: 2,
      title: 'My Property Insights',
      description: 'Your property value',
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      ),
      bgColor: 'bg-orange-100',
      hoverColor: 'group-hover:bg-orange-200'
    },
    {
      id: 3,
      title: 'Articles',
      description: 'Expert insights',
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8l-8-6z"/>
        </svg>
      ),
      bgColor: 'bg-blue-100',
      hoverColor: 'group-hover:bg-blue-200'
    },
    {
      id: 4,
      title: 'News',
      description: 'Latest updates',
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z"/>
        </svg>
      ),
      bgColor: 'bg-amber-100',
      hoverColor: 'group-hover:bg-amber-200'
    },
    {
      id: 5,
      title: 'Guides',
      description: 'Step-by-step help',
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
        </svg>
      ),
      bgColor: 'bg-purple-100',
      hoverColor: 'group-hover:bg-purple-200'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(cards.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(cards.length / 4)) % Math.ceil(cards.length / 4));
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -140, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 140, behavior: 'smooth' });
    }
  };

  const visibleCards = cards.slice(currentSlide * 4, (currentSlide + 1) * 4);

  return (
    <div className="mb-8">
      {/* Desktop Slider */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 -ml-4"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 -mr-4"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-4 gap-3 px-8">
            {visibleCards.map((card) => (
              <div key={card.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-3 text-center group cursor-pointer">
                <div className={`w-12 h-12 ${card.bgColor} rounded-full flex items-center justify-center mx-auto mb-2 ${card.hoverColor} transition-colors duration-200`}>
                  {card.icon}
                </div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1">{card.title}</h3>
                <p className="text-xs text-gray-500">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Scrollable */}
      <div className="md:hidden">
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-1.5 shadow-lg hover:shadow-xl transition-shadow duration-200 -ml-2"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-1.5 shadow-lg hover:shadow-xl transition-shadow duration-200 -mr-2"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide px-6 py-2 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cards.map((card) => (
              <div key={card.id} className="flex-shrink-0 w-32 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-3 text-center group cursor-pointer">
                <div className={`w-10 h-10 ${card.bgColor} rounded-full flex items-center justify-center mx-auto mb-2 ${card.hoverColor} transition-colors duration-200`}>
                  <svg className="w-5 h-5 text-current" fill="currentColor" viewBox="0 0 24 24">
                    {card.icon.props.children}
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 text-xs mb-1">{card.title}</h3>
                <p className="text-xs text-gray-500">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;