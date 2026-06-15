import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/DashboardScreen';
import CreateCharacterScreen from '../screens/CreateCharacterScreen';
const Stack = createNativeStackNavigator();
export const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Dashboard" component={DashboardScreen} />
    <Stack.Screen name="Create" component={CreateCharacterScreen} />
  </Stack.Navigator>
);
