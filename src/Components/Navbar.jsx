import { useState, useRef, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import React from "react";
import { createCitySlug } from "../utils/cityUtils";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Request_a_call from "./help/Request_a_call";
import {
  getCityRoute,
  hasDedicatedPage,
  resolveCityName,
} from "../utils/cityUtils";
import "./NavbarResponsive.css";

const Navbar = ({ selectedCity, setSelectedCity }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  // Handler for Owner Services (always navigates to /owner-services)
  const handleOwnerServicesClick = () => {
    navigate("/owner-services");
  };
  // Handler for Bhoomi The Real Estate Services
  const handleDashboardClick = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/login", { state: { redirectTo: "/dashboard" } });
    }
  };
  // Handler for View Responses removed (revert to dashboard logic)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [showRequestCallModal, setShowRequestCallModal] = useState(false);
  const [isHelpDropdownOpen, setIsHelpDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState("Buy"); // New state for active tab
  const [searchHistory, setSearchHistory] = useState([]); // Dynamic search history
  const [currentSearch, setCurrentSearch] = useState(""); // Current search input
  const [showInvalidCityMessage, setShowInvalidCityMessage] = useState(false); // Show invalid city message
  const [isSearchFocused, setIsSearchFocused] = useState(false); // Track if search input is focused
  const [selectedPropertyType, setSelectedPropertyType] = useState("home"); // New state for property type
  const [selectedArticlesSection, setSelectedArticlesSection] = useState(null); // Track articles section selection
  const [selectedOwnerSection, setSelectedOwnerSection] = useState(null); // Track owner section selection
  const [selectedDealerSection, setSelectedDealerSection] = useState(null); // Track dealer section selection
  const [selectedInsightsSection, setSelectedInsightsSection] = useState(null); // Track insights section selection
  // Removed auth modal state
  const dropdownTimeoutRef = useRef(null); // Add timeout ref for dropdown delay

  // Mobile-specific
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const mobileMenuRef = useRef(null);

  
  // Get dynamic top cities based on selected property type
  const getDynamicTopCities = (propertyType = "home") => {
    const basePrefix =
      propertyType === "plot"
        ? "Plot/Land in"
        : propertyType === "commercial"
        ? "Commercial Property in"
        : propertyType === "pg"
        ? "PG/CO-Living in"
        : "Property in";

    return [
      { name: `${basePrefix} Delhi / NCR`, href: `/${propertyType}/delhi-ncr` },
      { name: `${basePrefix} Mumbai`, href: `/${propertyType}/mumbai` },
      { name: `${basePrefix} Bangalore`, href: `/${propertyType}/bangalore` },
      {
        name: `${basePrefix} Hyderabad Metropolitan Region`,
        href: `/${propertyType}/hyderabad`,
      },
      { name: `${basePrefix} Pune`, href: `/${propertyType}/pune` },
      { name: `${basePrefix} Kolkata`, href: `/${propertyType}/kolkata` },
      { name: `${basePrefix} Chennai`, href: `/${propertyType}/chennai` },
      { name: `${basePrefix} Ahmedabad`, href: `/${propertyType}/ahmedabad` },
    ];
  };

  // Handle property type selection
  const handlePropertyTypeClick = (type) => {
    setSelectedPropertyType(type);
    setSelectedArticlesSection(null); // Reset articles selection when property type changes
    setSelectedOwnerSection(null); // Reset owner section when property type changes
    setSelectedDealerSection(null); // Reset dealer section when property type changes
    setSelectedInsightsSection(null); // Reset insights section when property type changes
  };

  // Handle articles section selection
  const handleArticlesSectionClick = (dropdownId) => {
    setSelectedArticlesSection(dropdownId);
    setSelectedOwnerSection(null); // Reset owner section when articles is selected
    setSelectedDealerSection(null); // Reset dealer section when articles is selected
    setSelectedInsightsSection(null); // Reset insights section when articles is selected
  };

  // Handle owner section selection
  const handleOwnerSectionClick = (sectionType) => {
    setSelectedOwnerSection(sectionType);
    setSelectedArticlesSection(null); // Reset articles selection when owner section is selected
    setSelectedDealerSection(null); // Reset dealer section when owner section is selected
    setSelectedInsightsSection(null); // Reset insights section when owner section is selected
  };

  // Handle dealer section selection
  const handleDealerSectionClick = (sectionType) => {
    setSelectedDealerSection(sectionType);
    setSelectedArticlesSection(null); // Reset articles selection when dealer section is selected
    setSelectedOwnerSection(null); // Reset owner section when dealer section is selected
    setSelectedInsightsSection(null); // Reset insights section when dealer section is selected
  };

  // Handle insights section selection
  const handleInsightsSectionClick = (sectionType) => {
    setSelectedInsightsSection(sectionType);
    setSelectedArticlesSection(null); // Reset articles selection when insights section is selected
    setSelectedOwnerSection(null); // Reset owner section when insights section is selected
    setSelectedDealerSection(null); // Reset dealer section when insights section is selected
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isHelpDropdownOpen &&
        !event.target.closest(".help-dropdown-container")
      ) {
        setIsHelpDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isHelpDropdownOpen]);

  const navigationItems = [
    {
      name: "For Buyers",
      href: "/buy",
      hasDropdown: true,
      id: "buyers",
    },
    {
      name: "For Tenants",
      href: "/rent",
      hasDropdown: true,
      id: "tenants",
    },
    {
      name: "For Owners",
      href: "/owners",
      hasDropdown: true,
      id: "owners",
    },
    {
      name: "For Dealers / Builders",
      href: "/dealers",
      hasDropdown: true,
      id: "dealers",
    },
    {
      name: "Insights",
      href: "/insights",
      badge: "NEW",
      hasDropdown: true,
      id: "insights",
    },
  ];

  // Dropdown menu content for each section - Simple structure
  const dropdownMenus = {
    buyers: {
      sections: [
        {
          title: "BUY A HOME",
          links: [],
          propertyType: "home",
        },
        {
          title: "PLOT/LAND",
          links: [],
          propertyType: "plot",
        },
        {
          title: "COMMERCIAL",
          links: [],
          propertyType: "commercial",
        },
        {
          title: "ARTICLES & NEWS",
          links: [],
        },
      ],
      topCities: [
        { name: "Property in Delhi / NCR", href: "/buy/delhi" },
        { name: "Property in Mumbai", href: "/buy/mumbai" },
        { name: "Property in Bangalore", href: "/buy/bangalore" },
        {
          name: "Property in Hyderabad Metropolitan Region",
          href: "/buy/hyderabad",
        },
        { name: "Property in Pune", href: "/buy/pune" },
        { name: "Property in Kolkata", href: "/buy/kolkata" },
        { name: "Property in Chennai", href: "/buy/chennai" },
        { name: "Property in Ahmedabad", href: "/buy/ahmedabad" },
      ],
      contact: {
        phone: "+919650017061",
        time: "(9AM-11PM IST)",
        email: "bhoomitherealestate@gmail.com",
        tollFree: "+919650017061 (IND Toll-Free)",
      },
      insights: {
        title: "Insights",
        features: [
          {
            name: "Understand localities",
            href: "/insights/understand-localities",
          },
          {
            name: "Read Resident Reviews",
            href: "/insights/understand-localities",
          },
          {
            name: "Check Price Trends",
            href: "/insights/understand-localities",
          },
          {
            name: "Tools, Utilities & more",
            href: "/insights/understand-localities",
          },
        ],
      },
      articlesContent: [
        { name: "Articles For Buyers", href: "/articles/buyers" },
        { name: "Real Estate News", href: "/news" },
        { name: "Buyer Guide", href: "/buyer-guide" },
        { name: "Home Interior Guides", href: "/guides/home-interior" },
        { name: "Policies (GST, RERA, PMAY, Budget)", href: "/policies" },
        {
          name: "View All Insights",
          href: "/insights/all",
          className: "text-blue-600",
        },
      ],
    },
    tenants: {
      sections: [
        {
          title: "RENT A HOME",
          links: [],
          propertyType: "home",
        },
        {
          title: "PG/CO-LIVING",
          links: [],
          propertyType: "pg",
        },
        {
          title: "COMMERCIAL",
          links: [],
          propertyType: "commercial",
        },
        {
          title: "ARTICLES & NEWS",
          links: [],
        },
      ],
      topCities: [
        { name: "Property for rent in Delhi / NCR", href: "/rent/delhi-ncr" },
        { name: "Property for rent in Mumbai", href: "/rent/mumbai" },
        { name: "Property for rent in Bangalore", href: "/rent/bangalore" },
        {
          name: "Property for rent in Hyderabad Metropolitan Region",
          href: "/rent/hyderabad",
        },
        { name: "Property for rent in Pune", href: "/rent/pune" },
        { name: "Property for rent in Kolkata", href: "/rent/kolkata" },
        { name: "Property for rent in Chennai", href: "/rent/chennai" },
        { name: "Property for rent in Ahmedabad", href: "/rent/ahmedabad" },
      ],
      contact: {
        phone: "+919650017061",
        time: "(9AM-11PM IST)",
        email: "bhoomitherealestate@gmail.com",
        tollFree: "+919650017061 (IND Toll-Free)",
      },
      insights: {
        title: "Insights",
        features: [
          {
            name: "Understand localities",
            href: "/insights/understand-localities",
          },
          {
            name: "Read Resident Reviews",
            href: "/insights/understand-localities",
          },
          {
            name: "Check Price Trends",
            href: "/insights/understand-localities",
          },
          {
            name: "Tools, Utilities & more",
            href: "/insights/understand-localities",
          },
        ],
      },
      articlesContent: [
        { name: "Articles For Tenants", href: "/articles/tenants" },
        { name: "Real Estate News", href: "/news" },
        { name: "Home Interior Guide", href: "/guides/home-interior" },
        { name: "Policies (GST, RERA, PMAY, Budget)", href: "/policies" },
        {
          name: "View All Insights",
          href: "/insights/all",
          className: "text-blue-600",
        },
      ],
    },
    owners: {
      sections: [
        {
          title: "OWNER OFFERINGS",
          links: [],
        },
        {
          title: "INSIGHTS",
          links: [],
        },
        {
          title: "ARTICLES & NEWS",
          links: [],
        },
      ],
      contact: {
        phone: "+919650017061",
        time: "(9AM-11PM IST)",
        email: "bhoomitherealestate@gmail.com",
        tollFree: "+919650017061 (IND Toll-Free)",
      },
      promotionalContent: {
        title: "Sell or rent faster at the right price!",
        subtitle: "List your property now for FREE",
        buttonText: "Post Property",
        buttonHref: "/post-property",
      },
      articlesContent: [
        { name: "Articles For Owners", href: "/articles/owners" },
        { name: "Real Estate News", href: "/news" },
        { name: "Seller Guide", href: "/guides/seller" },
        { name: "Home Interior Guide", href: "/guides/home-interior" },
        { name: "Policies (GST, RERA, PMAY, Budget)", href: "/policies" },
        {
          name: "View All Insights",
          href: "/insights/all",
          className: "text-blue-600",
        },
      ],
      ownerOfferingsContent: [
        { name: "Post Property", href: "/post-property", badge: "FREE" },
        { name: "Owner Services", href: "/owner-services" },
        { name: "MyBhoomi The Real Estate", href: "/myBhoomi-the-real-estate" },
        { name: "View Responses", href: "/view-responses" },
      ],
      insightsContent: [
        { name: "Home Loan Tools & More", href: "/owner/home-loan-deals" },
        { name: "Area Unit Converter", href: "/tools/area-converter" },
        { name: "Builders in India", href: "/builders/india" },
        {
          name: "View All Insights",
          href: "/insights/all",
          className: "text-blue-600",
        },
      ],
    },
    dealers: {
      sections: [
        {
          title: "DEALER OFFERINGS",
          links: [],
        },
        {
          title: "RESEARCH AND ADVICE",
          links: [],
        },
      ],
      propertyServices: [
        { name: "Post Property", href: "/post-property" },
        { name: "Dealer Services", href: "/dealer/services" },
        {
          name: "Bhoomi The Real Estate Services ",
          href: "/dealer/Bhoomi The Real Estate Services ",
        },
        { name: "View Responses", href: "/dealer/responses" },
      ],
      contact: {
        phone: "+919650017061",
        time: "(9AM-11PM IST)",
        email: "bhoomitherealestate@gmail.com",
        tollFree: "+919650017061 (IND Toll-Free)",
        builderQuery: "Are you a builder? click here",
      },
      promotionalContent: {
        title: "Sell or rent faster at the right price!",
        subtitle: "List your property now for FREE",
        buttonText: "Post Property",
        buttonHref: "/post-property",
      },
      researchContent: [
        { name: "Customer Services & FAQs", href: "/customer-services" },
      ],
    },
    insights: {
      sections: [
        {
          title: "CITY OVERVIEW",
          links: [],
        },
        {
          title: "PRICE TRENDS",
          links: [],
        },
      ],
      cityOverviews: [
        { name: "Secunderabad Overview", href: "/insights/overview" },
        { name: "Pune Overview", href: "/insights/overview" },
        { name: "Noida Overview", href: "/insights/overview" },
        { name: "Mumbai Overview", href: "/insights/overview" },
        { name: "Hyderabad Overview", href: "/insights/overview" },
        { name: "Gurgaon Overview", href: "/insights/overview" },
        { name: "Delhi Overview", href: "/insights/overview" },
        { name: "Chennai Overview", href: "/insights/overview" },
      ],
      viewAllLink: {
        text: "View All Insights",
        href: "/insights/all",
      },
      contact: {
        phone: "+919650017061",
        time: "(9AM-11PM IST)",
        email: "insights@BhoomiTheRealEstate.com",
        tollFree: "+919650017061 (IND Toll-Free)",
      },
      insights: {
        title: "Insights",
        features: [
          {
            name: "Understand localities",
            href: "/insights/understand-localities",
          },
          {
            name: "Read Resident Reviews",
            href: "/insights/understand-localities",
          },
          {
            name: "Check Price Trends",
            href: "/insights/understand-localities",
          },
          {
            name: "Tools, Utilities & more",
            href: "/insights/understand-localities",
          },
        ],
      },
      priceTrendsContent: [
        {
          name: "Property Rates in Bangalore",
          href: "/insights/rates/bangalore",
        },
        { name: "Property Rates in Mumbai", href: "/insights/rates/mumbai" },
        { name: "Property Rates in Delhi", href: "/insights/rates/delhi" },
        { name: "Property Rates in Pune", href: "/insights/rates/pune" },
        { name: "Property Rates in Chennai", href: "/insights/rates/chennai" },
        {
          name: "Property Rates in Hyderabad",
          href: "/insights/rates/hyderabad",
        },
        { name: "Property Rates in Kolkata", href: "/insights/rates/kolkata" },
        { name: "Property Rates in Gurgaon", href: "/insights/rates/gurgaon" },
        {
          name: "View All Insights",
          href: "/insights/all",
          className: "text-blue-600",
        },
      ],
    },
  };

  const locations = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Pune",
    "Chennai",
    "Kolkata",
    "Ahmedabad",
    "Ghaziabad",
    "Noida",
    "North Goa",
    "South Delhi",
    "Gurugram",
    "Faridabad",
    "Thane",
    "Navi Mumbai",
    "Lucknow",
    "Jaipur",
    "Indore",
    "Bhopal",
    "Chandigarh",
    "Mohali",
    "Panchkula",
    "Zirakpur",
    "Goa",
    "Coimbatore",
    "Kochi",
    "Trivandrum",
    "Calicut",
    "Mysore",
    "Mangalore",
    "Hubli",
    "Belgaum",
    "Nagpur",
    "Nashik",
    "Aurangabad",
    "Solapur",
    "Sangli",
    "Agra",
    "Kanpur",
    "Varanasi",
    "Allahabad",
    "Meerut",
    "Bareilly",
  ];

  // Filter cities based on search input
  const getFilteredCities = () => {
    if (!currentSearch.trim()) return [];
    return locations
      .filter((city) =>
        city.toLowerCase().includes(currentSearch.toLowerCase())
      )
      .slice(0, 5); // Show top 5 matches
  };

  // Tab data for different property types
  const tabData = {
    Buy: {
      searchPlaceholder: "Search for properties to buy",
      continueText: "Continue browsing where you left off...",
      prefix: "Buy in",
    },
    "Rent / Lease": {
      searchPlaceholder: "Search for properties to rent",
      continueText: "Continue your rental search...",
      prefix: "Rent in",
    },
    "Plots/Land": {
      searchPlaceholder: "Search for plots and land",
      continueText: "Continue your land search...",
      prefix: "Plots in",
    },
    "PG / Co-living": {
      searchPlaceholder: "Search for PG and co-living",
      continueText: "Continue your PG search...",
      prefix: "PG in",
    },
  };

  // Get dynamic suggestions based on search history for current tab
  const getDynamicSuggestions = () => {
    const prefix = tabData[activeTab]?.prefix || "";
    return searchHistory
      .filter((search) => search.type === activeTab)
      .slice(-3) // Show last 3 searches
      .map((search) => `${prefix} ${search.location}`);
  };

  // Handle search input changes
  const handleSearchChange = (value) => {
    setCurrentSearch(value);
    setShowInvalidCityMessage(false); // Reset invalid message when typing

    // Keep dropdown open while typing
    if (value.trim()) {
      setIsLocationDropdownOpen(true);
    }
  };

  // Validate if city exists in the predefined list
  const isCityValid = (cityName) => {
    if (!cityName.trim()) return false;
    return locations.some(
      (city) => city.toLowerCase() === cityName.toLowerCase().trim()
    );
  };

  // Handle search submission
  const handleSearchSubmit = () => {
    const searchTerm = currentSearch.trim();

    if (!searchTerm) {
      setShowInvalidCityMessage(true);
      return;
    }

    // Check if the city is valid
    if (!isCityValid(searchTerm)) {
      setShowInvalidCityMessage(true);
      return;
    }

    // Valid city - proceed with search
    const newSearch = {
      type: activeTab,
      location: searchTerm,
      timestamp: Date.now(),
    };

    // Add to search history (avoid duplicates)
    setSearchHistory((prev) => {
      const filtered = prev.filter(
        (s) => !(s.type === newSearch.type && s.location === newSearch.location)
      );
      return [...filtered, newSearch];
    });

    // Navigate to city page if it exists, otherwise update selected city
    const resolvedCity = resolveCityName(searchTerm);

    if (hasDedicatedPage(searchTerm)) {
      navigate(getCityRoute(resolvedCity));
    } else {
      // Fallback to updating selected city for non-dedicated pages
      if (setSelectedCity) {
        setSelectedCity(searchTerm);
      }
    }

    setIsLocationDropdownOpen(false);
    setCurrentSearch("");
    setShowInvalidCityMessage(false);
    setIsSearchFocused(false);
  };

  const handleCitySelect = (city) => {
    if (city === "Dubai" || city === "India") {
      // Keep existing behavior for Dubai and For NRI
      if (setSelectedCity) {
        setSelectedCity(city);
      }
    } else {
      // Check if city has a dedicated page and navigate accordingly
      const resolvedCity = resolveCityName(city);

      if (hasDedicatedPage(city)) {
        navigate(getCityRoute(resolvedCity));
      } else {
        // For cities without dedicated pages, update selected city
        if (setSelectedCity) {
          setSelectedCity(city);
        }
      }
    }
    setIsLocationDropdownOpen(false);
    setIsMenuOpen(false);
    setCurrentSearch("");
    setShowInvalidCityMessage(false);
    setIsSearchFocused(false);
  };

  // Close dropdowns when clicking outside
  React.useEffect(() => {
    // Cleanup function for dropdownTimeoutRef
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      const targetElement = event.target;
      const isDropdownContent = targetElement.closest(".dropdown-content");
      const isDropdownTrigger = targetElement.closest(".dropdown-container");
      const isSearchInput =
        targetElement.closest(".search-input-container") ||
        targetElement.closest('input[type="text"]');
      const isLocationDropdown = targetElement.closest(
        ".location-dropdown-content"
      );
      const isCitySuggestion = targetElement.closest(".city-suggestion-btn");
      const isExploreButton =
        targetElement.textContent &&
        targetElement.textContent.includes("Explore");
      const isInvalidMessage = targetElement.closest(".invalid-city-message");
      // Only close if clicking completely outside and not typing or focusing input
      if (
        document.activeElement === targetElement &&
        (isSearchInput || isDropdownContent || isDropdownTrigger || isLocationDropdown)
      ) {
        return;
      }
      if (
        isSearchFocused ||
        isSearchInput ||
        isDropdownContent ||
        isDropdownTrigger ||
        isLocationDropdown ||
        isCitySuggestion ||
        isExploreButton ||
        isInvalidMessage
      ) {
        return;
      }
      setIsLocationDropdownOpen(false);
      setIsUserDropdownOpen(false);
      setActiveDropdown(null);
      setShowInvalidCityMessage(false);
      setIsSearchFocused(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchFocused]);

  const handleDropdownToggle = (dropdownId) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
    setSelectedArticlesSection(null); // Reset articles selection when dropdown changes
    setSelectedOwnerSection(null); // Reset owner section when dropdown changes
    setSelectedDealerSection(null); // Reset dealer section when dropdown changes
    setSelectedInsightsSection(null); // Reset insights section when dropdown changes
  };
  return (
    <>
      <nav className="navbar-responsive bg-black  relative z-[9998]">
        <div className="max-w-8xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 md:h-20 lg:h-22 xl:h-24">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center gap-1 sm:gap-2">
                  <img
                    src="/abc.png"
                    alt="Real Estate India Logo"
                    className="h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 w-auto object-contain"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:block">
              <div className="ml-6 xl:ml-10 flex items-baseline space-x-2 xl:space-x-4">
                {/* All India Dropdown */}
                <div
                  className="relative dropdown-container"
                  onMouseEnter={() => {
                    if (dropdownTimeoutRef.current) {
                      clearTimeout(dropdownTimeoutRef.current);
                    }
                    setIsLocationDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    dropdownTimeoutRef.current = setTimeout(() => {
                      setIsLocationDropdownOpen(false);
                    }, 100);
                  }}
                >
                  <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 transition-colors duration-200 bg-transparent">
                    <span>
                      {selectedCity === "India"
                        ? "All India"
                        : selectedCity || "All India"}
                    </span>
                    <ChevronDownIcon className="h-4 w-4" />
                  </button>

                  {isLocationDropdownOpen && (
                    <div
                      className="dropdown-content location-dropdown-content fixed top-18 sm:top-20 md:top-22 lg:top-24 left-1/2 transform -translate-x-1/2 w-[95vw] max-w-[780px] bg-white rounded-lg shadow-xl py-4 sm:py-6 z-50 mx-2"
                      style={{
                        maxHeight: "calc(100vh - 120px)",
                        overflowY: "auto",
                        WebkitOverflowScrolling: "touch",
                      }}
                      onMouseEnter={() => {
                        if (dropdownTimeoutRef.current) {
                          clearTimeout(dropdownTimeoutRef.current);
                        }
                        setIsLocationDropdownOpen(true);
                      }}
                      onMouseLeave={() => {
                        dropdownTimeoutRef.current = setTimeout(() => {
                          setIsLocationDropdownOpen(false);
                        }, 100);
                      }}
                    >
                      <div className="px-4 sm:px-6">
                        {/* Header with close button */}
                        <div className="flex justify-between items-center mb-4 sm:mb-6">
                          <h2 className="text-xl sm:text-2xl font-bold text-green-600">
                            Explore real estate in...
                          </h2>
                          <button
                            onClick={() => {
                              setIsLocationDropdownOpen(false);
                              setCurrentSearch("");
                              setShowInvalidCityMessage(false);
                              setIsSearchFocused(false);
                            }}
                            className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1"
                            aria-label="Close dropdown"
                          >
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>

                        {/* Tabs */}
                        <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6 overflow-x-auto">
                          {Object.keys(tabData).map((tab) => (
                            <button
                              key={tab}
                              onClick={() => setActiveTab(tab)}
                              className={`font-medium pb-2 sm:pb-3 text-xs sm:text-sm transition-all duration-300 flex-shrink-0 bg-transparent ${
                                activeTab === tab
                                  ? "text-green-600 border-b-2 border-green-600 scale-105"
                                  : "text-black hover:text-green-600 hover:scale-105"
                              }`}
                            >
                              {tab}
                            </button>
                          ))}
                        </div>

                        {/* Search Section */}
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            handleSearchSubmit();
                          }}
                          className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6"
                        >
                          <div className="flex items-center bg-white border border-green-200 rounded-lg px-3 sm:px-4 py-2 sm:py-3 w-full sm:w-auto">
                            <select className="bg-transparent text-black font-medium outline-none text-xs sm:text-sm w-full sm:w-auto min-w-fit">
                              <option>Residential</option>
                              <option>Commercial</option>
                            </select>
                          </div>
                          <div className="flex items-center bg-white border border-green-200 rounded-lg px-3 sm:px-4 py-2 sm:py-3 flex-1 max-w-full sm:max-w-md search-input-container">
                            <svg
                              className="w-4 h-4 text-green-600 mr-2 sm:mr-3 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              />
                            </svg>
                            <input
                              type="text"
                              value={currentSearch}
                              onChange={(e) =>
                                handleSearchChange(e.target.value)
                              }
                              onFocus={() => {
                                // Keep dropdown open when focusing on search input
                                setIsLocationDropdownOpen(true);
                                setIsSearchFocused(true);
                                setShowInvalidCityMessage(false);
                              }}
                              onBlur={(e) => {
                                // Only close if not moving to dropdown or suggestion
                                setTimeout(() => {
                                  if (!document.activeElement.classList.contains('city-suggestion-btn') &&
                                      !document.activeElement.classList.contains('location-dropdown-content') &&
                                      !document.activeElement.classList.contains('dropdown-content')) {
                                    setIsSearchFocused(false);
                                  }
                                }, 150);
                              }}
                              onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  handleSearchSubmit();
                                }
                              }}
                              placeholder="City Name"
                              className="bg-transparent text-black placeholder-gray-400 outline-none w-full text-xs sm:text-sm"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              handleSearchSubmit();
                            }}
                            className="bg-transparent text-black border border-green-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm transform hover:scale-105 hover:text-green-600 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            disabled={
                              currentSearch.trim() &&
                              !getFilteredCities().length &&
                              !isCityValid(currentSearch)
                            }
                          >
                            Explore
                          </button>
                        </form>

                        {/* Invalid City Message */}
                        {showInvalidCityMessage && (
                          <div className="mb-4 sm:mb-6 invalid-city-message">
                            <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4">
                              <div className="flex items-center">
                                <svg
                                  className="w-5 h-5 text-red-600 mr-2 flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.966-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                  />
                                </svg>
                                <div>
                                  <h3 className="text-red-800 font-medium text-sm">
                                    City not found
                                  </h3>
                                  <p className="text-red-600 text-xs sm:text-sm mt-1">
                                    Please search for a valid city from our
                                    available locations.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {/* City Suggestions - Show when user is typing */}
                        {currentSearch.trim() &&
                          getFilteredCities().length > 0 && (
                            <div className="mb-4 sm:mb-6">
                              <h3 className="text-black font-medium mb-3 text-xs sm:text-sm">
                                Suggested Cities:
                              </h3>
                              <div className="flex flex-wrap gap-2 sm:gap-3">
                                {getFilteredCities().map((city, index) => (
                                  <button
                                    key={index}
                                    className="city-suggestion-btn bg-gray-100 hover:bg-green-100 text-black px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 flex-shrink-0 border hover:border-green-300"
                                    onClick={() => {
                                      setCurrentSearch(city);
                                      const resolvedCity =
                                        resolveCityName(city);

                                      if (hasDedicatedPage(city)) {
                                        navigate(getCityRoute(resolvedCity));
                                      } else {
                                        if (setSelectedCity) {
                                          setSelectedCity(city);
                                        }
                                      }
                                      setIsLocationDropdownOpen(false);
                                      setShowInvalidCityMessage(false);
                                      setIsSearchFocused(false);
                                    }}
                                  >
                                    {activeTab === "Buy"
                                      ? "Buy in "
                                      : activeTab === "Rent / Lease"
                                      ? "Rent in "
                                      : activeTab === "Plots/Land"
                                      ? "Plots in "
                                      : "PG in "}
                                    {city}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}

                        {/* Show message when no suggestions found but user is typing */}
                        {currentSearch.trim() &&
                          getFilteredCities().length === 0 &&
                          !showInvalidCityMessage && (
                            <div className="mb-4 sm:mb-6">
                              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4">
                                <div className="flex items-center">
                                  <svg
                                    className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  <div>
                                    <h3 className="text-yellow-800 font-medium text-sm">
                                      No matching cities found
                                    </h3>
                                    <p className="text-yellow-600 text-xs sm:text-sm mt-1">
                                      Try typing a different city name or check
                                      our available locations below.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                        {/* Continue browsing section - Only show if there are recent searches */}
                        {getDynamicSuggestions().length > 0 && (
                          <div className="mb-4 sm:mb-6">
                            <h3 className="text-black font-medium mb-3 text-xs sm:text-sm">
                              {tabData[activeTab]?.continueText}
                            </h3>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                              {getDynamicSuggestions().map(
                                (suggestion, index) => (
                                  <button
                                    key={index}
                                    className="bg-transparent text-black px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm hover:text-white transition-all duration-300 transform hover:scale-105 flex-shrink-0"
                                    onClick={() =>
                                      handleCitySelect(
                                        suggestion.split(" in ")[1] ||
                                          suggestion
                                      )
                                    }
                                  >
                                    {suggestion}
                                  </button>
                                )
                              )}
                            </div>
                          </div>
                        )}

                        {/* Cities list */}
                        <div className="pt-4">
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                            <div className="flex flex-wrap gap-3 sm:gap-6">
                              <button
                                onClick={() => handleCitySelect("Dubai")}
                                className="bg-transparent text-black px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-all duration-300 transform hover:scale-105"
                              >
                                Dubai
                              </button>
                              <button
                                onClick={() => {
                                  if (setSelectedCity) {
                                    setSelectedCity("All India");
                                  }
                                  setIsLocationDropdownOpen(false);
                                  setCurrentSearch("");
                                  setShowInvalidCityMessage(false);
                                  setIsSearchFocused(false);
                                }}
                                className="bg-transparent text-black hover:text-green-600 px-3 sm:px-4 py-2 text-xs sm:text-sm transition-all duration-300 transform hover:scale-105"
                              >
                                All India
                              </button>
                              <button
                                onClick={() => handleCitySelect("India")}
                                className="bg-transparent text-black px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-all duration-300 transform hover:scale-105"
                              >
                                For NRI
                              </button>
                              <button className="bg-transparent text-black px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 hover:text-green-600">
                                International
                                <div className="text-xs text-gray-500 mt-1">
                                  Powered by listglobally.com
                                </div>
                              </button>
                            </div>
                            <button className="bg-transparent text-black px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center transition-all duration-300 transform hover:scale-105 hover:text-green-600 w-full sm:w-auto justify-center sm:justify-start">
                              View top cities
                              <svg
                                className="w-4 h-4 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Navigation Links */}
                {navigationItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative dropdown-container"
                    onMouseEnter={() => {
                      // Always allow Owners dropdown to show
                      if (item.hasDropdown || item.id === "owners") {
                        if (dropdownTimeoutRef.current) {
                          clearTimeout(dropdownTimeoutRef.current);
                        }
                        setActiveDropdown(item.id);
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.hasDropdown || item.id === "owners") {
                        dropdownTimeoutRef.current = setTimeout(() => {
                          setActiveDropdown(null);
                        }, 100);
                      }
                    }}
                  >
                    {item.hasDropdown ? (
                      <>
                        <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1">
                          <span>{item.name}</span>
                          {item.badge && (
                            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </button>

                        {activeDropdown === item.id && (
                          <>
                            {item.id === "buyers" ||
                            item.id === "tenants" ||
                            item.id === "owners" ||
                            item.id === "dealers" ||
                            item.id === "insights" ? (
                              <div
                                className="fixed top-18 sm:top-20 md:top-22 lg:top-24 left-1/2 transform -translate-x-1/2 w-[900px] bg-white rounded-md shadow-xl border border-gray-200 py-6 z-50"
                                style={{
                                  maxHeight: "calc(100vh - 100px)",
                                  overflowY: "auto",
                                  WebkitOverflowScrolling: "touch",
                                }}
                                onMouseEnter={() => {
                                  if (dropdownTimeoutRef.current) {
                                    clearTimeout(dropdownTimeoutRef.current);
                                  }
                                  setActiveDropdown(item.id);
                                }}
                                onMouseLeave={() => {
                                  dropdownTimeoutRef.current = setTimeout(
                                    () => {
                                      setActiveDropdown(null);
                                    },
                                    100
                                  );
                                }}
                              >
                                <div className="flex">
                                  {/* Left Column - Menu Items */}
                                  <div className="w-1/4 px-6 space-y-8">
                                    {dropdownMenus[item.id]?.sections.map(
                                      (section, index) => (
                                        <div key={index}>
                                          <h3
                                            className={`text-sm font-semibold text-black mb-4 tracking-wide cursor-pointer hover:text-green-600 transition-colors duration-200 ${
                                              section.propertyType &&
                                              selectedPropertyType ===
                                                section.propertyType
                                                ? "text-green-600"
                                                : ""
                                            } ${
                                              section.title ===
                                                "ARTICLES & NEWS" &&
                                              selectedArticlesSection ===
                                                item.id
                                                ? "text-green-600"
                                                : ""
                                            } ${
                                              section.title ===
                                                "OWNER OFFERINGS" &&
                                              selectedOwnerSection ===
                                                "offerings"
                                                ? "text-green-600"
                                                : ""
                                            } ${
                                              section.title === "INSIGHTS" &&
                                              selectedOwnerSection ===
                                                "insights"
                                                ? "text-green-600"
                                                : ""
                                            } ${
                                              section.title ===
                                                "RESEARCH AND ADVICE" &&
                                              selectedDealerSection ===
                                                "research"
                                                ? "text-green-600"
                                                : ""
                                            } ${
                                              section.title ===
                                                "CITY OVERVIEW" &&
                                              selectedInsightsSection ===
                                                "cityOverview"
                                                ? "text-green-600"
                                                : ""
                                            } ${
                                              section.title ===
                                                "PRICE TRENDS" &&
                                              selectedInsightsSection ===
                                                "priceTrends"
                                                ? "text-green-600"
                                                : ""
                                            }`}
                                            onClick={() => {
                                              if (section.propertyType) {
                                                handlePropertyTypeClick(
                                                  section.propertyType
                                                );
                                              } else if (
                                                section.title ===
                                                "ARTICLES & NEWS"
                                              ) {
                                                handleArticlesSectionClick(
                                                  item.id
                                                );
                                              } else if (
                                                section.title ===
                                                "OWNER OFFERINGS"
                                              ) {
                                                handleOwnerSectionClick(
                                                  "offerings"
                                                );
                                              } else if (
                                                section.title === "INSIGHTS"
                                              ) {
                                                handleOwnerSectionClick(
                                                  "insights"
                                                );
                                              } else if (
                                                section.title ===
                                                "RESEARCH AND ADVICE"
                                              ) {
                                                handleDealerSectionClick(
                                                  "research"
                                                );
                                              } else if (
                                                section.title ===
                                                "CITY OVERVIEW"
                                              ) {
                                                handleInsightsSectionClick(
                                                  "cityOverview"
                                                );
                                              } else if (
                                                section.title === "PRICE TRENDS"
                                              ) {
                                                handleInsightsSectionClick(
                                                  "priceTrends"
                                                );
                                              }
                                            }}
                                          >
                                            {section.title}
                                            {section.title === "INSIGHTS" && (
                                              <span className="ml-2 bg-green-600 text-white text-xs px-2 py-1 rounded font-normal">
                                                NEW
                                              </span>
                                            )}
                                          </h3>
                                          {section.links.length > 0 && (
                                            <div className="space-y-2">
                                              {section.links.map(
                                                (link, linkIndex) => (
                                                  <Link
                                                    key={linkIndex}
                                                    to={link.href}
                                                    className="block text-sm text-black hover:text-green-600 transition-colors duration-200"
                                                    onClick={() => {
                                                      setActiveDropdown(null);
                                                      if (
                                                        section.propertyType
                                                      ) {
                                                        handlePropertyTypeClick(
                                                          section.propertyType
                                                        );
                                                      }
                                                    }}
                                                  >
                                                    {link.name}
                                                  </Link>
                                                )
                                              )}
                                            </div>
                                          )}
                                        </div>
                                      )
                                    )}

                                    {/* Contact Info - Moved to bottom with more spacing */}
                                    <div className="pt-8 mt-8 border-t border-gray-200">
                                      <p className="text-sm text-black mb-1">
                                        <span className="text-black">
                                          contact us toll free on
                                        </span>
                                      </p>
                                      <p className="text-lg font-bold text-black">
                                        {dropdownMenus[item.id]?.contact?.phone}{" "}
                                        <span className="text-sm font-normal text-black">
                                          {
                                            dropdownMenus[item.id]?.contact
                                              ?.time
                                          }
                                        </span>
                                      </p>
                                    </div>
                                  </div>

                                  {/* Middle Column - Top Cities, Owner Offerings, or Property Services */}
                                  <div className="w-1/2 px-6 border-l border-gray-200">
                                    {item.id === "owners" ? (
                                      <>
                                        {selectedOwnerSection ===
                                        "offerings" ? (
                                          <>
                                            <h3 className="text-sm font-bold text-black mb-4 tracking-wide">
                                              OWNER OFFERINGS
                                            </h3>
                                            <div className="space-y-3">
                                              {dropdownMenus[
                                                item.id
                                              ]?.ownerOfferingsContent?.map(
                                                (offering, offeringIndex) => (
                                                  <Link
                                                    key={offeringIndex}
                                                    to={offering.href}
                                                    className="flex items-center text-sm text-black hover:text-green-600 transition-colors duration-200 py-1"
                                                    onClick={() =>
                                                      setActiveDropdown(null)
                                                    }
                                                  >
                                                    <span>{offering.name}</span>
                                                    {offering.badge && (
                                                      <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                                                        {offering.badge}
                                                      </span>
                                                    )}
                                                  </Link>
                                                )
                                              )}
                                            </div>
                                          </>
                                        ) : selectedOwnerSection ===
                                          "insights" ? (
                                          <>
                                            <h3 className="text-sm font-bold text-black mb-4 tracking-wide">
                                              INSIGHTS
                                            </h3>
                                            <div className="space-y-2">
                                              {dropdownMenus[
                                                item.id
                                              ]?.insightsContent?.map(
                                                (insight, insightIndex) => (
                                                  <Link
                                                    key={insightIndex}
                                                    to={insight.href}
                                                    className={`block text-sm transition-colors duration-200 py-1 ${
                                                      insight.className
                                                        ? insight.className
                                                        : "text-black hover:text-green-600"
                                                    }`}
                                                    onClick={() =>
                                                      setActiveDropdown(null)
                                                    }
                                                  >
                                                    {insight.name}
                                                  </Link>
                                                )
                                              )}
                                            </div>
                                          </>
                                        ) : selectedArticlesSection ===
                                          item.id ? (
                                          <>
                                            <h3 className="text-sm font-bold text-black mb-4 tracking-wide">
                                              ARTICLES & NEWS
                                            </h3>
                                            <div className="space-y-2">
                                              {dropdownMenus[
                                                item.id
                                              ]?.articlesContent?.map(
                                                (article, articleIndex) => (
                                                  <Link
                                                    key={articleIndex}
                                                    to={article.href}
                                                    className={`block text-sm transition-colors duration-200 py-1 ${
                                                      article.className
                                                        ? article.className
                                                        : "text-black hover:text-green-600"
                                                    }`}
                                                    onClick={() =>
                                                      setActiveDropdown(null)
                                                    }
                                                  >
                                                    {article.name}
                                                  </Link>
                                                )
                                              )}
                                            </div>
                                          </>
                                        ) : (
                                          <>
                                            <h3 className="text-sm font-bold text-black mb-4 tracking-wide">
                                              OWNER OFFERINGS
                                            </h3>
                                            <div className="space-y-3">
                                              <Link
                                                to="/post-property"
                                                className="flex items-center text-sm text-black hover:text-green-600 transition-colors duration-200 py-1"
                                                onClick={() =>
                                                  setActiveDropdown(null)
                                                }
                                              >
                                                <span>Post Property </span>
                                                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold mr-2">
                                                  FREE
                                                </span>
                                              </Link>
                                              <button
                                                className="block text-sm text-black hover:text-green-600 transition-colors duration-200 py-1 w-full text-left"
                                                onClick={() => {
                                                  setActiveDropdown(null);
                                                  handleOwnerServicesClick();
                                                }}
                                              >
                                                Owner Services
                                              </button>
                                              <button
                                                className="block text-sm text-black hover:text-green-600 transition-colors duration-200 py-1 w-full text-left"
                                                onClick={() => {
                                                  setActiveDropdown(null);
                                                  handleDashboardClick();
                                                }}
                                              >
                                                Bhoomi The Real Estate Services
                                              </button>
                                              <button
                                                className="block text-sm text-black hover:text-green-600 transition-colors duration-200 py-1 w-full text-left"
                                                onClick={() => {
                                                  setActiveDropdown(null);
                                                  handleDashboardClick();
                                                }}
                                              >
                                                View Responses
                                              </button>
                                            </div>
                                          </>
                                        )}
                                      </>
                                    ) : item.id === "dealers" ? (
                                      <>
                                        {selectedDealerSection ===
                                        "research" ? (
                                          <>
                                            <h3 className="text-sm font-bold text-black mb-4 tracking-wide">
                                              HELP
                                            </h3>
                                            <div className="space-y-2">
                                              {dropdownMenus[
                                                item.id
                                              ]?.researchContent?.map(
                                                (research, researchIndex) => (
                                                  <Link
                                                    key={researchIndex}
                                                    to={research.href}
                                                    className="block text-sm text-black hover:text-green-600 transition-colors duration-200 py-1"
                                                    onClick={() =>
                                                      setActiveDropdown(null)
                                                    }
                                                  >
                                                    {research.name}
                                                  </Link>
                                                )
                                              )}
                                            </div>
                                          </>
                                        ) : (
                                          <>
                                            <h3 className="text-sm font-bold text-black mb-4 tracking-wide">
                                              PROPERTY SERVICES
                                            </h3>
                                            <div className="space-y-3">
                                              {dropdownMenus[
                                                item.id
                                              ]?.propertyServices?.map(
                                                (service, serviceIndex) => {
                                                  if (service.name.trim() === "Bhoomi The Real Estate Services" || service.name.trim() === "View Responses") {
                                                    return (
                                                      <button
                                                        key={serviceIndex}
                                                        className="block text-sm text-black hover:text-green-600 transition-colors duration-200 py-1 w-full text-left"
                                                        onClick={() => {
                                                          setActiveDropdown(null);
                                                          handleDashboardClick();
                                                        }}
                                                      >
                                                        {service.name}
                                                      </button>
                                                    );
                                                  }
                                                  return (
                                                    <Link
                                                      key={serviceIndex}
                                                      to={service.href}
                                                      className="block text-sm text-black hover:text-green-600 transition-colors duration-200 py-1"
                                                      onClick={() =>
                                                        setActiveDropdown(null)
                                                      }
                                                    >
                                                      {service.name}
                                                    </Link>
                                                  );
                                                }
                                              )}
                                            </div>
                                          </>
                                        )}
                                      </>
                                    ) : item.id === "insights" ? (
                                      <>
                                        {selectedInsightsSection ===
                                        "priceTrends" ? (
                                          <>
                                            <h3 className="text-sm font-bold text-black mb-4 tracking-wide">
                                              CHECK PRICES IN TOP CITIES
                                            </h3>
                                            <div className="space-y-2">
                                              {dropdownMenus[
                                                item.id
                                              ]?.priceTrendsContent?.map(
                                                (rate, rateIndex) => (
                                                  <Link
                                                    key={rateIndex}
                                                    to={rate.href}
                                                    className={`block text-sm transition-colors duration-200 py-1 ${
                                                      rate.className
                                                        ? rate.className
                                                        : "text-black hover:text-green-600"
                                                    }`}
                                                    onClick={() =>
                                                      setActiveDropdown(null)
                                                    }
                                                  >
                                                    {rate.name}
                                                  </Link>
                                                )
                                              )}
                                            </div>
                                          </>
                                        ) : (
                                          <>
                                            <h3 className="text-sm font-bold text-black mb-4 tracking-wide">
                                              CHECK OVERVIEW OF TOP CITIES
                                            </h3>
                                            <div className="space-y-2">
                                              {dropdownMenus[
                                                item.id
                                              ]?.cityOverviews?.map(
                                                (city, cityIndex) => (
                                                  <Link
                                                    key={cityIndex}
                                                    to={city.href}
                                                    className="block text-sm text-black hover:text-green-600 transition-colors duration-200 py-1"
                                                    onClick={() =>
                                                      setActiveDropdown(null)
                                                    }
                                                  >
                                                    {city.name}
                                                  </Link>
                                                )
                                              )}
                                            </div>
                                          </>
                                        )}
                                      </>
                                    ) : (
                                      <>
                                        {selectedArticlesSection === item.id ? (
                                          <>
                                            <h3 className="text-sm font-bold text-black mb-4 tracking-wide">
                                              ARTICLES & NEWS
                                            </h3>
                                            <div className="space-y-2">
                                              {dropdownMenus[
                                                item.id
                                              ]?.articlesContent?.map(
                                                (article, articleIndex) => (
                                                  <Link
                                                    key={articleIndex}
                                                    to={article.href}
                                                    className={`block text-sm transition-colors duration-200 py-1 ${
                                                      article.className
                                                        ? article.className
                                                        : "text-black hover:text-green-600"
                                                    }`}
                                                    onClick={() =>
                                                      setActiveDropdown(null)
                                                    }
                                                  >
                                                    {article.name}
                                                  </Link>
                                                )
                                              )}
                                            </div>
                                          </>
                                        ) : (
                                          <>
                                            <h3 className="text-sm font-bold text-black mb-4 tracking-wide">
                                              TOP CITIES
                                            </h3>
                                            <div className="space-y-2">
                                              {item.id === "buyers" || item.id === "tenants"
                                                ? getDynamicTopCities(selectedPropertyType).map((city, cityIndex) => {
                                                    const citySlug = createCitySlug(
                                                      city.name.replace("Property in ", "")
                                                        .replace("Property for rent in ", "")
                                                        .replace("Property in Hyderabad Metropolitan Region", "Hyderabad")
                                                        .replace("Property for rent in Hyderabad Metropolitan Region", "Hyderabad")
                                                    );
                                                    return (
                                                      <Link
                                                        key={cityIndex}
                                                        to={`/buy/${citySlug}`}
                                                        className="block text-sm text-black hover:text-green-600 transition-colors duration-200 py-1"
                                                        onClick={() => setActiveDropdown(null)}
                                                      >
                                                        {city.name}
                                                      </Link>
                                                    );
                                                  })
                                                : dropdownMenus[item.id]?.topCities?.map((city, cityIndex) => {
                                                    const citySlug = createCitySlug(
                                                      city.name.replace("Property in ", "")
                                                        .replace("Property for rent in ", "")
                                                        .replace("Property in Hyderabad Metropolitan Region", "Hyderabad")
                                                        .replace("Property for rent in Hyderabad Metropolitan Region", "Hyderabad")
                                                    );
                                                    return (
                                                      <Link
                                                        key={cityIndex}
                                                        to={`/buy/${citySlug}`}
                                                        className="block text-sm text-black hover:text-green-600 transition-colors duration-200 py-1"
                                                        onClick={() => setActiveDropdown(null)}
                                                      >
                                                        {city.name}
                                                      </Link>
                                                    );
                                                  })}
                                            </div>
                                          </>
                                        )}
                                      </>
                                    )}

                                    {/* Contact Email */}
                                    <div className="mt-8 pt-4 border-t border-gray-200">
                                      <p className="text-sm text-black">
                                        Email us at{" "}
                                        <span className="text-green-600 hover:underline cursor-pointer">
                                          {
                                            dropdownMenus[item.id]?.contact
                                              ?.email
                                          }
                                        </span>{" "}
                                        or call us at{" "}
                                        <span className="font-medium">
                                          {
                                            dropdownMenus[item.id]?.contact
                                              ?.tollFree
                                          }
                                        </span>
                                      </p>
                                      {item.id === "dealers" &&
                                        dropdownMenus[item.id]?.contact
                                          ?.builderQuery && (
                                          <p className="text-sm text-black mt-2">
                                            <span className="text-green-600 hover:underline cursor-pointer">
                                              {
                                                dropdownMenus[item.id]?.contact
                                                  ?.builderQuery
                                              }
                                            </span>
                                          </p>
                                        )}
                                    </div>
                                  </div>

                                  {/* Right Column - Insights or Promotional Content */}
                                  <div className="w-1/4 px-6 border-l border-gray-200">
                                    {item.id === "owners" ||
                                    item.id === "dealers" ? (
                                      <div className="bg-green-50 rounded-lg p-4">
                                        <h4 className="text-lg font-bold text-black mb-2">
                                          {
                                            dropdownMenus[item.id]
                                              ?.promotionalContent?.title
                                          }
                                        </h4>
                                        <p className="text-sm text-black mb-4">
                                          {
                                            dropdownMenus[item.id]
                                              ?.promotionalContent?.subtitle
                                          }
                                        </p>
                                        <Link
                                          to={
                                            dropdownMenus[item.id]
                                              ?.promotionalContent?.buttonHref
                                          }
                                          className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
                                          onClick={() =>
                                            setActiveDropdown(null)
                                          }
                                        >
                                          {
                                            dropdownMenus[item.id]
                                              ?.promotionalContent?.buttonText
                                          }
                                        </Link>
                                        <div className="mt-4 flex justify-end">
                                          <div className="w-16 h-16 bg-white border-2 border-green-200 rounded-lg"></div>
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="bg-green-50 rounded-lg p-4">
                                        <div className="flex items-center mb-3">
                                          <span className="text-sm text-green-600 font-medium mr-2">
                                            INTRODUCING
                                          </span>
                                        </div>
                                        <div className="flex items-center mb-4">
                                          <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center mr-3">
                                            {selectedPropertyType ===
                                            "commercial" ? (
                                              <img
                                                src="/prop/icon-building.png"
                                                alt="Building"
                                                className="w-6 h-6 object-contain"
                                              />
                                            ) : (
                                              <span className="text-white font-bold text-lg">
                                                i
                                              </span>
                                            )}
                                          </div>
                                          <h4 className="text-xl font-bold text-black">
                                            {
                                              dropdownMenus[item.id]?.insights
                                                ?.title
                                            }
                                          </h4>
                                        </div>
                                        <div className="space-y-3">
                                          {dropdownMenus[
                                            item.id
                                          ]?.insights?.features?.map(
                                            (feature, featureIndex) => (
                                              <Link
                                                key={featureIndex}
                                                to={feature.href}
                                                className="flex items-center text-sm text-black hover:text-green-600 transition-colors"
                                                onClick={() => {
                                                  setActiveDropdown(null);
                                                  setIsMenuOpen(false);
                                                  setSelectedInsightsSection(
                                                    null
                                                  );
                                                }}
                                              >
                                                <div className="w-4 h-4 border-2 border-green-600 rounded-full mr-3 flex items-center justify-center">
                                                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                                </div>
                                                {feature.name}
                                              </Link>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="fixed top-16 sm:top-18 md:top-20 left-1/2 transform -translate-x-1/2 w-72 bg-white rounded-md shadow-xl border border-gray-200 py-3 z-50">
                                <div className="space-y-3">
                                  {dropdownMenus[item.id]?.sections.map(
                                    (section, index) => (
                                      <div key={index} className="px-4">
                                        <h3 className="text-sm font-bold text-black mb-2 border-b border-gray-100 pb-1">
                                          {section.title}
                                          {section.title === "Insights" && (
                                            <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-normal">
                                              NEW
                                            </span>
                                          )}
                                        </h3>
                                        <div className="space-y-1">
                                          {section.links.map(
                                            (link, linkIndex) => (
                                              <Link
                                                key={linkIndex}
                                                to={link.href}
                                                className="flex items-center justify-between px-2 py-1.5 text-sm text-black hover:bg-green-50 hover:text-green-600 rounded transition-colors duration-200"
                                                onClick={() =>
                                                  setActiveDropdown(null)
                                                }
                                              >
                                                <span>{link.name}</span>
                                                {link.badge && (
                                                  <span
                                                    className={`text-xs px-2 py-1 rounded-full font-bold ${
                                                      link.badge === "NEW"
                                                        ? "bg-red-500 text-white"
                                                        : "bg-yellow-400 text-black"
                                                    }`}
                                                  >
                                                    {link.badge}
                                                  </span>
                                                )}
                                              </Link>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
                      >
                        <span>{item.name}</span>
                        {item.badge && (
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tablet Navigation - Simplified */}
            <div className="hidden lg:flex xl:hidden items-center space-x-3">
              {/* Tablet Location Dropdown */}
              <div
                className="relative dropdown-container"
                onMouseEnter={() => {
                  if (dropdownTimeoutRef.current) {
                    clearTimeout(dropdownTimeoutRef.current);
                  }
                  setIsLocationDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  dropdownTimeoutRef.current = setTimeout(() => {
                    setIsLocationDropdownOpen(false);
                  }, 100);
                }}
              >
                <button className="text-gray-300 hover:text-white px-2 py-2 rounded-md text-sm font-medium flex items-center space-x-1 transition-colors duration-200 bg-transparent">
                  <span className="hidden md:inline">
                    {selectedCity === "India"
                      ? "All India"
                      : selectedCity || "All India"}
                  </span>
                  <span className="md:hidden">
                    {(selectedCity === "India"
                      ? "All India"
                      : selectedCity || "All India"
                    ).substring(0, 8)}
                    ...
                  </span>
                  <ChevronDownIcon className="h-4 w-4" />
                </button>

                {/* Same dropdown content as desktop */}
                {isLocationDropdownOpen && (
                  <div
                    className="dropdown-content location-dropdown-content fixed top-18 sm:top-20 md:top-22 lg:top-24 left-1/2 transform -translate-x-1/2 w-[95vw] max-w-[680px] bg-white rounded-lg shadow-xl py-4 sm:py-6 z-50 mx-2"
                    style={{
                      maxHeight: "calc(100vh - 120px)",
                      overflowY: "auto",
                      WebkitOverflowScrolling: "touch",
                    }}
                    onMouseEnter={() => {
                      if (dropdownTimeoutRef.current) {
                        clearTimeout(dropdownTimeoutRef.current);
                      }
                      setIsLocationDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                      dropdownTimeoutRef.current = setTimeout(() => {
                        setIsLocationDropdownOpen(false);
                      }, 100);
                    }}
                  >
                    {/* Same content as desktop dropdown but smaller */}
                    <div className="px-4 sm:px-6">
                      <div className="flex justify-between items-center mb-4 sm:mb-6">
                        <h2 className="text-lg sm:text-xl font-bold text-green-600">
                          Explore real estate in...
                        </h2>
                        <button
                          onClick={() => {
                            setIsLocationDropdownOpen(false);
                            setCurrentSearch("");
                            setShowInvalidCityMessage(false);
                            setIsSearchFocused(false);
                          }}
                          className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1"
                          aria-label="Close dropdown"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        <button
                          onClick={() => handleCitySelect("Dubai")}
                          className="bg-transparent text-black px-3 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-105"
                        >
                          Dubai
                        </button>
                        <button
                          onClick={() => {
                            if (setSelectedCity) {
                              setSelectedCity("All India");
                            }
                            setIsLocationDropdownOpen(false);
                          }}
                          className="bg-transparent text-black hover:text-green-600 px-3 py-2 text-sm transition-all duration-300 transform hover:scale-105"
                        >
                          All India
                        </button>
                        <button
                          onClick={() => handleCitySelect("India")}
                          className="bg-transparent text-black px-3 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-105"
                        >
                          For NRI
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Tablet Main Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white px-2 py-2 rounded-md text-sm font-medium flex items-center space-x-1 transition-colors duration-200"
              >
                <span>Menu</span>
                <ChevronDownIcon className="h-4 w-4" />
              </button>
            </div>

            {/* Right side buttons */}
            <div className="hidden xl:flex items-center space-x-1">
              {/* Post Property Button */}
              <div className="relative">
                <Link
                  to="/post-property"
                  className="bg-gradient-to-r from-green-600 to-black hover:from-black hover:to-green-600 text-white px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Post Property</span>
                </Link>
                {/* FREE Badge */}
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                  FREE
                </span>
              </div>

              {/* Divider */}
              <div className="h-8 w-px bg-gray-400 mx-4"></div>

              {/* Help Center Dropdown */}
              <div
                className="relative dropdown-container group help-dropdown-container"
                onMouseEnter={() => {
                  if (dropdownTimeoutRef.current) {
                    clearTimeout(dropdownTimeoutRef.current);
                  }
                  setIsHelpDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  dropdownTimeoutRef.current = setTimeout(() => {
                    setIsHelpDropdownOpen(false);
                  }, 200);
                }}
              >
                <button
                  className="text-white hover:text-gray-300 p-2 rounded-md transition-colors duration-200 flex items-center"
                  onClick={() => setIsHelpDropdownOpen(!isHelpDropdownOpen)}
                >
                  <PhoneIcon className="h-6 w-6" />
                </button>

                {/* Help Center Dropdown Menu */}
                {isHelpDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 px-6 z-50">
                    <Link
                      to="/help-center"
                      className="block text-sm font-bold text-gray-800 hover:text-blue-600 mb-4 transition-colors duration-200"
                      onClick={() => setIsHelpDropdownOpen(false)}
                    >
                      Help Center
                    </Link>

                    <div className="mb-4">
                      <Link
                        to="/sales-enquiry"
                        className="block text-sm font-semibold text-gray-800 hover:text-blue-600 mb-2 pb-2 border-b-2 border-green-500 transition-colors duration-200"
                        onClick={() => setIsHelpDropdownOpen(false)}
                      >
                        Sales Enquiry
                      </Link>
                      <p className="text-sm text-gray-500 mb-2">
                        Toll Free | 9:30 AM to 6:30 PM
                      </p>
                      <p className="text-sm text-gray-500 mb-2">(Mon-Sun)</p>
                      <a
                        href="tel:8960399597"
                        className="text-green-600 font-semibold text-sm hover:text-green-700"
                      >
                        8960399597
                      </a>
                      <p className="text-sm text-gray-500 mt-2 mb-1">
                        For International Users
                      </p>
                      <a
                        href="tel:+919650017061"
                        className="text-green-600 font-semibold text-sm hover:text-green-700"
                      >
                        +919650017061
                      </a>
                    </div>

                    <button
                      onClick={() => {
                        setShowRequestCallModal(true);
                        setIsHelpDropdownOpen(false);
                      }}
                      className="w-full bg-green-500 hover:bg-black text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center mb-4"
                    >
                      <PhoneIcon className="h-5 w-5 mr-2" />
                      Request A Call Back
                    </button>

                    <div className="text-center">
                      <Link
                        to="/help-center"
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                        onClick={() => setIsHelpDropdownOpen(false)}
                      >
                        To check all the FAQ click here
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="h-8 w-px bg-gray-400 mx-2"></div>

              {/* User Profile Dropdown with Hover */}
              <div
                className="relative dropdown-container group"
                onMouseEnter={() => {
                  if (dropdownTimeoutRef.current) {
                    clearTimeout(dropdownTimeoutRef.current);
                  }
                  setIsUserDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  dropdownTimeoutRef.current = setTimeout(() => {
                    setIsUserDropdownOpen(false);
                  }, 100);
                }}
              >
                <button
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                  className="text-white hover:text-gray-300 p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                  aria-label="User menu"
                >
                  <UserCircleIcon className="h-6 w-6" />
                </button>

                {isUserDropdownOpen && (
                  <div
                    className="dropdown-content absolute right-0 top-full mt-1 w-36 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
                    onMouseEnter={() => {
                      if (dropdownTimeoutRef.current) {
                        clearTimeout(dropdownTimeoutRef.current);
                      }
                      setIsUserDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                      dropdownTimeoutRef.current = setTimeout(() => {
                        setIsUserDropdownOpen(false);
                      }, 100);
                    }}
                  >
                    <button
                      onClick={() => {
                        navigate("/login");
                        setIsUserDropdownOpen(false);
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200 w-full text-left"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => {
                        navigate("/register");
                        setIsUserDropdownOpen(false);
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200 w-full text-left"
                    >
                      Sign Up
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Tablet Right Side Buttons */}
            <div className="hidden lg:flex xl:hidden items-center space-x-2">
              {/* Tablet Post Property Button */}
              <div className="relative">
                <Link
                  to="/post-property"
                  className="bg-gradient-to-r from-green-600 to-black hover:from-black hover:to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center space-x-1 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span className="hidden md:inline">Post Property</span>
                  <span className="md:hidden">Post</span>
                </Link>
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
                  FREE
                </span>
              </div>

              {/* Tablet Help Button */}
              <Link
                to="/mobile-help"
                className="text-white hover:text-gray-300 p-2 rounded-md transition-colors duration-200"
              >
                <PhoneIcon className="h-5 w-5" />
              </Link>

              {/* Tablet User Button */}
              <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="text-white hover:text-gray-300 p-2 rounded-md transition-colors duration-200"
              >
                <UserCircleIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-green-400 p-2 rounded-md transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-7 w-7 sm:h-8 sm:w-8" />
                ) : (
                  <Bars3Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                )}
              </button>
            </div>
          </div>
        </div>
          {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div ref={mobileMenuRef} className="xl:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-200 z-[9999] max-h-[80vh] overflow-y-auto" style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "thin" }}>
            <div className="px-4 py-6 space-y-4 max-w-md mx-auto">
              {/* Mobile Location Selector */}
              <div className="border-b border-gray-200 pb-4 mb-4 dropdown-container">
                <button onClick={() => { setIsLocationDropdownOpen(!isLocationDropdownOpen); if (!isLocationDropdownOpen) { setActiveDropdown(null); setMobileActiveDropdown(null); } }} className="bg-gradient-to-r from-green-600 to-black hover:from-black hover:to-green-600 text-white px-4 py-3 rounded-lg text-base font-medium w-full text-left flex items-center justify-between transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                  <span className="text-sm sm:text-base">{selectedCity === "India" ? "All India" : selectedCity || "All India"}</span>
                  <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 ${isLocationDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {isLocationDropdownOpen && (
                  <div className="mt-3 space-y-2 bg-gray-100 rounded-lg py-3 px-2 max-h-60 overflow-y-auto border border-gray-300 shadow-xl">
                    <button onClick={() => { handleCitySelect("India"); setIsLocationDropdownOpen(false); }} className="bg-white hover:bg-green-50 text-gray-800 block w-full text-left px-4 py-2.5 text-sm sm:text-base transition-all duration-300 rounded-lg transform hover:scale-105 shadow-sm hover:shadow-md border border-gray-200">All India</button>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {locations.map((location) => (
                        <button key={location} onClick={() => { handleCitySelect(location); setIsLocationDropdownOpen(false); }} className="bg-white hover:bg-green-50 text-gray-800 block w-full text-left px-4 py-2.5 text-sm sm:text-base transition-all duration-300 rounded-lg transform hover:scale-105 shadow-sm hover:shadow-md border border-gray-200">{location}</button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Main Links with toggles */}
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-1 dropdown-container">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => {
                          setMobileActiveDropdown(mobileActiveDropdown === item.id ? null : item.id);
                          if (isLocationDropdownOpen) setIsLocationDropdownOpen(false);
                        }}
                        className="text-gray-800 hover:text-green-600 px-3 py-3 md:py-4 rounded-md text-base font-medium w-full text-left flex items-center justify-between transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation min-h-[48px] bg-gray-50 hover:bg-gray-100"
                        aria-expanded={mobileActiveDropdown === item.id}
                        aria-controls={`mobile-${item.id}-content`}
                      >
                        <div className="flex items-center space-x-2">
                          <span>{item.name}</span>
                          {item.badge && <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">{item.badge}</span>}
                        </div>
                        <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 ${mobileActiveDropdown === item.id ? "rotate-180" : ""}`} />
                      </button>

                      {mobileActiveDropdown === item.id && (
                        <div id={`mobile-${item.id}-content`} className="bg-white rounded-lg mt-2 p-3 space-y-4 transform transition-all duration-300 ease-in-out shadow-lg border border-gray-200" style={{ marginLeft: "12px" }}>
                          {/* Render all sidebar options for each dropdown */}
                          {/* Sections */}
                          {dropdownMenus[item.id]?.sections?.map((section, idx) => (
                            <div key={idx} className="space-y-2">
                              <h4 className="text-sm font-semibold text-gray-800 border-b border-gray-200 pb-2">{section.title}</h4>
                              {section.links?.length > 0 && (
                                <div className="mt-2 space-y-2">
                                  {section.links.map((link, linkIdx) => (
                                    <Link key={linkIdx} to={link.href} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-200 text-gray-800" onClick={() => { setMobileActiveDropdown(null); setIsMenuOpen(false); }}>{link.name}</Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                          {/* Owner Offerings (for owners) */}
                          {item.id === "owners" && (
                            <div className="space-y-2">
                              <h4 className="text-sm font-semibold text-gray-800 border-b border-gray-200 pb-2">OWNER OFFERINGS</h4>
                              <div className="mt-2 space-y-2">
                                {dropdownMenus[item.id]?.ownerOfferingsContent?.map((offering) => (
                                  <Link key={offering.name} to={offering.href} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-200 text-gray-800" onClick={() => { setMobileActiveDropdown(null); setIsMenuOpen(false); }}>{offering.name}{offering.badge && <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">{offering.badge}</span>}</Link>
                                ))}
                              </div>
                            </div>
                          )}
                          {/* Property Services (for dealers) */}
                          {item.id === "dealers" && (
                            <div className="space-y-2">
                              <h4 className="text-sm font-semibold text-gray-800 border-b border-gray-200 pb-2">PROPERTY SERVICES</h4>
                              <div className="mt-2 space-y-2">
                                {dropdownMenus[item.id]?.propertyServices?.map((svc) => (
                                  <Link key={svc.name} to={svc.href} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-200 text-gray-800" onClick={() => { setMobileActiveDropdown(null); setIsMenuOpen(false); }}>{svc.name}</Link>
                                ))}
                              </div>
                            </div>
                          )}
                          {/* Insights section (for owners) */}
                          {item.id === "owners" && (
                            <div className="space-y-2">
                              <h4 className="text-sm font-semibold text-gray-800 border-b border-gray-200 pb-2 flex items-center">INSIGHTS <span className="ml-2 bg-green-600 text-white text-xs px-2 py-1 rounded">NEW</span></h4>
                              <div className="mt-2 space-y-2">
                                {dropdownMenus[item.id]?.insightsContent?.map((insight, insightIndex) => (
                                  <Link key={insightIndex} to={insight.href} className={`block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-200 ${insight.className ? insight.className : "text-gray-800"}`} onClick={() => { setMobileActiveDropdown(null); setIsMenuOpen(false); }}>{insight.name}</Link>
                                ))}
                              </div>
                            </div>
                          )}
                          {/* Articles & News */}
                          {dropdownMenus[item.id]?.articlesContent && (
                            <div className="space-y-2">
                              <h4 className="text-sm font-semibold text-gray-800 border-b border-gray-200 pb-2">ARTICLES & NEWS</h4>
                              <div className="mt-2 space-y-2">
                                {dropdownMenus[item.id]?.articlesContent?.map((article) => (
                                  <Link key={article.name} to={article.href} className={`block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-200 ${article.className ? article.className : "text-gray-800"}`} onClick={() => { setMobileActiveDropdown(null); setIsMenuOpen(false); }}>{article.name}</Link>
                                ))}
                              </div>
                            </div>
                          )}
                          {/* Top Cities (for buyers/tenants) */}
                          {(item.id === "buyers" || item.id === "tenants") && (
                            <div>
                              <h4 className="text-sm font-semibold text-gray-800 border-b border-gray-200 pb-2">Top Cities</h4>
                              <div className="mt-2 space-y-2">
                                {getDynamicTopCities(selectedPropertyType).map((city) => (
                                  <Link
                                    key={city.name}
                                    to={`/buy/${createCitySlug(city.name.replace("Property in ", "").replace("Property for rent in ", "").replace("Property in Hyderabad Metropolitan Region", "Hyderabad").replace("Property for rent in Hyderabad Metropolitan Region", "Hyderabad"))}`}
                                    className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-200 text-gray-800"
                                    onClick={() => { setMobileActiveDropdown(null); setIsMenuOpen(false); }}
                                  >
                                    {city.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                          {/* City Overviews (for insights) */}
                          {item.id === "insights" && (
                            <div className="space-y-2">
                              <h4 className="text-sm font-semibold text-gray-800 border-b border-gray-200 pb-2">CITY OVERVIEW</h4>
                              <div className="mt-2 space-y-2">
                                {dropdownMenus[item.id]?.cityOverviews?.map((city) => (
                                  <Link key={city.name} to={city.href} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-200 text-gray-800" onClick={() => { setMobileActiveDropdown(null); setIsMenuOpen(false); }}>{city.name}</Link>
                                ))}
                              </div>
                            </div>
                          )}
                          {/* Price Trends (for insights) */}
                          {item.id === "insights" && (
                            <div className="space-y-2">
                              <h4 className="text-sm font-semibold text-gray-800 border-b border-gray-200 pb-2">PRICE TRENDS</h4>
                              <div className="mt-2 space-y-2">
                                {dropdownMenus[item.id]?.priceTrendsContent?.map((trend, trendIndex) => (
                                  <Link key={trendIndex} to={trend.href} className={`block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-200 ${trend.className ? trend.className : "text-gray-800"}`} onClick={() => { setMobileActiveDropdown(null); setIsMenuOpen(false); }}>{trend.name}</Link>
                                ))}
                              </div>
                            </div>
                          )}
                          {/* Contact Info */}
                          {dropdownMenus[item.id]?.contact && (
                            <div className="pt-2 border-t border-gray-100">
                              <p className="text-xs text-gray-700 mb-1">contact us toll free on</p>
                              <p className="text-base font-bold text-black">{dropdownMenus[item.id]?.contact?.phone} <span className="text-xs font-normal text-black">{dropdownMenus[item.id]?.contact?.time}</span></p>
                              <p className="text-xs text-gray-700 mb-1">Email us at <a href={`mailto:${dropdownMenus[item.id]?.contact?.email}`} className="text-green-600">{dropdownMenus[item.id]?.contact?.email}</a> or call us at <span className="font-bold text-black">{dropdownMenus[item.id]?.contact?.tollFree}</span></p>
                            </div>
                          )}
                          {/* Promotional Box (for owners/dealers) */}
                          {(item.id === "owners" || item.id === "dealers") && (
                            <div className="bg-green-50 rounded-lg p-4 mt-2 flex flex-col items-center">
                              <h4 className="text-base font-bold text-black mb-1 text-center">{dropdownMenus[item.id]?.promotionalContent?.title}</h4>
                              <p className="text-xs text-gray-700 mb-2 text-center">{dropdownMenus[item.id]?.promotionalContent?.subtitle}</p>
                              <Link to={dropdownMenus[item.id]?.promotionalContent?.buttonHref} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-center">{dropdownMenus[item.id]?.promotionalContent?.buttonText}</Link>
                              <div className="mt-4 flex justify-end w-full">
                                <div className="w-12 h-12 bg-white border-2 border-green-200 rounded-lg"></div>
                              </div>
                            </div>
                          )}
                          {/* Insights Box (for buyers/tenants/insights) */}
                          {(item.id === "buyers" || item.id === "tenants" || item.id === "insights") && (
                            <div className="bg-green-50 rounded-lg p-4 mt-2 flex flex-col items-start">
                              <span className="text-sm text-green-600 font-medium mb-2">INTRODUCING</span>
                              <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center mr-3">
                                  <span className="text-white font-bold text-lg">i</span>
                                </div>
                                <h4 className="text-xl font-bold text-black">Insights</h4>
                              </div>
                              <div className="space-y-2">
                                {dropdownMenus[item.id]?.insights?.features?.map((feature, featureIndex) => (
                                  <div key={featureIndex} className="flex items-center text-sm text-black">
                                    <div className="w-4 h-4 border-2 border-green-600 rounded-full mr-3 flex items-center justify-center">
                                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                    </div>
                                    {feature.name}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link to={item.href} className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>{item.name}</Link>
                  )}
                </div>
              ))}
   {/* Mobile Action Buttons */}
              <div className="border-t border-gray-200 pt-4 mt-4 space-y-3">
                {/* Mobile Post Property Button */}
                <div className="relative dropdown-container">
                  <Link
                    to="/post-property"
                    className="bg-gradient-to-r from-green-600 to-black hover:from-black hover:to-green-600 text-white w-full px-4 py-4 sm:py-4 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 touch-manipulation min-h-[52px]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>Post Property</span>
                  </Link>
                  {/* FREE Badge */}
                  <span className="absolute -top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                    FREE
                  </span>
                </div>
                {/* Mobile Support and User Options */}
                <div className="flex items-center justify-center space-x-8 pt-4 border-t border-gray-200 mt-4">
                  <div className="relative help-dropdown-container dropdown-container">
                    <Link
                      to="/mobile-help"
                      className="text-gray-700 hover:text-green-600 p-3 rounded-md transition-colors duration-200 flex flex-col items-center touch-manipulation min-h-[60px] min-w-[60px] transform hover:scale-105 active:scale-95 bg-gray-50 hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <PhoneIcon className="h-7 w-7 mb-1" />
                      <span className="text-xs">Support</span>
                    </Link>
                  </div>
                  <div className="relative dropdown-container">
                    <div className="relative dropdown-container">
                      <button
                        className="text-gray-700 hover:text-green-600 p-3 rounded-md transition-colors duration-200 flex flex-col items-center touch-manipulation min-h-[60px] min-w-[60px] transform hover:scale-105 active:scale-95 bg-gray-50 hover:bg-gray-100"
                        onClick={() =>
                          setIsUserDropdownOpen(!isUserDropdownOpen)
                        }
                        aria-label="User profile menu"
                      >
                        <UserCircleIcon className="h-7 w-7 mb-1" />
                        <span className="text-xs">Profile</span>
                      </button>
                      {/* Mobile User Dropdown Menu */}
                      {isUserDropdownOpen && (
                        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[9999]">
                          <button
                            onClick={() => {
                              navigate("/login");
                              // setIsMenuOpen(false);
                              setIsUserDropdownOpen(false);
                            }}
                            className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                          >
                            Sign In
                          </button>
                          <button
                            onClick={() => {
                              navigate("/register");
                              setIsMenuOpen(false);
                              setIsUserDropdownOpen(false);
                            }}
                            className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                          >
                            Sign Up
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Request_a_call Modal Popup */}
      <Request_a_call
        isOpen={showRequestCallModal}
        onClose={() => setShowRequestCallModal(false)}
      />
    </>
  );
};
export default Navbar;
