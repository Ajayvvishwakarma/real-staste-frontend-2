// import React, { useState } from "react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const LoanEligibilityCalculator = ({ isOpen, onClose }) => {
//   const [age, setAge] = useState(35);
//   const [occupation, setOccupation] = useState("Salaried");
//   const [income, setIncome] = useState(100000);
//   const [existingEmi, setExistingEmi] = useState(10000);
//   const [interestRate, setInterestRate] = useState(8.9);
//   const [tenure, setTenure] = useState(20);
//   const [borrowers, setBorrowers] = useState("One");

//   const [results, setResults] = useState(null);

//   // EMI Formula
//   const calculateEMI = (P, r, n) => {
//     const monthlyRate = r / (12 * 100);
//     const months = n * 12;
//     return (P * monthlyRate * Math.pow(1 + monthlyRate, months)) /
//       (Math.pow(1 + monthlyRate, months) - 1);
//   };

//   const handleCalculate = () => {
//     // Max EMI capacity = 60% of income - existing EMI
//     const maxEmi = income * 0.6 - existingEmi;

//     // Approximate loan eligibility
//     let eligibleLoan = 0;
//     let testLoan = 100000;
//     while (true) {
//       const emi = calculateEMI(testLoan, interestRate, tenure);
//       if (emi > maxEmi) break;
//       eligibleLoan = testLoan;
//       testLoan += 10000;
//     }

//     const emi = calculateEMI(eligibleLoan, interestRate, tenure);
//     const totalPayable = emi * tenure * 12;

//     // Chart Data
//     const chartData = Array.from({ length: tenure + 1 }, (_, i) => ({
//       year: i,
//       principal: (eligibleLoan * (1 - i / tenure)) / 100000, // in Lacs
//       interest: (totalPayable - eligibleLoan) * (1 - i / tenure) / 100000, // in Lacs
//     }));

//     setResults({
//       eligibleLoan,
//       emi,
//       totalPayable,
//       chartData,
//     });
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
//         >
//           <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

//         {/* Header */}
//         <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-t-lg">
//           <h2 className="text-2xl font-bold mb-2">Loan Eligibility Calculator</h2>
//           <p className="text-green-100">Calculate how much home loan you can get based on your income</p>
//         </div>

//         {/* Content */}
//         <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Left Side Inputs */}
//           <div>
//             {/* Borrowers Toggle */}
//             <div className="mb-6">
//               <p className="text-sm font-medium text-gray-600 mb-2">
//                 Number of Borrowers
//               </p>
//               <div className="flex gap-2">
//                 <button
//                   className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
//                     borrowers === "One"
//                       ? "bg-green-500 text-white"
//                       : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                   }`}
//                   onClick={() => setBorrowers("One")}
//                 >
//                   One
//                 </button>
//                 <button
//                   className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
//                     borrowers === "Two"
//                       ? "bg-green-500 text-white"
//                       : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                   }`}
//                   onClick={() => setBorrowers("Two")}
//                 >
//                   Two
//                 </button>
//               </div>
//             </div>

//             {/* Inputs Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//               <div>
//                 <label className="text-sm font-medium text-gray-600">Your Age</label>
//                 <input
//                   type="number"
//                   value={age}
//                   onChange={(e) => setAge(Number(e.target.value))}
//                   className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                 />
//               </div>
//               <div>
//                 <label className="text-sm font-medium text-gray-600">Occupation</label>
//                 <select
//                   value={occupation}
//                   onChange={(e) => setOccupation(e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                 >
//                   <option>Salaried</option>
//                   <option>Self-Employed</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="text-sm font-medium text-gray-600">Net Income (₹)</label>
//                 <input
//                   type="number"
//                   value={income}
//                   onChange={(e) => setIncome(Number(e.target.value))}
//                   className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                 />
//               </div>
//               <div>
//                 <label className="text-sm font-medium text-gray-600">
//                   Existing Monthly EMI (₹)
//                 </label>
//                 <input
//                   type="number"
//                   value={existingEmi}
//                   onChange={(e) => setExistingEmi(Number(e.target.value))}
//                   className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                 />
//               </div>
//               <div>
//                 <label className="text-sm font-medium text-gray-600">Rate of Interest (%)</label>
//                 <input
//                   type="number"
//                   step="0.1"
//                   value={interestRate}
//                   onChange={(e) => setInterestRate(Number(e.target.value))}
//                   className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                 />
//               </div>
//               <div>
//                 <label className="text-sm font-medium text-gray-600">Tenure (Years)</label>
//                 <input
//                   type="number"
//                   value={tenure}
//                   onChange={(e) => setTenure(Number(e.target.value))}
//                   className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                 />
//               </div>
//             </div>

//             {/* Calculate Button */}
//             <button
//               onClick={handleCalculate}
//               className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105"
//             >
//               Calculate Loan Eligibility
//             </button>
//           </div>

//           {/* Right Side Results */}
//           <div>
//             {results ? (
//               <>
//                 <h3 className="text-center text-gray-700 mb-4 text-lg font-semibold">
//                   Your Estimated Results
//                 </h3>
//                 <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
//                   <ResponsiveContainer width="100%" height={200}>
//                     <AreaChart data={results.chartData}>
//                       <XAxis dataKey="year" />
//                       <YAxis />
//                       <Tooltip />
//                       <Area
//                         type="monotone"
//                         dataKey="principal"
//                         stackId="1"
//                         stroke="#10B981"
//                         fill="#10B981"
//                       />
//                       <Area
//                         type="monotone"
//                         dataKey="interest"
//                         stackId="1"
//                         stroke="#059669"
//                         fill="#059669"
//                       />
//                     </AreaChart>
//                   </ResponsiveContainer>
//                 </div>

//                 <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
//                   <div className="text-center mb-4">
//                     <p className="text-gray-600 text-sm">You could borrow up to</p>
//                     <h2 className="text-3xl font-bold text-green-600">
//                       ₹ {results.eligibleLoan.toLocaleString("en-IN")}
//                     </h2>
//                   </div>
                  
//                   <div className="grid grid-cols-2 gap-4 mb-4">
//                     <div className="text-center">
//                       <p className="text-gray-600 text-sm">Total Payable</p>
//                       <h3 className="text-xl font-bold text-gray-800">
//                         ₹ {Math.round(results.totalPayable).toLocaleString("en-IN")}
//                       </h3>
//                     </div>
//                     <div className="text-center">
//                       <p className="text-gray-600 text-sm">Monthly EMI</p>
//                       <h3 className="text-xl font-bold text-gray-800">
//                         ₹ {Math.round(results.emi).toLocaleString("en-IN")}
//                       </h3>
//                     </div>
//                   </div>
//                 </div>

//                 <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 mt-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105">
//                   Apply for Loan
//                 </button>
//                 <p className="text-sm text-gray-500 text-center mt-2">
//                   It's easy with Bhoomi
// The Real Estate!
//                 </p>
//               </>
//             ) : (
//               <div className="flex flex-col items-center justify-center h-full text-center py-12">
//                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
//                   <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-700 mb-2">Ready to Calculate?</h3>
//                 <p className="text-gray-500">
//                   Fill in your details and click Calculate to see your loan eligibility.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoanEligibilityCalculator;











import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Replace with your backend API endpoint for loan eligibility calculation
const API_URL = "http://localhost:8000/api/loan-eligibility";

const LoanEligibilityCalculatorIntegration = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    age: 35,
    occupation: "Salaried",
    income: 100000,
    existingEmi: 10000,
    interestRate: 8.9,
    tenure: 20,
    borrowers: "One",
  });

  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "borrowers" ? value : Number(value),
    }));
  };

  const calculateClientSide = () => {
    const { income, existingEmi, interestRate, tenure } = formData;
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;
    
    // Calculate eligible loan amount (60% of income - existing EMI)
    const maxMonthlyEMI = (income * 0.6) - existingEmi;
    
    // Calculate loan amount using EMI formula: EMI = P * r * (1+r)^n / ((1+r)^n - 1)
    const eligibleLoan = Math.floor(
      (maxMonthlyEMI * ((Math.pow(1 + monthlyRate, months) - 1))) / 
      (monthlyRate * Math.pow(1 + monthlyRate, months))
    );
    
    const totalPayable = maxMonthlyEMI * months;
    
    // Generate chart data
    const chartData = [];
    let remainingPrincipal = eligibleLoan;
    
    for (let year = 1; year <= tenure; year++) {
      const yearlyInterest = remainingPrincipal * (interestRate / 100);
      const yearlyPrincipal = (maxMonthlyEMI * 12) - yearlyInterest;
      remainingPrincipal -= yearlyPrincipal;
      
      chartData.push({
        year: year,
        principal: Math.max(0, Math.round(yearlyPrincipal)),
        interest: Math.max(0, Math.round(yearlyInterest)),
      });
    }
    
    return {
      eligibleLoan: eligibleLoan > 0 ? eligibleLoan : 0,
      totalPayable: totalPayable > 0 ? totalPayable : 0,
      emi: maxMonthlyEMI > 0 ? maxMonthlyEMI : 0,
      chartData,
    };
  };

  const handleCalculate = async () => {
    setLoading(true);
    setError("");
    
    try {
      // Try to call backend API first
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to calculate loan eligibility.");
      }

      const data = await response.json();
      
      console.log("API Response:", data); // Debug log
      
      // Transform API response to match expected format
      let transformedData;
      
      // Check if response has maxLoanAmount (backend format)
      if (data.maxLoanAmount !== undefined) {
        transformedData = {
          eligibleLoan: data.maxLoanAmount,
          emi: data.maxEmi,
          totalPayable: data.maxEmi * formData.tenure * 12,
          eligible: data.eligible,
          maxPropertyValue: data.maxPropertyValue,
          availableIncome: data.availableIncome,
        };
        
        // Generate chartData if not provided
        if (!data.chartData) {
          const clientCalc = calculateClientSide();
          transformedData.chartData = clientCalc.chartData;
        } else {
          transformedData.chartData = data.chartData;
        }
        
        console.log("Transformed Data:", transformedData);
        setResults(transformedData);
        return;
      }
      
      // Check if response already has eligibleLoan (expected format)
      if (data.eligibleLoan !== undefined) {
        // Ensure chartData exists
        if (!data.chartData || !Array.isArray(data.chartData) || data.chartData.length === 0) {
          const clientCalc = calculateClientSide();
          data.chartData = clientCalc.chartData;
        }
        setResults(data);
        return;
      }
      
      // If neither format matches, use client-side calculation
      console.warn("Invalid API response format, using client-side calculation");
      setResults(calculateClientSide());
    } catch (error) {
      // Fallback to client-side calculation if backend is not available
      console.warn("Backend API error, using client-side calculation:", error.message);
      setError("Using offline calculation mode");
      setResults(calculateClientSide());
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-t-lg">
          <h2 className="text-2xl font-bold mb-2">Loan Eligibility Calculator</h2>
          <p className="text-green-100">Calculate how much home loan you can get based on your income</p>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side Inputs */}
          <div>
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-600 mb-2">Number of Borrowers</p>
              <div className="flex gap-2">
                <button
                  className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                    formData.borrowers === "One"
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => handleInputChange({ target: { name: "borrowers", value: "One" } })}
                >
                  One
                </button>
                <button
                  className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                    formData.borrowers === "Two"
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => handleInputChange({ target: { name: "borrowers", value: "Two" } })}
                >
                  Two
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { label: "Your Age", name: "age", type: "number", value: formData.age },
                { label: "Occupation", name: "occupation", type: "select", value: formData.occupation },
                { label: "Net Income (₹)", name: "income", type: "number", value: formData.income },
                { label: "Existing Monthly EMI (₹)", name: "existingEmi", type: "number", value: formData.existingEmi },
                { label: "Rate of Interest (%)", name: "interestRate", type: "number", value: formData.interestRate },
                { label: "Tenure (Years)", name: "tenure", type: "number", value: formData.tenure },
              ].map((input) => (
                <div key={input.name}>
                  <label className="text-sm font-medium text-gray-600">{input.label}</label>
                  {input.type === "select" ? (
                    <select
                      name={input.name}
                      value={input.value}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option>Salaried</option>
                      <option>Self-Employed</option>
                    </select>
                  ) : (
                    <input
                      name={input.name}
                      type={input.type}
                      value={input.value}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={handleCalculate}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105"
            >
              {loading ? "Calculating..." : "Calculate Loan Eligibility"}
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>

          {/* Right Side Results */}
          <div>
            {results && results.eligibleLoan ? (
              <>
                <h3 className="text-center text-gray-700 mb-4 text-lg font-semibold">
                  Your Estimated Results
                </h3>
                {results.chartData && results.chartData.length > 0 && (
                  <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                    <ResponsiveContainer width="100%" height={200}>
                      <AreaChart data={results.chartData}>
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="principal"
                          stackId="1"
                          stroke="#10B981"
                          fill="#10B981"
                        />
                        <Area
                          type="monotone"
                          dataKey="interest"
                          stackId="1"
                          stroke="#059669"
                          fill="#059669"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                )}

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                  <div className="text-center mb-4">
                    <p className="text-gray-600 text-sm">You could borrow up to</p>
                    <h2 className="text-3xl font-bold text-green-600">
                      ₹ {(results.eligibleLoan || 0).toLocaleString("en-IN")}
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-gray-600 text-sm">Total Payable</p>
                      <h3 className="text-xl font-bold text-gray-800">
                        ₹ {Math.round(results.totalPayable || 0).toLocaleString("en-IN")}
                      </h3>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600 text-sm">Monthly EMI</p>
                      <h3 className="text-xl font-bold text-gray-800">
                        ₹ {Math.round(results.emi || 0).toLocaleString("en-IN")}
                      </h3>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <p className="text-gray-500 text-center">
                Fill in your details and click Calculate to see your loan eligibility.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanEligibilityCalculatorIntegration;