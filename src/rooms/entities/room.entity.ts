import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Room {
    @PrimaryColumn()
    @IsNotEmpty()
    id : number;

    @Column()
    @IsNotEmpty()
    gallery_id : number;

    @Column()
    @IsNotEmpty()
    name : string;

    @Column()
    @IsNotEmpty()
    pos_top : number;
    
    @Column()
    @IsNotEmpty()
    pos_bottom : number;
    
    @Column()
    @IsNotEmpty()
    pos_left : number;
    
    @Column()
    @IsNotEmpty()
    pos_right : number;
}
