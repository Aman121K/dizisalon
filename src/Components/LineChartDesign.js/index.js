import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';

const salesData = [
  { day: '10 AM', sales: 150, revenue: 1000 },
  { day: '12 Am', sales: 200, revenue: 1200 },
  { day: '03 pm', sales: 180, revenue: 1100 },
  { day: '06 pm', sales: 220, revenue: 1700 },
  // Add more data for previous days as needed
];

const LineChartDesign = () => {
  const labels = salesData.map(item => item.day);
  const sales = salesData.map(item => item.sales);
  const revenue = salesData.map(item => item.revenue);

  return (
    <View style={styles.container}>
      <Text style={{ alignSelf: 'flex-start' }}>Revenue</Text>
      <LineChart
        data={{
          labels,
          datasets: [
            {
              data: sales,
            },
          ],
        }}
        width={Dimensions.get('window').width - 20} // Adjust width as needed
        height={200}
        yAxisSuffix=""
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={styles.chart}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default LineChartDesign;
