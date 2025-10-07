import React from 'react';

const PlainListings = ({ onBackToDashboard }) => {
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
            <h2 className="text-lg font-semibold mb-4">Plain Listings</h2>
            <nav className="space-y-2">
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Active Plain</a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Inactive Plain</a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Upgrade to Basic</a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Plain Listings</h1>
                  <p className="text-gray-600 mt-2">Basic property listings with essential information</p>
                </div>
                <div className="text-right">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">FREE PLAN</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              {/* Plan Features */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold mb-3">Plain Listing Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Basic property details</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Up to 5 photos</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Contact details visible</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>No priority placement</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900">Total Plain Listings</h3>
                  <p className="text-2xl font-bold text-blue-600">8</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900">Active</h3>
                  <p className="text-2xl font-bold text-green-600">6</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-900">Views This Month</h3>
                  <p className="text-2xl font-bold text-yellow-600">234</p>
                </div>
              </div>

              {/* Upgrade Prompt */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">Want more visibility?</h4>
                    <p className="text-blue-700">Upgrade to Basic, Platinum, or Premium listings for better exposure</p>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                    Upgrade Now
                  </button>
                </div>
              </div>

              {/* Plain Listings Table */}
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
                      <th className="px-4 py-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3">PLN001</td>
                      <td className="px-4 py-3">2 BHK Apartment</td>
                      <td className="px-4 py-3">Sector 15, Noida</td>
                      <td className="px-4 py-3">₹45 Lac</td>
                      <td className="px-4 py-3">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Active</span>
                      </td>
                      <td className="px-4 py-3">42</td>
                      <td className="px-4 py-3">
                        <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
                        <button className="text-green-600 hover:text-green-800 mr-2">Upgrade</button>
                        <button className="text-red-600 hover:text-red-800">Delete</button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">PLN002</td>
                      <td className="px-4 py-3">1 BHK Flat</td>
                      <td className="px-4 py-3">Dwarka, Delhi</td>
                      <td className="px-4 py-3">₹35 Lac</td>
                      <td className="px-4 py-3">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Active</span>
                      </td>
                      <td className="px-4 py-3">28</td>
                      <td className="px-4 py-3">
                        <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
                        <button className="text-green-600 hover:text-green-800 mr-2">Upgrade</button>
                        <button className="text-red-600 hover:text-red-800">Delete</button>
                      </td>
                    </tr>
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

export default PlainListings;











// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const PlainListings = ({ onBackToDashboard }) => {
//   const [listings, setListings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [stats, setStats] = useState({
//     total: 0,
//     active: 0,
//     views: 0,
//   });

//   // ✅ Replace with your backend API URL
//   const API_URL = "http://localhost:8000/api/listings/plain";

//   useEffect(() => {
//     fetchListings();
//   }, []);

//   const fetchListings = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get(API_URL);
//       const data = res.data;

//       setListings(data);

//       // Calculate stats
//       const active = data.filter((l) => l.status === "Active").length;
//       const views = data.reduce((sum, l) => sum + (l.views || 0), 0);

//       setStats({
//         total: data.length,
//         active,
//         views,
//       });
//     } catch (err) {
//       setError("Failed to fetch listings");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this listing?")) return;
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       setListings((prev) => prev.filter((l) => l.id !== id));
//     } catch (err) {
//       alert("Error deleting listing");
//     }
//   };

//   const handleUpgrade = (id) => {
//     alert(`Upgrade listing ${id} to Basic/Platinum`);
//   };

//   if (loading)
//     return (
//       <div className="flex items-center justify-center min-h-screen text-gray-600">
//         Loading listings...
//       </div>
//     );

//   if (error)
//     return (
//       <div className="flex items-center justify-center min-h-screen text-red-600">
//         {error}
//       </div>
//     );

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
//             <h2 className="text-lg font-semibold mb-4">Plain Listings</h2>
//             <nav className="space-y-2">
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Active Plain</a>
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Inactive Plain</a>
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Upgrade to Basic</a>
//             </nav>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6">
//           <div className="bg-white rounded-lg shadow-sm">
//             <div className="p-6 border-b">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <h1 className="text-2xl font-bold text-gray-900">Plain Listings</h1>
//                   <p className="text-gray-600 mt-2">
//                     Basic property listings with essential information
//                   </p>
//                 </div>
//                 <div className="text-right">
//                   <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
//                     FREE PLAN
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="p-6">
//               {/* Plan Features */}
//               <div className="bg-gray-50 rounded-lg p-4 mb-6">
//                 <h3 className="text-lg font-semibold mb-3">Plain Listing Features</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Basic property details</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Up to 5 photos</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Contact details visible</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-red-500 mr-2">✗</span>
//                     <span>No priority placement</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Quick Stats */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//                 <div className="bg-blue-50 p-4 rounded-lg">
//                   <h3 className="text-lg font-semibold text-blue-900">Total Plain Listings</h3>
//                   <p className="text-2xl font-bold text-blue-600">{stats.total}</p>
//                 </div>
//                 <div className="bg-green-50 p-4 rounded-lg">
//                   <h3 className="text-lg font-semibold text-green-900">Active</h3>
//                   <p className="text-2xl font-bold text-green-600">{stats.active}</p>
//                 </div>
//                 <div className="bg-yellow-50 p-4 rounded-lg">
//                   <h3 className="text-lg font-semibold text-yellow-900">Views This Month</h3>
//                   <p className="text-2xl font-bold text-yellow-600">{stats.views}</p>
//                 </div>
//               </div>

//               {/* Upgrade Prompt */}
//               <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <h4 className="text-lg font-semibold text-blue-900">
//                       Want more visibility?
//                     </h4>
//                     <p className="text-blue-700">
//                       Upgrade to Basic, Platinum, or Premium listings for better exposure
//                     </p>
//                   </div>
//                   <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
//                     Upgrade Now
//                   </button>
//                 </div>
//               </div>

//               {/* Table */}
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
//                       <th className="px-4 py-3 text-left">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {listings.map((item) => (
//                       <tr key={item.id} className="border-b hover:bg-gray-50">
//                         <td className="px-4 py-3">{item.property_id}</td>
//                         <td className="px-4 py-3">{item.title}</td>
//                         <td className="px-4 py-3">{item.location}</td>
//                         <td className="px-4 py-3">₹{item.price}</td>
//                         <td className="px-4 py-3">
//                           <span
//                             className={`px-2 py-1 rounded-full text-xs ${
//                               item.status === "Active"
//                                 ? "bg-green-100 text-green-800"
//                                 : "bg-gray-200 text-gray-800"
//                             }`}
//                           >
//                             {item.status}
//                           </span>
//                         </td>
//                         <td className="px-4 py-3">{item.views || 0}</td>
//                         <td className="px-4 py-3">
//                           <button className="text-blue-600 hover:text-blue-800 mr-2">
//                             Edit
//                           </button>
//                           <button
//                             onClick={() => handleUpgrade(item.id)}
//                             className="text-green-600 hover:text-green-800 mr-2"
//                           >
//                             Upgrade
//                           </button>
//                           <button
//                             onClick={() => handleDelete(item.id)}
//                             className="text-red-600 hover:text-red-800"
//                           >
//                             Delete
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                     {listings.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan="7"
//                           className="text-center py-6 text-gray-500 italic"
//                         >
//                           No plain listings found.
//                         </td>
//                       </tr>
//                     )}
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

// export default PlainListings;
