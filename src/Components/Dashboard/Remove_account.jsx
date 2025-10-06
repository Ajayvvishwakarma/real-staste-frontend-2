// import React, { useState, useEffect } from 'react';

// const Remove_account = ({ onBackToDashboard }) => {
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [showConfirmDialog, setShowConfirmDialog] = useState(false);
//   const [confirmationText, setConfirmationText] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [userInfo, setUserInfo] = useState(null);

//   // Load user info from localStorage
//   useEffect(() => {
//     try {
//       const storedUserInfo = localStorage.getItem('user_info');
//       if (storedUserInfo) {
//         const user = JSON.parse(storedUserInfo);
//         setUserInfo({
//           name: user.name || 'User',
//           email: user.email || 'No email',
//           phone: user.mobile || user.phone || 'No phone',
//           memberType: 'Free Member',
//           memberSince: '10 Sep, 2025',
//           userType: user.userType || 'Individual',
//           location: {
//             subCity: user.subCity || 'Not specified',
//             city: user.city || 'Not specified', 
//             state: user.state || 'Not specified'
//           }
//         });
//       }
//     } catch (error) {
//       console.error('Error loading user info:', error);
//       // Fallback user info
//       setUserInfo({
//         name: 'User',
//         email: 'No email',
//         phone: 'No phone',
//         memberType: 'Free Member',
//         memberSince: '10 Sep, 2025',
//         userType: 'Individual',
//         location: {
//           subCity: 'Not specified',
//           city: 'Not specified',
//           state: 'Not specified'
//         }
//       });
//     }
//   }, []);

//   const handleDeleteClick = () => {
//     setShowConfirmDialog(true);
//   };

//   const handleConfirmDelete = async () => {
//     // Clear previous errors
//     setErrors({});

//     // Validation
//     if (!password.trim()) {
//       setErrors({ password: 'Password is required' });
//       return;
//     }

//     if (confirmationText !== 'DELETE') {
//       setErrors({ confirmation: 'Please type "DELETE" exactly as shown' });
//       return;
//     }

//     setIsDeleting(true);
    
//     try {
//       const token = localStorage.getItem('access_token');
      
//       if (!token) {
//         setErrors({ general: 'You are not logged in. Please login to delete your account.' });
//         return;
//       }

//       console.log('Mock: Sending delete account request...');

//       // Mock API delay
//       await new Promise(resolve => setTimeout(resolve, 1500));

//       console.log('Mock: Account deletion request:', {
//         password: password,
//         confirmation: confirmationText
//       });
      
//       // Mock successful response
//       const data = { message: 'Account deleted successfully' };
//       console.log('Mock: Account deletion successful:', data);
      
//       // Clear all user data from localStorage
//       localStorage.removeItem('access_token');
//       localStorage.removeItem('user_info');
//       localStorage.removeItem('token_type');
//       localStorage.removeItem('userEmail');
//       localStorage.removeItem('userRole');
//       localStorage.removeItem('user_type');
      
//       // Success - redirect to Home page
//       alert('Account successfully deleted. You will be redirected to the Home page.');
//       window.location.href = '/';
      
//     } catch (error) {
//       console.error('Mock account deletion error:', error);
//       setErrors({ general: 'Failed to delete account. Please try again.' });
//     } finally {
//       setIsDeleting(false);
//     }
//   };

//   const handleCancelDelete = () => {
//     setShowConfirmDialog(false);
//     setConfirmationText('');
//     setPassword('');
//     setErrors({});
//   };

//   if (!userInfo) {
//     return (
//       <div className="bg-gray-50 min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading user information...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Top Navigation Bar */}
//       <div className="bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 gap-2 sm:gap-0">
//             <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Remove Account</h1>
//             <div className="flex flex-wrap gap-2 sm:gap-4">
//               <button 
//                 onClick={onBackToDashboard}
//                 className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm font-medium"
//               >
//                 My Account
//               </button>
//               <span className="text-blue-600 text-xs sm:text-sm font-medium border-b-2 border-blue-600 pb-1">
//                 Remove Account
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
//                     {userInfo.name.charAt(0).toUpperCase()}
//                   </span>
//                 </div>
//                 <h3 className="text-base sm:text-lg font-medium text-gray-900">{userInfo.name}</h3>
//                 <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
//                   {userInfo.memberType}
//                 </span>
//                 <p className="text-xs sm:text-sm text-gray-600 mt-2">
//                   {userInfo.userType} on bhoomi the real estate
//                 </p>
//                 <p className="text-xs text-gray-500">
//                   Since {userInfo.memberSince}
//                 </p>
//               </div>

//               <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
//                 <div>
//                   <span className="font-medium text-gray-700">Email Address</span>
//                   <p className="text-gray-900 break-all">{userInfo.email}</p>
//                 </div>
                
//                 <div>
//                   <span className="font-medium text-gray-700">Phone</span>
//                   <p className="text-gray-900">{userInfo.phone}</p>
//                 </div>
                
//                 <div>
//                   <span className="font-medium text-gray-700">Address</span>
//                 </div>
                
//                 <div>
//                   <span className="font-medium text-gray-700">Sub City</span>
//                   <p className="text-gray-900">{userInfo.location.subCity}</p>
//                 </div>
                
//                 <div>
//                   <span className="font-medium text-gray-700">City</span>
//                   <p className="text-gray-900">{userInfo.location.city}</p>
//                 </div>
                
//                 <div>
//                   <span className="font-medium text-gray-700">State</span>
//                   <p className="text-gray-900">{userInfo.location.state}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Remove Account Section */}
//           <div className="w-full xl:w-2/3">
//             <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6">
//               <div className="border-b border-gray-200 pb-3 sm:pb-4 mb-4 sm:mb-6">
//                 <h2 className="text-base sm:text-lg font-medium text-red-600">Remove My Account</h2>
//               </div>

//               {/* Warning Section */}
//               <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
//                 <div className="flex">
//                   <svg className="w-5 h-5 text-red-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                   </svg>
//                   <div className="ml-3">
//                     <h3 className="text-sm font-medium text-red-800">
//                       Are You Sure You Want to Remove Your Account from bhoomi the real estate?
//                     </h3>
//                   </div>
//                 </div>
//               </div>

//               {/* Consequences List */}
//               <div className="space-y-4 mb-8">
//                 <div className="flex items-start">
//                   <svg className="w-5 h-5 text-gray-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
//                   </svg>
//                   <p className="text-sm text-gray-700">You will no longer able to login in this account.</p>
//                 </div>

//                 <div className="flex items-start">
//                   <svg className="w-5 h-5 text-gray-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
//                   </svg>
//                   <p className="text-sm text-gray-700">You Will lost all your inquiries.</p>
//                 </div>

//                 <div className="flex items-start">
//                   <svg className="w-5 h-5 text-gray-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
//                   </svg>
//                   <p className="text-sm text-gray-700">You will lost all your classifieds.</p>
//                 </div>

//                 <div className="flex items-start">
//                   <svg className="w-5 h-5 text-gray-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
//                   </svg>
//                   <p className="text-sm text-gray-700">You will not get inquiries from bhoomi the real estate from now.</p>
//                 </div>
//               </div>

//               {/* Delete Button */}
//               <div className="text-center">
//                 <button
//                   onClick={handleDeleteClick}
//                   className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Confirmation Dialog */}
//       {showConfirmDialog && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
//           <div className="relative top-20 mx-auto p-5 border w-11/12 max-w-md shadow-lg rounded-md bg-white">
//             <div className="mt-3">
//               {/* Icon */}
//               <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
//                 <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
//                 </svg>
//               </div>
              
//               {/* Title */}
//               <h3 className="text-lg font-medium text-gray-900 text-center mt-4">
//                 Confirm Account Deletion
//               </h3>
              
//               {/* Message */}
//               <div className="mt-4 px-7 py-3">
//                 {errors.general && (
//                   <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-4">
//                     <p className="text-sm text-red-800 text-center">{errors.general}</p>
//                   </div>
//                 )}

//                 <p className="text-sm text-gray-500 text-center mb-4">
//                   This action cannot be undone. This will permanently delete your account and remove all your data from our servers.
//                 </p>
                
//                 {/* Password Field */}
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700 text-center mb-2">
//                     Enter your current password:
//                   </label>
//                   <div className="relative">
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="Current password"
//                       className={`w-full px-3 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${errors.password ? 'border-red-300' : 'border-gray-300'}`}
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                     >
//                       {showPassword ? (
//                         <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
//                         </svg>
//                       ) : (
//                         <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                         </svg>
//                       )}
//                     </button>
//                   </div>
//                   {errors.password && (
//                     <p className="mt-1 text-sm text-red-600 text-center">{errors.password}</p>
//                   )}
//                 </div>
                
//                 {/* Confirmation Text */}
//                 <p className="text-sm text-gray-700 text-center mb-3">
//                   Please type <strong>DELETE</strong> to confirm:
//                 </p>
                
//                 <input
//                   type="text"
//                   value={confirmationText}
//                   onChange={(e) => setConfirmationText(e.target.value)}
//                   placeholder="Type DELETE here"
//                   className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-center ${errors.confirmation ? 'border-red-300' : 'border-gray-300'}`}
//                 />
//                 {errors.confirmation && (
//                   <p className="mt-1 text-sm text-red-600 text-center">{errors.confirmation}</p>
//                 )}
//               </div>
              
//               {/* Buttons */}
//               <div className="flex gap-3 px-6 py-3">
//                 <button
//                   onClick={handleCancelDelete}
//                   disabled={isDeleting}
//                   className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded text-sm font-medium disabled:opacity-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleConfirmDelete}
//                   disabled={isDeleting || !password.trim() || confirmationText !== 'DELETE'}
//                   className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
//                 >
//                   {isDeleting ? (
//                     <>
//                       <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Deleting...
//                     </>
//                   ) : (
//                     'Delete Account'
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Remove_account;












import React, { useState, useEffect } from 'react';

// Replace with your backend API endpoint for account deletion
const API_URL = 'http://localhost:8000/api/delete-account';

const RemoveAccountIntegration = ({ onBackToDashboard }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [confirmationText, setConfirmationText] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Fetch user info from localStorage or backend API
    const loadUserInfo = () => {
      try {
        const storedUserInfo = localStorage.getItem('user_info');
        if (storedUserInfo) {
          setUserInfo(JSON.parse(storedUserInfo));
        }
      } catch (error) {
        console.error('Error loading user info:', error);
      }
    };

    loadUserInfo();
  }, []);

  const handleDeleteClick = () => {
    setShowConfirmDialog(true);
  };

  const handleConfirmDelete = async () => {
    // Clear errors
    setErrors({});

    // Validate inputs
    if (!password.trim()) {
      setErrors((prev) => ({ ...prev, password: 'Password is required' }));
      return;
    }
    if (confirmationText !== 'DELETE') {
      setErrors((prev) => ({
        ...prev,
        confirmation: 'Please type "DELETE" exactly as shown',
      }));
      return;
    }

    setIsDeleting(true);

    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        setErrors((prev) => ({
          ...prev,
          general: 'You are not logged in. Please log in to delete your account.',
        }));
        return;
      }

      const response = await fetch(API_URL, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          password,
          confirmation: confirmationText,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete the account.');
      }

      // Success
      localStorage.clear();
      alert('Account successfully deleted. You will be redirected to the Home page.');
      window.location.href = '/';
    } catch (error) {
      setErrors((prev) => ({ ...prev, general: error.message }));
    } finally {
      setIsDeleting(false);
    }
  };

  const handleCancelDelete = () => {
    setShowConfirmDialog(false);
    setConfirmationText('');
    setPassword('');
    setErrors({});
  };

  if (!userInfo) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading user information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center py-3 gap-2">
            <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Remove Account</h1>
            <button
              onClick={onBackToDashboard}
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-lg font-medium text-red-600 mb-4">Remove My Account</h2>
          <p className="text-sm text-gray-700 mb-6">
            Once deleted, your account cannot be recovered. Make sure to download any data you want to
            keep before proceeding.
          </p>

          <button
            onClick={handleDeleteClick}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md text-sm font-medium"
          >
            Delete Account
          </button>
        </div>
      </div>

      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-md p-6 w-96">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Account Deletion</h3>
            {errors.general && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-4 text-red-600">
                {errors.general}
              </div>
            )}
            <p className="text-sm text-gray-700 mb-4">
              This action cannot be undone. Please type <strong>DELETE</strong> to confirm.
            </p>
            <input
              type="text"
              value={confirmationText}
              onChange={(e) => setConfirmationText(e.target.value)}
              placeholder="Type DELETE here"
              className={`w-full px-3 py-2 border rounded-md mb-3 ${
                errors.confirmation ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.confirmation && (
              <p className="text-sm text-red-500">{errors.confirmation}</p>
            )}

            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-3 flex items-center"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password}</p>
            )}

            <div className="flex justify-end mt-6">
              <button
                onClick={handleCancelDelete}
                className="mr-3 px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 text-sm text-white bg-red-600 rounded-md"
                disabled={isDeleting || !password || confirmationText !== 'DELETE'}
              >
                {isDeleting ? 'Deleting...' : 'Confirm'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RemoveAccountIntegration;