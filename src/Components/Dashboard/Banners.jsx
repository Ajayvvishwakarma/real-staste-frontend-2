// import React, { useState, useEffect } from 'react';

// const Banners = ({ onBackToDashboard }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [currentTime, setCurrentTime] = useState(new Date());

//   // Update time every second for live demo
//   useEffect(() => {
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
//               className="mb-4 text-blue-300 hover:text-blue-200 text-sm"
//             >
//               ← Back to Dashboard
//             </button>
//             <h2 className="text-lg font-semibold mb-4">Banners</h2>
//             <nav className="space-y-2">
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Create Banner</a>
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Active Banners</a>
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Banner History</a>
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Performance</a>
//             </nav>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6">
//           <div className="bg-white rounded-lg shadow-sm">
//             <div className="p-6 border-b">
//               <h1 className="text-2xl font-bold text-gray-900">Banner Advertisements</h1>
//               <p className="text-gray-600 mt-2">Manage your banner advertisements and promotional content</p>
//             </div>
            
//             <div className="p-6">
//               {/* Action Buttons */}
//               <div className="mb-6">
//                 <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 mr-4">
//                   Create New Banner
//                 </button>
//                 <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-50">
//                   View Templates
//                 </button>
//               </div>

//               {/* Banner Types */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//                 <div className="border border-gray-200 rounded-lg p-4">
//                   <h3 className="text-lg font-semibold mb-2">Homepage Banner</h3>
//                   <p className="text-gray-600 text-sm mb-4">Premium placement on homepage</p>
//                   <div className="bg-gray-100 h-24 rounded mb-3 flex items-center justify-center">
//                     <span className="text-gray-500">1200x300px</span>
//                   </div>
//                   <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//                     Create Homepage Banner
//                   </button>
//                 </div>
                
//                 <div className="border border-gray-200 rounded-lg p-4">
//                   <h3 className="text-lg font-semibold mb-2">Search Results Banner</h3>
//                   <p className="text-gray-600 text-sm mb-4">Display in search results</p>
//                   <div className="bg-gray-100 h-24 rounded mb-3 flex items-center justify-center">
//                     <span className="text-gray-500">728x90px</span>
//                   </div>
//                   <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//                     Create Search Banner
//                   </button>
//                 </div>
                
//                 <div className="border border-gray-200 rounded-lg p-4">
//                   <h3 className="text-lg font-semibold mb-2">Sidebar Banner</h3>
//                   <p className="text-gray-600 text-sm mb-4">Sidebar placement</p>
//                   <div className="bg-gray-100 h-24 rounded mb-3 flex items-center justify-center">
//                     <span className="text-gray-500">300x250px</span>
//                   </div>
//                   <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//                     Create Sidebar Banner
//                   </button>
//                 </div>
//               </div>

//               {/* Active Banners */}
//               <div className="overflow-x-auto">
//                 <h3 className="text-lg font-semibold mb-4">Active Banners</h3>
//                 <table className="w-full text-sm">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-4 py-3 text-left">Banner ID</th>
//                       <th className="px-4 py-3 text-left">Title</th>
//                       <th className="px-4 py-3 text-left">Type</th>
//                       <th className="px-4 py-3 text-left">Start Date</th>
//                       <th className="px-4 py-3 text-left">End Date</th>
//                       <th className="px-4 py-3 text-left">Impressions</th>
//                       <th className="px-4 py-3 text-left">Clicks</th>
//                       <th className="px-4 py-3 text-left">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr className="border-b">
//                       <td className="px-4 py-3">BNR001</td>
//                       <td className="px-4 py-3">Premium Properties Sept</td>
//                       <td className="px-4 py-3">Homepage</td>
//                       <td className="px-4 py-3">01 Sep, 2025</td>
//                       <td className="px-4 py-3">30 Sep, 2025</td>
//                       <td className="px-4 py-3">12,456</td>
//                       <td className="px-4 py-3">342</td>
//                       <td className="px-4 py-3">
//                         <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
//                         <button className="text-green-600 hover:text-green-800 mr-2">Pause</button>
//                         <button className="text-red-600 hover:text-red-800">Delete</button>
//                       </td>
//                     </tr>
//                     <tr className="border-b">
//                       <td className="px-4 py-3 text-center text-gray-500" colSpan="8">
//                         No more active banners
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

// export default Banners;











import React, { useState, useEffect } from 'react';

// Replace with your backend API endpoint for banners
const API_URL = 'http://localhost:8000/api/banners';

const BannersIntegration = ({ onBackToDashboard }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Live time update
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch banners from backend
  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setBanners(data.banners || []);
        setError('');
      })
      .catch(() => setError('Could not fetch banners.'))
      .finally(() => setLoading(false));
  }, []);

  // Fallback demo data if backend not ready
  const fallbackBanners = [
    {
      id: 'BNR001',
      title: 'Premium Properties Sept',
      type: 'Homepage',
      startDate: '01 Sep, 2025',
      endDate: '30 Sep, 2025',
      impressions: '12,456',
      clicks: '342'
    }
  ];

  const tableBanners = !loading && !error && banners.length
    ? banners
    : fallbackBanners;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 bg-slate-700 text-white min-h-screen">
          <div className="p-4">
            <button 
              onClick={onBackToDashboard}
              className="mb-4 text-blue-300 hover:text-blue-200 text-sm"
            >
              ← Back to Dashboard
            </button>
            <h2 className="text-lg font-semibold mb-4">Banners</h2>
            <nav className="space-y-2">
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Create Banner</a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Active Banners</a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Banner History</a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Performance</a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b">
              <h1 className="text-2xl font-bold text-gray-900">Banner Advertisements</h1>
              <p className="text-gray-600 mt-2">Manage your banner advertisements and promotional content</p>
            </div>
            
            <div className="p-6">
              {/* Action Buttons */}
              <div className="mb-6">
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 mr-4">
                  Create New Banner
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-50">
                  View Templates
                </button>
              </div>

              {/* Banner Types */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Homepage Banner</h3>
                  <p className="text-gray-600 text-sm mb-4">Premium placement on homepage</p>
                  <div className="bg-gray-100 h-24 rounded mb-3 flex items-center justify-center">
                    <span className="text-gray-500">1200x300px</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    Create Homepage Banner
                  </button>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Search Results Banner</h3>
                  <p className="text-gray-600 text-sm mb-4">Display in search results</p>
                  <div className="bg-gray-100 h-24 rounded mb-3 flex items-center justify-center">
                    <span className="text-gray-500">728x90px</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    Create Search Banner
                  </button>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Sidebar Banner</h3>
                  <p className="text-gray-600 text-sm mb-4">Sidebar placement</p>
                  <div className="bg-gray-100 h-24 rounded mb-3 flex items-center justify-center">
                    <span className="text-gray-500">300x250px</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    Create Sidebar Banner
                  </button>
                </div>
              </div>

              {/* Active Banners */}
              <div className="overflow-x-auto">
                <h3 className="text-lg font-semibold mb-4">Active Banners</h3>
                {loading ? (
                  <div className="py-6 text-center font-bold text-blue-600">Loading...</div>
                ) : error ? (
                  <div className="py-6 text-center font-bold text-red-600">{error}</div>
                ) : (
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left">Banner ID</th>
                        <th className="px-4 py-3 text-left">Title</th>
                        <th className="px-4 py-3 text-left">Type</th>
                        <th className="px-4 py-3 text-left">Start Date</th>
                        <th className="px-4 py-3 text-left">End Date</th>
                        <th className="px-4 py-3 text-left">Impressions</th>
                        <th className="px-4 py-3 text-left">Clicks</th>
                        <th className="px-4 py-3 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableBanners.map(banner => (
                        <tr className="border-b" key={banner.id}>
                          <td className="px-4 py-3">{banner.id}</td>
                          <td className="px-4 py-3">{banner.title}</td>
                          <td className="px-4 py-3">{banner.type}</td>
                          <td className="px-4 py-3">{banner.startDate}</td>
                          <td className="px-4 py-3">{banner.endDate}</td>
                          <td className="px-4 py-3">{banner.impressions}</td>
                          <td className="px-4 py-3">{banner.clicks}</td>
                          <td className="px-4 py-3">
                            <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
                            <button className="text-green-600 hover:text-green-800 mr-2">Pause</button>
                            <button className="text-red-600 hover:text-red-800">Delete</button>
                          </td>
                        </tr>
                      ))}
                      {tableBanners.length === 0 && (
                        <tr>
                          <td className="px-4 py-3 text-center text-gray-500" colSpan={8}>
                            No active banners
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BannersIntegration;