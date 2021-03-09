import * as  SQLite from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'

export default class Product extends BaseModel {
    constructor(obj) {
        super(obj)
    }

    static get database() {
        return async () => SQLite.openDatabase('database.db')
    }

    static get tableName() {
        return 'products'
    }

    static get columnMapping() {
        return {
            id: { type: types.INTEGER, primary_key: true },
            code: { type: types.TEXT, not_null: true },
            name: { type: types.TEXT, not_null: true },
            unitOfMeasure: { type: types.TEXT, not_null: true },
            packagingUnit: { type: types.TEXT, not_null: true },
            vatPercentage: { type: types.NUMERIC, not_null: true },
            vatCode: { type: types.TEXT, not_null: true },
            status: { type: types.BOOLEAN, not_null: true },
            normalNetUnitPrice: { type: types.NUMERIC, not_null: true },
            normalGrossUnitPrice: { type: types.NUMERIC, not_null: true },
            onSaleNetUnitPrice: { type: types.NUMERIC, not_null: true },
            onSaleGrossUnitPrice: { type: types.NUMERIC, not_null: true },
            onSaleStartDate: { type: types.DATETIME, default: () => Date.now() },
            onSaleEndDate: { type: types.DATETIME, default: () => Date.now() },
            emptiesName: { type: types.TEXT },
            emptiesGrossUnitPrice: { type: types.NUMERIC, not_null: true }
        }
    }
}
