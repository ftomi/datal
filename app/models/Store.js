import * as  SQLite from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'

export default class Store extends BaseModel {
    constructor(obj) {
        super(obj)
    }

    static get database() {
        return async () => SQLite.openDatabase('database.db')
    }

    static get tableName() {
        return 'stores'
    }

    static get columnMapping() {
        return {
            id: { type: types.INTEGER, primary_key: true },
            code: { type: types.TEXT, not_null: true },
            name: { type: types.TEXT, not_null: true }
        }
    }
}
