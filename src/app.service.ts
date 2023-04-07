import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  @Inject(ConfigService)
  public config: ConfigService;

  public getHello(): string {
    const databaseName: string = this.config.get('DATABASE_CONNECTION');

    console.log({ databaseName });

    return 'Hello World!';
  }
}
