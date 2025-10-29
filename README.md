# 🧩 Full-Stack Customer Churn Prediction App

A **full-stack, cloud-deployed web application** that predicts customer churn in real-time.  
This project features a **React frontend**, a **Flask REST API**, and a **machine learning pipeline** with four different classification models.

[🔗 **Live Deployment** ](https://multimodlechurnpredictor.netlify.app/)

[🔗 **Kaggle Notebook** ](https://multimodlechurnpredictor.netlify.app/)


---

## 🚀 Project Overview

This application provides a **user-friendly interface** to predict the likelihood of a bank customer churning (leaving the bank).  
A user can input a customer's data, and the app will return **real-time predictions** from four different machine learning models:

- Logistic Regression  
- Random Forest  
- XGBoost  
- Neural Network (MLP)

This allows for a **side-by-side comparison** of model performance and provides a more nuanced view of the churn risk.

---

## 🔧 Tech Stack

| Area | Technologies |
|------|---------------|
| **Frontend** | React, Vite, Tailwind CSS |
| **Backend** | Python, Flask, Gunicorn, Flask-CORS |
| **ML & Data** | Scikit-learn, Pandas, Numpy |
| **Deployment** | Netlify (Frontend CI/CD), Render (Backend CI/CD) |

---

## 🧠 Model Performance

The models were trained and evaluated on a dataset of **10,000 customer records**.  
The data was **imbalanced** (1607 non-churners vs. 393 churners in the test set), so **Recall** and **F1-Score** for the churn class (1) are the most critical metrics.

| Model | Accuracy | Recall (Churn) | Precision (Churn) | F1-Score (Churn) | Weighted Avg F1 |
|--------|-----------|----------------|--------------------|------------------|------------------|
| **Random Forest** | 82.7% | 0.74 | 0.54 | 0.63 | 0.84 |
| **XGBoost** | 86.7% | 0.50 | 0.74 | 0.60 | 0.86 |
| **Neural Net (MLP)** | 85.5% | 0.42 | 0.73 | 0.53 | 0.84 |
| **Logistic Regression** | 72.0% | 0.71 | 0.38 | 0.50 | 0.75 |

**Key Takeaway:**  
While **XGBoost** had the highest overall accuracy, the **Random Forest** model provided the best balance — successfully identifying **74% of customers who were about to churn** (highest recall).

---

## ☁️ Architecture & Deployment

This application uses a **complete CI/CD pipeline** for automated builds and deployments.

### 🧩 Backend (Render)
- The Flask API is containerized and hosted on **Render**.  
- The **Gunicorn** WSGI server is used for production.  
- A `PYTHON_VERSION` environment variable is set to **3.11** for compatibility.  
- Any push to the main branch **automatically triggers a new deploy**.

### 💻 Frontend (Netlify)
- The React app is hosted on **Netlify**.  
- Netlify is configured with:
  - **Base Directory:** `Frontend/my-react-app`
  - **Build Command:** `npm run build`
  - **Publish Directory:** `dist`
- The `VITE_API_URL` environment variable in Netlify points to the live Render API.  
- Any push to the main branch **automatically triggers a new build and deploy**.

---

## 🧪 Local Development

To run this project locally, you will need **two terminals** (one for backend and one for frontend).

### ✅ Prerequisites
- Python 3.11+
- Node.js 18+

---

### 1️⃣ Backend (Flask API)

```bash
# Navigate to the backend directory
cd Backend

# Create and activate a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirement.txt

# Run the Flask development server
# The API will be available at http://127.0.0.1:3000
python main.py
```

### 2️⃣ Frontend (React App)
```bash
# In a new terminal, navigate to the frontend directory
cd Frontend/my-react-app

# Install dependencies
npm install

# Create a .env file for local environment variables
echo "VITE_API_URL=http://127.0.0.1:3000" > .env

# Run the React development server
# The app will be available at http://localhost:5173
npm run dev
```

### Thanks for checking out my project!

--- 


