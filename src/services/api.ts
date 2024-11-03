import axios from 'axios';

const API_BASE_URL = 'https://votre-api.com';

export const getRestaurants = async () => {
  const response = await axios.get(`${API_BASE_URL}/restaurants`);
  return response.data;
};

export const getMenuItems = async (restaurantId: string) => {
  const response = await axios.get(`${API_BASE_URL}/restaurants/${restaurantId}/menu`);
  return response.data;
};

export const getSalesData = async (restaurantId: string, startDate: Date, endDate: Date) => {
  const response = await axios.get(`${API_BASE_URL}/sales`, {
    params: {
      restaurantId,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
    },
  });
  return response.data;
};

export const getSummaryData = async (restaurantId: string, startDate: Date, endDate: Date) => {
  const response = await axios.get(`${API_BASE_URL}/analytics/summary`, {
    params: {
      restaurantId,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
    },
  });
  return response.data;
};

export const getProductPerformance = async (restaurantId: string, startDate: Date, endDate: Date) => {
  const response = await axios.get(`${API_BASE_URL}/products/performance`, {
    params: {
      restaurantId,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
    },
  });
  return response.data;
};

export const createOrder = async (restaurantId: string, orderData: any) => {
  const response = await axios.post(`${API_BASE_URL}/orders`, {
    restaurantId,
    ...orderData,
  });
  return response.data;
};