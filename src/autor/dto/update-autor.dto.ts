import { PartialType } from '@nestjs/mapped-types';

export class UpdateAutorDto  {
    id: number;
    nombre:string;
    pais: string;
}
