// import React from 'react';

// const PremiumListings = ({ onBackToDashboard }) => {
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
//             <h2 className="text-lg font-semibold mb-4">Premium Listings</h2>
//             <nav className="space-y-2">
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Active Premium</a>
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Inactive Premium</a>
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Premium Analytics</a>
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">VIP Support</a>
//             </nav>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6">
//           <div className="bg-white rounded-lg shadow-sm">
//             <div className="p-6 border-b">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <h1 className="text-2xl font-bold text-gray-900">Premium Listings</h1>
//                   <p className="text-gray-600 mt-2">Ultimate property listings with exclusive benefits and maximum exposure</p>
//                 </div>
//                 <div className="text-right">
//                   <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-semibold">PREMIUM PLAN</span>
//                 </div>
//               </div>
//             </div>
            
//             <div className="p-6">
//               {/* Plan Features */}
//               <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4 mb-6">
//                 <h3 className="text-lg font-semibold mb-3 text-orange-900">Premium Listing Features</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>All Platinum features included</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Unlimited photos + 360° virtual tour</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Top position guarantee</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Homepage banner placement</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Dedicated relationship manager</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Real-time lead notifications</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>90-day validity</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Multi-platform advertising</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>VIP customer support (24/7)</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Custom property brochures</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Quick Stats */}
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
//                 <div className="bg-blue-50 p-4 rounded-lg">
//                   <h3 className="text-lg font-semibold text-blue-900">Total Premium</h3>
//                   <p className="text-2xl font-bold text-blue-600">4</p>
//                 </div>
//                 <div className="bg-green-50 p-4 rounded-lg">
//                   <h3 className="text-lg font-semibold text-green-900">Active</h3>
//                   <p className="text-2xl font-bold text-green-600">4</p>
//                 </div>
//                 <div className="bg-yellow-50 p-4 rounded-lg">
//                   <h3 className="text-lg font-semibold text-yellow-900">Views This Month</h3>
//                   <p className="text-2xl font-bold text-yellow-600">2,567</p>
//                 </div>
//                 <div className="bg-purple-50 p-4 rounded-lg">
//                   <h3 className="text-lg font-semibold text-purple-900">Leads Generated</h3>
//                   <p className="text-2xl font-bold text-purple-600">78</p>
//                 </div>
//               </div>

//               {/* VIP Benefits */}
//               <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-4 mb-6">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h4 className="text-lg font-semibold text-orange-900 flex items-center">
//                       <span className="mr-2">👑</span>
//                       VIP Premium Benefits Active
//                     </h4>
//                     <p className="text-orange-700">Your Premium listings are getting maximum exposure across all channels</p>
//                     <div className="mt-2 flex space-x-4 text-sm">
//                       <span className="text-orange-600">• 5x more visibility</span>
//                       <span className="text-orange-600">• 7.8x more leads</span>
//                       <span className="text-orange-600">• Dedicated support</span>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 mb-2">
//                       Call Relationship Manager
//                     </button>
//                     <br />
//                     <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded hover:from-yellow-600 hover:to-orange-600">
//                       Premium Analytics
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Premium Listings Table */}
//               <div className="overflow-x-auto">
//                 <table className="w-full text-sm">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-4 py-3 text-left">Property ID</th>
//                       <th className="px-4 py-3 text-left">Title</th>
//                       <th className="px-4 py-3 text-left">Location</th>
//                       <th className="px-4 py-3 text-left">Price</th>
//                       <th className="px-4 py-3 text-left">Status</th>
//                       <th className="px-4 py-3 text-left">Views</th>
//                       <th className="px-4 py-3 text-left">Leads</th>
//                       <th className="px-4 py-3 text-left">Expires</th>
//                       <th className="px-4 py-3 text-left">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr className="border-b bg-gradient-to-r from-yellow-50 to-orange-50">
//                       <td className="px-4 py-3">
//                         <div className="flex items-center">
//                           <span className="text-orange-600 mr-1">👑</span>
//                           PRM001
//                         </div>
//                       </td>
//                       <td className="px-4 py-3">
//                         <div className="flex items-center">
//                           <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-2 py-0.5 rounded text-xs mr-2 font-semibold">PREMIUM</span>
//                           Ultra Luxury 5 BHK Villa
//                         </div>
//                       </td>
//                       <td className="px-4 py-3">DLF Phase 1, Gurgaon</td>
//                       <td className="px-4 py-3">₹8.5 Cr</td>
//                       <td className="px-4 py-3">
//                         <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Active</span>
//                       </td>
//                       <td className="px-4 py-3">1,234</td>
//                       <td className="px-4 py-3">45</td>
//                       <td className="px-4 py-3">20 Dec, 2025</td>
//                       <td className="px-4 py-3">
//                         <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
//                         <button className="text-orange-600 hover:text-orange-800 mr-2">Analytics</button>
//                         <button className="text-green-600 hover:text-green-800 mr-2">Promote</button>
//                         <button className="text-purple-600 hover:text-purple-800">VIP Support</button>
//                       </td>
//                     </tr>
//                     <tr className="border-b bg-gradient-to-r from-yellow-50 to-orange-50">
//                       <td className="px-4 py-3">
//                         <div className="flex items-center">
//                           <span className="text-orange-600 mr-1">👑</span>
//                           PRM002
//                         </div>
//                       </td>
//                       <td className="px-4 py-3">
//                         <div className="flex items-center">
//                           <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-2 py-0.5 rounded text-xs mr-2 font-semibold">PREMIUM</span>
//                           Luxury 4 BHK Duplex
//                         </div>
//                       </td>
//                       <td className="px-4 py-3">Golf Course Ext Road</td>
//                       <td className="px-4 py-3">₹4.2 Cr</td>
//                       <td className="px-4 py-3">
//                         <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Active</span>
//                       </td>
//                       <td className="px-4 py-3">867</td>
//                       <td className="px-4 py-3">33</td>
//                       <td className="px-4 py-3">25 Dec, 2025</td>
//                       <td className="px-4 py-3">
//                         <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
//                         <button className="text-orange-600 hover:text-orange-800 mr-2">Analytics</button>
//                         <button className="text-green-600 hover:text-green-800 mr-2">Promote</button>
//                         <button className="text-purple-600 hover:text-purple-800">VIP Support</button>
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

// export default PremiumListings;












import React, { useState, useEffect } from 'react';

// Replace with your backend API endpoint for premium listings
const API_URL = 'http://localhost:8000/api/premium-listings';

const PremiumListingsIntegration = ({ onBackToDashboard }) => {
  const [listings, setListings] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    views: 0,
    leads: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch data from backend
  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setListings(data.listings || []);
        setStats({
          total: data.total || (data.listings ? data.listings.length : 0),
          active: data.active || (data.listings ? data.listings.filter(l => l.status === "Active").length : 0),
          views: data.views || (data.listings ? data.listings.reduce((s, l) => s + (l.views || 0), 0) : 0),
          leads: data.leads || (data.listings ? data.listings.reduce((s, l) => s + (l.leads || 0), 0) : 0),
        });
        setError('');
      })
      .catch(() => setError('Could not fetch premium listings.'))
      .finally(() => setLoading(false));
  }, []);

  // Action handlers (implement real logic as needed)
  const handleEdit = listing => {
    alert(`Edit listing: ${listing.title}`);
  };
  const handleAnalytics = listing => {
    alert(`Show analytics for: ${listing.title}`);
  };
  const handlePromote = listing => {
    alert(`Promote listing: ${listing.title}`);
  };
  const handleVIPSupport = listing => {
    alert(`Contact VIP Support for: ${listing.title}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center">
              <img src="/abc.png" alt="Bhoomi The Real Estate" className="h-8 w-auto mr-2" />
              <span className="text-xl font-bold">Bhoomi The Real Estate</span>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <span className="text-blue-200">
                Last Visited: {new Date().toLocaleTimeString()} | {new Date().toLocaleDateString()}
              </span>
              <a href="#" className="hover:text-blue-200">LEAD SEARCH</a>
              <a href="#" className="hover:text-blue-200">BUY OUR SERVICES</a>
              <a href="#" className="hover:text-blue-200">POST A PROPERTY</a>
              <a href="#" className="hover:text-blue-200">CUSTOMER SERVICE</a>
            </div>
          </div>
        </div>
      </header>

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
            <h2 className="text-lg font-semibold mb-4">Premium Listings</h2>
            <nav className="space-y-2">
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Active Premium</a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Inactive Premium</a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Premium Analytics</a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">VIP Support</a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Premium Listings</h1>
                  <p className="text-gray-600 mt-2">Ultimate property listings with exclusive benefits and maximum exposure</p>
                </div>
                <div className="text-right">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-semibold">PREMIUM PLAN</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              {/* Plan Features */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold mb-3 text-orange-900">Premium Listing Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span><span>All Platinum features included</span></div>
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span><span>Unlimited photos + 360° virtual tour</span></div>
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span><span>Top position guarantee</span></div>
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span><span>Homepage banner placement</span></div>
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span><span>Dedicated relationship manager</span></div>
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span><span>Real-time lead notifications</span></div>
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span><span>90-day validity</span></div>
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span><span>Multi-platform advertising</span></div>
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span><span>VIP customer support (24/7)</span></div>
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span><span>Custom property brochures</span></div>
                </div>
              </div>

              {/* Quick Stats */}
              {loading ? (
                <div className="text-center font-bold text-blue-600 py-10">Loading...</div>
              ) : error ? (
                <div className="text-center font-bold text-red-600 py-10">{error}</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900">Total Premium</h3>
                    <p className="text-2xl font-bold text-blue-600">{stats.total}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900">Active</h3>
                    <p className="text-2xl font-bold text-green-600">{stats.active}</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-yellow-900">Views This Month</h3>
                    <p className="text-2xl font-bold text-yellow-600">{stats.views}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-900">Leads Generated</h3>
                    <p className="text-2xl font-bold text-purple-600">{stats.leads}</p>
                  </div>
                </div>
              )}

              {/* VIP Benefits */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-orange-900 flex items-center">
                      <span className="mr-2">👑</span>
                      VIP Premium Benefits Active
                    </h4>
                    <p className="text-orange-700">Your Premium listings are getting maximum exposure across all channels</p>
                    <div className="mt-2 flex space-x-4 text-sm">
                      <span className="text-orange-600">• 5x more visibility</span>
                      <span className="text-orange-600">• 7.8x more leads</span>
                      <span className="text-orange-600">• Dedicated support</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 mb-2">
                      Call Relationship Manager
                    </button>
                    <br />
                    <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded hover:from-yellow-600 hover:to-orange-600">
                      Premium Analytics
                    </button>
                  </div>
                </div>
              </div>

              {/* Premium Listings Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left">Property ID</th>
                      <th className="px-4 py-3 text-left">Title</th>
                      <th className="px-4 py-3 text-left">Location</th>
                      <th className="px-4 py-3 text-left">Price</th>
                      <th className="px-4 py-3 text-left">Status</th>
                      <th className="px-4 py-3 text-left">Views</th>
                      <th className="px-4 py-3 text-left">Leads</th>
                      <th className="px-4 py-3 text-left">Expires</th>
                      <th className="px-4 py-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr><td colSpan={9} className="text-center py-8 text-blue-600 font-bold">Loading...</td></tr>
                    ) : error ? (
                      <tr><td colSpan={9} className="text-center py-8 text-red-600 font-bold">{error}</td></tr>
                    ) : (
                      listings.map(listing => (
                        <tr className="border-b bg-gradient-to-r from-yellow-50 to-orange-50" key={listing.id}>
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <span className="text-orange-600 mr-1">👑</span>
                              {listing.id}
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              {listing.isPremium && (
                                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-2 py-0.5 rounded text-xs mr-2 font-semibold">PREMIUM</span>
                              )}
                              {listing.title}
                            </div>
                          </td>
                          <td className="px-4 py-3">{listing.location}</td>
                          <td className="px-4 py-3">{listing.price}</td>
                          <td className="px-4 py-3">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">{listing.status}</span>
                          </td>
                          <td className="px-4 py-3">{listing.views}</td>
                          <td className="px-4 py-3">{listing.leads}</td>
                          <td className="px-4 py-3">{listing.expires}</td>
                          <td className="px-4 py-3">
                            <button className="text-blue-600 hover:text-blue-800 mr-2" onClick={() => handleEdit(listing)}>Edit</button>
                            <button className="text-orange-600 hover:text-orange-800 mr-2" onClick={() => handleAnalytics(listing)}>Analytics</button>
                            <button className="text-green-600 hover:text-green-800 mr-2" onClick={() => handlePromote(listing)}>Promote</button>
                            <button className="text-purple-600 hover:text-purple-800" onClick={() => handleVIPSupport(listing)}>VIP Support</button>
                          </td>
                        </tr>
                      ))
                    )}
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

export default PremiumListingsIntegration;