
import React from 'react';
import { Link } from 'react-router-dom';

const HelpCenter_Navbar = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  return (
    <>
      <nav className="w-full navbar-animated-gradient shadow-lg backdrop-blur sticky top-0 z-50 transition-all duration-300">
        {/* Left: Logo and Title */}
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-2">
          <div className="flex items-center gap-2 sm:gap-4">
            <img src="/abc.png" alt="Bhoomi The Real Estate Logo" className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain" />
          </div>
          {/* Right: Help Link */}
          <div className="flex items-center gap-2 sm:gap-4 text-sm sm:text-base">
            <Link to="tel:+918929175327" className="text-white hover:text-yellow-300 font-semibold hover:underline flex items-center gap-2 transition-colors duration-200">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.06.37 2.09.72 3.08a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.99.35 2.02.59 3.08.72A2 2 0 0 1 21 16.91z"/></svg>
              Help Center
            </Link>
           
            <a href="mailto:help@bhoomitherealestate.com" className="text-white hover:text-yellow-300 font-semibold hover:underline transition-colors duration-200">| Contact Us</a>
          </div>
        </div>
      </nav>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 relative w-full max-w-md border border-gray-200">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl transition-colors duration-200"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Need Help?</h3>
              <div className="flex items-center justify-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors duration-200">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.06.37 2.09.72 3.08a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.99.35 2.02.59 3.08.72A2 2 0 0 1 21 16.91z"/>
                </svg>
                <a href="tel:+918929175327">+91-8929175327</a>
              </div>
              <p className="text-gray-600 text-sm mt-2">9:30AM to 6:00PM IST</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpCenter_Navbar;
