import pickle
import pandas as pd
import os
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neural_network import MLPClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report
from sklearn.ensemble import RandomForestClassifier
from sklearn.ensemble import GradientBoostingClassifier

def split_data(df, test_size=0.2, random_state=42):
    X = df.drop(columns=['Exited'] , axis = 1)
    y = df['Exited']
    X_train, X_test, y_train, y_test = train_test_split(
        X ,y ,
        test_size = test_size,
        random_state = random_state,
        stratify = y
    )
    return X_train, X_test, y_train, y_test

def scale_features(X_train, X_test):
    scaler = StandardScaler()
    scaler.fit(X_train)
    X_train_scaled = scaler.transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    return X_train_scaled, X_test_scaled, scaler

def build_models():
    logistic_model = LogisticRegression(
        class_weight='balanced',
        random_state=42
    )
    random_forest = RandomForestClassifier(
        n_estimators=150,
        max_depth=10,
        min_samples_leaf=15,
        class_weight='balanced',
        random_state=42
    )
    xg_boost = GradientBoostingClassifier(
        n_estimators=200,
        learning_rate=0.1,
        max_depth=3,
        random_state=42
    )
    mlp_model = MLPClassifier(
        hidden_layer_sizes=(64, 32),
        activation='relu',
        solver='adam',
        learning_rate_init=0.001,
        alpha=0.001,
        early_stopping=True,
        max_iter=200,
        validation_fraction=0.1,
        n_iter_no_change=10,
        random_state=42
    )
    return logistic_model, random_forest, xg_boost, mlp_model


def train_and_evaluate(model, X_train, y_train, X_test, y_test):
    model.fit(X_train,y_train)
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test,y_pred)
    classification = classification_report(y_test,y_pred)
    print(accuracy)
    print(classification)
    return model

def save_object(obj, filename):
    with open(filename,'wb') as f:
        pickle.dump(obj,f)
    pass

if __name__ == "__main__":
    df = pd.read_csv("./Model/data_cleaned.csv")
    df = df.drop(columns=['RowNumber', 'CustomerId', 'Surname'])
    df = pd.get_dummies(df, columns=['Geography', 'Gender'], drop_first=True, dtype=int)
    
    X_train, X_test, y_train, y_test = split_data(df)
    X_train_scaled, X_test_scaled, scaler = scale_features(X_train, X_test)
    logistic_model, random_forest,xg_boost, mlp_model = build_models()
    
    trained_logistic_model = train_and_evaluate(logistic_model, X_train_scaled, y_train, X_test_scaled, y_test)
    trained_random_forest_model = train_and_evaluate(random_forest, X_train_scaled, y_train, X_test_scaled, y_test)
    trained_xg_boost_model = train_and_evaluate(xg_boost, X_train_scaled, y_train, X_test_scaled, y_test)
    trained_mlp_model = train_and_evaluate(mlp_model, X_train_scaled, y_train, X_test_scaled, y_test)
    
    MODEL_DIR = './Model'
    if not os.path.exists(MODEL_DIR):
        os.makedirs(MODEL_DIR)

    save_object(scaler, os.path.join(MODEL_DIR, "scaler.pkl"))
    save_object(trained_logistic_model, os.path.join(MODEL_DIR, "trained_logistic_regression_model.pkl"))
    save_object(trained_random_forest_model, os.path.join(MODEL_DIR, "trained_random_forest_model.pkl"))
    save_object(trained_xg_boost_model, os.path.join(MODEL_DIR, "trained_gradient_boosting_model.pkl"))
    save_object(trained_mlp_model, os.path.join(MODEL_DIR, "trained_mlp_classifier_model.pkl"))
    print("Models and scaler saved successfully.")

