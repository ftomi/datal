import * as SQLite from "expo-sqlite";
import { BaseModel, types } from "expo-sqlite-orm";

export default class InventoryHead extends BaseModel {
  constructor(obj) {
    super(obj);
  }

  static get database() {
    return async () => SQLite.openDatabase("database.db");
  }

  static get tableName() {
    return "inventoryHeads";
  }

  static get columnMapping() {
    return {
      id: { type: types.TEXT },
      inventoryId: { type: types.INTEGER },
      storageId: { type: types.INTEGER },
      comment: { type: types.TEXT, not_null: true },
      closed: { type: types.BOOLEAN, default: false },
    };
  }
}
