import { Injectable } from '@nestjs/common';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { Repository } from 'typeorm/repository/Repository';
import { Autor } from './entities/autor.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(Autor)
    private autorRepository: Repository<Autor>,
  ){}
  async crear(createAutorDto: CreateAutorDto) {
     const autor =  this.autorRepository.create(createAutorDto);
        return  await this.autorRepository.save(autor);
  }

  findAll() {
    return `This action returns all autor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} autor`;
  }

  update(id: number, updateAutorDto: UpdateAutorDto) {
    return `This action updates a #${id} autor`;
  }

  remove(id: number) {
    return `This action removes a #${id} autor`;
  }
}
