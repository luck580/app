import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import { CashierScreen } from './src/screens/CashierScreen';
import { AnalyticsScreen } from './src/screens/AnalyticsScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { RestaurantProvider } from './src/contexts/RestaurantContext';
import { theme } from './src/theme';
import { Icons } from './src/components/Icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Caisse':
              iconName = 'cash-register';
              break;
            case 'Analyses':
              iconName = 'chart-bar';
              break;
            case 'Paramètres':
              iconName = 'cog';
              break;
            default:
              iconName = 'circle';
          }
          return <Icons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Caisse" component={CashierScreen} />
      <Tab.Screen name="Analyses" component={AnalyticsScreen} />
      <Tab.Screen name="Paramètres" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
        <RestaurantProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen 
                name="Main" 
                component={MainTabs} 
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </RestaurantProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}