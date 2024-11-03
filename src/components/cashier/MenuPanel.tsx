import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Chip, Button, Searchbar } from 'react-native-paper';
import { useRestaurant } from '../../contexts/RestaurantContext';
import { getMenuItems } from '../../services/api';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
}

export const MenuPanel = ({ onAddItem }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { selectedRestaurant } = useRestaurant();

  useEffect(() => {
    loadMenuItems();
  }, [selectedRestaurant]);

  const loadMenuItems = async () => {
    try {
      const items = await getMenuItems(selectedRestaurant);
      setMenuItems(items);
      const uniqueCategories = [...new Set(items.map(item => item.category))];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error('Erreur lors du chargement du menu:', error);
    }
  };

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title>Menu</Title>
        <Searchbar
          placeholder="Rechercher un article"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchbar}
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
          <Chip
            selected={selectedCategory === 'all'}
            onPress={() => setSelectedCategory('all')}
            style={styles.categoryChip}
          >
            Tout
          </Chip>
          {categories.map(category => (
            <Chip
              key={category}
              selected={selectedCategory === category}
              onPress={() => setSelectedCategory(category)}
              style={styles.categoryChip}
            >
              {category}
            </Chip>
          ))}
        </ScrollView>
        <ScrollView style={styles.itemsContainer}>
          {filteredItems.map(item => (
            <Card key={item.id} style={styles.itemCard}>
              <Card.Content>
                <View style={styles.itemHeader}>
                  <Title>{item.name}</Title>
                  <Title>{item.price.toFixed(2)} €</Title>
                </View>
                <Button
                  mode="contained"
                  onPress={() => onAddItem(item)}
                  style={styles.addButton}
                >
                  Ajouter
                </Button>
              </Card.Content>
            </Card>
          ))}
        </ScrollView>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    margin: 8,
  },
  searchbar: {
    marginVertical: 8,
  },
  categoriesContainer: {
    flexGrow: 0,
    marginVertical: 8,
  },
  categoryChip: {
    marginRight: 8,
  },
  itemsContainer: {
    flex: 1,
  },
  itemCard: {
    marginVertical: 4,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  addButton: {
    marginTop: 8,
  },
});