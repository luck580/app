import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, DataTable, Text } from 'react-native-paper';
import { getProductPerformance } from '../../services/api';

interface ProductStats {
  id: string;
  name: string;
  quantity: number;
  revenue: number;
  averagePrice: number;
}

export const ProductPerformance = ({ restaurantId, dateRange }) => {
  const [products, setProducts] = useState<ProductStats[]>([]);
  const [page, setPage] = useState(0);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    loadProductData();
  }, [restaurantId, dateRange]);

  const loadProductData = async () => {
    try {
      const data = await getProductPerformance(restaurantId, dateRange.start, dateRange.end);
      setProducts(data);
    } catch (error) {
      console.error('Erreur lors du chargement des performances produits:', error);
    }
  };

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, products.length);

  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title>Performance des Produits</Title>
        <ScrollView horizontal>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Produit</DataTable.Title>
              <DataTable.Title numeric>Quantité</DataTable.Title>
              <DataTable.Title numeric>CA</DataTable.Title>
              <DataTable.Title numeric>Prix Moyen</DataTable.Title>
            </DataTable.Header>

            {products.slice(from, to).map((product) => (
              <DataTable.Row key={product.id}>
                <DataTable.Cell>{product.name}</DataTable.Cell>
                <DataTable.Cell numeric>{product.quantity}</DataTable.Cell>
                <DataTable.Cell numeric>{product.revenue.toFixed(2)} €</DataTable.Cell>
                <DataTable.Cell numeric>{product.averagePrice.toFixed(2)} €</DataTable.Cell>
              </DataTable.Row>
            ))}

            <DataTable.Pagination
              page={page}
              numberOfPages={Math.ceil(products.length / itemsPerPage)}
              onPageChange={page => setPage(page)}
              label={`${from + 1}-${to} sur ${products.length}`}
            />
          </DataTable>
        </ScrollView>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
});