
import Storage from "../models/Storage";

const getStoragesFromDb = async () => {
  await setTimeout(() => { }, 2000);
  const data = await Storage.query();

  return data;
};


export { getStoragesFromDb };
