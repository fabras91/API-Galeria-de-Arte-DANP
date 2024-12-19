import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private authorsRepository: Repository<Author>,
  ){}

  async create(createAuthorDto: CreateAuthorDto) {
    const author = this.authorsRepository.create(createAuthorDto);
    return await this.authorsRepository.save(author);
  }

  async findAll() {
    return await this.authorsRepository.find();
  }

  async findOne(id: number) {
    return await this.authorsRepository.findBy({ id });
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return await this.authorsRepository.update(id, updateAuthorDto);
  }

  async remove(id: number) {
    return await this.authorsRepository.delete(id);
  }
}
