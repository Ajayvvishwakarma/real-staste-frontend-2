// import React from "react";
// import { getCityPlotData } from "../../data/cityPropertyData";

// const Plot_Card_Section = ({ city, plotData, formattedCity }) => {
//   // Get city-specific plot data
//   const cityPlotData = getCityPlotData(city);
  
//   // Use city-specific plots or fall back to default
//   const plots = cityPlotData.plots || [];
//   const localities = cityPlotData.localities || [];
//   const agents = cityPlotData.agents || [];
//   const totalResults = cityPlotData.totalResults || 0;
//   const cityDisplayName = formattedCity || cityPlotData.displayName || "India";

//   return (
//     <div className="min-h-screen max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-8 py-6">
//       {/* Main Content */}
//       <div className="flex-1 max-w-3xl">
//         <div className="mb-4 text-gray-700 text-base">
//           <span className="font-semibold text-lg">{totalResults} Results</span>
//           <span className="mx-2">|</span>
//           <span className="font-semibold text-xl">Plots/Land for Sale in {cityDisplayName}</span>
//         </div>
//         <div className="text-sm text-gray-500 mb-2">
//           Home <span className="mx-1">&gt;</span> <span className="text-blue-700">Plots/Land for Sale in {cityDisplayName}</span>
//         </div>
        
//         {/* Plot Cards */}
//         {plots.map((p, idx) => (
//           <div key={idx} className="bg-white rounded shadow-sm mb-6 overflow-hidden border border-gray-200 relative">
//             <div className="flex flex-col md:flex-row">
//               <img src={p.image} alt={p.title} className="w-full md:w-56 h-40 object-cover rounded m-4 md:m-6" />
//               <div className="flex-1 p-4">
//                 <div className="flex items-center justify-between">
//                   <span className="text-lg font-semibold text-blue-700 hover:underline cursor-pointer">{p.title}</span>
//                   <span className="text-base font-bold text-gray-700">{p.price}</span>
//                 </div>
//                 <div className="text-sm text-gray-600 mb-1">
//                   {p.location}
//                 </div>
//                 <div className="flex gap-8 text-sm mt-2 mb-2">
//                   <div>
//                     <span className="font-semibold">Area</span><br />
//                     <span className="text-gray-700">{p.area}</span>
//                   </div>
//                   <div>
//                     <span className="font-semibold">Ownership</span><br />
//                     <span className="text-gray-700">{p.ownership}</span>
//                   </div>
//                   <div>
//                     <span className="font-semibold">Type</span><br />
//                     <span className="text-gray-700">{p.saleType}</span>
//                   </div>
//                 </div>
//                 <div className="text-sm text-gray-700 mb-2">
//                   {p.description}
//                 </div>
                
//                 {/* Agent/Posted By Info */}
//                 <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100">
//                   <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
//                     <span className="text-blue-700 font-bold text-xs">{p.agent?.charAt(0) || 'A'}</span>
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex items-center gap-2">
//                       <span className="text-sm font-medium text-gray-800">{p.agent}</span>
//                       {p.agentBadge && (
//                         <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">{p.agentBadge}</span>
//                       )}
//                     </div>
//                     <div className="text-xs text-gray-500">{p.postedOn}</div>
//                   </div>
//                   <div className="text-right">
//                     <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition">
//                       Contact
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Similar Listings */}
//             {p.similarCount > 0 && (
//               <div className="bg-gray-50 border-t border-gray-200 px-4 py-3">
//                 <span className="font-semibold text-base text-purple-700 cursor-pointer hover:underline">
//                   {p.similarCount} Similar plots in this area 
//                   <span className="inline-block align-middle ml-1 bg-gray-200 rounded-full px-1">▼</span>
//                 </span>
//               </div>
//             )}
//           </div>
//         ))}

//         {/* Top Localities Section */}
//         <div className="bg-white rounded shadow-sm mb-6 overflow-hidden border border-gray-200">
//           <div className="px-6 py-4">
//             <div className="font-semibold text-lg text-gray-800 mb-1">Top Localities for Plots in {cityDisplayName}</div>
//             <div className="text-sm text-gray-600 mb-2">
//               Explore the best localities in {cityDisplayName} for plot purchases with excellent connectivity, 
//               infrastructure development, and investment potential. 
//               <span className="text-blue-700 cursor-pointer hover:underline">More..</span>
//             </div>
//             <div className="flex flex-wrap gap-2 mb-2">
//               {localities.map((loc, i) => (
//                 <span key={i} className="px-4 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium cursor-pointer hover:bg-blue-100">
//                   {loc.name} ({loc.count})
//                 </span>
//               ))}
//             </div>
//             <span className="text-blue-700 font-medium cursor-pointer hover:underline">+ View All</span>
//           </div>
//         </div>
//       </div>

//       {/* Sidebar */}
//       <div className="w-full md:w-[350px] flex flex-col gap-4">
//         {/* Dream Property Section */}
//         <div className="bg-green-100 rounded-lg p-5 mb-2 shadow">
//           <div className="text-lg font-semibold text-gray-700 mb-1">
//             Find Your <span className="text-green-600">Dream Plot</span>
//           </div>
//           <div className="text-sm text-gray-700 mb-3">To Get The Best Deals for Residential & Commercial Plots</div>
//           <button className="bg-green-600 text-white font-semibold px-6 py-2 rounded-full text-base hover:bg-green-700 transition">
//             Post Your Requirement
//           </button>
//         </div>

//         {/* Plot Categories */}
//         <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
//           <button className="w-full text-left px-4 py-3 border-b text-blue-700 font-medium hover:bg-blue-50">
//             Residential Plots in {cityDisplayName}
//           </button>
//           <button className="w-full text-left px-4 py-3 border-b text-blue-700 font-medium hover:bg-blue-50">
//             Commercial Plots in {cityDisplayName}
//           </button>
//           <button className="w-full text-left px-4 py-3 text-blue-700 font-medium hover:bg-blue-50">
//             Agricultural Land in {cityDisplayName}
//           </button>
//         </div>

//         {/* Top Plot Dealers */}
//         <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
//           <div className="font-bold text-purple-700 mb-2 text-base">Top Plot Dealers in {cityDisplayName}</div>
         
//           <div className="bg-white rounded-lg shadow-sm mt-4 p-2">
//             <div className="font-bold text-blue-700 mb-2 text-base">Top Dealers/Agents</div>
//             <div className="flex flex-col gap-2">
//               <div className="flex flex-col gap-2">
//                 {agents.slice(0, 2).map((agent, idx) => (
//                   <div key={idx} className="flex items-center gap-2 bg-gray-50 rounded p-2">
//                     <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-lg">
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
//                   <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-lg">
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

//         {/* Investment Tips */}
//         <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
//           <div className="font-bold text-gray-800 mb-3 text-base">Plot Investment Tips</div>
//           <div className="space-y-2 text-sm text-gray-600">
//             <div className="flex items-start gap-2">
//               <span className="text-green-600 font-bold">✓</span>
//               <span>Check land ownership documents</span>
//             </div>
//             <div className="flex items-start gap-2">
//               <span className="text-green-600 font-bold">✓</span>
//               <span>Verify development authority approvals</span>
//             </div>
//             <div className="flex items-start gap-2">
//               <span className="text-green-600 font-bold">✓</span>
//               <span>Ensure road connectivity</span>
//             </div>
//             <div className="flex items-start gap-2">
//               <span className="text-green-600 font-bold">✓</span>
//               <span>Check water and electricity availability</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Plot_Card_Section;










import React from "react";
import { getCityPlotData } from "../../data/cityPropertyData";

const PlotCardSectionIntegration = ({ city, formattedCity }) => {
  const cityPlotData = getCityPlotData(city);

  const plots = cityPlotData.plots || [];
  const localities = cityPlotData.localities || [];
  const agents = cityPlotData.agents || [];
  const totalResults = cityPlotData.totalResults || 0;
  const cityDisplayName = formattedCity || cityPlotData.displayName || "India";

  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-8 py-6">
      {/* Main Content */}
      <div className="flex-1 max-w-3xl">
        <div className="mb-4 text-gray-700 text-base">
          <span className="font-semibold text-lg">{totalResults} Results</span>
          <span className="mx-2">|</span>
          <span className="font-semibold text-xl">Plots/Land for Sale in {cityDisplayName}</span>
        </div>
        <div className="text-sm text-gray-500 mb-2">
          Home <span className="mx-1">&gt;</span> <span className="text-blue-700">Plots/Land for Sale in {cityDisplayName}</span>
        </div>

        {/* Plot Cards */}
        {plots.map((p, idx) => (
          <div key={idx} className="bg-white rounded shadow-sm mb-6 overflow-hidden border border-gray-200 relative">
            <div className="flex flex-col md:flex-row">
              <img src={p.image} alt={p.title} className="w-full md:w-56 h-40 object-cover rounded m-4 md:m-6" />
              <div className="flex-1 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-blue-700 hover:underline cursor-pointer">{p.title}</span>
                  <span className="text-base font-bold text-gray-700">{p.price}</span>
                </div>
                <div className="text-sm text-gray-600 mb-1">{p.location}</div>
                <div className="flex gap-8 text-sm mt-2 mb-2">
                  <div>
                    <span className="font-semibold">Area</span><br />
                    <span className="text-gray-700">{p.area}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Ownership</span><br />
                    <span className="text-gray-700">{p.ownership}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Type</span><br />
                    <span className="text-gray-700">{p.saleType}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-700 mb-2">{p.description}</div>
                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-700 font-bold text-xs">{p.agent?.charAt(0) || "A"}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-800">{p.agent}</span>
                      {p.agentBadge && (
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">{p.agentBadge}</span>
                      )}
                    </div>
                    <div className="text-xs text-gray-500">{p.postedOn}</div>
                  </div>
                  <div className="text-right">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition">Contact</button>
                  </div>
                </div>
              </div>
            </div>
            {p.similarCount > 0 && (
              <div className="bg-gray-50 border-t border-gray-200 px-4 py-3">
                <span className="font-semibold text-base text-purple-700 cursor-pointer hover:underline">
                  {p.similarCount} Similar plots in this area 
                  <span className="inline-block align-middle ml-1 bg-gray-200 rounded-full px-1">▼</span>
                </span>
              </div>
            )}
          </div>
        ))}

        {/* Top Localities Section */}
        <div className="bg-white rounded shadow-sm mb-6 overflow-hidden border border-gray-200">
          <div className="px-6 py-4">
            <div className="font-semibold text-lg text-gray-800 mb-1">Top Localities for Plots in {cityDisplayName}</div>
            <div className="text-sm text-gray-600 mb-2">
              Explore the best localities in {cityDisplayName} for plot purchases with excellent connectivity, 
              infrastructure development, and investment potential. 
              <span className="text-blue-700 cursor-pointer hover:underline">More..</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              {localities.map((loc, i) => (
                <span key={i} className="px-4 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium cursor-pointer hover:bg-blue-100">
                  {loc.name} ({loc.count})
                </span>
              ))}
            </div>
            <span className="text-blue-700 font-medium cursor-pointer hover:underline">+ View All</span>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-full md:w-[350px] flex flex-col gap-4">
        <div className="bg-green-100 rounded-lg p-5 mb-2 shadow">
          <div className="text-lg font-semibold text-gray-700 mb-1">
            Find Your <span className="text-green-600">Dream Plot</span>
          </div>
          <div className="text-sm text-gray-700 mb-3">To Get The Best Deals for Residential & Commercial Plots</div>
          <button className="bg-green-600 text-white font-semibold px-6 py-2 rounded-full text-base hover:bg-green-700 transition">
            Post Your Requirement
          </button>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <button className="w-full text-left px-4 py-3 border-b text-blue-700 font-medium hover:bg-blue-50">
            Residential Plots in {cityDisplayName}
          </button>
          <button className="w-full text-left px-4 py-3 border-b text-blue-700 font-medium hover:bg-blue-50">
            Commercial Plots in {cityDisplayName}
          </button>
          <button className="w-full text-left px-4 py-3 text-blue-700 font-medium hover:bg-blue-50">
            Agricultural Land in {cityDisplayName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlotCardSectionIntegration;