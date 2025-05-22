import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OpenAI } from 'openai';



@Injectable()
export class LlmService {
  private readonly openai: OpenAI;

  constructor(private readonly configService: ConfigService) {
    this.openai = new OpenAI({
      apiKey: this.configService.get<string>('OPENAI_API_KEY'),
    });
  }

  private async chat(prompt: string): Promise<string> {
    const response = await this.openai.chat.completions.create({
      model: 'gpt-4.1-mini',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt },
      ],
    });

    return response.choices[0]?.message?.content ?? 'No response';
  }

  async sendPrompt(chatId: string, prompt: string): Promise<void> {
    console.log(`Sending prompt for ${chatId}`);
  }
}
