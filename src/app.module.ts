import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true,
    envFilePath: !ENV ? '.env' : `envs/.env.${ENV}`,
  }),MongooseModule.forRoot('mongodb://127.0.0.1:27017/test'),AuthModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
