// import React from 'react'


// const Bottom_City_section = () => {
//   return (
//     <div className="w-full flex justify-center bg-white py-4">
//       <div className="w-full max-w-7xl px-2 md:px-0">
//         <img
//           src="/banner.png"
//           alt="Factory, Warehouse for Rent Banner"
//           className="w-full h-32 md:h-40 object-cover rounded shadow-md border border-gray-200"
//           style={{objectPosition: 'center'}}
//         />
//       </div>
//     </div>
//   );
// }

// export default Bottom_City_section








import React, { useState, useEffect } from 'react';

// Replace with your backend API endpoint for fetching banner data
const API_URL = 'http://localhost:8000/api/banner';

const BottomCitySectionIntegration = () => {
  const [bannerData, setBannerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch banner data from backend
  const fetchBannerData = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch banner data.');
      }

      const data = await response.json();
      setBannerData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBannerData();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex justify-center bg-white py-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading banner...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex justify-center bg-white py-4">
        <div className="text-center">
          <div className="bg-red-50 text-red-600 p-4 rounded shadow-md">
            <p>Error: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!bannerData) {
    return null; // Do not render anything if there's no banner data
  }

  return (
    <div className="w-full flex justify-center bg-white py-4">
      <div className="w-full max-w-7xl px-2 md:px-0">
        <img
          src={bannerData.imageUrl || '/default-banner.png'} // Replace with a default banner image if no image URL is provided
          alt={bannerData.altText || 'Banner'}
          className="w-full h-32 md:h-40 object-cover rounded shadow-md border border-gray-200"
          style={{ objectPosition: 'center' }}
        />
      </div>
    </div>
  );
};

export default BottomCitySectionIntegration;