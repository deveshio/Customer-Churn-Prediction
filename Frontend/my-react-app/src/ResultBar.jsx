import React from 'react';

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

export default ResultBar;

