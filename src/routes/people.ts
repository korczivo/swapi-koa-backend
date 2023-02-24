import * as bodyParser from 'koa-bodyparser'
import * as Router from 'koa-router';

import { PeopleController } from "../modules/People/People.controller";
import { PeopleRepository } from "../modules/People/People.repository";
import { PeopleService } from "../modules/People/People.service";
import * as validators from '../modules/People/People.validators'
import * as middleware from '../middlewares'

import { AppDataSource } from "../database/data-source";

const prefix = '/api/people';

export const peopleRoute = (app) => {
    const router = new Router();
    const repo = new PeopleRepository(AppDataSource);
    const service = new PeopleService(repo);
    const controller = new PeopleController(service)

    router
        .get(prefix, controller.getAllPeople.bind(controller))
        .get(`${prefix}/:id`, controller.getPersonById.bind(controller))
        .post(prefix,
            bodyParser(),
            middleware.validate({ request: { body: validators.createPersonValidator } }),
            controller.createPerson.bind(controller))
        .patch(`${prefix}/:id`,
            bodyParser(),
            middleware.validate({ request: { body: validators.updatePersonValidator } }),
            controller.updatePerson.bind(controller))
        .delete(`${prefix}/:id`, controller.deletePerson.bind(controller))


    app.use(router.routes()).use(router.allowedMethods());
};