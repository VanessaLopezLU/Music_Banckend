import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AutorService } from './autor.service';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';

@Controller('autor')
export class AutorController {
  constructor(private readonly autorService: AutorService) {}

  
  @Post('/crear')
  async createAutor(@Body() CreateAutorDto: CreateAutorDto) {
    return await this.autorService.createAutor(CreateAutorDto);
  }


}
