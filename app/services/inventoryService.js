
import Inventory from "../models/Inventory";
import InventoryHead from "../models/InventoryHead";
import InventoryItem from "../models/InventoryItem";

const getInventoriesFromDb = async () => {
  await setTimeout(() => { }, 2000);
  const data = await Inventory.query();

  return data;
};

const getInventoryByIdFromDb = async (payload) => {
  await setTimeout(() => { }, 2000);
  const data = await Inventory.findBy({ id_eq: payload.id });

  return data;
};

const getInventoryHeadsFromDb = async (payload) => {
  let data;
  console.warn({ payload });
  if (payload < 2) {
    data = await InventoryHead.query({
      where: {
        closed_eq: payload === 1
      }
    });
  } else {
    data = await InventoryHead.query();
  }
  console.warn({ data });
  return data;
};

const getInventoryDataByIdFromDb = async (payload) => {
  await setTimeout(() => { }, 2000);
  const data = await InventoryHead.findBy({ id_eq: payload.id });
  const items = await InventoryItems.query({
    where: {
      inventoryHeadId_eq: payload.id
    }
  });
  data.items = items;
  return data;
};

export { getInventoriesFromDb, getInventoryByIdFromDb, getInventoryHeadsFromDb, getInventoryDataByIdFromDb };
