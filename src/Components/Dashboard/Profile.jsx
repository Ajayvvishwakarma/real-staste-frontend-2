// import React, { useState, useEffect } from 'react';

// const Profile = ({ onProfileUpdate }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     address: '',
//     country: '',
//     state: '',
//     city: '',
//     subCity: '',
//     pinCode: '',
//     emailId: '',
//     mobileNo1: ''
//   });

//   const [selectedUserType, setSelectedUserType] = useState('Individual');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [submitting, setSubmitting] = useState(false);
//   const [validationErrors, setValidationErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [successMessage, setSuccessMessage] = useState('');
//   const [isAuthenticated, setIsAuthenticated] = useState(true);
//   const [initialDataLoaded, setInitialDataLoaded] = useState(false);

//   // Validation functions
//   const validateField = (name, value) => {
//     const errors = {};
    
//     switch (name) {
//       case 'name':
//         if (!value || value.trim().length < 2) {
//           errors.name = 'Name must be at least 2 characters long';
//         } else if (value.trim().length > 50) {
//           errors.name = 'Name cannot exceed 50 characters';
//         } else if (!/^[a-zA-Z\s]+$/.test(value.trim())) {
//           errors.name = 'Name can only contain letters and spaces';
//         }
//         break;
        
//       case 'emailId':
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!value) {
//           errors.emailId = 'Email is required';
//         } else if (!emailRegex.test(value)) {
//           errors.emailId = 'Please enter a valid email address';
//         }
//         break;
        
//       case 'mobileNo1':
//         const mobileRegex = /^\+91-?\d{10}$/;
//         if (!value) {
//           errors.mobileNo1 = 'Mobile number is required';
//         } else if (!mobileRegex.test(value)) {
//           errors.mobileNo1 = 'Please enter a valid mobile number (+91-XXXXXXXXXX)';
//         }
//         break;
        
//       case 'address':
//         if (!value || value.trim().length < 10) {
//           errors.address = 'Address must be at least 10 characters long';
//         } else if (value.trim().length > 200) {
//           errors.address = 'Address cannot exceed 200 characters';
//         }
//         break;
        
//       case 'city':
//         if (!value || value.trim().length < 2) {
//           errors.city = 'City is required';
//         } else if (!/^[a-zA-Z\s]+$/.test(value.trim())) {
//           errors.city = 'City can only contain letters and spaces';
//         }
//         break;
        
//       case 'state':
//         if (!value || value.trim().length < 2) {
//           errors.state = 'State is required';
//         } else if (!/^[a-zA-Z\s]+$/.test(value.trim())) {
//           errors.state = 'State can only contain letters and spaces';
//         }
//         break;
        
//       case 'country':
//         if (!value || value.trim().length < 2) {
//           errors.country = 'Country is required';
//         } else if (!/^[a-zA-Z\s]+$/.test(value.trim())) {
//           errors.country = 'Country can only contain letters and spaces';
//         }
//         break;
        
//       case 'pinCode':
//         if (value && !/^\d{6}$/.test(value)) {
//           errors.pinCode = 'Pin code must be exactly 6 digits';
//         }
//         break;
        
//       case 'subCity':
//         if (!value || value.trim().length < 2) {
//           errors.subCity = 'Sub city is required';
//         } else if (value.trim().length > 100) {
//           errors.subCity = 'Sub city cannot exceed 100 characters';
//         }
//         break;
        
//       default:
//         break;
//     }
    
//     return errors;
//   };

//   const validateForm = () => {
//     const requiredFields = ['name', 'emailId', 'mobileNo1', 'address', 'city', 'state', 'country', 'subCity'];
//     let allErrors = {};
    
//     requiredFields.forEach(field => {
//       const fieldErrors = validateField(field, formData[field]);
//       allErrors = { ...allErrors, ...fieldErrors };
//     });
    
//     // Validate optional fields if they have values
//     ['pinCode'].forEach(field => {
//       if (formData[field]) {
//         const fieldErrors = validateField(field, formData[field]);
//         allErrors = { ...allErrors, ...fieldErrors };
//       }
//     });
    
//     setValidationErrors(allErrors);
//     return Object.keys(allErrors).length === 0;
//   };

//   // Mock API Functions
//   const fetchProfile = async () => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       const token = localStorage.getItem('access_token');
      
//       if (!token) {
//         setError('You are not logged in. Please login to view your profile.');
//         setIsAuthenticated(false);
//         setLoading(false);
//         return;
//       }
      
//       // Mock API delay
//       await new Promise(resolve => setTimeout(resolve, 800));
      
//       // Mock user data from localStorage
//       const userInfo = JSON.parse(localStorage.getItem('user_info') || '{}');
      
//       // Mock API response data
//       const data = {
//         name: userInfo.name || 'John Doe',
//         address: userInfo.address || '123 Main Street',
//         country: userInfo.country || 'India',
//         state: userInfo.state || 'Maharashtra',
//         city: userInfo.city || 'Mumbai',
//         subCity: userInfo.subCity || 'Andheri',
//         pinCode: userInfo.pinCode || '400001',
//         email: userInfo.email || userInfo.emailId || 'user@example.com',
//         mobile: userInfo.mobile || userInfo.mobileNo1 || '+91 9876543210',
//         userType: userInfo.userType || 'client'
//       };
      
//       // Map API response to form data
//       setFormData({
//         name: data.name || '',
//         address: data.address || '',
//         country: data.country || 'India',
//         state: data.state || '',
//         city: data.city || '',
//         subCity: data.subCity || '',
//         pinCode: data.pinCode || '',
//         emailId: data.email || data.emailId || '',
//         mobileNo1: data.mobile || data.mobileNo1 || ''
//       });

//       if (data.userType) {
//         setSelectedUserType(data.userType);
//       }

//       // Clear any existing validation errors when data is loaded
//       setValidationErrors({});
//       setError(null);
//       setInitialDataLoaded(true);
//     } catch (err) {
//       console.error('Mock error fetching profile:', err);
//       // If profile doesn't exist (new user), still allow form editing
//       setError('Profile not found. You can create a new profile below.');
//       setInitialDataLoaded(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateProfile = async (profileData) => {
//     try {
//       setSubmitting(true);
//       setError(null);
      
//       const token = localStorage.getItem('access_token');
      
//       if (!token) {
//         setError('You are not logged in. Please login to update your profile.');
//         setIsAuthenticated(false);
//         return;
//       }
      
//       const updatePayload = {
//         name: profileData.name,
//         address: profileData.address,
//         country: profileData.country,
//         state: profileData.state,
//         city: profileData.city,
//         subCity: profileData.subCity,
//         pinCode: profileData.pinCode,
//         userType: selectedUserType,
//         email: profileData.emailId,
//         mobile: profileData.mobileNo1
//       };
      
//       console.log('Mock: Sending profile update:', updatePayload);

//       // Mock API delay
//       await new Promise(resolve => setTimeout(resolve, 1200));

//       // Mock successful response
//       const data = updatePayload;
//       console.log('Mock: Profile update successful:', data);
//       setSuccessMessage('Profile updated successfully! 🎉');
//       setError(null);
      
//       // Update localStorage with the new user info
//       const currentUserInfo = JSON.parse(localStorage.getItem('user_info') || '{}');
//       const updatedUserInfo = {
//         ...currentUserInfo,
//         name: data.name || updatePayload.name,
//         email: data.email || updatePayload.email,
//         mobile: data.mobile || updatePayload.mobile,
//         address: data.address || updatePayload.address,
//         city: data.city || updatePayload.city,
//         state: data.state || updatePayload.state,
//         country: data.country || updatePayload.country,
//         userType: data.userType || updatePayload.userType
//       };
//       localStorage.setItem('user_info', JSON.stringify(updatedUserInfo));
//       console.log('Updated localStorage user_info:', updatedUserInfo);
      
//       // Refresh profile data to show updated information
//       await fetchProfile();
      
//       // Notify parent component (Dashboard) to refresh user info
//       if (onProfileUpdate) {
//         onProfileUpdate();
//       }
      
//       // Clear success message after 5 seconds
//       setTimeout(() => {
//         setSuccessMessage('');
//       }, 5000);
      
//       return data;
//     } catch (err) {
//       console.error('Mock error updating profile:', err);
//       setError('Failed to update profile. Please try again.');
//       throw err;
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   // Fetch profile data on component mount
//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
    
//     // Update form data
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     // Mark field as touched
//     setTouched(prev => ({
//       ...prev,
//       [name]: true
//     }));
    
//     // Real-time validation - only if initial data has been loaded
//     if (initialDataLoaded) {
//       const fieldErrors = validateField(name, value);
//       setValidationErrors(prev => {
//         const newErrors = { ...prev };
        
//         // If there are errors for this field, add them
//         if (fieldErrors[name]) {
//           newErrors[name] = fieldErrors[name];
//         } else {
//           // If no errors, remove any existing error for this field
//           delete newErrors[name];
//         }
        
//         return newErrors;
//       });
//     }
//   };

//   const handleBlur = (e) => {
//     const { name } = e.target;
//     setTouched(prev => ({
//       ...prev,
//       [name]: true
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Mark all fields as touched for validation display
//     const allFields = ['name', 'emailId', 'mobileNo1', 'address', 'city', 'state', 'country', 'subCity', 'pinCode'];
//     const touchedFields = {};
//     allFields.forEach(field => touchedFields[field] = true);
//     setTouched(touchedFields);
    
//     // Validate form
//     if (!validateForm()) {
//       setError('Please fix the validation errors before submitting');
//       return;
//     }
    
//     try {
//       await updateProfile(formData);
//       setError(null); // Clear any previous errors
//     } catch (err) {
//       setSuccessMessage(''); // Clear success message if there's an error
//       // Error is already handled in updateProfile function
//     }
//   };

//   const userTypes = ['Individual', 'Agent', 'Builder/Promoter', 'Others'];

//   // Helper component for displaying validation errors
//   const ValidationError = ({ fieldName }) => {
//     if (!touched[fieldName] || !validationErrors[fieldName]) return null;
    
//     return (
//       <div className="text-red-500 text-xs mt-1 flex items-center">
//         <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
//           <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//         </svg>
//         {validationErrors[fieldName]}
//       </div>
//     );
//   };

//   // Loading state
//   if (loading) {
//     return (
//       <div className="bg-gray-50 min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading profile...</p>
//         </div>
//       </div>
//     );
//   }

//   // Show login prompt if not authenticated
//   if (!isAuthenticated) {
//     return (
//       <div className="bg-gray-50 min-h-screen flex items-center justify-center">
//         <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
//           <div className="text-center">
//             <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//             </svg>
//             <h3 className="mt-2 text-lg font-medium text-gray-900">Authentication Required</h3>
//             <p className="mt-1 text-sm text-gray-500">
//               Please login to access your profile.
//             </p>
//             <div className="mt-6">
//               <button
//                 onClick={() => window.location.href = '/login'}
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 Go to Login
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Error Message */}
//       {error && (
//         <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 pt-4">
//           <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
//             <div className="flex">
//               <div className="flex-shrink-0">
//                 <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                 </svg>
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm text-red-800">{error}</p>
//               </div>
//               <div className="ml-auto pl-3">
//                 <button
//                   onClick={() => setError(null)}
//                   className="text-red-400 hover:text-red-600"
//                 >
//                   <span className="sr-only">Dismiss</span>
//                   <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Success Message */}
//       {successMessage && (
//         <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 pt-4">
//           <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-4">
//             <div className="flex">
//               <div className="flex-shrink-0">
//                 <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                 </svg>
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm text-green-800">{successMessage}</p>
//               </div>
//               <div className="ml-auto pl-3">
//                 <button
//                   onClick={() => setSuccessMessage('')}
//                   className="text-green-400 hover:text-green-600"
//                 >
//                   <span className="sr-only">Dismiss</span>
//                   <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       {/* Top Navigation Bar */}
//       <div className="bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 gap-2 sm:gap-0">
//             <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Company Profile</h1>
//             <div className="flex flex-wrap gap-2 sm:gap-4">
//               <button className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm font-medium">
//                 My Account
//               </button>
//               <span className="text-blue-600 text-xs sm:text-sm font-medium border-b-2 border-blue-600 pb-1">
//                 Company Profile
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-3 sm:py-6">
//         <div className="flex flex-col xl:flex-row gap-4 sm:gap-6">
          
//           {/* Left Profile Card */}
//           <div className="w-full xl:w-1/3">
//             <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6">
//               <div className="text-center mb-4 sm:mb-6">
//                 <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center">
//                   <span className="text-lg sm:text-xl font-medium text-gray-600">
//                     {formData.name ? formData.name.charAt(0).toUpperCase() : 'U'}
//                   </span>
//                 </div>
//                 <h3 className="text-base sm:text-lg font-medium text-gray-900">
//                   {formData.name || 'User'}
//                 </h3>
//                 <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
//                   Free Member
//                 </span>
//                 <p className="text-xs sm:text-sm text-gray-600 mt-2">
//                   {selectedUserType} on bhoomi the real estate
//                 </p>
//                 <p className="text-xs text-gray-500">
//                   Since 10 Sep, 2025
//                 </p>
//               </div>

//               <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
//                 <div>
//                   <span className="font-medium text-gray-700">Email Address</span>
//                   <p className="text-gray-900 break-all">{formData.emailId || 'Not provided'}</p>
//                 </div>
                
//                 <div>
//                   <span className="font-medium text-gray-700">Phone</span>
//                   <p className="text-gray-900">{formData.mobileNo1 || 'Not provided'}</p>
//                 </div>
                
//                 <div>
//                   <span className="font-medium text-gray-700">Address</span>
//                   <p className="text-gray-900">{formData.address || 'Not provided'}</p>
//                 </div>
                
//                 <div>
//                   <span className="font-medium text-gray-700">Sub City</span>
//                   <p className="text-gray-900">{formData.subCity || 'Not provided'}</p>
//                 </div>
                
//                 <div>
//                   <span className="font-medium text-gray-700">City</span>
//                   <p className="text-gray-900">{formData.city || 'Not provided'}</p>
//                 </div>
                
//                 <div>
//                   <span className="font-medium text-gray-700">State</span>
//                   <p className="text-gray-900">{formData.state || 'Not provided'}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Form Section */}
//           <div className="w-full xl:w-2/3">
//             <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6">
//               <div className="border-b border-gray-200 pb-3 sm:pb-4 mb-4 sm:mb-6">
//                 <h2 className="text-base sm:text-lg font-medium text-red-600">Contact Info</h2>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
//                 {/* User Type Selection */}
//                 <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-4 lg:gap-6 mb-4 sm:mb-6">
//                   {userTypes.map((type) => (
//                     <label key={type} className="flex items-center cursor-pointer">
//                       <input
//                         type="radio"
//                         name="userType"
//                         value={type}
//                         checked={selectedUserType === type}
//                         onChange={(e) => setSelectedUserType(e.target.value)}
//                         className="w-3 h-3 sm:w-4 sm:h-4 text-red-600 border-gray-300 focus:ring-red-500"
//                       />
//                       <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-gray-700">{type}</span>
//                     </label>
//                   ))}
//                 </div>

//                 {/* Form Fields */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
//                   {/* Your Name */}
//                   <div>
//                     <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
//                       Your Name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       onBlur={handleBlur}
//                       className={`w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                         touched.name && validationErrors.name 
//                           ? 'border-red-300 bg-red-50' 
//                           : 'border-gray-300'
//                       }`}
//                       placeholder="Enter your full name"
//                     />
//                     <ValidationError fieldName="name" />
//                   </div>

//                   {/* Address */}
//                   <div>
//                     <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
//                       Address <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="address"
//                       value={formData.address}
//                       onChange={handleInputChange}
//                       onBlur={handleBlur}
//                       placeholder="Enter your complete address"
//                       className={`w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                         touched.address && validationErrors.address 
//                           ? 'border-red-300 bg-red-50' 
//                           : 'border-gray-300'
//                       }`}
//                     />
//                     <ValidationError fieldName="address" />
//                   </div>

//                   {/* Country */}
//                   <div>
//                     <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
//                       Country <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="country"
//                       value={formData.country}
//                       onChange={handleInputChange}
//                       onBlur={handleBlur}
//                       placeholder="Enter country name"
//                       className={`w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                         touched.country && validationErrors.country 
//                           ? 'border-red-300 bg-red-50' 
//                           : 'border-gray-300'
//                       }`}
//                     />
//                     <ValidationError fieldName="country" />
//                   </div>

//                   {/* State */}
//                   <div>
//                     <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
//                       State <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="state"
//                       value={formData.state}
//                       onChange={handleInputChange}
//                       onBlur={handleBlur}
//                       placeholder="Enter state name"
//                       className={`w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                         touched.state && validationErrors.state 
//                           ? 'border-red-300 bg-red-50' 
//                           : 'border-gray-300'
//                       }`}
//                     />
//                     <ValidationError fieldName="state" />
//                   </div>

//                   {/* City */}
//                   <div>
//                     <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
//                       City <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="city"
//                       value={formData.city}
//                       onChange={handleInputChange}
//                       onBlur={handleBlur}
//                       placeholder="Enter city name"
//                       className={`w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                         touched.city && validationErrors.city 
//                           ? 'border-red-300 bg-red-50' 
//                           : 'border-gray-300'
//                       }`}
//                     />
//                     <ValidationError fieldName="city" />
//                   </div>

//                   {/* Sub City */}
//                   <div>
//                     <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
//                       Sub City <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="subCity"
//                       value={formData.subCity}
//                       onChange={handleInputChange}
//                       onBlur={handleBlur}
//                       placeholder="Enter sub city/locality"
//                       className={`w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                         touched.subCity && validationErrors.subCity 
//                           ? 'border-red-300 bg-red-50' 
//                           : 'border-gray-300'
//                       }`}
//                     />
//                     <ValidationError fieldName="subCity" />
//                   </div>

//                   {/* Pin Code */}
//                   <div>
//                     <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
//                       Pin Code
//                     </label>
//                     <input
//                       type="text"
//                       name="pinCode"
//                       value={formData.pinCode}
//                       onChange={handleInputChange}
//                       onBlur={handleBlur}
//                       placeholder="Enter 6-digit pin code"
//                       maxLength="6"
//                       className={`w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                         touched.pinCode && validationErrors.pinCode 
//                           ? 'border-red-300 bg-red-50' 
//                           : 'border-gray-300'
//                       }`}
//                     />
//                     <ValidationError fieldName="pinCode" />
//                   </div>

//                   {/* Email ID */}
//                   <div>
//                     <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
//                       Email ID <span className="text-red-500">*</span>
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="email"
//                         name="emailId"
//                         value={formData.emailId}
//                         onChange={handleInputChange}
//                         onBlur={handleBlur}
//                         placeholder="Enter your email address"
//                         className={`w-full px-2 sm:px-3 py-2 pr-20 sm:pr-24 text-xs sm:text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                           touched.emailId && validationErrors.emailId 
//                             ? 'border-red-300 bg-red-50' 
//                             : 'border-gray-300'
//                         }`}
//                       />
//                       <div className="absolute right-2 sm:right-3 top-2 flex space-x-1 sm:space-x-2">
//                         <span className="text-xs text-green-600 font-medium">Verified</span>
//                         <button type="button" className="text-xs text-red-600 hover:underline">
//                           Verify
//                         </button>
//                       </div>
//                     </div>
//                     <ValidationError fieldName="emailId" />
//                   </div>

//                   {/* Mobile No. 1 */}
//                   <div>
//                     <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
//                       Mobile No. 1 <span className="text-red-500">*</span>
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="text"
//                         name="mobileNo1"
//                         value={formData.mobileNo1}
//                         onChange={handleInputChange}
//                         onBlur={handleBlur}
//                         placeholder="+91-XXXXXXXXXX"
//                         className={`w-full px-2 sm:px-3 py-2 pr-20 sm:pr-24 text-xs sm:text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                           touched.mobileNo1 && validationErrors.mobileNo1 
//                             ? 'border-red-300 bg-red-50' 
//                             : 'border-gray-300'
//                         }`}
//                       />
//                       <div className="absolute right-2 sm:right-3 top-2 flex items-center space-x-1 sm:space-x-2">
//                         <span className="text-xs text-green-600 font-medium">Verified</span>
//                         <button type="button" className="text-xs text-red-600 hover:underline">
//                           Change
//                         </button>
//                       </div>
//                     </div>
//                     <ValidationError fieldName="mobileNo1" />
//                     <div className="mt-1 flex items-center text-xs text-green-600">
//                       <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
//                         <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
//                       </svg>
//                       WhatsApp Subscribed
//                     </div>
//                   </div>

//                 </div>

//                 {/* Add More Button */}
//                 <div className="text-right">
//                   <button
//                     type="button"
//                     className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium"
//                   >
//                     🔗 Add More
//                   </button>
//                 </div>

//                 {/* Submit Button */}
//                 <div className="pt-4 sm:pt-6">
//                   {Object.keys(validationErrors).length > 0 && (
//                     <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
//                       <div className="flex items-center">
//                         <svg className="h-4 w-4 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                         </svg>
//                         <span className="text-sm text-yellow-800">
//                           Please fix {Object.keys(validationErrors).length} validation error{Object.keys(validationErrors).length > 1 ? 's' : ''} before submitting
//                         </span>
//                       </div>
//                     </div>
//                   )}
                  
//                   <button
//                     type="submit"
//                     disabled={submitting || Object.keys(validationErrors).length > 0}
//                     className={`w-full sm:w-auto px-4 sm:px-6 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors ${
//                       submitting || Object.keys(validationErrors).length > 0
//                         ? 'bg-gray-400 cursor-not-allowed text-white' 
//                         : 'bg-red-600 hover:bg-red-700 text-white'
//                     }`}
//                   >
//                     {submitting ? (
//                       <div className="flex items-center">
//                         <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                         Updating...
//                       </div>
//                     ) : (
//                       'Update Profile'
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;







import React, { useState, useEffect } from 'react';

// Replace with your backend API endpoint for profile
const API_URL = 'http://localhost:8000/api/profile';

const ProfileIntegration = ({ onProfileUpdate }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    country: '',
    state: '',
    city: '',
    subCity: '',
    pinCode: '',
    emailId: '',
    mobileNo1: ''
  });
  const [selectedUserType, setSelectedUserType] = useState('Individual');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch profile data from backend
  const fetchProfile = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('access_token');
      if (!token) {
        setError('You are not logged in. Please login to view your profile.');
        return;
      }

      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch profile information.');
      }

      const data = await response.json();
      setFormData({
        name: data.name || '',
        address: data.address || '',
        country: data.country || '',
        state: data.state || '',
        city: data.city || '',
        subCity: data.subCity || '',
        pinCode: data.pinCode || '',
        emailId: data.email || '',
        mobileNo1: data.mobile || ''
      });
      setSelectedUserType(data.userType || 'Individual');
      setError(null);
    } catch (error) {
      setError(error.message || 'An error occurred while fetching profile.');
    } finally {
      setLoading(false);
    }
  };

  // Update profile data on backend
  const updateProfile = async () => {
    try {
      setSubmitting(true);
      const token = localStorage.getItem('access_token');
      if (!token) {
        setError('You are not logged in. Please login to update your profile.');
        return;
      }

      const response = await fetch(API_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          userType: selectedUserType,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile information.');
      }

      const data = await response.json();
      setSuccessMessage('Profile updated successfully!');
      setError(null);

      // Notify parent component
      if (onProfileUpdate) {
        onProfileUpdate();
      }

      // Refresh profile data
      await fetchProfile();
    } catch (error) {
      setError(error.message || 'An error occurred while updating profile.');
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidationErrors({});
    // Perform validation (basic example)
    if (!formData.name) {
      setValidationErrors((prev) => ({ ...prev, name: 'Name is required' }));
      return;
    }
    if (!formData.emailId) {
      setValidationErrors((prev) => ({ ...prev, emailId: 'Email is required' }));
      return;
    }
    if (!formData.mobileNo1) {
      setValidationErrors((prev) => ({
        ...prev,
        mobileNo1: 'Mobile number is required',
      }));
      return;
    }
    await updateProfile();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      {successMessage && (
        <div className="bg-green-50 p-4 mb-4 text-green-600">{successMessage}</div>
      )}
      {error && <div className="bg-red-50 p-4 mb-4 text-red-600">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
          {validationErrors.name && (
            <p className="text-red-500 text-sm">{validationErrors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="emailId"
            value={formData.emailId}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
          {validationErrors.emailId && (
            <p className="text-red-500 text-sm">{validationErrors.emailId}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Mobile</label>
          <input
            type="text"
            name="mobileNo1"
            value={formData.mobileNo1}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
          {validationErrors.mobileNo1 && (
            <p className="text-red-500 text-sm">{validationErrors.mobileNo1}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Sub City</label>
          <input
            type="text"
            name="subCity"
            value={formData.subCity}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Pin Code</label>
          <input
            type="text"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">User Type</label>
          <select
            value={selectedUserType}
            onChange={(e) => setSelectedUserType(e.target.value)}
            className="border p-2 w-full"
          >
            <option value="Individual">Individual</option>
            <option value="Agent">Agent</option>
            <option value="Builder/Promoter">Builder/Promoter</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
            disabled={submitting}
          >
            {submitting ? 'Updating...' : 'Update Profile'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileIntegration;