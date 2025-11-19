function Header() {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Customer <span className="text-red-600">Risk</span> 
      </h1>
      <p className="text-right px-88 text-red-400">Churn Prediction App</p>
      <p className="text-lg text-left text-gray-600 mt-2">
        Enter customer details to predict churn probability.
      </p>
    </div>
  );
}

export default Header;