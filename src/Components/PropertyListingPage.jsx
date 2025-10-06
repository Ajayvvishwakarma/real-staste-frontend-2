import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import PropertyListingPage2 from "./PropertyListingPage2";
import PropertySearchCard from "./PropertySearchCard";
import PropertyFilters from "./PropertyFilters";
import { getCityData, formatCityName } from "../data/cityPropertyData";

// ViewMoreResults component
const ViewMoreResults = () => (
  <div className="mt-8 bg-white rounded-xl w-full shadow border border-gray-200 p-6">
    <h3 className="text-lg font-bold text-gray-700 mb-2">
      Get Expert Consultation
    </h3>
    <p className="text-gray-600 mb-4 text-base">
      Property experts are online. Get consultation now from the comfort of
      your home. <span className="text-blue-600 cursor-pointer">Connect Now</span>
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-2">Buying Assistance</h4>
        <p className="text-blue-600 text-sm">
          Get help finding the perfect property for your needs
        </p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
        <h4 className="font-semibold text-green-800 mb-2">Legal Consultation</h4>
        <p className="text-green-600 text-sm">
          Expert legal advice for property transactions
        </p>
      </div>
    </div>
  </div>
);

const PropertyListingPage = ({ propertyType = 'buy' }) => {
  const { city } = useParams();
  const location = useLocation();
  // Format city param for data lookup
  let cityName = city || "Bangalore";
  // Convert hyphens to spaces and capitalize for display/data
  cityName = cityName.replace(/-/g, ' ');
  // Special case for NCR and Hyderabad
  if (cityName.toLowerCase() === "delhi ncr") cityName = "Delhi / NCR";
  if (cityName.toLowerCase() === "hyderabad") cityName = "Hyderabad Metropolitan Region";
  // Get city-specific data based on property type
  const actualPropertyType = location.pathname.includes('/rent') ? 'rent' : 'buy';
  const cityData = getCityData(cityName, actualPropertyType);
  const formattedCity = formatCityName(cityName);

  // Parse URL search parameters for filters
  const searchParams = new URLSearchParams(location.search);
  const urlPropertyTypes = searchParams.get('propertyTypes')?.split(',') || [];
  const urlBedrooms = searchParams.get('bedrooms')?.split(',') || [];
  const urlBudget = searchParams.get('budget')?.split('-').map(Number) || [];
  const urlConstruction = searchParams.get('construction')?.split(',') || [];
  const urlPostedBy = searchParams.get('postedBy')?.split(',') || [];

  // Use city-specific properties from the data file
  const cityProperties = cityData && cityData.properties ? cityData.properties : [];
  
  // Generate more realistic properties based on city data
  const generateCityProperties = (cityData, propertyType) => {
    const baseProperties = [];
    
    // Generate properties based on city localities
    cityData.localities.slice(0, 6).forEach((locality, index) => {
      const configurations = ['1 BHK', '2 BHK', '3 BHK', '4 BHK'];
      const randomConfig = configurations[index % configurations.length];
      const basePrice = cityData.name === 'Mumbai' ? 80 : cityData.name === 'Delhi' ? 70 : cityData.name === 'Gurgaon' ? 60 : 45;
      const multiplier = randomConfig === '1 BHK' ? 0.7 : randomConfig === '2 BHK' ? 1 : randomConfig === '3 BHK' ? 1.5 : 2;
      const price = Math.round(basePrice * multiplier);
      
      baseProperties.push({
        id: index + 1,
        title: `${randomConfig} ${propertyType === 'rent' ? 'Apartment for Rent' : 'Flat for Sale'} in ${locality.name}`,
        price: propertyType === 'rent' ? `₹ ${Math.round(price * 0.6)}K/month` : `₹ ${price} Lac`,
        pricePerSqft: `₹ ${Math.round(price * 10)} per sqft`,
        area: `${randomConfig === '1 BHK' ? '600' : randomConfig === '2 BHK' ? '1000' : randomConfig === '3 BHK' ? '1500' : '2000'} sqft`,
        configuration: randomConfig,
        location: locality.name,
        readyToMove: index % 2 === 0,
        images: ["/api/placeholder/300/200"],
        features: index % 3 === 0 ? ["Parking", "Lift", "Security"] : index % 3 === 1 ? ["Garden", "Parking", "Swimming Pool"] : ["Furnished", "Lift", "Power Backup"],
        postedBy: index % 2 === 0 ? "Owner" : "Builder",
        description: `${propertyType === 'rent' ? 'Well-maintained' : 'Spacious'} ${randomConfig} ${propertyType === 'rent' ? 'apartment' : 'flat'} in prime location`,
        propertyType: randomConfig.includes('1') ? 'Flat/Apartment' : randomConfig.includes('2') ? 'Flat/Apartment' : 'Independent House/Villa',
        constructionStatus: index % 3 === 0 ? 'Ready to move' : index % 3 === 1 ? 'Under Construction' : 'New Launch'
      });
    });
    
    return baseProperties;
  };

  // Get base properties
  let properties = cityProperties.length > 0 ? cityProperties.map((prop, index) => ({
    id: prop.id || index + 1,
    title: prop.title || `Property in ${formattedCity}`,
    price: prop.price || "₹ 45 Lac",
    pricePerSqft: "₹ 4,500 per sqft",
    area: prop.area || "1000 sqft",
    configuration: prop.area?.includes('1 BHK') ? '1 BHK' : prop.area?.includes('2 BHK') ? '2 BHK' : prop.area?.includes('3 BHK') ? '3 BHK' : '2 BHK',
    location: prop.location || cityData.localities[0]?.name,
    readyToMove: prop.saleType === 'Ready to Move' || index % 2 === 0,
    images: [prop.image || "/api/placeholder/300/200"],
    features: ["Parking", "Lift", "Security"],
    postedBy: prop.agentType === 'Owner' ? 'Owner' : 'Builder',
    description: prop.description || "Premium property in prime location",
    propertyType: 'Flat/Apartment',
    constructionStatus: prop.saleType === 'New' ? 'New Launch' : 'Ready to move'
  })) : generateCityProperties(cityData, propertyType);

  // Apply filters to properties
  const filteredProperties = properties.filter(property => {
    // Filter by property types
    if (urlPropertyTypes.length > 0 && !urlPropertyTypes.includes(property.propertyType)) {
      return false;
    }
    
    // Filter by bedrooms
    if (urlBedrooms.length > 0 && !urlBedrooms.some(bedroom => property.configuration.includes(bedroom.replace(' BHK', '')))) {
      return false;
    }
    
    // Filter by budget (simplified - would need proper price parsing in real app)
    if (urlBudget.length === 2) {
      const propertyPrice = parseFloat(property.price.replace(/[^\d.]/g, ''));
      if (propertyPrice < urlBudget[0] || propertyPrice > urlBudget[1]) {
        return false;
      }
    }
    
    // Filter by construction status
    if (urlConstruction.length > 0 && !urlConstruction.includes(property.constructionStatus)) {
      return false;
    }
    
    // Filter by posted by
    if (urlPostedBy.length > 0 && !urlPostedBy.includes(property.postedBy)) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen  bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 pt-24">
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Search Results Header */}
            <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-800">
                  Properties for {actualPropertyType === 'buy' ? 'Sale' : 'Rent'} in {formattedCity}
                </h1>
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">
                    {filteredProperties.length} Properties {urlPropertyTypes.length > 0 || urlBedrooms.length > 0 || urlBudget.length > 0 || urlConstruction.length > 0 || urlPostedBy.length > 0 ? '(Filtered)' : ''}
                  </span>
                  <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                    <option>Most Relevant</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                  </select>
                </div>
              </div>
              {/* Breadcrumb */}
              <nav className="text-sm text-gray-600">
                <span>Home</span>
                <span className="mx-2">›</span>
                <span>Property</span>
                <span className="mx-2">›</span>
                <span>{formattedCity}</span>
                <span className="mx-2">›</span>
                <span className="text-blue-600 font-medium">
                  Properties for {actualPropertyType === 'buy' ? 'Sale' : 'Rent'}
                </span>
              </nav>
              {/* Show error if no city data found */}
              {!cityData && (
                <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200 text-red-700">
                  Sorry, no data found for this city.
                </div>
              )}
              {/* Applied Filters Summary */}
              {(urlPropertyTypes.length > 0 || urlBedrooms.length > 0 || urlBudget.length > 0 || urlConstruction.length > 0 || urlPostedBy.length > 0) && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-blue-800 font-medium">Applied Filters:</span>
                      {urlPropertyTypes.map(type => (
                        <span key={type} className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">{type}</span>
                      ))}
                      {urlBedrooms.map(bedroom => (
                        <span key={bedroom} className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">{bedroom}</span>
                      ))}
                      {urlBudget.length === 2 && (
                        <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">₹{urlBudget[0]/100000}L - ₹{urlBudget[1]/100000}L</span>
                      )}
                      {urlConstruction.map(status => (
                        <span key={status} className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">{status}</span>
                      ))}
                      {urlPostedBy.map(poster => (
                        <span key={poster} className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">{poster}</span>
                      ))}
                    </div>
                    <button 
                      onClick={() => window.location.href = window.location.pathname}
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Clear All
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Property Cards */}
            <div className="space-y-4">
              {filteredProperties.length > 0 ? (
                filteredProperties.map((property) => (
                  <PropertySearchCard key={property.id} property={property} />
                ))
              ) : (
                <div className="bg-white rounded-xl shadow border border-gray-200 p-8 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">No Properties Found</h3>
                  <p className="text-gray-600 mb-4">
                    No properties match your current filters in {formattedCity}. Try adjusting your search criteria.
                  </p>
                  <button 
                    onClick={() => window.location.href = window.location.pathname}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
            
            <PropertyListingPage2 />
            <ViewMoreResults />
            
            {/* Top Localities Section */}
            <div className="mt-8 bg-white rounded-xl w-full shadow border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-700 mb-2">
                Top Localities of {formattedCity}
              </h3>
              <p className="text-gray-600 mb-4 text-base">
                Discover the best localities in {formattedCity} for property sales with
                excellent transport facility, a vibrant lifestyle, safety,{" "}
                <span className="text-blue-600 cursor-pointer">More..</span>
              </p>
              <div className="flex flex-wrap gap-3">
                {/* Display city-specific localities */}
                {cityData.localities.map((loc) => (
                  <span
                    key={loc.name}
                    className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm border border-blue-200 cursor-pointer hover:bg-blue-100">
                    {loc.name} <span className="text-blue-400">({loc.count})</span>
                  </span>
                ))}
                <span className="text-blue-600 font-semibold text-sm cursor-pointer ml-2">
                  + View All
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0 h-screen sticky top-0">
            <PropertyFilters />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListingPage;