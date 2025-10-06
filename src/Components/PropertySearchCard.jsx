import React from 'react';

const PropertySearchCard = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow border border-gray-200 p-4 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Image Section */}
        <div className="w-full md:w-1/4 flex-shrink-0">
          <div className="relative">
            {property.image ? (
              <>
                <img
                  src={property.image}
                  alt="Property"
                  className="rounded-lg w-full h-40 object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  Posted on : {property.postedOn}
                </span>
                <span className="absolute top-2 right-2 bg-gray-900 bg-opacity-70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  2
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </span>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center bg-orange-100 rounded-lg w-full h-40">
                <span className="text-orange-600 text-lg mb-2">
                  No Property Images Available
                </span>
                <button className="bg-white border border-orange-400 text-orange-600 px-3 py-1 rounded">
                  Request Photos
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Property Details Section */}
        <div className="flex-1 flex flex-col">
          {property.project && (
            <div className="text-gray-600 font-semibold text-base mb-1">
              {property.project}
            </div>
          )}
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="font-semibold text-blue-700 text-sm leading-tight hover:underline cursor-pointer">
              {property.title}
            </span>
            <span className="text-red-600 font-bold text-sm ml-auto">
              {property.price}
            </span>
          </div>
          
          {/* Property Details Grid */}
          <div className="flex flex-wrap gap-12 text-sm text-gray-700 mb-2">
            <span>
              <span className="font-semibold">Plot / Land Area</span>:
              <br /> {property.area}
            </span>
            <span>
              <span className="font-semibold">Ownership</span>: <br />
              {property.ownership}
            </span>
            <span>
              <span className="font-semibold">Location</span>:<br />{" "}
              {property.location}
            </span>
            <span>
              <span className="font-semibold">Sale Type</span>:<br />{" "}
              {property.saleType}
            </span>
          </div>

          {/* Property Description */}
          <div className="text-gray-600 text-sm mb-2">
            {property.description.length > 120
              ? property.description.slice(0, 120) + "...more"
              : property.description}
          </div>
        </div>
      </div>

      {/* Agent/Contact Section */}
      <div className="flex text-left items-center justify-between bg-[#fafafa] px-3 rounded">
        <div className="flex items-center flex-col gap-3">
          {property.agentBadge && (
            <span className="bg-yellow-400 mr-12 text-white text-xs px-1 rounded-full font-semibold">
              {property.agentBadge}
            </span>
          )}
          <div className="flex items-center gap-2">
            {property.agentLogo && (
              <img
                src={property.agentLogo}
                alt="Agent Logo"
                className="w-8 h-8 rounded border"
              />
            )}
            <div className="flex flex-col">
              <span className="font-sm text-gray-700 text-sm leading-loose">
                {property.agent}
              </span>
              <span className="text-gray-500 text-sm leading-loose">
                {property.agentType}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 border border-blue-400 text-blue-700 px-4 py-1 rounded font-semibold hover:bg-blue-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 15V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h8M8 14h8"
              />
            </svg>
            Contact Agent
          </button>
          <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-1 rounded font-semibold hover:bg-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 15h8M8 11h8"
              />
            </svg>
            View Phone No.
          </button>
        </div>
      </div>

      {/* Similar Listings Section */}
      {property.similarCount > 0 && (
        <div className="w-full bg-blue-50 border border-blue-200 rounded-b-xl px-4 py-2 flex items-center justify-between mt-0">
          <span className="text-blue-700 text-sm font-semibold cursor-pointer flex items-center">
            {property.similarCount} Similar listings by {property.agent} in this area
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
      )}
    </div>
  );
};

export default PropertySearchCard;