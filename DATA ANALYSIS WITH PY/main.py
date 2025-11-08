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

print(df.head())
df.to_csv("data.csv", index=False)
print("Dataset saved to 'data.csv'.")

# Visualize data
plt.figure(figsize=(10, 6))
plt.scatter(df['Hours_Studied'], df['Exam_Score'], color='blue', alpha=0.6)
plt.xlabel('Hours Studied', fontsize=14)
plt.ylabel('Exam Score', fontsize=14)
plt.title('Exam Score vs Hours Studied', fontsize=16)
plt.grid(True, linestyle='--', alpha=0.7)
plt.show()

# Prepare data for modeling
X = df[['Hours_Studied']]   
y = df['Exam_Score']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
degrees = [1, 2, 3]
models = {}
for degree in degrees:
    poly = PolynomialFeatures(degree=degree)
    X_train_poly = poly.fit_transform(X_train)
    X_test_poly = poly.transform(X_test)
    
    model = LinearRegression()
    model.fit(X_train_poly, y_train)
    
    y_pred = model.predict(X_test_poly)
    
    mse = mean_squared_error(y_test, y_pred)
    r2 = r2_score(y_test, y_pred)
    
    models[degree] = {
        'model': model,
        'poly': poly,
        'mse': mse,
        'r2': r2
    }
    
    print(f"Degree: {degree}")
    print(f"Mean Squared Error: {mse:.2f}")
    print(f"R^2 Score: {r2:.2f}\n")
