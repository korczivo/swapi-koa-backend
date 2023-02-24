import 'reflect-metadata';
import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as cors from '@koa/cors';
import * as RateLimit from 'koa2-ratelimit';
import pino from "pino";

import { peopleRoute } from "./routes/people";
import { errorHandler } from "./middlewares";
import { RATE_LIMIT_COUNT, RATE_LIMIT_INTERVAL } from "./constants/config";

const app = new Koa();
const logger = pino()

const limiter = RateLimit.RateLimit.middleware({
    interval: { min: RATE_LIMIT_INTERVAL },
    max: RATE_LIMIT_COUNT,
});

app.use(bodyParser());
app.use(cors())
app.use(errorHandler(logger))
app.use(limiter);

peopleRoute(app);

export default app;