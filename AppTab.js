import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather as Icon } from '@expo/vector-icons';
import AppList from './AppList';
import AppForm from './AppForm';

const Tab = createBottomTabNavigator();

export default function AppTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#fff',
          tabBarActiveBackgroundColor: '#2980b9',
          tabBarInactiveTintColor: '#ccc',
          tabBarInactiveBackgroundColor: '#34495e',
          tabBarLabelStyle: { fontSize: 14, paddingBottom: 5 },
          tabBarIconStyle: { display: 'none' },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="AppList"
          component={AppList}
          options={{
            tabBarLabel: 'Lista',
            tabBarIcon: ({ color, size }) => <Icon name="list" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="AppForm"
          component={AppForm}
          options={{
            tabBarLabel: 'Cadastro',
            tabBarIcon: ({ color, size }) => <Icon name="plus-circle" color={color} size={size} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
