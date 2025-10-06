// import React, { useState } from 'react';

// const AllLeads = ({ onBackToDashboard }) => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   return (
//   <div className="min-h-screen bg-gray-50 flex flex-col">

//   <div className="flex flex-1 relative">
//         {/* Sidebar */}
//         {/* Sidebar overlays on mobile, static on desktop */}
//         <aside
//           className={`fixed md:static inset-y-0 left-0 w-64 bg-slate-700 text-white transform ${
//             sidebarOpen ? "translate-x-0" : "-translate-x-full"
//           } transition-transform duration-200 z-40 md:translate-x-0 md:z-auto h-full md:h-auto overflow-y-auto`}
//           style={{ maxHeight: '100vh' }}
//         >
//           <div className="p-4">
//             <button
//               onClick={onBackToDashboard}
//               className="mb-4 text-blue-300 hover:text-blue-200 text-sm"
//             >
//               ← Back to Dashboard
//             </button>
//             <h2 className="text-lg font-semibold mb-4">All Leads</h2>
//             <nav className="space-y-2">
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600">New Leads</a>
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600">Follow-up Required</a>
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600">Converted Leads</a>
//               <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600">Lead Analytics</a>
//             </nav>
//           </div>
//         </aside>

//         {/* Sidebar toggle button (Mobile only) */}
//         {/* Sidebar toggle button (Mobile only) */}
//         <button
//           className="md:hidden fixed bottom-4 left-4 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50"
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           aria-label="Toggle sidebar"
//         >
//           <span className="text-xl">{sidebarOpen ? "✕" : "☰"}</span>
//         </button>

//         {/* Main Content */}
//   <main className="flex-1 p-2 xs:p-3 sm:p-6 mt-14 md:mt-0 transition-all duration-200">
//           <div className="bg-white rounded-lg shadow-sm">
//             <div className="p-2 xs:p-4 sm:p-6 border-b">
//               <h1 className="text-xl sm:text-2xl font-bold text-gray-900">All Leads & Responses</h1>
//               <p className="text-gray-600 mt-2 text-sm">Manage all customer leads and property inquiries</p>
//             </div>

//             <div className="p-2 xs:p-4 sm:p-6">
//               {/* Lead Stats */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 xs:gap-4 sm:gap-6 mb-6">
//                 <div className="bg-blue-50 p-4 rounded-lg">
//                   <h3 className="text-base font-semibold text-blue-900">Total Leads</h3>
//                   <p className="text-xl font-bold text-blue-600">156</p>
//                   <p className="text-xs text-blue-600">+12 this week</p>
//                 </div>
//                 <div className="bg-green-50 p-4 rounded-lg">
//                   <h3 className="text-base font-semibold text-green-900">New Leads</h3>
//                   <p className="text-xl font-bold text-green-600">24</p>
//                   <p className="text-xs text-green-600">Require attention</p>
//                 </div>
//                 <div className="bg-yellow-50 p-4 rounded-lg">
//                   <h3 className="text-base font-semibold text-yellow-900">Follow-up</h3>
//                   <p className="text-xl font-bold text-yellow-600">18</p>
//                   <p className="text-xs text-yellow-600">Pending response</p>
//                 </div>
//                 <div className="bg-purple-50 p-4 rounded-lg">
//                   <h3 className="text-base font-semibold text-purple-900">Converted</h3>
//                   <p className="text-xl font-bold text-purple-600">8</p>
//                   <p className="text-xs text-purple-600">This month</p>
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="mb-6 flex flex-col xs:flex-row flex-wrap gap-2 sm:gap-4">
//                 <button className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded hover:bg-blue-700 text-sm">
//                   Export Leads
//                 </button>
//                 <button className="border border-gray-300 text-gray-700 px-3 sm:px-4 py-2 rounded hover:bg-gray-50 text-sm">
//                   Bulk Actions
//                 </button>
//                 <button className="border border-gray-300 text-gray-700 px-3 sm:px-4 py-2 rounded hover:bg-gray-50 text-sm">
//                   Lead Analytics
//                 </button>
//               </div>

//               {/* Filters */}
//               <div className="mb-6 flex flex-col xs:flex-row flex-wrap gap-2 sm:gap-4">
//                 <select className="border border-gray-300 rounded px-3 py-2 text-sm">
//                   <option>All Lead Types</option>
//                   <option>Property Inquiry</option>
//                   <option>Contact Request</option>
//                   <option>Site Visit</option>
//                   <option>Phone Call</option>
//                 </select>
//                 <select className="border border-gray-300 rounded px-3 py-2 text-sm">
//                   <option>All Status</option>
//                   <option>New</option>
//                   <option>Contacted</option>
//                   <option>Follow-up</option>
//                   <option>Converted</option>
//                   <option>Lost</option>
//                 </select>
//                 <select className="border border-gray-300 rounded px-3 py-2 text-sm">
//                   <option>Last 30 days</option>
//                   <option>Last 7 days</option>
//                   <option>This month</option>
//                   <option>Custom range</option>
//                 </select>
//                 <button className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded hover:bg-blue-700 text-sm">
//                   Apply Filters
//                 </button>
//               </div>

//               {/* Leads Table (Responsive scroll) */}
//               <div className="overflow-x-auto rounded border border-gray-100">
//                 <table className="min-w-[600px] w-full text-xs sm:text-sm">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-4 py-3 text-left">Lead ID</th>
//                       <th className="px-4 py-3 text-left">Customer Name</th>
//                       <th className="px-4 py-3 text-left">Contact</th>
//                       <th className="px-4 py-3 text-left">Property</th>
//                       <th className="px-4 py-3 text-left">Lead Type</th>
//                       <th className="px-4 py-3 text-left">Status</th>
//                       <th className="px-4 py-3 text-left">Date</th>
//                       <th className="px-4 py-3 text-left">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {/* Example row */}
//                     <tr className="border-b">
//                       <td className="px-4 py-3">LD001</td>
//                       <td className="px-4 py-3">
//                         <p className="font-medium">Rajesh Kumar</p>
//                         <p className="text-gray-500 text-xs">Interested Buyer</p>
//                       </td>
//                       <td className="px-4 py-3">
//                         <p>+91 98765 43210</p>
//                         <p className="text-gray-500 text-xs">rajesh@email.com</p>
//                       </td>
//                       <td className="px-4 py-3">3 BHK Apartment, Sector 62</td>
//                       <td className="px-4 py-3">Property Inquiry</td>
//                       <td className="px-4 py-3">
//                         <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">New</span>
//                       </td>
//                       <td className="px-4 py-3">22 Sep, 2025</td>
//                       <td className="px-4 py-3 space-x-2">
//                         <button className="text-blue-600 hover:text-blue-800">View</button>
//                         <button className="text-green-600 hover:text-green-800">Contact</button>
//                         <button className="text-yellow-600 hover:text-yellow-800">Follow-up</button>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>

//               {/* Pagination */}
//               <div className="mt-6 flex flex-col xs:flex-row justify-between items-center gap-2">
//                 <span className="text-xs sm:text-sm text-gray-700">Showing 1-3 of 156 leads</span>
//                 <div className="flex space-x-1 sm:space-x-2">
//                   <button className="px-2 sm:px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-xs sm:text-sm">Previous</button>
//                   <button className="px-2 sm:px-3 py-1 bg-blue-600 text-white rounded text-xs sm:text-sm">1</button>
//                   <button className="px-2 sm:px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-xs sm:text-sm">2</button>
//                   <button className="px-2 sm:px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-xs sm:text-sm">3</button>
//                   <button className="px-2 sm:px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-xs sm:text-sm">Next</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AllLeads;












import React, { useState, useEffect } from 'react';

// Replace with your backend API endpoint for leads
const API_URL = 'http://localhost:8000/api/leads';

const AllLeadsIntegration = ({ onBackToDashboard }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Filters
  const [filterType, setFilterType] = useState('All Lead Types');
  const [filterStatus, setFilterStatus] = useState('All Status');
  const [filterDate, setFilterDate] = useState('Last 30 days');

  // Stats
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    followup: 0,
    converted: 0,
  });

  // Fetch leads and stats from backend
  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams();
    if (filterType !== 'All Lead Types') params.append('type', filterType);
    if (filterStatus !== 'All Status') params.append('status', filterStatus);
    if (filterDate !== 'Last 30 days') params.append('date', filterDate);

    fetch(`${API_URL}?${params.toString()}`)
      .then(res => res.json())
      .then(data => {
        setLeads(data.leads || []);
        setStats({
          total: data.total ?? (data.leads ? data.leads.length : 0),
          new: data.new ?? (data.leads ? data.leads.filter(l => l.status === "New").length : 0),
          followup: data.followup ?? (data.leads ? data.leads.filter(l => l.status === "Follow-up").length : 0),
          converted: data.converted ?? (data.leads ? data.leads.filter(l => l.status === "Converted").length : 0),
        });
        setError('');
      })
      .catch(() => setError('Could not fetch leads.'))
      .finally(() => setLoading(false));
  }, [filterType, filterStatus, filterDate]);

  // Example action handlers
  const handleView = lead => alert(`View lead: ${lead.customerName}`);
  const handleContact = lead => alert(`Contact: ${lead.contact}`);
  const handleFollowup = lead => alert(`Follow-up for: ${lead.customerName}`);

  if (!leads.length && loading === false && !error) {
    // Fallback demo row if backend not ready
    setLeads([{
      id: "LD001",
      customerName: "Rajesh Kumar",
      notes: "Interested Buyer",
      contact: "+91 98765 43210",
      email: "rajesh@email.com",
      property: "3 BHK Apartment, Sector 62",
      type: "Property Inquiry",
      status: "New",
      date: "22 Sep, 2025"
    }]);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <aside
          className={`fixed md:static inset-y-0 left-0 w-64 bg-slate-700 text-white transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-200 z-40 md:translate-x-0 md:z-auto h-full md:h-auto overflow-y-auto`}
          style={{ maxHeight: '100vh' }}
        >
          <div className="p-4">
            <button
              onClick={onBackToDashboard}
              className="mb-4 text-blue-300 hover:text-blue-200 text-sm"
            >
              ← Back to Dashboard
            </button>
            <h2 className="text-lg font-semibold mb-4">All Leads</h2>
            <nav className="space-y-2">
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600">New Leads</a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600">Follow-up Required</a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600">Converted Leads</a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-slate-600">Lead Analytics</a>
            </nav>
          </div>
        </aside>
        {/* Sidebar toggle button (Mobile only) */}
        <button
          className="md:hidden fixed bottom-4 left-4 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
        >
          <span className="text-xl">{sidebarOpen ? "✕" : "☰"}</span>
        </button>
        {/* Main Content */}
        <main className="flex-1 p-2 xs:p-3 sm:p-6 mt-14 md:mt-0 transition-all duration-200">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-2 xs:p-4 sm:p-6 border-b">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">All Leads & Responses</h1>
              <p className="text-gray-600 mt-2 text-sm">Manage all customer leads and property inquiries</p>
            </div>
            <div className="p-2 xs:p-4 sm:p-6">
              {/* Lead Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 xs:gap-4 sm:gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-base font-semibold text-blue-900">Total Leads</h3>
                  <p className="text-xl font-bold text-blue-600">{stats.total}</p>
                  <p className="text-xs text-blue-600">+12 this week</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-base font-semibold text-green-900">New Leads</h3>
                  <p className="text-xl font-bold text-green-600">{stats.new}</p>
                  <p className="text-xs text-green-600">Require attention</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-base font-semibold text-yellow-900">Follow-up</h3>
                  <p className="text-xl font-bold text-yellow-600">{stats.followup}</p>
                  <p className="text-xs text-yellow-600">Pending response</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-base font-semibold text-purple-900">Converted</h3>
                  <p className="text-xl font-bold text-purple-600">{stats.converted}</p>
                  <p className="text-xs text-purple-600">This month</p>
                </div>
              </div>
              {/* Action Buttons */}
              <div className="mb-6 flex flex-col xs:flex-row flex-wrap gap-2 sm:gap-4">
                <button className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded hover:bg-blue-700 text-sm">
                  Export Leads
                </button>
                <button className="border border-gray-300 text-gray-700 px-3 sm:px-4 py-2 rounded hover:bg-gray-50 text-sm">
                  Bulk Actions
                </button>
                <button className="border border-gray-300 text-gray-700 px-3 sm:px-4 py-2 rounded hover:bg-gray-50 text-sm">
                  Lead Analytics
                </button>
              </div>
              {/* Filters */}
              <div className="mb-6 flex flex-col xs:flex-row flex-wrap gap-2 sm:gap-4">
                <select
                  className="border border-gray-300 rounded px-3 py-2 text-sm"
                  value={filterType}
                  onChange={e => setFilterType(e.target.value)}
                >
                  <option>All Lead Types</option>
                  <option>Property Inquiry</option>
                  <option>Contact Request</option>
                  <option>Site Visit</option>
                  <option>Phone Call</option>
                </select>
                <select
                  className="border border-gray-300 rounded px-3 py-2 text-sm"
                  value={filterStatus}
                  onChange={e => setFilterStatus(e.target.value)}
                >
                  <option>All Status</option>
                  <option>New</option>
                  <option>Contacted</option>
                  <option>Follow-up</option>
                  <option>Converted</option>
                  <option>Lost</option>
                </select>
                <select
                  className="border border-gray-300 rounded px-3 py-2 text-sm"
                  value={filterDate}
                  onChange={e => setFilterDate(e.target.value)}
                >
                  <option>Last 30 days</option>
                  <option>Last 7 days</option>
                  <option>This month</option>
                  <option>Custom range</option>
                </select>
                <button className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded hover:bg-blue-700 text-sm">
                  Apply Filters
                </button>
              </div>
              {/* Leads Table */}
              <div className="overflow-x-auto rounded border border-gray-100">
                <table className="min-w-[600px] w-full text-xs sm:text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left">Lead ID</th>
                      <th className="px-4 py-3 text-left">Customer Name</th>
                      <th className="px-4 py-3 text-left">Contact</th>
                      <th className="px-4 py-3 text-left">Property</th>
                      <th className="px-4 py-3 text-left">Lead Type</th>
                      <th className="px-4 py-3 text-left">Status</th>
                      <th className="px-4 py-3 text-left">Date</th>
                      <th className="px-4 py-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr><td colSpan={8} className="text-center py-8 text-blue-600 font-bold">Loading...</td></tr>
                    ) : error ? (
                      <tr><td colSpan={8} className="text-center py-8 text-red-600 font-bold">{error}</td></tr>
                    ) : leads.length === 0 ? (
                      <tr><td colSpan={8} className="text-center py-8 text-gray-400">No leads found.</td></tr>
                    ) : (
                      leads.map(lead => (
                        <tr className="border-b" key={lead.id}>
                          <td className="px-4 py-3">{lead.id}</td>
                          <td className="px-4 py-3">
                            <p className="font-medium">{lead.customerName}</p>
                            <p className="text-gray-500 text-xs">{lead.notes}</p>
                          </td>
                          <td className="px-4 py-3">
                            <p>{lead.contact}</p>
                            <p className="text-gray-500 text-xs">{lead.email}</p>
                          </td>
                          <td className="px-4 py-3">{lead.property}</td>
                          <td className="px-4 py-3">{lead.type}</td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              lead.status === "New" ? "bg-red-100 text-red-800" :
                              lead.status === "Follow-up" ? "bg-yellow-100 text-yellow-800" :
                              lead.status === "Converted" ? "bg-purple-100 text-purple-800" :
                              lead.status === "Contacted" ? "bg-blue-100 text-blue-800" :
                              "bg-gray-100 text-gray-700"
                            }`}>{lead.status}</span>
                          </td>
                          <td className="px-4 py-3">{lead.date}</td>
                          <td className="px-4 py-3 space-x-2">
                            <button className="text-blue-600 hover:text-blue-800" onClick={() => handleView(lead)}>View</button>
                            <button className="text-green-600 hover:text-green-800" onClick={() => handleContact(lead)}>Contact</button>
                            <button className="text-yellow-600 hover:text-yellow-800" onClick={() => handleFollowup(lead)}>Follow-up</button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              {/* Pagination */}
              <div className="mt-6 flex flex-col xs:flex-row justify-between items-center gap-2">
                <span className="text-xs sm:text-sm text-gray-700">
                  Showing {leads.length ? `1-${leads.length}` : '0'} of {stats.total} leads
                </span>
                <div className="flex space-x-1 sm:space-x-2">
                  <button className="px-2 sm:px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-xs sm:text-sm">Previous</button>
                  <button className="px-2 sm:px-3 py-1 bg-blue-600 text-white rounded text-xs sm:text-sm">1</button>
                  <button className="px-2 sm:px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-xs sm:text-sm">2</button>
                  <button className="px-2 sm:px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-xs sm:text-sm">3</button>
                  <button className="px-2 sm:px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-xs sm:text-sm">Next</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AllLeadsIntegration;