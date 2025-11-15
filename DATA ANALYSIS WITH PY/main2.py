import numpy as np 
import pandas as pd 
import matplotlib.pyplot as plt 
from sklearn.linear_model import LinearRegression 
from sklearn.preprocessing import PolynomialFeatures 
from sklearn.metrics import mean_squared_error, r2_score 
from sklearn.model_selection import train_test_split

# Create DataFrame
df = pd.DataFrame({
    'Feature': feature,
    'Target': target
})

print(df.head())
df.to_csv("data.csv", index=False)
print("Dataset saved to 'data.csv'.")

X = df['feature'].values.reshape(-1, 1)
y = df['target'].values 
X_train, X_test, y_train, y_test = train_test_split( X, y, test_size=0.2, random_state=42 )

model = LinearRegression() # Train model on training data 
model.fit(X_train, y_train) # Get model parameters 
intercept = model.intercept_
slope = model.coef_[0] 
print(f"Intercept: ${intercept:,.2f}") 
print(f"Slope: ${slope:,.2f}")

y_pred = model.predict(X_test) # Calculate metrics 
r2 = r2_score(y_test, y_pred) 
rmse = np.sqrt(mean_squared_error(y_test, y_pred)) 
print(f"R²: {r2:.4f}") 
print(f"RMSE: {rmse:.2f}")

poly = PolynomialFeatures(degree=2) # Transform training data 
X_train_poly = poly.fit_transform(X_train) # Transform testing data (use same transformation) 
X_test_poly = poly.transform(X_test)

poly_model = LinearRegression() 
poly_model.fit(X_train_poly, y_train)
y_pred_poly = poly_model.predict(X_test_poly) # Evaluate 
r2_poly = r2_score(y_test, y_pred_poly) 
rmse_poly = np.sqrt(mean_squared_error(y_test, y_pred_poly)) 
print(f"Polynomial R²: {r2_poly:.4f}") 
print(f"Polynomial RMSE: {rmse_poly:.2f}")

degrees = [1, 2, 3, 4] 
for degree in degrees: # Create polynomial features 
    poly = PolynomialFeatures(degree=degree) 
    X_train_poly = poly.fit_transform(X_train) 
    X_test_poly = poly.transform(X_test) # Train model 
    model = LinearRegression() 
    model.fit(X_train_poly, y_train) # Evaluate
    y_pred = model.predict(X_test_poly) 
    r2 = r2_score(y_test, y_pred) 
    rmse = np.sqrt(mean_squared_error(y_test, y_pred)) 
    print(f"Degree {degree}: R² = {r2:.4f}, RMSE = {rmse:.2f}")