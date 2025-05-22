import { Module } from '@nestjs/common';
import { InfraService } from './infra.service';

@Module({
  controllers: [],
  providers: [InfraService],
})
export class InfraModule {}
