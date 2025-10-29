import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

def remove_irrelevant_columns(df):
    df.drop(columns=['RowNumber','CustomerId','Surname'] , inplace = True)
    return df

def encode_categorical(df):
    df = pd.get_dummies( df, columns=['Geography', 'Gender'], dtype=int ,drop_first=False )
    return df

def split_data(df, test_size=0.2, random_state=42):
    X = df.drop("Exited", axis=1)   # all columns except target
    y = df["Exited"]
    X_train, X_test, y_train, y_test = train_test_split(
        X,y,
        test_size=test_size, 
        random_state =random_state 
    )

    return X_train, X_test, y_train, y_test

def scale_features(X_train, X_test):
    scaler = StandardScaler()
    scaler.fit(X_train)
    X_train_scaled = scaler.transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    return X_train_scaled, X_test_scaled, scaler

if __name__ == "__main__":
    df = pd.read_csv('../Data/Churn_Modelling.csv')
    df = remove_irrelevant_columns(df)
    df = encode_categorical(df)
    X_train, X_test, y_train, y_test = split_data(df)
    X_train_scaled, X_test_scaled, scaler = scale_features(X_train, X_test)
    print(df.head(5))

