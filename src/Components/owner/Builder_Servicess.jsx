import React from "react";
import { FaBuilding, FaFacebook, FaGoogle } from "react-icons/fa";
import { MdOutlineHandshake } from "react-icons/md";

const Builder_Servicess = () => {
  return (
    <div className="w-full bg-gray-50 py-8 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      {/* Top Intro Banner */}
      <div className="max-w-7xl mx-auto bg-blue-50 rounded-lg p-6 sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            Now Introducing <span className="text-blue-700 font-bold">Owner PRO</span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base mt-1 max-w-xl">
            Get 100% Society/Locality Relevant Leads for Your Property
          </p>
        </div>
        <div className="flex items-center space-x-6 text-sm text-blue-700 font-semibold mt-4 sm:mt-0">
          <svg
            className="w-5 h-5 text-blue-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M3 10h1M3 14h1M3 18h1M3 6h18M21 6v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6M7 6v4m10-4v4"/>
          </svg>
          <span>1800-41-99099</span>
        </div>
      </div>
      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto mt-10 px-2 sm:px-6">
        <h3 className="text-xs sm:text-sm text-center text-gray-400 font-semibold uppercase tracking-widest mb-2">
          Why upgrade my posting?
        </h3>
        <h2 className="text-lg sm:text-3xl font-bold text-center text-gray-900 mb-10 sm:mb-16 max-w-4xl mx-auto">
          Benefits of upgrading your posting on 99acres
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 auto-rows-min">
          {/* Benefit 1 */}
          <article className="bg-white rounded-lg shadow p-6 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold text-lg">
                01.
              </div>
              <h3 className="font-semibold text-sm sm:text-base">
                Appear higher in searches
              </h3>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm">
              Upgraded postings appear higher in search results giving your posting more views and responses
            </p>
          </article>
          {/* Benefit 2 */}
          <article className="bg-white rounded-lg shadow p-6 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-700 font-bold text-lg">
                02.
              </div>
              <h3 className="font-semibold text-sm sm:text-base">
                Hassle free selling/renting
              </h3>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm">
              Relax and sell faster with our dedicated relationship manager assistance
            </p>
          </article>
          {/* Benefit 3 */}
          <article className="bg-white rounded-lg shadow p-6 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-2 items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/16/Facebook-icon-1.png"
                  alt="Facebook"
                  className="w-5 h-5"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
              </div>
              <h3 className="font-semibold text-sm sm:text-base">
                Reach users on social media
              </h3>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm">
              Reach more relevant buyers with Facebook and Google marketing
            </p>
          </article>
        </div>
      </section>
      
    </div>
  );
};
export default Builder_Services;
