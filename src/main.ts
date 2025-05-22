import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { join } from 'path';



async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const configService = appContext.get(ConfigService);

  const port = configService.get<number>('port');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: `localhost:${port}`,
      package: ['external.api.v1', 'internal.api.v1'],
      protoPath: [
        join(__dirname, 'externalApi/externalApi.proto'),
        join(__dirname, 'internalApi/internalApi.proto'),
      ],
      loader: {
        includeDirs: [
          join(__dirname, 'externalApi'),
          join(__dirname, 'internalApi'),
        ],
      },
    },
  });

  await app.listen();
}
bootstrap();
