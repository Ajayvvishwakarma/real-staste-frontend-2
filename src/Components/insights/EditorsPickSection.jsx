
import React, { useRef } from 'react';

const editorsPicks = [
  {
    id: 1,
    image: '/realstateproject/project1.jpg',
    title: 'Top 10 Emerging Localities in Mumbai for Investment',
    author: 'Priya Sharma',
    authorImage: '/realstateproject/image1.png',
    readTime: '8 min read',
    category: 'Investment Guide',
    excerpt: "Discover the hidden gems in Mumbai's real estate market that offer excellent investment potential with upcoming infrastructure development.",
    publishDate: 'Dec 15, 2024',
    featured: true
  },
  {
    id: 2,
    image: '/realstateproject/project2.jpg',
    title: 'Bangalore IT Corridor: Best Areas for IT Professionals',
    author: 'Amit Kumar',
    authorImage: '/realstateproject/image2.png',
    readTime: '6 min read',
    category: 'Location Guide',
    excerpt: "Complete guide to choosing the perfect location in Bangalore's IT corridor for working professionals looking for convenience and connectivity.",
    publishDate: 'Dec 12, 2024',
    featured: false
  },
  {
    id: 3,
    image: '/realstateproject/project3.jpg',
    title: 'Delhi NCR Metro Impact on Property Prices',
    author: 'Sneha Agarwal',
    authorImage: '/realstateproject/image3.png',
    readTime: '10 min read',
    category: 'Market Analysis',
    excerpt: 'How the expanding Delhi Metro network is reshaping property values across different sectors in Gurgaon, Noida, and Faridabad.',
    publishDate: 'Dec 10, 2024',
    featured: true
  },
  {
    id: 4,
    image: '/realstateproject/project4.jpg',
    title: "Pune's New IT Parks: Investment Opportunities",
    author: 'Rajesh Patel',
    authorImage: '/realstateproject/image4.png',
    readTime: '7 min read',
    category: 'Investment Guide',
    excerpt: 'Analysis of upcoming IT parks in Pune and their impact on surrounding residential property markets for smart investors.',
    publishDate: 'Dec 8, 2024',
    featured: false
  }
];

const EditorsPickSection = () => {
  const sliderRef = useRef(null);
  return (
    <div className="mt-8">
      <div className="mb-6 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Editor's Pick</h2>
        <p className="text-base md:text-lg text-gray-600">Curated insights from our experts</p>
      </div>
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white rounded-full p-2 shadow hover:bg-blue-700"
          style={{left: '-20px'}}
          onClick={() => sliderRef.current.scrollBy({ left: -350, behavior: 'smooth' })}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-2 py-2 md:px-8"
          style={{scrollSnapType: 'x mandatory'}}
        >
          {editorsPicks.map((pick) => (
            <div
              key={pick.id}
              className={`bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow cursor-pointer flex flex-col items-stretch justify-between fixed-card hover:scale-105 duration-300 ${pick.featured ? 'xl:max-w-[400px]' : ''}`}
              style={{
                minWidth: '200px',
                maxWidth: pick.featured ? '420px' : '260px',
                width: '90vw',
                maxHeight: '360px',
                height: 'auto',
                flexBasis: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                scrollSnapAlign: 'start',
              }}
            >
              <div className={`relative w-full aspect-[16/9] overflow-hidden`}>
                <img
                  src={pick.image}
                  alt={pick.title}
                  className="w-full h-full object-cover rounded-t-xl shadow-lg border-0"
                  onError={(e) => {
                    e.target.src = '/realstateproject/image.png';
                  }}
                />
                <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-3 py-1 rounded-full shadow">
                  <span className="text-xs font-semibold tracking-wide">{pick.category}</span>
                </div>
                {pick.featured && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-white px-3 py-1 rounded-full shadow">
                    <span className="text-xs font-semibold">Featured</span>
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex flex-wrap items-center text-xs text-blue-500 mb-2 gap-x-2 gap-y-1 font-semibold">
                    <span>{pick.publishDate}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{pick.readTime}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 text-lg">{pick.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">{pick.excerpt}</p>
                </div>
               
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white rounded-full p-2 shadow hover:bg-blue-700"
          style={{right: '-20px'}}
          onClick={() => sliderRef.current.scrollBy({ left: 350, behavior: 'smooth' })}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      {/* View all articles button */}
      <div className="mt-8 text-center">
        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 font-medium transition-all duration-200 transform hover:scale-105">
          View All Expert Articles
        </button>
      </div>
    </div>
  );
};

export default EditorsPickSection;