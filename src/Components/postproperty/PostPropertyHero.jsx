// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const PostPropertyHero = ({ onClose = null, isModal = false }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
  
//   // Check if user is authenticated (you can modify this logic based on your auth system)
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [currentStep, setCurrentStep] = useState(1);
//   const [userName, setUserName] = useState('');
  
//   const [form, setForm] = useState({
//     // Step 1 - Basic Details
//     actionType: '', // Sell, Rent/Lease, PG
//     propertyCategory: '', // Residential, Commercial
//     propertyType: '', // Flat/Apartment, Independent House/Villa, etc.
//     mobile: '',
    
//     // Step 2 - Location Details
//     city: '',
//     locality: '',
//     subLocality: '',
//     apartmentSociety: '',
//     houseNo: '',
    
//     // Step 3 - Property Profile
//     bedrooms: '',
//     bathrooms: '',
//     balconies: '',
//     carpetArea: '',
//     builtUpArea: '',
//     superArea: '',
//     totalFloors: '',
//     propertyOnFloor: '',
//     availabilityStatus: '',
//     ownership: '',
//     expectedPrice: '',
//     pricePerSqft: '',
//     maintenanceFee: '',
//     allInclusivePrice: false,
//     taxGovtCharges: false,
//     priceNegotiable: false,
//     propertyDescription: '',
    
//     // Step 4 - Photos & Videos
//     photos: [],
//     videos: [],
    
//     // Step 5 - Amenities
//     waterSource: [],
//     overlooking: [],
//     otherFeatures: [],
//     powerBackup: '',
//     propertyFacing: '',
//     flooringType: '',
//     locationAdvantages: []
//   });

//   const [showMorePropertyTypes, setShowMorePropertyTypes] = useState(false);

//   // Steps configuration
//   const [steps, setSteps] = useState([
//     { id: 1, name: 'Basic Details', title: 'Step 1', completed: false, active: true },
//     { id: 2, name: 'Location Details', title: 'Step 2', completed: false, active: false },
//     { id: 3, name: 'Property Profile', title: 'Step 3', completed: false, active: false },
//     { id: 4, name: 'Photos, Videos & Voice-over', title: 'Step 4', completed: false, active: false },
//     { id: 5, name: 'Amenities section', title: 'Step 5', completed: false, active: false },
//   ]);

//   const [isLoading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState({});

//   // Enhanced authentication check on component mount
//   useEffect(() => {
//     const checkAuthStatus = () => {
//       // Check if user is logged in
//       const token = localStorage.getItem('authToken');
//       const user = localStorage.getItem('userName');
//       const userMobile = localStorage.getItem('userMobile');
      
//       if (token && user) {
//         setIsAuthenticated(true);
//         setUserName(user);
        
//         // Restore form data if returning from login
//         const savedFormData = localStorage.getItem('postPropertyFormData');
//         if (savedFormData) {
//           try {
//             const parsedData = JSON.parse(savedFormData);
//             if (parsedData.timestamp) {
//               // Check if data is not too old (24 hours)
//               const dataAge = Date.now() - new Date(parsedData.timestamp).getTime();
//               if (dataAge < 24 * 60 * 60 * 1000) {
//                 const { timestamp, currentStep: savedStep, ...formData } = parsedData;
//                 setForm(formData);
//                 if (savedStep && savedStep > 1) {
//                   setCurrentStep(savedStep);
//                   // Update steps state to reflect progress
//                   setSteps(prevSteps => 
//                     prevSteps.map(step => ({
//                       ...step, 
//                       completed: step.id < savedStep,
//                       active: step.id === savedStep
//                     }))
//                   );
//                 }
//               }
//             }
//             // Clear the saved data after restoring
//             localStorage.removeItem('postPropertyFormData');
//           } catch (error) {
//             console.error('Error restoring form data:', error);
//           }
//         }
//       }

//       // Check if returning from login with success  
//       const urlParams = new URLSearchParams(location.search);
//       if (urlParams.get('loginSuccess') === 'true') {
//         const user = localStorage.getItem('userName');
//         if (user) {
//           setIsAuthenticated(true);
//           setUserName(user);
//         }
//       }
//     };

//     checkAuthStatus();
//   }, [location]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
    
//     // Special handling for mobile number
//     if (name === 'mobile') {
//       // Only allow digits and limit to 10 characters
//       const cleanValue = value.replace(/\D/g, '').slice(0, 10);
//       setForm((prev) => ({ ...prev, [name]: cleanValue }));
//     } else if (name === 'expectedPrice' || name === 'pricePerSqft') {
//       // Handle price fields - allow digits, commas, and decimals
//       const cleanValue = value.replace(/[^\d.,]/g, '');
//       setForm((prev) => ({ ...prev, [name]: cleanValue }));
//     } else if (name === 'carpetArea' || name === 'builtUpArea' || name === 'superArea') {
//       // Handle area fields - only allow digits and decimals
//       const cleanValue = value.replace(/[^\d.]/g, '');
//       setForm((prev) => ({ ...prev, [name]: cleanValue }));
//     } else if (name === 'totalFloors') {
//       // Handle floor numbers - only allow digits
//       const cleanValue = value.replace(/\D/g, '');
//       setForm((prev) => ({ ...prev, [name]: cleanValue }));
//     } else {
//       setForm((prev) => ({ ...prev, [name]: value }));
//     }

//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: '' }));
//     }
//   };

//   const handleActionType = (type) => {
//     setForm((prev) => ({ ...prev, actionType: type }));
//     if (errors.actionType) {
//       setErrors((prev) => ({ ...prev, actionType: '' }));
//     }
//   };

//   const handlePropertyCategory = (category) => {
//     setForm((prev) => ({ ...prev, propertyCategory: category, propertyType: '' }));
//     if (errors.propertyCategory) {
//       setErrors((prev) => ({ ...prev, propertyCategory: '' }));
//     }
//   };

//   const handlePropertyType = (type) => {
//     setForm((prev) => ({ ...prev, propertyType: type }));
//     if (errors.propertyType) {
//       setErrors((prev) => ({ ...prev, propertyType: '' }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (currentStep === 1) {
//       // Step 1 - Basic Details validation
//       if (!form.actionType) {
//         newErrors.actionType = 'Please select what you\'re looking to do with your property';
//       }

//       if (!form.propertyCategory) {
//         newErrors.propertyCategory = 'Please select property category (Residential or Commercial)';
//       }

//       if (!form.propertyType) {
//         newErrors.propertyType = 'Please select your property type';
//       }

//       // Mobile number validation (always required for posting property)
//       if (!form.mobile.trim()) {
//         newErrors.mobile = 'Mobile number is required for property posting';
//       } else {
//         const cleanMobile = form.mobile.replace(/\D/g, '');
//         if (cleanMobile.length !== 10) {
//           newErrors.mobile = 'Please enter a valid 10-digit mobile number';
//         } else if (!cleanMobile.match(/^[6-9]/)) {
//           newErrors.mobile = 'Mobile number must start with 6, 7, 8, or 9';
//         }
//       }
//     } else if (currentStep === 2) {
//       // Step 2 - Location Details validation
//       if (!form.city.trim()) {
//         newErrors.city = 'City name is required';
//       } else if (form.city.trim().length < 2) {
//         newErrors.city = 'Please enter a valid city name';
//       }

//       if (!form.locality.trim()) {
//         newErrors.locality = 'Locality is required to help buyers find your property';
//       } else if (form.locality.trim().length < 2) {
//         newErrors.locality = 'Please enter a valid locality name';
//       }

//       if (!form.apartmentSociety.trim()) {
//         newErrors.apartmentSociety = 'Apartment/Society name is required';
//       } else if (form.apartmentSociety.trim().length < 2) {
//         newErrors.apartmentSociety = 'Please enter a valid apartment/society name';
//       }
//     } else if (currentStep === 3) {
//       // Step 3 - Property Profile validation
//       if (!form.bedrooms) {
//         newErrors.bedrooms = 'Please select number of bedrooms';
//       }

//       if (!form.bathrooms) {
//         newErrors.bathrooms = 'Please select number of bathrooms';
//       }

//       if (!form.balconies) {
//         newErrors.balconies = 'Please select number of balconies';
//       }

//       if (!form.carpetArea) {
//         newErrors.carpetArea = 'Carpet area is mandatory for property listing';
//       } else {
//         const area = parseFloat(form.carpetArea);
//         if (isNaN(area) || area <= 0) {
//           newErrors.carpetArea = 'Please enter a valid carpet area';
//         } else if (area < 100) {
//           newErrors.carpetArea = 'Carpet area seems too small. Please verify.';
//         } else if (area > 10000) {
//           newErrors.carpetArea = 'Carpet area seems too large. Please verify.';
//         }
//       }

//       if (!form.totalFloors) {
//         newErrors.totalFloors = 'Please enter total number of floors';
//       } else {
//         const floors = parseInt(form.totalFloors);
//         if (isNaN(floors) || floors <= 0) {
//           newErrors.totalFloors = 'Please enter a valid number of floors';
//         }
//       }

//       if (!form.propertyOnFloor) {
//         newErrors.propertyOnFloor = 'Please select which floor your property is on';
//       }

//       if (!form.availabilityStatus) {
//         newErrors.availabilityStatus = 'Please select availability status';
//       }

//       if (!form.ownership) {
//         newErrors.ownership = 'Please select ownership type';
//       }

//       if (!form.expectedPrice.trim()) {
//         newErrors.expectedPrice = 'Expected price is required';
//       } else {
//         const price = parseFloat(form.expectedPrice.replace(/[^\d.]/g, ''));
//         if (isNaN(price) || price <= 0) {
//           newErrors.expectedPrice = 'Please enter a valid price';
//         } else if (price < 100000) {
//           newErrors.expectedPrice = 'Price seems too low. Please verify.';
//         }
//       }

//       // Property description validation
//       if (form.propertyDescription && form.propertyDescription.length > 0 && form.propertyDescription.length < 30) {
//         newErrors.propertyDescription = 'Property description must be at least 30 characters';
//       }
//     }
//     // Steps 4 and 5 are optional, but we can add some recommendations

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Calculate property score dynamically
//   const calculatePropertyScore = () => {
//     let score = 0;
//     const maxScore = 100;

//     // Step 1 completion (25%)
//     if (form.actionType && form.propertyCategory && form.propertyType) {
//       score += 25;
//     }

//     // Step 2 completion (25%)
//     if (form.city && form.locality && form.apartmentSociety) {
//       score += 25;
//     }

//     // Step 3 completion (30%)
//     if (form.bedrooms && form.bathrooms && form.carpetArea && form.expectedPrice) {
//       score += 20;
//     }
//     if (form.propertyDescription && form.propertyDescription.length >= 30) {
//       score += 10;
//     }

//     // Step 4 completion (10%)
//     if (form.photos.length > 0 || form.videos.length > 0) {
//       score += 10;
//     }

//     // Step 5 completion (10%)
//     if (form.waterSource.length > 0 || form.locationAdvantages.length > 0) {
//       score += 10;
//     }

//     return Math.min(score, maxScore);
//   };

//   // Function to check if user exists (simulate API call)
//   const checkUserExists = async (mobile) => {
//     try {
//       // Simulate API call delay
//       await new Promise(resolve => setTimeout(resolve, 500));
      
//       // Check in localStorage for existing users (for demo purposes)
//       const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
//       return existingUsers.some(user => user.mobile === mobile);
      
//       // In real app, this would be an API call:
//       // const response = await fetch('/api/check-user', {
//       //   method: 'POST',
//       //   headers: { 'Content-Type': 'application/json' },
//       //   body: JSON.stringify({ mobile })
//       // });
//       // return response.ok;
//     } catch (error) {
//       console.error('Error checking user existence:', error);
//       return false;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       // Scroll to first error
//       const firstErrorField = document.querySelector('.border-red-500');
//       if (firstErrorField) {
//         firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
//         firstErrorField.focus();
//       }
//       return;
//     }

//     setIsLoading(true);

//     // If not authenticated, handle mobile verification and redirect
//     if (!isAuthenticated) {
//       try {
//         // Store complete form data in localStorage to restore after login
//         const formDataToStore = {
//           ...form,
//           currentStep,
//           timestamp: new Date().toISOString()
//         };
//         localStorage.setItem('postPropertyFormData', JSON.stringify(formDataToStore));
        
//         if (isModal) {
//           // If in modal mode, store modal state and redirect
//           localStorage.setItem('postPropertyReturnUrl', '/post-property?openModal=true');
//           localStorage.setItem('postPropertyModal', 'true');
//         } else {
//           localStorage.setItem('postPropertyReturnUrl', '/post-property');
//         }
        
//         // Store the reason for redirect
//         localStorage.setItem('redirectReason', 'property-posting');
        
//         // Clean mobile number for checking
//         const cleanMobile = form.mobile.replace(/\D/g, '');
        
//         if (cleanMobile && cleanMobile.length === 10) {
//           // Check if user exists
//           const userExists = await checkUserExists(cleanMobile);
          
//           if (userExists) {
//             // User exists, redirect to login with mobile pre-filled
//             navigate(`/login?redirect=post-property&mobile=${cleanMobile}&message=existing-user`);
//           } else {
//             // User doesn't exist, redirect to register
//             navigate(`/register?redirect=post-property&mobile=${cleanMobile}&message=new-user`);
//           }
//         } else {
//           // Invalid mobile, redirect to login
//           navigate('/login?redirect=post-property&error=invalid-mobile');
//         }
//       } catch (error) {
//         console.error('Error during authentication flow:', error);
//         alert('Something went wrong. Please try again.');
//       } finally {
//         setIsLoading(false);
//       }
//       return;
//     }

//           // If authenticated, proceed to next step or complete form
//     if (currentStep < steps.length) {
//       // Update steps state
//       setSteps(prevSteps => 
//         prevSteps.map(step => ({
//           ...step, 
//           completed: step.id < currentStep + 1,
//           active: step.id === currentStep + 1
//         }))
//       );
//       setCurrentStep(currentStep + 1);
//     } else {
//       // Final submission
//       setIsLoading(true);
//       try {
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//         alert(`🎉 Success!\n\nYour property listing has been completed successfully!`);
//         setForm({
//           actionType: '',
//           propertyCategory: '',
//           propertyType: '',
//           mobile: '',
//           city: '',
//           locality: '',
//           subLocality: '',
//           apartmentSociety: '',
//           houseNo: '',
//           bedrooms: '',
//           bathrooms: '',
//           balconies: '',
//           carpetArea: '',
//           builtUpArea: '',
//           superArea: '',
//           totalFloors: '',
//           propertyOnFloor: '',
//           availabilityStatus: '',
//           ownership: '',
//           expectedPrice: '',
//           pricePerSqft: '',
//           maintenanceFee: '',
//           allInclusivePrice: false,
//           taxGovtCharges: false,
//           priceNegotiable: false,
//           propertyDescription: '',
//           photos: [],
//           videos: [],
//           waterSource: [],
//           overlooking: [],
//           otherFeatures: [],
//           powerBackup: '',
//           propertyFacing: '',
//           flooringType: '',
//           locationAdvantages: []
//         });
//         setErrors({});
//         setCurrentStep(1);
//         setSteps(prevSteps => 
//           prevSteps.map(step => ({
//             ...step, 
//             completed: false,
//             active: step.id === 1
//           }))
//         );
        
//         // Close modal if in modal mode
//         if (isModal && onClose) {
//           setTimeout(() => {
//             onClose();
//           }, 1500);
//         }
//       } catch (error) {
//         alert('❌ Submission failed. Please try again.');
//       }
//       setIsLoading(false);
//     }
//   };

//   const handleStepClick = (stepId) => {
//     if (stepId <= currentStep || steps[stepId - 1].completed) {
//       setCurrentStep(stepId);
//       setSteps(prevSteps => 
//         prevSteps.map(step => ({
//           ...step, 
//           active: step.id === stepId
//         }))
//       );
//     }
//   };

//   const handleBack = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//       setSteps(prevSteps => 
//         prevSteps.map(step => ({
//           ...step, 
//           active: step.id === currentStep - 1
//         }))
//       );
//     }
//   };

//   const getStepSummary = () => {
//     if (currentStep > 1 && form.actionType && form.propertyType) {
//       return `${form.propertyType} for ${form.actionType}`;
//     }
//     return '';
//   };
  
//   return (
//     <div className={`${isModal ? 'bg-gray-50' : 'min-h-screen bg-gray-50'}`}>
//       {/* Header */}
//       {!isModal && (
//         <div className="bg-blue-600 text-white py-4">
//           <div className="max-w-7xl mx-auto px-4">
//             <h1 className="text-xl font-semibold">Post Property</h1>
//           </div>
//         </div>
//       )}

//       <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isModal ? 'py-4 sm:py-6' : 'py-6 sm:py-8 lg:py-12'}`}>
//         <div className={`flex flex-col ${isModal ? 'lg:flex-row' : 'lg:flex-row'} gap-4 sm:gap-6 lg:gap-8`}>
//           {/* Left Sidebar - Steps */}
//           <div className="w-full lg:w-1/4 bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6 lg:mb-0 order-2 lg:order-1">
//             {/* Mobile - Horizontal Steps */}
//             <div className="lg:hidden">
//               <div className="flex justify-between items-center mb-4">
//                 {steps.map((step, index) => (
//                   <div key={step.id} className="flex flex-col items-center flex-1">
//                     <button
//                       onClick={() => handleStepClick(step.id)}
//                       disabled={step.id > currentStep && !step.completed}
//                       className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition-all duration-300 ${
//                         step.id === currentStep 
//                           ? 'bg-blue-600 text-white' 
//                           : step.completed
//                           ? 'bg-green-500 text-white hover:bg-green-600'
//                           : step.id < currentStep
//                           ? 'bg-green-500 text-white hover:bg-green-600'
//                           : 'bg-gray-200 text-gray-600 cursor-not-allowed'
//                       } ${(step.completed || step.id <= currentStep) && step.id !== currentStep ? 'cursor-pointer' : ''}`}
//                     >
//                       {step.completed || step.id < currentStep ? '✓' : step.id}
//                     </button>
//                     <p className={`text-xs mt-2 text-center px-1 ${
//                       step.id === currentStep ? 'text-blue-600 font-medium' : 'text-gray-600'
//                     }`}>
//                       {step.name.split(' ')[0]}
//                     </p>
//                     {index < steps.length - 1 && (
//                       <div className={`absolute top-4 sm:top-5 left-1/2 w-full h-0.5 ${
//                         step.completed || step.id < currentStep ? 'bg-green-500' : 'bg-gray-200'
//                       } -z-10`}></div>
//                     )}
//                   </div>
//                 ))}
//               </div>
              
//               {/* Current Step Info */}
//               <div className="text-center py-4 bg-gray-50 rounded-lg">
//                 <h3 className="font-medium text-gray-900">
//                   {steps.find(s => s.id === currentStep)?.name}
//                 </h3>
//                 <p className="text-sm text-gray-500">
//                   {steps.find(s => s.id === currentStep)?.title}
//                 </p>
//                 {currentStep === 1 && getStepSummary() && (
//                   <p className="text-xs text-blue-600 mt-1">
//                     {getStepSummary()} <span className="text-blue-500 underline">Edit</span>
//                   </p>
//                 )}
//               </div>
//             </div>

//             {/* Desktop - Vertical Steps */}
//             <div className="hidden lg:block space-y-6">
//               {steps.map((step, index) => (
//                 <div key={step.id} className="flex items-start">
//                   <div className="flex-shrink-0">
//                     <button
//                       onClick={() => handleStepClick(step.id)}
//                       disabled={step.id > currentStep && !step.completed}
//                       className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
//                         step.id === currentStep 
//                           ? 'bg-blue-600 text-white' 
//                           : step.completed
//                           ? 'bg-green-500 text-white hover:bg-green-600'
//                           : step.id < currentStep
//                           ? 'bg-green-500 text-white hover:bg-green-600'
//                           : 'bg-gray-200 text-gray-600 cursor-not-allowed'
//                       } ${(step.completed || step.id <= currentStep) && step.id !== currentStep ? 'cursor-pointer' : ''}`}
//                     >
//                       {step.completed || step.id < currentStep ? '✓' : step.id}
//                     </button>
//                     {index < steps.length - 1 && (
//                       <div className={`w-0.5 h-8 mx-auto mt-2 ${
//                         step.completed || step.id < currentStep ? 'bg-green-500' : 'bg-gray-200'
//                       }`}></div>
//                     )}
//                   </div>
//                   <div className="ml-3">
//                     <button
//                       onClick={() => handleStepClick(step.id)}
//                       disabled={step.id > currentStep && !step.completed}
//                       className={`text-left ${(step.completed || step.id <= currentStep) && step.id !== currentStep ? 'cursor-pointer hover:text-blue-600' : ''} ${step.id > currentStep && !step.completed ? 'cursor-not-allowed' : ''}`}
//                     >
//                       <p className={`text-sm font-medium ${
//                         step.id === currentStep ? 'text-blue-600' : 'text-gray-900'
//                       }`}>
//                         {step.name}
//                       </p>
//                       <p className="text-xs text-gray-500">{step.title}</p>
//                       {step.id === 1 && step.completed && getStepSummary() && (
//                         <p className="text-xs text-blue-600 mt-1">
//                           {getStepSummary()} <span className="text-blue-500 underline">Edit</span>
//                         </p>
//                       )}
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             {/* Property Score */}
//             <div className="mt-6 lg:mt-8 p-4 sm:p-6 bg-gray-50 rounded-lg">
//               <div className="text-center">
//                 <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-white rounded-full flex items-center justify-center border-4 ${
//                   calculatePropertyScore() > 50 ? 'border-green-400' : calculatePropertyScore() > 25 ? 'border-yellow-400' : 'border-gray-200'
//                 }`}>
//                   <span className={`text-lg sm:text-xl font-bold ${
//                     calculatePropertyScore() > 50 ? 'text-green-600' : calculatePropertyScore() > 25 ? 'text-yellow-600' : 'text-gray-400'
//                   }`}>
//                     {calculatePropertyScore()}%
//                   </span>
//                 </div>
//                 <h3 className="mt-2 text-sm sm:text-base font-semibold text-gray-900">Property Score</h3>
//                 <p className="text-xs sm:text-sm text-gray-500 mt-1">Better your property score, greater your visibility</p>
//               </div>
//             </div>
//           </div>
//           {/* Main Content */}
//           <div className="flex-1 bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8 order-1 lg:order-2">
//             {/* Back Button for Step 2+ */}
//             {currentStep > 1 && (
//               <button
//                 type="button"
//                 onClick={handleBack}
//                 className="flex items-center text-gray-600 hover:text-gray-800 mb-4 sm:mb-6 p-2 -ml-2 rounded-lg hover:bg-gray-100 transition-all duration-300 touch-manipulation"
//               >
//                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//                 <span className="text-sm sm:text-base">Back</span>
//               </button>
//             )}

//             {/* Step 1 - Basic Details */}
//             {currentStep === 1 && (
//               <>
//                 {isAuthenticated ? (
//                   <div className="mb-4 sm:mb-6">
//                     <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
//                       Welcome back {userName},
//                     </h2>
//                     <h3 className="text-base sm:text-lg text-gray-600">Fill out basic details</h3>
//                   </div>
//                 ) : (
//                   <div className="mb-4 sm:mb-6">
//                     <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
//                       Start posting your property, it's free
//                     </h2>
//                     <h3 className="text-base sm:text-lg text-gray-600">Add Basic Details</h3>
//                   </div>
//                 )}
//               </>
//             )}

//             {/* Step 2 - Location Details */}
//             {currentStep === 2 && (
//               <div className="mb-4 sm:mb-6">
//                 <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
//                   Where is your property located?
//                 </h2>
//                 <h3 className="text-base sm:text-lg text-gray-600">An accurate location helps you connect with the right buyers</h3>
//               </div>
//             )}

//             {/* Step 3 - Property Profile */}
//             {currentStep === 3 && (
//               <div className="mb-4 sm:mb-6">
//                 <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
//                   Tell us about your property
//                 </h2>
//               </div>
//             )}

//             {/* Step 4 - Photos & Videos */}
//             {currentStep === 4 && (
//               <div className="mb-4 sm:mb-6">
//                 <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
//                   Add one video of property
//                 </h2>
//                 <h3 className="text-base sm:text-lg text-gray-600">A video is worth a thousand pictures. Properties with videos get higher page views</h3>
//               </div>
//             )}

//             {/* Step 5 - Amenities */}
//             {currentStep === 5 && (
//               <div className="mb-4 sm:mb-6">
//                 <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
//                   Amenities & Features
//                 </h2>
//               </div>
//             )}

//             {isLoading && (
//               <div className="mb-4 bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 flex items-center">
//                 <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-blue-600 mr-3"></div>
//                 <span className="text-blue-700 text-sm sm:text-base font-medium">
//                   Processing...
//                 </span>
//               </div>
//             )}

//             {/* FORM */}
//             <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
//               {/* Step 1 - Basic Details Form */}
//               {currentStep === 1 && (
//                 <>
//                   {/* I'm looking to */}
//                   <div>
//                     <h4 className="text-gray-800 font-medium text-base sm:text-lg mb-3 sm:mb-4">
//                       I'm looking to
//                     </h4>
//                     <div className="flex flex-wrap gap-2 sm:gap-3">
//                       {['Sell', 'Rent / Lease', 'PG'].map((type) => (
//                         <button
//                           key={type}
//                           type="button"
//                           onClick={() => !isLoading && handleActionType(type)}
//                           disabled={isLoading}
//                           className={`border rounded-full px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-medium transition-all duration-300 touch-manipulation min-h-[44px] ${
//                             form.actionType === type
//                               ? 'bg-gray-800 text-white border-gray-800 shadow-md'
//                               : 'bg-white border-gray-300 hover:border-gray-400 text-gray-700 hover:shadow-sm'
//                           } ${isLoading ? 'opacity-50 cursor-not-allowed' : 'active:scale-95'}`}
//                         >
//                           {type}
//                         </button>
//                       ))}
//                     </div>
//                     {errors.actionType && (
//                       <p className="text-red-500 text-sm mt-2 flex items-center">
//                         <span className="mr-1">⚠️</span>
//                         {errors.actionType}
//                       </p>
//                     )}
//                   </div>

//                   {/* What kind of property do you have? */}
//                   <div>
//                     <h4 className="text-gray-800 font-medium text-base sm:text-lg mb-3 sm:mb-4">
//                       What kind of property do you have?
//                     </h4>
//                     <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4">
//                       {['Residential', 'Commercial'].map((category) => (
//                         <label key={category} className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 touch-manipulation">
//                           <input
//                             type="radio"
//                             name="propertyCategory"
//                             value={category}
//                             checked={form.propertyCategory === category}
//                             onChange={(e) => handlePropertyCategory(e.target.value)}
//                             disabled={isLoading}
//                             className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
//                           />
//                           <span className="ml-3 text-gray-700 font-medium text-sm sm:text-base">
//                             {category}
//                           </span>
//                         </label>
//                       ))}
//                     </div>
//                     {errors.propertyCategory && (
//                       <p className="text-red-500 text-sm mt-2 flex items-center">
//                         <span className="mr-1">⚠️</span>
//                         {errors.propertyCategory}
//                       </p>
//                     )}

//                     {/* Property Types */}
//                     {form.propertyCategory && (
//                       <div className="mt-4 sm:mt-6">
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
//                           {['Flat/Apartment', 'Independent House / Villa', 'Independent / Builder Floor', 'Plot / Land', '1 RK/ Studio Apartment', 'Serviced Apartment', 'Farmhouse', 'Other'].map((type) => (
//                             <button
//                               key={type}
//                               type="button"
//                               onClick={() => !isLoading && handlePropertyType(type)}
//                               disabled={isLoading}
//                               className={`border rounded-lg px-3 py-3 sm:px-4 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-300 text-left min-h-[44px] touch-manipulation active:scale-95 ${
//                                 form.propertyType === type
//                                   ? 'bg-blue-50 text-blue-800 border-blue-400 shadow-sm'
//                                   : 'bg-gray-50 border-gray-300 hover:bg-gray-100 text-gray-700 hover:border-gray-400'
//                               } ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
//                             >
//                               {type}
//                             </button>
//                           ))}
//                         </div>

//                         {errors.propertyType && (
//                           <p className="text-red-500 text-sm mt-2 flex items-center">
//                             <span className="mr-1">⚠️</span>
//                             {errors.propertyType}
//                           </p>
//                         )}
//                       </div>
//                     )}
//                   </div>

//                   {/* Your contact details - Only show if not authenticated */}
//                   {!isAuthenticated && (
//                     <>
//                       <div>
//                         <h4 className="text-gray-800 font-medium text-base sm:text-lg mb-3 sm:mb-4">
//                           Your contact details for the buyer to reach you
//                         </h4>
//                         <div className="relative">
//                           <div className="flex">
//                             <span className="bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg px-3 py-3 sm:py-3.5 text-gray-600 text-sm sm:text-base min-w-[50px] sm:min-w-[56px] flex items-center justify-center">+91</span>
//                             <input
//                               type="tel"
//                               name="mobile"
//                               value={form.mobile}
//                               onChange={handleChange}
//                               placeholder="9876543210"
//                               className={`border rounded-r-lg px-3 py-3 sm:px-4 sm:py-3.5 w-full text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 min-h-[44px] ${
//                                 errors.mobile
//                                   ? 'border-red-500 focus:ring-red-500'
//                                   : form.mobile.length === 10
//                                   ? 'border-green-500 focus:ring-green-500'
//                                   : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
//                               }`}
//                               disabled={isLoading}
//                               maxLength="10"
//                             />
//                           </div>
//                           {form.mobile.length === 10 && !errors.mobile && (
//                             <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
//                               <span className="text-green-500 text-lg">✓</span>
//                             </div>
//                           )}
//                         </div>
//                         {errors.mobile && (
//                           <p className="text-red-500 text-sm mt-2 flex items-center">
//                             <span className="mr-1">⚠️</span>
//                             {errors.mobile}
//                           </p>
//                         )}
//                         {form.mobile.length === 10 && !errors.mobile && (
//                           <p className="text-green-600 text-sm mt-2 flex items-center">
//                             <span className="mr-1">✅</span>
//                             Valid mobile number - We'll send you updates on this number
//                           </p>
//                         )}
//                         {form.mobile.length > 0 && form.mobile.length < 10 && !errors.mobile && (
//                           <p className="text-blue-600 text-sm mt-2">
//                             Enter {10 - form.mobile.length} more digits
//                           </p>
//                         )}
//                       </div>

//                       {/* Are you a registered user? */}
//                       <div className="text-center">
//                         <p className="text-gray-600 text-sm">
//                           Are you a registered user?{' '}
//                           <button
//                             type="button"
//                             onClick={() => navigate('/login?redirect=post-property')}
//                             className="text-blue-600 hover:text-blue-800 font-medium transition-all duration-300"
//                           >
//                             Login
//                           </button>
//                         </p>
//                       </div>
//                     </>
//                   )}
//                 </>
//               )}

//               {/* Step 2 - Location Details Form */}
//               {currentStep === 2 && (
//                 <div className="space-y-6">
//                   {/* City */}
//                   <div>
//                     <label className="block text-gray-700 font-medium mb-2">
//                       City
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="text"
//                         name="city"
//                         value={form.city}
//                         onChange={handleChange}
//                         placeholder="Enter city name"
//                         className={`border rounded-lg px-4 py-3 w-full text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
//                           errors.city
//                             ? 'border-red-500 focus:ring-red-500'
//                             : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
//                         }`}
//                         disabled={isLoading}
//                       />
//                       <button
//                         type="button"
//                         className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors duration-300"
//                       >
//                         <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
//                         </svg>
//                         Pick my location
//                       </button>
//                     </div>
//                     {errors.city && (
//                       <p className="text-red-500 text-sm mt-2">
//                         {errors.city}
//                       </p>
//                     )}
//                   </div>

//                   {/* Locality */}
//                   <div>
//                     <label className="block text-gray-700 font-medium mb-2">
//                       Locality
//                     </label>
//                     <input
//                       type="text"
//                       name="locality"
//                       value={form.locality}
//                       onChange={handleChange}
//                       placeholder="Enter locality"
//                       className={`border rounded-lg px-4 py-3 w-full text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
//                         errors.locality
//                           ? 'border-red-500 focus:ring-red-500'
//                           : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
//                       }`}
//                       disabled={isLoading}
//                     />
//                     {errors.locality && (
//                       <p className="text-red-500 text-sm mt-2">
//                         {errors.locality}
//                       </p>
//                     )}
//                   </div>

//                   {/* Sub Locality (Optional) */}
//                   <div>
//                     <label className="block text-gray-500 font-medium mb-2">
//                       Sub Locality (Optional)
//                     </label>
//                     <input
//                       type="text"
//                       name="subLocality"
//                       value={form.subLocality}
//                       onChange={handleChange}
//                       placeholder="Enter sub locality"
//                       className="border border-gray-300 rounded-lg px-4 py-3 w-full text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
//                       disabled={isLoading}
//                     />
//                   </div>

//                   {/* Apartment / Society */}
//                   <div>
//                     <label className="block text-blue-600 font-medium mb-2">
//                       Apartment / Society
//                     </label>
//                     <input
//                       type="text"
//                       name="apartmentSociety"
//                       value={form.apartmentSociety}
//                       onChange={handleChange}
//                       placeholder="Enter apartment/society name"
//                       className={`border rounded-lg px-4 py-3 w-full text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
//                         errors.apartmentSociety
//                           ? 'border-red-500 focus:ring-red-500'
//                           : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
//                       }`}
//                       disabled={isLoading}
//                     />
//                     {errors.apartmentSociety && (
//                       <p className="text-red-500 text-sm mt-2">
//                         {errors.apartmentSociety}
//                       </p>
//                     )}
//                   </div>

//                   {/* House No. (Optional) */}
//                   <div>
//                     <label className="block text-blue-600 font-medium mb-2">
//                       House No. (Optional)
//                     </label>
//                     <input
//                       type="text"
//                       name="houseNo"
//                       value={form.houseNo}
//                       onChange={handleChange}
//                       placeholder="Enter house number"
//                       className="border border-gray-300 rounded-lg px-4 py-3 w-full text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
//                       disabled={isLoading}
//                     />
//                   </div>
//                 </div>
//               )}

//               {/* Step 3 - Property Profile Form */}
//               {currentStep === 3 && (
//                 <div className="space-y-8">
//                   {/* Add Room Details */}
//                   <div>
//                     <h4 className="text-gray-800 font-medium text-lg mb-4">Add Room Details</h4>
                    
//                     {/* Bedrooms */}
//                     <div className="mb-4">
//                       <label className="block text-sm text-gray-600 mb-2">No. of Bedrooms</label>
//                       <div className="flex gap-3">
//                         {['1', '2', '3', '4', '5+'].map((num) => (
//                           <button
//                             key={num}
//                             type="button"
//                             onClick={() => setForm(prev => ({...prev, bedrooms: num}))}
//                             className={`border rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
//                               form.bedrooms === num
//                                 ? 'bg-blue-600 text-white border-blue-600'
//                                 : 'bg-white border-gray-300 hover:border-gray-400 text-gray-700'
//                             }`}
//                           >
//                             {num}
//                           </button>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Bathrooms */}
//                     <div className="mb-4">
//                       <label className="block text-sm text-gray-600 mb-2">No. of Bathrooms</label>
//                       <div className="flex gap-3">
//                         {['1', '2', '3', '4', '5+'].map((num) => (
//                           <button
//                             key={num}
//                             type="button"
//                             onClick={() => setForm(prev => ({...prev, bathrooms: num}))}
//                             className={`border rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
//                               form.bathrooms === num
//                                 ? 'bg-blue-600 text-white border-blue-600'
//                                 : 'bg-white border-gray-300 hover:border-gray-400 text-gray-700'
//                             }`}
//                           >
//                             {num}
//                           </button>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Balconies */}
//                     <div className="mb-6">
//                       <label className="block text-sm text-gray-600 mb-2">Balconies</label>
//                       <div className="flex gap-3">
//                         {['0', '1', '2', '3', 'More than 3'].map((num) => (
//                           <button
//                             key={num}
//                             type="button"
//                             onClick={() => setForm(prev => ({...prev, balconies: num}))}
//                             className={`border rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
//                               form.balconies === num
//                                 ? 'bg-blue-600 text-white border-blue-600'
//                                 : 'bg-white border-gray-300 hover:border-gray-400 text-gray-700'
//                             }`}
//                           >
//                             {num}
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Add Area Details */}
//                   <div>
//                     <h4 className="text-gray-800 font-medium text-lg mb-4">Add Area Details <span className="text-blue-600">ⓘ</span></h4>
//                     <p className="text-sm text-gray-500 mb-4">Added area size is mandatory</p>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm text-gray-600 mb-2">Carpet Area*</label>
//                         <div className="flex">
//                           <input
//                             type="number"
//                             name="carpetArea"
//                             value={form.carpetArea}
//                             onChange={handleChange}
//                             placeholder="sq.ft."
//                             className="border border-gray-300 rounded-l-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                           />
//                           <span className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg px-3 py-2 text-sm text-gray-600">sq.ft.</span>
//                         </div>
//                       </div>
                      
//                       <div>
//                         <button type="button" className="text-blue-600 text-sm hover:underline">
//                           + Add Built-up Area
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Floor Details */}
//                   <div>
//                     <h4 className="text-gray-800 font-medium text-base sm:text-lg mb-3 sm:mb-4">Floor Details</h4>
//                     <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Floor on which unit and total floor details</p>
                    
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
//                       <div>
//                         <label className="block text-xs sm:text-sm text-gray-600 mb-2">Total Floors</label>
//                         <input
//                           type="number"
//                           name="totalFloors"
//                           value={form.totalFloors}
//                           onChange={handleChange}
//                           className="border border-gray-300 rounded-lg px-3 py-2.5 sm:py-3 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[44px] transition-all duration-300"
//                         />
//                       </div>
                      
//                       <div>
//                         <label className="block text-xs sm:text-sm text-gray-600 mb-2">Property on Floor</label>
//                         <select
//                           name="propertyOnFloor"
//                           value={form.propertyOnFloor}
//                           onChange={handleChange}
//                           className="border border-gray-300 rounded-lg px-3 py-2.5 sm:py-3 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[44px] transition-all duration-300"
//                         >
//                           <option value="">Select Floor</option>
//                           <option value="Ground">Ground</option>
//                           <option value="1">1</option>
//                           <option value="2">2</option>
//                           <option value="3">3</option>
//                           <option value="4">4</option>
//                           <option value="5+">5+</option>
//                         </select>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Availability Status */}
//                   <div>
//                     <h4 className="text-gray-800 font-medium text-lg mb-4">Availability Status</h4>
//                     <div className="flex gap-4">
//                       {['Ready to move', 'Under construction'].map((status) => (
//                         <label key={status} className="flex items-center cursor-pointer">
//                           <input
//                             type="radio"
//                             name="availabilityStatus"
//                             value={status}
//                             checked={form.availabilityStatus === status}
//                             onChange={handleChange}
//                             className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
//                           />
//                           <span className="ml-2 text-gray-700">{status}</span>
//                         </label>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Ownership */}
//                   <div>
//                     <h4 className="text-gray-800 font-medium text-lg mb-4">Ownership <span className="text-blue-600">ⓘ</span></h4>
//                     <div className="flex gap-4 flex-wrap">
//                       {['Freehold', 'Leasehold', 'Cooperative society', 'Power of Attorney'].map((type) => (
//                         <label key={type} className="flex items-center cursor-pointer">
//                           <input
//                             type="radio"
//                             name="ownership"
//                             value={type}
//                             checked={form.ownership === type}
//                             onChange={handleChange}
//                             className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
//                           />
//                           <span className="ml-2 text-gray-700">{type}</span>
//                         </label>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Price Details */}
//                   <div>
//                     <h4 className="text-gray-800 font-medium text-lg mb-4">Price Details</h4>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                       <div>
//                         <label className="block text-sm text-gray-600 mb-2">₹ Expected Price*</label>
//                         <input
//                           type="text"
//                           name="expectedPrice"
//                           value={form.expectedPrice}
//                           onChange={handleChange}
//                           className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
                      
//                       <div>
//                         <label className="block text-sm text-gray-600 mb-2">₹ Price per Sq.ft.</label>
//                         <input
//                           type="text"
//                           name="pricePerSqft"
//                           value={form.pricePerSqft}
//                           onChange={handleChange}
//                           className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
//                     </div>

//                     <div className="mb-4">
//                       <label className="block text-sm text-gray-600 mb-2">₹ Price in words</label>
//                       <input
//                         type="text"
//                         placeholder="Auto-calculated"
//                         className="border border-gray-300 rounded-lg px-3 py-2 w-full bg-gray-50"
//                         disabled
//                       />
//                     </div>

//                     <div className="space-y-2">
//                       <label className="flex items-center cursor-pointer">
//                         <input
//                           type="checkbox"
//                           name="allInclusivePrice"
//                           checked={form.allInclusivePrice}
//                           onChange={(e) => setForm(prev => ({...prev, allInclusivePrice: e.target.checked}))}
//                           className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                         />
//                         <span className="ml-2 text-sm text-gray-700">All inclusive price</span>
//                       </label>
                      
//                       <label className="flex items-center cursor-pointer">
//                         <input
//                           type="checkbox"
//                           name="taxGovtCharges"
//                           checked={form.taxGovtCharges}
//                           onChange={(e) => setForm(prev => ({...prev, taxGovtCharges: e.target.checked}))}
//                           className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                         />
//                         <span className="ml-2 text-sm text-gray-700">Tax and Govt. charges excluded</span>
//                       </label>
                      
//                       <label className="flex items-center cursor-pointer">
//                         <input
//                           type="checkbox"
//                           name="priceNegotiable"
//                           checked={form.priceNegotiable}
//                           onChange={(e) => setForm(prev => ({...prev, priceNegotiable: e.target.checked}))}
//                           className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                         />
//                         <span className="ml-2 text-sm text-gray-700">Price Negotiable</span>
//                       </label>
//                     </div>

//                     <button type="button" className="text-blue-600 text-sm hover:underline mt-2">
//                       Add more pricing details
//                     </button>
//                   </div>

//                   {/* Property Description */}
//                   <div>
//                     <h4 className="text-gray-800 font-medium text-lg mb-4">What makes your property unique?</h4>
//                     <p className="text-sm text-gray-500 mb-2">Add the key feature which makes your property attractive</p>
                    
//                     <textarea
//                       name="propertyDescription"
//                       value={form.propertyDescription}
//                       onChange={handleChange}
//                       placeholder="Share some details about your property like age of property, what makes the property attractive, etc..."
//                       className="border border-gray-300 rounded-lg px-3 py-2 w-full h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
                    
//                     <p className="text-xs text-gray-400 mt-1">Minimum 30 characters required</p>
//                   </div>
//                 </div>
//               )}

//               {/* Step 4 - Photos & Videos Form */}
//               {currentStep === 4 && (
//                 <div className="space-y-8">
//                   {/* Video Upload Section */}
//                   <div>
//                     <p className="text-gray-600 mb-4">Make sure it follows the <span className="text-blue-600 underline cursor-pointer">Video Guidelines</span></p>
                    
//                     <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 lg:p-8 text-center bg-gray-50">
//                       <div className="flex flex-col items-center">
//                         <div className="bg-red-100 p-2 rounded mb-3">
//                           <span className="text-red-600 text-xs font-medium">NEW</span>
//                         </div>
//                         <button
//                           type="button"
//                           className="bg-blue-600 text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 mb-3 sm:mb-4 text-sm sm:text-base min-h-[44px] touch-manipulation active:scale-95"
//                         >
//                           📹 Upload Video
//                         </button>
//                         <p className="text-xs sm:text-sm text-gray-600 mb-2">Drag your videos here or <span className="text-blue-600 underline cursor-pointer">Upload 📁</span></p>
//                         <p className="text-xs text-gray-500 leading-relaxed max-w-sm sm:max-w-md">Upload videos of max size 50 MB in format .mov, .mp4, .3gp4. Video duration should be less than 10 mins</p>
//                       </div>
//                     </div>

//                     <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
//                       <div className="flex items-start">
//                         <span className="text-yellow-600 mr-2">⚠️</span>
//                         <div>
//                           <p className="text-sm font-medium text-yellow-800">Don't have a Video? We can help you create one with our</p>
//                           <p className="text-sm text-yellow-700">Paid Plans. <span className="text-blue-600 underline cursor-pointer">Contact to Upgrade</span></p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Photos Upload Section */}
//                   <div>
//                     <h4 className="text-gray-800 font-medium text-base sm:text-lg mb-2 sm:mb-3">Add photos of your property <span className="text-red-500">(Optional)</span></h4>
//                     <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">A picture is worth a thousand words. 93% of buyers look at photos before buying</p>
                    
//                     <div>
//                       <h5 className="text-gray-700 font-medium mb-3 text-sm sm:text-base">Upload Images</h5>
                      
//                       <div className="border-2 border-dashed border-blue-300 rounded-lg p-4 sm:p-6 lg:p-8 text-center bg-blue-50">
//                         <div className="flex flex-col items-center">
//                           <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📷</div>
//                           <p className="text-blue-600 font-medium mb-2 text-sm sm:text-base">+ Add atleast 5 photos</p>
//                           <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Drag and drop your photos here</p>
//                           <p className="text-xs text-gray-500 leading-relaxed max-w-xs sm:max-w-sm">Upto 50 photos, Max. size 10 MB / format- .jpg, .gif, .png, .jpeg, .heic, .heif</p>
                          
//                           <button
//                             type="button"
//                             className="bg-blue-600 text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 mt-3 sm:mt-4 text-sm sm:text-base min-h-[44px] touch-manipulation active:scale-95"
//                           >
//                             Upload Photos Now
//                           </button>
//                         </div>
//                       </div>

//                       <div className="bg-gray-800 text-white rounded-lg p-4 mt-4">
//                         <div className="flex items-center">
//                           <span className="mr-2">💡</span>
//                           <div>
//                             <p className="text-sm font-medium">Add 4+ property photos & increase responses upto 2.1x</p>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
//                         <div className="flex items-start">
//                           <span className="text-blue-600 mr-2">📱</span>
//                           <div>
//                             <p className="text-sm font-medium text-blue-800">Now you can also upload photos directly from your phone</p>
                            
//                             <div className="mt-3 space-y-2">
//                               <p className="text-sm text-blue-700">With your registered number: +91 8382998889</p>
                              
//                               <label className="flex items-center cursor-pointer">
//                                 <input
//                                   type="radio"
//                                   name="photoUploadMethod"
//                                   value="whatsapp"
//                                   className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
//                                 />
//                                 <span className="ml-2 text-sm text-blue-700">Send photos Over 📱 WhatsApp</span>
//                               </label>
                              
//                               <label className="flex items-center cursor-pointer">
//                                 <input
//                                   type="radio"
//                                   name="photoUploadMethod"
//                                   value="sms"
//                                   className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
//                                 />
//                                 <span className="ml-2 text-sm text-blue-700">Get photo upload link over SMS</span>
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mt-4">
//                         <div className="flex items-center">
//                           <span className="text-orange-600 mr-2">⚠️</span>
//                           <p className="text-sm text-orange-700">Without photos your ad will be ignored by buyers</p>
//                         </div>
//                       </div>

//                       <div className="mt-4">
//                         <button
//                           type="button"
//                           className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
//                         >
//                           Continue without Photos
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Step 5 - Amenities Section Form */}
//               {currentStep === 5 && (
//                 <div className="space-y-8">
//                   {/* Water Source */}
//                   <div>
//                     <h4 className="text-gray-800 font-medium text-lg mb-4">Water Source</h4>
//                     <div className="flex flex-wrap gap-3">
//                       {['+ Municipal corporation', '+ Borewell/Tank', '+ 24*7 Water'].map((source) => (
//                         <button
//                           key={source}
//                           type="button"
//                           onClick={() => {
//                             const sources = form.waterSource.includes(source) 
//                               ? form.waterSource.filter(s => s !== source)
//                               : [...form.waterSource, source];
//                             setForm(prev => ({...prev, waterSource: sources}));
//                           }}
//                           className={`border rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
//                             form.waterSource.includes(source)
//                               ? 'bg-blue-600 text-white border-blue-600'
//                               : 'bg-white border-gray-300 hover:border-gray-400 text-gray-700'
//                           }`}
//                         >
//                           {source}
//                         </button>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Overlooking */}
//                   <div>
//                     <h4 className="text-gray-800 font-medium text-lg mb-4">Overlooking</h4>
//                     <div className="flex flex-wrap gap-3">
//                       {['+ Pool', '+ Park/Garden', '+ Club', '+ Main Road', '+ Others'].map((view) => (
//                         <button
//                           key={view}
//                           type="button"
//                           onClick={() => {
//                             const views = form.overlooking.includes(view) 
//                               ? form.overlooking.filter(v => v !== view)
//                               : [...form.overlooking, view];
//                             setForm(prev => ({...prev, overlooking: views}));
//                           }}
//                           className={`border rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
//                             form.overlooking.includes(view)
//                               ? 'bg-blue-600 text-white border-blue-600'
//                               : 'bg-white border-gray-300 hover:border-gray-400 text-gray-700'
//                           }`}
//                         >
//                           {view}
//                         </button>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Other Features */}
//                   <div>
//                     <h4 className="text-gray-800 font-medium text-lg mb-4">Other Features</h4>
//                     <div className="space-y-3">
//                       {[
//                         'In a gated society',
//                         'Corner Property', 
//                         'Pet Friendly',
//                         'Wheelchair friendly'
//                       ].map((feature) => (
//                         <label key={feature} className="flex items-center cursor-pointer">
//                           <input
//                             type="checkbox"
//                             checked={form.otherFeatures.includes(feature)}
//                             onChange={(e) => {
//                               const features = e.target.checked
//                                 ? [...form.otherFeatures, feature]
//                                 : form.otherFeatures.filter(f => f !== feature);
//                               setForm(prev => ({...prev, otherFeatures: features}));
//                             }}
//                             className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                           />
//                           <span className="ml-2 text-gray-700">{feature}</span>
//                         </label>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Power Back up */}
//                   <div>
//                     <h4 className="text-gray-800 font-medium text-lg mb-4">Power Back up</h4>
//                     <div className="flex gap-4">
//                       {['None', 'Partial', 'Full'].map((option) => (
//                         <label key={option} className="flex items-center cursor-pointer">
//                           <input
//                             type="radio"
//                             name="powerBackup"
//                             value={option}
//                             checked={form.powerBackup === option}
//                             onChange={handleChange}
//                             className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
//                           />
//                           <span className="ml-2 text-gray-700">{option}</span>
//                         </label>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Property facing */}
//                   <div>
//                     <h4 className="text-gray-800 font-medium text-lg mb-4">Property facing</h4>
//                     <div className="grid grid-cols-3 gap-3">
//                       {['North', 'South', 'East', 'West', 'North-East', 'North-West', 'South-East', 'South-West'].map((direction) => (
//                         <button
//                           key={direction}
//                           type="button"
//                           onClick={() => setForm(prev => ({...prev, propertyFacing: direction}))}
//                           className={`border rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
//                             form.propertyFacing === direction
//                               ? 'bg-blue-600 text-white border-blue-600'
//                               : 'bg-white border-gray-300 hover:border-gray-400 text-gray-700'
//                           }`}
//                         >
//                           {direction}
//                         </button>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Type of flooring */}
//                   <div>
//                     <h4 className="text-gray-800 font-medium text-lg mb-4">Type of flooring</h4>
//                     <div className="grid grid-cols-2 gap-4">
//                       <select
//                         name="flooringType"
//                         value={form.flooringType}
//                         onChange={handleChange}
//                         className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       >
//                         <option value="">Select</option>
//                         <option value="Marble">Marble</option>
//                         <option value="Tiles">Tiles</option>
//                         <option value="Wooden">Wooden</option>
//                         <option value="Granite">Granite</option>
//                         <option value="Concrete">Concrete</option>
//                       </select>
                      
//                       <div>
//                         <label className="block text-sm text-gray-600 mb-2">Enter the width</label>
//                         <select className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
//                           <option value="">Feet</option>
//                           <option value="1">1 ft</option>
//                           <option value="2">2 ft</option>
//                           <option value="3">3 ft</option>
//                         </select>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Location Advantages */}
//                   <div>
//                     <h4 className="text-gray-800 font-medium text-lg mb-2">Location Advantages</h4>
//                     <p className="text-sm text-gray-500 mb-4">Highlight the nearby landmarks*</p>
                    
//                     <div className="flex flex-wrap gap-3 mb-4">
//                       {[
//                         '+ Close to Metro Station',
//                         '+ Close to School', 
//                         '+ Close to Hospital',
//                         '+ Close to Market',
//                         '+ Close to Railway Station'
//                       ].map((advantage) => (
//                         <button
//                           key={advantage}
//                           type="button"
//                           onClick={() => {
//                             const advantages = form.locationAdvantages.includes(advantage) 
//                               ? form.locationAdvantages.filter(a => a !== advantage)
//                               : [...form.locationAdvantages, advantage];
//                             setForm(prev => ({...prev, locationAdvantages: advantages}));
//                           }}
//                           className={`border rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
//                             form.locationAdvantages.includes(advantage)
//                               ? 'bg-blue-600 text-white border-blue-600'
//                               : 'bg-white border-gray-300 hover:border-gray-400 text-gray-700'
//                           }`}
//                         >
//                           {advantage}
//                         </button>
//                       ))}
//                     </div>
                    
//                     <button type="button" className="text-blue-600 text-sm hover:underline">
//                       Show more
//                     </button>
                    
//                     <p className="text-xs text-gray-400 mt-2">*Please provide correct information, otherwise your listing might get blocked</p>
//                   </div>
//                 </div>
//               )}

//               {/* Submit Button */}
//               <div className="pt-4">
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className={`w-full font-semibold rounded-lg py-4 text-lg transition-all duration-300 ${
//                     isLoading
//                       ? 'bg-gray-400 text-gray-200'
//                       : 'bg-blue-600 text-white hover:bg-blue-700'
//                   }`}
//                 >
//                   {isLoading 
//                     ? 'Processing...' 
//                     : !isAuthenticated && currentStep === 1
//                     ? 'Start now' 
//                     : currentStep === steps.length
//                     ? 'Save and Submit'
//                     : 'Continue'
//                   }
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostPropertyHero;









