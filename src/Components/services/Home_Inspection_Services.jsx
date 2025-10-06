// import React, { useState } from 'react';
// import Featured_Service_Provider from './Featured_Service_Provider';

// const topCities = [
//   'Ahmedabad', 'Bangalore', 'Chennai', 'Delhi', 'Hyderabad', 'Indore', 'Lucknow', 'Mumbai', 'Pune'
// ];

// const Home_Inspection_Services = () => {
//   const [search, setSearch] = useState('');
//   const filteredCities = topCities.filter(city => city.toLowerCase().includes(search.toLowerCase()));

//   return (
//     <div className="bg-white w-full">
//       <div className="max-w-7xl mx-auto pt-16 pb-8 px-4">
//         <h1 className="text-2xl font-semibold text-center mb-6">Top Home Inspection Services in India</h1>
//         <p className="text-sm text-gray-700 text-left mb-2">
//           When moving into a new Home, whether as an owner or a tenant, making an informed decision can help minimize the risks related to the property. With <span className="font-bold">professional Home inspection services</span>, you can get the entire property inspected from the roof to the floor and even deeper to the building’s foundations. These <span className="font-bold">building inspection services</span> identify any type of safety risk associated with the building and offer confirmation regarding their livability status. You know you have hired from the best Home inspection companies if their inspection report also displays if the building adheres to the bylaws of the city. In a nutshell, getting house inspection services is a must before buying or renting any property. If you are also looking for the best Home inspection companies, RealEstateIndia.Com is the perfect platform. Here you can find a complete list of the most professional and acknowledged companies for their Home inspection work and services.
//         </p>
//       </div>
//       <div className="bg-gray-100 py-12">
//         <div className="max-w-4xl mx-auto px-4">
//           <h2 className="text-2xl font-semibold text-center mb-8">Top cities for Building Inspection Services</h2>
//           <div className="flex flex-row justify-center gap-2 mb-8">
//             {filteredCities.map(city => (
//               <button key={city} className="px-6 py-2 rounded-full bg-white shadow text-gray-800 font-medium hover:bg-blue-50 transition border border-gray-200">
//                 {city}
//               </button>
//             ))}
//           </div>
//           <div className="flex justify-center">
//             <input
//               type="text"
//               className="w-[400px] px-5 py-2 rounded-lg border border-blue-200 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 text-lg"
//               placeholder="Search City"
//               value={search}
//               onChange={e => setSearch(e.target.value)}
//             />
//           </div>
//         </div>
//       </div>
//       {/* Render Featured Service Providers below */}
//       <div className="mt-10">
//         <Featured_Service_Provider />
//       </div>
//     </div>
//   );
// };

// export default Home_Inspection_Services;









import React, { useState } from "react";
import FeaturedServiceProviderIntegration from "./Featured_Service_Provider";

const topCities = [
  "Ahmedabad",
  "Bangalore",
  "Chennai",
  "Delhi",
  "Hyderabad",
  "Indore",
  "Lucknow",
  "Mumbai",
  "Pune",
];

const HomeInspectionServicesIntegration = () => {
  const [search, setSearch] = useState("");
  const filteredCities = topCities.filter((city) =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white w-full">
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Top Home Inspection Services in India
        </h1>
        <p className="text-sm text-gray-700 text-left mb-2">
          When moving into a new Home, whether as an owner or a tenant, making
          an informed decision can help minimize the risks related to the
          property. With{" "}
          <span className="font-bold">professional Home inspection services</span>
          , you can get the entire property inspected from the roof to the floor
          and even deeper to the building’s foundations. These{" "}
          <span className="font-bold">building inspection services</span>{" "}
          identify any type of safety risk associated with the building and
          offer confirmation regarding their livability status. You know you
          have hired from the best Home inspection companies if their inspection
          report also displays if the building adheres to the bylaws of the
          city. In a nutshell, getting house inspection services is a must
          before buying or renting any property. If you are also looking for the
          best Home inspection companies, RealEstateIndia.Com is the perfect
          platform. Here you can find a complete list of the most professional
          and acknowledged companies for their Home inspection work and
          services.
        </p>
      </div>
      <div className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Top cities for Building Inspection Services
          </h2>
          <div className="flex flex-row justify-center gap-2 mb-8">
            {filteredCities.map((city) => (
              <button
                key={city}
                className="px-6 py-2 rounded-full bg-white shadow text-gray-800 font-medium hover:bg-blue-50 transition border border-gray-200"
              >
                {city}
              </button>
            ))}
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              className="w-[400px] px-5 py-2 rounded-lg border border-blue-200 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 text-lg"
              placeholder="Search City"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* Render Featured Service Providers below */}
      <div className="mt-10">
        <FeaturedServiceProviderIntegration />
      </div>
    </div>
  );
};

export default HomeInspectionServicesIntegration;