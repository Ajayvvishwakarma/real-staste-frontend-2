import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { availableCities } from "../data/cityPropertyData";

const propertyTypes = ["Residential plot"];
const budgets = ["Budget"];
const ownerships = ["Ownership"];

const BuyProperty_header = () => {
  const { city, locality: urlLocality } = useParams();
  const [selectedType, setSelectedType] = useState(propertyTypes[0]);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState(budgets[0]);
  const [showBudgetDropdown, setShowBudgetDropdown] = useState(false);
  const [minBudget, setMinBudget] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const [selectedOwnership, setSelectedOwnership] = useState(ownerships[0]);
  const [showOwnershipDropdown, setShowOwnershipDropdown] = useState(false);
  const [locality, setLocality] = useState("");
  const [selectedCity, setSelectedCity] = useState("Buy");
  const navigate = useNavigate();

  // Helper function to format city name for display
  const formatCityName = (citySlug) => {
    if (!citySlug) return "Buy";
    // Convert URL slug back to proper city name
    return citySlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Update selected city when URL params change
  useEffect(() => {
    if (city) {
      setSelectedCity(formatCityName(city));
    }
    if (urlLocality) {
      setLocality(formatCityName(urlLocality));
    }
  }, [city, urlLocality]);

  const handleBuyCityClick = (city) => {
    if (city === "Buy") {
      setSelectedCity("Buy");
      navigate("/buy");
    } else {
      setSelectedCity(city);
      const citySlug = city.toLowerCase().replace(/\s+/g, "-");
      navigate(`/buy/${citySlug}`);
    }
  };

  const handleSearch = () => {
    const citySlug = selectedCity === "Buy" ? "" : selectedCity.toLowerCase().replace(/\s+/g, "-");
    const localityParam = locality ? `/${locality.toLowerCase().replace(/\s+/g, "-")}` : "";
    navigate(`/buy${citySlug ? `/${citySlug}` : ""}${localityParam}`);
  };

  return (
    <div
      className="flex flex-col bg-[#1976c9] py-10 mt-20 w-full md:flex-row items-center md:items-stretch md:justify-center"
      style={{ width: "100%" }}
    >
      {/* Buy Dropdown */}
      <div className="relative w-full  md:w-auto">
        <select
          className="px-4 py-1 bg-white border-r border-r-gray-300 text-black text-lg rounded-l w-full md:w-auto"
          value={selectedCity}
          onChange={(e) => handleBuyCityClick(e.target.value)}
        >
          <option value="Buy">Buy</option>
          {availableCities.map((city) => (
            <option key={city.slug} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
      {/* Locality Input */}
      <div className="flex items-center mr-5 bg-white rounded-r px-2 py-1 w-full md:w-1/3">
        {" "}
        {/* removed rounded-lg */}
        <input
          type="text"
          placeholder="Enter locality"
          className="outline-none w-full bg-transparent text-black"
          value={locality}
          onChange={(e) => setLocality(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch} className="ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer"
          >
            <circle
              cx="11"
              cy="11"
              r="8"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <line
              x1="21"
              y1="21"
              x2="16.65"
              y2="16.65"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
      <div className="flex ml-38 flex-col md:flex-row md:space-x-4">
        {/* Property Type Dropdown */}
        <div className="relative">
          <div
            className="rounded-lg px-4 py-1 bg-[#e3f3ff] text-black font-medium w-full md:w-auto cursor-pointer flex items-center"
            onClick={() => setShowTypeDropdown(true)}
          >
            {selectedType}
            <svg className="w-4 h-4 ml-2 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          {showTypeDropdown && (
            <div className="absolute left-0 top-full mt-2 w-[350px] bg-white rounded-xl shadow-2xl z-30 p-6">
              <div className="font-sm text-gray-800 mb-2 text-sm">RESIDENTIAL</div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-[#e3f3ff] px-4 py-2 rounded-full text-black font-sm flex items-center">
                  Residential Plots
                  <svg className="w-4 h-4 ml-2 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M16 12l-4-4-4 4"/></svg>
                </span>
                <span className="ml-2 text-black">✔</span>
              </div>
              <div className="text-right">
                <button className="text-blue-600 font-semibold" onClick={() => setShowTypeDropdown(false)}>DONE</button>
              </div>
            </div>
          )}
        </div>
        {/* Budget Dropdown */}
        <div className="relative">
          <div
            className="rounded-lg px-4 py-1 bg-white text-black font-medium w-full md:w-auto cursor-pointer flex items-center"
            onClick={() => setShowBudgetDropdown(true)}
          >
            {(minBudget && maxBudget) ? `${minBudget} - ${maxBudget}` : selectedBudget}
            <svg className="w-4 h-4 ml-2 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          {showBudgetDropdown && (
            <div className="absolute left-0 top-full mt-2 w-[354px] bg-white rounded-xl shadow-2xl z-30 p-0" style={{borderRadius:'10px', boxShadow:'0 2px 16px rgba(0,0,0,0.15)'}}>
              {/* Arrow on top */}
              <div style={{position:'absolute',top:'-12px',left:'50%',transform:'translateX(-50%)'}}>
                <svg width="32" height="16" viewBox="0 0 32 16"><polygon points="16,0 32,16 0,16" fill="#fff"/></svg>
              </div>
              <div className="pt-4 pb-2 px-4">
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-gray-800">Min</span>
                  <span className="font-semibold text-gray-800">Max</span>
                </div>
                <div className="flex gap-8" style={{maxHeight:'220px',overflowY:'auto'}}>
                  <div className="flex flex-col gap-1 w-1/2 pr-2" style={{borderRight:'2px solid #eee'}}>
                    {["4000","6000","10,000","15,000","20,000","25,000","30,000","40,000","60,000","80,000","1 lac","1.5 lac","2 lacs","5 lacs","10 lacs"].map(val => (
                      <label key={val} className="flex items-center gap-2 cursor-pointer text-gray-700 text-[15px]">
                        <input type="radio" name="minBudget" value={val} checked={minBudget===val} onChange={()=>setMinBudget(val)} className="accent-gray-300" style={{width:'18px',height:'18px'}} />
                        <span>{val}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex flex-col gap-1 w-1/2 pl-2">
                    {["4000","6000","10,000","15,000","20,000","25,000","30,000","40,000","60,000","80,000","1 lac","1.5 lac","2 lacs","5 lacs","10 lacs"].map(val => (
                      <label key={val} className="flex items-center gap-2 cursor-pointer text-gray-700 text-[15px]">
                        <input type="radio" name="maxBudget" value={val} checked={maxBudget===val} onChange={()=>setMaxBudget(val)} className="accent-gray-300" style={{width:'18px',height:'18px'}} />
                        <span>{val}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end pt-2 pb-1">
                  <button className="text-blue-600 font-semibold text-[15px]" style={{letterSpacing:'0.5px'}} onClick={() => {setShowBudgetDropdown(false); setSelectedBudget(minBudget && maxBudget ? `${minBudget} - ${maxBudget}` : 'Budget');}}>DONE</button>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Ownership Dropdown */}
        <div className="relative">
          <div
            className="rounded-lg px-4 py-1 bg-white text-black font-medium w-full md:w-auto cursor-pointer flex items-center"
            onClick={() => setShowOwnershipDropdown(true)}
          >
            {selectedOwnership}
            <svg className="w-4 h-4 ml-2 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          {showOwnershipDropdown && (
            <div className="absolute left-0 top-full mt-2 w-[358px] bg-white rounded-xl shadow-2xl z-30 p-0" style={{borderRadius:'10px', boxShadow:'0 2px 16px rgba(0,0,0,0.15)'}}>
              {/* Arrow on top */}
              <div style={{position:'absolute',top:'-12px',left:'50%',transform:'translateX(-50%)'}}>
                <svg width="32" height="16" viewBox="0 0 32 16"><polygon points="16,0 32,16 0,16" fill="#fff"/></svg>
              </div>
              <div className="pt-6 pb-2 px-4">
                <div className="flex justify-between items-center mb-2">
                  {["Individual", "Agent", "Builder"].map(val => (
                    <button
                      key={val}
                      className={`px-6 py-2 rounded-full border text-[16px] font-medium transition-colors ${selectedOwnership===val ? 'bg-[#e3f3ff] border-blue-400 text-blue-700' : 'bg-white border-gray-300 text-gray-700'}`}
                      onClick={() => setSelectedOwnership(val)}
                    >
                      {val}
                    </button>
                  ))}
                </div>
                <div className="flex justify-end pt-2 pb-1">
                  <button className="text-blue-600 font-semibold text-[15px]" style={{letterSpacing:'0.5px'}} onClick={() => setShowOwnershipDropdown(false)}>DONE</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default BuyProperty_header;
