// Utility functions for city navigation and URL handling

// Convert city name to URL-friendly slug
export const createCitySlug = (cityName) => {
  if (!cityName) return '';
  
  return cityName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Convert URL slug back to formatted city name
export const formatCityName = (citySlug) => {
  if (!citySlug) return '';
  
  return citySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// List of major cities with their routes
export const majorCities = [
  { name: 'Delhi', slug: 'delhi', component: 'DelhiRealEstate' },
  { name: 'Mumbai', slug: 'mumbai', component: 'MumbaiRealEstate' },
  { name: 'Bangalore', slug: 'bangalore', component: 'BangaloreRealEstate' },
  { name: 'Hyderabad', slug: 'hyderabad', component: 'HyderabadRealEstate' },
  { name: 'Pune', slug: 'pune', component: 'PuneRealEstate' },
  { name: 'Chennai', slug: 'chennai', component: 'ChennaiRealEstate' },
  { name: 'Kolkata', slug: 'kolkata', component: 'KolkataRealEstate' },
  { name: 'Ahmedabad', slug: 'ahmedabad', component: 'AhmedabadRealEstate' },
  { name: 'Noida', slug: 'noida', component: 'NoiEARealEstate' },
  { name: 'Ghaziabad', slug: 'ghaziabad', component: 'CityPageTemplate' },
  { name: 'Gurugram', slug: 'gurugram', component: 'CityPageTemplate' },
  { name: 'Faridabad', slug: 'faridabad', component: 'CityPageTemplate' },
  { name: 'Thane', slug: 'thane', component: 'CityPageTemplate' },
  { name: 'Navi Mumbai', slug: 'navi-mumbai', component: 'CityPageTemplate' },
  { name: 'Lucknow', slug: 'lucknow', component: 'CityPageTemplate' },
  { name: 'Jaipur', slug: 'jaipur', component: 'CityPageTemplate' },
  { name: 'Indore', slug: 'indore', component: 'CityPageTemplate' },
  { name: 'Bhopal', slug: 'bhopal', component: 'CityPageTemplate' },
  { name: 'Chandigarh', slug: 'chandigarh', component: 'CityPageTemplate' },
  { name: 'Coimbatore', slug: 'coimbatore', component: 'CityPageTemplate' },
  { name: 'Kochi', slug: 'kochi', component: 'CityPageTemplate' },
  { name: 'Nagpur', slug: 'nagpur', component: 'CityPageTemplate' }
];

// Check if a city has a dedicated page
export const hasDedicatedPage = (cityName) => {
  const slug = createCitySlug(cityName);
  return majorCities.some(city => city.slug === slug);
};

// Get city data by name or slug
export const getCityData = (identifier) => {
  const slug = createCitySlug(identifier);
  return majorCities.find(city => 
    city.slug === slug || 
    createCitySlug(city.name) === slug
  );
};

// Generate city page route
export const getCityRoute = (cityName) => {
  const slug = createCitySlug(cityName);
  return `/city/${slug}`;
};

// Special city mappings for aliases
export const cityAliases = {
  'gurgaon': 'gurugram',
  'bengaluru': 'bangalore',
  'bombay': 'mumbai',
  'calcutta': 'kolkata',
  'madras': 'chennai'
};

// Resolve city name through aliases
export const resolveCityName = (cityName) => {
  const slug = createCitySlug(cityName);
  return cityAliases[slug] ? cityAliases[slug] : slug;
};

export default {
  createCitySlug,
  formatCityName,
  majorCities,
  hasDedicatedPage,
  getCityData,
  getCityRoute,
  cityAliases,
  resolveCityName
};