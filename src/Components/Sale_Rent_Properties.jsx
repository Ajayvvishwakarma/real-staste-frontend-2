
// import React from 'react';

// const saleProperties = [
//   {
//     img: '/realstateproject/image1.png', price: '₹ 64 Lac', type: 'Independent House', details: '3 BHK / 1450 Sq.ft.', location: 'Fathima Nagar, Tiruchirappalli',
//   },
//   {
//     img: '/realstateproject/image2.png', price: '₹ 75 Lac', type: 'Farm House', details: '1 RK / 400 Sq.ft.', location: 'Manachanallur, Tiruchirappalli',
//   },
//   {
//     img: '/realstateproject/image3.png', price: 'Price on Request', type: 'Flats & Apartments', details: '3 BHK / 1180 Sq.ft.', location: 'Techzone 4, Greater Noida',
//   },
//   {
//     img: '/realstateproject/image4.png', price: '₹ 23.63 Lac', type: 'Flats & Apartments', details: '2 BHK / 720 Sq.ft.', location: 'Malvan, Sindhudurg',
//   },
//   {
//     img: '/realstateproject/image5.png', price: '₹ 14.15 Cr.', type: 'Farm House', details: '2 BHK / 2998 Sq. Yards', location: 'IT Park, Chandigarh',
//   },
//   {
//     img: '/realstateproject/image6.png', price: '₹ 1.10 Cr.', type: 'Flats & Apartments', details: '4 BHK / 2000 Sq.ft.', location: 'Sector 50, Noida',
//   },
//   {
//     img: '/realstateproject/image7.png', price: '₹ 2.20 Cr.', type: 'Independent House', details: '5 BHK / 3500 Sq.ft.', location: 'DLF Phase IV, Gurgaon',
//   },
//   {
//     img: '/realstateproject/image.png', price: '₹ 80 Lac', type: 'Farm House', details: '2 BHK / 1200 Sq.ft.', location: 'Manesar, Gurgaon',
//   },
//   {
//     img: '/realstateproject/image1.png', price: '₹ 1.50 Cr.', type: 'Flats & Apartments', details: '3 BHK / 1800 Sq.ft.', location: 'Powai, Mumbai',
//   },
//   {
//     img: '/realstateproject/image2.png', price: '₹ 95 Lac', type: 'Flats & Apartments', details: '2 BHK / 900 Sq.ft.', location: 'Baner, Pune',
//   },
// ];

// const rentProperties = [
//   {
//     img: '/realstateproject/image6.png', price: '₹ 1.50 Lac', type: 'Hotel & Restaurant', details: '2 BHK / 1900 Sq.ft.', location: 'Jadavpur, Kolkata',
//   },
//   {
//     img: '/realstateproject/image7.png', price: '₹ 16.20 Lac', type: 'Flats & Apartments', details: '5 BHK / 30000 Sq.ft.', location: 'Appa Junction, Hyderabad',
//   },
//   {
//     img: '/realstateproject/image.png', price: '₹ 1.45 Lac', type: 'Flats & Apartments', details: '3 BHK / 1100 Sq.ft.', location: 'Hill Road, Bandra West, Mumbai',
//   },
//   {
//     img: '/realstateproject/image1.png', price: '₹ 17,000', type: 'Flats & Apartments', details: '1 BHK / 400 Sq.ft.', location: 'Kidwai Nagar, South Extension',
//   },
//   {
//     img: '/realstateproject/image2.png', price: '₹ 5.50 Lac', type: 'Flats & Apartments', details: '5 BHK / 20 Ares', location: 'DLF Phase V, Gurgaon',
//   },
//   {
//     img: '/realstateproject/image3.png', price: '₹ 2.10 Lac', type: 'Flats & Apartments', details: '2 BHK / 800 Sq.ft.', location: 'Sector 22, Dwarka',
//   },
//   {
//     img: '/realstateproject/image4.png', price: '₹ 1.80 Lac', type: 'Hotel & Restaurant', details: '3 BHK / 1500 Sq.ft.', location: 'Salt Lake, Kolkata',
//   },
//   {
//     img: '/realstateproject/image5.png', price: '₹ 1.60 Lac', type: 'Flats & Apartments', details: '2 BHK / 900 Sq.ft.', location: 'Kothrud, Pune',
//   },
//   {
//     img: '/realstateproject/image6.png', price: '₹ 1.20 Lac', type: 'Flats & Apartments', details: '1 BHK / 500 Sq.ft.', location: 'Andheri East, Mumbai',
//   },
//   {
//     img: '/realstateproject/image7.png', price: '₹ 1.10 Lac', type: 'Flats & Apartments', details: '2 BHK / 700 Sq.ft.', location: 'Sector 56, Gurgaon',
//   },
// ];

// const PropertyCard = ({ img, price, type, details, location, city }) => (
//   <div className="bg-white rounded-xl shadow border border-gray-200 flex flex-col overflow-hidden w-full max-w-[340px] min-w-[280px] h-[270px]">
//     <div className="relative">
//       <img src={img} alt={type} className="w-full h-[100px] object-cover" />
//       <div className="absolute left-0 bottom-0 bg-black bg-opacity-70 text-white px-3 py-1 text-sm font-semibold">{price}</div>
//     </div>
//     <div className="p-4 flex flex-col flex-1">
//       <div className="text-gray-700 text-sm mb-1">{type}</div>
//       <div className="font-bold text-lg text-gray-900 mb-1">{details}</div>
//       <div className="text-gray-500 text-sm mb-3">{city ? city : location}</div>
//       <button className="mt-auto px-4 py-2 border border-blue-400 text-white rounded-lg font-medium" style={{background:'#4f8cff'}}>View Details</button>
//     </div>
//   </div>
// );


// const useSlider = (items, visibleCount = 4) => {
//   const [startIdx, setStartIdx] = React.useState(0);
//   const total = items.length;
//   const nextSlide = () => setStartIdx((prev) => (prev + visibleCount) % total);
//   const prevSlide = () => setStartIdx((prev) => (prev - visibleCount + total) % total);
//   const getVisible = () => {
//     let arr = [];
//     for (let i = 0; i < visibleCount; i++) {
//       arr.push(items[(startIdx + i) % total]);
//     }
//     return arr;
//   };
//   return { getVisible, nextSlide, prevSlide };
// };

// const Sale_Rent_Properties = ({ city }) => {
//   const saleSlider = useSlider(saleProperties, 4);
//   const rentSlider = useSlider(rentProperties, 4);
//   return (
//     <section className="w-full bg-white py-8 px-2">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-2xl font-semibold text-center mb-6">
//           <span
//             className="font-bold bg-gradient-to-r from-red-600 via-black to-red-600 bg-clip-text text-transparent transition duration-700"
//             style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
//           >
//             Latest Properties for Sale / Rent
//           </span>
//         </h2>
//         <div className="mb-2 text-lg font-medium text-gray-700">Property for Sale</div>
//   <div className="relative flex items-center mb-8">
//           <button className="absolute left-[-32px] top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100" onClick={saleSlider.prevSlide} aria-label="Previous" style={{zIndex:10}}>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
//           </button>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full">
//             {saleSlider.getVisible().map((prop, idx) => (
//               <PropertyCard key={idx} {...prop} city={city} />
//             ))}
//           </div>
//           <button className="absolute right-[-32px] top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100" onClick={saleSlider.nextSlide} aria-label="Next" style={{zIndex:10}}>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
//           </button>
//         </div>
//         <div className="mb-2 text-lg font-medium text-gray-700">Property for Rent</div>
//   <div className="relative flex items-center">
//           <button className="absolute left-[-32px] top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100" onClick={rentSlider.prevSlide} aria-label="Previous" style={{zIndex:10}}>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
//           </button>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full">
//             {rentSlider.getVisible().map((prop, idx) => (
//               <PropertyCard key={idx} {...prop} city={city} />
//             ))}
//           </div>
//           <button className="absolute right-[-32px] top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100" onClick={rentSlider.nextSlide} aria-label="Next" style={{zIndex:10}}>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };


// export default Sale_Rent_Properties;






import React, { useState, useEffect } from 'react';

// Replace with your backend API endpoints if needed
const SALE_API_URL = "http://localhost:8000/api/properties-for-sale";
const RENT_API_URL = "http://localhost:8000/api/properties-for-rent";

const PropertyCard = ({ img, price, type, details, location, city }) => (
  <div className="bg-white rounded-xl shadow border border-gray-200 flex flex-col overflow-hidden w-full max-w-[340px] min-w-[280px] h-[270px]">
    <div className="relative">
      <img src={img} alt={type} className="w-full h-[100px] object-cover" />
      <div className="absolute left-0 bottom-0 bg-black bg-opacity-70 text-white px-3 py-1 text-sm font-semibold">{price}</div>
    </div>
    <div className="p-4 flex flex-col flex-1">
      <div className="text-gray-700 text-sm mb-1">{type}</div>
      <div className="font-bold text-lg text-gray-900 mb-1">{details}</div>
      <div className="text-gray-500 text-sm mb-3">{city ? city : location}</div>
      <button className="mt-auto px-4 py-2 border border-blue-400 text-white rounded-lg font-medium" style={{background:'#4f8cff'}}>View Details</button>
    </div>
  </div>
);

const useSlider = (items, visibleCount = 4) => {
  const [startIdx, setStartIdx] = useState(0);
  const total = items.length;
  const nextSlide = () => setStartIdx((prev) => (prev + visibleCount) % total);
  const prevSlide = () => setStartIdx((prev) => (prev - visibleCount + total) % total);
  const getVisible = () => {
    let arr = [];
    for (let i = 0; i < visibleCount; i++) {
      arr.push(items[(startIdx + i) % total]);
    }
    return arr;
  };
  return { getVisible, nextSlide, prevSlide };
};

const SaleRentPropertiesIntegration = ({ city }) => {
  const [saleProperties, setSaleProperties] = useState([]);
  const [rentProperties, setRentProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      let saleData = [];
      let rentData = [];
      try {
        const [saleRes, rentRes] = await Promise.all([
          fetch(SALE_API_URL),
          fetch(RENT_API_URL)
        ]);
        if (saleRes.ok) {
          saleData = await saleRes.json();
        }
        if (rentRes.ok) {
          rentData = await rentRes.json();
        }
      } catch (err) {
        // fallback to static data if backend fails
        saleData = [
          { img: '/realstateproject/image1.png', price: '₹ 64 Lac', type: 'Independent House', details: '3 BHK / 1450 Sq.ft.', location: 'Fathima Nagar, Tiruchirappalli' },
          { img: '/realstateproject/image2.png', price: '₹ 75 Lac', type: 'Farm House', details: '1 RK / 400 Sq.ft.', location: 'Manachanallur, Tiruchirappalli' },
          { img: '/realstateproject/image3.png', price: 'Price on Request', type: 'Flats & Apartments', details: '3 BHK / 1180 Sq.ft.', location: 'Techzone 4, Greater Noida' },
          { img: '/realstateproject/image4.png', price: '₹ 23.63 Lac', type: 'Flats & Apartments', details: '2 BHK / 720 Sq.ft.', location: 'Malvan, Sindhudurg' },
          { img: '/realstateproject/image5.png', price: '₹ 14.15 Cr.', type: 'Farm House', details: '2 BHK / 2998 Sq. Yards', location: 'IT Park, Chandigarh' },
          { img: '/realstateproject/image6.png', price: '₹ 1.10 Cr.', type: 'Flats & Apartments', details: '4 BHK / 2000 Sq.ft.', location: 'Sector 50, Noida' },
          { img: '/realstateproject/image7.png', price: '₹ 2.20 Cr.', type: 'Independent House', details: '5 BHK / 3500 Sq.ft.', location: 'DLF Phase IV, Gurgaon' },
          { img: '/realstateproject/image.png', price: '₹ 80 Lac', type: 'Farm House', details: '2 BHK / 1200 Sq.ft.', location: 'Manesar, Gurgaon' },
          { img: '/realstateproject/image1.png', price: '₹ 1.50 Cr.', type: 'Flats & Apartments', details: '3 BHK / 1800 Sq.ft.', location: 'Powai, Mumbai' },
          { img: '/realstateproject/image2.png', price: '₹ 95 Lac', type: 'Flats & Apartments', details: '2 BHK / 900 Sq.ft.', location: 'Baner, Pune' },
        ];
        rentData = [
          { img: '/realstateproject/image6.png', price: '₹ 1.50 Lac', type: 'Hotel & Restaurant', details: '2 BHK / 1900 Sq.ft.', location: 'Jadavpur, Kolkata' },
          { img: '/realstateproject/image7.png', price: '₹ 16.20 Lac', type: 'Flats & Apartments', details: '5 BHK / 30000 Sq.ft.', location: 'Appa Junction, Hyderabad' },
          { img: '/realstateproject/image.png', price: '₹ 1.45 Lac', type: 'Flats & Apartments', details: '3 BHK / 1100 Sq.ft.', location: 'Hill Road, Bandra West, Mumbai' },
          { img: '/realstateproject/image1.png', price: '₹ 17,000', type: 'Flats & Apartments', details: '1 BHK / 400 Sq.ft.', location: 'Kidwai Nagar, South Extension' },
          { img: '/realstateproject/image2.png', price: '₹ 5.50 Lac', type: 'Flats & Apartments', details: '5 BHK / 20 Ares', location: 'DLF Phase V, Gurgaon' },
          { img: '/realstateproject/image3.png', price: '₹ 2.10 Lac', type: 'Flats & Apartments', details: '2 BHK / 800 Sq.ft.', location: 'Sector 22, Dwarka' },
          { img: '/realstateproject/image4.png', price: '₹ 1.80 Lac', type: 'Hotel & Restaurant', details: '3 BHK / 1500 Sq.ft.', location: 'Salt Lake, Kolkata' },
          { img: '/realstateproject/image5.png', price: '₹ 1.60 Lac', type: 'Flats & Apartments', details: '2 BHK / 900 Sq.ft.', location: 'Kothrud, Pune' },
          { img: '/realstateproject/image6.png', price: '₹ 1.20 Lac', type: 'Flats & Apartments', details: '1 BHK / 500 Sq.ft.', location: 'Andheri East, Mumbai' },
          { img: '/realstateproject/image7.png', price: '₹ 1.10 Lac', type: 'Flats & Apartments', details: '2 BHK / 700 Sq.ft.', location: 'Sector 56, Gurgaon' },
        ];
      }
      setSaleProperties(saleData);
      setRentProperties(rentData);
      setLoading(false);
    };
    fetchProperties();
  }, []);

  const saleSlider = useSlider(saleProperties, 4);
  const rentSlider = useSlider(rentProperties, 4);

  if (loading) {
    return (
      <div className="w-full py-16 text-center text-blue-600 text-lg">Loading properties...</div>
    );
  }

  return (
    <section className="w-full bg-white py-8 px-2">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">
          <span
            className="font-bold bg-gradient-to-r from-red-600 via-black to-red-600 bg-clip-text text-transparent transition duration-700"
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Latest Properties for Sale / Rent
          </span>
        </h2>
        <div className="mb-2 text-lg font-medium text-gray-700">Property for Sale</div>
        <div className="relative flex items-center mb-8">
          <button className="absolute left-[-32px] top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100" onClick={saleSlider.prevSlide} aria-label="Previous" style={{zIndex:10}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full">
            {saleSlider.getVisible().map((prop, idx) => (
              <PropertyCard key={idx} {...prop} city={city} />
            ))}
          </div>
          <button className="absolute right-[-32px] top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100" onClick={saleSlider.nextSlide} aria-label="Next" style={{zIndex:10}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div className="mb-2 text-lg font-medium text-gray-700">Property for Rent</div>
        <div className="relative flex items-center">
          <button className="absolute left-[-32px] top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100" onClick={rentSlider.prevSlide} aria-label="Previous" style={{zIndex:10}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full">
            {rentSlider.getVisible().map((prop, idx) => (
              <PropertyCard key={idx} {...prop} city={city} />
            ))}
          </div>
          <button className="absolute right-[-32px] top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100" onClick={rentSlider.nextSlide} aria-label="Next" style={{zIndex:10}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SaleRentPropertiesIntegration;