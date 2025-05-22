import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InternalApiService } from './internalApi.service';
import { InternalApiController } from './internalApi.controller';
import { UserModule } from './user/user.module';
import { InfraModule } from './infra/infra.module';
import { LlmModule } from './llm/llm.module';

@Module({
  controllers: [InternalApiController],
  providers: [InternalApiService],
  imports: [ConfigModule.forRoot({ isGlobal: true, }),
    UserModule, InfraModule, LlmModule],
})
export class InternalApiModule {}
