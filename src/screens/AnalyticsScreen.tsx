import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { DateRangePicker } from '../components/analytics/DateRangePicker';
import { SalesChart } from '../components/analytics/SalesChart';
import { ProductPerformance } from '../components/analytics/ProductPerformance';
import { RestaurantSelector } from '../components/RestaurantSelector';
import { useRestaurant } from '../contexts/RestaurantContext';
import { AnalyticsSummary } from '../components/analytics/AnalyticsSummary';

export const AnalyticsScreen = () => {
  const [dateRange, setDateRange] = useState({ start: new Date(), end: new Date() });
  const { selectedRestaurant, restaurants } = useRestaurant();

  return (
    <ScrollView style={styles.container}>
      <RestaurantSelector />
      <View style={styles.content}>
        <DateRangePicker
          startDate={dateRange.start}
          endDate={dateRange.end}
          onDateChange={setDateRange}
        />
        <AnalyticsSummary 
          restaurantId={selectedRestaurant}
          dateRange={dateRange}
        />
        <SalesChart 
          restaurantId={selectedRestaurant}
          dateRange={dateRange}
        />
        <ProductPerformance 
          restaurantId={selectedRestaurant}
          dateRange={dateRange}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
});