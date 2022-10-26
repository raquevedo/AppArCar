import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const reservations = app.connectMicroservice<MicroserviceOptions>(
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
  const payments = app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://guest:guest@rabbitmq:5672/'],
        queue: 'payments',
        queueOptions: {
          durable: false
        },
      },
    }
  );
  await app.startAllMicroservices();
  await app.listen(3004);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();