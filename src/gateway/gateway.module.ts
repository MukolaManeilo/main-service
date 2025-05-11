import { Module } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { GatewayController } from './gateway.controller';
import { TelegramModule } from './telegram/telegram.module';
import { UserModule } from './user/user.module';
import { InfraModule } from './infra/infra.module';
import { LlmModule } from './llm/llm.module';

@Module({
  controllers: [GatewayController],
  providers: [GatewayService],
  imports: [TelegramModule, UserModule, InfraModule, LlmModule],
})
export class GatewayModule {}
