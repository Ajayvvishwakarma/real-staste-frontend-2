// import React from "react";
// import { getCityProjectData } from "../../data/cityPropertyData";
// const Card_Section = ({ city, cityData, formattedCity }) => {
//   // Get city-specific project data
//   const projectData = getCityProjectData(city);
  
//   // Use city-specific projects or fall back to default
//   const projects = projectData.projects || [];
//   const localities = projectData.localities || [];
//   const agents = projectData.agents || [];
//   const totalResults = projectData.totalResults || 0;
//   const cityDisplayName = formattedCity || projectData.displayName || "India";

//   return (
//     <div className="min-h-screen max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-8 py-6">
//       {/* Main Content */}
//       <div className="flex-1 max-w-3xl">
//         <div className="mb-4 text-gray-700 text-base">
//           <span className="font-semibold text-lg">{totalResults} Results</span>
//           <span className="mx-2">|</span>
//           <span className="font-semibold text-xl">New Projects in {cityDisplayName}</span>
//         </div>
//         <div className="text-sm text-gray-500 mb-2">
//           Home <span className="mx-1">&gt;</span> <span className="text-blue-700">New Projects in {cityDisplayName}</span>
//         </div>
//         {/* Project Cards */}
//         {projects.map((p, idx) => (
//           <div key={idx} className="bg-white rounded shadow-sm mb-6 overflow-hidden border border-gray-200 relative">
//             <div className="flex flex-col md:flex-row">
//               <img src={p.image} alt={p.name} className="w-full md:w-56 h-40 object-cover rounded m-4 md:m-6" />
//               <div className="flex-1 p-4">
//                 <div className="flex items-center justify-between">
//                   <span className="text-lg font-semibold text-blue-700 hover:underline cursor-pointer">{p.name}</span>
//                   <span className="text-base font-bold text-gray-700">{p.price}</span>
//                 </div>
//                 <div className="text-sm text-gray-600 mb-1">
//                   {p.location} <span className="font-semibold">By {p.builder}</span>
//                 </div>
//                 <div className="flex gap-8 text-sm mt-2 mb-2">
//                   <div>
//                     <span className="font-semibold">Configs</span><br />
//                     <span className="text-gray-700">{p.configs}</span>
//                   </div>
//                   <div>
//                     <span className="font-semibold">{p.units ? "Total Units" : "Possession Status"}</span><br />
//                     <span className="text-gray-700">{p.units ? p.units : p.possession}</span>
//                   </div>
//                   {p.units && (
//                     <div>
//                       <span className="font-semibold">Possession Status</span><br />
//                       <span className="text-gray-700">{p.possession}</span>
//                     </div>
//                   )}
//                 </div>
//                 <div className="text-sm text-gray-700 mb-2">
//                   {p.description}
//                 </div>
//               </div>
//             </div>
//             {/* Similar Listings */}
//             {p.similar && (
//               <div className="bg-gray-50 border-t border-gray-200 px-4 py-3">
//                 <span className="font-semibold text-base text-purple-700 cursor-pointer hover:underline">{p.similarCount || p.similar.length} Similar listings by {p.similarBuilder || p.builder} in this area <span className="inline-block align-middle ml-1 bg-gray-200 rounded-full px-1">▼</span></span>
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   {p.similar.map((s, i) => (
//                     <div key={i} className="bg-white border border-gray-200 rounded px-3 py-2 flex flex-col min-w-[180px]">
//                       <span className="text-xs text-gray-600">{p.configs.includes('Apartment') ? s.size : `Residential Land / Plots - ${s.size}`}</span>
//                       <span className="font-semibold text-blue-700">{s.price}</span>
//                       <a href="#" className="text-xs text-blue-700 hover:underline">Get Quote</a>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//             {/* RERA Registered Badge */}
//             {p.rera && (
//               <div className="absolute left-0 top-0 m-4">
//                 <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded">RERA REGISTERED</span>
//               </div>
//             )}
//           </div>
//         ))}
//           {/* Top Localities Section - moved below last card */}
//           <div className="bg-white rounded shadow-sm mb-6 overflow-hidden border border-gray-200">
//             <div className="px-6 py-4">
//               <div className="font-semibold text-lg text-gray-800 mb-1">Top Localities in {cityDisplayName}</div>
//               <div className="text-sm text-gray-600 mb-2">Explore the best localities in {cityDisplayName} for project sales with excellent dynamic lifestyle, transportation facility, safety, and <span className="text-blue-700 cursor-pointer hover:underline">More..</span></div>
//               <div className="flex flex-wrap gap-2 mb-2">
//                 {localities.map((loc, i) => (
//                   <span key={i} className="px-4 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium cursor-pointer hover:bg-blue-100">{loc.name} ({loc.count})</span>
//                 ))}
//               </div>
//               <span className="text-blue-700 font-medium cursor-pointer hover:underline">+ View All</span>
//             </div>
//           </div>
//       </div>
//       {/* Sidebar */}
//       <div className="w-full md:w-[350px] flex flex-col gap-4">
//         <div className="bg-blue-100 rounded-lg p-5 mb-2 shadow">
//           <div className="text-lg font-semibold text-gray-700 mb-1">
//             Find Your <span className="text-orange-600">Dream Property</span>
//           </div>
//           <div className="text-sm text-gray-700 mb-3">To Get The Best Deals for Buy / Rent / PG Properties</div>
//           <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full text-base hover:bg-blue-700 transition">Post Your Requirement</button>
//         </div>
//         <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
//           <button className="w-full text-left px-4 py-3 border-b text-blue-700 font-medium hover:bg-blue-50">Residential Projects in {cityDisplayName}</button>
//           <button className="w-full text-left px-4 py-3 text-blue-700 font-medium hover:bg-blue-50">Commercial Projects in {cityDisplayName}</button>
//         </div>
//         <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
//           <div className="font-bold text-purple-700 mb-2 text-base">Top Real Estate Agents in {cityDisplayName}</div>
         
//           {/* Top Agents/Companies Section - styled as per screenshot */}
//           <div className="bg-white rounded-lg shadow-sm mt-4 p-2">
//             <div className="font-bold text-blue-700 mb-2 text-base">Top Agents/Companies</div>
//             <div className="flex flex-col gap-2">
//               <div className="flex flex-col gap-2">
//                 {agents.slice(0, 2).map((agent, idx) => (
//                   <div key={idx} className="flex items-center gap-2 bg-gray-50 rounded p-2">
//                     <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg">
//                       {agent.logo}
//                     </div>
//                     <div>
//                       <div className="font-semibold text-gray-700 text-sm">{agent.name}</div>
//                       <div className="text-xs text-gray-500">{agent.location}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               {agents.slice(2).map((agent, idx) => (
//                 <div key={idx + 2} className="flex items-center gap-2 bg-white rounded border border-gray-300 p-2">
//                   <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg">
//                     {agent.logo}
//                   </div>
//                   <div>
//                     <span className="text-blue-700 font-semibold text-sm cursor-pointer hover:underline">{agent.name}</span>
//                     <div className="text-xs text-gray-600">{agent.location}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Card_Section;









import React from "react";
import { getCityProjectData } from "../../data/cityPropertyData";

const CardSectionIntegration = ({ city, formattedCity }) => {
  const projectData = getCityProjectData(city);

  const projects = projectData.projects || [];
  const localities = projectData.localities || [];
  const agents = projectData.agents || [];
  const totalResults = projectData.totalResults || 0;
  const cityDisplayName = formattedCity || projectData.displayName || "India";

  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-8 py-6">
      {/* Main Content */}
      <div className="flex-1 max-w-3xl">
        <div className="mb-4 text-gray-700 text-base">
          <span className="font-semibold text-lg">{totalResults} Results</span>
          <span className="mx-2">|</span>
          <span className="font-semibold text-xl">New Projects in {cityDisplayName}</span>
        </div>
        <div className="text-sm text-gray-500 mb-2">
          Home <span className="mx-1">&gt;</span> <span className="text-blue-700">New Projects in {cityDisplayName}</span>
        </div>
        {/* Project Cards */}
        {projects.map((p, idx) => (
          <div key={idx} className="bg-white rounded shadow-sm mb-6 overflow-hidden border border-gray-200 relative">
            <div className="flex flex-col md:flex-row">
              <img src={p.image} alt={p.name} className="w-full md:w-56 h-40 object-cover rounded m-4 md:m-6" />
              <div className="flex-1 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-blue-700 hover:underline cursor-pointer">{p.name}</span>
                  <span className="text-base font-bold text-gray-700">{p.price}</span>
                </div>
                <div className="text-sm text-gray-600 mb-1">
                  {p.location} <span className="font-semibold">By {p.builder}</span>
                </div>
                <div className="flex gap-8 text-sm mt-2 mb-2">
                  <div>
                    <span className="font-semibold">Configs</span><br />
                    <span className="text-gray-700">{p.configs}</span>
                  </div>
                  <div>
                    <span className="font-semibold">{p.units ? "Total Units" : "Possession Status"}</span><br />
                    <span className="text-gray-700">{p.units ? p.units : p.possession}</span>
                  </div>
                  {p.units && (
                    <div>
                      <span className="font-semibold">Possession Status</span><br />
                      <span className="text-gray-700">{p.possession}</span>
                    </div>
                  )}
                </div>
                <div className="text-sm text-gray-700 mb-2">
                  {p.description}
                </div>
              </div>
            </div>
            {/* Similar Listings */}
            {p.similar && (
              <div className="bg-gray-50 border-t border-gray-200 px-4 py-3">
                <span className="font-semibold text-base text-purple-700 cursor-pointer hover:underline">{p.similarCount || p.similar.length} Similar listings by {p.similarBuilder || p.builder} in this area <span className="inline-block align-middle ml-1 bg-gray-200 rounded-full px-1">▼</span></span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {p.similar.map((s, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded px-3 py-2 flex flex-col min-w-[180px]">
                      <span className="text-xs text-gray-600">{p.configs.includes('Apartment') ? s.size : `Residential Land / Plots - ${s.size}`}</span>
                      <span className="font-semibold text-blue-700">{s.price}</span>
                      <a href="#" className="text-xs text-blue-700 hover:underline">Get Quote</a>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* RERA Registered Badge */}
            {p.rera && (
              <div className="absolute left-0 top-0 m-4">
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded">RERA REGISTERED</span>
              </div>
            )}
          </div>
        ))}
        {/* Top Localities Section */}
        <div className="bg-white rounded shadow-sm mb-6 overflow-hidden border border-gray-200">
          <div className="px-6 py-4">
            <div className="font-semibold text-lg text-gray-800 mb-1">Top Localities in {cityDisplayName}</div>
            <div className="text-sm text-gray-600 mb-2">Explore the best localities in {cityDisplayName} for project sales with excellent dynamic lifestyle, transportation facility, safety, and <span className="text-blue-700 cursor-pointer hover:underline">More..</span></div>
            <div className="flex flex-wrap gap-2 mb-2">
              {localities.map((loc, i) => (
                <span key={i} className="px-4 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium cursor-pointer hover:bg-blue-100">{loc.name} ({loc.count})</span>
              ))}
            </div>
            <span className="text-blue-700 font-medium cursor-pointer hover:underline">+ View All</span>
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div className="w-full md:w-[350px] flex flex-col gap-4">
        <div className="bg-blue-100 rounded-lg p-5 mb-2 shadow">
          <div className="text-lg font-semibold text-gray-700 mb-1">
            Find Your <span className="text-orange-600">Dream Property</span>
          </div>
          <div className="text-sm text-gray-700 mb-3">To Get The Best Deals for Buy / Rent / PG Properties</div>
          <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full text-base hover:bg-blue-700 transition">Post Your Requirement</button>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <button className="w-full text-left px-4 py-3 border-b text-blue-700 font-medium hover:bg-blue-50">Residential Projects in {cityDisplayName}</button>
          <button className="w-full text-left px-4 py-3 text-blue-700 font-medium hover:bg-blue-50">Commercial Projects in {cityDisplayName}</button>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
          <div className="font-bold text-purple-700 mb-2 text-base">Top Real Estate Agents in {cityDisplayName}</div>
          <div className="bg-white rounded-lg shadow-sm mt-4 p-2">
            <div className="font-bold text-blue-700 mb-2 text-base">Top Agents/Companies</div>
            <div className="flex flex-col gap-2">
              {agents.slice(0, 2).map((agent, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-gray-50 rounded p-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg">
                    {agent.logo}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700 text-sm">{agent.name}</div>
                    <div className="text-xs text-gray-500">{agent.location}</div>
                  </div>
                </div>
              ))}
              {agents.slice(2).map((agent, idx) => (
                <div key={idx + 2} className="flex items-center gap-2 bg-white rounded border border-gray-300 p-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg">
                    {agent.logo}
                  </div>
                  <div>
                    <span className="text-blue-700 font-semibold text-sm cursor-pointer hover:underline">{agent.name}</span>
                    <div className="text-xs text-gray-600">{agent.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSectionIntegration;