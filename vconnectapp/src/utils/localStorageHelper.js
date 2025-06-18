import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Save an item to AsyncStorage
 * @param {string} key
 * @param {any} value
 */
export const setItem = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error(`AsyncStorage setItem error for key "${key}":`, error);
  }
};

/**
 * Retrieve an item from AsyncStorage
 * @param {string} key
 * @returns {any | null} Parsed JSON or null if not found
 */
export const getItem = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error(`AsyncStorage getItem error for key "${key}":`, error);
    return null;
  }
};

/**
 * Remove an item from AsyncStorage
 * @param {string} key
 */
export const deleteItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(`AsyncStorage deleteItem error for key "${key}":`, error);
  }
};
