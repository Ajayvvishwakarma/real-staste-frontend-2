
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getCityData, formatCityName } from '../data/cityPropertyData';

const PropertyListingPage2 = () => {
  const { city } = useParams();
  const location = useLocation();
  
  // Determine property type from URL
  const currentPropertyType = location.pathname.includes('/rent') ? 'rent' : 'buy';
  
  // Get city-specific data based on property type
  const cityData = getCityData(city, currentPropertyType);
  const formattedCity = formatCityName(city) || cityData.displayName;

  // Use city-specific properties instead of mock data
  const cityListings = cityData.properties;

return (
  <div className="w-full bg-[#f7f7f7] py-6  ">
    <div className="space-y-6 mt-4">
      {cityListings.map(listing => (
  <div key={listing.id} className="bg-white rounded-xl shadow border border-gray-200 p-4 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/4 flex-shrink-0">
              <div className="relative">
                {listing.image ? (
                  <>
                    <img src={listing.image} alt="Property" className="rounded-lg w-full h-40 object-cover" />
                    {listing.postedOn && (
                      <span className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">Posted on : {listing.postedOn}</span>
                    )}
                    <span className="absolute top-2 right-2 bg-gray-900 bg-opacity-70 text-white text-xs px-2 py-1 rounded">4 Photos</span>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center bg-orange-100 rounded-lg w-full h-40">
                    <span className="text-orange-600 text-sm  px-3 mb-2">No Property Images Available</span>
                    <button className="bg-white border border-orange-400 text-orange-600 px-3 py-1 text-sm rounded">Request Photos</button>
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="font-semibold text-blue-700 text-sm leading-tight hover:underline cursor-pointer">{listing.title}</span>
                  <span className="text-red-600 font-bold text-sm ml-10">{listing.price}</span>
                </div>
                <div className="flex gap-12 text-sm text-gray-700 mb-2 whitespace-nowrap">
                  <span><span className="font-semibold">Plot / Land Area</span>: <br/>{listing.area}</span>
                  <span><span className="font-semibold">Ownership</span>:<br/> {listing.ownership}</span>
                  <span><span className="font-semibold">Location</span>:<br/> {listing.location}</span>
                  <span><span className="font-semibold">Sale Type</span>: <br/>{listing.saleType}</span>
                </div>
                <div className="text-gray-600 text-sm my-2">
                  {listing.description.length > 120 ? listing.description.slice(0,120) + "...more" : listing.description}
                </div>
              </div>
             
            </div>
          </div>
          {/* Agent/Contact section below both image and right content, full width */}
          <div className="flex items-center justify-between bg-[#fafafa] px-3 py-1 rounded ">
            <div className="flex items-center gap-3">
                {/* Show colored initial for agent logo, not image */}
                <span className="w-8 h-8 flex items-center justify-center rounded bg-blue-400 text-white font-bold text-sm ">{listing.agent && listing.agent[0] ? listing.agent[0].toUpperCase() : 'N'}</span>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-700 text-sm leading-tight">{listing.agent}</span>
                <span className="text-gray-500 text-sm leading-tight">{listing.agentType}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 border border-blue-400 text-blue-700 px-4 py-1 rounded font-semibold hover:bg-blue-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h8M8 14h8"/></svg>
                {listing.agentType === 'Owner' ? 'Contact Owner' : 'Contact Agent'}
              </button>
              <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-1 rounded font-semibold hover:bg-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 15h8M8 11h8"/></svg>
                View Phone No.
              </button>
              
            </div>
          </div>
           {listing.similarCount > 0 && (
                <div className="">
                  <span className="text-blue-700 text-sm font-semibold cursor-pointer flex items-center bg-blue-50 px-2 py-2 rounded">
                    {listing.similarCount} Similar listings by {listing.agent} Real Estate Developer in this area
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
                  </span>
                </div>
              )}
        </div>
      ))}
      {/* Screenshot-matching Builder Card */}
      <div className="bg-white rounded-xl shadow border border-gray-200 p-4 flex flex-col  gap-4">
       <div className='flex flex-row gap-4'>
         <div className="w-full md:w-1/4 flex-shrink-0">
          <div className="relative">
            <img src=" https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Property" className="rounded-lg w-full h-40 object-cover" />
            <span className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">Posted on : 11 Aug, 2025</span>
            <span className="absolute top-2 right-2 bg-gray-900 bg-opacity-70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">2 <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"/><circle cx="12" cy="12" r="3"/></svg></span>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <span className="font-semibold text-blue-700 text-sm leading-tight hover:underline cursor-pointer">1800 Sq.ft. Residential Land / Plots for Sale in Patanjali Yogpeeth, {formattedCity}</span>
            <span className="text-red-600 font-bold text-sm ml-auto">₹ 45 Lac</span>
            <div className="flex flex-wrap gap-6 text-sm text-gray-700 mb-2 mt-2">
              <span><span className="font-semibold">Plot / Land Area</span>: 1800 sq.ft</span>
              <span><span className="font-semibold">Ownership</span>: Freehold</span>
              <span><span className="font-semibold">Location</span>: Patanjali Yogpeeth, {formattedCity}</span>
              <span><span className="font-semibold">Sale Type</span>: New</span>
            </div>
            <div className="text-gray-600 text-sm ">1800 Sq.ft. Residential Land / land / plots available for sale at prime location of Patanjali Yogpeeth, {formattedCity} in Rs. 45 Lac. Interested person can send mail or cotact for more details.</div>
          </div>
         
        </div>
       </div>
        <div className="flex items-center">
            <span className="bg-yellow-400 text-white text-xs px-1 py-1 rounded-full font-semibold">Gold Member</span>
           
          </div>
          <div className="flex flex-row gap-2 mb-2">  
            <div className='flex gap-2'>
            <div className='h-6 w-6 text-green-900 text-center rounded-lg bg-blue-400'> D</div>
           <div className='flex flex-col'>
             <span className="font-semibold text-gray-700">Devbhoomi Developers & Realtors</span>
            <span className="text-gray-500 text-xs">Builder</span>
           </div>
           </div>
          <div className='flex flex-row gap-4 ml-auto'>
              <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded font-semibold hover:bg-blue-200">Contact Builder</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700">View Phone No.</button>
          </div>
          </div>
          <div className="mt-2">
            <span className="text-blue-700 text-base font-semibold cursor-pointer flex items-center bg-blue-50 px-2 rounded">2 Similar listings by Devbhoomi Developers & Realtors in this area <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg></span>
          </div>
      </div>
      {/* Screenshot-matching Agent Card */}
      <div className="bg-white rounded-xl shadow border border-gray-200 p-4 flex flex-col  gap-4">
        <div className='flex flex-row gap-4'>
        <div className="w-full md:w-1/4 flex-shrink-0">
          <div className="relative">
            <img src=" https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Property" className="rounded-lg w-full h-40 object-cover" />
            <span className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">Posted on : 11 Aug, 2025</span>
            <span className="absolute top-2 right-2 bg-gray-900 bg-opacity-70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">12 <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"/><circle cx="12" cy="12" r="3"/></svg></span>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="text-gray-600 font-semibold text-sm ">{formattedCity} Paradise</div>
            <span className="font-semibold text-blue-700 text-sm leading-tight hover:underline cursor-pointer">900 Sq.ft. Residential Land / Plots for Sale in Patanjali Yogpeeth, {formattedCity}</span>
            <span className="text-red-600 font-bold text-sm ml-auto">₹ 35 Lac</span>
            <div className="flex flex-wrap gap-12 text-sm text-gray-700 my-1">
              <span><span className="font-semibold">Plot / Land Area</span>: <br/>900 sq.ft</span>
              <span><span className="font-semibold">Ownership</span>:<br/> Freehold</span>
              <span><span className="font-semibold">Location</span>: <br/>Patanjali Yogpeeth, {formattedCity}</span>
              <span><span className="font-semibold">Sale Type</span>: <br/>New</span>
            </div>
            <div className="text-gray-600 text-sm mb-2">This well-located Residential Land / land / plots in a land / plot area of 900 Sq.ft.. The land is available for sale in prime location at Patanjali Yogpeeth, {formattedCity}. In Residential Land / land / plots point {formattedCity} is best location.</div>
          </div>
       
        </div>
         </div>
           <div className="flex items-center">
            <span className="bg-yellow-400 text-white text-xs px-1 py-1 rounded-full font-semibold">Gold Member</span>
           
          </div>
          <div className="flex flex-row ">
            <div className='flex flex-center gap-2'>
             <div className='h-6 w-6 text-green-900 text-center rounded-lg bg-blue-400'> B</div>
            <div className='flex flex-col'>
             <span className="text-sm text-gray-700">SHREE JEE INVESTMENT SOLUTION</span>
            <span className="text-gray-500 text-sm">Agent</span>
           </div>
          </div>
          <div className='gap-3 flex flex-row ml-auto'>
              <button className="bg-blue-100 text-blue-700 px-4 py-1 ml-20 rounded font-semibold hover:bg-blue-200">Contact Agent</button>
            <button className="bg-blue-600 text-white px-4 py-1 rounded font-semibold hover:bg-blue-700">View Phone No.</button>
          </div>
          </div>
          
          <div className="mt-2">
            <span className="text-blue-700 text-base font-semibold cursor-pointer flex items-center bg-blue-50 px-2  rounded">8 Similar listings by SHREE JEE INVESTMENT SOLUTION in this area <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg></span>
          </div>
      </div>
    </div>
    {/* Add 8 more property cards in the same style below */}
    <div className="space-y-6 mt-4">
      {[...Array(8)].map((_, idx) => {
        // Screenshot-matching card data
        const propertyData = [
          {
            title: `1200 Sq.ft. Residential Land / Plots for Sale in Patanjali Yogpeeth, ${formattedCity}`,
            area: "1200 sq.ft",
            price: "₹ 35 Lac",
            agent: "Devbhoomi Developers & Realtors",
            agentType: "Builder",
            agentInitial: "D",
            similarCount: 2,
          },
          {
            title: `1300 Sq.ft. Residential Land / Plots for Sale in Patanjali Yogpeeth, ${formattedCity}`,
            area: "1300 sq.ft",
            price: "₹ 36 Lac",
            agent: "SHREE JEE INVESTMENT SOLUTION",
            agentType: "Agent",
            agentInitial: "S",
            similarCount: 3,
          },
          {
            title: `1400 Sq.ft. Residential Land / Plots for Sale in Patanjali Yogpeeth, ${formattedCity}`,
            area: "1400 sq.ft",
            price: "₹ 37 Lac",
            agent: "Devbhoomi Developers & Realtors",
            agentType: "Builder",
            agentInitial: "D",
            similarCount: 4,
          },
          {
            title: `1500 Sq.ft. Residential Land / Plots for Sale in Patanjali Yogpeeth, ${formattedCity}`,
            area: "1500 sq.ft",
            price: "₹ 38 Lac",
            agent: "SHREE JEE INVESTMENT SOLUTION",
            agentType: "Agent",
            agentInitial: "S",
            similarCount: 5,
          },
          {
            title: `1600 Sq.ft. Residential Land / Plots for Sale in Patanjali Yogpeeth, ${formattedCity}`,
            area: "1600 sq.ft",
            price: "₹ 39 Lac",
            agent: "Devbhoomi Developers & Realtors",
            agentType: "Builder",
            agentInitial: "D",
            similarCount: 6,
          },
          {
            title: `1700 Sq.ft. Residential Land / Plots for Sale in Patanjali Yogpeeth, ${formattedCity}`,
            area: "1700 sq.ft",
            price: "₹ 40 Lac",
            agent: "SHREE JEE INVESTMENT SOLUTION",
            agentType: "Agent",
            agentInitial: "S",
            similarCount: 7,
          },
          {
            title: `1800 Sq.ft. Residential Land / Plots for Sale in Patanjali Yogpeeth, ${formattedCity}`,
            area: "1800 sq.ft",
            price: "₹ 41 Lac",
            agent: "Devbhoomi Developers & Realtors",
            agentType: "Builder",
            agentInitial: "D",
            similarCount: 8,
          },
          {
            title: `1900 Sq.ft. Residential Land / Plots for Sale in Patanjali Yogpeeth, ${formattedCity}`,
            area: "1900 sq.ft",
            price: "₹ 42 Lac",
            agent: "SHREE JEE INVESTMENT SOLUTION",
            agentType: "Agent",
            agentInitial: "S",
            similarCount: 9,
          },
        ];
        const data = propertyData[idx % propertyData.length];
        return (
          <div key={idx} className="bg-white rounded-xl shadow border border-gray-200 p-4 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/4 flex-shrink-0">
                <div className="relative">
                  <img src={`https://picsum.photos/seed/${idx + 100}/400/200`} alt="Property" className="rounded-lg w-full h-40 object-cover" />
                  <span className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">Posted on : 11 Aug, 2025</span>
                  <span className="absolute top-2 right-2 bg-gray-900 bg-opacity-70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">{data.similarCount} <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"/><circle cx="12" cy="12" r="3"/></svg></span>
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-semibold text-blue-700 text-sm leading-tight hover:underline cursor-pointer">{data.title}</span>
                    <span className="text-red-600 font-bold text-sm ml-10">{data.price}</span>
                  </div>
                  <div className="flex gap-12 text-sm text-gray-700 mb-2 whitespace-nowrap">
                    <span><span className="font-semibold">Plot / Land Area</span>: <br/>{data.area}</span>
                    <span><span className="font-semibold">Ownership</span>:<br/> Freehold</span>
                    <span><span className="font-semibold">Location</span>:<br/> Patanjali Yogpeeth, {formattedCity}</span>
                    <span><span className="font-semibold">Sale Type</span>: <br/>New</span>
                  </div>
                  <div className="text-gray-600 text-sm my-2">{data.area} Residential Land / land / plots available for sale at prime location of Patanjali Yogpeeth, {formattedCity} in Rs. {data.price}. Interested person can send mail or contact for more details.</div>
                </div>
              </div>
            </div>
            {/* Agent/Contact section below both image and right content, full width */}
            <div className="flex items-center justify-between bg-[#fafafa] px-3 py-1 rounded ">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded bg-green-200 text-green-700 font-bold text-sm ">{data.agentInitial}</span>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700 text-sm leading-tight">{data.agent}</span>
                  <span className="text-gray-500 text-sm leading-tight">{data.agentType}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1 border border-blue-400 text-blue-700 px-4 py-1 rounded font-semibold hover:bg-blue-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h8M8 14h8"/></svg>
                  {data.agentType === 'Builder' ? 'Contact Builder' : 'Contact Agent'}
                </button>
                <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-1 rounded font-semibold hover:bg-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 15h8M8 11h8"/></svg>
                  View Phone No.
                </button>
              </div>
            </div>
            <div className="">
              <span className="text-blue-700 text-sm font-semibold cursor-pointer flex items-center bg-blue-50 px-2 py-2 rounded">
                {data.similarCount} Similar listings by {data.agent} in this area
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
              </span>
            </div>
          </div>
        );
      })}
    </div>
    
  </div>
  );
};

export default PropertyListingPage2;
