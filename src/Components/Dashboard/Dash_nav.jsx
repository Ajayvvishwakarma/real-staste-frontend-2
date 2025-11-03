// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Dash_nav = ({ userInfo, onChangePasswordClick }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//   const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
//   const navigate = useNavigate();

//   // Fallback user data if userInfo is not provided
//   const user = userInfo || {
//     name: 'User',
//     email: 'user@example.com',
//     avatar: null
//   };

//   const notifications = [
//     { id: 1, title: 'New Lead Received', message: 'You have a new inquiry for your property', time: '5 min ago', unread: true },
//     { id: 2, title: 'Property View Alert', message: 'Your property was viewed 25 times today', time: '1 hour ago', unread: true },
//     { id: 3, title: 'Payment Confirmation', message: 'Your subscription payment was successful', time: '2 hours ago', unread: false },
//   ];

//   const handleLogout = () => {
//     // Add logout logic here
//     localStorage.removeItem('access_token');
//     localStorage.removeItem('user_info');
//     navigate('/login');
//   };

//   return (
//     <nav className="bg-white shadow-lg border-b border-gray-200 w-full">
//       <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
          
//           {/* Search Bar - Hidden on mobile */}
//           <div className="hidden md:flex flex-1 max-w-md mx-8">
//             <div className="relative w-full">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </div>
//               <input
//                 type="text"
//                 placeholder="Search properties, leads, or clients..."
//                 className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//           </div>

//           {/* Right side - Actions and Profile */}
//           <div className="flex items-center space-x-4">
//             {/* Notifications */}
//             <div className="relative">
//               <button
//                 onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
//                 className="p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg relative"
//               >
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9zM13.73 21a2 2 0 01-3.46 0" />
//                 </svg>
//                 {notifications.filter(n => n.unread).length > 0 && (
//                   <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
//                     {notifications.filter(n => n.unread).length}
//                   </span>
//                 )}
//               </button>

//               {/* Notifications Dropdown */}
//               {isNotificationsOpen && (
//                 <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
//                   <div className="p-4 border-b border-gray-200">
//                     <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
//                   </div>
//                   <div className="max-h-64 overflow-y-auto">
//                     {notifications.map((notification) => (
//                       <div key={notification.id} className={`p-4 border-b border-gray-100 hover:bg-gray-50 ${notification.unread ? 'bg-blue-50' : ''}`}>
//                         <div className="flex justify-between items-start">
//                           <div className="flex-1">
//                             <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
//                             <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
//                             <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
//                           </div>
//                           {notification.unread && (
//                             <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-1"></div>
//                           )}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="p-4 border-t border-gray-200">
//                     <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
//                       View all notifications
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Profile Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
//                 className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
//                   <span className="text-white text-sm font-medium">
//                     {user.name.split(' ').map(n => n[0]).join('')}
//                   </span>
//                 </div>
//                 <div className="hidden md:block text-left">
//                   <div className="text-sm font-medium text-gray-900">{user.name}</div>
//                   <div className="text-xs text-gray-500">{user.email}</div>
//                 </div>
//                 <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>

//               {/* Profile Dropdown Menu */}
//               {isProfileDropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
//                   <div className="py-1">
//                     <button 
//                       onClick={() => navigate('/dashboard/profile')}
//                       className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       <svg className="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                       </svg>
//                       View Profile
//                     </button>
//                     <button 
//                       onClick={() => {
//                         setIsProfileDropdownOpen(false);
//                         if (onChangePasswordClick) {
//                           onChangePasswordClick();
//                         } else {
//                           navigate('/dashboard/account');
//                         }
//                       }}
//                       className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       <svg className="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                       </svg>
//                       Change Password
//                     </button>
//                     <div className="border-t border-gray-100"></div>
//                     <button 
//                       onClick={handleLogout}
//                       className="flex items-center w-full px-4 py-2 text-sm text-red-700 hover:bg-red-50"
//                     >
//                       <svg className="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
//                       </svg>
//                       Sign Out
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="p-2 rounded-lg text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden border-t border-gray-200">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {/* Mobile Search */}
//               <div className="px-3 py-2">
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                     </svg>
//                   </div>
//                   <input
//                     type="text"
//                     placeholder="Search..."
//                     className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Close dropdowns when clicking outside */}
//       {(isProfileDropdownOpen || isNotificationsOpen) && (
//         <div 
//           className="fixed inset-0 z-40" 
//           onClick={() => {
//             setIsProfileDropdownOpen(false);
//             setIsNotificationsOpen(false);
//           }}
//         ></div>
//       )}
//     </nav>
//   );
// };

// export default Dash_nav;












import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Optionally fetch notifications/userInfo from backend APIs if needed

const DashNavIntegration = ({ userInfo, onChangePasswordClick, onProfileClick }) => {
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
                    {user?.name ? user.name.split(' ').map(n => n[0]).join('') : 'U'}
                  </span>
                </div>
                <div className="hidden md:block text-left">
                  <div className="text-sm font-medium text-gray-900">{user?.name || 'User'}</div>
                  <div className="text-xs text-gray-500">{user?.email || 'user@example.com'}</div>
                </div>
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    <button 
                      onClick={() => {
                        setIsProfileDropdownOpen(false);
                        if (onProfileClick) {
                          onProfileClick();
                        } else {
                          navigate('/dashboard/profile');
                        }
                      }}
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