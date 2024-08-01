import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty, Matches, MinLength, MaxLength, isNumber, IsNumber } from 'class-validator';

export class UpdateAutorDto  {
    @IsNumber()
    @IsNotEmpty()
    readonly id: number;
    
    @IsString()
    @IsNotEmpty()
    @Matches(/^(?!\s*$).+/, { message: 'El Estado no puede ser estar vacío' })
    @MinLength(1)
    @MaxLength(20)
     readonly nombre:string;

    @IsString()
    @IsNotEmpty()
    @Matches(/^(?!\s*$).+/, { message: 'El Estado no puede ser estar vacío' })
    @MinLength(1)
    @MaxLength(20)
    readonly pais: string;
}
