import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
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
        return this.userService.create(user);
        return user;
    }

    @Get(':id')
    findOne(id) {
        return this.userService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.userService.delete(id);
    }
}