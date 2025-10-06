import React, { useState, useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const EMICalculator = ({ isOpen, onClose }) => {
  const [loanAmount, setLoanAmount] = useState(3000000); // ₹30,00,000
  const [tenure, setTenure] = useState(20); // years
  const [interestRate, setInterestRate] = useState(8.9); // %

  // EMI Calculation Formula
  const calculateEMI = (P, r, n) => {
    const monthlyRate = r / (12 * 100);
    const months = n * 12;
    return (P * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
  };

  const emi = useMemo(() => calculateEMI(loanAmount, interestRate, tenure), [
    loanAmount,
    interestRate,
    tenure,
  ]);

  const totalPayable = emi * tenure * 12;
  const interestAmount = totalPayable - loanAmount;

  const pieData = [
    { name: "Principal Amount", value: loanAmount, color: "#10B981" },
    { name: "Interest Amount", value: interestAmount, color: "#059669" },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl relative">
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
          <h2 className="text-2xl font-bold mb-2">EMI Calculator</h2>
          <p className="text-green-100">Calculate your monthly EMI for home loans</p>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section - Inputs + Chart */}
            <div>
              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Loan Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter loan amount"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Tenure
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="Years"
                    />
                    <span className="ml-2 text-gray-500 font-medium">Years</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Rate of Interest
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="Interest rate"
                    />
                    <span className="ml-2 text-gray-500 font-medium">%</span>
                  </div>
                </div>
              </div>

              {/* Pie Chart */}
              <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Loan Breakdown</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
                      labelLine={false}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) =>
                        `₹ ${value.toLocaleString("en-IN")}`
                      }
                    />
                  </PieChart>
                </ResponsiveContainer>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block w-4 h-4 rounded-sm"
                      style={{ background: "#10B981" }}
                    ></span>
                    <span className="text-gray-700">
                      Principal: ₹{loanAmount.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block w-4 h-4 rounded-sm"
                      style={{ background: "#059669" }}
                    ></span>
                    <span className="text-gray-700">
                      Interest: ₹{Math.round(interestAmount).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - EMI Details */}
            <div className="flex flex-col justify-center">
              {/* EMI Amount */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 mb-6 border border-green-200">
                <div className="text-center mb-6">
                  <p className="text-gray-600 text-sm flex items-center justify-center gap-2 mb-2">
                    <span role="img" aria-label="calendar">
                      📅
                    </span>
                    Monthly EMI
                  </p>
                  <h2 className="text-4xl font-bold text-green-600">
                    ₹ {Math.round(emi).toLocaleString("en-IN")}
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-gray-600 text-sm">Total Amount</p>
                    <h3 className="text-xl font-semibold text-gray-800">
                      ₹ {Math.round(totalPayable).toLocaleString("en-IN")}
                    </h3>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600 text-sm">Total Interest</p>
                    <h3 className="text-xl font-semibold text-gray-800">
                      ₹ {Math.round(interestAmount).toLocaleString("en-IN")}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-800 mb-4">Loan Summary</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Loan Amount:</span>
                    <span className="font-medium">₹ {loanAmount.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Interest Rate:</span>
                    <span className="font-medium">{interestRate}% per annum</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Loan Tenure:</span>
                    <span className="font-medium">{tenure} years ({tenure * 12} months)</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between font-semibold">
                    <span className="text-gray-800">Monthly EMI:</span>
                    <span className="text-green-600">₹ {Math.round(emi).toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105">
                  Get Instant Loan
                </button>
                <button className="w-full border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-200">
                  Compare Loan Offers
                </button>
              </div>
              
              <p className="text-sm text-gray-500 text-center mt-4">
                It's easy with Bhoomi
The Real Estate!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;