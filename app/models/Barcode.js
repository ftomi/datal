import * as  SQLite from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'

export default class Barcode extends BaseModel {
    constructor(obj) {
        super(obj)
    }

    static get database() {
        return async () => SQLite.openDatabase('database.db')
    }

    static get tableName() {
        return 'barcodes'
    }

    static get columnMapping() {
        return {
            id: { type: types.INTEGER, primary_key: true },
            productId: { type: types.INTEGER, not_null: true },
            code: { type: types.TEXT, not_null: true },
            default: { type: types.BOOLEAN, not_null: true }
        }
    }
}
