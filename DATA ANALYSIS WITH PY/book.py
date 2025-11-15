import numpy as np

# Correct way to create arrays
arr1 = np.array([1, 2, 3, 4, 5])
arr2 = np.array([[6, 7, 8], [9, 10, 11]])  # needs double brackets for 2D array

# NumPy functions are all lowercase:
zeros = np.zeros((2, 3)) # this prints a 2x3 array of zeros
ones = np.ones((3, 7)) # this prints a 3x7 array of ones
empty = np.empty((2, 3)) # this prints a 2x3 array with uninitialized values
arange = np.arange(0, 10, 2) # this prints numbers from 0 to 10 with a step of 2
linspace = np.linspace(0, 1, 5) # this prints 5 numbers evenly spaced between 0 and 1
random = np.random.rand(3, 3) # this prints a 3x3 array of random numbers between 0 and 1

print("arr1:\n", arr1)
print("arr2:\n", arr2)
print("zeros:\n", zeros)
print("ones:\n", ones)
print("empty:\n", empty)
print("arange:\n", arange)
print("linspace:\n", linspace)
print("random:\n", random)

# Example of array operations
a = np.array([1, 2, 3, 4])
b = np.array([10, 20, 30, 40])

print("a + b:\n", a + b)  # Element-wise addition
print("a * b:\n", a * b)  # Element-wise multiplication 
print("a ** b:\n", a ** b)  # Element-wise exponentiation

data = np.array([12, 15, 18, 22, 25, 28, 30, 35, 40, 45])
mean = np.mean(data)
median = np.median(data)
std_dev = np.std(data)
print("Mean:", mean)
print("Median:", median)
print("Standard Deviation:", std_dev)
