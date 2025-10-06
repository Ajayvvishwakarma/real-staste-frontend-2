import React from 'react'

const Featured_Service_Provider = () => {
  // Sample data for demonstration
  const providers = [
    {
      name: 'Ramakrishna Associates',
      location: 'TRI NAGAR, DELHI',
      sale: 10,
      rent: null,
      cities: ['Delhi', 'Ghaziabad', '+3'],
      logo: '/realstateimg/image1.png',
    },
    {
      name: 'A7EVEN INFRASTRUCTURE A...',
      location: 'SAYLI ROAD, SILVASSA',
      sale: 19,
      rent: 2,
      cities: ['Daman', 'Mumbai', 'Naroli', '+4'],
      logo: '/realstateimg/image2.png',
    },
    {
      name: 'Stellars Estates',
      location: 'RAJ NAGAR EXTENSION, GHAZIABAD',
      sale: 8,
      rent: 1,
      cities: ['Ghaziabad', 'Greater Noida'],
      logo: '/realstateimg/image3.png',
    },
    {
      name: 'Rainbow energy system',
      location: 'DHARAMPETH, NAGPUR',
      sale: 5,
      rent: null,
      cities: ['Bajaj Nagar', 'Bakrol', '+5'],
      logo: '/realstateimg/image4.png',
    },
    {
      name: 'Property Seeds',
      location: 'MAJAS WADI, JOGESHWARI EAST, MUMBAI',
      sale: 117,
      rent: null,
      cities: ['Aarey Colony', 'Aghadi Nagar', '+152'],
      logo: '/realstateimg/image5.png',
    },
    {
      name: 'URBAN NEST ASSOCIATE',
      location: 'PIMPRI CHINCHWAD, PUNE',
      sale: 128,
      rent: null,
      cities: ['Mumbai', 'Pune'],
      logo: '/realstateimg/image6.png',
    },
    {
      name: 'DGNS Consultancy Services',
      location: 'SECTOR 15 GURGAON',
      sale: 78,
      rent: null,
      cities: ['Gurgaon', 'Jhajjar', 'Palwal', '+1'],
      logo: '/realstateimg/image7.png',
    },
    {
      name: 'CG LAND MARK',
      location: 'VISHAL NAGAR, RAIPUR',
      sale: 49,
      rent: null,
      cities: ['Dantewada', 'Raigarh', 'Raipur'],
      logo: '/realstateimg/image8.png',
    },
    {
      name: 'I More Prop Deals',
      location: 'KONDHWA, PUNE',
      sale: 80,
      rent: 2,
      cities: ['Aundh', 'Badhan Nagar', '+66'],
      logo: '/realstateimg/image1.png',
    },
    {
      name: 'BricksandRoof',
      location: 'MG ROAD, BANGALORE',
      sale: 39,
      rent: 3,
      cities: ['Agrahara Layout', '+71'],
      logo: '/realstateimg/image2.png',
    },
    {
      name: 'SOUTH ZONE RENTAL',
      location: 'ANNA NAGAR, CHENNAI',
      sale: 1,
      rent: 3,
      cities: ['A. Nagar', 'Abhiramapuram', '+312'],
      logo: '/realstateimg/image3.png',
    },
    {
      name: 'NQ Global Venture',
      location: 'SANTACRUZ WEST, MUMBAI',
      sale: 8,
      rent: null,
      cities: ['Mumbai', 'Navi Mumbai', 'Palghar', '+4'],
      logo: '/realstateimg/image4.png',
    },
  ];

  // No slider logic, show all cards statically

  return (
    <div className="min-h-screen py-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Featured Services Providers</h2>
      <div className="flex justify-center">
        <div className="w-full max-w-7xl">
          <div className="grid grid-rows-3 grid-cols-4 gap-6">
            {providers.map((provider, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-3 flex flex-col min-h-[140px] transition-all duration-200 hover:shadow-2xl hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-2">
                  {provider.logo ? (
                    <img src={provider.logo} alt={provider.name} className="w-12 h-12 rounded-full object-cover border" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl font-bold text-gray-700 border">
                      {provider.name[0]}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-lg truncate max-w-[180px]">{provider.name}</div>
                    <div className="text-xs text-gray-500 font-medium truncate max-w-[180px]">{provider.location}</div>
                  </div>
                </div>
                <div className="flex gap-6 mb-2">
                  <div className="text-sm font-semibold text-gray-700">
                    {provider.sale} <span className="font-normal">Sale</span><br />Properties
                  </div>
                  {provider.rent && (
                    <div className="text-sm font-semibold text-gray-700">
                      {provider.rent} <span className="font-normal">Rent</span><br />Properties
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {provider.cities.map((city, i) => (
                    <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium border ${city.startsWith('+') ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-gray-100 text-gray-700 border-gray-200'}`}>
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured_Service_Provider
