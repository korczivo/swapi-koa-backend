import { PersonEntity } from "../Person.entity";

export class PersonResponseDto {
    public id: number
    public name: string
    public mass: string

    constructor(person: PersonEntity) {
        this.id = person.id
        this.name = person.name
        this.mass = person.mass
    }
}