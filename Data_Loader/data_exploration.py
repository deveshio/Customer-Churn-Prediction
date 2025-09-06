import pandas as pd

def load_data(filepath):
    """Load the CSV file into a pandas DataFrame.
    
    Returns:
        pd.DataFrame: Loaded dataset.
    """
    # TODO: Load the data from the CSV file and return as a DataFrame
    df = pd.read_csv(filepath)
    return df

def check_missing_values(df):
    """Return the number of missing values in each column.
    
    Returns:
        pd.Series: Index = column names, Values = number of missing entries.
    """
    # TODO: Implement missing values check and return the result
    result = df.isnull().sum()
    return result

def churn_balance(df):
    """Return churn distribution statistics.
    
    Returns:
        dict: {
            "total": int,         # total number of customers
            "churned": int,       # number of churned customers
            "non_churned": int,   # number of non-churned customers
            "churn_rate": float   # churn rate (between 0 and 1)
        }
    """
    # TODO: Calculate churn statistics and return as a dictionary
    result = {
        "total" : len(df),
        "churned" : df[df['Exited']==1].shape[0],
        "non_churned" : len(df) -  df[df['Exited']==1].shape[0],
        "churn_rate" : df['Exited'].mean()
    }
    return result

def descriptive_statistics(df):
    """Return descriptive statistics of numeric columns.
    
    Returns:
        pd.DataFrame: Statistical summary (mean, std, min, max, etc.)
    """
    # TODO: Compute descriptive statistics and return the DataFrame
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
