import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';



@Injectable()
export class UsersService {
  private readonly users: UserEntity[];

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

  async findOne(username: string): Promise<UserEntity | undefined> {
    return this.users.find(user => user.username === username);
  }
  async findAll(): Promise<UserEntity[]> {
    return this.users;
  }
}
