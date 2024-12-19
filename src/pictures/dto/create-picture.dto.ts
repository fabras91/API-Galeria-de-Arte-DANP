import { IsInt, IsNumber, IsPositive, IsString } from "class-validator";

export class CreatePictureDto {
    @IsNumber()
    @IsInt()
    @IsPositive()
    id: number;

    @IsNumber()
    @IsInt()
    @IsPositive()
    author_id: number;

    @IsNumber()
    @IsInt()
    @IsPositive()
    room_id: number;

    @IsString()
    name: string;

    @IsString()
    tecnique: string;

    @IsString()
    category: string;

    @IsString()
    description: string;

    @IsNumber()
    @IsInt()
    @IsPositive()
    year: number;

    @IsString()
    link_image: string;

    @IsString()
    link_qr: string;

    @IsString()
    link_audio: string;

    @IsNumber()
    @IsInt()
    @IsPositive()
    pos_x: number;

    @IsNumber()
    @IsInt()
    @IsPositive()
    pos_y: number; 
    
}
