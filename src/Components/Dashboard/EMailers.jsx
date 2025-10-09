import React, { useState } from 'react';
import CreateCampaignForm from './CreateCampaignForm';

const EMailers = ({ onBackToDashboard }) => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'Property Showcase Sept',
      subject: 'New Properties Available in Your Area',
      recipients: 156,
      status: 'sent',
      sentDate: '20 Sep, 2025',
      openRate: '28.2%'
    },
    {
      id: 2,
      name: 'Monthly Newsletter',
      subject: 'Market Updates & New Listings',
      recipients: 89,
      status: 'draft',
      sentDate: '-',
      openRate: '-'
    }
  ]);

  const handleCreateCampaign = (formData) => {
    const newCampaign = {
      id: campaigns.length + 1,
      name: formData.campaignName,
      subject: formData.subject,
      recipients: formData.recipientList.split('\n').length,
      status: 'draft',
      sentDate: '-',
      openRate: '-'
    };

    setCampaigns([newCampaign, ...campaigns]);
    setShowCreateForm(false);
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
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Create E-Mailer</a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Active Campaigns</a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Campaign History</a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Templates</a>
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
                  <p className="text-2xl font-bold text-blue-600">12</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900">Active Campaigns</h3>
                  <p className="text-2xl font-bold text-green-600">5</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-900">Total Emails Sent</h3>
                  <p className="text-2xl font-bold text-yellow-600">1,247</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900">Open Rate</h3>
                  <p className="text-2xl font-bold text-purple-600">24.3%</p>
                </div>
              </div>

              {/* Campaigns Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left">Campaign Name</th>
                      <th className="px-4 py-3 text-left">Subject</th>
                      <th className="px-4 py-3 text-left">Recipients</th>
                      <th className="px-4 py-3 text-left">Status</th>
                      <th className="px-4 py-3 text-left">Sent Date</th>
                      <th className="px-4 py-3 text-left">Open Rate</th>
                      <th className="px-4 py-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {campaigns.map(campaign => (
                      <tr key={campaign.id} className="border-b">
                        <td className="px-4 py-3">{campaign.name}</td>
                        <td className="px-4 py-3">{campaign.subject}</td>
                        <td className="px-4 py-3">{campaign.recipients}</td>
                        <td className="px-4 py-3">
                          <span className={`${
                            campaign.status === 'sent' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          } px-2 py-1 rounded-full text-xs`}>
                            {campaign.status === 'sent' ? 'Sent' : 'Draft'}
                          </span>
                        </td>
                        <td className="px-4 py-3">{campaign.sentDate}</td>
                        <td className="px-4 py-3">{campaign.openRate}</td>
                        <td className="px-4 py-3">
                          {campaign.status === 'sent' ? (
                            <>
                              <button className="text-blue-600 hover:text-blue-800 mr-2">View</button>
                              <button className="text-gray-600 hover:text-gray-800">Duplicate</button>
                            </>
                          ) : (
                            <>
                              <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
                              <button className="text-red-600 hover:text-red-800">Delete</button>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EMailers;