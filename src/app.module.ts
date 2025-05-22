import { Module } from '@nestjs/common';
import { InternalApiModule } from './internalApi/internalApi.module';
import { ExternalApiModule } from './externalApi/externalApi.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/app.configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true, }),
    InternalApiModule, ExternalApiModule
  ],
})
export class AppModule {}
