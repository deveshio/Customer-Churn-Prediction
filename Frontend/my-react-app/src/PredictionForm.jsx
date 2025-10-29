import React from 'react';

function PredictionForm({ formData, onFormChange, onSubmit, isLoading }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">Customer Data</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        
        {/* --- Form Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="creditScore" className="block text-sm font-medium text-gray-700">Credit Score</label>
            <input type="number" id="creditScore" value={formData.creditScore} onChange={onFormChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
            <input type="number" id="age" value={formData.age} onChange={onFormChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label htmlFor="tenure" className="block text-sm font-medium text-gray-700">Tenure (Years)</label>
            <input type="number" id="tenure" value={formData.tenure} onChange={onFormChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label htmlFor="numOfProducts" className="block text-sm font-medium text-gray-700">Num. of Products</label>
            <input type="number" id="numOfProducts" value={formData.numOfProducts} onChange={onFormChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label htmlFor="geography" className="block text-sm font-medium text-gray-700">Geography</label>
            <select id="geography" value={formData.geography} onChange={onFormChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
              <option>France</option>
              <option>Germany</option>
              <option>Spain</option>
            </select>
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <select id="gender" value={formData.gender} onChange={onFormChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            <label htmlFor="hasCrCard" className="block text-sm font-medium text-gray-700">Has Credit Card?</label>
            <select id="hasCrCard" value={formData.hasCrCard} onChange={onFormChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
          <div>
            <label htmlFor="isActiveMember" className="block text-sm font-medium text-gray-700">Is Active Member?</label>
            <select id="isActiveMember" value={formData.isActiveMember} onChange={onFormChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
        </div>
        
        {/* --- Full-width inputs --- */}
        <div>
          <label htmlFor="balance" className="block text-sm font-medium text-gray-700">Balance</label>
          <input type="number" step="0.01" id="balance" value={formData.balance} onChange={onFormChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
        </div>
        <div>
          <label htmlFor="estimatedSalary" className="block text-sm font-medium text-gray-700">Estimated Salary</label>
          <input type="number" step="0.01" id="estimatedSalary" value={formData.estimatedSalary} onChange={onFormChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
        </div>

        {/* --- Submit Button --- */}
        <div className="pt-2">
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
          >
            {isLoading ? 'Predicting...' : 'Get Prediction'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PredictionForm;

