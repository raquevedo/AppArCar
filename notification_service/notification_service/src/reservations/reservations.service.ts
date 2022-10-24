import { Injectable } from '@nestjs/common';
import { Reservation } from './rservations.interface';

@Injectable()
export class ReservationsService {
  private reservations: Reservation[] = []
}
