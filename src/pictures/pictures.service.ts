import { Injectable } from '@nestjs/common';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Picture } from './entities/picture.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PicturesService {
  constructor(
    @InjectRepository(Picture)
    private pictureRepository: Repository <Picture>,
  ){}

  async create(createPictureDto: CreatePictureDto) {
    const picture = this.pictureRepository.create(createPictureDto);
    return await this.pictureRepository.save(picture);
  }

  async findAll() {
    return await this.pictureRepository.find();
  }

  async findOne(id: number) {
    return await this.pictureRepository.findBy({ id });
  }

  async findByQuery(room_id?: number, author_id?: number) {
    const query = this.pictureRepository.createQueryBuilder('picture');
    if (room_id) {
      query.andWhere('picture.room_id = :room_id', { room_id });
    }
    if (author_id) {
      query.andWhere('picture.author_id = :author_id', { author_id });
    }
    return await query.getMany();
  }

  async update(id: number, updatePictureDto: UpdatePictureDto) {
    return `This action updates a #${id} picture`;
  }

  async remove(id: number) {
    return `This action removes a #${id} picture`;
  }
}
