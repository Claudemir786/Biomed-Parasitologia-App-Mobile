import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function Analytics({navigation}){
    
  // Dados de exemplo (meses vs parasitas)
  const dados = {
    meses: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    parasitas: [25, 30, 35, 42, 48, 55, 62, 68, 75, 82, 88, 95]
  };

  // Cálculo da regressão linear simples
  const calcularRegressaoLinear = (x, y) => {
    const n = x.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;

    for (let i = 0; i < n; i++) {
      sumX += x[i];
      sumY += y[i];
      sumXY += x[i] * y[i];
      sumX2 += x[i] * x[i];
    }

    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    return { slope, intercept };
  };

  // Preparar dados para o gráfico
  const mesesNumericos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const { slope, intercept } = calcularRegressaoLinear(mesesNumericos, dados.parasitas);

  // Calcular valores da linha de regressão
  const linhaRegressao = mesesNumericos.map(mes => slope * mes + intercept);

  // Configurações do gráfico
  const chartData = {
    labels: dados.meses,
    datasets: [
      {
        data: dados.parasitas,
        color: (opacity = 1) => `rgba(34, 139, 34, ${opacity})`, // Verde para dados reais
        strokeWidth: 2,
      },
      {
        data: linhaRegressao,
        color: (opacity = 1) => `rgba(220, 20, 60, ${opacity})`, // Vermelho para linha de regressão
        strokeWidth: 3,
      },
    ],
    legend: ['Dados Reais', 'Linha de Regressão'],
  };

  const screenWidth = Dimensions.get('window').width - 40;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Análise de Parasitas</Text>
        <Text style={styles.subtitle}>Regressão Linear - Meses vs Quantidade</Text>

        {/* Gráfico */}
        <LineChart
          data={chartData}
          width={screenWidth}
          height={300}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '4',
              strokeWidth: '2',
              stroke: '#228B22',
            },
          }}
          bezier
          style={styles.chart}
        />

        {/* Estatísticas */}
        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>Estatísticas da Regressão:</Text>
          <View style={styles.statsRow}>
            <Text style={styles.statsLabel}>Coeficiente Angular:</Text>
            <Text style={styles.statsValue}>{slope.toFixed(2)}</Text>
          </View>
          <View style={styles.statsRow}>
            <Text style={styles.statsLabel}>Intercepto:</Text>
            <Text style={styles.statsValue}>{intercept.toFixed(2)}</Text>
          </View>
          <View style={styles.statsRow}>
            <Text style={styles.statsLabel}>Equação:</Text>
            <Text style={styles.statsValue}>
              y = {slope.toFixed(2)}x + {intercept.toFixed(2)}
            </Text>
          </View>
        </View>

        {/* Legenda */}
        <View style={styles.legend}>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#228B22' }]} />
            <Text style={styles.legendText}>Dados Reais</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#DC143C' }]} />
            <Text style={styles.legendText}>Linha de Regressão</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f7fb',
  },
  box: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 25,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Orbitron-Bold',
    fontSize: 24,
    fontWeight: '700',
    color: '#382c81ff',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  chart: {
    marginVertical: 15,
    borderRadius: 16,
  },
  statsContainer: {
    width: '100%',
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
  },
  statsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#382c81ff',
    marginBottom: 10,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  statsLabel: {
    fontSize: 14,
    color: '#555',
  },
  statsValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendText: {
    fontSize: 12,
    color: '#555',
  },
});