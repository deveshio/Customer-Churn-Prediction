function PredictionForm({ formData, handleChange, handleSubmit, isLoading }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">Customer Data</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Grid for smaller inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Credit Score</label>
            <input name="creditScore" type="number" value={formData.creditScore} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input name="age" type="number" value={formData.age} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Tenure (Years)</label>
            <input name="tenure" type="number" value={formData.tenure} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Num. of Products</label>
            <input name="numOfProducts" type="number" value={formData.numOfProducts} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Geography</label>
            <select name="geography" value={formData.geography} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border bg-white">
              <option>France</option>
              <option>Germany</option>
              <option>Spain</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border bg-white">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Has Credit Card?</label>
            <select name="hasCrCard" value={formData.hasCrCard} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border bg-white">
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Is Active Member?</label>
            <select name="isActiveMember" value={formData.isActiveMember} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border bg-white">
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
        </div>
        
        {/* Full-width inputs */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Balance</label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input name="balance" type="number" step="0.01" value={formData.balance} onChange={handleChange} className="block w-full rounded-md border-gray-300 pl-7 focus:border-indigo-500 focus:ring-indigo-500 p-2 border" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Estimated Salary</label>
          <div className="relative mt-1 rounded-md shadow-sm">
             <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input name="estimatedSalary" type="number" step="0.01" value={formData.estimatedSalary} onChange={handleChange} className="block w-full rounded-md border-gray-300 pl-7 focus:border-indigo-500 focus:ring-indigo-500 p-2 border" />
          </div>
        </div>

        <div className="pt-4">
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-m font-medium hover:text-white bg-red-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Processing Prediction...' : 'Analyze Risk'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PredictionForm;