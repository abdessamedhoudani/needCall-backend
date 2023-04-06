import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateUserDto } from "./dtos/createUser.dto";
import { UsersService } from "./users.service";


@Controller('users')
export class UserController {

    constructor(private userService: UsersService) { }

    @Get()
    find() {
        return this.userService.findAll();
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id) {
        return this.userService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id', ParseUUIDPipe) id: string, @Body() updateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    delete(@Param('id', ParseUUIDPipe) id: string) {
        return this.userService.delete(id);
    }
}