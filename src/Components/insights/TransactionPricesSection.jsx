import React from 'react';

const TransactionPricesSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-1 flex items-center">
          Check Transaction Prices
          <div className="ml-2 w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-xs text-white">i</span>
          </div>
        </h2>
        <p className="text-sm text-gray-600">of actual sold properties</p>
      </div>

      {/* City Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto">
        {['Bangalore', 'Hyderabad', 'Chennai', 'Mumbai', 'Pune', 'Ghaziabad', 'Navi Mumbai', 'Secunderabad', 'Noida'].map((city, index) => (
          <button
            key={city}
            className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
              index === 0 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      <div className="mb-4 text-right">
        <span className="text-sm text-gray-600">In Last 1 Year</span>
      </div>

      {/* Table Headers */}
      <div className="grid grid-cols-4 gap-4 py-2 border-b border-gray-200 text-sm font-medium text-gray-600">
        <div>Locality</div>
        <div className="text-center">Transaction Count</div>
        <div className="text-center">Rate on 99acres</div>
        <div className="text-center">Transaction Rate</div>
      </div>

      {/* Transaction Rows */}
      <div className="space-y-3 mt-3">
        {/* Yelahanka */}
        <div className="grid grid-cols-4 gap-4 py-3 border-b border-gray-100 items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-yellow-100 rounded mr-3 flex items-center justify-center">
              <span className="text-yellow-600">📍</span>
            </div>
            <div>
              <div className="font-medium text-sm text-gray-900">Yelahanka</div>
              <div className="text-xs text-gray-500">Bangalore North</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-600">No. of Transactions</div>
            <div className="font-semibold text-sm">665</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-600">Rate on 99acres</div>
            <div className="font-semibold text-sm">₹3,300/ sq ft</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-600">Transaction Rate</div>
            <div className="font-semibold text-sm">₹7638 /sq ft</div>
          </div>
        </div>

        {/* Sarjapur Road */}
        <div className="grid grid-cols-4 gap-4 py-3 border-b border-gray-100 items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-100 rounded mr-3 flex items-center justify-center">
              <span className="text-gray-600">🏢</span>
            </div>
            <div>
              <div className="font-medium text-sm text-gray-900">Sarjapur Road</div>
              <div className="text-xs text-gray-500">Bangalore East</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-600">No. of Transactions</div>
            <div className="font-semibold text-sm">412</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-600">Rate on 99acres</div>
            <div className="font-semibold text-sm">₹5,200/ sq ft</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-600">Transaction Rate</div>
            <div className="font-semibold text-sm">₹6854 /sq ft</div>
          </div>
        </div>

        {/* Electronic City */}
        <div className="grid grid-cols-4 gap-4 py-3 border-b border-gray-100 items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-100 rounded mr-3 flex items-center justify-center">
              <span className="text-blue-600">🏭</span>
            </div>
            <div>
              <div className="font-medium text-sm text-gray-900">Electronic City</div>
              <div className="text-xs text-gray-500">Bangalore South</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-600">No. of Transactions</div>
            <div className="font-semibold text-sm">298</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-600">Rate on 99acres</div>
            <div className="font-semibold text-sm">₹4,800/ sq ft</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-600">Transaction Rate</div>
            <div className="font-semibold text-sm">₹5923 /sq ft</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          Is this helpful? <span className="text-blue-500 cursor-pointer">Yes</span> | <span className="text-blue-500 cursor-pointer">No</span>
        </div>
        <div className="text-xs text-gray-500">
          View All Transactions
        </div>
      </div>
    </div>
  );
};

export default TransactionPricesSection;