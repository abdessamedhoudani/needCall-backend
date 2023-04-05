import { Delete, Injectable, Param } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { UserEntity } from './user.entity';



@Injectable()
export class UsersService {
  private users: UserEntity[];

  constructor() {
    this.users = [
      {
        id: '1',
        username: 'john',
        password: 'changeme',
      },
      {
        id: '2',
        username: 'chris',
        password: 'secret',
      },
      {
        id: '3',
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  async create(createUserDto: CreateUserDto) {
    let user = new UserEntity();
    user = {
      ...createUserDto
    };
    this.users.push(user);
    return user;
  }

  async findOne(id: string): Promise<UserEntity | undefined> {
    return this.users.find(user => user.id === id);
  }

  async findAll(): Promise<UserEntity[]> {
    return this.users;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex(user => user.id === id);

    this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };

    return this.users[userIndex];
  }


  async delete(id: string) {
    const userIndex = this.users.findIndex(user => user.id === id);
    this.users.splice(userIndex, userIndex + 1);
  }
}
