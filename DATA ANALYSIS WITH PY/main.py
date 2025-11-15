import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.model_selection import train_test_split

np.random.seed(42)

# Generate data
hours_studied = np.arange(1, 21)
exam_score = 40 + 5 * hours_studied + np.random.normal(0, 5, 20)

# Create DataFrame
df = pd.DataFrame({
    'Hours_Studied': hours_studied,
    'Exam_Score': exam_score
})

#Display first few rows
print(df.head())

# Save dataset to CSV file
df.to_csv("data.csv", index=False)
print("Dataset saved to 'data.csv'")

#Load dataset from CSV 
df = pd.read_csv("data.csv")
print(f"Dataset shape: {df.shape}")
print(f"Columns: {df.columns.tolist()}")


# Plot data
plt.figure(figsize=(10, 6)) 
plt.scatter(df['Hours_Studied'], df['Exam_Score'], color='blue', alpha=0.6, s=100) 
plt.xlabel('Hours Studied', fontsize=12) 
plt.ylabel('Exam Score', fontsize=12) 
plt.title('Exam Score vs. Hours Studied', fontsize=14) 
plt.grid(True, alpha=0.3) 
plt.show()


# Prepare data for modeling
X = df[['Hours_Studied']].values  
y = df['Exam_Score'].values

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

#Create and train model
model = LinearRegression()
model.fit(X_train, y_train)

# Get model parameters
print(f"Intercept (b0): {model.intercept_:.2f}")
print(f"Slope (b1): {model.coef_[0]:.2f}")

# Make predictions
y_pred = model.predict(X_test)

# Evaluate model
r2 = r2_score(y_test, y_pred)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))
print(f"R²: {r2:.4f}")
print(f"RMSE: {rmse:.2f}")

# Plot actual data & regression line
plt.figure(figsize=(10, 6))
plt.scatter(X, y, color='blue', alpha=0.6, s=100, label='Actual Data')
plt.plot(X, model.predict(X), color='red', linewidth=2, label='Regression Line')
plt.xlabel('Hours Studied', fontsize=12)
plt.ylabel('Exam Score', fontsize=12)
plt.title('Linear Regression: Score = 41.23 + 4.87 * Hours', fontsize=14)
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()

# Predict new values
new_hours = np.array([[5], [10], [15]])
predictions = model.predict(new_hours)
for hours, score in zip(new_hours.flatten(), predictions):
    print(f"Hours: {hours} -> Predicted Score: {score:.2f}")
    
    