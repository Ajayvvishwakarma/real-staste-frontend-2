// import React, { useState, useEffect, useRef } from 'react'
// import { Link } from 'react-router-dom'

// const News_Navbar = () => {
//   const [activeTab, setActiveTab] = useState('For Buyers')
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const dropdownRef = useRef(null)
//   const mobileMenuRef = useRef(null)

//   // Handle window resize
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setIsMobileMenuOpen(false)
//       }
//     }
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false)
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside)
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [])
  
//   return (
//     <div>
//        {/* Top Navigation Bar */}
//       <div className="bg-slate-800 shadow-lg">
//         <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
//             {/* Logo and Knowledge Centre */}
//             <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
//               {/* Logo */}
//               <div className="flex items-center">
//                 <img src="/abc.png" alt="Logo" className="h-8 sm:h-10 md:h-12 w-auto transition-all duration-300" />
//               </div>
              
//               {/* Knowledge Centre Dropdown */}
//               <div className="relative" ref={dropdownRef}>
//                 <button
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                   className="flex items-center text-white font-medium hover:text-gray-300 transition-colors"
//                 >
//                   KNOWLEDGE CENTRE
//                   <svg 
//                     className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
//                     fill="currentColor" 
//                     viewBox="0 0 20 20"
//                   >
//                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </button>
                
//                 {/* Dropdown Menu */}
//                 {isDropdownOpen && (
//                   <div className="fixed inset-x-0 top-16 sm:absolute sm:top-full sm:left-0 mt-2 w-full sm:w-[90vw] lg:w-[1000px] bg-gray-900 rounded-lg shadow-2xl z-50 border border-gray-700 max-h-[80vh] overflow-y-auto">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
//                       {/* Articles Column */}
//                       <div>
//                         <h3 className="text-xs font-bold text-yellow-400 mb-2 uppercase tracking-wider">ARTICLES</h3>
//                         <ul className="space-y-1 text-xs text-gray-300">
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Pan India</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Delhi NCR</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Mumbai</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Bangalore</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Pune</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Chennai</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Hyderabad</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Kolkata</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Ahmedabad</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Chandigarh</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Lucknow</a></li>
//                         </ul>
//                       </div>
                      
//                       {/* News Column */}
//                       <div>
//                         <h3 className="text-xs font-bold text-yellow-400 mb-2 uppercase tracking-wider">NEWS</h3>
//                         <ul className="space-y-1 text-xs text-gray-300">
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Pan India</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Delhi NCR</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Mumbai</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Bangalore</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Pune</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Chennai</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Hyderabad</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Kolkata</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Ahmedabad</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Chandigarh</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Others Cities</a></li>
//                         </ul>
//                       </div>
                      
//                       {/* Guides & Policy Column */}
//                       <div>
//                         <h3 className="text-xs font-bold text-yellow-400 mb-2 uppercase tracking-wider">GUIDES</h3>
//                         <ul className="space-y-1 text-xs text-gray-300 mb-3">
//                           <li><Link to="/buyer-guide" className="hover:text-yellow-400 transition-colors block py-1">Buyer Guide</Link></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Seller Guide</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Tenant Guide</a></li>
//                         </ul>
                        
//                         <h3 className="text-xs font-bold text-yellow-400 mb-2 uppercase tracking-wider">POLICY</h3>
//                         <ul className="space-y-1 text-xs text-gray-300 mb-3">
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Budget</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">PMAY</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">GST</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">RERA</a></li>
//                         </ul>
                        
//                         <h3 className="text-xs font-bold text-yellow-400 mb-2 uppercase tracking-wider">NEW HOMES</h3>
//                         <ul className="space-y-1 text-xs text-gray-300">
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">New Homes in Pune</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">New Homes in Mumbai</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">New Homes in Bangalore</a></li>
//                         </ul>
//                       </div>
                      
//                       {/* Reports & Improvement Column */}
//                       <div>
//                         <h3 className="text-xs font-bold text-yellow-400 mb-2 uppercase tracking-wider">INSITE REPORTS</h3>
//                         <ul className="space-y-1 text-xs text-gray-300 mb-3">
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Jan-Mar 2022</a></li>
//                         </ul>
                        
//                         <h3 className="text-xs font-bold text-yellow-400 mb-2 uppercase tracking-wider">HOME IMPROVEMENT</h3>
//                         <ul className="space-y-1 text-xs text-gray-300 mb-3">
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Interiors</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Vastu</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Tips & Tricks</a></li>
//                         </ul>
                        
//                         <h3 className="text-xs font-bold text-yellow-400 mb-2 uppercase tracking-wider">OTHER LANGUAGES</h3>
//                         <ul className="space-y-1 text-xs text-gray-300">
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Hindi</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Marathi</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Tamil</a></li>
//                         </ul>
//                       </div>
                      
//                       {/* Popular Categories Column */}
//                       <div>
//                         <h3 className="text-xs font-bold text-yellow-400 mb-2 uppercase tracking-wider">POPULAR CATEGORIES</h3>
//                         <ul className="space-y-1 text-xs text-gray-300">
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Web Stories</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Residential</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Commercial</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Rental</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Home Loan</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Help Guide</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Locality Profile</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Legal</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Policy Change</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Taxation</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Construction</a></li>
//                           <li><a href="#" className="hover:text-yellow-400 transition-colors block py-1">Infrastructure</a></li>
//                         </ul>
                        
//                         <div className="mt-3 pt-2 border-t border-gray-700">
//                           <h3 className="text-xs font-bold text-yellow-400 uppercase tracking-wider">About 99acres</h3>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Right Side Links - Desktop & Tablet */}
//             <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-xs xl:text-sm text-white">
//               <a href="#" className="hover:text-gray-300 transition-colors whitespace-nowrap">CUSTOMER SERVICE</a>
//               <a href="#" className="hover:text-gray-300 transition-colors whitespace-nowrap">SELL / RENT PROPERTY</a>
//               <a href="#" className="hover:text-gray-300 transition-colors whitespace-nowrap">HOME LOANS</a>
//               <button className="p-2 hover:bg-slate-700 rounded">
//                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
//                 </svg>
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="lg:hidden">
//               <button 
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="text-white p-2 hover:bg-slate-700 rounded transition-colors"
//                 aria-label="Toggle mobile menu"
//               >
//                 <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
//                   {isMobileMenuOpen ? (
//                     <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//                   ) : (
//                     <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
//                   )}
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Mobile Navigation Menu */}
//           <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
//             <div className="px-2 pt-2 pb-3 space-y-1" ref={mobileMenuRef}>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
//                 {['For Buyers', 'For Tenants', 'For Owners'].map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 w-full text-left ${
//                       activeTab === tab
//                         ? 'bg-white text-slate-800'
//                         : 'text-white hover:bg-slate-700'
//                     }`}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>
              
//               <div className="border-t border-gray-700 pt-3 space-y-2">
//                 <a href="#" className="block px-3 py-2 text-white hover:bg-slate-700 rounded-lg transition-colors text-sm">CUSTOMER SERVICE</a>
//                 <a href="#" className="block px-3 py-2 text-white hover:bg-slate-700 rounded-lg transition-colors text-sm">SELL / RENT PROPERTY</a>
//                 <a href="#" className="block px-3 py-2 text-white hover:bg-slate-700 rounded-lg transition-colors text-sm">HOME LOANS</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default News_Navbar











import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const NewsNavbarIntegration = () => {
  const [activeTab, setActiveTab] = useState('For Buyers');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Handle window resize for mobile menu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Top Navigation Bar */}
      <div className="bg-slate-800 shadow-lg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Logo and Knowledge Centre */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              {/* Logo */}
              <div className="flex items-center">
                <img src="/abc.png" alt="Logo" className="h-8 lg:h-10 w-auto transition-all duration-300" />
              </div>

              {/* Knowledge Centre Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center text-white font-medium hover:text-gray-300 transition-colors"
                >
                  KNOWLEDGE CENTRE
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-[90vw] lg:w-[1000px] bg-gray-900 rounded-lg shadow-2xl z-50 border border-gray-700 max-h-[80vh] overflow-y-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
                      {/* Articles Column */}
                      <div>
                        <h3 className="text-xs font-bold text-yellow-400 mb-2 uppercase tracking-wider">ARTICLES</h3>
                        <ul className="space-y-1 text-xs text-gray-300">
                          {['Pan India', 'Delhi NCR', 'Mumbai', 'Bangalore', 'Pune', 'Chennai', 'Hyderabad', 'Kolkata', 'Ahmedabad', 'Chandigarh', 'Lucknow'].map((item) => (
                            <li key={item}>
                              <a href="#" className="hover:text-yellow-400 transition-colors block py-1">
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Other Columns */}
                      {/* ...Add other dropdown columns here (as per the original code)... */}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-6 text-sm text-white">
              <a href="#" className="hover:text-gray-300 transition-colors">
                CUSTOMER SERVICE
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                SELL / RENT PROPERTY
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                HOME LOANS
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2 hover:bg-slate-700 rounded transition-colors"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  {isMobileMenuOpen ? (
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="px-4 py-4 space-y-4">
              {['For Buyers', 'For Tenants', 'For Owners'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`block w-full text-left px-4 py-2 rounded-lg text-sm ${
                    activeTab === tab ? 'bg-white text-slate-800' : 'text-white hover:bg-slate-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
              <div className="border-t border-gray-600 pt-4">
                <a href="#" className="block px-4 py-2 text-white hover:bg-slate-700 rounded-lg">
                  CUSTOMER SERVICE
                </a>
                <a href="#" className="block px-4 py-2 text-white hover:bg-slate-700 rounded-lg">
                  SELL / RENT PROPERTY
                </a>
                <a href="#" className="block px-4 py-2 text-white hover:bg-slate-700 rounded-lg">
                  HOME LOANS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsNavbarIntegration;