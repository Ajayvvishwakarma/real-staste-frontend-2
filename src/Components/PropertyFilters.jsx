import React, { useState, useEffect } from "react";

const PropertyFilters = () => {
  const [filters, setFilters] = useState({
    applied: ["Independent/Builder Floor"],
    hideSeen: false,
    verified: false,
    budgetMin: "No min",
    budgetMax: "No max",
    type: "Independent/Builder Floor",
    bedrooms: [],
    construction: [],
    postedBy: [],
    photos: false,
    videos: false,
    // Enhanced filters
    location: "",
    localities: [],
    amenities: [],
    furnishingStatus: "",
    parking: "",
    preferredTenants: [],
    ageOfProperty: "",
    floorRange: { min: "", max: "" },
    areaRange: { min: "", max: "" },
    sortBy: "relevance",
    availability: "all"
  });

  const [activeTab, setActiveTab] = useState("basic");
  const [searchTerm, setSearchTerm] = useState("");
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleFilter = (key, value) => {
    setFilters((prev) => {
      const arr = prev[key];
      return {
        ...prev,
        [key]: arr.includes(value)
          ? arr.filter((v) => v !== value)
          : [...arr, value],
      };
    });
  };

  const resetFilters = () => {
    setFilters({
      applied: [],
      hideSeen: false,
      verified: false,
      budgetMin: "No min",
      budgetMax: "No max",
      type: "Independent/Builder Floor",
      bedrooms: [],
      construction: [],
      postedBy: [],
      photos: false,
      videos: false,
      location: "",
      localities: [],
      amenities: [],
      furnishingStatus: "",
      parking: "",
      preferredTenants: [],
      ageOfProperty: "",
      floorRange: { min: "", max: "" },
      areaRange: { min: "", max: "" },
      sortBy: "relevance",
      availability: "all"
    });
    setSearchTerm("");
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.hideSeen) count++;
    if (filters.verified) count++;
    if (filters.budgetMin !== "No min") count++;
    if (filters.budgetMax !== "No max") count++;
    if (filters.bedrooms.length > 0) count++;
    if (filters.construction.length > 0) count++;
    if (filters.postedBy.length > 0) count++;
    if (filters.photos || filters.videos) count++;
    if (filters.location) count++;
    if (filters.localities.length > 0) count++;
    if (filters.amenities.length > 0) count++;
    if (filters.furnishingStatus) count++;
    if (filters.parking) count++;
    if (filters.preferredTenants.length > 0) count++;
    if (filters.ageOfProperty) count++;
    return count;
  };

  return (
    <div className="w-full md:w-80 flex-shrink-0">
      {/* Clean Card Container */}
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        {/* Enhanced Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters
            </h2>
            <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
              {getActiveFiltersCount()} active
            </span>
          </div>
        </div>
        
        <div className="p-4">
          {/* Enhanced Content */}
          <div className="space-y-5">
            
            {/* Applied Filters */}
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium text-gray-800 text-sm">Applied Filters</h3>
                <button
                  onClick={() => setFilters({ ...filters, applied: [] })}
                  className="text-blue-600 text-xs font-medium hover:text-blue-800 transition-colors"
                >
                  Clear All
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {filters.applied.map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full border border-blue-200 flex items-center gap-1"
                  >
                    {f}
                    <button
                      onClick={() =>
                        setFilters({
                          ...filters,
                          applied: filters.applied.filter((x) => x !== f),
                        })
                      }
                      className="text-blue-600 hover:text-blue-800 font-bold text-sm"
                    >
                      ×
                    </button>
                  </span>
                ))}
                {filters.applied.length === 0 && (
                  <span className="text-gray-500 text-xs italic">No filters applied</span>
                )}
              </div>
            </div>

            {/* Quick Options */}
            <div>
              <h3 className="font-medium text-gray-800 mb-3 text-sm">Quick Options</h3>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors cursor-pointer">
                  <span className="text-gray-700 text-sm">Hide already seen</span>
                  <input
                    type="checkbox"
                    checked={filters.hideSeen}
                    onChange={() => setFilters({ ...filters, hideSeen: !filters.hideSeen })}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  />
                </label>
                <label className="flex items-center justify-between p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors cursor-pointer">
                  <span className="text-gray-700 text-sm">Verified properties</span>
                  <input
                    type="checkbox"
                    checked={filters.verified}
                    onChange={() => setFilters({ ...filters, verified: !filters.verified })}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  />
                </label>
              </div>
            </div>

            {/* Budget */}
            <div>
              <h4 className="font-medium text-gray-800 mb-3 text-sm">Budget Range</h4>
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={filters.budgetMin}
                  onChange={(e) => setFilters({ ...filters, budgetMin: e.target.value })}
                  className="p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>No min</option>
                  <option>20 L</option>
                  <option>50 L</option>
                  <option>1 Cr</option>
                  <option>2 Cr</option>
                </select>
                <select
                  value={filters.budgetMax}
                  onChange={(e) => setFilters({ ...filters, budgetMax: e.target.value })}
                  className="p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>No max</option>
                  <option>50 L</option>
                  <option>1 Cr</option>
                  <option>2 Cr</option>
                  <option>5 Cr</option>
                </select>
              </div>
            </div>

            {/* Type of Property */}
            <div>
              <h4 className="font-medium text-gray-800 mb-3 text-sm">Property Type</h4>
              <div className="space-y-1">
                {[
                  "Residential Apartment",
                  "Residential Land",
                  "Independent House/Villa",
                  "Independent/Builder Floor",
                  "Farm House",
                ].map((t) => (
                  <button
                    key={t}
                    onClick={() => setFilters({ ...filters, type: t })}
                    className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      filters.type === t
                        ? "bg-blue-600 text-white"
                        : "bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Bedrooms */}
            <div>
              <h4 className="font-medium text-gray-800 mb-3 text-sm">Bedrooms</h4>
              <div className="grid grid-cols-2 gap-2">
                {["1 RK/1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK"].map((b) => (
                  <button
                    key={b}
                    onClick={() => toggleFilter("bedrooms", b)}
                    className={`px-3 py-2 text-xs rounded-md border transition-colors ${
                      filters.bedrooms.includes(b)
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:bg-blue-50"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Construction Status */}
            <div>
              <h4 className="font-medium text-gray-800 mb-3 text-sm">Construction Status</h4>
              <div className="space-y-2">
                {["New Launch", "Under Construction", "Ready to move"].map((status) => (
                  <label key={status} className="flex items-center gap-3 p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.construction.includes(status)}
                      onChange={() => toggleFilter("construction", status)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 text-sm">{status}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Posted By */}
            <div>
              <h4 className="font-medium text-gray-800 mb-3 text-sm">Posted By</h4>
              <div className="grid grid-cols-2 gap-2">
                {["Owner", "Builder", "Dealer", "Featured Dealer"].map((poster) => (
                  <label key={poster} className="flex items-center gap-2 p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.postedBy.includes(poster)}
                      onChange={() => toggleFilter("postedBy", poster)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 text-xs">{poster}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Media Options */}
            <div>
              <h3 className="font-medium text-gray-800 mb-3 text-sm">Media Options</h3>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors cursor-pointer">
                  <span className="text-gray-700 text-sm">Properties with photos</span>
                  <input
                    type="checkbox"
                    checked={filters.photos}
                    onChange={() => setFilters({ ...filters, photos: !filters.photos })}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  />
                </label>
                <label className="flex items-center justify-between p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors cursor-pointer">
                  <span className="text-gray-700 text-sm">Properties with videos</span>
                  <input
                    type="checkbox"
                    checked={filters.videos}
                    onChange={() => setFilters({ ...filters, videos: !filters.videos })}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Enhanced Footer */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex gap-3">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-md font-medium text-sm transition-colors shadow-sm">
                Apply Filters
              </button>
              <button 
                onClick={resetFilters}
                className="px-4 py-2.5 border border-gray-300 text-gray-700 rounded-md font-medium text-sm hover:bg-gray-50 transition-colors"
              >
                Reset
              </button>
            </div>
            
            {/* Filter Count */}
            <div className="mt-3 text-center">
              <span className="text-xs text-gray-500">
                {getActiveFiltersCount() === 0 ? 'No filters applied' : `${getActiveFiltersCount()} filter${getActiveFiltersCount() > 1 ? 's' : ''} applied`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;