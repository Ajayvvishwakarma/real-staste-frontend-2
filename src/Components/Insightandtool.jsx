import React from 'react'

const cards = [
  {
    icon: '/tools/image.png',
    title: 'Creating Timeless Interiors',
    desc: `Embark on a Journey through the Artistry of Interior Design, and Rediscover Your Space's True Potential`,
    btn: 'Explore Now',
  },
  {
    icon: '/tools/image2.png',
    title: 'Harmonize Your Spaces with Vaastu Shastra',
    desc: `Discover the Serenity of Harmonious Living: Embrace Vaastu Shastra to Transform Your Spaces`,
    btn: 'Explore Now',
  },
  {
    icon: '/tools/image3.png',
    title: 'Your Guide to Real Estate Excellence',
    desc: `Empowering Your Real Estate Choices: Stay Informed with Our Latest Insights and Updates`,
    btn: 'Explore Now',
  },
  {
    icon: '/tools/image4.png',
    title: 'Connecting You with the Ideal Buyer',
    desc: `Closing the Divide between Sellers and Their Ideal Buyers: Making the Perfect Connection`,
    btn: 'Explore Now',
  },
];

const Insightandtool = () => {
  return (
    <section className="w-full bg-white py-8 px-2">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          <span
            className="font-bold bg-gradient-to-r from-red-600 via-black to-red-600 bg-clip-text text-transparent transition duration-700"
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Insights & Tools
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-blue-50 rounded-xl shadow border border-blue-100 flex flex-col items-center px-8 py-4 min-h-[320px]">
              <img src={card.icon} alt={card.title} className="w-20 h-20 mb-4 object-contain" />
              <div className="text-xl font-semibold text-blue-900 text-center mb-3">{card.title}</div>
              <div className="text-gray-700 text-center mb-6 text-base">{card.desc}</div>
              <button className="mt-auto px-6 py-2 border border-blue-400 text-blue-900 rounded-lg font-medium bg-white hover:bg-blue-100 transition flex items-center gap-2">
                {card.btn} <span className="ml-1">&#8594;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Insightandtool
