// import React, { useState, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { Eye, EyeOff } from "lucide-react"; // 👈 Eye icons

// const validateEmail = (email) => {
//   const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
//   if (!email) return "Email is required.";
//   if (!emailRegex.test(email)) {
//     return "Enter a valid Email ID.";
//   }
//   return "";
// };

// const validatePassword = (password) => {
//   if (!password) return "Password is required.";
//   if (password.length < 6) {
//     return "Password must be at least 6 characters long.";
//   }
//   return "";
// };

// const Login_Form = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [userType, setUserType] = useState("subuser"); // Default to subuser
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [emailTouched, setEmailTouched] = useState(false);
//   const [passwordTouched, setPasswordTouched] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [loginError, setLoginError] = useState("");
//   const [showPassword, setShowPassword] = useState(false); // 👈 For eye toggle
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Get redirect parameter from URL
//   const [redirectPath, setRedirectPath] = useState("/dashboard");

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const redirect = urlParams.get("redirect");
//     if (redirect) {
//       setRedirectPath(`/${redirect}`);
//     }
//   }, [location]);

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     if (emailTouched) setEmailError(validateEmail(e.target.value));
//   };
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     if (passwordTouched) setPasswordError(validatePassword(e.target.value));
//   };
//   const handleEmailBlur = () => {
//     setEmailTouched(true);
//     setEmailError(validateEmail(email));
//   };
//   const handlePasswordBlur = () => {
//     setPasswordTouched(true);
//     setPasswordError(validatePassword(password));
//   };
//   const handleUserTypeSelect = (type) => {
//     setUserType(type);
//     setShowDropdown(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setEmailTouched(true);
//     setPasswordTouched(true);
//     setLoginError("");

//     const emailValidationError = validateEmail(email);
//     const passwordValidationError = validatePassword(password);

//     setEmailError(emailValidationError);
//     setPasswordError(passwordValidationError);

//     if (!emailValidationError && !passwordValidationError) {
//       setIsLoading(true);

//       try {
//         // Mock login with delay to simulate API call
//         await new Promise((resolve) => setTimeout(resolve, 1000));

//         // Mock user data
//         const mockUser = {
//           id: Date.now(),
//           email: email,
//           role: userType === "admin" ? "admin" : "user",
//           name: email.split("@")[0],
//           user_type: userType,
//         };

//         // Store user data in localStorage
//         localStorage.setItem(
//           "user",
//           JSON.stringify({
//             user_id: mockUser.id,
//             email: mockUser.email,
//             role: mockUser.role,
//             login_type: userType,
//           })
//         );

//         // Store additional auth data for compatibility
//         localStorage.setItem("access_token", "mock_token_" + Date.now());
//         localStorage.setItem("token_type", "bearer");
//         localStorage.setItem("user_info", JSON.stringify(mockUser));
//         localStorage.setItem("user_type", userType);
//         localStorage.setItem("userEmail", email);
//         localStorage.setItem("userRole", mockUser.role);
//         localStorage.setItem("authToken", "logged_in");
//         localStorage.setItem(
//           "userName",
//           mockUser.name || email.split("@")[0]
//         );

//         // Redirect to the intended page or dashboard
//         if (redirectPath === "/post-property") {
//           navigate("/post-property?loginSuccess=true");
//         } else {
//           navigate(redirectPath);
//         }
//       } catch (error) {
//         setLoginError(
//           error.message || "Login failed. Please check your credentials."
//         );
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center pb-6 px-4 sm:px-6 lg:px-8 relative"
//       style={{
//         backgroundImage: "url(/city-bg.jpg)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Blurred Background Overlay */}
//       <div
//         className="absolute inset-0 backdrop-blur-sm bg-black/30"
//         style={{ filter: "blur(2px)" }}
//       ></div>

//       <div className="w-full max-w-xs sm:max-w-sm md:max-w-md relative z-10">
//         <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 space-y-6">
//           {/* Header */}
//           <div>
//             <h2 className="text-2xl sm:text-3xl font-bold text-green-800 text-center">
//               Login as
//             </h2>

//             <div className="relative mt-4">
//               <button
//                 type="button"
//                 onClick={() => setShowDropdown(!showDropdown)}
//                 className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-black bg-white border border-gray-300 rounded-md shadow-sm hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
//               >
//                 <span className="capitalize">{userType}</span>
//                 <svg
//                   className={`ml-2 h-4 w-4 transition-transform duration-200 ${
//                     showDropdown ? "rotate-180" : ""
//                   }`}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 
//                     1.414l-4 4a1 1 0 
//                     01-1.414 0l-4-4a1 1 0 
//                     010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>

//               {showDropdown && (
//                 <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
//                   <div className="py-1">
//                     {["client", "subuser", "admin"].map((type) => (
//                       <button
//                         key={type}
//                         type="button"
//                         onClick={() => handleUserTypeSelect(type)}
//                         className={`${
//                           userType === type
//                             ? "bg-green-100 text-green-700"
//                             : "text-gray-700"
//                         } block px-4 py-2 text-sm hover:bg-green-50 w-full text-left transition-colors duration-200`}
//                       >
//                         {type.charAt(0).toUpperCase() + type.slice(1)}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Form */}
//           <form className="space-y-5" onSubmit={handleSubmit} noValidate>
//             {/* Email */}
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-black mb-1"
//               >
//                 Email ID
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={handleEmailChange}
//                 onBlur={handleEmailBlur}
//                 placeholder="your@email.com"
//                 className={`w-full px-3 py-2 rounded-lg border ${
//                   emailError ? "border-red-400" : "border-gray-300"
//                 } bg-green-50 text-black focus:outline-none focus:ring-2 focus:ring-green-500`}
//               />
//               {emailError && (
//                 <p className="mt-1 text-xs text-red-600">{emailError}</p>
//               )}
//             </div>

//             {/* Password */}
//             <div className="relative">
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-black mb-1"
//               >
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={handlePasswordChange}
//                 onBlur={handlePasswordBlur}
//                 placeholder="••••••••"
//                 className={`w-full px-3 py-2 rounded-lg border ${
//                   passwordError ? "border-red-400" : "border-gray-300"
//                 } bg-green-50 text-black focus:outline-none focus:ring-2 focus:ring-green-500 pr-10`}
//               />

//               {/* Eye Toggle Button */}
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-green-700"
//               >
//                 {showPassword ? (
//                   <EyeOff className="w-5 h-5" />
//                 ) : (
//                   <Eye className="w-5 h-5" />
//                 )}
//               </button>

//               {passwordError && (
//                 <p className="mt-1 text-xs text-red-600">{passwordError}</p>
//               )}
//             </div>

//             {/* Remember + Forgot */}
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm gap-2">
//               <label className="flex items-center text-black">
//                 <input
//                   type="checkbox"
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                   className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
//                 />
//                 <span className="ml-2">Remember me</span>
//               </label>
//               <Link
//                 to="/forgot-password"
//                 className="text-green-700 hover:text-black transition"
//               >
//                 Forgot Password?
//               </Link>
//             </div>

//             {/* Error */}
//             {loginError && (
//               <div className="rounded-md bg-red-50 p-3">
//                 <p className="text-xs text-red-700">{loginError}</p>
//               </div>
//             )}

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={
//                 !!emailError || !!passwordError || !email || !password || isLoading
//               }
//               className="w-full py-2.5 text-white font-bold rounded-lg 
//               bg-green-700 hover:bg-green-600 focus:ring-2 focus:ring-green-400 
//               disabled:opacity-50 disabled:hover:bg-green-500 
//               transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg"
//             >
//               {isLoading ? "Processing..." : "Continue →"}
//             </button>
//           </form>

//           {/* Register */}
//           <div className="pt-4 text-center">
//             <p className="text-sm text-black">
//               Don’t have an account?{" "}
//               <Link
//                 to={`/register${location.search}`}
//                 className="text-green-700 hover:text-black font-medium underline transition"
//               >
//                 Register Now
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login_Form;













import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const API_URL = "http://localhost:8000/api/auth/login"; // Replace with your backend endpoint

const validateEmail = (email) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!email) return "Email is required.";
  if (!emailRegex.test(email)) {
    return "Enter a valid Email ID.";
  }
  return "";
};

const validatePassword = (password) => {
  if (!password) return "Password is required.";
  if (password.length < 6) {
    return "Password must be at least 6 characters long.";
  }
  return "";
};

const LoginFormIntegration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [userType, setUserType] = useState("subuser");
  const [showDropdown, setShowDropdown] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [redirectPath, setRedirectPath] = useState("/dashboard");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const redirect = urlParams.get("redirect");
    if (redirect) {
      setRedirectPath(`/${redirect}`);
    }
  }, [location]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailTouched) setEmailError(validateEmail(e.target.value));
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordTouched) setPasswordError(validatePassword(e.target.value));
  };
  const handleEmailBlur = () => {
    setEmailTouched(true);
    setEmailError(validateEmail(email));
  };
  const handlePasswordBlur = () => {
    setPasswordTouched(true);
    setPasswordError(validatePassword(password));
  };
  const handleUserTypeSelect = (type) => {
    setUserType(type);
    setShowDropdown(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailTouched(true);
    setPasswordTouched(true);
    setLoginError("");

    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);

    setEmailError(emailValidationError);
    setPasswordError(passwordValidationError);

    if (!emailValidationError && !passwordValidationError) {
      setIsLoading(true);

      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
            user_type: userType,
          }),
        });
        const resData = await response.json();
        if (!response.ok) throw new Error(resData.detail || "Login failed. Please check your credentials.");
        if (resData.access_token) {
          localStorage.setItem("access_token", resData.access_token);
          localStorage.setItem("token_type", resData.token_type || "bearer");
          localStorage.setItem("user_info", JSON.stringify(resData.user));
          localStorage.setItem("user_type", userType);
          localStorage.setItem("userEmail", email);
          localStorage.setItem("userRole", resData.user.role);
          localStorage.setItem("authToken", resData.access_token);
          localStorage.setItem("userName", resData.user.full_name || email.split("@")[0]);
        }
        if (redirectPath === "/post-property") {
          navigate("/post-property?loginSuccess=true");
        } else {
          navigate(redirectPath);
        }
      } catch (error) {
        setLoginError(
          error.message || "Login failed. Please check your credentials."
        );
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center pb-6 px-4 sm:px-6 lg:px-8 relative"
      style={{
        backgroundImage: "url(/city-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Blurred Background Overlay */}
      <div
        className="absolute inset-0 backdrop-blur-sm bg-black/30"
        style={{ filter: "blur(2px)" }}
      ></div>

      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-green-800 text-center">
              Login as
            </h2>
            <div className="relative mt-4">
              <button
                type="button"
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-black bg-white border border-gray-300 rounded-md shadow-sm hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
              >
                <span className="capitalize">{userType}</span>
                <svg
                  className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 
                    1.414l-4 4a1 1 0 
                    01-1.414 0l-4-4a1 1 0 
                    010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showDropdown && (
                <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <div className="py-1">
                    {["client", "subuser", "admin"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handleUserTypeSelect(type)}
                        className={`${
                          userType === type
                            ? "bg-green-100 text-green-700"
                            : "text-gray-700"
                        } block px-4 py-2 text-sm hover:bg-green-50 w-full text-left transition-colors duration-200`}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black mb-1"
              >
                Email ID
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                placeholder="your@email.com"
                className={`w-full px-3 py-2 rounded-lg border ${
                  emailError ? "border-red-400" : "border-gray-300"
                } bg-green-50 text-black focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              {emailError && (
                <p className="mt-1 text-xs text-red-600">{emailError}</p>
              )}
            </div>
            {/* Password */}
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur}
                placeholder="••••••••"
                className={`w-full px-3 py-2 rounded-lg border ${
                  passwordError ? "border-red-400" : "border-gray-300"
                } bg-green-50 text-black focus:outline-none focus:ring-2 focus:ring-green-500 pr-10`}
              />
              {/* Eye Toggle Button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-green-700"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
              {passwordError && (
                <p className="mt-1 text-xs text-red-600">{passwordError}</p>
              )}
            </div>
            {/* Remember + Forgot */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm gap-2">
              <label className="flex items-center text-black">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-green-700 hover:text-black transition"
              >
                Forgot Password?
              </Link>
            </div>
            {/* Error */}
            {loginError && (
              <div className="rounded-md bg-red-50 p-3">
                <p className="text-xs text-red-700">{loginError}</p>
              </div>
            )}
            {/* Submit */}
            <button
              type="submit"
              disabled={
                !!emailError || !!passwordError || !email || !password || isLoading
              }
              className="w-full py-2.5 text-white font-bold rounded-lg 
              bg-green-700 hover:bg-green-600 focus:ring-2 focus:ring-green-400 
              disabled:opacity-50 disabled:hover:bg-green-500 
              transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg"
            >
              {isLoading ? "Processing..." : "Continue →"}
            </button>
          </form>
          {/* Register */}
          <div className="pt-4 text-center">
            <p className="text-sm text-black">
              Don’t have an account?{" "}
              <Link
                to={`/register${location.search}`}
                className="text-green-700 hover:text-black font-medium underline transition"
              >
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFormIntegration;