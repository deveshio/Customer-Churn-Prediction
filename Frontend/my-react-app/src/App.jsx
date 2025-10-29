import { useState } from 'react';

// A helper component for displaying the results with a progress bar
function ResultBar({ modelName, probability }) {
  const percentage = (probability * 100).toFixed(1);
  const isHighRisk = probability > 0.5;

  // Change color based on risk
  const barColor = isHighRisk ? 'bg-red-500' : 'bg-green-500';
  const textColor = isHighRisk ? 'text-red-700' : 'text-green-700';

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">{modelName}</span>
        <span className={`text-sm font-bold ${textColor}`}>{percentage}% Churn Risk</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${barColor}`} 
          style={{ width: `${percentage}%`, transition: 'width 0.5s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
}


function App() {
  // --- State for all form inputs ---
  const [creditScore, setCreditScore] = useState(600);
  const [age, setAge] = useState(40);
  const [tenure, setTenure] = useState(5);
  const [balance, setBalance] = useState(0);
  const [numOfProducts, setNumOfProducts] = useState(1);
  const [hasCrCard, setHasCrCard] = useState(1);
  const [isActiveMember, setIsActiveMember] = useState(1);
  const [estimatedSalary, setEstimatedSalary] = useState(50000);
  const [geography, setGeography] = useState('France');
  const [gender, setGender] = useState('Male');

  // --- State for API response ---
  const [predictions, setPredictions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsLoading(true);
    setError(null);
    setPredictions(null);

    // 1. Create the payload to send to the API
    const payload = {
      credit_score: parseFloat(creditScore),
      age: parseFloat(age),
      tenure: parseFloat(tenure),
      balance: parseFloat(balance),
      num_of_products: parseFloat(numOfProducts),
      has_cr_card: parseFloat(hasCrCard),
      is_active_member: parseFloat(isActiveMember),
      estimated_salary: parseFloat(estimatedSalary),
      geography: geography,
      gender: gender,
    };

    try {
      // 2. Send the request to the Flask API
      const response = await fetch('http://127.0.0.1:3000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        // Handle HTTP errors
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! Status: ${response.status}`);
      }

      // 3. Set the prediction results in state
      const data = await response.json();
      setPredictions(data);

    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="container mx-auto max-w-4xl">
        
        {/* --- Header --- */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Customer Churn Prediction
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Enter customer details to predict churn probability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* --- Input Form --- */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">Customer Data</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* --- Form Grid --- */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="credit_score" className="block text-sm font-medium text-gray-700">Credit Score</label>
                  <input type="number" id="credit_score" value={creditScore} onChange={(e) => setCreditScore(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                  <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                  <label htmlFor="tenure" className="block text-sm font-medium text-gray-700">Tenure (Years)</label>
                  <input type="number" id="tenure" value={tenure} onChange={(e) => setTenure(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                  <label htmlFor="num_of_products" className="block text-sm font-medium text-gray-700">Num. of Products</label>
                  <input type="number" id="num_of_products" value={numOfProducts} onChange={(e) => setNumOfProducts(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                  <label htmlFor="geography" className="block text-sm font-medium text-gray-700">Geography</label>
                  <select id="geography" value={geography} onChange={(e) => setGeography(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    <option>France</option>
                    <option>Germany</option>
                    <option>Spain</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                  <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="has_cr_card" className="block text-sm font-medium text-gray-700">Has Credit Card?</label>
                  <select id="has_cr_card" value={hasCrCard} onChange={(e) => setHasCrCard(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="is_active_member" className="block text-sm font-medium text-gray-700">Is Active Member?</label>
                  <select id="is_active_member" value={isActiveMember} onChange={(e) => setIsActiveMember(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
              </div>
              
              {/* --- Full-width inputs --- */}
              <div>
                <label htmlFor="balance" className="block text-sm font-medium text-gray-700">Balance</label>
                <input type="number" step="0.01" id="balance" value={balance} onChange={(e) => setBalance(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label htmlFor="estimated_salary" className="block text-sm font-medium text-gray-700">Estimated Salary</label>
                <input type="number" step="0.01" id="estimated_salary" value={estimatedSalary} onChange={(e) => setEstimatedSalary(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
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

          {/* --- Results Display --- */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">Prediction Results</h2>
            <div className="mt-4">
              {/* Show error message if any */}
              {error && (
                <div className="p-4 rounded-md bg-red-50 border border-red-200">
                  <p className="text-sm font-medium text-red-700">Error: {error}</p>
                </div>
              )}

              {/* Show loading spinner (simplified) */}
              {isLoading && (
                <div className="text-center text-gray-500">
                  <p>Loading results...</p>
                </div>
              )}

              {/* Show prediction results */}
              {predictions && !isLoading && !error && (
                <div>
                  {Object.entries(predictions).map(([modelName, probability]) => (
                    <ResultBar 
                      key={modelName} 
                      modelName={modelName} 
                      probability={probability} 
                    />
                  ))}
                </div>
              )}
              
              {/* Show placeholder when no results */}
              {!predictions && !isLoading && !error && (
                 <div className="text-center text-gray-400 p-8 border-2 border-dashed rounded-lg">
                    <p>Results will appear here once you submit the form.</p>
                 </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;