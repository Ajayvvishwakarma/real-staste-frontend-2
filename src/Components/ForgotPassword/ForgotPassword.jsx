import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('yadavsudha748@gmail.com');
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  
  // Refs for OTP inputs
  const otpRefs = [useRef(), useRef(), useRef(), useRef()];

  // Send initial OTP when component mounts
  useEffect(() => {
    if (email && !otpSent) {
      sendForgotPasswordRequest();
    }
  }, []);

  const handleOtpChange = (index, value) => {
    // Only allow single digit
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      otpRefs[index + 1].current.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    // Handle backspace to move to previous input
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs[index - 1].current.focus();
    }
  };

  const handleEmailEdit = () => {
    setIsEditingEmail(true);
  };

  const handleEmailSave = async () => {
    setIsEditingEmail(false);
    // Clear any previous errors and messages
    setErrors({});
    setSuccessMessage('');
    
    // Validate email
    if (!email || !email.includes('@')) {
      setErrors({ email: 'Please enter a valid email address' });
      return;
    }

    // Send OTP to new email
    await sendForgotPasswordRequest();
  };

  const sendForgotPasswordRequest = async () => {
    setIsLoading(true);
    setErrors({});
    
    try {
      console.log('Mock: Sending forgot password request to:', email);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful response
      setOtpSent(true);
      setSuccessMessage('OTP has been sent to your email address');
      // Clear OTP fields for fresh input
      setOtp(['', '', '', '']);
      // Focus on first OTP input
      if (otpRefs[0].current) {
        otpRefs[0].current.focus();
      }
    } catch (error) {
      console.error('Mock forgot password error:', error);
      setErrors({ general: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangePassword = async () => {
    // Clear previous errors
    setErrors({});
    
    // Validate inputs
    if (otp.some(digit => !digit)) {
      setErrors({ otp: 'Please enter complete OTP' });
      return;
    }
    if (!newPassword) {
      setErrors({ password: 'Please enter new password' });
      return;
    }
    if (newPassword.length < 6) {
      setErrors({ password: 'Password should be at least 6 characters long' });
      return;
    }

    setIsLoading(true);
    try {
      const otpString = otp.join('');
      console.log('Mock: Changing password with OTP:', otpString, 'Email:', email);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful response
      setSuccessMessage('Password changed successfully! Redirecting to login...');
      setErrors({});
      
      // Clear form data
      setOtp(['', '', '', '']);
      setNewPassword('');
      
      // Redirect to login page after successful password change
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.error('Mock reset password error:', error);
      setErrors({ general: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setIsResending(true);
    setErrors({});
    
    try {
      console.log('Mock: Resending OTP to:', email);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Mock successful response
      // Clear current OTP
      setOtp(['', '', '', '']);
      if (otpRefs[0].current) {
        otpRefs[0].current.focus();
      }
      
      setSuccessMessage('OTP sent successfully!');
      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Mock resend OTP error:', error);
      setErrors({ general: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center py-2 sm:py-4 md:py-6 px-2 sm:px-4 lg:px-8 relative"
      style={{
        backgroundImage: 'url("/city-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Blurred Background Overlay */}
      <div 
        className="absolute inset-0 backdrop-blur-sm bg-black/30"
        style={{ filter: 'blur(2px)' }}
      ></div>
      
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-lg shadow-lg p-3 sm:p-4 md:p-6 mx-2 sm:mx-4 relative z-10">
        {/* Header */}
        <div className="mb-3 sm:mb-4 md:mb-6">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4 text-center">
            Forgot Password
          </h1>

          {/* Success Message */}
          {successMessage && (
            <div className="mb-2 sm:mb-3 p-2 sm:p-3 bg-green-50 border border-green-200 rounded-md">
              <p className="text-xs sm:text-sm text-green-600">{successMessage}</p>
            </div>
          )}

          {/* General Error Message */}
          {errors.general && (
            <div className="mb-2 sm:mb-3 p-2 sm:p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-xs sm:text-sm text-red-600">{errors.general}</p>
            </div>
          )}
          
          {/* Email Section */}
          <div className="mb-3 sm:mb-4">
            <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
              {otpSent ? 'We have sent an OTP to your email id' : 'Enter your email to receive an OTP'}
            </p>
            <div className="flex items-center gap-2">
              {isEditingEmail ? (
                <div className="flex items-center gap-1 sm:gap-2 w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-2 py-1 sm:py-2 border border-gray-300 rounded text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button
                    onClick={handleEmailSave}
                    disabled={isLoading}
                    className="text-green-600 hover:text-green-700 disabled:opacity-50 text-xs sm:text-sm font-medium whitespace-nowrap px-1"
                  >
                    {isLoading ? 'Sending...' : 'Save'}
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-1 sm:gap-2 w-full">
                  <span className="text-gray-900 font-medium text-xs sm:text-sm md:text-base break-all flex-1">{email}</span>
                  <button
                    onClick={handleEmailEdit}
                    className="text-green-600 hover:text-green-700 text-xs sm:text-sm font-medium whitespace-nowrap px-1"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
            {errors.email && (
              <p className="text-xs text-red-600 mt-1">{errors.email}</p>
            )}
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              to set your new password.
            </p>
          </div>
        </div>

        {/* OTP Section */}
        <div className="mb-3 sm:mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2 text-center">
            Enter OTP
          </label>
          <div className="flex gap-1 sm:gap-2 justify-center">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={otpRefs[index]}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleOtpKeyDown(index, e)}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-center text-sm sm:text-base md:text-lg font-medium border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder=""
                disabled={!otpSent}
              />
            ))}
          </div>
          {errors.otp && (
            <p className="text-xs sm:text-sm text-red-600 mt-1 text-center">{errors.otp}</p>
          )}
        </div>

        {/* New Password Section */}
        <div className="mb-4 sm:mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 text-center">
            Set New Password
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Set New Password"
            disabled={!otpSent}
            className="w-full px-2 sm:px-3 py-2 sm:py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400 text-sm disabled:bg-gray-50 disabled:cursor-not-allowed"
          />
          {errors.password && (
            <p className="text-xs sm:text-sm text-red-600 mt-1">{errors.password}</p>
          )}
        </div>

        {/* Change Password Button */}
        <button
          onClick={handleChangePassword}
          disabled={isLoading || !otpSent}
          className="w-full bg-green-600 hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-green-600 text-white font-medium py-2 sm:py-2.5 px-3 sm:px-4 rounded-md transition-colors duration-700 ease-in-out flex items-center justify-center gap-1 sm:gap-2 text-sm"
        >
          {isLoading ? (
            <>
              <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Changing...</span>
            </>
          ) : (
            <>
              Change Password
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>

        {/* Resend OTP Section */}
        <div className="mt-4 sm:mt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
            Did not receive the OTP? Request Again
          </p>
          <button
            onClick={handleResendOtp}
            disabled={isResending}
            className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors duration-200 font-medium text-xs sm:text-sm min-w-[100px] sm:min-w-[120px]"
          >
            {isResending ? 'Sending...' : 'Resend OTP'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
