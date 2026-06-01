import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import Database from './Database';

export default function AppForm({ route, navigation }) {
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [id, setId] = useState(null);

  useEffect(() => {
    if (route.params) {
      const { id, descricao, quantidade } = route.params;
      setId(id);
      setDescricao(descricao);
      setQuantidade(String(quantidade));
    }
  }, [route]);

  async function handleButtonPress() {
    const listItem = { descricao, quantidade: parseInt(quantidade) };
    Database.saveItem(listItem, id)
      .then(response => navigation.navigate('AppList', listItem));
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Cadastro de Item</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={descricao}
          onChangeText={setDescricao}
          placeholder="Descrição do item"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          value={quantidade}
          onChangeText={setQuantidade}
          placeholder="Quantidade"
          placeholderTextColor="#999"
          keyboardType="numeric"
          clearButtonMode="while-editing"
        />
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <View style={styles.buttonContainer}>
            <Icon name="save" size={20} color="#fff" />
            <Text style={styles.buttonText}>Salvar</Text>
          </View>
        </TouchableOpacity>
      </View>
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
    marginBottom: 30,
  },
  inputContainer: {
    margin: 20,
    width: '90%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#34495e',
    alignSelf: 'stretch',
  },
  input: {
    marginBottom: 15,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#2980b9',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
});
