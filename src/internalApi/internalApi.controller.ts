import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { InternalApiService } from './internalApi.service';



@Controller()
export class InternalApiController {
  constructor(private readonly internalApiService: InternalApiService) {}

  @GrpcMethod('rpcService', 'MessageToUser')
  async messageToUser(data: { userId: string; text: string }): Promise<{ status: string }> {
    console.log(`Send message to user ${data.userId}: ${data.text}`);
    await this.internalApiService.messageToUser(data.userId, data.text);
    return { status: 'OK' };
  }
}