import * as  SQLite from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'

export default class Note extends BaseModel {
    constructor(obj) {
        super(obj)
    }

    static get database() {
        return async () => SQLite.openDatabase('database.db')
    }

    static get tableName() {
        return 'notes'
    }

    static get columnMapping() {
        return {
            id: { type: types.INTEGER, primary_key: true },
            message: { type: types.TEXT, not_null: true },
            theme: { type: types.TEXT },
            isPrivate: { type: types.BOOLEAN, default: true },
            date: { type: types.DATETIME, default: () => Date.now() }
        }
    }
}
