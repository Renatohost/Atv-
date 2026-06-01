import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Feather as Icon } from '@expo/vector-icons';
import AppList from './AppList';
import AppForm from './AppForm';

const Tabs = createBottomTabNavigator({
  screenOptions: {
    tabBarActiveTintColor: '#fff',
    tabBarActiveBackgroundColor: '#2980b9',
    tabBarInactiveTintColor: '#ccc',
    tabBarInactiveBackgroundColor: '#34495e',
    tabBarLabelStyle: { fontSize: 14, paddingBottom: 5 },
    tabBarIconStyle: { display: 'none' },
    headerShown: false,
  },
  screens: {
    AppList: {
      screen: AppList,
      options: {
        tabBarLabel: 'Lista',
        tabBarIcon: ({ color, size }) => <Icon name="list" color={color} size={size} />,
      },
    },
    AppForm: {
      screen: AppForm,
      options: {
        tabBarLabel: 'Cadastro',
        tabBarIcon: ({ color, size }) => <Icon name="plus-circle" color={color} size={size} />,
      },
    },
  },
});

const Navigation = createStaticNavigation(Tabs);

export default function AppTab() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
