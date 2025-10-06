// import React, { useState, useEffect } from 'react';

// const AllListings = ({ onBackToDashboard }) => {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [updateCount, setUpdateCount] = useState(0);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Live update timer
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//       setUpdateCount(prev => prev + 1);
//     }, 2000); // Update every 2 seconds

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="flex">
//         {/* Sidebar */}
//         <aside className="w-64 bg-slate-700 text-white min-h-screen">
//           <div className="p-4">
//             <button 
//               onClick={onBackToDashboard}
//               className="w-full mb-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors"
//             >
//               ← Back to Dashboard
//             </button>
//             <h2 className="text-lg font-semibold mb-4 text-center border-b border-slate-600 pb-2">
//               All Listings - Live! 🚀
//             </h2>
//             <div className="mb-4 text-center">
//               <div className="text-green-400 text-sm">
//                 🔴 Live Status: Active
//               </div>
//               <div className="text-blue-300 text-xs">
//                 Updates: {updateCount}
//               </div>
//             </div>
//             <nav className="space-y-2">
//               <a href="#" className="block px-3 py-3 rounded-lg hover:bg-slate-600 transition-colors border-l-4 border-green-500">
//                 ✅ Active Listings ({18 + (updateCount % 3)})
//               </a>
//               <a href="#" className="block px-3 py-3 rounded-lg hover:bg-slate-600 transition-colors border-l-4 border-gray-500">
//                 ❌ Inactive Listings
//               </a>
//               <a href="#" className="block px-3 py-3 rounded-lg hover:bg-slate-600 transition-colors border-l-4 border-yellow-500">
//                 ⏳ Pending Approval ({4 + (updateCount % 2)})
//               </a>
//               <a href="#" className="block px-3 py-3 rounded-lg hover:bg-slate-600 transition-colors border-l-4 border-red-500">
//                 ⌛ Expired Listings
//               </a>
//             </nav>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6">
//           <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
//             <h1 className="text-2xl font-bold text-gray-900 mb-4">
//               📊 Live Listings Dashboard
//             </h1>
            
//             {/* Real-time Status Bar */}
//             <div className="bg-gradient-to-r from-green-100 to-blue-100 border border-green-300 rounded-lg p-4 mb-6">
//               <div className="flex flex-wrap justify-between items-center gap-4">
//                 <div className="text-green-700">
//                   <strong>🚀 Live Updates:</strong> Auto-refreshing every 2 seconds
//                 </div>
//                 <div className="text-blue-700">
//                   <strong>⏰ Current Time:</strong> {currentTime.toLocaleTimeString()}
//                 </div>
//                 <div className="text-purple-700">
//                   <strong>📈 Updates:</strong> {updateCount}
//                 </div>
//               </div>
//             </div>

//             {/* Quick Stats */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//               <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
//                 <div className="text-2xl font-bold text-green-600">{23 + (updateCount % 5)}</div>
//                 <div className="text-green-700 text-sm">Active Properties</div>
//               </div>
//               <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
//                 <div className="text-2xl font-bold text-yellow-600">{6 + (updateCount % 3)}</div>
//                 <div className="text-yellow-700 text-sm">Pending Review</div>
//               </div>
//               <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
//                 <div className="text-2xl font-bold text-blue-600">{142 + updateCount}</div>
//                 <div className="text-blue-700 text-sm">Total Views Today</div>
//               </div>
//               <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
//                 <div className="text-2xl font-bold text-purple-600">{8 + (updateCount % 2)}</div>
//                 <div className="text-purple-700 text-sm">New Inquiries</div>
//               </div>
//             </div>

//             {/* Live Table */}
//             <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
//               <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
//                 <h3 className="text-lg font-semibold text-gray-900 flex items-center">
//                   📋 All Property Listings
//                   <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                     Live
//                   </span>
//                 </h3>
//               </div>
              
//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Property ID
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Title
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Location
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Price
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Status
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Views
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {[...Array(10)].map((_, index) => (
//                       <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                           BRE{1001 + index}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                           {index % 3 === 0 ? '3BHK Apartment' : index % 3 === 1 ? '2BHK Villa' : '4BHK Penthouse'}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                           {index % 4 === 0 ? 'Delhi NCR' : index % 4 === 1 ? 'Mumbai' : index % 4 === 2 ? 'Bangalore' : 'Pune'}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                           ₹{(50 + index * 10) + (updateCount % 10)} Lakh
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
//                             index % 3 === 0 ? 'bg-green-100 text-green-800' : 
//                             index % 3 === 1 ? 'bg-yellow-100 text-yellow-800' : 
//                             'bg-blue-100 text-blue-800'
//                           }`}>
//                             {index % 3 === 0 ? 'Active' : index % 3 === 1 ? 'Pending' : 'Featured'}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                           {25 + index * 3 + (updateCount % 5)}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
              
//               <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
//                 <div className="flex items-center justify-between">
//                   <div className="text-sm text-gray-700">
//                     Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
//                     <span className="font-medium">{32 + (updateCount % 8)}</span> results
//                   </div>
//                   <div className="flex space-x-2">
//                     <button className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
//                       Previous
//                     </button>
//                     <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
//                       Next
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
//               + Add New Listing
//             </button>
//             <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
//               📊 View Analytics
//             </button>
//             <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
//               🔧 Manage Settings
//             </button>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AllListings;














import React, { useState, useEffect } from 'react';

// Replace with your backend API endpoint for listings
const API_URL = 'http://localhost:8000/api/listings';

const AllListingsIntegration = ({ onBackToDashboard }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [updateCount, setUpdateCount] = useState(0);

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Live update timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setUpdateCount(prev => prev + 1);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Fetch listings from backend every 2 seconds for live updates
  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setListings(data.listings || []);
        setError('');
      })
      .catch(() => setError('Could not fetch listings.'))
      .finally(() => setLoading(false));
  }, [updateCount]);

  // Fallback demo data if backend not ready
  const fallbackListings = [...Array(10)].map((_, index) => ({
    id: `BRE${1001 + index}`,
    title:
      index % 3 === 0
        ? '3BHK Apartment'
        : index % 3 === 1
        ? '2BHK Villa'
        : '4BHK Penthouse',
    location:
      index % 4 === 0
        ? 'Delhi NCR'
        : index % 4 === 1
        ? 'Mumbai'
        : index % 4 === 2
        ? 'Bangalore'
        : 'Pune',
    price: `₹${50 + index * 10 + (updateCount % 10)} Lakh`,
    status:
      index % 3 === 0
        ? 'Active'
        : index % 3 === 1
        ? 'Pending'
        : 'Featured',
    views: 25 + index * 3 + (updateCount % 5)
  }));

  const tableListings = !loading && !error && listings.length
    ? listings
    : fallbackListings;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-700 text-white min-h-screen">
          <div className="p-4">
            <button 
              onClick={onBackToDashboard}
              className="w-full mb-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors"
            >
              ← Back to Dashboard
            </button>
            <h2 className="text-lg font-semibold mb-4 text-center border-b border-slate-600 pb-2">
              All Listings - Live! 🚀
            </h2>
            <div className="mb-4 text-center">
              <div className="text-green-400 text-sm">
                🔴 Live Status: Active
              </div>
              <div className="text-blue-300 text-xs">
                Updates: {updateCount}
              </div>
            </div>
            <nav className="space-y-2">
              <a href="#" className="block px-3 py-3 rounded-lg hover:bg-slate-600 transition-colors border-l-4 border-green-500">
                ✅ Active Listings ({18 + (updateCount % 3)})
              </a>
              <a href="#" className="block px-3 py-3 rounded-lg hover:bg-slate-600 transition-colors border-l-4 border-gray-500">
                ❌ Inactive Listings
              </a>
              <a href="#" className="block px-3 py-3 rounded-lg hover:bg-slate-600 transition-colors border-l-4 border-yellow-500">
                ⏳ Pending Approval ({4 + (updateCount % 2)})
              </a>
              <a href="#" className="block px-3 py-3 rounded-lg hover:bg-slate-600 transition-colors border-l-4 border-red-500">
                ⌛ Expired Listings
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              📊 Live Listings Dashboard
            </h1>
            
            {/* Real-time Status Bar */}
            <div className="bg-gradient-to-r from-green-100 to-blue-100 border border-green-300 rounded-lg p-4 mb-6">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div className="text-green-700">
                  <strong>🚀 Live Updates:</strong> Auto-refreshing every 2 seconds
                </div>
                <div className="text-blue-700">
                  <strong>⏰ Current Time:</strong> {currentTime.toLocaleTimeString()}
                </div>
                <div className="text-purple-700">
                  <strong>📈 Updates:</strong> {updateCount}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{23 + (updateCount % 5)}</div>
                <div className="text-green-700 text-sm">Active Properties</div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-600">{6 + (updateCount % 3)}</div>
                <div className="text-yellow-700 text-sm">Pending Review</div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{142 + updateCount}</div>
                <div className="text-blue-700 text-sm">Total Views Today</div>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">{8 + (updateCount % 2)}</div>
                <div className="text-purple-700 text-sm">New Inquiries</div>
              </div>
            </div>

            {/* Live Table */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  📋 All Property Listings
                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Live
                  </span>
                </h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Property ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Location
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Views
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {loading ? (
                      <tr><td colSpan={6} className="text-center py-8 text-blue-600 font-bold">Loading...</td></tr>
                    ) : error ? (
                      <tr><td colSpan={6} className="text-center py-8 text-red-600 font-bold">{error}</td></tr>
                    ) : (
                      tableListings.map((listing, index) => (
                        <tr key={listing.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {listing.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {listing.title}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {listing.location}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {listing.price}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              listing.status === 'Active'
                                ? 'bg-green-100 text-green-800'
                                : listing.status === 'Pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : listing.status === 'Featured'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {listing.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {listing.views}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              
              <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                    <span className="font-medium">{32 + (updateCount % 8)}</span> results
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                      Previous
                    </button>
                    <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              + Add New Listing
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              📊 View Analytics
            </button>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              🔧 Manage Settings
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AllListingsIntegration;