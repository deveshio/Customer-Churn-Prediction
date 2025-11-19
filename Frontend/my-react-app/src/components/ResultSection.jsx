// --- Component 3: ResultsSection ---
// Responsible for handling loading, error, and mapping the results

import ResultBar from './ResultBar';


function ResultsSection({ predictions, isLoading, error }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">Prediction Results</h2>
      <div className="mt-4">
        {/* Error State */}
        {error && (
          <div className="p-4 rounded-md bg-red-50 border border-red-200 animate-pulse">
            <p className="text-sm font-medium text-red-700">Error: {error}</p>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-500">Analyzing customer data...</p>
          </div>
        )}

        {/* Success State */}
        {predictions && !isLoading && !error && (
          <div className="space-y-6">
            {Object.entries(predictions).map(([modelName, probability]) => (
              <ResultBar 
                key={modelName} 
                modelName={modelName} 
                probability={probability} 
              />
            ))}
            <div className="mt-4 p-4 bg-indigo-50 rounded text-sm text-indigo-700 border border-indigo-100">
              <p><strong>Analysis Complete:</strong> Scores above 50% indicate a higher likelihood of the customer leaving.</p>
            </div>
          </div>
        )}
        
        {/* Empty State */}
        {!predictions && !isLoading && !error && (
           <div className="flex flex-col items-center justify-center h-64 text-gray-400 border-2 border-dashed rounded-lg bg-gray-50">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
             </svg>
             <p>Results will appear here</p>
           </div>
        )}
      </div>
    </div>
  );
}

export default ResultsSection;