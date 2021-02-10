import * as SecureStore from "expo-secure-store";

const urlKey = "store";

const storeStore = async (store) => {
  try {
    await SecureStore.setItemAsync(urlKey, store);
  } catch (error) {
    console.log("Error storing the store", error);
  }
};

const getStore = async () => {
  try {
    return await SecureStore.getItemAsync(urlKey);
  } catch (error) {
    console.log("Error getting the store", error);
  }
};

export default { getStore, storeStore };
