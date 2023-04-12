import {  IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {

    readonly name: string;

    @IsString()
  @IsNotEmpty()
  @MinLength(6)
    readonly password: string;

    @IsEmail()
    readonly email: string;
}