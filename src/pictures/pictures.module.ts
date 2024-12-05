import { Module } from '@nestjs/common';
import { PicturesService } from './pictures.service';
import { PicturesController } from './pictures.controller';
import { Picture } from './entities/picture.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Picture])],
  controllers: [PicturesController],
  providers: [PicturesService],
})
export class PicturesModule {}
