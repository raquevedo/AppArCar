import { Controller, Get } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { Reservation } from './rservations.interface';
import { EventPattern } from '@nestjs/microservices';

@Controller('reservations')
export class ReservationsController {
  constructor(private reservationService: ReservationsService) {}

  @EventPattern()
  async sendReservation(data: string) {
    this.reservationService.notifyClient(data);
  }
}
