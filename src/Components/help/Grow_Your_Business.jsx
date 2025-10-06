
import React from "react";

const features = [
  {
    icon: "📋", // Replace with your icon/image
    title: "Mini Catalog",
    desc: "Create & Manage your",
    bold: "Mini Catalog",
  },
  {
    icon: "📣", // Replace with your icon/image
    title: "Advertise",
    desc: "Advertise your Company & Products",
    bold: "Advertise",
  },
  {
    icon: "🌷", // Replace with your icon/image
    title: "Exposure",
    desc: "Get Maximum",
    bold: "Exposure",
  },
  {
    icon: "📈", // Replace with your icon/image
    title: "Ranking",
    desc: "Achieve Higher",
    bold: "Ranking",
  },
  {
    icon: "🛒", // Replace with your icon/image
    title: "Quotes",
    desc: "Get Max. Buying",
    bold: "Quotes",
  },
];

const Grow_Your_Business = () => {
  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-white to-green-50 py-6 sm:py-16 lg:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            How to Grow your Business as{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Premium Supplier?
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-800 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, idx) => (
            <div
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 sm:p-8 border border-gray-100 hover:border-green-200"
              key={idx}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Icon Container */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <span className="text-2xl sm:text-3xl filter group-hover:brightness-110 transition-all duration-300">
                    {feature.icon}
                  </span>
                </div>
                
                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.desc.split(feature.bold)[0]}
                    <span className="font-bold text-green-700 block">
                      {feature.bold}
                    </span>
                    {feature.desc.split(feature.bold)[1]}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="inline-flex items-center justify-center px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-green-600 via-green-700 to-black text-white rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl hover:from-black hover:via-green-600 hover:to-green-700 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50 min-w-[200px]">
            <span className="mr-2">🚀</span>
            I am Interested
          </button>
          <p className="mt-4 text-sm text-gray-500 max-w-md mx-auto">
            Join thousands of successful businesses growing with our platform
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grow_Your_Business;
