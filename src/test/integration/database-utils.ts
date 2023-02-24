import {AppDataSource} from "../../database/data-source";

export async function truncateTables(tables: string[]) {
    const conn = await AppDataSource.initialize()

    for (const table of tables) {
        await conn.manager.query(`DELETE FROM ${table}`)
    }
}