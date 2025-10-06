// import React, { useState } from 'react';

// const FAQSection = () => {
//   const faqData = [
//     {
//       question: "Which property to buy: under construction or ready to move units?",
//       answer: "The choice depends on your immediate needs and financial goals. Ready-to-move properties are ideal for immediate occupancy but cost 10-15% more. Under-construction properties offer better prices, flexible payment plans, and customization options. Consider factors like builder reputation, RERA approval, completion timeline, and your liquidity before deciding."
//     },
//     {
//       question: "How to sell property faster?",
//       answer: "Price competitively based on current market rates, stage your property attractively, ensure all legal documents are ready, list on multiple platforms, hire a good real estate agent, be flexible with viewing times, consider minor repairs/renovations, and be prepared to negotiate. Professional photography and virtual tours can significantly boost interest."
//     },
//     {
//       question: "What should be preferred between rent and selling?",
//       answer: "Choose selling if you need immediate capital, property values are at peak, or you're relocating permanently. Opt for renting if you want steady monthly income, expect property appreciation, have tax benefits, or plan to return. Consider rental yield (should be 2-4%), maintenance costs, tenant management effort, and market conditions before deciding."
//     },
//     {
//       question: "When is the best time to sell a property?",
//       answer: "The best time is when market conditions are favorable (seller's market), after holding for 2+ years to avoid short-term capital gains tax, during festival seasons (September-March), when infrastructure development is announced in your area, or when you've achieved your target appreciation. Avoid selling during economic uncertainty or monsoon season."
//     },
//     {
//       question: "How much should I spend on a property?",
//       answer: "Follow the 30% rule - your EMI shouldn't exceed 30% of monthly income. Consider down payment (20-25%), registration costs (8-10% of property value), and maintain 6-month emergency fund. Factor in future income growth, family needs, and avoid over-leveraging. Get pre-approved for loans to understand your actual budget."
//     },
//     {
//       question: "What are the hidden costs in property buying?",
//       answer: "Hidden costs include stamp duty (5-10%), registration fees (1%), legal charges, home loan processing fees (0.5-1%), property insurance, maintenance deposits, GST on new properties, brokerage (1-2%), and society membership fees. Budget 12-15% extra above property price for these costs."
//     },
//     {
//       question: "How to check property documents?",
//       answer: "Verify title deed, sale deed, property card, tax receipts, NOC from authorities, building plan approval, occupation certificate, RERA registration, encumbrance certificate, and society formation documents. Hire a property lawyer for due diligence. Ensure all previous transactions are properly documented and taxes paid."
//     },
//     {
//       question: "Should I buy or rent a property?",
//       answer: "Buy if you plan to stay 5+ years, want stability, can afford 20% down payment, and seek tax benefits. Rent if you're unsure about location, job requires mobility, lack sufficient funds, or want flexibility. Consider EMI vs rent ratio, maintenance responsibilities, and opportunity cost of capital before deciding."
//     },
//     {
//       question: "What is security deposit? How much should be paid as a deposit?",
//       answer: "Security deposit is a refundable amount paid to landlord as guarantee against damages or unpaid rent. Typically 2-10 months' rent depending on city and property type. In metro cities, it's usually 6-10 months for residential and 3-6 months for commercial properties. Ensure deposit terms are clearly mentioned in rental agreement."
//     },
//     {
//       question: "Can tenants access all amenities of a housing society?",
//       answer: "Yes, tenants generally have the same rights as owners to use society amenities like gym, pool, clubhouse, and parks. However, some societies may have restrictions or require additional charges. Check society bylaws and rental agreement for specific terms. Landlord should facilitate tenant registration with society management for smooth access."
//     }
//   ];

//   const [openIndex, setOpenIndex] = useState(null);

//   return (
//     <div className="mt-8 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-xl rounded-2xl p-6">
//       <div className="mb-6 text-center">
//         <h2 className="text-xl font-bold text-blue-700 mb-1">Common Doubts & FAQs</h2>
//         <p className="text-sm text-gray-500 italic">Clearing doubts is our duty</p>
//       </div>

//       {/* FAQ Accordion */}
//       <div className="space-y-2">
//         {faqData.map((faq, index) => (
//           <div key={index} className="border border-blue-200 rounded-xl overflow-hidden bg-white/80 shadow-sm transition-all duration-300">
//             <button
//               onClick={() => setOpenIndex(openIndex === index ? null : index)}
//               className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-blue-50 active:bg-blue-100 transition-colors focus:outline-none"
//             >
//               <span className="text-sm font-medium text-blue-800">Q. {faq.question}</span>
//               <svg className={`w-5 h-5 text-blue-400 faq-icon transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>
//             {openIndex === index && (
//               <div className="faq-content px-4 pb-3 text-sm text-gray-700 bg-blue-50 transition-all duration-300 ease-in-out">
//                 {faq.answer}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQSection;












import React, { useState } from "react";

const FAQSectionIntegration = () => {
  const faqData = [
    {
      question: "Which property to buy: under construction or ready to move units?",
      answer:
        "The choice depends on your immediate needs and financial goals. Ready-to-move properties are ideal for immediate occupancy but cost 10-15% more. Under-construction properties offer better prices, flexible payment plans, and customization options. Consider factors like builder reputation, RERA approval, completion timeline, and your liquidity before deciding.",
    },
    {
      question: "How to sell property faster?",
      answer:
        "Price competitively based on current market rates, stage your property attractively, ensure all legal documents are ready, list on multiple platforms, hire a good real estate agent, be flexible with viewing times, consider minor repairs/renovations, and be prepared to negotiate. Professional photography and virtual tours can significantly boost interest.",
    },
    {
      question: "What should be preferred between rent and selling?",
      answer:
        "Choose selling if you need immediate capital, property values are at peak, or you're relocating permanently. Opt for renting if you want steady monthly income, expect property appreciation, have tax benefits, or plan to return. Consider rental yield (should be 2-4%), maintenance costs, tenant management effort, and market conditions before deciding.",
    },
    {
      question: "When is the best time to sell a property?",
      answer:
        "The best time is when market conditions are favorable (seller's market), after holding for 2+ years to avoid short-term capital gains tax, during festival seasons (September-March), when infrastructure development is announced in your area, or when you've achieved your target appreciation. Avoid selling during economic uncertainty or monsoon season.",
    },
    {
      question: "How much should I spend on a property?",
      answer:
        "Follow the 30% rule - your EMI shouldn't exceed 30% of monthly income. Consider down payment (20-25%), registration costs (8-10% of property value), and maintain 6-month emergency fund. Factor in future income growth, family needs, and avoid over-leveraging. Get pre-approved for loans to understand your actual budget.",
    },
    {
      question: "What are the hidden costs in property buying?",
      answer:
        "Hidden costs include stamp duty (5-10%), registration fees (1%), legal charges, home loan processing fees (0.5-1%), property insurance, maintenance deposits, GST on new properties, brokerage (1-2%), and society membership fees. Budget 12-15% extra above property price for these costs.",
    },
    {
      question: "How to check property documents?",
      answer:
        "Verify title deed, sale deed, property card, tax receipts, NOC from authorities, building plan approval, occupation certificate, RERA registration, encumbrance certificate, and society formation documents. Hire a property lawyer for due diligence. Ensure all previous transactions are properly documented and taxes paid.",
    },
    {
      question: "Should I buy or rent a property?",
      answer:
        "Buy if you plan to stay 5+ years, want stability, can afford 20% down payment, and seek tax benefits. Rent if you're unsure about location, job requires mobility, lack sufficient funds, or want flexibility. Consider EMI vs rent ratio, maintenance responsibilities, and opportunity cost of capital before deciding.",
    },
    {
      question: "What is security deposit? How much should be paid as a deposit?",
      answer:
        "Security deposit is a refundable amount paid to landlord as guarantee against damages or unpaid rent. Typically 2-10 months' rent depending on city and property type. In metro cities, it's usually 6-10 months for residential and 3-6 months for commercial properties. Ensure deposit terms are clearly mentioned in rental agreement.",
    },
    {
      question: "Can tenants access all amenities of a housing society?",
      answer:
        "Yes, tenants generally have the same rights as owners to use society amenities like gym, pool, clubhouse, and parks. However, some societies may have restrictions or require additional charges. Check society bylaws and rental agreement for specific terms. Landlord should facilitate tenant registration with society management for smooth access.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="py-8 px-4 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-xl rounded-2xl">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-blue-700">Common Doubts & FAQs</h2>
        <p className="text-sm text-gray-500 italic">Clearing doubts is our duty</p>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-blue-200 rounded-xl bg-white shadow-sm transition-all duration-300"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-blue-50 active:bg-blue-100 transition-colors focus:outline-none"
            >
              <span className="text-sm font-medium text-blue-800">
                Q. {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-3 text-sm text-gray-700 bg-blue-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSectionIntegration;
