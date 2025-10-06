// import React, { useState } from "react";

// const BudgetCalculator = ({ isOpen, onClose }) => {
//   const [savings, setSavings] = useState(2000000); // 20 Lacs
//   const [emi, setEmi] = useState(20000);
//   const [loanTenure, setLoanTenure] = useState(20);

//   // Enhanced calculation logic
//   const calculateBudget = () => {
//     const interestRate = 8.75; // 8.75% per annum
//     const monthlyRate = interestRate / (12 * 100);
//     const months = loanTenure * 12;
    
//     // Calculate loan amount from EMI
//     const loanAmount = emi * ((Math.pow(1 + monthlyRate, months) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, months)));
    
//     // Total budget = savings + loan amount
//     const totalBudget = savings + loanAmount;
    
//     // Convert to lacs and create range
//     const budgetInLacs = totalBudget / 100000;
//     const budgetMin = Math.floor(budgetInLacs * 0.9); // 10% lower
//     const budgetMax = Math.ceil(budgetInLacs * 1.1); // 10% higher
    
//     return { budgetMin, budgetMax, loanAmount, totalBudget };
//   };

//   const { budgetMin, budgetMax, loanAmount, totalBudget } = calculateBudget();

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl relative">
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
//           <h2 className="text-2xl font-bold mb-2">Budget Calculator</h2>
//           <p className="text-green-100">Check your home buying budget based on your savings and EMI capacity</p>
//         </div>

//         {/* Content */}
//         <div className="p-6 sm:p-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* Left side controls */}
//             <div className="flex flex-col gap-8">
//               {/* Savings */}
//               <div className="bg-gray-50 rounded-lg p-6">
//                 <div className="flex justify-between text-base font-medium text-gray-700 mb-3">
//                   <span>Savings for buying home</span>
//                   <span className="text-green-600 font-semibold text-lg">
//                     ₹ {savings.toLocaleString("en-IN")}
//                   </span>
//                 </div>
//                 <input
//                   type="range"
//                   min={0}
//                   max={20000000}
//                   step={100000}
//                   value={savings}
//                   onChange={(e) => setSavings(Number(e.target.value))}
//                   className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//                   style={{
//                     background: `linear-gradient(to right, #10B981 0%, #10B981 ${(savings / 20000000) * 100}%, #e5e7eb ${(savings / 20000000) * 100}%, #e5e7eb 100%)`
//                   }}
//                 />
//                 <div className="flex justify-between text-sm text-gray-500 mt-2">
//                   <span>₹ 0</span>
//                   <span>₹ 2 Cr</span>
//                 </div>
//               </div>

//               {/* EMI */}
//               <div className="bg-gray-50 rounded-lg p-6">
//                 <div className="flex justify-between text-base font-medium text-gray-700 mb-3">
//                   <span>EMI you can afford</span>
//                   <span className="text-green-600 font-semibold text-lg">
//                     ₹ {emi.toLocaleString("en-IN")}
//                   </span>
//                 </div>
//                 <input
//                   type="range"
//                   min={1000}
//                   max={200000}
//                   step={1000}
//                   value={emi}
//                   onChange={(e) => setEmi(Number(e.target.value))}
//                   className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//                   style={{
//                     background: `linear-gradient(to right, #10B981 0%, #10B981 ${(emi / 200000) * 100}%, #e5e7eb ${(emi / 200000) * 100}%, #e5e7eb 100%)`
//                   }}
//                 />
//                 <div className="flex justify-between text-sm text-gray-500 mt-2">
//                   <span>₹ 1,000</span>
//                   <span>₹ 2 Lacs</span>
//                 </div>
//               </div>

//               {/* Loan Tenure */}
//               <div className="bg-gray-50 rounded-lg p-6">
//                 <div className="flex justify-between text-base font-medium text-gray-700 mb-3">
//                   <span>Preferred loan tenure</span>
//                   <span className="text-green-600 font-semibold text-lg">
//                     {loanTenure} Years
//                   </span>
//                 </div>
//                 <input
//                   type="range"
//                   min={1}
//                   max={30}
//                   value={loanTenure}
//                   onChange={(e) => setLoanTenure(Number(e.target.value))}
//                   className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//                   style={{
//                     background: `linear-gradient(to right, #10B981 0%, #10B981 ${(loanTenure / 30) * 100}%, #e5e7eb ${(loanTenure / 30) * 100}%, #e5e7eb 100%)`
//                   }}
//                 />
//                 <div className="flex justify-between text-sm text-gray-500 mt-2">
//                   <span>1 yr</span>
//                   <span>30 yrs</span>
//                 </div>
//               </div>
//             </div>

//             {/* Right side - Results */}
//             <div className="flex flex-col justify-center">
//               {/* Home Budget Display */}
//               <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 mb-6 border border-green-200 text-center">
//                 <div className="mb-6">
//                   <p className="text-gray-600 text-lg font-medium mb-2">
//                     Your home budget
//                   </p>
//                   <p className="text-4xl font-bold text-green-600 mb-2">
//                     ₹ {budgetMin} - {budgetMax} Lacs
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     Based on your financial capacity
//                   </p>
//                 </div>

//                 {/* Budget Breakdown */}
//                 <div className="bg-white rounded-lg p-6 mb-6">
//                   <h4 className="font-semibold text-gray-800 mb-4">Budget Breakdown</h4>
//                   <div className="space-y-3 text-sm">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Your Savings:</span>
//                       <span className="font-medium">₹ {(savings / 100000).toFixed(1)} Lacs</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Loan Amount:</span>
//                       <span className="font-medium">₹ {(loanAmount / 100000).toFixed(1)} Lacs</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Monthly EMI:</span>
//                       <span className="font-medium">₹ {emi.toLocaleString("en-IN")}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Loan Tenure:</span>
//                       <span className="font-medium">{loanTenure} years</span>
//                     </div>
//                     <hr className="my-2" />
//                     <div className="flex justify-between font-semibold">
//                       <span className="text-gray-800">Total Budget:</span>
//                       <span className="text-green-600">₹ {(totalBudget / 100000).toFixed(1)} Lacs</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="space-y-3">
//                   <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105">
//                     Find Properties in Budget
//                   </button>
//                   <button className="w-full border border-green-600 text-green-600 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-200">
//                     Talk to Expert
//                   </button>
//                 </div>
//               </div>

//               {/* Additional Info */}
//               <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
//                 <div className="flex items-start gap-3">
//                   <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-blue-800 mb-1">Pro Tip</p>
//                     <p className="text-sm text-blue-700">
//                       Consider keeping 10-15% extra budget for registration, stamp duty, and other charges.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Footer Note */}
//           <p className="text-sm text-gray-500 mt-8 text-center bg-gray-50 p-4 rounded-lg">
//             *Estimated budget is calculated at an average interest rate of 8.75% per annum. 
//             Actual rates may vary based on your credit profile and bank policies.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BudgetCalculator;











import React, { useState } from "react";

// Replace with your backend API endpoint for budget calculation
const API_URL = "http://localhost:8000/api/budget-calculator";

const BudgetCalculatorIntegration = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    savings: 2000000, // 20 Lacs
    emi: 20000,
    loanTenure: 20,
  });

  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  const calculateBudget = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to calculate budget.");
      }

      const data = await response.json();
      setResults(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-t-lg">
          <h2 className="text-2xl font-bold mb-2">Budget Calculator</h2>
          <p className="text-green-100">Check your home buying budget based on your savings and EMI capacity</p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left side controls */}
            <div className="flex flex-col gap-8">
              {/* Savings */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between text-base font-medium text-gray-700 mb-3">
                  <span>Savings for buying home</span>
                  <span className="text-green-600 font-semibold text-lg">
                    ₹ {formData.savings.toLocaleString("en-IN")}
                  </span>
                </div>
                <input
                  type="range"
                  name="savings"
                  min={0}
                  max={20000000}
                  step={100000}
                  value={formData.savings}
                  onChange={handleInputChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #10B981 0%, #10B981 ${(formData.savings / 20000000) * 100}%, #e5e7eb ${(formData.savings / 20000000) * 100}%, #e5e7eb 100%)`,
                  }}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>₹ 0</span>
                  <span>₹ 2 Cr</span>
                </div>
              </div>

              {/* EMI */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between text-base font-medium text-gray-700 mb-3">
                  <span>EMI you can afford</span>
                  <span className="text-green-600 font-semibold text-lg">
                    ₹ {formData.emi.toLocaleString("en-IN")}
                  </span>
                </div>
                <input
                  type="range"
                  name="emi"
                  min={1000}
                  max={200000}
                  step={1000}
                  value={formData.emi}
                  onChange={handleInputChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #10B981 0%, #10B981 ${(formData.emi / 200000) * 100}%, #e5e7eb ${(formData.emi / 200000) * 100}%, #e5e7eb 100%)`,
                  }}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>₹ 1,000</span>
                  <span>₹ 2 Lacs</span>
                </div>
              </div>

              {/* Loan Tenure */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between text-base font-medium text-gray-700 mb-3">
                  <span>Preferred loan tenure</span>
                  <span className="text-green-600 font-semibold text-lg">
                    {formData.loanTenure} Years
                  </span>
                </div>
                <input
                  type="range"
                  name="loanTenure"
                  min={1}
                  max={30}
                  value={formData.loanTenure}
                  onChange={handleInputChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #10B981 0%, #10B981 ${(formData.loanTenure / 30) * 100}%, #e5e7eb ${(formData.loanTenure / 30) * 100}%, #e5e7eb 100%)`,
                  }}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>1 yr</span>
                  <span>30 yrs</span>
                </div>
              </div>
            </div>

            {/* Right side - Results */}
            <div className="flex flex-col justify-center">
              {loading ? (
                <div className="text-center text-green-600">Calculating...</div>
              ) : error ? (
                <div className="text-center text-red-600">{error}</div>
              ) : results ? (
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200 text-center">
                  <p className="text-lg font-medium text-gray-700 mb-2">
                    Your Home Budget
                  </p>
                  <p className="text-4xl font-bold text-green-600 mb-4">
                    ₹ {results.budgetMin} - ₹ {results.budgetMax} Lacs
                  </p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-600">Total Budget:</span>
                      <span className="text-green-600 font-medium ml-2">
                        ₹ {results.totalBudget.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Loan Amount:</span>
                      <span className="text-green-600 font-medium ml-2">
                        ₹ {results.loanAmount.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">EMI:</span>
                      <span className="text-green-600 font-medium ml-2">
                        ₹ {formData.emi.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-center text-gray-500">
                  Adjust the sliders and calculate your budget.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetCalculatorIntegration;