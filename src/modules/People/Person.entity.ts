import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('people')
export class PersonEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    name: string

    @Column({ nullable: false })
    mass: string
}
