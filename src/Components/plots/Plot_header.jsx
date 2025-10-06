import React from 'react';
import { FaBuilding, FaRedo } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { getCityPlotData, formatCityName } from '../../data/cityPropertyData';
import Plot_Card_Section from './Plot_Card_Section';

const DropdownMenu = ({ options, onSelect }) => (
  <div className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
    {options.map((opt, idx) => (
      <button
        key={idx}
        className="block w-full text-left px-4 py-2 hover:bg-blue-50 text-gray-700 text-sm"
        onClick={() => onSelect(opt)}
      >
        {opt}
      </button>
    ))}
  </div>
);

const FilterButton = ({ icon, label, isDropdown, options, onSelect, showDropdown, setShowDropdown }) => (
  <div className="relative">
    <button
      className={`flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-200 bg-white hover:bg-blue-50 transition-shadow shadow-sm relative font-medium text-gray-700 min-w-[150px] justify-center text-sm ${isDropdown ? 'pr-8' : ''}`}
      style={{ position: 'relative' }}
      onClick={() => isDropdown && setShowDropdown(showDropdown === label ? null : label)}
    >
      {icon && <span className="text-gray-600 text-xl"><span className="text-sm">{icon}</span></span>}
      <span className="text-sm">{label}</span>
      {isDropdown && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-base">
          <FaChevronDown className="text-sm" />
        </span>
      )}
    </button>
    {showDropdown === label && isDropdown && (
      <DropdownMenu options={options} onSelect={onSelect} />
    )}
  </div>
);

const Plot_header = () => {
  const { city } = useParams();
  const plotData = getCityPlotData(city);
  const formattedCity = formatCityName(city) || plotData.displayName;
  
  // Generate city-specific filter options
  const filterOptions = {
    'Plot Type': ['Residential Plot', 'Commercial Plot', 'Agricultural Land', 'Industrial Plot'],
    'Plot Size': ['< 1000 Sq.ft', '1000-2000 Sq.ft', '2000-5000 Sq.ft', '> 5000 Sq.ft'],
    Budget: ['< ₹20 Lac', '₹20-50 Lac', '₹50 Lac-1 Cr', '> ₹1 Cr'],
    Locality: plotData.localities ? plotData.localities.slice(0, 8).map(loc => loc.name) : [
      'Central Location', 'Premium Area', 'Developing Zone', 'Highway Facing'
    ],
    Builder: plotData.plots ? [
      ...new Set(plotData.plots.map(p => p.agent || p.builder).slice(0, 6))
    ] : ['Premium Developers', 'Trusted Builders', 'Land Developers'],
    'Possession': ['Immediate', 'Within 6 Months', 'Within 1 Year', 'Under Development'],
  };

  const [showDropdown, setShowDropdown] = React.useState(null);
  const handleSelect = (option) => {
    alert(`Selected: ${option} in ${formattedCity}`);
    setShowDropdown(null);
  };

  return (
    <>
      <div className="bg-white py-4 px-2 shadow-sm border-t border-gray-200 pt-20">
        <div className="flex items-center gap-4 max-w-6xl mx-auto text-sm">
          <FilterButton icon={<FaBuilding />} label="Plot Type" isDropdown options={filterOptions['Plot Type']} onSelect={handleSelect} showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
          <FilterButton label="Plot Size" isDropdown options={filterOptions['Plot Size']} onSelect={handleSelect} showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
          <FilterButton label="Budget" isDropdown options={filterOptions.Budget} onSelect={handleSelect} showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
          <FilterButton label="Locality" isDropdown options={filterOptions.Locality} onSelect={handleSelect} showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
          <FilterButton label="Builder" isDropdown options={filterOptions.Builder} onSelect={handleSelect} showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
          <FilterButton label="Possession" isDropdown options={filterOptions['Possession']} onSelect={handleSelect} showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
          <a href="#" className="flex items-center gap-2 text-blue-600 font-medium ml-2 hover:underline text-sm">
            <FaRedo className="text-sm" />
            <span className="text-sm">Reset Filters</span>
          </a>
        </div>
      </div>
      <Plot_Card_Section city={city} plotData={plotData} formattedCity={formattedCity} />
    </>
  );
}

export default Plot_header;