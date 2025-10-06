// import React from "react";
// import { useParams } from "react-router-dom";

// const PropertyStatsBar = ({
//   saleCount = 991,
//   rentCount = 4,
//   projectCount = 61,
//   dealerCount = 712,
// }) => {
//   const { city, locality } = useParams();
  
//   // Helper function to format city name for display
//   const formatCityName = (citySlug) => {
//     if (!citySlug) return "India";
//     return citySlug
//       .split('-')
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');
//   };

//   const formattedCity = formatCityName(city);
//   const formattedLocality = formatCityName(locality);
  
//   const propertyType = `Property for Sale in ${formattedCity}`;
//   const subType = locality ? `${formattedLocality} in ${formattedCity}` : `Residential Plots in ${formattedCity}`;

//   return (
//   <div className="max-w-7xl mx-auto px-2 md:px-8">
//     {/* Breadcrumb */}
//     <nav className="text-sm text-gray-600 mb-2 flex items-center space-x-2">
//       <span>Home</span>
//       <span>&gt;</span>
//       <span>{city} Property</span>Residential plot
//       <span>&gt;</span>
//       <span>{propertyType}</span>
//       <span>&gt;</span>
//       <span className="text-blue-700 font-semibold">{subType}</span>
//     </nav>
//     {/* Stats Cards */}
//     <div className="flex flex-wrap gap-4">
//       <div className="bg-white rounded-lg shadow-sm border border-gray-300 px-6 py-1 flex items-center min-w-[180px]">
//         <span className="text-blue-700 font-bold text-sm mr-2">{saleCount}</span>
//         <span className="text-gray-700 font-sm">Sale Properties</span>
//       </div>
//       <div className="bg-white rounded-lg shadow-sm border border-gray-300 px-6 py-1 flex items-center min-w-[180px]">
//         <span className="text-gray-700 font-bold text-sm mr-2">{rentCount}</span>
//         <span className="text-gray-700 font-sm">Rent Properties</span>
//       </div>
//       <div className="bg-white rounded-lg shadow-sm border border-gray-300 px-6 py-1 flex items-center min-w-[180px]">
//         <span className="text-gray-700 font-bold text-sm mr-2">{projectCount}</span>
//         <span className="text-gray-700 font-sm">Projects</span>
//       </div>
//       <div className="bg-white rounded-lg shadow-sm border border-gray-300 px-6 py-1 flex items-center min-w-[180px]">
//         <span className="text-gray-700 font-bold text-sm mr-2">{dealerCount}</span>
//         <span className="text-gray-700 font-sm">Dealers</span>
//       </div>
//     </div>
//   </div>
// );
// }

// export default PropertyStatsBar;









import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Replace with your backend API endpoint for property stats
const API_URL = "http://localhost:8000/api/property-stats";

const PropertyStatsBarIntegration = () => {
  const { city, locality } = useParams();
  const [stats, setStats] = useState({
    saleCount: 0,
    rentCount: 0,
    projectCount: 0,
    dealerCount: 0,
    loading: true,
    error: "",
  });

  // Helper function to format city name for display
  const formatCityName = (citySlug) => {
    if (!citySlug) return "India";
    return citySlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const formattedCity = formatCityName(city);
  const formattedLocality = formatCityName(locality);
  const propertyType = `Property for Sale in ${formattedCity}`;
  const subType = locality ? `${formattedLocality} in ${formattedCity}` : `Residential Plots in ${formattedCity}`;

  useEffect(() => {
    const fetchStats = async () => {
      setStats(prev => ({ ...prev, loading: true, error: "" }));
      try {
        const url = `${API_URL}?city=${encodeURIComponent(city || "")}${locality ? `&locality=${encodeURIComponent(locality)}` : ""}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch property stats.");
        const data = await res.json();
        setStats({
          saleCount: data.saleCount,
          rentCount: data.rentCount,
          projectCount: data.projectCount,
          dealerCount: data.dealerCount,
          loading: false,
          error: "",
        });
      } catch (err) {
        setStats({
          saleCount: 991,
          rentCount: 4,
          projectCount: 61,
          dealerCount: 712,
          loading: false,
          error: "Failed to load stats, showing default values.",
        });
      }
    };
    fetchStats();
  }, [city, locality]);

  return (
    <div className="max-w-7xl mx-auto px-2 md:px-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-2 flex items-center space-x-2">
        <span>Home</span>
        <span>&gt;</span>
        <span>{formattedCity} Property</span>
        <span>&gt;</span>
        <span>Residential plot</span>
        <span>&gt;</span>
        <span>{propertyType}</span>
        <span>&gt;</span>
        <span className="text-blue-700 font-semibold">{subType}</span>
      </nav>
      {stats.loading ? (
        <div className="py-4 text-gray-500">Loading stats...</div>
      ) : (
        <>
          {stats.error && (
            <div className="mb-2 text-xs text-red-500">{stats.error}</div>
          )}
          <div className="flex flex-wrap gap-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-300 px-6 py-1 flex items-center min-w-[180px]">
              <span className="text-blue-700 font-bold text-sm mr-2">{stats.saleCount}</span>
              <span className="text-gray-700 font-sm">Sale Properties</span>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-300 px-6 py-1 flex items-center min-w-[180px]">
              <span className="text-gray-700 font-bold text-sm mr-2">{stats.rentCount}</span>
              <span className="text-gray-700 font-sm">Rent Properties</span>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-300 px-6 py-1 flex items-center min-w-[180px]">
              <span className="text-gray-700 font-bold text-sm mr-2">{stats.projectCount}</span>
              <span className="text-gray-700 font-sm">Projects</span>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-300 px-6 py-1 flex items-center min-w-[180px]">
              <span className="text-gray-700 font-bold text-sm mr-2">{stats.dealerCount}</span>
              <span className="text-gray-700 font-sm">Dealers</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PropertyStatsBarIntegration;