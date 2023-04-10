import { ConfigModule, ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    imports: [ConfigModule],
    provide: 'DATABASE_CONNECTION',
    useFactory: async (configService: ConfigService): Promise<typeof mongoose> =>
      await mongoose.connect(configService.get<string>('DATABASE_CONNECTION')),
      inject: [ConfigService]
  },
];