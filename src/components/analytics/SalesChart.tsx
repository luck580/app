import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { getSalesData } from '../../services/api';
import { Card, Title } from 'react-native-paper';

export const SalesChart = ({ restaurantId, dateRange }) => {
  const [salesData, setSalesData] = useState(null);

  useEffect(() => {
    loadSalesData();
  }, [restaurantId, dateRange]);

  const loadSalesData = async () => {
    try {
      const data = await getSalesData(restaurantId, dateRange.start, dateRange.end);
      setSalesData(data);
    } catch (error) {
      console.error('Erreur lors du chargement des données de vente:', error);
    }
  };

  if (!salesData) return null;

  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title>Évolution des Ventes</Title>
        <LineChart
          data={salesData}
          width={350}
          height={220}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 100, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={styles.chart}
        />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    elevation: 4,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});