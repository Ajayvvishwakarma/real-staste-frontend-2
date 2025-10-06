import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { apiRequest, API_ENDPOINTS } from '../../utils/api';
import Admin_Navbar from './Admin_Navbar';
import Admin_Sidebar from './Admin_Sidebar';

const Analytics = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState('overview');
  const navigate = useNavigate();
  const location = useLocation();

  // Set active view based on URL path
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('/users')) {
      setActiveView('users');
    } else if (path.includes('/properties')) {
      setActiveView('properties');
    } else if (path.includes('/financial')) {
      setActiveView('financial');
    } else {
      setActiveView('overview');
    }
  }, [location.pathname]);

  const [analyticsData, setAnalyticsData] = useState({
    overview: {
      totalRevenue: 0,
      totalUsers: 0,
      totalProperties: 0,
      totalAppointments: 0,
      conversionRate: 0,
      growthRate: 0
    },
    userAnalytics: {
      newUsers: [],
      usersByRole: {},
      activeUsers: 0
    },
    propertyAnalytics: {
      propertiesByType: {},
      propertiesByCity: {},
      averagePrice: 0,
      propertyViews: []
    },
    revenueData: [],
    topPerformers: []
  });
  const [loading, setLoading] = useState(true);
  const [selectedDateRange, setSelectedDateRange] = useState('30');
  const [selectedChart, setSelectedChart] = useState('revenue');

  useEffect(() => {
    loadAnalyticsData();
  }, [selectedDateRange]);

  const loadAnalyticsData = async () => {
    try {
      setLoading(true);
      // Mock data - replace with actual API calls
      const mockData = {
        overview: {
          totalRevenue: 2450000,
          totalUsers: 1248,
          totalProperties: 892,
          totalAppointments: 156,
          conversionRate: 12.5,
          growthRate: 18.3
        },
        userAnalytics: {
          newUsers: [
            { date: '2024-01-01', count: 15 },
            { date: '2024-01-02', count: 23 },
            { date: '2024-01-03', count: 18 },
            { date: '2024-01-04', count: 31 },
            { date: '2024-01-05', count: 28 },
            { date: '2024-01-06', count: 22 },
            { date: '2024-01-07', count: 35 }
          ],
          usersByRole: {
            agents: 456,
            clients: 678,
            staff: 89,
            admins: 25
          },
          activeUsers: 834
        },
        propertyAnalytics: {
          propertiesByType: {
            'Apartment': 345,
            'Villa': 123,
            'Commercial': 89,
            'Plot': 234,
            'House': 101
          },
          propertiesByCity: {
            'Delhi': 234,
            'Mumbai': 189,
            'Bangalore': 167,
            'Chennai': 145,
            'Hyderabad': 157
          },
          averagePrice: 8500000,
          propertyViews: [
            { date: '2024-01-01', views: 1234 },
            { date: '2024-01-02', views: 1567 },
            { date: '2024-01-03', views: 1890 },
            { date: '2024-01-04', views: 2123 },
            { date: '2024-01-05', views: 1876 },
            { date: '2024-01-06', views: 2234 },
            { date: '2024-01-07', views: 2567 }
          ]
        },
        revenueData: [
          { month: 'Jan', revenue: 180000 },
          { month: 'Feb', revenue: 220000 },
          { month: 'Mar', revenue: 280000 },
          { month: 'Apr', revenue: 350000 },
          { month: 'May', revenue: 420000 },
          { month: 'Jun', revenue: 380000 }
        ],
        topPerformers: [
          { name: 'John Doe', role: 'Agent', sales: 25, revenue: 125000 },
          { name: 'Sarah Smith', role: 'Agent', sales: 22, revenue: 110000 },
          { name: 'Mike Wilson', role: 'Staff', sales: 18, revenue: 90000 },
          { name: 'Lisa Brown', role: 'Agent', sales: 15, revenue: 75000 }
        ]
      };
      setAnalyticsData(mockData);
    } catch (error) {
      console.error('Error loading analytics data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const ChartComponent = ({ type, data }) => {
    // Simple chart representation - you can replace with actual chart library like Chart.js or Recharts
    if (type === 'revenue') {
      return (
        <div className="space-y-4">
          {analyticsData.revenueData.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-12 text-sm text-gray-600">{item.month}</div>
              <div className="flex-1">
                <div className="bg-gray-200 rounded-full h-4 relative overflow-hidden">
                  <div 
                    className="bg-blue-500 h-4 rounded-full transition-all duration-300"
                    style={{ width: `${(item.revenue / Math.max(...analyticsData.revenueData.map(d => d.revenue))) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="w-24 text-sm text-gray-900">{formatCurrency(item.revenue)}</div>
            </div>
          ))}
        </div>
      );
    }

    if (type === 'users') {
      return (
        <div className="space-y-4">
          {analyticsData.userAnalytics.newUsers.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-16 text-sm text-gray-600">{new Date(item.date).toLocaleDateString()}</div>
              <div className="flex-1">
                <div className="bg-gray-200 rounded-full h-4 relative overflow-hidden">
                  <div 
                    className="bg-green-500 h-4 rounded-full transition-all duration-300"
                    style={{ width: `${(item.count / Math.max(...analyticsData.userAnalytics.newUsers.map(d => d.count))) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="w-12 text-sm text-gray-900">{item.count}</div>
            </div>
          ))}
        </div>
      );
    }

    if (type === 'properties') {
      return (
        <div className="space-y-4">
          {Object.entries(analyticsData.propertyAnalytics.propertiesByType).map(([type, count], index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-20 text-sm text-gray-600">{type}</div>
              <div className="flex-1">
                <div className="bg-gray-200 rounded-full h-4 relative overflow-hidden">
                  <div 
                    className="bg-purple-500 h-4 rounded-full transition-all duration-300"
                    style={{ width: `${(count / Math.max(...Object.values(analyticsData.propertyAnalytics.propertiesByType))) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="w-12 text-sm text-gray-900">{count}</div>
            </div>
          ))}
        </div>
      );
    }

    return <div className="text-center text-gray-500">Chart not available</div>;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar - Full Width */}
      <Admin_Navbar onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />

      {/* Sidebar - Left side below navbar */}
      <Admin_Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main content */}
      <div className="pt-16 lg:pl-64 min-h-screen transition-all duration-300">
        <main className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
            {/* Page header */}
            <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>
                <p className="text-gray-600">Monitor your business performance and growth</p>
              </div>
              
              <div className="mt-4 sm:mt-0">
                <select
                  value={selectedDateRange}
                  onChange={(e) => setSelectedDateRange(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="7">Last 7 days</option>
                  <option value="30">Last 30 days</option>
                  <option value="90">Last 3 months</option>
                  <option value="365">Last year</option>
                </select>
              </div>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">{formatCurrency(analyticsData.overview.totalRevenue)}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m9 5.197v1M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Users</p>
                    <p className="text-2xl font-bold text-gray-900">{analyticsData.overview.totalUsers.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Properties</p>
                    <p className="text-2xl font-bold text-gray-900">{analyticsData.overview.totalProperties.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-orange-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Appointments</p>
                    <p className="text-2xl font-bold text-gray-900">{analyticsData.overview.totalAppointments.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                    <p className="text-2xl font-bold text-gray-900">{analyticsData.overview.conversionRate}%</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Growth Rate</p>
                    <p className="text-2xl font-bold text-green-600">+{analyticsData.overview.growthRate}%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Revenue Chart */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">Revenue Trends</h3>
                    <select
                      value={selectedChart}
                      onChange={(e) => setSelectedChart(e.target.value)}
                      className="text-sm border border-gray-300 rounded px-2 py-1"
                    >
                      <option value="revenue">Revenue</option>
                      <option value="users">Users</option>
                      <option value="properties">Properties</option>
                    </select>
                  </div>
                </div>
                <div className="p-6">
                  <ChartComponent type={selectedChart} data={analyticsData} />
                </div>
              </div>

              {/* Top Performers */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Top Performers</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {analyticsData.topPerformers.map((performer, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                              <span className="text-white font-medium text-sm">
                                {performer.name.charAt(0)}
                              </span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{performer.name}</p>
                            <p className="text-xs text-gray-500">{performer.role}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">{performer.sales} sales</p>
                          <p className="text-xs text-gray-500">{formatCurrency(performer.revenue)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Users by Role */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Users by Role</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {Object.entries(analyticsData.userAnalytics.usersByRole).map(([role, count], index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 capitalize">{role}</span>
                        <span className="text-sm font-medium text-gray-900">{count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Properties by City */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Properties by City</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {Object.entries(analyticsData.propertyAnalytics.propertiesByCity)
                      .sort(([,a], [,b]) => b - a)
                      .map(([city, count], index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{city}</span>
                        <span className="text-sm font-medium text-gray-900">{count}</span>
                      </div>
                    ))}
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

export default Analytics;