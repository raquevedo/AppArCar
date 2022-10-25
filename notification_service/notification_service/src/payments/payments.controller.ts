import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { PaymentsGateway } from './payments.gateway';

@Controller('payments')
export class PaymentsController {
  constructor(private paymentsGateway: PaymentsGateway) {}

  // Checks RabbitMQ for any reservation events and notifies the respective client in the frontend
  @EventPattern()
  async paymentEvent(data: string) {
    this.paymentsGateway.notifyClient('payment_pending', data);
  }
}
