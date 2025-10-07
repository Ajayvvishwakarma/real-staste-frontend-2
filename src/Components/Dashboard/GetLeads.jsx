// import React from 'react';

// const GetLeads = ({ onBackToDashboard }) => {
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
//             <h2 className="text-lg font-semibold mb-4">Get Leads</h2>
//             <nav className="space-y-2">
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Lead Packages</a>
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Targeted Campaigns</a>
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Lead History</a>
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600 transition-colors">Success Stories</a>
//             </nav>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6">
//           <div className="bg-white rounded-lg shadow-sm">
//             <div className="p-6 border-b">
//               <h1 className="text-2xl font-bold text-gray-900">Get More Leads</h1>
//               <p className="text-gray-600 mt-2">Purchase targeted leads and boost your property business</p>
//             </div>
            
//             <div className="p-6">
//               {/* Hero Section */}
//               <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 mb-8">
//                 <div className="text-center">
//                   <h2 className="text-3xl font-bold text-gray-900 mb-4">Supercharge Your Property Business</h2>
//                   <p className="text-lg text-gray-700 mb-6">Get verified leads from genuine property seekers in your area</p>
//                   <div className="flex justify-center space-x-8 text-sm text-gray-600 mb-6">
//                     <div className="flex items-center">
//                       <span className="text-green-500 mr-2">✓</span>
//                       <span>Verified Customers</span>
//                     </div>
//                     <div className="flex items-center">
//                       <span className="text-green-500 mr-2">✓</span>
//                       <span>Targeted by Location</span>
//                     </div>
//                     <div className="flex items-center">
//                       <span className="text-green-500 mr-2">✓</span>
//                       <span>Budget-Specific</span>
//                     </div>
//                     <div className="flex items-center">
//                       <span className="text-green-500 mr-2">✓</span>
//                       <span>Ready to Buy/Rent</span>
//                     </div>
//                   </div>
//                   <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
//                     Start Getting Leads Today
//                   </button>
//                 </div>
//               </div>

//               {/* Lead Packages */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//                 <div className="border border-gray-200 rounded-lg p-6">
//                   <div className="text-center">
//                     <h3 className="text-xl font-bold mb-2">Starter Pack</h3>
//                     <div className="text-3xl font-bold text-blue-600 mb-4">₹2,999</div>
//                     <p className="text-gray-600 mb-6">Perfect for new agents</p>
//                     <ul className="text-left space-y-2 mb-6">
//                       <li className="flex items-center">
//                         <span className="text-green-500 mr-2">✓</span>
//                         <span>10 Verified Leads</span>
//                       </li>
//                       <li className="flex items-center">
//                         <span className="text-green-500 mr-2">✓</span>
//                         <span>30-day Validity</span>
//                       </li>
//                       <li className="flex items-center">
//                         <span className="text-green-500 mr-2">✓</span>
//                         <span>City-wise Targeting</span>
//                       </li>
//                       <li className="flex items-center">
//                         <span className="text-green-500 mr-2">✓</span>
//                         <span>Email Support</span>
//                       </li>
//                     </ul>
//                     <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//                       Choose Starter
//                     </button>
//                   </div>
//                 </div>

//                 <div className="border-2 border-blue-500 rounded-lg p-6 relative">
//                   <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
//                     <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">POPULAR</span>
//                   </div>
//                   <div className="text-center">
//                     <h3 className="text-xl font-bold mb-2">Professional Pack</h3>
//                     <div className="text-3xl font-bold text-blue-600 mb-4">₹7,999</div>
//                     <p className="text-gray-600 mb-6">Best for growing agents</p>
//                     <ul className="text-left space-y-2 mb-6">
//                       <li className="flex items-center">
//                         <span className="text-green-500 mr-2">✓</span>
//                         <span>30 Verified Leads</span>
//                       </li>
//                       <li className="flex items-center">
//                         <span className="text-green-500 mr-2">✓</span>
//                         <span>60-day Validity</span>
//                       </li>
//                       <li className="flex items-center">
//                         <span className="text-green-500 mr-2">✓</span>
//                         <span>Area-wise Targeting</span>
//                       </li>
//                       <li className="flex items-center">
//                         <span className="text-green-500 mr-2">✓</span>
//                         <span>Priority Support</span>
//                       </li>
//                       <li className="flex items-center">
//                         <span className="text-green-500 mr-2">✓</span>
//                         <span>Lead Analytics</span>
//                       </li>
//                     </ul>
//                     <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//                       Choose Professional
//                     </button>
//                   </div>
//                 </div>

//                 <div className="border border-gray-200 rounded-lg p-6">
//                   <div className="text-center">
//                     <h3 className="text-xl font-bold mb-2">Enterprise Pack</h3>
//                     <div className="text-3xl font-bold text-blue-600 mb-4">₹19,999</div>
//                     <p className="text-gray-600 mb-6">For established agencies</p>
//                     <ul className="text-left space-y-2 mb-6">
//                       <li className="flex items-center">
//                         <span className="text-green-500 mr-2">✓</span>
//                         <span>100 Verified Leads</span>
//                       </li>
//                       <li className="flex items-center">
//                         <span className="text-green-500 mr-2">✓</span>
//                         <span>90-day Validity</span>
//                       </li>
//                       <li className="flex items-center">
//                         <span className="text-green-500 mr-2">✓</span>
//                         <span>Custom Targeting</span>
//                       </li>
//                       <li className="flex items-center">
//                         <span className="text-green-500 mr-2">✓</span>
//                         <span>Dedicated Manager</span>
//                       </li>
//                       <li className="flex items-center">
//                         <span className="text-green-500 mr-2">✓</span>
//                         <span>Advanced Analytics</span>
//                       </li>
//                       <li className="flex items-center">
//                         <span className="text-green-500 mr-2">✓</span>
//                         <span>Custom Reports</span>
//                       </li>
//                     </ul>
//                     <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//                       Choose Enterprise
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Success Stories */}
//               <div className="bg-green-50 rounded-lg p-6">
//                 <h3 className="text-xl font-bold mb-4">Success Stories</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="bg-white p-4 rounded-lg">
//                     <p className="text-gray-700 mb-3">"I got 15 genuine leads in my first month and closed 3 deals. ROI was amazing!"</p>
//                     <div className="flex items-center">
//                       <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
//                         R
//                       </div>
//                       <div>
//                         <p className="font-semibold">Rajesh Kumar</p>
//                         <p className="text-sm text-gray-600">Property Consultant, Delhi</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="bg-white p-4 rounded-lg">
//                     <p className="text-gray-700 mb-3">"Quality of leads is excellent. Customers are serious buyers, not just window shoppers."</p>
//                     <div className="flex items-center">
//                       <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
//                         P
//                       </div>
//                       <div>
//                         <p className="font-semibold">Priya Sharma</p>
//                         <p className="text-sm text-gray-600">Real Estate Agent, Mumbai</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default GetLeads;










import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import GetLeads from './GetLeads';
import Dashboard from './Dashboard';
import LoginFormIntegration from '../postproperty/Login_Form';

const isAuthenticated = () => {
  return !!localStorage.getItem('access_token');
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const GetLeadsWithBack = () => {
  const navigate = useNavigate();
  return <GetLeads onBackToDashboard={() => navigate('/dashboard')} />;
};

const GetLeadsIntegration = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginFormIntegration />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/get-leads"
          element={
            <ProtectedRoute>
              <GetLeadsWithBack />
            </ProtectedRoute>
          }
        />
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

export default GetLeadsIntegration;