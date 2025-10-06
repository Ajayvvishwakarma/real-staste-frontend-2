import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Insights_nav from './Insights_nav';
import UpperFooter from '../UpperFooter';
import LowerFooter from '../LowerFooter';
import {
  ChartBarIcon,
  HomeIcon,
  NewspaperIcon,
  BookOpenIcon,
  CalculatorIcon,
  ArrowsRightLeftIcon,
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';

const InsightsLayout = ({ children }) => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  // Check if current page should hide sidebar
  const hideSidebar = location.pathname.includes('/insights/overview') || location.pathname.includes('/insights/rates/');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar);
  };

  const sidebarLinks = [
    {
      title: 'Insights',
      icon: <HomeIcon className="w-5 h-5" />,
      path: '/insights',
    },
    {
      title: 'Price Trends',
      icon: <ChartBarIcon className="w-5 h-5" />,
      path: '/insights/price-trends',
    },
    {
      title: 'My Property Insights',
      icon: <HomeIcon className="w-5 h-5" />,
      path: '/insights/my-property',
    },
    {
      title: 'Articles',
      icon: <NewspaperIcon className="w-5 h-5" />,
      path: '/insights/articles',
    },
    {
      title: 'News',
      icon: <NewspaperIcon className="w-5 h-5" />,
      path: '/insights/news',
    },
    {
      title: 'Guides',
      icon: <BookOpenIcon className="w-5 h-5" />,
      path: '/insights/guides',
    },
    {
      title: 'Budget Calculator',
      icon: <CalculatorIcon className="w-5 h-5" />,
      path: '/insights/budget-calculator',
    },
    {
      title: 'EMI Calculator',
      icon: <HomeIcon className="w-5 h-5" />,
      path: '/insights/emi-calculator',
    },
    {
      title: 'Home Loan Eligibility Calculator',
      icon: <HomeIcon className="w-5 h-5" />,
      path: '/insights/home-loan-eligibility',
    },
    {
      title: 'Area Convertor Tool',
      icon: <ArrowsRightLeftIcon className="w-5 h-5" />,
      path: '/insights/area-converter',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      <Insights_nav />
      {/* Main Layout Container */}
      <div className="flex pt-[72px] min-h-screen">
        {/* Mobile Toggle Button - Hide if sidebar should be hidden */}
        {!hideSidebar && isMobile && (
          <button
            onClick={toggleMobileSidebar}
            className="fixed left-0 top-[96px] z-50 bg-gradient-to-r from-green-600 to-green-400 text-white p-2 rounded-r-xl shadow-xl hover:from-green-700 hover:to-green-500 transition-all duration-300"
            aria-label="Open sidebar"
          >
            {showMobileSidebar ? (
              <ChevronDoubleLeftIcon className="h-6 w-6" />
            ) : (
              <ChevronDoubleRightIcon className="h-6 w-6" />
            )}
          </button>
        )}

        {/* Sidebar - Hide for overview page */}
        {!hideSidebar && (
          <div
            className={`${
              isMobile
                ? `fixed left-0 top-[72px] bottom-0 z-40 ${
                    showMobileSidebar ? 'translate-x-0' : '-translate-x-full'
                  }`
                : 'fixed left-0 top-[72px] bottom-0'
            } ${
              isCollapsed ? 'w-16' : 'w-64'
            } bg-white/80 backdrop-blur-lg shadow-2xl border-r border-green-100 transition-all duration-300 ease-in-out`}
            style={{boxShadow: '0 8px 32px 0 rgba(34,197,94,0.15)', paddingTop: '2rem'}}>
            {/* Desktop Toggle Button */}
            {!isMobile && (
              <button
                onClick={toggleSidebar}
                className="absolute right-0 top-2 bg-green-100 text-green-700 p-2 rounded-l-xl shadow-md hover:bg-green-200 transition-all duration-300"
                aria-label="Collapse sidebar"
              >
                {isCollapsed ? (
                  <ChevronDoubleRightIcon className="h-5 w-5" />
                ) : (
                  <ChevronDoubleLeftIcon className="h-5 w-5" />
                )}
              </button>
            )}
            
            <nav className={`py-6 ${isCollapsed ? 'px-2' : 'px-6'} flex flex-col gap-4`}>
              {sidebarLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`group flex items-center justify-between gap-2 ${
                      isCollapsed ? 'px-2' : 'px-4'
                    } py-3 mx-2 rounded-xl transition-all duration-200 shadow-sm hover:shadow-lg overflow-hidden ${
                      isActive
                        ? 'bg-gradient-to-r from-green-100 to-green-50 text-green-700 font-semibold scale-105'
                        : 'text-gray-700 hover:bg-green-50 hover:scale-105'
                    }`}
                    style={{backdropFilter: 'blur(4px)', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: isCollapsed ? '3.5rem' : '12rem'}}
                  >
                    <div className="flex items-center space-x-3 relative w-full">
                      {React.cloneElement(link.icon, {
                        className: `w-5 h-5 ${
                          isActive ? 'text-green-700 drop-shadow' : 'text-gray-500'
                        }`,
                        style: { minWidth: '1.25rem', minHeight: '1.25rem', display: 'inline-block' }
                      })}
                      <span className={`font-medium whitespace-nowrap text-base overflow-hidden text-ellipsis ${
                        isCollapsed ? 'hidden' : 'block'
                      }`} style={{maxWidth: '9rem', display: isCollapsed ? 'none' : 'block'}}>
                        {link.title}
                      </span>
                      {/* Tooltip for collapsed state */}
                      {isCollapsed && (
                        <div className="absolute left-full ml-2 px-2 py-1 bg-green-700 text-white text-sm rounded shadow-lg hidden group-hover:block whitespace-nowrap z-50">
                          {link.title}
                        </div>
                      )}
                    </div>
                    {!isCollapsed && (
                      <ChevronRightIcon
                        className={`w-4 h-4 ${
                          isActive ? 'text-green-700' : 'text-gray-400'
                        }`}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
        {/* Main Content */}
        <div 
          className={`flex-1 transition-all duration-300 ${
            hideSidebar 
              ? 'ml-0 p-2 sm:p-6' 
              : isMobile 
                ? 'ml-0 p-2 sm:p-4' 
                : isCollapsed 
                  ? 'ml-16 p-2 sm:p-6'
                  : 'ml-64 p-2 sm:p-6'
          }`}
        >
          {hideSidebar ? (
            // For overview page - no container, full width
            <div className="animate-fadein">{children}</div>
          ) : (
            // For other pages - with container styling
            <div className="bg-white/90 rounded-2xl shadow-2xl p-4 sm:p-8 border border-green-100 animate-fadein" style={{backdropFilter: 'blur(6px)'}}>
              {children}
            </div>
          )}
        </div>
      </div>
      {/* Full Width Footer Section - Outside main layout */}
      <div className="w-full mt-8">
        <UpperFooter />
        <LowerFooter />
      </div>
      {/* Animations */}
      <style>{`
        .animate-fadein {
          animation: fadein 0.7s cubic-bezier(.4,0,.2,1);
        }
        @keyframes fadein {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
export default InsightsLayout;