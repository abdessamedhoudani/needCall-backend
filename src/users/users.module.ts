import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { userProvider } from './user.provider';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService, ...userProvider],
  controllers: [UsersController],
  exports: [UsersService],
  imports: [
    DatabaseModule
  ],
})
export class UsersModule { }
