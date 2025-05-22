import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class InternalApiService {
  constructor(private configService: ConfigService) {}


  async messageToUser(userId: string, message: string): Promise<void> {
    const userServiceUrl = this.configService.get<string>('userServiceUrl');
    const userServicePort = this.configService.get<string>('userServicePort');
    const userApiKey = this.configService.get<string>('userApiKey');
    if (!userServicePort || !userServiceUrl) {
      throw new Error('userServicePort or userServiceUrl is not defined in configuration');
    }
    const userServicePath = `http://${userServiceUrl}:${userServicePort}/messageToUser`
    const response = await fetch(userServicePath, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': `${userApiKey}`,
      },
      body: JSON.stringify({ userId, message }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to send message: ${response.status} ${errorText}`);
    }
  }
}
