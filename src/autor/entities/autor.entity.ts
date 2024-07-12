import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Autor {
    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    pais: string;
}
