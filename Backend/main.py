import pickle
import pandas as pd
from flask import Flask, request, jsonify  # Import jsonify, remove render_template
from flask_cors import CORS  # Import CORS
import os
import numpy as np

app = Flask(__name__)
CORS(app)  # *** NEW: Enable CORS for all routes ***

# --- Best Practice: Use a dictionary to hold models ---
models = {}
MODEL_DIR = './Model' 
model_files = {
    'Logistic Regression': 'trained_logistic_model.pkl',
    'Random Forest': 'trained_random_forest_model.pkl',
    'XG Boost': 'trained_xg_boost_model.pkl',
    'MLP Classifier': 'trained_mlp_model.pkl'
}

# Load all models in a loop
try:
    for name, filename in model_files.items():
        path = os.path.join(MODEL_DIR, filename)
        with open(path, 'rb') as f:
            models[name] = pickle.load(f)

    # Load the scaler
    with open(os.path.join(MODEL_DIR, 'scaler.pkl'), 'rb') as f:
        scaler = pickle.load(f)
except FileNotFoundError:
    print("Error: Model or scaler file not found. Make sure the './Model' directory and all .pkl files exist.")
    # In a real app, you might want to exit or handle this more gracefully
    exit()


@app.route('/')
def home():
    # A simple route to check if the API is running
    return jsonify({"message": "Churn Prediction API is online."})


# *** NEW: Changed route to /predict and only POST ***
@app.route('/predict', methods=['POST'])
def predict():
    predictions = {}
    
    try:
        # *** NEW: Get data from request.json instead of request.form ***
        data = request.get_json()
        if not data:
            return jsonify({"error": "No input data provided"}), 400

        # Extract data, converting to float as they come in as JSON
        # Using .get() provides None if key is missing, avoiding errors
        credit_score = float(data.get('credit_score', 0))
        age = float(data.get('age', 0))
        tenure = float(data.get('tenure', 0))
        balance = float(data.get('balance', 0))
        num_of_products = float(data.get('num_of_products', 0))
        has_cr_card = float(data.get('has_cr_card', 0))
        is_active_member = float(data.get('is_active_member', 0))
        estimated_salary = float(data.get('estimated_salary', 0))
        geography = data.get('geography', 'France') # Default values
        gender = data.get('gender', 'Male')
        
        X_input = pd.DataFrame({
            'CreditScore': [credit_score],
            'Age': [age],
            'Tenure': [tenure],
            'Balance': [balance],
            'NumOfProducts': [num_of_products],
            'HasCrCard': [has_cr_card],
            'IsActiveMember': [is_active_member],
            'EstimatedSalary': [estimated_salary],
            'Geography_France': [1 if geography == 'France' else 0],
            'Geography_Germany': [1 if geography == 'Germany' else 0],
            'Geography_Spain': [1 if geography == 'Spain' else 0],
            'Gender_Female': [1 if gender == 'Female' else 0],
            'Gender_Male': [1 if gender == 'Male' else 0]
        })

        # Ensure column order matches the scaler's expectations
        # You should ideally save and load the column order from training
        # For now, let's assume this order is correct.
        
        X_input_scaled = scaler.transform(X_input)

        for name, model in models.items():
            proba = model.predict_proba(X_input_scaled)[0][1]
            predictions[name] = round(proba, 4)

        # --- Weighted Ensembling (uncomment if you want to use it) ---
        # weights = {
        #     'Logistic Regression': 0.15,
        #     'Random Forest': 0.40,
        #     'XG Boost': 0.25,
        #     'MLP Classifier': 0.20
        # }
        # ensembled_proba = np.average(
        #     [predictions[name] for name in weights.keys()],
        #     weights=[weights[name] for name in weights.keys()]
        # )
        # predictions['Ensembled'] = round(ensembled_proba, 4)
        # predictions['Weights'] = weights

        # *** NEW: Return predictions as JSON ***
        return jsonify(predictions)

    except Exception as e:
        print(f"Error during prediction: {e}")
        # Send a generic server error
        return jsonify({"error": "An error occurred during prediction.", "details": str(e)}), 500

if __name__ == '__main__':
    # Keep host='0.0.0.0' to make it accessible on your network
    # Port 3000 is fine, but some systems reserve it. 5000 is a common Flask default.
    app.run(host='0.0.0.0', port=3000, debug=True)