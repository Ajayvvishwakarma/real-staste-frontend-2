// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { apiRequest, API_ENDPOINTS } from '../../utils/api';
// import Admin_Navbar from './Admin_Navbar';
// import Admin_Sidebar from './Admin_Sidebar';
// import {
//   PlusIcon,
//   MagnifyingGlassIcon,
//   FunnelIcon,
//   EyeIcon,
//   CheckIcon,
//   XMarkIcon,
//   StarIcon,
//   TrashIcon,
//   BuildingOfficeIcon,
//   MapPinIcon,
//   CurrencyRupeeIcon,
//   HomeIcon,
//   CalendarDaysIcon,
//   UserIcon,
//   ChartBarIcon,
//   DocumentChartBarIcon,
//   Squares2X2Icon,
//   ListBulletIcon,
//   AdjustmentsHorizontalIcon
// } from '@heroicons/react/24/outline';
// import {
//   StarIcon as StarIconSolid
// } from '@heroicons/react/24/solid';

// const PropertyManagement = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedTab, setSelectedTab] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showPropertyModal, setShowPropertyModal] = useState(false);
//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const [filterStatus, setFilterStatus] = useState('all');
//   const [bulkSelection, setBulkSelection] = useState([]);
//   const [viewMode, setViewMode] = useState('cards'); // Default to cards for properties
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Handle responsive layout
//   useEffect(() => {
//     const handleResize = () => {
//       setIsLargeScreen(window.innerWidth >= 1024);
//     };
    
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Set selected tab based on URL path
//   useEffect(() => {
//     const path = location.pathname;
//     if (path.includes('/pending')) {
//       setSelectedTab('pending');
//     } else if (path.includes('/featured')) {
//       setSelectedTab('featured');
//     } else if (path.includes('/categories')) {
//       setSelectedTab('categories');
//     } else {
//       setSelectedTab('all');
//     }
//   }, [location.pathname]);

//   const tabs = [
//     { id: 'all', label: 'All Properties', count: properties.length },
//     { id: 'pending', label: 'Pending Approval', count: properties.filter(p => p.status === 'pending').length },
//     { id: 'approved', label: 'Approved', count: properties.filter(p => p.status === 'approved').length },
//     { id: 'featured', label: 'Featured', count: properties.filter(p => p.is_featured).length },
//     { id: 'rejected', label: 'Rejected', count: properties.filter(p => p.status === 'rejected').length }
//   ];

//   useEffect(() => {
//     loadProperties();
//   }, []);

//   const loadProperties = async () => {
//     try {
//       setLoading(true);
//       // Mock data - replace with actual API call
//       const mockProperties = [
//         {
//           id: 1,
//           title: 'Luxury Villa in Delhi',
//           description: 'Beautiful 4BHK villa with modern amenities',
//           price: 15000000,
//           property_type: 'Villa',
//           listing_type: 'Sale',
//           city: 'Delhi',
//           state: 'Delhi',
//           area: 2500,
//           bedrooms: 4,
//           bathrooms: 3,
//           status: 'pending',
//           is_featured: false,
//           owner_name: 'John Doe',
//           owner_email: 'john@example.com',
//           created_at: '2024-01-20T10:30:00Z',
//           images: ['villa1.jpg', 'villa2.jpg']
//         },
//         {
//           id: 2,
//           title: 'Modern Apartment in Mumbai',
//           description: 'Spacious 3BHK apartment in prime location',
//           price: 8500000,
//           property_type: 'Apartment',
//           listing_type: 'Sale',
//           city: 'Mumbai',
//           state: 'Maharashtra',
//           area: 1800,
//           bedrooms: 3,
//           bathrooms: 2,
//           status: 'approved',
//           is_featured: true,
//           owner_name: 'Sarah Smith',
//           owner_email: 'sarah@example.com',
//           created_at: '2024-01-18T14:22:00Z',
//           images: ['apt1.jpg', 'apt2.jpg', 'apt3.jpg']
//         },
//         {
//           id: 3,
//           title: 'Commercial Office Space',
//           description: 'Premium office space in business district',
//           price: 25000,
//           property_type: 'Commercial',
//           listing_type: 'Rent',
//           city: 'Bangalore',
//           state: 'Karnataka',
//           area: 5000,
//           bedrooms: 0,
//           bathrooms: 4,
//           status: 'approved',
//           is_featured: false,
//           owner_name: 'Mike Wilson',
//           owner_email: 'mike@example.com',
//           created_at: '2024-01-15T09:15:00Z',
//           images: ['office1.jpg']
//         },
//         {
//           id: 4,
//           title: 'Studio Apartment',
//           description: 'Cozy studio apartment for students',
//           price: 15000,
//           property_type: 'Apartment',
//           listing_type: 'Rent',
//           city: 'Pune',
//           state: 'Maharashtra',
//           area: 600,
//           bedrooms: 1,
//           bathrooms: 1,
//           status: 'rejected',
//           is_featured: false,
//           owner_name: 'Lisa Brown',
//           owner_email: 'lisa@example.com',
//           created_at: '2024-01-12T16:45:00Z',
//           images: ['studio1.jpg']
//         }
//       ];
//       setProperties(mockProperties);
//     } catch (error) {
//       console.error('Error loading properties:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleApproveProperty = async (propertyId) => {
//     try {
//       // Mock API call - replace with actual implementation
//       setProperties(properties.map(property => 
//         property.id === propertyId 
//           ? { ...property, status: 'approved' }
//           : property
//       ));
//     } catch (error) {
//       console.error('Error approving property:', error);
//     }
//   };

//   const handleRejectProperty = async (propertyId) => {
//     try {
//       // Mock API call - replace with actual implementation
//       setProperties(properties.map(property => 
//         property.id === propertyId 
//           ? { ...property, status: 'rejected' }
//           : property
//       ));
//     } catch (error) {
//       console.error('Error rejecting property:', error);
//     }
//   };

//   const handleToggleFeatured = async (propertyId) => {
//     try {
//       // Mock API call - replace with actual implementation
//       setProperties(properties.map(property => 
//         property.id === propertyId 
//           ? { ...property, is_featured: !property.is_featured }
//           : property
//       ));
//     } catch (error) {
//       console.error('Error toggling featured status:', error);
//     }
//   };

//   const handleDeleteProperty = async (propertyId) => {
//     if (window.confirm('Are you sure you want to delete this property?')) {
//       try {
//         // Mock API call - replace with actual implementation
//         setProperties(properties.filter(property => property.id !== propertyId));
//       } catch (error) {
//         console.error('Error deleting property:', error);
//       }
//     }
//   };

//   const filteredProperties = properties.filter(property => {
//     const matchesTab = selectedTab === 'all' || 
//       (selectedTab === 'pending' && property.status === 'pending') ||
//       (selectedTab === 'approved' && property.status === 'approved') ||
//       (selectedTab === 'featured' && property.is_featured) ||
//       (selectedTab === 'rejected' && property.status === 'rejected');
    
//     const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          property.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          property.owner_name.toLowerCase().includes(searchTerm.toLowerCase());
    
//     return matchesTab && matchesSearch;
//   });

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'approved': return 'bg-green-100 text-green-800';
//       case 'pending': return 'bg-yellow-100 text-yellow-800';
//       case 'rejected': return 'bg-red-100 text-red-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const formatPrice = (price, listingType) => {
//     const formatted = new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       maximumFractionDigits: 0
//     }).format(price);
    
//     return listingType === 'Rent' ? `${formatted}/month` : formatted;
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading properties...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navbar - Full Width */}
//       <Admin_Navbar onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />

//       {/* Sidebar - Left side below navbar */}
//       <Admin_Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {/* Main content */}
//       <div className="pt-16 lg:pl-64 min-h-screen transition-all duration-300">
//         <main className="bg-gray-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
//             {/* Page header */}
//             <div className="mb-8">
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
//                 <div>
//                   <h1 className="text-3xl font-bold text-gray-900 flex items-center">
//                     <BuildingOfficeIcon className="h-8 w-8 text-blue-600 mr-3" />
//                     Property Management
//                   </h1>
//                   <p className="mt-2 text-gray-600">Manage all property listings, approvals, and features across your platform</p>
//                 </div>
//                 <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row gap-3">
//                   <button 
//                     onClick={() => navigate('/admin/properties/analytics')}
//                     className="inline-flex items-center px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-lg shadow-sm border border-gray-300 transition-colors duration-200"
//                   >
//                     <DocumentChartBarIcon className="h-5 w-5 mr-2" />
//                     Analytics
//                   </button>
//                   <button 
//                     onClick={() => navigate('/admin/properties/add')}
//                     className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200"
//                   >
//                     <PlusIcon className="h-5 w-5 mr-2" />
//                     Add Property
//                   </button>
//                 </div>
//               </div>
              
//               {/* Stats Cards */}
//               <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                 <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0 p-3 bg-blue-100 rounded-xl">
//                       <BuildingOfficeIcon className="h-6 w-6 text-blue-600" />
//                     </div>
//                     <div className="ml-4">
//                       <p className="text-sm font-medium text-gray-600">Total Properties</p>
//                       <p className="text-2xl font-bold text-gray-900">{properties.length}</p>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0 p-3 bg-yellow-100 rounded-xl">
//                       <CalendarDaysIcon className="h-6 w-6 text-yellow-600" />
//                     </div>
//                     <div className="ml-4">
//                       <p className="text-sm font-medium text-gray-600">Pending Approval</p>
//                       <p className="text-2xl font-bold text-gray-900">{properties.filter(p => p.status === 'pending').length}</p>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0 p-3 bg-green-100 rounded-xl">
//                       <CheckIcon className="h-6 w-6 text-green-600" />
//                     </div>
//                     <div className="ml-4">
//                       <p className="text-sm font-medium text-gray-600">Approved</p>
//                       <p className="text-2xl font-bold text-gray-900">{properties.filter(p => p.status === 'approved').length}</p>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0 p-3 bg-purple-100 rounded-xl">
//                       <StarIcon className="h-6 w-6 text-purple-600" />
//                     </div>
//                     <div className="ml-4">
//                       <p className="text-sm font-medium text-gray-600">Featured</p>
//                       <p className="text-2xl font-bold text-gray-900">{properties.filter(p => p.is_featured).length}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Tabs */}
//             <div className="mb-6">
//               <div className="border-b border-gray-200">
//                 <nav className="-mb-px flex space-x-4 lg:space-x-8 overflow-x-auto">
//                   {tabs.map((tab) => (
//                     <button
//                       key={tab.id}
//                       onClick={() => setSelectedTab(tab.id)}
//                       className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
//                         selectedTab === tab.id
//                           ? 'border-blue-500 text-blue-600'
//                           : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                       }`}
//                     >
//                       {tab.label}
//                       <span className="ml-2 py-0.5 px-2 rounded-full text-xs bg-gray-100 text-gray-900">
//                         {tab.count}
//                       </span>
//                     </button>
//                   ))}
//                 </nav>
//               </div>
//             </div>

//             {/* Controls */}
//             <div className="mb-6 bg-white rounded-xl shadow-sm border border-gray-200 p-4 lg:p-6">
//               <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0 gap-4">
//                 {/* Search and Filters */}
//                 <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4">
//                   {/* Search */}
//                   <div className="relative w-full sm:w-80">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input
//                       type="text"
//                       placeholder="Search properties, cities, owners..."
//                       value={searchTerm}
//                       onChange={(e) => setSearchTerm(e.target.value)}
//                       className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                     />
//                   </div>

//                   {/* Filter Dropdown */}
//                   <div className="relative">
//                     <select
//                       value={filterStatus}
//                       onChange={(e) => setFilterStatus(e.target.value)}
//                       className="appearance-none w-full sm:w-auto border border-gray-300 rounded-lg px-4 py-3 pr-8 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                     >
//                       <option value="all">All Status</option>
//                       <option value="pending">Pending</option>
//                       <option value="approved">Approved</option>
//                       <option value="rejected">Rejected</option>
//                     </select>
//                     <FunnelIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
//                   </div>
//                 </div>

//                 {/* View Mode and Actions */}
//                 <div className="flex items-center space-x-3">
//                   {/* View Mode Toggle */}
//                   <div className="bg-gray-100 rounded-lg p-1 flex">
//                     <button
//                       onClick={() => setViewMode('cards')}
//                       className={`p-2 rounded-md transition-colors ${
//                         viewMode === 'cards'
//                           ? 'bg-white text-blue-600 shadow-sm'
//                           : 'text-gray-500 hover:text-gray-700'
//                       }`}
//                     >
//                       <Squares2X2Icon className="h-5 w-5" />
//                     </button>
//                     <button
//                       onClick={() => setViewMode('list')}
//                       className={`p-2 rounded-md transition-colors ${
//                         viewMode === 'list'
//                           ? 'bg-white text-blue-600 shadow-sm'
//                           : 'text-gray-500 hover:text-gray-700'
//                       }`}
//                     >
//                       <ListBulletIcon className="h-5 w-5" />
//                     </button>
//                   </div>

//                   {/* Bulk Actions */}
//                   {bulkSelection.length > 0 && (
//                     <div className="flex items-center space-x-2">
//                       <span className="text-sm text-gray-600">
//                         {bulkSelection.length} selected
//                       </span>
//                       <button className="inline-flex items-center px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors">
//                         <CheckIcon className="h-4 w-4 mr-1" />
//                         Approve
//                       </button>
//                       <button className="inline-flex items-center px-3 py-1.5 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-colors">
//                         <XMarkIcon className="h-4 w-4 mr-1" />
//                         Reject
//                       </button>
//                     </div>
//                   )}

//                   {/* Advanced Filters */}
//                   <button className="inline-flex items-center px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//                     <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2" />
//                     Advanced
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Properties Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
//               {filteredProperties.map((property) => (
//                 <div key={property.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
//                   {/* Property Image */}
//                   <div className="h-40 sm:h-48 bg-gray-200 relative">
//                     <img
//                       src={`/api/placeholder/400/300`}
//                       alt={property.title}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute top-2 left-2 flex flex-wrap gap-1 sm:gap-2">
//                       <span className={`px-2 py-1 text-xs font-medium rounded ${getStatusColor(property.status)}`}>
//                         {property.status.toUpperCase()}
//                       </span>
//                       {property.is_featured && (
//                         <span className="px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800">
//                           FEATURED
//                         </span>
//                       )}
//                     </div>
//                     <div className="absolute top-2 right-2">
//                       <span className="px-2 py-1 text-xs font-medium rounded bg-white text-gray-800">
//                         {property.listing_type}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Property Details */}
//                   <div className="p-3 sm:p-4">
//                     <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{property.title}</h3>
//                     <p className="text-gray-600 text-sm mb-3 line-clamp-2">{property.description}</p>
                    
//                     <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
//                       <div className="flex justify-between text-sm">
//                         <span className="text-gray-500">Price:</span>
//                         <span className="font-semibold text-green-600 text-xs sm:text-sm">
//                           {formatPrice(property.price, property.listing_type)}
//                         </span>
//                       </div>
//                       <div className="flex justify-between text-sm">
//                         <span className="text-gray-500">Type:</span>
//                         <span className="text-gray-900 text-xs sm:text-sm">{property.property_type}</span>
//                       </div>
//                       <div className="flex justify-between text-sm">
//                         <span className="text-gray-500">Location:</span>
//                         <span className="text-gray-900 text-xs sm:text-sm truncate ml-2">{property.city}, {property.state}</span>
//                       </div>
//                       <div className="flex justify-between text-sm">
//                         <span className="text-gray-500">Area:</span>
//                         <span className="text-gray-900 text-xs sm:text-sm">{property.area} sq ft</span>
//                       </div>
//                       {property.bedrooms > 0 && (
//                         <div className="flex justify-between text-sm">
//                           <span className="text-gray-500">Bedrooms:</span>
//                           <span className="text-gray-900 text-xs sm:text-sm">{property.bedrooms}BHK</span>
//                         </div>
//                       )}
//                     </div>

//                     <div className="border-t pt-3">
//                       <div className="text-sm text-gray-500 mb-2 truncate">
//                         Owner: {property.owner_name}
//                       </div>
//                       <div className="text-xs text-gray-400 truncate">
//                         {property.owner_email}
//                       </div>
//                       <div className="text-xs text-gray-400 mt-1">
//                         Listed: {new Date(property.created_at).toLocaleDateString()}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="px-3 sm:px-4 pb-3 sm:pb-4">
//                     <div className="flex flex-col sm:flex-row flex-wrap gap-2">
//                       {property.status === 'pending' && (
//                         <>
//                           <button
//                             onClick={() => handleApproveProperty(property.id)}
//                             className="flex-1 bg-green-600 text-white text-xs sm:text-sm py-2 px-3 rounded hover:bg-green-700 transition-colors font-medium"
//                           >
//                             Approve
//                           </button>
//                           <button
//                             onClick={() => handleRejectProperty(property.id)}
//                             className="flex-1 bg-red-600 text-white text-xs sm:text-sm py-2 px-3 rounded hover:bg-red-700 transition-colors font-medium"
//                           >
//                             Reject
//                           </button>
//                         </>
//                       )}
                      
//                       {property.status === 'approved' && (
//                         <button
//                           onClick={() => handleToggleFeatured(property.id)}
//                           className={`flex-1 text-xs sm:text-sm py-2 px-3 rounded transition-colors font-medium ${
//                             property.is_featured
//                               ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
//                               : 'bg-blue-600 text-white hover:bg-blue-700'
//                           }`}
//                         >
//                           {property.is_featured ? 'Remove Featured' : 'Make Featured'}
//                         </button>
//                       )}

//                       <button
//                         onClick={() => {
//                           setSelectedProperty(property);
//                           setShowPropertyModal(true);
//                         }}
//                         className="flex-1 bg-gray-100 text-gray-700 text-xs sm:text-sm py-2 px-3 rounded hover:bg-gray-200 transition-colors font-medium"
//                       >
//                         View Details
//                       </button>
                      
//                       <button
//                         onClick={() => handleDeleteProperty(property.id)}
//                         className="flex-1 bg-red-50 text-red-600 text-xs sm:text-sm py-2 px-3 rounded hover:bg-red-100 transition-colors font-medium"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Empty state */}
//             {filteredProperties.length === 0 && (
//               <div className="bg-white shadow-sm rounded-lg">
//                 <div className="text-center py-12">
//                   <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                   </svg>
//                   <h3 className="mt-2 text-sm font-medium text-gray-900">No properties found</h3>
//                   <p className="mt-1 text-sm text-gray-500">Try adjusting your search criteria or filters.</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </main>
//       </div>

//       {/* Property Details Modal */}
//       {showPropertyModal && selectedProperty && (
//         <div className="fixed inset-0 z-50 overflow-y-auto">
//           <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
//               <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => setShowPropertyModal(false)}></div>
//             </div>

//             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
//               <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                 <div className="flex justify-between items-start mb-4">
//                   <h3 className="text-lg leading-6 font-medium text-gray-900">
//                     Property Details
//                   </h3>
//                   <button
//                     onClick={() => setShowPropertyModal(false)}
//                     className="text-gray-400 hover:text-gray-600"
//                   >
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   </button>
//                 </div>
                
//                 <div className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">Title</label>
//                       <p className="mt-1 text-sm text-gray-900">{selectedProperty.title}</p>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">Price</label>
//                       <p className="mt-1 text-sm text-gray-900">{formatPrice(selectedProperty.price, selectedProperty.listing_type)}</p>
//                     </div>
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Description</label>
//                     <p className="mt-1 text-sm text-gray-900">{selectedProperty.description}</p>
//                   </div>
                  
//                   <div className="grid grid-cols-3 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">Type</label>
//                       <p className="mt-1 text-sm text-gray-900">{selectedProperty.property_type}</p>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">Listing</label>
//                       <p className="mt-1 text-sm text-gray-900">{selectedProperty.listing_type}</p>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">Area</label>
//                       <p className="mt-1 text-sm text-gray-900">{selectedProperty.area} sq ft</p>
//                     </div>
//                   </div>
                  
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">Owner</label>
//                       <p className="mt-1 text-sm text-gray-900">{selectedProperty.owner_name}</p>
//                       <p className="text-xs text-gray-500">{selectedProperty.owner_email}</p>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">Location</label>
//                       <p className="mt-1 text-sm text-gray-900">{selectedProperty.city}, {selectedProperty.state}</p>
//                     </div>
//                   </div>
                  
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">Status</label>
//                       <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedProperty.status)}`}>
//                         {selectedProperty.status.toUpperCase()}
//                       </span>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">Featured</label>
//                       <p className="mt-1 text-sm text-gray-900">{selectedProperty.is_featured ? 'Yes' : 'No'}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//                 <button
//                   onClick={() => setShowPropertyModal(false)}
//                   className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PropertyManagement;









import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Replace with your backend API endpoints
const PROPERTIES_API_URL = "http://localhost:8000/api/properties";

import Admin_Navbar from './Admin_Navbar';
import Admin_Sidebar from './Admin_Sidebar';

const PropertyManagementIntegration = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showPropertyModal, setShowPropertyModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const response = await fetch(PROPERTIES_API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch properties");
        }
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error loading properties:", error);
        setProperties([]); // Fallback to empty data
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleApproveProperty = async (propertyId) => {
    try {
      const response = await fetch(`${PROPERTIES_API_URL}/${propertyId}/approve`, {
        method: 'PATCH',
      });
      if (!response.ok) {
        throw new Error("Failed to approve property");
      }
      const updatedProperty = await response.json();
      setProperties(properties.map(property =>
        property.id === propertyId ? updatedProperty : property
      ));
    } catch (error) {
      console.error("Error approving property:", error);
    }
  };

  const handleRejectProperty = async (propertyId) => {
    try {
      const response = await fetch(`${PROPERTIES_API_URL}/${propertyId}/reject`, {
        method: 'PATCH',
      });
      if (!response.ok) {
        throw new Error("Failed to reject property");
      }
      const updatedProperty = await response.json();
      setProperties(properties.map(property =>
        property.id === propertyId ? updatedProperty : property
      ));
    } catch (error) {
      console.error("Error rejecting property:", error);
    }
  };

  const handleToggleFeatured = async (propertyId) => {
    try {
      const response = await fetch(`${PROPERTIES_API_URL}/${propertyId}/toggle-featured`, {
        method: 'PATCH',
      });
      if (!response.ok) {
        throw new Error("Failed to toggle featured status");
      }
      const updatedProperty = await response.json();
      setProperties(properties.map(property =>
        property.id === propertyId ? updatedProperty : property
      ));
    } catch (error) {
      console.error("Error toggling featured status:", error);
    }
  };

  const handleDeleteProperty = async (propertyId) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      try {
        const response = await fetch(`${PROPERTIES_API_URL}/${propertyId}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error("Failed to delete property");
        }
        setProperties(properties.filter(property => property.id !== propertyId));
      } catch (error) {
        console.error("Error deleting property:", error);
      }
    }
  };

  const filteredProperties = properties.filter(property => {
    const matchesTab = selectedTab === 'all' ||
      (selectedTab === 'pending' && property.status === 'pending') ||
      (selectedTab === 'approved' && property.status === 'approved') ||
      (selectedTab === 'featured' && property.is_featured) ||
      (selectedTab === 'rejected' && property.status === 'rejected');

    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.owner_name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading properties...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Admin_Navbar onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />
      <Admin_Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div 
        className="pt-16 min-h-screen transition-all duration-300" 
        style={{
          paddingLeft: isLargeScreen ? '16rem' : '0'
        }}
      >
        <main className="bg-gray-50 min-h-[calc(100vh-4rem)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Property Management</h1>
                  <p className="mt-2 text-gray-600">Manage property listings, approvals, and features</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <div key={property.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="h-40 bg-gray-200">
                    <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">{property.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{property.description}</p>
                    <div className="mt-4 flex space-x-2">
                      <button onClick={() => setSelectedProperty(property)} className="bg-blue-500 text-white px-3 py-2 rounded">View</button>
                      {property.status === 'pending' && (
                        <>
                          <button onClick={() => handleApproveProperty(property.id)} className="bg-green-500 text-white px-3 py-2 rounded">Approve</button>
                          <button onClick={() => handleRejectProperty(property.id)} className="bg-red-500 text-white px-3 py-2 rounded">Reject</button>
                        </>
                      )}
                      <button onClick={() => handleDeleteProperty(property.id)} className="bg-gray-500 text-white px-3 py-2 rounded">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PropertyManagementIntegration;