import { IsNotEmpty } from "class-validator";
import { Author } from "src/authors/entities/author.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Picture {    
    @PrimaryColumn({ unique: true, nullable: false  })
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @Column({ name: 'author_id', nullable: true })
    author_id: number;

    @Column()
    @IsNotEmpty()
    room_id: number;

    @Column()
    @IsNotEmpty()
    name: string;

    @Column()
    @IsNotEmpty()
    tecnique: string;

    @Column()
    @IsNotEmpty()
    category: string;

    @Column()
    @IsNotEmpty()
    description: string;

    @Column()
    @IsNotEmpty()
    year: number;

    @Column()
    @IsNotEmpty()
    link_image: string;

    @Column()
    @IsNotEmpty()
    link_qr: string;

    @Column()
    @IsNotEmpty()
    link_audio: string;

    @Column()
    @IsNotEmpty()
    pos_x: number;

    @Column()
    @IsNotEmpty()
    pos_y: number; 
    
    @ManyToOne(() => Author, (author) => author.id, { eager: true })
    @JoinColumn({ name: 'author_id'})
    author: Author;
}
