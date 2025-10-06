// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import PostPropertyHero from './PostPropertyHero';
// import How_It_Works from './How_It_Works';
// import RealEstate_choose from './RealEstate_choose';
// import Benifit_of_posting from './Benifit_of_posting';
// import FAQ from './FAQ';
// import Tips_on_selling from './Tips_on_selling';

// const PostPropertyOriginal = () => {
//   const [showModal, setShowModal] = useState(false);
//   const location = useLocation();

//   // Form state
//   const [formData, setFormData] = useState({
//     actionType: '',
//     propertyCategory: '',
//     propertyType: '',
//     phone: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [showMoreTypes, setShowMoreTypes] = useState(false);

//   // Check if modal should be opened (from URL params or localStorage)
//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const shouldOpenModal = urlParams.get('openModal') === 'true' || 
//                            localStorage.getItem('postPropertyModal') === 'true';
    
//     if (shouldOpenModal) {
//       setShowModal(true);
//       // Clear the localStorage flag
//       localStorage.removeItem('postPropertyModal');
//     }
//   }, [location]);

//   // Validation function
//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.actionType) {
//       newErrors.actionType = 'Please select what you\'re looking to do';
//     }

//     if (!formData.propertyCategory) {
//       newErrors.propertyCategory = 'Please select property category';
//     }

//     if (!formData.propertyType) {
//       newErrors.propertyType = 'Please select property type';
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Phone number is required';
//     } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
//       newErrors.phone = 'Please enter a valid 10-digit phone number';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Check if form is valid
//   const isFormValid = formData.actionType && 
//                      formData.propertyCategory && 
//                      formData.propertyType && 
//                      formData.phone.trim() && 
//                      /^\d{10}$/.test(formData.phone.replace(/\D/g, ''));

//   const handleStartPosting = () => {
//     if (validateForm()) {
//       // Store form data for use in modal
//       localStorage.setItem('heroFormData', JSON.stringify(formData));
//       setShowModal(true);
//     }
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleActionTypeChange = (type) => {
//     setFormData(prev => ({ ...prev, actionType: type }));
//     if (errors.actionType) {
//       setErrors(prev => ({ ...prev, actionType: '' }));
//     }
//   };

//   const handlePropertyCategoryChange = (category) => {
//     setFormData(prev => ({ ...prev, propertyCategory: category, propertyType: '' }));
//     if (errors.propertyCategory) {
//       setErrors(prev => ({ ...prev, propertyCategory: '' }));
//     }
//   };

//   const handlePropertyTypeChange = (type) => {
//     setFormData(prev => ({ ...prev, propertyType: type }));
//     if (errors.propertyType) {
//       setErrors(prev => ({ ...prev, propertyType: '' }));
//     }
//   };

//   const handlePhoneChange = (e) => {
//     const value = e.target.value.replace(/\D/g, '').slice(0, 10);
//     setFormData(prev => ({ ...prev, phone: value }));
//     if (errors.phone) {
//       setErrors(prev => ({ ...prev, phone: '' }));
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section with Property Form */}
//       <div className="bg-gradient-to-br from-blue-200 to-gray-200 py-6 sm:py-8 md:py-12">
//         <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
//           <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8 lg:gap-12">
            
//             {/* Left Side - Content */}
//             <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 lg:space-y-8">
//               <div>
//                 <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
//                   Sell or Rent Property
//                 </h1>
//                 <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-4 sm:mb-6 leading-tight">
//                   online faster <span className="text-gray-800">with 99acres.com</span>
//                 </h2>
//               </div>
              
//               <div className="space-y-3 sm:space-y-4">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
//                     <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   <span className="text-gray-700 font-medium text-sm sm:text-base">Advertise for FREE</span>
//                 </div>
                
//                 <div className="flex items-center space-x-3">
//                   <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
//                     <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   <span className="text-gray-700 font-medium text-sm sm:text-base">Get unlimited enquiries</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
//                     <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   <span className="text-gray-700 font-medium text-sm sm:text-base">Get shortlisted buyers and tenants <span className="text-blue-600">*</span></span>
//                 </div>
                
//                 <div className="flex items-center space-x-3">
//                   <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
//                     <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   <span className="text-gray-700 font-medium text-sm sm:text-base">Assistance in co-ordinating site visits <span className="text-blue-600">*</span></span>
//                 </div>
//               </div>
              
//               <div className="text-xs sm:text-sm text-gray-500">
//                 <p>* Available with Owner Assist Plans</p>
//               </div>
              
//               {/* Property Illustration Image */}
//               <div className="hidden sm:block lg:block">
//                 <div className="w-full h-48 sm:h-56 lg:h-64 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
//                   <img 
//                     src="/image copy 8.png" 
//                     alt="Post Property Illustration" 
//                     className="w-full h-full object-cover object-center"
//                   />
//                 </div>
//               </div>
//             </div>
            
//             {/* Right Side - Form */}
//             <div className="w-full lg:w-1/2">
//               <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-200">
//                 <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
//                   Start posting your property, it's free
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-4 sm:mb-6">Add Basic Details</p>
                
//                 {/* Functional Form */}
//                 <div className="space-y-3 sm:space-y-4">
//                   <div>
//                     <p className="text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">You're looking to ...</p>
//                     <div className="flex flex-wrap gap-2">
//                       {['Sell', 'Rent / Lease', 'PG'].map((type) => (
//                         <button
//                           key={type}
//                           type="button"
//                           onClick={() => handleActionTypeChange(type)}
//                           className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex-shrink-0 ${
//                             formData.actionType === type
//                               ? 'bg-gray-800 text-white'
//                               : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
//                           }`}
//                         >
//                           {type}
//                         </button>
//                       ))}
//                     </div>
//                     {errors.actionType && (
//                       <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.actionType}</p>
//                     )}
//                   </div>
                  
//                   <div>
//                     <p className="text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">And it's a ...</p>
//                     <div className="flex flex-wrap gap-3 sm:gap-4">
//                       {['Residential', 'Commercial'].map((category) => (
//                         <label key={category} className="flex items-center cursor-pointer">
//                           <input 
//                             type="radio" 
//                             name="propertyCategory"
//                             className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" 
//                             checked={formData.propertyCategory === category}
//                             onChange={() => handlePropertyCategoryChange(category)}
//                           />
//                           <span className="ml-2 text-gray-700 text-sm sm:text-base">{category}</span>
//                         </label>
//                       ))}
//                     </div>
//                     {errors.propertyCategory && (
//                       <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.propertyCategory}</p>
//                     )}
//                   </div>
                  
//                   {formData.propertyCategory && (
//                     <div>
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                         {['Flat/Apartment', 'Independent House / Villa', 'Independent / Builder Floor', 'Plot / Land'].map((type) => (
//                           <button
//                             key={type}
//                             type="button"
//                             onClick={() => handlePropertyTypeChange(type)}
//                             className={`p-2.5 sm:p-3 border rounded-lg text-xs sm:text-sm text-left transition-all duration-200 ${
//                               formData.propertyType === type
//                                 ? 'border-blue-500 bg-blue-50 text-blue-700'
//                                 : 'border-gray-300 text-gray-700 hover:bg-gray-50'
//                             }`}
//                           >
//                             {type}
//                           </button>
//                         ))}
//                       </div>
                      
//                       {showMoreTypes && (
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
//                           {['1 RK/ Studio Apartment', 'Serviced Apartment', 'Farmhouse', 'Other'].map((type) => (
//                             <button
//                               key={type}
//                               type="button"
//                               onClick={() => handlePropertyTypeChange(type)}
//                               className={`p-2.5 sm:p-3 border rounded-lg text-xs sm:text-sm text-left transition-all duration-200 ${
//                                 formData.propertyType === type
//                                   ? 'border-blue-500 bg-blue-50 text-blue-700'
//                                   : 'border-gray-300 text-gray-700 hover:bg-gray-50'
//                               }`}
//                             >
//                               {type}
//                             </button>
//                           ))}
//                         </div>
//                       )}
                      
//                       <button 
//                         type="button"
//                         onClick={() => setShowMoreTypes(!showMoreTypes)}
//                         className="text-blue-600 text-xs sm:text-sm font-medium mt-2 hover:text-blue-800"
//                       >
//                         {showMoreTypes ? '4 less ▲' : '4 more ▼'}
//                       </button>
                      
//                       {errors.propertyType && (
//                         <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.propertyType}</p>
//                       )}
//                     </div>
//                   )}
                  
//                   <div>
//                     <p className="text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">Your contact details for the buyer to reach you</p>
//                     <input 
//                       type="tel" 
//                       placeholder="Phone Number" 
//                       value={formData.phone}
//                       onChange={handlePhoneChange}
//                       className={`w-full p-2.5 sm:p-3 border rounded-lg transition-all duration-200 text-sm sm:text-base ${
//                         errors.phone
//                           ? 'border-red-500 focus:ring-red-500'
//                           : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
//                       } focus:outline-none focus:ring-2`}
//                       maxLength="10"
//                     />
//                     {errors.phone && (
//                       <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>
//                     )}
//                   </div>
                  
//                   <p className="text-xs sm:text-sm text-gray-600">
//                     Are you a registered user? <span className="text-blue-600 font-medium cursor-pointer hover:text-blue-800">Login</span>
//                   </p>
                  
//                   <button
//                     onClick={handleStartPosting}
//                     disabled={!isFormValid}
//                     className={`w-full font-bold py-3 sm:py-4 rounded-lg transition-all duration-300 text-sm sm:text-base ${
//                       isFormValid
//                         ? 'bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 shadow-lg'
//                         : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                     }`}
//                   >
//                     {isFormValid ? 'Start now' : 'Fill all details to continue'}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <How_It_Works />
//       <RealEstate_choose />
      
//       <Benifit_of_posting />
//       <FAQ />
//       <Tips_on_selling />

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 z-50 overflow-y-auto">
//           {/* Backdrop */}
//           <div 
//             className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
//             onClick={handleCloseModal}
//           />
          
//           {/* Modal Content */}
//           <div className="relative min-h-screen flex items-start justify-center p-2 sm:p-4 pt-2 sm:pt-4 lg:pt-8">
//             <div className="relative bg-white rounded-lg sm:rounded-xl shadow-2xl max-w-7xl w-full max-h-[98vh] sm:max-h-[95vh] overflow-y-auto">
//               {/* Modal Header */}
//               <div className="sticky top-0 bg-white border-b border-gray-200 p-3 sm:p-4 flex justify-between items-center rounded-t-lg sm:rounded-t-xl z-20">
//                 <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Post Your Property</h2>
//                 <button
//                   onClick={handleCloseModal}
//                   className="bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 sm:p-2 transition-all duration-200"
//                 >
//                   <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>
              
//               {/* Modal PostPropertyHero */}
//               <PostPropertyHero onClose={handleCloseModal} isModal={true} />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PostPropertyOriginal;












import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PostPropertyHeroIntegration from './PostPropertyHeroSimple';
import HowItWorksIntegration from './How_It_Works';
import RealEstateChooseIntegration from './RealEstate_choose';
import BenefitOfPostingIntegration from './Benifit_of_posting';
import FAQIntegration from './FAQ';
import TipsOnSellingIntegration from './Tips_on_selling';

const PostPropertyOriginalIntegration = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const [formData, setFormData] = useState({
    actionType: '',
    propertyCategory: '',
    propertyType: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const [showMoreTypes, setShowMoreTypes] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const shouldOpenModal = urlParams.get('openModal') === 'true' || 
                           localStorage.getItem('postPropertyModal') === 'true';
    
    if (shouldOpenModal) {
      setShowModal(true);
      localStorage.removeItem('postPropertyModal');
    }
  }, [location]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.actionType) {
      newErrors.actionType = 'Please select what you\'re looking to do';
    }

    if (!formData.propertyCategory) {
      newErrors.propertyCategory = 'Please select property category';
    }

    if (!formData.propertyType) {
      newErrors.propertyType = 'Please select property type';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isFormValid = formData.actionType && 
                     formData.propertyCategory && 
                     formData.propertyType && 
                     formData.phone.trim() && 
                     /^\d{10}$/.test(formData.phone.replace(/\D/g, ''));

  const handleStartPosting = () => {
    if (validateForm()) {
      localStorage.setItem('heroFormData', JSON.stringify(formData));
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleActionTypeChange = (type) => {
    setFormData(prev => ({ ...prev, actionType: type }));
    if (errors.actionType) {
      setErrors(prev => ({ ...prev, actionType: '' }));
    }
  };

  const handlePropertyCategoryChange = (category) => {
    setFormData(prev => ({ ...prev, propertyCategory: category, propertyType: '' }));
    if (errors.propertyCategory) {
      setErrors(prev => ({ ...prev, propertyCategory: '' }));
    }
  };

  const handlePropertyTypeChange = (type) => {
    setFormData(prev => ({ ...prev, propertyType: type }));
    if (errors.propertyType) {
      setErrors(prev => ({ ...prev, propertyType: '' }));
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData(prev => ({ ...prev, phone: value }));
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-200 to-gray-200 py-6 sm:py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 lg:space-y-8">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
                  Sell or Rent Property
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-4 sm:mb-6 leading-tight">
                  online faster <span className="text-gray-800">with Bhoomi</span>
                </h2>
              </div>
              <div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">Advertise for FREE</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-200">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Start posting your property, it's free</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <p className="text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">You're looking to ...</p>
                    <div className="flex flex-wrap gap-2">
                      {['Sell', 'Rent / Lease', 'PG'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => handleActionTypeChange(type)}
                          className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex-shrink-0 ${
                            formData.actionType === type
                              ? 'bg-gray-800 text-white'
                              : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">And it's a ...</p>
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                      {['Residential', 'Commercial'].map((category) => (
                        <label key={category} className="flex items-center cursor-pointer">
                          <input 
                            type="radio" 
                            name="propertyCategory"
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" 
                            checked={formData.propertyCategory === category}
                            onChange={() => handlePropertyCategoryChange(category)}
                          />
                          <span className="ml-2 text-gray-700 text-sm sm:text-base">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">Your contact details</p>
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className={`w-full p-2.5 sm:p-3 border rounded-lg transition-all duration-200 text-sm sm:text-base ${
                        errors.phone
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                      } focus:outline-none focus:ring-2`}
                      maxLength="10"
                    />
                  </div>
                  <button
                    onClick={handleStartPosting}
                    disabled={!isFormValid}
                    className={`w-full font-bold py-3 sm:py-4 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                      isFormValid
                        ? 'bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 shadow-lg'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {isFormValid ? 'Start now' : 'Fill all details to continue'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HowItWorksIntegration />
      <RealEstateChooseIntegration />
      <BenefitOfPostingIntegration />
      <FAQIntegration />
      <TipsOnSellingIntegration />

      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={handleCloseModal}
          />
          <div className="relative min-h-screen flex items-start justify-center p-2 sm:p-4 pt-2 sm:pt-4 lg:pt-8">
            <div className="relative bg-white rounded-lg sm:rounded-xl shadow-2xl max-w-7xl w-full max-h-[98vh] sm:max-h-[95vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-3 sm:p-4 flex justify-between items-center rounded-t-lg sm:rounded-t-xl z-20">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Post Your Property</h2>
                <button
                  onClick={handleCloseModal}
                  className="bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 sm:p-2 transition-all duration-200"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <PostPropertyHeroIntegration onClose={handleCloseModal} isModal={true} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostPropertyOriginalIntegration;