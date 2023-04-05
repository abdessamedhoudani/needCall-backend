import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dtos/createUser.dto";
import { UsersService } from "./users.service";
import { v4 as uuid } from "uuid";

@Controller('users')
export class UserController {

    constructor(private userService: UsersService) { }

    @Get()
    find() {
        return this.userService.findAll();
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        const user = {
            ...createUserDto,
            id: uuid()
        }
        return user;
    }
}