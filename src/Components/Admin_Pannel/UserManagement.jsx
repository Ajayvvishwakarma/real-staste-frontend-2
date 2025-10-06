// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { getMockUsers } from '../../utils/api';
// import Admin_Navbar from './Admin_Navbar';
// import Admin_Sidebar from './Admin_Sidebar';

// const UserManagement = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedTab, setSelectedTab] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showUserModal, setShowUserModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [isCreating, setIsCreating] = useState(false);
//   const [bulkSelection, setBulkSelection] = useState([]);
//   const [showBulkActions, setShowBulkActions] = useState(false);
//   const [viewMode, setViewMode] = useState('table'); // table or cards
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Handle responsive layout
//   useEffect(() => {
//     const handleResize = () => {
//       setIsLargeScreen(window.innerWidth >= 1024);
//       // Auto switch to card view on mobile
//       if (window.innerWidth < 768) {
//         setViewMode('cards');
//       }
//     };
    
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Set selected tab based on URL path
//   useEffect(() => {
//     const path = location.pathname;
//     if (path.includes('/agents')) {
//       setSelectedTab('agents');
//     } else if (path.includes('/staff')) {
//       setSelectedTab('staff');
//     } else if (path.includes('/admins')) {
//       setSelectedTab('admins');
//     } else {
//       setSelectedTab('all');
//     }
//   }, [location.pathname]);

//   const [newUser, setNewUser] = useState({
//     email: '',
//     role: 'agent',
//     full_name: '',
//     phone: '',
//     status: 'active'
//   });

//   const tabs = [
//     { id: 'all', label: 'All Users', count: users.length },
//     { id: 'agents', label: 'Agents', count: users.filter(u => u.role === 'agent').length },
//     { id: 'staff', label: 'Staff', count: users.filter(u => u.role === 'staff').length },
//     { id: 'admins', label: 'Admins', count: users.filter(u => u.role === 'admin').length },
//     { id: 'super_admin', label: 'Super Admins', count: users.filter(u => u.role === 'super_admin').length }
//   ];

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async () => {
//     try {
//       setLoading(true);
//       const usersData = await getMockUsers();
//       setUsers(usersData);
//     } catch (error) {
//       console.error('Error loading users:', error);
//       // Fallback to basic mock data if getMockUsers fails
//       setUsers([
//         {
//           id: 1,
//           email: 'john.doe@example.com',
//           username: 'john_doe',
//           name: 'John Doe',
//           user_type: 'client',
//           phone: '+91 9876543210',
//           is_active: true,
//           created_at: '2024-01-15T10:30:00Z'
//         },
//         {
//           id: 2,
//           email: 'admin@example.com',
//           username: 'admin_user',
//           name: 'Admin User',
//           user_type: 'admin',
//           phone: '+91 9876543211',
//           is_active: true,
//           created_at: '2024-01-01T00:00:00Z'
//         }
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCreateUser = async () => {
//     try {
//       setIsCreating(true);
//       // Note: User creation endpoint might be different, this is a placeholder
//       const response = await apiRequest(`${API_ENDPOINTS.USERS}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           email: newUser.email,
//           full_name: newUser.full_name,
//           phone: newUser.phone,
//           role: newUser.role
//         })
//       });
      
//       if (response && response.ok) {
//         const newUserData = await response.json();
//         setUsers([...users, newUserData]);
//         setShowUserModal(false);
//         setNewUser({
//           email: '',
//           role: 'agent',
//           full_name: '',
//           phone: '',
//           status: 'active'
//         });
//       } else {
//         console.error('Failed to create user');
//       }
//     } catch (error) {
//       console.error('Error creating user:', error);
//     } finally {
//       setIsCreating(false);
//     }
//   };

//   const handleBlockUser = async (userId) => {
//     try {
//       const user = users.find(u => u.id === userId);
//       const endpoint = user.is_blocked ? 
//         API_ENDPOINTS.ADMIN_USER_UNBLOCK(userId) : 
//         API_ENDPOINTS.ADMIN_USER_BLOCK(userId);
      
//       const response = await apiRequest(endpoint, {
//         method: 'POST'
//       });
      
//       if (response && response.ok) {
//         // Update local state
//         setUsers(users.map(user => 
//           user.id === userId 
//             ? { ...user, is_blocked: !user.is_blocked }
//             : user
//         ));
//       } else {
//         console.error('Failed to block/unblock user');
//       }
//     } catch (error) {
//       console.error('Error blocking/unblocking user:', error);
//     }
//   };

//   const handleDeleteUser = async (userId) => {
//     if (window.confirm('Are you sure you want to delete this user?')) {
//       try {
//         const response = await apiRequest(API_ENDPOINTS.ADMIN_USER_BY_ID(userId), {
//           method: 'DELETE'
//         });
        
//         if (response && response.ok) {
//           setUsers(users.filter(user => user.id !== userId));
//         } else {
//           console.error('Failed to delete user');
//         }
//       } catch (error) {
//         console.error('Error deleting user:', error);
//       }
//     }
//   };

//   const filteredUsers = users.filter(user => {
//     const matchesTab = selectedTab === 'all' || user.role === selectedTab;
//     const matchesSearch = user.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          user.email.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesTab && matchesSearch;
//   });

//   const getRoleColor = (role) => {
//     switch (role) {
//       case 'super_admin': return 'bg-red-100 text-red-800';
//       case 'admin': return 'bg-purple-100 text-purple-800';
//       case 'staff': return 'bg-blue-100 text-blue-800';
//       case 'agent': return 'bg-green-100 text-green-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const getStatusColor = (user) => {
//     if (user.is_blocked) return 'bg-red-100 text-red-800';
//     if (!user.is_active) return 'bg-yellow-100 text-yellow-800';
//     return 'bg-green-100 text-green-800';
//   };

//   const getStatusText = (user) => {
//     if (user.is_blocked) return 'BLOCKED';
//     if (!user.is_active) return 'INACTIVE';
//     return 'ACTIVE';
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading users...</p>
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
//                   <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
//                   <p className="mt-2 text-gray-600">Manage all users, agents, staff, and administrators</p>
//                 </div>
//                 <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row gap-3">
//                   <button
//                     onClick={() => setShowBulkActions(!showBulkActions)}
//                     className={`inline-flex items-center px-4 py-2 font-medium rounded-lg shadow-sm transition-colors duration-200 ${
//                       bulkSelection.length > 0 
//                         ? 'bg-orange-600 hover:bg-orange-700 text-white' 
//                         : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300'
//                     }`}
//                   >
//                     <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//                     </svg>
//                     Bulk Actions {bulkSelection.length > 0 && `(${bulkSelection.length})`}
//                   </button>
//                   <button
//                     onClick={() => setShowUserModal(true)}
//                     className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200"
//                   >
//                     <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                     </svg>
//                     Add User
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Tabs */}
//             <div className="mb-8">
//               <div className="border-b border-gray-200">
//                 <nav className="-mb-px flex space-x-4 lg:space-x-8 overflow-x-auto">
//                   {tabs.map((tab) => (
//                     <button
//                       key={tab.id}
//                       onClick={() => setSelectedTab(tab.id)}
//                       className={`py-3 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
//                         selectedTab === tab.id
//                           ? 'border-blue-500 text-blue-600'
//                           : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                       }`}
//                     >
//                       {tab.label}
//                       <span className="ml-2 py-0.5 px-2.5 rounded-full text-xs bg-gray-100 text-gray-900 font-medium">
//                         {tab.count}
//                       </span>
//                     </button>
//                   ))}
//                 </nav>
//               </div>
//             </div>

//             {/* Controls */}
//             <div className="mb-8 flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
//               {/* Search */}
//               <div className="relative w-full lg:w-auto max-w-md">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                   </svg>
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Search users..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="block w-full lg:w-80 pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
//                 />
//               </div>
//             </div>

//             {/* Users Table - Desktop */}
//             <div className="hidden lg:block bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden">
//               <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
//                 <h3 className="text-xl font-semibold text-gray-900">Users List</h3>
//                 <div className="flex items-center space-x-2">
//                   <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
//                     {filteredUsers.length} Total
//                   </span>
//                 </div>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         User
//                       </th>
//                       <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Role
//                       </th>
//                       <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Status
//                       </th>
//                       <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Last Login
//                       </th>
//                       <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Actions
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {filteredUsers.map((user) => (
//                       <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-200">
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex items-center">
//                             <div className="flex-shrink-0 h-12 w-12">
//                               <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
//                                 <span className="text-white font-medium text-lg">
//                                   {user.full_name.charAt(0).toUpperCase()}
//                                 </span>
//                               </div>
//                             </div>
//                             <div className="ml-4">
//                               <div className="text-sm font-medium text-gray-900">{user.full_name}</div>
//                               <div className="text-sm text-gray-500">{user.email}</div>
//                               <div className="text-sm text-gray-500">{user.phone}</div>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getRoleColor(user.role)}`}>
//                             {user.role.replace('_', ' ').toUpperCase()}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(user)}`}>
//                             {getStatusText(user)}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {user.created_at ? new Date(user.created_at).toLocaleDateString() : 'Unknown'}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                           <div className="flex space-x-3">
//                             <button
//                               onClick={() => {
//                                 setSelectedUser(user);
//                                 setShowUserModal(true);
//                               }}
//                               className="text-blue-600 hover:text-blue-900 font-medium transition-colors duration-200"
//                             >
//                               Edit
//                             </button>
//                             <button
//                               onClick={() => handleBlockUser(user.id)}
//                               className="text-orange-600 hover:text-orange-900 font-medium transition-colors duration-200"
//                             >
//                               {user.is_blocked ? 'Unblock' : 'Block'}
//                             </button>
//                             <button
//                               onClick={() => handleDeleteUser(user.id)}
//                               className="text-red-600 hover:text-red-900 font-medium transition-colors duration-200"
//                             >
//                               Delete
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Users Cards - Mobile & Tablet */}
//             <div className="lg:hidden space-y-6">
//               {filteredUsers.map((user) => (
//                 <div key={user.id} className="bg-white shadow-sm rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all duration-200">
//                   <div className="flex items-start space-x-4">
//                     <div className="flex-shrink-0">
//                       <div className="h-14 w-14 rounded-full bg-blue-500 flex items-center justify-center">
//                         <span className="text-white font-medium text-xl">
//                           {user.full_name.charAt(0).toUpperCase()}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-start justify-between">
//                         <div className="flex-1">
//                           <h3 className="text-lg font-semibold text-gray-900 truncate">{user.full_name}</h3>
//                           <p className="text-sm text-gray-500 truncate">{user.email}</p>
//                           <p className="text-sm text-gray-500">{user.phone}</p>
//                         </div>
//                         <div className="flex flex-col items-end space-y-2">
//                           <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getRoleColor(user.role)}`}>
//                             {user.role.replace('_', ' ').toUpperCase()}
//                           </span>
//                           <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(user)}`}>
//                             {getStatusText(user)}
//                           </span>
//                         </div>
//                       </div>
                      
//                       <div className="mt-4 flex items-center justify-between">
//                         <p className="text-xs text-gray-500">
//                           Created: {user.created_at ? new Date(user.created_at).toLocaleDateString() : 'Unknown'}
//                         </p>
//                       </div>
                      
//                       <div className="mt-6 flex flex-wrap gap-3">
//                         <button
//                           onClick={() => {
//                             setSelectedUser(user);
//                             setShowUserModal(true);
//                           }}
//                           className="flex-1 text-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
//                         >
//                           Edit
//                         </button>
//                         <button
//                           onClick={() => handleBlockUser(user.id)}
//                           className="flex-1 text-center px-4 py-2 text-sm font-medium text-orange-600 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-200"
//                         >
//                           {user.is_blocked ? 'Unblock' : 'Block'}
//                         </button>
//                         <button
//                           onClick={() => handleDeleteUser(user.id)}
//                           className="flex-1 text-center px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors duration-200"
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Empty state */}
//             {filteredUsers.length === 0 && (
//               <div className="bg-white shadow-sm rounded-xl border border-gray-200">
//                 <div className="text-center py-12">
//                   <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m9 5.197v1M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//                   </svg>
//                   <h3 className="mt-2 text-sm font-medium text-gray-900">No users found</h3>
//                   <p className="mt-1 text-sm text-gray-500">Try adjusting your search criteria or add a new user.</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </main>
//       </div>

//       {/* User Modal */}
//       {showUserModal && (
//         <div className="fixed inset-0 z-50 overflow-y-auto">
//           <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
//               <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => setShowUserModal(false)}></div>
//             </div>

//             <div className="inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//               <div className="bg-white px-6 pt-6 pb-4 sm:p-8 sm:pb-6">
//                 <h3 className="text-xl leading-6 font-semibold text-gray-900 mb-6">
//                   {selectedUser ? 'Edit User' : 'Create New User'}
//                 </h3>
                
//                 <div className="space-y-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
//                     <input
//                       type="text"
//                       value={selectedUser ? selectedUser.full_name : newUser.full_name}
//                       onChange={(e) => selectedUser 
//                         ? setSelectedUser({...selectedUser, full_name: e.target.value})
//                         : setNewUser({...newUser, full_name: e.target.value})
//                       }
//                       className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                     <input
//                       type="email"
//                       value={selectedUser ? selectedUser.email : newUser.email}
//                       onChange={(e) => selectedUser 
//                         ? setSelectedUser({...selectedUser, email: e.target.value})
//                         : setNewUser({...newUser, email: e.target.value})
//                       }
//                       className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
//                     <input
//                       type="tel"
//                       value={selectedUser ? selectedUser.phone : newUser.phone}
//                       onChange={(e) => selectedUser 
//                         ? setSelectedUser({...selectedUser, phone: e.target.value})
//                         : setNewUser({...newUser, phone: e.target.value})
//                       }
//                       className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
//                     <select
//                       value={selectedUser ? selectedUser.role : newUser.role}
//                       onChange={(e) => selectedUser 
//                         ? setSelectedUser({...selectedUser, role: e.target.value})
//                         : setNewUser({...newUser, role: e.target.value})
//                       }
//                       className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     >
//                       <option value="agent">Agent</option>
//                       <option value="staff">Staff</option>
//                       <option value="admin">Admin</option>
//                       <option value="super_admin">Super Admin</option>
//                     </select>
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
//                     <select
//                       value={selectedUser ? selectedUser.status : newUser.status}
//                       onChange={(e) => selectedUser 
//                         ? setSelectedUser({...selectedUser, status: e.target.value})
//                         : setNewUser({...newUser, status: e.target.value})
//                       }
//                       className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     >
//                       <option value="active">Active</option>
//                       <option value="inactive">Inactive</option>
//                       <option value="blocked">Blocked</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="bg-gray-50 px-6 py-4 sm:px-8 sm:flex sm:flex-row-reverse">
//                 <button
//                   onClick={selectedUser ? () => {} : handleCreateUser}
//                   disabled={isCreating}
//                   className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-6 py-3 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
//                 >
//                   {isCreating ? 'Creating...' : (selectedUser ? 'Update' : 'Create')}
//                 </button>
//                 <button
//                   onClick={() => {
//                     setShowUserModal(false);
//                     setSelectedUser(null);
//                     setNewUser({
//                       email: '',
//                       role: 'agent',
//                       full_name: '',
//                       phone: '',
//                       status: 'active'
//                     });
//                   }}
//                   className="mt-3 w-full inline-flex justify-center rounded-lg border border-gray-300 shadow-sm px-6 py-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserManagement;











import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Replace this with your backend API endpoints
const USERS_API_URL = "http://localhost:8000/api/users";

import Admin_Navbar from './Admin_Navbar';
import Admin_Sidebar from './Admin_Sidebar';

const UserManagementIntegration = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showUserModal, setShowUserModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({
    email: '',
    role: 'agent',
    full_name: '',
    phone: '',
    status: 'active'
  });

  const navigate = useNavigate();
  const location = useLocation();

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(USERS_API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error loading users:", error);
        setUsers([]); // Fallback to empty data in case of failure
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleCreateUser = async () => {
    try {
      const response = await fetch(USERS_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const createdUser = await response.json();
      setUsers(prevUsers => [...prevUsers, createdUser]);
      setShowUserModal(false);
      setNewUser({ email: '', role: 'agent', full_name: '', phone: '', status: 'active' });
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const handleUpdateUser = async (user) => {
    try {
      const response = await fetch(`${USERS_API_URL}/${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      const updatedUser = await response.json();
      setUsers(prevUsers => prevUsers.map(u => (u.id === updatedUser.id ? updatedUser : u)));
      setShowUserModal(false);
      setSelectedUser(null);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(`${USERS_API_URL}/${userId}`, { method: 'DELETE' });

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesTab = selectedTab === 'all' || user.role === selectedTab;
    const matchesSearch = user.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Admin_Navbar onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />
      <Admin_Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div
        className="pt-16 min-h-screen transition-all duration-300"
        style={{ paddingLeft: isLargeScreen ? '16rem' : '0' }}
      >
        <main className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
            <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
            <p className="mt-2 text-gray-600">Manage all platform users and their details</p>

            <div className="mt-6">
              <button
                onClick={() => setShowUserModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Add New User
              </button>
            </div>

            <div className="mt-8">
              {loading ? (
                <p>Loading users...</p>
              ) : (
                <ul>
                  {filteredUsers.map(user => (
                    <li key={user.id} className="border-b py-2">
                      <span>{user.full_name}</span>
                      <button
                        onClick={() => {
                          setSelectedUser(user);
                          setShowUserModal(true);
                        }}
                        className="ml-4 text-blue-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="ml-4 text-red-500"
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </main>
      </div>

      {showUserModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl mb-4">{selectedUser ? 'Edit User' : 'Add User'}</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={selectedUser ? selectedUser.full_name : newUser.full_name}
                onChange={(e) => selectedUser
                  ? setSelectedUser({ ...selectedUser, full_name: e.target.value })
                  : setNewUser({ ...newUser, full_name: e.target.value })
                }
                className="border w-full p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                value={selectedUser ? selectedUser.email : newUser.email}
                onChange={(e) => selectedUser
                  ? setSelectedUser({ ...selectedUser, email: e.target.value })
                  : setNewUser({ ...newUser, email: e.target.value })
                }
                className="border w-full p-2 rounded"
              />
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => {
                  setShowUserModal(false);
                  setSelectedUser(null);
                  setNewUser({ email: '', role: 'agent', full_name: '', phone: '', status: 'active' });
                }}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  selectedUser ? handleUpdateUser(selectedUser) : handleCreateUser();
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                {selectedUser ? 'Update' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagementIntegration;