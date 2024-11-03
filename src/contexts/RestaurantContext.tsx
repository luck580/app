import React, { createContext, useContext, useState, useEffect } from 'react';
import { getRestaurants } from '../services/api';

const RestaurantContext = createContext(null);

export const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRestaurants();
  }, []);

  const loadRestaurants = async () => {
    try {
      const data = await getRestaurants();
      setRestaurants(data);
      if (data.length > 0) {
        setSelectedRestaurant(data[0].id);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des restaurants:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RestaurantContext.Provider 
      value={{
        restaurants,
        selectedRestaurant,
        setSelectedRestaurant,
        loading
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error('useRestaurant doit être utilisé dans un RestaurantProvider');
  }
  return context;
};