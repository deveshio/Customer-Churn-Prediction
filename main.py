from flask import Flask, render_template, request
import pandas as pd
import pickle

# Load model and scaler
model = None
scaler = None
with open('./Model/model.pkl','rb') as f:
    model = pickle.load(f)

with open('./Model/scaler.pkl','rb') as f:
    scaler = pickle.load(f)


app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def predict():
    prediction = None
    prediction_proba = None
    
    if request.method == 'POST':
        geography = request.form.get('geography')
        gender = request.form.get('gender')
        age = float(request.form.get('age'))
        balance = float(request.form.get('balance'))
        credit_score = float(request.form.get('credit_score'))
        estimated_salary = float(request.form.get('estimated_salary'))
        tenure = float(request.form.get('tenure'))
        num_of_products = float(request.form.get('num_of_products'))
        has_cr_card = float(request.form.get('has_cr_card'))
        is_active_member = float(request.form.get('is_active_member'))
        if geography == 'France':
            geography_germany = 0
            geography_spain = 0
        elif geography == 'Germany':
            geography_germany = 1
            geography_spain = 0
        else:  # Spain
            geography_germany = 0
            geography_spain = 1

        gender_male = 1 if gender == 'Male' else 0


        X_input = pd.DataFrame({
            'CreditScore' : [credit_score],
            'Age' : [age],
            'Tenure' : [tenure],
            'Balance' : [balance],
            'NumOfProducts' : [num_of_products],
            'HasCrCard' : [has_cr_card],
            'IsActiveMember' : [is_active_member],
            'EstimatedSalary' : [estimated_salary],
            'Geography_Germany' : [geography_germany],
            'Geography_Spain' : [geography_spain],
            'Gender_Male' : [gender_male],
        })
        X_input_scaled = scaler.transform(X_input)
        prediction = model.predict(X_input_scaled)[0]
        prediction_proba = model.predict_proba(X_input_scaled)[0][1]
        prediction = int(prediction)
        prediction_proba = round(prediction_proba,4)

    return render_template('index.html', prediction=prediction, prediction_proba=prediction_proba)

if __name__ == '__main__':
    # Run Flask app on port 3000
    app.run(host = '0.0.0.0', port = 3000, debug = True)