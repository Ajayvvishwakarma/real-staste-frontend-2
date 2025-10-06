// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Sales_enguiry_Navbar = () => {
//   const navigate = useNavigate();
//   const [showUserDropdown, setShowUserDropdown] = useState(false);
//   const [showMobileMenu, setShowMobileMenu] = useState(false);
//   const userDropdownRef = useRef(null);

//   useEffect(() => {
//     if (!showUserDropdown) return;
//     function handleClickOutside(event) {
//       if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
//         setShowUserDropdown(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [showUserDropdown]);

//   return (
//     <div className="navbar-animated-gradient font-sans shadow-lg">
//       {/* Header Bar */}
//       <div className="navbar-animated-gradient px-4 sm:px-6 lg:px-10 border-b-2 border-gray-700 h-14 flex items-center justify-between shadow-sm">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img src="/abc.png" alt="Logo" className="h-9 mr-2 mt-[2px]" />
//         </div>

//         {/* Desktop Buttons */}
//         <div className="hidden md:flex items-center gap-6">
//           <button
//             className="font-semibold text-sm text-white bg-green-600 hover:bg-green-700 border border-green-600 rounded px-4 py-1 flex items-center gap-1 transition-all duration-200"
//             onClick={() => navigate("/post-property")}
//           >
//             POST PROPERTY{" "}
//             <span className="bg-yellow-300 text-black rounded px-2 py-0.5 ml-1 text-xs">
//               FREE
//             </span>
//           </button>

//           <div className="flex items-center gap-2 relative">
//             <span
//               className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white bg-opacity-20 border border-gray-300 cursor-pointer hover:bg-opacity-30 transition-all duration-200"
//               onClick={() => setShowUserDropdown(!showUserDropdown)}
//             >
//               <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
//                 <circle
//                   cx="12"
//                   cy="8"
//                   r="4"
//                   stroke="#ffffff"
//                   strokeWidth="1.5"
//                 />
//                 <path
//                   d="M4 20c0-2.7614 3.5817-5 8-5s8 2.2386 8 5"
//                   stroke="#ffffff"
//                   strokeWidth="1.5"
//                 />
//               </svg>
//             </span>
//             <div className="flex flex-col leading-tight">
//               <span
//                 className="text-white hover:text-yellow-300 font-bold text-sm cursor-pointer transition-colors duration-200"
//                 onClick={() => setShowUserDropdown(!showUserDropdown)}
//               >
//                 Sign In
//               </span>
//               <span className="text-white hover:text-yellow-300 font-bold text-sm cursor-pointer -mt-1 transition-colors duration-200">
//                 Join Free
//               </span>
//             </div>

//             {showUserDropdown && (
//               <div
//                 ref={userDropdownRef}
//                 className="absolute right-0 top-10 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl z-30"
//               >
//                 <div className="flex flex-col items-center py-4 border-b">
//                   <button
//                     onClick={() => navigate("/login")}
//                     className="bg-green-600 text-white px-6 py-2 rounded font-semibold mb-2 w-full text-center"
//                   >
//                     Login
//                   </button>
//                   <span className="text-gray-700 text-sm">
//                     New to BhoomiRealEstate?
//                   </span>
//                   <button
//                     onClick={() => navigate("/register")}
//                     className="text-green-700 font-semibold text-base mt-1 hover:underline w-full"
//                   >
//                     Sign Up
//                   </button>
//                 </div>

//                 <button
//                   onClick={() => navigate("/login")}
//                   className="block px-6 py-3 text-gray-800 hover:bg-green-50 w-full text-left"
//                 >
//                   Profile
//                 </button>
//                 <button
//                   onClick={() => navigate("/login")}
//                   className="block px-6 py-3 text-gray-800 hover:bg-green-50 w-full text-left"
//                 >
//                   My Dashboard
//                 </button>
//                 <button
//                   onClick={() => navigate("/login")}
//                   className="block px-6 py-3 text-gray-800 hover:bg-green-50 w-full text-left"
//                 >
//                   My Enquiry
//                 </button>
//                 <button
//                   onClick={() => navigate("/post-property")}
//                   className="block px-6 py-3 text-gray-800 hover:bg-green-50 w-full text-left"
//                 >
//                   Post Property
//                 </button>
//                 <button
//                   onClick={() => navigate("/my-property")}
//                   className="block px-6 py-3 text-gray-800 hover:bg-green-50 w-full text-left"
//                 >
//                   My Property
//                 </button>
//                 <div className="flex items-center px-6 py-3 text-gray-800 hover:bg-green-50">
//                   <button
//                     onClick={() => navigate("/property-leads")}
//                     className="flex-1 text-left"
//                   >
//                     Property Leads
//                   </button>
//                   <span className="bg-purple-400 text-white text-xs px-2 py-0.5 rounded-full ml-2">
//                     New
//                   </span>
//                 </div>
//                 <button
//                   onClick={() => navigate("/advertise")}
//                   className="block px-6 py-3 text-gray-800 hover:bg-green-50 w-full text-left"
//                 >
//                   Advertise with us
//                 </button>
//                 <button
//                   onClick={() => navigate("/search-property-id")}
//                   className="block px-6 py-3 text-gray-800 hover:bg-green-50 w-full text-left"
//                 >
//                   Search by Property ID
//                 </button>
//                 <button
//                   onClick={() => navigate("/download-app")}
//                   className="block px-6 py-3 text-gray-800 hover:bg-green-50 w-full text-left"
//                 >
//                   Download App
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden flex items-center">
//           <button
//             className="p-2 rounded-md border border-gray-300 bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200"
//             onClick={() => setShowMobileMenu(!showMobileMenu)}
//           >
//             <svg
//               className="w-6 h-6 text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               {showMobileMenu ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {showMobileMenu && (
//         <div className="md:hidden bg-gray-900 bg-opacity-95 border-t border-gray-600 shadow-md px-4 py-3 space-y-3">
//           <button
//             className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold transition-colors duration-200"
//             onClick={() => {
//               setShowMobileMenu(false);
//               navigate("/post-property");
//             }}
//           >
//             Post Property FREE
//           </button>
//           <button
//             className="w-full text-white font-semibold px-4 py-2 border border-gray-300 rounded hover:bg-white hover:bg-opacity-10 transition-all duration-200"
//             onClick={() => {
//               setShowMobileMenu(false);
//               navigate("/login");
//             }}
//           >
//             Login
//           </button>
//           <button
//             className="w-full text-white font-semibold px-4 py-2 hover:text-yellow-300 transition-colors duration-200"
//             onClick={() => {
//               setShowMobileMenu(false);
//               navigate("/register");
//             }}
//           >
//             Join Free
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sales_enguiry_Navbar;













import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SalesEnquiryNavbarIntegration = () => {
  const navigate = useNavigate();
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const userDropdownRef = useRef(null);

  useEffect(() => {
    if (!showUserDropdown) return;
    function handleClickOutside(event) {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setShowUserDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showUserDropdown]);

  return (
    <div className="navbar-animated-gradient font-sans shadow-lg">
      {/* Header Bar */}
      <div className="navbar-animated-gradient px-4 sm:px-6 lg:px-10 border-b-2 border-gray-700 h-14 flex items-center justify-between shadow-sm">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/abc.png" alt="Logo" className="h-9 mr-2 mt-[2px]" />
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <button
            className="font-semibold text-sm text-white bg-green-600 hover:bg-green-700 border border-green-600 rounded px-4 py-1 flex items-center gap-1 transition-all duration-200"
            onClick={() => navigate("/post-property")}
          >
            POST PROPERTY{" "}
            <span className="bg-yellow-300 text-black rounded px-2 py-0.5 ml-1 text-xs">
              FREE
            </span>
          </button>

          <div className="flex items-center gap-2 relative">
            <span
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white bg-opacity-20 border border-gray-300 cursor-pointer hover:bg-opacity-30 transition-all duration-200"
              onClick={() => setShowUserDropdown(!showUserDropdown)}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="8"
                  r="4"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
                <path
                  d="M4 20c0-2.7614 3.5817-5 8-5s8 2.2386 8 5"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
            <div className="flex flex-col leading-tight">
              <span
                className="text-white hover:text-yellow-300 font-bold text-sm cursor-pointer transition-colors duration-200"
                onClick={() => setShowUserDropdown(!showUserDropdown)}
              >
                Sign In
              </span>
              <span className="text-white hover:text-yellow-300 font-bold text-sm cursor-pointer -mt-1 transition-colors duration-200">
                Join Free
              </span>
            </div>

            {showUserDropdown && (
              <div
                ref={userDropdownRef}
                className="absolute right-0 top-10 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl z-30"
              >
                <div className="flex flex-col items-center py-4 border-b">
                  <button
                    onClick={() => navigate("/login")}
                    className="bg-green-600 text-white px-6 py-2 rounded font-semibold mb-2 w-full text-center"
                  >
                    Login
                  </button>
                  <span className="text-gray-700 text-sm">
                    New to BhoomiRealEstate?
                  </span>
                  <button
                    onClick={() => navigate("/register")}
                    className="text-green-700 font-semibold text-base mt-1 hover:underline w-full"
                  >
                    Sign Up
                  </button>
                </div>

                <button
                  onClick={() => navigate("/login")}
                  className="block px-6 py-3 text-gray-800 hover:bg-green-50 w-full text-left"
                >
                  Profile
                </button>
                <button
                  onClick={() => navigate("/login")}
                  className="block px-6 py-3 text-gray-800 hover:bg-green-50 w-full text-left"
                >
                  My Dashboard
                </button>
                <button
                  onClick={() => navigate("/login")}
                  className="block px-6 py-3 text-gray-800 hover:bg-green-50 w-full text-left"
                >
                  My Enquiry
                </button>
                <button
                  onClick={() => navigate("/post-property")}
                  className="block px-6 py-3 text-gray-800 hover:bg-green-50 w-full text-left"
                >
                  Post Property
                </button>
                <button
                  onClick={() => navigate("/my-property")}
                  className="block px-6 py-3 text-gray-800 hover:bg-green-50 w-full text-left"
                >
                  My Property
                </button>
                <div className="flex items-center px-6 py-3 text-gray-800 hover:bg-green-50">
                  <button
                    onClick={() => navigate("/property-leads")}
                    className="flex-1 text-left"
                  >
                    Property Leads
                  </button>
                  <span className="bg-purple-400 text-white text-xs px-2 py-0.5 rounded-full ml-2">
                    New
                  </span>
                </div>
                <button
                  onClick={() => navigate("/advertise")}
                  className="block px-6 py-3 text-gray-800 hover:bg-green-50 w-full text-left"
                >
                  Advertise with us
                </button>
                <button
                  onClick={() => navigate("/search-property-id")}
                  className="block px-6 py-3 text-gray-800 hover:bg-green-50 w-full text-left"
                >
                  Search by Property ID
                </button>
                <button
                  onClick={() => navigate("/download-app")}
                  className="block px-6 py-3 text-gray-800 hover:bg-green-50 w-full text-left"
                >
                  Download App
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            className="p-2 rounded-md border border-gray-300 bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {showMobileMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-gray-900 bg-opacity-95 border-t border-gray-600 shadow-md px-4 py-3 space-y-3">
          <button
            className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold transition-colors duration-200"
            onClick={() => {
              setShowMobileMenu(false);
              navigate("/post-property");
            }}
          >
            Post Property FREE
          </button>
          <button
            className="w-full text-white font-semibold px-4 py-2 border border-gray-300 rounded hover:bg-white hover:bg-opacity-10 transition-all duration-200"
            onClick={() => {
              setShowMobileMenu(false);
              navigate("/login");
            }}
          >
            Login
          </button>
          <button
            className="w-full text-white font-semibold px-4 py-2 hover:text-yellow-300 transition-colors duration-200"
            onClick={() => {
              setShowMobileMenu(false);
              navigate("/register");
            }}
          >
            Join Free
          </button>
        </div>
      )}
    </div>
  );
};

export default SalesEnquiryNavbarIntegration;