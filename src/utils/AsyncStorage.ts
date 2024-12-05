import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to set an item in AsyncStorage
export const asyncStore = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error(`Error setting item ${key}:`, error);
    throw error;
  }
};

// Function to update an item in AsyncStorage
export const asyncUpdate = async (
  key: string,
  value: string,
): Promise<void> => {
  try {
    await AsyncStorage.mergeItem(key, value);
  } catch (error) {
    console.error(`Error updating item ${key}:`, error);
    throw error;
  }
};

// Function to get an item from AsyncStorage
export const asyncGet = async (key: string): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.error(`Error getting item ${key}:`, error);
    throw error;
  }
};

// Function to remove an item from AsyncStorage
export const asyncRemove = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing item ${key}:`, error);
    throw error;
  }
};
