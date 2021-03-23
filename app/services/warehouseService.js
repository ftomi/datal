
import Warehouse from "../models/Warehouse";

const getWarehousesFromDb = async () => {
  await setTimeout(() => { }, 2000);
  const data = await Warehouse.query();

  return data;
};


export { getWarehousesFromDb };
