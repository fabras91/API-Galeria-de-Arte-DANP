import { IsUrl } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Author {
  //@Column({ primary: true, unique: true, nullable: false }) si se quiere que no sea autogenerado
  @PrimaryColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  @IsUrl()
  link_image: string;
}