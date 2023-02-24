import { PersonEntity } from "../Person.entity";

export class CreatePersonDto {
    public name: string
    public mass: string

    constructor(person: PersonEntity) {
        this.name = person.name
        this.mass = person.mass
    }
}