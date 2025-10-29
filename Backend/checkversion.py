import numpy
import sklearn
import sys

print("--- Environment Verification ---")
print(f"Python Executable: {sys.executable}")
print(f"Scikit-learn version: {sklearn.__version__}")
print(f"NumPy version: {numpy.__version__}")
print("------------------------------")