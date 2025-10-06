import React, { useState } from 'react';
import Popular_Tools from './Popular_Tools';
import Cities_popular from './Cities_popular';
import HeroSection from './HeroSection';
import FeatureCards from './FeatureCards';
import LocalityDataSection from './LocalityDataSection';
import TransactionPricesSection from './TransactionPricesSection';
import StartWithGuidesSection from './StartWithGuidesSection';
import FAQSection from './FAQSection';
import IdeasForAspirationalHomes from './IdeasForAspirationalHomes';
import EditorsPickSection from './EditorsPickSection';

const UnderstandLocalities = () => {
  // State for popup modals
  const [popupContent, setPopupContent] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // City data for different cities
  const cityData = {
    'Bangalore': [
      { name: 'Garebhavigalva', area: 'Bangalore South', rate: '₹14,500/ sq ft', yield: '3%', trend: '137.7% YoY', width: '85%', icon: '🔵' },
      { name: 'HRBR Layout', area: 'Bangalore North', rate: '₹13,800/ sq ft', yield: 'NA', trend: '135.9% YoY', width: '82%', icon: '🏢' },
      { name: 'Bannerghatta', area: 'Bangalore South', rate: '₹13,150/ sq ft', yield: 'NA', trend: '124.8% YoY', width: '75%', icon: '🔵' },
      { name: 'Ring Road', area: 'Bangalore West', rate: '₹14,100/ sq ft', yield: '0%', trend: '104.3% YoY', width: '65%', icon: '🔵' },
      { name: 'Medahalli', area: 'Bangalore East', rate: '₹9,900/ sq ft', yield: '2%', trend: '104.1% YoY', width: '64%', icon: '🔵' }
    ],
    'Mumbai': [
      { name: 'Bandra West', area: 'Mumbai Central', rate: '₹45,000/ sq ft', yield: '2.5%', trend: '98.5% YoY', width: '78%', icon: '🔵' },
      { name: 'Andheri East', area: 'Mumbai Suburban', rate: '₹25,500/ sq ft', yield: '3.2%', trend: '89.3% YoY', width: '72%', icon: '🏢' },
      { name: 'Powai', area: 'Mumbai Suburban', rate: '₹22,800/ sq ft', yield: '2.8%', trend: '76.4% YoY', width: '65%', icon: '🔵' },
      { name: 'Malad West', area: 'Mumbai Suburban', rate: '₹18,900/ sq ft', yield: '3.5%', trend: '65.2% YoY', width: '58%', icon: '🔵' },
      { name: 'Thane West', area: 'Thane', rate: '₹12,400/ sq ft', yield: '4.1%', trend: '52.8% YoY', width: '45%', icon: '🔵' }
    ],
    'Delhi': [
      { name: 'Connaught Place', area: 'Central Delhi', rate: '₹35,000/ sq ft', yield: '2.2%', trend: '85.6% YoY', width: '70%', icon: '🔵' },
      { name: 'Dwarka', area: 'South West Delhi', rate: '₹15,200/ sq ft', yield: '3.8%', trend: '72.3% YoY', width: '62%', icon: '🏢' },
      { name: 'Rohini', area: 'North West Delhi', rate: '₹12,800/ sq ft', yield: '4.2%', trend: '58.9% YoY', width: '52%', icon: '🔵' },
      { name: 'Lajpat Nagar', area: 'South Delhi', rate: '₹28,500/ sq ft', yield: '2.7%', trend: '48.7% YoY', width: '42%', icon: '🔵' },
      { name: 'Janakpuri', area: 'West Delhi', rate: '₹14,600/ sq ft', yield: '3.9%', trend: '41.2% YoY', width: '38%', icon: '🔵' }
    ],
    'Pune': [
      { name: 'Koregaon Park', area: 'Pune Central', rate: '₹18,500/ sq ft', yield: '3.1%', trend: '92.4% YoY', width: '75%', icon: '🔵' },
      { name: 'Baner', area: 'Pune West', rate: '₹12,200/ sq ft', yield: '3.8%', trend: '78.6% YoY', width: '68%', icon: '🏢' },
      { name: 'Wakad', area: 'Pune West', rate: '₹9,800/ sq ft', yield: '4.2%', trend: '65.3% YoY', width: '58%', icon: '🔵' },
      { name: 'Kharadi', area: 'Pune East', rate: '₹8,400/ sq ft', yield: '4.5%', trend: '54.7% YoY', width: '48%', icon: '🔵' },
      { name: 'Hadapsar', area: 'Pune East', rate: '₹7,200/ sq ft', yield: '4.8%', trend: '42.1% YoY', width: '40%', icon: '🔵' }
    ],
    'Chennai': [
      { name: 'Anna Nagar', area: 'Chennai Central', rate: '₹16,800/ sq ft', yield: '3.4%', trend: '88.2% YoY', width: '72%', icon: '🔵' },
      { name: 'Velachery', area: 'Chennai South', rate: '₹12,500/ sq ft', yield: '3.9%', trend: '74.6% YoY', width: '65%', icon: '🏢' },
      { name: 'OMR', area: 'Chennai South', rate: '₹9,200/ sq ft', yield: '4.3%', trend: '62.8% YoY', width: '55%', icon: '🔵' },
      { name: 'Tambaram', area: 'Chennai South', rate: '₹6,800/ sq ft', yield: '4.7%', trend: '48.5% YoY', width: '45%', icon: '🔵' },
      { name: 'Porur', area: 'Chennai West', rate: '₹8,900/ sq ft', yield: '4.1%', trend: '39.2% YoY', width: '38%', icon: '🔵' }
    ],
    'Hyderabad': [
      { name: 'Banjara Hills', area: 'Hyderabad Central', rate: '₹22,000/ sq ft', yield: '2.8%', trend: '95.3% YoY', width: '78%', icon: '🔵' },
      { name: 'Gachibowli', area: 'Hyderabad West', rate: '₹15,400/ sq ft', yield: '3.6%', trend: '82.7% YoY', width: '70%', icon: '🏢' },
      { name: 'Kondapur', area: 'Hyderabad West', rate: '₹11,800/ sq ft', yield: '4.1%', trend: '68.9% YoY', width: '60%', icon: '🔵' },
      { name: 'Kukatpally', area: 'Hyderabad North', rate: '₹8,600/ sq ft', yield: '4.5%', trend: '55.4% YoY', width: '50%', icon: '🔵' },
      { name: 'Miyapur', area: 'Hyderabad North', rate: '₹7,200/ sq ft', yield: '4.8%', trend: '43.7% YoY', width: '42%', icon: '🔵' }
    ],
    'Secunderabad': [
      { name: 'Begumpet', area: 'Secunderabad Central', rate: '₹18,500/ sq ft', yield: '3.2%', trend: '89.7% YoY', width: '75%', icon: '🔵' },
      { name: 'Trimulgherry', area: 'Secunderabad North', rate: '₹12,200/ sq ft', yield: '4.0%', trend: '72.3% YoY', width: '63%', icon: '🏢' },
      { name: 'Alwal', area: 'Secunderabad North', rate: '₹9,800/ sq ft', yield: '4.4%', trend: '58.9% YoY', width: '52%', icon: '🔵' },
      { name: 'Bowenpally', area: 'Secunderabad West', rate: '₹8,400/ sq ft', yield: '4.6%', trend: '46.2% YoY', width: '44%', icon: '🔵' },
      { name: 'Malkajgiri', area: 'Secunderabad East', rate: '₹7,600/ sq ft', yield: '4.9%', trend: '38.5% YoY', width: '36%', icon: '🔵' }
    ],
    'Noida': [
      { name: 'Sector 62', area: 'Noida Central', rate: '₹14,800/ sq ft', yield: '3.5%', trend: '76.4% YoY', width: '68%', icon: '🔵' },
      { name: 'Sector 137', area: 'Noida Expressway', rate: '₹11,200/ sq ft', yield: '3.9%', trend: '64.8% YoY', width: '58%', icon: '🏢' },
      { name: 'Greater Noida West', area: 'Greater Noida', rate: '₹8,900/ sq ft', yield: '4.3%', trend: '52.6% YoY', width: '48%', icon: '🔵' },
      { name: 'Sector 76', area: 'Noida Central', rate: '₹7,600/ sq ft', yield: '4.7%', trend: '41.3% YoY', width: '40%', icon: '🔵' },
      { name: 'Sector 120', area: 'Noida South', rate: '₹6,400/ sq ft', yield: '5.1%', trend: '34.7% YoY', width: '32%', icon: '🔵' }
    ],
    'Gurgaon': [
      { name: 'Golf Course Road', area: 'Gurgaon South', rate: '₹25,600/ sq ft', yield: '2.5%', trend: '98.2% YoY', width: '82%', icon: '🔵' },
      { name: 'DLF Phase IV', area: 'Gurgaon Central', rate: '₹19,800/ sq ft', yield: '3.1%', trend: '85.7% YoY', width: '73%', icon: '🏢' },
      { name: 'Sohna Road', area: 'Gurgaon South', rate: '₹13,400/ sq ft', yield: '3.8%', trend: '69.5% YoY', width: '61%', icon: '🔵' },
      { name: 'Sector 81', area: 'Gurgaon North', rate: '₹9,700/ sq ft', yield: '4.2%', trend: '54.8% YoY', width: '49%', icon: '🔵' },
      { name: 'New Gurgaon', area: 'Gurgaon West', rate: '₹8,200/ sq ft', yield: '4.6%', trend: '42.1% YoY', width: '41%', icon: '🔵' }
    ]
  };

  // Function to update city data across all sections
  const updateCityData = (cityName) => {
    // Update locality data section
    const container = document.getElementById('city-data-container');
    const data = cityData[cityName] || cityData['Bangalore'];
    
    if (container) {
      container.innerHTML = data.map((locality, index) => `
        <div class="grid grid-cols-4 gap-4 py-3 ${index < data.length - 1 ? 'border-b border-gray-100' : ''} items-center">
          <div class="flex items-center">
            <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <div>
              <div class="font-medium text-sm text-gray-900">${locality.name}</div>
              <div class="text-xs text-gray-500">${locality.area}</div>
            </div>
          </div>
          <div class="text-center">
            <div class="text-sm text-gray-600">Rate on 99acres</div>
            <div class="font-semibold text-sm">${locality.rate}</div>
          </div>
          <div class="text-center">
            <div class="text-sm text-gray-600">Rental Yield</div>
            <div class="font-semibold text-sm">${locality.yield}</div>
          </div>
          <div class="text-center">
            <div class="text-green-600 font-semibold text-sm">↗ ${locality.trend}</div>
            <div class="w-full bg-gray-200 rounded-full h-1 mt-1">
              <div class="bg-green-500 h-1 rounded-full" style="width: ${locality.width}"></div>
            </div>
          </div>
        </div>
      `).join('');
    }
    
    // Update page title and headers with city name
    const pageTitle = document.querySelector('title');
    if (pageTitle) {
      pageTitle.textContent = `${cityName} Property Insights & Market Trends - 99acres`;
    }
    
    // Update any city-specific text elements
    const cityElements = document.querySelectorAll('[data-city-name], .city-name');
    cityElements.forEach(element => {
      element.textContent = cityName;
    });
    
    // Update hero section search placeholder
    const searchInput = document.querySelector('input[placeholder*="locality"], input[placeholder*="area"]');
    if (searchInput) {
      searchInput.placeholder = `Search for locality, landmark or project in ${cityName}`;
    }
    
    // Update feature cards with city-specific data
    const locationCards = document.querySelectorAll('.feature-card, [data-feature="location"]');
    locationCards.forEach(card => {
      const cardTitle = card.querySelector('h3, .card-title');
      if (cardTitle && cardTitle.textContent.includes('Neighbourhood')) {
        cardTitle.textContent = `${cityName} Neighbourhood Insights`;
      }
    });
    
    // Update any breadcrumb or navigation elements
    const breadcrumbs = document.querySelectorAll('.breadcrumb, [data-breadcrumb]');
    breadcrumbs.forEach(breadcrumb => {
      const cityBreadcrumb = breadcrumb.querySelector('[data-city]');
      if (cityBreadcrumb) {
        cityBreadcrumb.textContent = cityName;
      }
    });
    
    console.log(`City data updated to: ${cityName}`);
  };

  // Handle navigation based on component type
  const handleNavigation = (linkElement, href, linkText) => {
    // Define which components are related to current page (stay on same page)
    const relatedComponents = [
      'insights/city',
      'localities',
      'property-rates',
      'overview',
      'understand-localities',
      'city-overview'
    ];

    // Define which components should open as popups
    const popupComponents = [
      'home-loan',
      'legal-services', 
      'property-search',
      'investment-calculator',
      'emi-calculator',
      'stamp-duty',
      'registration-charges',
      'broker-services',
      'property-valuation',
      'market-trends',
      'builder-info',
      'society-reviews'
    ];

    const isRelatedComponent = relatedComponents.some(component => 
      href.includes(component) || linkText.toLowerCase().includes(component.replace('-', ' '))
    );

    const isPopupComponent = popupComponents.some(component => 
      href.includes(component) || linkText.toLowerCase().includes(component.replace('-', ' '))
    );

    if (isRelatedComponent) {
      // Handle city switching or related component navigation
      const cityName = extractCityFromLink(linkText, href);
      if (cityName && cityData[cityName]) {
        updateCityData(cityName);
        showNotification(`📍 Showing ${cityName} property insights`, 'green');
      } else {
        showNotification(`🏠 Navigating within insights`, 'blue');
      }
      return true; // Stay on current page
    } else if (isPopupComponent) {
      // Open as popup
      openPopup(linkText, href);
      return true; // Prevent navigation
    } else {
      // Allow normal navigation for other links
      return false; // Allow default navigation
    }
  };

  // Extract city name from link
  const extractCityFromLink = (linkText, href) => {
    const cityMappings = {
      'secunderabad': 'Secunderabad',
      'pune': 'Pune', 
      'noida': 'Noida',
      'mumbai': 'Mumbai',
      'hyderabad': 'Hyderabad',
      'gurgaon': 'Gurgaon',
      'gurugram': 'Gurgaon',
      'delhi': 'Delhi',
      'chennai': 'Chennai',
      'bangalore': 'Bangalore',
      'bengaluru': 'Bangalore'
    };

    for (const [key, value] of Object.entries(cityMappings)) {
      if (linkText.toLowerCase().includes(key) || href.toLowerCase().includes(key)) {
        return value;
      }
    }
    return null;
  };

  // Show notification
  const showNotification = (message, color) => {
    const notification = document.createElement('div');
    const bgColor = color === 'green' ? 'bg-green-600' : 'bg-blue-600';
    notification.innerHTML = `
      <div class="fixed top-4 right-4 ${bgColor} text-white px-4 py-2 rounded-lg shadow-lg z-50 transform transition-all duration-300">
        ${message}
      </div>
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 3000);
  };

  // Open popup modal
  const openPopup = (title, url) => {
    setPopupContent({
      title: title,
      url: url,
      content: getPopupContent(title, url)
    });
    setIsPopupOpen(true);
  };

  // Get popup content based on the component
  const getPopupContent = (title, url) => {
    // Return appropriate content based on the component
    if (title.toLowerCase().includes('calculator') || url.includes('calculator')) {
      return (
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">Calculator Tool</h3>
          <p className="text-gray-600 mb-4">This calculator tool helps you estimate various property-related calculations.</p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Calculator interface would be embedded here</p>
          </div>
        </div>
      );
    } else if (title.toLowerCase().includes('loan') || url.includes('loan')) {
      return (
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">Home Loan Services</h3>
          <p className="text-gray-600 mb-4">Get the best home loan deals and compare interest rates from various banks.</p>
          <div className="space-y-2">
            <div className="flex justify-between bg-gray-50 p-2 rounded">
              <span>SBI Home Loan</span>
              <span className="font-semibold">8.50% onwards</span>
            </div>
            <div className="flex justify-between bg-gray-50 p-2 rounded">
              <span>HDFC Home Loan</span>
              <span className="font-semibold">8.75% onwards</span>
            </div>
            <div className="flex justify-between bg-gray-50 p-2 rounded">
              <span>ICICI Home Loan</span>
              <span className="font-semibold">8.65% onwards</span>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <p className="text-gray-600 mb-4">This service provides detailed information and assistance for your property needs.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-600">Service details and interface would be displayed here</p>
          </div>
        </div>
      );
    }
  };

  // Make updateCityData available globally
  React.useEffect(() => {
    window.updateCityData = updateCityData;
    
    // Prevent navbar navigation and enable city data switching
    const handleNavbarClicks = () => {
      // Target specific city overview links in navbar
      const cityOverviewLinks = document.querySelectorAll('a[href*="/insights/city/"]');
      
      cityOverviewLinks.forEach(link => {
        // Skip if already has event listener
        if (link.hasAttribute('data-insights-handled')) return;
        link.setAttribute('data-insights-handled', 'true');
        
        link.addEventListener('click', (e) => {
          const linkText = link.textContent.trim();
          const href = link.getAttribute('href') || '';
          
          // Use the new navigation handler
          const shouldPreventDefault = handleNavigation(link, href, linkText);
          
          if (shouldPreventDefault) {
            e.preventDefault();
            e.stopPropagation();
            
            // Close mobile menu if open
            const menuToggle = document.querySelector('[data-menu-toggle]');
            if (menuToggle && menuToggle.getAttribute('aria-expanded') === 'true') {
              menuToggle.click();
            }
          }
          
          return !shouldPreventDefault;
        });
      });
      
      // Handle all other navigation links
      const allLinks = document.querySelectorAll('a:not([data-insights-handled])');
      allLinks.forEach(link => {
        if (link.hasAttribute('data-insights-handled')) return;
        link.setAttribute('data-insights-handled', 'true');
        
        link.addEventListener('click', (e) => {
          const linkText = link.textContent.trim();
          const href = link.getAttribute('href') || '';
          
          // Skip external links and empty hrefs
          if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || !href) {
            return; // Allow normal navigation
          }
          
          // Use the navigation handler
          const shouldPreventDefault = handleNavigation(link, href, linkText);
          
          if (shouldPreventDefault) {
            e.preventDefault();
            e.stopPropagation();
            
            // Close mobile menu if open
            const menuToggle = document.querySelector('[data-menu-toggle]');
            if (menuToggle && menuToggle.getAttribute('aria-expanded') === 'true') {
              menuToggle.click();
            }
          }
        });
      });
    };
    
    // Initial setup
    handleNavbarClicks();
    
    // Re-run when DOM changes (for dynamic navbar)
    const observer = new MutationObserver(handleNavbarClicks);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Popup Modal */}
      {isPopupOpen && popupContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">{popupContent.title}</h2>
              <button
                onClick={() => {
                  setIsPopupOpen(false);
                  setPopupContent(null);
                }}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              {popupContent.content}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-3 mr-8">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Feature Cards Section */}
        <FeatureCards />

        {/* Latest & Greatest Section */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Latest & Greatest
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Know what's new in real estate across India
            </p>
          </div>
        </div>

        {/* News Articles Slider */}
        <div className="relative pr-10 mb-8">
          {/* Left Arrow */}
          <button 
            onClick={() => {
              const slider = document.getElementById('news-slider');
              slider.scrollBy({ left: -280, behavior: 'smooth' });
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button 
            onClick={() => {
              const slider = document.getElementById('news-slider');
              slider.scrollBy({ left: 280, behavior: 'smooth' });
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider Container */}
          <div 
            id="news-slider"
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pl-12 pr-32"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Article 1 */}
            <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <img 
                src="/realstateimg/image.png" 
                alt="Online building plan approval"
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-3">
                <h3 className="font-semibold text-sm text-gray-900 mb-2 line-clamp-2">
                  Online building plan approval in Bangalore
                </h3>
                <p className="text-xs text-gray-500">Sep 03, 2024</p>
              </div>
            </div>

            {/* Article 2 */}
            <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <img 
                src="/cities/noida.jpg" 
                alt="Noida FAR updated"
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-3">
                <h3 className="font-semibold text-sm text-gray-900 mb-2 line-clamp-2">
                  Noida's FAR updated: Boon or bane for buyers?
                </h3>
                <p className="text-xs text-gray-500">Sep 02, 2024</p>
              </div>
            </div>

            {/* Article 3 */}
            <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <img 
                src="/realstateproject/image.png" 
                alt="UP Rehab deal defaulters"
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-3">
                <h3 className="font-semibold text-sm text-gray-900 mb-2 line-clamp-2">
                  UP's Rehab deal defaulters face flats sealing
                </h3>
                <p className="text-xs text-gray-500">Aug 27, 2024</p>
              </div>
            </div>

            {/* Article 4 */}
            <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <img 
                src="/image.png" 
                alt="RBI cuts down repo rate"
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-3">
                <h3 className="font-semibold text-sm text-gray-900 mb-2 line-clamp-2">
                  RBI cuts down repo rate to 5.5%
                </h3>
                <p className="text-xs text-gray-500">Oct 06, 2023</p>
              </div>
            </div>

            {/* Article 5 - PMAY-CLSS extended */}
            <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <img 
                src="/realstateimg/image2.png" 
                alt="PMAY-CLSS extended till December 2024"
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-3">
                <h3 className="font-semibold text-sm text-gray-900 mb-2 line-clamp-2">
                  PMAY-CLSS extended till December 2024
                </h3>
                <p className="text-xs text-gray-500">Apr 21, 2023</p>
              </div>
            </div>

            {/* Article 6 - Surat-Chennai Eway */}
            <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <img 
                src="/realstateimg/image3.png" 
                alt="Surat-Chennai Eway: Project details to know"
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-3">
                <h3 className="font-semibold text-sm text-gray-900 mb-2 line-clamp-2">
                  Surat-Chennai Eway: Project details to know
                </h3>
                <p className="text-xs text-gray-500">Apr 13, 2023</p>
              </div>
            </div>

            {/* Article 7 - Skywalk to connect Delhi and Noida Metro */}
            <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <img 
                src="/realstateimg/image4.png" 
                alt="Skywalk to connect Delhi and Noida Metro"
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-3">
                <h3 className="font-semibold text-sm text-gray-900 mb-2 line-clamp-2">
                  Skywalk to connect Delhi and Noida Metro
                </h3>
                <p className="text-xs text-gray-500">Mar 30, 2023</p>
              </div>
            </div>

            {/* Article 8 - Major banks cut home loan interest rates */}
            <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <img 
                src="/realstateimg/image5.png" 
                alt="Major banks cut home loan interest rates"
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-3">
                <h3 className="font-semibold text-sm text-gray-900 mb-2 line-clamp-2">
                  Major banks cut home loan interest rates
                </h3>
                <p className="text-xs text-gray-500 bg-blue-100 px-2 py-1 rounded inline-block">Mar 13, 2023</p>
              </div>
            </div>

            {/* Article 9 - Additional article */}
            <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <img 
                src="/realstateimg/image7.png" 
                alt="New housing policy for affordable homes"
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-3">
                <h3 className="font-semibold text-sm text-gray-900 mb-2 line-clamp-2">
                  New housing policy for affordable homes
                </h3>
                <p className="text-xs text-gray-500">Feb 15, 2023</p>
              </div>
            </div>

            {/* Article 10 - Additional article */}
            <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <img 
                src="/realstateproject/image.png" 
                alt="Smart city projects gaining momentum"
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-3">
                <h3 className="font-semibold text-sm text-gray-900 mb-2 line-clamp-2">
                  Smart city projects gaining momentum
                </h3>
                <p className="text-xs text-gray-500">Jan 28, 2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* Top Gainers Section */}
        <LocalityDataSection cityData={cityData} updateCityData={updateCityData} />

        {/* Check Transaction Prices Section */}
        <TransactionPricesSection />

        {/* See Insight based on your goals Section */}
        <div className="mt-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-1">See Insight based on your goals</h2>
            <p className="text-sm text-gray-600">Tell us a few details to personalise your insights</p>
          </div>

          {/* Goal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Buy a Property */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-lg">🏠</span>
                </div>
                <div className="text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Buy a Property</h3>
              <p className="text-sm text-gray-600">Explore localities, societies, budget</p>
            </div>

            {/* Rent a Property */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 text-lg">⚠️</span>
                </div>
                <div className="text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Rent a Property</h3>
              <p className="text-sm text-gray-600">Get insights on neighbourhood lifestyle & commute</p>
            </div>

            {/* Sell / Rent out a Property */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-lg">✏️</span>
                </div>
                <div className="text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sell / Rent out a Property</h3>
              <p className="text-sm text-gray-600">Check selling trends & rental demand in your area</p>
            </div>
          </div>
          {/* Feedback Section */}
          <div className="bg-orange-50 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-orange-200 rounded-lg flex items-center justify-center mr-3">
                <span className="text-orange-600 text-lg">💡</span>
              </div>
              <span className="text-gray-700 font-medium">Are you finding these insights helpful?</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center text-green-600 font-medium">
                <span className="mr-1">👍</span> Yes
              </button>
              <button className="flex items-center text-red-600 font-medium">
                <span className="mr-1">👎</span> No
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Discover Popular Cities Section */}
        <Cities_popular/>
        <Popular_Tools/>
        
        {/* Ideas for Aspirational Homes Section */}
        <IdeasForAspirationalHomes />

        {/* Start with these guides Section */}
        <StartWithGuidesSection />

        {/* Editor's Pick Section */}
        <EditorsPickSection />

        {/* Common Doubts & FAQs Section */}
        <FAQSection />
      </div>
    </div>
  );
};

export default UnderstandLocalities;