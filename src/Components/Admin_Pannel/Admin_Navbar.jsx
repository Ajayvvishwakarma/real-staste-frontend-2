import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserInfo, logout } from '../../utils/api';

const Admin_Navbar = ({ onSidebarToggle }) => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);
  const navigate = useNavigate();
  
  // Get user info from either storage location
  const userInfo = getUserInfo() || JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      window.location.href = '/login';
    }
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 fixed w-full top-0 left-0 right-0 z-50 shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Logo and Hamburger */}
            <div className="flex items-center">
              {/* Hamburger Menu */}
              <button
                onClick={onSidebarToggle}
                className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden transition-colors"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Logo */}
              <div className="flex items-center ml-3 lg:ml-0">
                <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-sm">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="ml-3">
                  <span className="block text-xs text-gray-500 font-medium">Admin Panel</span>
                </div>
              </div>
            </div>

            {/* Right side - Search, Notifications, Profile */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search users, properties..."
                    className="block w-64 pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setNotificationDropdownOpen(!notificationDropdownOpen)}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 relative transition-colors"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3.001 3.001 0 11-6 0m6 0H9" />
                  </svg>
                  <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                </button>

                {/* Notification Dropdown */}
                {notificationDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          3 new
                        </span>
                      </div>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      <div className="px-4 py-3 hover:bg-gray-50 transition-colors border-l-4 border-blue-500">
                        <p className="text-sm font-medium text-gray-900">New property submission</p>
                        <p className="text-sm text-gray-600">Property in Mumbai needs approval</p>
                        <p className="text-xs text-gray-500 mt-1">2 minutes ago</p>
                      </div>
                      <div className="px-4 py-3 hover:bg-gray-50 transition-colors border-l-4 border-green-500">
                        <p className="text-sm font-medium text-gray-900">New user registration</p>
                        <p className="text-sm text-gray-600">john.doe@example.com joined</p>
                        <p className="text-xs text-gray-500 mt-1">10 minutes ago</p>
                      </div>
                      <div className="px-4 py-3 hover:bg-gray-50 transition-colors border-l-4 border-orange-500">
                        <p className="text-sm font-medium text-gray-900">Contact form submission</p>
                        <p className="text-sm text-gray-600">New inquiry from potential buyer</p>
                        <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                      </div>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-3">
                      <button className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors">
                        View all notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* User Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                >
                  {/* Profile Avatar */}
                  <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-sm font-medium text-white">
                      {userInfo?.email?.charAt(0).toUpperCase() || 'A'}
                    </span>
                  </div>
                  <div className="hidden lg:block text-left">
                    <p className="text-sm font-medium text-gray-900">
                      {userInfo?.email?.split('@')[0] || 'Admin'}
                    </p>
                    <p className="text-xs text-gray-500">Administrator</p>
                  </div>
                  <svg className="h-4 w-4 text-gray-400 hidden lg:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* User Dropdown Menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                    {/* User Info Header */}
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-white">
                            {userInfo?.email?.charAt(0).toUpperCase() || 'A'}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {userInfo?.email?.split('@')[0] || 'Admin'}
                          </p>
                          <p className="text-xs text-gray-500">
                            {userInfo?.email || 'admin@example.com'}
                          </p>
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-1">
                            Administrator
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Menu Items */}
                    <div className="py-1">
                      <button 
                        onClick={() => {
                          navigate('/admin/profile');
                          setUserDropdownOpen(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <svg className="h-4 w-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        My Profile
                      </button>
                      <button 
                        onClick={() => {
                          navigate('/admin/settings');
                          setUserDropdownOpen(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <svg className="h-4 w-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Settings
                      </button>
                    </div>
                    
                    <div className="border-t border-gray-100 py-1">
                      <button
                        onClick={() => {
                          handleLogout();
                          setUserDropdownOpen(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <svg className="h-4 w-4 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Close dropdowns when clicking outside */}
        {(userDropdownOpen || notificationDropdownOpen) && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => {
              setUserDropdownOpen(false);
              setNotificationDropdownOpen(false);
            }}
          ></div>
        )}
      </nav>
    </>
  );
};

export default Admin_Navbar;
