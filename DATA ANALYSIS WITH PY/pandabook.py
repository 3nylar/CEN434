import pandas as pd

data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'David'],
    'Age': [24, 27, 22, 32],
    'City': ['New York', 'Los Angeles', 'Chicago', 'Houston'],
    'Salary': [70000, 80000, 65000, 90000]
}

df = pd.DataFrame(data)

df.head()
df.describe()
df.info()

df['Age']
df[['Name', 'Age']]
df[df['Age'] > 25]
df['Bonus'] = df['Salary'] * 0.1
df.groupby('City')['Salary'].mean()
df.fillna(0)
df.dropna()

df.to_csv('employees.csv', index=False)
df_from_csv = pd.read_csv('employees.csv')
print(df)

