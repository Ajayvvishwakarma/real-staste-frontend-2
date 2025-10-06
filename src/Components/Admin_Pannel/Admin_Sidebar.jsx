import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  UsersIcon,
  BuildingOfficeIcon,
  CalendarDaysIcon,
  EnvelopeIcon,
  ChartBarIcon,
  MegaphoneIcon,
  Cog6ToothIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  XMarkIcon,
  ChevronLeftIcon
} from '@heroicons/react/24/outline';

const Admin_Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState({});
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    {
      title: 'Dashboard',
      path: '/admin/dashboard',
      icon: <HomeIcon className="w-5 h-5" />,
      badge: null
    },
    {
      title: 'Users',
      path: '/admin/users',
      icon: <UsersIcon className="w-5 h-5" />,
      badge: '1248',
      submenu: [
        { title: 'All Users', path: '/admin/users', badge: null },
        { title: 'Agents', path: '/admin/users/agents', badge: '67' },
        { title: 'Staff', path: '/admin/users/staff', badge: '8' },
        { title: 'Administrators', path: '/admin/users/admins', badge: '3' }
      ]
    },
    {
      title: 'Properties',
      path: '/admin/properties',
      icon: <BuildingOfficeIcon className="w-5 h-5" />,
      badge: '892',
      submenu: [
        { title: 'All Properties', path: '/admin/properties', badge: null },
        { title: 'Pending Approval', path: '/admin/properties/pending', badge: '24' },
        { title: 'Featured Properties', path: '/admin/properties/featured', badge: '156' },
        { title: 'Categories', path: '/admin/properties/categories', badge: null }
      ]
    },
    {
      title: 'Appointments',
      path: '/admin/appointments',
      icon: <CalendarDaysIcon className="w-5 h-5" />,
      badge: '156'
    },
    {
      title: 'Contact Requests',
      path: '/admin/contacts',
      icon: <EnvelopeIcon className="w-5 h-5" />,
      badge: '45'
    },
    {
      title: 'Analytics',
      path: '/admin/analytics',
      icon: <ChartBarIcon className="w-5 h-5" />,
      badge: null,
      submenu: [
        { title: 'Overview', path: '/admin/analytics', badge: null },
        { title: 'User Analytics', path: '/admin/analytics/users', badge: null },
        { title: 'Property Analytics', path: '/admin/analytics/properties', badge: null },
        { title: 'Financial Reports', path: '/admin/analytics/financial', badge: null }
      ]
    },
    {
      title: 'Marketing',
      path: '/admin/marketing',
      icon: <MegaphoneIcon className="w-5 h-5" />,
      badge: null,
      submenu: [
        { title: 'Campaigns', path: '/admin/marketing/campaigns', badge: '5' },
        { title: 'Email Templates', path: '/admin/marketing/emails', badge: null },
        { title: 'SEO Management', path: '/admin/marketing/seo', badge: null }
      ]
    },
    {
      title: 'Settings',
      path: '/admin/settings',
      icon: <Cog6ToothIcon className="w-5 h-5" />,
      badge: null,
      submenu: [
        { title: 'General Settings', path: '/admin/settings', badge: null },
        { title: 'Email Settings', path: '/admin/settings/email', badge: null },
        { title: 'Payment Settings', path: '/admin/settings/payment', badge: null },
        { title: 'SEO Settings', path: '/admin/settings/seo', badge: null }
      ]
    }
  ];
  
  // Auto-expand menu if current path matches a submenu item
  useEffect(() => {
    menuItems.forEach(item => {
      if (item.submenu) {
        const hasActiveSubmenu = item.submenu.some(subItem => 
          location.pathname === subItem.path
        );
        if (hasActiveSubmenu) {
          setExpandedMenus(prev => ({
            ...prev,
            [item.title]: true
          }));
        }
      }
    });
  }, [location.pathname]);
  const handleNavigation = (path) => {
    navigate(path);
    setSidebarOpen(false); // Close mobile sidebar after navigation
  };
  const isActiveRoute = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const toggleSubmenu = (title) => {
    setExpandedMenus(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };
  return (
    <>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 top-16 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div className="absolute inset-0 bg-gray-900 opacity-75 transition-opacity duration-300"></div>
        </div>
      )}

      {/* Sidebar */}
      <div className={`fixed top-16 left-0 z-40 ${isCollapsed ? 'w-20' : 'w-64'} h-[calc(100vh-4rem)] bg-white border-r border-gray-200 overflow-y-auto transition-all duration-300 ease-in-out transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 shadow-lg lg:shadow-none`}>
        
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <BuildingOfficeIcon className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-900">Admin Panel</span>
            </div>
          )}
          
          {/* Desktop collapse toggle */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          >
            <ChevronLeftIcon className={`h-4 w-4 transition-transform duration-200 ${isCollapsed ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        {/* Mobile close button */}
        <div className="lg:hidden flex justify-end p-4 border-b border-gray-200">
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="mt-6 px-3 space-y-1 pb-20">
          {menuItems.map((item, index) => (
            <div key={index} className="mb-1">
              {/* Main menu item */}
              <div className="relative group">
                <button
                  onClick={() => {
                    if (item.submenu) {
                      toggleSubmenu(item.title);
                    } else {
                      handleNavigation(item.path);
                    }
                  }}
                  className={`group flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActiveRoute(item.path)
                      ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center min-w-0">
                    <span className={`mr-3 flex-shrink-0 ${
                      isActiveRoute(item.path) ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-700'
                    }`}>
                      {item.icon}
                    </span>
                    {!isCollapsed && (
                      <>
                        <span className="truncate">{item.title}</span>
                        {item.badge && (
                          <span className={`ml-auto inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                            isActiveRoute(item.path) 
                              ? 'bg-blue-100 text-blue-700' 
                              : 'bg-gray-200 text-gray-700'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                  {!isCollapsed && item.submenu && (
                    <ChevronRightIcon
                      className={`h-4 w-4 transform transition-transform duration-200 flex-shrink-0 ml-2 ${
                        expandedMenus[item.title] ? 'rotate-90' : 'rotate-0'
                      } ${isActiveRoute(item.path) ? 'text-blue-600' : 'text-gray-400'}`}
                    />
                  )}
                </button>
                
                {/* Tooltip for collapsed sidebar */}
                {isCollapsed && (
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    {item.title}
                    {item.badge && (
                      <span className="ml-2 bg-blue-600 text-white px-1.5 py-0.5 rounded-full text-xs">
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
                
                {/* Submenu items */}
                {!isCollapsed && item.submenu && (expandedMenus[item.title] || isActiveRoute(item.path)) && (
                  <div className="ml-8 mt-1 space-y-1 pb-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <button
                        key={subIndex}
                        onClick={() => handleNavigation(subItem.path)}
                        className={`group flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                          location.pathname === subItem.path
                            ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-600'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        <div className="flex items-center min-w-0">
                          <span className={`mr-2 flex-shrink-0 w-1.5 h-1.5 rounded-full ${
                            location.pathname === subItem.path ? 'bg-blue-600' : 'bg-gray-400'
                          }`}></span>
                          <span className="truncate">{subItem.title}</span>
                        </div>
                        {subItem.badge && (
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                            location.pathname === subItem.path
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-gray-200 text-gray-700'
                          }`}>
                            {subItem.badge}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </nav>
        
        {/* Sidebar footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-50 border-t border-gray-200">
          {!isCollapsed ? (
            <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-gray-900">System Status</p>
                  <p className="text-xs text-gray-600">All systems operational</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Admin_Sidebar;