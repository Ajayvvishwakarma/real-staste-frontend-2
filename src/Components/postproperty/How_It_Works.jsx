import React from 'react'

const How_It_Works = () => {
  return (
    <div className="bg-[#f7f7f7] pt-10 pb-20 px-6 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">How It Works?</h2>
        <p className="text-center text-gray-600 text-sm mb-10 max-w-4xl mx-auto px-2 sm:px-0">
          RealEstateIndia offers an easy process that helps list your property quickly and efficiently. This will ensure whether you want to rent your property online or sell it, can be done with ease through these simple steps given below:
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch px-2 sm:px-0">
          {/* Step 1 */}
          <div className="bg-white rounded-bl-3xl rounded-tr-3xl shadow-2xl p-4 pl-6 sm:pl-4 flex-1 min-w-[220px] max-w-xs flex flex-col items-center relative transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] mx-2 sm:mx-0">
            <div className="absolute left-0 top-0">
              <div className="bg-green-600 text-white px-4 py-2 rounded-br-3xl font-bold text-sm shadow-lg">Step 1</div>
            </div>
            <div className="mb-4 w-12 h-12 flex items-center justify-center mt-8">
              {/* Home icon */}
              <svg width="40" height="40" fill="none" stroke="#1a4ca3" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 10.5L12 4l9 6.5"/><path d="M4 10v10h16V10"/><path d="M9 21V14h6v7"/></svg>
            </div>
            <div className="w-full text-left">
              <h3 className="text-lg font-semibold text-center mb-2">Post your Property Ad</h3>
              <p className="text-gray-600 text-center text-sm">After logging in, Click on <span className="font-semibold text-gray-800">"Post Property"</span> and enter all necessary details about your property such as locality name, amenities and upload the photos of the property.</p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="bg-white rounded-bl-3xl rounded-tr-3xl shadow-2xl p-4 pl-6 sm:pl-4 flex-1 min-w-[220px] max-w-xs flex flex-col items-center relative transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] mx-2 sm:mx-0">
            <div className="absolute left-0 top-0">
              <div className="bg-green-600 text-white px-4 py-2 rounded-br-3xl font-bold text-sm shadow-lg">Step 2</div>
            </div>
            <div className="mb-4 w-12 h-12 flex items-center justify-center mt-8">
              {/* Dashboard icon */}
              <svg width="40" height="40" fill="none" stroke="#1a4ca3" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <div className="w-full text-left">
              <h3 className="text-lg font-semibold text-center mb-2">Access Responses Through Your Dashboard</h3>
              <p className="text-gray-600 text-center text-sm">You can then monitor the <span className="font-semibold text-gray-800">responses in your dashboard</span> and reach the contact details of interested buyers or tenants.</p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="bg-white rounded-bl-3xl rounded-tr-3xl shadow-2xl p-4 pl-6 sm:pl-4 flex-1 min-w-[220px] max-w-xs flex flex-col items-center relative transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] mx-2 sm:mx-0">
            <div className="absolute left-0 top-0">
              <div className="bg-green-600 text-white px-4 py-2 rounded-br-3xl font-bold text-sm shadow-lg">Step 3</div>
            </div>
            <div className="mb-4 w-12 h-12 flex items-center justify-center mt-8">
              {/* Handshake icon */}
              <svg width="40" height="40" fill="none" stroke="#1a4ca3" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 13l-4-4a3 3 0 014-4l4 4"/><path d="M16 13l4-4a3 3 0 00-4-4l-4 4"/><path d="M12 17v-5"/></svg>
            </div>
            <div className="w-full text-left">
              <h3 className="text-lg font-semibold text-center mb-2">Connect with Buyers/Tenants</h3>
              <p className="text-gray-600 text-center text-sm">Negotiating with potential buyers or tenants is the final step. <span className="font-semibold text-gray-800">Connect directly</span> with the interested buyer or tenants without any third party.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default How_It_Works
