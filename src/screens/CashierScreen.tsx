import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useRestaurant } from '../contexts/RestaurantContext';
import { OrderPanel } from '../components/cashier/OrderPanel';
import { MenuPanel } from '../components/cashier/MenuPanel';
import { RestaurantSelector } from '../components/RestaurantSelector';

export const CashierScreen = () => {
  const [currentOrder, setCurrentOrder] = useState([]);
  const { selectedRestaurant } = useRestaurant();

  const handleAddItem = (item) => {
    setCurrentOrder([...currentOrder, { ...item, id: Date.now() }]);
  };

  const handleRemoveItem = (itemId) => {
    setCurrentOrder(currentOrder.filter(item => item.id !== itemId));
  };

  const handleCompleteOrder = async () => {
    try {
      // Logique pour finaliser la commande
      setCurrentOrder([]);
    } catch (error) {
      console.error('Erreur lors de la finalisation de la commande:', error);
    }
  };

  return (
    <View style={styles.container}>
      <RestaurantSelector />
      <View style={styles.content}>
        <MenuPanel onAddItem={handleAddItem} />
        <OrderPanel 
          items={currentOrder}
          onRemoveItem={handleRemoveItem}
          onCompleteOrder={handleCompleteOrder}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
});