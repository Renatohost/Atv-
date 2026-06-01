import AsyncStorage from '@react-native-async-storage/async-storage';

const Database = {
  async saveItem(listItem, id = null) {
    const savedItems = await Database.getItems();
    if (id) {
      const index = savedItems.findIndex(item => item.id === id);
      if (index >= 0) {
        savedItems[index] = { id, ...listItem };
      }
    } else {
      listItem.id = Date.now();
      savedItems.push(listItem);
    }
    await AsyncStorage.setItem('items', JSON.stringify(savedItems));
  },

  async getItems() {
    const data = await AsyncStorage.getItem('items');
    return data ? JSON.parse(data) : [];
  },

  async getItem(id) {
    const items = await Database.getItems();
    return items.find(item => item.id === id);
  },

  async deleteItem(id) {
    const items = await Database.getItems();
    const index = items.findIndex(item => item.id === id);
    if (index >= 0) {
      items.splice(index, 1);
      await AsyncStorage.setItem('items', JSON.stringify(items));
    }
  },
};

export default Database;
