import { PeopleRepository } from "./People.repository";
import { PersonEntity } from "./Person.entity";
import { CreatePersonDto } from "./dto/CreatePerson.request.dto";
import { UpdatePersonDto } from "./dto/UpdatePerson.request.dto";

export class PeopleService {
    private peopleRepository: PeopleRepository;

    constructor(peopleRepository: PeopleRepository) {
        this.peopleRepository = peopleRepository
    }
    async getAllPeople (limit: number, offset: number): Promise<Array<PersonEntity>> {
        return await this.peopleRepository.getAllPeople(limit, offset);
    }

    async getPersonById (id: number): Promise<PersonEntity> {
        return await this.peopleRepository.getPersonById(id)
    }

    async createPerson (person: CreatePersonDto): Promise<PersonEntity> {
        return await this.peopleRepository.createPerson(person);
    }

    async updatePerson (id: number, person: UpdatePersonDto): Promise<PersonEntity> {
        return await this.peopleRepository.updatePerson(id, person);
    }

    async deletePerson (id: number): Promise<void> {
        return await this.peopleRepository.deletePerson(id);
    }
}