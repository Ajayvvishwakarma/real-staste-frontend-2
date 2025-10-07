import React, { useState } from "react";

const AreaConverter = ({ isOpen, onClose }) => {
  const [age, setAge] = useState(35);
  const [occupation, setOccupation] = useState("Salaried");
  const [income, setIncome] = useState(100000);
  const [existingEmi, setExistingEmi] = useState(10000);
  const [roi, setRoi] = useState(8.9);
  const [tenure, setTenure] = useState(20);
  const [borrowers, setBorrowers] = useState("One");
  const [results, setResults] = useState(null);

  const calculateLoan = () => {
    const maxEmi = income * 0.6 - existingEmi; // max EMI allowed
    const monthlyRate = roi / 12 / 100;
    const months = tenure * 12;

    const loanAmount =
      (maxEmi *
        (Math.pow(1 + monthlyRate, months) - 1) *
        (1 + monthlyRate)) /
      (monthlyRate * Math.pow(1 + monthlyRate, months));

    const totalPayable = maxEmi * months;
    setResults({
      loanAmount: loanAmount.toFixed(0),
      emi: maxEmi.toFixed(0),
      total: totalPayable.toFixed(0),
    });
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
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-t-lg">
          <h2 className="text-2xl font-bold mb-2">Area Converter & Loan Calculator</h2>
          <p className="text-green-100">Convert area units and calculate loan eligibility</p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10">
          <div className="w-full bg-white rounded-xl shadow-lg p-6 sm:p-10 flex flex-col lg:flex-row gap-8">
            {/* Left Form */}
            <div className="w-full lg:w-1/2 space-y-4">
              {/* Borrowers */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <p className="font-medium text-gray-700">Number of Borrowers</p>
                <div className="flex gap-2 bg-gray-100 p-1 rounded-full">
                  <button 
                    onClick={() => setBorrowers("One")}
                    className={`px-4 py-1 rounded-full text-sm transition-colors duration-200 ${
                      borrowers === "One" 
                        ? "bg-green-500 text-white" 
                        : "text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    One
                  </button>
                  <button 
                    onClick={() => setBorrowers("Two")}
                    className={`px-4 py-1 rounded-full text-sm transition-colors duration-200 ${
                      borrowers === "Two" 
                        ? "bg-green-500 text-white" 
                        : "text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Two
                  </button>
                </div>
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Your Age</label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your age"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Occupation</label>
                  <select
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  >
                    <option>Salaried</option>
                    <option>Self Employed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Net Income (₹)</label>
                  <input
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Monthly income"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Existing Monthly EMI (₹)
                  </label>
                  <input
                    type="number"
                    value={existingEmi}
                    onChange={(e) => setExistingEmi(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Current EMI"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Rate of Interest (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={roi}
                    onChange={(e) => setRoi(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Interest rate"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Tenure (Years)</label>
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Loan tenure"
                  />
                </div>
              </div>

              {/* Button */}
              <button
                onClick={calculateLoan}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg mt-6 font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105"
              >
                Calculate Loan Eligibility
              </button>
            </div>

            {/* Right Results */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
              {results ? (
                <div className="w-full bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center space-y-6 border border-green-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Estimated Results</h3>
                  
                  {/* Dummy Chart with better design */}
                  <div className="relative h-40 w-full bg-gradient-to-b from-green-400 via-green-500 to-green-700 rounded-lg shadow-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
                      Loan Analysis
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white rounded-lg p-4 border border-green-300">
                      <p className="text-sm text-gray-600 mb-1">You could borrow up to</p>
                      <p className="text-xl font-bold text-green-600">
                        ₹ {parseInt(results.loanAmount).toLocaleString("en-IN")}
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-green-300">
                      <p className="text-sm text-gray-600 mb-1">Total Payable Amount</p>
                      <p className="text-xl font-bold text-gray-800">
                        ₹ {parseInt(results.total).toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-green-300">
                    <p className="text-sm text-gray-600 mb-1">Monthly EMI</p>
                    <p className="text-2xl font-bold text-green-600">
                      ₹ {parseInt(results.emi).toLocaleString("en-IN")}
                    </p>
                  </div>
                  
                  <div className="space-y-3 mt-6">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105">
                      Apply for Loan
                    </button>
                    <button className="w-full border border-green-600 text-green-600 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-200">
                      Get Expert Advice
                    </button>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-4">It's easy with Bhoomi
The Real Estate!</p>
                </div>
              ) : (
                <div className="w-full flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Ready to Calculate?</h3>
                  <p className="text-gray-500 max-w-xs">
                    Enter your details and click calculate to see your loan eligibility and area conversion results.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaConverter;













