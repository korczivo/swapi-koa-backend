import * as dotenv from 'dotenv';
import pino from "pino";

import app from './app';
import { AppDataSource } from "./database/data-source";

dotenv.config();

const logger = pino()

AppDataSource.initialize().then(async () => {
    logger.info('DB is running');
}).catch((err) => logger.info(err))

app.listen(process.env.APP_PORT || 8000, () => {
    logger.info(`Server is running on the port ${process.env.APP_PORT || 8000}`);
});
