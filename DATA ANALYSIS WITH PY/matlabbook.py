import matplotlib.pyplot as plt
import numpy as np

# Sample data
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Create a plot
plt.figure(figsize=(10, 5))
plt.plot(x, y, linewidth=2, label='Sine Wave', color='blue')
plt.title('Sine Wave Example', fontsize=16)
plt.xlabel('X-axis', fontsize=14)
plt.ylabel('Y-axis', fontsize=14)
plt.legend()
plt.grid(True)
plt.show()  