import {  IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class SignInUserDto {

    @IsString()
  @IsNotEmpty()
  @MinLength(6)
    readonly password: string;

    @IsEmail()
    readonly email: string;
}