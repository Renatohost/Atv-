import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Platform } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import Database from './Database';

export default function AppItem(props) {
  async function handleEditPress() {
    const item = await Database.getItem(props.id);
    props.navigation.navigate('AppForm', item);
  }

  function handleDeletePress() {
    if (Platform.OS === 'web') {
      if (confirm('Tem certeza que deseja excluir este item?')) {
        Database.deleteItem(props.id)
          .then(() => props.navigation.navigate('AppList', { id: props.id }));
      }
    } else {
      Alert.alert(
        'Excluir Item',
        'Tem certeza que deseja excluir este item?',
        [
          { text: 'Não', onPress: () => console.log('Exclusão cancelada'), style: 'cancel' },
          {
            text: 'Sim',
            onPress: () => {
              Database.deleteItem(props.id)
                .then(() => props.navigation.navigate('AppList', { id: props.id }));
            },
          },
        ],
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textItem}>{props.descricao} ({props.quantidade})</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
          <Icon name="edit" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDeletePress}>
          <Icon name="trash-2" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 8,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textItem: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  editButton: {
    backgroundColor: '#2980b9',
    padding: 10,
    borderRadius: 8,
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 8,
  },
});
