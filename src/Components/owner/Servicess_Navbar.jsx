// import React from "react";
// import Request_a_call from "../help/Request_a_call";
// import { Menu, Headphones } from "lucide-react";
// import { FaSquareWhatsapp } from "react-icons/fa6";
// import { RiMessage2Fill } from "react-icons/ri";

// const Servicess_Navbar = () => {
//   const user = { name: "User Name" };
//   const [showRequestCall, setShowRequestCall] = React.useState(false);
//   const [showUserMenu, setShowUserMenu] = React.useState(false);
//   const userMenuRef = React.useRef();
//   const userMenuTimeoutRef = React.useRef();
//   const [showSupport, setShowSupport] = React.useState(false);
//   const supportTimeoutRef = React.useRef();

//   // Helper to close other dropdown on mobile
//   const closeOtherDropdowns = (type) => {
//     if (window.innerWidth < 640) {
//       if (type === 'support') setShowUserMenu(false);
//       if (type === 'user') setShowSupport(false);
//     }
//   };

//   React.useEffect(() => {
//     function handleClick(e) {
//       // For mobile, close both dropdowns if click is outside
//       if (window.innerWidth < 640) {
//         const supportDropdown = document.querySelector('[data-support-dropdown]');
//         const userDropdown = document.querySelector('[data-user-dropdown]');
//         const isSupportOpen = showSupport && supportDropdown && !supportDropdown.contains(e.target);
//         const isUserOpen = showUserMenu && userDropdown && !userDropdown.contains(e.target);
//         if (isSupportOpen || isUserOpen) {
//           setShowSupport(false);
//           setShowUserMenu(false);
//         }
//       } else {
//         // Desktop: only close user menu if click outside
//         if (showUserMenu && userMenuRef.current && !userMenuRef.current.contains(e.target)) {
//           setShowUserMenu(false);
//         }
//       }
//     }
//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, [showUserMenu, showSupport]);

// return ( <div className="w-full relative">
// {/* Top Blue Navbar */} <div className="bg-[#005aa9] text-white flex items-center justify-between px-4 py-3 sm:py-4">
// {/* Left Logo */} <img src="/abc.png" alt="Bhoomi Logo" className="h-8 sm:h-10 md:h-12 w-auto" />
//     {/* Right Side */}
//     <div className="flex items-center space-x-4 sm:space-x-6">
//       {/* Support (hover on desktop, click on mobile) */}
//       <div
//         className="flex items-center space-x-1 cursor-pointer relative"
//         onMouseEnter={() => {
//           if (window.innerWidth >= 640) {
//             clearTimeout(supportTimeoutRef.current);
//             setShowSupport(true);
//           }
//         }}
//         onMouseLeave={() => {
//           if (window.innerWidth >= 640) {
//             supportTimeoutRef.current = setTimeout(() => setShowSupport(false), 150);
//           }
//         }}
//         onClick={() => {
//               if (window.innerWidth < 640) {
//                 closeOtherDropdowns('support');
//                 setShowSupport(!showSupport);
//               }
//         }}
//       >
//         <Headphones size={18} className="hidden sm:block" />
//         <span className="font-semibold text-sm sm:text-base">Get Support</span>

//         {showSupport && (
//               <div
//                 data-support-dropdown
//                 className="absolute top-full mt-2 w-full sm:w-[530px] bg-white rounded-none sm:rounded-xl shadow-md sm:shadow-2xl border border-blue-100 p-3 sm:p-6 z-50 animate-fade-in"
//                 style={{
//                   maxWidth: '95vw',
//                   minWidth: '220px',
//                   left: window.innerWidth >= 1024 ? 'auto' : '50%',
//                   right: window.innerWidth >= 1024 ? '0' : 'auto',
//                   transform: window.innerWidth >= 1024 ? 'none' : 'translateX(-50%)',
//                 }}
//               >
//             {/* Support Content */}
//             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start mb-4">
//               {/* Left */}
//               <div className="flex flex-col items-center sm:items-start">
//                 <img src="/mob.png" alt="Support" className="w-16 h-16 sm:w-24 sm:h-24" />
//                 <div className="mt-2 text-center sm:text-left text-gray-700 text-xs sm:text-sm">
//                   Get answers to all your queries. <br /> Talk to an expert now!
//                 </div>
//               </div>

//               {/* Right */}
//               <div className="flex-1 w-full">
//                 <div className="bg-gray-100 rounded-lg p-3 mb-3 text-center sm:text-left">
//                   <div className="text-xs text-gray-500">TOLL FREE | 9 AM - 7 PM IST</div>
//                   <div className="text-lg sm:text-xl font-bold text-blue-900">1800-41-99099</div>
//                 </div>

//                 <div className="bg-gray-100 rounded-lg p-3 flex items-center justify-between gap-3">
//                   <div>
//                     <div className="text-[10px] sm:text-xs text-gray-500">CHAT WITH AN EXPERT</div>
//                     <div className="font-semibold text-gray-800 text-sm">WhatsApp | Chat</div>
//                   </div>
//                   <div className="flex gap-3">
//                     <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
//                       <FaSquareWhatsapp className="text-green-500 h-6 w-6 sm:h-8 sm:w-8 cursor-pointer" />
//                     </a>
//                     <RiMessage2Fill className="text-blue-500 h-6 w-6 sm:h-8 sm:w-8 cursor-pointer" />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-3">
//               <button className="flex-1 border border-blue-600 text-blue-600 text-sm sm:text-base font-semibold py-2 rounded-lg hover:bg-blue-50 transition">
//                 View FAQ's
//               </button>
//               <button
//                 className="flex-1 bg-blue-600 text-white text-sm sm:text-base font-semibold py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition"
//                 onClick={() => setShowRequestCall(true)}
//                 type="button"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h15a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 9.75h.008v.008H6.75V9.75zm0 4.5h.008v.008H6.75v-.008zm4.5-4.5h.008v.008h-.008V9.75zm0 4.5h.008v.008h-.008v-.008zm4.5-4.5h.008v.008h-.008V9.75zm0 4.5h.008v.008h-.008v-.008z" />
//                 </svg>
//                 Request a Callback
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* User Menu */}
//       <div
//         className="relative"
//         onMouseEnter={() => {
//           if (window.innerWidth >= 640) {
//             clearTimeout(userMenuTimeoutRef.current);
//             setShowUserMenu(true);
//           }
//         }}
//         onMouseLeave={() => {
//           if (window.innerWidth >= 640) {
//             userMenuTimeoutRef.current = setTimeout(() => setShowUserMenu(false), 150);
//           }
//         }}
//         onClick={() => {
//               if (window.innerWidth < 640) {
//                 closeOtherDropdowns('user');
//                 setShowUserMenu(!showUserMenu);
//               }
//         }}
//       >
//         <div
//           className="w-8 h-8 flex items-center justify-center rounded-full bg-green-200 text-black text-sm sm:text-base font-semibold cursor-pointer"
//           ref={userMenuRef}
//         >
//           S
//         </div>
//         {showUserMenu && (
//               <div
//                 data-user-dropdown
//                 className="absolute right-0 top-10 z-50 w-full sm:w-64 bg-white rounded-none sm:rounded-xl shadow-md sm:shadow-2xl border border-gray-100 p-3 sm:p-5 animate-fade-in"
//                 style={{ maxWidth: '95vw', minWidth: '220px' }}
//               >
//             <div className="font-bold text-base sm:text-lg text-slate-900 mb-2">{user.name}</div>
//             <div className="mb-2 text-blue-900">My99acres</div>
//             <div className="font-semibold text-slate-900 mb-2 flex items-center">
//               Owner Plans <span className="ml-2 w-2 h-2 bg-red-600 rounded-full inline-block"></span>
//             </div>
//             {[
//               "Manage Listings",
//               "View Responses",
//               "Lead Search",
//               "Manage Profile",
//               "Change Password",
//               "Logout",
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="mb-2 text-slate-700 cursor-pointer hover:text-blue-700 text-sm sm:text-base"
//               >
//                 {item}
//               </div>
//             ))}
//             <hr className="my-3" />
//             <div className="font-bold text-slate-900 mb-2">My Activity</div>
//             {[
//               "Recent Searches",
//               "Contacted properties",
//               "Shortlisted properties",
//               "Viewed properties",
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="mb-2 text-slate-700 cursor-pointer hover:text-blue-700 text-sm sm:text-base"
//               >
//                 {item}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Menu Icon for Mobile */}
//       <Menu size={22} className="cursor-pointer sm:hidden" />
//     </div>
//   </div>

//   {/* Bottom Strip */}
//   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-4 py-3 shadow-lg text-center sm:text-left">
//     <div className="text-sm sm:text-base">
//       <span className="font-bold text-gray-700">UPGRADE ► </span>
//       <span className="text-gray-600">Sell 1 BHK in Block C, Palam Vihar @ ₹2 Lac</span>
//     </div>
//     <div className="text-gray-600 text-xs sm:text-sm flex items-center justify-center sm:justify-start space-x-1">
//       <span className="text-yellow-500">✨</span>
//       <span>400+ owner upgraded their listing in last 48hrs</span>
//     </div>
//   </div>
//   {/* Request a Callback Modal */}
//   <Request_a_call isOpen={showRequestCall} onClose={() => setShowRequestCall(false)} />
// </div>

// );
// };

// export default Servicess_Navbar;










import React from "react";
import Request_a_call from "../help/Request_a_call";
import { Menu, Headphones } from "lucide-react";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";

const ServicessNavbarIntegration = () => {
  const user = { name: "User Name" };
  const [showRequestCall, setShowRequestCall] = React.useState(false);
  const [showUserMenu, setShowUserMenu] = React.useState(false);
  const userMenuRef = React.useRef();
  const userMenuTimeoutRef = React.useRef();
  const [showSupport, setShowSupport] = React.useState(false);
  const supportTimeoutRef = React.useRef();

  const closeOtherDropdowns = (type) => {
    if (window.innerWidth < 640) {
      if (type === "support") setShowUserMenu(false);
      if (type === "user") setShowSupport(false);
    }
  };

  React.useEffect(() => {
    function handleClick(e) {
      if (window.innerWidth < 640) {
        const supportDropdown = document.querySelector("[data-support-dropdown]");
        const userDropdown = document.querySelector("[data-user-dropdown]");
        const isSupportOpen = showSupport && supportDropdown && !supportDropdown.contains(e.target);
        const isUserOpen = showUserMenu && userDropdown && !userDropdown.contains(e.target);
        if (isSupportOpen || isUserOpen) {
          setShowSupport(false);
          setShowUserMenu(false);
        }
      } else {
        if (showUserMenu && userMenuRef.current && !userMenuRef.current.contains(e.target)) {
          setShowUserMenu(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showUserMenu, showSupport]);

  return (
    <div className="w-full relative">
      <div className="bg-[#005aa9] text-white flex items-center justify-between px-4 py-3 sm:py-4">
        <img src="/abc.png" alt="Bhoomi Logo" className="h-8 sm:h-10 md:h-12 w-auto" />
        <div className="flex items-center space-x-4 sm:space-x-6">
          <div
            className="flex items-center space-x-1 cursor-pointer relative"
            onMouseEnter={() => {
              if (window.innerWidth >= 640) {
                clearTimeout(supportTimeoutRef.current);
                setShowSupport(true);
              }
            }}
            onMouseLeave={() => {
              if (window.innerWidth >= 640) {
                supportTimeoutRef.current = setTimeout(() => setShowSupport(false), 150);
              }
            }}
            onClick={() => {
              if (window.innerWidth < 640) {
                closeOtherDropdowns("support");
                setShowSupport(!showSupport);
              }
            }}
          >
            <Headphones size={18} className="hidden sm:block" />
            <span className="font-semibold text-sm sm:text-base">Get Support</span>
            {showSupport && (
              <div
                data-support-dropdown
                className="absolute top-full mt-2 w-full sm:w-[530px] bg-white rounded-none sm:rounded-xl shadow-md sm:shadow-2xl border border-blue-100 p-3 sm:p-6 z-50 animate-fade-in"
                style={{
                  maxWidth: "95vw",
                  minWidth: "220px",
                  left: window.innerWidth >= 1024 ? "auto" : "50%",
                  right: window.innerWidth >= 1024 ? "0" : "auto",
                  transform: window.innerWidth >= 1024 ? "none" : "translateX(-50%)",
                }}
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start mb-4">
                  <div className="flex flex-col items-center sm:items-start">
                    <img src="/mob.png" alt="Support" className="w-16 h-16 sm:w-24 sm:h-24" />
                    <div className="mt-2 text-center sm:text-left text-gray-700 text-xs sm:text-sm">
                      Get answers to all your queries. <br /> Talk to an expert now!
                    </div>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="bg-gray-100 rounded-lg p-3 mb-3 text-center sm:text-left">
                      <div className="text-xs text-gray-500">TOLL FREE | 9 AM - 7 PM IST</div>
                      <div className="text-lg sm:text-xl font-bold text-blue-900">1800-41-99099</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[10px] sm:text-xs text-gray-500">CHAT WITH AN EXPERT</div>
                        <div className="font-semibold text-gray-800 text-sm">WhatsApp | Chat</div>
                      </div>
                      <div className="flex gap-3">
                        <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                          <FaSquareWhatsapp className="text-green-500 h-6 w-6 sm:h-8 sm:w-8 cursor-pointer" />
                        </a>
                        <RiMessage2Fill className="text-blue-500 h-6 w-6 sm:h-8 sm:w-8 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 border border-blue-600 text-blue-600 text-sm sm:text-base font-semibold py-2 rounded-lg hover:bg-blue-50 transition">
                    View FAQ's
                  </button>
                  <button
                    className="flex-1 bg-blue-600 text-white text-sm sm:text-base font-semibold py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition"
                    onClick={() => setShowRequestCall(true)}
                    type="button"
                  >
                    Request a Callback
                  </button>
                </div>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => {
              if (window.innerWidth >= 640) {
                clearTimeout(userMenuTimeoutRef.current);
                setShowUserMenu(true);
              }
            }}
            onMouseLeave={() => {
              if (window.innerWidth >= 640) {
                userMenuTimeoutRef.current = setTimeout(() => setShowUserMenu(false), 150);
              }
            }}
            onClick={() => {
              if (window.innerWidth < 640) {
                closeOtherDropdowns("user");
                setShowUserMenu(!showUserMenu);
              }
            }}
          >
            <div
              className="w-8 h-8 flex items-center justify-center rounded-full bg-green-200 text-black text-sm sm:text-base font-semibold cursor-pointer"
              ref={userMenuRef}
            >
              S
            </div>
            {showUserMenu && (
              <div
                data-user-dropdown
                className="absolute right-0 top-10 z-50 w-full sm:w-64 bg-white rounded-none sm:rounded-xl shadow-md sm:shadow-2xl border border-gray-100 p-3 sm:p-5 animate-fade-in"
                style={{ maxWidth: "95vw", minWidth: "220px" }}
              >
                <div className="font-bold text-base sm:text-lg text-slate-900 mb-2">{user.name}</div>
                <div className="mb-2 text-blue-900">My99acres</div>
                <div className="font-semibold text-slate-900 mb-2 flex items-center">
                  Owner Plans <span className="ml-2 w-2 h-2 bg-red-600 rounded-full inline-block"></span>
                </div>
                {[
                  "Manage Listings",
                  "View Responses",
                  "Lead Search",
                  "Manage Profile",
                  "Change Password",
                  "Logout",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="mb-2 text-slate-700 cursor-pointer hover:text-blue-700 text-sm sm:text-base"
                  >
                    {item}
                  </div>
                ))}
                <hr className="my-3" />
                <div className="font-bold text-slate-900 mb-2">My Activity</div>
                {[
                  "Recent Searches",
                  "Contacted properties",
                  "Shortlisted properties",
                  "Viewed properties",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="mb-2 text-slate-700 cursor-pointer hover:text-blue-700 text-sm sm:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
          <Menu size={22} className="cursor-pointer sm:hidden" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-4 py-3 shadow-lg text-center sm:text-left">
        <div className="text-sm sm:text-base">
          <span className="font-bold text-gray-700">UPGRADE ► </span>
          <span className="text-gray-600">Sell 1 BHK in Block C, Palam Vihar @ ₹2 Lac</span>
        </div>
        <div className="text-gray-600 text-xs sm:text-sm flex items-center justify-center sm:justify-start space-x-1">
          <span className="text-yellow-500">✨</span>
          <span>400+ owner upgraded their listing in last 48hrs</span>
        </div>
      </div>
      <Request_a_call isOpen={showRequestCall} onClose={() => setShowRequestCall(false)} />
    </div>
  );
};

export default ServicessNavbarIntegration;