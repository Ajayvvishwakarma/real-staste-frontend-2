// import React from "react";

// const faqs = [
//   {
//     question:
//       "What are popular localities in Mumbai to rent a Flats / Apartments?",
//     answer:
//       "Powai, Chembur East, Andheri West, Andheri East, Goregaon East, Chembur, Kandivali East, Goregaon West, Worli, Mira Road are the top localities you can look to rent a Flats / Apartments in Mumbai.",
//   },
//   {
//     question:
//       "What types of Flats / Apartments are available for rent in Mumbai?",
//     answer:
//       "You get options like 1 BHK / 2 BHK / 3 BHK / 4 BHK / 1 RK Flats / Apartments for rent in Mumbai.",
//   },
//   {
//     question:
//       "How many owner's Flats / Apartments available for rent in Mumbai?",
//     answer:
//       "There are 974+ Flats / Apartments for rent in Mumbai on RealEstateIndia.Com.",
//   },
//   {
//     question:
//       "Can I find fully furnished Flats / Apartments for rent in Mumbai?",
//     answer:
//       "Yes, there are 2367+ fully furnished Flats / Apartments for rent in Mumbai.",
//   },
//   {
//     question:
//       "How many semi-furnished rental Flats / Apartments are available in Mumbai?",
//     answer:
//       "More than 2852+ semi-furnished Flats / Apartments for rent are available in Mumbai.",
//   },
//   {
//     question:
//       "Can I find affordable rental residential Flats / Apartments in Mumbai?",
//     answer:
//       "Yes, you can find various affordable rental residential Flats / Apartments available in Mumbai.",
//   },
// ];

// const FAQ_Questions = () => {
//   return (
//     <div className="max-w-7xl mx-auto py-10 px-4">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-6">
//         Things being asked by buyers about Flats / Apartments for Rent in Mumbai
//       </h2>
//       <div className="space-y-8">
//         {faqs.map((faq, idx) => (
//           <div
//             key={idx}
//             className={`bg-white rounded shadow-sm my-2 p-5 border-l-4 ${
//               idx % 2 === 0 ? "border-blue-600" : "border-gray-300"
//             } mb-2`}
//           >
//             <div className="font-semibold text-base text-gray-600 mb-2">
//               Q. {faq.question}
//             </div>
//             <div className="text-gray-700 text-sm">{faq.answer}</div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default FAQ_Questions;








import React from "react";

const faqs = [
  {
    question:
      "What are popular localities in Mumbai to rent a Flats / Apartments?",
    answer:
      "Powai, Chembur East, Andheri West, Andheri East, Goregaon East, Chembur, Kandivali East, Goregaon West, Worli, Mira Road are the top localities you can look to rent a Flats / Apartments in Mumbai.",
  },
  {
    question:
      "What types of Flats / Apartments are available for rent in Mumbai?",
    answer:
      "You get options like 1 BHK / 2 BHK / 3 BHK / 4 BHK / 1 RK Flats / Apartments for rent in Mumbai.",
  },
  {
    question:
      "How many owner's Flats / Apartments available for rent in Mumbai?",
    answer:
      "There are 974+ Flats / Apartments for rent in Mumbai on RealEstateIndia.Com.",
  },
  {
    question:
      "Can I find fully furnished Flats / Apartments for rent in Mumbai?",
    answer:
      "Yes, there are 2367+ fully furnished Flats / Apartments for rent in Mumbai.",
  },
  {
    question:
      "How many semi-furnished rental Flats / Apartments are available in Mumbai?",
    answer:
      "More than 2852+ semi-furnished Flats / Apartments for rent are available in Mumbai.",
  },
  {
    question:
      "Can I find affordable rental residential Flats / Apartments in Mumbai?",
    answer:
      "Yes, you can find various affordable rental residential Flats / Apartments available in Mumbai.",
  },
];

const FAQQuestionsIntegration = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Things being asked by buyers about Flats / Apartments for Rent in Mumbai
      </h2>
      <div className="space-y-8">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`bg-white rounded shadow-sm my-2 p-5 border-l-4 ${
              idx % 2 === 0 ? "border-blue-600" : "border-gray-300"
            } mb-2`}
          >
            <div className="font-semibold text-base text-gray-600 mb-2">
              Q. {faq.question}
            </div>
            <div className="text-gray-700 text-sm">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQQuestionsIntegration;