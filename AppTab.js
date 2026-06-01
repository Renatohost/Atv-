import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import AppList from './AppList';
import AppForm from './AppForm';

export default function AppTab() {
  const [activeTab, setActiveTab] = useState('AppList');
  const [navigationParams, setNavigationParams] = useState({});

  function navigate(screen, params = {}) {
    setNavigationParams(params);
    setActiveTab(screen);
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {activeTab === 'AppList' ? (
          <AppList navigation={{ navigate }} route={navigationParams} />
        ) : (
          <AppForm navigation={{ navigate }} route={navigationParams} />
        )}
      </View>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'AppList' && styles.tabActive]}
          onPress={() => setActiveTab('AppList')}
        >
          <Icon
            name="list"
            size={22}
            color={activeTab === 'AppList' ? '#fff' : '#ccc'}
          />
          <Text
            style={[
              styles.tabLabel,
              activeTab === 'AppList' && styles.tabLabelActive,
            ]}
          >
            Lista
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'AppForm' && styles.tabActive]}
          onPress={() => {
            setNavigationParams({});
            setActiveTab('AppForm');
          }}
        >
          <Icon
            name="plus-circle"
            size={22}
            color={activeTab === 'AppForm' ? '#fff' : '#ccc'}
          />
          <Text
            style={[
              styles.tabLabel,
              activeTab === 'AppForm' && styles.tabLabelActive,
            ]}
          >
            Cadastro
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
  content: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#34495e',
    paddingBottom: 10,
    paddingTop: 5,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  tabActive: {
    backgroundColor: '#2980b9',
  },
  tabLabel: {
    fontSize: 12,
    color: '#ccc',
    marginTop: 2,
  },
  tabLabelActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
