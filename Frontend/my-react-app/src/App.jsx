import { useState } from 'react';
import ResultsSection from './components/ResultSection.jsx';
import PredictionForm from './components/PredictionForm.jsx';
import Header from './components/HeadingAndNav.jsx';
import Footer from './components/FooterAndLinks.jsx';


function App() {
  const [formData, setFormData] = useState({
    creditScore: 600,
    age: 40,
    tenure: 5,
    balance: 0,
    numOfProducts: 1,
    hasCrCard: 1,
    isActiveMember: 1,
    estimatedSalary: 50000,
    geography: 'France',
    gender: 'Male'
  });

  const [predictions, setPredictions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setPredictions(null);

    const payload = {
      credit_score: parseFloat(formData.creditScore),
      age: parseFloat(formData.age),
      tenure: parseFloat(formData.tenure),
      balance: parseFloat(formData.balance),
      num_of_products: parseFloat(formData.numOfProducts),
      has_cr_card: parseFloat(formData.hasCrCard),
      is_active_member: parseFloat(formData.isActiveMember),
      estimated_salary: parseFloat(formData.estimatedSalary),
      geography: formData.geography,
      gender: formData.gender,
    };

    try {
      const response = await fetch('https://customer-churn-prediction-flask-backend.onrender.com/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! Status: ${response.status}`);
      }

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
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      <div className="container mx-auto max-w-5xl">
        
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <PredictionForm 
            formData={formData} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            isLoading={isLoading} 
          />

          <ResultsSection 
            predictions={predictions} 
            isLoading={isLoading} 
            error={error} 
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;