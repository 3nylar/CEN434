# Data types in python :
# 1. integer
# 2. floating point
# 3. strings

import numpy as np

A = np.array([[5,2,3], [4,5,6], [7,8,5]])
I = np.eye(3)
lambda_val = 5

left = A * I
right = lambda_val * I

print(A)
print(I)
print(left)
print(right)
