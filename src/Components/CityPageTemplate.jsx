import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart, FaUser, FaEye, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { useParams, useLocation } from 'react-router-dom';
import { getCityData, formatCityName } from '../data/cityPropertyData';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
const CityPageTemplate = ({ cityName, selectedCity, setSelectedCity }) => {
  const [favorites, setFavorites] = useState(new Set());
  const { city } = useParams();
  const location = useLocation();

  // Determine property type from URL
  const currentPropertyType = location.pathname.includes('/rent') ? 'rent' : 'buy';
  
  // Get city-specific data based on property type
  const cityData = getCityData(city || selectedCity || cityName, currentPropertyType);
  const formattedCity = formatCityName(city || selectedCity || cityName) || cityData.displayName;

  // Update selected city when URL parameter changes
  useEffect(() => {
    if (city && city !== selectedCity) {
      setSelectedCity(city);
    }
  }, [city, selectedCity, setSelectedCity]);

  const toggleFavorite = (propertyId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(propertyId)) {
      newFavorites.delete(propertyId);
    } else {
      newFavorites.add(propertyId);
    }
    setFavorites(newFavorites);
  };

  // Transform city-specific properties to match component expectations
  const transformedProperties = (cityData.properties && cityData.properties.length > 0) ? 
    cityData.properties.map(property => ({
      id: property.id,
      image: property.image || '/properties_img/property-1.jpg',
      price: property.price || '₹ Price on Request',
      type: property.title || property.type || 'Property',
      location: property.location || formattedCity,
      postedBy: property.agentType || property.postedBy || 'Dealer',
      timeAgo: property.postedOn || property.timeAgo || 'Recently posted',
      verified: true
    })) : [
    {
      id: 1,
      image: '/properties_img/property-1.jpg',
      price: '₹2.45 - 4.85 Cr',
      type: `3 BHK Apartment in ${formattedCity}`,
      location: `${formattedCity} Central`,
      postedBy: 'Dealer',
      timeAgo: '2 days ago',
      verified: true
    },
    {
      id: 2,
      image: '/properties_img/property-2.jpg',
      price: '₹1.95 - 3.25 Cr',
      type: `2 BHK Flat in ${formattedCity}`,
      location: `Greater ${formattedCity}`,
      postedBy: 'Owner',
      timeAgo: '1 week ago',
      verified: true
    },
    {
      id: 3,
      image: '/properties_img/property-3.jpg',
      price: '₹4.75 - 8.90 Cr',
      type: `4 BHK Villa in ${formattedCity}`,
      location: `${formattedCity} Hills`,
      postedBy: 'Builder',
      timeAgo: '3 days ago',
      verified: true
    },
    {
      id: 4,
      image: '/properties_img/property-4.jpg',
      price: '₹85 Lacs - 2.15 Cr',
      type: `1 BHK Studio in ${formattedCity}`,
      location: `${formattedCity} Metro`,
      postedBy: 'Dealer',
      timeAgo: '5 days ago',
      verified: true
    },
    {
      id: 5,
      image: '/properties_img/property-5.jpg',
      price: '₹3.85 - 6.75 Cr',
      type: `3 BHK Penthouse in ${formattedCity}`,
      location: `${formattedCity} Business District`,
      postedBy: 'Owner',
      timeAgo: '1 day ago',
      verified: true
    },
    {
      id: 6,
      image: '/properties_img/property-6.jpg',
      price: '₹1.45 - 2.95 Cr',
      type: `2 BHK Builder Floor in ${formattedCity}`,
      location: `${formattedCity} Extension`,
      postedBy: 'Builder',
      timeAgo: '4 days ago',
      verified: true
    },
    {
      id: 7,
      image: '/properties_img/property-7.jpg',
      price: '₹6.25 - 12.50 Cr',
      type: `5 BHK Independent House in ${formattedCity}`,
      location: `${formattedCity} Green Zone`,
      postedBy: 'Owner',
      timeAgo: '6 days ago',
      verified: true
    },
    {
      id: 8,
      image: '/properties_img/property-8.jpg',
      price: '₹2.75 - 4.25 Cr',
      type: `3 BHK Duplex in ${formattedCity}`,
      location: `${formattedCity} Tech Park`,
      postedBy: 'Dealer',
      timeAgo: '2 days ago',
      verified: true
    }
  ];

  // Generate city-specific recommended projects based on city data
  const recommendedProjects = cityData.properties ? cityData.properties.slice(0, 9).map((property, index) => ({
    id: index + 1,
    image: property.image || `/realstateproject/project${index + 1}.jpg`,
    name: property.project || `${formattedCity} Project ${index + 1}`,
    details: property.title || `Property in ${formattedCity}`,
    priceRange: property.price || '₹ Price on Request',
    status: property.saleType === 'New' ? 'Possession from Dec 2025' : 'Ready to Move'
  })) : [
    {
      id: 1,
      image: '/realstateproject/project1.jpg',
      name: `${formattedCity} Prime Heights`,
      details: `2, 3 & 4 BHK Apartment in ${formattedCity}`,
      priceRange: '₹1.77 - 12.85 Cr',
      status: 'Ready to Move'
    },
    {
      id: 2,
      image: '/realstateproject/project2.jpg',
      name: `${formattedCity} Garden Residency`,
      details: `3 & 4 BHK Premium Apartments in ${formattedCity}`,
      priceRange: '₹2.45 - 8.90 Cr',
      status: 'Possession from March 2025'
    },
    {
      id: 3,
      image: '/realstateproject/project3.jpg',
      name: `${formattedCity} Elite Towers`,
      details: `2 & 3 BHK Luxury Flats in ${formattedCity}`,
      priceRange: '₹1.95 - 6.75 Cr',
      status: 'Ready to Move'
    },
    {
      id: 4,
      image: '/realstateproject/project4.jpg',
      name: `${formattedCity} Royal Plaza`,
      details: `1, 2 & 3 BHK Apartments in ${formattedCity}`,
      priceRange: '₹95 Lacs - 4.50 Cr',
      status: 'Possession from June 2025'
    },
    {
      id: 5,
      image: '/realstateproject/project5.jpg',
      name: `${formattedCity} Crystal Heights`,
      details: `3 & 4 BHK Luxury Apartments in ${formattedCity}`,
      priceRange: '₹3.25 - 7.90 Cr',
      status: 'Ready to Move'
    },
    {
      id: 6,
      image: '/realstateproject/project6.jpg',
      name: `${formattedCity} Platinum Residency`,
      details: `2, 3 & 4 BHK Premium Flats in ${formattedCity}`,
      priceRange: '₹2.15 - 6.85 Cr',
      status: 'Possession from September 2025'
    },
    {
      id: 7,
      image: '/realstateproject/project7.jpg',
      name: `${formattedCity} Diamond Towers`,
      details: `1, 2 & 3 BHK Modern Apartments in ${formattedCity}`,
      priceRange: '₹85 Lacs - 3.75 Cr',
      status: 'Ready to Move'
    },
    {
      id: 8,
      image: '/realstateproject/project8.jpg',
      name: `${formattedCity} Emerald Gardens`,
      details: `3, 4 & 5 BHK Garden Villas in ${formattedCity}`,
      priceRange: '₹4.95 - 15.50 Cr',
      status: 'Possession from December 2025'
    }
  ];

  // Generate city-specific property categories based on city data
  const propertyCategories = [
    {
      id: 1,
      title: 'Residential Apartment',
      count: `${Math.floor(cityData.totalResults * 0.6)}+`,
      subtitle: 'Properties',
      image: '/prop/icon-apartment.png',
      bgColor: 'bg-orange-50'
    },
    {
      id: 2,
      title: 'Residential Land',
      count: `${Math.floor(cityData.totalResults * 0.25)}+`,
      subtitle: 'Properties',
      image: '/prop/icon-housing.png',
      bgColor: 'bg-blue-50'
    },
    {
      id: 3,
      title: 'Independent House/ Villa',
      count: `${Math.floor(cityData.totalResults * 0.15)}+`,
      subtitle: 'Properties',
      image: '/prop/icon-villa.png',
      bgColor: 'bg-green-50'
    },
    {
      id: 4,
      title: 'Commercial Office Space',
      count: `${Math.floor(cityData.totalResults * 0.1)}+`,
      subtitle: 'Properties',
      image: '/prop/icon-building.png',
      bgColor: 'bg-purple-50'
    },
    {
      id: 5,
      title: 'Builder Floor',
      count: `${Math.floor(cityData.totalResults * 0.2)}+`,
      subtitle: 'Properties',
      image: '/prop/icon-house.png',
      bgColor: 'bg-pink-50'
    },
    {
      id: 6,
      title: 'Studio Apartment',
      count: `${Math.floor(cityData.totalResults * 0.05)}+`,
      subtitle: 'Properties',
      image: '/prop/icon-condominium.png',
      bgColor: 'bg-yellow-50'
    },
    {
      id: 7,
      title: 'Retail Shop',
      count: `${Math.floor(cityData.totalResults * 0.08)}+`,
      subtitle: 'Properties',
      image: '/prop/icon-luxury.png',
      bgColor: 'bg-indigo-50'
    },
    {
      id: 8,
      title: 'Warehouse',
      count: `${Math.floor(cityData.totalResults * 0.04)}+`,
      subtitle: 'Properties',
      image: '/prop/icon-neighborhood.png',
      bgColor: 'bg-red-50'
    },
    {
      id: 9,
      title: 'Farmhouse',
      count: `${Math.floor(cityData.totalResults * 0.03)}+`,
      subtitle: 'Properties',
      image: '/prop/icon-deal.png',
      bgColor: 'bg-teal-50'
    }
  ];

  // Projects in High Demand data - City-specific
  const highDemandProjects = cityData.properties ? cityData.properties.slice(0, 8).map((property, index) => ({
    id: index + 1,
    name: property.project || `${formattedCity} Project ${index + 1}`,
    type: property.title || `Property in ${formattedCity}`,
    priceRange: property.price || '₹ Price on Request',
    image: property.image || `/realstateproject/project${index + 1}.jpg`,
    badge: property.saleType === 'New' ? 'Ready To Move' : 'Ready To Move'
  })) : [
    {
      id: 1,
      name: `${formattedCity} Central Park`,
      type: `3 BHK Apartment in ${formattedCity}`,
      priceRange: '₹2.65 - 4.02 Cr',
      image: '/realstateproject/project1.jpg',
      badge: 'Ready To Move'
    },
    {
      id: 2,
      name: `${formattedCity} Green Valley`,
      type: `2 & 3 BHK Apartments in ${formattedCity}`,
      priceRange: '₹1.85 - 3.25 Cr',
      image: '/realstateproject/project2.jpg',
      badge: 'Ready To Move'
    },
    {
      id: 3,
      name: `${formattedCity} Skyline Residency`,
      type: `4 BHK Penthouse in ${formattedCity}`,
      priceRange: '₹4.50 - 7.85 Cr',
      image: '/realstateproject/project3.jpg',
      badge: 'Ready To Move'
    },
    {
      id: 4,
      name: `${formattedCity} Metro Heights`,
      type: `1, 2 & 3 BHK Flats in ${formattedCity}`,
      priceRange: '₹75 Lacs - 2.95 Cr',
      image: '/realstateproject/project4.jpg',
      badge: 'Ready To Move'
    },
    {
      id: 5,
      name: `${formattedCity} Business Park`,
      type: `2 & 3 BHK Commercial Apartments in ${formattedCity}`,
      priceRange: '₹1.95 - 4.25 Cr',
      image: '/realstateproject/project5.jpg',
      badge: 'Ready To Move'
    },
    {
      id: 6,
      name: `${formattedCity} Paradise Homes`,
      type: `3 & 4 BHK Premium Residences in ${formattedCity}`,
      priceRange: '₹3.45 - 6.75 Cr',
      image: '/realstateproject/project6.jpg',
      badge: 'Ready To Move'
    },
    {
      id: 7,
      name: `${formattedCity} Tech City`,
      type: `1, 2 & 3 BHK Smart Apartments in ${formattedCity}`,
      priceRange: '₹95 Lacs - 3.85 Cr',
      image: '/realstateproject/project7.jpg',
      badge: 'Ready To Move'
    },
    {
      id: 8,
      name: `${formattedCity} Infinity Plaza`,
      type: `4 & 5 BHK Luxury Penthouses in ${formattedCity}`,
      priceRange: '₹6.25 - 12.90 Cr',
      image: '/realstateproject/project8.jpg',
      badge: 'Ready To Move'
    }
  ];

  // Handpicked Projects data - City-specific
  const handpickedProjects = cityData.properties ? cityData.properties.slice(0, 6).map((property, index) => ({
    id: index + 1,
    name: property.project || `${formattedCity} Premium ${index + 1}`,
    type: property.title || `Premium Property in ${formattedCity}`,
    priceRange: property.price || '₹ Price on Request',
    image: property.image || `/realstateproject/project${index + 6}.jpg`,
    badge: 'Premium',
    badgeColor: 'bg-purple-600'
  })) : [
    {
      id: 1,
      name: `${formattedCity} Premium Heights`,
      type: `3-4 BHK Apartment in ${formattedCity}`,
      priceRange: '₹3.84 - 5.36 Cr',
      image: '/realstateproject/project6.jpg',
      badge: 'Premium',
      badgeColor: 'bg-purple-600'
    },
    {
      id: 2,
      name: `${formattedCity} Luxury Suites`,
      type: `2-3 BHK Premium Flats in ${formattedCity}`,
      priceRange: '₹2.95 - 4.75 Cr',
      image: '/realstateproject/project7.jpg',
      badge: 'Luxury',
      badgeColor: 'bg-amber-600'
    },
    {
      id: 3,
      name: `${formattedCity} Elite Residences`,
      type: `4-5 BHK Villas in ${formattedCity}`,
      priceRange: '₹6.25 - 12.90 Cr',
      image: '/realstateproject/project8.jpg',
      badge: 'Villa',
      badgeColor: 'bg-green-600'
    },
    {
      id: 4,
      name: `${formattedCity} Royal Gardens`,
      type: `3-4 BHK Garden Apartments in ${formattedCity}`,
      priceRange: '₹4.15 - 7.25 Cr',
      image: '/realstateproject/project9.jpg',
      badge: 'Garden View',
      badgeColor: 'bg-blue-600'
    }
  ];

  // Recommended Insights data - City-specific
  const recommendedInsights = cityData.localities ? cityData.localities.slice(0, 8).map((locality, index) => ({
    id: index + 1,
    type: index % 2 === 0 ? 'locality' : 'society',
    title: index % 2 === 0 ? locality.name : `${formattedCity} Society ${index}`,
    subtitle: index % 2 === 0 ? formattedCity : `${locality.name}, ${formattedCity}`,
    description: index % 2 === 0 ? `${locality.name} ${formattedCity} Insights` : `${formattedCity} Society, ${locality.name} ${formattedCity}`,
    image: index % 2 === 0 ? `/cities/${formattedCity.toLowerCase()}.png` : `/realstateproject/project${index + 1}.jpg`,
    category: index >= 2 ? 'Reviews & Rating' : index % 2 === 0 ? 'Locality Insight' : 'Society Insight',
    rating: index >= 2 ? 4.2 + index * 0.1 : undefined
  })) : [
    {
      id: 1,
      type: 'locality',
      title: `Central ${formattedCity}`,
      subtitle: formattedCity,
      description: `Central ${formattedCity} Insights`,
      image: `/cities/${formattedCity.toLowerCase()}.png`,
      category: 'Locality Insight'
    },
    {
      id: 2,
      type: 'society',
      title: `${formattedCity} Premium Society`,
      subtitle: `Prime Location, ${formattedCity}`,
      description: `${formattedCity} Premium Society Insights`,
      image: `/realstateproject/project2.jpg`,
      category: 'Society Insight'
    },
    {
      id: 3,
      type: 'locality',
      title: `Greater ${formattedCity}`,
      subtitle: formattedCity,
      description: `Greater ${formattedCity} Market Analysis`,
      image: `/cities/${formattedCity.toLowerCase()}.png`,
      category: 'Reviews & Rating',
      rating: 4.3
    },
    {
      id: 4,
      type: 'society',
      title: `${formattedCity} Elite Complex`,
      subtitle: `Central ${formattedCity}`,
      description: `${formattedCity} Elite Complex Reviews`,
      image: `/realstateproject/project4.jpg`,
      category: 'Reviews & Rating',
      rating: 4.5
    }
  ];

  // Newly launched projects data - City-specific
  const newlyLaunchedProjects = cityData.properties ? cityData.properties.slice(0, 6).map((property, index) => ({
    id: index + 1,
    name: property.project || `${formattedCity} New Launch ${index + 1}`,
    location: property.location || formattedCity,
    priceRange: property.price || '₹ Price on Request',
    apartmentType: property.title || `2, 3 BHK Apartment`,
    priceIncrease: `${8 + index * 2}% price increase in last 3 months in ${formattedCity}`,
    badge: index === 0 ? 'NEW LAUNCH' : 'NEW ARRIVAL',
    badgeColor: index === 0 ? 'bg-blue-600' : 'bg-purple-600',
    image: property.image || `/realstateproject/project${index + 9}.jpg`,
    reraNumber: `UPRERAPRJ44221${4 + index}`,
    brokerage: 'Get preferred options Zero brokerage'
  })) : [
    {
      id: 1,
      name: `${formattedCity} New Launch`,
      location: formattedCity,
      priceRange: '₹6.24 - 8.53 Cr',
      apartmentType: '3, 4 BHK Apartment',
      priceIncrease: `10.6% price increase in last 3 months in ${formattedCity}`,
      badge: 'NEW LAUNCH',
      badgeColor: 'bg-blue-600',
      image: '/realstateproject/project9.jpg',
      reraNumber: 'UPRERAPRJ442214',
      brokerage: 'Get preferred options Zero brokerage'
    },
    {
      id: 2,
      name: `${formattedCity} Fresh Homes`,
      location: `Greater ${formattedCity}`,
      priceRange: '₹4.85 - 6.75 Cr',
      apartmentType: '2, 3 BHK Apartment',
      priceIncrease: `12.3% price increase in last 3 months in ${formattedCity}`,
      badge: 'NEW ARRIVAL',
      badgeColor: 'bg-purple-600',
      image: '/realstateproject/project10.jpg',
      reraNumber: 'UPRERAPRJ442215',
      brokerage: 'Get preferred options Zero brokerage'
    },
    {
      id: 3,
      name: `${formattedCity} Modern Living`,
      location: `${formattedCity} Extension`,
      priceRange: '₹3.95 - 5.25 Cr',
      apartmentType: '1, 2, 3 BHK Apartment',
      priceIncrease: `9.8% price increase in last 3 months in ${formattedCity}`,
      badge: 'NEW ARRIVAL',
      badgeColor: 'bg-purple-600',
      image: '/realstateproject/project11.jpg',
      reraNumber: 'UPRERAPRJ442216',
      brokerage: 'Get preferred options Zero brokerage'
    },
    {
      id: 4,
      name: `${formattedCity} Smart Homes`,
      location: `${formattedCity} Phase 2`,
      priceRange: '₹2.75 - 4.15 Cr',
      apartmentType: '2, 3 BHK Smart Apartment',
      priceIncrease: `14.2% price increase in last 3 months in ${formattedCity}`,
      badge: 'NEW LAUNCH',
      badgeColor: 'bg-blue-600',
      image: '/realstateproject/project12.jpg',
      reraNumber: 'UPRERAPRJ442217',
      brokerage: 'Get preferred options Zero brokerage'
    }
  ];

  // Bhoomi The Real Estate exclusive projects data - City-specific
  const exclusiveProjects = [
    {
      id: 1,
      name: `${formattedCity.toUpperCase()} PREMIUM`,
      subtitle: 'ELITE',
      location: `Greater ${formattedCity}`,
      image: '/realstateproject/image2.png',
      qrCode: '/qr-code-1.png',
      sponsors: [`${formattedCity.toUpperCase()} GROUP`, 'ELITE'],
      description: 'Premium residential project with world-class amenities'
    },
    {
      id: 2,
      name: `${formattedCity.toUpperCase()} HEIGHTS`,
      subtitle: 'PREMIUM LIVING',
      location: `${formattedCity} Extension`,
      image: '/realstateproject/image3.png', 
      qrCode: '/qr-code-2.png',
      sponsors: [`${formattedCity.toUpperCase()} GROUP`],
      description: 'Luxury apartments with modern facilities'
    },
    {
      id: 3,
      name: `${formattedCity.toUpperCase()} GARDENS`,
      subtitle: 'NATURE LIVING',
      location: `${formattedCity} Green Zone`,
      image: '/realstateproject/image4.png',
      qrCode: '/qr-code-3.png',
      sponsors: [`${formattedCity.toUpperCase()} GROUP`, 'ECO HOMES'],
      description: 'Eco-friendly residential complex with lush gardens'
    },
    {
      id: 4,
      name: `${formattedCity.toUpperCase()} TOWERS`,
      subtitle: 'SKYLINE LIVING',
      location: `${formattedCity} Business District`,
      image: '/realstateproject/image5.png',
      qrCode: '/qr-code-4.png',
      sponsors: [`${formattedCity.toUpperCase()} GROUP`, 'METRO CONNECT'],
      description: 'High-rise apartments with panoramic city views'
    }
  ];

  // Generate city-specific demand data based on localities
  const demandData = {
    apartment: cityData.localities ? cityData.localities.slice(0, 5).map((locality, index) => ({
      sector: locality.name,
      searches: `${Math.floor(locality.count / 100)}K Searches`
    })) : [
      { sector: `Prime Area in ${formattedCity}`, searches: '7K Searches' }
    ],
    plots: cityData.localities ? cityData.localities.slice(0, 5).map((locality, index) => ({
      sector: locality.name,
      searches: `${Math.floor(locality.count / 80)}K Searches`
    })) : [
      { sector: `Central ${formattedCity}`, searches: '8K Searches' }
    ],
    builderFloor: cityData.localities ? cityData.localities.slice(0, 5).map((locality, index) => ({
      sector: locality.name,
      searches: `${Math.floor(locality.count / 70)}K Searches`
    })) : [
      { sector: `Downtown ${formattedCity}`, searches: '9K Searches' }
    ]
  };

  // Offers for you data - City-specific
  const offersData = cityData.properties ? cityData.properties.slice(0, 6).map((property, index) => ({
    id: index + 1,
    title: property.project || `${formattedCity} Offer ${index + 1}`,
    location: property.location || formattedCity,
    priceRange: property.price || '₹ Price on Request',
    originalPrice: property.price ? `₹${parseInt(property.price.replace(/[^\d]/g, '')) + 10} Lacs` : '₹94.37 Lacs',
    discount: `₹${10 + index * 5} Lacs Off`,
    image: property.image || `/realstateproject/image${index + 4}.png`,
    type: 'Project Offer'
  })) : [
    {
      id: 1,
      title: `${formattedCity} Ultimate Heights`,
      location: formattedCity,
      priceRange: '₹84.37 Lacs - 1.4 Cr',
      originalPrice: '₹94.37 Lacs',
      discount: '₹10 Lacs Off',
      image: '/realstateproject/image4.png',
      type: 'Project Offer'
    },
    {
      id: 2,
      title: `${formattedCity} Golden Square`,
      location: `Greater ${formattedCity}`,
      priceRange: '₹95.50 Lacs - 1.6 Cr',
      originalPrice: '₹110.50 Lacs',
      discount: '₹15 Lacs Off',
      image: '/realstateproject/image5.png',
      type: 'Project Offer'
    },
    {
      id: 3,
      title: `${formattedCity} Royal Residency`,
      location: `${formattedCity} Central`,
      priceRange: '₹1.25 - 2.1 Cr',
      originalPrice: '₹1.45 Cr',
      discount: '₹20 Lacs Off',
      image: '/realstateproject/image6.png',
      type: 'Project Offer'
    },
    {
      id: 4,
      title: `${formattedCity} Smart City`,
      location: `${formattedCity} Extension`,
      priceRange: '₹75.25 Lacs - 1.2 Cr',
      originalPrice: '₹100.25 Lacs',
      discount: '₹25 Lacs Off',
      image: '/realstateproject/image7.png',
      type: 'Project Offer'
    }
  ];

  // Featured dealers data - City-specific
  const featuredDealers = cityData.agents ? cityData.agents.slice(0, 6).map((agent, index) => ({
    id: index + 1,
    name: agent.name || `${formattedCity} Realty ${index + 1}`,
    company: 'REMAX-GLOBAL',
    experience: `${5 + index * 2} years experience`,
    specialization: index === 0 ? 'Dealing Properties' : index === 1 ? 'Commercial Properties' : 'Investment Advisory',
    image: `/image${index + 1}.png`,
    verified: true,
    location: agent.location || formattedCity,
    specialty: index === 0 ? 'Residential Properties' : index === 1 ? 'Commercial Properties' : 'Investment Advisory',
    rating: `${4.2 + index * 0.1}`,
    reviews: `${150 + index * 40}`
  })) : [
    {
      id: 1,
      name: `${formattedCity} Prime Realty`,
      company: 'REMAX-GLOBAL',
      experience: '5 years experience',
      specialization: 'Dealing Properties',
      image: '/image.png',
      verified: true,
      location: formattedCity,
      specialty: 'Residential Properties',
      rating: '4.2',
      reviews: '150'
    },
    {
      id: 2,
      name: `${formattedCity} Elite Properties`,
      company: 'REMAX-GLOBAL',
      experience: '7 years experience',
      specialization: 'Commercial Properties',
      image: '/image2.png',
      verified: true,
      location: `${formattedCity} Central`,
      specialty: 'Commercial Properties',
      rating: '4.3',
      reviews: '190'
    },
    {
      id: 3,
      name: `${formattedCity} Luxury Homes`,
      company: 'REMAX-GLOBAL',
      experience: '9 years experience',
      specialization: 'Investment Advisory',
      image: '/image3.png',
      verified: true,
      location: `Greater ${formattedCity}`,
      specialty: 'Investment Advisory',
      rating: '4.4',
      reviews: '230'
    },
    {
      id: 4,
      name: `${formattedCity} Property Experts`,
      company: 'REMAX-GLOBAL',
      experience: '11 years experience',
      specialization: 'Luxury Properties',
      image: '/image4.png',
      verified: true,
      location: `${formattedCity} Extension`,
      specialty: 'Luxury Properties',
      rating: '4.5',
      reviews: '270'
    }
  ];

  // More dealers data - City-specific
  const moreDealers = cityData.agents ? cityData.agents.slice(0, 6).map((agent, index) => ({
    id: index + 1,
    name: agent.name || `${formattedCity} Real Estate ${index + 1}`,
    company: index === 0 ? 'REMAX-GLOBAL' : index === 1 ? 'Real Estate Consultant' : 'Property Developer',
    experience: `${4 + index * 4}+ Years Experience`,
    image: `/image${index + 4}.png`,
    verified: true,
    location: agent.location || `${formattedCity} Sector ${62 + index * 10}`,
    specialty: index === 0 ? 'Luxury Properties' : index === 1 ? 'Affordable Housing' : 'New Projects',
    rating: `${4.1 + index * 0.15}`,
    reviews: `${120 + index * 30}`,
    properties: `${45 + index * 8}`
  })) : [
    {
      id: 1,
      name: `${formattedCity} Realty Hub`,
      company: 'REMAX-GLOBAL',
      experience: '4+ Years Experience',
      image: '/image4.png',
      verified: true,
      location: `${formattedCity} Central`,
      specialty: 'Luxury Properties',
      rating: '4.1',
      reviews: '120',
      properties: '45'
    },
    {
      id: 2,
      name: `${formattedCity} Property Solutions`,
      company: 'Real Estate Consultant',
      experience: '8+ Years Experience',
      image: '/image5.png',
      verified: true,
      location: `${formattedCity} Sector 72`,
      specialty: 'Affordable Housing',
      rating: '4.25',
      reviews: '150',
      properties: '53'
    },
    {
      id: 3,
      name: `${formattedCity} Home Finder`,
      company: 'Property Developer',
      experience: '12+ Years Experience',
      image: '/image6.png',
      verified: true,
      location: `${formattedCity} Sector 82`,
      specialty: 'New Projects',
      rating: '4.4',
      reviews: '180',
      properties: '61'
    },
    {
      id: 4,
      name: `${formattedCity} Dream Homes`,
      company: 'Real Estate Consultant',
      experience: '16+ Years Experience',
      image: '/image7.png',
      verified: true,
      location: `${formattedCity} Sector 92`,
      specialty: 'Premium Properties',
      rating: '4.55',
      reviews: '210',
      properties: '69'
    }
  ];

  // Popular builders data - City-specific
  const popularBuilders = [
    {
      id: 1,
      name: `${formattedCity} Group`,
      location: `${formattedCity} & Greater ${formattedCity}`,
      projects: '80+ Projects',
      experience: '15+ Years',
      rating: '4.3',
      specialties: ['Residential', 'Commercial', 'Townships'],
      logo: '/logo.png'
    },
    {
      id: 2,
      name: `${formattedCity} Properties`,
      location: `${formattedCity} Central`,
      projects: '60+ Projects',
      experience: '25+ Years',
      rating: '4.5',
      specialties: ['Premium Residential', 'Smart Homes'],
      logo: '/realestateindia-logo.png'
    },
    {
      id: 3,
      name: `${formattedCity} Developers`,
      location: `Greater ${formattedCity}`,
      projects: '40+ Projects',
      experience: '20+ Years',
      rating: '4.2',
      specialties: ['Luxury Residential', 'Premium Villas'],
      logo: '/abc.png'
    },
    {
      id: 4,
      name: `${formattedCity} Builders`,
      location: `${formattedCity} Extension`,
      projects: '30+ Projects',
      experience: '18+ Years',
      rating: '4.1',
      specialties: ['Affordable Housing', 'Mid-Segment'],
      logo: '/home.png'
    }
  ];

  // Top gainers data - City-specific
  const topGainersData = cityData.localities ? cityData.localities.slice(0, 5).map((locality, index) => ({
    id: index + 1,
    locality: locality.name,
    area: `Central ${formattedCity}`,
    rate: `₹${12000 + index * 1500}/sq ft`,
    ratePerSqYd: `₹${120000 + index * 15000}/sq yd`,
    change: `+${20 + index * 3}.${2 + index}%`,
    changeType: 'gain',
    trend: 'up',
    avgPrice: `${12000 + index * 1500}`,
    period: 'last 3 months',
    trendLevel: 4 + (index % 2),
    trendDirection: 'Rising'
  })) : [
    {
      id: 1,
      locality: `Central ${formattedCity}`,
      area: `Prime ${formattedCity}`,
      rate: '₹15,156/sq ft',
      ratePerSqYd: '₹1,36,404/sq yd',
      change: '+26.8%',
      changeType: 'gain',
      trend: 'up',
      avgPrice: '15,156',
      period: 'last 3 months',
      trendLevel: 4,
      trendDirection: 'Rising'
    }
  ];

  // BHK Options Data
  const bhkOptions = [
    {
      id: 1,
      type: '1 BHK',
      count: '500+ Properties',
      icon: '🏠'
    },
    {
      id: 2,
      type: '2 BHK',
      count: '1,200+ Properties',
      icon: '🏠'
    },
    {
      id: 3,
      type: '3 BHK',
      count: '800+ Properties',
      icon: '🏠'
    }
  ];

  // Advertiser Types Data
  const advertiserTypes = [
    {
      id: 1,
      type: 'Dealer',
      description: '1.8k+ Properties',
      icon: '👤',
      color: 'blue'
    },
    {
      id: 2,
      type: 'Owner',
      description: '850+ Properties',
      icon: '👤',
      color: 'green'
    },
    {
      id: 3,
      type: 'Builder',
      description: '420+ Properties',
      icon: '🏗️',
      color: 'orange'
    }
  ];

  // Move-in Timeline Data
  const moveInOptions = [
    {
      id: 1,
      title: 'Ready to move',
      subtitle: 'Under construction',
      description: 'Move immediately',
      image: '/realstateproject/image7.png',
      properties: '1,200+ Properties'
    },
    {
      id: 2,
      title: 'Possession in 2025',
      subtitle: 'New Properties',
      description: 'Book in advance',
      image: '/realstateproject/image.png',
      properties: '680+ Properties'
    },
    {
      id: 3,
      title: 'Possession in 2026',
      subtitle: 'New Properties',
      description: 'Early bird offers',
      image: '/realstateproject/project1.jpg',
      properties: '340+ Properties'
    }
  ];

  // Budget Options Data
  const budgetOptions = [
    {
      id: 1,
      category: 'Affordable projects',
      range: '₹ Below 50 Lac',
      icon: '💰',
      color: 'green',
      properties: '450+ Properties'
    },
    {
      id: 2,
      category: 'Mid Segment projects',
      range: '₹ 50 Lac - 1.5 Cr',
      icon: '💰',
      color: 'blue',
      properties: '720+ Properties'
    },
    {
      id: 3,
      category: 'Luxury projects',
      range: '₹ Above 1.5 Cr',
      icon: '💎',
      color: 'purple',
      properties: '280+ Properties'
    }
  ];

  return (
    <div className="w-full">
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      {/* Navbar */}
      <Navbar selectedCity={city || selectedCity || cityName} setSelectedCity={setSelectedCity} />
      
      {/* Hero Section with city-specific background */}
      <HeroSection selectedCity={city || selectedCity || cityName} />
      {/* Hero Card Section */}      
      {/* Main Content */}
      <div className="bg-gray-50 pt-25 min-h-screen">
        {/* Top Search Bar */}
        <div className="bg-white px-6 py-3 shadow-sm">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>Recent searches:</span>
              <button className="flex items-center space-x-1 hover:text-blue-600">
                <span>🏠</span>
                <span>Buy in {formattedCity}, 2 BHK</span>
              </button>
              <button className="text-blue-600 hover:underline">View all searches</button>
            </div>
          </div>
        </div>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex-1 w-full lg:max-w-5xl p-3 sm:p-4 lg:p-6">
          {/* Recommended Properties Section */}
          <div className="mb-8">
  {/* Heading */}
  <div className="flex items-center mb-3 sm:mb-4">
    <div className="flex flex-wrap items-center">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
        Recommended Properties
      </h2>
      <span className="text-xs sm:text-sm text-orange-600 ml-2">
        curated especially for you
      </span>
    </div>
  </div>

  {/* Slider wrapper */}
  <div className="relative flex items-center">
    {/* Left Arrow */}
    <button
      onClick={() => {
        const container = document.getElementById("recommended-properties-slider");
        container.scrollLeft -= 240;
      }}
      className="hidden sm:flex absolute left-0 z-10 p-2 bg-white border border-gray-300 rounded-full hover:shadow-md transition-shadow"
      style={{ transform: "translateX(-50%)" }}
    >
      <FaChevronLeft className="text-gray-600" />
    </button>

    {/* Scrollable container */}
    <div
      id="recommended-properties-slider"
      className="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide mx-2 sm:mx-8 snap-x snap-mandatory scroll-smooth"
    >
      {transformedProperties.map((property) => (
        <div
          key={property.id}
          className="flex-shrink-0 w-64 sm:w-48 md:w-56 lg:w-60 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow snap-start"
        >
          {/* Image + overlays */}
          <div className="relative">
            <img
              src={property.image}
              alt={property.type}
              className="w-full h-40 sm:h-36 object-cover"
            />
            <div className="absolute top-2 left-2">
              {property.verified && (
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                  ✓
                </span>
              )}
            </div>

            {/* Favorite button */}
            <button
              onClick={() => toggleFavorite(property.id)}
              className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
            >
              {favorites.has(property.id) ? (
                <FaHeart className="text-red-500 text-sm" />
              ) : (
                <FaRegHeart className="text-gray-400 text-sm" />
              )}
            </button>

            {/* Price */}
            <div className="absolute bottom-2 left-2">
              <span className="bg-white text-gray-800 text-xs font-semibold px-2 py-1 rounded">
                {property.price}
              </span>
            </div>
          </div>

          {/* Property details */}
          <div className="p-2 sm:p-3">
            <h3 className="font-medium text-gray-800 text-xs sm:text-sm mb-1">
              {property.type}
            </h3>
            <p className="text-gray-600 text-xs mb-2">{property.location}</p>
            <div className="flex justify-between text-[10px] sm:text-xs text-gray-500">
              <span>Posted by {property.postedBy}</span>
              <span>{property.timeAgo}</span>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Right Arrow */}
    <button
      onClick={() => {
        const container = document.getElementById("recommended-properties-slider");
        container.scrollLeft += 240;
      }}
      className="hidden sm:flex absolute right-0 z-10 p-2 bg-white border border-gray-300 rounded-full hover:shadow-md transition-shadow"
      style={{ transform: "translateX(50%)" }}
    >
      <FaChevronRight className="text-gray-600" />
    </button>
  </div>
</div>{/* Recommended Projects Section */}
<div className="mb-8">
  {/* Heading */}
  <div className="flex items-center mb-3 sm:mb-4">
    <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
      Recommended Projects
    </h2>
  </div>

  {/* Slider wrapper */}
  <div className="relative flex items-center">
    {/* Left Arrow (hidden on mobile) */}
    <button
      onClick={() => {
        const container = document.getElementById("recommended-projects-slider");
        container.scrollLeft -= 240;
      }}
      className="hidden sm:flex absolute left-0 z-10 p-2 bg-white border border-gray-300 rounded-full hover:shadow-md transition-shadow"
      style={{ transform: "translateX(-50%)" }}
    >
      <FaChevronLeft className="text-gray-600" />
    </button>

    {/* Scrollable container */}
    <div
      id="recommended-projects-slider"
      className="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide mx-2 sm:mx-8 snap-x snap-mandatory scroll-smooth"
    >
      {recommendedProjects.map((project) => (
        <div
          key={project.id}
          className="flex-shrink-0 w-64 sm:w-48 md:w-56 lg:w-60 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow snap-start"
        >
          {/* Project Image + overlay */}
          <div className="relative">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 sm:h-36 object-cover"
            />
            <div className="absolute top-2 left-2">
              <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
                RERA
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 sm:p-3">
              <h3 className="text-white font-semibold text-xs sm:text-sm">
                {project.name}
              </h3>
              <p className="text-white/90 text-[10px] sm:text-xs">
                {project.details}
              </p>
            </div>
          </div>

          {/* Project Details */}
          <div className="p-2 sm:p-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-800 font-semibold text-xs sm:text-sm">
                {project.priceRange}
              </span>
            </div>
            <p className="text-gray-600 text-[10px] sm:text-xs mt-1">
              {project.status}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Right Arrow (hidden on mobile) */}
    <button
      onClick={() => {
        const container = document.getElementById("recommended-projects-slider");
        container.scrollLeft += 240;
      }}
      className="hidden sm:flex absolute right-0 z-10 p-2 bg-white border border-gray-300 rounded-full hover:shadow-md transition-shadow"
      style={{ transform: "translateX(50%)" }}
    >
      <FaChevronRight className="text-gray-600" />
    </button>
  </div>
</div>

{/* Apartments, Villas and more Section */}
<div className="mb-8">
  {/* Heading */}
  <div className="flex items-center mb-3 sm:mb-4">
    <div>
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
        Apartments, Villas and more
      </h2>
      <p className="text-gray-600 text-sm">in {formattedCity}</p>
    </div>
  </div>

  {/* Slider wrapper */}
  <div className="relative flex items-center">
    {/* Left Arrow (hidden on mobile) */}
    <button
      onClick={() => {
        const container = document.getElementById("property-categories-slider");
        container.scrollLeft -= 240;
      }}
      className="hidden sm:flex absolute left-0 z-10 p-2 bg-white border border-gray-300 rounded-full hover:shadow-md transition-shadow"
      style={{ transform: "translateX(-50%)" }}
    >
      <FaChevronLeft className="text-gray-600" />
    </button>

    {/* Scrollable container */}
    <div
      id="property-categories-slider"
      className="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide mx-2 sm:mx-8 snap-x snap-mandatory scroll-smooth"
    >
      {propertyCategories.map((category) => (
        <div
          key={category.id}
          className={`flex-shrink-0 w-64 sm:w-48 md:w-56 lg:w-60 ${category.bgColor} rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow cursor-pointer snap-start`}
        >
          <div className="flex items-start justify-between">
            {/* Text content */}
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 text-xs sm:text-sm mb-2">
                {category.title}
              </h3>
              <div className="text-gray-600">
                <span className="text-lg sm:text-xl font-bold text-gray-800">
                  {category.count}
                </span>
                <span className="text-xs ml-1">{category.subtitle}</span>
              </div>
            </div>

            {/* Icon/Image */}
            <div className="ml-2 sm:ml-3">
              <img
                src={category.image}
                alt={category.title}
                className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Right Arrow (hidden on mobile) */}
    <button
      onClick={() => {
        const container = document.getElementById("property-categories-slider");
        container.scrollLeft += 240;
      }}
      className="hidden sm:flex absolute right-0 z-10 p-2 bg-white border border-gray-300 rounded-full hover:shadow-md transition-shadow"
      style={{ transform: "translateX(50%)" }}
    >
      <FaChevronRight className="text-gray-600" />
    </button>
  </div>
</div>

       {/* Projects in High Demand Section */}
<div className="mb-8">
  {/* Heading */}
  <div className="flex items-center justify-between mb-4 sm:mb-6">
    <div>
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
        Projects in High Demand
      </h2>
      <p className="text-xs sm:text-sm text-gray-600 mt-1">
        The most searched projects in {formattedCity}
      </p>
    </div>
    <button className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium">
      View All →
    </button>
  </div>

  {/* Slider wrapper */}
  <div className="relative flex items-center">
    {/* Left Arrow (hidden on mobile) */}
    <button
      onClick={() => {
        const container = document.getElementById("high-demand-slider");
        container.scrollLeft -= 240;
      }}
      className="hidden sm:flex absolute left-0 z-10 p-2 bg-white border border-gray-300 rounded-full hover:shadow-md transition-shadow"
      style={{ transform: "translateX(-50%)" }}
    >
      <FaChevronLeft className="text-gray-600" />
    </button>

    {/* Scrollable container */}
    <div
      id="high-demand-slider"
      className="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide mx-2 sm:mx-8 snap-x snap-mandatory scroll-smooth"
    >
      {highDemandProjects.map((project) => (
        <div
          key={project.id}
          className="flex-shrink-0 w-64 sm:w-48 md:w-56 lg:w-60 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow snap-start"
        >
          {/* Image + overlays */}
          <div className="relative">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 sm:h-36 object-cover"
            />
            {/* RERA Badge */}
            <div className="absolute top-2 left-2">
              <span className="bg-gray-800 text-white text-[10px] sm:text-xs px-2 py-1 rounded font-medium">
                RERA
              </span>
            </div>
            {/* Favorite button */}
            <div className="absolute top-2 right-2">
              <button className="p-1 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                <FaRegHeart className="text-gray-400 text-xs sm:text-sm" />
              </button>
            </div>
            {/* Badge bottom */}
            <div className="absolute bottom-2 left-2 right-2">
              <span className="bg-green-600 text-white text-[10px] sm:text-xs px-2 py-1 rounded font-medium">
                {project.badge}
              </span>
            </div>
          </div>

          {/* Project details */}
          <div className="p-2 sm:p-3">
            <h3 className="font-semibold text-gray-800 text-xs sm:text-sm mb-1">
              {project.name}
            </h3>
            <p className="text-gray-600 text-[10px] sm:text-xs mb-2">
              {project.type}
            </p>
            <p className="text-gray-800 font-semibold text-xs sm:text-sm">
              {project.priceRange}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Right Arrow (hidden on mobile) */}
    <button
      onClick={() => {
        const container = document.getElementById("high-demand-slider");
        container.scrollLeft += 240;
      }}
      className="hidden sm:flex absolute right-0 z-10 p-2 bg-white border border-gray-300 rounded-full hover:shadow-md transition-shadow"
      style={{ transform: "translateX(50%)" }}
    >
      <FaChevronRight className="text-gray-600" />
    </button>
  </div>
</div>

          {/* Handpicked Projects Section */}
<div className="mb-8">
  <div className="flex items-center justify-between mb-4 sm:mb-6">
    <div>
      <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
        Handpicked Projects
      </h2>
      <p className="text-xs sm:text-sm text-gray-600 mt-1">
        Featured Projects in {formattedCity}
      </p>
    </div>
    <button className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium">
      View All →
    </button>
  </div>

  <div className="relative flex items-center">
    {/* Left Button */}
    <button
      onClick={() => {
        const container = document.getElementById("handpicked-slider");
        container.scrollLeft -= 280;
      }}
      className="absolute left-0 z-10 p-2 bg-white border border-gray-300 rounded-full hover:shadow-md transition-shadow hidden sm:flex"
      style={{ transform: "translateX(-50%)" }}
    >
      <FaChevronLeft className="text-gray-600 w-4 h-4 sm:w-5 sm:h-5" />
    </button>

    {/* Slider */}
    <div
      id="handpicked-slider"
      className="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide mx-4 sm:mx-8 snap-x snap-mandatory"
    >
      {handpickedProjects.map((project) => (
        <div
          key={project.id}
          className="flex-shrink-0 snap-start w-[85%] xs:w-64 sm:w-52 md:w-56 lg:w-60 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          {/* Image Section */}
          <div className="relative">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-36 sm:h-40 md:h-44 object-cover"
            />

            {/* Badge */}
            <div className="absolute top-2 left-2">
              <span
                className={`${project.badgeColor} text-white text-[10px] sm:text-xs px-2 py-1 rounded-full font-medium`}
              >
                {project.badge}
              </span>
            </div>

            {/* Heart Button */}
            <div className="absolute top-2 right-2">
              <button className="p-1 bg-white rounded-full shadow hover:shadow-md transition-shadow">
                <FaRegHeart className="text-gray-400 text-xs sm:text-sm" />
              </button>
            </div>

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 sm:p-3">
              <div className="flex items-center space-x-1 mb-1">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[10px] sm:text-xs font-bold text-gray-700">
                    99
                  </span>
                </div>
                <span className="text-white text-[10px] sm:text-xs font-medium">
                  Verified by Bhoomi The Real Estate
                </span>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="p-2 sm:p-3 md:p-4">
            <h3 className="font-bold text-gray-800 text-xs sm:text-sm mb-1 truncate">
              {project.name}
            </h3>
            <p className="text-gray-600 text-[11px] sm:text-xs mb-1 sm:mb-2 truncate">
              {project.type}
            </p>
            <p className="text-gray-800 font-bold text-xs sm:text-sm">
              {project.priceRange}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Right Button */}
    <button
      onClick={() => {
        const container = document.getElementById("handpicked-slider");
        container.scrollLeft += 280;
      }}
      className="absolute right-0 z-10 p-2 bg-white border border-gray-300 rounded-full hover:shadow-md transition-shadow hidden sm:flex"
      style={{ transform: "translateX(50%)" }}
    >
      <FaChevronRight className="text-gray-600 w-4 h-4 sm:w-5 sm:h-5" />
    </button>
  </div>
</div>
     {/* Recommended Insights Section */}
<div className="mb-8">
  {/* Header */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
    <div>
      <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
        Recommended Insights
      </h2>
      <p className="text-xs sm:text-sm text-gray-600 mt-1">
        based on your search results & history
      </p>
    </div>
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors self-start sm:self-auto">
      View all insights
    </button>
  </div>

  {/* Insights List */}
  <div className="block md:hidden">
    {/* 👉 Mobile View: Horizontal Scroll */}
    <div className="flex space-x-4 overflow-x-auto pb-3 scrollbar-hide">
      {recommendedInsights.map((insight) => (
        <div
          key={insight.id}
          className="flex-shrink-0 w-64 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          {/* Image Section */}
          <div className="relative">
            <img
              src={insight.image}
              alt={insight.title}
              className="w-full h-36 object-cover"
            />

            {/* Category Badge */}
            {insight.type === "locality" && (
              <div className="absolute top-2 left-2">
                <span className="bg-orange-600 text-white text-[10px] px-2 py-1 rounded font-medium">
                  {insight.category}
                </span>
              </div>
            )}
            {insight.type === "society" && (
              <div className="absolute top-2 left-2">
                <span className="bg-blue-600 text-white text-[10px] px-2 py-1 rounded font-medium">
                  {insight.category}
                </span>
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Title & Subtitle */}
            <div className="absolute bottom-0 left-0 right-0 p-2">
              <h3 className="text-white font-semibold text-sm truncate">
                {insight.title}
              </h3>
              <p className="text-white/90 text-xs truncate">{insight.subtitle}</p>
            </div>
          </div>

          {/* Description Section */}
          <div className="p-2">
            <p className="text-gray-700 text-xs font-medium line-clamp-2">
              {insight.description}
            </p>

            {/* Rating */}
            {insight.rating && (
              <div className="flex items-center mt-2 space-x-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-[10px] ${
                        i < Math.floor(insight.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[10px] text-gray-600 ml-1">
                  {insight.rating}
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* 👉 Tablet & Desktop View: Grid Layout */}
  <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
    {recommendedInsights.map((insight) => (
      <div
        key={insight.id}
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer"
      >
        {/* Image Section */}
        <div className="relative">
          <img
            src={insight.image}
            alt={insight.title}
            className="w-full h-40 md:h-44 object-cover"
          />

          {/* Category Badge */}
          {insight.type === "locality" && (
            <div className="absolute top-2 left-2">
              <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded font-medium">
                {insight.category}
              </span>
            </div>
          )}
          {insight.type === "society" && (
            <div className="absolute top-2 left-2">
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-medium">
                {insight.category}
              </span>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Title & Subtitle */}
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <h3 className="text-white font-semibold text-sm md:text-base truncate">
              {insight.title}
            </h3>
            <p className="text-white/90 text-xs truncate">{insight.subtitle}</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="p-3">
          <p className="text-gray-700 text-sm font-medium line-clamp-2">
            {insight.description}
          </p>

          {/* Rating */}
          {insight.rating && (
            <div className="flex items-center mt-2 space-x-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-xs ${
                      i < Math.floor(insight.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-600 ml-1">{insight.rating}</span>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</div>
{/* Newly launched projects Section */}
<div className="mb-8">
  {/* Header */}
  <div className="flex items-center mb-4 sm:mb-6">
    <div className="flex items-center">
      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded flex items-center justify-center mr-2 sm:mr-3">
        <span className="text-white font-bold text-xs sm:text-sm">🏢</span>
      </div>
      <div>
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
          Newly launched projects
        </h2>
        <p className="text-xs sm:text-sm text-gray-600">
          Just now launched in the market
        </p>
      </div>
    </div>
  </div>

  {/* Slider Container */}
  <div className="relative flex items-center">
    {/* Left Arrow */}
    <button
      onClick={() => {
        const container = document.getElementById("newly-launched-slider");
        container.scrollBy({ left: -260, behavior: "smooth" });
      }}
      className="hidden sm:flex absolute left-2 z-10 p-2 bg-white border border-gray-300 rounded-full hover:shadow-md transition-shadow"
    >
      <FaChevronLeft className="text-gray-600" />
    </button>

    {/* Scrollable Projects */}
    <div
      id="newly-launched-slider"
      className="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide mx-1 sm:mx-8 snap-x snap-mandatory"
    >
      {newlyLaunchedProjects.map((project) => (
        <div
          key={project.id}
          className="flex-shrink-0 w-64 sm:w-48 md:w-56 lg:w-60 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow snap-start"
        >
          {/* Image Section */}
          <div className="relative">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-32 sm:h-36 md:h-40 object-cover"
            />
            <div className="absolute top-2 left-2">
              <span
                className={`${project.badgeColor} text-white text-[10px] sm:text-xs px-2 py-1 rounded font-medium`}
              >
                {project.badge}
              </span>
            </div>
            <div className="absolute top-2 right-2">
              <span className="bg-gray-800 text-white text-[10px] sm:text-xs px-2 py-1 rounded font-medium">
                RERA
              </span>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-2 sm:p-3">
            <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-1 truncate">
              {project.name}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-1 truncate">
              {project.location}
            </p>
            <p className="text-gray-800 font-bold text-xs sm:text-sm mb-1">
              {project.priceRange}
            </p>
            <p className="text-gray-600 text-xs sm:text-sm mb-2">
              {project.apartmentType}
            </p>

            <div className="mb-3">
              <div className="flex items-center text-blue-600 text-xs sm:text-sm mb-1">
                <span>📈</span>
                <span className="ml-1">{project.brokerage}</span>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-1 px-2 rounded text-xs sm:text-sm font-medium transition-colors">
                View Number
              </button>
            </div>

            <p className="text-[10px] sm:text-xs text-gray-500">
              {project.priceIncrease}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Right Arrow */}
    <button
      onClick={() => {
        const container = document.getElementById("newly-launched-slider");
        container.scrollBy({ left: 260, behavior: "smooth" });
      }}
      className="hidden sm:flex absolute right-2 z-10 p-2 bg-white border border-gray-300 rounded-full hover:shadow-md transition-shadow"
    >
      <FaChevronRight className="text-gray-600" />
    </button>
  </div>
</div>
{/* Bhoomi The Real Estate exclusive Section */}
<div className="mb-8">
  {/* Header */}
  <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
    <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
      Bhoomi The Real Estate exclusive
    </h2>
    <span className="text-xs sm:text-sm text-gray-600 sm:ml-2 mt-1 sm:mt-0">
      Sponsored projects and events
    </span>
  </div>

  {/* Container */}
  <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4 sm:p-6">
    <div className="flex sm:grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
      {exclusiveProjects.map((project) => (
        <div
          key={project.id}
          className="flex-shrink-0 w-full sm:w-auto bg-white rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full mr-4 last:mr-0 snap-start"
        >
          {/* Top Info Section */}
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <div className="flex-1">
              {/* Badges */}
              <div className="flex flex-wrap items-center mb-2">
                <span className="bg-orange-500 text-white text-[10px] sm:text-xs px-2 py-1 rounded font-bold mr-2 mb-1">
                  ARIHANT GROUP
                </span>
                <span className="bg-gray-800 text-white text-[10px] sm:text-xs px-2 py-1 rounded font-bold mb-1">
                  TITANS
                </span>
              </div>

              {/* Title + Info */}
              <h3 className="font-bold text-gray-900 text-base sm:text-lg md:text-2xl mb-1">
                {project.name}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base font-semibold mb-1">
                {project.subtitle}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm">{project.location}</p>
              <p className="text-gray-700 text-xs sm:text-sm mt-2">
                {project.description}
              </p>
            </div>

            {/* Image */}
            <div className="ml-3 sm:ml-4 flex-shrink-0">
              <img
                src={project.image}
                alt={project.name}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex flex-wrap items-center justify-between mt-4 sm:mt-6 gap-3">
            {/* Badges */}
            <div className="flex space-x-2">
              <div className="bg-blue-600 text-white px-2 py-1 rounded text-[10px] sm:text-xs font-bold">
                GROUND
              </div>
              <div className="bg-yellow-500 text-white px-2 py-1 rounded text-[10px] sm:text-xs font-bold">
                +11
              </div>
            </div>

            {/* QR Boxes */}
            <div className="flex space-x-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white border-2 border-gray-300 rounded p-1 flex items-center justify-center">
                <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-[10px] sm:text-xs text-gray-700">QR</span>
                </div>
              </div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white border-2 border-gray-300 rounded p-1 flex items-center justify-center">
                <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-[10px] sm:text-xs text-gray-700">QR</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex flex-col sm:flex-row gap-2">
            <button className="flex-1 bg-orange-500 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
              ENQUIRE NOW
            </button>
            <button className="flex-1 bg-gray-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
              VISIT PROJECT
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
       {/* Demand in Noida Section */}
<div className="mb-8">
  {/* Header */}
  <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6 gap-1 sm:gap-2">
    <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
      Demand in {formattedCity}
    </h2>
    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full flex items-center justify-center">
      <span className="text-white text-xs">ℹ</span>
    </div>
  </div>
  <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
    What are buyers searching in {formattedCity}
  </p>

  {/* Cards Container */}
  <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
    {/* Apartment Section */}
    <div className="flex-shrink-0 w-full sm:w-auto snap-start bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="p-3 sm:p-4 border-b">
        <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-2">Apartment</h3>
        <p className="text-xs sm:text-sm text-gray-600">Most searched societies for Flat/Apartment</p>
      </div>
      <div className="p-3 sm:p-4">
        <div className="space-y-3">
          {demandData.apartment.map((item, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center">
                <span className="text-blue-600 font-bold text-sm mr-2">#{index + 1}</span>
                <span className="text-gray-800 text-sm hover:text-blue-600 cursor-pointer">{item.sector}</span>
              </div>
              <span className="text-xs text-gray-500">{item.searches}</span>
            </div>
          ))}
        </div>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-4">
          View all 5 Localities
        </button>
      </div>
    </div>

    {/* Plots Section */}
    <div className="flex-shrink-0 w-full sm:w-auto snap-start bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="p-3 sm:p-4 border-b">
        <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-2">Plots</h3>
        <p className="text-xs sm:text-sm text-gray-600">Most searched societies for Plots</p>
      </div>
      <div className="p-3 sm:p-4">
        <div className="space-y-3">
          {demandData.plots.map((item, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center">
                <span className="text-blue-600 font-bold text-sm mr-2">#{index + 1}</span>
                <span className="text-gray-800 text-sm hover:text-blue-600 cursor-pointer">{item.sector}</span>
              </div>
              <span className="text-xs text-gray-500">{item.searches}</span>
            </div>
          ))}
        </div>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-4">
          View all 8 Localities
        </button>
      </div>
    </div>

    {/* Builder Floor Section */}
    <div className="flex-shrink-0 w-full sm:w-auto snap-start bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="p-3 sm:p-4 border-b">
        <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-2">Builder Floor</h3>
        <p className="text-xs sm:text-sm text-gray-600">Most searched localities for</p>
      </div>
      <div className="p-3 sm:p-4">
        <div className="space-y-3">
          {demandData.builderFloor.map((item, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center">
                <span className="text-blue-600 font-bold text-sm mr-2">#{index + 1}</span>
                <span className="text-gray-800 text-sm hover:text-blue-600 cursor-pointer">{item.sector}</span>
              </div>
              <span className="text-xs text-gray-500">{item.searches}</span>
            </div>
          ))}
        </div>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-4">
          View all 8 Localities
        </button>
      </div>
    </div>
  </div>
</div>
{/* Offers for you Section */}
<div className="mb-8">
  {/* Header */}
  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-1 sm:gap-0">
    <div>
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Offers for you</h2>
      <p className="text-xs sm:text-sm text-gray-600">Projects with ongoing offers in {formattedCity}</p>
    </div>
    <button className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium">
      View all →
    </button>
  </div>

  {/* Cards Container */}
  <div className="overflow-x-auto sm:overflow-x-visible scrollbar-hide">
    <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {offersData.map((offer) => (
        <div
          key={offer.id}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col min-w-[220px] sm:min-w-0 flex-shrink-0 overflow-hidden"
        >
          {/* Image Section */}
          <div className="w-full h-32 sm:h-40 relative">
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-2">
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded font-medium">OFFER</span>
            </div>
            <div className="absolute top-2 right-2">
              <button className="p-1.5 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                <FaRegHeart className="text-gray-400 text-xs" />
              </button>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-2 sm:p-3 flex flex-col justify-between text-xs sm:text-sm">
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">{offer.title}</h3>
              <p className="text-gray-600 mb-1">{offer.location}</p>

              <div className="mb-2">
                <p className="text-gray-800 font-bold">{offer.priceRange}</p>
                {offer.originalPrice && (
                  <p className="text-gray-500 line-through">{offer.originalPrice}</p>
                )}
              </div>

              <div className="bg-blue-50 rounded-lg p-1 mb-2">
                <div className="flex items-center text-blue-600 mb-1">
                  <span className="mr-1">🎯</span>
                  <span className="font-medium">{offer.discount}</span>
                </div>
                <p className="text-blue-700 text-xs">
                  Avail special discount on booking & get this apartment cheaper
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-1">
                <div className="flex items-center text-blue-600 mb-1">
                  <span className="mr-1">💰</span>
                  <span className="font-medium">Special Brokerage Offer</span>
                </div>
                <p className="text-blue-700 text-xs">
                  Get exclusive brokerage discount when you book through our platform
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


         {/* Reach out to Featured Dealers Section */}
<div className="mb-8">
  {/* Header */}
  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-1 sm:gap-0">
    <div>
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
        Reach out to Featured Dealers
      </h2>
      <p className="text-xs sm:text-sm text-gray-600">
        Connect with verified property dealers in {formattedCity}
      </p>
    </div>
    <button className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium">
      View all →
    </button>
  </div>
  {/* Dealers Cards Container */}
  <div className="overflow-x-auto sm:overflow-x-visible scrollbar-hide">
    <div className="flex gap-4 sm:grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
      {featuredDealers.map((dealer) => (
        <div
          key={dealer.id}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex-shrink-0 min-w-[260px] sm:min-w-0 p-4 sm:p-6"
        >
          {/* Top Info */}
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
              <FaUser className="text-gray-600 text-lg" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{dealer.name}</h3>
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">{dealer.experience}</span>
                {dealer.verified && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    ✓ Verified
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Dealer Details */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2">📍</span>
              <span>Deals in: {dealer.location}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2">🏢</span>
              <span>Specialist in: {dealer.specialty}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2">⭐</span>
              <span>{dealer.rating} ({dealer.reviews} reviews)</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Contact Now
            </button>
            <button className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors">
              View Profile
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

{/* More dealers Section */}
<div className="mb-8">
  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-1 sm:gap-0">
    <div>
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800">More dealers</h2>
      <p className="text-xs sm:text-sm text-gray-600">Connect with more experienced property dealers</p>
    </div>
    <button className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium">
      View all dealers →
    </button>
  </div>

  {/* Cards Container */}
  <div className="overflow-x-auto sm:overflow-x-visible scrollbar-hide">
    <div className="flex gap-4 sm:grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
      {moreDealers.map((dealer) => (
        <div
          key={dealer.id}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex-shrink-0 min-w-[85vw] sm:min-w-0 p-4 sm:p-6"
        >
          {/* Top Info */}
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
              <FaUser className="text-gray-600 text-lg" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{dealer.name}</h3>
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">{dealer.experience}</span>
                {dealer.verified && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    ✓ Verified
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Dealer Details */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2">📍</span>
              <span>Operates in: {dealer.location}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2">🏢</span>
              <span>Focus: {dealer.specialty}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2">⭐</span>
              <span>{dealer.rating} ({dealer.reviews} reviews)</span>
            </div>
            <div className="flex items-center text-sm text-blue-600">
              <span className="mr-2">📞</span>
              <span>{dealer.properties} properties listed</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Call Now
            </button>
            <button className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors">
              Chat
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Popular builders Section */}
<div className="mb-8">
  {/* Header */}
  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-1 sm:gap-0">
    <div>
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Popular builders</h2>
      <p className="text-xs sm:text-sm text-gray-600">Top construction companies with proven track record</p>
    </div>
    <button className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium">
      View all builders →
    </button>
  </div>

  {/* Cards Container */}
  <div className="overflow-x-auto sm:overflow-x-visible scrollbar-hide">
    <div className="flex gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4">
      {popularBuilders.map((builder) => (
        <div
          key={builder.id}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex-shrink-0 w-72 sm:w-64 md:w-60 lg:w-56 p-3 sm:p-4"
        >
          {/* Builder Info */}
          <div className="text-center mb-3">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <span className="text-xl font-bold text-gray-600">{builder.name.charAt(0)}</span>
            </div>
            <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{builder.name}</h3>
            <p className="text-xs sm:text-sm text-gray-600">{builder.location}</p>
          </div>

          {/* Stats */}
          <div className="space-y-1 mb-3 text-xs sm:text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Experience:</span>
              <span className="text-gray-800 font-medium">{builder.experience}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Projects:</span>
              <span className="text-gray-800 font-medium">{builder.projects}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Rating:</span>
              <div className="flex items-center">
                <span className="text-yellow-500 mr-1">⭐</span>
                <span className="text-gray-800 font-medium">{builder.rating}</span>
              </div>
            </div>
          </div>

          {/* Specialties */}
          <div className="mb-3 text-xs sm:text-sm">
            <p className="mb-1 text-gray-600">Specializes in:</p>
            <div className="flex flex-wrap gap-1">
              {builder.specialties.map((specialty, index) => (
                <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          {/* Button */}
          <button className="w-full bg-blue-600 text-white py-1.5 sm:py-2 px-3 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors">
            View Projects
          </button>
        </div>
      ))}
    </div>
  </div>
</div>
{/* Top Gainers Section */}
<div className="mb-8">
  {/* Header */}
  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-1 sm:gap-0">
    <div>
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Top Gainers</h2>
      <p className="text-xs sm:text-sm text-gray-600">Properties with highest price appreciation in recent months</p>
    </div>
    <button className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium">
      View detailed report →
    </button>
  </div>

  {/* Table Container */}
  <div className="overflow-x-auto scrollbar-hide">
    <div className="min-w-[500px] sm:min-w-0 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      
      {/* Table Header */}
      <div className="p-2 sm:p-4 border-b border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 text-xs sm:text-sm font-medium text-gray-600">
          <div>Locality</div>
          <div>Avg. Price</div>
          <div>Change</div>
          <div>Trend</div>
        </div>
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-gray-200">
        {topGainersData.map((item, index) => (
          <div key={item.id} className="p-2 sm:p-4 hover:bg-gray-50 transition-colors">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 items-start sm:items-center">
              
              {/* Locality */}
              <div>
                <div className="flex items-center sm:block">
                  <span className="text-blue-600 font-bold text-xs sm:text-sm mr-2 sm:mr-0">#{index + 1}</span>
                  <div className="mt-0 sm:mt-1">
                    <h3 className="font-medium text-gray-800 text-sm sm:text-base">{item.locality}</h3>
                    <p className="text-xs text-gray-500">{item.area}</p>
                  </div>
                </div>
              </div>

              {/* Avg Price */}
              <div className="mt-1 sm:mt-0">
                <p className="font-semibold text-gray-800 text-sm">₹{item.avgPrice}</p>
                <p className="text-xs text-gray-500">per sq ft</p>
              </div>

              {/* Change */}
              <div className="mt-1 sm:mt-0">
                <div className={`flex items-center ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  <span className="font-bold text-sm sm:text-lg">{item.change}</span>
                  <span className="ml-1">{item.change.startsWith('+') ? '↗️' : '↘️'}</span>
                </div>
                <p className="text-xs text-gray-500">{item.period}</p>
              </div>

              {/* Trend */}
              <div className="mt-1 sm:mt-0">
                <div className="flex items-center">
                  <div className="flex space-x-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-3 sm:w-2 sm:h-4 rounded-sm ${i < item.trendLevel ? 'bg-green-500' : 'bg-gray-200'}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-xs text-gray-500">{item.trendLevel}/5</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">{item.trendDirection}</p>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-3 sm:p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
          <p className="text-sm text-gray-600">
            Data as of {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
          </p>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Download full report
          </button>
        </div>
      </div>

    </div>
  </div>
</div>

{/* BHK choice in mind Section */}
<div className="mb-8">
  <div className="flex items-center mb-6">
    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
      <span className="text-white text-sm">🏠</span>
    </div>
    <div>
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800">BHK choice in mind?</h2>
      <p className="text-sm text-gray-600">Browse by no. of bedrooms in the house</p>
    </div>
  </div>

  <div className="overflow-x-auto scrollbar-hide">
    <div className="flex gap-4">
      {bhkOptions.map((option) => (
        <div
          key={option.id}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 min-w-[250px] flex-shrink-0 cursor-pointer"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">{option.icon}</span>
            </div>
            <h3 className="font-semibold text-gray-800 text-lg mb-2">{option.type}</h3>
            <p className="text-sm text-gray-600">{option.count}</p>
          </div>
          <div className="mt-4 text-center">
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View Properties →
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

         {/* Choose type of advertiser Section */}
<div className="mb-8">
  {/* Header */}
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
        <span className="text-white text-sm">🏠</span>
      </div>
      <div>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Properties posted by</h2>
      </div>
    </div>
  </div>

  {/* Subtitle */}
  <div className="mt-6">
    <h3 className="text-lg font-semibold text-gray-800 mb-2">Choose type of advertiser</h3>
    <p className="text-sm text-gray-600 mb-4">Browse properties based on type of posting</p>

    {/* Cards Container */}
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex gap-4">
        {advertiserTypes.map((type) => (
          <div
            key={type.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex-shrink-0 w-64 sm:w-56 md:w-64 p-3 cursor-pointer flex flex-row items-center gap-3"
          >
            <div className={`w-12 h-12 flex items-center justify-center rounded-lg bg-${type.color}-50`}>
              <span className="text-2xl">{type.icon}</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{type.type}</h4>
              <p className="text-xs sm:text-sm text-gray-600">{type.description}</p>
            </div>
            <div className="text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

{/* Move in now, next year or later Section */}
<div className="mb-8">
  <div>
    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Move in now, next year or later</h2>
    <p className="text-sm text-gray-600 mb-6">Find property based on your preferred possession date</p>
  </div>

  {/* Cards Container */}
  <div className="overflow-x-auto sm:overflow-x-visible scrollbar-hide">
    <div className="flex sm:grid sm:grid-cols-3 gap-4">
      {moveInOptions.map((option) => (
        <div
          key={option.id}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer flex-shrink-0 w-72 sm:w-auto"
        >
          <div className="relative">
            <img
              src={option.image}
              alt={option.title}
              className="w-full h-36 sm:h-40 object-cover"
              onError={(e) => {
                e.target.src =
                  'https://via.placeholder.com/300x160/f3f4f6/9ca3af?text=' +
                  encodeURIComponent(option.title);
              }}
            />
            <div className="absolute top-3 left-3">
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded font-medium">
                {option.subtitle}
              </span>
            </div>
          </div>

          <div className="p-3 sm:p-4">
            <h3 className="font-semibold text-gray-800 text-base sm:text-lg mb-1 sm:mb-2">{option.title}</h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">{option.description}</p>
            <p className="text-blue-600 text-sm font-medium">{option.properties}</p>

            <div className="mt-3 sm:mt-4">
              <button className="w-full bg-blue-600 text-white py-1.5 sm:py-2 px-3 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors">
                Explore Properties
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

          {/* Browse by budget Section */}
<div className="mb-8">
  {/* Header */}
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
        <span className="text-white text-sm">🏠</span>
      </div>
      <div>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Have a budget in mind?</h2>
      </div>
    </div>
  </div>

  {/* Subtitle */}
  <div className="mt-6">
    <h3 className="text-lg font-semibold text-gray-800 mb-2">Browse by budget</h3>
    <p className="text-sm text-gray-600 mb-4">Find properties based on your budget</p>

    {/* Cards Container */}
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex gap-4">
        {budgetOptions.map((option) => (
          <div
            key={option.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex-shrink-0 w-64 sm:w-56 md:w-64 p-3 cursor-pointer flex flex-row items-center gap-3"
          >
            <div className={`w-12 h-12 flex items-center justify-center rounded-lg bg-${option.color}-50`}>
              <span className="text-2xl">{option.icon}</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{option.category}</h4>
              <p className="text-xs sm:text-sm text-gray-600">{option.range}</p>
              <p className="text-xs text-blue-600 mt-1">{option.properties}</p>
            </div>
            <div className="text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

        </div>
        {/* Right Sidebar */}
        <div className="w-full lg:w-80 xl:max-w-xl p-3 sm:p-4 lg:p-6 space-y-4 lg:space-y-6">
          {/* User Profile Card */}
          <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                <FaUser className="text-gray-600 text-sm" />
              </div>
              <span className="font-medium text-gray-800">Guest User</span>
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <span className="text-gray-600 text-sm">Your Recent Activity</span>
              </div>
              <div className="flex items-center">
                <span className="text-3xl font-bold text-orange-500">4</span>
                <div className="ml-2">
                  <p className="text-gray-600 text-sm">Viewed</p>
                </div>
                <FaEye className="text-orange-500 ml-auto" />
              </div>
            </div>
            
            <button className="w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600 transition-colors mb-2">
              Login/Register to Save Activity
            </button>
            <p className="text-xs text-gray-500 text-center">
              Save your searches, property & get customized recommendations
            </p>
          </div>

          {/* Advertisement */}
          <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg p-6 text-white">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Sell or rent faster at the right price!</h3>
              <p className="text-sm opacity-90">List your property now</p>
            </div>
            <button className="bg-white text-orange-500 px-4 py-2 rounded font-medium hover:bg-gray-50 transition-colors">
              Post Property, It's FREE
            </button>
            <div className="mt-4">
              <img 
                src="/post_property_banner.png" 
                alt="Post Property" 
                className="w-20 h-20 object-cover rounded ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CityPageTemplate;