import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ScanScreen from '../screens/ScanScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />) }} 
      />
      <Tab.Screen 
        name="Scan" 
        component={ScanScreen} 
        options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="camera" color={color} size={size} />) }} 
      />
    </Tab.Navigator>
  );
}
