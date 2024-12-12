import { Module } from '@nestjs/common';
import { PicturesService } from './pictures.service';
import { PicturesController } from './pictures.controller';
import { Picture } from './entities/picture.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from 'src/authors/entities/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Picture, Author])],
  controllers: [PicturesController],
  providers: [PicturesService],
})
export class PicturesModule {}
