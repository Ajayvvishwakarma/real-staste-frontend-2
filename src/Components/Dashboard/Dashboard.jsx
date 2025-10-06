// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import UpperFooter from '../UpperFooter';
// import LowerFooter from '../LowerFooter';
// import Dash_nav from './Dash_nav';
// import Manage_Property from './Manage_Property';
// import Profile from './Profile';
// import Change_password from './Change_password';
// import Remove_account from './Remove_account';
// import AllProducts from './AllProducts';
// import EMailers from './EMailers';
// import Banners from './Banners';
// import AllListings from './AllListings';
// import PlainListings from './PlainListings';
// import BasicListings from './BasicListings';
// import PlatinumListings from './PlatinumListings';
// import PremiumListings from './PremiumListings';
// import AllLeads from './AllLeads';
// import GetLeads from './GetLeads';
// import SubscriptionStatus from './SubscriptionStatus';

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

// const Dashboard = () => {
//   const [userInfo, setUserInfo] = useState(null);
//   const [isLoggingOut, setIsLoggingOut] = useState(false);
//   const [currentView, setCurrentView] = useState('dashboard');
  
//   // Dropdown states for sidebar sections
//   const [manageInventoryOpen, setManageInventoryOpen] = useState(false);
//   const [manageResponsesOpen, setManageResponsesOpen] = useState(false);
//   const [getLeadsDropdownOpen, setGetLeadsDropdownOpen] = useState(false);
//   const [subscriptionDropdownOpen, setSubscriptionDropdownOpen] = useState(false);
//   const [allProductsDropdownOpen, setAllProductsDropdownOpen] = useState(false);
//   const [emailersDropdownOpen, setEmailersDropdownOpen] = useState(false);
//   const [bannersDropdownOpen, setBannersDropdownOpen] = useState(false);
//   const [allListingsDropdownOpen, setAllListingsDropdownOpen] = useState(false);
//   const [plainListingsDropdownOpen, setPlainListingsDropdownOpen] = useState(false);
//   const [basicListingsDropdownOpen, setBasicListingsDropdownOpen] = useState(false);
//   const [platinumListingsDropdownOpen, setPlatinumListingsDropdownOpen] = useState(false);
//   const [premiumListingsDropdownOpen, setPremiumListingsDropdownOpen] = useState(false);
  
//   const navigate = useNavigate();

//   // Function to refresh user info
//   const refreshUserInfo = async () => {
//     try {
//       const storedUserInfo = localStorage.getItem('user_info');
//       if (storedUserInfo) {
//         const user = JSON.parse(storedUserInfo);
//         setUserInfo(user);
//       } else {
//         const user = getUserInfo();
//         setUserInfo(user);
//       }
//     } catch (error) {
//       console.error('Error refreshing user info:', error);
//       const user = getUserInfo();
//       setUserInfo(user);
//     }
//   };

//   useEffect(() => {
//     if (!isAuthenticated()) {
//       navigate('/login');
//       return;
//     }
//     const user = getUserInfo();
//     setUserInfo(user);
//   }, [navigate]);

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

//   // Event handlers
//   const handleDashboardClick = () => setCurrentView('dashboard');
//   const handleChangePasswordClick = () => setCurrentView('change-password');

//   // Helper function to render the standard layout with sidebar and navbar
//   const renderStandardLayout = (content) => {
//     return (
//       <div className="min-h-screen bg-gray-100 flex">
//         {/* Sidebar */}
//         <aside className="w-64 bg-slate-700 text-white shadow-lg fixed left-0 top-0 h-full z-40">
//           <nav className="h-full flex flex-col p-4">
//             <div className="mb-8 pb-4 border-b border-slate-600">
//               <h2 className="text-xl font-bold text-center">Dashboard</h2>
//             </div>
            
//             <div className="flex-1 space-y-8">
//               {/* MANAGE INVENTORY */}
//               <div className="mb-6">
//                 <button 
//                   onClick={() => setManageInventoryOpen(!manageInventoryOpen)}
//                   className="flex items-center justify-between w-full text-sm font-semibold text-gray-200 mb-3 uppercase tracking-wide hover:text-white transition-colors"
//                 >
//                   MANAGE INVENTORY
//                   <svg 
//                     className={`w-4 h-4 transform transition-transform duration-200 ${manageInventoryOpen ? 'rotate-180' : ''}`}
//                     fill="currentColor" 
//                     viewBox="0 0 20 20"
//                   >
//                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </button>
//                 <div className={`overflow-hidden transition-all duration-300 ease-in-out ${manageInventoryOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
//                   <ul className="space-y-1 text-sm">
//                     <li>
//                       <button 
//                         onClick={() => setAllProductsDropdownOpen(!allProductsDropdownOpen)}
//                         className="flex items-center justify-between w-full text-left px-3 py-2 rounded hover:bg-slate-600 transition-colors"
//                       >
//                         All Products
//                         <svg 
//                           className={`w-3 h-3 transform transition-transform duration-200 ${allProductsDropdownOpen ? 'rotate-180' : ''}`}
//                           fill="currentColor" 
//                           viewBox="0 0 20 20"
//                         >
//                           <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                         </svg>
//                       </button>
//                       <div className={`overflow-hidden transition-all duration-300 ease-in-out ${allProductsDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
//                         <ul className="ml-4 mt-1 space-y-1">
//                           <li><button onClick={() => setCurrentView('active-products')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Active Products</button></li>
//                           <li><button onClick={() => setCurrentView('inactive-products')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Inactive Products</button></li>
//                           <li><button onClick={() => setCurrentView('product-history')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Product History</button></li>
//                         </ul>
//                       </div>
//                     </li>
//                     <li>
//                       <button 
//                         onClick={() => setEmailersDropdownOpen(!emailersDropdownOpen)}
//                         className="flex items-center justify-between w-full text-left px-3 py-2 rounded hover:bg-slate-600 transition-colors"
//                       >
//                         E-Mailers
//                         <svg 
//                           className={`w-3 h-3 transform transition-transform duration-200 ${emailersDropdownOpen ? 'rotate-180' : ''}`}
//                           fill="currentColor" 
//                           viewBox="0 0 20 20"
//                         >
//                           <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                         </svg>
//                       </button>
//                       <div className={`overflow-hidden transition-all duration-300 ease-in-out ${emailersDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
//                         <ul className="ml-4 mt-1 space-y-1">
//                           <li><button onClick={() => setCurrentView('create-emailer')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Create E-Mailer</button></li>
//                           <li><button onClick={() => setCurrentView('active-campaigns')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Active Campaigns</button></li>
//                           <li><button onClick={() => setCurrentView('campaign-history')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Campaign History</button></li>
//                           <li><button onClick={() => setCurrentView('email-templates')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Templates</button></li>
//                         </ul>
//                       </div>
//                     </li>
//                     <li>
//                       <button 
//                         onClick={() => setBannersDropdownOpen(!bannersDropdownOpen)}
//                         className="flex items-center justify-between w-full text-left px-3 py-2 rounded hover:bg-slate-600 transition-colors"
//                       >
//                         Banners
//                         <svg 
//                           className={`w-3 h-3 transform transition-transform duration-200 ${bannersDropdownOpen ? 'rotate-180' : ''}`}
//                           fill="currentColor" 
//                           viewBox="0 0 20 20"
//                         >
//                           <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                         </svg>
//                       </button>
//                       <div className={`overflow-hidden transition-all duration-300 ease-in-out ${bannersDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
//                         <ul className="ml-4 mt-1 space-y-1">
//                           <li><button onClick={() => setCurrentView('create-banner')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Create Banner</button></li>
//                           <li><button onClick={() => setCurrentView('active-banners')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Active Banners</button></li>
//                           <li><button onClick={() => setCurrentView('banner-history')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Banner History</button></li>
//                           <li><button onClick={() => setCurrentView('banner-performance')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Performance</button></li>
//                         </ul>
//                       </div>
//                     </li>
//                     <li>
//                       <button 
//                         onClick={() => setAllListingsDropdownOpen(!allListingsDropdownOpen)}
//                         className="flex items-center justify-between w-full text-left px-3 py-2 rounded hover:bg-slate-600 transition-colors"
//                       >
//                         All Listings
//                         <svg 
//                           className={`w-3 h-3 transform transition-transform duration-200 ${allListingsDropdownOpen ? 'rotate-180' : ''}`}
//                           fill="currentColor" 
//                           viewBox="0 0 20 20"
//                         >
//                           <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                         </svg>
//                       </button>
//                       <div className={`overflow-hidden transition-all duration-300 ease-in-out ${allListingsDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
//                         <ul className="ml-4 mt-1 space-y-1">
//                           <li><button onClick={() => setCurrentView('active-listings-detailed')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">✅ Active Listings (19)</button></li>
//                           <li><button onClick={() => setCurrentView('inactive-listings-detailed')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">❌ Inactive Listings</button></li>
//                           <li><button onClick={() => setCurrentView('pending-approval-listings')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">⏳ Pending Approval (4)</button></li>
//                           <li><button onClick={() => setCurrentView('expired-listings')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">⏳ Expired Listings</button></li>
//                         </ul>
//                       </div>
//                     </li>
//                     <li>
//                       <button 
//                         onClick={() => setPlainListingsDropdownOpen(!plainListingsDropdownOpen)}
//                         className="flex items-center justify-between w-full text-left px-3 py-2 rounded hover:bg-slate-600 transition-colors"
//                       >
//                         Plain Listings
//                         <svg 
//                           className={`w-3 h-3 transform transition-transform duration-200 ${plainListingsDropdownOpen ? 'rotate-180' : ''}`}
//                           fill="currentColor" 
//                           viewBox="0 0 20 20"
//                         >
//                           <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                         </svg>
//                       </button>
//                       <div className={`overflow-hidden transition-all duration-300 ease-in-out ${plainListingsDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
//                         <ul className="ml-4 mt-1 space-y-1">
//                           <li><button onClick={() => setCurrentView('active-plain')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Active Plain</button></li>
//                           <li><button onClick={() => setCurrentView('inactive-plain')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Inactive Plain</button></li>
//                           <li><button onClick={() => setCurrentView('upgrade-to-basic')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Upgrade to Basic</button></li>
//                         </ul>
//                       </div>
//                     </li>
//                     <li>
//                       <button 
//                         onClick={() => setBasicListingsDropdownOpen(!basicListingsDropdownOpen)}
//                         className="flex items-center justify-between w-full text-left px-3 py-2 rounded hover:bg-slate-600 transition-colors"
//                       >
//                         Basic Listings
//                         <svg 
//                           className={`w-3 h-3 transform transition-transform duration-200 ${basicListingsDropdownOpen ? 'rotate-180' : ''}`}
//                           fill="currentColor" 
//                           viewBox="0 0 20 20"
//                         >
//                           <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                         </svg>
//                       </button>
//                       <div className={`overflow-hidden transition-all duration-300 ease-in-out ${basicListingsDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
//                         <ul className="ml-4 mt-1 space-y-1">
//                           <li><button onClick={() => setCurrentView('active-basic')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Active Basic</button></li>
//                           <li><button onClick={() => setCurrentView('inactive-basic')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Inactive Basic</button></li>
//                           <li><button onClick={() => setCurrentView('upgrade-to-platinum')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Upgrade to Platinum</button></li>
//                         </ul>
//                       </div>
//                     </li>
//                     <li>
//                       <button 
//                         onClick={() => setPlatinumListingsDropdownOpen(!platinumListingsDropdownOpen)}
//                         className="flex items-center justify-between w-full text-left px-3 py-2 rounded hover:bg-slate-600 transition-colors"
//                       >
//                         Platinum Listings
//                         <svg 
//                           className={`w-3 h-3 transform transition-transform duration-200 ${platinumListingsDropdownOpen ? 'rotate-180' : ''}`}
//                           fill="currentColor" 
//                           viewBox="0 0 20 20"
//                         >
//                           <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                         </svg>
//                       </button>
//                       <div className={`overflow-hidden transition-all duration-300 ease-in-out ${platinumListingsDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
//                         <ul className="ml-4 mt-1 space-y-1">
//                           <li><button onClick={() => setCurrentView('active-platinum')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Active Platinum</button></li>
//                           <li><button onClick={() => setCurrentView('inactive-platinum')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Inactive Platinum</button></li>
//                           <li><button onClick={() => setCurrentView('upgrade-to-premium')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Upgrade to Premium</button></li>
//                           <li><button onClick={() => setCurrentView('performance-analytics')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Performance Analytics</button></li>
//                         </ul>
//                       </div>
//                     </li>
//                     <li>
//                       <button 
//                         onClick={() => setPremiumListingsDropdownOpen(!premiumListingsDropdownOpen)}
//                         className="flex items-center justify-between w-full text-left px-3 py-2 rounded hover:bg-slate-600 transition-colors"
//                       >
//                         Premium Listings
//                         <svg 
//                           className={`w-3 h-3 transform transition-transform duration-200 ${premiumListingsDropdownOpen ? 'rotate-180' : ''}`}
//                           fill="currentColor" 
//                           viewBox="0 0 20 20"
//                         >
//                           <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                         </svg>
//                       </button>
//                       <div className={`overflow-hidden transition-all duration-300 ease-in-out ${premiumListingsDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
//                         <ul className="ml-4 mt-1 space-y-1">
//                           <li><button onClick={() => setCurrentView('active-premium')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Active Premium</button></li>
//                           <li><button onClick={() => setCurrentView('inactive-premium')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Inactive Premium</button></li>
//                           <li><button onClick={() => setCurrentView('premium-analytics')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Premium Analytics</button></li>
//                           <li><button onClick={() => setCurrentView('vip-support')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">VIP Support</button></li>
//                         </ul>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               {/* MANAGE RESPONSES */}
//               <div className="mb-6">
//                 <button 
//                   onClick={() => setManageResponsesOpen(!manageResponsesOpen)}
//                   className="flex items-center justify-between w-full text-sm font-semibold text-gray-200 mb-3 uppercase tracking-wide hover:text-white transition-colors"
//                 >
//                   MANAGE RESPONSES
//                   <svg 
//                     className={`w-4 h-4 transform transition-transform duration-200 ${manageResponsesOpen ? 'rotate-180' : ''}`}
//                     fill="currentColor" 
//                     viewBox="0 0 20 20"
//                   >
//                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </button>
//                 <div className={`overflow-hidden transition-all duration-300 ease-in-out ${manageResponsesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
//                   <ul className="space-y-1 text-sm">
//                     <li><button onClick={() => setCurrentView('all-products')} className="block w-full text-left px-3 py-2 rounded hover:bg-slate-600 transition-colors">All Products</button></li>
//                     <li><button onClick={() => setCurrentView('emailers')} className="block w-full text-left px-3 py-2 rounded hover:bg-slate-600 transition-colors">E-Mailers</button></li>
//                     <li><button onClick={() => setCurrentView('all-listings')} className="block w-full text-left px-3 py-2 rounded hover:bg-slate-600 transition-colors">All Listings</button></li>
//                     <li><button onClick={() => setCurrentView('basic-listings')} className="block w-full text-left px-3 py-2 rounded hover:bg-slate-600 transition-colors">Basic Listings</button></li>
//                     <li><button onClick={() => setCurrentView('plain-listings')} className="block w-full text-left px-3 py-2 rounded hover:bg-slate-600 transition-colors">Plain Listings</button></li>
//                     <li><button onClick={() => setCurrentView('platinum-listings')} className="block w-full text-left px-3 py-2 rounded hover:bg-slate-600 transition-colors">Platinum Listings</button></li>
//                     <li><button onClick={() => setCurrentView('premium-listings')} className="block w-full text-left px-3 py-2 rounded hover:bg-slate-600 transition-colors">Premium Listings</button></li>
//                     <li><button onClick={() => setCurrentView('all-leads')} className="block w-full text-left px-3 py-2 rounded hover:bg-slate-600 transition-colors">All Leads</button></li>
//                   </ul>
//                 </div>
//               </div>

//               {/* Other Options */}
//               <div className="space-y-2 text-sm">
//                 {/* Get Leads Dropdown */}
//                 <div className="mb-2">
//                   <button 
//                     onClick={() => setGetLeadsDropdownOpen(!getLeadsDropdownOpen)}
//                     className="flex items-center justify-between w-full text-left px-3 py-2 rounded hover:bg-slate-600 transition-colors"
//                   >
//                     Get Leads
//                     <svg 
//                       className={`w-4 h-4 transform transition-transform duration-200 ${getLeadsDropdownOpen ? 'rotate-180' : ''}`}
//                       fill="currentColor" 
//                       viewBox="0 0 20 20"
//                     >
//                       <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </button>
//                   <div className={`overflow-hidden transition-all duration-300 ease-in-out ${getLeadsDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
//                     <ul className="ml-4 mt-1 space-y-1">
//                       <li><button onClick={() => setCurrentView('lead-packages')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Lead Packages</button></li>
//                       <li><button onClick={() => setCurrentView('targeted-campaigns')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Targeted Campaigns</button></li>
//                       <li><button onClick={() => setCurrentView('lead-history')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Lead History</button></li>
//                       <li><button onClick={() => setCurrentView('success-stories')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Success Stories</button></li>
//                     </ul>
//                   </div>
//                 </div>
                
//                 {/* Subscription Status Dropdown */}
//                 <div className="mb-2">
//                   <button 
//                     onClick={() => setSubscriptionDropdownOpen(!subscriptionDropdownOpen)}
//                     className="flex items-center justify-between w-full text-left px-3 py-2 rounded hover:bg-slate-600 transition-colors"
//                   >
//                     Subscription Status
//                     <svg 
//                       className={`w-4 h-4 transform transition-transform duration-200 ${subscriptionDropdownOpen ? 'rotate-180' : ''}`}
//                       fill="currentColor" 
//                       viewBox="0 0 20 20"
//                     >
//                       <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </button>
//                   <div className={`overflow-hidden transition-all duration-300 ease-in-out ${subscriptionDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
//                     <ul className="ml-4 mt-1 space-y-1">
//                       <li><button onClick={() => setCurrentView('current-plan')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Current Plan</button></li>
//                       <li><button onClick={() => setCurrentView('upgrade-plans')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Upgrade Plans</button></li>
//                       <li><button onClick={() => setCurrentView('billing-history')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Billing History</button></li>
//                       <li><button onClick={() => setCurrentView('auto-renewal')} className="block w-full text-left px-3 py-1 rounded hover:bg-slate-600 transition-colors text-gray-300">Auto-Renewal</button></li>
//                     </ul>
//                   </div>
//                 </div>
//                 <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Manage Payments</a>
//                 <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Credit Usage History</a>
//                 <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Upgrade History</a>
//               </div>

//             </div>
//           </nav>
//         </aside>
        
//         {/* Main Content Area with Navbar */}
//         <div className="flex-1 ml-64">
//           <Dash_nav userInfo={userInfo} onChangePasswordClick={handleChangePasswordClick} />
//           <div className="p-6">
//             {content}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   if (!userInfo) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   // Special views with their own layout
//   if (currentView === 'manage-properties') {
//     return renderStandardLayout(<Manage_Property onBackToDashboard={handleDashboardClick} />);
//   }

//   if (currentView === 'change-password') {
//     return renderStandardLayout(<Change_password onBackToDashboard={handleDashboardClick} />);
//   }

//   if (currentView === 'remove-account') {
//     return renderStandardLayout(<Remove_account onBackToDashboard={handleDashboardClick} />);
//   }

//   if (currentView === 'profile') {
//     return renderStandardLayout(
//       <>
//         <Profile onProfileUpdate={refreshUserInfo} />
//         <UpperFooter />
//       </>
//     );
//   }

//   // Inventory management views
//   if (currentView === 'all-products') {
//     return renderStandardLayout(<AllProducts onBackToDashboard={handleDashboardClick} />);
//   }

//   if (currentView === 'emailers') {
//     return renderStandardLayout(<EMailers onBackToDashboard={handleDashboardClick} />);
//   }

//   if (currentView === 'banners') {
//     return renderStandardLayout(<Banners onBackToDashboard={handleDashboardClick} />);
//   }

//   if (currentView === 'all-listings') {
//     return renderStandardLayout(<AllListings onBackToDashboard={handleDashboardClick} />);
//   }

//   if (currentView === 'plain-listings') {
//     return renderStandardLayout(<PlainListings onBackToDashboard={handleDashboardClick} />);
//   }

//   if (currentView === 'basic-listings') {
//     return renderStandardLayout(<BasicListings onBackToDashboard={handleDashboardClick} />);
//   }

//   if (currentView === 'platinum-listings') {
//     return renderStandardLayout(<PlatinumListings onBackToDashboard={handleDashboardClick} />);
//   }

//   if (currentView === 'premium-listings') {
//     return renderStandardLayout(<PremiumListings onBackToDashboard={handleDashboardClick} />);
//   }

//   if (currentView === 'all-leads') {
//     return renderStandardLayout(<AllLeads onBackToDashboard={handleDashboardClick} />);
//   }

//   if (currentView === 'get-leads') {
//     return renderStandardLayout(<GetLeads onBackToDashboard={handleDashboardClick} />);
//   }

//   if (currentView === 'subscription-status') {
//     return renderStandardLayout(<SubscriptionStatus onBackToDashboard={handleDashboardClick} />);
//   }

//   // Simple placeholder views
//   const simpleViews = [
//     'lead-packages', 'targeted-campaigns', 'lead-history', 'success-stories',
//     'current-plan', 'upgrade-plans', 'billing-history', 'auto-renewal',
//     'active-products', 'inactive-products', 'product-history',
//     'create-emailer', 'active-campaigns', 'campaign-history', 'email-templates',
//     'create-banner', 'active-banners', 'banner-history', 'banner-performance',
//     'active-listings-detailed', 'inactive-listings-detailed', 'pending-approval-listings', 'expired-listings',
//     'active-plain', 'inactive-plain', 'upgrade-to-basic',
//     'active-basic', 'inactive-basic', 'upgrade-to-platinum',
//     'active-platinum', 'inactive-platinum', 'upgrade-to-premium', 'performance-analytics',
//     'active-premium', 'inactive-premium', 'premium-analytics', 'vip-support'
//   ];

//   if (simpleViews.includes(currentView)) {
//     const viewTitle = currentView.split('-').map(word => 
//       word.charAt(0).toUpperCase() + word.slice(1)
//     ).join(' ');
    
//     return renderStandardLayout(
//       <div className="bg-white rounded-lg shadow-sm p-6">
//         <div className="flex items-center mb-4">
//           <button onClick={handleDashboardClick} className="mr-4 text-blue-600 hover:text-blue-800">
//             ← Back to Dashboard
//           </button>
//           <h1 className="text-2xl font-bold text-gray-900">{viewTitle}</h1>
//         </div>
//         <p className="text-gray-600">{viewTitle} functionality will be implemented here.</p>
//       </div>
//     );
//   }

//   // Main Dashboard Layout
//   return renderStandardLayout(
//     <>
//       {/* Welcome Section */}
//       <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
//         <div className="flex justify-between items-start">
//           <div>
//             <h1 className="text-2xl font-bold text-gray-900 mb-2">
//               Maximize your business with Bhoomi The Real Estate.com <span className="text-blue-600">Utilize our offerings</span>
//             </h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//               <div>
//                 <h3 className="font-semibold text-gray-800 mb-2">Track responses instantly</h3>
//                 <p className="text-gray-600 text-sm mb-4">everywhere. Download our award winning app.</p>
//                 <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
//                   Responses on the go
//                 </button>
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-800 mb-2">Having trouble in getting inquiries on your featured</h3>
//                 <p className="text-gray-600 text-sm mb-4">features. Click here for FAQ section.</p>
//                 <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
//                   FAQ Section
//                 </button>
//               </div>
//             </div>
//           </div>
//           {/* Bhoomi The Real Estate Assistant */}
//           <div className="bg-blue-600 text-white p-4 rounded-lg ml-6">
//             <div className="flex items-center mb-2">
//               <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
//                 <span className="text-blue-600 font-bold">?</span>
//               </div>
//               <span className="font-semibold">Bhoomi The Real Estate Assistant</span>
//             </div>
//             <p className="text-sm mb-3">Tell me how I can help you today?</p>
//             <div className="space-y-2 text-xs">
//               <button className="block w-full text-left bg-blue-500 hover:bg-blue-400 px-3 py-2 rounded transition-colors">
//                 Get listing plan
//               </button>
//               <button className="block w-full text-left bg-blue-500 hover:bg-blue-400 px-3 py-2 rounded transition-colors">
//                 How to sell/rent out my property fast?
//               </button>
//               <button className="block w-full text-left bg-blue-500 hover:bg-blue-400 px-3 py-2 rounded transition-colors">
//                 Post Property For FREE
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//         {/* Post property and get instant leads */}
//         <div className="bg-white rounded-lg shadow-sm p-6 text-center">
//           <div className="mb-4">
//             <svg className="w-12 h-12 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
//             </svg>
//           </div>
//           <h3 className="font-semibold text-gray-800 mb-2">Post property and get instant leads</h3>
//           <p className="text-gray-600 text-sm mb-4">On Bhoomi The Real Estate.com</p>
//           <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
//             Post property for FREE
//           </button>
//         </div>

//         {/* See responses on the go */}
//         <div className="bg-white rounded-lg shadow-sm p-6 text-center">
//           <div className="mb-4">
//             <svg className="w-12 h-12 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
//             </svg>
//           </div>
//           <h3 className="font-semibold text-gray-800 mb-2">See responses on the go</h3>
//           <p className="text-gray-600 text-sm mb-4">On Bhoomi The Real Estate mobile app</p>
//           <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
//             Get mobile app
//           </button>
//         </div>

//         {/* Need help with any feature */}
//         <div className="bg-white rounded-lg shadow-sm p-6 text-center">
//           <div className="mb-4">
//             <svg className="w-12 h-12 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
//             </svg>
//           </div>
//           <h3 className="font-semibold text-gray-800 mb-2">Need help with any feature?</h3>
//           <p className="text-gray-600 text-sm mb-4">Get help from FAQ section</p>
//           <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
//             See FAQ section
//           </button>
//         </div>
//       </div>

//       {/* Contact Information */}
//       <div className="bg-white rounded-lg shadow-sm p-6">
//         <h3 className="font-semibold text-gray-800 mb-4">FOR QUERIES YOU CAN REACH US AT:</h3>
//         <div className="space-y-3 text-sm">
//           <div className="flex items-center">
//             <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
//             </svg>
//             <span>Call us at: +8601 99099</span>
//           </div>
//           <div className="flex items-center">
//             <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
//             </svg>
//             <span>Mail us for Sales/Service/General Enquiries: service@BhoomiTheRealEstate.com</span>
//           </div>
//           <div className="flex items-center">
//             <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
//             </svg>
//             <span>Request for information: Ask us for information about our services</span>
//           </div>
//         </div>
//         <p className="text-xs text-gray-500 mt-4">Office & Locations - Click here for Branch Address</p>
//       </div>
//     </>
//   );
// };

// export default Dashboard;











import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Optionally fetch notifications/userInfo from backend APIs if needed

const DashNavIntegration = ({ userInfo, onChangePasswordClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const navigate = useNavigate();

  // Fallback user data if userInfo is not provided
  const user = userInfo || {
    name: 'User',
    email: 'user@example.com',
    avatar: null
  };

  // You could fetch notifications from an API here if needed
  const notifications = [
    { id: 1, title: 'New Lead Received', message: 'You have a new inquiry for your property', time: '5 min ago', unread: true },
    { id: 2, title: 'Property View Alert', message: 'Your property was viewed 25 times today', time: '1 hour ago', unread: true },
    { id: 3, title: 'Payment Confirmation', message: 'Your subscription payment was successful', time: '2 hours ago', unread: false },
  ];

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_info');
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 w-full">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search properties, leads, or clients..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Right side - Actions and Profile */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg relative"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9zM13.73 21a2 2 0 01-3.46 0" />
                </svg>
                {notifications.filter(n => n.unread).length > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications.filter(n => n.unread).length}
                  </span>
                )}
              </button>
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div key={notification.id} className={`p-4 border-b border-gray-100 hover:bg-gray-50 ${notification.unread ? 'bg-blue-50' : ''}`}>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                            <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
                          </div>
                          {notification.unread && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-1"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 border-t border-gray-200">
                    <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>
            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="hidden md:block text-left">
                  <div className="text-sm font-medium text-gray-900">{user.name}</div>
                  <div className="text-xs text-gray-500">{user.email}</div>
                </div>
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    <button 
                      onClick={() => navigate('/dashboard/profile')}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <svg className="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      View Profile
                    </button>
                    <button 
                      onClick={() => {
                        setIsProfileDropdownOpen(false);
                        if (onChangePasswordClick) {
                          onChangePasswordClick();
                        } else {
                          navigate('/dashboard/account');
                        }
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <svg className="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Change Password
                    </button>
                    <div className="border-t border-gray-100"></div>
                    <button 
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                    >
                      <svg className="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Close dropdowns when clicking outside */}
      {(isProfileDropdownOpen || isNotificationsOpen) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setIsProfileDropdownOpen(false);
            setIsNotificationsOpen(false);
          }}
        ></div>
      )}
    </nav>
  );
};

export default DashNavIntegration;