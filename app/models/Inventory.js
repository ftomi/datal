import * as SQLite from "expo-sqlite";
import { BaseModel, types } from "expo-sqlite-orm";

export default class Inventory extends BaseModel {
  constructor(obj) {
    super(obj);
  }

  static get database() {
    return async () => SQLite.openDatabase("database.db");
  }

  static get tableName() {
    return "inventories";
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      warehouseId: { type: types.INTEGER },
      type: { type: types.TEXT, not_null: true },
      code: { type: types.TEXT, not_null: true },
      name: { type: types.TEXT, not_null: true },
      startDate: { type: types.DATETIME, default: () => Date.now() },
      closeDate: { type: types.DATETIME },

    };
  }
}
