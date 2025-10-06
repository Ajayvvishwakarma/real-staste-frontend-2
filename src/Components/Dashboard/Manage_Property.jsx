// import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import UpperFooter from '../UpperFooter'
// import LowerFooter from '../LowerFooter'

// // Mock functions to replace API imports
// const isAuthenticated = () => {
//   return !!localStorage.getItem('access_token');
// };

// const getUserInfo = () => {
//   const userInfo = localStorage.getItem('user_info');
//   return userInfo ? JSON.parse(userInfo) : null;
// };

// const mockLogout = () => {
//   localStorage.removeItem('access_token');
//   localStorage.removeItem('token_type');
//   localStorage.removeItem('user_info');
//   localStorage.removeItem('user_type');
//   localStorage.removeItem('userEmail');
//   localStorage.removeItem('userRole');
//   localStorage.removeItem('user');
// };

// const Manage_Property = ({ onBackToDashboard }) => {
//   const [properties, setProperties] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [selectedProperties, setSelectedProperties] = useState([])
//   const [selectAll, setSelectAll] = useState(false)
//   const [sortBy, setSortBy] = useState('newest')
//   const [userInfo, setUserInfo] = useState(null)
//   const [dropdownOpen, setDropdownOpen] = useState(false)
//   const [propertiesDropdownOpen, setPropertiesDropdownOpen] = useState(false)
//   const [isLoggingOut, setIsLoggingOut] = useState(false)
//   const navigate = useNavigate()

//   const handleLogout = async () => {
//     if (isLoggingOut) return;
    
//     setIsLoggingOut(true);
    
//     try {
//       mockLogout();
//       navigate('/login');
//     } catch (error) {
//       console.error('Mock logout error:', error);
//       window.location.href = '/login';
//     }
//   };

//   useEffect(() => {
//     // Check if user is authenticated
//     if (!isAuthenticated()) {
//       navigate('/login');
//       return;
//     }

//     // Get user info
//     const user = getUserInfo();
//     setUserInfo(user);

//     // Mock data for demonstration matching the screenshot
//     const mockProperties = [
//       {
//         id: 'REI141470',
//         title: 'Builder Floor for Sale in Abrar Nagar, Lucknow',
//         society: 'Kalyanpur',
//         price: 'Contact Us',
//         updatedOn: '12 Sep 2025',
//         responses: 0,
//         visitors: 0,
//         status: 'Partial Completion',
//         completion: 28,
//         image: null,
//         propertyType: 'Builder Floor',
//         location: 'Abrar Nagar, Lucknow'
//       }
//     ]
    
//     setTimeout(() => {
//       setProperties(mockProperties)
//       setLoading(false)
//     }, 1000)
//   }, [navigate])

//   const handleSelectAll = () => {
//     if (selectAll) {
//       setSelectedProperties([])
//     } else {
//       setSelectedProperties(properties.map(p => p.id))
//     }
//     setSelectAll(!selectAll)
//   }

//   const handleSelectProperty = (propertyId) => {
//     if (selectedProperties.includes(propertyId)) {
//       setSelectedProperties(selectedProperties.filter(id => id !== propertyId))
//     } else {
//       setSelectedProperties([...selectedProperties, propertyId])
//     }
//   }

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading properties...</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-[750px] bg-gray-100">
//       {/* Header */}
//       <header className="bg-white shadow-sm">
//         <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-8">
//           <div className="flex justify-between items-center py-2 sm:py-3">
//             {/* Logo and Brand */}
//             <div className="flex items-center gap-1">
//               <div className="flex flex-row items-center justify-center gap-1 flex-shrink-0">
//                 <img
//                   src="/realestateindia-logo.svg"
//                   alt="bhoomi the real estate Logo"
//                   className="h-6 sm:h-7"
//                 />
//               </div>
//               <span className="text-sm sm:text-lg font-semibold select-none flex items-center gap-1">
//                 <span className="text-green-600">bhoomi the real estate</span>
//               </span>
//             </div>
            
//             {/* Right side - User info and actions */}
//             <div className="flex items-center space-x-2 sm:space-x-6">
//               {/* Notifications */}
//               <div className="relative">
//                 <button className="p-1 sm:p-2 text-gray-400 hover:text-gray-600">
//                   <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3.001 3.001 0 11-6 0m6 0H9" />
//                   </svg>
//                   <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
//                 </button>
//               </div>

//               {/* User Dropdown */}
//               <div className="relative">
//                 <button
//                   onClick={() => setDropdownOpen(!dropdownOpen)}
//                   className="flex items-center space-x-1 sm:space-x-2 text-gray-700 hover:text-gray-900"
//                 >
//                   <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300 rounded-full flex items-center justify-center">
//                     <span className="text-xs sm:text-sm font-medium">
//                       {userInfo?.email?.charAt(0).toUpperCase() || 'U'}
//                     </span>
//                   </div>
//                   <span className="hidden md:block text-sm font-medium">{userInfo?.email?.split('@')[0] || 'User'}</span>
//                   <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>
//                 {/* Dropdown Menu */}
//                 {dropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
//                     <div className="px-4 py-2 border-b">
//                       <p className="text-sm font-medium text-gray-900">{userInfo?.email?.split('@')[0] || 'User'}</p>
//                       <p className="text-xs text-gray-500 truncate">{userInfo?.email}</p>
//                       <p className="text-xs text-blue-600 capitalize">Free Member</p>
//                     </div>
                    
//                     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                       My Profile
//                     </a>
//                     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                       Change Password
//                     </a>
//                     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                       Change Email Id
//                     </a>
//                     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                       Remove Account
//                     </a>
//                     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                       My Subscription
//                     </a>
                    
//                     <div className="border-t">
//                       <button
//                         onClick={handleLogout}
//                         disabled={isLoggingOut}
//                         className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 disabled:opacity-50"
//                       >
//                         {isLoggingOut ? 'Logging out...' : 'Logout'}
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Navigation */}
//       <nav className="bg-blue-600 text-white">
//         <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-8">
//           <div className="flex items-center justify-between">
//             {/* Navigation Links */}
//             <div className="flex space-x-2 sm:space-x-4 md:space-x-8">
//               <button 
//                 onClick={onBackToDashboard}
//                 className="hover:bg-blue-700 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium flex items-center whitespace-nowrap"
//               >
//                 <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
//                 </svg>
//                 <span className="hidden sm:inline">Dashboard</span>
//                 <span className="sm:hidden">Home</span>
//               </button>
              
//               <div className="relative">
//                 <button 
//                   onClick={() => setPropertiesDropdownOpen(!propertiesDropdownOpen)}
//                   className="bg-blue-700 hover:bg-blue-700 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium flex items-center whitespace-nowrap rounded-none border-l border-r border-blue-500 transition-colors duration-200"
//                 >
//                   <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                   </svg>
//                   Properties
//                   <svg className={`w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform duration-200 ${propertiesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>
                
//                 {/* Properties Dropdown Menu */}
//                 {propertiesDropdownOpen && (
//                   <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-b-md shadow-xl border border-gray-200 z-50 overflow-hidden">
//                     <div className="py-1">
//                       <button 
//                         className="group px-4 py-2 text-sm text-blue-600 bg-blue-50 flex items-center transition-colors duration-150 w-full text-left font-medium"
//                       >                      
//                        <div className='flex flex-col'>
//                          <span className="font-medium">Manage Properties</span>
//                        </div>
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <a href="#" className="hover:bg-blue-700 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium flex items-center whitespace-nowrap">
//                 <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                 </svg>
//                 Enquiries
//               </a>
//               <a href="#" className="hover:bg-blue-700 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium flex items-center whitespace-nowrap">
//                 <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                 </svg>
//                 <span className="hidden sm:inline">Property Leads</span>
//                 <span className="sm:hidden">Leads</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         {/* Controls Section */}
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
//           <div className="px-6 py-4 border-b border-gray-200">
//             <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//               {/* Left side - Property count and controls */}
//               <div className="flex items-center space-x-4">
//                 <span className="text-sm text-gray-700 font-medium">
//                   {properties.length} Properties
//                 </span>
//                 <div className="flex items-center space-x-2">
//                   <input
//                     type="checkbox"
//                     checked={selectAll}
//                     onChange={handleSelectAll}
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                   />
//                   <span className="text-sm text-gray-700">Select All</span>
//                 </div>
//                 {selectedProperties.length > 0 && (
//                   <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors duration-200">
//                     Delete
//                   </button>
//                 )}
//               </div>

//               {/* Right side - Filters and sorting */}
//               <div className="flex items-center space-x-4">
//                 <div className="flex items-center space-x-2">
//                   <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3M5 6h14" />
//                   </svg>
//                   <select 
//                     value="10"
//                     className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   >
//                     <option value="10">10</option>
//                     <option value="25">25</option>
//                     <option value="50">50</option>
//                   </select>
//                 </div>
                
//                 <div className="flex items-center space-x-2">
//                   <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
//                   </svg>
//                   <select 
//                     value={sortBy} 
//                     onChange={(e) => setSortBy(e.target.value)}
//                     className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   >
//                     <option value="newest">Newest First</option>
//                     <option value="oldest">Oldest First</option>
//                     <option value="price-high">Price: High to Low</option>
//                     <option value="price-low">Price: Low to High</option>
//                   </select>
//                 </div>

//                 <div className="flex items-center space-x-2">
//                   <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
//                   </svg>
//                   <select className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
//                     <option value="">All (1)</option>
//                     <option value="active">Active</option>
//                     <option value="pending">Pending</option>
//                     <option value="completed">Completed</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Table */}
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead className="bg-blue-100">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Property Details</th>
//                   <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Date & Views</th>
//                   <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {properties.map((property) => (
//                   <tr key={property.id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4">
//                       <div className="flex items-start space-x-4">
//                         <input
//                           type="checkbox"
//                           checked={selectedProperties.includes(property.id)}
//                           onChange={() => handleSelectProperty(property.id)}
//                           className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                         />
                        
//                         <div className="w-20 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
//                           {property.image ? (
//                             <img src={property.image} alt="" className="w-full h-full object-cover rounded-lg" />
//                           ) : (
//                             <div className="text-center">
//                               <svg className="w-8 h-8 text-gray-400 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                               </svg>
//                               <p className="text-xs text-gray-500">No Image</p>
//                               <p className="text-xs text-blue-500 mt-1">Add Images to Get 5x more response</p>
//                             </div>
//                           )}
//                         </div>

//                         <div className="flex-1 min-w-0">
//                           <h3 className="text-sm font-medium text-gray-900 mb-1">
//                             {property.title} ({property.id})
//                           </h3>
//                           <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
//                             <span>Price: {property.price}</span>
//                             <span>Society: {property.society}</span>
//                           </div>
                          
//                           <div className="flex items-center space-x-4">
//                             <div className="flex items-center space-x-2">
//                               <span className="text-sm text-gray-600">Completion:</span>
//                               <div className="w-32 bg-gray-200 rounded-full h-2">
//                                 <div 
//                                   className="bg-blue-500 h-2 rounded-full" 
//                                   style={{ width: `${property.completion}%` }}
//                                 ></div>
//                               </div>
//                               <span className="text-sm font-medium text-gray-700">{property.completion}%</span>
//                               <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                               </svg>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </td>
                    
//                     <td className="px-6 py-4 text-sm text-gray-600">
//                       <div className="space-y-1">
//                         <div>Updated On: {property.updatedOn}</div>
//                         <div>Response: {property.responses}</div>
//                         <div>Visitors: {property.visitors}</div>
//                         <div>Status: <span className="text-blue-600 font-medium">{property.status}</span></div>
//                       </div>
//                     </td>
                    
//                     <td className="px-6 py-4">
//                       <div className="flex items-center space-x-2">
//                         <button className="text-blue-600 hover:text-blue-800 p-1">
//                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
//                           </svg>
//                         </button>
//                         <span className="text-blue-600 text-sm">Edit</span>
                        
//                         <button className="text-red-600 hover:text-red-800 p-1 ml-4">
//                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                           </svg>
//                         </button>
//                         <span className="text-red-600 text-sm">Delete</span>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination */}
//           <div className="px-6 py-4 border-t border-gray-200">
//             <div className="flex items-center justify-between">
//               <p className="text-sm text-gray-700">
//                 Showing 1 to 1 of 1 entries
//               </p>
//               <div className="flex items-center space-x-2">
//                 <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium transition-colors duration-200">
//                   1
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Empty State (when no properties) */}
//         {properties.length === 0 && !loading && (
//           <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
//             <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//             </svg>
//             <h3 className="text-lg font-medium text-gray-900 mb-2">No properties found</h3>
//             <p className="text-gray-500 mb-6">You haven't posted any properties yet. Start by adding your first property.</p>
//             <button 
//               onClick={() => navigate('/post-property')}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200"
//             >
//               Post Your First Property
//             </button>
//           </div>
//         )}
//       </main>
      
//       {/* Footer */}
//       <UpperFooter />
//       <LowerFooter />
//     </div>
//   );
// };

// export default Manage_Property;













import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Replace with your backend API endpoint for fetching and managing properties
const API_URL = 'http://localhost:8000/api/properties';

const ManagePropertyIntegration = ({ onBackToDashboard }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProperties, setSelectedProperties] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fetch properties from backend
  const fetchProperties = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        throw new Error('You are not logged in. Please login to view properties.');
      }

      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch properties.');
      }

      const data = await response.json();
      setProperties(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedProperties([]);
    } else {
      setSelectedProperties(properties.map((p) => p.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectProperty = (propertyId) => {
    if (selectedProperties.includes(propertyId)) {
      setSelectedProperties(selectedProperties.filter((id) => id !== propertyId));
    } else {
      setSelectedProperties([...selectedProperties, propertyId]);
    }
  };

  const handleDeleteProperty = async (propertyId) => {
    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        throw new Error('You are not logged in. Please login to delete properties.');
      }

      const response = await fetch(`${API_URL}/${propertyId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete the property.');
      }

      // Remove the deleted property from the list
      setProperties((prev) => prev.filter((property) => property.id !== propertyId));
      setSelectedProperties((prev) => prev.filter((id) => id !== propertyId));
      alert('Property deleted successfully.');
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading properties...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="max-w-md bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-lg font-semibold text-red-600">Error</h3>
          <p className="text-sm text-gray-600 mt-2">{error}</p>
          <button
            onClick={fetchProperties}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Manage Properties</h1>
            <button
              onClick={onBackToDashboard}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-sm border mb-6">
          <div className="px-6 py-4 border-b">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700 font-medium">
                  {properties.length} Properties
                </span>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">Select All</span>
                </div>
                {selectedProperties.length > 0 && (
                  <button
                    onClick={() => {
                      selectedProperties.forEach((id) => handleDeleteProperty(id));
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm font-medium"
                  >
                    Delete Selected
                  </button>
                )}
              </div>
              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="price-low">Price: Low to High</option>
                </select>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Property Details</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Actions</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((property) => (
                  <tr key={property.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-4">
                        <input
                          type="checkbox"
                          checked={selectedProperties.includes(property.id)}
                          onChange={() => handleSelectProperty(property.id)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <div className="flex-1">
                          <h3 className="text-sm font-medium text-gray-900">{property.title}</h3>
                          <p className="text-sm text-gray-500">{property.location}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => navigate(`/edit-property/${property.id}`)}
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteProperty(property.id)}
                        className="ml-4 text-red-600 hover:text-red-800 text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ManagePropertyIntegration;