import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Text } from 'react-native-paper';
import { TrendingUp, TrendingDown, Users, ShoppingBag } from 'lucide-react';
import { getSummaryData } from '../../services/api';

interface SummaryData {
  totalSales: number;
  compareLastPeriod: number;
  totalOrders: number;
  averageOrderValue: number;
}

export const AnalyticsSummary = ({ restaurantId, dateRange }) => {
  const [summaryData, setSummaryData] = useState<SummaryData | null>(null);

  useEffect(() => {
    loadSummaryData();
  }, [restaurantId, dateRange]);

  const loadSummaryData = async () => {
    try {
      const data = await getSummaryData(restaurantId, dateRange.start, dateRange.end);
      setSummaryData(data);
    } catch (error) {
      console.error('Erreur lors du chargement du résumé:', error);
    }
  };

  if (!summaryData) return null;

  const isPositiveGrowth = summaryData.compareLastPeriod >= 0;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Chiffre d'affaires</Title>
          <Text style={styles.mainValue}>{summaryData.totalSales.toFixed(2)} €</Text>
          <View style={styles.growth}>
            {isPositiveGrowth ? (
              <TrendingUp color="green" size={20} />
            ) : (
              <TrendingDown color="red" size={20} />
            )}
            <Text style={[styles.growthText, { color: isPositiveGrowth ? 'green' : 'red' }]}>
              {Math.abs(summaryData.compareLastPeriod)}%
            </Text>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Commandes</Title>
          <Text style={styles.mainValue}>{summaryData.totalOrders}</Text>
          <View style={styles.iconContainer}>
            <ShoppingBag size={20} />
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Panier Moyen</Title>
          <Text style={styles.mainValue}>{summaryData.averageOrderValue.toFixed(2)} €</Text>
          <View style={styles.iconContainer}>
            <Users size={20} />
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  card: {
    flex: 1,
    minWidth: 150,
  },
  mainValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  growth: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  growthText: {
    fontSize: 16,
    fontWeight: '500',
  },
  iconContainer: {
    marginTop: 8,
  },
});