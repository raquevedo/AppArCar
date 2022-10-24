import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ReservationsGateway } from './reservations.gateway';

@Controller('reservations')
export class ReservationsController {
  constructor(private reservationGateway: ReservationsGateway) {}

  // Checks RabbitMQ for any new reservation events and notifies the respective client in the frontend
  @EventPattern()
  async sendReservation(data: string) {
    const eventData = JSON.parse(data);
    if (eventData['status'] === 'created') {
      this.reservationGateway.notifyClient('reservation_created', data);
    }

    if (eventData['status'] === 'accepted') {
      this.reservationGateway.notifyClient('reservation_accepted', data);
    }

    if (eventData['status'] === 'cancelled') {
      this.reservationGateway.notifyClient('reservation_cancelled', data);
    }
  }
}
