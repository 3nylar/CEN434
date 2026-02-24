# int (integer)
# float (floating point number)

# A = [12, 20, 28, 36, 44, 52, 60]
# a = A[0]
# n = len(A)
# d = A[1] - A[0]

# def formularM():
#     aritmeticP = (n / 2) * (2 * a + (n - 1) * d)
#     return aritmeticP
# print("The sum of the arithmetic progression is: ", formularM())
# def iterationM():
#     totalSum = 0
#     for i in A :
#         totalSum += i
#     return totalSum
# print("The sum of the arithmetic progression is: ", iterationM())


import numpy as np

# for A * I = Lam * I  (lam = 1)
A = np.eye(3)
I = np.eye(3)
lam = 1

AI = np.dot(A, I)
lam_I = lam * I

print("\nA * I:\n", AI)
print("\nlam * I = \n", lam_I)
