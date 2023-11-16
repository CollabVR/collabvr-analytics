import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { TcpOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const port = 3000;
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: 'analytics_service',
      port: port,
    },
  } as TcpOptions);

  await app.listen().then(() => console.log(`Running in port ${port}`));
}
bootstrap();
