import pandas as pd

def load_data(filepath):
    df = pd.read_csv(filepath)
    return df

def check_missing_values(df):
    result = df.isnull().sum()
    return result

def churn_balance(df):
    result = {
        "total" : len(df),
        "churned" : df[df['Exited']==1].shape[0],
        "non_churned" : len(df) -  df[df['Exited']==1].shape[0],
        "churn_rate" : df['Exited'].mean()
    }
    return result

def descriptive_statistics(df):
    result = df.describe()
    return result

if __name__ == "__main__":
    # Load the dataset
    df = load_data("Churn_Modelling.csv")
    
    # Get missing values
    missing_values = check_missing_values(df)
    print("Missing values in each column:")
    print(missing_values)

    print("\n")
    
    # Get churn distribution
    churn_stats = churn_balance(df)
    print(f"Total customers: {churn_stats['total']}")
    print(f"Churned customers: {churn_stats['churned']}")
    print(f"Stayed customers: {churn_stats['non_churned']}")
    print(f"Churn rate: {churn_stats['churn_rate']:.2%}")

    print("\n")
    
    # Get descriptive statistics
    stats = descriptive_statistics(df)
    print("Descriptive statistics for numerical features:")
    print(stats)
