// import React from 'react';
// import { FaBuilding, FaRedo } from 'react-icons/fa';
// import { FaChevronDown } from 'react-icons/fa';
// import { useParams } from 'react-router-dom';
// import { getCityData, formatCityName } from '../../data/cityPropertyData';
// import Card_Section from './Card_Section';

// const DropdownMenu = ({ options, onSelect }) => (
//   <div className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
//     {options.map((opt, idx) => (
//       <button
//         key={idx}
//         className="block w-full text-left px-4 py-2 hover:bg-blue-50 text-gray-700 text-sm"
//         onClick={() => onSelect(opt)}
//       >
//         {opt}
//       </button>
//     ))}
//   </div>
// );

// const FilterButton = ({ icon, label, isDropdown, options, onSelect, showDropdown, setShowDropdown }) => (
//   <div className="relative">
//     <button
//       className={`flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-200 bg-white hover:bg-blue-50 transition-shadow shadow-sm relative font-medium text-gray-700 min-w-[150px] justify-center text-sm ${isDropdown ? 'pr-8' : ''}`}
//       style={{ position: 'relative' }}
//       onClick={() => isDropdown && setShowDropdown(showDropdown === label ? null : label)}
//     >
//       {icon && <span className="text-gray-600 text-xl"><span className="text-sm">{icon}</span></span>}
//       <span className="text-sm">{label}</span>
//       {isDropdown && (
//         <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-base">
//           <FaChevronDown className="text-sm" />
//         </span>
//       )}
//     </button>
//     {showDropdown === label && isDropdown && (
//       <DropdownMenu options={options} onSelect={onSelect} />
//     )}
//   </div>
// );

// const project_header = () => {
//   const { city } = useParams();
//   const cityData = getCityData(city, 'buy'); // Projects are generally buy-type
//   const formattedCity = formatCityName(city) || cityData.displayName;
  
//   // Generate city-specific filter options
//   const filterOptions = {
//     Projects: ['Residential', 'Commercial', 'Plots', 'Villas'],
//     'Category Type': ['Apartment', 'Villa', 'Plot', 'Shop'],
//     Budget: ['< ₹20 Lac', '₹20-50 Lac', '₹50 Lac-1 Cr', '> ₹1 Cr'],
//     Locality: cityData.localities ? cityData.localities.slice(0, 8).map(loc => loc.name) : [
//       'Central Location', 'Premium Area', 'IT Hub', 'Commercial District'
//     ],
//     Builder: cityData.properties ? [
//       ...new Set(cityData.properties.map(p => p.agent).slice(0, 6))
//     ] : ['Premium Builders', 'Trusted Developers', 'Renowned Builders'],
//     'Project Status': ['Ready to Move', 'Under Construction', 'Upcoming'],
//   };

//   const [showDropdown, setShowDropdown] = React.useState(null);
//   const handleSelect = (option) => {
//     alert(`Selected: ${option} in ${formattedCity}`);
//     setShowDropdown(null);
//   };
//   return (
//     <>
//       <div className="bg-white py-4 px-2 shadow-sm border-t border-gray-200 pt-20">
//         <div className="flex items-center gap-4 max-w-6xl mx-auto text-sm">
//           <FilterButton icon={<FaBuilding />} label="Projects" isDropdown options={filterOptions.Projects} onSelect={handleSelect} showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
//           <FilterButton label="Category Type" isDropdown options={filterOptions['Category Type']} onSelect={handleSelect} showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
//           <FilterButton label="Budget" isDropdown options={filterOptions.Budget} onSelect={handleSelect} showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
//           <FilterButton label="Locality" isDropdown options={filterOptions.Locality} onSelect={handleSelect} showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
//           <FilterButton label="Builder" isDropdown options={filterOptions.Builder} onSelect={handleSelect} showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
//           <FilterButton label="Project Status" isDropdown options={filterOptions['Project Status']} onSelect={handleSelect} showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
//           <a href="#" className="flex items-center gap-2 text-blue-600 font-medium ml-2 hover:underline text-sm">
//             <FaRedo className="text-sm" />
//             <span className="text-sm">Reset Filters</span>
//           </a>
//         </div>
//       </div>
//       <Card_Section city={city} cityData={cityData} formattedCity={formattedCity} />
//     </>
//   );
// }

// export default project_header;












import React from "react";
import { FaBuilding, FaRedo, FaChevronDown } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { getCityData, formatCityName } from "../../data/cityPropertyData";
import CardSectionIntegration from "./Card_Section";

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
      className={`flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-200 bg-white hover:bg-blue-50 transition-shadow shadow-sm relative font-medium text-gray-700 min-w-[150px] justify-center text-sm ${isDropdown ? "pr-8" : ""}`}
      onClick={() => isDropdown && setShowDropdown(showDropdown === label ? null : label)}
    >
      {icon && <span className="text-gray-600 text-xl">{icon}</span>}
      <span className="text-sm">{label}</span>
      {isDropdown && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-base">
          <FaChevronDown />
        </span>
      )}
    </button>
    {showDropdown === label && isDropdown && (
      <DropdownMenu options={options} onSelect={onSelect} />
    )}
  </div>
);

const ProjectHeaderIntegration = () => {
  const { city } = useParams();
  const cityData = getCityData(city, "buy");
  const formattedCity = formatCityName(city) || cityData.displayName;

  const filterOptions = {
    Projects: ["Residential", "Commercial", "Plots", "Villas"],
    "Category Type": ["Apartment", "Villa", "Plot", "Shop"],
    Budget: ["< ₹20 Lac", "₹20-50 Lac", "₹50 Lac-1 Cr", "> ₹1 Cr"],
    Locality: cityData.localities
      ? cityData.localities.slice(0, 8).map((loc) => loc.name)
      : ["Central Location", "Premium Area", "IT Hub", "Commercial District"],
    Builder: cityData.properties
      ? [...new Set(cityData.properties.map((p) => p.agent).slice(0, 6))]
      : ["Premium Builders", "Trusted Developers", "Renowned Builders"],
    "Project Status": ["Ready to Move", "Under Construction", "Upcoming"],
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
          <FilterButton
            icon={<FaBuilding />}
            label="Projects"
            isDropdown
            options={filterOptions.Projects}
            onSelect={handleSelect}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
          />
          <FilterButton
            label="Category Type"
            isDropdown
            options={filterOptions["Category Type"]}
            onSelect={handleSelect}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
          />
          <FilterButton
            label="Budget"
            isDropdown
            options={filterOptions.Budget}
            onSelect={handleSelect}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
          />
          <FilterButton
            label="Locality"
            isDropdown
            options={filterOptions.Locality}
            onSelect={handleSelect}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
          />
          <FilterButton
            label="Builder"
            isDropdown
            options={filterOptions.Builder}
            onSelect={handleSelect}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
          />
          <FilterButton
            label="Project Status"
            isDropdown
            options={filterOptions["Project Status"]}
            onSelect={handleSelect}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
          />
          <a
            href="#"
            className="flex items-center gap-2 text-blue-600 font-medium ml-2 hover:underline text-sm"
          >
            <FaRedo />
            <span>Reset Filters</span>
          </a>
        </div>
      </div>
      <CardSectionIntegration city={city} formattedCity={formattedCity} />
    </>
  );
};

export default ProjectHeaderIntegration;