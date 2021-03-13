import * as  SQLite from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'

export default class Partner extends BaseModel {
    constructor(obj) {
        super(obj)
    }

    static get database() {
        return async () => SQLite.openDatabase('database.db')
    }

    static get tableName() {
        return 'partners'
    }

    static get columnMapping() {
        return {
            id: { type: types.INTEGER, primary_key: true },
            code: { type: types.TEXT, not_null: true },
            name: { type: types.TEXT, not_null: true },
            supplier: { type: types.BOOLEAN, not_null: true },
            customer: { type: types.BOOLEAN, not_null: true },
            productId: { type: types.INTEGER, not_null: true }
        }
    }
}
