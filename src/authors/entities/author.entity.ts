import { IsNotEmpty, IsUrl } from 'class-validator';
import { Picture } from 'src/pictures/entities/picture.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Author {
  //@Column({ primary: true, unique: true, nullable: false }) si se quiere que no sea autogenerado
  @PrimaryColumn({ unique: true, nullable: false })
  @IsNotEmpty()
  id: number;

  @Column()
  @IsNotEmpty()
  first_name: string;

  @Column()
  @IsNotEmpty()
  last_name: string;

  @Column()
  @IsUrl()
  @IsNotEmpty()
  link_image: string;
    
  @OneToMany(() => Picture, (picture) => picture.author_id)
  picture: Picture[];
  
}