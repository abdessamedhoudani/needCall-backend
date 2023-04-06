import { IsString, Length } from "class-validator";

export class CreateUserDto {
    @IsString()
    username: string;

    @IsString()
    @Length(6, 30, { message: 'Please enter a valid password!' })
    password: string;
}