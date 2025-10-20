import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
from sklearn.linear_model import LinearRegression

# Dados de exemplo
dados = {
    'mes': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    'parasitas': [25, 30, 35, 42, 48, 55, 62, 68, 75, 82, 88, 95]
}

df = pd.DataFrame(dados)

# Regressão linear
X = df[['mes']]
y = df['parasitas']

modelo = LinearRegression()
modelo.fit(X, y)

# Previsões
y_pred = modelo.predict(X)

# Gráfico
plt.figure(figsize=(10, 6))
plt.scatter(df['mes'], df['parasitas'], color='blue', label='Dados Reais')
plt.plot(df['mes'], y_pred, color='red', label='Linha de Regressão')
plt.xlabel('Meses')
plt.ylabel('Quantidade de Parasitas')
plt.title('Regressão Linear - Parasitas vs Meses')
plt.legend()
plt.grid(True)
plt.show()

print(f"Coeficiente angular: {modelo.coef_[0]:.2f}")
print(f"Intercepto: {modelo.intercept_:.2f}")