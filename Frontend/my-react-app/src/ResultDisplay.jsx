import React from 'react';
import ResultBar from './ResultBar'; // Import the ResultBar component

function ResultsDisplay({ predictions, isLoading, error }) {
  
  // Helper function to render the content
  const renderContent = () => {
    // 1. Show error
    if (error) {
      return (
        <div className="p-4 rounded-md bg-red-50 border border-red-200">
          <p className="text-sm font-medium text-red-700">Error: {error}</p>
        </div>
      );
    }
    
    // 2. Show loading
    if (isLoading) {
      return (
        <div className="text-center text-gray-500">
          <p>Loading results...</p>
        </div>
      );
    }
    
    // 3. Show predictions
    if (predictions) {
      return (
        <div>
          {Object.entries(predictions).map(([modelName, probability]) => (
            <ResultBar 
              key={modelName} 
              modelName={modelName} 
              probability={probability} 
            />
          ))}
        </div>
      );
    }
    
    // 4. Show placeholder (default)
    return (
      <div className="text-center text-gray-400 p-8 border-2 border-dashed rounded-lg">
        <p>Results will appear here once you submit the form.</p>
      </div>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">Prediction Results</h2>
      <div className="mt-4">
        {renderContent()}
      </div>
    </div>
  );
}

export default ResultsDisplay;

