// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { apiRequest, API_ENDPOINTS } from '../../utils/api';
// import Admin_Navbar from './Admin_Navbar';
// import Admin_Sidebar from './Admin_Sidebar';

// const AppointmentManagement = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedStatus, setSelectedStatus] = useState('all');
//   const [selectedDate, setSelectedDate] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showAppointmentModal, setShowAppointmentModal] = useState(false);
//   const [selectedAppointment, setSelectedAppointment] = useState(null);
//   const navigate = useNavigate();

//   const statusOptions = [
//     { value: 'all', label: 'All Appointments' },
//     { value: 'scheduled', label: 'Scheduled' },
//     { value: 'confirmed', label: 'Confirmed' },
//     { value: 'completed', label: 'Completed' },
//     { value: 'cancelled', label: 'Cancelled' },
//     { value: 'no_show', label: 'No Show' }
//   ];

//   useEffect(() => {
//     loadAppointments();
//   }, []);

//   const loadAppointments = async () => {
//     try {
//       setLoading(true);
//       // Mock data - replace with actual API call
//       const mockAppointments = [
//         {
//           id: 1,
//           client_name: 'John Smith',
//           client_email: 'john@example.com',
//           client_phone: '+91 9876543210',
//           agent_name: 'Sarah Wilson',
//           agent_id: 101,
//           property_title: '3BHK Luxury Apartment in Mumbai',
//           property_id: 501,
//           appointment_date: '2024-01-25',
//           appointment_time: '14:00',
//           status: 'scheduled',
//           notes: 'Client interested in property viewing. Prefers afternoon slot.',
//           created_at: '2024-01-20T10:30:00Z',
//           updated_at: '2024-01-20T10:30:00Z'
//         },
//         {
//           id: 2,
//           client_name: 'Lisa Brown',
//           client_email: 'lisa@example.com',
//           client_phone: '+91 9876543211',
//           agent_name: 'Mike Kumar',
//           agent_id: 102,
//           property_title: 'Villa in Bangalore with Garden',
//           property_id: 502,
//           appointment_date: '2024-01-24',
//           appointment_time: '11:00',
//           status: 'confirmed',
//           notes: 'Confirmed appointment. Client will bring spouse for viewing.',
//           created_at: '2024-01-18T15:45:00Z',
//           updated_at: '2024-01-22T09:20:00Z'
//         },
//         {
//           id: 3,
//           client_name: 'David Johnson',
//           client_email: 'david@example.com',
//           client_phone: '+91 9876543212',
//           agent_name: 'Priya Sharma',
//           agent_id: 103,
//           property_title: '2BHK Flat in Delhi NCR',
//           property_id: 503,
//           appointment_date: '2024-01-23',
//           appointment_time: '16:30',
//           status: 'completed',
//           notes: 'Successfully completed viewing. Client showed interest.',
//           created_at: '2024-01-15T11:20:00Z',
//           updated_at: '2024-01-23T17:00:00Z'
//         },
//         {
//           id: 4,
//           client_name: 'Emma Wilson',
//           client_email: 'emma@example.com',
//           client_phone: '+91 9876543213',
//           agent_name: 'Raj Patel',
//           agent_id: 104,
//           property_title: 'Studio Apartment in Pune',
//           property_id: 504,
//           appointment_date: '2024-01-22',
//           appointment_time: '10:00',
//           status: 'no_show',
//           notes: 'Client did not show up for the appointment.',
//           created_at: '2024-01-20T14:15:00Z',
//           updated_at: '2024-01-22T10:30:00Z'
//         },
//         {
//           id: 5,
//           client_name: 'Alex Davis',
//           client_email: 'alex@example.com',
//           client_phone: '+91 9876543214',
//           agent_name: 'Neha Singh',
//           agent_id: 105,
//           property_title: 'Penthouse in Hyderabad',
//           property_id: 505,
//           appointment_date: '2024-01-21',
//           appointment_time: '15:00',
//           status: 'cancelled',
//           notes: 'Client cancelled due to personal reasons.',
//           created_at: '2024-01-19T16:30:00Z',
//           updated_at: '2024-01-21T12:00:00Z'
//         }
//       ];
//       setAppointments(mockAppointments);
//     } catch (error) {
//       console.error('Error loading appointments:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleStatusChange = async (appointmentId, newStatus) => {
//     try {
//       // Mock API call - replace with actual implementation
//       setAppointments(appointments.map(appointment => 
//         appointment.id === appointmentId 
//           ? { ...appointment, status: newStatus, updated_at: new Date().toISOString() }
//           : appointment
//       ));
//     } catch (error) {
//       console.error('Error updating appointment status:', error);
//     }
//   };

//   const handleDeleteAppointment = async (appointmentId) => {
//     if (window.confirm('Are you sure you want to delete this appointment?')) {
//       try {
//         // Mock API call - replace with actual implementation
//         setAppointments(appointments.filter(appointment => appointment.id !== appointmentId));
//       } catch (error) {
//         console.error('Error deleting appointment:', error);
//       }
//     }
//   };

//   const filteredAppointments = appointments.filter(appointment => {
//     const matchesStatus = selectedStatus === 'all' || appointment.status === selectedStatus;
//     const matchesDate = !selectedDate || appointment.appointment_date === selectedDate;
//     const matchesSearch = appointment.client_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          appointment.agent_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          appointment.property_title.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesStatus && matchesDate && matchesSearch;
//   });

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'scheduled': return 'bg-blue-100 text-blue-800';
//       case 'confirmed': return 'bg-green-100 text-green-800';
//       case 'completed': return 'bg-purple-100 text-purple-800';
//       case 'cancelled': return 'bg-red-100 text-red-800';
//       case 'no_show': return 'bg-orange-100 text-orange-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const getStatusCounts = () => {
//     return {
//       all: appointments.length,
//       scheduled: appointments.filter(a => a.status === 'scheduled').length,
//       confirmed: appointments.filter(a => a.status === 'confirmed').length,
//       completed: appointments.filter(a => a.status === 'completed').length,
//       cancelled: appointments.filter(a => a.status === 'cancelled').length,
//       no_show: appointments.filter(a => a.status === 'no_show').length
//     };
//   };

//   const statusCounts = getStatusCounts();

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading appointments...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navbar - Full Width */}
//       <Admin_Navbar onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />

//       {/* Sidebar - Left side below navbar */}
//       <Admin_Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {/* Main content */}
//       <div className="pt-16 lg:pl-64 min-h-screen transition-all duration-300">
//         <main className="bg-gray-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
//             {/* Page header */}
//             <div className="mb-8">
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
//                 <div>
//                   <h1 className="text-3xl font-bold text-gray-900">Appointment Management</h1>
//                   <p className="mt-2 text-gray-600">Manage property viewing appointments and schedules</p>
//                 </div>
//                 <div className="mt-4 sm:mt-0">
//                   <button className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200">
//                     <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                     </svg>
//                     Schedule New
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
//               {statusOptions.map((option) => (
//                 <div key={option.value} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 transform hover:-translate-y-1">
//                   <div className="flex items-center">
//                     <div className={`flex-shrink-0 p-3 rounded-xl ${
//                       option.value === 'scheduled' ? 'bg-blue-100' :
//                       option.value === 'confirmed' ? 'bg-green-100' :
//                       option.value === 'completed' ? 'bg-purple-100' :
//                       option.value === 'cancelled' ? 'bg-red-100' :
//                       option.value === 'no_show' ? 'bg-orange-100' :
//                       'bg-gray-100'
//                     }`}>
//                       <div className={`w-6 h-6 rounded-full ${
//                         option.value === 'scheduled' ? 'bg-blue-500' :
//                         option.value === 'confirmed' ? 'bg-green-500' :
//                         option.value === 'completed' ? 'bg-purple-500' :
//                         option.value === 'cancelled' ? 'bg-red-500' :
//                         option.value === 'no_show' ? 'bg-orange-500' :
//                         'bg-gray-500'
//                       }`}></div>
//                     </div>
//                     <div className="ml-4 min-w-0 flex-1">
//                       <p className="text-sm font-medium text-gray-600 truncate">{option.label}</p>
//                       <p className="text-2xl font-bold text-gray-900 mt-1">
//                         {statusCounts[option.value] || 0}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="mt-4">
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div className={`h-2 rounded-full ${
//                         option.value === 'scheduled' ? 'bg-blue-500' :
//                         option.value === 'confirmed' ? 'bg-green-500' :
//                         option.value === 'completed' ? 'bg-purple-500' :
//                         option.value === 'cancelled' ? 'bg-red-500' :
//                         option.value === 'no_show' ? 'bg-orange-500' :
//                         'bg-gray-500'
//                       }`} style={{width: `${Math.min((statusCounts[option.value] || 0) / 5 * 100, 100)}%`}}></div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Controls */}
//             <div className="mb-8 flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
//               {/* Search */}
//               <div className="relative flex-1 max-w-md">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                   </svg>
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Search appointments..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
//                 />
//               </div>

//               {/* Filters */}
//               <div className="flex space-x-4">
//                 {/* Date Filter */}
//                 <input
//                   type="date"
//                   value={selectedDate}
//                   onChange={(e) => setSelectedDate(e.target.value)}
//                   className="border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
//                 />

//                 {/* Status Filter */}
//                 <select
//                   value={selectedStatus}
//                   onChange={(e) => setSelectedStatus(e.target.value)}
//                   className="border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm min-w-[180px]"
//                 >
//                   {statusOptions.map((option) => (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {/* Appointments Table */}
//             <div className="bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden">
//               <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
//                 <h3 className="text-xl font-semibold text-gray-900">Appointments List</h3>
//                 <div className="flex items-center space-x-2">
//                   <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
//                     {filteredAppointments.length} Total
//                   </span>
//                 </div>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Client Details
//                       </th>
//                       <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Property
//                       </th>
//                       <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Agent
//                       </th>
//                       <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Schedule
//                       </th>
//                       <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Status
//                       </th>
//                       <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Actions
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {filteredAppointments.map((appointment) => (
//                       <tr key={appointment.id} className="hover:bg-gray-50 transition-colors duration-200">
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div>
//                             <div className="text-sm font-medium text-gray-900">{appointment.client_name}</div>
//                             <div className="text-sm text-gray-500">{appointment.client_email}</div>
//                             <div className="text-sm text-gray-500">{appointment.client_phone}</div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4">
//                           <div className="text-sm text-gray-900 max-w-xs truncate">
//                             {appointment.property_title}
//                           </div>
//                           <div className="text-sm text-gray-500">ID: {appointment.property_id}</div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-900">{appointment.agent_name}</div>
//                           <div className="text-sm text-gray-500">ID: {appointment.agent_id}</div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-900">
//                             {new Date(appointment.appointment_date).toLocaleDateString()}
//                           </div>
//                           <div className="text-sm text-gray-500">
//                             {appointment.appointment_time}
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(appointment.status)}`}>
//                             {appointment.status.replace('_', ' ').toUpperCase()}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                           <div className="flex space-x-3">
//                             <button
//                               onClick={() => {
//                                 setSelectedAppointment(appointment);
//                                 setShowAppointmentModal(true);
//                               }}
//                               className="text-blue-600 hover:text-blue-900 font-medium transition-colors duration-200"
//                             >
//                               View
//                             </button>
                            
//                             {appointment.status === 'scheduled' && (
//                               <button
//                                 onClick={() => handleStatusChange(appointment.id, 'confirmed')}
//                                 className="text-green-600 hover:text-green-900 font-medium transition-colors duration-200"
//                               >
//                                 Confirm
//                               </button>
//                             )}
                            
//                             {(appointment.status === 'scheduled' || appointment.status === 'confirmed') && (
//                               <button
//                                 onClick={() => handleStatusChange(appointment.id, 'completed')}
//                                 className="text-purple-600 hover:text-purple-900 font-medium transition-colors duration-200"
//                               >
//                                 Complete
//                               </button>
//                             )}
                            
//                             {(appointment.status === 'scheduled' || appointment.status === 'confirmed') && (
//                               <button
//                                 onClick={() => handleStatusChange(appointment.id, 'cancelled')}
//                                 className="text-red-600 hover:text-red-900 font-medium transition-colors duration-200"
//                               >
//                                 Cancel
//                               </button>
//                             )}
                            
//                             <button
//                               onClick={() => handleDeleteAppointment(appointment.id)}
//                               className="text-red-600 hover:text-red-900 font-medium transition-colors duration-200"
//                             >
//                               Delete
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
              
//               {filteredAppointments.length === 0 && (
//                 <div className="text-center py-12">
//                   <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V9a2 2 0 00-2-2m-6 0V7" />
//                   </svg>
//                   <h3 className="mt-2 text-sm font-medium text-gray-900">No appointments found</h3>
//                   <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Appointment Details Modal */}
//       {showAppointmentModal && selectedAppointment && (
//         <div className="fixed inset-0 z-50 overflow-y-auto">
//           <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
//               <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => setShowAppointmentModal(false)}></div>
//             </div>

//             <div className="inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
//               <div className="bg-white px-6 pt-6 pb-4 sm:p-8 sm:pb-6">
//                 <div className="flex justify-between items-start mb-6">
//                   <h3 className="text-xl leading-6 font-semibold text-gray-900">
//                     Appointment Details
//                   </h3>
//                   <button
//                     onClick={() => setShowAppointmentModal(false)}
//                     className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
//                   >
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   </button>
//                 </div>
                
//                 <div className="space-y-6">
//                   {/* Client Information */}
//                   <div className="bg-gray-50 rounded-xl p-6">
//                     <h4 className="text-lg font-semibold text-gray-900 mb-4">Client Information</h4>
//                     <div className="grid grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">Name</label>
//                         <p className="mt-1 text-sm text-gray-900">{selectedAppointment.client_name}</p>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">Email</label>
//                         <p className="mt-1 text-sm text-gray-900">{selectedAppointment.client_email}</p>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">Phone</label>
//                         <p className="mt-1 text-sm text-gray-900">{selectedAppointment.client_phone}</p>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">Status</label>
//                         <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedAppointment.status)}`}>
//                           {selectedAppointment.status.replace('_', ' ').toUpperCase()}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Property Information */}
//                   <div className="bg-blue-50 rounded-xl p-6">
//                     <h4 className="text-lg font-semibold text-gray-900 mb-4">Property Information</h4>
//                     <div className="grid grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">Property Title</label>
//                         <p className="mt-1 text-sm text-gray-900">{selectedAppointment.property_title}</p>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">Property ID</label>
//                         <p className="mt-1 text-sm text-gray-900">{selectedAppointment.property_id}</p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Agent & Schedule Information */}
//                   <div className="bg-green-50 rounded-xl p-6">
//                     <h4 className="text-lg font-semibold text-gray-900 mb-4">Agent & Schedule</h4>
//                     <div className="grid grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">Agent Name</label>
//                         <p className="mt-1 text-sm text-gray-900">{selectedAppointment.agent_name}</p>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">Agent ID</label>
//                         <p className="mt-1 text-sm text-gray-900">{selectedAppointment.agent_id}</p>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">Date</label>
//                         <p className="mt-1 text-sm text-gray-900">
//                           {new Date(selectedAppointment.appointment_date).toLocaleDateString()}
//                         </p>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">Time</label>
//                         <p className="mt-1 text-sm text-gray-900">{selectedAppointment.appointment_time}</p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Notes */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
//                     <div className="p-4 border border-gray-300 rounded-xl bg-yellow-50">
//                       <p className="text-sm text-gray-900">{selectedAppointment.notes}</p>
//                     </div>
//                   </div>

//                   {/* Timestamps */}
//                   <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-200">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">Created</label>
//                       <p className="mt-1 text-sm text-gray-900">
//                         {new Date(selectedAppointment.created_at).toLocaleString()}
//                       </p>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">Last Updated</label>
//                       <p className="mt-1 text-sm text-gray-900">
//                         {new Date(selectedAppointment.updated_at).toLocaleString()}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="bg-gray-50 px-6 py-4 sm:px-8 sm:flex sm:flex-row-reverse">
//                 <div className="flex space-x-3">
//                   {selectedAppointment.status === 'scheduled' && (
//                     <button
//                       onClick={() => {
//                         handleStatusChange(selectedAppointment.id, 'confirmed');
//                         setShowAppointmentModal(false);
//                       }}
//                       className="inline-flex justify-center rounded-lg border border-transparent shadow-sm px-6 py-3 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200 sm:text-sm"
//                     >
//                       Confirm
//                     </button>
//                   )}
                  
//                   {(selectedAppointment.status === 'scheduled' || selectedAppointment.status === 'confirmed') && (
//                     <>
//                       <button
//                         onClick={() => {
//                           handleStatusChange(selectedAppointment.id, 'completed');
//                           setShowAppointmentModal(false);
//                         }}
//                         className="inline-flex justify-center rounded-lg border border-transparent shadow-sm px-6 py-3 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200 sm:text-sm"
//                       >
//                         Mark Complete
//                       </button>
                      
//                       <button
//                         onClick={() => {
//                           handleStatusChange(selectedAppointment.id, 'cancelled');
//                           setShowAppointmentModal(false);
//                         }}
//                         className="inline-flex justify-center rounded-lg border border-transparent shadow-sm px-6 py-3 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 sm:text-sm"
//                       >
//                         Cancel
//                       </button>
//                     </>
//                   )}
                  
//                   <button
//                     onClick={() => setShowAppointmentModal(false)}
//                     className="inline-flex justify-center rounded-lg border border-gray-300 shadow-sm px-6 py-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 sm:text-sm"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AppointmentManagement;






import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Replace with your backend API endpoints
const APPOINTMENTS_API_URL = "http://localhost:8000/api/appointments";

import Admin_Navbar from './Admin_Navbar';
import Admin_Sidebar from './Admin_Sidebar';

const AppointmentManagementIntegration = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedDate, setSelectedDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const navigate = useNavigate();

  const statusOptions = [
    { value: 'all', label: 'All Appointments' },
    { value: 'scheduled', label: 'Scheduled' },
    { value: 'confirmed', label: 'Confirmed' },
    { value: 'completed', label: 'Completed' },
    { value: 'cancelled', label: 'Cancelled' },
    { value: 'no_show', label: 'No Show' }
  ];

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      setLoading(true);
      const response = await fetch(APPOINTMENTS_API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch appointments");
      }
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error('Error loading appointments:', error);
      setAppointments([]); // Fallback to empty data in case of failure
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (appointmentId, newStatus) => {
    try {
      const response = await fetch(`${APPOINTMENTS_API_URL}/${appointmentId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (!response.ok) {
        throw new Error('Failed to update appointment status');
      }
      const updatedAppointment = await response.json();
      setAppointments(appointments.map(appointment =>
        appointment.id === appointmentId ? updatedAppointment : appointment
      ));
    } catch (error) {
      console.error('Error updating appointment status:', error);
    }
  };

  const handleDeleteAppointment = async (appointmentId) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      try {
        const response = await fetch(`${APPOINTMENTS_API_URL}/${appointmentId}`, {
          method: 'DELETE'
        });
        if (!response.ok) {
          throw new Error('Failed to delete appointment');
        }
        setAppointments(appointments.filter(appointment => appointment.id !== appointmentId));
      } catch (error) {
        console.error('Error deleting appointment:', error);
      }
    }
  };

  const filteredAppointments = appointments.filter(appointment => {
    const matchesStatus = selectedStatus === 'all' || appointment.status === selectedStatus;
    const matchesDate = !selectedDate || appointment.appointment_date === selectedDate;
    const matchesSearch = appointment.client_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.agent_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.property_title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesDate && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-purple-100 text-purple-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'no_show': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusCounts = () => {
    return {
      all: appointments.length,
      scheduled: appointments.filter(a => a.status === 'scheduled').length,
      confirmed: appointments.filter(a => a.status === 'confirmed').length,
      completed: appointments.filter(a => a.status === 'completed').length,
      cancelled: appointments.filter(a => a.status === 'cancelled').length,
      no_show: appointments.filter(a => a.status === 'no_show').length
    };
  };

  const statusCounts = getStatusCounts();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading appointments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Admin_Navbar onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />
      <Admin_Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="pt-16 lg:pl-64 min-h-screen transition-all duration-300">
        <main className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
            <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Appointment Management</h1>
                <p className="text-gray-600">Manage property viewing appointments and schedules</p>
              </div>
              <div className="mt-4 sm:mt-0">
                <button className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Schedule New
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
              {statusOptions.map((option) => (
                <div key={option.value} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 transform hover:-translate-y-1">
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 p-3 rounded-xl ${
                      option.value === 'scheduled' ? 'bg-blue-100' :
                      option.value === 'confirmed' ? 'bg-green-100' :
                      option.value === 'completed' ? 'bg-purple-100' :
                      option.value === 'cancelled' ? 'bg-red-100' :
                      option.value === 'no_show' ? 'bg-orange-100' :
                      'bg-gray-100'
                    }`}>
                      <div className={`w-6 h-6 rounded-full ${
                        option.value === 'scheduled' ? 'bg-blue-500' :
                        option.value === 'confirmed' ? 'bg-green-500' :
                        option.value === 'completed' ? 'bg-purple-500' :
                        option.value === 'cancelled' ? 'bg-red-500' :
                        option.value === 'no_show' ? 'bg-orange-500' :
                        'bg-gray-500'
                      }`}></div>
                    </div>
                    <div className="ml-4 min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-600 truncate">{option.label}</p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">
                        {statusCounts[option.value] || 0}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Appointments Table */}
            <div className="bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">Appointments List</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Client Details
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Property
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Agent
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Schedule
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredAppointments.map((appointment) => (
                      <tr key={appointment.id} className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{appointment.client_name}</div>
                            <div className="text-sm text-gray-500">{appointment.client_email}</div>
                            <div className="text-sm text-gray-500">{appointment.client_phone}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900 max-w-xs truncate">
                            {appointment.property_title}
                          </div>
                          <div className="text-sm text-gray-500">ID: {appointment.property_id}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{appointment.agent_name}</div>
                          <div className="text-sm text-gray-500">ID: {appointment.agent_id}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {new Date(appointment.appointment_date).toLocaleDateString()}
                          </div>
                          <div className="text-sm text-gray-500">
                            {appointment.appointment_time}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(appointment.status)}`}>
                            {appointment.status.replace('_', ' ').toUpperCase()}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex space-x-3">
                            <button
                              onClick={() => {
                                setSelectedAppointment(appointment);
                                setShowAppointmentModal(true);
                              }}
                              className="text-blue-600 hover:text-blue-900 font-medium transition-colors duration-200"
                            >
                              View
                            </button>
                            <button
                              onClick={() => handleStatusChange(appointment.id, 'completed')}
                              className="text-purple-600 hover:text-purple-900 font-medium transition-colors duration-200"
                            >
                              Complete
                            </button>
                            <button
                              onClick={() => handleDeleteAppointment(appointment.id)}
                              className="text-red-600 hover:text-red-900 font-medium transition-colors duration-200"
                            >
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
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppointmentManagementIntegration;