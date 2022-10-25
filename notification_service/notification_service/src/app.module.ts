import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentsModule } from './payments/payments.module';
import { ReservationsModule } from './reservations/reservations.module';

@Module({
  imports: [
    ReservationsModule, PaymentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
