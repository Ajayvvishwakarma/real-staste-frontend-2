// import React from 'react';
// import { useLocation, Link } from 'react-router-dom';

// const PostProperty_Navbar = () => {
//   const location = useLocation();
//   const isLogin = location.pathname === '/login';
//   const isRegister = location.pathname === '/register';
//   const isPostProperty = location.pathname === '/post-property';

//   return (
//     <nav className="w-full bg-black shadow-lg">
//       <div className="w-full flex items-center justify-between px-4 sm:px-6 md:px-8 py-2">
//         {/* Left: Logo */}
//         <div className="flex items-center gap-2 sm:gap-4">
//           <img
//             src="/abc.png"
//             alt="Bhoomi The Real Estate Logo"
//             className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain"
//           />
//         </div>

//         {/* Right: Auth Links */}
//         <div className="flex items-center gap-2 sm:gap-4 text-sm sm:text-base">
//           {isLogin && (
//             <>
//               <span className="text-white hidden xs:inline">New user?</span>
//               <Link
//                 to="/register"
//                 className="text-yellow-300 font-semibold hover:underline"
//               >
//                 Register
//               </Link>
//             </>
//           )}
//           {isRegister && (
//             <>
//               <span className="text-white hidden xs:inline">Registered user?</span>
//               <Link
//                 to="/login"
//                 className="text-yellow-300 font-semibold hover:underline"
//               >
//                 Login
//               </Link>
//             </>
//           )}
//           {isPostProperty && (
//             <>
//               <span className="text-white hidden xs:inline">Registered user?</span>
//               <Link
//                 to="/login"
//                 className="text-yellow-300 font-semibold hover:underline"
//               >
//                 Login
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default PostProperty_Navbar;









import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const PostPropertyNavbarIntegration = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  const isRegister = location.pathname === '/register';
  const isPostProperty = location.pathname === '/post-property';

  return (
    <nav className="w-full bg-black shadow-lg">
      <div className="w-full flex items-center justify-between px-4 sm:px-6 md:px-8 py-2">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 sm:gap-4">
          <img
            src="/abc.png"
            alt="Bhoomi The Real Estate Logo"
            className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain"
          />
        </div>

        {/* Right: Auth Links */}
        <div className="flex items-center gap-2 sm:gap-4 text-sm sm:text-base">
          {isLogin && (
            <>
              <span className="text-white hidden xs:inline">New user?</span>
              <Link
                to="/register"
                className="text-yellow-300 font-semibold hover:underline"
              >
                Register
              </Link>
            </>
          )}
          {isRegister && (
            <>
              <span className="text-white hidden xs:inline">Registered user?</span>
              <Link
                to="/login"
                className="text-yellow-300 font-semibold hover:underline"
              >
                Login
              </Link>
            </>
          )}
          {isPostProperty && (
            <>
              <span className="text-white hidden xs:inline">Registered user?</span>
              <Link
                to="/login"
                className="text-yellow-300 font-semibold hover:underline"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default PostPropertyNavbarIntegration;