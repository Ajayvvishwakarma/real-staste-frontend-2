// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Eye, EyeOff } from 'lucide-react'; // 👈 Eye icons

// const validateEmail = (email) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
// const validateMobile = (mobile) => /^[6-9]\d{9}$/.test(mobile);
// const validatePassword = (password) => password.length >= 6;

// const UserRegister = () => {
//   const navigate = useNavigate();
//   const [role, setRole] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [countryCode, setCountryCode] = useState('+91');
//   const [mobile, setMobile] = useState('');
//   const [agree, setAgree] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [success, setSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false); // 👈 state for eye toggle

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let newErrors = {};
//     if (!role) newErrors.role = 'Please select your role.';
//     if (!name) newErrors.name = 'Name is required.';
//     if (!email || !validateEmail(email)) newErrors.email = 'Enter a valid email.';
//     if (!password || !validatePassword(password))
//       newErrors.password = 'Password must be at least 6 characters.';
//     if (!mobile || !validateMobile(mobile))
//       newErrors.mobile = 'Enter a valid mobile number.';
//     if (!agree) newErrors.agree = 'You must agree to the terms.';
//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       setLoading(true);
//       try {
//         // Mock registration with delay to simulate API call
//         await new Promise(resolve => setTimeout(resolve, 1500));
        
//         console.log('Mock registration data:', {
//           user_type: role,
//           name,
//           username: email,
//           email,
//           password,
//           phone: `${countryCode}${mobile}`,
//         });

//         setSuccess(true);
//         setRole('');
//         setName('');
//         setEmail('');
//         setPassword('');
//         setCountryCode('+91');
//         setMobile('');
//         setAgree(false);

//         localStorage.clear(); // don't auto login
//       } catch (error) {
//         console.error('Mock registration error:', error);
//         setErrors({
//           submit: error.message || 'Registration failed. Please try again.',
//         });
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   return (
//     <div 
//       className="min-h-screen flex items-center justify-center px-3 sm:px-4 pb-4 relative"
//       style={{
//         backgroundImage: 'url("/city-bg.jpg")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat'
//       }}
//     >
//       {/* Blurred Background Overlay */}
//       <div 
//         className="absolute inset-0 backdrop-blur-sm bg-black/30"
//         style={{ filter: 'blur(2px)' }}
//       ></div>
      
//       {/* Main Container */}
//       <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-md p-5 sm:p-6 md:p-8 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-5">
//           <h2 className="text-xl sm:text-2xl font-bold text-black">
//             New User Registration
//           </h2>
//           <p className="text-sm sm:text-base text-gray-600 mt-1">
//             Create an account to access the best real estate solutions
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} noValidate className="space-y-4">
//           {/* Role Selection */}
//           <div>
//             <label className="block font-semibold mb-2 text-sm text-black">
//               I am
//             </label>
//             <div className="grid grid-cols-2 gap-3">
//               {['Buyer/Owner/Tenant', 'Agent', 'Builder', 'Other'].map((r) => (
//                 <label
//                   key={r}
//                   className={`flex items-center gap-2 text-xs sm:text-sm cursor-pointer p-2 border rounded-md transition-all duration-200 ${
//                     role === r
//                       ? 'bg-green-50 border-green-400'
//                       : 'border-gray-300 hover:border-green-400 hover:bg-green-50'
//                   }`}
//                 >
//                   <input
//                     type="radio"
//                     name="role"
//                     value={r}
//                     checked={role === r}
//                     onChange={() => setRole(r)}
//                     className="text-green-600 focus:ring-green-500"
//                   />
//                   <span className="text-black">{r}</span>
//                 </label>
//               ))}
//             </div>
//             {errors.role && (
//               <span className="text-red-500 text-xs mt-1 block">
//                 {errors.role}
//               </span>
//             )}
//           </div>

//           {/* Name Field */}
//           <div>
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             {errors.name && (
//               <span className="text-red-500 text-xs">{errors.name}</span>
//             )}
//           </div>

//           {/* Email Field */}
//           <div>
//             <input
//               type="email"
//               placeholder="E-mail"
//               className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {errors.email && (
//               <span className="text-red-500 text-xs">{errors.email}</span>
//             )}
//           </div>

//           {/* Password Field with Eye Toggle */}
//           <div className="relative">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Password (min 6 characters)"
//               className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-green-600"
//             >
//               {showPassword ? <EyeOff className="w-5 h-5"/> : <Eye className="w-5 h-5"/>}
//             </button>
//             {errors.password && (
//               <span className="text-red-500 text-xs">{errors.password}</span>
//             )}
//           </div>

//           {/* Mobile Field */}
//           <div className="flex gap-2">
//             <select
//               className="border border-gray-300 rounded-md px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
//               value={countryCode}
//               onChange={(e) => setCountryCode(e.target.value)}
//             >
//               <option value="+91">+91</option>
//               <option value="+1">+1</option>
//               <option value="+44">+44</option>
//               <option value="+61">+61</option>
//               <option value="+81">+81</option>
//             </select>
//             <input
//               type="text"
//               placeholder="Mobile Number"
//               maxLength="10"
//               className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//             />
//           </div>
//           {errors.mobile && (
//             <span className="text-red-500 text-xs">{errors.mobile}</span>
//           )}

//           {/* Terms Agreement */}
//           <div className="flex items-start gap-2">
//             <input
//               type="checkbox"
//               id="agree"
//               checked={agree}
//               onChange={(e) => setAgree(e.target.checked)}
//               className="mt-1 w-4 h-4 text-green-600 focus:ring-green-500"
//             />
//             <label
//               htmlFor="agree"
//               className="text-xs sm:text-sm text-gray-700 cursor-pointer"
//             >
//               I agree to the{' '}
//               <a href="#" className="text-green-600 underline">
//                 Terms & Conditions
//               </a>{' '}
//               and{' '}
//               <a href="#" className="text-green-600 underline">
//                 Privacy Policy
//               </a>
//             </label>
//           </div>
//           {errors.agree && (
//             <span className="text-red-500 text-xs">{errors.agree}</span>
//           )}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-green-500 text-white py-2 rounded-md font-bold text-sm shadow-md hover:bg-green-600 hover:shadow-lg disabled:opacity-50 disabled:hover:bg-green-500 transition-colors duration-300 ease-in-out"
//           >
//             {loading ? 'REGISTERING...' : 'CONTINUE →'}
//           </button>

//           {/* Error Messages */}
//           {errors.submit && (
//             <div className="bg-red-50 border border-red-200 rounded-md p-2 text-center">
//               <span className="text-red-600 text-xs">{errors.submit}</span>
//             </div>
//           )}
//           {/* Success Message */}
//           {success && (
//             <div className="bg-green-50 border border-green-200 rounded-md p-2 text-center">
//               <span className="text-green-600 text-sm">
//                 ✅ Registration successful! You can now log in.
//               </span>
//             </div>
//           )}
//         </form>
//         {/* Login Link */}
//         <div className="text-center text-xs sm:text-sm mt-4 text-gray-700">
//           Already Registered?{' '}
//           <Link
//             to="/login"
//             className="text-green-600 font-semibold underline hover:text-black"
//           >
//             Login here
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserRegister;









import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

// Using proxy configuration from vite.config.js
const API_URL = '/api/auth/register';

const validateEmail = (email) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
const validateMobile = (mobile) => /^[6-9]\d{9}$/.test(mobile);
const validatePassword = (password) => password.length >= 6;

const UserRegisterIntegration = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [mobile, setMobile] = useState('');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!role) newErrors.role = 'Please select your role.';
    if (!name) newErrors.name = 'Name is required.';
    if (!email || !validateEmail(email)) newErrors.email = 'Enter a valid email.';
    if (!password || !validatePassword(password))
      newErrors.password = 'Password must be at least 6 characters.';
    if (!mobile || !validateMobile(mobile))
      newErrors.mobile = 'Enter a valid mobile number.';
    if (!agree) newErrors.agree = 'You must agree to the terms.';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      try {
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user_type: role,
            name,
            username: email,
            email,
            password,
            phone: `${countryCode}${mobile}`,
          }),
        });
        const data = await res.json();
        if (res.ok) {
          setSuccess(true);
          setErrors({});
          setRole('');
          setName('');
          setEmail('');
          setPassword('');
          setCountryCode('+91');
          setMobile('');
          setAgree(false);
          localStorage.clear();
        } else {
          setErrors({ submit: data.detail || 'Registration failed. Please try again.' });
        }
      } catch (error) {
        setErrors({
          submit: error.message || 'Registration failed. Please try again.',
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-3 sm:px-4 pb-4 relative"
      style={{
        backgroundImage: 'url("/city-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div 
        className="absolute inset-0 backdrop-blur-sm bg-black/30"
        style={{ filter: 'blur(2px)' }}
      ></div>
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-md p-5 sm:p-6 md:p-8 relative z-10">
        <div className="text-center mb-5">
          <h2 className="text-xl sm:text-2xl font-bold text-black">
            New User Registration
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            Create an account to access the best real estate solutions
          </p>
        </div>
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Role Selection */}
          <div>
            <label className="block font-semibold mb-2 text-sm text-black">
              I am
            </label>
            <div className="grid grid-cols-2 gap-3">
              {['Buyer/Owner/Tenant', 'Agent', 'Builder', 'Other'].map((r) => (
                <label
                  key={r}
                  className={`flex items-center gap-2 text-xs sm:text-sm cursor-pointer p-2 border rounded-md transition-all duration-200 ${
                    role === r
                      ? 'bg-green-50 border-green-400'
                      : 'border-gray-300 hover:border-green-400 hover:bg-green-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="role"
                    value={r}
                    checked={role === r}
                    onChange={() => setRole(r)}
                    className="text-green-600 focus:ring-green-500"
                  />
                  <span className="text-black">{r}</span>
                </label>
              ))}
            </div>
            {errors.role && (
              <span className="text-red-500 text-xs mt-1 block">
                {errors.role}
              </span>
            )}
          </div>
          {/* Name Field */}
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <span className="text-red-500 text-xs">{errors.name}</span>
            )}
          </div>
          {/* Email Field */}
          <div>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <span className="text-red-500 text-xs">{errors.email}</span>
            )}
          </div>
          {/* Password Field with Eye Toggle */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password (min 6 characters)"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-green-600"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff className="w-5 h-5"/> : <Eye className="w-5 h-5"/>}
            </button>
            {errors.password && (
              <span className="text-red-500 text-xs">{errors.password}</span>
            )}
          </div>
          {/* Mobile Field */}
          <div className="flex gap-2">
            <select
              className="border border-gray-300 rounded-md px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
              <option value="+81">+81</option>
            </select>
            <input
              type="text"
              placeholder="Mobile Number"
              maxLength="10"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          {errors.mobile && (
            <span className="text-red-500 text-xs">{errors.mobile}</span>
          )}
          {/* Terms Agreement */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="agree"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-1 w-4 h-4 text-green-600 focus:ring-green-500"
            />
            <label
              htmlFor="agree"
              className="text-xs sm:text-sm text-gray-700 cursor-pointer"
            >
              I agree to the{' '}
              <a href="#" className="text-green-600 underline">
                Terms & Conditions
              </a>{' '}
              and{' '}
              <a href="#" className="text-green-600 underline">
                Privacy Policy
              </a>
            </label>
          </div>
          {errors.agree && (
            <span className="text-red-500 text-xs">{errors.agree}</span>
          )}
          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 text-white py-2 rounded-md font-bold text-sm shadow-md hover:bg-green-600 hover:shadow-lg disabled:opacity-50 disabled:hover:bg-green-500 transition-colors duration-300 ease-in-out"
          >
            {loading ? 'REGISTERING...' : 'CONTINUE →'}
          </button>
          {/* Error Messages */}
          {errors.submit && (
            <div className="bg-red-50 border border-red-200 rounded-md p-2 text-center">
              <span className="text-red-600 text-xs">{errors.submit}</span>
            </div>
          )}
          {/* Success Message */}
          {success && (
            <div className="bg-green-50 border border-green-200 rounded-md p-2 text-center">
              <span className="text-green-600 text-sm">
                ✅ Registration successful! You can now log in.
              </span>
            </div>
          )}
        </form>
        {/* Login Link */}
        <div className="text-center text-xs sm:text-sm mt-4 text-gray-700">
          Already Registered?{' '}
          <Link
            to="/login"
            className="text-green-600 font-semibold underline hover:text-black"
          >
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserRegisterIntegration;