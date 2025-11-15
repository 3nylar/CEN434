from scipy import stats
import numpy as np
import matplotlib.pyplot as plt

# Sample data
advertising = np.array([23, 26, 30, 34, 43, 48, 52, 57, 58, 60])
sales = np.array([651, 762, 856, 1063, 1190, 1298, 1421, 1440, 1518, 1700])

# Perform linear regression
slope, intercept, r_value, p_value, std_err = stats.linregress(advertising, sales)

# Make predictions
predictions = slope * advertising + intercept
r_squared = r_value ** 2
print(f"Equattion: y = {slope:.2f}x + {intercept:.2f}")
print(f"R-squared: {r_squared:.4f}")

# Plot data and regression line
plt.scatter(advertising, sales, color='blue', label='Data Points')
plt.plot(advertising, predictions, color='red', label='Regression Line')
plt.title('Advertising vs Sales')
plt.xlabel('Advertising Spend (in thousands)')
plt.ylabel('Sales (in thousands)')
plt.legend()
plt.grid()
plt.show()
