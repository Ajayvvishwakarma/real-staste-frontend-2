// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getUserInfo, isAuthenticated, getMockAdminStats } from '../../utils/api';
// import Admin_Navbar from './Admin_Navbar';
// import Admin_Sidebar from './Admin_Sidebar';
// import {
//   HomeIcon,
//   BuildingOfficeIcon,
//   UsersIcon,
//   ChartBarIcon,
//   CogIcon,
//   ClockIcon,
//   CheckCircleIcon,
//   ExclamationTriangleIcon,
//   ArrowTrendingUpIcon,
//   BanknotesIcon,
//   EyeIcon,
//   PhoneIcon
// } from '@heroicons/react/24/outline';

// const Admin_Dashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
//   const [dashboardData, setDashboardData] = useState({
//     totalUsers: 0,
//     totalProperties: 0,
//     pendingApprovals: 0,
//     totalAppointments: 0,
//     totalContacts: 0,
//     totalAgents: 0,
//     totalRevenue: 0,
//     monthlyGrowth: 0,
//     activeListings: 0,
//     premiumUsers: 0,
//     recentActivities: [],
//     topPerformingAgents: [],
//     propertyStats: {
//       residential: 0,
//       commercial: 0,
//       plots: 0
//     },
//     revenueData: [],
//     leadConversion: 0
//   });
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const userInfo = getUserInfo();

//   useEffect(() => {
//     // Check if user is authenticated
//     if (!isAuthenticated()) {
//       navigate('/login');
//       return;
//     }

//     // Load dashboard data
//     loadDashboardData();
    
//     // Handle responsive layout
//     const handleResize = () => {
//       setIsLargeScreen(window.innerWidth >= 1024);
//     };
    
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [navigate]);

//   const loadDashboardData = async () => {
//     try {
//       setLoading(true);
      
//       // Load mock data from admin stats
//       const data = await getMockAdminStats();
      
//       setDashboardData({
//         totalUsers: data.total_users || 1250,
//         totalProperties: data.total_properties || 380,
//         pendingApprovals: data.pending_approvals || 12,
//         totalAppointments: data.total_inquiries || 620,
//         totalContacts: data.total_inquiries || 620,
//         totalAgents: data.total_agents || 45,
//         totalRevenue: 2450000,
//         monthlyGrowth: 15.3,
//         activeListings: 342,
//         premiumUsers: 89,
//         leadConversion: 24.5,
//         propertyStats: {
//           residential: 450,
//           commercial: 100,
//           plots: 80
//         },
//         revenueData: [
//           { day: 'Mon', amount: 35000 },
//           { day: 'Tue', amount: 42000 },
//           { day: 'Wed', amount: 28000 },
//           { day: 'Thu', amount: 51000 },
//           { day: 'Fri', amount: 38000 },
//           { day: 'Sat', amount: 47000 },
//           { day: 'Sun', amount: 55000 }
//         ],
//         topPerformingAgents: [
//           { name: 'Rajesh Kumar', properties: 25, revenue: 125000, growth: 18 },
//           { name: 'Priya Sharma', properties: 22, revenue: 110000, growth: 15 },
//           { name: 'Amit Singh', properties: 20, revenue: 98000, growth: 12 },
//           { name: 'Neha Gupta', properties: 18, revenue: 89000, growth: 10 }
//         ],
//         recentActivities: [
//           {
//             id: 1,
//             type: 'User Registration',
//             message: 'New user registered: john@example.com',
//             time: '30 minutes ago',
//             status: 'success',
//             icon: 'user'
//           },
//           {
//             id: 2,
//             type: 'Property Listing',
//             message: 'New property listed in Mumbai - 3BHK Apartment',
//             time: '1 hour ago',
//             status: 'info',
//             icon: 'property'
//           },
//           {
//             id: 3,
//             type: 'Inquiry',
//             message: 'New inquiry for office space in Bangalore',
//             time: '2 hours ago',
//             status: 'info',
//             icon: 'inquiry'
//           },
//           {
//             id: 4,
//             type: 'Payment',
//             message: 'Premium subscription renewed - ₹5,000',
//             time: '3 hours ago',
//             status: 'success',
//             icon: 'payment'
//           },
//           {
//             id: 5,
//             type: 'Approval',
//             message: 'Property approved for listing in Delhi',
//             time: '4 hours ago',
//             status: 'success',
//             icon: 'approval'
//           }
//         ]
//       });
      
//     } catch (error) {
//       console.error('Error loading dashboard data:', error);
//       // Set default data if mock fails
//       setDashboardData({
//         totalUsers: 1250,
//         totalProperties: 380,
//         pendingApprovals: 12,
//         totalAppointments: 620,
//         totalContacts: 620,
//         totalAgents: 45,
//         recentActivities: []
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const statCards = [
//     {
//       title: 'Total Users',
//       value: dashboardData.totalUsers,
//       icon: UsersIcon,
//       bgColor: 'bg-blue-500',
//       textColor: 'text-blue-600',
//       bgLight: 'bg-blue-50',
//       change: '+12%',
//       changeType: 'positive'
//     },
//     {
//       title: 'Total Properties',
//       value: dashboardData.totalProperties,
//       icon: BuildingOfficeIcon,
//       bgColor: 'bg-green-500',
//       textColor: 'text-green-600',
//       bgLight: 'bg-green-50',
//       change: '+8%',
//       changeType: 'positive'
//     },
//     {
//       title: 'Pending Approvals',
//       value: dashboardData.pendingApprovals,
//       icon: ClockIcon,
//       bgColor: 'bg-orange-500',
//       textColor: 'text-orange-600',
//       bgLight: 'bg-orange-50',
//       change: '-5%',
//       changeType: 'negative'
//     },
//     {
//       title: 'Monthly Revenue',
//       value: `₹${(dashboardData.totalRevenue / 100000).toFixed(1)}L`,
//       icon: BanknotesIcon,
//       bgColor: 'bg-purple-500',
//       textColor: 'text-purple-600',
//       bgLight: 'bg-purple-50',
//       change: '+15.3%',
//       changeType: 'positive'
//     },
//     {
//       title: 'Active Listings',
//       value: dashboardData.activeListings,
//       icon: EyeIcon,
//       bgColor: 'bg-indigo-500',
//       textColor: 'text-indigo-600',
//       bgLight: 'bg-indigo-50',
//       change: '+6%',
//       changeType: 'positive'
//     },
//     {
//       title: 'Premium Users',
//       value: dashboardData.premiumUsers,
//       icon: CheckCircleIcon,
//       bgColor: 'bg-emerald-500',
//       textColor: 'text-emerald-600',
//       bgLight: 'bg-emerald-50',
//       change: '+20%',
//       changeType: 'positive'
//     }
//   ];

//   const getActivityIcon = (iconType) => {
//     const iconClasses = "w-4 h-4";
    
//     switch (iconType) {
//       case 'user':
//         return (
//           <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//             <UsersIcon className={`${iconClasses} text-blue-600`} />
//           </div>
//         );
//       case 'property':
//         return (
//           <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
//             <BuildingOfficeIcon className={`${iconClasses} text-green-600`} />
//           </div>
//         );
//       case 'inquiry':
//         return (
//           <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
//             <PhoneIcon className={`${iconClasses} text-purple-600`} />
//           </div>
//         );
//       case 'payment':
//         return (
//           <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
//             <BanknotesIcon className={`${iconClasses} text-emerald-600`} />
//           </div>
//         );
//       case 'approval':
//         return (
//           <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
//             <CheckCircleIcon className={`${iconClasses} text-orange-600`} />
//           </div>
//         );
//       default:
//         return (
//           <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
//             <ExclamationTriangleIcon className={`${iconClasses} text-gray-600`} />
//           </div>
//         );
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading admin dashboard...</p>
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
//       <div 
//         className="pt-16 min-h-screen transition-all duration-300" 
//         style={{
//           paddingLeft: isLargeScreen ? '16rem' : '0'
//         }}
//       >
//         <main className="bg-gray-50 min-h-[calc(100vh-4rem)]">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
//             {/* Page header */}
//             <div className="mb-8">
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
//                 <div>
//                   <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
//                   <p className="mt-2 text-gray-600">Welcome back, {userInfo?.email?.split('@')[0] || 'Admin'}! Here's your Bhoomi
// The Real Estate business overview.</p>
//                 </div>
//                 <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row gap-3">
//                   <button className="inline-flex items-center px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-lg shadow-sm border border-gray-300 transition-colors duration-200">
//                     <ArrowTrendingUpIcon className="h-5 w-5 mr-2" />
//                     Export Report
//                   </button>
//                   <button 
//                     onClick={() => navigate('/admin/properties/add')}
//                     className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200"
//                   >
//                     <BuildingOfficeIcon className="h-5 w-5 mr-2" />
//                     Add Property
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-6 mb-8">
//               {statCards.map((card, index) => {
//                 const IconComponent = card.icon;
//                 return (
//                   <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 lg:p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center">
//                         <div className={`flex-shrink-0 ${card.bgLight} p-2 lg:p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
//                           <IconComponent className={`${card.textColor} w-5 h-5 lg:w-6 lg:h-6`} />
//                         </div>
//                         <div className="ml-3 lg:ml-4 min-w-0 flex-1">
//                           <p className="text-xs lg:text-sm font-medium text-gray-600 truncate">{card.title}</p>
//                           <p className="text-lg lg:text-2xl font-bold text-gray-900 mt-1">{typeof card.value === 'number' ? card.value.toLocaleString() : card.value}</p>
//                         </div>
//                       </div>
//                     </div>
//                     {/* Change indicator */}
//                     <div className="mt-3 lg:mt-4 flex items-center justify-between">
//                       <div className="w-full bg-gray-200 rounded-full h-1.5 lg:h-2">
//                         <div className={`h-1.5 lg:h-2 rounded-full ${card.bgColor} transition-all duration-500`} style={{width: `${Math.min((typeof card.value === 'number' ? card.value : 50) / 20, 100)}%`}}></div>
//                       </div>
//                       <span className={`ml-2 text-xs font-medium ${card.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
//                         {card.change}
//                       </span>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Main Dashboard Grid */}
//             <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8 mb-8">
//               {/* Revenue Chart - Takes 2 columns */}
//               <div className="xl:col-span-2">
//                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-full">
//                   <div className="flex items-center justify-between mb-6">
//                     <h3 className="text-lg font-semibold text-gray-900">Revenue Analytics</h3>
//                     <div className="flex items-center space-x-2">
//                       <select className="text-sm border border-gray-300 rounded-lg px-3 py-1 bg-white">
//                         <option>Last 7 days</option>
//                         <option>Last 30 days</option>
//                         <option>Last 3 months</option>
//                       </select>
//                     </div>
//                   </div>
                  
//                   {/* Chart */}
//                   <div className="h-64 flex items-end justify-between space-x-3 mb-4">
//                     {dashboardData.revenueData.map((data, index) => (
//                       <div key={index} className="flex flex-col items-center flex-1">
//                         <div className="relative w-full">
//                           <div 
//                             className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-md transition-all duration-1000 hover:from-blue-600 hover:to-blue-500 cursor-pointer group"
//                             style={{height: `${(data.amount / 60000) * 200}px`}}
//                           >
//                             <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
//                               ₹{(data.amount / 1000).toFixed(0)}K
//                             </div>
//                           </div>
//                         </div>
//                         <span className="text-xs text-gray-500 mt-2 font-medium">{data.day}</span>
//                       </div>
//                     ))}
//                   </div>
                  
//                   {/* Revenue Summary */}
//                   <div className="flex items-center justify-between pt-4 border-t border-gray-200">
//                     <div>
//                       <p className="text-sm text-gray-600">Total Revenue</p>
//                       <p className="text-2xl font-bold text-gray-900">₹{(dashboardData.totalRevenue / 100000).toFixed(1)}L</p>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-sm text-gray-600">Growth</p>
//                       <p className="text-2xl font-bold text-green-600">+{dashboardData.monthlyGrowth}%</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Property Distribution */}
//               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-6">Property Distribution</h3>
//                 <div className="relative h-48 flex items-center justify-center mb-6">
//                   <div className="relative w-32 h-32">
//                     <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
//                       <circle cx="50" cy="50" r="35" fill="none" stroke="#f3f4f6" strokeWidth="8"/>
//                       <circle cx="50" cy="50" r="35" fill="none" stroke="#3b82f6" strokeWidth="8" 
//                         strokeDasharray={`${(dashboardData.propertyStats.residential / (dashboardData.propertyStats.residential + dashboardData.propertyStats.commercial + dashboardData.propertyStats.plots)) * 220} 220`} 
//                         strokeLinecap="round"/>
//                       <circle cx="50" cy="50" r="35" fill="none" stroke="#10b981" strokeWidth="8" 
//                         strokeDasharray={`${(dashboardData.propertyStats.commercial / (dashboardData.propertyStats.residential + dashboardData.propertyStats.commercial + dashboardData.propertyStats.plots)) * 220} 220`} 
//                         strokeDashoffset={`-${(dashboardData.propertyStats.residential / (dashboardData.propertyStats.residential + dashboardData.propertyStats.commercial + dashboardData.propertyStats.plots)) * 220}`}
//                         strokeLinecap="round"/>
//                       <circle cx="50" cy="50" r="35" fill="none" stroke="#f59e0b" strokeWidth="8" 
//                         strokeDasharray={`${(dashboardData.propertyStats.plots / (dashboardData.propertyStats.residential + dashboardData.propertyStats.commercial + dashboardData.propertyStats.plots)) * 220} 220`} 
//                         strokeDashoffset={`-${((dashboardData.propertyStats.residential + dashboardData.propertyStats.commercial) / (dashboardData.propertyStats.residential + dashboardData.propertyStats.commercial + dashboardData.propertyStats.plots)) * 220}`}
//                         strokeLinecap="round"/>
//                     </svg>
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div className="text-center">
//                         <div className="text-2xl font-bold text-gray-900">{dashboardData.propertyStats.residential + dashboardData.propertyStats.commercial + dashboardData.propertyStats.plots}</div>
//                         <div className="text-xs text-gray-500">Total</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="space-y-3">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                       <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
//                       <span className="text-sm text-gray-600">Residential</span>
//                     </div>
//                     <span className="text-sm font-semibold">{dashboardData.propertyStats.residential}</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                       <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
//                       <span className="text-sm text-gray-600">Commercial</span>
//                     </div>
//                     <span className="text-sm font-semibold">{dashboardData.propertyStats.commercial}</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                       <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
//                       <span className="text-sm text-gray-600">Plots/Land</span>
//                     </div>
//                     <span className="text-sm font-semibold">{dashboardData.propertyStats.plots}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Top Performing Agents */}
//               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className="text-lg font-semibold text-gray-900">Top Agents</h3>
//                   <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
//                 </div>
//                 <div className="space-y-4">
//                   {dashboardData.topPerformingAgents.map((agent, index) => (
//                     <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
//                       <div className="flex items-center">
//                         <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
//                           {agent.name.split(' ').map(n => n[0]).join('')}
//                         </div>
//                         <div>
//                           <p className="text-sm font-medium text-gray-900">{agent.name}</p>
//                           <p className="text-xs text-gray-500">{agent.properties} properties</p>
//                         </div>
//                       </div>
//                       <div className="text-right">
//                         <p className="text-sm font-semibold text-gray-900">₹{(agent.revenue / 1000).toFixed(0)}K</p>
//                         <p className="text-xs text-green-600">+{agent.growth}%</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Quick Actions & System Status */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
//               {/* Quick Actions */}
//               <div className="bg-white rounded-xl shadow-sm border border-gray-200">
//                 <div className="px-6 py-4 border-b border-gray-200">
//                   <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
//                 </div>
//                 <div className="p-6">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <button
//                       onClick={() => navigate('/admin/users')}
//                       className="p-4 text-left border border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 group"
//                     >
//                       <div className="flex items-center">
//                         <div className="text-blue-600 mr-3 group-hover:scale-110 transition-transform">
//                           <UsersIcon className="w-6 h-6" />
//                         </div>
//                         <div>
//                           <h4 className="font-medium text-gray-900">Manage Users</h4>
//                           <p className="text-sm text-gray-600">View and manage all users</p>
//                         </div>
//                       </div>
//                     </button>
                    
//                     <button
//                       onClick={() => navigate('/admin/properties/pending')}
//                       className="p-4 text-left border border-gray-200 rounded-xl hover:bg-orange-50 hover:border-orange-300 transition-all duration-200 group"
//                     >
//                       <div className="flex items-center">
//                         <div className="text-orange-600 mr-3 group-hover:scale-110 transition-transform">
//                           <ClockIcon className="w-6 h-6" />
//                         </div>
//                         <div>
//                           <h4 className="font-medium text-gray-900">Approve Properties</h4>
//                           <p className="text-sm text-gray-600">Review pending properties</p>
//                         </div>
//                       </div>
//                     </button>
                    
//                     <button
//                       onClick={() => navigate('/admin/contacts')}
//                       className="p-4 text-left border border-gray-200 rounded-xl hover:bg-green-50 hover:border-green-300 transition-all duration-200 group"
//                     >
//                       <div className="flex items-center">
//                         <div className="text-green-600 mr-3 group-hover:scale-110 transition-transform">
//                           <PhoneIcon className="w-6 h-6" />
//                         </div>
//                         <div>
//                           <h4 className="font-medium text-gray-900">Contact Requests</h4>
//                           <p className="text-sm text-gray-600">Handle customer inquiries</p>
//                         </div>
//                       </div>
//                     </button>

//                     <button
//                       onClick={() => navigate('/admin/analytics')}
//                       className="p-4 text-left border border-gray-200 rounded-xl hover:bg-purple-50 hover:border-purple-300 transition-all duration-200 group"
//                     >
//                       <div className="flex items-center">
//                         <div className="text-purple-600 mr-3 group-hover:scale-110 transition-transform">
//                           <ChartBarIcon className="w-6 h-6" />
//                         </div>
//                         <div>
//                           <h4 className="font-medium text-gray-900">View Analytics</h4>
//                           <p className="text-sm text-gray-600">Detailed reports & insights</p>
//                         </div>
//                       </div>
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* System Status */}
//               <div className="bg-white rounded-xl shadow-sm border border-gray-200">
//                 <div className="px-6 py-4 border-b border-gray-200">
//                   <h3 className="text-lg font-semibold text-gray-900">System Status</h3>
//                 </div>
//                 <div className="p-6">
//                   <div className="space-y-4">
//                     <div className="flex items-center justify-between">
//                       <span className="text-sm text-gray-600">Server Status</span>
//                       <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                         <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></div>
//                         Online
//                       </span>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-sm text-gray-600">Database</span>
//                       <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                         <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></div>
//                         Connected
//                       </span>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-sm text-gray-600">API Status</span>
//                       <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                         <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></div>
//                         Operational
//                       </span>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-sm text-gray-600">Storage Usage</span>
//                       <span className="text-sm text-gray-900 font-medium">68% used</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000" style={{width: '68%'}}></div>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-sm text-gray-600">Lead Conversion Rate</span>
//                       <span className="text-sm font-medium text-green-600">{dashboardData.leadConversion}%</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-1000" style={{width: `${dashboardData.leadConversion}%`}}></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Recent Activity & Notifications */}
//             <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
//               {/* Recent Activity - Takes 2 columns */}
//               <div className="xl:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
//                 <div className="px-6 py-4 border-b border-gray-200">
//                   <div className="flex items-center justify-between">
//                     <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
//                     <div className="flex items-center space-x-2">
//                       <button className="text-sm text-gray-500 hover:text-gray-700">
//                         <FunnelIcon className="w-4 h-4" />
//                       </button>
//                       <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <div className="space-y-4">
//                     {dashboardData.recentActivities.map((activity) => (
//                       <div key={activity.id} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors duration-200">
//                         <div className="flex-shrink-0">
//                           {getActivityIcon(activity.type)}
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <div className="flex items-center justify-between">
//                             <p className="text-sm font-medium text-gray-900 truncate">{activity.message}</p>
//                             <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{activity.time}</span>
//                           </div>
//                           <p className="text-sm text-gray-600 mt-1">User activity in the system</p>
//                           {activity.type === 'payment' && (
//                             <span className="inline-flex items-center mt-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                               Payment Received
//                             </span>
//                           )}
//                           {activity.type === 'approval' && (
//                             <span className="inline-flex items-center mt-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
//                               Pending Approval
//                             </span>
//                           )}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Notifications & Alerts */}
//               <div className="bg-white rounded-xl shadow-sm border border-gray-200">
//                 <div className="px-6 py-4 border-b border-gray-200">
//                   <div className="flex items-center justify-between">
//                     <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
//                     <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Mark All Read</button>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <div className="space-y-4">
//                     {/* Critical Alerts */}
//                     <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-xl">
//                       <div className="flex items-center">
//                         <ExclamationTriangleIcon className="w-5 h-5 text-red-600 mr-2" />
//                         <div className="flex-1">
//                           <p className="text-sm font-medium text-red-800">Server Load High</p>
//                           <p className="text-xs text-red-600 mt-1">CPU usage at 85%</p>
//                         </div>
//                         <span className="text-xs text-red-500">2m ago</span>
//                       </div>
//                     </div>

//                     {/* Warning Alerts */}
//                     <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-r-xl">
//                       <div className="flex items-center">
//                         <ClockIcon className="w-5 h-5 text-yellow-600 mr-2" />
//                         <div className="flex-1">
//                           <p className="text-sm font-medium text-yellow-800">Pending Approvals</p>
//                           <p className="text-xs text-yellow-600 mt-1">23 properties awaiting review</p>
//                         </div>
//                         <span className="text-xs text-yellow-500">15m ago</span>
//                       </div>
//                     </div>

//                     {/* Success Alerts */}
//                     <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-xl">
//                       <div className="flex items-center">
//                         <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2" />
//                         <div className="flex-1">
//                           <p className="text-sm font-medium text-green-800">New Premium Subscription</p>
//                           <p className="text-xs text-green-600 mt-1">Rohit Kumar upgraded to Premium</p>
//                         </div>
//                         <span className="text-xs text-green-500">1h ago</span>
//                       </div>
//                     </div>

//                     {/* Info Alerts */}
//                     <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-xl">
//                       <div className="flex items-center">
//                         <InformationCircleIcon className="w-5 h-5 text-blue-600 mr-2" />
//                         <div className="flex-1">
//                           <p className="text-sm font-medium text-blue-800">Backup Completed</p>
//                           <p className="text-xs text-blue-600 mt-1">Daily backup successfully created</p>
//                         </div>
//                         <span className="text-xs text-blue-500">3h ago</span>
//                       </div>
//                     </div>

//                     {/* Action Required */}
//                     <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-xl">
//                       <div className="flex items-center">
//                         <BellIcon className="w-5 h-5 text-purple-600 mr-2" />
//                         <div className="flex-1">
//                           <p className="text-sm font-medium text-purple-800">License Renewal Due</p>
//                           <p className="text-xs text-purple-600 mt-1">Expires in 7 days</p>
//                         </div>
//                         <span className="text-xs text-purple-500">1d ago</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Notification Stats */}
//                   <div className="mt-6 pt-4 border-t border-gray-200">
//                     <div className="flex items-center justify-between text-sm">
//                       <span className="text-gray-600">Today's Notifications</span>
//                       <span className="font-medium text-gray-900">12</span>
//                     </div>
//                     <div className="flex items-center justify-between text-sm mt-2">
//                       <span className="text-gray-600">Unread</span>
//                       <span className="font-medium text-red-600">5</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Admin_Dashboard;










import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// You can replace these with your backend API endpoints
const API_URL = "http://localhost:8000/api/admin-dashboard";
import Admin_Navbar from './Admin_Navbar';
import Admin_Sidebar from './Admin_Sidebar';
import {
  HomeIcon,
  BuildingOfficeIcon,
  UsersIcon,
  ChartBarIcon,
  CogIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
  EyeIcon,
  PhoneIcon,
  InformationCircleIcon,
  BellIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';

const AdminDashboardIntegration = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate authentication (replace with real auth logic)
    const isAuthenticated = () => true;
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }
    // Load dashboard data
    loadDashboardData();
    // Responsive handler
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [navigate]);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      let data = null;
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch dashboard data");
        data = await res.json();
      } catch (err) {
        // Fallback to static mock data if backend fails
        data = {
          totalUsers: 1250,
          totalProperties: 380,
          pendingApprovals: 12,
          totalAppointments: 620,
          totalContacts: 620,
          totalAgents: 45,
          totalRevenue: 2450000,
          monthlyGrowth: 15.3,
          activeListings: 342,
          premiumUsers: 89,
          leadConversion: 24.5,
          propertyStats: { residential: 450, commercial: 100, plots: 80 },
          revenueData: [
            { day: 'Mon', amount: 35000 },
            { day: 'Tue', amount: 42000 },
            { day: 'Wed', amount: 28000 },
            { day: 'Thu', amount: 51000 },
            { day: 'Fri', amount: 38000 },
            { day: 'Sat', amount: 47000 },
            { day: 'Sun', amount: 55000 }
          ],
          topPerformingAgents: [
            { name: 'Rajesh Kumar', properties: 25, revenue: 125000, growth: 18 },
            { name: 'Priya Sharma', properties: 22, revenue: 110000, growth: 15 },
            { name: 'Amit Singh', properties: 20, revenue: 98000, growth: 12 },
            { name: 'Neha Gupta', properties: 18, revenue: 89000, growth: 10 }
          ],
          recentActivities: [
            { id: 1, type: 'user', message: 'New user registered: john@example.com', time: '30 minutes ago', status: 'success' },
            { id: 2, type: 'property', message: 'New property listed in Mumbai - 3BHK Apartment', time: '1 hour ago', status: 'info' },
            { id: 3, type: 'inquiry', message: 'New inquiry for office space in Bangalore', time: '2 hours ago', status: 'info' },
            { id: 4, type: 'payment', message: 'Premium subscription renewed - ₹5,000', time: '3 hours ago', status: 'success' },
            { id: 5, type: 'approval', message: 'Property approved for listing in Delhi', time: '4 hours ago', status: 'success' }
          ]
        };
      }
      setDashboardData(data);
    } catch (error) {
      setDashboardData(null);
    } finally {
      setLoading(false);
    }
  };

  const statCards = dashboardData ? [
    {
      title: 'Total Users',
      value: dashboardData.totalUsers,
      icon: UsersIcon,
      bgColor: 'bg-blue-500',
      textColor: 'text-blue-600',
      bgLight: 'bg-blue-50',
      change: '+12%',
      changeType: 'positive'
    },
    {
      title: 'Total Properties',
      value: dashboardData.totalProperties,
      icon: BuildingOfficeIcon,
      bgColor: 'bg-green-500',
      textColor: 'text-green-600',
      bgLight: 'bg-green-50',
      change: '+8%',
      changeType: 'positive'
    },
    {
      title: 'Pending Approvals',
      value: dashboardData.pendingApprovals,
      icon: ClockIcon,
      bgColor: 'bg-orange-500',
      textColor: 'text-orange-600',
      bgLight: 'bg-orange-50',
      change: '-5%',
      changeType: 'negative'
    },
    {
      title: 'Monthly Revenue',
      value: `₹${(dashboardData.totalRevenue / 100000).toFixed(1)}L`,
      icon: BanknotesIcon,
      bgColor: 'bg-purple-500',
      textColor: 'text-purple-600',
      bgLight: 'bg-purple-50',
      change: '+15.3%',
      changeType: 'positive'
    },
    {
      title: 'Active Listings',
      value: dashboardData.activeListings,
      icon: EyeIcon,
      bgColor: 'bg-indigo-500',
      textColor: 'text-indigo-600',
      bgLight: 'bg-indigo-50',
      change: '+6%',
      changeType: 'positive'
    },
    {
      title: 'Premium Users',
      value: dashboardData.premiumUsers,
      icon: CheckCircleIcon,
      bgColor: 'bg-emerald-500',
      textColor: 'text-emerald-600',
      bgLight: 'bg-emerald-50',
      change: '+20%',
      changeType: 'positive'
    }
  ] : [];

  const getActivityIcon = (iconType) => {
    const iconClasses = "w-4 h-4";
    switch (iconType) {
      case 'user':
        return (
          <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <UsersIcon className={`${iconClasses} text-blue-600`} />
          </div>
        );
      case 'property':
        return (
          <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <BuildingOfficeIcon className={`${iconClasses} text-green-600`} />
          </div>
        );
      case 'inquiry':
        return (
          <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
            <PhoneIcon className={`${iconClasses} text-purple-600`} />
          </div>
        );
      case 'payment':
        return (
          <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
            <BanknotesIcon className={`${iconClasses} text-emerald-600`} />
          </div>
        );
      case 'approval':
        return (
          <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
            <CheckCircleIcon className={`${iconClasses} text-orange-600`} />
          </div>
        );
      default:
        return (
          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <ExclamationTriangleIcon className={`${iconClasses} text-gray-600`} />
          </div>
        );
    }
  };

  if (loading || !dashboardData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin dashboard...</p>
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
                  <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                  <p className="mt-2 text-gray-600">Welcome back, Admin! Here's your Bhoomi
The Real Estate business overview.</p>
                </div>
                <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row gap-3">
                  <button className="inline-flex items-center px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-lg shadow-sm border border-gray-300 transition-colors duration-200">
                    <ArrowTrendingUpIcon className="h-5 w-5 mr-2" />
                    Export Report
                  </button>
                  <button 
                    onClick={() => navigate('/admin/properties/add')}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200"
                  >
                    <BuildingOfficeIcon className="h-5 w-5 mr-2" />
                    Add Property
                  </button>
                </div>
              </div>
            </div>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-6 mb-8">
              {statCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 lg:p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`flex-shrink-0 ${card.bgLight} p-2 lg:p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`${card.textColor} w-5 h-5 lg:w-6 lg:h-6`} />
                        </div>
                        <div className="ml-3 lg:ml-4 min-w-0 flex-1">
                          <p className="text-xs lg:text-sm font-medium text-gray-600 truncate">{card.title}</p>
                          <p className="text-lg lg:text-2xl font-bold text-gray-900 mt-1">{typeof card.value === 'number' ? card.value.toLocaleString() : card.value}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 lg:mt-4 flex items-center justify-between">
                      <div className="w-full bg-gray-200 rounded-full h-1.5 lg:h-2">
                        <div className={`h-1.5 lg:h-2 rounded-full ${card.bgColor} transition-all duration-500`} style={{width: `${Math.min((typeof card.value === 'number' ? card.value : 50) / 20, 100)}%`}}></div>
                      </div>
                      <span className={`ml-2 text-xs font-medium ${card.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                        {card.change}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8 mb-8">
              <div className="xl:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Revenue Analytics</h3>
                    <div className="flex items-center space-x-2">
                      <select className="text-sm border border-gray-300 rounded-lg px-3 py-1 bg-white">
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                        <option>Last 3 months</option>
                      </select>
                    </div>
                  </div>
                  <div className="h-64 flex items-end justify-between space-x-3 mb-4">
                    {dashboardData.revenueData.map((data, index) => (
                      <div key={index} className="flex flex-col items-center flex-1">
                        <div className="relative w-full">
                          <div 
                            className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-md transition-all duration-1000 hover:from-blue-600 hover:to-blue-500 cursor-pointer group"
                            style={{height: `${(data.amount / 60000) * 200}px`}}
                          >
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                              ₹{(data.amount / 1000).toFixed(0)}K
                            </div>
                          </div>
                        </div>
                        <span className="text-xs text-gray-500 mt-2 font-medium">{data.day}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600">Total Revenue</p>
                      <p className="text-2xl font-bold text-gray-900">₹{(dashboardData.totalRevenue / 100000).toFixed(1)}L</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Growth</p>
                      <p className="text-2xl font-bold text-green-600">+{dashboardData.monthlyGrowth}%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Property Distribution</h3>
                <div className="relative h-48 flex items-center justify-center mb-6">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="35" fill="none" stroke="#f3f4f6" strokeWidth="8"/>
                      <circle cx="50" cy="50" r="35" fill="none" stroke="#3b82f6" strokeWidth="8" 
                        strokeDasharray={`${(dashboardData.propertyStats.residential / (dashboardData.propertyStats.residential + dashboardData.propertyStats.commercial + dashboardData.propertyStats.plots)) * 220} 220`} 
                        strokeLinecap="round"/>
                      <circle cx="50" cy="50" r="35" fill="none" stroke="#10b981" strokeWidth="8" 
                        strokeDasharray={`${(dashboardData.propertyStats.commercial / (dashboardData.propertyStats.residential + dashboardData.propertyStats.commercial + dashboardData.propertyStats.plots)) * 220} 220`} 
                        strokeDashoffset={`-${(dashboardData.propertyStats.residential / (dashboardData.propertyStats.residential + dashboardData.propertyStats.commercial + dashboardData.propertyStats.plots)) * 220}`}
                        strokeLinecap="round"/>
                      <circle cx="50" cy="50" r="35" fill="none" stroke="#f59e0b" strokeWidth="8" 
                        strokeDasharray={`${(dashboardData.propertyStats.plots / (dashboardData.propertyStats.residential + dashboardData.propertyStats.commercial + dashboardData.propertyStats.plots)) * 220} 220`} 
                        strokeDashoffset={`-${((dashboardData.propertyStats.residential + dashboardData.propertyStats.commercial) / (dashboardData.propertyStats.residential + dashboardData.propertyStats.commercial + dashboardData.propertyStats.plots)) * 220}`}
                        strokeLinecap="round"/>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{dashboardData.propertyStats.residential + dashboardData.propertyStats.commercial + dashboardData.propertyStats.plots}</div>
                        <div className="text-xs text-gray-500">Total</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Residential</span>
                    </div>
                    <span className="text-sm font-semibold">{dashboardData.propertyStats.residential}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Commercial</span>
                    </div>
                    <span className="text-sm font-semibold">{dashboardData.propertyStats.commercial}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Plots/Land</span>
                    </div>
                    <span className="text-sm font-semibold">{dashboardData.propertyStats.plots}</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Top Agents</h3>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
                </div>
                <div className="space-y-4">
                  {dashboardData.topPerformingAgents.map((agent, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                          {agent.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{agent.name}</p>
                          <p className="text-xs text-gray-500">{agent.properties} properties</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-gray-900">₹{(agent.revenue / 1000).toFixed(0)}K</p>
                        <p className="text-xs text-green-600">+{agent.growth}%</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Quick Actions & System Status */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      onClick={() => navigate('/admin/users')}
                      className="p-4 text-left border border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 group"
                    >
                      <div className="flex items-center">
                        <div className="text-blue-600 mr-3 group-hover:scale-110 transition-transform">
                          <UsersIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Manage Users</h4>
                          <p className="text-sm text-gray-600">View and manage all users</p>
                        </div>
                      </div>
                    </button>
                    <button
                      onClick={() => navigate('/admin/properties/pending')}
                      className="p-4 text-left border border-gray-200 rounded-xl hover:bg-orange-50 hover:border-orange-300 transition-all duration-200 group"
                    >
                      <div className="flex items-center">
                        <div className="text-orange-600 mr-3 group-hover:scale-110 transition-transform">
                          <ClockIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Approve Properties</h4>
                          <p className="text-sm text-gray-600">Review pending properties</p>
                        </div>
                      </div>
                    </button>
                    <button
                      onClick={() => navigate('/admin/contacts')}
                      className="p-4 text-left border border-gray-200 rounded-xl hover:bg-green-50 hover:border-green-300 transition-all duration-200 group"
                    >
                      <div className="flex items-center">
                        <div className="text-green-600 mr-3 group-hover:scale-110 transition-transform">
                          <PhoneIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Contact Requests</h4>
                          <p className="text-sm text-gray-600">Handle customer inquiries</p>
                        </div>
                      </div>
                    </button>
                    <button
                      onClick={() => navigate('/admin/analytics')}
                      className="p-4 text-left border border-gray-200 rounded-xl hover:bg-purple-50 hover:border-purple-300 transition-all duration-200 group"
                    >
                      <div className="flex items-center">
                        <div className="text-purple-600 mr-3 group-hover:scale-110 transition-transform">
                          <ChartBarIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">View Analytics</h4>
                          <p className="text-sm text-gray-600">Detailed reports & insights</p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">System Status</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Server Status</span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></div>
                        Online
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Database</span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></div>
                        Connected
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">API Status</span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></div>
                        Operational
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Storage Usage</span>
                      <span className="text-sm text-gray-900 font-medium">68% used</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000" style={{width: '68%'}}></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Lead Conversion Rate</span>
                      <span className="text-sm font-medium text-green-600">{dashboardData.leadConversion}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-1000" style={{width: `${dashboardData.leadConversion}%`}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Recent Activity & Notifications */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
              <div className="xl:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                    <div className="flex items-center space-x-2">
                      <button className="text-sm text-gray-500 hover:text-gray-700">
                        <FunnelIcon className="w-4 h-4" />
                      </button>
                      <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {dashboardData.recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors duration-200">
                        <div className="flex-shrink-0">
                          {getActivityIcon(activity.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900 truncate">{activity.message}</p>
                            <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{activity.time}</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">User activity in the system</p>
                          {activity.type === 'payment' && (
                            <span className="inline-flex items-center mt-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Payment Received
                            </span>
                          )}
                          {activity.type === 'approval' && (
                            <span className="inline-flex items-center mt-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                              Pending Approval
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Mark All Read</button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-xl">
                      <div className="flex items-center">
                        <ExclamationTriangleIcon className="w-5 h-5 text-red-600 mr-2" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-red-800">Server Load High</p>
                          <p className="text-xs text-red-600 mt-1">CPU usage at 85%</p>
                        </div>
                        <span className="text-xs text-red-500">2m ago</span>
                      </div>
                    </div>
                    <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-r-xl">
                      <div className="flex items-center">
                        <ClockIcon className="w-5 h-5 text-yellow-600 mr-2" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-yellow-800">Pending Approvals</p>
                          <p className="text-xs text-yellow-600 mt-1">23 properties awaiting review</p>
                        </div>
                        <span className="text-xs text-yellow-500">15m ago</span>
                      </div>
                    </div>
                    <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-xl">
                      <div className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-green-800">New Premium Subscription</p>
                          <p className="text-xs text-green-600 mt-1">Rohit Kumar upgraded to Premium</p>
                        </div>
                        <span className="text-xs text-green-500">1h ago</span>
                      </div>
                    </div>
                    <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-xl">
                      <div className="flex items-center">
                        <InformationCircleIcon className="w-5 h-5 text-blue-600 mr-2" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-blue-800">Backup Completed</p>
                          <p className="text-xs text-blue-600 mt-1">Daily backup successfully created</p>
                        </div>
                        <span className="text-xs text-blue-500">3h ago</span>
                      </div>
                    </div>
                    <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-xl">
                      <div className="flex items-center">
                        <BellIcon className="w-5 h-5 text-purple-600 mr-2" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-purple-800">License Renewal Due</p>
                          <p className="text-xs text-purple-600 mt-1">Expires in 7 days</p>
                        </div>
                        <span className="text-xs text-purple-500">1d ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Today's Notifications</span>
                      <span className="font-medium text-gray-900">12</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-2">
                      <span className="text-gray-600">Unread</span>
                      <span className="font-medium text-red-600">5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardIntegration;