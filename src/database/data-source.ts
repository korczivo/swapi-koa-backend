import * as dotenv from 'dotenv'
import { DataSource } from "typeorm";

import { PersonEntity } from "../modules/People/Person.entity";

dotenv.config()

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'test',
    logging: true,
    synchronize: false,
    entities: [PersonEntity],
    subscribers: [],
    migrations: ['src/database/migrations/*.ts']
})