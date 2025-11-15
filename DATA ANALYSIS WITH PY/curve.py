import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.model_selection import train_test_split


np.random.seed(42)

# Generate data
temperature = np.linspace(10, 40, 50)
sales = -2 * temperature**2 + 100 * temperature - 500
sales = sales + np.random.normal(0, 30,50) 

# Create DataFrame
df = pd.DataFrame({
    'Temperature': temperature,
    'Sales': sales
})
print(df.head())

# Save dataset to CSV file
df.to_csv("polynomial_data.csv", index=False)
print("Non-linear dataset created!")

# Prepare data for modeling
X = df[['Temperature']].values
y = df['Sales'].values

# Create polynomial features
poly = PolynomialFeatures(degree=2)
X_poly = poly.fit_transform(X)

# Split data
X_train, X_test, y_train, y_test = train_test_split(X_poly, y, test_size=0.2, random_state=42)

# Create and train model
model_poly = LinearRegression() 
model_poly.fit(X_train, y_train)

# Make predictions
y_pred = model_poly.predict(X_test)

# Evaluate model
r2 = r2_score(y_test, y_pred)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))
print(f"Polynomial Regression R²: {r2:.4f}")
print(f"Polynomial Regression RMSE: {rmse:.2f}")

# Plot data
plt.figure(figsize=(10, 6))
plt.scatter(df['Temperature'], df['Sales'], color='blue', alpha=0.6, s=100)
plt.xlabel('Temperature (°C)', fontsize=12)
plt.ylabel('Ice Cream Sales ($)', fontsize=12)
plt.title('Ice Cream Sales vs. Temperature', fontsize=14)
plt.grid(True, alpha=0.3)

# Plot polynomial regression curve
X_range = np.linspace(10, 40, 100).reshape(-1, 1)
X_range_poly = poly.transform(X_range)
y_range_pred = model_poly.predict(X_range_poly)
plt.plot(X_range, y_range_pred, color='red', linewidth=2, label='Polynomial Regression (Degree 2)')
plt.legend()
plt.show()

# Evaluate different polynomial degrees
degrees = [1, 2, 3, 4] 
for degree in degrees: 
    # Create polynomial features 
    poly = PolynomialFeatures(degree=degree) 
    X_poly = poly.fit_transform(X)
    # Train-test split 
    X_train, X_test, y_train, y_test = train_test_split( X_poly, y, test_size=0.2, random_state=42 ) 
    # Train and evaluate 
    model = LinearRegression() 
    model.fit(X_train, y_train) 
    y_pred = model.predict(X_test) 
    r2 = r2_score(y_test, y_pred) 
    print(f"Degree {degree}: R² = {r2:.4f}")