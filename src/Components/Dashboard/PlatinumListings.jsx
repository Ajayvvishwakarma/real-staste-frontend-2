// import React from 'react';


// const PlatinumListings = ({ onBackToDashboard }) => {
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
//             <h2 className="text-lg font-semibold mb-4">Platinum Listings</h2>
//             <nav className="space-y-2">
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Active Platinum</a>
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Inactive Platinum</a>
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Upgrade to Premium</a>
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Performance Analytics</a>
//             </nav>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6">
//           <div className="bg-white rounded-lg shadow-sm">
//             <div className="p-6 border-b">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <h1 className="text-2xl font-bold text-gray-900">Platinum Listings</h1>
//                   <p className="text-gray-600 mt-2">Premium property listings with maximum visibility and features</p>
//                 </div>
//                 <div className="text-right">
//                   <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">PLATINUM PLAN</span>
//                 </div>
//               </div>
//             </div>
            
//             <div className="p-6">
//               {/* Plan Features */}
//               <div className="bg-purple-50 rounded-lg p-4 mb-6">
//                 <h3 className="text-lg font-semibold mb-3">Platinum Listing Features</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>All Basic features included</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Up to 20 photos + virtual tour</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Top search results placement</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Featured on homepage</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Advanced analytics dashboard</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Priority customer support</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>60-day validity</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Social media promotion</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Quick Stats */}
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
//                 <div className="bg-blue-50 p-4 rounded-lg">
//                   <h3 className="text-lg font-semibold text-blue-900">Total Platinum</h3>
//                   <p className="text-2xl font-bold text-blue-600">7</p>
//                 </div>
//                 <div className="bg-green-50 p-4 rounded-lg">
//                   <h3 className="text-lg font-semibold text-green-900">Active</h3>
//                   <p className="text-2xl font-bold text-green-600">6</p>
//                 </div>
//                 <div className="bg-yellow-50 p-4 rounded-lg">
//                   <h3 className="text-lg font-semibold text-yellow-900">Views This Month</h3>
//                   <p className="text-2xl font-bold text-yellow-600">1,234</p>
//                 </div>
//                 <div className="bg-purple-50 p-4 rounded-lg">
//                   <h3 className="text-lg font-semibold text-purple-900">Leads Generated</h3>
//                   <p className="text-2xl font-bold text-purple-600">45</p>
//                 </div>
//               </div>

//               {/* Performance Insights */}
//               <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4 mb-6">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h4 className="text-lg font-semibold text-purple-900">Outstanding Performance! 🎉</h4>
//                     <p className="text-purple-700">Your Platinum listings are performing 3x better than Basic listings</p>
//                     <div className="mt-2 flex space-x-4 text-sm">
//                       <span className="text-purple-600">• 67% more views</span>
//                       <span className="text-purple-600">• 4.2x more leads</span>
//                       <span className="text-purple-600">• 89% faster responses</span>
//                     </div>
//                   </div>
//                   <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
//                     View Full Analytics
//                   </button>
//                 </div>
//               </div>

//               {/* Platinum Listings Table */}
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
//                     <tr className="border-b">
//                       <td className="px-4 py-3">
//                         <div className="flex items-center">
//                           <span className="text-purple-600 mr-1">⭐</span>
//                           PLT001
//                         </div>
//                       </td>
//                       <td className="px-4 py-3">
//                         <div className="flex items-center">
//                           <span className="bg-purple-100 text-purple-800 px-1 py-0.5 rounded text-xs mr-2">FEATURED</span>
//                           Luxury 4 BHK Penthouse
//                         </div>
//                       </td>
//                       <td className="px-4 py-3">Golf Course Road, Gurgaon</td>
//                       <td className="px-4 py-3">₹2.5 Cr</td>
//                       <td className="px-4 py-3">
//                         <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Active</span>
//                       </td>
//                       <td className="px-4 py-3">456</td>
//                       <td className="px-4 py-3">18</td>
//                       <td className="px-4 py-3">15 Nov, 2025</td>
//                       <td className="px-4 py-3">
//                         <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
//                         <button className="text-purple-600 hover:text-purple-800 mr-2">Analytics</button>
//                         <button className="text-orange-600 hover:text-orange-800 mr-2">Renew</button>
//                         <button className="text-red-600 hover:text-red-800">Delete</button>
//                       </td>
//                     </tr>
//                     <tr className="border-b">
//                       <td className="px-4 py-3">
//                         <div className="flex items-center">
//                           <span className="text-purple-600 mr-1">⭐</span>
//                           PLT002
//                         </div>
//                       </td>
//                       <td className="px-4 py-3">
//                         <div className="flex items-center">
//                           <span className="bg-purple-100 text-purple-800 px-1 py-0.5 rounded text-xs mr-2">FEATURED</span>
//                           3 BHK Designer Apartment
//                         </div>
//                       </td>
//                       <td className="px-4 py-3">Cyber City, Gurgaon</td>
//                       <td className="px-4 py-3">₹1.8 Cr</td>
//                       <td className="px-4 py-3">
//                         <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Active</span>
//                       </td>
//                       <td className="px-4 py-3">298</td>
//                       <td className="px-4 py-3">12</td>
//                       <td className="px-4 py-3">20 Nov, 2025</td>
//                       <td className="px-4 py-3">
//                         <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
//                         <button className="text-purple-600 hover:text-purple-800 mr-2">Analytics</button>
//                         <button className="text-orange-600 hover:text-orange-800 mr-2">Renew</button>
//                         <button className="text-red-600 hover:text-red-800">Delete</button>
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

// export default PlatinumListings;










import React, { useState, useEffect } from 'react';

// Replace with your backend API endpoint for platinum listings
const API_URL = 'http://localhost:8000/api/platinum-listings';

const PlatinumListingsIntegration = ({ onBackToDashboard }) => {
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
      .catch(() => setError('Could not fetch platinum listings.'))
      .finally(() => setLoading(false));
  }, []);

  // Action handlers (implement real logic as needed)
  const handleEdit = listing => {
    alert(`Edit listing: ${listing.title}`);
  };
  const handleAnalytics = listing => {
    alert(`Show analytics for: ${listing.title}`);
  };
  const handleRenew = listing => {
    alert(`Renew listing: ${listing.title}`);
  };
  const handleDelete = listing => {
    if (window.confirm(`Delete listing "${listing.title}"?`)) {
      fetch(`${API_URL}/${listing.id}`, { method: 'DELETE' })
        .then(res => {
          if (res.ok) setListings(listings.filter(l => l.id !== listing.id));
        });
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
            <h2 className="text-lg font-semibold mb-4">Platinum Listings</h2>
            <nav className="space-y-2">
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Active Platinum</a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Inactive Platinum</a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Upgrade to Premium</a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Performance Analytics</a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Platinum Listings</h1>
                  <p className="text-gray-600 mt-2">Premium property listings with maximum visibility and features</p>
                </div>
                <div className="text-right">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">PLATINUM PLAN</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              {/* Plan Features */}
              <div className="bg-purple-50 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold mb-3">Platinum Listing Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>All Basic features included</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Up to 20 photos + virtual tour</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Top search results placement</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Featured on homepage</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Advanced analytics dashboard</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Priority customer support</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>60-day validity</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Social media promotion</span>
                  </div>
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
                    <h3 className="text-lg font-semibold text-blue-900">Total Platinum</h3>
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

              {/* Performance Insights */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-purple-900">Outstanding Performance! 🎉</h4>
                    <p className="text-purple-700">Your Platinum listings are performing 3x better than Basic listings</p>
                    <div className="mt-2 flex space-x-4 text-sm">
                      <span className="text-purple-600">• 67% more views</span>
                      <span className="text-purple-600">• 4.2x more leads</span>
                      <span className="text-purple-600">• 89% faster responses</span>
                    </div>
                  </div>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
                    View Full Analytics
                  </button>
                </div>
              </div>

              {/* Platinum Listings Table */}
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
                        <tr className="border-b" key={listing.id}>
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <span className="text-purple-600 mr-1">⭐</span>
                              {listing.id}
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              {listing.isFeatured && (
                                <span className="bg-purple-100 text-purple-800 px-1 py-0.5 rounded text-xs mr-2">FEATURED</span>
                              )}
                              {listing.title}
                            </div>
                          </td>
                          <td className="px-4 py-3">{listing.location}</td>
                          <td className="px-4 py-3">{listing.price}</td>
                          <td className="px-4 py-3">
                            <span className={`bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs`}>
                              {listing.status}
                            </span>
                          </td>
                          <td className="px-4 py-3">{listing.views}</td>
                          <td className="px-4 py-3">{listing.leads}</td>
                          <td className="px-4 py-3">{listing.expires}</td>
                          <td className="px-4 py-3">
                            <button className="text-blue-600 hover:text-blue-800 mr-2" onClick={() => handleEdit(listing)}>Edit</button>
                            <button className="text-purple-600 hover:text-purple-800 mr-2" onClick={() => handleAnalytics(listing)}>Analytics</button>
                            <button className="text-orange-600 hover:text-orange-800 mr-2" onClick={() => handleRenew(listing)}>Renew</button>
                            <button className="text-red-600 hover:text-red-800" onClick={() => handleDelete(listing)}>Delete</button>
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

export default PlatinumListingsIntegration;