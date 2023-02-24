import * as supertest from 'supertest'
import * as Koa from 'koa';

import { CreatePersonDto } from "../../modules/People/dto/CreatePerson.request.dto";
import { PersonEntity } from "../../modules/People/Person.entity";
import {AppDataSource} from "../../database/data-source";
export async function init() {
    const app = new Koa();

    await AppDataSource.initialize()

    module.exports = app.listen(9000, () => {});
}

export async function createPersonTest(
    createPersonDto: CreatePersonDto
): Promise<PersonEntity> {
    const res = await supertest(init)
        .post('/api/v1/tasks')
        .send(createPersonDto)
        .expect(201)

    return res.body
}