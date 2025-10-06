// import React from 'react';

// const BasicListings = ({ onBackToDashboard }) => {
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
//             <h2 className="text-lg font-semibold mb-4">Basic Listings</h2>
//             <nav className="space-y-2">
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Active Basic</a>
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Inactive Basic</a>
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Upgrade to Platinum</a>
//             </nav>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6">
//           <div className="bg-white rounded-lg shadow-sm">
//             <div className="p-6 border-b">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <h1 className="text-2xl font-bold text-gray-900">Basic Listings</h1>
//                   <p className="text-gray-600 mt-2">Enhanced property listings with better visibility</p>
//                 </div>
//                 <div className="text-right">
//                   <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">BASIC PLAN</span>
//                 </div>
//               </div>
//             </div>
            
//             <div className="p-6">
//               {/* Plan Features */}
//               <div className="bg-green-50 rounded-lg p-4 mb-6">
//                 <h3 className="text-lg font-semibold mb-3">Basic Listing Features</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>All Plain features included</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Up to 10 photos</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Higher search ranking</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Contact form leads</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Property statistics</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>30-day validity</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Quick Stats */}
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
//                 <div className="bg-blue-50 p-4 rounded-lg">
//                   <h3 className="text-lg font-semibold text-blue-900">Total Basic Listings</h3>
//                   <p className="text-2xl font-bold text-blue-600">5</p>
//                 </div>
//                 <div className="bg-green-50 p-4 rounded-lg">
//                   <h3 className="text-lg font-semibold text-green-900">Active</h3>
//                   <p className="text-2xl font-bold text-green-600">4</p>
//                 </div>
//                 <div className="bg-yellow-50 p-4 rounded-lg">
//                   <h3 className="text-lg font-semibold text-yellow-900">Views This Month</h3>
//                   <p className="text-2xl font-bold text-yellow-600">456</p>
//                 </div>
//                 <div className="bg-purple-50 p-4 rounded-lg">
//                   <h3 className="text-lg font-semibold text-purple-900">Leads Generated</h3>
//                   <p className="text-2xl font-bold text-purple-600">12</p>
//                 </div>
//               </div>

//               {/* Upgrade Prompt */}
//               <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <h4 className="text-lg font-semibold text-blue-900">Get even more leads!</h4>
//                     <p className="text-blue-700">Upgrade to Platinum or Premium for maximum visibility and features</p>
//                   </div>
//                   <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
//                     Upgrade to Platinum
//                   </button>
//                 </div>
//               </div>

//               {/* Basic Listings Table */}
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
//                       <td className="px-4 py-3">BSC001</td>
//                       <td className="px-4 py-3">3 BHK Premium Apartment</td>
//                       <td className="px-4 py-3">Sector 62, Noida</td>
//                       <td className="px-4 py-3">₹85 Lac</td>
//                       <td className="px-4 py-3">
//                         <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Active</span>
//                       </td>
//                       <td className="px-4 py-3">156</td>
//                       <td className="px-4 py-3">8</td>
//                       <td className="px-4 py-3">05 Oct, 2025</td>
//                       <td className="px-4 py-3">
//                         <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
//                         <button className="text-green-600 hover:text-green-800 mr-2">Upgrade</button>
//                         <button className="text-orange-600 hover:text-orange-800 mr-2">Renew</button>
//                         <button className="text-red-600 hover:text-red-800">Delete</button>
//                       </td>
//                     </tr>
//                     <tr className="border-b">
//                       <td className="px-4 py-3">BSC002</td>
//                       <td className="px-4 py-3">2 BHK Modern Flat</td>
//                       <td className="px-4 py-3">Dwarka Mor, Delhi</td>
//                       <td className="px-4 py-3">₹65 Lac</td>
//                       <td className="px-4 py-3">
//                         <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Active</span>
//                       </td>
//                       <td className="px-4 py-3">89</td>
//                       <td className="px-4 py-3">4</td>
//                       <td className="px-4 py-3">12 Oct, 2025</td>
//                       <td className="px-4 py-3">
//                         <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
//                         <button className="text-green-600 hover:text-green-800 mr-2">Upgrade</button>
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

// export default BasicListings;












import React, { useState, useEffect } from 'react';

// Replace with your backend API endpoint for basic listings
const API_URL = 'http://localhost:8000/api/basic-listings';

const BasicListingsIntegration = ({ onBackToDashboard }) => {
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
      .catch(() => setError('Could not fetch basic listings.'))
      .finally(() => setLoading(false));
  }, []);

  // Action handlers (implement real logic as needed)
  const handleEdit = listing => {
    alert(`Edit listing: ${listing.title}`);
  };
  const handleUpgrade = listing => {
    alert(`Upgrade listing: ${listing.title}`);
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
            <h2 className="text-lg font-semibold mb-4">Basic Listings</h2>
            <nav className="space-y-2">
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Active Basic</a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Inactive Basic</a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Upgrade to Platinum</a>
            </nav>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Basic Listings</h1>
                  <p className="text-gray-600 mt-2">Enhanced property listings with better visibility</p>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">BASIC PLAN</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              {/* Plan Features */}
              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold mb-3">Basic Listing Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>All Plain features included</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Up to 10 photos</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Higher search ranking</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Contact form leads</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Property statistics</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>30-day validity</span>
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
                    <h3 className="text-lg font-semibold text-blue-900">Total Basic Listings</h3>
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

              {/* Upgrade Prompt */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">Get even more leads!</h4>
                    <p className="text-blue-700">Upgrade to Platinum or Premium for maximum visibility and features</p>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                    Upgrade to Platinum
                  </button>
                </div>
              </div>
              {/* Basic Listings Table */}
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
                          <td className="px-4 py-3">{listing.id}</td>
                          <td className="px-4 py-3">{listing.title}</td>
                          <td className="px-4 py-3">{listing.location}</td>
                          <td className="px-4 py-3">{listing.price}</td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              listing.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-600"
                            }`}>
                              {listing.status}
                            </span>
                          </td>
                          <td className="px-4 py-3">{listing.views}</td>
                          <td className="px-4 py-3">{listing.leads}</td>
                          <td className="px-4 py-3">{listing.expires}</td>
                          <td className="px-4 py-3">
                            <button className="text-blue-600 hover:text-blue-800 mr-2" onClick={() => handleEdit(listing)}>Edit</button>
                            <button className="text-green-600 hover:text-green-800 mr-2" onClick={() => handleUpgrade(listing)}>Upgrade</button>
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

export default BasicListingsIntegration;