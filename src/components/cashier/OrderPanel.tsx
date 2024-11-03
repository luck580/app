import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Card, List, Text, Title } from 'react-native-paper';

export const OrderPanel = ({ items, onRemoveItem, onCompleteOrder }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title>Commande en cours</Title>
        <ScrollView style={styles.itemList}>
          {items.map((item) => (
            <List.Item
              key={item.id}
              title={item.name}
              description={`${item.price.toFixed(2)} €`}
              right={() => (
                <Button
                  icon="delete"
                  onPress={() => onRemoveItem(item.id)}
                  mode="text"
                />
              )}
            />
          ))}
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.total}>Total: {total.toFixed(2)} €</Text>
          <Button
            mode="contained"
            onPress={onCompleteOrder}
            disabled={items.length === 0}
          >
            Finaliser la commande
          </Button>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    maxWidth: 400,
  },
  itemList: {
    flex: 1,
    marginVertical: 8,
  },
  footer: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 16,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});