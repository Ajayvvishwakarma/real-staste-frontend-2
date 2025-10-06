import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Admin_Navbar from './Admin_Navbar';
import Admin_Sidebar from './Admin_Sidebar';

const MarketingManagement = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [selectedTab, setSelectedTab] = useState('campaigns');
  const [campaigns, setCampaigns] = useState([]);
  const [emailTemplates, setEmailTemplates] = useState([]);
  const [seoSettings, setSeoSettings] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mock data
  useEffect(() => {
    setCampaigns([
      {
        id: 1,
        name: 'Summer Property Sale',
        type: 'Email',
        status: 'Active',
        startDate: '2024-06-01',
        endDate: '2024-08-31',
        reach: 12500,
        engagement: '15.3%',
        conversions: 234
      },
      {
        id: 2,
        name: 'New Year Promotions',
        type: 'Social Media',
        status: 'Completed',
        startDate: '2024-01-01',
        endDate: '2024-01-31',
        reach: 25000,
        engagement: '22.7%',
        conversions: 456
      },
      {
        id: 3,
        name: 'Premium Properties Launch',
        type: 'Multi-channel',
        status: 'Draft',
        startDate: '2024-03-15',
        endDate: '2024-04-15',
        reach: 0,
        engagement: '0%',
        conversions: 0
      }
    ]);

    setEmailTemplates([
      {
        id: 1,
        name: 'Welcome New User',
        subject: 'Welcome to Bhoomi The Real Estate',
        type: 'Transactional',
        lastModified: '2024-02-15',
        status: 'Active'
      },
      {
        id: 2,
        name: 'Property Alert',
        subject: 'New properties matching your criteria',
        type: 'Marketing',
        lastModified: '2024-02-10',
        status: 'Active'
      },
      {
        id: 3,
        name: 'Monthly Newsletter',
        subject: 'Your Monthly Property Market Update',
        type: 'Newsletter',
        lastModified: '2024-02-01',
        status: 'Draft'
      }
    ]);

    setSeoSettings({
      metaTitle: 'Best Real Estate Properties in India | RealEstate India',
      metaDescription: 'Find your dream property with RealEstate India. Explore apartments, houses, and commercial properties across major cities.',
      keywords: ['real estate', 'properties', 'apartments', 'houses', 'commercial properties'],
      canonicalUrl: 'https://realestateindia.com',
      robotsTxt: 'User-agent: *\nAllow: /',
      sitemapUrl: 'https://realestateindia.com/sitemap.xml'
    });
  }, []);

  const tabs = [
    { id: 'campaigns', label: 'Campaigns', count: campaigns.length },
    { id: 'emails', label: 'Email Templates', count: emailTemplates.length },
    { id: 'seo', label: 'SEO Management', count: null }
  ];

  const getCampaignStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Completed':
        return 'bg-blue-100 text-blue-800';
      case 'Draft':
        return 'bg-gray-100 text-gray-800';
      case 'Paused':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderCampaigns = () => (
    <div className="space-y-6">
      {/* Campaigns Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Marketing Campaigns</h2>
          <p className="text-gray-600">Manage your marketing campaigns and track performance</p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200">
          <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Create Campaign
        </button>
      </div>

      {/* Campaigns Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Campaigns</p>
              <p className="text-2xl font-bold text-gray-900">
                {campaigns.filter(c => c.status === 'Active').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Reach</p>
              <p className="text-2xl font-bold text-gray-900">
                {campaigns.reduce((sum, c) => sum + c.reach, 0).toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Avg. Engagement</p>
              <p className="text-2xl font-bold text-gray-900">18.2%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-orange-100 p-3 rounded-lg">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Conversions</p>
              <p className="text-2xl font-bold text-gray-900">
                {campaigns.reduce((sum, c) => sum + c.conversions, 0)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Campaigns List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">All Campaigns</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reach</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{campaign.name}</div>
                      <div className="text-sm text-gray-500">{campaign.startDate} - {campaign.endDate}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{campaign.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getCampaignStatusColor(campaign.status)}`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{campaign.reach.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{campaign.engagement}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{campaign.conversions}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">Edit</button>
                      <button className="text-red-600 hover:text-red-900">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderEmailTemplates = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Email Templates</h2>
          <p className="text-gray-600">Manage email templates for different purposes</p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200">
          <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Create Template
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {emailTemplates.map((template) => (
          <div key={template.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{template.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{template.subject}</p>
                <div className="mt-3 flex items-center space-x-4">
                  <span className="text-xs text-gray-500">{template.type}</span>
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    template.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {template.status}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">Last modified: {template.lastModified}</p>
              </div>
              <div className="ml-4">
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6 flex space-x-2">
              <button className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 font-medium text-sm rounded-lg transition-colors">
                Edit
              </button>
              <button className="px-3 py-2 bg-gray-50 text-gray-600 hover:bg-gray-100 font-medium text-sm rounded-lg transition-colors">
                Preview
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSEOManagement = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">SEO Management</h2>
        <p className="text-gray-600">Optimize your website for search engines</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Meta Information */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Meta Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Meta Title</label>
              <input
                type="text"
                value={seoSettings.metaTitle}
                onChange={(e) => setSeoSettings({...seoSettings, metaTitle: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">Characters: {seoSettings.metaTitle.length}/60</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
              <textarea
                value={seoSettings.metaDescription}
                onChange={(e) => setSeoSettings({...seoSettings, metaDescription: e.target.value})}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">Characters: {seoSettings.metaDescription.length}/160</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Keywords</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {seoSettings.keywords.map((keyword, index) => (
                  <span key={index} className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {keyword}
                    <button className="ml-2 text-blue-600 hover:text-blue-800">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                placeholder="Add keyword and press Enter"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Technical SEO */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical SEO</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Canonical URL</label>
              <input
                type="url"
                value={seoSettings.canonicalUrl}
                onChange={(e) => setSeoSettings({...seoSettings, canonicalUrl: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Robots.txt</label>
              <textarea
                value={seoSettings.robotsTxt}
                onChange={(e) => setSeoSettings({...seoSettings, robotsTxt: e.target.value})}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sitemap URL</label>
              <input
                type="url"
                value={seoSettings.sitemapUrl}
                onChange={(e) => setSeoSettings({...seoSettings, sitemapUrl: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200">
          Save SEO Settings
        </button>
      </div>
    </div>
  );

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
            {/* Page header */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Marketing Management</h1>
                  <p className="mt-2 text-gray-600">Manage campaigns, email templates, and SEO settings</p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="mb-8">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-4 lg:space-x-8 overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedTab(tab.id)}
                      className={`py-3 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                        selectedTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.label}
                      {tab.count && (
                        <span className="ml-2 py-0.5 px-2.5 rounded-full text-xs bg-gray-100 text-gray-900 font-medium">
                          {tab.count}
                        </span>
                      )}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Tab Content */}
            {selectedTab === 'campaigns' && renderCampaigns()}
            {selectedTab === 'emails' && renderEmailTemplates()}
            {selectedTab === 'seo' && renderSEOManagement()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MarketingManagement;