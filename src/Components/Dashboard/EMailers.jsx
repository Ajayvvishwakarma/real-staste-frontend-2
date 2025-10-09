import React, { useState, useEffect } from 'react';
import CreateCampaignForm from './CreateCampaignForm';
import { getAllCampaigns, createCampaign, deleteCampaign, getCampaignStats } from '../../services/campaignAPI';

const EMailers = ({ onBackToDashboard }) => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [activeTab, setActiveTab] = useState('all-campaigns');
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [stats, setStats] = useState({
    totalCampaigns: 0,
    activeCampaigns: 0,
    totalEmailsSent: 0,
    averageOpenRate: '0%'
  });
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch campaigns on component mount
  useEffect(() => {
    fetchCampaigns();
    fetchStats();
  }, []);

  const fetchCampaigns = async () => {
    setLoading(true);
    setError('');
    
    const result = await getAllCampaigns();
    
    if (result.success) {
      setCampaigns(result.data);
    } else {
      setError(result.error);
      // Use mock data as fallback
      setCampaigns([
        {
          _id: '1',
          campaignName: 'Property Showcase Sept',
          subject: 'New Properties Available in Your Area',
          recipients: 156,
          status: 'sent',
          sentDate: '20 Sep, 2025',
          openRate: '28.2%'
        },
        {
          _id: '2',
          campaignName: 'Monthly Newsletter',
          subject: 'Market Updates & New Listings',
          recipients: 89,
          status: 'draft',
          sentDate: '-',
          openRate: '-'
        }
      ]);
    }
    
    setLoading(false);
  };

  const fetchStats = async () => {
    const result = await getCampaignStats();
    
    if (result.success) {
      setStats(result.data);
    }
  };

  const handleCreateCampaign = async (formData) => {
    const campaignData = {
      campaignName: formData.campaignName,
      subject: formData.subject,
      emailContent: formData.emailContent,
      recipientList: formData.recipientList.split('\n').filter(email => email.trim()),
      recipients: formData.recipientList.split('\n').filter(email => email.trim()).length,
      status: 'draft',
      createdAt: new Date().toISOString()
    };

    const result = await createCampaign(campaignData);
    
    if (result.success) {
      // Add new campaign to the list
      setCampaigns([result.data, ...campaigns]);
      setShowCreateForm(false);
      setSuccessMessage('Campaign created successfully!');
      
      // Refresh stats
      fetchStats();
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(''), 3000);
    } else {
      throw new Error(result.error);
    }
  };

  const handleDeleteCampaign = async (campaignId) => {
    if (!window.confirm('Are you sure you want to delete this campaign?')) {
      return;
    }

    const result = await deleteCampaign(campaignId);
    
    if (result.success) {
      setCampaigns(campaigns.filter(c => c._id !== campaignId));
      setSuccessMessage('Campaign deleted successfully!');
      fetchStats();
      setTimeout(() => setSuccessMessage(''), 3000);
    } else {
      setError(result.error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-700 text-white min-h-screen">
          <div className="p-4">
            <button 
              onClick={onBackToDashboard}
              className="mb-4 text-blue-300 hover:text-blue-200 text-sm"
            >
              ← Back to Dashboard
            </button>
            <h2 className="text-lg font-semibold mb-4">E-Mailers</h2>
            <nav className="space-y-2">
              <button 
                onClick={() => setActiveTab('create-emailer')}
                className={`w-full text-left px-3 py-2 rounded transition-colors ${activeTab === 'create-emailer' ? 'bg-slate-600 text-white' : 'hover:bg-slate-600 text-white'}`}>
                Create E-Mailer
              </button>
              <button 
                onClick={() => setActiveTab('active-campaigns')}
                className={`w-full text-left px-3 py-2 rounded transition-colors ${activeTab === 'active-campaigns' ? 'bg-slate-600 text-white' : 'hover:bg-slate-600 text-white'}`}>
                Active Campaigns
              </button>
              <button 
                onClick={() => setActiveTab('campaign-history')}
                className={`w-full text-left px-3 py-2 rounded transition-colors ${activeTab === 'campaign-history' ? 'bg-slate-600 text-white' : 'hover:bg-slate-600 text-white'}`}>
                Campaign History
              </button>
              <button 
                onClick={() => setActiveTab('templates')}
                className={`w-full text-left px-3 py-2 rounded transition-colors ${activeTab === 'templates' ? 'bg-slate-600 text-white' : 'hover:bg-slate-600 text-white'}`}>
                Templates
              </button>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b">
              <h1 className="text-2xl font-bold text-gray-900">E-Mailers</h1>
              <p className="text-gray-600 mt-2">Create and manage email campaigns for your properties</p>
            </div>
            
            <div className="p-6">
              {/* Success Message */}
              {successMessage && (
                <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative">
                  <span className="block sm:inline">{successMessage}</span>
                </div>
              )}
              
              {/* Error Message */}
              {error && (
                <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
                  <span className="block sm:inline">{error}</span>
                </div>
              )}
              
              {/* Tab indicator */}
              {activeTab === 'all-campaigns' && (
                <h3 className="text-lg font-medium mb-4">All Campaigns</h3>
              )}
              {activeTab === 'create-emailer' && (
                <h3 className="text-lg font-medium mb-4">Create E-Mailer</h3>
              )}
              {activeTab === 'active-campaigns' && (
                <h3 className="text-lg font-medium mb-4">Active Campaigns</h3>
              )}
              {activeTab === 'campaign-history' && (
                <h3 className="text-lg font-medium mb-4">Campaign History</h3>
              )}
              {activeTab === 'templates' && (
                <h3 className="text-lg font-medium mb-4">Templates</h3>
              )}
              {/* Action Buttons */}
              <div className="mb-6">
                <button 
                  onClick={() => setShowCreateForm(true)}
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 mr-4"
                >
                  Create New Campaign
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-50">
                  View Templates
                </button>
              </div>

              {showCreateForm && (
                <CreateCampaignForm
                  onClose={() => setShowCreateForm(false)}
                  onSubmit={handleCreateCampaign}
                />
              )}

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900">Total Campaigns</h3>
                  <p className="text-2xl font-bold text-blue-600">{stats.totalCampaigns || campaigns.length}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900">Active Campaigns</h3>
                  <p className="text-2xl font-bold text-green-600">
                    {stats.activeCampaigns || campaigns.filter(c => c.status === 'sent').length}
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-900">Total Emails Sent</h3>
                  <p className="text-2xl font-bold text-yellow-600">
                    {stats.totalEmailsSent || campaigns.reduce((sum, c) => sum + (c.recipients || 0), 0)}
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900">Open Rate</h3>
                  <p className="text-2xl font-bold text-purple-600">{stats.averageOpenRate || '0%'}</p>
                </div>
              </div>

              {/* Campaigns Table */}
              {loading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="mt-4 text-gray-600">Loading campaigns...</p>
                </div>
              ) : campaigns.length === 0 ? (
                <div className="text-center py-8">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No campaigns</h3>
                  <p className="mt-1 text-sm text-gray-500">Get started by creating a new campaign.</p>
                  <div className="mt-6">
                    <button
                      onClick={() => setShowCreateForm(true)}
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Create New Campaign
                    </button>
                  </div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left">Campaign Name</th>
                        <th className="px-4 py-3 text-left">Subject</th>
                        <th className="px-4 py-3 text-left">Recipients</th>
                        <th className="px-4 py-3 text-left">Status</th>
                        <th className="px-4 py-3 text-left">Date</th>
                        <th className="px-4 py-3 text-left">Open Rate</th>
                        <th className="px-4 py-3 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {campaigns.map(campaign => (
                        <tr key={campaign._id || campaign.id} className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium">{campaign.campaignName || campaign.name}</td>
                          <td className="px-4 py-3">{campaign.subject}</td>
                          <td className="px-4 py-3">{campaign.recipients}</td>
                          <td className="px-4 py-3">
                            <span className={`${
                              campaign.status === 'sent' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            } px-2 py-1 rounded-full text-xs font-medium`}>
                              {campaign.status === 'sent' ? 'Sent' : 'Draft'}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            {campaign.sentDate || new Date(campaign.createdAt).toLocaleDateString() || '-'}
                          </td>
                          <td className="px-4 py-3">{campaign.openRate || '-'}</td>
                          <td className="px-4 py-3">
                            {campaign.status === 'sent' ? (
                              <>
                                <button className="text-blue-600 hover:text-blue-800 mr-2 text-xs sm:text-sm">View</button>
                                <button className="text-gray-600 hover:text-gray-800 text-xs sm:text-sm">Duplicate</button>
                              </>
                            ) : (
                              <>
                                <button className="text-blue-600 hover:text-blue-800 mr-2 text-xs sm:text-sm">Edit</button>
                                <button 
                                  onClick={() => handleDeleteCampaign(campaign._id || campaign.id)}
                                  className="text-red-600 hover:text-red-800 text-xs sm:text-sm"
                                >
                                  Delete
                                </button>
                              </>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EMailers;