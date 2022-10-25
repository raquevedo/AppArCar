import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PaymentsGateway } from './payments.gateway';
import { PaymentsController } from './payments.controller';

@Module({
  imports: [ClientsModule.register([
    {
      name: 'RESERVATION_SERVICE', transport: Transport.RMQ,
      options: {
        urls: ['amqp://rabbitmq:5672'],
        queue: 'payments',
        queueOptions: {
          durable: false
        },
      },
    }]),
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService, PaymentsGateway]
})
export class PaymentsModule {}
