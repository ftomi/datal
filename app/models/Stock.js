import * as  SQLite from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'

export default class Stock extends BaseModel {
    constructor(obj) {
        super(obj)
    }

    static get database() {
        return async () => SQLite.openDatabase('database.db')
    }

    static get tableName() {
        return 'stocks'
    }

    static get columnMapping() {
        return {
            id: { type: types.INTEGER, primary_key: true },
            storageId: { type: types.INTEGER, not_null: true },
            productId: { type: types.INTEGER, not_null: true },
            quantity: { type: types.INTEGER, not_null: true },
        }
    }
}
