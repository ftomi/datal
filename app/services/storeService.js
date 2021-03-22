
import Store from "../models/Store";

const getStoresFromDb = async () => {
  await setTimeout(() => { }, 2000);
  const data = await Store.query();

  return data;
};


export { getStoresFromDb };
