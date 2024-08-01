import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateAutorDto {
  
  @IsString()
  @IsNotEmpty()
  @Matches(/^(?!\s*$).+/, { message: 'El nombre del autor no puede ser vacio' })
  @MinLength(1)
  @MaxLength(20)
  nombre: string;

  
  @IsString()
  @IsNotEmpty()
  @Matches(/^(?!\s*$).+/, { message: 'El pais no puede ser estar vacío' })
  @MinLength(1)
  @MaxLength(20)
  pais: string;

}
