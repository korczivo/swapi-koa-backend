import { Context } from "koa";
import { StatusCodes } from "http-status-codes";

import { PeopleService } from "./People.service";
import { PersonEntity } from "./Person.entity";
import { PersonResponseDto } from "./dto/Person.response.dto";

export class PeopleController {
    private peopleService: PeopleService;

    constructor(peopleService: PeopleService) {
        this.peopleService = peopleService
    }

    async getAllPeople(ctx: Context) {
        const paramLimit = parseInt(ctx.query.limit, 10);
        const limit = (isNaN(ctx.query.limit) || paramLimit > 10) ? 10 : paramLimit
        const offset = isNaN(ctx.query.offset) ? 0 : parseInt(ctx.query.offset, 10)
        const people = await this.peopleService.getAllPeople(limit, offset)

        ctx.body = people.map((person: PersonEntity) => new PersonResponseDto(person))
        ctx.status = StatusCodes.OK
    }

    async getPersonById(ctx: Context) {
        const person = await this.peopleService.getPersonById(ctx.params.id)

        ctx.body = new PersonResponseDto(person)
        ctx.status = StatusCodes.OK
    }

    async createPerson(ctx: Context) {
        const person = await this.peopleService.createPerson(ctx.request.body)
        ctx.body = person
        ctx.status = StatusCodes.CREATED
    }

    async updatePerson(ctx: Context) {
        const person = await this.peopleService.updatePerson(ctx.params.id, ctx.request.body)
        ctx.body = person
        ctx.status = StatusCodes.CREATED
    }

    async deletePerson(ctx: Context) {
        await this.peopleService.deletePerson(ctx.params.id)
        ctx.status = StatusCodes.NO_CONTENT
    }
}