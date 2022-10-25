import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { ReservationsGateway } from './reservations.gateway';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RESERVATION_SERVICE', transport: Transport.RMQ,
        options: {
          urls: ['amqp://rabbitmq:5672'],
          queue: 'reservations',
          queueOptions: {
            durable: false
          },
        },
      }
    ]),
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsGateway],
})
export class ReservationsModule {}
