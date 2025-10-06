import React from 'react'

const PostProperty = () => {
  return (
    <>
      <div className="w-full bg-[#1756a9] flex flex-col md:flex-row items-center justify-between py-10 px-4 md:px-20 relative overflow-hidden" style={{minHeight: '320px'}}>
        {/* Background Image */}
        <img
          src="/service-banner-bg.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30 transition-all duration-700 scale-105 z-0"
          style={{pointerEvents: 'none'}}
        />
        {/* Left Section */}
        <div className="flex-1 text-white z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">PROPERTY ADVERTISEMENT SOLUTION</h1>
          <h2 className="text-lg md:text-xl font-semibold mb-2">FOR PROPERTY OWNER</h2>
          <p className="mb-4 text-base md:text-lg max-w-lg">As an owner you can choose the best option for property listing<br />and get potential buyers against your properties in your city.</p>
          <div className="mb-6 text-lg md:text-xl font-semibold">
            Customer Care <span className="text-yellow-400">+91-8929175327</span>
          </div>
          <div className="flex gap-2 md:gap-4">
            <button
              className="bg-white text-gray-600 font-semibold px-8 py-3 rounded shadow focus:outline-none border-2 border-white hover:bg-gray-100 transition"
              onClick={() => alert('Agent / Builder clicked!')}
            >
              Agent / Builder
            </button>
            <button
              className="bg-white text-[#1756a9] font-semibold px-8 py-3 rounded shadow focus:outline-none border-2 border-white hover:bg-blue-50 transition"
              onClick={() => alert('Owner / Individual clicked!')}
            >
              Owner / Individual
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex-1 flex items-center justify-center relative z-10 mt-8 md:mt-0">
          <img src="/service-banner-img.png" alt="Property Promotion" className="h-64 md:h-80 object-contain" />
          {/* Overlayed Features */}
          <div className="absolute top-10 right-4 md:right-12 bg-transparent flex flex-col gap-4 text-white text-lg font-medium">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full border-2 border-white bg-[#1756a9] flex items-center justify-center"><span className="w-2 h-2 rounded-full bg-white block"></span></span>
              Higher Visibility
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full border-2 border-white bg-[#1756a9] flex items-center justify-center"><span className="w-2 h-2 rounded-full bg-white block"></span></span>
              Immediate Responses
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full border-2 border-white bg-[#1756a9] flex items-center justify-center"><span className="w-2 h-2 rounded-full bg-white block"></span></span>
              Flawless Transaction
            </div>
          </div>
        </div>
        {/* Background overlay for right image */}
        <div className="absolute inset-0 w-full h-full bg-[#1756a9] opacity-80 pointer-events-none z-0" style={{borderRadius: '0 0 0 0'}}></div>
      </div>

      {/* Pricing Table Section */}
      <div className="w-full flex flex-col items-center py-10 bg-[#f7f7f7]">
        <h2 className="text-2xl md:text-2xl font-semibold text-[#1756a9] mb-6 text-center">Affordable Property Listing Solutions Make RealestateIndia the First Choice of Property Owners</h2>
        <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-4">
            <div className="col-span-1 p-6 font-semibold text-lg border-r border-gray-200 flex items-center">CHOOSE YOUR PLAN</div>
            <div className="col-span-1 p-6 text-center font-semibold text-lg bg-gray-200 border-r border-gray-200 relative">FREE
              <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-200"></span>
            </div>
            <div className="col-span-1 p-6 text-center font-semibold text-lg bg-[#2ca3e6] text-white border-r border-gray-200 relative">PRIORITY LISTING
              <div className="text-lg font-semibold mt-2">₹ 2000</div>
              <div className="text-base">90 days</div>
              <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#2ca3e6]"></span>
            </div>
            <div className="col-span-1 p-6 text-center font-semibold text-lg bg-[#f75c5c] text-white relative">PREMIUM LISTING
              <div className="text-lg font-semibold mt-2">₹ 4000</div>
              <div className="text-base">180 days</div>
              <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#f75c5c]"></span>
            </div>
          </div>
          {/* Table Rows */}
          <div className="grid grid-cols-4 border-t border-gray-200">
            <div className="col-span-1 p-6 border-r border-gray-200">Highlight With Tag</div>
            <div className="col-span-1 p-6 text-center border-r border-gray-200"><span className="text-red-500 text-2xl">&#10006;</span></div>
            <div className="col-span-1 p-6 text-center border-r border-gray-200">Priority</div>
            <div className="col-span-1 p-6 text-center">Premium</div>
          </div>
          <div className="grid grid-cols-4 border-t border-gray-200">
            <div className="col-span-1 p-6 border-r border-gray-200">Property Listing Priority</div>
            <div className="col-span-1 p-6 text-center border-r border-gray-200"><span className="text-green-500 text-2xl">&#10004;</span><br /><span className="text-xs text-gray-500">(Below Paid Listing)</span></div>
            <div className="col-span-1 p-6 text-center border-r border-gray-200"><span className="text-green-500 text-2xl">&#10004;</span><br /><span className="text-xs text-gray-500">(Above Free Listing)</span></div>
            <div className="col-span-1 p-6 text-center"><span className="text-green-500 text-2xl">&#10004;</span><br /><span className="text-xs text-gray-500">(Above Priority Listing)</span></div>
          </div>
          <div className="grid grid-cols-4 border-t border-gray-200">
            <div className="col-span-1 p-6 border-r border-gray-200">Response view</div>
            <div className="col-span-1 p-6 text-center border-r border-gray-200"><span className="text-green-500 text-2xl">&#10004;</span></div>
            <div className="col-span-1 p-6 text-center border-r border-gray-200">Unlimited</div>
            <div className="col-span-1 p-6 text-center">Unlimited</div>
          </div>
          <div className="grid grid-cols-4 border-t border-gray-200">
            <div className="col-span-1 p-6 border-r border-gray-200">Get Property Lead Credit(s)</div>
            <div className="col-span-1 p-6 text-center border-r border-gray-200"><span className="text-red-500 text-2xl">&#10006;</span></div>
            <div className="col-span-1 p-6 text-center border-r border-gray-200">2</div>
            <div className="col-span-1 p-6 text-center">4</div>
          </div>
          <div className="grid grid-cols-4 border-t border-gray-200">
            <div className="col-span-1 p-6 border-r border-gray-200">Higher Position of your Property in Search</div>
            <div className="col-span-1 p-6 text-center border-r border-gray-200"><span className="text-red-500 text-2xl">&#10006;</span></div>
            <div className="col-span-1 p-6 text-center border-r border-gray-200">10 Days<br /><span className="text-xs text-gray-500">(2 days boosting on every 20th day)</span></div>
            <div className="col-span-1 p-6 text-center">40 Days<br /><span className="text-xs text-gray-500">(4 days boosting on every 20th day)</span></div>
          </div>
          {/* Buy Now Buttons */}
          <div className="grid grid-cols-4 border-t border-gray-200">
            <div className="col-span-1"></div>
            <div className="col-span-1"></div>
            <div className="col-span-1 p-6 text-center">
              <button className="bg-[#2ca3e6] text-white font-bold px-8 py-3 rounded shadow hover:bg-blue-600 transition">BUY NOW</button>
            </div>
            <div className="col-span-1 p-6 text-center">
              <button className="bg-[#f75c5c] text-white font-bold px-8 py-3 rounded shadow hover:bg-red-600 transition">BUY NOW</button>
            </div>
          </div>
        </div>
        <div className="text-xs text-gray-500 mt-2">* All given rates are excluding of GST.</div>
      </div>
    </>
  )
}

export default PostProperty
