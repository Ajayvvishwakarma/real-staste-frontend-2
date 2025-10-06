// import React from 'react';

// const EMailers = ({ onBackToDashboard }) => {
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
//             <h2 className="text-lg font-semibold mb-4">E-Mailers</h2>
//             <nav className="space-y-2">
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Create E-Mailer</a>
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Active Campaigns</a>
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Campaign History</a>
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Templates</a>
//             </nav>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6">
//           <div className="bg-white rounded-lg shadow-sm">
//             <div className="p-6 border-b">
//               <h1 className="text-2xl font-bold text-gray-900">E-Mailers</h1>
//               <p className="text-gray-600 mt-2">Create and manage email campaigns for your properties</p>
//             </div>
            
//             <div className="p-6">
//               {/* Action Buttons */}
//               <div className="mb-6">
//                 <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 mr-4">
//                   Create New Campaign
//                 </button>
//                 <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-50">
//                   View Templates
//                 </button>
//               </div>

//               {/* Stats Cards */}
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
//                 <div className="bg-blue-50 p-4 rounded-lg">
//                   <h3 className="text-lg font-semibold text-blue-900">Total Campaigns</h3>
//                   <p className="text-2xl font-bold text-blue-600">12</p>
//                 </div>
//                 <div className="bg-green-50 p-4 rounded-lg">
//                   <h3 className="text-lg font-semibold text-green-900">Active Campaigns</h3>
//                   <p className="text-2xl font-bold text-green-600">5</p>
//                 </div>
//                 <div className="bg-yellow-50 p-4 rounded-lg">
//                   <h3 className="text-lg font-semibold text-yellow-900">Total Emails Sent</h3>
//                   <p className="text-2xl font-bold text-yellow-600">1,247</p>
//                 </div>
//                 <div className="bg-purple-50 p-4 rounded-lg">
//                   <h3 className="text-lg font-semibold text-purple-900">Open Rate</h3>
//                   <p className="text-2xl font-bold text-purple-600">24.3%</p>
//                 </div>
//               </div>

//               {/* Campaigns Table */}
//               <div className="overflow-x-auto">
//                 <table className="w-full text-sm">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-4 py-3 text-left">Campaign Name</th>
//                       <th className="px-4 py-3 text-left">Subject</th>
//                       <th className="px-4 py-3 text-left">Recipients</th>
//                       <th className="px-4 py-3 text-left">Status</th>
//                       <th className="px-4 py-3 text-left">Sent Date</th>
//                       <th className="px-4 py-3 text-left">Open Rate</th>
//                       <th className="px-4 py-3 text-left">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr className="border-b">
//                       <td className="px-4 py-3">Property Showcase Sept</td>
//                       <td className="px-4 py-3">New Properties Available in Your Area</td>
//                       <td className="px-4 py-3">156</td>
//                       <td className="px-4 py-3">
//                         <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Sent</span>
//                       </td>
//                       <td className="px-4 py-3">20 Sep, 2025</td>
//                       <td className="px-4 py-3">28.2%</td>
//                       <td className="px-4 py-3">
//                         <button className="text-blue-600 hover:text-blue-800 mr-2">View</button>
//                         <button className="text-gray-600 hover:text-gray-800">Duplicate</button>
//                       </td>
//                     </tr>
//                     <tr className="border-b">
//                       <td className="px-4 py-3">Monthly Newsletter</td>
//                       <td className="px-4 py-3">Market Updates & New Listings</td>
//                       <td className="px-4 py-3">89</td>
//                       <td className="px-4 py-3">
//                         <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Draft</span>
//                       </td>
//                       <td className="px-4 py-3">-</td>
//                       <td className="px-4 py-3">-</td>
//                       <td className="px-4 py-3">
//                         <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
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

// export default EMailers;











import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import EMailers from './EMailers';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';

// Helper to check auth status
const isAuthenticated = () => {
  return !!localStorage.getItem('access_token');
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

// Wrap EMailers to provide back-to-dashboard navigation
const EMailersWithBack = () => {
  const navigate = useNavigate();
  return <EMailers onBackToDashboard={() => navigate('/dashboard')} />;
};

const EMailersIntegration = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* Dashboard route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* EMailers route */}
        <Route
          path="/dashboard/emailers"
          element={
            <ProtectedRoute>
              <EMailersWithBack />
            </ProtectedRoute>
          }
        />
        {/* Default route */}
        <Route
          path="/"
          element={
            isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default EMailersIntegration;