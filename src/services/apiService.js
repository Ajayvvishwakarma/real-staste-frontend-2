// API Service with fallback to mock data
import { cityBuyPropertyData, cityRentPropertyData } from '../data/cityPropertyData.js';

const API_BASE_URL = import.meta.env.VITE_API_URL || '';
const USE_MOCK_DATA = !API_BASE_URL;

// Helper function to simulate API delay for better UX
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Generic fetch with fallback to mock data
const fetchWithFallback = async (endpoint, mockData) => {
  if (USE_MOCK_DATA) {
    await delay(500);
    return mockData;
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn(`API call failed for ${endpoint}, falling back to mock data:`, error.message);
    await delay(300);
    return mockData;
  }
};

// Mock data generators
const generatePropertiesData = () => {
  const allProperties = [];
  
  Object.values(cityBuyPropertyData).forEach(city => {
    if (city.properties) {
      allProperties.push(...city.properties.map(prop => ({
        ...prop,
        city: city.name
      })));
    }
  });
  
  return allProperties.slice(0, 20);
};

const generateProjectsData = () => {
  const projects = [];
  let id = 1;
  
  Object.values(cityBuyPropertyData).forEach(city => {
    if (city.properties) {
      city.properties.slice(0, 3).forEach(prop => {
        projects.push({
          id: id++,
          name: prop.project || `Project ${id}`,
          location: prop.location,
          image: prop.image,
          type: 'Residential',
          priceRange: prop.price || '₹45 Lac - 1.2 Cr',
          possession: '2024-2025',
          bhk: prop.bhk || '2-3 BHK',
          area: prop.area,
          description: `Premium ${prop.bhk || '2-3 BHK'} apartments in ${city.name}`,
          amenities: ['Swimming Pool', 'Gym', 'Parking', 'Security', 'Garden'],
          developer: prop.project ? prop.project.split(' ')[0] : 'Premium Builder'
        });
      });
    }
  });
  
  return projects.slice(0, 15);
};

const generateArticlesData = () => {
  const articles = [];
  const topics = [
    'Real Estate Investment Tips',
    'Property Market Trends',
    'Home Buying Guide',
    'Rental Property Management',
    'Property Valuation Methods'
  ];
  
  topics.forEach((topic, index) => {
    articles.push({
      id: index + 1,
      title: topic,
      excerpt: `Comprehensive guide about ${topic.toLowerCase()} for property investors and homebuyers.`,
      image: `https://images.unsplash.com/photo-1560518821-1${index}00-${index}${index}${index}${index}${index}${index}${index}${index}?auto=format&fit=crop&w=400&q=80`,
      author: 'Real Estate Expert',
      publishDate: new Date(Date.now() - index * 24 * 60 * 60 * 1000).toLocaleDateString(),
      readTime: `${3 + index} min read`,
      category: 'Property Guide'
    });
  });
  
  return articles;
};

const generateCitiesData = () => {
  return Object.keys(cityBuyPropertyData).map(key => {
    const city = cityBuyPropertyData[key];
    return {
      id: key,
      name: city.name,
      displayName: city.displayName,
      count: city.totalResults || 0, // This is what the component expects
      totalProperties: city.totalResults,
      description: city.description,
      image: `https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80`,
      popularLocalities: city.localities ? city.localities.slice(0, 5) : []
    };
  });
};

const generateBenefitsData = () => {
  return [
    {
      id: 1,
      title: 'Expert Property Consultation',
      description: 'Get professional advice from certified real estate experts',
      icon: 'consultation'
    },
    {
      id: 2,
      title: 'Verified Properties',
      description: 'All properties are verified and authenticated',
      icon: 'verified'
    },
    {
      id: 3,
      title: 'Best Market Rates',
      description: 'Competitive prices and transparent dealings',
      icon: 'rates'
    },
    {
      id: 4,
      title: 'Legal Support',
      description: 'Complete legal documentation support',
      icon: 'legal'
    }
  ];
};

const generateTestimonialsData = () => {
  return [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Gurgaon',
      rating: 5,
      comment: 'Excellent service! Found my dream home within my budget.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      comment: 'Professional team and smooth transaction process.',
      image: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      id: 3,
      name: 'Amit Singh',
      location: 'Delhi',
      rating: 4,
      comment: 'Great platform with verified properties.',
      image: 'https://randomuser.me/api/portraits/men/3.jpg'
    }
  ];
};

// API Service functions
export const apiService = {
  getProperties: () => fetchWithFallback('/api/properties', generatePropertiesData()),
  getRealEstateProjects: () => fetchWithFallback('/api/real-estate-projects', generateProjectsData()),
  getPropertyArticles: () => fetchWithFallback('/api/property-articles', generateArticlesData()),
  getCities: () => fetchWithFallback('/api/cities', generateCitiesData()),
  getRealEstateBenefits: () => fetchWithFallback('/api/real-estate-benefits', generateBenefitsData()),
  getRealEstateTestimonials: () => fetchWithFallback('/api/real-estate-testimonials', generateTestimonialsData()),
  getCityData: (cityName) => fetchWithFallback(`/api/city-data/${cityName}`, 
    cityBuyPropertyData[cityName.toLowerCase()] || cityBuyPropertyData.gurgaon
  )
};

export default apiService;