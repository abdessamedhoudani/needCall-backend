import { IsEmail } from "class-validator";

export class CreateUserDto {

    readonly name: string;

    readonly password: string;

    @IsEmail()
    readonly email: string;
}