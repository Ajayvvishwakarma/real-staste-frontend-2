// import React from 'react'
// import { Link, useParams } from 'react-router-dom';

// const Buy_FAQ_Section = () => {
//   const { city } = useParams();
  
//   // Helper function to format city name for display
//   const formatCityName = (citySlug) => {
//     if (!citySlug) return "India";
//     return citySlug
//       .split('-')
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');
//   };

//   const formattedCity = formatCityName(city);

//   const faqs = [
//     {
//       question: `Is buying a residential plot in ${formattedCity} a good investment ?`,
//     answer: <>The residential plots in {formattedCity} are available with good infrastructure and have a better value than other property options. As the <Link to="#" className="text-blue-600">residential lands in {formattedCity}</Link> have a good appreciation rate, buying a residential plot in this city is a great money-saving investment that will guarantee higher returns in the future.</>,
//     },
//     {
//       question: `How many residential plots/lands for sale are available in ${formattedCity} ?`,
//     answer: <>In {formattedCity}, there is an abundance of residential plots and lands available for sale, offering a wide array of options for prospective buyers. Currently, there are over <Link to="#" className="text-blue-600">991+ residential plots and lands available for sale in {formattedCity}</Link>, ensuring that individuals with varying preferences and budgets can find their ideal property.</>,
//     },
//     {
//       question: `Can I find the best plot for sale in ${formattedCity} between 11-20 lakhs ?`,
//     answer: <>Looking for the perfect plot for sale in {formattedCity} within a budget of 11 to 20 lakhs? We've got you covered! Best <Link to="#" className="text-blue-600">residential plots in {formattedCity} between 11 to 20 lakhs</Link> price range.</>,
//     },
//     {
//       question: `Can I find the plot/land for sale in ${formattedCity} between 21-30 lakhs ?`,
//     answer: <>Yes, you can find plot/land for sale in {formattedCity} specifically between the price range of 21-30 lakhs. If you are interested in exploring such options, you can go through the given link and access the whole listing of <Link to="#" className="text-blue-600">plots/land in {formattedCity} between 21 to 30 lakhs</Link>.</>,
//     },
//     // New FAQ cards from image
//     {
//       question: `How many plots in ${formattedCity} for sale between 31-40 lakhs price range ?`,
//     answer: <>Curious about the number of plots available for sale in {formattedCity} between the range of 31-40 lakhs? We have the answer for you! Click here to access a comprehensive <Link to="#" className="text-blue-600">list of plot and land in {formattedCity} between 31 to 40 lakhs</Link>.</>,
//     },
//     {
//       question: `Which are the favourable areas in ${formattedCity} for purchasing or leasing a residential property ?`,
//       answer: <><span>{formattedCity}, offers several great locations to buy or rent a house. Here are some of the top choices :</span><br/>
//       <ol className="list-decimal ml-6 mt-2 text-blue-700">
//     <li><Link to="#">Affordable plots in Patanjali Yogpeeth, {formattedCity}</Link></li>
//     <li><Link to="#">Residentials plots in Jwalapur, {formattedCity}</Link></li>
//     <li><Link to="#">Plots in Roorkee, {formattedCity}</Link></li>
//     <li><Link to="#">Best Affordable plots in Patanjali, {formattedCity}</Link></li>
//     <li><Link to="#">Residential lands in Suman Nagar, {formattedCity}</Link></li>
//     <li><Link to="#">Plots in Sidcul NH 73, {formattedCity}</Link></li>
//     <li><Link to="#">Plots for sale in Bahadrabad, {formattedCity}</Link></li>
//       </ol></>,
//     },
//     {
//       question: `Which are some cost-effective areas in ${formattedCity} for buying or renting a residential property ?`,
//       answer: <><span>If you're looking for affordable locations in {formattedCity} to purchase or lease a residential property, there are a few options worth considering.</span><br/>
//     <div className="mt-2">
//     <Link to="#" className="text-blue-700 mr-2">NH 58, {formattedCity}</Link>
//     <Link to="#" className="text-blue-700 mr-2">Kankhal, {formattedCity}</Link><br/>
//       <span>Additionally, areas like </span>
//     <Link to="#" className="text-blue-700 mr-2">Shivalik Nagar, {formattedCity}</Link>
//     <Link to="#" className="text-blue-700">Roshnabad, {formattedCity}</Link>
//     </div>
//         <span className="block mt-2 text-gray-700">These locations in {formattedCity} provide opportunities for budget-conscious individuals or families to find suitable Homes without straining their finances.</span>
//       </>,
//     },
//   ];

//   return (
//     <div className="max-w-6xl mx-auto py-12 px-4">
//       <h2 className="text-3xl font-semibold text-gray-800 mb-8">FAQ : By buyers about Residential Land / Plots for Sale in {formattedCity}</h2>
//       <div className="space-y-6">
//         {faqs.map((faq, idx) => (
//         <div key={idx} className="bg-white rounded-xl border border-gray-100 shadow-lg px-6 py-5 flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:border-blue-400 hover:bg-blue-50 cursor-pointer" style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.07)' }}>
//             <div className="flex items-start">
//               <span className="text-red-600 font-bold text-lg mr-2">Q.</span>
//               <span className="font-semibold text-gray-800 text-lg">{faq.question}</span>
//             </div>
//             <div className="mt-2 text-gray-700 text-base">
//               {faq.answer}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Buy_FAQ_Section








import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// Replace with backend endpoint to fetch FAQs dynamically if needed
const API_URL = "http://localhost:8000/api/faqs";

const BuyFAQSectionIntegration = () => {
  const { city } = useParams(); // Extract the city slug from the route parameters
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Helper function to format city name for display
  const formatCityName = (citySlug) => {
    if (!citySlug) return "India";
    return citySlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formattedCity = formatCityName(city);

  // Fetch FAQs from backend
  const fetchFAQs = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`${API_URL}?city=${city}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch FAQs.");
      }

      const data = await response.json();
      setFaqs(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFAQs();
  }, [city]);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading FAQs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 text-lg">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">
        FAQ : By buyers about Residential Land / Plots for Sale in {formattedCity}
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-gray-100 shadow-lg px-6 py-5 flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:border-blue-400 hover:bg-blue-50 cursor-pointer"
            style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.07)" }}
          >
            <div className="flex items-start">
              <span className="text-red-600 font-bold text-lg mr-2">Q.</span>
              <span className="font-semibold text-gray-800 text-lg">{faq.question}</span>
            </div>
            <div className="mt-2 text-gray-700 text-base">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyFAQSectionIntegration;



