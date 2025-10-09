// import React, { useState } from 'react';
// import LiveUpdate from './LiveUpdate';

// const AllProducts = ({ onBackToDashboard }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [currentTime, setCurrentTime] = useState(new Date());

//   // Update time every second for live demo
//   React.useEffect(() => {
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50">
     
//       <div className="flex flex-col lg:flex-row">
//         {/* Responsive Sidebar */}
//         <aside className="w-full lg:w-64 bg-slate-700 text-white min-h-screen">
//           <div className="p-4">
//             <button 
//               onClick={onBackToDashboard}
//               className="mb-4 text-blue-300 hover:text-blue-200 text-sm w-full text-left bg-blue-600/20 px-3 py-2 rounded-lg transition-all hover:bg-blue-600/30"
//             >
//               ← Back to Dashboard
//             </button>
//             <h2 className="text-lg font-semibold mb-4 text-center lg:text-left">All Products</h2>
//             <nav className="space-y-2">
//               <button className="w-full text-left px-3 py-2 rounded hover:bg-slate-600 transition-colors">Active Products</button>
//               <button className="w-full text-left px-3 py-2 rounded hover:bg-slate-600 transition-colors">Inactive Products</button>
//               <button className="w-full text-left px-3 py-2 rounded hover:bg-slate-600 transition-colors">Product History</button>
//             </nav>
//           </div>
//         </aside>

//         {/* Responsive Main Content */}
//         <main className="flex-1 p-4 sm:p-6">
//           <div className="bg-white rounded-lg shadow-sm">
//             <div className="p-4 sm:p-6 border-b">
//               <h1 className="text-xl sm:text-2xl font-bold text-gray-900">All Products</h1>
//               <p className="text-gray-600 mt-2 text-sm sm:text-base">Manage all your property listings and advertisements</p>
//               <div className="mt-2 text-green-600 text-sm">
//                 🟢 Live Updates Active - {currentTime.toLocaleTimeString()}
//               </div>
//             </div>
            
//             <div className="p-4 sm:p-6">
//               {/* Responsive Filters */}
//               <div className="mb-6 flex flex-col sm:flex-row flex-wrap gap-4">
//                 <select className="border border-gray-300 rounded px-3 py-2 w-full sm:w-auto min-w-0 sm:min-w-[150px]">
//                   <option>All Products</option>
//                   <option>Property Listings</option>
//                   <option>Advertisements</option>
//                   <option>E-Mailers</option>
//                 </select>
//                 <select className="border border-gray-300 rounded px-3 py-2 w-full sm:w-auto min-w-0 sm:min-w-[150px]">
//                   <option>All Status</option>
//                   <option>Active</option>
//                   <option>Inactive</option>
//                   <option>Pending</option>
//                 </select>
//                 <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors w-full sm:w-auto">
//                   Apply Filters
//                 </button>
//               </div>

//               {/* Responsive Products Table */}
//               <div className="overflow-x-auto -mx-4 sm:mx-0">
//                 <div className="inline-block min-w-full align-middle">
//                   <table className="min-w-full text-sm">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="px-2 sm:px-4 py-3 text-left font-semibold">ID</th>
//                         <th className="px-2 sm:px-4 py-3 text-left font-semibold hidden sm:table-cell">Type</th>
//                         <th className="px-2 sm:px-4 py-3 text-left font-semibold">Title</th>
//                         <th className="px-2 sm:px-4 py-3 text-left font-semibold">Status</th>
//                         <th className="px-2 sm:px-4 py-3 text-left font-semibold hidden md:table-cell">Date</th>
//                         <th className="px-2 sm:px-4 py-3 text-left font-semibold">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200">
//                       <tr className="hover:bg-gray-50">
//                         <td className="px-2 sm:px-4 py-3 font-medium">001</td>
//                         <td className="px-2 sm:px-4 py-3 hidden sm:table-cell">Property Listing</td>
//                         <td className="px-2 sm:px-4 py-3">
//                           <div className="font-medium">3 BHK Apartment</div>
//                           <div className="text-gray-500 text-xs sm:hidden">Property Listing</div>
//                         </td>
//                         <td className="px-2 sm:px-4 py-3">
//                           <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Active</span>
//                         </td>
//                         <td className="px-2 sm:px-4 py-3 hidden md:table-cell">22 Sep, 2025</td>
//                         <td className="px-2 sm:px-4 py-3">
//                           <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
//                             <button className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm px-2 py-1 bg-blue-50 rounded hover:bg-blue-100 transition-colors">
//                               Edit
//                             </button>
//                             <button className="text-red-600 hover:text-red-800 text-xs sm:text-sm px-2 py-1 bg-red-50 rounded hover:bg-red-100 transition-colors">
//                               Delete
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                       <tr className="hover:bg-gray-50">
//                         <td className="px-2 sm:px-4 py-3 font-medium">002</td>
//                         <td className="px-2 sm:px-4 py-3 hidden sm:table-cell">Advertisement</td>
//                         <td className="px-2 sm:px-4 py-3">
//                           <div className="font-medium">Premium Banner Ad</div>
//                           <div className="text-gray-500 text-xs sm:hidden">Advertisement</div>
//                         </td>
//                         <td className="px-2 sm:px-4 py-3">
//                           <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Pending</span>
//                         </td>
//                         <td className="px-2 sm:px-4 py-3 hidden md:table-cell">21 Sep, 2025</td>
//                         <td className="px-2 sm:px-4 py-3">
//                           <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
//                             <button className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm px-2 py-1 bg-blue-50 rounded hover:bg-blue-100 transition-colors">
//                               Edit
//                             </button>
//                             <button className="text-red-600 hover:text-red-800 text-xs sm:text-sm px-2 py-1 bg-red-50 rounded hover:bg-red-100 transition-colors">
//                               Delete
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                       <tr className="hover:bg-gray-50">
//                         <td className="px-2 sm:px-4 py-3 font-medium">003</td>
//                         <td className="px-2 sm:px-4 py-3 hidden sm:table-cell">E-Mailer</td>
//                         <td className="px-2 sm:px-4 py-3">
//                           <div className="font-medium">Weekly Newsletter</div>
//                           <div className="text-gray-500 text-xs sm:hidden">E-Mailer</div>
//                         </td>
//                         <td className="px-2 sm:px-4 py-3">
//                           <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Active</span>
//                         </td>
//                         <td className="px-2 sm:px-4 py-3 hidden md:table-cell">20 Sep, 2025</td>
//                         <td className="px-2 sm:px-4 py-3">
//                           <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
//                             <button className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm px-2 py-1 bg-blue-50 rounded hover:bg-blue-100 transition-colors">
//                               Edit
//                             </button>
//                             <button className="text-red-600 hover:text-red-800 text-xs sm:text-sm px-2 py-1 bg-red-50 rounded hover:bg-red-100 transition-colors">
//                               Delete
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>

//               {/* Responsive Pagination */}
//               <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
//                 <span className="text-sm text-gray-700 text-center sm:text-left">Showing 1-3 of 3 products</span>
//                 <div className="flex space-x-2">
//                   <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors disabled:opacity-50" disabled>
//                     Previous
//                   </button>
//                   <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
//                   <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors disabled:opacity-50" disabled>
//                     Next
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
      
//       {/* Live Update Indicator */}
//       <LiveUpdate />
//     </div>
//   );
// };

// export default AllProducts;












import React, { useState, useEffect } from 'react';

// Replace with your backend API endpoint for products
const API_URL = 'http://localhost:8000/api/products';

const AllProductsIntegration = ({ onBackToDashboard }) => {
  const [products, setProducts] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filterType, setFilterType] = useState('All Products');
  const [filterStatus, setFilterStatus] = useState('All Status');
  const [activeTab, setActiveTab] = useState('all-products');

  // Live clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch products from backend
  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams();
    if (filterType !== 'All Products') params.append('type', filterType);
    if (filterStatus !== 'All Status') params.append('status', filterStatus);

    fetch(`${API_URL}?${params.toString()}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products || []);
        setError('');
      })
      .catch(() => setError('Could not fetch products.'))
      .finally(() => setLoading(false));
  }, [filterType, filterStatus]);

  // Fallback demo data if backend not ready
  const fallbackProducts = [
    {
      id: '001',
      type: 'Property Listing',
      title: '3 BHK Apartment',
      status: 'Active',
      date: '22 Sep, 2025'
    },
    {
      id: '002',
      type: 'Advertisement',
      title: 'Premium Banner Ad',
      status: 'Pending',
      date: '21 Sep, 2025'
    },
    {
      id: '003',
      type: 'E-Mailer',
      title: 'Weekly Newsletter',
      status: 'Active',
      date: '20 Sep, 2025'
    }
  ];

  const tableProducts = !loading && !error && products.length
    ? products
    : fallbackProducts;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 bg-slate-700 text-white min-h-screen">
          <div className="p-4">
            <button 
              onClick={onBackToDashboard}
              className="mb-4 text-blue-300 hover:text-blue-200 text-sm w-full text-left bg-blue-600/20 px-3 py-2 rounded-lg transition-all hover:bg-blue-600/30"
            >
              ← Back to Dashboard
            </button>
            <h2 className="text-lg font-semibold mb-4 text-center lg:text-left">All Products</h2>
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('active-products')}
                className={`w-full text-left px-3 py-2 rounded transition-colors ${activeTab === 'active-products' ? 'bg-slate-600 text-white' : 'hover:bg-slate-600 text-white/90'}`}>
                Active Products
              </button>
              <button
                onClick={() => setActiveTab('inactive-products')}
                className={`w-full text-left px-3 py-2 rounded transition-colors ${activeTab === 'inactive-products' ? 'bg-slate-600 text-white' : 'hover:bg-slate-600 text-white/90'}`}>
                Inactive Products
              </button>
              <button
                onClick={() => setActiveTab('product-history')}
                className={`w-full text-left px-3 py-2 rounded transition-colors ${activeTab === 'product-history' ? 'bg-slate-600 text-white' : 'hover:bg-slate-600 text-white/90'}`}>
                Product History
              </button>
            </nav>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 sm:p-6 border-b">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">All Products</h1>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">Manage all your property listings and advertisements</p>
              <div className="mt-2 text-green-600 text-sm">
                🟢 Live Updates Active - {currentTime.toLocaleTimeString()}
              </div>
            </div>
              <div className="p-4 sm:p-6">
                {/* Simple tab content switcher */}
                {activeTab === 'all-products' && (
                  <h3 className="text-lg font-medium mb-4">Showing: All Products</h3>
                )}
                {activeTab === 'active-products' && (
                  <h3 className="text-lg font-medium mb-4">Showing: Active Products</h3>
                )}
                {activeTab === 'inactive-products' && (
                  <h3 className="text-lg font-medium mb-4">Showing: Inactive Products</h3>
                )}
                {activeTab === 'product-history' && (
                  <h3 className="text-lg font-medium mb-4">Showing: Product History</h3>
                )}
              {/* Filters */}
              <div className="mb-6 flex flex-col sm:flex-row flex-wrap gap-4">
                <select
                  className="border border-gray-300 rounded px-3 py-2 w-full sm:w-auto min-w-0 sm:min-w-[150px]"
                  value={filterType}
                  onChange={e => setFilterType(e.target.value)}
                >
                  <option>All Products</option>
                  <option>Property Listing</option>
                  <option>Advertisement</option>
                  <option>E-Mailer</option>
                </select>
                <select
                  className="border border-gray-300 rounded px-3 py-2 w-full sm:w-auto min-w-0 sm:min-w-[150px]"
                  value={filterStatus}
                  onChange={e => setFilterStatus(e.target.value)}
                >
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>Pending</option>
                </select>
                <button
                  type="button"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors w-full sm:w-auto"
                  // Filters auto-apply on change, this is a dummy button
                >
                  Apply Filters
                </button>
              </div>
              {/* Products Table */}
              {loading ? (
                <div className="text-center py-8 text-blue-600 font-bold">Loading...</div>
              ) : error ? (
                <div className="text-center py-8 text-red-600 font-bold">{error}</div>
              ) : (
                <div className="overflow-x-auto -mx-4 sm:mx-0">
                  <div className="inline-block min-w-full align-middle">
                    <table className="min-w-full text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-2 sm:px-4 py-3 text-left font-semibold">ID</th>
                          <th className="px-2 sm:px-4 py-3 text-left font-semibold hidden sm:table-cell">Type</th>
                          <th className="px-2 sm:px-4 py-3 text-left font-semibold">Title</th>
                          <th className="px-2 sm:px-4 py-3 text-left font-semibold">Status</th>
                          <th className="px-2 sm:px-4 py-3 text-left font-semibold hidden md:table-cell">Date</th>
                          <th className="px-2 sm:px-4 py-3 text-left font-semibold">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {tableProducts.map(prod => (
                          <tr className="hover:bg-gray-50" key={prod.id}>
                            <td className="px-2 sm:px-4 py-3 font-medium">{prod.id}</td>
                            <td className="px-2 sm:px-4 py-3 hidden sm:table-cell">{prod.type}</td>
                            <td className="px-2 sm:px-4 py-3">
                              <div className="font-medium">{prod.title}</div>
                              <div className="text-gray-500 text-xs sm:hidden">{prod.type}</div>
                            </td>
                            <td className="px-2 sm:px-4 py-3">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                prod.status === 'Active' ? 'bg-green-100 text-green-800' :
                                prod.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                prod.status === 'Inactive' ? 'bg-red-100 text-red-800' : ''
                              }`}>
                                {prod.status}
                              </span>
                            </td>
                            <td className="px-2 sm:px-4 py-3 hidden md:table-cell">{prod.date}</td>
                            <td className="px-2 sm:px-4 py-3">
                              <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                                <button className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm px-2 py-1 bg-blue-50 rounded hover:bg-blue-100 transition-colors">
                                  Edit
                                </button>
                                <button className="text-red-600 hover:text-red-800 text-xs sm:text-sm px-2 py-1 bg-red-50 rounded hover:bg-red-100 transition-colors">
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {/* Pagination */}
              <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-sm text-gray-700 text-center sm:text-left">
                  Showing 1-{tableProducts.length} of {tableProducts.length} products
                </span>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors disabled:opacity-50" disabled>
                    Previous
                  </button>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
                  <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors disabled:opacity-50" disabled>
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* Live Update Indicator */}
      <div className="fixed bottom-3 right-3 bg-green-100 text-green-800 px-4 py-2 rounded shadow">
        Live Update: {currentTime.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default AllProductsIntegration;