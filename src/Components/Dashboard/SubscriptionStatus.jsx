// import React from 'react';
// const SubscriptionStatus = ({ onBackToDashboard }) => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="flex">
//         {/* Sidebar */}
//         <aside className="w-64 bg-slate-700 text-white min-h-screen">
//           <div className="p-4">
//             <button 
//               onClick={onBackToDashboard}
//               className="mb-4 text-blue-300 hover:text-blue-200 text-sm"
//             >
//               ← Back to Dashboard
//             </button>
//             <h2 className="text-lg font-semibold mb-4">Subscription</h2>
//             <nav className="space-y-2">
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Current Plan</a>
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Upgrade Plans</a>
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Billing History</a>
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Auto-Renewal</a>
//             </nav>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6">
//           <div className="bg-white rounded-lg shadow-sm">
//             <div className="p-6 border-b">
//               <h1 className="text-2xl font-bold text-gray-900">Subscription Status</h1>
//               <p className="text-gray-600 mt-2">Manage your subscription plans and billing information</p>
//             </div>
            
//             <div className="p-6">
//               {/* Current Plan Status */}
//               <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="text-xl font-semibold text-blue-900">Current Plan: Professional</h3>
//                     <p className="text-blue-700 mt-2">You're on the Professional plan with enhanced features</p>
//                     <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
//                       <div>
//                         <p className="text-sm text-blue-600">Plan Status</p>
//                         <p className="font-semibold">Active</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-blue-600">Next Billing</p>
//                         <p className="font-semibold">22 Oct, 2025</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-blue-600">Monthly Cost</p>
//                         <p className="font-semibold">₹2,999/month</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">ACTIVE</span>
//                   </div>
//                 </div>
//               </div>
//               {/* Usage Statistics */}
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
//                 <div className="bg-green-50 p-4 rounded-lg">
//                   <h4 className="text-lg font-semibold text-green-900">Listings Used</h4>
//                   <p className="text-2xl font-bold text-green-600">18/25</p>
//                   <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
//                     <div className="bg-green-600 h-2 rounded-full" style={{width: '72%'}}></div>
//                   </div>
//                 </div>
//                 <div className="bg-blue-50 p-4 rounded-lg">
//                   <h4 className="text-lg font-semibold text-blue-900">Premium Features</h4>
//                   <p className="text-2xl font-bold text-blue-600">12/15</p>
//                   <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
//                     <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
//                   </div>
//                 </div>
//                 <div className="bg-purple-50 p-4 rounded-lg">
//                   <h4 className="text-lg font-semibold text-purple-900">Lead Credits</h4>
//                   <p className="text-2xl font-bold text-purple-600">45/50</p>
//                   <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
//                     <div className="bg-purple-600 h-2 rounded-full" style={{width: '90%'}}></div>
//                   </div>
//                 </div>
//                 <div className="bg-yellow-50 p-4 rounded-lg">
//                   <h4 className="text-lg font-semibold text-yellow-900">Support Tickets</h4>
//                   <p className="text-2xl font-bold text-yellow-600">3/10</p>
//                   <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
//                     <div className="bg-yellow-600 h-2 rounded-full" style={{width: '30%'}}></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Plan Benefits */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div className="border border-gray-200 rounded-lg p-4">
//                   <h4 className="text-lg font-semibold mb-3">Current Plan Benefits</h4>
//                   <ul className="space-y-2">
//                     <li className="flex items-center">
//                       <span className="text-green-500 mr-2">✓</span>
//                       <span>25 Property Listings</span>
//                     </li>
//                     <li className="flex items-center">
//                       <span className="text-green-500 mr-2">✓</span>
//                       <span>15 Premium Features</span>
//                     </li>
//                     <li className="flex items-center">
//                       <span className="text-green-500 mr-2">✓</span>
//                       <span>50 Lead Credits per month</span>
//                     </li>
//                     <li className="flex items-center">
//                       <span className="text-green-500 mr-2">✓</span>
//                       <span>Priority Customer Support</span>
//                     </li>
//                     <li className="flex items-center">
//                       <span className="text-green-500 mr-2">✓</span>
//                       <span>Advanced Analytics</span>
//                     </li>
//                     <li className="flex items-center">
//                       <span className="text-green-500 mr-2">✓</span>
//                       <span>Custom Branding</span>
//                     </li>
//                   </ul>
//                 </div>
                
//                 <div className="border border-gray-200 rounded-lg p-4">
//                   <h4 className="text-lg font-semibold mb-3">Upgrade Benefits</h4>
//                   <ul className="space-y-2">
//                     <li className="flex items-center">
//                       <span className="text-blue-500 mr-2">→</span>
//                       <span>Unlimited Property Listings</span>
//                     </li>
//                     <li className="flex items-center">
//                       <span className="text-blue-500 mr-2">→</span>
//                       <span>All Premium Features</span>
//                     </li>
//                     <li className="flex items-center">
//                       <span className="text-blue-500 mr-2">→</span>
//                       <span>100 Lead Credits per month</span>
//                     </li>
//                     <li className="flex items-center">
//                       <span className="text-blue-500 mr-2">→</span>
//                       <span>24/7 VIP Support</span>
//                     </li>
//                     <li className="flex items-center">
//                       <span className="text-blue-500 mr-2">→</span>
//                       <span>Advanced AI Insights</span>
//                     </li>
//                     <li className="flex items-center">
//                       <span className="text-blue-500 mr-2">→</span>
//                       <span>White Label Solutions</span>
//                     </li>
//                   </ul>
//                   <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//                     Upgrade to Enterprise
//                   </button>
//                 </div>
//               </div>

//               {/* Billing Information */}
//               <div className="bg-gray-50 rounded-lg p-6 mb-6">
//                 <h4 className="text-lg font-semibold mb-4">Billing Information</h4>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <h5 className="font-medium mb-2">Payment Method</h5>
//                     <div className="flex items-center">
//                       <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs mr-3">
//                         VISA
//                       </div>
//                       <span>**** **** **** 1234</span>
//                     </div>
//                   </div>
//                   <div>
//                     <h5 className="font-medium mb-2">Auto-Renewal</h5>
//                     <div className="flex items-center">
//                       <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Enabled</span>
//                       <button className="ml-3 text-blue-600 hover:text-blue-800 text-sm">Change</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Recent Transactions */}
//               <div className="overflow-x-auto">
//                 <h4 className="text-lg font-semibold mb-4">Recent Transactions</h4>
//                 <table className="w-full text-sm">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-4 py-3 text-left">Transaction ID</th>
//                       <th className="px-4 py-3 text-left">Description</th>
//                       <th className="px-4 py-3 text-left">Amount</th>
//                       <th className="px-4 py-3 text-left">Date</th>
//                       <th className="px-4 py-3 text-left">Status</th>
//                       <th className="px-4 py-3 text-left">Invoice</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr className="border-b">
//                       <td className="px-4 py-3">TXN001234</td>
//                       <td className="px-4 py-3">Professional Plan - Monthly</td>
//                       <td className="px-4 py-3">₹2,999</td>
//                       <td className="px-4 py-3">22 Sep, 2025</td>
//                       <td className="px-4 py-3">
//                         <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Paid</span>
//                       </td>
//                       <td className="px-4 py-3">
//                         <button className="text-blue-600 hover:text-blue-800">Download</button>
//                       </td>
//                     </tr>
//                     <tr className="border-b">
//                       <td className="px-4 py-3">TXN001233</td>
//                       <td className="px-4 py-3">Lead Credits Purchase</td>
//                       <td className="px-4 py-3">₹1,499</td>
//                       <td className="px-4 py-3">15 Sep, 2025</td>
//                       <td className="px-4 py-3">
//                         <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Paid</span>
//                       </td>
//                       <td className="px-4 py-3">
//                         <button className="text-blue-600 hover:text-blue-800">Download</button>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default SubscriptionStatus;












import React, { useState, useEffect } from 'react';

// Replace with your backend API endpoint for subscription data
const API_URL = 'http://localhost:8000/api/subscription';

const SubscriptionStatusIntegration = ({ onBackToDashboard }) => {
  const [subscriptionData, setSubscriptionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch subscription data from backend
  const fetchSubscriptionData = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        throw new Error('You are not logged in. Please login to view subscription.');
      }

      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch subscription data.');
      }

      const data = await response.json();
      setSubscriptionData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscriptionData();
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading subscription data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="max-w-md bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-lg font-semibold text-red-600">Error</h3>
          <p className="text-sm text-gray-600 mt-2">{error}</p>
          <button
            onClick={fetchSubscriptionData}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!subscriptionData) {
    return null; // Data not yet available
  }

  const { currentPlan, usageStats, billingInfo, transactions } = subscriptionData;

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
            <h2 className="text-lg font-semibold mb-4">Subscription</h2>
            <nav className="space-y-2">
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Current Plan</a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Upgrade Plans</a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Billing History</a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Auto-Renewal</a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b">
              <h1 className="text-2xl font-bold text-gray-900">Subscription Status</h1>
              <p className="text-gray-600 mt-2">Manage your subscription plans and billing information</p>
            </div>
            
            <div className="p-6">
              {/* Current Plan Status */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900">
                      Current Plan: {currentPlan.name}
                    </h3>
                    <p className="text-blue-700 mt-2">{currentPlan.description}</p>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-blue-600">Plan Status</p>
                        <p className="font-semibold">{currentPlan.status}</p>
                      </div>
                      <div>
                        <p className="text-sm text-blue-600">Next Billing</p>
                        <p className="font-semibold">{currentPlan.nextBilling}</p>
                      </div>
                      <div>
                        <p className="text-sm text-blue-600">Monthly Cost</p>
                        <p className="font-semibold">₹{currentPlan.cost}/month</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {currentPlan.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Usage Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                {usageStats.map((stat) => (
                  <div
                    key={stat.name}
                    className={`p-4 rounded-lg ${stat.bgColor}`}
                  >
                    <h4 className={`text-lg font-semibold ${stat.titleColor}`}>{stat.name}</h4>
                    <p className={`text-2xl font-bold ${stat.valueColor}`}>{stat.used}/{stat.total}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className={`${stat.progressBarColor} h-2 rounded-full`}
                        style={{ width: `${(stat.used / stat.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Billing Information */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">Billing Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2">Payment Method</h5>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs mr-3">
                        {billingInfo.paymentMethod.type}
                      </div>
                      <span>{billingInfo.paymentMethod.last4}</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Auto-Renewal</h5>
                    <div className="flex items-center">
                      <span className={`px-2 py-1 rounded text-sm ${billingInfo.autoRenewal.status === 'Enabled' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {billingInfo.autoRenewal.status}
                      </span>
                      <button className="ml-3 text-blue-600 hover:text-blue-800 text-sm">
                        {billingInfo.autoRenewal.action}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="overflow-x-auto">
                <h4 className="text-lg font-semibold mb-4">Recent Transactions</h4>
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      {['Transaction ID', 'Description', 'Amount', 'Date', 'Status', 'Invoice'].map((header) => (
                        <th
                          key={header}
                          className="px-4 py-3 text-left"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((txn) => (
                      <tr
                        key={txn.id}
                        className="border-b"
                      >
                        <td className="px-4 py-3">{txn.id}</td>
                        <td className="px-4 py-3">{txn.description}</td>
                        <td className="px-4 py-3">₹{txn.amount}</td>
                        <td className="px-4 py-3">{txn.date}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${txn.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {txn.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <button className="text-blue-600 hover:text-blue-800">
                            Download
                          </button>
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

export default SubscriptionStatusIntegration;