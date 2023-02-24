import { PersonEntity } from "./Person.entity";
import { NotFoundError } from "../../utils/errors";
import { CreatePersonDto } from "./dto/CreatePerson.request.dto";
import { PERSON_NOT_FOUND } from "../../constants/error-messages";
import { UpdatePersonDto } from "./dto/UpdatePerson.request.dto";

export class PeopleRepository {
    private db

    constructor(db) {
        this.db = db.getRepository(PersonEntity);
    }

    async getAllPeople(limit: number, offset: number): Promise<Array<PersonEntity>> {
        return await this.db.createQueryBuilder('people').offset(offset).limit(limit).getMany();
    }

    async getPersonById(id: number): Promise<PersonEntity> {
        const person = await this.db.findOneBy({ id })

        if(!person) {
            throw new NotFoundError(PERSON_NOT_FOUND)
        }
        return person;
    }

    async createPerson(data: CreatePersonDto): Promise<PersonEntity> {
        const person = this.db.create(data)
        return await this.db.save(person)
    }

    async updatePerson(id: number, updatePersonDto: UpdatePersonDto): Promise<PersonEntity> {
        const person = await this.getPersonById(id);
        return await this.db.save({
            ...person,
            ...updatePersonDto,
        })
    }

    async deletePerson(id: number): Promise<void> {
        await this.getPersonById(id);
        await this.db.createQueryBuilder()
            .delete()
            .from(PersonEntity)
            .where("id = :id", { id })
            .execute();
    }
}