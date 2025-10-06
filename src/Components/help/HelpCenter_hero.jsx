
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HelpCenter_hero = () => {
  return (
    <div className="w-full pb-10  bg-gray-100">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-green-900 to-green-600 py-12 shadow-md">
        <h1 className="text-white text-3xl md:text-4xl font-semibold text-center mb-8">We're here to Help</h1>
        <div className="flex justify-center">
          <SearchBar />
        </div>
      </div>
      {/* FAQ Cards Section */}
  <div className="w-full  bg-gray-100">
      {/* FAQ Cards Section */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:gap-15 gap-8 pt-20 px-4 md:px-0">
        {/* Buyer FAQ Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex-1 max-w-md flex flex-col items-center">
          <div className="mb-4">
            <svg width="48" height="48" fill="none" stroke="#1976d2" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="10" r="4"/><path d="M4 20c0-4 8-4 8-4s8 0 8 4"/></svg>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-center">Buyer FAQ</h2>
          <p className="text-gray-600 text-center mb-6">Question/Answers to Help You Find & Shortlist Your Perfect Property.</p>
          <Link to="/buyer-faq" className="bg-gradient-to-r from-green-600 to-black hover:from-black hover:to-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105">Know more</Link>
        </div>
        {/* Seller FAQ Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex-1 max-w-md flex flex-col items-center">
          <div className="mb-4">
            <svg width="48" height="48" fill="none" stroke="#43a047" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 9V7a5 5 0 0 0-10 0v2"/><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="12" cy="15" r="2"/></svg>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-center">Seller FAQ</h2>
          <p className="text-gray-600 text-center mb-6">Question/Answers to Help You Advertise Properties, Search Property Leads & Grow Your Business.</p>
          <Link to="/seller-faq" className="bg-gradient-to-r from-green-600 to-black hover:from-black hover:to-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105">Know more</Link>
        </div>
      </div>
    </div>
    </div>
  );
};
export default HelpCenter_hero;

// SearchBar component with validation
function SearchBar() {
  const [query, setQuery] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError("Please enter a search term.");
      return;
    }
    setError("");
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form className="flex w-full max-w-xl" onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Enter question or keyword. Example: Payment"
        className="flex-1 px-6 py-2 bg-white rounded-l-lg text-lg focus:outline-none shadow"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-green-600 to-black hover:from-black hover:to-green-600 text-white px-8 py-2 rounded-r-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
      >
        Search
      </button>
      {error && <span className="text-red-500 text-sm ml-4 mt-2">{error}</span>}
    </form>
  );
}
