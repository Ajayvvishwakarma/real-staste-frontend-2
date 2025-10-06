import React from 'react';
import { useNavigate } from 'react-router-dom';

const InsightsNavigation = () => {
  const navigate = useNavigate();

  const navigationItems = [
    {
      title: "Understand Localities",
      path: "/insights/understand-localities",
      icon: "i"
    },
    {
      title: "Price Trends",
      path: "/insights/price-trends",
      icon: "📈"
    },
    {
      title: "Tools & Utilities",
      path: "/insights/tools-utilities",
      icon: "🛠"
    },
    {
      title: "Resident Reviews",
      path: "/insights/resident-reviews",
      icon: "📝"
    },
    {
      title: "Know More",
      path: "/insights/know-more",
      icon: "ℹ️"
    }
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {navigationItems.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200"
          >
            <span className="text-2xl mr-3">{item.icon}</span>
            <div>
              <h3 className="font-medium text-gray-800">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightsNavigation;