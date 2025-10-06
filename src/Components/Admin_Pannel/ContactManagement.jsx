// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { apiRequest, API_ENDPOINTS } from '../../utils/api';
// import Admin_Navbar from './Admin_Navbar';
// import Admin_Sidebar from './Admin_Sidebar';

// const ContactManagement = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedStatus, setSelectedStatus] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showContactModal, setShowContactModal] = useState(false);
//   const [selectedContact, setSelectedContact] = useState(null);
//   const navigate = useNavigate();

//   const statusOptions = [
//     { value: 'all', label: 'All Contacts' },
//     { value: 'new', label: 'New' },
//     { value: 'read', label: 'Read' },
//     { value: 'archived', label: 'Archived' }
//   ];

//   useEffect(() => {
//     loadContacts();
//   }, []);

//   const loadContacts = async () => {
//     try {
//       setLoading(true);
//       // Mock data - replace with actual API call
//       const mockContacts = [
//         {
//           id: 1,
//           name: 'John Smith',
//           email: 'john@example.com',
//           phone: '+91 9876543210',
//           subject: 'Property Inquiry',
//           message: 'I am interested in the 3BHK apartment in Mumbai. Could you please provide more details about the pricing and availability?',
//           status: 'new',
//           created_at: '2024-01-20T14:30:00Z',
//           updated_at: '2024-01-20T14:30:00Z'
//         },
//         {
//           id: 2,
//           name: 'Sarah Johnson',
//           email: 'sarah@example.com',
//           phone: '+91 9876543211',
//           subject: 'Listing My Property',
//           message: 'I want to list my villa for sale. What is the process and what are the charges?',
//           status: 'read',
//           created_at: '2024-01-19T16:45:00Z',
//           updated_at: '2024-01-20T10:15:00Z'
//         },
//         {
//           id: 3,
//           name: 'Mike Wilson',
//           email: 'mike@example.com',
//           phone: '+91 9876543212',
//           subject: 'Agent Services',
//           message: 'I need help finding a reliable real estate agent in Bangalore. Can you recommend someone?',
//           status: 'read',
//           created_at: '2024-01-18T11:20:00Z',
//           updated_at: '2024-01-19T14:30:00Z'
//         },
//         {
//           id: 4,
//           name: 'Lisa Brown',
//           email: 'lisa@example.com',
//           phone: '+91 9876543213',
//           subject: 'Website Issue',
//           message: 'I am having trouble uploading photos for my property listing. The upload keeps failing.',
//           status: 'archived',
//           created_at: '2024-01-17T09:15:00Z',
//           updated_at: '2024-01-18T12:00:00Z'
//         },
//         {
//           id: 5,
//           name: 'David Kumar',
//           email: 'david@example.com',
//           phone: '+91 9876543214',
//           subject: 'Payment Issue',
//           message: 'My payment for premium listing was deducted but the listing is still showing as basic. Please help.',
//           status: 'new',
//           created_at: '2024-01-20T08:30:00Z',
//           updated_at: '2024-01-20T08:30:00Z'
//         }
//       ];
//       setContacts(mockContacts);
//     } catch (error) {
//       console.error('Error loading contacts:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleStatusChange = async (contactId, newStatus) => {
//     try {
//       // Mock API call - replace with actual implementation
//       setContacts(contacts.map(contact => 
//         contact.id === contactId 
//           ? { ...contact, status: newStatus, updated_at: new Date().toISOString() }
//           : contact
//       ));
//     } catch (error) {
//       console.error('Error updating contact status:', error);
//     }
//   };

//   const handleDeleteContact = async (contactId) => {
//     if (window.confirm('Are you sure you want to delete this contact?')) {
//       try {
//         // Mock API call - replace with actual implementation
//         setContacts(contacts.filter(contact => contact.id !== contactId));
//       } catch (error) {
//         console.error('Error deleting contact:', error);
//       }
//     }
//   };

//   const filteredContacts = contacts.filter(contact => {
//     const matchesStatus = selectedStatus === 'all' || contact.status === selectedStatus;
//     const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          contact.subject.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesStatus && matchesSearch;
//   });

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'new': return 'bg-blue-100 text-blue-800';
//       case 'read': return 'bg-green-100 text-green-800';
//       case 'archived': return 'bg-gray-100 text-gray-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const getStatusCounts = () => {
//     return {
//       all: contacts.length,
//       new: contacts.filter(c => c.status === 'new').length,
//       read: contacts.filter(c => c.status === 'read').length,
//       archived: contacts.filter(c => c.status === 'archived').length
//     };
//   };

//   const statusCounts = getStatusCounts();

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading contacts...</p>
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
//               <h1 className="text-3xl font-bold text-gray-900">Contact Management</h1>
//               <p className="text-gray-600">Manage customer inquiries and contact requests</p>
//             </div>

//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//               {statusOptions.map((option) => (
//                 <div key={option.value} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0">
//                       <div className={`w-3 h-3 rounded-full ${
//                         option.value === 'new' ? 'bg-blue-500' :
//                         option.value === 'read' ? 'bg-green-500' :
//                         option.value === 'archived' ? 'bg-gray-500' :
//                         'bg-purple-500'
//                       }`}></div>
//                     </div>
//                     <div className="ml-4">
//                       <p className="text-sm font-medium text-gray-600">{option.label}</p>
//                       <p className="text-2xl font-bold text-gray-900">
//                         {statusCounts[option.value] || 0}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Controls */}
//             <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
//               {/* Search */}
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                   </svg>
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Search contacts..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               {/* Status Filter */}
//               <select
//                 value={selectedStatus}
//                 onChange={(e) => setSelectedStatus(e.target.value)}
//                 className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
//               >
//                 {statusOptions.map((option) => (
//                   <option key={option.value} value={option.value}>
//                     {option.label} ({statusCounts[option.value] || 0})
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Contacts Table */}
//             <div className="bg-white shadow-sm rounded-lg overflow-hidden">
//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Contact Info
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Subject
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Status
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Date
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Actions
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {filteredContacts.map((contact) => (
//                       <tr key={contact.id} className="hover:bg-gray-50">
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div>
//                             <div className="text-sm font-medium text-gray-900">{contact.name}</div>
//                             <div className="text-sm text-gray-500">{contact.email}</div>
//                             <div className="text-sm text-gray-500">{contact.phone}</div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4">
//                           <div className="text-sm text-gray-900">{contact.subject}</div>
//                           <div className="text-sm text-gray-500 truncate max-w-xs">
//                             {contact.message}
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(contact.status)}`}>
//                             {contact.status.toUpperCase()}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           <div>{new Date(contact.created_at).toLocaleDateString()}</div>
//                           <div>{new Date(contact.created_at).toLocaleTimeString()}</div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                           <div className="flex space-x-2">
//                             <button
//                               onClick={() => {
//                                 setSelectedContact(contact);
//                                 setShowContactModal(true);
//                               }}
//                               className="text-blue-600 hover:text-blue-900"
//                             >
//                               View
//                             </button>
                            
//                             {contact.status === 'new' && (
//                               <button
//                                 onClick={() => handleStatusChange(contact.id, 'read')}
//                                 className="text-green-600 hover:text-green-900"
//                               >
//                                 Mark Read
//                               </button>
//                             )}
                            
//                             {contact.status !== 'archived' && (
//                               <button
//                                 onClick={() => handleStatusChange(contact.id, 'archived')}
//                                 className="text-orange-600 hover:text-orange-900"
//                               >
//                                 Archive
//                               </button>
//                             )}
                            
//                             <button
//                               onClick={() => handleDeleteContact(contact.id)}
//                               className="text-red-600 hover:text-red-900"
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
              
//               {filteredContacts.length === 0 && (
//                 <div className="text-center py-12">
//                   <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                   <h3 className="mt-2 text-sm font-medium text-gray-900">No contacts found</h3>
//                   <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Contact Details Modal */}
//       {showContactModal && selectedContact && (
//         <div className="fixed inset-0 z-50 overflow-y-auto">
//           <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
//               <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => setShowContactModal(false)}></div>
//             </div>

//             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
//               <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                 <div className="flex justify-between items-start mb-4">
//                   <h3 className="text-lg leading-6 font-medium text-gray-900">
//                     Contact Details
//                   </h3>
//                   <button
//                     onClick={() => setShowContactModal(false)}
//                     className="text-gray-400 hover:text-gray-600"
//                   >
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   </button>
//                 </div>
                
//                 <div className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">Name</label>
//                       <p className="mt-1 text-sm text-gray-900">{selectedContact.name}</p>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">Status</label>
//                       <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedContact.status)}`}>
//                         {selectedContact.status.toUpperCase()}
//                       </span>
//                     </div>
//                   </div>
                  
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">Email</label>
//                       <p className="mt-1 text-sm text-gray-900">{selectedContact.email}</p>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">Phone</label>
//                       <p className="mt-1 text-sm text-gray-900">{selectedContact.phone}</p>
//                     </div>
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Subject</label>
//                     <p className="mt-1 text-sm text-gray-900">{selectedContact.subject}</p>
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Message</label>
//                     <div className="mt-1 p-3 border border-gray-300 rounded-md bg-gray-50">
//                       <p className="text-sm text-gray-900 whitespace-pre-wrap">{selectedContact.message}</p>
//                     </div>
//                   </div>
                  
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">Received</label>
//                       <p className="mt-1 text-sm text-gray-900">
//                         {new Date(selectedContact.created_at).toLocaleString()}
//                       </p>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">Last Updated</label>
//                       <p className="mt-1 text-sm text-gray-900">
//                         {new Date(selectedContact.updated_at).toLocaleString()}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//                 <div className="flex space-x-3">
//                   {selectedContact.status === 'new' && (
//                     <button
//                       onClick={() => {
//                         handleStatusChange(selectedContact.id, 'read');
//                         setShowContactModal(false);
//                       }}
//                       className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm"
//                     >
//                       Mark as Read
//                     </button>
//                   )}
                  
//                   {selectedContact.status !== 'archived' && (
//                     <button
//                       onClick={() => {
//                         handleStatusChange(selectedContact.id, 'archived');
//                         setShowContactModal(false);
//                       }}
//                       className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-600 text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:text-sm"
//                     >
//                       Archive
//                     </button>
//                   )}
                  
//                   <button
//                     onClick={() => setShowContactModal(false)}
//                     className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
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

// export default ContactManagement;








import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Replace with your backend API endpoints
const CONTACTS_API_URL = "http://localhost:8000/api/contacts";

import Admin_Navbar from './Admin_Navbar';
import Admin_Sidebar from './Admin_Sidebar';

const ContactManagementIntegration = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const navigate = useNavigate();

  const statusOptions = [
    { value: 'all', label: 'All Contacts' },
    { value: 'new', label: 'New' },
    { value: 'read', label: 'Read' },
    { value: 'archived', label: 'Archived' },
  ];

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      setLoading(true);
      const response = await fetch(CONTACTS_API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch contacts");
      }
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error loading contacts:', error);
      setContacts([]); // Fallback to empty data in case of failure
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (contactId, newStatus) => {
    try {
      const response = await fetch(`${CONTACTS_API_URL}/${contactId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!response.ok) {
        throw new Error('Failed to update contact status');
      }
      const updatedContact = await response.json();
      setContacts(contacts.map(contact =>
        contact.id === contactId ? updatedContact : contact
      ));
    } catch (error) {
      console.error('Error updating contact status:', error);
    }
  };

  const handleDeleteContact = async (contactId) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        const response = await fetch(`${CONTACTS_API_URL}/${contactId}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete contact');
        }
        setContacts(contacts.filter(contact => contact.id !== contactId));
      } catch (error) {
        console.error('Error deleting contact:', error);
      }
    }
  };

  const filteredContacts = contacts.filter(contact => {
    const matchesStatus = selectedStatus === 'all' || contact.status === selectedStatus;
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.subject.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'read': return 'bg-green-100 text-green-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusCounts = () => {
    return {
      all: contacts.length,
      new: contacts.filter(c => c.status === 'new').length,
      read: contacts.filter(c => c.status === 'read').length,
      archived: contacts.filter(c => c.status === 'archived').length,
    };
  };

  const statusCounts = getStatusCounts();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading contacts...</p>
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
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Contact Management</h1>
              <p className="text-gray-600">Manage customer inquiries and contact requests</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {statusOptions.map((option) => (
                <div key={option.value} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className={`w-3 h-3 rounded-full ${
                        option.value === 'new' ? 'bg-blue-500' :
                        option.value === 'read' ? 'bg-green-500' :
                        option.value === 'archived' ? 'bg-gray-500' :
                        'bg-purple-500'
                      }`}></div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">{option.label}</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {statusCounts[option.value] || 0}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search contacts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label} ({statusCounts[option.value] || 0})
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-white shadow-sm rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Contact Info
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subject
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredContacts.map((contact) => (
                      <tr key={contact.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                            <div className="text-sm text-gray-500">{contact.email}</div>
                            <div className="text-sm text-gray-500">{contact.phone}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">{contact.subject}</div>
                          <div className="text-sm text-gray-500 truncate max-w-xs">
                            {contact.message}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(contact.status)}`}>
                            {contact.status.toUpperCase()}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div>{new Date(contact.created_at).toLocaleDateString()}</div>
                          <div>{new Date(contact.created_at).toLocaleTimeString()}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => {
                                setSelectedContact(contact);
                                setShowContactModal(true);
                              }}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              View
                            </button>
                            <button
                              onClick={() => handleStatusChange(contact.id, 'archived')}
                              className="text-orange-600 hover:text-orange-900"
                            >
                              Archive
                            </button>
                            <button
                              onClick={() => handleDeleteContact(contact.id)}
                              className="text-red-600 hover:text-red-900"
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

export default ContactManagementIntegration;