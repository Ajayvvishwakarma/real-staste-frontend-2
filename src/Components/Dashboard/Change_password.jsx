// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Change_password = ({ onBackToDashboard }) => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     currentPassword: '',
//     newPassword: '',
//     confirmPassword: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [showCurrentPassword, setShowCurrentPassword] = useState(false);
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     // Clear specific error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.currentPassword.trim()) {
//       newErrors.currentPassword = 'Current password is required';
//     }

//     if (!formData.newPassword.trim()) {
//       newErrors.newPassword = 'New password is required';
//     } else if (formData.newPassword.length < 6) {
//       newErrors.newPassword = 'New password must be at least 6 characters long';
//     }

//     if (!formData.confirmPassword.trim()) {
//       newErrors.confirmPassword = 'Please confirm your new password';
//     } else if (formData.newPassword !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     if (formData.currentPassword === formData.newPassword && formData.currentPassword.trim()) {
//       newErrors.newPassword = 'New password must be different from current password';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       return;
//     }

//     setIsSubmitting(true);
    
//     try {
//       const token = localStorage.getItem('access_token');
      
//       if (!token) {
//         setErrors({ general: 'You are not logged in. Please login to change your password.' });
//         return;
//       }

//       // Mock password change with delay to simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1500));

//       console.log('Mock: Password change request:', {
//         current_password: formData.currentPassword,
//         new_password: formData.newPassword
//       });
      
//       // Mock successful response
//       const data = { message: 'Password changed successfully' };
//       console.log('Mock: Password change successful:', data);
      
//       // Success message and reset form
//       setSuccessMessage('Password changed successfully! 🎉');
//       setErrors({}); // Clear any errors
//       setFormData({
//         currentPassword: '',
//         newPassword: '',
//         confirmPassword: ''
//       });
      
//       // Clear success message and redirect after 3 seconds
//       setTimeout(() => {
//         setSuccessMessage('');
//         if (onBackToDashboard) {
//           onBackToDashboard(); // Call the callback to go back to dashboard view
//         } else {
//           navigate('/dashboard'); // Fallback navigation
//         }
//       }, 3000);
      
//     } catch (error) {
//       console.error('Mock password change error:', error);
//       setErrors({ general: 'Failed to change password. Please try again.' });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Top Navigation Bar */}
//       <div className="bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 gap-2 sm:gap-0">
//             <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Change Password</h1>
//             <div className="flex flex-wrap gap-2 sm:gap-4">
//               <button 
//                 onClick={onBackToDashboard}
//                 className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm font-medium"
//               >
//                 My Account
//               </button>
//               <span className="text-blue-600 text-xs sm:text-sm font-medium border-b-2 border-blue-600 pb-1">
//                 Change Password
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-8 py-3 sm:py-6">
//         {/* Page Header */}
//         <div className="mb-6 sm:mb-8">
//           <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Change Password</h1>
//           <p className="text-sm sm:text-base text-gray-600">Update your account password to keep your account secure</p>
//         </div>

//         {/* Change Password Form */}
//         <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 lg:p-8">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {successMessage && (
//               <div className="bg-green-50 border border-green-200 rounded-md p-4">
//                 <div className="flex">
//                   <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                   </svg>
//                   <div className="ml-3">
//                     <p className="text-sm text-green-800">{successMessage}</p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {errors.general && (
//               <div className="bg-red-50 border border-red-200 rounded-md p-4">
//                 <div className="flex">
//                   <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                   </svg>
//                   <div className="ml-3">
//                     <p className="text-sm text-red-800">{errors.general}</p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Current Password */}
//             <div>
//               <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-2">
//                 Your Old Password <span className="text-red-500">*</span>
//               </label>
//               <div className="relative">
//                 <input
//                   type={showCurrentPassword ? "text" : "password"}
//                   id="currentPassword"
//                   name="currentPassword"
//                   value={formData.currentPassword}
//                   onChange={handleInputChange}
//                   placeholder="Enter Old Password"
//                   className={`w-full px-3 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.currentPassword ? 'border-red-300' : 'border-gray-300'}`}
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowCurrentPassword(!showCurrentPassword)}
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                 >
//                   {showCurrentPassword ? (
//                     <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
//                     </svg>
//                   ) : (
//                     <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//               {errors.currentPassword && (
//                 <p className="mt-1 text-sm text-red-600">{errors.currentPassword}</p>
//               )}
//             </div>

//             {/* New Password */}
//             <div>
//               <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">
//                 Your New Password <span className="text-red-500">*</span>
//               </label>
//               <div className="relative">
//                 <input
//                   type={showNewPassword ? "text" : "password"}
//                   id="newPassword"
//                   name="newPassword"
//                   value={formData.newPassword}
//                   onChange={handleInputChange}
//                   placeholder="Enter New Password"
//                   className={`w-full px-3 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.newPassword ? 'border-red-300' : 'border-gray-300'}`}
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowNewPassword(!showNewPassword)}
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                 >
//                   {showNewPassword ? (
//                     <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
//                     </svg>
//                   ) : (
//                     <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//               {errors.newPassword && (
//                 <p className="mt-1 text-sm text-red-600">{errors.newPassword}</p>
//               )}
//               <p className="mt-1 text-xs text-gray-500">Password must be at least 6 characters long</p>
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
//                 Confirm Password <span className="text-red-500">*</span>
//               </label>
//               <div className="relative">
//                 <input
//                   type={showConfirmPassword ? "text" : "password"}
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleInputChange}
//                   placeholder="Enter Confirm Password"
//                   className={`w-full px-3 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.confirmPassword ? 'border-red-300' : 'border-gray-300'}`}
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                 >
//                   {showConfirmPassword ? (
//                     <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
//                     </svg>
//                   ) : (
//                     <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//               {errors.confirmPassword && (
//                 <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
//               )}
//             </div>

//             {/* Submit Button */}
//             <div className="pt-4">
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
//               >
//                 {isSubmitting ? (
//                   <>
//                     <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Updating...
//                   </>
//                 ) : (
//                   'Submit'
//                 )}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Change_password;











import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Replace with your actual backend API endpoint
const API_URL = 'http://localhost:8000/api/user/change-password';

const ChangePasswordIntegration = ({ onBackToDashboard }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.currentPassword.trim()) {
      newErrors.currentPassword = 'Current password is required';
    }
    if (!formData.newPassword.trim()) {
      newErrors.newPassword = 'New password is required';
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = 'New password must be at least 6 characters long';
    }
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Please confirm your new password';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (
      formData.currentPassword === formData.newPassword &&
      formData.currentPassword.trim()
    ) {
      newErrors.newPassword = 'New password must be different from current password';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        setErrors({ general: 'You are not logged in. Please login to change your password.' });
        setIsSubmitting(false);
        return;
      }
      // Make API call to backend for changing password
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          current_password: formData.currentPassword,
          new_password: formData.newPassword
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccessMessage('Password changed successfully! 🎉');
        setErrors({});
        setFormData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
        setTimeout(() => {
          setSuccessMessage('');
          if (onBackToDashboard) {
            onBackToDashboard();
          } else {
            navigate('/dashboard');
          }
        }, 3000);
      } else {
        setErrors({ general: data.detail || 'Failed to change password. Please try again.' });
      }
    } catch (error) {
      setErrors({ general: 'Failed to change password. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 gap-2 sm:gap-0">
            <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Change Password</h1>
            <div className="flex flex-wrap gap-2 sm:gap-4">
              <button 
                onClick={onBackToDashboard}
                className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm font-medium"
              >
                My Account
              </button>
              <span className="text-blue-600 text-xs sm:text-sm font-medium border-b-2 border-blue-600 pb-1">
                Change Password
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-8 py-3 sm:py-6">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Change Password</h1>
          <p className="text-sm sm:text-base text-gray-600">Update your account password to keep your account secure</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 lg:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {successMessage && (
              <div className="bg-green-50 border border-green-200 rounded-md p-4">
                <div className="flex">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="ml-3">
                    <p className="text-sm text-green-800">{successMessage}</p>
                  </div>
                </div>
              </div>
            )}

            {errors.general && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4">
                <div className="flex">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div className="ml-3">
                    <p className="text-sm text-red-800">{errors.general}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Current Password */}
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Your Old Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  id="currentPassword"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleInputChange}
                  placeholder="Enter Old Password"
                  className={`w-full px-3 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.currentPassword ? 'border-red-300' : 'border-gray-300'}`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  tabIndex={-1}
                >
                  {showCurrentPassword ? (
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.currentPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.currentPassword}</p>
              )}
            </div>

            {/* New Password */}
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Your New Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  placeholder="Enter New Password"
                  className={`w-full px-3 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.newPassword ? 'border-red-300' : 'border-gray-300'}`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  tabIndex={-1}
                >
                  {showNewPassword ? (
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.newPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.newPassword}</p>
              )}
              <p className="mt-1 text-xs text-gray-500">Password must be at least 6 characters long</p>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Enter Confirm Password"
                  className={`w-full px-3 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.confirmPassword ? 'border-red-300' : 'border-gray-300'}`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  tabIndex={-1}
                >
                  {showConfirmPassword ? (
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Updating...
                  </>
                ) : (
                  'Submit'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordIntegration;