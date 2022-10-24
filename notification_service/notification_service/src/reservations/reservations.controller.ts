import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ReservationsGateway } from './reservations.gateway';

@Controller('reservations')
export class ReservationsController {
  constructor(private reservationGateway: ReservationsGateway) {}

  // Checks RabbitMQ for any created reservation events and notifies the respective client in the frontend
  @EventPattern('created')
  async sendReservation(data: string) {
    this.reservationGateway.notifyClient('reservation_created', data);
  }

  @EventPattern('accepted')
  async notifyAcceptedReservation(data: string) {
    this.reservationGateway.notifyClient('reservation_accepted', data);
  }

  @EventPattern('rejected')
  async notifyRejectedReservation(data: string) {
    this.reservationGateway.notifyClient('reservation_rejected', data);
  }
}
