import {
  OnGatewayInit,
  WebSocketGateway,
  WsResponse,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect
} from "@nestjs/websockets";
import { Server } from "http";
import { ReservationsService } from "./reservations.service";
import { EventPattern } from '@nestjs/microservices';

@WebSocketGateway(80, {namespace: 'reservations'})
export class ReservationsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() wss: Server;

  // Creates service instance
  constructor(private reservationService: ReservationsService) {}
  
  // Once Web Socket initializes
  afterInit(): void {
    console.log('Web Socket initialized')
  }

  // When the client connects to the server
  handleConnection(client: any, ...args: any[]): WsResponse<string> {
    console.log('Client subscribed');

    // client.emit('subscribe_confirmation', 'Hello');
    return {event:'connection' , data:'Hello'};
  }

  handleDisconnect(client: any): void {
    console.log('Client disconnected');
  }

  @EventPattern()
  async sendReservation(data: string) {
    console.log(data);
    this.reservationService.notifyClient(data);
  }
}