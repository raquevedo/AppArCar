import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ReservationsGateway } from './reservations.gateway';

@Controller('reservations')
export class ReservationsController {
  constructor(private reservationGateway: ReservationsGateway) {}

  // Checks RabbitMQ for any reservation events and notifies the respective client in the frontend
  @EventPattern()
  async sendReservation(data: string) {
    this.reservationGateway.notifyClient(data);
  }
}
