import Inventory from "../models/Inventory";
import InventoryHead from "../models/InventoryHead";
import InventoryItem from "../models/InventoryItem";
import Storage from "../models/Storage";

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
  if (payload < 2) {
    data = await InventoryHead.query({
      where: {
        closed_eq: payload === 1,
      },
    });
  } else {
    data = await InventoryHead.query();
  }
  /*
   id: { type: types.TEXT },
      inventoryId: { type: types.INTEGER },
      storageId: { type: types.INTEGER },
      comment: { type: types.TEXT, not_null: true },
      closed: { type: types.BOOLEAN, default: false },
  */
  for (let row of data) {
    if (row && row.inventoryId) {
      const inv = await Inventory.findBy({ code_eq: row.inventoryId });
      row.inventory = inv;
    }

    if (row && row.storageId) {
      const stg = await Storage.findBy({ code_eq: row.storageId });
      row.storage = stg;
    }
  }
  return data;
};

const getInventoryDataByIdFromDb = async (payload) => {
  await setTimeout(() => { }, 2000);
  const data = await InventoryHead.findBy({ id_eq: payload.id });
  const items = await InventoryItems.query({
    where: {
      inventoryHeadId_eq: payload.id,
    },
  });
  data.items = items;
  return data;
};

const saveInventoryToDb = async ({ head, items }) => {
  // const { comment, code, inventory, storage } = head;
  try {
    await InventoryHead.create({
      id: head.code,
      comment: head.comment,
      inventoryId: head.inventory,
      storageId: head.storage,
      closed: true,
    });
    for (item of items) {
      const { productId, foundQuantity } = item;
      await InventoryItem.create({
        productId: item.productId,
        foundQuantity: item.foundQuantity,
        inventoryHeadId: head.code,
      });
    }
  } catch (ex) {
    console.log({ ex });
  }

};

export {
  getInventoriesFromDb,
  getInventoryByIdFromDb,
  getInventoryHeadsFromDb,
  getInventoryDataByIdFromDb,
  saveInventoryToDb,
};
