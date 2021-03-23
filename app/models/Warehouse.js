import * as SQLite from "expo-sqlite";
import { BaseModel, types } from "expo-sqlite-orm";

export default class Warehouse extends BaseModel {
  constructor(obj) {
    super(obj);
  }

  static get database() {
    return async () => SQLite.openDatabase("database.db");
  }

  static get tableName() {
    return "warehouses";
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      code: { type: types.TEXT, not_null: true },
      name: { type: types.TEXT, not_null: true },
      storeId: { type: types.INTEGER, not_null: true },
      defaultWarehouse: { type: types.BOOLEAN, not_null: true }
    }
  }
}
