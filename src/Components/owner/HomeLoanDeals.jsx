// import React, { useState, useMemo } from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
// } from "recharts";
// import { FaEnvelope } from "react-icons/fa";

// /* ---- Static content ---- */
// const categories = ["Home Loan", "Banks", "Loan EMI", "Loan Eligibility"];
// const faqs = {
//   "Home Loan": [
//     {
//       q: "What are the types of home loan available?",
//       a: "The common types of home loans include home purchase loan, home construction loan, home improvement loan, plot loan, and balance transfer loan.",
//     },
//     {
//       q: "What is the difference between fixed rate and floating rate of interest?",
//       a: "A fixed rate remains constant throughout the loan tenure, while a floating rate changes based on market conditions and RBI regulations.",
//     },
//     {
//       q: "Are there any other charges that accompany home loans?",
//       a: "Yes, common charges include processing fees, legal verification fees, technical valuation charges, and prepayment/foreclosure charges.",
//     },
//     {
//       q: "How to calculate interest on home loan?",
//       a: "Home loan interest is calculated using EMI formula: EMI = [P x R x (1+R)^N] / [(1+R)^N-1], where P=loan amount, R=monthly interest rate, N=tenure in months.",
//     },
//     {
//       q: "What is home loan process?",
//       a: "The process includes loan application, document submission, eligibility check, property verification, loan sanction, and final disbursement.",
//     },
//   ],
//   Banks: [
//     {
//       q: "Which banks provide best home loan rates?",
//       a: "Banks like SBI, HDFC, ICICI, Axis, and LIC Housing Finance usually offer competitive interest rates starting from 6.8% onwards.",
//     },
//     {
//       q: "How does bank decide home loan eligibility?",
//       a: "Banks assess eligibility based on income, credit score, existing debts, job stability, and age of the applicant.",
//     },
//   ],
//   "Loan EMI": [
//     {
//       q: "What is EMI?",
//       a: "EMI (Equated Monthly Instalment) is a fixed monthly payment made towards repayment of a loan, which includes both principal and interest.",
//     },
//     {
//       q: "How to reduce EMI burden?",
//       a: "You can reduce EMI by increasing the tenure, opting for a balance transfer at lower rates, or making part-prepayments.",
//     },
//   ],
//   "Loan Eligibility": [
//     {
//       q: "What factors affect home loan eligibility?",
//       a: "Your income, age, credit score, employment stability, property value, and existing loans determine your eligibility.",
//     },
//     {
//       q: "What is the minimum CIBIL score for home loan?",
//       a: "A score of 700+ is generally considered good for getting home loan approval at better interest rates.",
//     },
//   ],
// };

// const BANKS = [
//   {
//     name: "Kotak Mahindra Bank",
//     rate: "7.55%",
//     fee: "₹10,000 + GST",
//     emi: "₹35,689",
//     maxLoan: "90%",
//     logo: "/image.png",
//     featured: false,
//   },
//   {
//     name: "HDFC",
//     rate: "8.50%",
//     fee: "₹3,000 + GST",
//     emi: "₹37,195",
//     maxLoan: "90%",
//     logo: "/image2.png",
//     featured: true,
//   },
//   {
//     name: "LIC Housing Finance Ltd",
//     rate: "6.90%",
//     fee: "₹5,000 + GST",
//     emi: "₹34,678",
//     maxLoan: "90%",
//     logo: "/image3.png",
//     featured: true,
//   },
//   {
//     name: "SBI Home Loans",
//     rate: "6.80%",
//     fee: "₹10,000 + GST",
//     emi: "₹34,524",
//     maxLoan: "90%",
//     logo: "/image4.png",
//     featured: false,
//   },
//   {
//     name: "ICICI Bank",
//     rate: "6.80%",
//     fee: "₹7,500 + GST",
//     emi: "₹34,524",
//     maxLoan: "90%",
//     logo: "/image5.png",
//     featured: false,
//   },
//   {
//     name: "AXIS Bank",
//     rate: "6.90%",
//     fee: "₹10,000 + GST",
//     emi: "₹34,678",
//     maxLoan: "90%",
//     logo: "/image7.png",
//     featured: false,
//   },
//   {
//     name: "PNB Housing Finance",
//     rate: "9.25%",
//     fee: "₹10,000 + GST",
//     emi: "₹38,409",
//     maxLoan: "90%",
//     logo: "/logo.png",
//     featured: false,
//   },
// ];

// /* ---- Utility ---- */
// const toNumber = (v, fallback = 0) => {
//   const n = Number(v);
//   return Number.isFinite(n) ? n : fallback;
// };

// /* ---- Component ---- */
// export default function HomeLoanDeals() {
//   // Scroll handler for navbar
//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };
//   // Modal state
//   const [showModal, setShowModal] = useState(false);
//   /* FAQ / UI state */
//   const [activeCategory, setActiveCategory] = useState("Home Loan");
//   const [openIndex, setOpenIndex] = useState(null);

//   /* --- EMI Pie Calculator state (top card) --- */
//   const [emiLoanAmount, setEmiLoanAmount] = useState(3000000); // 30,00,000
//   const [emiTenure, setEmiTenure] = useState(20); // years
//   const [emiRate, setEmiRate] = useState(8.9); // %

//   /* --- Eligibility form state (right side) --- */
//   const [eligAge, setEligAge] = useState(35);
//   const [eligOccupation, setEligOccupation] = useState("Salaried");
//   const [eligIncome, setEligIncome] = useState(100000); // monthly
//   const [eligExistingEMI, setEligExistingEMI] = useState(10000);
//   const [eligInterest, setEligInterest] = useState(8.9);
//   const [eligTenure, setEligTenure] = useState(20);

//   /* result of eligibility calculation */
//   const [eligResult, setEligResult] = useState(null); // { borrowable, payable, emi }

//   /* ---- EMI Pie calculation (principal vs interest) ---- */
//   const { emi, totalPayment, totalInterest } = useMemo(() => {
//     const loan = toNumber(emiLoanAmount, 0);
//     const rate = toNumber(emiRate, 0);
//     const years = toNumber(emiTenure, 0);
//     const monthlyRate = rate / 12 / 100;
//     const months = Math.max(0, Math.round(years * 12));

//     if (loan <= 0 || months <= 0) {
//       return { emi: 0, totalPayment: 0, totalInterest: 0 };
//     }

//     let emiValue = 0;
//     if (monthlyRate === 0) {
//       emiValue = loan / months;
//     } else {
//       const pow = Math.pow(1 + monthlyRate, months);
//       emiValue = (loan * monthlyRate * pow) / (pow - 1);
//     }
//     const totalPayable = emiValue * months;
//     const interestAmount = totalPayable - loan;
//     return {
//       emi: Math.round(emiValue),
//       totalPayment: Math.round(totalPayable),
//       totalInterest: Math.round(interestAmount),
//     };
//   }, [emiLoanAmount, emiTenure, emiRate]);

//   const pieData = [
//     { name: "Principal Amount", value: toNumber(emiLoanAmount, 0) },
//     { name: "Interest Amount", value: totalInterest },
//   ];
//   const PIE_COLORS = ["#0a0a3c", "#4fd1c5"];

//   /* ---- Eligibility calculation ---- */
//   const calculateEligibility = () => {
//     const parsedInterest = toNumber(eligInterest, 0);
//     const parsedTenure = Math.max(0, Math.round(toNumber(eligTenure, 0)));
//     const parsedIncome = toNumber(eligIncome, 0);
//     const parsedExistingEMI = toNumber(eligExistingEMI, 0);

//     if (parsedTenure <= 0 || parsedIncome <= 0) {
//       setEligResult(null);
//       return;
//     }

//     const monthlyRate = parsedInterest / 12 / 100;
//     const months = parsedTenure * 12;
//     const maxEMI = Math.max(0, parsedIncome * 0.6 - parsedExistingEMI); // bank rule example

//     let loanAmountCalc = 0;
//     if (monthlyRate === 0) {
//       loanAmountCalc = maxEMI * months;
//     } else {
//       const numerator = maxEMI * (Math.pow(1 + monthlyRate, months) - 1);
//       const denominator = monthlyRate * Math.pow(1 + monthlyRate, months);
//       loanAmountCalc = denominator !== 0 ? numerator / denominator : 0;
//     }

//     setEligResult({
//       borrowable: Math.round(loanAmountCalc),
//       payable: Math.round(maxEMI * months),
//       emi: Math.round(maxEMI),
//     });
//   };

//   /* ---- Area chart data for eligibility result (amortization snapshots yearly) ---- */
//   const areaChartData = useMemo(() => {
//     // Use eligResult.borrowable if present, otherwise default sample
//     const loan = eligResult ? toNumber(eligResult.borrowable, 0) : 6716630;
//     const rate = toNumber(eligInterest, 0);
//     const years = Math.max(1, Math.round(toNumber(eligTenure, 0)));
//     const monthlyRate = rate / 12 / 100;
//     const months = years * 12;

//     // compute monthly EMI for this loan assuming EMI computed from eligInterest & years
//     let monthlyEmi = 0;
//     if (monthlyRate === 0) {
//       monthlyEmi = loan / months;
//     } else {
//       const pow = Math.pow(1 + monthlyRate, months);
//       monthlyEmi = (loan * monthlyRate * pow) / (pow - 1);
//     }

//     // amortize month by month, record remaining principal & remaining interest at each year boundary
//     const balances = [loan]; // index 0 = before any payment
//     let balance = loan;
//     for (let m = 1; m <= months; m++) {
//       const interestComponent = monthlyRate === 0 ? 0 : balance * monthlyRate;
//       const principalComponent = monthlyEmi - interestComponent;
//       balance = Math.max(0, balance - principalComponent);
//       balances.push(balance);
//     }

//     // total payable now:
//     const totalPayable = Math.round(monthlyEmi * months);
//     const data = [];
//     for (let y = 0; y <= years; y++) {
//       const monthIndex = Math.min(months, y * 12);
//       const remainingPrincipal = balances[monthIndex] ?? 0;
//       const remainingMonths = months - monthIndex;
//       const remainingTotalPayable = Math.round(
//         monthlyEmi * Math.max(0, remainingMonths)
//       );
//       const remainingInterest = Math.max(
//         0,
//         remainingTotalPayable - remainingPrincipal
//       );

//       data.push({
//         year: y,
//         principal: +(remainingPrincipal / 100000).toFixed(2), // in Lakhs
//         interest: +(remainingInterest / 100000).toFixed(2), // in Lakhs
//       });
//     }
//     return data;
//   }, [eligResult, eligInterest, eligTenure]);

//   /* ---- small safe handlers to avoid NaN strings in number inputs ---- */
//   const handleNumberChange = (setter) => (e) => {
//     setter(toNumber(e.target.value, 0));
//   };

//   /* ---- UI Render ---- */
//   return (
//     <div className="w-full min-h-screen font-sans bg-gray-50">
//       {/* NAVBAR */}
//       <header className="bg-green-600 text-white px-4 py-3 flex justify-between items-center shadow-md">
//         <h1 className="text-lg font-bold">Bhoomi</h1>
//         <nav className="hidden md:flex space-x-6 text-sm">
//           <button className="hover:text-green-200 bg-transparent" onClick={() => scrollToSection("banks-section")}>BANKS</button>
//           <button className="hover:text-green-200 bg-transparent" onClick={() => scrollToSection("emi-section")}>CALCULATE EMI</button>
//           <button className="hover:text-green-200 bg-transparent" onClick={() => scrollToSection("eligibility-section")}>CHECK ELIGIBILITY</button>
//           <button className="hover:text-green-200 bg-transparent" onClick={() => scrollToSection("callback-section")}>REQUEST CALLBACK</button>
//           <button className="hover:text-green-200 bg-transparent" onClick={() => scrollToSection("faq-section")}>FAQs</button>
//         </nav>
//       </header>

//       {/* HERO */}
//       <section className="bg-white mt-6 mx-4 md:mx-8 rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-center">
//         <div className="flex-1 text-center md:text-left">
//           <h2 className="text-2xl md:text-3xl font-bold leading-tight">
//             Let's find you the{" "}
//             <span className="text-green-600">best home loan</span> deal.
//           </h2>
//           <p className="text-sm text-gray-600 mt-2">
//             Quickly compare bank deals and calculate EMI & eligibility.
//           </p>
//         </div>
//         <form className="bg-gray-50 p-3 rounded-md shadow sm:flex gap-2 w-full md:w-auto">
//           <input
//             type="text"
//             placeholder="₹ 30,00,000"
//             className="px-3 py-2 rounded text-sm w-full sm:w-44"
//           />
//           <input
//             type="number"
//             placeholder="20 Years"
//             className="px-3 py-2 rounded text-sm w-full sm:w-28"
//           />
//           <input
//             type="number"
//             placeholder="35 Years"
//             className="px-3 py-2 rounded text-sm w-full sm:w-28"
//           />
//           <button
//             type="button"
//             className="bg-green-600 hover:bg-black text-white px-4 py-2 rounded text-sm mt-2 sm:mt-0"
//             onClick={() => setShowModal(true)}
//           >
//             Let's get started
//           </button>
//         </form>
//       </section>

//   {/* BANK DEALS */}
//   <section id="banks-section" className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 py-4 sm:py-6">
//         <h3 className="text-xl font-semibold text-gray-800 mb-3">
//           Bank(s) Deals
//         </h3>
//         <div className="w-full">
//           <div className="hidden md:block overflow-x-auto rounded-lg">
//             <table className="min-w-full bg-white rounded-lg shadow-sm">
//               <thead className="text-left">
//                 <tr>
//                   <th className="px-4 py-3 text-green-600">Bank Name</th>
//                   <th className="px-4 py-3 text-green-600">Rate of interest</th>
//                   <th className="px-4 py-3 text-green-600">Processing fees</th>
//                   <th className="px-4 py-3 text-green-600">EMI</th>
//                   <th className="px-4 py-3 text-green-600">Max. loan amount</th>
//                   <th className="px-4 py-3"></th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {BANKS.map((b, i) => (
//                   <tr key={i} className="hover:bg-green-100 transition">
//                     <td className="px-4 py-3 flex items-center gap-3">
//                       <div className="w-10 h-10 bg-white border border-green-600 rounded flex items-center justify-center">
//                         <img
//                           src={b.logo}
//                           alt={b.name}
//                           className="max-w-full max-h-full object-contain"
//                         />
//                       </div>
//                       <div>
//                         <div className="text-black font-medium flex items-center gap-2">
//                           {b.featured && (
//                             <span className="text-xs font-bold px-2 py-1 rounded bg-green-600 text-white mr-2">
//                               FEATURED
//                             </span>
//                           )}
//                           {b.name}
//                         </div>
//                       </div>
//                     </td>
//                     <td className="px-4 py-3 text-black font-semibold">
//                       {b.rate}
//                     </td>
//                     <td className="px-4 py-3 text-black">{b.fee}</td>
//                     <td className="px-4 py-3 text-green-700 font-semibold">
//                       {b.emi}
//                     </td>
//                     <td className="px-4 py-3 text-black font-semibold">
//                       {b.maxLoan}{" "}
//                       <span className="text-xs text-gray-500">
//                         Loan to value ratio
//                       </span>
//                     </td>
//                     <td className="px-4 py-3 text-right">
//                       <div className="flex items-center justify-end gap-3">
//                         <FaEnvelope className="text-green-700" />
//                         <button
//                           className="bg-green-600 hover:bg-black text-white px-4 py-2 rounded text-sm font-semibold"
//                           onClick={() => setShowModal(true)}
//                         >
//                           Get me this deal
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           {/* Mobile view: cards */}
//           <div className="md:hidden grid grid-cols-1 gap-4">
//             {BANKS.map((b, i) => (
//               <div key={i} className="bg-white rounded-lg shadow-sm p-3 flex flex-col sm:flex-row items-center gap-3">
//                 <div className="w-14 h-14 bg-white border border-green-600 rounded flex items-center justify-center">
//                   <img src={b.logo} alt={b.name} className="max-w-full max-h-full object-contain" />
//                 </div>
//                 <div className="flex-1 w-full">
//                   <div className="text-black font-medium flex items-center gap-2 mb-1">
//                     {b.featured && (
//                       <span className="text-xs font-bold px-2 py-1 rounded bg-green-600 text-white mr-2">FEATURED</span>
//                     )}
//                     {b.name}
//                   </div>
//                   <div className="text-sm text-gray-700 mb-1">Rate: <span className="font-semibold text-black">{b.rate}</span></div>
//                   <div className="text-sm text-gray-700 mb-1">Processing Fee: <span className="font-semibold text-black">{b.fee}</span></div>
//                   <div className="text-sm text-green-700 mb-1">EMI: <span className="font-semibold">{b.emi}</span></div>
//                   <div className="text-xs text-gray-500 mb-1">Max Loan: <span className="font-semibold text-black">{b.maxLoan}</span> Loan to value ratio</div>
//                 </div>
//                 <div className="flex flex-col gap-2 w-full sm:w-auto">
//                   <button className="bg-green-600 hover:bg-black text-white px-4 py-2 rounded text-sm font-semibold w-full" onClick={() => setShowModal(true)}>Get me this deal</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//   {/* MAIN EMI CALCULATOR CARD */}
//   <section id="emi-section" className="w-full max-w-6xl mx-auto p-2 sm:p-4 md:p-6 bg-white rounded-xl shadow-lg mb-6">
//         <h2 className="text-xl md:text-2xl font-bold text-green-700 text-center">
//           Calculate EMI for the loan amount you require
//         </h2>
//         <p className="text-sm text-gray-600 text-center mb-4">
//           Calculate your loan EMI instantly by submitting your details below
//         </p>

//         {/* Inputs */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
//           <div>
//             <label className="text-green-700 text-sm mb-1 block">
//               Loan amount
//             </label>
//             <div className="flex items-center">
//               <span className="px-3 py-2 rounded-l border border-r-0 border-gray-200 bg-gray-50 text-gray-600">
//                 ₹
//               </span>
//               <input
//                 type="number"
//                 value={emiLoanAmount}
//                 onChange={handleNumberChange(setEmiLoanAmount)}
//                 className="w-full rounded-r border border-gray-200 px-3 py-2 focus:ring-2 focus:ring-green-500"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="text-green-700 text-sm mb-1 block">
//               Tenure (Years)
//             </label>
//             <div className="flex">
//               <input
//                 type="number"
//                 value={emiTenure}
//                 onChange={handleNumberChange(setEmiTenure)}
//                 className="w-full rounded-l border border-gray-200 px-3 py-2 focus:ring-2 focus:ring-green-500"
//               />
//               <span className="px-3 py-2 rounded-r border border-l-0 border-gray-200 bg-gray-50 text-gray-600">
//                 Years
//               </span>
//             </div>
//           </div>

//           <div>
//             <label className="text-green-700 text-sm mb-1 block">
//               Rate of Interest (%)
//             </label>
//             <div className="flex">
//               <input
//                 type="number"
//                 step="0.1"
//                 value={emiRate}
//                 onChange={handleNumberChange(setEmiRate)}
//                 className="w-full rounded-l border border-gray-200 px-3 py-2 focus:ring-2 focus:ring-green-500"
//               />
//               <span className="px-3 py-2 rounded-r border border-l-0 border-gray-200 bg-gray-50 text-gray-600">
//                 %
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Content: Pie & Summary */}
//   <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
//           {/* Pie Chart */}
//           <div className="w-full lg:w-3/4 p-2 sm:p-4 bg-white rounded-2xl shadow-inner">
//             <div className="h-64">
//               <ResponsiveContainer>
//                 <PieChart>
//                   <Pie
//                     data={pieData}
//                     dataKey="value"
//                     nameKey="name"
//                     cx="50%"
//                     cy="50%"
//                     outerRadius={90}
//                     label={({ percent }) => `${(percent * 100).toFixed(2)}%`}
//                   >
//                     {pieData.map((entry, idx) => (
//                       <Cell
//                         key={`c-${idx}`}
//                         fill={PIE_COLORS[idx % PIE_COLORS.length]}
//                       />
//                     ))}
//                   </Pie>
//                   <Tooltip
//                     formatter={(value) => `₹ ${value.toLocaleString()}`}
//                   />
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>

//             <div className="flex justify-center gap-6 mt-3 text-sm">
//               <div className="flex items-center gap-2">
//                 <span className="w-3 h-3 inline-block rounded-sm bg-[#0a0a3c]" />
//                 <span className="text-gray-700">
//                   Principal ₹{toNumber(emiLoanAmount, 0).toLocaleString()}
//                 </span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="w-3 h-3 inline-block rounded-sm bg-[#4fd1c5]" />
//                 <span className="text-gray-700">
//                   Interest ₹{totalInterest.toLocaleString()}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* EMI Details */}
//           <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start gap-2 sm:gap-3">
//             <div>
//               <p className="text-gray-500 text-sm">Monthly EMI</p>
//               <h3 className="text-3xl font-bold text-green-700">
//                 ₹ {emi.toLocaleString()}
//               </h3>
//             </div>
//             <div>
//               <p className="text-gray-500 text-sm">Total Payable amount</p>
//               <h4 className="text-lg font-semibold text-black">
//                 ₹ {totalPayment.toLocaleString()}
//               </h4>
//             </div>
//             <button className="mt-2 bg-green-600 hover:bg-black text-white font-semibold px-6 py-2 rounded shadow" onClick={() => setShowModal(true)}>
//               Get instant loan
//             </button>
//             {/* Modal Popup for Loan Application */}
//             {showModal && (
//               <div className="fixed inset-0 z-50 flex items-center justify-center">
//                 <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-2 p-3 sm:p-4 relative animate-fadeIn border-2 border-green-600">
//                   {/* Close button */}
//                   <button
//                     className="absolute top-3 right-3 text-2xl text-black hover:text-green-600"
//                     onClick={() => setShowModal(false)}
//                     aria-label="Close"
//                   >
//                     &times;
//                   </button>

//                   <h2 className="text-xl font-bold text-green-700 text-center mb-4">
//                     Get the Best Home Loan Deal
//                   </h2>

//                   <form className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                     <div>
//                       <label className="block text-green-700 font-semibold mb-1">
//                         Loan amount
//                       </label>
//                       <input
//                         type="number"
//                         className="w-full rounded-lg px-3 py-1 bg-gray-50 border-2 border-green-600 focus:ring-2 focus:ring-green-600 text-black"
//                         placeholder="₹ 30,00,000"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-green-700 font-semibold mb-1">
//                         Tenure
//                       </label>
//                       <input
//                         type="number"
//                         className="w-full rounded-lg px-3 py-1 bg-gray-50 border-2 border-green-600 focus:ring-2 focus:ring-green-600 text-black"
//                         placeholder="20"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-green-700 font-semibold mb-1">
//                         Your Age
//                       </label>
//                       <input
//                         type="number"
//                         className="w-full rounded-lg px-3 py-1 bg-gray-50 border-2 border-green-600 focus:ring-2 focus:ring-green-600 text-black"
//                         placeholder="35"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-green-700 font-semibold mb-1">
//                         Is your property identified
//                       </label>
//                       <select className="w-full rounded-lg px-3 py-1 bg-gray-50 border-2 border-green-600 focus:ring-2 focus:ring-green-600 text-black">
//                         <option>Select</option>
//                         <option>Yes</option>
//                         <option>No</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block text-green-700 font-semibold mb-1">
//                         Property city
//                       </label>
//                       <select className="w-full rounded-lg px-3 py-1 bg-gray-50 border-2 border-green-600 focus:ring-2 focus:ring-green-600 text-black">
//                         <option>Select</option>
//                         <option>Delhi</option>
//                         <option>Mumbai</option>
//                         <option>Bangalore</option>
//                         <option>Other</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block text-green-700 font-semibold mb-1">
//                         Property Cost
//                       </label>
//                       <input
//                         type="number"
//                         className="w-full rounded-lg px-3 py-1 bg-gray-50 border-2 border-green-600 focus:ring-2 focus:ring-green-600 text-black"
//                         placeholder="₹ 37,50,000"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-green-700 font-semibold mb-1">
//                         How are you currently employed
//                       </label>
//                       <select className="w-full rounded-lg px-3 py-1 bg-gray-50 border-2 border-green-600 focus:ring-2 focus:ring-green-600 text-black">
//                         <option>Salaried</option>
//                         <option>Self-Employed</option>
//                         <option>Business</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block text-green-700 font-semibold mb-1">
//                         Your income
//                       </label>
//                       <input
//                         type="number"
//                         className="w-full rounded-lg px-3 py-1 bg-gray-50 border-2 border-green-600 focus:ring-2 focus:ring-green-600 text-black"
//                         placeholder="₹ 1,00,000"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-green-700 font-semibold mb-1">
//                         Current total EMI
//                       </label>
//                       <input
//                         type="number"
//                         className="w-full rounded-lg px-3 py-1 bg-gray-50 border-2 border-green-600 focus:ring-2 focus:ring-green-600 text-black"
//                         placeholder="₹ 10,000"
//                       />
//                     </div>
//                     <div className="sm:col-span-2 lg:col-span-1">
//                       <label className="block text-green-700 font-semibold mb-1">
//                         Full Name (as per PAN)
//                       </label>
//                       <input
//                         type="text"
//                         className="w-full rounded-lg px-3 py-1 bg-gray-50 border-2 border-green-600 focus:ring-2 focus:ring-green-600 text-black"
//                         placeholder="Full Name"
//                       />
//                     </div>
//                     <div className="sm:col-span-2 lg:col-span-1">
//                       <label className="block text-green-700 font-semibold mb-1">
//                         Your Email Id
//                       </label>
//                       <input
//                         type="email"
//                         className="w-full rounded-lg px-3 py-1 bg-gray-50 border-2 border-green-600 focus:ring-2 focus:ring-green-600 text-black"
//                         placeholder="Your Email Id"
//                       />
//                     </div>
//                     <div className="sm:col-span-2 lg:col-span-1">
//                       <label className="block text-green-700 font-semibold mb-1">
//                         Mobile Number (OTP verification req)
//                       </label>
//                       <input
//                         type="text"
//                         className="w-full rounded-lg px-3 py-1 bg-gray-50 border-2 border-green-600 focus:ring-2 focus:ring-green-600 text-black"
//                         placeholder="Mobile Number"
//                       />
//                     </div>
//                   </form>

//                   <div className="flex items-center mt-4">
//                     <input
//                       type="checkbox"
//                       id="authorize"
//                       className="mr-2 accent-green-600"
//                     />
//                     <label htmlFor="authorize" className="text-xs text-black">
//                       I authorize{" "}
//                       <span className="text-green-700 font-semibold">
//                         99acres.com
//                       </span>{" "}
//                       relevant loan providers and their representatives to call,
//                       SMS or email me with reference to the application &amp;
//                       accept 99acres{" "}
//                       <a href="#" className="text-green-700 underline">
//                         Terms &amp; Conditions
//                       </a>
//                       . This consent shall override any DNC/NDNC registration.
//                     </label>
//                   </div>

//                   <button className="w-full mt-6 bg-green-600 hover:bg-black text-white font-bold py-2.5 rounded-lg transition text-lg">
//                     Submit Details
//                   </button>

//                   <p className="text-xs text-black mt-2 text-center">
//                     *Please note that our privacy policy does not govern the use
//                     of your data by financial institutions once it is shared.
//                     For more information, please refer the privacy policy of
//                     related concerned bank.
//                   </p>
//                 </div>
//               </div>
//             )}
//             <p className="text-xs text-gray-500">It's easy with 99acres!</p>
//           </div>
//         </div>
//       </section>

//   {/* ELIGIBILITY FORM + Result (Area Chart) */}
//   <section id="eligibility-section" className="w-full max-w-6xl mx-auto px-2 sm:px-4 md:px-8 py-4 sm:py-6 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
//         {/* Form */}
//   <div className="bg-white rounded-xl shadow p-2 sm:p-4 md:p-6 mb-4">
//           <h3 className="text-lg font-semibold mb-3">
//             Calculate housing loan eligibility
//           </h3>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//             <div>
//               <label className="text-sm text-gray-700">Your Age</label>
//               <input
//                 type="number"
//                 value={eligAge}
//                 onChange={(e) => setEligAge(toNumber(e.target.value, eligAge))}
//                 className="w-full rounded px-3 py-2 mt-1 border border-gray-200 focus:ring-2 focus:ring-green-400"
//               />
//             </div>
//             <div>
//               <label className="text-sm text-gray-700">Occupation</label>
//               <select
//                 value={eligOccupation}
//                 onChange={(e) => setEligOccupation(e.target.value)}
//                 className="w-full rounded px-3 py-2 mt-1 border border-gray-200 focus:ring-2 focus:ring-green-400"
//               >
//                 <option>Salaried</option>
//                 <option>Self-Employed</option>
//                 <option>Business</option>
//               </select>
//             </div>

//             <div>
//               <label className="text-sm text-gray-700">
//                 Net Income (Monthly)
//               </label>
//               <input
//                 type="number"
//                 value={eligIncome}
//                 onChange={(e) =>
//                   setEligIncome(toNumber(e.target.value, eligIncome))
//                 }
//                 className="w-full rounded px-3 py-2 mt-1 border border-gray-200 focus:ring-2 focus:ring-green-400"
//               />
//             </div>
//             <div>
//               <label className="text-sm text-gray-700">
//                 Existing Monthly EMI
//               </label>
//               <input
//                 type="number"
//                 value={eligExistingEMI}
//                 onChange={(e) =>
//                   setEligExistingEMI(toNumber(e.target.value, eligExistingEMI))
//                 }
//                 className="w-full rounded px-3 py-2 mt-1 border border-gray-200 focus:ring-2 focus:ring-green-400"
//               />
//             </div>

//             <div>
//               <label className="text-sm text-gray-700">
//                 Rate of Interest (%)
//               </label>
//               <input
//                 type="number"
//                 step="0.1"
//                 value={eligInterest}
//                 onChange={(e) =>
//                   setEligInterest(toNumber(e.target.value, eligInterest))
//                 }
//                 className="w-full rounded px-3 py-2 mt-1 border border-gray-200 focus:ring-2 focus:ring-green-400"
//               />
//             </div>
//             <div>
//               <label className="text-sm text-gray-700">Tenure (Years)</label>
//               <input
//                 type="number"
//                 value={eligTenure}
//                 onChange={(e) =>
//                   setEligTenure(toNumber(e.target.value, eligTenure))
//                 }
//                 className="w-full rounded px-3 py-2 mt-1 border border-gray-200 focus:ring-2 focus:ring-green-400"
//               />
//             </div>
//           </div>

//           <div className="mt-4">
//             <button
//               onClick={calculateEligibility}
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold"
//             >
//               Calculate
//             </button>
//           </div>

//           {/* Eligibility summary */}
//           <div className="mt-4">
//             <h4 className="text-sm font-medium mb-2">Your Estimated Results</h4>
//             {eligResult ? (
//               <div className="bg-gray-50 rounded-lg p-4">
//                 <div className="flex justify-between mb-2">
//                   <span className="text-sm">You could borrow upto</span>
//                   <span className="text-green-700 font-bold">
//                     ₹ {eligResult.borrowable.toLocaleString()}
//                   </span>
//                 </div>
//                 <div className="flex justify-between mb-2">
//                   <span className="text-sm">Payable Amount</span>
//                   <span className="text-teal-600 font-bold">
//                     ₹ {eligResult.payable.toLocaleString()}
//                   </span>
//                 </div>
//                 <hr />
//                 <div className="flex justify-between mt-2">
//                   <span className="text-sm">Monthly EMI</span>
//                   <span className="font-semibold">
//                     ₹ {eligResult.emi.toLocaleString()}
//                   </span>
//                 </div>
//                 <div className="mt-3 text-center">
//                   <button className="bg-green-600 hover:bg-black text-white px-4 py-2 rounded">
//                     Apply for Loan
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div className="bg-gray-50 rounded-lg p-4 text-center text-gray-500">
//                 Enter details to calculate loan eligibility
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Area chart + result */}
//   <div className="bg-white rounded-xl shadow p-2 sm:p-4 md:p-6 mb-4">
//           <div className="h-64">
//             <ResponsiveContainer>
//               <AreaChart
//                 data={areaChartData}
//                 margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
//               >
//                 <XAxis
//                   dataKey="year"
//                   tick={{ fontSize: 12 }}
//                   label={{
//                     value: "Time (in years)",
//                     position: "insideBottom",
//                     offset: -5,
//                   }}
//                 />
//                 <YAxis
//                   tickFormatter={(v) => `${v}`}
//                   label={{
//                     value: "Amount (L)",
//                     angle: -90,
//                     position: "insideLeft",
//                   }}
//                 />
//                 <Tooltip
//                   formatter={(val) => `${val} L`}
//                   labelFormatter={(l) => `Year ${l}`}
//                 />
//                 <Area
//                   type="monotone"
//                   dataKey="principal"
//                   stackId="1"
//                   stroke="#0a0a3c"
//                   fill="#0a0a3c"
//                 />
//                 <Area
//                   type="monotone"
//                   dataKey="interest"
//                   stackId="1"
//                   stroke="#4fd1c5"
//                   fill="#4fd1c5"
//                 />
//               </AreaChart>
//             </ResponsiveContainer>
//           </div>

//           <div className="mt-4 flex justify-between items-center">
//             <div>
//               <p className="text-gray-600 text-sm">You could borrow upto</p>
//               <h3 className="text-lg font-semibold text-gray-800">
//                 ₹{" "}
//                 {(eligResult
//                   ? eligResult.borrowable
//                   : 6716630
//                 ).toLocaleString()}
//               </h3>
//             </div>
//             <div className="text-right">
//               <p className="text-gray-600 text-sm">Payable Amount</p>
//               <h3 className="text-lg font-semibold text-teal-600">
//                 ₹{" "}
//                 {(eligResult
//                   ? eligResult.payable
//                   : Math.round(emi * emiTenure * 12)
//                 ).toLocaleString()}
//               </h3>
//             </div>
//           </div>

//           <div className="border-t border-gray-200 pt-4 text-center">
//             <p className="text-gray-600 text-sm">Monthly EMI</p>
//             <h2 className="text-2xl font-bold text-gray-800">
//               ₹ {(eligResult ? eligResult.emi : emi).toLocaleString()}
//             </h2>
//           </div>

//           <div className="mt-4">
//             <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg">
//               Apply for Loan
//             </button>
//             <p className="text-xs text-gray-500 text-center mt-2">
//               It's easy with 99acres!
//             </p>
//           </div>
//         </div>
//       </section>

//   {/* CALLBACK */}
//   <section id="callback-section" className="w-full max-w-6xl mx-auto px-2 sm:px-4 md:px-8 pb-6 sm:pb-8">
//   <div className="bg-white rounded-xl shadow p-2 sm:p-4 md:p-6 mb-4">
//           <h3 className="font-semibold text-gray-900 mb-2">
//             Can't find any deal matching your criteria?
//           </h3>
//           <p className="text-gray-600 mb-4">
//             Provide your details, we'll connect you to a bank who can provide
//             you a customized home loan solution.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//             <input
//               placeholder="Full Name"
//               className="rounded px-3 py-2 border border-gray-200 focus:ring-2 focus:ring-green-400"
//             />
//             <input
//               placeholder="Your Email Id"
//               type="email"
//               className="rounded px-3 py-2 border border-gray-200 focus:ring-2 focus:ring-green-400"
//             />
//             <input
//               placeholder="Mobile Number (OTP verification req)"
//               className="rounded px-3 py-2 border border-gray-200 focus:ring-2 focus:ring-green-400"
//             />
//           </div>
//           <div className="mt-4">
//             <button className="bg-green-600 hover:bg-black text-white px-4 py-2 rounded">
//               Request Callback
//             </button>
//           </div>
//         </div>
//       </section>

//   {/* FAQ */}
//   <section id="faq-section" className="w-full max-w-6xl mx-auto px-2 sm:px-4 md:px-8 pb-8 sm:pb-12">
//         <h2 className="text-2xl font-bold mb-2">
//           Frequently asked questions about Home Loans
//         </h2>
//         <p className="text-gray-600 mb-4">
//           Know what questions users frequently ask about home loans and
//           calculators.
//         </p>

//         <div className="flex flex-wrap gap-2 mb-4">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => {
//                 setActiveCategory(cat);
//                 setOpenIndex(null);
//               }}
//               className={`px-4 py-2 rounded-full font-semibold ${
//                 activeCategory === cat
//                   ? "bg-green-600 text-white"
//                   : "bg-white text-green-600 border border-green-300"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//   <div className="bg-white rounded-xl shadow p-2 sm:p-4 md:p-6 mb-4">
//           {faqs[activeCategory].map((f, idx) => (
//             <div key={idx} className="p-3 border-b last:border-b-0">
//               <button
//                 onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
//                 className="w-full text-left flex justify-between items-center"
//               >
//                 <span className="font-medium">{f.q}</span>
//                 <span className="text-green-600">
//                   {openIndex === idx ? "▲" : "▼"}
//                 </span>
//               </button>
//               {openIndex === idx && <p className="mt-3 text-gray-700">{f.a}</p>}
//             </div>
//           ))}
//         </div>

//         <div className="text-right mt-3">
//           <button className="text-green-600 hover:underline">View More</button>
//         </div>
//       </section>
//     </div>
//   );
// }









import React, { useState, useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
} from "recharts";
import { FaEnvelope } from "react-icons/fa";

const HomeLoanDealsIntegration = () => {
  const categories = ["Home Loan", "Banks", "Loan EMI", "Loan Eligibility"];
  const faqs = {
    "Home Loan": [
      {
        q: "What are the types of home loan available?",
        a: "The common types of home loans include home purchase loan, home construction loan, home improvement loan, plot loan, and balance transfer loan.",
      },
      {
        q: "How to calculate interest on home loan?",
        a: "Home loan interest is calculated using EMI formula: EMI = [P x R x (1+R)^N] / [(1+R)^N-1], where P=loan amount, R=monthly interest rate, N=tenure in months.",
      },
    ],
    Banks: [
      {
        q: "Which banks provide best home loan rates?",
        a: "Banks like SBI, HDFC, ICICI, Axis, and LIC Housing Finance usually offer competitive interest rates starting from 6.8% onwards.",
      },
    ],
    "Loan EMI": [
      {
        q: "What is EMI?",
        a: "EMI (Equated Monthly Instalment) is a fixed monthly payment made towards repayment of a loan.",
      },
    ],
    "Loan Eligibility": [
      {
        q: "What factors affect home loan eligibility?",
        a: "Income, age, credit score, employment stability, property value, and existing loans determine eligibility.",
      },
    ],
  };

  const BANKS = [
    {
      name: "HDFC",
      rate: "8.50%",
      fee: "₹3,000 + GST",
      emi: "₹37,195",
      maxLoan: "90%",
      logo: "/image2.png",
      featured: true,
    },
    {
      name: "SBI Home Loans",
      rate: "6.80%",
      fee: "₹10,000 + GST",
      emi: "₹34,524",
      maxLoan: "90%",
      logo: "/image4.png",
      featured: false,
    },
  ];

  const [emiLoanAmount, setEmiLoanAmount] = useState(3000000);
  const [emiTenure, setEmiTenure] = useState(20);
  const [emiRate, setEmiRate] = useState(8.9);
  const { emi, totalPayment, totalInterest } = useMemo(() => {
    const loan = emiLoanAmount;
    const rate = emiRate / 12 / 100;
    const months = emiTenure * 12;

    let emiValue = 0;
    if (rate === 0) {
      emiValue = loan / months;
    } else {
      const pow = Math.pow(1 + rate, months);
      emiValue = (loan * rate * pow) / (pow - 1);
    }
    const totalPayable = emiValue * months;
    const interestAmount = totalPayable - loan;

    return {
      emi: Math.round(emiValue),
      totalPayment: Math.round(totalPayable),
      totalInterest: Math.round(interestAmount),
    };
  }, [emiLoanAmount, emiTenure, emiRate]);

  const pieData = [
    { name: "Principal Amount", value: emiLoanAmount },
    { name: "Interest Amount", value: totalInterest },
  ];
  const PIE_COLORS = ["#0a0a3c", "#4fd1c5"];

  return (
    <section className="w-full bg-gray-50 py-8">
      {/* Banner */}
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-green-600">Home Loan Deals</h1>
        <p className="text-gray-600 mt-2">
          Compare the best bank offers and calculate EMI instantly.
        </p>
      </div>

      {/* Bank Deals */}
      <section className="mt-8 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bank Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BANKS.map((bank, idx) => (
            <div key={idx} className="bg-white p-4 rounded-md shadow-md">
              <div className="flex items-center">
                <img
                  src={bank.logo}
                  alt={bank.name}
                  className="w-10 h-10 mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{bank.name}</h3>
                  <p className="text-sm text-gray-600">{bank.rate} Interest</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EMI Calculator */}
      <section className="mt-10 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          EMI Calculator
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label>Loan Amount</label>
            <input
              type="number"
              value={emiLoanAmount}
              onChange={(e) => setEmiLoanAmount(Number(e.target.value))}
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label>Tenure (Years)</label>
            <input
              type="number"
              value={emiTenure}
              onChange={(e) => setEmiTenure(Number(e.target.value))}
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label>Rate of Interest (%)</label>
            <input
              type="number"
              value={emiRate}
              onChange={(e) => setEmiRate(Number(e.target.value))}
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <div>
            <h3 className="text-lg font-bold">EMI</h3>
            <p className="text-2xl">₹{emi.toLocaleString()}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Total Interest</h3>
            <p className="text-2xl">₹{totalInterest.toLocaleString()}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Total Payment</h3>
            <p className="text-2xl">₹{totalPayment.toLocaleString()}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">FAQs</h2>
        <div>
          {categories.map((category, idx) => (
            <div key={idx} className="mb-6">
              <h3 className="text-lg font-bold">{category}</h3>
              {faqs[category].map((faq, index) => (
                <div key={index} className="mt-2">
                  <p className="font-semibold">{faq.q}</p>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default HomeLoanDealsIntegration;