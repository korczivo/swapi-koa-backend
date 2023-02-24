import * as chai from 'chai'
import * as supertest from 'supertest'
import { createPersonTest, init } from "../../common-utils";
import { truncateTables } from "../../database-utils";

describe('PeopleService', () => {
    beforeEach(async () => {
        await truncateTables(['people'])
        const person = {
            name: 'name',
            mass: '111',
        };
        await createPersonTest(person)
    })

    it('Should create a person and return 201', async () => {
        const person = {
            name: 'name',
            mass: '111',
        };

        const res = await supertest(init)
            .post('/api/people')
            .send(person)
            .expect(201)

        expect(res.header.location).toEqual(`/api/people/${res.body.id}`)
        expect(res.body).toEqual({
            name: 'han',
            mass: '100'
        })
    })

})