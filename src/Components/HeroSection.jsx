import React, { useEffect, useRef, useState } from 'react';
import { ChevronDownIcon, MapPinIcon, MicrophoneIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const HeroSection = ({ selectedCity = 'India' }) => {
  const navigate = useNavigate();
  
  // Function to get city-specific background image
  const getCityBackgroundImage = (city) => {
    const cityImages = {
      'New Delhi': '/cities/newdelhi.png',
      'Mumbai': '/cities/mumbai.png',
      'Bangalore': '/cities/banglore.png',
      'Chennai': '/cities/chennai.png',
      'Hyderabad': '/cities/haderabad.png',
      'Pune': '/cities/pune.png',
      'Kolkata': '/cities/kolkata.png',
      'Ahmedabad': '/cities/ahemdabad.png',
      'Jaipur': '/city-bg.jpg',
      'Lucknow': '/cities/lucknow.png',
      'Surat': '/cities/ahemdabad.png', // Using Ahmedabad as fallback for Gujarat cities
      'Kanpur': '/cities/lucknow.png', // Using Lucknow as fallback for UP cities
      'Nagpur': '/city-bg.jpg',
      'Indore': '/city-bg.jpg',
      'Thane': '/cities/thane.png',
      'Bhopal': '/city-bg.jpg',
      'Visakhapatnam': '/cities/haderabad.png', // Using Hyderabad as fallback for AP cities
      'Pimpri-Chinchwad': '/cities/pune.png',
      'Patna': '/city-bg.jpg',
      'Vadodara': '/cities/ahemdabad.png',
      'Ghaziabad': '/cities/newdelhi.png',
      'Ludhiana': '/cities/newdelhi.png',
      'Agra': '/cities/newdelhi.png',
      'Nashik': '/cities/pune.png',
      'Faridabad': '/cities/newdelhi.png',
      'Meerut': '/cities/newdelhi.png',
      'Rajkot': '/cities/ahemdabad.png',
      'Kalyan-Dombivali': '/cities/mumbai.png',
      'Vasai-Virar': '/cities/mumbai.png',
      'Varanasi': '/cities/lucknow.png',
      'Srinagar': '/city-bg.jpg',
      'Aurangabad': '/cities/pune.png',
      'Dhanbad': '/city-bg.jpg',
      'Amritsar': '/cities/newdelhi.png',
      'Navi Mumbai': '/cities/mumbai.png',
      'Allahabad': '/cities/lucknow.png',
      'Ranchi': '/city-bg.jpg',
      'Howrah': '/cities/kolkata.png',
      'Coimbatore': '/cities/chennai.png',
      'Jabalpur': '/city-bg.jpg',
      'Gwalior': '/city-bg.jpg',
      'Vijayawada': '/cities/haderabad.png',
      'Jodhpur': '/city-bg.jpg',
      'Madurai': '/cities/chennai.png',
      'Raipur': '/city-bg.jpg',
      'Kota': '/city-bg.jpg',
      'Chandigarh': '/cities/newdelhi.png',
      'Gurgaon': '/cities/gurgaon.png',
      'Noida': '/cities/noida.png',
      'India': '/city-bg.jpg',
      'All India': '/city-bg.jpg'
    };
    
    return cityImages[city] || '/city-bg.jpg';
  };

  const [activeTab, setActiveTab] = useState('Commercial');
  const [selectedPropertyType, setSelectedPropertyType] = useState('Buy');
  const [selectedCommercialType, setSelectedCommercialType] = useState('All Commercial');
  const [selectedResidentialType, setSelectedResidentialType] = useState('All Residential');
  const [selectedPlotResidentialType, setSelectedPlotResidentialType] = useState('Residential');
  const [selectedProjectType, setSelectedProjectType] = useState('Residential Project');
  const [searchQuery, setSearchQuery] = useState('');
  const [showPropertyDropdown, setShowPropertyDropdown] = useState(false);
  const [showCommercialDropdown, setShowCommercialDropdown] = useState(false);
  const [showResidentialDropdown, setShowResidentialDropdown] = useState(false);
  const [showPlotResidentialDropdown, setShowPlotResidentialDropdown] = useState(false);
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);
  const [showComprehensiveFilters, setShowComprehensiveFilters] = useState(false);

  // Filter states
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [budgetRange, setBudgetRange] = useState([0, 10000000]);
  const [selectedBedrooms, setSelectedBedrooms] = useState([]);
  const [selectedConstructionStatus, setSelectedConstructionStatus] = useState([]);
  const [selectedPostedBy, setSelectedPostedBy] = useState([]);
  const [activeFilterTab, setActiveFilterTab] = useState('budget');

  // Commercial specific states
  const [selectedCommercialAction, setSelectedCommercialAction] = useState('Buy');
  const [showCommercialFilters, setShowCommercialFilters] = useState(false);
  const [showCommercialComprehensiveFilters, setShowCommercialComprehensiveFilters] = useState(false);
  const [showCommercialBuyFilters, setShowCommercialBuyFilters] = useState(false);

  // New Launch specific states
  const [selectedNewLaunchTypes, setSelectedNewLaunchTypes] = useState([]);
  const [showNewLaunchFilters, setShowNewLaunchFilters] = useState(false);

  // Projects specific states  
  const [selectedProjectTypes, setSelectedProjectTypes] = useState([]);
  const [showProjectFilters, setShowProjectFilters] = useState(false);

  // Plots/Land specific states
  const [selectedPlotTypes, setSelectedPlotTypes] = useState([]);
  const [showPlotFilters, setShowPlotFilters] = useState(false);

  // Mobile-specific states
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 640 : false);
  const inputRef = useRef(null);

  const navigationTabs = [
    { id: 'Buy', name: 'Buy' },
    { id: 'Rent', name: 'Rent' },
    { id: 'New Launch', name: 'New Launch', hasNew: true },
    { id: 'Commercial', name: 'Commercial' },
    { id: 'Plots/Land', name: 'Plots/Land' },
    { id: 'Projects', name: 'Projects' },
    { id: 'Post Property', name: 'Post Property', isFree: true },
  ];

  const propertyTypes = ['Buy', 'Rent', 'PG'];
  const commercialTypes = [
    'All Commercial',
    'Office Space',
    'Shop/Showroom',
    'Commercial Land',
    'Warehouse/Godown',
    'Industrial Building',
  ];

  const residentialTypes = [
    'All Residential',
    'Apartment',
    'Builder Floor',
    'Farm House',
    'House/Villa',
    'Penthouse',
    'Studio Apartment',
  ];

  const plotResidentialTypes = [
    'Residential',
    'Residential Plot',
    'Commercial Plot',
    'Agricultural Land',
    'Industrial Plot',
    'Institutional Plot',
  ];

  const projectTypes = [
    'Residential Project',
    'Commercial Project',
    'Mixed Use Project',
    'Villa Project',
    'Apartment Project',
    'Plotted Development',
  ];

  // Filter options
  const propertyTypeOptions = [
    'Flat/Apartment',
    'Independent/Builder Floor',
    'Independent House/Villa',
    'Residential Land',
    '1 RK/ Studio Apartment',
    'Farm House',
    'Serviced Apartments',
    'Other'
  ];

  const bedroomOptions = [
    '1 RK/1 BHK',
    '2 BHK',
    '3 BHK',
    '4 BHK',
    '4+ BHK'
  ];

  const constructionStatusOptions = [
    'New Launch',
    'Under Construction',
    'Ready to move'
  ];

  const postedByOptions = [
    'Owner',
    'Builder',
    'Dealer'
  ];

  // Commercial specific options
  const commercialActionOptions = ['Buy', 'Lease', 'Invest'];

  // New Launch specific options
  const newLaunchTypeOptions = [
    'New Launch',
    'Under Construction', 
    'Ready to move'
  ];

  // Project specific options
  const projectTypeOptions = [
    'New Launch',
    'Under Construction',
    'Ready to move'
  ];

  // Plot/Land specific options
  const plotTypeOptions = [
    'Residential Plots/Land',
    'Commercial Plots/Land'
  ];

  // Keep isMobile in sync with window size
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // autofocus input when mobile search opens
  useEffect(() => {
    if (mobileSearchOpen && isMobile && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [mobileSearchOpen, isMobile]);

  const [cityError, setCityError] = useState("");

  const validCitySlugs = ["gurgaon", "noida", "mumbai", "bangalore", "delhi"];

  const handleSearch = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setCityError("");
    const cityFromSearch = extractCityFromSearch(searchQuery);
    if (!cityFromSearch || !validCitySlugs.includes(cityFromSearch)) {
      setCityError("Invalid city. Please enter a valid city name.");
      return;
    }
    // ...existing code for navigation
    if (activeTab === 'Buy' || selectedPropertyType === 'Buy') {
      const searchParams = new URLSearchParams();
      if (selectedPropertyTypes.length > 0) {
        searchParams.set('propertyTypes', selectedPropertyTypes.join(','));
      }
      if (selectedBedrooms.length > 0) {
        searchParams.set('bedrooms', selectedBedrooms.join(','));
      }
      if (budgetRange[0] > 0 || budgetRange[1] < 10000000) {
        searchParams.set('budget', `${budgetRange[0]}-${budgetRange[1]}`);
      }
      if (selectedConstructionStatus.length > 0) {
        searchParams.set('construction', selectedConstructionStatus.join(','));
      }
      if (selectedPostedBy.length > 0) {
        searchParams.set('postedBy', selectedPostedBy.join(','));
      }
      const queryString = searchParams.toString();
      navigate(`/buy/${cityFromSearch}${queryString ? `?${queryString}` : ''}`);
    } else if (activeTab === 'Rent' || selectedPropertyType === 'Rent') {
      const searchParams = new URLSearchParams();
      if (selectedPropertyTypes.length > 0) {
        searchParams.set('propertyTypes', selectedPropertyTypes.join(','));
      }
      if (selectedBedrooms.length > 0) {
        searchParams.set('bedrooms', selectedBedrooms.join(','));
      }
      if (budgetRange[0] > 0 || budgetRange[1] < 10000000) {
        searchParams.set('budget', `${budgetRange[0]}-${budgetRange[1]}`);
      }
      if (selectedConstructionStatus.length > 0) {
        searchParams.set('construction', selectedConstructionStatus.join(','));
      }
      if (selectedPostedBy.length > 0) {
        searchParams.set('postedBy', selectedPostedBy.join(','));
      }
      const queryString = searchParams.toString();
      navigate(`/rent/${cityFromSearch}${queryString ? `?${queryString}` : ''}`);
    } else if (activeTab === 'Commercial') {
      navigate(`/commercial/${cityFromSearch}`);
    } else if (activeTab === 'Plots/Land') {
      navigate(`/plots/${cityFromSearch}`);
    } else if (activeTab === 'Projects') {
      navigate(`/projects/${cityFromSearch}`);
    } else {
      navigate('/buy');
    }
  };

  // Helper function to extract city from search query
  const extractCityFromSearch = (query) => {
    if (!query) return null;
    
    const cities = [
      'gurgaon', 'noida', 'mumbai', 'bangalore', 'delhi', 'pune', 'chennai', 'hyderabad',
      'greater noida', 'new delhi', 'dwarka', 'sector', 'thane', 'navi mumbai',
      'andheri', 'borivali', 'malad', 'kandivali', 'powai', 'bandra',
      'electronic city', 'whitefield', 'koramangala', 'hsr layout', 'btm layout',
      'rohini', 'janakpuri', 'laxmi nagar', 'pitampura'
    ];
    const lowerQuery = query.toLowerCase();
    
    // First check for exact city matches
    for (const city of cities) {
      if (lowerQuery.includes(city)) {
        // Map some cities to main cities for consistent routing
        if (city.includes('noida') || city === 'greater noida') return 'noida';
        if (city.includes('delhi') || ['rohini', 'janakpuri', 'laxmi nagar', 'pitampura', 'dwarka'].includes(city)) return 'delhi';
        if (city.includes('mumbai') || ['andheri', 'borivali', 'malad', 'kandivali', 'powai', 'bandra', 'thane', 'navi mumbai'].includes(city)) return 'mumbai';
        if (city.includes('bangalore') || ['electronic city', 'whitefield', 'koramangala', 'hsr layout', 'btm layout'].includes(city)) return 'bangalore';
        if (city.includes('gurgaon')) return 'gurgaon';
        if (city.includes('pune')) return 'pune';
        if (city.includes('chennai')) return 'chennai';
        if (city.includes('hyderabad')) return 'hyderabad';
        
        return city.toLowerCase();
      }
    }
    
    return null;
  };

  // Helper functions to get display text for filter tabs
  const getBudgetDisplayText = () => {
    if (budgetRange[0] === 0 && budgetRange[1] === 10000000) {
      return 'Budget';
    }
    
    const formatAmount = (amount) => {
      if (amount >= 10000000) return `${(amount / 10000000).toFixed(1)}Cr`;
      if (amount >= 100000) return `${(amount / 100000).toFixed(1)}L`;
      if (amount >= 1000) return `${(amount / 1000).toFixed(1)}K`;
      return amount.toString();
    };
    
    const minText = formatAmount(budgetRange[0]);
    const maxText = formatAmount(budgetRange[1]);
    
    if (budgetRange[0] === 0) return `Under ₹${maxText}`;
    if (budgetRange[1] >= 10000000) return `₹${minText}+`;
    return `₹${minText}-${maxText}`;
  };

  const getBedroomDisplayText = () => {
    if (selectedBedrooms.length === 0) return 'Bedroom';
    if (selectedBedrooms.length === 1) return selectedBedrooms[0];
    if (selectedBedrooms.length <= 2) return selectedBedrooms.join(', ');
    return `${selectedBedrooms.slice(0, 2).join(', ')} +${selectedBedrooms.length - 2}`;
  };

  const getConstructionDisplayText = () => {
    if (selectedConstructionStatus.length === 0) return 'Construction';
    if (selectedConstructionStatus.length === 1) return selectedConstructionStatus[0];
    if (selectedConstructionStatus.length <= 2) return selectedConstructionStatus.join(', ');
    return `${selectedConstructionStatus.slice(0, 2).join(', ')} +${selectedConstructionStatus.length - 2}`;
  };

  const getPostedByDisplayText = () => {
    if (selectedPostedBy.length === 0) return 'Posted By';
    if (selectedPostedBy.length === 1) return selectedPostedBy[0];
    if (selectedPostedBy.length <= 2) return selectedPostedBy.join(', ');
    return `${selectedPostedBy.slice(0, 2).join(', ')} +${selectedPostedBy.length - 2}`;
  };

  const getResidentialDisplayText = () => {
    if (selectedPropertyTypes.length === 0) return selectedResidentialType;
    if (selectedPropertyTypes.length === 1) return selectedPropertyTypes[0];
    return `${selectedPropertyTypes.length} selected`;
  };

  const getCommercialDisplayText = () => {
    if (selectedPropertyTypes.length === 0) return selectedPropertyType;
    if (selectedPropertyTypes.length === 1) return selectedPropertyTypes[0];
    return `${selectedPropertyTypes.length} selected`;
  };

  const showTabs = !(isMobile && mobileSearchOpen);

  return (
    <>
      {/* Hero BG */}
      <section 
        className="relative w-full h-[420px] sm:h-[420px] md:h-[560px] lg:h-[620px] overflow-hidden bg-cover bg-center bg-no-repeat bg-transparent"
        style={{
          backgroundImage: `url('${getCityBackgroundImage(selectedCity)}')`
        }}
      >
      </section>
      {/* Mobile Search Bar */}
      <div className="relative -mt-25 z-45 px-4 lg:hidden mb-8">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-lg border border-gray-300 shadow-lg">
            <div className="flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='Search "Flats for rent in sector 77 Noida"'
                className="flex-1 px-4 py-3 text-sm border-0 rounded-l-lg focus:outline-none placeholder:text-gray-400"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSearch();
                  }
                }}
              />
              <button
                type="button"
                onClick={() => console.log('Location clicked')}
                className="px-3 py-3 text-green-600 hover:text-white bg-white hover:bg-gradient-to-r hover:from-green-600 hover:to-black border-l border-gray-300 transition-all duration-300 ease-in-out"
              >
                <MapPinIcon className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => console.log('Voice search clicked')}
                className="px-3 py-3 text-green-600 hover:text-white bg-white hover:bg-gradient-to-r hover:from-green-600 hover:to-black border-l border-gray-300 rounded-r-lg transition-all duration-300 ease-in-out"
              >
                <MicrophoneIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Card Section */}
      <section className="relative -mt-20 sm:-mt-20 md:-mt-28 lg:-mt-22 z-45 mb-0 lg:mb-[-82px]">
        <div className="w-full max-w-5xl mx-auto px-3 sm:px-6 md:px-8 lg:px-10">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-visible hidden lg:block">
            {/* NAV TABS */}
            <div className="flex overflow-x-auto border-b border-gray-200 scrollbar-hide">
              {navigationTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    // Handle Post Property redirect
                    if (tab.id === 'Post Property') {
                      navigate('/post-property');
                      return;
                    }
                    
                    setActiveTab(tab.id);
                    // Close dropdowns when switching tabs
                    setShowPropertyDropdown(false);
                    setShowCommercialDropdown(false);
                    setShowCommercialComprehensiveFilters(false);
                    setShowCommercialBuyFilters(false);
                    setShowResidentialDropdown(false);
                    setShowPlotResidentialDropdown(false);
                    setShowProjectDropdown(false);
                    setShowComprehensiveFilters(false);
                    setShowCommercialFilters(false);
                    setShowNewLaunchFilters(false);
                    setShowProjectFilters(false);
                    setShowPlotFilters(false);
                  }}
                  className={`flex-shrink-0 px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium transition-all duration-200 relative whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-green-600 border-b-2 border-green-600 bg-white'
                      : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="flex items-center gap-1 sm:gap-2">
                    {tab.name}
                    {tab.hasNew && (
                      <span className="bg-red-500 text-white text-[10px] px-1 py-0.5 rounded-full">NEW</span>
                    )}
                    {tab.isFree && (
                      <span className="bg-yellow-300 text-black text-[10px] px-1 sm:px-2 py-0.5 rounded font-bold">FREE</span>
                    )}
                  </span>
                </button>
              ))}
            </div>

            {/* Search Section - Desktop */}
            <div className="p-3 sm:p-6 md:p-8">
              <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6 items-stretch lg:items-center">

                {/* Dropdowns */}
                <div className="flex gap-2 sm:gap-3 md:gap-4">
                  {/* Residential Dropdown - Only show when Buy or Rent tab is selected */}
                  {(activeTab === 'Buy' || activeTab === 'Rent') && (
                    <div className="relative flex-1 sm:flex-none">
                      <button
                        onClick={() => {
                          setShowComprehensiveFilters((s) => !s);
                          setShowResidentialDropdown(false);
                        }}
                        className="flex items-center justify-between w-full sm:w-32 md:w-40 px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg"
                        aria-expanded={showComprehensiveFilters}
                      >
                        <span className="truncate">{getResidentialDisplayText()}</span>
                        <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                      </button>
                      
                      {/* Comprehensive Filter Dropdown */}
                      {showComprehensiveFilters && (
                        <div className="absolute top-full left-0 mt-1 w-[800px] bg-white border border-gray-200 rounded-lg shadow-xl z-50 p-6">
                          
                          {/* Property Type Checkboxes */}
                          <div className="mb-6">
                            <div className="flex justify-between items-center mb-4">
                              <h3 className="text-sm font-medium text-gray-900">Property Types</h3>
                              <button 
                                onClick={() => setSelectedPropertyTypes([])}
                                className="text-xs text-blue-600 hover:text-blue-800"
                              >
                                Clear
                              </button>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                              {propertyTypeOptions.map((type) => (
                                <label key={type} className="flex items-center space-x-2 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={selectedPropertyTypes.includes(type)}
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        setSelectedPropertyTypes([...selectedPropertyTypes, type]);
                                      } else {
                                        setSelectedPropertyTypes(selectedPropertyTypes.filter(t => t !== type));
                                      }
                                    }}
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                  />
                                  <span className="text-xs text-gray-700">{type}</span>
                                </label>
                              ))}
                            </div>
                            <div className="mt-3 text-xs text-gray-600">
                              Looking for commercial properties? <button className="text-blue-600 hover:underline">Click here</button>
                            </div>
                          </div>

                          {/* Filter Tabs */}
                          <div className="flex gap-4 mb-4 border-b border-gray-200">
                            {[
                              { id: 'budget', getDisplayText: getBudgetDisplayText },
                              { id: 'bedroom', getDisplayText: getBedroomDisplayText },
                              { id: 'construction', getDisplayText: getConstructionDisplayText },
                              { id: 'postedBy', getDisplayText: getPostedByDisplayText }
                            ].map((tab) => (
                              <button
                                key={tab.id}
                                onClick={() => setActiveFilterTab(tab.id)}
                                className={`pb-2 px-1 text-sm font-medium transition-colors whitespace-nowrap ${
                                  activeFilterTab === tab.id
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-500 hover:text-gray-700'
                                }`}
                              >
                                {tab.getDisplayText()}
                              </button>
                            ))}
                          </div>

                          {/* Filter Content */}
                          <div className="min-h-[200px]">
                            {/* Budget Filter */}
                            {activeFilterTab === 'budget' && (
                              <div>
                                <h4 className="text-sm font-medium text-gray-900 mb-4">Select Price Range</h4>
                                <div className="text-xs text-gray-600 mb-4">₹ 0 - 100+ Crore</div>
                                
                                {/* Budget Range Inputs */}
                                <div className="flex gap-4 mb-6">
                                  <div className="flex-1">
                                    <input
                                      type="number"
                                      placeholder="Min Price"
                                      value={budgetRange[0]}
                                      onChange={(e) => setBudgetRange([parseInt(e.target.value) || 0, budgetRange[1]])}
                                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <input
                                      type="number"
                                      placeholder="Max Price"
                                      value={budgetRange[1]}
                                      onChange={(e) => setBudgetRange([budgetRange[0], parseInt(e.target.value) || 10000000])}
                                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                  </div>
                                </div>

                                {/* Price Range Slider Visualization */}
                                <div className="relative h-2 bg-gray-200 rounded-lg mb-4">
                                  <div className="absolute h-2 bg-blue-600 rounded-lg" style={{left: '0%', width: '100%'}}></div>
                                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -top-1 cursor-pointer" style={{left: '0%'}}></div>
                                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -top-1 cursor-pointer" style={{right: '0%'}}></div>
                                </div>
                              </div>
                            )}

                            {/* Bedroom Filter */}
                            {activeFilterTab === 'bedroom' && (
                              <div>
                                <h4 className="text-sm font-medium text-gray-900 mb-4">Number of Bedrooms</h4>
                                <div className="flex flex-wrap gap-3">
                                  {bedroomOptions.map((bedroom) => (
                                    <button
                                      key={bedroom}
                                      onClick={() => {
                                        if (selectedBedrooms.includes(bedroom)) {
                                          setSelectedBedrooms(selectedBedrooms.filter(b => b !== bedroom));
                                        } else {
                                          setSelectedBedrooms([...selectedBedrooms, bedroom]);
                                        }
                                      }}
                                      className={`px-4 py-2 text-xs border rounded-lg transition-colors ${
                                        selectedBedrooms.includes(bedroom)
                                          ? 'bg-blue-100 border-blue-500 text-blue-700'
                                          : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                                      }`}
                                    >
                                      + {bedroom}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Construction Status Filter */}
                            {activeFilterTab === 'construction' && (
                              <div>
                                <h4 className="text-sm font-medium text-gray-900 mb-4">Construction Status</h4>
                                <div className="flex flex-wrap gap-3">
                                  {constructionStatusOptions.map((status) => (
                                    <button
                                      key={status}
                                      onClick={() => {
                                        if (selectedConstructionStatus.includes(status)) {
                                          setSelectedConstructionStatus(selectedConstructionStatus.filter(s => s !== status));
                                        } else {
                                          setSelectedConstructionStatus([...selectedConstructionStatus, status]);
                                        }
                                      }}
                                      className={`px-4 py-2 text-xs border rounded-lg transition-colors ${
                                        selectedConstructionStatus.includes(status)
                                          ? 'bg-blue-100 border-blue-500 text-blue-700'
                                          : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                                      }`}
                                    >
                                      + {status}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Posted By Filter */}
                            {activeFilterTab === 'postedBy' && (
                              <div>
                                <h4 className="text-sm font-medium text-gray-900 mb-4">Posted By</h4>
                                <div className="flex flex-wrap gap-3">
                                  {postedByOptions.map((poster) => (
                                    <button
                                      key={poster}
                                      onClick={() => {
                                        if (selectedPostedBy.includes(poster)) {
                                          setSelectedPostedBy(selectedPostedBy.filter(p => p !== poster));
                                        } else {
                                          setSelectedPostedBy([...selectedPostedBy, poster]);
                                        }
                                      }}
                                      className={`px-4 py-2 text-xs border rounded-lg transition-colors ${
                                        selectedPostedBy.includes(poster)
                                          ? 'bg-blue-100 border-blue-500 text-blue-700'
                                          : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                                      }`}
                                    >
                                      + {poster}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Apply Filters Button */}
                          <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
                            <button
                              onClick={() => {
                                setSelectedPropertyTypes([]);
                                setBudgetRange([0, 10000000]);
                                setSelectedBedrooms([]);
                                setSelectedConstructionStatus([]);
                                setSelectedPostedBy([]);
                              }}
                              className="text-sm text-gray-600 hover:text-gray-800"
                            >
                              Clear All Filters
                            </button>
                            <button
                              onClick={() => {
                                setShowComprehensiveFilters(false);
                                // Apply filters logic here
                                console.log('Applying filters:', {
                                  propertyTypes: selectedPropertyTypes,
                                  budget: budgetRange,
                                  bedrooms: selectedBedrooms,
                                  construction: selectedConstructionStatus,
                                  postedBy: selectedPostedBy
                                });
                              }}
                              className="px-6 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                            >
                              Apply Filters
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Plot Residential Dropdown - Show for New Launch and Plots/Land tabs */}
                  {(activeTab === 'New Launch' || activeTab === 'Plots/Land') && (
                    <div className="relative flex-1 sm:flex-none">
                      <button
                        onClick={() => setShowPlotResidentialDropdown((s) => !s)}
                        className="flex items-center justify-between w-full sm:w-32 md:w-40 px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg"
                        aria-expanded={showPlotResidentialDropdown}
                      >
                        <span className="truncate">{selectedPlotResidentialType}</span>
                        <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                      </button>
                      {showPlotResidentialDropdown && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                          {plotResidentialTypes.map((type) => (
                            <button
                              key={type}
                              onClick={() => {
                                setSelectedPlotResidentialType(type);
                                setShowPlotResidentialDropdown(false);
                              }}
                              className="w-full px-3 sm:px-4 py-2 text-left text-xs sm:text-sm hover:bg-gray-50"
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Project Dropdown - Show for Projects tab */}
                  {activeTab === 'Projects' && (
                    <div className="relative flex-1 sm:flex-none">
                      <button
                        onClick={() => setShowProjectDropdown((s) => !s)}
                        className="flex items-center justify-between w-full sm:w-32 md:w-40 px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg"
                        aria-expanded={showProjectDropdown}
                      >
                        <span className="truncate">{selectedProjectType}</span>
                        <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                      </button>
                      {showProjectDropdown && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                          {projectTypes.map((type) => (
                            <button
                              key={type}
                              onClick={() => {
                                setSelectedProjectType(type);
                                setShowProjectDropdown(false);
                              }}
                              className="w-full px-3 sm:px-4 py-2 text-left text-xs sm:text-sm hover:bg-gray-50"
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Commercial Buy Dropdown with Comprehensive Filters - Only show when Commercial tab is selected */}
                  {activeTab === 'Commercial' && (
                    <div className="relative flex-1 sm:flex-none">
                      <button
                        onClick={() => {
                          setShowCommercialBuyFilters((s) => !s);
                          setShowPropertyDropdown(false);
                        }}
                        className="flex items-center justify-between w-full sm:w-20 md:w-24 px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg"
                        aria-expanded={showCommercialBuyFilters}
                      >
                        <span className="truncate">{selectedPropertyType}</span>
                        <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                      </button>
                      
                      {/* Commercial Buy Comprehensive Filter Dropdown */}
                      {showCommercialBuyFilters && (
                        <div className="absolute top-full left-0 mt-1 w-[400px] bg-white border border-gray-200 rounded-lg shadow-xl z-50 p-6">
                          
                          {/* Buy/Lease/Invest Radio Buttons */}
                          <div className="mb-6">
                            <div className="flex gap-6">
                              {['Buy', 'Lease', 'Invest'].map((action) => (
                                <label key={action} className="flex items-center space-x-2 cursor-pointer">
                                  <input
                                    type="radio"
                                    name="commercialAction"
                                    value={action}
                                    checked={selectedCommercialAction === action}
                                    onChange={(e) => setSelectedCommercialAction(e.target.value)}
                                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                  />
                                  <span className="text-sm text-gray-700">{action}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          {/* Looking to invest message */}
                          <div className="mb-6">
                            <div className="bg-pink-50 border border-pink-200 rounded-lg p-3">
                              <div className="flex items-center gap-2">
                                <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded font-bold">NEW</span>
                                <span className="text-sm text-gray-700">Looking to invest? </span>
                                <button className="text-blue-600 hover:underline text-sm font-medium">Click here</button>
                              </div>
                            </div>
                          </div>

                          {/* Additional Filter Buttons */}
                          <div className="grid grid-cols-2 gap-3">
                            <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 text-left flex items-center justify-between">
                              <span>Budget</span>
                              <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                            </button>
                            <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 text-left flex items-center justify-between">
                              <span>Area</span>
                              <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                            </button>
                            <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 text-left flex items-center justify-between">
                              <span>Construction Status</span>
                              <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                            </button>
                            <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 text-left flex items-center justify-between">
                              <span>Posted By</span>
                              <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Commercial Dropdown with Comprehensive Filters - Only show when Commercial tab is selected */}
                  {activeTab === 'Commercial' && (
                    <div className="relative flex-1 sm:flex-none">
                      <button
                        onClick={() => {
                          setShowCommercialComprehensiveFilters((s) => !s);
                          setShowCommercialDropdown(false);
                        }}
                        className="flex items-center justify-between w-full sm:w-32 md:w-40 px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg"
                        aria-expanded={showCommercialComprehensiveFilters}
                      >
                        <span className="truncate">All Residential</span>
                        <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                      </button>
                      
                      {/* Commercial Comprehensive Filter Dropdown */}
                      {showCommercialComprehensiveFilters && (
                        <div className="absolute top-full left-0 mt-1 w-[800px] bg-white border border-gray-200 rounded-lg shadow-xl z-50 p-6">
                          
                          {/* Commercial Property Type Checkboxes */}
                          <div className="mb-6">
                            <div className="flex justify-between items-center mb-4">
                              <h3 className="text-sm font-medium text-gray-900">Commercial Property Types</h3>
                              <button 
                                onClick={() => setSelectedPropertyTypes([])}
                                className="text-xs text-blue-600 hover:text-blue-800"
                              >
                                Clear
                              </button>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                              {['Office Space', 'Shop/Showroom', 'Commercial Land', 'Warehouse/Godown', 'Industrial Building', 'Co-working Space', 'Business Center', 'Other Commercial'].map((type) => (
                                <label key={type} className="flex items-center space-x-2 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={selectedPropertyTypes.includes(type)}
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        setSelectedPropertyTypes([...selectedPropertyTypes, type]);
                                      } else {
                                        setSelectedPropertyTypes(selectedPropertyTypes.filter(t => t !== type));
                                      }
                                    }}
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                  />
                                  <span className="text-xs text-gray-700">{type}</span>
                                </label>
                              ))}
                            </div>
                            <div className="mt-3 text-xs text-gray-600">
                              Looking for residential properties? <button className="text-blue-600 hover:underline">Click here</button>
                            </div>
                          </div>

                          {/* Filter Tabs for Commercial */}
                          <div className="flex gap-4 mb-4 border-b border-gray-200">
                            {[
                              { id: 'budget', getDisplayText: getBudgetDisplayText },
                              { id: 'construction', getDisplayText: getConstructionDisplayText },
                              { id: 'postedBy', getDisplayText: getPostedByDisplayText }
                            ].map((tab) => (
                              <button
                                key={tab.id}
                                onClick={() => setActiveFilterTab(tab.id)}
                                className={`pb-2 px-1 text-sm font-medium transition-colors whitespace-nowrap ${
                                  activeFilterTab === tab.id
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-500 hover:text-gray-700'
                                }`}
                              >
                                {tab.getDisplayText()}
                              </button>
                            ))}
                          </div>

                          {/* Filter Content for Commercial */}
                          <div className="min-h-[200px]">
                            {/* Budget Filter */}
                            {activeFilterTab === 'budget' && (
                              <div>
                                <h4 className="text-sm font-medium text-gray-900 mb-4">Select Price Range</h4>
                                <div className="text-xs text-gray-600 mb-4">₹ 0 - 100+ Crore</div>
                                
                                {/* Budget Range Inputs */}
                                <div className="flex gap-4 mb-6">
                                  <div className="flex-1">
                                    <input
                                      type="number"
                                      placeholder="Min Price"
                                      value={budgetRange[0]}
                                      onChange={(e) => setBudgetRange([parseInt(e.target.value) || 0, budgetRange[1]])}
                                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <input
                                      type="number"
                                      placeholder="Max Price"
                                      value={budgetRange[1]}
                                      onChange={(e) => setBudgetRange([budgetRange[0], parseInt(e.target.value) || 10000000])}
                                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                  </div>
                                </div>

                                {/* Price Range Slider Visualization */}
                                <div className="relative h-2 bg-gray-200 rounded-lg mb-4">
                                  <div className="absolute h-2 bg-blue-600 rounded-lg" style={{left: '0%', width: '100%'}}></div>
                                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -top-1 cursor-pointer" style={{left: '0%'}}></div>
                                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -top-1 cursor-pointer" style={{right: '0%'}}></div>
                                </div>
                              </div>
                            )}

                            {/* Construction Status Filter */}
                            {activeFilterTab === 'construction' && (
                              <div>
                                <h4 className="text-sm font-medium text-gray-900 mb-4">Construction Status</h4>
                                <div className="flex flex-wrap gap-3">
                                  {constructionStatusOptions.map((status) => (
                                    <button
                                      key={status}
                                      onClick={() => {
                                        if (selectedConstructionStatus.includes(status)) {
                                          setSelectedConstructionStatus(selectedConstructionStatus.filter(s => s !== status));
                                        } else {
                                          setSelectedConstructionStatus([...selectedConstructionStatus, status]);
                                        }
                                      }}
                                      className={`px-4 py-2 text-xs border rounded-lg transition-colors ${
                                        selectedConstructionStatus.includes(status)
                                          ? 'bg-blue-100 border-blue-500 text-blue-700'
                                          : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                                      }`}
                                    >
                                      + {status}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Posted By Filter */}
                            {activeFilterTab === 'postedBy' && (
                              <div>
                                <h4 className="text-sm font-medium text-gray-900 mb-4">Posted By</h4>
                                <div className="flex flex-wrap gap-3">
                                  {postedByOptions.map((poster) => (
                                    <button
                                      key={poster}
                                      onClick={() => {
                                        if (selectedPostedBy.includes(poster)) {
                                          setSelectedPostedBy(selectedPostedBy.filter(p => p !== poster));
                                        } else {
                                          setSelectedPostedBy([...selectedPostedBy, poster]);
                                        }
                                      }}
                                      className={`px-4 py-2 text-xs border rounded-lg transition-colors ${
                                        selectedPostedBy.includes(poster)
                                          ? 'bg-blue-100 border-blue-500 text-blue-700'
                                          : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                                      }`}
                                    >
                                      + {poster}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Apply Filters Button */}
                          <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
                            <button
                              onClick={() => {
                                setSelectedPropertyTypes([]);
                                setBudgetRange([0, 10000000]);
                                setSelectedConstructionStatus([]);
                                setSelectedPostedBy([]);
                              }}
                              className="text-sm text-gray-600 hover:text-gray-800"
                            >
                              Clear All Filters
                            </button>
                            <button
                              onClick={() => {
                                setShowCommercialComprehensiveFilters(false);
                                // Apply filters logic here
                                console.log('Applying commercial filters:', {
                                  propertyTypes: selectedPropertyTypes,
                                  budget: budgetRange,
                                  construction: selectedConstructionStatus,
                                  postedBy: selectedPostedBy
                                });
                              }}
                              className="px-6 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                            >
                              Apply Filters
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Desktop Search */}
                <div className="flex-1">
                  <div className="flex gap-2 sm:gap-3 md:gap-4 items-center">
                    <div className="flex-1 relative">
                      <div className="flex items-center rounded-lg border border-gray-300 focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder='Search "Flats for rent in sector 77 Noida"'
                          className="flex-1 px-4 py-3 text-sm sm:text-base border-0 rounded-l-lg focus:outline-none placeholder:text-gray-400"
                        />
                        {cityError && (
                          <span className="text-red-600 text-xs absolute left-0 top-full mt-1">{cityError}</span>
                        )}
                        <div className="flex items-center">
                          <button
                            type="button"
                            className="px-3 py-3 text-green-600 hover:text-white bg-white hover:bg-gradient-to-r hover:from-green-600 hover:to-black border-l border-gray-300 transition-all duration-300 ease-in-out"
                          >
                            <MapPinIcon className="w-5 h-5" />
                          </button>
                          <button
                            type="button"
                            className="px-3 py-3 text-green-600 hover:text-white bg-white hover:bg-gradient-to-r hover:from-green-600 hover:to-black border-l border-gray-300 rounded-r-lg transition-all duration-300 ease-in-out"
                          >
                            <MicrophoneIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Gradient Search Button */}
                    <button
                      onClick={handleSearch}
                      className="px-4 sm:px-6 py-3 bg-gradient-to-r from-green-600 to-black text-white text-sm sm:text-base font-medium rounded-lg hover:from-black hover:to-green-600 transition-all duration-300 ease-in-out whitespace-nowrap"
                    >
                      Search
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>{/* end card */}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
