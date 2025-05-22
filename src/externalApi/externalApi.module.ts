import { Module } from '@nestjs/common';
import { ExternalApiService } from './externalApi.service';
import { ExternalApiController } from './externalApi.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [ExternalApiService],
  exports: [ExternalApiService],
  controllers: [ExternalApiController],
  imports: [ConfigModule.forRoot({ isGlobal: true, })]
})
export class ExternalApiModule {}
