import * as mongoose from 'mongoose';
import { ConfigService } from '@nestjs/config';

export const databaseProviders = [
    {
      imports: [],
      provide: 'CONNECTION',
      useFactory: async (configService: ConfigService): Promise<typeof mongoose> => {
        const connectionString =  configService.get<string>('DATABASE_CONNECTION');
        const connection = await mongoose.connect(connectionString); 
        console.log(connection);
        return connection;
      },
      inject: [ConfigService]
    },
  ];