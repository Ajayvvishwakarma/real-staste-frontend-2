import React, { useState } from 'react';
import { PhoneIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Request_a_call from '../Components/help/Request_a_call';

const HelpCenter = () => {
  const [showRequestCallModal, setShowRequestCallModal] = useState(false);

  const handleRequestCall = () => {
    setShowRequestCallModal(true);
  };

  const handleFAQClick = () => {
    // Navigate to FAQ page or show FAQ content
    window.open('/faq', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
        {/* Header */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <Link 
            to="/help-center"
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-gray-800 mb-4 sm:mb-6 block hover:text-green-600 transition-colors duration-200 cursor-pointer touch-manipulation py-2 text-left"
          >
            Help Center
          </Link>
          
          {/* Sales Enquiry Section */}
          <div className="text-left">
            <Link 
              to="/sales-enquiry"
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-gray-800 mb-3 sm:mb-4 pb-2 border-b-2 border-green-500 block hover:text-green-600 transition-colors duration-200 cursor-pointer touch-manipulation py-2"
            >
              Sales Enquiry
            </Link>
            
            {/* Contact Hours */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-2 sm:mb-3">
              Toll Free | 9:30 AM to 6:30 PM
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-3 sm:mb-4 md:mb-5">
              (Mon-Sun)
            </p>
            
            {/* Phone Numbers */}
            <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
              <a
                href="tel:8960399597"
                className="text-green-600 font-bold text-base sm:text-lg md:text-xl lg:text-2xl hover:text-green-700 transition-colors duration-200 block mb-2 sm:mb-3 md:mb-4 cursor-pointer touch-manipulation py-1"
              >
                8960399597
              </a>
              
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-2 sm:mb-3">
                For International Users
              </p>
              <a
                href="tel:+919650017061"
                className="text-green-600 font-bold text-base sm:text-lg md:text-xl lg:text-2xl hover:text-green-700 transition-colors duration-200 block cursor-pointer touch-manipulation py-1"
              >
                +919650017061
              </a>
            </div>
            
            {/* Request Call Back Button */}
            <button
              onClick={handleRequestCall}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 sm:py-4 md:py-5 lg:py-6 px-4 sm:px-5 md:px-6 lg:px-8 rounded-lg transition-all duration-200 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 lg:mb-8 shadow-md hover:shadow-lg transform hover:scale-105 text-sm sm:text-base md:text-lg lg:text-xl touch-manipulation min-h-[48px] sm:min-h-[52px] md:min-h-[56px]"
            >
              <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 mr-2 sm:mr-3" />
              Request A Call Back
            </button>
            
            {/* FAQ Link */}
            <div className="text-center">
              <button
                onClick={handleFAQClick}
                className="text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm md:text-base lg:text-lg hover:underline transition-colors duration-200 cursor-pointer touch-manipulation py-2 sm:py-3 md:py-4 min-h-[44px] flex items-center justify-center w-full"
              >
                To check all the FAQ click here
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Request Call Modal */}
      <Request_a_call
        isOpen={showRequestCallModal}
        onClose={() => setShowRequestCallModal(false)}
      />
    </div>
  );
};

export default HelpCenter;