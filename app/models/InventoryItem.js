import * as SQLite from "expo-sqlite";
import { BaseModel, types } from "expo-sqlite-orm";

export default class InventoryItem extends BaseModel {
  constructor(obj) {
    super(obj);
  }

  static get database() {
    return async () => SQLite.openDatabase("database.db");
  }

  static get tableName() {
    return "inventoryItems";
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      inventoryHeadId: { type: types.INTEGER },
      productId: { type: types.INTEGER },
      foundQuantity: { type: types.FLOAT },
    };
  }
}
