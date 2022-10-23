import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const microservice = await app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://guest:guest@rabbitmq:5672/'],
        queue: 'reservations',
        queueOptions: {
          durable: false
        },
      },
    }
  );

  const config = new DocumentBuilder()
    .setTitle('Geolocation Service')
    .setDescription('API interface to find address coordinates')
    .setVersion('1.0')
    .addTag('coordinates')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.startAllMicroservices();
  await app.listen(3004);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();