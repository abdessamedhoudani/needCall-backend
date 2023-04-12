import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';


const ENV = process.env.NODE_ENV;

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true,
    envFilePath: !ENV ? '.env' : `envs/.env.${ENV}`,
  }),AuthModule,
  UsersModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
