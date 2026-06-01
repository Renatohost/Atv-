import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Database from './Database';
import AppItem from './AppItem';

export default function AppList({ route, navigation }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    Database.getItems().then(data => setItems(data));
  }, [route]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Lista de Compras</Text>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.itemsContainer}
      >
        {items.map(item => (
          <AppItem
            key={item.id}
            id={item.id}
            descricao={item.descricao}
            quantidade={item.quantidade}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
  itemsContainer: {
    paddingBottom: 30,
  },
});
