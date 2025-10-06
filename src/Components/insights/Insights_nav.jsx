// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { 
//   ChevronDownIcon, 
//   MagnifyingGlassIcon,
//   MicrophoneIcon,
//   MapPinIcon,
//   UserCircleIcon
// } from '@heroicons/react/24/outline'

// const Insights_nav = () => {
//   const [selectedPropertyType, setSelectedPropertyType] = useState('Buy')
//   const [searchQuery, setSearchQuery] = useState('')
//   const [showDropdown, setShowDropdown] = useState(false)
//   const [showUserDropdown, setShowUserDropdown] = useState(false)
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const [userName, setUserName] = useState('')
//   const [searchError, setSearchError] = useState('')
//   const navigate = useNavigate()

//   // Check authentication status on component mount
//   React.useEffect(() => {
//     const checkAuthStatus = () => {
//       const token = localStorage.getItem('authToken')
//       const user = localStorage.getItem('userName') || localStorage.getItem('user')
//       if (token && user) {
//         setIsLoggedIn(true)
//         setUserName(user)
//       }
//     }
//     checkAuthStatus()
//   }, [])

//   // Close dropdowns when clicking outside
//   React.useEffect(() => {
//     const handleClickOutside = (event) => {
//       const userContainer = event.target.closest('.user-dropdown-container')
//       const propertyContainer = event.target.closest('.property-dropdown-container')
      
//       if (!userContainer) {
//         setShowUserDropdown(false)
//       }
//       if (!propertyContainer) {
//         setShowDropdown(false)
//       }
//     }

//     document.addEventListener('click', handleClickOutside)
//     return () => {
//       document.removeEventListener('click', handleClickOutside)
//     }
//   }, [])

//   const handleLogout = () => {
//     // Clear all auth data
//     localStorage.removeItem('authToken')
//     localStorage.removeItem('user')
//     localStorage.removeItem('access_token')
//     localStorage.removeItem('token_type')
//     localStorage.removeItem('user_info')
//     localStorage.removeItem('user_type')
//     localStorage.removeItem('userEmail')
//     localStorage.removeItem('userRole')
//     localStorage.removeItem('userName')
    
//     setIsLoggedIn(false)
//     setUserName('')
//     setShowUserDropdown(false)
//     navigate('/')
//   }

//   const propertyTypes = [
//     {
//       category: 'Residential',
//       options: ['Buy', 'Rent', 'PG', 'Projects']
//     },
//     {
//       category: 'Commercial',
//       options: ['Buy', 'Lease', 'Projects']
//     }
//   ]

//   const handleSearch = () => {
//     const trimmedQuery = searchQuery.trim()
    
//     // Clear previous error
//     setSearchError('')
    
//     // Validation: Check if search query is empty
//     if (!trimmedQuery) {
//       setSearchError('Please enter a location, project, or society name')
//       return
//     }
    
//     // Validation: Check minimum length
//     if (trimmedQuery.length < 2) {
//       setSearchError('Search query must be at least 2 characters long')
//       return
//     }
    
//     // Validation: Check for invalid characters (only allow letters, numbers, spaces, hyphens, commas)
//     const validPattern = /^[a-zA-Z0-9\s\-,\.]+$/
//     if (!validPattern.test(trimmedQuery)) {
//       setSearchError('Invalid characters. Please use only letters, numbers, spaces, hyphens, commas, and periods')
//       return
//     }
    
//     // Validation: Check for too many consecutive spaces
//     if (/\s{3,}/.test(trimmedQuery)) {
//       setSearchError('Please avoid multiple consecutive spaces')
//       return
//     }
    
//     // If all validations pass, navigate to search results
//     const cityQuery = trimmedQuery.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')
//     const propertyType = selectedPropertyType.toLowerCase().replace(/\//g, '-')
    
//     navigate(`/insights/search/${propertyType}/${cityQuery}`)
//   }

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSearch()
//     }
//   }

//   return (
//     <nav className="bg-black py-2 z-[9998] fixed top-0 left-0 right-0 overflow-visible">
//       <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
//         {/* Mobile Layout - Stack vertically */}
//         <div className="block lg:hidden">
//           {/* Top Row - Logo and User Profile */}
//           <div className="flex justify-between items-center h-12 sm:h-14">
//             {/* Logo */}
//             <div className="flex items-center">
//               <Link to="/" className="flex items-center gap-1 sm:gap-2">
//                 <img
//                   src="/abc.png"
//                   alt="Bhoomi The Real Estate Logo"
//                   className="h-10 sm:h-12 w-auto object-contain"
//                 />
//               </Link>
//             </div>

//             {/* Mobile Right Side */}
//             <div className="flex items-center space-x-2 sm:space-x-3">
//               {/* Post Property Button - Smaller on mobile */}
//               <div className="relative">
//                 <Link
//                   to="/post-property"
//                   className="bg-gradient-to-r from-green-600 to-black hover:from-black hover:to-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center space-x-1 shadow-lg hover:shadow-xl"
//                 >
//                   <span className="hidden xs:inline">Post</span>
//                   <span className="xs:hidden">Post</span>
//                 </Link>
//                 {/* FREE Badge */}
//                 <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 sm:py-1 rounded-full">
//                   FREE
//                 </span>
//               </div>

//               {/* User Profile Dropdown */}
//               <div className="relative user-dropdown-container">
//                 <button 
//                   onClick={() => setShowUserDropdown(!showUserDropdown)}
//                   className="flex items-center space-x-1 sm:space-x-2 text-white hover:text-gray-200 transition-colors duration-200 p-1 sm:p-2"
//                 >
//                   <UserCircleIcon className="h-5 w-5 sm:h-6 sm:w-6" />
//                   <ChevronDownIcon className={`h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-200 ${showUserDropdown ? 'rotate-180' : ''}`} />
//                 </button>

//                 {/* User Dropdown Menu */}
//                 {showUserDropdown && (
//                   <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
//                     {isLoggedIn ? (
//                       <>
//                         <div className="px-4 py-2 border-b border-gray-100">
//                           <p className="text-sm font-medium text-gray-900">Welcome, {userName}</p>
//                         </div>
//                         <button
//                           onClick={() => {
//                             setShowUserDropdown(false)
//                             navigate('/dashboard')
//                           }}
//                           className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
//                         >
//                           Dashboard
//                         </button>
//                         <button
//                           onClick={() => {
//                             setShowUserDropdown(false)
//                             navigate('/profile')
//                           }}
//                           className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
//                         >
//                           Profile
//                         </button>
//                         <button
//                           onClick={handleLogout}
//                           className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors duration-200"
//                         >
//                           Logout
//                         </button>
//                       </>
//                     ) : (
//                       <>
//                         <Link
//                           to="/login"
//                           onClick={() => setShowUserDropdown(false)}
//                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
//                         >
//                           Login
//                         </Link>
//                         <Link
//                           to="/register"
//                           onClick={() => setShowUserDropdown(false)}
//                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
//                         >
//                           Sign Up
//                         </Link>
//                       </>
//                     )}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//           {/* Mobile Search Section - Full width below */}
//           <div className="mt-2 sm:mt-3">
//             <div className="bg-white rounded-lg shadow-md">
//               {/* Property Type Dropdown - Full width on mobile */}
//               <div className="relative property-dropdown-container">
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation()
//                     setShowDropdown(!showDropdown)
//                   }}
//                   className="flex items-center justify-between w-full px-3 sm:px-4 py-2 sm:py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-200"
//                 >
//                   <span className="font-medium text-sm sm:text-base">{selectedPropertyType}</span>
//                   <ChevronDownIcon className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
//                 </button>

//                 {/* Dropdown Menu - Mobile optimized */}
//                 {showDropdown && (
//                   <div 
//                     className="absolute top-full left-0 right-0 bg-white border-x border-b border-gray-200 rounded-b-lg shadow-xl z-[10000] min-w-full"
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     {propertyTypes.map((category, categoryIndex) => (
//                       <div key={category.category}>
//                         <div className="px-3 sm:px-4 py-2 text-xs font-semibold text-gray-500 bg-gray-50 border-b border-gray-100">
//                           {categoryIndex + 1}-{category.category}
//                         </div>
//                         {category.options.map((type) => (
//                           <button
//                             key={type}
//                             onClick={() => {
//                               setSelectedPropertyType(type)
//                               setShowDropdown(false)
//                             }}
//                             className="block w-full text-left px-3 sm:px-4 py-2 sm:py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
//                           >
//                             {type}
//                           </button>
//                         ))}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Search Input - Below dropdown on mobile */}
//               <div className="flex items-center px-3 sm:px-4 py-2 sm:py-3">
//                 <MagnifyingGlassIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mr-2 sm:mr-3 flex-shrink-0" />
//                 <input
//                   type="text"
//                   placeholder="Enter Locality / Project / Society"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base min-w-0"
//                 />
//                 <button className="ml-2 p-1 text-gray-400 hover:text-gray-600 flex-shrink-0">
//                   <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5" />
//                 </button>
//                 <button className="ml-1 sm:ml-2 p-1 text-gray-400 hover:text-gray-600 flex-shrink-0">
//                   <MicrophoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
//                 </button>
//                 {/* Search Button - Inline on mobile */}
//                 <button
//                   onClick={handleSearch}
//                   className="ml-2 sm:ml-3 p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 flex-shrink-0"
//                 >
//                   <MagnifyingGlassIcon className="h-4 w-4 sm:h-5 sm:w-5" />
//                 </button>
//               </div>

//               {/* Error Message - Mobile */}
//               {searchError && (
//                 <div className="px-3 sm:px-4 py-2 text-red-600 text-sm bg-red-50 border-t border-red-200">
//                   {searchError}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Desktop Layout - Horizontal */}
//         <div className="hidden lg:flex justify-between items-center h-16 xl:h-18">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center gap-2">
//               <img
//                 src="/abc.png"
//                 alt="Bhoomi The Real Estate Logo"
//                 className="h-12 xl:h-15 w-auto object-contain"
//               />
//             </Link>
//           </div>

//           {/* Search Section */}
//           <div className="flex-1 max-w-2xl xl:max-w-4xl mx-4 xl:mx-8">
//             <div className="flex items-center bg-white rounded-lg shadow-md">
//               {/* Property Type Dropdown */}
//               <div className="relative property-dropdown-container">
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation()
//                     setShowDropdown(!showDropdown)
//                   }}
//                   className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-200 border-r border-gray-200"
//                 >
//                   <span className="font-medium">{selectedPropertyType}</span>
//                   <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
//                 </button>

//                 {/* Dropdown Menu */}
//                 {showDropdown && (
//                   <div 
//                     className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg shadow-xl z-[10000] mt-1 min-w-[140px] xl:min-w-[160px]"
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     {propertyTypes.map((category, categoryIndex) => (
//                       <div key={category.category}>
//                         <div className="px-4 py-2 text-xs font-semibold text-gray-500 bg-gray-50 border-b border-gray-100">
//                           {categoryIndex + 1}-{category.category}
//                         </div>
//                         {category.options.map((type) => (
//                           <button
//                             key={type}
//                             onClick={() => {
//                               setSelectedPropertyType(type)
//                               setShowDropdown(false)
//                             }}
//                             className="block w-full text-left px-4 py-2 xl:py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
//                           >
//                             {type}
//                           </button>
//                         ))}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Search Input */}
//               <div className="flex-1 flex items-center px-4">
//                 <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 mr-3" />
//                 <input
//                   type="text"
//                   placeholder="Enter Locality / Project / Society / Landmark"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   className="flex-1 outline-none text-gray-700 placeholder-gray-400"
//                 />
//                 <button className="ml-3 p-1 text-gray-400 hover:text-gray-600">
//                   <MapPinIcon className="h-5 w-5" />
//                 </button>
//                 <button className="ml-2 p-1 text-gray-400 hover:text-gray-600">
//                   <MicrophoneIcon className="h-5 w-5" />
//                 </button>
//               </div>

//               {/* Search Button */}
//               <button
//                 onClick={handleSearch}
//                 className="text-gray-700 px-6 py-3 hover:text-blue-600 transition-colors duration-200"
//               >
//                 <MagnifyingGlassIcon className="h-5 w-5" />
//               </button>
//             </div>

//             {/* Error Message - Desktop */}
//             {searchError && (
//               <div className="mt-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-2 max-w-2xl xl:max-w-4xl">
//                 {searchError}
//               </div>
//             )}
//           </div>

//           {/* Right Side */}
//           <div className="flex items-center space-x-3 xl:space-x-4">
//             {/* Post Property Button */}
//             <div className="relative">
//               <Link
//                 to="/post-property"
//                 className="bg-gradient-to-r from-green-600 to-black hover:from-black hover:to-green-600 text-white px-6 xl:px-8 py-2 xl:py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
//               >
//                 <span>Post property</span>
//               </Link>
//               {/* FREE Badge */}
//               <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
//                 FREE
//               </span>
//             </div>

//             {/* User Profile Dropdown */}
//             <div className="relative user-dropdown-container">
//               <button 
//                 onClick={() => setShowUserDropdown(!showUserDropdown)}
//                 className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors duration-200"
//               >
//                 <UserCircleIcon className="h-6 w-6" />
//                 <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${showUserDropdown ? 'rotate-180' : ''}`} />
//               </button>

//               {/* User Dropdown Menu */}
//               {showUserDropdown && (
//                 <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
//                   {isLoggedIn ? (
//                     <>
//                       <div className="px-4 py-2 border-b border-gray-100">
//                         <p className="text-sm font-medium text-gray-900">Welcome, {userName}</p>
//                       </div>
//                       <button
//                         onClick={() => {
//                           setShowUserDropdown(false)
//                           navigate('/dashboard')
//                         }}
//                         className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
//                       >
//                         Dashboard
//                       </button>
//                       <button
//                         onClick={() => {
//                           setShowUserDropdown(false)
//                           navigate('/profile')
//                         }}
//                         className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
//                       >
//                         Profile
//                       </button>
//                       <button
//                         onClick={handleLogout}
//                         className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors duration-200"
//                       >
//                         Logout
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       <Link
//                         to="/login"
//                         onClick={() => setShowUserDropdown(false)}
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
//                       >
//                         Login
//                       </Link>
//                       <Link
//                         to="/register"
//                         onClick={() => setShowUserDropdown(false)}
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
//                       >
//                         Sign Up
//                       </Link>
//                       <button
//                         onClick={handleLogout}
//                         className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors duration-200"
//                       >
//                         Logout
//                       </button>
//                     </>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Insights_nav












import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  ChevronDownIcon, 
  MagnifyingGlassIcon,
  MicrophoneIcon,
  MapPinIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline'

const InsightsNavIntegration = () => {
  const [selectedPropertyType, setSelectedPropertyType] = useState('Buy')
  const [searchQuery, setSearchQuery] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [showUserDropdown, setShowUserDropdown] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState('')
  const [searchError, setSearchError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('authToken')
      const user = localStorage.getItem('userName') || localStorage.getItem('user')
      if (token && user) {
        setIsLoggedIn(true)
        setUserName(user)
      }
    }
    checkAuthStatus()
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      const userContainer = event.target.closest('.user-dropdown-container')
      const propertyContainer = event.target.closest('.property-dropdown-container')
      if (!userContainer) setShowUserDropdown(false)
      if (!propertyContainer) setShowDropdown(false)
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('user')
    localStorage.removeItem('access_token')
    localStorage.removeItem('token_type')
    localStorage.removeItem('user_info')
    localStorage.removeItem('user_type')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userRole')
    localStorage.removeItem('userName')
    setIsLoggedIn(false)
    setUserName('')
    setShowUserDropdown(false)
    navigate('/')
  }

  const propertyTypes = [
    {
      category: 'Residential',
      options: ['Buy', 'Rent', 'PG', 'Projects']
    },
    {
      category: 'Commercial',
      options: ['Buy', 'Lease', 'Projects']
    }
  ]

  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim()
    setSearchError('')
    if (!trimmedQuery) {
      setSearchError('Please enter a location, project, or society name')
      return
    }
    if (trimmedQuery.length < 2) {
      setSearchError('Search query must be at least 2 characters long')
      return
    }
    const validPattern = /^[a-zA-Z0-9\s\-,\.]+$/
    if (!validPattern.test(trimmedQuery)) {
      setSearchError('Invalid characters. Please use only letters, numbers, spaces, hyphens, commas, and periods')
      return
    }
    if (/\s{3,}/.test(trimmedQuery)) {
      setSearchError('Please avoid multiple consecutive spaces')
      return
    }
    const cityQuery = trimmedQuery.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')
    const propertyType = selectedPropertyType.toLowerCase().replace(/\//g, '-')
    navigate(`/insights/search/${propertyType}/${cityQuery}`)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <nav className="bg-black py-2 z-[9998] fixed top-0 left-0 right-0 overflow-visible">
      <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
        {/* Mobile */}
        <div className="block lg:hidden">
          <div className="flex justify-between items-center h-12 sm:h-14">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-1 sm:gap-2">
                <img
                  src="/abc.png"
                  alt="Bhoomi The Real Estate Logo"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </Link>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative">
                <Link
                  to="/post-property"
                  className="bg-gradient-to-r from-green-600 to-black hover:from-black hover:to-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center space-x-1 shadow-lg hover:shadow-xl"
                >
                  <span className="hidden xs:inline">Post</span>
                  <span className="xs:hidden">Post</span>
                </Link>
                <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 sm:py-1 rounded-full">
                  FREE
                </span>
              </div>
              <div className="relative user-dropdown-container">
                <button 
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                  className="flex items-center space-x-1 sm:space-x-2 text-white hover:text-gray-200 transition-colors duration-200 p-1 sm:p-2"
                >
                  <UserCircleIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  <ChevronDownIcon className={`h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-200 ${showUserDropdown ? 'rotate-180' : ''}`} />
                </button>
                {showUserDropdown && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    {isLoggedIn ? (
                      <>
                        <div className="px-4 py-2 border-b border-gray-100">
                          <p className="text-sm font-medium text-gray-900">Welcome, {userName}</p>
                        </div>
                        <button
                          onClick={() => { setShowUserDropdown(false); navigate('/dashboard') }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >Dashboard</button>
                        <button
                          onClick={() => { setShowUserDropdown(false); navigate('/profile') }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >Profile</button>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors duration-200"
                        >Logout</button>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          onClick={() => setShowUserDropdown(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >Login</Link>
                        <Link
                          to="/register"
                          onClick={() => setShowUserDropdown(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >Sign Up</Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Mobile Search Section */}
          <div className="mt-2 sm:mt-3">
            <div className="bg-white rounded-lg shadow-md">
              <div className="relative property-dropdown-container">
                <button
                  onClick={e => { e.stopPropagation(); setShowDropdown(!showDropdown) }}
                  className="flex items-center justify-between w-full px-3 sm:px-4 py-2 sm:py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-200"
                >
                  <span className="font-medium text-sm sm:text-base">{selectedPropertyType}</span>
                  <ChevronDownIcon className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
                </button>
                {showDropdown && (
                  <div 
                    className="absolute top-full left-0 right-0 bg-white border-x border-b border-gray-200 rounded-b-lg shadow-xl z-[10000] min-w-full"
                    onClick={e => e.stopPropagation()}
                  >
                    {propertyTypes.map((category, categoryIndex) => (
                      <div key={category.category}>
                        <div className="px-3 sm:px-4 py-2 text-xs font-semibold text-gray-500 bg-gray-50 border-b border-gray-100">
                          {categoryIndex + 1}-{category.category}
                        </div>
                        {category.options.map(type => (
                          <button
                            key={type}
                            onClick={() => { setSelectedPropertyType(type); setShowDropdown(false) }}
                            className="block w-full text-left px-3 sm:px-4 py-2 sm:py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                          >{type}</button>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center px-3 sm:px-4 py-2 sm:py-3">
                <MagnifyingGlassIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mr-2 sm:mr-3 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Enter Locality / Project / Society"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base min-w-0"
                />
                <button className="ml-2 p-1 text-gray-400 hover:text-gray-600 flex-shrink-0">
                  <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <button className="ml-1 sm:ml-2 p-1 text-gray-400 hover:text-gray-600 flex-shrink-0">
                  <MicrophoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <button
                  onClick={handleSearch}
                  className="ml-2 sm:ml-3 p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 flex-shrink-0"
                >
                  <MagnifyingGlassIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
              {searchError && (
                <div className="px-3 sm:px-4 py-2 text-red-600 text-sm bg-red-50 border-t border-red-200">
                  {searchError}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden lg:flex justify-between items-center h-16 xl:h-18">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/abc.png"
                alt="Bhoomi The Real Estate Logo"
                className="h-12 xl:h-15 w-auto object-contain"
              />
            </Link>
          </div>
          <div className="flex-1 max-w-2xl xl:max-w-4xl mx-4 xl:mx-8">
            <div className="flex items-center bg-white rounded-lg shadow-md">
              <div className="relative property-dropdown-container">
                <button
                  onClick={e => { e.stopPropagation(); setShowDropdown(!showDropdown) }}
                  className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-200 border-r border-gray-200"
                >
                  <span className="font-medium">{selectedPropertyType}</span>
                  <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
                </button>
                {showDropdown && (
                  <div 
                    className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg shadow-xl z-[10000] mt-1 min-w-[140px] xl:min-w-[160px]"
                    onClick={e => e.stopPropagation()}
                  >
                    {propertyTypes.map((category, categoryIndex) => (
                      <div key={category.category}>
                        <div className="px-4 py-2 text-xs font-semibold text-gray-500 bg-gray-50 border-b border-gray-100">
                          {categoryIndex + 1}-{category.category}
                        </div>
                        {category.options.map(type => (
                          <button
                            key={type}
                            onClick={() => { setSelectedPropertyType(type); setShowDropdown(false) }}
                            className="block w-full text-left px-4 py-2 xl:py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                          >{type}</button>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex-1 flex items-center px-4">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Enter Locality / Project / Society / Landmark"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                />
                <button className="ml-3 p-1 text-gray-400 hover:text-gray-600">
                  <MapPinIcon className="h-5 w-5" />
                </button>
                <button className="ml-2 p-1 text-gray-400 hover:text-gray-600">
                  <MicrophoneIcon className="h-5 w-5" />
                </button>
              </div>
              <button
                onClick={handleSearch}
                className="text-gray-700 px-6 py-3 hover:text-blue-600 transition-colors duration-200"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </div>
            {searchError && (
              <div className="mt-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-2 max-w-2xl xl:max-w-4xl">
                {searchError}
              </div>
            )}
          </div>
          <div className="flex items-center space-x-3 xl:space-x-4">
            <div className="relative">
              <Link
                to="/post-property"
                className="bg-gradient-to-r from-green-600 to-black hover:from-black hover:to-green-600 text-white px-6 xl:px-8 py-2 xl:py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Post property</span>
              </Link>
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                FREE
              </span>
            </div>
            <div className="relative user-dropdown-container">
              <button 
                onClick={() => setShowUserDropdown(!showUserDropdown)}
                className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors duration-200"
              >
                <UserCircleIcon className="h-6 w-6" />
                <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${showUserDropdown ? 'rotate-180' : ''}`} />
              </button>
              {showUserDropdown && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  {isLoggedIn ? (
                    <>
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">Welcome, {userName}</p>
                      </div>
                      <button
                        onClick={() => { setShowUserDropdown(false); navigate('/dashboard') }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >Dashboard</button>
                      <button
                        onClick={() => { setShowUserDropdown(false); navigate('/profile') }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >Profile</button>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors duration-200"
                      >Logout</button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        onClick={() => setShowUserDropdown(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >Login</Link>
                      <Link
                        to="/register"
                        onClick={() => setShowUserDropdown(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >Sign Up</Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default InsightsNavIntegration