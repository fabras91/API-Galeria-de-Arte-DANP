import { IsInt, IsNumber, IsPositive, IsString, IsUrl } from "class-validator";

export class CreateAuthorDto {
    @IsNumber()
    @IsInt()
    @IsPositive()
    id: number;

    @IsString()
    first_name: string;
  
    @IsString()
    last_name: string;
  
    @IsString()
    @IsUrl()
    link_image: string;
}
