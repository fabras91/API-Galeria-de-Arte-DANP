import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Gallery {
    @PrimaryColumn()
    @IsNotEmpty()
    id: number;

    @Column()
    @IsNotEmpty()
    name: string;

    @Column()
    @IsNotEmpty()
    description: string;

    @Column()
    @IsNotEmpty()
    start_date: Date;

    @Column()
    @IsNotEmpty()    
    end_date: Date;

    @Column()
    @IsNotEmpty()    
    link_image: string;
}
